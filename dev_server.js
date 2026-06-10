const http = require('http');
const fs = require('fs');
const path = require('path');
const url = require('url');
const { spawn } = require('child_process');

const PORT = 3000;

const MIME_TYPES = {
  '.html': 'text/html',
  '.css': 'text/css',
  '.js': 'text/javascript',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.gif': 'image/gif',
  '.svg': 'image/svg+xml',
  '.ico': 'image/x-icon',
  '.json': 'application/json',
  '.xml': 'application/xml'
};

// Caches
let trendingCache = null;
let trendingCacheTime = 0;
const CACHE_DURATION = 15 * 60 * 1000; // 15 minutes

const server = http.createServer(async (req, res) => {
  // CORS Headers
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    res.writeHead(200);
    res.end();
    return;
  }

  const parsedUrl = url.parse(req.path || req.url, true);
  const pathname = parsedUrl.pathname;

  // Route API requests
  if (pathname === '/api/transcript') {
    const videoIdParam = parsedUrl.query.videoId;
    if (!videoIdParam) {
      res.writeHead(400, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify({ error: 'videoId parameter is required' }));
      return;
    }

    let vid = videoIdParam;
    const match = videoIdParam.match(/(?:v=|youtu\.be\/|shorts\/)([\w-]{11})/);
    if (match) {
      vid = match[1];
    }

    // Run Python subprocess locally to match production behavior and catch exact exceptions
    const pythonScript = `
import sys
import json
import re
from youtube_transcript_api import (
    YouTubeTranscriptApi,
    NoTranscriptFound,
    TranscriptsDisabled,
    VideoUnavailable,
    RequestBlocked,
    IpBlocked,
    YouTubeTranscriptApiException
)

try:
    api = YouTubeTranscriptApi()
    transcript_list = api.list("${vid}")
    try:
        transcript_obj = transcript_list.find_transcript(['en'])
    except NoTranscriptFound:
        transcript_obj = next(iter(transcript_list))
    transcript_data = transcript_obj.fetch()
    data = [{"text": entry.text, "start": entry.start, "duration": entry.duration} for entry in transcript_data]
    print(json.dumps({"transcript": data}))
except NoTranscriptFound as e:
    print(json.dumps({"error_type": "NoTranscriptFound", "error": str(e)}))
except TranscriptsDisabled as e:
    print(json.dumps({"error_type": "TranscriptsDisabled", "error": str(e)}))
except VideoUnavailable as e:
    print(json.dumps({"error_type": "VideoUnavailable", "error": str(e)}))
except RequestBlocked as e:
    print(json.dumps({"error_type": "RequestBlocked", "error": str(e)}))
except IpBlocked as e:
    print(json.dumps({"error_type": "IpBlocked", "error": str(e)}))
except YouTubeTranscriptApiException as e:
    print(json.dumps({"error_type": e.__class__.__name__, "error": str(e)}))
except Exception as e:
    print(json.dumps({"error_type": "InternalError", "error": str(e)}))
`;

    // Attempt spawning python first, then python3 as a fallback if python is not in path
    const runPython = (cmd) => {
      return new Promise((resolve, reject) => {
        const py = spawn(cmd, ['-c', pythonScript]);
        let stdout = '';
        let stderr = '';
        py.on('error', (err) => {
          reject(err);
        });
        py.stdout.on('data', (data) => { stdout += data.toString(); });
        py.stderr.on('data', (data) => { stderr += data.toString(); });
        py.on('close', (code) => {
          if (code !== 0) {
            reject(new Error(stderr || 'Python process exited with code ' + code));
            return;
          }
          try {
            resolve(JSON.parse(stdout.trim()));
          } catch (err) {
            reject(new Error('Failed to parse Python output: ' + err.message));
          }
        });
      });
    };

    try {
      // Try python command
      let result;
      try {
        result = await runPython('python');
      } catch (err) {
        // Fallback to python3
        result = await runPython('python3');
      }

      if (result.error) {
        res.writeHead(500, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ error: `[${result.error_type}] ${result.error}`, error_type: result.error_type }));
      } else {
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify(result));
      }
    } catch (err) {
      res.writeHead(500, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify({ error: err.message }));
    }
    return;
  } else if (pathname === '/api/trending') {
    // Check local cache
    const now = Date.now();
    if (trendingCache && (now - trendingCacheTime < CACHE_DURATION)) {
      res.writeHead(200, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify(trendingCache));
      return;
    }

    const pythonScript = `
import sys
import json
import urllib.request
import os
import re

api_key = os.environ.get("YOUTUBE_API_KEY")
if not api_key:
    print(json.dumps({"error": "YOUTUBE_API_KEY environment variable is not configured."}))
    sys.exit(0)

url = f"https://www.googleapis.com/youtube/v3/videos?part=snippet,statistics,contentDetails&chart=mostPopular&regionCode=IN&maxResults=50&key={api_key}"

try:
    req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0'})
    with urllib.request.urlopen(req, timeout=10) as response:
        res_body = response.read().decode('utf-8')
        raw_data = json.loads(res_body)
    
    videos = []
    for item in raw_data.get('items', []):
        snippet = item.get('snippet', {})
        stats = item.get('statistics', {})
        thumbnails = snippet.get('thumbnails', {})
        details = item.get('contentDetails', {})
        
        thumb_url = ""
        for size in ['maxres', 'standard', 'high', 'medium', 'default']:
            if size in thumbnails:
                thumb_url = thumbnails[size].get('url', '')
                break

        # Determine if it's a Short (<= 60 seconds)
        duration = details.get('duration', '')
        is_short = False
        if duration and 'H' not in duration:
            m = re.match(r'PT(?:(\d+)M)?(?:(\d+)S)?', duration)
            if m:
                minutes = int(m.group(1)) if m.group(1) else 0
                seconds = int(m.group(2)) if m.group(2) else 0
                if minutes == 0 or (minutes == 1 and seconds == 0):
                    is_short = True

        title = snippet.get('title', '')
        description = snippet.get('description', '')
        tags = snippet.get('tags', [])
        
        title_lower = title.lower()
        desc_lower = description.lower() if description else ""
        tags_lower = [t.lower() for t in tags] if tags else []
        text = title_lower + " " + desc_lower + " " + " ".join(tags_lower)
        
        score = 0
        
        # Prioritize YouTube Shorts
        if is_short:
            score += 5
        
        # Prioritize AI
        ai_keywords = ['ai', 'artificial intelligence', 'chatgpt', 'sora', 'gpt', 'midjourney', 'openai', 'deepseek', 'gemini', 'claude', 'llm', 'machine learning', 'robot', 'automation', 'technology', 'tech']
        if any(kw in text for kw in ai_keywords):
            score += 10
        
        # Prioritize Business
        biz_keywords = ['business', 'startup', 'finance', 'earn', 'side hustle', 'investing', 'stock', 'crypto', 'marketing', 'money', 'sales', 'passive income', 'rich', 'entrepreneur', 'ecommerce']
        if any(kw in text for kw in biz_keywords):
            score += 10
        
        # Prioritize Content Creation
        creator_keywords = ['creator', 'content creation', 'youtube', 'editing', 'filmmaking', 'viral', 'hook', 'scripting', 'grow', 'camera', 'subscriber', 'reels', 'tiktok', 'portfolio', 'podcast']
        if any(kw in text for kw in creator_keywords):
            score += 10
        
        # Prioritize Gaming
        gaming_keywords = ['gaming', 'gamer', 'gameplay', 'minecraft', 'free fire', 'pubg', 'gta', 'fortnite', 'esports', 'roblox', 'nintendo', 'playstation', 'xbox', 'cod']
        if any(kw in text for kw in gaming_keywords):
            score += 8

        videos.append({
            "videoId": item.get('id', ''),
            "title": title,
            "channelTitle": snippet.get('channelTitle', ''),
            "thumbnail": thumb_url,
            "viewCount": stats.get('viewCount', '0'),
            "publishedAt": snippet.get('publishedAt', ''),
            "isShort": is_short,
            "score": score
        })
        
    # Sort by score descending, then by views descending
    videos.sort(key=lambda x: (x['score'], int(x['viewCount']) if x['viewCount'].isdigit() else 0), reverse=True)
    
    # Filter out videos that have a score of 0, keeping only relevant content
    filtered_videos = [v for v in videos if v['score'] > 0]
    if len(filtered_videos) >= 8:
        videos = filtered_videos
        
    # Remove temporary score property
    for v in videos:
        v.pop('score', None)

    print(json.dumps({"videos": videos}))
except Exception as e:
    print(json.dumps({"error": f"Failed to fetch trending videos: {str(e)}"}))
`;

    const runPython = (cmd) => {
      return new Promise((resolve, reject) => {
        const py = spawn(cmd, ['-c', pythonScript]);
        let stdout = '';
        let stderr = '';
        py.on('error', (err) => {
          reject(err);
        });
        py.stdout.on('data', (data) => { stdout += data.toString(); });
        py.stderr.on('data', (data) => { stderr += data.toString(); });
        py.on('close', (code) => {
          if (code !== 0) {
            reject(new Error(stderr || 'Python process exited with code ' + code));
            return;
          }
          try {
            resolve(JSON.parse(stdout.trim()));
          } catch (err) {
            reject(new Error('Failed to parse Python output: ' + err.message));
          }
        });
      });
    };

    try {
      let result;
      try {
        result = await runPython('python');
      } catch (err) {
        result = await runPython('python3');
      }

      if (result.error) {
        res.writeHead(500, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify(result));
      } else {
        // Cache successful response
        trendingCache = result;
        trendingCacheTime = Date.now();

        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify(result));
      }
    } catch (err) {
      res.writeHead(500, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify({ error: err.message }));
    }
    return;
  }

  // Serve static files
  let filePath = path.join(__dirname, pathname === '/' ? 'index.html' : pathname);
  
  // Basic security check to prevent directory traversal
  if (!filePath.startsWith(__dirname)) {
    res.writeHead(403, { 'Content-Type': 'text/plain' });
    res.end('Forbidden');
    return;
  }

  fs.stat(filePath, (err, stats) => {
    if (err || !stats.isFile()) {
      res.writeHead(404, { 'Content-Type': 'text/plain' });
      res.end('File not found');
      return;
    }

    const ext = path.extname(filePath).toLowerCase();
    const contentType = MIME_TYPES[ext] || 'application/octet-stream';

    // Disable caching for development
    res.setHeader('Cache-Control', 'no-store, no-cache, must-revalidate');

    res.writeHead(200, { 'Content-Type': contentType });
    fs.createReadStream(filePath).pipe(res);
  });
});

server.listen(PORT, () => {
  console.log(`CreatorHelperTools development server running at http://localhost:${PORT}`);
  console.log('Press Ctrl+C to stop the server.');
});

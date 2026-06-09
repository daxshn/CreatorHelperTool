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
  console.log(`TubeTranscript development server running at http://localhost:${PORT}`);
  console.log('Press Ctrl+C to stop the server.');
});

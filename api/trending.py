from http.server import BaseHTTPRequestHandler
import urllib.parse
import urllib.request
import json
import os
import time
import re
import traceback

# In-memory cache for Vercel warm instances
cache_data = None
cache_time = 0
CACHE_DURATION = 900  # 15 minutes in seconds

class handler(BaseHTTPRequestHandler):
    def do_OPTIONS(self):
        self.send_response(200)
        self.send_header('Access-Control-Allow-Origin', '*')
        self.send_header('Access-Control-Allow-Methods', 'GET, OPTIONS')
        self.send_header('Access-Control-Allow-Headers', 'Content-Type, X-Requested-With, Accept')
        self.end_headers()

    def do_GET(self):
        global cache_data, cache_time

        # Check cache
        now = time.time()
        if cache_data is not None and (now - cache_time) < CACHE_DURATION:
            self.send_response(200)
            self.send_header('Content-Type', 'application/json')
            self.send_header('Access-Control-Allow-Origin', '*')
            self.end_headers()
            self.wfile.write(json.dumps(cache_data).encode('utf-8'))
            return

        # Fetch from environment
        api_key = os.environ.get("YOUTUBE_API_KEY")
        if not api_key:
            self.send_response(500)
            self.send_header('Content-Type', 'application/json')
            self.send_header('Access-Control-Allow-Origin', '*')
            self.end_headers()
            self.wfile.write(json.dumps({
                "error": "YOUTUBE_API_KEY environment variable is not configured."
            }).encode('utf-8'))
            return

        # Query YouTube API (including contentDetails to extract duration)
        url = f"https://www.googleapis.com/youtube/v3/videos?part=snippet,statistics,contentDetails&chart=mostPopular&regionCode=IN&maxResults=24&key={api_key}"
        
        try:
            req = urllib.request.Request(
                url, 
                headers={'User-Agent': 'Mozilla/5.0'}
            )
            with urllib.request.urlopen(req, timeout=10) as response:
                res_body = response.read().decode('utf-8')
                raw_data = json.loads(res_body)
            
            videos = []
            for item in raw_data.get('items', []):
                snippet = item.get('snippet', {})
                stats = item.get('statistics', {})
                thumbnails = snippet.get('thumbnails', {})
                details = item.get('contentDetails', {})
                
                # Get best thumbnail URL
                thumb_url = ""
                for size in ['maxres', 'standard', 'high', 'medium', 'default']:
                    if size in thumbnails:
                        thumb_url = thumbnails[size].get('url', '')
                        break

                # Determine if it's a Short (<= 60 seconds)
                duration = details.get('duration', '')
                is_short = False
                if duration and 'H' not in duration:
                    # ISO 8601 duration parser (PT#M#S)
                    m = re.match(r'PT(?:(\d+)M)?(?:(\d+)S)?', duration)
                    if m:
                        minutes = int(m.group(1)) if m.group(1) else 0
                        seconds = int(m.group(2)) if m.group(2) else 0
                        if minutes == 0 or (minutes == 1 and seconds == 0):
                            is_short = True

                videos.append({
                    "videoId": item.get('id', ''),
                    "title": snippet.get('title', ''),
                    "channelTitle": snippet.get('channelTitle', ''),
                    "thumbnail": thumb_url,
                    "viewCount": stats.get('viewCount', '0'),
                    "publishedAt": snippet.get('publishedAt', ''),
                    "isShort": is_short
                })

            # Update cache
            cache_data = {"videos": videos}
            cache_time = now

            self.send_response(200)
            self.send_header('Content-Type', 'application/json')
            self.send_header('Access-Control-Allow-Origin', '*')
            self.end_headers()
            self.wfile.write(json.dumps(cache_data).encode('utf-8'))

        except Exception as e:
            traceback.print_exc()
            self.send_response(500)
            self.send_header('Content-Type', 'application/json')
            self.send_header('Access-Control-Allow-Origin', '*')
            self.end_headers()
            self.wfile.write(json.dumps({
                "error": f"Failed to fetch trending videos: {str(e)}"
            }).encode('utf-8'))

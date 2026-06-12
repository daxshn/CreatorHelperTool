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

FALLBACK_VIDEOS = [
    {
        "videoId": "QdBZY2fkU-0",
        "title": "GTA 6 Official Trailer 1",
        "channelTitle": "Rockstar Games",
        "thumbnail": "https://i.ytimg.com/vi/QdBZY2fkU-0/hqdefault.jpg",
        "viewCount": "210000000",
        "publishedAt": "2023-12-05T00:00:00Z",
        "isShort": False
    },
    {
        "videoId": "c2Ow5vV041w",
        "title": "Introducing GPT-4o: OpenAI's New Flagship Model",
        "channelTitle": "OpenAI",
        "thumbnail": "https://i.ytimg.com/vi/c2Ow5vV041w/hqdefault.jpg",
        "viewCount": "12500000",
        "publishedAt": "2024-05-13T17:00:00Z",
        "isShort": False
    },
    {
        "videoId": "uVJ_G9JkI8s",
        "title": "Sora: AI Video Generator First Impressions!",
        "channelTitle": "Marques Brownlee",
        "thumbnail": "https://i.ytimg.com/vi/uVJ_G9JkI8s/hqdefault.jpg",
        "viewCount": "5200000",
        "publishedAt": "2024-02-15T18:00:00Z",
        "isShort": False
    },
    {
        "videoId": "i727z15P6D0",
        "title": "How I Built 10 AI Side Hustles in 30 Days (Passive Income)",
        "channelTitle": "Ali Abdaal",
        "thumbnail": "https://i.ytimg.com/vi/i727z15P6D0/hqdefault.jpg",
        "viewCount": "1800000",
        "publishedAt": "2024-04-10T12:00:00Z",
        "isShort": False
    },
    {
        "videoId": "qL3c_07_Efs",
        "title": "Elden Ring: Shadow of the Erdtree Official Gameplay Walkthrough",
        "channelTitle": "IGN",
        "thumbnail": "https://i.ytimg.com/vi/qL3c_07_Efs/hqdefault.jpg",
        "viewCount": "4500000",
        "publishedAt": "2024-06-18T10:00:00Z",
        "isShort": False
    },
    {
        "videoId": "zH8TzM1K7_8",
        "title": "AI Can Now Generate Full Movies! 🍿 #shorts",
        "channelTitle": "TechShorts",
        "thumbnail": "https://i.ytimg.com/vi/zH8TzM1K7_8/hqdefault.jpg",
        "viewCount": "14500000",
        "publishedAt": "2024-06-01T09:00:00Z",
        "isShort": True
    },
    {
        "videoId": "vC_w2K3U9_o",
        "title": "The Minecraft Speedrun World Record is Insane! 🎮 #shorts",
        "channelTitle": "SpeedRunner",
        "thumbnail": "https://i.ytimg.com/vi/vC_w2K3U9_o/hqdefault.jpg",
        "viewCount": "8700000",
        "publishedAt": "2024-05-28T16:00:00Z",
        "isShort": True
    },
    {
        "videoId": "xT8U9V_2_Ks",
        "title": "How to Grow on YouTube in 60 Seconds 🚀 #shorts",
        "channelTitle": "CreatorBoost",
        "thumbnail": "https://i.ytimg.com/vi/xT8U9V_2_Ks/hqdefault.jpg",
        "viewCount": "5600000",
        "publishedAt": "2024-06-10T11:00:00Z",
        "isShort": True
    }
]

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

        # Load .env file if it exists
        def load_dotenv():
            for path in ['.env', '../.env', '../../.env']:
                if os.path.exists(path):
                    try:
                        with open(path, 'r', encoding='utf-8') as f:
                            for line in f:
                                line = line.strip()
                                if line and not line.startswith('#') and '=' in line:
                                    k, v = line.split('=', 1)
                                    os.environ[k.strip()] = v.strip().strip("'").strip('"')
                    except Exception as e:
                        import sys
                        sys.stderr.write(f"[WARN] Failed to load env file {path}: {str(e)}\n")
                    break

        load_dotenv()

        # Fetch from environment (check all three variable names)
        keys = ["YOUTUBE_API_KEY", "VITE_YOUTUBE_API_KEY", "NEXT_PUBLIC_YOUTUBE_API_KEY"]
        api_key = None
        detected_key_name = None
        for k in keys:
            val = os.environ.get(k)
            if val:
                api_key = val
                detected_key_name = k
                break

        import sys
        sys.stderr.write(f"[DEBUG] YouTube API key check: {'Detected (' + detected_key_name + ')' if api_key else 'Not detected'}\n")

        is_placeholder = api_key and (api_key.startswith("YOUR_REAL_API_KEY") or api_key == "PLACEHOLDER")
        if not api_key or is_placeholder:
            sys.stderr.write("[WARN] YouTube API Key is missing or placeholder. Returning high-quality fallback trending videos.\n")
            self.send_response(200)
            self.send_header('Content-Type', 'application/json')
            self.send_header('Access-Control-Allow-Origin', '*')
            self.end_headers()
            self.wfile.write(json.dumps({"videos": FALLBACK_VIDEOS}).encode('utf-8'))
            return

        # Query YouTube API (including contentDetails to extract duration)
        url = f"https://www.googleapis.com/youtube/v3/videos?part=snippet,statistics,contentDetails&chart=mostPopular&regionCode=IN&maxResults=50&key={api_key}"
        
        masked_key = api_key[:6] + "..." + api_key[-4:] if len(api_key) > 10 else "..."
        masked_url = url.replace(api_key, masked_key)
        sys.stderr.write(f"[DEBUG] API request URL: {masked_url}\n")

        try:
            import urllib.error
            req = urllib.request.Request(
                url, 
                headers={'User-Agent': 'Mozilla/5.0'}
            )
            with urllib.request.urlopen(req, timeout=10) as response:
                res_body = response.read().decode('utf-8')
                raw_data = json.loads(res_body)
            sys.stderr.write(f"[DEBUG] API response status: 200 OK\n")
            
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

            # Update cache
            cache_data = {"videos": videos}
            cache_time = now

            self.send_response(200)
            self.send_header('Content-Type', 'application/json')
            self.send_header('Access-Control-Allow-Origin', '*')
            self.end_headers()
            self.wfile.write(json.dumps(cache_data).encode('utf-8'))

        except urllib.error.HTTPError as e:
            err_body = e.read().decode('utf-8') if e else ""
            sys.stderr.write(f"[DEBUG] API response status: {e.code}\n")
            sys.stderr.write(f"[DEBUG] API error message: {err_body}\n")
            sys.stderr.write("[WARN] YouTube API Request failed. Returning high-quality fallback trending videos.\n")
            self.send_response(200)
            self.send_header('Content-Type', 'application/json')
            self.send_header('Access-Control-Allow-Origin', '*')
            self.end_headers()
            self.wfile.write(json.dumps({"videos": FALLBACK_VIDEOS}).encode('utf-8'))
            return
        except Exception as e:
            traceback.print_exc()
            sys.stderr.write(f"[DEBUG] API Request Exception: {str(e)}\n")
            sys.stderr.write("[WARN] YouTube API Request raised an exception. Returning high-quality fallback trending videos.\n")
            self.send_response(200)
            self.send_header('Content-Type', 'application/json')
            self.send_header('Access-Control-Allow-Origin', '*')
            self.end_headers()
            self.wfile.write(json.dumps({"videos": FALLBACK_VIDEOS}).encode('utf-8'))
            return

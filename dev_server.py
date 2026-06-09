import http.server
import socketserver
import urllib.parse
import json
import os
import sys
import re
from youtube_transcript_api import YouTubeTranscriptApi

PORT = 3000

class MyHandler(http.server.SimpleHTTPRequestHandler):
    def end_headers(self):
        # Disable caching for development
        self.send_header('Cache-Control', 'no-store, no-cache, must-revalidate')
        super().end_headers()

    def do_GET(self):
        parsed_url = urllib.parse.urlparse(self.path)
        if parsed_url.path == '/api/transcript':
            # Handle API requests
            query_params = urllib.parse.parse_qs(parsed_url.query)
            video_id_param = query_params.get('videoId')
            
            if not video_id_param:
                self.send_response(400)
                self.send_header('Content-Type', 'application/json')
                self.send_header('Access-Control-Allow-Origin', '*')
                self.end_headers()
                self.wfile.write(json.dumps({"error": "videoId parameter is required"}).encode('utf-8'))
                return
            
            video_id = video_id_param[0]
            # Extract video ID from URL if full URL is passed
            m = re.search(r'(?:v=|youtu\.be\/|shorts\/)([\w-]{11})', video_id)
            if m:
                video_id = m.group(1)

            try:
                transcript = YouTubeTranscriptApi().fetch(video_id)
                data = [{"text": entry.text, "start": entry.start, "duration": entry.duration} for entry in transcript]
                
                self.send_response(200)
                self.send_header('Content-Type', 'application/json')
                self.send_header('Access-Control-Allow-Origin', '*')
                self.end_headers()
                self.wfile.write(json.dumps({"transcript": data}).encode('utf-8'))
            except Exception as e:
                self.send_response(500)
                self.send_header('Content-Type', 'application/json')
                self.send_header('Access-Control-Allow-Origin', '*')
                self.end_headers()
                self.wfile.write(json.dumps({"error": str(e)}).encode('utf-8'))
            return
        
        # Default behavior: serve static files
        return super().do_GET()

# Ensure we run in the directory where this script is located
script_dir = os.path.dirname(os.path.abspath(__file__))
os.chdir(script_dir)

# Allow port reuse to avoid 'port already in use' errors on quick restarts
socketserver.TCPServer.allow_reuse_address = True

with socketserver.TCPServer(("", PORT), MyHandler) as httpd:
    print(f"TubeTranscript development server running at http://localhost:{PORT}")
    print("Press Ctrl+C to stop the server.")
    try:
        httpd.serve_forever()
    except KeyboardInterrupt:
        print("\nStopping server.")
        sys.exit(0)

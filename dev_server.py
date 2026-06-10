import http.server
import socketserver
import urllib.parse
import os
import sys

PORT = 3000

class DevServerHandler(http.server.SimpleHTTPRequestHandler):
    def end_headers(self):
        # Prevent caching during development
        self.send_header('Cache-Control', 'no-store, no-cache, must-revalidate')
        super().end_headers()

    def do_OPTIONS(self):
        parsed_path = urllib.parse.urlsplit(self.path)
        if parsed_path.path == '/api/transcript':
            from api.transcript import handler as TranscriptHandler
            TranscriptHandler.do_OPTIONS(self)
        elif parsed_path.path == '/api/trending':
            from api.trending import handler as TrendingHandler
            TrendingHandler.do_OPTIONS(self)
        else:
            self.send_response(200)
            self.send_header('Access-Control-Allow-Origin', '*')
            self.send_header('Access-Control-Allow-Methods', 'GET, OPTIONS')
            self.send_header('Access-Control-Allow-Headers', 'Content-Type')
            self.end_headers()

    def do_GET(self):
        parsed_path = urllib.parse.urlsplit(self.path)
        if parsed_path.path == '/api/transcript':
            # Lazy import to avoid load overhead
            from api.transcript import handler as TranscriptHandler
            TranscriptHandler.do_GET(self)
        elif parsed_path.path == '/api/trending':
            from api.trending import handler as TrendingHandler
            TrendingHandler.do_GET(self)
        else:
            # Rewrite clean routes to index.html if file doesn't exist
            filepath = self.translate_path(parsed_path.path)
            if not os.path.exists(filepath) and not filepath.endswith('.html'):
                # Serve index.html
                self.path = '/index.html'
            super().do_GET()

if __name__ == '__main__':
    # Add project root to sys.path to resolve api imports correctly
    sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))

    print(f"Starting CreatorHelperTools local Python server at http://localhost:{PORT}")
    with socketserver.TCPServer(("", PORT), DevServerHandler) as httpd:
        try:
            httpd.serve_forever()
        except KeyboardInterrupt:
            print("\nShutting down server.")

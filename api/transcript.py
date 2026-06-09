from http.server import BaseHTTPRequestHandler
import urllib.parse
import json
import traceback
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

class handler(BaseHTTPRequestHandler):
    def do_OPTIONS(self):
        self.send_response(200)
        self.send_header('Access-Control-Allow-Origin', '*')
        self.send_header('Access-Control-Allow-Methods', 'GET, OPTIONS')
        self.send_header('Access-Control-Allow-Headers', 'Content-Type, X-Requested-With, Accept')
        self.end_headers()

    def do_GET(self):
        # Parse query params
        parsed_path = urllib.parse.urlsplit(self.path)
        query_params = dict(urllib.parse.parse_qsl(parsed_path.query))
        video_id = query_params.get('videoId')

        if not video_id:
            self.send_response(400)
            self.send_header('Content-Type', 'application/json')
            self.send_header('Access-Control-Allow-Origin', '*')
            self.end_headers()
            self.wfile.write(json.dumps({"error": "videoId parameter is required"}).encode('utf-8'))
            return

        # Extract video ID from URL if full URL is passed
        match = re.search(r'(?:v=|youtu\.be\/|shorts\/)([\w-]{11})', video_id)
        if match:
            vid = match.group(1)
        else:
            vid = video_id

        try:
            # Fetch transcript using the class instance
            api = YouTubeTranscriptApi()
            transcript_list = api.list(vid)
            
            # Find any available transcript (English first, otherwise fall back to any language)
            try:
                transcript_obj = transcript_list.find_transcript(['en'])
            except NoTranscriptFound:
                # Fallback to the first available transcript in the list
                transcript_obj = next(iter(transcript_list))
                
            transcript_data = transcript_obj.fetch()
            
            # Format to list of dicts with text, start, duration
            data = [{"text": entry.text, "start": entry.start, "duration": entry.duration} for entry in transcript_data]

            self.send_response(200)
            self.send_header('Content-Type', 'application/json')
            self.send_header('Access-Control-Allow-Origin', '*')
            self.end_headers()
            self.wfile.write(json.dumps({"transcript": data}).encode('utf-8'))

        except NoTranscriptFound as e:
            traceback.print_exc()
            self.send_error_response(404, "NoTranscriptFound", str(e))
        except TranscriptsDisabled as e:
            traceback.print_exc()
            self.send_error_response(403, "TranscriptsDisabled", str(e))
        except VideoUnavailable as e:
            traceback.print_exc()
            self.send_error_response(404, "VideoUnavailable", str(e))
        except RequestBlocked as e:
            traceback.print_exc()
            self.send_error_response(429, "RequestBlocked", str(e))
        except IpBlocked as e:
            traceback.print_exc()
            self.send_error_response(429, "IpBlocked", str(e))
        except YouTubeTranscriptApiException as e:
            traceback.print_exc()
            self.send_error_response(500, e.__class__.__name__, str(e))
        except Exception as e:
            traceback.print_exc()
            self.send_error_response(500, "InternalError", str(e))

    def send_error_response(self, status_code, error_type, message):
        self.send_response(status_code)
        self.send_header('Content-Type', 'application/json')
        self.send_header('Access-Control-Allow-Origin', '*')
        self.end_headers()
        self.wfile.write(json.dumps({
            "error_type": error_type,
            "error": f"[{error_type}] {message}"
        }).encode('utf-8'))

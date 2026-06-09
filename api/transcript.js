const { spawn } = require('child_process');
const { YoutubeTranscript } = require('youtube-transcript');

function getTranscriptFromPython(videoId) {
  return new Promise((resolve, reject) => {
    // We run python and import youtube_transcript_api
    const pythonScript = `
import sys
import json
from youtube_transcript_api import YouTubeTranscriptApi
try:
    transcript = YouTubeTranscriptApi().fetch("${videoId}")
    data = [{"text": entry.text, "start": entry.start, "duration": entry.duration} for entry in transcript]
    print(json.dumps(data))
except Exception as e:
    print(json.dumps({"error": str(e)}))
`;
    // Use the python3 or python command
    const py = spawn('python', ['-c', pythonScript]);
    let stdout = '';
    let stderr = '';
    py.stdout.on('data', (data) => { stdout += data.toString(); });
    py.stderr.on('data', (data) => { stderr += data.toString(); });
    py.on('close', (code) => {
      if (code !== 0) {
        reject(new Error(stderr || 'Python process exited with code ' + code));
        return;
      }
      try {
        const result = JSON.parse(stdout.trim());
        if (result.error) {
          reject(new Error(result.error));
        } else {
          resolve(result);
        }
      } catch (err) {
        reject(new Error('Failed to parse Python output: ' + err.message));
      }
    });
  });
}

module.exports = async (req, res) => {
  // CORS Headers
  res.setHeader('Access-Control-Allow-Credentials', true);
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'
  );

  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  const { videoId } = req.query;
  if (!videoId) {
    return res.status(400).json({ error: 'videoId parameter is required' });
  }

  let vid = videoId;
  const match = videoId.match(/(?:v=|youtu\.be\/|shorts\/)([\w-]{11})/);
  if (match) {
    vid = match[1];
  }

  // 1. Try python child process first
  try {
    const transcript = await getTranscriptFromPython(vid);
    return res.status(200).json({ transcript });
  } catch (pyError) {
    console.log('Python fetch failed, falling back to npm package:', pyError.message);
    // 2. Fallback to npm package youtube-transcript
    try {
      const transcript = await YoutubeTranscript.fetchTranscript(vid);
      return res.status(200).json({ transcript });
    } catch (nodeError) {
      return res.status(500).json({ 
        error: `Failed to fetch transcript. Python error: ${pyError.message}. Node error: ${nodeError.message}` 
      });
    }
  }
};

const { YoutubeTranscript } = require('youtube-transcript');

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

  try {
    const transcript = await YoutubeTranscript.fetchTranscript(vid);
    return res.status(200).json({ transcript });
  } catch (nodeError) {
    console.error('Fetch transcript failed:', nodeError.message);
    return res.status(500).json({ 
      error: `Failed to fetch YouTube transcript. Error: ${nodeError.message}` 
    });
  }
};

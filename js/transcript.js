// ── Transcript page logic ──

const params = new URLSearchParams(window.location.search);
const videoUrl = params.get('url') || '';

// Extract video ID from URL
function extractVideoId(url) {
  const m = url.match(/(?:v=|youtu\.be\/|shorts\/)([\w-]{11})/);
  return m ? m[1] : null;
}

const videoId = extractVideoId(videoUrl);

// DOM refs
const loadingBox    = document.getElementById('loading-box');
const errorBox      = document.getElementById('error-box');
const errorMsg      = document.getElementById('error-msg');
const transcriptBox = document.getElementById('transcript-box');
const transcriptOut = document.getElementById('transcript-output');
const wordCountEl   = document.getElementById('word-count');
const charCountEl   = document.getElementById('char-count');
const copyBtn       = document.getElementById('copy-btn');
const downloadBtn   = document.getElementById('download-btn');
const videoThumb    = document.getElementById('video-thumb');
const videoTitle    = document.getElementById('video-title-display');

// Toast
function showToast(msg) {
  let toast = document.getElementById('toast');
  if (!toast) {
    toast = document.createElement('div');
    toast.id = 'toast';
    toast.className = 'toast';
    toast.innerHTML = `✅ ${msg}`;
    document.body.appendChild(toast);
  } else {
    toast.innerHTML = `✅ ${msg}`;
  }
  toast.classList.add('show');
  setTimeout(() => toast.classList.remove('show'), 2600);
}

// Show video thumbnail + title if videoId found
if (videoId) {
  if (videoThumb) {
    videoThumb.src = `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`;
    videoThumb.style.display = 'block';
  }
  if (videoTitle) {
    videoTitle.textContent = `Video ID: ${videoId}`;
  }
}

// Word / char count
function updateStats(text) {
  const words = text.trim().split(/\s+/).filter(Boolean).length;
  const chars = text.length;
  if (wordCountEl) wordCountEl.querySelector('span').textContent = words.toLocaleString();
  if (charCountEl) charCountEl.querySelector('span').textContent = chars.toLocaleString();
}

// ── Fetch transcript via our API endpoint ──
async function fetchTranscript(vid) {
  showLoading(true);
  try {
    const apiUrl = `/api/transcript?videoId=${encodeURIComponent(vid)}`;
    const res = await fetch(apiUrl);
    if (!res.ok) {
      const errData = await res.json().catch(() => ({}));
      throw new Error(errData.error || `HTTP error! status: ${res.status}`);
    }
    const data = await res.json();
    if (!data || !data.transcript) {
      throw new Error('No transcript data returned');
    }
    const text = data.transcript.map(s => s.text).join(' ');
    displayTranscript(text);
    showLoading(false);
  } catch (err) {
    showError(`Could not fetch transcript: ${err.message}<br><br>Please make sure this video has captions enabled, or try a different video.`);
  }
}

function showLoading(on) {
  if (loadingBox) loadingBox.style.display = on ? 'block' : 'none';
  if (transcriptBox) transcriptBox.style.display = on ? 'none' : 'block';
  if (errorBox) errorBox.style.display = 'none';
}

function showError(msg) {
  if (loadingBox) loadingBox.style.display = 'none';
  if (transcriptBox) transcriptBox.style.display = 'none';
  if (errorBox) {
    errorBox.style.display = 'block';
    if (errorMsg) errorMsg.innerHTML = msg;
  }
}

function decodeHTMLEntities(text) {
  const txt = document.createElement('textarea');
  txt.innerHTML = text;
  return txt.value;
}

function displayTranscript(text) {
  const decodedText = decodeHTMLEntities(text);
  if (transcriptOut) transcriptOut.textContent = decodedText;
  updateStats(decodedText);
  if (transcriptBox) transcriptBox.style.display = 'block';
  if (loadingBox) loadingBox.style.display = 'none';

  // Save to sessionStorage for creator tools
  sessionStorage.setItem('current_transcript', decodedText);
  sessionStorage.setItem('current_video_title', videoTitle ? videoTitle.textContent : `YouTube Video (${videoId})`);
  sessionStorage.setItem('current_video_id', videoId || '');

  // Show Creator Tools CTA
  const repurposeCta = document.getElementById('repurpose-cta');
  if (repurposeCta) {
    repurposeCta.style.display = 'flex';
  }
}

// Copy
if (copyBtn) {
  copyBtn.addEventListener('click', () => {
    const text = transcriptOut ? transcriptOut.textContent : '';
    if (!text) return;
    navigator.clipboard.writeText(text).then(() => showToast('Transcript copied!'));
  });
}

// Download
if (downloadBtn) {
  downloadBtn.addEventListener('click', () => {
    const text = transcriptOut ? transcriptOut.textContent : '';
    if (!text) return;
    const blob = new Blob([text], { type: 'text/plain' });
    const a = document.createElement('a');
    a.href = URL.createObjectURL(blob);
    a.download = `transcript-${videoId || 'video'}.txt`;
    a.click();
    showToast('Transcript downloaded!');
  });
}

// ── Init ──
if (videoId) {
  fetchTranscript(videoId);
} else {
  showError('No valid YouTube URL provided. <a href="index.html" style="color:#FFB800;font-weight:600;">← Go back</a>');
}

// Hamburger (shared)
const hamburger = document.getElementById('hamburger');
const mobileMenu = document.getElementById('mobile-menu');
if (hamburger && mobileMenu) {
  hamburger.addEventListener('click', () => mobileMenu.classList.toggle('open'));
}

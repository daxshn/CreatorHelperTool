// ── Mobile hamburger ──
const hamburger = document.getElementById('hamburger');
const mobileMenu = document.getElementById('mobile-menu');
if (hamburger && mobileMenu) {
  hamburger.addEventListener('click', () => {
    mobileMenu.classList.toggle('open');
  });
}

// ── URL form submit ──
const urlForm = document.getElementById('url-form');
if (urlForm) {
  urlForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const url = document.getElementById('yt-url').value.trim();
    if (!url) return;
    if (!isValidYouTubeUrl(url)) {
      alert('Please enter a valid YouTube URL.');
      return;
    }
    const encoded = encodeURIComponent(url);
    window.location.href = `transcript.html?url=${encoded}`;
  });
}

function isValidYouTubeUrl(url) {
  return /(?:youtube\.com\/(?:watch\?v=|shorts\/)|youtu\.be\/)[\w-]{11}/.test(url);
}

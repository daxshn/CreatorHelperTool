/* ── CreatorHelperTools Shared Theme JS ── */
(function () {
  const BODY = document.body || document.documentElement;
  const HTML = document.documentElement;
  const STORAGE_KEY = 'tt-theme';

  // Apply theme immediately to <html> to avoid flash, body gets class after DOM loads
  function applyTheme(dark) {
    if (dark) {
      HTML.classList.add('dark');
      // Also add dark-mode to body if available
      if (document.body) document.body.classList.add('dark-mode');
    } else {
      HTML.classList.remove('dark');
      if (document.body) document.body.classList.remove('dark-mode');
    }
  }

  // Apply immediately for html (prevents flash)
  const saved = localStorage.getItem(STORAGE_KEY);
  if (saved === 'dark') HTML.classList.add('dark');

  function setTheme(dark) {
    applyTheme(dark);
    localStorage.setItem(STORAGE_KEY, dark ? 'dark' : 'light');
    updateToggleIcons();
  }

  function updateToggleIcons() {
    const isDark = HTML.classList.contains('dark');
    document.querySelectorAll('.theme-toggle').forEach(function(btn) {
      btn.setAttribute('aria-label', isDark ? 'Switch to light mode' : 'Switch to dark mode');
      btn.innerHTML = isDark
        ? `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/></svg>`
        : `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>`;
    });
  }

  document.addEventListener('DOMContentLoaded', function () {
    // Sync body class once DOM is ready
    if (saved === 'dark') document.body.classList.add('dark-mode');

    updateToggleIcons();

    // Wire up all theme toggle buttons
    document.querySelectorAll('.theme-toggle').forEach(function(btn) {
      btn.addEventListener('click', function () {
        setTheme(!HTML.classList.contains('dark'));
      });
    });

    // Hamburger mobile menu
    const hamburger = document.getElementById('hamburger');
    const mobileMenu = document.getElementById('mobile-menu');
    if (hamburger && mobileMenu) {
      hamburger.addEventListener('click', function () {
        mobileMenu.classList.toggle('open');
      });
    }

    // Reading progress bar (for doc pages)
    const bar = document.getElementById('reading-progress');
    if (bar) {
      window.addEventListener('scroll', function () {
        const doc = document.documentElement;
        const total = doc.scrollHeight - doc.clientHeight;
        const pct = total > 0 ? (doc.scrollTop / total) * 100 : 0;
        bar.style.width = pct + '%';
      });
    }
  });
})();

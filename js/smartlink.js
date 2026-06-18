(function() {
  const SMARTLINK_URL = 'https://criminaldissolved.com/ewq3kk9rm?key=b660f225034c6cf5b390de3e6c508f36';
  
  document.addEventListener('click', function(event) {
    let target = event.target.closest('button, a, [role="button"]');
    if (!target) return;
    
    const id = (target.id || '').toLowerCase();
    const className = (target.className || '').toLowerCase();
    const text = (target.textContent || '').toLowerCase();
    
    let matches = false;
    
    // 1. Download buttons
    if (id.includes('download') || className.includes('download') || text.includes('download')) {
      matches = true;
    }
    // 2. Generate Transcript buttons / Generate buttons
    else if (text.includes('generate transcript') || id.includes('generate-transcript') || className.includes('generate-transcript') || id === 'generate-btn' || id === 'btn-generate-image') {
      matches = true;
    }
    // 3. Copy Transcript/Result buttons
    else if (id.includes('copy') || className.includes('copy') || text.includes('copy')) {
      matches = true;
    }
    // 4. AI Tool action buttons (like trend generators, repurposing, etc.)
    else if (className.includes('trend-gen-btn') || text.includes('generate') || id.includes('repurpose') || id.includes('summarize')) {
      matches = true;
    }
    
    if (matches) {
      try {
        window.open(SMARTLINK_URL, '_blank');
      } catch (err) {
        console.error('Smartlink redirect failed:', err);
      }
    }
  }, true); // capturing phase to trigger before inline or bubble handlers
})();

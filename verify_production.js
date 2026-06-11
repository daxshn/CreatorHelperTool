const https = require('https');

function fetchUrl(url) {
  return new Promise((resolve, reject) => {
    https.get(url, (res) => {
      let data = '';
      res.on('data', (chunk) => data += chunk);
      res.on('end', () => resolve(data));
    }).on('error', reject);
  });
}

async function verify() {
  console.log("--- PROD CHECK ---");
  const html = await fetchUrl('https://creatorhelpertool.vercel.app/?tool=ai-image-generator');
  
  const toolsJsUrl = 'https://creatorhelpertool.vercel.app/js/tools.js?v=' + Date.now();
  const toolsJs = await fetchUrl(toolsJsUrl);
  
  const containsOldPlaceholder = toolsJs.includes("Generated Variant 1") || toolsJs.includes("GENERATED VARIANT");
  console.log("Contains 'Generated Variant' in live tools.js:", containsOldPlaceholder);

  const containsDebugPanel = toolsJs.includes("debug-prompt");
  console.log("Contains 'debug-prompt' references in live tools.js:", containsDebugPanel);

  const containsDebugPanelInHtml = html.includes("image-debug-panel");
  console.log("Contains 'image-debug-panel' in live HTML:", containsDebugPanelInHtml);
}

verify().catch(console.error);

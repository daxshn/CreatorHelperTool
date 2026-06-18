/**
 * replace-cdn.js
 * Replaces Tailwind CDN script tags with local compiled CSS across all HTML files.
 * Also adds defer to non-critical scripts and fixes script ordering.
 */
const fs = require('fs');
const path = require('path');
const { glob } = require('fs');

const ROOT = __dirname;

// Find all HTML files recursively
function findHtmlFiles(dir, results = []) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (const e of entries) {
    if (e.name === 'node_modules' || e.name === '.git') continue;
    const fullPath = path.join(dir, e.name);
    if (e.isDirectory()) findHtmlFiles(fullPath, results);
    else if (e.name.endsWith('.html')) results.push(fullPath);
  }
  return results;
}

const files = findHtmlFiles(ROOT);
console.log(`Found ${files.length} HTML files`);

let modified = 0;

files.forEach(filePath => {
  let content = fs.readFileSync(filePath, 'utf8');
  const original = content;

  // Compute relative path from this file to css/tailwind.min.css
  const relDir = path.relative(path.dirname(filePath), ROOT);
  const cssPath = relDir ? relDir.replace(/\\/g, '/') + '/css/tailwind.min.css' : 'css/tailwind.min.css';

  // 1. Replace Tailwind CDN + config block with local CSS link
  content = content.replace(
    /<script src="https:\/\/cdn\.tailwindcss\.com"><\/script>\s*<script>\s*tailwind\.config\s*=\s*\{[^}]*\}\s*<\/script>/gs,
    `<link rel="stylesheet" href="${cssPath}" />`
  );

  // Also handle single-line tailwind config version used in tool pages
  content = content.replace(
    /<script src="https:\/\/cdn\.tailwindcss\.com"><\/script>\s*<script>tailwind\.config=\{darkMode:'class'\}<\/script>/g,
    `<link rel="stylesheet" href="${cssPath}" />`
  );

  // 2. Add defer to jszip (non-critical, only needed for bulk zip upload)
  content = content.replace(
    /<script src="https:\/\/cdnjs\.cloudflare\.com\/ajax\/libs\/jszip\/[^"]*\/jszip\.min\.js"><\/script>/g,
    '<script defer src="https://cdnjs.cloudflare.com/ajax/libs/jszip/3.10.1/jszip.min.js"></script>'
  );

  // 3. Add defer to smartlink.js and tools.js (non-critical)
  content = content.replace(
    /<script src="([./]*js\/smartlink\.js)"><\/script>/g,
    '<script defer src="$1"></script>'
  );
  content = content.replace(
    /<script src="([./]*js\/tools\.js)"><\/script>/g,
    '<script defer src="$1"></script>'
  );
  content = content.replace(
    /<script src="([./]*js\/transcript\.js)"><\/script>/g,
    '<script defer src="$1"></script>'
  );
  content = content.replace(
    /<script src="([./]*js\/main\.js)"><\/script>/g,
    '<script defer src="$1"></script>'
  );

  // 4. theme.js must stay synchronous (prevents FOUC), but add a comment
  // Leave theme.js as-is intentionally

  if (content !== original) {
    fs.writeFileSync(filePath, content, 'utf8');
    const rel = path.relative(ROOT, filePath);
    console.log(`  ✅ Updated: ${rel}`);
    modified++;
  } else {
    const rel = path.relative(ROOT, filePath);
    console.log(`  ─  No change: ${rel}`);
  }
});

console.log(`\nDone. Modified ${modified}/${files.length} files.`);

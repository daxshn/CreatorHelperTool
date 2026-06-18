/**
 * fix-pages-cdn.js — Fix Tailwind CDN in pages/ subdirectory HTML files
 */
const fs = require('fs');
const path = require('path');

const ROOT = path.join(__dirname, '..');
const pagesDir = path.join(ROOT, 'pages');

function findHtmlFiles(dir, results = []) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (const e of entries) {
    const full = path.join(dir, e.name);
    if (e.isDirectory()) findHtmlFiles(full, results);
    else if (e.name.endsWith('.html')) results.push(full);
  }
  return results;
}

const files = findHtmlFiles(pagesDir);
console.log(`Found ${files.length} pages/ HTML files`);

files.forEach(filePath => {
  let content = fs.readFileSync(filePath, 'utf8');
  const original = content;
  const depth = path.relative(ROOT, path.dirname(filePath)).split(path.sep).length;
  const prefix = '../'.repeat(depth);

  // Replace CDN tailwind with local CSS
  content = content.replace(
    /<script src="https:\/\/cdn\.tailwindcss\.com"><\/script>\s*/g,
    `<link rel="stylesheet" href="${prefix}css/tailwind.min.css" />\n  `
  );
  // Remove dangling tailwind config scripts
  content = content.replace(/<script>\s*tailwind\.config\s*=\s*\{[^}]*\}\s*<\/script>\s*/g, '');

  if (content !== original) {
    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`  ✅ ${path.relative(ROOT, filePath)}`);
  } else {
    console.log(`  ─  ${path.relative(ROOT, filePath)} (no change)`);
  }
});

console.log('Done.');

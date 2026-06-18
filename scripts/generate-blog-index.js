const fs = require('fs');
const path = require('path');

const BLOGS_DIR = path.join(__dirname, '..', 'pages', 'blog');
const indexFile = path.join(BLOGS_DIR, 'index.html');

// Read all HTML files in pages/blog (except index.html)
const files = fs.readdirSync(BLOGS_DIR)
  .filter(f => f.endsWith('.html') && f !== 'index.html');

// Sort files to keep output stable
files.sort();

const listItems = files.map(file => {
  const name = file.replace('.html', '').split('-').map(w => w[0].toUpperCase() + w.slice(1)).join(' ');
  return `      <li class="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-xl p-4 hover:border-pink-500 transition">
        <a href="${file}" class="block">
          <h3 class="font-bold text-gray-900 dark:text-white text-sm hover:text-pink-500 transition mb-1">${name}</h3>
          <p class="text-xs text-gray-500 dark:text-gray-400">Read our comprehensive growth guide and optimization strategies.</p>
        </a>
      </li>`;
}).join('\n');

const html = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Creator Growth Blog — CreatorHelperTools</title>
  <meta name="description" content="Discover professional guides on YouTube SEO, viral hooks, title formulas, and faceless channel automation strategies." />
  <meta name="robots" content="index, follow" />
  <link rel="canonical" href="https://creatorhelpertool.vercel.app/pages/blog/index.html" />
  <script src="../../js/theme.js"></script>
  <link rel="stylesheet" href="../../css/tailwind.min.css" />
  <link rel="stylesheet" href="../../css/style.css" />
</head>
<body>
<nav aria-label="Breadcrumb" class="max-w-7xl mx-auto px-4 pt-20 pb-2">
  <ol class="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
    <li><a href="../../index.html" class="hover:text-pink-500 transition">Home</a></li>
    <li class="text-gray-300 dark:text-gray-600">/</li>
    <li class="text-gray-800 dark:text-white font-semibold">Blog</li>
  </ol>
</nav>

<div class="page-hero" style="padding:3rem 1.5rem;">
  <div class="page-hero-inner">
    <h1>Creator Growth Blog</h1>
    <p>Proven strategies to scale your YouTube channel, write viral hooks, and automate faceless accounts.</p>
  </div>
</div>

<main class="max-w-3xl mx-auto px-4 py-12">
  <ul class="grid grid-cols-1 md:grid-cols-2 gap-6">
${listItems}
  </ul>
</main>

<footer role="contentinfo">
  <div class="footer-inner">
    <div class="footer-brand"><a href="../../index.html" class="logo">📄 Creator<span style="color:#FFB800;">HelperTools</span></a><p>Free AI-powered creator toolkit. No login required.</p></div>
    <div class="footer-col"><h5>Company</h5><ul><li><a href="../about.html">About</a></li><li><a href="../contact.html">Contact</a></li><li><a href="../privacy.html">Privacy</a></li><li><a href="../terms.html">Terms</a></li></ul></div>
  </div>
  <div class="footer-bottom"><span>© 2026 CreatorHelperTools.</span><span>Not affiliated with YouTube or Google.</span></div>
</footer>
</body>
</html>`;

fs.writeFileSync(indexFile, html, 'utf8');
console.log('Successfully updated blog index page.');

const fs = require('fs');
const path = require('path');

const ROOT = path.join(__dirname, '..');
const SITEMAP_PATH = path.join(ROOT, 'sitemap.xml');
const BLOGS_DIR = path.join(ROOT, 'pages', 'blog');
const TOOLS_DIR = path.join(ROOT, 'tools');

// Get all tools URLs
const toolsFiles = fs.existsSync(TOOLS_DIR) 
  ? fs.readdirSync(TOOLS_DIR).filter(f => f.endsWith('.html')) 
  : [];
toolsFiles.sort();

// Get all blog URLs
const blogFiles = fs.existsSync(BLOGS_DIR)
  ? fs.readdirSync(BLOGS_DIR).filter(f => f.endsWith('.html'))
  : [];
blogFiles.sort();

const date = '2026-06-18';

let sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <!-- Homepage -->
  <url>
    <loc>https://creatorhelpertool.vercel.app/</loc>
    <lastmod>${date}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>1.0</priority>
  </url>
`;

// Add tools
toolsFiles.forEach(file => {
  sitemap += `  <url>
    <loc>https://creatorhelpertool.vercel.app/tools/${file}</loc>
    <lastmod>${date}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.9</priority>
  </url>\n`;
});

// Add blog index
sitemap += `  <url>
    <loc>https://creatorhelpertool.vercel.app/pages/blog/index.html</loc>
    <lastmod>${date}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>\n`;

// Add blog posts
blogFiles.forEach(file => {
  if (file === 'index.html') return;
  sitemap += `  <url>
    <loc>https://creatorhelpertool.vercel.app/pages/blog/${file}</loc>
    <lastmod>${date}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.7</priority>
  </url>\n`;
});

// Add static pages
const staticPages = ['about.html', 'contact.html', 'privacy.html', 'terms.html'];
staticPages.forEach(file => {
  sitemap += `  <url>
    <loc>https://creatorhelpertool.vercel.app/pages/${file}</loc>
    <lastmod>${date}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.5</priority>
  </url>\n`;
});

sitemap += `</urlset>`;

fs.writeFileSync(SITEMAP_PATH, sitemap, 'utf8');
console.log(`Successfully generated sitemap.xml with ${toolsFiles.length + blogFiles.length + staticPages.length + 1} URLs.`);

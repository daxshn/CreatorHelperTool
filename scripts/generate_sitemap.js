const fs = require('fs');
const path = require('path');

const DOMAIN = 'https://creatorhelpertool.vercel.app';

function getHtmlFiles(dir, fileList = []) {
  const files = fs.readdirSync(dir);
  files.forEach(file => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    if (stat.isDirectory()) {
      if (file !== 'node_modules' && file !== '.git' && file !== 'images' && file !== 'scripts') {
        getHtmlFiles(filePath, fileList);
      }
    } else if (file.endsWith('.html') && !file.startsWith('google') && file !== 'transcript.html') {
      fileList.push(filePath);
    }
  });
  return fileList;
}

const rootDir = path.resolve(__dirname, '..');
const htmlFiles = getHtmlFiles(rootDir);

let sitemapContent = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
`;

htmlFiles.forEach(file => {
  const relativePath = path.relative(rootDir, file).replace(/\\/g, '/');
  let urlPath = relativePath;
  let priority = '0.5';
  let changefreq = 'monthly';

  if (urlPath === 'index.html') {
    urlPath = '';
    priority = '1.0';
    changefreq = 'weekly';
  } else if (urlPath.includes('about.html')) {
    priority = '0.7';
    changefreq = 'monthly';
  } else if (urlPath.includes('contact.html')) {
    priority = '0.6';
    changefreq = 'monthly';
  } else if (urlPath.includes('privacy.html') || urlPath.includes('terms.html')) {
    priority = '0.3';
    changefreq = 'yearly';
  }

  sitemapContent += `  <url>
    <loc>${DOMAIN}/${urlPath}</loc>
    <changefreq>${changefreq}</changefreq>
    <priority>${priority}</priority>
  </url>
`;
});

sitemapContent += `</urlset>\n`;

fs.writeFileSync(path.join(rootDir, 'sitemap.xml'), sitemapContent);
console.log('sitemap.xml successfully generated!');

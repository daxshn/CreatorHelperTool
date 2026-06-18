const fs = require('fs');
const path = require('path');

const ROOT = path.join(__dirname, '..');
const toolsDir = path.join(ROOT, 'tools');
const blogDir = path.join(ROOT, 'pages', 'blog');
const pagesDir = path.join(ROOT, 'pages');

// Find all HTML files
function findHtmlFiles(dir, results = []) {
  if (!fs.existsSync(dir)) return results;
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (const e of entries) {
    const full = path.join(dir, e.name);
    if (e.isDirectory()) {
      if (e.name !== 'node_modules' && e.name !== '.git') {
        findHtmlFiles(full, results);
      }
    } else if (e.name.endsWith('.html')) {
      results.push(full);
    }
  }
  return results;
}

// Get all files
const allFiles = [
  path.join(ROOT, 'index.html'),
  path.join(ROOT, 'transcript.html'),
  ...findHtmlFiles(pagesDir),
  ...findHtmlFiles(toolsDir)
].filter(f => fs.existsSync(f));

console.log(`Starting local static crawl on ${allFiles.length} HTML files...`);

const report = {
  pages: [],
  brokenLinks: [],
  duplicateTitles: {},
  duplicateDescriptions: {},
  duplicateH1s: {},
  orphanPages: [],
  sitemapErrors: [],
  jsonLdValidationErrors: [],
  canonicalMismatches: []
};

// Map file paths to their URLs
function fileToUrl(filePath) {
  const rel = path.relative(ROOT, filePath).replace(/\\/g, '/');
  if (rel === 'index.html') return 'https://creatorhelpertool.vercel.app/';
  return `https://creatorhelpertool.vercel.app/${rel}`;
}

const urlToFilePath = {};
const allUrls = new Set();
allFiles.forEach(f => {
  const url = fileToUrl(f);
  urlToFilePath[url] = f;
  allUrls.add(url);
});

// Track link graph for orphan check
const inboundLinks = {};
allUrls.forEach(url => {
  inboundLinks[url] = [];
});

// Process each file
allFiles.forEach(file => {
  const content = fs.readFileSync(file, 'utf8');
  const currentUrl = fileToUrl(file);
  const relDir = path.dirname(file);

  // 1. Title
  const titleMatch = content.match(/<title>([^<]*)<\/title>/i);
  const title = titleMatch ? titleMatch[1].trim() : '';

  // 2. Meta Description
  const descMatch = content.match(/<meta\s+name="description"\s+content="([^"]*)"/i) || 
                    content.match(/<meta\s+content="([^"]*)"\s+name="description"/i);
  const description = descMatch ? descMatch[1].trim() : '';

  // 3. H1
  const h1Match = content.match(/<h1[^>]*>([^<]*)<\/h1>/i);
  const h1 = h1Match ? h1Match[1].trim().replace(/\s+/g, ' ') : '';

  // 4. Canonical
  const canonicalMatch = content.match(/<link\s+rel="canonical"\s+href="([^"]*)"/i);
  const canonical = canonicalMatch ? canonicalMatch[1].trim() : '';

  // 5. JSON-LD Structured Data
  const jsonLdRegex = /<script\s+type="application\/ld\+json">([\s\S]*?)<\/script>/gi;
  let match;
  while ((match = jsonLdRegex.exec(content)) !== null) {
    const rawJson = match[1].trim();
    try {
      JSON.parse(rawJson);
    } catch (e) {
      report.jsonLdValidationErrors.push({
        file: path.relative(ROOT, file),
        error: e.message,
        snippet: rawJson.slice(0, 100) + '...'
      });
    }
  }

  // 6. Check canonical
  const expectedCanonical = currentUrl;
  // Account for index.html vs root slash
  const cleanCanonical = canonical.replace(/\/index\.html$/, '/');
  const cleanExpected = expectedCanonical.replace(/\/index\.html$/, '/');
  if (cleanCanonical !== cleanExpected) {
    report.canonicalMismatches.push({
      file: path.relative(ROOT, file),
      found: canonical,
      expected: expectedCanonical
    });
  }

  // 7. Check links for broken references
  const linkRegex = /href="([^"]*)"/gi;
  let linkMatch;
  while ((linkMatch = linkRegex.exec(content)) !== null) {
    let href = linkMatch[1].trim();
    if (href.startsWith('#') || href.startsWith('mailto:') || href.startsWith('tel:') || href.startsWith('http://') || href.startsWith('https://')) {
      // External links or anchors skipped for this local static check
      continue;
    }

    // Resolve relative path
    const resolvedPath = path.resolve(relDir, href);
    const resolvedPathNoAnchor = resolvedPath.split('#')[0].split('?')[0];

    // Check if target file exists
    if (!fs.existsSync(resolvedPathNoAnchor)) {
      report.brokenLinks.push({
        file: path.relative(ROOT, file),
        link: href,
        resolved: path.relative(ROOT, resolvedPathNoAnchor)
      });
    } else {
      // Add to inbound links graph
      const targetUrl = fileToUrl(resolvedPathNoAnchor);
      if (inboundLinks[targetUrl] && targetUrl !== currentUrl) {
        inboundLinks[targetUrl].push(currentUrl);
      }
    }
  }

  // Populate title, description, and H1 for duplicates checks
  if (title) {
    if (!report.duplicateTitles[title]) report.duplicateTitles[title] = [];
    report.duplicateTitles[title].push(path.relative(ROOT, file));
  }
  if (description) {
    if (!report.duplicateDescriptions[description]) report.duplicateDescriptions[description] = [];
    report.duplicateDescriptions[description].push(path.relative(ROOT, file));
  }
  if (h1) {
    if (!report.duplicateH1s[h1]) report.duplicateH1s[h1] = [];
    report.duplicateH1s[h1].push(path.relative(ROOT, file));
  }

  report.pages.push({
    file: path.relative(ROOT, file),
    url: currentUrl,
    title,
    description,
    h1,
    canonical
  });
});

// Check for orphans (except index.html)
allUrls.forEach(url => {
  const cleanUrl = url.replace(/\/index\.html$/, '/');
  const isHomepage = cleanUrl === 'https://creatorhelpertool.vercel.app/';
  if (!isHomepage && inboundLinks[url].length === 0) {
    report.orphanPages.push(path.relative(ROOT, urlToFilePath[url]));
  }
});

// Check sitemap URLs
const sitemapFile = path.join(ROOT, 'sitemap.xml');
if (fs.existsSync(sitemapFile)) {
  const sitemapContent = fs.readFileSync(sitemapFile, 'utf8');
  const locRegex = /<loc>([^<]*)<\/loc>/gi;
  let locMatch;
  while ((locMatch = locRegex.exec(sitemapContent)) !== null) {
    const loc = locMatch[1].trim();
    if (!allUrls.has(loc) && !allUrls.has(loc + 'index.html')) {
      report.sitemapErrors.push(loc);
    }
  }
}

// Filter out actual duplicates (where count > 1)
const filterDuplicates = (obj) => {
  const res = {};
  Object.keys(obj).forEach(k => {
    if (obj[k].length > 1) res[k] = obj[k];
  });
  return res;
};

report.duplicateTitles = filterDuplicates(report.duplicateTitles);
report.duplicateDescriptions = filterDuplicates(report.duplicateDescriptions);
report.duplicateH1s = filterDuplicates(report.duplicateH1s);

// Write JSON report
fs.writeFileSync(path.join(ROOT, 'seo-audit-results.json'), JSON.stringify(report, null, 2), 'utf8');
console.log('Audit completed successfully. Results saved to seo-audit-results.json.');

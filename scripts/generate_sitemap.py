import os

domain = "https://creatorhelpertool.vercel.app"
root_dir = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))

html_files = []
for root, dirs, files in os.walk(root_dir):
    # Skip certain directories
    dirs[:] = [d for d in dirs if d not in ['.git', 'node_modules', 'images', 'scripts']]
    for file in files:
        if file.endswith('.html') and not file.startswith('google') and file != 'transcript.html':
            html_files.append(os.path.join(root, file))

sitemap_content = """<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
"""

for file_path in html_files:
    rel_path = os.path.relpath(file_path, root_dir).replace('\\', '/')
    url_path = rel_path
    priority = "0.5"
    changefreq = "monthly"
    
    if url_path == "index.html":
        url_path = ""
        priority = "1.0"
        changefreq = "weekly"
    elif "about.html" in url_path:
        priority = "0.7"
        changefreq = "monthly"
    elif "contact.html" in url_path:
        priority = "0.6"
        changefreq = "monthly"
    elif "privacy.html" in url_path or "terms.html" in url_path:
        priority = "0.3"
        changefreq = "yearly"
        
    sitemap_content += f"""  <url>
    <loc>{domain}/{url_path}</loc>
    <changefreq>{changefreq}</changefreq>
    <priority>{priority}</priority>
  </url>
"""

sitemap_content += "</urlset>\n"

with open(os.path.join(root_dir, 'sitemap.xml'), 'w', encoding='utf-8') as f:
    f.write(sitemap_content)

print("sitemap.xml successfully generated!")

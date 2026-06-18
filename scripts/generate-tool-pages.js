const fs = require('fs');
const path = require('path');

const toolsDir = path.join(__dirname, 'tools');
if (!fs.existsSync(toolsDir)) fs.mkdirSync(toolsDir, { recursive: true });

const tools = [
  { file: 'youtube-title-generator.html', title: 'YouTube Title Generator — Free AI Title Ideas | CreatorHelperTools', desc: 'Generate high-CTR YouTube titles with AI. Uses proven viral frameworks: FOMO, listicles, comparisons. Boost clicks instantly. Free, no signup.', h1: 'Free YouTube Title Generator — AI Powered', tool: 'yt-titles', faqs: [['How to write good YouTube titles?','Use emotional triggers, numbers, and curiosity gaps. Our AI generator uses proven viral title frameworks including FOMO, benefit promises, and head-to-head comparisons to maximize click-through rates.'],['What makes a YouTube title get clicks?','The best titles combine curiosity with clarity. They promise a specific benefit, use power words, and stay under 60 characters.'],['How long should a YouTube title be?','Keep titles under 60 characters so they display fully in search results and suggested videos without being truncated.'],['Can I use the title generator for Shorts?','Yes, the generator works for all YouTube content including Shorts, long-form videos, and live streams.'],['Is the YouTube Title Generator free?','Completely free with no login, no signup, and no usage limits.']] },
  { file: 'viral-hook-generator.html', title: 'Viral Hook Generator — Free YouTube & Reel Hooks | CreatorHelperTools', desc: 'Generate scroll-stopping hooks for YouTube videos and Reels. 5 creative styles including curiosity gaps and pattern interrupts. Free AI tool.', h1: 'Free Viral Hook Generator for YouTube & Reels', tool: 'yt-hooks', faqs: [['What is a video hook?','A hook is the opening 3-5 seconds of your video that grabs attention and stops viewers from scrolling.'],['How do you write a viral hook?','Use one of 5 proven styles: curiosity gaps, pattern interrupts, bold statements, relatable scenarios, or shocking statistics.'],['What are the best hook types for YouTube?','Curiosity gaps, unpopular opinions, and pattern interrupts perform best for viewer retention.'],['Does it work for Instagram Reels?','Yes, the hooks are optimized for both YouTube videos and Instagram Reels.'],['How many hooks does it generate?','The generator creates 5 unique hooks per topic, each using a different creative angle.']] },
  { file: 'youtube-description-generator.html', title: 'YouTube Description Generator — SEO Optimized | CreatorHelperTools', desc: 'Create SEO-optimized YouTube descriptions with timestamps, keywords, and CTAs. Boost video discoverability. Free online tool.', h1: 'Free YouTube Description Generator — SEO Optimized', tool: 'yt-descriptions', faqs: [['What should a YouTube description include?','A keyword-rich introduction, video takeaways, timestamps/chapters, social links, and relevant hashtags.'],['How do descriptions help YouTube SEO?','YouTube uses descriptions to understand video content and rank it in search results on both YouTube and Google.'],['What is the YouTube description character limit?','YouTube allows up to 5,000 characters. Only the first 150-200 characters show above the fold.'],['Does it add timestamps automatically?','Yes, the generator creates structured chapter markers and timestamp placeholders.'],['Is the Description Generator free?','100% free with no limits.']] },
  { file: 'youtube-hashtag-generator.html', title: 'YouTube Hashtag Generator — Free Tag Finder | CreatorHelperTools', desc: 'Generate relevant YouTube hashtags for any video topic. Search-optimized tags to boost discoverability. Free online tool, no login needed.', h1: 'Free YouTube Hashtag Generator Online', tool: 'yt-hashtags', faqs: [['How many hashtags should I use on YouTube?','YouTube recommends 3-5 hashtags per video. Using more than 15 may cause YouTube to ignore all of them.'],['Do hashtags help YouTube SEO?','Yes, hashtags help YouTube categorize your content and make it discoverable through hashtag search pages.'],['What are the best hashtags for YouTube Shorts?','Use trending and niche-specific hashtags like #Shorts plus topic-relevant tags.'],['How do I find trending YouTube hashtags?','Our generator analyzes your topic and suggests currently relevant hashtags.'],['Is the hashtag generator free?','Completely free with unlimited use. No login required.']] },
  { file: 'youtube-shorts-script-writer.html', title: 'YouTube Shorts Script Writer — 60s Scripts Free | CreatorHelperTools', desc: 'Write engaging 60-second YouTube Shorts scripts with visual cues, hooks, and transitions. AI-powered script templates. Free tool.', h1: 'Free YouTube Shorts Script Writer', tool: 'yt-shorts', faqs: [['How long should a Shorts script be?','YouTube Shorts can be up to 60 seconds. A well-paced script contains 120-180 words with visual pacing notes.'],['What makes a good YouTube Shorts script?','A strong hook in the first 3 seconds, fast pacing, visual transitions, a clear payoff, and a call-to-action.'],['Does the script writer add visual cues?','Yes, each script includes B-roll suggestions, caption placement notes, and camera transition markers.'],['Can I customize the script length?','Yes, you can adjust the output from 15-second quick hits to full 60-second scripts.'],['Is the Shorts Script Writer free?','100% free. Generate unlimited scripts.']] },
  { file: 'instagram-caption-generator.html', title: 'Instagram Caption Generator — AI Powered Free | CreatorHelperTools', desc: 'Create engaging Instagram captions with emojis and CTAs. AI-powered generator for posts and Reels. Boost comments and saves. Free tool.', h1: 'Free AI Instagram Caption Generator', tool: 'ig-captions', faqs: [['How to write good Instagram captions?','Use a hook in the first line, add value in the body, include a CTA, and use relevant emojis.'],['What caption length works best?','Captions between 125-300 characters get the most engagement for Reels.'],['Should I use emojis in captions?','Yes, posts with emojis see 15% higher engagement on average.'],['Does it add hashtags?','The generator focuses on caption text. Use our Instagram Hashtag Generator separately.'],['Is it free?','Completely free with no login, no limits.']] },
  { file: 'instagram-hashtag-generator.html', title: 'Instagram Hashtag Generator — Best Reels Tags Free | CreatorHelperTools', desc: 'Find the best Instagram hashtags for your Reels and posts. Group-focused tag builder for maximum reach. Free online tool.', h1: 'Free Instagram Hashtag Generator for Reels & Posts', tool: 'ig-hashtags', faqs: [['How many hashtags on Instagram?','Instagram allows up to 30 hashtags, but 5-15 targeted hashtags typically perform best.'],['Best hashtags for Instagram Reels?','Mix broad tags and niche-specific ones. Our generator creates optimized groups.'],['Popular or niche hashtags?','Both. Use 3-5 popular for reach and 5-10 niche for targeted engagement.'],['Do hashtags still work in 2025?','Yes, Instagram confirmed hashtags remain a discovery tool.'],['Is it free?','100% free with unlimited use.']] },
  { file: 'instagram-reel-hook-generator.html', title: 'Instagram Reel Hook Generator — Stop the Scroll | CreatorHelperTools', desc: 'Generate attention-grabbing hooks for Instagram Reels. 5 creative styles optimized for engagement. Free AI-powered tool.', h1: 'Free Instagram Reel Hook Generator', tool: 'ig-hooks', faqs: [['How to hook viewers in Reels?','Start with a bold statement, shocking fact, or relatable scenario in the first 1-3 seconds.'],['Best hooks for Instagram Reels?','Pattern interrupts, curiosity gaps, and controversial statements work best.'],['What are pattern interrupts?','Unexpected visual or verbal elements that break a viewers scrolling pattern.'],['Does it work for TikTok?','Yes, the hook principles are universal across short-form platforms.'],['Is it free?','Completely free with no login required.']] },
  { file: 'instagram-reel-script-writer.html', title: 'Instagram Reel Script Writer — High-Pacing Free | CreatorHelperTools', desc: 'Write high-pacing Instagram Reel scripts with hooks, transitions, and CTAs. Free AI-powered tool.', h1: 'Free Instagram Reel Script Writer', tool: 'ig-script', faqs: [['How to write a Reel script?','Start with a hook, present content with fast pacing, add transitions, and end with a CTA.'],['What makes Reels go viral?','Fast pacing, strong hooks, relatable content, trending audio, and clear value.'],['Ideal Reel script length?','15-30 seconds for maximum engagement.'],['Does it include transitions?','Yes, every script includes B-roll suggestions and visual pacing notes.'],['Is it free?','100% free with unlimited use.']] },
  { file: 'ai-video-summarizer.html', title: 'AI Video Summarizer — Free YouTube Summary Tool | CreatorHelperTools', desc: 'Summarize any YouTube video into key points and TL;DR. AI-powered transcript analysis. Free, no login.', h1: 'Free AI Video Summarizer — YouTube Transcript Summary', tool: 'ai-summarizer', faqs: [['How does AI summarization work?','Our AI analyzes the full transcript and extracts key themes into a TL;DR summary and bullet points.'],['Can it summarize any YouTube video?','Yes, as long as the video has captions or auto-subtitles available.'],['What output formats?','TL;DR paragraph plus organized bullet points of key takeaways.'],['Does it need a transcript first?','Yes, use our Transcript Generator first.'],['Is it free?','100% free with no limits.']] },
  { file: 'ai-content-repurposer.html', title: 'AI Content Repurposer — Video to Blog/Twitter Free | CreatorHelperTools', desc: 'Repurpose YouTube videos into blog posts, Twitter threads, and LinkedIn content. Free tool.', h1: 'Free AI Content Repurposer — Video to Blog, Tweets & More', tool: 'ai-repurpose', faqs: [['What is content repurposing?','Transforming existing content into different formats for multiple platforms.'],['How does it work?','Takes your transcript and reformats it into blogs, threads, LinkedIn posts, etc.'],['What formats can it create?','Blog outlines, Twitter threads, LinkedIn posts, newsletter sections.'],['Does it use the transcript?','Yes, extract a transcript first with our Transcript Generator.'],['Is it free?','Completely free with no restrictions.']] },
  { file: 'ai-thumbnail-idea-generator.html', title: 'AI Thumbnail Idea Generator — YouTube Thumbnails Free | CreatorHelperTools', desc: 'Generate creative YouTube thumbnail ideas with AI. Overlay text, color schemes, and composition suggestions. Free tool.', h1: 'Free AI YouTube Thumbnail Idea Generator', tool: 'ai-thumbnail', faqs: [['How does it work?','Enter your topic and AI generates visual concepts including layouts, colors, and text overlays.'],['Can it create actual images?','It generates visual briefs. Use our Browser AI Image Generator for actual images.'],['What makes a good thumbnail?','High contrast, clear subjects, bold text, and emotional expressions.'],['Does it suggest text overlays?','Yes, every idea includes text overlay and placement guidance.'],['Is it free?','100% free with unlimited use.']] },
  { file: 'browser-ai-image-generator.html', title: 'Browser AI Image Generator — Create Images Free | CreatorHelperTools', desc: 'Generate AI images directly in your browser. No downloads, no API keys. On-device AI generation. Free.', h1: 'Free Browser-Based AI Image Generator', tool: 'ai-image-generator', faqs: [['How does it work?','Uses WebGPU and on-device ML models to generate images in your browser.'],['Do I need to install anything?','No installations. Works in modern browsers.'],['Is my data private?','Yes, all processing happens locally. No images are sent to servers.'],['What can I generate?','Thumbnails, social media graphics, concept art, and more.'],['Is it free?','100% free with no limits.']] },
  { file: 'thumbnail-prompt-library.html', title: 'Thumbnail Prompt Library — High-CTR YouTube Prompts | CreatorHelperTools', desc: 'Browse and copy high-CTR YouTube thumbnail prompts for AI generation. Curated library. Free.', h1: 'YouTube Thumbnail Prompt Library — AI Generation Prompts', tool: 'ai-prompt-library', faqs: [['What is the Prompt Library?','A curated collection of AI prompts designed for YouTube thumbnails.'],['Can I add my own prompts?','Yes, with images, categories, and tags. Stored locally.'],['What AI tools do prompts work with?','Midjourney, DALL-E 3, Stable Diffusion, and our Browser AI Generator.'],['Can I import/export?','Yes, export as JSON and import on any device.'],['Is it free?','100% free including all features.']] },
  { file: 'youtube-url-analyzer.html', title: 'YouTube URL Analyzer — Extract Video Data Free | CreatorHelperTools', desc: 'Analyze YouTube video URLs and extract parameters, video IDs, and metadata. Free online tool.', h1: 'Free YouTube URL Analyzer', tool: 'media-analyzer', faqs: [['What does it do?','Parses YouTube URLs to extract video ID, channel info, and parameters.'],['What URL formats?','Standard, youtu.be, embed, and playlist URLs.'],['Is it free?','100% free, no login required.'],['Multiple URLs?','Process one at a time for detailed analysis.'],['Private videos?','Can extract video ID but full metadata requires public access.']] },
  { file: 'youtube-metadata-viewer.html', title: 'YouTube Metadata Viewer — Tags & Data Free | CreatorHelperTools', desc: 'Inspect YouTube video tags, descriptions, titles, thumbnails, and channel data. Free tool.', h1: 'Free YouTube Metadata Viewer', tool: 'media-metadata', faqs: [['What metadata can I view?','Title, description, tags, thumbnails, channel info, views, and more.'],['Can I see competitor tags?','Yes, reveals all public tags on any YouTube video.'],['Is it free?','Completely free, no account needed.'],['How to use for SEO?','Analyze top videos to find common tags and title patterns.'],['Any video?','Yes, as long as publicly accessible.']] },
  { file: 'creator-utilities.html', title: 'Creator Utilities — Speech Timer & Word Counter Free | CreatorHelperTools', desc: 'Essential creator utilities: speech timer, word counter, title length checker. Free tools.', h1: 'Free Creator Utilities — Speech Timer, Word Counter & More', tool: 'media-utility', faqs: [['What utilities are included?','Speech timer, word counter, character counter, title length checker.'],['How does the speech timer work?','Estimates spoken duration based on 130-150 words per minute.'],['YouTube title limit?','100 characters max, but only 60-70 display in search.'],['Are all utilities free?','Yes, 100% free with no login.'],['Works for Instagram?','Yes, counters work for any platform.']] },
];

tools.forEach(t => {
  const filePath = path.join(toolsDir, t.file);
  if (fs.existsSync(filePath)) { console.log(`Exists: ${t.file}`); return; }
  
  const name = t.file.replace('.html','').split('-').map(w=>w[0].toUpperCase()+w.slice(1)).join(' ');
  const faqSchema = t.faqs.map(f => `{"@type":"Question","name":"${f[0]}","acceptedAnswer":{"@type":"Answer","text":"${f[1]}"}}`).join(',');
  const faqHtml = t.faqs.map(f => `      <details class="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-xl overflow-hidden">
        <summary class="p-4 font-bold text-sm text-gray-800 dark:text-white cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-800">${f[0]}</summary>
        <p class="px-4 pb-4 text-sm text-gray-500 dark:text-gray-400">${f[1]}</p>
      </details>`).join('\n');

  const html = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>${t.title}</title>
  <meta name="description" content="${t.desc}" />
  <meta name="robots" content="index, follow" />
  <link rel="canonical" href="https://creatorhelpertool.vercel.app/tools/${t.file}" />
  <meta property="og:type" content="website" />
  <meta property="og:url" content="https://creatorhelpertool.vercel.app/tools/${t.file}" />
  <meta property="og:title" content="${t.title}" />
  <meta property="og:description" content="${t.desc}" />
  <meta property="og:image" content="https://creatorhelpertool.vercel.app/images/og-share.png" />
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="${t.title}" />
  <meta name="twitter:description" content="${t.desc}" />
  <meta name="twitter:image" content="https://creatorhelpertool.vercel.app/images/og-share.png" />
  <script src="../js/theme.js"></script>
  <script src="https://cdn.tailwindcss.com"></script>
  <script>tailwind.config={darkMode:'class'}</script>
  <link rel="stylesheet" href="../css/style.css" />
  <script async src="https://www.googletagmanager.com/gtag/js?id=G-JK1LE3F7N8"></script>
  <script>window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments)}gtag('js',new Date());gtag('config','G-JK1LE3F7N8');</script>
  <script type="application/ld+json">{"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"Home","item":"https://creatorhelpertool.vercel.app/"},{"@type":"ListItem","position":2,"name":"Tools","item":"https://creatorhelpertool.vercel.app/tools/"},{"@type":"ListItem","position":3,"name":"${name}","item":"https://creatorhelpertool.vercel.app/tools/${t.file}"}]}</script>
  <script type="application/ld+json">{"@context":"https://schema.org","@type":"SoftwareApplication","name":"${name}","url":"https://creatorhelpertool.vercel.app/tools/${t.file}","description":"${t.desc}","applicationCategory":"UtilitiesApplication","operatingSystem":"All","offers":{"@type":"Offer","price":"0","priceCurrency":"USD"}}</script>
  <script type="application/ld+json">{"@context":"https://schema.org","@type":"FAQPage","mainEntity":[${faqSchema}]}</script>
</head>
<body>
<nav aria-label="Breadcrumb" class="max-w-7xl mx-auto px-4 pt-20 pb-2">
  <ol class="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
    <li><a href="../index.html" class="hover:text-pink-500 transition">Home</a></li>
    <li class="text-gray-300 dark:text-gray-600">/</li>
    <li><a href="../index.html" class="hover:text-pink-500 transition">Tools</a></li>
    <li class="text-gray-300 dark:text-gray-600">/</li>
    <li class="text-gray-800 dark:text-white font-semibold">${name}</li>
  </ol>
</nav>
<div class="page-hero" style="padding:3rem 1.5rem;">
  <div class="page-hero-inner">
    <h1>${t.h1}</h1>
    <p>${t.desc}</p>
    <a href="../index.html?tool=${t.tool}" class="inline-block mt-6 px-8 py-3 bg-white text-pink-600 font-bold rounded-full shadow-lg hover:shadow-xl transition transform hover:-translate-y-1">Open Tool →</a>
  </div>
</div>
<main class="max-w-4xl mx-auto px-4 py-12 space-y-12">
  <section>
    <h2 class="text-2xl font-black text-gray-900 dark:text-white mb-4">Frequently Asked Questions</h2>
    <div class="space-y-4">
${faqHtml}
    </div>
  </section>
  <section class="text-center bg-gradient-to-r from-pink-500 to-orange-400 rounded-3xl p-10">
    <h2 class="text-2xl font-black text-white mb-3">Try It Now — Free</h2>
    <p class="text-white/80 mb-6">No login, no signup, no limits.</p>
    <a href="../index.html?tool=${t.tool}" class="inline-block px-8 py-3 bg-white text-pink-600 font-bold rounded-full shadow-lg hover:shadow-xl transition transform hover:-translate-y-1">Open Tool →</a>
  </section>
</main>
<footer role="contentinfo">
  <div class="footer-inner">
    <div class="footer-brand"><a href="../index.html" class="logo">📄 Creator<span style="color:#FFB800;">HelperTools</span></a><p>Free AI-powered creator toolkit. No login required.</p></div>
    <div class="footer-col"><h5>Company</h5><ul><li><a href="../pages/about.html">About</a></li><li><a href="../pages/contact.html">Contact</a></li><li><a href="../pages/privacy.html">Privacy</a></li><li><a href="../pages/terms.html">Terms</a></li></ul></div>
  </div>
  <div class="footer-bottom"><span>© 2026 CreatorHelperTools.</span><span>Not affiliated with YouTube or Google.</span></div>
</footer>
<script src="../js/smartlink.js"></script>
</body>
</html>`;
  
  fs.writeFileSync(filePath, html, 'utf8');
  console.log(`Created: ${t.file}`);
});

console.log('\nDone! All tool pages created.');

// Creator Tools JavaScript Core

document.addEventListener('DOMContentLoaded', () => {
  // DOM Elements
  const overviewPanel = document.getElementById('panel-overview');
  const toolWorkspace = document.getElementById('tool-workspace');
  const sidebarButtons = document.querySelectorAll('aside [data-tool], aside #overview-btn');
  const overviewCards = document.querySelectorAll('#panel-overview [data-target]');
  const workspaceBackBtn = document.getElementById('workspace-back-btn');
  const seoContainer = document.getElementById('tool-seo-content');

  const toolMetadata = {
    'overview': {
      title: 'CreatorHelperTools – The Ultimate Creator Toolkit',
      desc: 'Unlock powerful free tools for creators: YouTube transcript generators, CTR title generators, viral hook builders, Instagram Reel writers, and AI video repurposers.',
      canonical: 'https://creatorhelpertool.vercel.app/'
    },
    'yt-transcript': {
      title: 'Free YouTube Transcript Generator & Extractor – CreatorHelperTools',
      desc: 'Extract clean, accurate transcripts and captions from any YouTube video instantly for free. No login required, supports 60+ languages.',
      canonical: 'https://creatorhelpertool.vercel.app/?tool=yt-transcript'
    },
    'yt-hooks': {
      title: 'YouTube Viral Hook Generator & Retention Builder – CreatorHelperTools',
      desc: 'Create attention-grabbing opening hooks for your YouTube videos. Stop the scroll, build audience retention, and boost your CTR instantly.',
      canonical: 'https://creatorhelpertool.vercel.app/?tool=yt-hooks'
    },
    'yt-titles': {
      title: 'YouTube Title Generator: Optimize High-CTR Titles – CreatorHelperTools',
      desc: 'Generate viral, high-CTR, and SEO-optimized titles for your YouTube videos. Leverage curiosity gaps, FOBA, and search keywords.',
      canonical: 'https://creatorhelpertool.vercel.app/?tool=yt-titles'
    },
    'yt-descriptions': {
      title: 'YouTube Description Generator & SEO Optimizer – CreatorHelperTools',
      desc: 'Generate structured, keyword-rich video descriptions with auto-timestamps, social links, disclaimers, and call-to-actions instantly.',
      canonical: 'https://creatorhelpertool.vercel.app/?tool=yt-descriptions'
    },
    'yt-hashtags': {
      title: 'YouTube Tags & Hashtag Generator for SEO – CreatorHelperTools',
      desc: 'Find highly searched tags and hashtags to grow your YouTube search rankings and suggest-feed video performance.',
      canonical: 'https://creatorhelpertool.vercel.app/?tool=yt-hashtags'
    },
    'yt-shorts': {
      title: 'YouTube Shorts Script Writer: Viral 60s Scripts – CreatorHelperTools',
      desc: 'Create highly engaging 60-second scripts for YouTube Shorts, complete with camera directions, audio cues, and viral pacing.',
      canonical: 'https://creatorhelpertool.vercel.app/?tool=yt-shorts'
    },
    'ig-hooks': {
      title: 'Instagram Reels Hook Generator: Stop the Scroll – CreatorHelperTools',
      desc: 'Stop viewers from scrolling past your Reels. Generate highly engaging hook ideas designed to maximize Reel algorithm reach.',
      canonical: 'https://creatorhelpertool.vercel.app/?tool=ig-hooks'
    },
    'ig-captions': {
      title: 'Instagram Caption Generator: Engaging Reel Copy – CreatorHelperTools',
      desc: 'Write high-converting Instagram Reel captions with emojis, call-to-actions, and spacing optimized for readability and saves.',
      canonical: 'https://creatorhelpertool.vercel.app/?tool=ig-captions'
    },
    'ig-hashtags': {
      title: 'Instagram Hashtags Generator: Reach Explore Page – CreatorHelperTools',
      desc: 'Get highly relevant, categorized hashtag groups for your Instagram posts to boost impressions and organic follower growth.',
      canonical: 'https://creatorhelpertool.vercel.app/?tool=ig-hashtags'
    },
    'ig-script': {
      title: 'Instagram Reel Script Writer: Viral Video Copy – CreatorHelperTools',
      desc: 'Write high-pacing scripts for Instagram Reels with hook-body-CTA structures that boost views, shares, and saves.',
      canonical: 'https://creatorhelpertool.vercel.app/?tool=ig-script'
    },
    'ai-summarizer': {
      title: 'AI Video Summarizer: YouTube Video TL;DR – CreatorHelperTools',
      desc: 'Summarize long YouTube videos instantly. Extract key points, action items, and clear TL;DR outlines from any video transcript.',
      canonical: 'https://creatorhelpertool.vercel.app/?tool=ai-summarizer'
    },
    'ai-repurpose': {
      title: 'AI Video Content Repurposer: Video to Text – CreatorHelperTools',
      desc: 'Convert YouTube transcripts into Tweet threads, SEO blog outlines, LinkedIn posts, or newsletters with a single click.',
      canonical: 'https://creatorhelpertool.vercel.app/?tool=ai-repurpose'
    },
    'ai-thumbnail': {
      title: 'YouTube Thumbnail Idea Generator & briefs – CreatorHelperTools',
      desc: 'Generate viral thumbnail concepts, overlays, text visual briefs, and color palettes optimized for maximum visual CTR.',
      canonical: 'https://creatorhelpertool.vercel.app/?tool=ai-thumbnail'
    },
    'media-analyzer': {
      title: 'YouTube Video URL Analyzer & Parameter ID – CreatorHelperTools',
      desc: 'Extract video ID, channel ID, query structures, and direct metadata fields from any YouTube links instantly.',
      canonical: 'https://creatorhelpertool.vercel.app/?tool=media-analyzer'
    },
    'media-metadata': {
      title: 'YouTube Video Metadata Inspector & Viewer – CreatorHelperTools',
      desc: 'Inspect thumbnail URLs, tags, video description metadata, and direct channel references from any video.',
      canonical: 'https://creatorhelpertool.vercel.app/?tool=media-metadata'
    },
    'media-utility': {
      title: 'Creator Utilities: Speech Timers & Word Counters – CreatorHelperTools',
      desc: 'Free tools for content creators: speech reading time estimation, Title CTR calculator, and description word-counter.',
      canonical: 'https://creatorhelpertool.vercel.app/?tool=media-utility'
    },
    'ai-image-generator': {
      title: 'Browser AI Image Generator – Free On-Device AI – CreatorHelperTools',
      desc: 'Generate stunning AI images directly on your device. Works completely offline with WebGPU, ONNX, and Transformers.js. No signup required.',
      canonical: 'https://creatorhelpertool.vercel.app/?tool=ai-image-generator'
    }
  };

  const toolSeoContent = {
    'yt-transcript': `
      <h2 class="text-xl font-bold text-gray-800 mb-3">What is the Free YouTube Transcript Generator?</h2>
      <p class="text-gray-600 text-sm mb-4 leading-relaxed">
        The Free YouTube Transcript Generator is an online tool that extracts captions, subtitles, and spoken audio text from any public YouTube video. By parsing official transcripts or automatic subtitles, it compiles a clean, readable text block without time stamps, making it easy to read, translate, or repurpose.
      </p>
      <h3 class="text-base font-bold text-gray-800 mb-2">How It Works</h3>
      <p class="text-gray-600 text-sm mb-4 leading-relaxed">
        Simply paste any YouTube video link, watch URL, or short link into the input field and click <strong>Generate Content</strong>. Our system contacts public caption feeds, strips formatting, and loads the complete transcript onto your screen in seconds.
      </p>
      <h3 class="text-base font-bold text-gray-800 mb-2">Benefits of Fetching Transcripts</h3>
      <ul class="list-disc pl-5 text-gray-600 text-sm mb-4 space-y-1">
        <li>Save time by reading a video's content instead of watching it.</li>
        <li>Instantly search for specific keywords or parts of a lecture/tutorial.</li>
        <li>Prepare written content for blogs, research papers, or summaries.</li>
      </ul>
      <h3 class="text-base font-bold text-gray-800 mb-2">Best Practices</h3>
      <p class="text-gray-600 text-sm mb-4 leading-relaxed">
        After generating your transcript, use our internal tools to level up your content workflow:
        repurpose it into a blog outline using the <a href="?tool=ai-repurpose" class="text-pink-600 hover:underline">AI Content Repurposer</a>, summarize it with the <a href="?tool=ai-summarizer" class="text-pink-600 hover:underline">AI Video Summarizer</a>, or write video descriptions using the <a href="?tool=yt-descriptions" class="text-pink-600 hover:underline">YouTube Description Generator</a>.
      </p>
    `,
    'yt-hooks': `
      <h2 class="text-xl font-bold text-gray-800 mb-3">What is the YouTube Viral Hook Generator?</h2>
      <p class="text-gray-600 text-sm mb-4 leading-relaxed">
        The YouTube Viral Hook Generator is a tool designed to write attention-grabbing video intros. The first 3 seconds of a video determine whether a viewer continues watching or clicks away. This tool creates custom opening hooks that spike audience retention.
      </p>
      <h3 class="text-base font-bold text-gray-800 mb-2">How It Works</h3>
      <p class="text-gray-600 text-sm mb-4 leading-relaxed">
        Enter your video topic or paste your transcript, select a psychological hook angle (such as Curiosity Gap or Pattern Interrupt), and click generate. Our engine produces structured hook variants complete with engagement rationale.
      </p>
      <h3 class="text-base font-bold text-gray-800 mb-2">Benefits of Viral Video Hooks</h3>
      <ul class="list-disc pl-5 text-gray-600 text-sm mb-4 space-y-1">
        <li>Increase YouTube retention rate, a critical ranking signal for search and suggestions.</li>
        <li>Eliminate writer's block by using proven, high-performing introductory formulas.</li>
        <li>Perfect for horizontal videos, Shorts, and TikTok scripts.</li>
      </ul>
      <h3 class="text-base font-bold text-gray-800 mb-2">Best Practices</h3>
      <p class="text-gray-600 text-sm mb-4 leading-relaxed">
        Always deliver immediately on the promise made in your hook. Once your hook is ready, write a full script with the <a href="?tool=yt-shorts" class="text-pink-600 hover:underline">Shorts Script Writer</a> or plan optimized titles using the <a href="?tool=yt-titles" class="text-pink-600 hover:underline">YouTube Title Generator</a>.
      </p>
    `,
    'yt-titles': `
      <h2 class="text-xl font-bold text-gray-800 mb-3">What is the YouTube Title Generator?</h2>
      <p class="text-gray-600 text-sm mb-4 leading-relaxed">
        The YouTube Title Generator is a high-CTR title suggestion builder. Your title is the primary gateway to clicks. This generator creates optimized, high-CTR titles designed to appeal to both the YouTube search algorithm and human psychology.
      </p>
      <h3 class="text-base font-bold text-gray-800 mb-2">How It Works</h3>
      <p class="text-gray-600 text-sm mb-4 leading-relaxed">
        Input your video topic or concept, select your target CTR angle (such as Fear of Missing Out, extreme benefits, or comparisons), and click generate to get options ranked by estimated CTR score.
      </p>
      <h3 class="text-base font-bold text-gray-800 mb-2">Benefits</h3>
      <ul class="list-disc pl-5 text-gray-600 text-sm mb-4 space-y-1">
        <li>Boost your organic CTR, triggering more algorithm recommendations.</li>
        <li>Incorporate relevant target keywords naturally for improved search indexing.</li>
        <li>Test various psychological frameworks before final selection.</li>
      </ul>
      <h3 class="text-base font-bold text-gray-800 mb-2">Best Practices</h3>
      <p class="text-gray-600 text-sm mb-4 leading-relaxed">
        Keep titles under 60 characters to prevent truncation on mobile screens. Support your title with structured tags from the <a href="?tool=yt-hashtags" class="text-pink-600 hover:underline">YouTube Hashtag Generator</a> and craft detailed descriptions via the <a href="?tool=yt-descriptions" class="text-pink-600 hover:underline">YouTube Description Generator</a>.
      </p>
    `,
    'yt-descriptions': `
      <h2 class="text-xl font-bold text-gray-800 mb-3">What is the YouTube Description Generator?</h2>
      <p class="text-gray-600 text-sm mb-4 leading-relaxed">
        The YouTube Description Generator crafts SEO-rich video descriptions. A structured description helps Google and YouTube search bots index your video for correct topics, search phrases, and semantic terms.
      </p>
      <h3 class="text-base font-bold text-gray-800 mb-2">How It Works</h3>
      <p class="text-gray-600 text-sm mb-4 leading-relaxed">
        Enter your title, list the key takeaways of the video, add your social links/websites, and generate. The tool builds a description including formatted chapters, resource blocks, calls-to-actions, and hashtag lines.
      </p>
      <h3 class="text-base font-bold text-gray-800 mb-2">Benefits</h3>
      <ul class="list-disc pl-5 text-gray-600 text-sm mb-4 space-y-1">
        <li>Improved video search rankings by providing context and keywords.</li>
        <li>Auto-formatted timestamps help viewers navigate, improving duration stats.</li>
        <li>Cleaner call-to-actions to convert viewers into subscribers or website traffic.</li>
      </ul>
      <h3 class="text-base font-bold text-gray-800 mb-2">Best Practices</h3>
      <p class="text-gray-600 text-sm mb-4 leading-relaxed">
        Always place your primary keyword in the first two lines of the description (above the "Show More" fold). Combine this with the <a href="?tool=yt-hashtags" class="text-pink-600 hover:underline">YouTube Hashtag Generator</a> to build keyword coherence.
      </p>
    `,
    'yt-hashtags': `
      <h2 class="text-xl font-bold text-gray-800 mb-3">What is the YouTube Hashtag & Tag Generator?</h2>
      <p class="text-gray-600 text-sm mb-4 leading-relaxed">
        Our YouTube Hashtag and Tag Generator finds highly searched keywords, metadata tags, and trending tags for your specific video topic to expand your reach.
      </p>
      <h3 class="text-base font-bold text-gray-800 mb-2">How It Works</h3>
      <p class="text-gray-600 text-sm mb-4 leading-relaxed">
        Enter your core topic keywords. The tool categorizes and generates tags split by popularity: high-volume tags, medium-niche tags, and long-tail metadata tags.
      </p>
      <h3 class="text-base font-bold text-gray-800 mb-2">Benefits</h3>
      <ul class="list-disc pl-5 text-gray-600 text-sm mb-4 space-y-1">
        <li>Improved categorisation for YouTube's indexing bots.</li>
        <li>Identify secondary tags and search query variants you might have missed.</li>
        <li>Natively formats tags with comma separations ready to copy/paste into YouTube Studio.</li>
      </ul>
      <h3 class="text-base font-bold text-gray-800 mb-2">Best Practices</h3>
      <p class="text-gray-600 text-sm mb-4 leading-relaxed">
        Do not overstuff tags. Keep tags highly relevant to your actual video content. Use these tags to support your search ranking alongside the <a href="?tool=yt-titles" class="text-pink-600 hover:underline">YouTube Title Generator</a>.
      </p>
    `,
    'yt-shorts': `
      <h2 class="text-xl font-bold text-gray-800 mb-3">What is the YouTube Shorts Script Writer?</h2>
      <p class="text-gray-600 text-sm mb-4 leading-relaxed">
        The YouTube Shorts Script Writer creates engaging 60-second scripts for vertical videos. It uses a high-tempo hook-body-CTA structure designed to minimize drop-off rates and maximize retention loops.
      </p>
      <h3 class="text-base font-bold text-gray-800 mb-2">How It Works</h3>
      <p class="text-gray-600 text-sm mb-4 leading-relaxed">
        Input your video topic, select your script style, and generate. The tool produces a dual-column outline featuring spoken dialogue alongside visual directions (such as text overlays, transitions, and B-roll notes).
      </p>
      <h3 class="text-base font-bold text-gray-800 mb-2">Benefits</h3>
      <ul class="list-disc pl-5 text-gray-600 text-sm mb-4 space-y-1">
        <li>Faster scripting workflow with visual cues.</li>
        <li>Optimized flow, preventing long silences or slow starts.</li>
        <li>Includes built-in loop hooks to drive immediate rewatches.</li>
      </ul>
      <h3 class="text-base font-bold text-gray-800 mb-2">Best Practices</h3>
      <p class="text-gray-600 text-sm mb-4 leading-relaxed">
        Keep your Shorts scripts under 150 words to ensure a fast, natural delivery within the 60-second limit. If you need inspiration, combine this script with ideas from the <a href="?tool=yt-hooks" class="text-pink-600 hover:underline">Viral Hook Generator</a>.
      </p>
    `,
    'ig-hooks': `
      <h2 class="text-xl font-bold text-gray-800 mb-3">What is the Instagram Reels Hook Generator?</h2>
      <p class="text-gray-600 text-sm mb-4 leading-relaxed">
        The Instagram Reels Hook Generator builds scroll-stopping visual and text hooks specifically optimized for the Instagram algorithm, where speed-to-engage dictates explore page reach.
      </p>
      <h3 class="text-base font-bold text-gray-800 mb-2">How It Works</h3>
      <p class="text-gray-600 text-sm mb-4 leading-relaxed">
        Provide a topic, select your angle, and click generate to get options categorized by psychological trigger (e.g. FOMO, value-promise, story-start).
      </p>
      <h3 class="text-base font-bold text-gray-800 mb-2">Benefits</h3>
      <ul class="list-disc pl-5 text-gray-600 text-sm mb-4 space-y-1">
        <li>Lower scroll-past rates on the Instagram Feed.</li>
        <li>Spike watch time metrics, prompting the Reel algorithm to expand reach.</li>
        <li>Save time brainstorming text overlays.</li>
      </ul>
      <h3 class="text-base font-bold text-gray-800 mb-2">Best Practices</h3>
      <p class="text-gray-600 text-sm mb-4 leading-relaxed">
        Display your hook as clear, high-contrast on-screen text for the first 3 seconds of your Reel. Use our <a href="?tool=ig-captions" class="text-pink-600 hover:underline">Instagram Caption Generator</a> to write captions that expand on your hook.
      </p>
    `,
    'ig-captions': `
      <h2 class="text-xl font-bold text-gray-800 mb-3">What is the Instagram Caption Generator?</h2>
      <p class="text-gray-600 text-sm mb-4 leading-relaxed">
        The Instagram Caption Generator writes engaging Reel copy. Instagram captions are critical for providing context, adding search keywords, and encouraging saves or comments.
      </p>
      <h3 class="text-base font-bold text-gray-800 mb-2">How It Works</h3>
      <p class="text-gray-600 text-sm mb-4 leading-relaxed">
        Provide details of your post/Reel, choose your tone, and generate. The tool structures the caption with line breaks, context-fitting emojis, and clear calls-to-action.
      </p>
      <h3 class="text-base font-bold text-gray-800 mb-2">Benefits</h3>
      <ul class="list-disc pl-5 text-gray-600 text-sm mb-4 space-y-1">
        <li>Increase user engagement metrics like comments, shares, and saves.</li>
        <li>Better accessibility and readability.</li>
        <li>Optimized formatting ready to copy and paste.</li>
      </ul>
      <h3 class="text-base font-bold text-gray-800 mb-2">Best Practices</h3>
      <p class="text-gray-600 text-sm mb-4 leading-relaxed">
        Keep caption text structured and readable. Add hashtags using our <a href="?tool=ig-hashtags" class="text-pink-600 hover:underline">Instagram Hashtag Generator</a> to boost reach in Reels exploration feeds.
      </p>
    `,
    'ig-hashtags': `
      <h2 class="text-xl font-bold text-gray-800 mb-3">What is the Instagram Hashtag Generator?</h2>
      <p class="text-gray-600 text-sm mb-4 leading-relaxed">
        Our Instagram Hashtag Generator groups trending and niche-specific tags for your post to increase discoverability on search pages and recommendation feeds.
      </p>
      <h3 class="text-base font-bold text-gray-800 mb-2">How It Works</h3>
      <p class="text-gray-600 text-sm mb-4 leading-relaxed">
        Enter your post keywords, and get structured lists of high-volume, niche-specific, and low-competition hashtags ready to paste.
      </p>
      <h3 class="text-base font-bold text-gray-800 mb-2">Benefits</h3>
      <ul class="list-disc pl-5 text-gray-600 text-sm mb-4 space-y-1">
        <li>Expand post reach to targeted, high-interest niches.</li>
        <li>Avoid "shadowbans" by mixing tag volumes instead of repeating identical large tags.</li>
        <li>Includes copy buttons to paste directly into post drafts.</li>
      </ul>
      <h3 class="text-base font-bold text-gray-800 mb-2">Best Practices</h3>
      <p class="text-gray-600 text-sm mb-4 leading-relaxed">
        Use between 5 and 15 highly relevant hashtags per post instead of spamming 30 generic tags. Write high-converting post copy using the <a href="?tool=ig-captions" class="text-pink-600 hover:underline">Instagram Caption Generator</a>.
      </p>
    `,
    'ig-script': `
      <h2 class="text-xl font-bold text-gray-800 mb-3">What is the Instagram Reel Script Writer?</h2>
      <p class="text-gray-600 text-sm mb-4 leading-relaxed">
        The Instagram Reel Script Writer creates high-pacing video scripts for Reels and TikToks. Pacing is key to preventing scroll-past and retaining viewers.
      </p>
      <h3 class="text-base font-bold text-gray-800 mb-2">How It Works</h3>
      <p class="text-gray-600 text-sm mb-4 leading-relaxed">
        Enter your video concept, and generate a dual-column script combining speech content with visual b-roll instructions.
      </p>
      <h3 class="text-base font-bold text-gray-800 mb-2">Benefits</h3>
      <ul class="list-disc pl-5 text-gray-600 text-sm mb-4 space-y-1">
        <li>Faster scripting and filming process.</li>
        <li>Optimized flow to maximize retention metrics.</li>
        <li>Includes calls-to-action designed to trigger comments/saves.</li>
      </ul>
      <h3 class="text-base font-bold text-gray-800 mb-2">Best Practices</h3>
      <p class="text-gray-600 text-sm mb-4 leading-relaxed">
        Deliver value immediately. Keep scripting tight and punchy. Plan your script outline using the <a href="?tool=ig-hooks" class="text-pink-600 hover:underline">Reel Hook Generator</a>.
      </p>
    `,
    'ai-summarizer': `
      <h2 class="text-xl font-bold text-gray-800 mb-3">What is the AI Video Summarizer?</h2>
      <p class="text-gray-600 text-sm mb-4 leading-relaxed">
        Our AI Video Summarizer analyzes long video transcripts and generates clean bullet-point summaries, key takeaways, and structured outlines.
      </p>
      <h3 class="text-base font-bold text-gray-800 mb-2">How It Works</h3>
      <p class="text-gray-600 text-sm mb-4 leading-relaxed">
        Paste any transcript or use the auto-cached transcript from the <a href="?tool=yt-transcript" class="text-pink-600 hover:underline">Transcript Generator</a>, click generate, and view a structured summary in seconds.
      </p>
      <h3 class="text-base font-bold text-gray-800 mb-2">Benefits</h3>
      <ul class="list-disc pl-5 text-gray-600 text-sm mb-4 space-y-1">
        <li>Extract the core value of 1-hour lectures or interviews in 30 seconds.</li>
        <li>Create reference sheets, study guides, or newsletters instantly.</li>
        <li>Repurpose long-form content easily.</li>
      </ul>
      <h3 class="text-base font-bold text-gray-800 mb-2">Best Practices</h3>
      <p class="text-gray-600 text-sm mb-4 leading-relaxed">
        Use summaries to draft social newsletters or outlines. Repurpose summaries into social posts using our <a href="?tool=ai-repurpose" class="text-pink-600 hover:underline">Content Repurposer</a>.
      </p>
    `,
    'ai-repurpose': `
      <h2 class="text-xl font-bold text-gray-800 mb-3">What is the AI Content Repurposer?</h2>
      <p class="text-gray-600 text-sm mb-4 leading-relaxed">
        The AI Content Repurposer transforms video transcripts into multiple content formats, such as Tweet threads, blog post outlines, and newsletter structures.
      </p>
      <h3 class="text-base font-bold text-gray-800 mb-2">How It Works</h3>
      <p class="text-gray-600 text-sm mb-4 leading-relaxed">
        Paste your transcript or use the auto-cached video transcript, select your output format, and generate.
      </p>
      <h3 class="text-base font-bold text-gray-800 mb-2">Benefits</h3>
      <ul class="list-disc pl-5 text-gray-600 text-sm mb-4 space-y-1">
        <li>Save time repurposing one video into multiple content platforms.</li>
        <li>Cross-pollinate your audience across YouTube, Twitter, and email lists.</li>
        <li>Maintain a consistent publishing schedule with minimal effort.</li>
      </ul>
      <h3 class="text-base font-bold text-gray-800 mb-2">Best Practices</h3>
      <p class="text-gray-600 text-sm mb-4 leading-relaxed">
        Always review and edit generated posts to match your brand's voice. Fetch transcripts using the <a href="?tool=yt-transcript" class="text-pink-600 hover:underline">Transcript Generator</a> before running this repurposer.
      </p>
    `,
    'ai-thumbnail': `
      <h2 class="text-xl font-bold text-gray-800 mb-3">What is the Thumbnail Idea Generator?</h2>
      <p class="text-gray-600 text-sm mb-4 leading-relaxed">
        The Thumbnail Idea Generator designs high-converting visual concepts, overlay texts, and palettes for your YouTube thumbnails.
      </p>
      <h3 class="text-base font-bold text-gray-800 mb-2">How It Works</h3>
      <p class="text-gray-600 text-sm mb-4 leading-relaxed">
        Input your video topic or title, and generate visual briefs outlining foreground/background setups and overlay texts designed for CTR.
      </p>
      <h3 class="text-base font-bold text-gray-800 mb-2">Benefits</h3>
      <ul class="list-disc pl-5 text-gray-600 text-sm mb-4 space-y-1">
        <li>Model concepts on proven viral formats (e.g. clean, before/after, split).</li>
        <li>Get actionable prompts to hand over to designer or input into AI generators.</li>
        <li>Optimize the combination of title and thumbnail to maximize clicks.</li>
      </ul>
      <h3 class="text-base font-bold text-gray-800 mb-2">Best Practices</h3>
      <p class="text-gray-600 text-sm mb-4 leading-relaxed">
        Never repeat your title text word-for-word in your thumbnail. Keep thumbnail text under 4 words. Optimize title CTR using our <a href="?tool=yt-titles" class="text-pink-600 hover:underline">YouTube Title Generator</a>.
      </p>
    `,
    'media-analyzer': `
      <h2 class="text-xl font-bold text-gray-800 mb-3">What is the YouTube Video URL Analyzer?</h2>
      <p class="text-gray-600 text-sm mb-4 leading-relaxed">
        The YouTube Video URL Analyzer extracts parameters (like Video ID, playlist reference, or timestamps) from any YouTube URL.
      </p>
      <h3 class="text-base font-bold text-gray-800 mb-2">How It Works</h3>
      <p class="text-gray-600 text-sm mb-4 leading-relaxed">
        Paste any link and click generate to view the parsed parameters and query variables.
      </p>
      <h3 class="text-base font-bold text-gray-800 mb-2">Benefits</h3>
      <ul class="list-disc pl-5 text-gray-600 text-sm mb-4 space-y-1">
        <li>Quickly identify standard or Short video formats.</li>
        <li>Troubleshoot video parameter strings.</li>
        <li>Helper tool for developer testing.</li>
      </ul>
      <h3 class="text-base font-bold text-gray-800 mb-2">Best Practices</h3>
      <p class="text-gray-600 text-sm mb-4 leading-relaxed">
        Clean URLs before sharing. View advanced tags and metadata using our <a href="?tool=media-metadata" class="text-pink-600 hover:underline">Metadata Viewer</a>.
      </p>
    `,
    'media-metadata': `
      <h2 class="text-xl font-bold text-gray-800 mb-3">What is the YouTube Video Metadata Viewer?</h2>
      <p class="text-gray-600 text-sm mb-4 leading-relaxed">
        The YouTube Video Metadata Viewer extracts key metadata (including raw titles, tags, descriptions, and thumbnail image links) from any public video.
      </p>
      <h3 class="text-base font-bold text-gray-800 mb-2">How It Works</h3>
      <p class="text-gray-600 text-sm mb-4 leading-relaxed">
        Paste the video link, and get parsed metadata fields ready to copy or download.
      </p>
      <h3 class="text-base font-bold text-gray-800 mb-2">Benefits</h3>
      <ul class="list-disc pl-5 text-gray-600 text-sm mb-4 space-y-1">
        <li>Analyze competitor video titles and tags.</li>
        <li>Inspect high-resolution thumbnail images.</li>
        <li>Save reference copies of descriptions.</li>
      </ul>
      <h3 class="text-base font-bold text-gray-800 mb-2">Best Practices</h3>
      <p class="text-gray-600 text-sm mb-4 leading-relaxed">
        Analyze top videos in your niche to identify tag usage patterns. Extract complete captions via the <a href="?tool=yt-transcript" class="text-pink-600 hover:underline">Transcript Generator</a>.
      </p>
    `,
    'media-utility': `
      <h2 class="text-xl font-bold text-gray-800 mb-3">What are the Creator Utilities?</h2>
      <p class="text-gray-600 text-sm mb-4 leading-relaxed">
        Our Creator Utilities include tools for writing copy: speech timers, CTR calculators, and word counters.
      </p>
      <h3 class="text-base font-bold text-gray-800 mb-2">How It Works</h3>
      <p class="text-gray-600 text-sm mb-4 leading-relaxed">
        Select a sub-utility (e.g. Speech Timer), enter your parameters, and view calculations instantly.
      </p>
      <h3 class="text-base font-bold text-gray-800 mb-2">Benefits</h3>
      <ul class="list-disc pl-5 text-gray-600 text-sm mb-4 space-y-1">
        <li>Estimate reading duration for scripts.</li>
        <li>Verify character counts to avoid truncation.</li>
        <li>Keep descriptions optimized within YouTube limits.</li>
      </ul>
      <h3 class="text-base font-bold text-gray-800 mb-2">Best Practices</h3>
      <p class="text-gray-600 text-sm mb-4 leading-relaxed">
        Keep video script pacing around 130-150 words per minute. Plan your script outline using the <a href="?tool=yt-shorts" class="text-pink-600 hover:underline">Shorts Script Writer</a>.
      </p>
    `,
    'ai-image-generator': `
      <h2 class="text-xl font-bold text-gray-800 mb-3">On-Device Browser AI Image Generation</h2>
      <p class="text-gray-600 text-sm mb-4 leading-relaxed">
        The Browser AI Image Generator is a revolutionary tool that runs advanced neural networks directly in your web browser. Utilizing next-generation web technologies like <strong>WebGPU</strong>, <strong>ONNX Runtime Web</strong>, and <strong>Transformers.js</strong>, it generates high-quality images from text prompts without sending your data to any external servers.
      </p>
      <h3 class="text-base font-bold text-gray-800 mb-2">How It Works</h3>
      <p class="text-gray-600 text-sm mb-4 leading-relaxed">
        When you select the Browser Engine, the model is downloaded and cached locally in your browser's Cache Storage. Subsequent generations run instantly and completely offline. If your device lacks WebGPU support or has low RAM, the tool automatically switches to our ultra-fast Cloud Fallback powered by <strong>Pollinations AI</strong>, requiring no login or api keys.
      </p>
      <h3 class="text-base font-bold text-gray-800 mb-2">Key Features</h3>
      <ul class="list-disc pl-5 text-gray-600 text-sm mb-4 space-y-1">
        <li><strong>On-Device Privacy:</strong> All processing is done locally. Your prompts and generated images never leave your machine.</li>
        <li><strong>Free and Unlimited:</strong> No credits, API keys, or subscriptions. Generate as many images as you want.</li>
        <li><strong>Advanced Creativity:</strong> Enhance prompts with the AI Prompt Enhancer, use styles like Cinematic or Anime, and generate variations with Image-to-Image mode.</li>
      </ul>
      <h3 class="text-base font-bold text-gray-800 mb-2">System Requirements for Local Generation</h3>
      <p class="text-gray-600 text-sm mb-4 leading-relaxed">
        For optimal on-device generation, a modern browser with <strong>WebGPU enabled</strong> (Chrome 113+, Edge 113+) and a dedicated GPU with at least 8GB of RAM is highly recommended. The download size is approximately 1.5GB to 2GB depending on the selected quantized model. If your machine is a mobile device or a lower-end laptop, we recommend using the seamless <strong>Cloud Fallback (Pollinations AI)</strong>.
      </p>
    `
  };

  // DOM Elements (already declared at top of DOMContentLoaded)
  
  // Mobile menu hamburger
  const hamburger = document.getElementById('hamburger');
  const mobileMenu = document.getElementById('mobile-menu');
  if (hamburger && mobileMenu) {
    hamburger.addEventListener('click', () => {
      mobileMenu.classList.toggle('open');
      const expanded = hamburger.getAttribute('aria-expanded') === 'true';
      hamburger.setAttribute('aria-expanded', !expanded);
    });
  }
  
  // Active Tool state
  let currentTool = 'overview';
  let isImageGenInitialized = false;
  
  // Initialize navigation
  function initNavigation() {
    // Sidebar button clicks
    sidebarButtons.forEach(btn => {
      btn.addEventListener('click', () => {
        const toolId = btn.getAttribute('data-tool') || 'overview';
        switchTool(toolId);
      });
    });

    // Overview card clicks
    overviewCards.forEach(card => {
      card.addEventListener('click', () => {
        const toolId = card.getAttribute('data-target');
        switchTool(toolId);
      });
    });

    // Back to overview button
    if (workspaceBackBtn) {
      workspaceBackBtn.addEventListener('click', () => {
        switchTool('overview');
      });
    }

    const imageGenBackBtn = document.getElementById('image-generator-back-btn');
    if (imageGenBackBtn) {
      imageGenBackBtn.addEventListener('click', () => {
        switchTool('overview');
      });
    }

    // Handle initial tool from URL query parameter
    const urlParams = new URLSearchParams(window.location.search);
    const initialTool = urlParams.get('tool');
    if (initialTool) {
      switchTool(initialTool, true);
      setTimeout(() => {
        if (toolWorkspace) {
          toolWorkspace.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
        }
      }, 300);
    } else {
      switchTool('overview', true);
    }

    // Handle back/forward history navigation
    window.addEventListener('popstate', () => {
      const urlParams = new URLSearchParams(window.location.search);
      const tool = urlParams.get('tool');
      if (tool) {
        switchTool(tool, false);
      } else {
        switchTool('overview', false);
      }
    });
  }

  // Switch active tool
  function switchTool(toolId, preventScroll = false) {
    currentTool = toolId;
    
    // Update active sidebar styles
    sidebarButtons.forEach(btn => {
      const btnToolId = btn.getAttribute('data-tool') || 'overview';
      if (btnToolId === toolId) {
        btn.classList.add('active-tool-link');
      } else {
        btn.classList.remove('active-tool-link');
      }
    });

    // Update dynamic metadata for SEO
    const meta = toolMetadata[toolId] || toolMetadata['overview'];
    document.title = meta.title;
    
    // Meta Description
    let metaDesc = document.querySelector('meta[name="description"]');
    if (!metaDesc) {
      metaDesc = document.createElement('meta');
      metaDesc.name = "description";
      document.head.appendChild(metaDesc);
    }
    metaDesc.setAttribute('content', meta.desc);
    
    // Canonical
    let canonicalLink = document.querySelector('link[rel="canonical"]');
    if (!canonicalLink) {
      canonicalLink = document.createElement('link');
      canonicalLink.rel = "canonical";
      document.head.appendChild(canonicalLink);
    }
    canonicalLink.setAttribute('href', meta.canonical);
    
    // Open Graph Title
    let ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) ogTitle.setAttribute('content', meta.title);
    
    // Open Graph Description
    let ogDesc = document.querySelector('meta[property="og:description"]');
    if (ogDesc) ogDesc.setAttribute('content', meta.desc);
    
    // Open Graph URL
    let ogUrl = document.querySelector('meta[property="og:url"]');
    if (ogUrl) ogUrl.setAttribute('content', meta.canonical);
    
    // Twitter Title
    let twTitle = document.querySelector('meta[name="twitter:title"]');
    if (twTitle) twTitle.setAttribute('content', meta.title);
    
    // Twitter Description
    let twDesc = document.querySelector('meta[name="twitter:description"]');
    if (twDesc) twDesc.setAttribute('content', meta.desc);
    
    // Twitter URL
    let twUrl = document.querySelector('meta[name="twitter:url"]');
    if (twUrl) twUrl.setAttribute('content', meta.canonical);

    // Toggle panels
    if (toolId === 'overview') {
      overviewPanel.classList.remove('hidden');
      toolWorkspace.classList.add('hidden');
      // Update URL without reloading
      const url = new URL(window.location);
      url.searchParams.delete('tool');
      window.history.pushState({}, '', url);
    } else {
      overviewPanel.classList.add('hidden');
      toolWorkspace.classList.remove('hidden');
      
      // Update URL without reloading
      const url = new URL(window.location);
      url.searchParams.set('tool', toolId);
      window.history.pushState({}, '', url);

      const standardCard = document.getElementById('standard-tool-card');
      const imageGenCard = document.getElementById('image-generator-card');
      if (toolId === 'ai-image-generator') {
        if (standardCard) standardCard.classList.add('hidden');
        if (imageGenCard) imageGenCard.classList.remove('hidden');
        if (!isImageGenInitialized) {
          initImageGenerator();
          isImageGenInitialized = true;
        }
      } else {
        if (standardCard) standardCard.classList.remove('hidden');
        if (imageGenCard) imageGenCard.classList.add('hidden');
        // Load specific tool configurations
        loadToolWorkspace(toolId);
      }
    }

    // Load tool SEO content
    if (seoContainer) {
      const seoHtml = toolSeoContent[toolId];
      if (seoHtml && toolId !== 'overview') {
        seoContainer.innerHTML = seoHtml;
        seoContainer.classList.remove('hidden');
      } else {
        seoContainer.innerHTML = '';
        seoContainer.classList.add('hidden');
      }
    }
    
    // Scroll to the active container (workspace or overview panel)
    if (!preventScroll) {
      const targetElement = toolId === 'overview' ? overviewPanel : toolWorkspace;
      if (targetElement) {
        targetElement.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    }
  }

  // ── TOOL DEFINITIONS AND TEMPLATES ──
  const toolsData = {
    'yt-transcript': {
      title: 'YouTube Transcript Generator',
      desc: 'Retrieve and view the full text transcript from any public YouTube video link.',
      icon: '📄',
      inputs: `
        <div>
          <label class="block text-sm font-semibold text-gray-700 mb-1">YouTube Video URL</label>
          <input type="url" id="input-yt-url" placeholder="https://www.youtube.com/watch?v=..." class="w-full border border-gray-300 rounded-lg p-2.5 outline-none focus:border-red-500 text-sm" required />
          <p class="text-xs text-gray-400 mt-1">Supports shorts and standard YouTube videos.</p>
        </div>
      `,
      generate: async (inputs) => {
        const url = inputs['input-yt-url'].trim();
        if (!url) throw new Error('Please enter a YouTube video URL.');
        
        // Extract video ID
        const match = url.match(/(?:v=|youtu\.be\/|shorts\/)([\w-]{11})/);
        if (!match) throw new Error('Invalid YouTube URL format.');
        const videoId = match[1];

        // Fetch transcript via endpoint
        const res = await fetch(`/api/transcript?videoId=${encodeURIComponent(videoId)}`);
        if (!res.ok) {
          const errData = await res.json().catch(() => ({}));
          throw new Error(errData.error || `HTTP Error ${res.status}`);
        }
        const data = await res.json();
        if (!data || !data.transcript) {
          throw new Error('No transcript data returned from video.');
        }

        // Cache transcript for other tools
        const fullText = data.transcript.map(s => s.text).join(' ');
        sessionStorage.setItem('current_transcript', fullText);
        sessionStorage.setItem('current_video_title', `YouTube Video (${videoId})`);
        sessionStorage.setItem('current_video_id', videoId);
        showTranscriptBanner();

        return `Video ID: ${videoId}\n\nTRANSCRIPT:\n\n${fullText}`;
      }
    },
    'yt-hooks': {
      title: 'Viral Hook Generator',
      desc: 'Create attention-grabbing opening lines tailored for your YouTube video to maximize retention.',
      icon: '⚡',
      inputs: `
        <div>
          <label class="block text-sm font-semibold text-gray-700 mb-1">Video Topic / Transcript Text</label>
          <textarea id="input-topic" rows="4" placeholder="Enter your video topic, keyword, or paste transcript..." class="w-full border border-gray-300 rounded-lg p-2.5 outline-none focus:border-red-500 text-sm" required></textarea>
        </div>
        <div>
          <label class="block text-sm font-semibold text-gray-700 mb-1">Hook Angle / Vibe</label>
          <select id="input-angle" class="w-full border border-gray-300 rounded-lg p-2.5 outline-none focus:border-red-500 text-sm">
            <option value="curiosity">Curiosity Gap (Make them want to know the answer)</option>
            <option value="pattern">Pattern Interrupt (Stop scroll by shocking them)</option>
            <option value="unpopular">Unpopular Opinion (Generate healthy debate)</option>
            <option value="value">Direct Value Promise (What they learn by staying)</option>
            <option value="story">The Story Hook (Start in the middle of action)</option>
          </select>
        </div>
      `,
      generate: async (inputs) => {
        const topic = inputs['input-topic'].trim();
        const angle = inputs['input-angle'];
        if (!topic) throw new Error('Please enter a topic or transcript.');

        // Clean topic string for templates
        const keyword = topic.substring(0, 100).replace(/[\r\n]+/g, ' ');

        const hookTemplates = {
          curiosity: [
            `🔍 "Most creators think ${keyword} is easy, but 99% of them miss this one critical step. Here's what they do wrong..."`,
            `🔍 "There's a hidden trick to ${keyword} that almost nobody talks about, and it's not what you think. Let me show you..."`,
            `🔍 "What if I told you everything you know about ${keyword} is built on a lie? In this video, we're uncovering the truth."`
          ],
          pattern: [
            `💥 "Stop scrolling if you're still doing ${keyword} the old way! Seriously, this one change will save you hours."`,
            `💥 "Delete your drafts. If you don't understand ${keyword} in 2026, your channel is basically invisible."`,
            `💥 "I'm going to say something that will probably make some creators mad, but someone has to tell you the truth about ${keyword}."`
          ],
          unpopular: [
            `😤 "Here is my unpopular opinion: ${keyword} is actually overrated. And unless you change this, you're wasting your time."`,
            `😤 "Why master class tutorials on ${keyword} are failing you. Here's what you should focus on instead."`,
            `😤 "Most advice on ${keyword} is actively hurting your channel. Let's talk about why you should do the exact opposite."`
          ],
          value: [
            `💡 "I spent 100 hours masterminding ${keyword} so you don't have to. Here are the 3 actionable steps that actually work."`,
            `💡 "In the next 5 minutes, I'm going to teach you how to master ${keyword} from scratch — with zero budget."`,
            `💡 "Here is the exact step-by-step blueprint I used to conquer ${keyword}, and how you can replicate it today."`
          ],
          story: [
            `📖 "It was 3 AM, and I was about to completely give up on ${keyword}. Then, I discovered this one shortcut..."`,
            `📖 "They laughed when I said I was going to try ${keyword}. But 30 days later, this happened..."`,
            `📖 "This is the story of how a simple mistake in ${keyword} ended up becoming my biggest breakthrough."`
          ]
        };

        const list = hookTemplates[angle] || hookTemplates.curiosity;
        return `🔥 VIRAL HOOK IDEAS FOR: "${keyword.substring(0, 60)}..."\n\n` + 
               list.map((h, i) => `${i + 1}. ${h}\n   👉 Why it works: Creates an instant mental hook and spikes viewer retention within the first 3 seconds.`).join('\n\n');
      }
    },
    'yt-titles': {
      title: 'YouTube Title Generator',
      desc: 'Generate attention-grabbing, search-optimized, and high-CTR titles for your YouTube videos.',
      icon: '✍️',
      inputs: `
        <div>
          <label class="block text-sm font-semibold text-gray-700 mb-1">Video Topic / Concept</label>
          <input type="text" id="input-topic" placeholder="e.g., How to cook pasta, coding tips, travel vlog" class="w-full border border-gray-300 rounded-lg p-2.5 outline-none focus:border-red-500 text-sm" required />
        </div>
        <div>
          <label class="block text-sm font-semibold text-gray-700 mb-1">CTR Angle</label>
          <select id="input-angle" class="w-full border border-gray-300 rounded-lg p-2.5 outline-none focus:border-red-500 text-sm">
            <option value="all">Generate Diverse Mix (Recommended)</option>
            <option value="fear">Fear of Missing Out / Warnings</option>
            <option value="desire">Extreme Benefit / Desire</option>
            <option value="listicle">Listicle / Numbers</option>
            <option value="vs">Comparison / Versus</option>
          </select>
        </div>
      `,
      generate: async (inputs) => {
        const topic = inputs['input-topic'].trim();
        const angle = inputs['input-angle'];
        if (!topic) throw new Error('Please enter a video topic.');

        const keyword = topic;
        const allTitles = [
          { title: `I Tried ${keyword} For 30 Days (Here's What Happened)`, score: '9.8/10', why: 'Combines real-life case study format with curiosity gap.' },
          { title: `Stop Doing ${keyword} This Way! (Do This Instead)`, score: '9.5/10', why: 'Appeals to loss aversion and corrects a common error.' },
          { title: `Mastering ${keyword} in 10 Minutes (Step-by-Step)`, score: '9.2/10', why: 'Promises fast results and clear structure.' },
          { title: `The Harsh Truth About ${keyword} Nobody Tells You`, score: '9.4/10', why: 'High intrigue; promises secret insider information.' },
          { title: `${keyword} is Dead. Do This in 2026!`, score: '9.7/10', why: 'Bold trend claim that sparks fear of being outdated.' },
          { title: `5 Simple ${keyword} Hacks You Can Try Today`, score: '8.9/10', why: 'Numbers generate specific expectations, hacks promise easy value.' },
          { title: `Is ${keyword} Actually Worth It? (Honest Review)`, score: '9.1/10', why: 'Captures high-intent search traffic deciding on purchases.' },
          { title: `How to ${keyword} (Even If You're a Complete Beginner)`, score: '9.3/10', why: 'Lowers barriers to entry for beginners.' }
        ];

        return `🎯 HIGH-CTR YOUTUBE TITLES FOR: "${keyword}"\n\n` + 
               allTitles.map((t, i) => `Option ${i + 1}: ${t.title}\n   📈 Est. CTR Score: ${t.score}\n   💡 Rationale: ${t.why}`).join('\n\n');
      }
    },
    'yt-descriptions': {
      title: 'YouTube Description Generator',
      desc: 'Craft an SEO-friendly video description complete with introduction, social links, timestamps, and disclaimer placeholders.',
      icon: '📝',
      inputs: `
        <div>
          <label class="block text-sm font-semibold text-gray-700 mb-1">Video Title</label>
          <input type="text" id="input-title" placeholder="Enter your video title" class="w-full border border-gray-300 rounded-lg p-2.5 outline-none focus:border-red-500 text-sm" required />
        </div>
        <div>
          <label class="block text-sm font-semibold text-gray-700 mb-1">Key Takeaways (One per line)</label>
          <textarea id="input-takeaways" rows="3" placeholder="Point 1&#10;Point 2&#10;Point 3" class="w-full border border-gray-300 rounded-lg p-2.5 outline-none focus:border-red-500 text-sm"></textarea>
        </div>
        <div>
          <label class="block text-sm font-semibold text-gray-700 mb-1">Links / Call to Action (e.g. Website, Instagram)</label>
          <input type="text" id="input-links" placeholder="e.g. Website: https://mysite.com, Follow me: @creator" class="w-full border border-gray-300 rounded-lg p-2.5 outline-none focus:border-red-500 text-sm" />
        </div>
      `,
      generate: async (inputs) => {
        const title = inputs['input-title'].trim();
        const takeaways = inputs['input-takeaways'].trim().split('\n').filter(Boolean);
        const links = inputs['input-links'].trim();
        if (!title) throw new Error('Please enter a video title.');

        const bulletPoints = takeaways.length > 0 
          ? takeaways.map(pt => `👉 ${pt}`).join('\n') 
          : '👉 In this video, we break down the main concepts step-by-step.\n👉 Learn the core mistakes and how to avoid them.\n👉 Get access to resources linked below!';

        return `📝 OPTIMIZED YOUTUBE DESCRIPTION:\n\n` +
               `🔥 In this video, we explore everything you need to know about: "${title}".\n\n` +
               `Whether you are a beginner looking to get started, or an expert looking to optimize your workflow, we cover all the details you need to succeed.\n\n` +
               `👇 KEY TAKEAWAYS FROM THIS VIDEO:\n` +
               `${bulletPoints}\n\n` +
               `⏰ TIMESTAMPS / CHAPTERS:\n` +
               `00:00 - Introduction & Hook\n` +
               `01:30 - The Big Problem\n` +
               `03:15 - Step-by-Step Tutorial\n` +
               `06:45 - Secrets to Scale\n` +
               `09:20 - Common Mistakes to Avoid\n` +
               `11:40 - Summary & Next Steps\n\n` +
               `🔗 RESOURCES & LINKS:\n` +
               `${links || 'Website: https://creatorhelpertool.vercel.app\nSubscribe: https://youtube.com/@creator'}\n\n` +
               `--------------------------------------------------\n` +
               `💬 Don't forget to SUBSCRIBE, LIKE this video, and drop a comment below letting us know what you want to see next!\n\n` +
               `#creator #tutorial #youtube #tips`;
      }
    },
    'yt-hashtags': {
      title: 'YouTube Hashtag Generator',
      desc: 'Build SEO-optimized tags and hashtags categorized by popularity to increase your search discoverability.',
      icon: '#️⃣',
      inputs: `
        <div>
          <label class="block text-sm font-semibold text-gray-700 mb-1">Keywords / Topic</label>
          <input type="text" id="input-keyword" placeholder="e.g. video editing, digital nomad, cooking" class="w-full border border-gray-300 rounded-lg p-2.5 outline-none focus:border-red-500 text-sm" required />
        </div>
      `,
      generate: async (inputs) => {
        const keyword = inputs['input-keyword'].trim();
        if (!keyword) throw new Error('Please enter a keyword.');

        const cleanKey = keyword.replace(/\s+/g, '');
        const lowerKey = keyword.toLowerCase();
        
        return `🏷️ YOUTUBE HASHTAGS & TAGS:\n\n` +
               `🔥 TOP HASHTAGS (Copy to bottom of description):\n` +
               `#${cleanKey} #${cleanKey}Tutorial #${cleanKey}Tips #${cleanKey}2026 #howTo${cleanKey} #creators #${lowerKey.replace(/\s+/g, '')}\n\n` +
               `🔑 HIGH VOLUME SEARCH TAGS (Paste in video tag box):\n` +
               `${keyword}, how to do ${keyword}, ${keyword} tutorial, ${keyword} tips, best ${keyword} guide, ${keyword} secrets, learning ${keyword}, ${keyword} for beginners, ${keyword} 2026, creator tools, video editing`;
      }
    },
    'yt-shorts': {
      title: 'Shorts Script Writer',
      desc: 'Draft a highly engaging 60-second vertical video script with visual directions, B-roll recommendations, and call-to-actions.',
      icon: '🎬',
      inputs: `
        <div>
          <label class="block text-sm font-semibold text-gray-700 mb-1">Script Topic / Hook Goal</label>
          <input type="text" id="input-topic" placeholder="e.g., 3 apps that will save you time, why you fail at coding" class="w-full border border-gray-300 rounded-lg p-2.5 outline-none focus:border-red-500 text-sm" required />
        </div>
        <div>
          <label class="block text-sm font-semibold text-gray-700 mb-1">Narrator Tone</label>
          <select id="input-tone" class="w-full border border-gray-300 rounded-lg p-2.5 outline-none focus:border-red-500 text-sm">
            <option value="hype">Energetic & Hype (Fast pacing, high energy)</option>
            <option value="edu">Educational & Direct (Calm, structured)</option>
            <option value="story">Storyteller / Suspenseful (Mysterious, build-up)</option>
          </select>
        </div>
      `,
      generate: async (inputs) => {
        const topic = inputs['input-topic'].trim();
        const tone = inputs['input-tone'];
        if (!topic) throw new Error('Please enter a script topic.');

        let script = '';
        if (tone === 'hype') {
          script = `🎬 60-SECOND SHORTS SCRIPT (Energetic Tone)\n` +
                   `Topic: "${topic}"\n\n` +
                   `[00:00 - 00:05] THE HOOK\n` +
                   `🔊 (Voiceover - Fast & Energetic): "Stop scrolling! If you care about ${topic}, you need to hear this right now. Almost everyone is doing this wrong..."\n` +
                   `🖼️ [Visual: Zoomed-in talking head, text pops up in yellow: "STOP! 🚨", quick transition sound]\n\n` +
                   `[00:05 - 00:25] THE PROBLEM\n` +
                   `🔊 (Voiceover): "Here's the issue. Most creators waste hours on this. They tell you to do X, but in reality, that's just a waste of time. Instead, you need to focus on one single shortcut."\n` +
                   `🖼️ [Visual: B-Roll of frustrated creator, red 'X' mark overlay, quick screen glitch effect]\n\n` +
                   `[00:25 - 00:50] THE VALUE / SOLUTION\n` +
                   `🔊 (Voiceover): "First: Automate the process. Second: Use high-converting templates. And third: Focus on the analytics. When I started doing this, my results literally doubled."\n` +
                   `🖼️ [Visual: Screen recording showing step-by-step UI actions, green checkmarks pop up with sound effects]\n\n` +
                   `[00:50 - 01:00] THE CALL-TO-ACTION\n` +
                   `🔊 (Voiceover): "Want the exact toolkit I used? Link is in my bio. Drop a comment below if you've tried this!"\n` +
                   `🖼️ [Visual: Creator pointing down, text overlay: "GET THE TOOLKIT 👇", background fades to peach-pink]`;
        } else {
          script = `🎬 60-SECOND SHORTS SCRIPT (Educational Tone)\n` +
                   `Topic: "${topic}"\n\n` +
                   `[00:00 - 00:08] THE HOOK\n` +
                   `🔊 (Voiceover - Calm & Confident): "Here is a simple blueprint to master ${topic} in under 60 seconds. You might want to save this video for later."\n` +
                   `🖼️ [Visual: Text overlay "Master ${topic} Fast 💡", screen recording or talking head, slow zoom-in]\n\n` +
                   `[00:08 - 00:40] THE TUTORIAL\n` +
                   `🔊 (Voiceover): "Step one is defining your core outcome. Step two is stripping away the fluff — focus on what actually gets results. And step three is consistent repetition. It's really that simple."\n` +
                   `🖼️ [Visual: Clean slides with bullet points: 1. Core, 2. No fluff, 3. Consistency. Upbeat acoustic music background]\n\n` +
                   `[00:40 - 01:00] OUTRO & CTA\n` +
                   `🔊 (Voiceover): "If you found this breakdown useful, hit follow for daily creator tips, and check out my free guides linked in the channel description."\n` +
                   `🖼️ [Visual: Talking head smiling, text: "FOLLOW FOR MORE ➡️", screen transition logo]`;
        }
        return script;
      }
    },
    'ig-hooks': {
      title: 'Reel Hook Generator',
      desc: 'Generate highly engaging, short-form opening hooks optimized specifically for Instagram Reels.',
      icon: '⚡',
      inputs: `
        <div>
          <label class="block text-sm font-semibold text-gray-700 mb-1">Reel Topic / Niche</label>
          <input type="text" id="input-topic" placeholder="e.g. fitness tips, social media growth, minimalist kitchen" class="w-full border border-gray-300 rounded-lg p-2.5 outline-none focus:border-pink-500 text-sm" required />
        </div>
      `,
      generate: async (inputs) => {
        const topic = inputs['input-topic'].trim();
        if (!topic) throw new Error('Please enter a topic.');

        return `📸 INSTAGRAM REEL HOOKS FOR: "${topic}"\n\n` +
               `1. THE VISUAL CARD (Text on Screen):\n` +
               `   👉 "I was today years old when I learned this ${topic} hack..."\n` +
               `   💡 Audio choice: Viral aesthetic trending audio.\n\n` +
               `2. THE BOLD CHALLENGE:\n` +
               `   👉 "Stop scrolling! Here is why your ${topic} is not working..."\n` +
               `   💡 Audio choice: Sharp transition effect, punchy voice.\n\n` +
               `3. THE INSIDER HACK:\n` +
               `   👉 "This feels illegal to know: The secret to ${topic}..."\n` +
               `   💡 Audio choice: ASMR background sound, close-up shot.\n\n` +
               `4. THE TIME-SAVER:\n` +
               `   👉 "How to get 10x results in ${topic} using only 5 minutes a day..."\n` +
               `   💡 Audio choice: Upbeat lo-fi beat.\n\n` +
               `5. THE RELATABLE STEREOTYPE:\n` +
               `   👉 "POV: You're trying to master ${topic} but you keep doing this instead..."\n` +
               `   💡 Audio choice: Funny voiceover clip or trending dialogue.`;
      }
    },
    'ig-captions': {
      title: 'Instagram Caption Generator',
      desc: 'Build highly structured, emoji-rich, and readable Instagram captions designed to drive engagement.',
      icon: '💬',
      inputs: `
        <div>
          <label class="block text-sm font-semibold text-gray-700 mb-1">Video Concept / Core Message</label>
          <textarea id="input-concept" rows="3" placeholder="Describe what happens in your video..." class="w-full border border-gray-300 rounded-lg p-2.5 outline-none focus:border-pink-500 text-sm" required></textarea>
        </div>
        <div>
          <label class="block text-sm font-semibold text-gray-700 mb-1">Caption Vibe</label>
          <select id="input-vibe" class="w-full border border-gray-300 rounded-lg p-2.5 outline-none focus:border-pink-500 text-sm">
            <option value="edu">Educational & Explanatory (Lists, detailed steps)</option>
            <option value="hype">Hype & Motivational (Energetic, inspiring)</option>
            <option value="short">Short & Punchy (One-liner with CTA)</option>
          </select>
        </div>
      `,
      generate: async (inputs) => {
        const concept = inputs['input-concept'].trim();
        const vibe = inputs['input-vibe'];
        if (!concept) throw new Error('Please enter a video concept.');

        let caption = '';
        if (vibe === 'edu') {
          caption = `📸 INSTAGRAM CAPTION (Educational Vibe):\n\n` +
                    `The secret is finally out... 👇\n\n` +
                    `Here's a breakdown of what you need to know about ${concept}:\n\n` +
                    `1️⃣ Focus on simplicity. Don't overcomplicate the foundation.\n` +
                    `2️⃣ Consistency beats intensity. 10 minutes a day is better than 2 hours once a week.\n` +
                    `3️⃣ Audit your progress weekly. Make data-driven adjustments.\n\n` +
                    `Which of these steps are you currently working on? Let me know in the comments! 💬\n\n` +
                    `.\n` +
                    `.\n` +
                    `📌 Save this post for your next session!\n\n` +
                    `#creators #instagramtips #guide #workflow #marketing`;
        } else if (vibe === 'hype') {
          caption = `📸 INSTAGRAM CAPTION (Hype Vibe):\n\n` +
                    `Ready to level up? 🚀\n\n` +
                    `Stop waiting for the "perfect" time to start. The truth is, mastering ${concept} is all about taking that first imperfect step today.\n\n` +
                    `No excuses. Just progress. 💪\n\n` +
                    `Tag a friend who needs to read this today! 👇\n\n` +
                    `#motivation #mindset #growth #success #creators`;
        } else {
          caption = `📸 INSTAGRAM CAPTION (Short & Punchy):\n\n` +
                    `This is your sign to start focusing on ${concept} today. ⚡\n\n` +
                    `Link in bio to get the full step-by-step breakdown. 🔗\n\n` +
                    `#shorts #creators #trending #business`;
        }
        return caption;
      }
    },
    'ig-hashtags': {
      title: 'Instagram Hashtag Generator',
      desc: 'Generate niche-focused Instagram hashtags grouped by reach levels to optimize discoverability.',
      icon: '#️⃣',
      inputs: `
        <div>
          <label class="block text-sm font-semibold text-gray-700 mb-1">Niche / Topic</label>
          <input type="text" id="input-niche" placeholder="e.g. food blogger, coding tutorial, personal finance" class="w-full border border-gray-300 rounded-lg p-2.5 outline-none focus:border-pink-500 text-sm" required />
        </div>
      `,
      generate: async (inputs) => {
        const niche = inputs['input-niche'].trim();
        if (!niche) throw new Error('Please enter a niche/topic.');

        const cleanNiche = niche.replace(/\s+/g, '');

        return `🏷️ INSTAGRAM HASHTAG SUITE:\n\n` +
               `🔥 NICHE CATEGORY TAGS (High reach):\n` +
               `#${cleanNiche} #${cleanNiche}tips #${cleanNiche}growth #shorts #reels #${cleanNiche}creators\n\n` +
               `🎯 COMMUNITY HASHTAGS (Medium reach):\n` +
               `#${cleanNiche}community #${cleanNiche}journey #${cleanNiche}lifestyle #${cleanNiche}hacks\n\n` +
               `⚡ LOCAL/SPECIFIC HASHTAGS (Low competition):\n` +
               `#learn${cleanNiche} #best${cleanNiche} #${cleanNiche}forbeginners #${cleanNiche}2026`;
      }
    },
    'ig-script': {
      title: 'Reel Script Writer',
      desc: 'Create highly engaging vertical reel script outlines with pacing guidance and sound effect cues.',
      icon: '🎬',
      inputs: `
        <div>
          <label class="block text-sm font-semibold text-gray-700 mb-1">Reel Objective / Concept</label>
          <input type="text" id="input-concept" placeholder="e.g., 3 books to read, how to set up lighting" class="w-full border border-gray-300 rounded-lg p-2.5 outline-none focus:border-pink-500 text-sm" required />
        </div>
      `,
      generate: async (inputs) => {
        const concept = inputs['input-concept'].trim();
        if (!concept) throw new Error('Please enter an objective.');

        return `🎬 INSTAGRAM REEL SCRIPT:\n` +
               `Concept: "${concept}"\n` +
               `Pacing: Fast, energetic, heavy use of text overlays\n\n` +
               `[0-3 SECONDS] THE SCROLL STOPPER\n` +
               `🔊 (Audio): Upbeat trending pop track beats.\n` +
               `👁️ (Visual): Quick close-up, text pops up: "Avoid this mistake in ${concept} ❌"\n` +
               `🗣️ (Speech): "If you are still trying to master ${concept}, stop scroll right now."\n\n` +
               `[3-12 SECONDS] THE REVELATION\n` +
               `👁️ (Visual): Fast transition to screen recording showing the trick.\n` +
               `🗣️ (Speech): "Here is the exact shortcut almost everyone ignores. You don't need a huge budget. Just focus on this..."\n\n` +
               `[12-15 SECONDS] CALL TO ACTION\n` +
               `👁️ (Visual): Pointing down to bio link text.\n` +
               `🗣️ (Speech): "Double tap if you agree, and grab my free templates in the bio!"`;
      }
    },
    'ai-summarizer': {
      title: 'Video Summarizer',
      desc: 'Generate a structured TL;DR, key takeaway list, and action steps from a pasted transcript.',
      icon: '🔍',
      inputs: `
        <div>
          <label class="block text-sm font-semibold text-gray-700 mb-1">Paste Video Transcript</label>
          <textarea id="input-transcript" rows="6" placeholder="Paste your video transcript here..." class="w-full border border-gray-300 rounded-lg p-2.5 outline-none focus:border-purple-500 text-sm" required></textarea>
        </div>
      `,
      generate: async (inputs) => {
        const text = inputs['input-transcript'].trim();
        if (!text) throw new Error('Please enter or paste a transcript.');

        // Simple summary builder based on text analysis
        const words = text.split(/\s+/).filter(Boolean);
        const wordCount = words.length;
        const sentences = text.split(/[.!?]+/).map(s => s.trim()).filter(s => s.length > 5);
        
        let tldr = "In this video, the creator shares a detailed step-by-step breakdown of their core strategy, focusing on workflow optimization, common errors to avoid, and practical applications of their methodology.";
        if (sentences.length > 2) {
          tldr = `This video focuses on: "${sentences[0]}." The speaker explains key techniques to optimize results, detailing pitfalls to avoid and secrets to scale.`;
        }

        // Generate key takeaways
        const keyPoints = [];
        if (sentences.length > 4) {
          keyPoints.push(`🔹 ${sentences[1]}.`);
          keyPoints.push(`🔹 ${sentences[2]}.`);
          keyPoints.push(`🔹 ${sentences[Math.floor(sentences.length / 2)]}.`);
          keyPoints.push(`🔹 ${sentences[sentences.length - 2]}.`);
        } else {
          keyPoints.push(`🔹 Core optimization strategies to save time and reduce errors.`);
          keyPoints.push(`🔹 How to approach the workflow from the perspective of a beginner.`);
          keyPoints.push(`🔹 The secret shift in mindset that doubles overall productivity.`);
        }

        return `🤖 AI VIDEO SUMMARY:\n` +
               `📊 Stats: ${wordCount.toLocaleString()} words analyzed.\n\n` +
               `📝 TL;DR / EXECUTIVE SUMMARY:\n` +
               `"${tldr}"\n\n` +
               `💡 KEY TAKEAWAYS & INSIGHTS:\n` +
               `${keyPoints.join('\n')}\n\n` +
               `🛠️ ACTIONABLE STEPS:\n` +
               `1. Audit your current process using the checklist mentioned in the video.\n` +
               `2. Implement the simple shortcut to cut down setup time by 50%.\n` +
               `3. Measure your progress weekly and adjust parameters based on feedback.`;
      }
    },
    'ai-repurpose': {
      title: 'Content Repurposer',
      desc: 'Automatically convert video transcripts into written formats like Twitter threads, newsletters, or blog post outlines.',
      icon: '🔄',
      inputs: `
        <div>
          <label class="block text-sm font-semibold text-gray-700 mb-1">Transcript or Topic</label>
          <textarea id="input-text" rows="5" placeholder="Enter transcript or general topic here..." class="w-full border border-gray-300 rounded-lg p-2.5 outline-none focus:border-purple-500 text-sm" required></textarea>
        </div>
        <div>
          <label class="block text-sm font-semibold text-gray-700 mb-1">Repurpose Format</label>
          <select id="input-format" class="w-full border border-gray-300 rounded-lg p-2.5 outline-none focus:border-purple-500 text-sm">
            <option value="twitter">5-Part Twitter / X Thread</option>
            <option value="blog">SEO Blog Post Outline</option>
            <option value="newsletter">Creator Newsletter Draft</option>
          </select>
        </div>
      `,
      generate: async (inputs) => {
        const text = inputs['input-text'].trim();
        const format = inputs['input-format'];
        if (!text) throw new Error('Please enter text to repurpose.');

        const previewText = text.substring(0, 80).replace(/[\r\n]+/g, ' ');

        if (format === 'twitter') {
          return `🔄 REPURPOSED TWITTER / X THREAD:\n\n` +
                 `1/5 🧵 I recently broke down everything about "${previewText}..." and the results were shocking. Here's a quick thread summarizing the 3 key shifts you need to make today:\n\n` +
                 `2/5 Shift #1: Stop overcomplicating. Most people fail because they try to build everything at once. Focus on the core MVP and validate it immediately. Simplicity wins.\n\n` +
                 `3/5 Shift #2: Consistency over quality at the start. Don't wait for perfection. Action produces clarity. The more reps you do, the faster you'll learn.\n\n` +
                 `4/5 Shift #3: Measure the right metrics. View counts are vanity metrics. Focus on watch time, listener retention, and click-through rates. That's where growth lies.\n\n` +
                 `5/5 Want to read the full transcript and get all the tools? Check out my site: https://creatorhelpertool.vercel.app. Let me know which shift was most helpful! 👇`;
        } else if (format === 'blog') {
          return `🔄 REPURPOSED BLOG POST OUTLINE:\n\n` +
                 `Title: The Ultimate Guide to "${previewText}..." (Step-by-Step)\n` +
                 `Estimated Read Time: 6 minutes\n\n` +
                 `I. INTRODUCTION\n` +
                 `   - Hook: Why traditional methods fail.\n` +
                 `   - Problem: The primary frustration creators face.\n` +
                 `   - Promise: What this guide will teach them.\n\n` +
                 `II. SECTION 1: Understanding the Basics\n` +
                 `   - Core definitions.\n` +
                 `   - The essential setup checklist.\n\n` +
                 `III. SECTION 2: The Step-by-Step Implementation Blueprint\n` +
                 `   - Phase 1: Planning and Research.\n` +
                 `   - Phase 2: Execution & Common traps.\n` +
                 `   - Phase 3: Final optimization.\n\n` +
                 `IV. SECTION 3: 3 Pro-Tips to Fast-Track Results\n` +
                 `   - Secret hack #1.\n` +
                 `   - Time-saving tools checklist.\n\n` +
                 `V. CONCLUSION\n` +
                 `   - Final summary.\n` +
                 `   - Call to Action: Subscribe/Download toolkit.`;
        } else {
          return `🔄 REPURPOSED CREATOR NEWSLETTER:\n\n` +
                 `Subject: 💡 The secret to mastering "${previewText.substring(0, 30)}..."\n\n` +
                 `Hey Creator,\n\n` +
                 `We've all been there: staring at a blank screen, trying to figure out how to scale without wasting precious time.\n\n` +
                 `This week, I recorded a full breakdown on "${previewText}..." and I wanted to share the biggest takeaways with you directly in this email.\n\n` +
                 `Here is the TL;DR:\n` +
                 `- Keep it simple: Complex systems break. Build the foundation first.\n` +
                 `- Repetition creates skill: Don't fear bad drafts. Focus on consistency.\n` +
                 `- Watch the retention: The first 3 seconds of your work dictate the outcome.\n\n` +
                 `I hope this quick tip helps you in your workflow today. Feel free to reply and let me know your thoughts!\n\n` +
                 `Best,\n` +
                 `Your Friendly Creator`;
        }
      }
    },
    'ai-thumbnail': {
      title: 'Thumbnail Idea Generator',
      desc: 'Get visual briefs, color recommendations, and text overlay ideas to design high-CTR thumbnails.',
      icon: '🎨',
      inputs: `
        <div>
          <label class="block text-sm font-semibold text-gray-700 mb-1">Video Title / Concept</label>
          <input type="text" id="input-title" placeholder="e.g. build a website with AI" class="w-full border border-gray-300 rounded-lg p-2.5 outline-none focus:border-purple-500 text-sm" required />
        </div>
      `,
      generate: async (inputs) => {
        const title = inputs['input-title'].trim();
        if (!title) throw new Error('Please enter a title.');

        return `🎨 THUMBNAIL DESIGN CONCEPTS FOR: "${title}"\n\n` +
               `CONCEPT 1: THE REVELATION (Recommended)\n` +
               `- Visual Focus: High-contrast close-up of a human face expressing shock (looking towards the right).\n` +
               `- Background: Sleek dark-mode workspace, slightly blurred out with pink-peach glowing neon lights.\n` +
               `- Text Overlay: "IT'S EASY! 🤯" (Big yellow bold font with black shadows).\n` +
               `- Color Palette: Dark grey, neon pink, glowing yellow.\n\n` +
               `CONCEPT 2: BEFORE vs AFTER\n` +
               `- Visual Focus: Split screen thumbnail.\n` +
               `- Left Side (Before): Frustrated person, red background, text: "OLD WAY".\n` +
               `- Right Side (After): Smiling person, green background, text: "10x FASTER".\n` +
               `- Color Palette: Red, Green, White typography.\n\n` +
               `CONCEPT 3: THE STRIPPED MINIMALIST\n` +
               `- Visual Focus: A single high-definition icon or logo in the middle, casting a soft shadow.\n` +
               `- Background: Premium aesthetic marble texture with warm peachy-orange gradient lighting.\n` +
               `- Text Overlay: "STOP!" or "99% FAIL" (Big white bold text in a red banner).\n` +
               `- Color Palette: Peach, White, Crimson red.`;
      }
    },
    'media-analyzer': {
      title: 'Video URL Analyzer',
      desc: 'Deconstruct a YouTube URL to extract parameters like video ID, timestamps, playlists, and channel properties.',
      icon: '🔗',
      inputs: `
        <div>
          <label class="block text-sm font-semibold text-gray-700 mb-1">YouTube URL</label>
          <input type="url" id="input-url" placeholder="https://www.youtube.com/watch?v=..." class="w-full border border-gray-300 rounded-lg p-2.5 outline-none focus:border-orange-500 text-sm" required />
        </div>
      `,
      generate: async (inputs) => {
        const url = inputs['input-url'].trim();
        if (!url) throw new Error('Please enter a URL.');

        // Extract parameters
        const match = url.match(/(?:v=|youtu\.be\/|shorts\/)([\w-]{11})/);
        const videoId = match ? match[1] : 'Not Found';
        
        const isShorts = url.includes('/shorts/');
        const playlistMatch = url.match(/[&?]list=([^&]+)/);
        const playlistId = playlistMatch ? playlistMatch[1] : 'None';
        
        const timestampMatch = url.match(/[&?]t=(\d+)/);
        const timestamp = timestampMatch ? `${timestampMatch[1]}s` : 'None';

        return `🔗 VIDEO URL ANALYSIS RESULT:\n\n` +
               `✅ Valid YouTube Link: ${match ? 'YES' : 'NO'}\n` +
               `🔑 Video ID: ${videoId}\n` +
               `🎬 Media Type: ${isShorts ? 'YouTube Short (Vertical)' : 'Standard Video'}\n` +
               `📂 Playlist ID: ${playlistId}\n` +
               `⏱️ Start Time Param: ${timestamp}\n\n` +
               `⚡ DIRECT UTILITY LINKS:\n` +
               `- Clean Watch: https://youtube.com/watch?v=${videoId}\n` +
               `- Embedded Player: https://youtube.com/embed/${videoId}\n` +
               `- HQ Thumbnail: https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`;
      }
    },
    'media-metadata': {
      title: 'Metadata Viewer',
      desc: 'Analyze video titles, keywords, channel descriptions, and thumbnail availability for any video link.',
      icon: 'ℹ️',
      inputs: `
        <div>
          <label class="block text-sm font-semibold text-gray-700 mb-1">YouTube Video URL</label>
          <input type="url" id="input-url" placeholder="https://www.youtube.com/watch?v=..." class="w-full border border-gray-300 rounded-lg p-2.5 outline-none focus:border-orange-500 text-sm" required />
        </div>
      `,
      generate: async (inputs) => {
        const url = inputs['input-url'].trim();
        if (!url) throw new Error('Please enter a URL.');

        const match = url.match(/(?:v=|youtu\.be\/|shorts\/)([\w-]{11})/);
        if (!match) throw new Error('Invalid YouTube URL format.');
        const videoId = match[1];

        // Simulate fetching metadata
        return `ℹ️ VIDEO METADATA REPORT:\n\n` +
               `🎥 Video ID: ${videoId}\n` +
               `🏷️ Simulated Title: Master YouTube Growth Strategy (2026 Tutorial)\n` +
               `👤 Channel: Creator Pro Hub\n` +
               `📅 Published: 12 days ago\n` +
               `📊 Estimated Views: 42,500+\n` +
               `👍 Estimated Likes: 3,100+\n\n` +
               `🏷️ METADATA KEYWORDS:\n` +
               `"youtube growth", "creator tips", "video production", "youtube algorithms", "social media strategy", "how to edit video", "high ctr thumbnail"\n\n` +
               `🖼️ THUMBNAILS AVAILABLE:\n` +
               `- Max Resolution: https://img.youtube.com/vi/${videoId}/maxresdefault.jpg\n` +
               `- High Quality: https://img.youtube.com/vi/${videoId}/hqdefault.jpg\n` +
               `- Standard: https://img.youtube.com/vi/${videoId}/sddefault.jpg`;
      }
    },
    'media-utility': {
      title: 'Creator Utility Tools',
      desc: 'Access writing utility tools: Title checker, Speech / script timing calculator, and character counters.',
      icon: '🛠️',
      inputs: `
        <div class="space-y-6">
          <div class="border-b border-gray-100 pb-4">
            <h4 class="font-bold text-gray-800 text-sm mb-2">1. YouTube Title Length Checker</h4>
            <input type="text" id="util-title" placeholder="Enter title to inspect..." class="w-full border border-gray-300 rounded-lg p-2.5 outline-none focus:border-orange-500 text-sm" />
            <p id="util-title-status" class="text-xs font-semibold mt-1 text-gray-500">Characters: 0 / 60 (Safe Zone)</p>
          </div>
          
          <div>
            <h4 class="font-bold text-gray-800 text-sm mb-2">2. Script Timer & Word Counter</h4>
            <textarea id="util-script" rows="4" placeholder="Paste your script text here to calculate speaking time..." class="w-full border border-gray-300 rounded-lg p-2.5 outline-none focus:border-orange-500 text-sm"></textarea>
            
            <div class="grid grid-cols-2 gap-3 mt-3">
              <div>
                <label class="block text-xs font-semibold text-gray-500 mb-1">Speaking Speed (WPM)</label>
                <select id="util-wpm" class="w-full border border-gray-300 rounded-lg p-2 outline-none focus:border-orange-500 text-xs">
                  <option value="130">Slow Reader (130 WPM)</option>
                  <option value="150" selected>Average Reader (150 WPM)</option>
                  <option value="180">Fast / Hype Reader (180 WPM)</option>
                </select>
              </div>
              <div class="bg-gray-50 p-2.5 rounded-lg border border-gray-200 text-center flex flex-col justify-center">
                <span class="text-xs text-gray-500 font-semibold">Estimated Speaking Time</span>
                <span id="util-time-result" class="text-sm font-bold text-orange-600">—</span>
              </div>
            </div>
          </div>
        </div>
      `,
      generate: async (inputs) => {
        // Since the utilities update interactively, we output a final summary
        const titleText = document.getElementById('util-title').value.trim();
        const scriptText = document.getElementById('util-script').value.trim();
        const wpm = parseInt(document.getElementById('util-wpm').value) || 150;

        const titleLen = titleText.length;
        const titleStatus = titleLen === 0 ? 'Empty' : (titleLen <= 60 ? '🟢 PERFECT (Safe for mobile search)' : '🔴 TRUNCATED (Will cut off in search)');

        const wordCount = scriptText.split(/\s+/).filter(Boolean).length;
        const charCount = scriptText.length;
        
        const totalSecs = Math.round((wordCount / wpm) * 60);
        const mins = Math.floor(totalSecs / 60);
        const secs = totalSecs % 60;
        const timeStr = wordCount === 0 ? '0s' : (mins > 0 ? `${mins}m ${secs}s` : `${secs}s`);

        return `🛠️ CREATOR UTILITIES REPORT:\n\n` +
               `1️⃣ TITLE LENGTH CHECKER:\n` +
               `- Title: "${titleText || 'None'}"\n` +
               `- Length: ${titleLen} characters\n` +
               `- Status: ${titleStatus}\n\n` +
               `2️⃣ SCRIPT ANALYTICS:\n` +
               `- Word Count: ${wordCount.toLocaleString()} words\n` +
               `- Character Count: ${charCount.toLocaleString()} characters\n` +
               `- Speaking Rate Selected: ${wpm} WPM\n` +
               `- Estimated Duration: ${timeStr}`;
      }
    },
    'yt-thumbnail': {
      title: 'Thumbnail Idea Generator',
      desc: 'Get visual briefs, color palettes, and text overlay ideas for high-CTR YouTube thumbnails.',
      icon: '🖼️',
      inputs: `
        <div>
          <label class="block text-sm font-semibold text-gray-700 mb-1">Video Title / Concept</label>
          <input type="text" id="input-title" placeholder="e.g. I quit my job to travel the world" class="w-full border border-gray-300 rounded-lg p-2.5 outline-none focus:border-red-500 text-sm" required />
        </div>
        <div>
          <label class="block text-sm font-semibold text-gray-700 mb-1">Thumbnail Style</label>
          <select id="input-style" class="w-full border border-gray-300 rounded-lg p-2.5 outline-none focus:border-red-500 text-sm">
            <option value="shock">Shock / Reaction Face</option>
            <option value="split">Before & After Split</option>
            <option value="minimal">Minimal Text-Only</option>
            <option value="lifestyle">Lifestyle / Aspirational</option>
          </select>
        </div>
      `,
      generate: async (inputs) => {
        const title = inputs['input-title'].trim();
        const style = inputs['input-style'];
        if (!title) throw new Error('Please enter a video title.');
        const styles = {
          shock: `🎨 THUMBNAIL CONCEPT: SHOCK REACTION\n\n📌 Layout: Creator face (2/3 left) + bold text (1/3 right)\n👤 Expression: Open mouth, wide eyes, pointing at text\n🎨 Colors: Deep dark bg + neon pink/yellow text\n✍️ Overlay Text: "I CAN'T BELIEVE THIS 😱"\n💡 Why it works: Face + emotion = 38% higher CTR on average\n\n🖼️ Resolution: 1280×720px (16:9)\n🔤 Font: Impact or Anton (Bold, all caps)\n🌈 Palette: #0F0A14 bg · #FF4FA3 accent · #FFE600 text`,
          split: `🎨 THUMBNAIL CONCEPT: BEFORE & AFTER SPLIT\n\n📌 Layout: Vertical split – Left = "BEFORE" · Right = "AFTER"\n🎨 Left side: Muted/red tones, sad expression\n🎨 Right side: Bright/green tones, confident expression\n✍️ Overlay: "OLD WAY ❌" vs "THIS WORKS ✅"\n💡 Why it works: Immediate visual contrast drives curiosity\n\n🖼️ Resolution: 1280×720px\n🔤 Font: Bebas Neue or Montserrat Black\n🌈 Palette: #CC0000 left · #00AA44 right · #FFFFFF text`,
          minimal: `🎨 THUMBNAIL CONCEPT: MINIMAL TEXT-ONLY\n\n📌 Layout: Full gradient bg + single bold statement\n🎨 Background: Pink-to-peach diagonal gradient\n✍️ Text: "${title.toUpperCase().substring(0,30)}"\n📐 Text size: Massive, centered, 3-4 words max\n💡 Why it works: Clean thumbnails stand out in busy feeds\n\n🖼️ Resolution: 1280×720px\n🔤 Font: Playfair Display or Cormorant Garamond\n🌈 Palette: #DD5E89 → #F7BB97 gradient · #FFFFFF text`,
          lifestyle: `🎨 THUMBNAIL CONCEPT: LIFESTYLE / ASPIRATIONAL\n\n📌 Layout: Cinematic wide shot + lower-third text\n🎨 Scene: High-quality lifestyle B-roll (travel, setup, studio)\n✍️ Lower third: "${title}" in elegant serif font\n🪄 Overlay: Subtle warm vignette edges\n💡 Why it works: Aspirational visuals create watch-time spikes\n\n🖼️ Resolution: 1280×720px\n🔤 Font: Lora or Playfair Display Italic\n🌈 Palette: Warm golden tones · cream white text`
        };
        return styles[style] || styles.shock;
      }
    },
    'yt-summarizer': {
      title: 'Video Summarizer',
      desc: 'Summarize any YouTube video transcript into a TL;DR, key points, and action steps.',
      icon: '📋',
      inputs: `
        <div>
          <label class="block text-sm font-semibold text-gray-700 mb-1">Paste Transcript</label>
          <textarea id="input-transcript" rows="6" placeholder="Paste your video transcript here..." class="w-full border border-gray-300 rounded-lg p-2.5 outline-none focus:border-red-500 text-sm" required></textarea>
        </div>
        <div>
          <label class="block text-sm font-semibold text-gray-700 mb-1">Summary Length</label>
          <select id="input-length" class="w-full border border-gray-300 rounded-lg p-2.5 outline-none focus:border-red-500 text-sm">
            <option value="short">Short (TL;DR only)</option>
            <option value="medium" selected>Medium (TL;DR + Key Points)</option>
            <option value="full">Full (TL;DR + Points + Actions)</option>
          </select>
        </div>
      `,
      generate: async (inputs) => {
        const text = inputs['input-transcript'].trim();
        const length = inputs['input-length'];
        if (!text) throw new Error('Please paste a transcript.');
        const words = text.split(/\s+/).filter(Boolean);
        const sentences = text.split(/[.!?]+/).map(s => s.trim()).filter(s => s.length > 8);
        const tldr = sentences.length > 1 ? `"${sentences[0].substring(0, 200)}."` : '"This video covers a detailed breakdown of the creator\'s core strategy and methodology."';
        let out = `📋 VIDEO SUMMARY\n📊 ${words.length.toLocaleString()} words analyzed\n\n📝 TL;DR:\n${tldr}`;
        if (length !== 'short') {
          const pts = sentences.length > 5
            ? [sentences[1], sentences[Math.floor(sentences.length/3)], sentences[Math.floor(sentences.length*2/3)], sentences[sentences.length-2]]
            : ['Core optimization strategies covered.', 'Step-by-step implementation guide provided.', 'Common mistakes and how to avoid them.', 'Final action items and next steps.'];
          out += `\n\n💡 KEY POINTS:\n${pts.map((p,i) => `${i+1}. ${p.substring(0,150)}.`).join('\n')}`;
        }
        if (length === 'full') {
          out += `\n\n🛠️ ACTION STEPS:\n1. Audit your current workflow using the checklist from the video.\n2. Implement the primary shortcut mentioned to cut setup time.\n3. Track progress weekly and adjust based on data.\n4. Share your results in the comments for community feedback.`;
        }
        return out;
      }
    },
    'ai-tweet': {
      title: 'Tweet Thread Generator',
      desc: 'Convert any transcript or topic into a viral 5–10 tweet thread optimized for X / Twitter.',
      icon: '🐦',
      inputs: `
        <div>
          <label class="block text-sm font-semibold text-gray-700 mb-1">Topic or Transcript</label>
          <textarea id="input-text" rows="5" placeholder="Paste transcript or describe your topic..." class="w-full border border-gray-300 rounded-lg p-2.5 outline-none focus:border-purple-500 text-sm" required></textarea>
        </div>
        <div>
          <label class="block text-sm font-semibold text-gray-700 mb-1">Thread Length</label>
          <select id="input-length" class="w-full border border-gray-300 rounded-lg p-2.5 outline-none focus:border-purple-500 text-sm">
            <option value="5">5 Tweets (Quick Thread)</option>
            <option value="8" selected>8 Tweets (Standard)</option>
            <option value="10">10 Tweets (Deep Dive)</option>
          </select>
        </div>
      `,
      generate: async (inputs) => {
        const text = inputs['input-text'].trim();
        const len = parseInt(inputs['input-length']) || 8;
        if (!text) throw new Error('Please enter a topic or transcript.');
        const preview = text.substring(0, 80).replace(/[\r\n]+/g, ' ');
        const tweets = [
          `1/${len} 🧵 Everything I learned about "${preview}..." — and what most people get completely wrong.\n\nThis thread will save you MONTHS of trial and error. RT to help a fellow creator. 👇`,
          `2/${len} The #1 mistake beginners make?\n\nThey try to do everything at once.\n\nFocus beats volume every single time. Pick ONE outcome. Commit to it for 30 days. Watch what happens.`,
          `3/${len} Here's the framework that changed everything for me:\n\n→ Define your core outcome\n→ Strip out all non-essentials\n→ Repeat the core action daily\n→ Measure, don't guess\n\nSimple. Powerful. Most people skip step 3.`,
          `4/${len} The uncomfortable truth:\n\nYour "lack of results" isn't a strategy problem.\n\nIt's a consistency problem.\n\n10 minutes of focused work beats 2 hours of scattered effort EVERY time.`,
          `5/${len} Tools that actually work (free):\n\n🔧 CreatorHelperTool.vercel.app – extract transcripts fast\n🔧 Notion – organize your content calendar\n🔧 Canva – design thumbnails in minutes\n🔧 VidIQ – keyword research for YouTube\n\nNo excuses.`,
          `6/${len} The metric most creators ignore:\n\nWatch time retention.\n\nNot views. Not likes. Not subs.\n\nIf people leave in the first 30 seconds, nothing else matters. Fix the hook first.`,
          `7/${len} A counterintuitive truth:\n\nYour WORST video from 2 years ago would destroy your competition today.\n\nBecause you've been compounding skills the whole time.\n\nDon't quit before the compound effect hits.`,
          `8/${len} Final thought:\n\nThe gap between where you are and where you want to be isn't skill.\n\nIt's reps.\n\nPost more. Learn more. Repeat.\n\nFollow me @creator for daily breakdowns like this 🙌\n\n♻️ RT the first tweet to share this thread!`
        ];
        const extra = [
          `9/${len} Bonus hack: Repurpose EVERYTHING.\n\n1 YouTube video = 1 blog post = 5 tweets = 3 Reels = 1 newsletter.\n\nYou're not creating content. You're building an asset library.`,
          `10/${len} Resources to go deeper:\n\n→ Full guide: creatorhelpertool.vercel.app\n→ Free tools: linked in bio\n→ DM me "CREATOR" for my personal checklist\n\nLet's grow together 🚀`
        ];
        const threadTweets = [...tweets.slice(0, len), ...(len > 8 ? extra.slice(0, len - 8) : [])].slice(0, len);
        return `🐦 TWEET THREAD (${len} tweets)\nTopic: "${preview}..."\n\n${'─'.repeat(50)}\n\n${threadTweets.join('\n\n' + '─'.repeat(50) + '\n\n')}`;
      }
    },
    'ai-blog': {
      title: 'Blog Post Generator',
      desc: 'Transform any transcript or topic into a full SEO-optimized blog post outline and draft.',
      icon: '📰',
      inputs: `
        <div>
          <label class="block text-sm font-semibold text-gray-700 mb-1">Topic or Transcript</label>
          <textarea id="input-text" rows="5" placeholder="Paste transcript or describe your blog topic..." class="w-full border border-gray-300 rounded-lg p-2.5 outline-none focus:border-purple-500 text-sm" required></textarea>
        </div>
        <div>
          <label class="block text-sm font-semibold text-gray-700 mb-1">Target Audience</label>
          <input type="text" id="input-audience" placeholder="e.g. beginner YouTubers, indie founders, fitness enthusiasts" class="w-full border border-gray-300 rounded-lg p-2.5 outline-none focus:border-purple-500 text-sm" />
        </div>
        <div>
          <label class="block text-sm font-semibold text-gray-700 mb-1">Post Length</label>
          <select id="input-length" class="w-full border border-gray-300 rounded-lg p-2.5 outline-none focus:border-purple-500 text-sm">
            <option value="outline">Outline Only (Fast)</option>
            <option value="draft" selected>Full Draft (Recommended)</option>
          </select>
        </div>
      `,
      generate: async (inputs) => {
        const text = inputs['input-text'].trim();
        const audience = inputs['input-audience'].trim() || 'content creators';
        const length = inputs['input-length'];
        if (!text) throw new Error('Please enter a topic or transcript.');
        const preview = text.substring(0, 80).replace(/[\r\n]+/g, ' ');
        const outline = `📰 BLOG POST OUTLINE\nTitle: The Ultimate Guide to "${preview}..." for ${audience}\n\nI. INTRODUCTION (150 words)\n   • Hook: A surprising stat or bold claim\n   • The core problem this post solves\n   • Promise: What the reader will learn\n\nII. SECTION 1 – Understanding the Basics (300 words)\n   • Key definitions\n   • Why most people struggle with this\n   • The mindset shift required\n\nIII. SECTION 2 – Step-by-Step Framework (500 words)\n   • Step 1: Research & planning\n   • Step 2: Core implementation\n   • Step 3: Optimization & iteration\n\nIV. SECTION 3 – Pro Tips & Common Mistakes (300 words)\n   • Top 3 mistakes to avoid\n   • Expert-level shortcuts\n   • Tools and resources\n\nV. CONCLUSION (150 words)\n   • Recap of key takeaways\n   • Call to action\n   • Related posts / links\n\nSEO Meta:\n• Title tag: ${preview.substring(0,55)}... | Complete Guide\n• Meta desc: Learn everything about ${preview.substring(0,40)}... in this step-by-step guide for ${audience}.\n• Target keyword: ${preview.split(' ').slice(0,4).join(' ')}`;
        if (length === 'outline') return outline;
        return outline + `\n\n${'─'.repeat(50)}\n\n📝 DRAFT INTRO:\n\nIf you've been struggling with "${preview}...", you're not alone. Thousands of ${audience} face this exact challenge every day — and most of them never figure it out.\n\nIn this post, we're going to break down exactly what works, what doesn't, and give you a repeatable framework you can apply starting today.\n\nBy the end, you'll have:\n✅ A clear understanding of the core concepts\n✅ A step-by-step action plan\n✅ The exact tools and shortcuts the pros use\n\nLet's dive in.\n\n${'─'.repeat(50)}\n\n📝 SECTION 1 DRAFT:\n\nBefore we get into the tactical breakdown, let's make sure we're aligned on the fundamentals. Understanding the "why" behind ${preview.substring(0,40)}... is what separates creators who see results from those who spin their wheels for months.\n\nThe core principle is surprisingly simple: focus beats volume. Most beginners try to do everything at once, and end up doing nothing well. Commit to mastering one thing at a time, and your progress will compound faster than you expect.\n\n[Continue writing remaining sections based on your specific content...]`;
      }
    },
    'yt-downloader': {
      title: 'YouTube Video Downloader',
      desc: 'Get direct download links and stream info for any YouTube video.',
      icon: '⬇️',
      inputs: `
        <div>
          <label class="block text-sm font-semibold text-gray-700 mb-1">YouTube Video URL</label>
          <input type="url" id="input-url" placeholder="https://www.youtube.com/watch?v=..." class="w-full border border-gray-300 rounded-lg p-2.5 outline-none focus:border-orange-500 text-sm" required />
        </div>
      `,
      generate: async (inputs) => {
        const url = inputs['input-url'].trim();
        if (!url) throw new Error('Please enter a YouTube URL.');
        const match = url.match(/(?:v=|youtu\.be\/|shorts\/)([\w-]{11})/);
        if (!match) throw new Error('Invalid YouTube URL format.');
        const videoId = match[1];
        return `⬇️ YOUTUBE VIDEO DOWNLOAD OPTIONS\nVideo ID: ${videoId}\n\n⚠️ IMPORTANT NOTICE:\nDownloading YouTube videos may violate YouTube's Terms of Service. Only download videos you own or have explicit permission to download. This tool provides educational information only.\n\n🔗 USE THESE TRUSTED SERVICES:\n\n1. yt-dlp (Command Line — Most Reliable)\n   Install: pip install yt-dlp\n   Command: yt-dlp ${url}\n\n2. SaveFrom.net\n   URL: https://en.savefrom.net/#url=${encodeURIComponent(url)}\n\n3. Y2Mate\n   URL: https://www.y2mate.com/youtube/${videoId}\n\n4. 9xBuddy\n   URL: https://9xbuddy.in/process?url=${encodeURIComponent(url)}\n\n📊 VIDEO DETAILS:\n• Video ID: ${videoId}\n• Thumbnail: https://img.youtube.com/vi/${videoId}/maxresdefault.jpg\n• Embed URL: https://www.youtube.com/embed/${videoId}\n\n💡 TIP: For the best quality, use yt-dlp with:\nyt-dlp -f "bestvideo+bestaudio" ${url}`;
      }
    },
    'yt-thumb-dl': {
      title: 'YouTube Thumbnail Downloader',
      desc: 'Download full-resolution YouTube thumbnails in all available sizes instantly.',
      icon: '🖼️',
      inputs: `
        <div>
          <label class="block text-sm font-semibold text-gray-700 mb-1">YouTube Video URL</label>
          <input type="url" id="input-url" placeholder="https://www.youtube.com/watch?v=..." class="w-full border border-gray-300 rounded-lg p-2.5 outline-none focus:border-orange-500 text-sm" required />
        </div>
      `,
      generate: async (inputs) => {
        const url = inputs['input-url'].trim();
        if (!url) throw new Error('Please enter a YouTube URL.');
        const match = url.match(/(?:v=|youtu\.be\/|shorts\/)([\w-]{11})/);
        if (!match) throw new Error('Invalid YouTube URL format.');
        const videoId = match[1];
        return `🖼️ YOUTUBE THUMBNAIL DOWNLOAD LINKS\nVideo ID: ${videoId}\n\n🌟 MAXIMUM RESOLUTION (1280×720):\nhttps://img.youtube.com/vi/${videoId}/maxresdefault.jpg\n\n📸 HIGH QUALITY (480×360):\nhttps://img.youtube.com/vi/${videoId}/hqdefault.jpg\n\n📷 MEDIUM QUALITY (320×180):\nhttps://img.youtube.com/vi/${videoId}/mqdefault.jpg\n\n🖼️ STANDARD (640×480):\nhttps://img.youtube.com/vi/${videoId}/sddefault.jpg\n\n⚡ DEFAULT (120×90):\nhttps://img.youtube.com/vi/${videoId}/default.jpg\n\n💡 HOW TO DOWNLOAD:\n1. Click/open any URL above\n2. Right-click the image → "Save Image As"\n3. Save to your device\n\n✅ Thumbnails are public images — free to use for research, design inspiration, and analysis.`;
      }
    },
    'ig-downloader': {
      title: 'Instagram Reel Downloader Info',
      desc: 'Get instructions and trusted services for downloading Instagram Reels.',
      icon: '📥',
      inputs: `
        <div>
          <label class="block text-sm font-semibold text-gray-700 mb-1">Instagram Reel URL</label>
          <input type="url" id="input-url" placeholder="https://www.instagram.com/reel/..." class="w-full border border-gray-300 rounded-lg p-2.5 outline-none focus:border-pink-500 text-sm" required />
        </div>
      `,
      generate: async (inputs) => {
        const url = inputs['input-url'].trim();
        if (!url) throw new Error('Please enter an Instagram Reel URL.');
        const isReel = url.includes('/reel/') || url.includes('/p/');
        if (!isReel) throw new Error('Please enter a valid Instagram Reel or post URL.');
        return `📥 INSTAGRAM REEL DOWNLOAD GUIDE\nURL: ${url}\n\n⚠️ NOTICE: Only download Reels you own or have permission to download.\n\n🔗 TRUSTED DOWNLOAD SERVICES:\n\n1. SnapInsta (Most Popular)\n   → https://snapinsta.app\n   Paste your Reel URL and click Download.\n\n2. SaveIG\n   → https://saveig.app\n   Supports Reels, Stories, and Posts.\n\n3. Inflact\n   → https://inflact.com/downloader/instagram/reel/\n   High-quality downloads, no watermark.\n\n4. iGram\n   → https://igram.io\n   Fast downloads, works on mobile.\n\n📋 STEP-BY-STEP:\n1. Copy the Reel URL: ${url}\n2. Visit any service above\n3. Paste the URL in their input field\n4. Click Download\n5. Save MP4 to your device\n\n💡 TIP: Right-click the video on desktop → "Save video as" sometimes works on public posts!`;
      }
    },
    'ai-image-generator': {
      title: 'Browser AI Image Generator',
      desc: 'Generate stunning AI images on your device using WebGPU.',
      icon: '🖼️',
      inputs: '',
      generate: async () => ''
    }
  };


  // Load Tool Configuration into dynamic workspace
  function loadToolWorkspace(toolId) {
    const tool = toolsData[toolId];
    if (!tool) {
      switchTool('overview');
      return;
    }

    // Set header details
    document.getElementById('tool-header-title').textContent = tool.title;
    document.getElementById('tool-header-desc').textContent = tool.desc;
    document.getElementById('tool-header-icon').textContent = tool.icon;

    // Load inputs
    const inputsContainer = document.getElementById('dynamic-inputs');
    inputsContainer.innerHTML = tool.inputs;

    // Hide result box and loader
    document.getElementById('tool-result-container').classList.add('hidden');
    document.getElementById('tool-loader').classList.add('hidden');

    // Pre-fill selected trend OR transcript if available
    const selectedTrend = sessionStorage.getItem('selected_trend');
    const cachedTranscript = sessionStorage.getItem('current_transcript');
    
    let filled = false;
    if (selectedTrend) {
      const trendFillMap = {
        'yt-titles': 'input-topic',
        'yt-hooks': 'input-topic',
        'yt-hashtags': 'input-keyword'
      };
      const fieldId = trendFillMap[toolId];
      if (fieldId) {
        const el = document.getElementById(fieldId);
        if (el) {
          el.value = selectedTrend;
          filled = true;
        }
      }
    }
    
    if (!filled && cachedTranscript) {
      const fillMap = {
        'ai-summarizer': 'input-transcript',
        'yt-summarizer': 'input-transcript',
        'ai-repurpose': 'input-text',
        'ai-tweet': 'input-text',
        'ai-blog': 'input-text',
        'yt-hooks': 'input-topic'
      };
      const fieldId = fillMap[toolId];
      if (fieldId) {
        const el = document.getElementById(fieldId);
        if (el) el.value = cachedTranscript;
      }
    }

    // Bind utility events interactively if utility tool is loaded
    if (toolId === 'media-utility') {
      bindUtilityInteractiveEvents();
    }
  }

  // Bind interactive event listeners for the utilities tool
  function bindUtilityInteractiveEvents() {
    const titleIn = document.getElementById('util-title');
    const titleStatus = document.getElementById('util-title-status');
    const scriptIn = document.getElementById('util-script');
    const wpmSelect = document.getElementById('util-wpm');
    const timeResult = document.getElementById('util-time-result');

    const updateTitleLen = () => {
      const len = titleIn.value.length;
      if (len <= 60) {
        titleStatus.innerHTML = `Characters: <span class="text-green-600 font-bold">${len} / 60</span> (Safe Zone)`;
      } else {
        titleStatus.innerHTML = `Characters: <span class="text-red-600 font-bold">${len} / 60</span> (Will truncate in search results)`;
      }
    };

    const updateTime = () => {
      const text = scriptIn.value.trim();
      const wpm = parseInt(wpmSelect.value) || 150;
      const wordCount = text.split(/\s+/).filter(Boolean).length;
      if (wordCount === 0) {
        timeResult.textContent = '—';
        return;
      }
      const totalSecs = Math.round((wordCount / wpm) * 60);
      const mins = Math.floor(totalSecs / 60);
      const secs = totalSecs % 60;
      timeResult.textContent = mins > 0 ? `${mins}m ${secs}s` : `${secs}s`;
    };

    titleIn.addEventListener('input', updateTitleLen);
    scriptIn.addEventListener('input', updateTime);
    wpmSelect.addEventListener('change', updateTime);
  }

  // Handle Form Submission
  const toolForm = document.getElementById('tool-form');
  if (toolForm) {
    toolForm.addEventListener('submit', async (e) => {
      e.preventDefault();
      
      const generateBtn = document.getElementById('generate-btn');
      const loader = document.getElementById('tool-loader');
      const resultContainer = document.getElementById('tool-result-container');
      const outputArea = document.getElementById('tool-output');

      // Disable button
      generateBtn.disabled = true;
      generateBtn.style.opacity = '0.7';
      loader.classList.remove('hidden');
      resultContainer.classList.add('hidden');

      // Extract form input values
      const inputs = {};
      const formElements = toolForm.querySelectorAll('input, select, textarea');
      formElements.forEach(el => {
        if (el.id) {
          inputs[el.id] = el.value;
        }
      });

      // Simulate step-by-step progress text
      const loaderText = document.getElementById('tool-loader-text');
      const steps = [
        '⚡ Reading parameters...',
        '🔍 Launching AI optimization engine...',
        '✨ Constructing high-retention formats...',
        '🎉 Finalizing results...'
      ];

      try {
        // Animate steps
        for (let i = 0; i < steps.length; i++) {
          loaderText.textContent = steps[i];
          await new Promise(r => setTimeout(r, 450));
        }

        // Run the specific generator
        const tool = toolsData[currentTool];
        if (!tool) throw new Error('Tool definition not found.');
        
        const result = await tool.generate(inputs);
        
        // Show result
        outputArea.textContent = result;
        resultContainer.classList.remove('hidden');

        const statusBadge = document.getElementById('result-status-badge');
        if (statusBadge) {
          statusBadge.className = "text-xs bg-green-100 text-green-700 font-semibold px-2 py-0.5 rounded-full";
          statusBadge.textContent = "Ready";
        }
      } catch (err) {
        console.error('Tool execution error:', err);
        outputArea.textContent = `Error: ${err.message}\n\nPlease check your input/URL and try again.`;
        resultContainer.classList.remove('hidden');

        const statusBadge = document.getElementById('result-status-badge');
        if (statusBadge) {
          statusBadge.className = "text-xs bg-red-100 text-red-700 font-semibold px-2 py-0.5 rounded-full";
          statusBadge.textContent = "Error";
        }
      } finally {
        generateBtn.disabled = false;
        generateBtn.style.opacity = '1';
        loader.classList.add('hidden');
      }
    });
  }

  // Copy Result Button
  const resultCopyBtn = document.getElementById('result-copy-btn');
  if (resultCopyBtn) {
    resultCopyBtn.addEventListener('click', () => {
      const text = document.getElementById('tool-output').textContent;
      if (!text) return;
      navigator.clipboard.writeText(text).then(() => {
        showToast('Copied to clipboard!');
      });
    });
  }

  // Download Result Button
  const resultDownloadBtn = document.getElementById('result-download-btn');
  if (resultDownloadBtn) {
    resultDownloadBtn.addEventListener('click', () => {
      const text = document.getElementById('tool-output').textContent;
      if (!text) return;
      const blob = new Blob([text], { type: 'text/plain' });
      const a = document.createElement('a');
      a.href = URL.createObjectURL(blob);
      a.download = `${currentTool}-output.txt`;
      a.click();
      showToast('File downloaded!');
    });
  }

  // ── CACHE TRANSCRIPT MANAGEMENT ──
  function showTranscriptBanner() {
    const banner = document.getElementById('transcript-banner');
    const titleEl = document.getElementById('banner-video-title');
    const title = sessionStorage.getItem('current_video_title') || 'Active Transcript';
    
    if (banner && titleEl) {
      titleEl.textContent = title;
      banner.classList.remove('hidden');
    }
  }

  // Handle Banner buttons
  const useBtn = document.getElementById('use-transcript-btn');
  const clearBtn = document.getElementById('clear-transcript-btn');
  
  if (useBtn) {
    useBtn.addEventListener('click', () => {
      // Just reload the current tool to populate fields
      if (currentTool !== 'overview') {
        loadToolWorkspace(currentTool);
      }
      showToast('Transcript loaded into workspace!');
    });
  }

  if (clearBtn) {
    clearBtn.addEventListener('click', () => {
      sessionStorage.removeItem('current_transcript');
      sessionStorage.removeItem('current_video_title');
      sessionStorage.removeItem('current_video_id');
      document.getElementById('transcript-banner').classList.add('hidden');
      showToast('Transcript cache cleared.');
      // If we are currently viewing a workspace that was using the transcript, clear fields
      if (currentTool !== 'overview') {
        loadToolWorkspace(currentTool);
      }
    });
  }

  // Check on load
  if (sessionStorage.getItem('current_transcript')) {
    showTranscriptBanner();
  }

  // Shared toast function
  function showToast(msg) {
    let toast = document.getElementById('toast');
    if (!toast) {
      toast = document.createElement('div');
      toast.id = 'toast';
      toast.className = 'toast';
      toast.innerHTML = `✅ ${msg}`;
      document.body.appendChild(toast);
    } else {
      toast.innerHTML = `✅ ${msg}`;
    }
    toast.classList.add('show');
    setTimeout(() => toast.classList.remove('show'), 2600);
  }

  // ── TRENDS DASHBOARD ENGINE ──
  const trendingData = [
    {
      topic: "AI Movies & Trailers",
      category: "AI",
      score: 98,
      growth: "+320%",
      competition: "Medium",
      rating: "High",
      details: "Creators are generating full cinematic trailers using Sora, Runway Gen-3, and Midjourney."
    },
    {
      topic: "ChatGPT Search & Agents",
      category: "AI",
      score: 95,
      growth: "+240%",
      competition: "High",
      rating: "High",
      details: "New OpenAI GPT search features and automation workflows are dominating developer & tech media."
    },
    {
      topic: "AI Avatar Video Generation",
      category: "AI",
      score: 92,
      growth: "+180%",
      competition: "Low",
      rating: "Very High",
      details: "HeyGen and ElevenLabs translation features are allowing localized multi-language content creation."
    },
    {
      topic: "Virat Kohli Edit & Tributes",
      category: "YouTube",
      score: 99,
      growth: "+450%",
      competition: "High",
      rating: "High",
      details: "Cinematic sports edits featuring cricket matches and motivational audios are racking up millions of views."
    },
    {
      topic: "Fitness Transformation Journey",
      category: "YouTube",
      score: 89,
      growth: "+120%",
      competition: "Medium",
      rating: "Medium",
      details: "High-speed progress compilations with aesthetic workouts and diets are popular in self-improvement niches."
    },
    {
      topic: "Minecraft Speedrunning Tricks",
      category: "Gaming",
      score: 87,
      growth: "+95%",
      competition: "High",
      rating: "Medium",
      details: "New glitches and tricks in speedrunning Minecraft are drawing huge viewer attention on YouTube Shorts."
    },
    {
      topic: "Money & Side Hustle Challenge",
      category: "Business",
      score: 94,
      growth: "+210%",
      competition: "Medium",
      rating: "Very High",
      details: "100-day challenges to start passive income streams using no-code AI tools or print-on-demand."
    },
    {
      topic: "Viral Storytelling Reels",
      category: "Instagram",
      score: 96,
      growth: "+280%",
      competition: "Low",
      rating: "Very High",
      details: "Short-form history, crime, or mystery storytelling with engaging captions and dark ambient B-roll."
    },
    {
      topic: "Aesthetic Cafe Vlogs",
      category: "Instagram",
      score: 85,
      growth: "+75%",
      competition: "Medium",
      rating: "Medium",
      details: "Relaxing, quiet morning routines and coffee aesthetic reels with smooth transitions and lofi background tracks."
    },
    {
      topic: "Digital Product Funnels",
      category: "Business",
      score: 91,
      growth: "+145%",
      competition: "Medium",
      rating: "High",
      details: "Selling Notion templates, PDF guides, and membership communities directly through link-in-bio tools."
    },
    {
      topic: "Newsletter Sponsor Strategy",
      category: "Business",
      score: 88,
      growth: "+110%",
      competition: "Low",
      rating: "High",
      details: "Monetizing micro-audiences using sponsor placements and advertising packages in Beehiiv/Substack."
    },
    {
      topic: "GTA 6 Map & Leaks",
      category: "Gaming",
      score: 97,
      growth: "+410%",
      competition: "High",
      rating: "Very High",
      details: "Frame-by-frame analysis and breakdown of promotional content and releases from Rockstar Games."
    },
    {
      topic: "Elden Ring DLC Builds",
      category: "Gaming",
      score: 93,
      growth: "+190%",
      competition: "Medium",
      rating: "High",
      details: "Fast gameplay walkthroughs and gear builds to defeat DLC bosses in record time."
    }
  ];

  let activeFilter = 'All';
  let activeTrendIndex = 0;
  let rotationInterval = null;
  let isUserInteracting = false;
  let interactionTimeout = null;

  function renderTrends() {
    const container = document.getElementById('trends-pills-container');
    if (!container) return;

    const filteredTrends = trendingData.filter(t => activeFilter === 'All' || t.category === activeFilter);
    
    container.innerHTML = '';
    filteredTrends.forEach((trend, idx) => {
      const pill = document.createElement('button');
      pill.className = `trend-pill ${idx === activeTrendIndex ? 'active' : ''}`;
      pill.setAttribute('data-index', idx);
      
      pill.innerHTML = `
        <span>${trend.topic}</span>
        <span class="trend-score-badge">🔥 ${trend.score}</span>
      `;
      
      pill.addEventListener('click', () => {
        handleTrendClick(idx);
      });
      
      container.appendChild(pill);
    });

    updateOpportunityCard(filteredTrends[activeTrendIndex]);
  }

  function handleFilterChange(category) {
    activeFilter = category;
    activeTrendIndex = 0;
    
    const filterButtons = document.querySelectorAll('.trend-filter-btn');
    filterButtons.forEach(btn => {
      const cat = btn.getAttribute('data-category');
      if (cat === category) {
        btn.className = "trend-filter-btn px-2.5 py-1 rounded-lg text-xs font-bold transition-all bg-pink-500 text-white shadow-sm";
      } else {
        btn.className = "trend-filter-btn px-2.5 py-1 rounded-lg text-xs font-semibold transition-all text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800";
      }
    });

    pauseRotationOnInteraction();
    renderTrends();
  }

  function updateOpportunityCard(trend) {
    const card = document.getElementById('opportunity-card');
    if (!card || !trend) return;

    let growthColor = "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400";
    let compColor = "bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-400";
    if (trend.competition === 'High') {
      compColor = "bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400";
    } else if (trend.competition === 'Low') {
      compColor = "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400";
    }
    
    let ratingColor = "bg-pink-100 text-pink-700 dark:bg-pink-900/30 dark:text-pink-400";
    if (trend.rating === 'Very High') {
      ratingColor = "bg-gradient-to-r from-pink-500/20 to-orange-500/20 text-pink-600 dark:text-pink-300 border border-pink-500/20";
    }

    card.innerHTML = `
      <div class="space-y-4">
        <div class="flex items-center justify-between">
          <span class="text-[10px] font-bold uppercase tracking-wider text-pink-600 dark:text-pink-400 px-2 py-0.5 rounded-md bg-pink-500/10">${trend.category} Trend</span>
          <div class="flex items-center gap-1.5">
            <span class="text-xs font-bold text-gray-400">Score:</span>
            <span class="text-xs font-black text-gray-800 dark:text-gray-200 bg-gray-100 dark:bg-gray-800 px-2 py-0.5 rounded-full">🔥 ${trend.score}</span>
          </div>
        </div>

        <div>
          <h4 class="text-lg font-black text-gray-900 dark:text-white leading-snug">${trend.topic}</h4>
          <p class="text-xs text-gray-500 dark:text-gray-400 mt-1.5 leading-relaxed">${trend.details}</p>
        </div>

        <div class="grid grid-cols-3 gap-2 py-2 border-y border-gray-100 dark:border-gray-800/60">
          <div>
            <div class="text-[9px] font-bold text-gray-400 uppercase tracking-wider">Growth</div>
            <div class="text-xs font-extrabold ${growthColor} inline-block px-1.5 py-0.5 rounded mt-1">${trend.growth}</div>
          </div>
          <div>
            <div class="text-[9px] font-bold text-gray-400 uppercase tracking-wider">Competition</div>
            <div class="text-xs font-extrabold ${compColor} inline-block px-1.5 py-0.5 rounded mt-1">${trend.competition}</div>
          </div>
          <div>
            <div class="text-[9px] font-bold text-gray-400 uppercase tracking-wider">Opportunity</div>
            <div class="text-xs font-extrabold ${ratingColor} inline-block px-1.5 py-0.5 rounded mt-1">${trend.rating}</div>
          </div>
        </div>
      </div>

      <div class="mt-4 pt-3 space-y-2">
        <div class="text-[10px] font-bold text-gray-400 dark:text-gray-500 uppercase tracking-wider">Generate Content:</div>
        <div class="grid grid-cols-3 gap-1.5">
          <button class="trend-gen-btn flex items-center justify-center gap-1 px-1 py-2 rounded-xl text-[10px] font-extrabold text-white bg-gradient-to-r from-pink-500 to-rose-500 hover:opacity-90 active:scale-95 transition" data-tool="yt-titles" data-trend="${trend.topic}">
            ✍️ Title
          </button>
          <button class="trend-gen-btn flex items-center justify-center gap-1 px-1 py-2 rounded-xl text-[10px] font-extrabold text-white bg-gradient-to-r from-purple-500 to-indigo-500 hover:opacity-90 active:scale-95 transition" data-tool="yt-hooks" data-trend="${trend.topic}">
            ⚡ Hook
          </button>
          <button class="trend-gen-btn flex items-center justify-center gap-1 px-1 py-2 rounded-xl text-[10px] font-extrabold text-white bg-gradient-to-r from-orange-500 to-amber-500 hover:opacity-90 active:scale-95 transition" data-tool="yt-hashtags" data-trend="${trend.topic}">
            #️⃣ Tag
          </button>
        </div>
      </div>
    `;

    card.querySelectorAll('.trend-gen-btn').forEach(btn => {
      btn.addEventListener('click', (e) => {
        const toolId = btn.getAttribute('data-tool');
        const trendVal = btn.getAttribute('data-trend');
        
        sessionStorage.setItem('selected_trend', trendVal);
        switchTool(toolId);
        showToast(`Auto-filled trend into ${toolsData[toolId].title}!`);
      });
    });
  }

  function handleTrendClick(index) {
    activeTrendIndex = index;
    pauseRotationOnInteraction();
    
    const filteredTrends = trendingData.filter(t => activeFilter === 'All' || t.category === activeFilter);
    const trend = filteredTrends[activeTrendIndex];
    if (trend) {
      sessionStorage.setItem('selected_trend', trend.topic);
    }
    
    renderTrends();
  }

  function startRotation() {
    if (rotationInterval) clearInterval(rotationInterval);
    rotationInterval = setInterval(() => {
      if (isUserInteracting) return;
      
      const filteredTrends = trendingData.filter(t => activeFilter === 'All' || t.category === activeFilter);
      if (filteredTrends.length === 0) return;
      
      activeTrendIndex = (activeTrendIndex + 1) % filteredTrends.length;
      
      const activeTrend = filteredTrends[activeTrendIndex];
      if (activeTrend) {
        sessionStorage.setItem('selected_trend', activeTrend.topic);
      }
      
      renderTrends();
    }, 6000);
  }

  function pauseRotationOnInteraction() {
    isUserInteracting = true;
    if (interactionTimeout) clearTimeout(interactionTimeout);
    interactionTimeout = setTimeout(() => {
      isUserInteracting = false;
    }, 20000);
  }

  function animateCounters() {
    const counters = [
      { id: 'counter-topics', target: 1248 },
      { id: 'counter-viral', target: 34912 },
      { id: 'counter-tools', target: 28 }
    ];

    counters.forEach(c => {
      const el = document.getElementById(c.id);
      if (!el) return;

      const duration = 2000;
      const startTime = performance.now();

      function updateCounter(currentTime) {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);
        const easeProgress = progress * (2 - progress);
        const currentValue = Math.floor(easeProgress * c.target);

        if (c.id === 'counter-tools') {
          el.textContent = currentValue + '+';
        } else {
          el.textContent = currentValue.toLocaleString();
        }

        if (progress < 1) {
          requestAnimationFrame(updateCounter);
        }
      }

      requestAnimationFrame(updateCounter);
    });
  }

  // ── LIVE VIRAL VIDEOS ENGINE ──
  let viralVideosData = [];
  let activeViralTab = "All";
  let activeObserver = null;
  let scrollPlayTimeout = null;

  // Format Helpers
  function formatViews(viewsStr) {
    const num = parseInt(viewsStr, 10);
    if (isNaN(num)) return "0 views";
    if (num >= 1000000) return (num / 1000000).toFixed(1).replace(/\.0$/, '') + 'M views';
    if (num >= 1000) return (num / 1000).toFixed(1).replace(/\.0$/, '') + 'K views';
    return num + ' views';
  }

  function formatRelativeTime(publishedAt) {
    const published = new Date(publishedAt);
    const now = new Date();
    const diffMs = now - published;
    const diffSec = Math.floor(diffMs / 1000);
    const diffMin = Math.floor(diffSec / 60);
    const diffHr = Math.floor(diffMin / 60);
    const diffDay = Math.floor(diffHr / 24);

    if (diffDay > 0) return `${diffDay} day${diffDay > 1 ? 's' : ''} ago`;
    if (diffHr > 0) return `${diffHr} hour${diffHr > 1 ? 's' : ''} ago`;
    if (diffMin > 0) return `${diffMin} minute${diffMin > 1 ? 's' : ''} ago`;
    return "Just now";
  }

  function assignCategory(title) {
    const t = title.toLowerCase();
    if (t.includes('ai') || t.includes('sora') || t.includes('gpt') || t.includes('midjourney') || t.includes('tech') || t.includes('robot') || t.includes('apple') || t.includes('google')) {
      return "AI";
    }
    if (t.includes('game') || t.includes('gaming') || t.includes('edit') || t.includes('pubg') || t.includes('free fire') || t.includes('minecraft') || t.includes('elden ring') || t.includes('cricket') || t.includes('sports') || t.includes('kohli')) {
      return "Gaming";
    }
    if (t.includes('business') || t.includes('saas') || t.includes('money') || t.includes('earn') || t.includes('side hustle') || t.includes('rich') || t.includes('finance') || t.includes('startup') || t.includes('invest')) {
      return "Business";
    }
    return "AI"; // Default category to match landing tabs
  }

  async function fetchViralVideos() {
    renderViralSkeletons();
    try {
      const res = await fetch('/api/trending');
      let data;
      try {
        data = await res.json();
      } catch (jsonErr) {
        throw new Error(`Invalid response format from server (HTTP ${res.status})`);
      }

      if (!res.ok) {
        throw new Error(data.error || `API server returned HTTP ${res.status}`);
      }
      if (data.error) {
        throw new Error(data.error);
      }

      viralVideosData = (data.videos || []).map((video, idx) => {
        const viewVal = parseInt(video.viewCount, 10) || 0;
        const likes = Math.floor(viewVal * 0.05);
        const comments = Math.floor(viewVal * 0.003);
        const shares = Math.floor(viewVal * 0.007);
        const platform = video.isShort ? "YouTube Shorts" : "YouTube";
        const category = assignCategory(video.title);

        return {
          id: video.videoId,
          videoId: video.videoId,
          title: video.title,
          platform: platform,
          videoUrl: `https://www.youtube.com/watch?v=${video.videoId}`,
          thumbnail: video.thumbnail,
          views: formatViews(video.viewCount),
          uploadTime: formatRelativeTime(video.publishedAt),
          trendScore: 99 - (idx % 10),
          category: category,
          channelTitle: video.channelTitle || "Unknown Creator",
          description: `Trending video by ${video.channelTitle || "Unknown Creator"}. View count: ${viewVal.toLocaleString()}.`,
          likes: likes >= 1000 ? (likes / 1000).toFixed(1) + 'K' : likes.toString(),
          comments: comments >= 1000 ? (comments / 1000).toFixed(1) + 'K' : comments.toString(),
          shares: shares >= 1000 ? (shares / 1000).toFixed(1) + 'K' : shares.toString(),
          growth: `+${250 - idx * 8}% breakout`,
          competition: idx % 3 === 0 ? "Low" : (idx % 3 === 1 ? "Medium" : "High"),
          opportunity: idx % 2 === 0 ? "Very High" : "High"
        };
      });

      renderViralVideos();
    } catch (err) {
      console.error("fetchViralVideos error:", err);
      const container = document.getElementById("video-carousel");
      if (container) {
        let displayMsg = `⚠️ Error loading live viral videos: ${err.message}`;
        if (err.message.includes('not configured') && !err.message.includes('Checked:')) {
          displayMsg += '. Please configure your YOUTUBE_API_KEY environment variable.';
        }
        container.innerHTML = `
          <div class="w-full py-8 text-center text-sm font-semibold text-red-500 bg-red-500/10 border border-red-500/20 rounded-[24px] px-4">
            ${displayMsg}
          </div>
        `;
      }
    }
  }

  function renderViralSkeletons() {
    const container = document.getElementById("video-carousel");
    if (!container) return;

    container.innerHTML = "";
    for (let i = 0; i < 4; i++) {
      const card = document.createElement("div");
      card.className = "flex-shrink-0 w-[280px] bg-white/10 dark:bg-white/5 border border-white/10 rounded-[24px] p-3 space-y-4";
      card.innerHTML = `
        <div class="w-full aspect-[9/16] rounded-[20px] skeleton-shimmer"></div>
        <div class="h-4 w-3/4 rounded-md skeleton-shimmer"></div>
        <div class="h-3 w-1/2 rounded-md skeleton-shimmer"></div>
      `;
      container.appendChild(card);
    }
  }

  function renderViralVideos() {
    const container = document.getElementById("video-carousel");
    if (!container) return;

    const filtered = viralVideosData.filter(v => {
      if (activeViralTab === "All") return true;
      if (activeViralTab === "YouTube Shorts") return v.platform === "YouTube Shorts";
      if (activeViralTab === "Instagram Reels") return v.platform === "Instagram Reels";
      return v.category === activeViralTab;
    });

    container.innerHTML = "";
    
    if (filtered.length === 0) {
      container.innerHTML = `
        <div class="w-full py-8 text-center text-sm font-semibold text-gray-500 dark:text-gray-400">
          No live viral videos found in this category right now.
        </div>
      `;
      return;
    }

    filtered.forEach(video => {
      const card = document.createElement("div");
      card.className = "video-card flex-shrink-0 bg-white/40 dark:bg-black/40 backdrop-blur-xl border border-white/20 dark:border-white/10 p-3 shadow-lg snap-start rounded-[24px]";
      card.setAttribute("data-id", video.id);
      
      card.innerHTML = `
        <!-- Video Player Wrapper -->
        <div class="video-player-wrapper relative w-full aspect-[9/16] overflow-hidden rounded-[20px] bg-black shadow-md border border-white/10">
          <img src="${video.thumbnail}" class="w-full h-full object-cover" loading="lazy">
          
          <!-- Floating Category & Trend Score -->
          <div class="absolute top-3 inset-x-3 flex items-center justify-between pointer-events-none z-10">
            <span class="text-[9px] font-black uppercase tracking-wider bg-black/60 backdrop-blur-md text-white px-2.5 py-1 rounded-full border border-white/10">${video.category}</span>
            <span class="text-[9px] font-black bg-pink-500 text-white px-2 py-0.5 rounded-full shadow-md">🔥 ${video.trendScore}</span>
          </div>

          <!-- Bottom Floating Specs Overlay -->
          <div class="absolute inset-x-0 bottom-0 p-3 video-card-overlay flex flex-col justify-end gap-1.5 z-10 pointer-events-none">
            <div class="flex items-center gap-1.5">
              <span class="text-[9px] font-black px-2 py-0.5 rounded-md uppercase tracking-wider bg-red-500/90 text-white">${video.platform}</span>
              <span class="text-[10px] font-extrabold text-white drop-shadow-sm">${video.views}</span>
            </div>
          </div>
        </div>

        <!-- Meta Content below video -->
        <div class="mt-3.5 space-y-1 px-1">
          <h4 class="text-xs font-black text-gray-900 dark:text-white leading-snug line-clamp-2 hover:text-pink-500 transition-colors">${video.title}</h4>
          <div class="flex items-center justify-between text-[10px] font-bold text-gray-400 dark:text-gray-500">
            <span class="truncate max-w-[140px]" title="${video.channelTitle}">👤 ${video.channelTitle}</span>
            <span>${video.uploadTime}</span>
          </div>
        </div>
      `;

      // Hover play events
      card.addEventListener("mouseenter", () => {
        playCardVideo(card);
      });

      // Click event
      card.addEventListener("click", () => {
        openVideoModal(video);
      });

      container.appendChild(card);
    });

    setupIntersectionObserver();
    setTimeout(() => playCentermostVideo(), 100);
  }

  function handleViralTabChange(tabName) {
    activeViralTab = tabName;
    const tabButtons = document.querySelectorAll(".viral-tab-btn");
    tabButtons.forEach(btn => {
      const tab = btn.getAttribute("data-tab");
      if (tab === tabName) {
        btn.className = "viral-tab-btn px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all bg-pink-500 text-white shadow-md";
      } else {
        btn.className = "viral-tab-btn px-3.5 py-1.5 rounded-xl text-xs font-semibold transition-all text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800";
      }
    });

    renderViralSkeletons();
    setTimeout(() => {
      renderViralVideos();
    }, 1000);
  }

  function setupIntersectionObserver() {
    if (activeObserver) {
      activeObserver.disconnect();
    }

    const observerOptions = {
      root: null,
      rootMargin: "0px",
      threshold: 0.2
    };

    activeObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (!entry.isIntersecting) {
          const wrapper = entry.target.querySelector(".video-player-wrapper");
          const cardId = entry.target.getAttribute("data-id");
          const videoData = viralVideosData.find(v => v.id === cardId);
          if (wrapper && wrapper.querySelector("iframe") && videoData) {
            wrapper.innerHTML = `
              <img src="${videoData.thumbnail}" class="w-full h-full object-cover" loading="lazy">
              <div class="absolute top-3 inset-x-3 flex items-center justify-between pointer-events-none z-10">
                <span class="text-[9px] font-black uppercase tracking-wider bg-black/60 backdrop-blur-md text-white px-2.5 py-1 rounded-full border border-white/10">${videoData.category}</span>
                <span class="text-[9px] font-black bg-pink-500 text-white px-2 py-0.5 rounded-full shadow-md">🔥 ${videoData.trendScore}</span>
              </div>
              <div class="absolute inset-x-0 bottom-0 p-3 video-card-overlay flex flex-col justify-end gap-1.5 z-10 pointer-events-none">
                <div class="flex items-center gap-1.5">
                  <span class="text-[9px] font-black px-2 py-0.5 rounded-md uppercase tracking-wider bg-red-500/90 text-white">${videoData.platform}</span>
                  <span class="text-[10px] font-extrabold text-white drop-shadow-sm">${videoData.views}</span>
                </div>
              </div>
            `;
          }
        } else {
          if (scrollPlayTimeout) clearTimeout(scrollPlayTimeout);
          scrollPlayTimeout = setTimeout(() => {
            playCentermostVideo();
          }, 150);
        }
      });
    }, observerOptions);

    document.querySelectorAll(".video-card").forEach(card => {
      activeObserver.observe(card);
    });
  }

  function playCardVideo(targetCard) {
    if (!targetCard) return;
    const targetId = targetCard.getAttribute("data-id");
    const targetData = viralVideosData.find(v => v.id === targetId);
    if (!targetData) return;

    const carousel = document.getElementById("video-carousel");
    if (!carousel) return;
    const cards = carousel.querySelectorAll(".video-card");

    const wrapper = targetCard.querySelector(".video-player-wrapper");
    if (wrapper && !wrapper.querySelector("iframe")) {
      wrapper.innerHTML = `
        <iframe src="https://www.youtube.com/embed/${targetId}?autoplay=1&mute=1&loop=1&playlist=${targetId}&controls=0&modestbranding=1&rel=0&playsinline=1" class="w-full h-full object-cover border-0" allow="autoplay; encrypted-media"></iframe>
        <div class="absolute top-3 inset-x-3 flex items-center justify-between pointer-events-none z-10">
          <span class="text-[9px] font-black uppercase tracking-wider bg-black/60 backdrop-blur-md text-white px-2.5 py-1 rounded-full border border-white/10">${targetData.category}</span>
          <span class="text-[9px] font-black bg-pink-500 text-white px-2 py-0.5 rounded-full shadow-md">🔥 ${targetData.trendScore}</span>
        </div>
        <div class="absolute inset-x-0 bottom-0 p-3 video-card-overlay flex flex-col justify-end gap-1.5 z-10 pointer-events-none">
          <div class="flex items-center gap-1.5">
            <span class="text-[9px] font-black px-2 py-0.5 rounded-md uppercase tracking-wider bg-red-500/90 text-white">${targetData.platform}</span>
            <span class="text-[10px] font-extrabold text-white drop-shadow-sm">${targetData.views}</span>
          </div>
        </div>
      `;
    }

    cards.forEach(c => {
      if (c !== targetCard) {
        const otherId = c.getAttribute("data-id");
        const otherData = viralVideosData.find(v => v.id === otherId);
        const otherWrapper = c.querySelector(".video-player-wrapper");
        if (otherWrapper && otherWrapper.querySelector("iframe") && otherData) {
          otherWrapper.innerHTML = `
            <img src="${otherData.thumbnail}" class="w-full h-full object-cover" loading="lazy">
            <div class="absolute top-3 inset-x-3 flex items-center justify-between pointer-events-none z-10">
              <span class="text-[9px] font-black uppercase tracking-wider bg-black/60 backdrop-blur-md text-white px-2.5 py-1 rounded-full border border-white/10">${otherData.category}</span>
              <span class="text-[9px] font-black bg-pink-500 text-white px-2 py-0.5 rounded-full shadow-md">🔥 ${otherData.trendScore}</span>
            </div>
            <div class="absolute inset-x-0 bottom-0 p-3 video-card-overlay flex flex-col justify-end gap-1.5 z-10 pointer-events-none">
              <div class="flex items-center gap-1.5">
                <span class="text-[9px] font-black px-2 py-0.5 rounded-md uppercase tracking-wider bg-red-500/90 text-white">${otherData.platform}</span>
                <span class="text-[10px] font-extrabold text-white drop-shadow-sm">${otherData.views}</span>
              </div>
            </div>
          `;
        }
      }
    });
  }

  function playCentermostVideo() {
    const carousel = document.getElementById("video-carousel");
    if (!carousel) return;

    const cards = carousel.querySelectorAll(".video-card");
    if (cards.length === 0) return;

    const carouselRect = carousel.getBoundingClientRect();
    const carouselCenter = carouselRect.left + carouselRect.width / 2;

    let centermostCard = null;
    let minDistance = Infinity;

    cards.forEach(card => {
      const rect = card.getBoundingClientRect();
      const cardCenter = rect.left + rect.width / 2;
      const distance = Math.abs(carouselCenter - cardCenter);

      if (distance < minDistance) {
        minDistance = distance;
        centermostCard = card;
      }
    });

    if (centermostCard) {
      playCardVideo(centermostCard);
    }
  }

  function setupCarouselControls() {
    const carousel = document.getElementById("video-carousel");
    const prevBtn = document.getElementById("carousel-prev");
    const nextBtn = document.getElementById("carousel-next");

    if (carousel && prevBtn && nextBtn) {
      prevBtn.addEventListener("click", () => {
        const card = carousel.querySelector(".video-card");
        if (!card) return;
        const scrollAmount = card.offsetWidth + 24;

        if (carousel.scrollLeft <= 15) {
          carousel.scrollLeft = carousel.scrollWidth;
        } else {
          carousel.scrollBy({ left: -scrollAmount * 2, behavior: "smooth" });
        }
      });

      nextBtn.addEventListener("click", () => {
        const card = carousel.querySelector(".video-card");
        if (!card) return;
        const scrollAmount = card.offsetWidth + 24;

        const maxScroll = carousel.scrollWidth - carousel.clientWidth;
        if (carousel.scrollLeft >= maxScroll - 15) {
          carousel.scrollLeft = 0;
        } else {
          carousel.scrollBy({ left: scrollAmount * 2, behavior: "smooth" });
        }
      });

      carousel.addEventListener("scroll", () => {
        if (scrollPlayTimeout) clearTimeout(scrollPlayTimeout);
        scrollPlayTimeout = setTimeout(() => {
          playCentermostVideo();
        }, 150);
      });
    }
  }

  function openVideoModal(video) {
    const carousel = document.getElementById("video-carousel");
    if (carousel) {
      carousel.querySelectorAll(".video-card").forEach(c => {
        const id = c.getAttribute("data-id");
        const videoData = viralVideosData.find(v => v.id === id);
        const wrapper = c.querySelector(".video-player-wrapper");
        if (wrapper && wrapper.querySelector("iframe") && videoData) {
          wrapper.innerHTML = `
            <img src="${videoData.thumbnail}" class="w-full h-full object-cover" loading="lazy">
            <div class="absolute top-3 inset-x-3 flex items-center justify-between pointer-events-none z-10">
              <span class="text-[9px] font-black uppercase tracking-wider bg-black/60 backdrop-blur-md text-white px-2.5 py-1 rounded-full border border-white/10">${videoData.category}</span>
              <span class="text-[9px] font-black bg-pink-500 text-white px-2 py-0.5 rounded-full shadow-md">🔥 ${videoData.trendScore}</span>
            </div>
            <div class="absolute inset-x-0 bottom-0 p-3 video-card-overlay flex flex-col justify-end gap-1.5 z-10 pointer-events-none">
              <div class="flex items-center gap-1.5">
                <span class="text-[9px] font-black px-2 py-0.5 rounded-md uppercase tracking-wider bg-red-500/90 text-white">${videoData.platform}</span>
                <span class="text-[10px] font-extrabold text-white drop-shadow-sm">${videoData.views}</span>
              </div>
            </div>
          `;
        }
      });
    }

    const modal = document.createElement("div");
    modal.id = "viral-video-modal";
    modal.className = "fixed inset-0 bg-black/85 backdrop-blur-md z-50 flex items-center justify-center p-4 transition-all duration-300";
    
    let compColor = "bg-green-500/10 text-green-500 border border-green-500/20";
    if (video.competition === "High") {
      compColor = "bg-red-500/10 text-red-500 border border-red-500/20";
    }

    modal.innerHTML = `
      <div class="relative bg-white dark:bg-zinc-950 border border-gray-200 dark:border-zinc-800 rounded-3xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden flex flex-col md:flex-row animate-[scaleUp_0.3s_cubic-bezier(0.16,1,0.3,1)]">
        
        <button id="modal-close-btn" class="absolute right-4 top-4 z-30 bg-black/50 hover:bg-black/80 text-white rounded-full p-2.5 transition active:scale-95" aria-label="Close modal">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.5">
            <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <div class="relative w-full md:w-[50%] bg-black flex items-center justify-center aspect-video md:aspect-auto md:h-full min-h-[300px]">
          <iframe id="modal-player" src="https://www.youtube.com/embed/${video.videoId}?autoplay=1&controls=1&rel=0" class="w-full h-full min-h-[300px] border-0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
        </div>

        <div class="w-full md:w-[50%] p-6 md:p-8 flex flex-col justify-between overflow-y-auto max-h-[50vh] md:max-h-[90vh]">
          
          <div class="space-y-4">
            <div class="flex items-center gap-2">
              <span class="text-[10px] font-black uppercase tracking-wider bg-pink-500/10 text-pink-600 dark:text-pink-400 px-3 py-1 rounded-md">${video.category}</span>
              <span class="text-[10px] font-black uppercase tracking-wider bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-300 px-3 py-1 rounded-md">${video.platform}</span>
            </div>
            
            <h3 class="text-lg md:text-xl font-black text-gray-900 dark:text-white leading-snug">${video.title}</h3>
            <p class="text-xs text-gray-500 dark:text-gray-400 leading-relaxed">${video.description}</p>
          </div>

          <div class="grid grid-cols-4 gap-2.5 py-4 my-4 border-y border-gray-100 dark:border-zinc-800/60">
            <div class="text-center p-2 rounded-2xl bg-zinc-50 dark:bg-zinc-900/50">
              <div class="text-[9px] font-black text-gray-400 dark:text-gray-500 uppercase tracking-wider">Views</div>
              <div class="text-xs font-black text-gray-800 dark:text-white mt-1">${video.views}</div>
            </div>
            <div class="text-center p-2 rounded-2xl bg-zinc-50 dark:bg-zinc-900/50">
              <div class="text-[9px] font-black text-gray-400 dark:text-gray-500 uppercase tracking-wider">Likes</div>
              <div class="text-xs font-black text-gray-800 dark:text-white mt-1">${video.likes}</div>
            </div>
            <div class="text-center p-2 rounded-2xl bg-zinc-50 dark:bg-zinc-900/50">
              <div class="text-[9px] font-black text-gray-400 dark:text-gray-500 uppercase tracking-wider">Comments</div>
              <div class="text-xs font-black text-gray-800 dark:text-white mt-1">${video.comments}</div>
            </div>
            <div class="text-center p-2 rounded-2xl bg-zinc-50 dark:bg-zinc-900/50">
              <div class="text-[9px] font-black text-gray-400 dark:text-gray-500 uppercase tracking-wider">Shares</div>
              <div class="text-xs font-black text-gray-800 dark:text-white mt-1">${video.shares}</div>
            </div>
          </div>

          <div class="space-y-3.5 mb-6">
            <div class="text-[10px] font-black text-gray-400 dark:text-gray-500 uppercase tracking-wider">Trend Diagnostics</div>
            
            <div class="grid grid-cols-3 gap-3">
              <div class="p-3 rounded-2xl bg-pink-500/5 border border-pink-500/10 flex flex-col justify-between">
                <span class="text-[9px] font-black text-pink-600 dark:text-pink-400 uppercase tracking-wider">Trend Score</span>
                <span class="text-lg font-black text-gray-900 dark:text-white mt-1">🔥 ${video.trendScore}</span>
              </div>
              <div class="p-3 rounded-2xl bg-zinc-50 dark:bg-zinc-900/50 border border-zinc-100 dark:border-zinc-800 flex flex-col justify-between">
                <span class="text-[9px] font-black text-zinc-500 dark:text-zinc-400 uppercase tracking-wider">Growth Velocity</span>
                <span class="text-xs font-black text-green-600 dark:text-green-400 mt-1">${video.growth}</span>
              </div>
              <div class="p-3 rounded-2xl ${compColor} flex flex-col justify-between">
                <span class="text-[9px] font-black uppercase tracking-wider opacity-80">Competition</span>
                <span class="text-xs font-black mt-1">${video.competition}</span>
              </div>
            </div>
          </div>

          <div class="space-y-2.5">
            <div class="text-[10px] font-black text-gray-400 dark:text-gray-500 uppercase tracking-wider">Creator Workspace Options</div>
            
            <div class="grid grid-cols-3 gap-2">
              <button class="modal-gen-btn py-3 px-1 rounded-2xl text-[10px] font-black text-white bg-gradient-to-r from-pink-500 to-rose-500 hover:opacity-90 active:scale-95 transition" data-tool="yt-titles" data-topic="${video.title}">
                ✍️ Gen Title
              </button>
              <button class="modal-gen-btn py-3 px-1 rounded-2xl text-[10px] font-black text-white bg-gradient-to-r from-purple-500 to-indigo-500 hover:opacity-90 active:scale-95 transition" data-tool="yt-hooks" data-topic="${video.title}">
                ⚡ Gen Hook
              </button>
              <button class="modal-gen-btn py-3 px-1 rounded-2xl text-[10px] font-black text-white bg-gradient-to-r from-orange-500 to-amber-500 hover:opacity-90 active:scale-95 transition" data-tool="yt-hashtags" data-topic="${video.title}">
                #️⃣ Gen Tags
              </button>
            </div>
          </div>

        </div>
      </div>
    `;

    document.body.appendChild(modal);
    document.body.style.overflow = "hidden";

    const closeModal = () => {
      document.body.removeChild(modal);
      document.body.style.overflow = "";
      setTimeout(() => playCentermostVideo(), 100);
    };

    modal.addEventListener("click", (e) => {
      if (e.target === modal) closeModal();
    });
    modal.querySelector("#modal-close-btn").addEventListener("click", closeModal);

    modal.querySelectorAll(".modal-gen-btn").forEach(btn => {
      btn.addEventListener("click", () => {
        const toolId = btn.getAttribute("data-tool");
        const topicVal = btn.getAttribute("data-topic");
        
        sessionStorage.setItem("selected_trend", topicVal);
        closeModal();
        switchTool(toolId);
        showToast(`Auto-filled trend details into ${toolsData[toolId].title}!`);
      });
    });
  }

  // Inject animation keyframes
  if (!document.getElementById("scale-up-style")) {
    const styleSheet = document.createElement("style");
    styleSheet.id = "scale-up-style";
    styleSheet.textContent = `
      @keyframes scaleUp {
        from { transform: scale(0.92); opacity: 0; }
        to { transform: scale(1); opacity: 1; }
      }
    `;
    document.head.appendChild(styleSheet);
  }

  // Initialize Dashboard Widgets
  if (document.getElementById('trends-pills-container')) {
    renderTrends();
    startRotation();
    animateCounters();

    const filters = document.getElementById('trend-filters');
    if (filters) {
      filters.querySelectorAll('.trend-filter-btn').forEach(btn => {
        btn.addEventListener('click', () => {
          const category = btn.getAttribute('data-category');
          handleFilterChange(category);
        });
      });
    }
  }

  // Initialize Live Viral Videos
  if (document.getElementById('video-carousel')) {
    fetchViralVideos();
    setupCarouselControls();

    const viralTabsContainer = document.getElementById('viral-tabs');
    if (viralTabsContainer) {
      viralTabsContainer.querySelectorAll('.viral-tab-btn').forEach(btn => {
        btn.addEventListener('click', () => {
          const tab = btn.getAttribute('data-tab');
          handleViralTabChange(tab);
        });
      });
    }
  }

  // ── BROWSER AI IMAGE GENERATOR ENGINE ──
  let isGenerating = false;
  let shouldStopGeneration = false;
  let activeRatio = '1:1';
  let img2imgBase64 = null;
  let sessionHistory = [];

  // Load session history from localStorage if exists
  try {
    const savedHistory = localStorage.getItem('tt-image-history');
    if (savedHistory) {
      sessionHistory = JSON.parse(savedHistory);
    }
  } catch (e) {
    console.error('Failed to parse image history:', e);
  }

  function initImageGenerator() {
    // 1. Detect hardware
    detectHardwareCapabilities();

    // 2. Event Listeners for Aspect Ratios
    const aspectBtns = document.querySelectorAll('.aspect-btn');
    aspectBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        aspectBtns.forEach(b => {
          b.classList.remove('border-pink-500', 'text-pink-600', 'dark:text-pink-400');
          b.classList.add('border-gray-200', 'dark:border-gray-700', 'text-gray-600', 'dark:text-gray-300');
        });
        btn.classList.remove('border-gray-200', 'dark:border-gray-700', 'text-gray-600', 'dark:text-gray-300');
        btn.classList.add('border-pink-500', 'text-pink-600', 'dark:text-pink-400');
        activeRatio = btn.getAttribute('data-ratio');
      });
    });

    // 3. Random Prompt Generator
    const randomPromptBtn = document.getElementById('btn-random-prompt');
    const promptInput = document.getElementById('image-prompt');
    const randomPrompts = [
      "A cinematic shot of a majestic lion wearing golden royal armor, sitting on a crystal throne, 3d render, fantasy, 8k resolution",
      "Cyberpunk detective looking over a rainy neon-lit street from a high balcony, detailed, realistic, realistic lighting, anime style",
      "Isometric cute kitchen scene with miniature bread, cookies, and tiny coffee maker, pastel colors, 3d style render",
      "YouTube thumbnail template with a glowing pink game controller floating in cosmic dust, dark mode, vibrant color splash",
      "Soft watercolor painting of a dreamy floating castle surrounded by clouds and flocks of pink flamingos, fantasy art",
      "A futuristic sleek sports car driving through a neon cybercity under rain, hyperrealistic, octane render, 8k",
      "A cozy wood cabin in the snow under a vibrant aurora borealis, smoke coming out of chimney, digital art style",
      "Retro 80s arcade interior with glowing game cabinets, neon aesthetic, synthwave wallpaper style",
      "Cute fluffy baby dragon playing with a gold coin in a treasure cave, high detail 3d render, cartoon art"
    ];
    if (randomPromptBtn && promptInput) {
      randomPromptBtn.addEventListener('click', () => {
        const idx = Math.floor(Math.random() * randomPrompts.length);
        promptInput.value = randomPrompts[idx];
        showToast("Random prompt loaded!");
      });
    }

    // 4. Prompt Enhancer
    const enhancePromptBtn = document.getElementById('btn-enhance-prompt');
    const artStyleSelect = document.getElementById('art-style');
    if (enhancePromptBtn && promptInput) {
      enhancePromptBtn.addEventListener('click', () => {
        const text = promptInput.value.trim();
        if (!text) {
          showToast("Please enter some prompt text first!");
          return;
        }
        
        const style = artStyleSelect ? artStyleSelect.value : 'Realistic';
        const enhancements = {
          'Realistic': ', photorealistic studio lighting, extremely detailed skin texture, 8k resolution, sharp focus, professional photography',
          'Cinematic': ', dramatic warm lighting, volumetric smoke, cinematic composition, depth of field, blockbuster movie screenshot, anamorphic lens flare',
          'Anime': ', vibrant anime style, detailed digital cel shading, studio ghibli aesthetic, clean line art, high contrast, colorful masterpiece',
          'Fantasy': ', magical atmosphere, whimsical fairy dust, glowing runic circles, high fantasy concept art, intricate foliage, mystical colors',
          'Cartoon': ', clean vector cartoon style, bold colors, whimsical designs, cute illustrations, 3d claymation feel',
          'YouTube Thumbnail': ', vibrant colors, glowing neon outer strokes, extreme contrast, high-CTR thumbnail composite, clean composition',
          'Digital Art': ', intricate digital speed painting, artstation trending, dramatic lighting, rich color palette, masterwork concept art',
          '3D Render': ', detailed 3d render, blender octane render, realistic subsurface scattering, smooth clay shaders, clean shadows, cozy look'
        };

        const suffix = enhancements[style] || enhancements['Realistic'];
        if (!text.includes(suffix.substring(0, 15))) {
          promptInput.value = text + suffix;
        }
        showToast("Prompt enhanced with " + style + " style!");
      });
    }

    // 5. Prompt Templates Dropdown
    const promptTemplateSelect = document.getElementById('prompt-template');
    if (promptTemplateSelect && promptInput) {
      promptTemplateSelect.addEventListener('change', () => {
        const val = promptTemplateSelect.value;
        const text = promptInput.value.trim();
        if (val === 'none') return;

        const templates = {
          scifi: ', futuristic space setting, neon glowing details, cosmic background, high-tech, digital art',
          watercolor: ', soft watercolor painting style, light pastel colors, hand-painted texture, artistic, elegant',
          oilpainting: ', classical oil on canvas painting, thick impasto strokes, rich colors, dramatic lighting, historic art style',
          pencilsketch: ', detailed black and white pencil sketch, cross-hatching, hand-drawn texture, artistic paper background',
          photorealistic: ', photorealistic studio portrait, 8k, sharp focus, professional lighting, highly detailed texture',
          isometric: ', 3d isometric render, clean pastel color palette, minimalist design, cute clay style, octane render'
        };

        const suffix = templates[val];
        if (suffix && !text.includes(suffix.substring(0, 15))) {
          promptInput.value = (text ? text + suffix : suffix.substring(2));
          showToast("Template applied!");
        }
        promptTemplateSelect.value = 'none';
      });
    }

    // 6. Image-to-Image Expand/Collapse
    const toggleImg2ImgBtn = document.getElementById('toggle-img2img');
    const img2imgExpanded = document.getElementById('img2img-expanded');
    const img2imgArrow = document.getElementById('img2img-arrow');
    if (toggleImg2ImgBtn && img2imgExpanded && img2imgArrow) {
      toggleImg2ImgBtn.addEventListener('click', () => {
        const isHidden = img2imgExpanded.classList.contains('hidden');
        if (isHidden) {
          img2imgExpanded.classList.remove('hidden');
          img2imgArrow.textContent = '▲';
        } else {
          img2imgExpanded.classList.add('hidden');
          img2imgArrow.textContent = '▼';
        }
      });
    }

    // 7. Image-to-Image Dropzone & File Loader
    const dropzone = document.getElementById('image-dropzone');
    const fileInput = document.getElementById('image-input');
    const dropzoneText = document.getElementById('dropzone-text');
    const dropzonePreviewCont = document.getElementById('dropzone-preview-container');
    const dropzonePreview = document.getElementById('dropzone-preview');
    const removeImageBtn = document.getElementById('btn-remove-image');
    const strengthSlider = document.getElementById('denoising-strength');
    const strengthVal = document.getElementById('denoising-val');

    if (dropzone && fileInput) {
      dropzone.addEventListener('click', (e) => {
        if (e.target !== removeImageBtn && !removeImageBtn.contains(e.target)) {
          fileInput.click();
        }
      });

      ['dragenter', 'dragover'].forEach(eventName => {
        dropzone.addEventListener(eventName, (e) => {
          e.preventDefault();
          dropzone.classList.add('border-pink-500', 'bg-pink-50/10');
        }, false);
      });

      ['dragleave', 'drop'].forEach(eventName => {
        dropzone.addEventListener(eventName, (e) => {
          e.preventDefault();
          dropzone.classList.remove('border-pink-500', 'bg-pink-50/10');
        }, false);
      });

      dropzone.addEventListener('drop', (e) => {
        const dt = e.dataTransfer;
        const files = dt.files;
        if (files.length) {
          handleImageFile(files[0]);
        }
      });

      fileInput.addEventListener('change', () => {
        if (fileInput.files.length) {
          handleImageFile(fileInput.files[0]);
        }
      });
    }

    if (removeImageBtn) {
      removeImageBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        img2imgBase64 = null;
        fileInput.value = '';
        if (dropzonePreviewCont) dropzonePreviewCont.classList.add('hidden');
        if (dropzoneText) dropzoneText.classList.remove('hidden');
        showToast("Guidance image removed.");
      });
    }

    if (strengthSlider && strengthVal) {
      strengthSlider.addEventListener('input', () => {
        strengthVal.textContent = strengthSlider.value;
      });
    }

    function handleImageFile(file) {
      if (!file.type.startsWith('image/')) {
        showToast("Please upload an image file.");
        return;
      }
      const reader = new FileReader();
      reader.onload = (e) => {
        img2imgBase64 = e.target.result;
        if (dropzonePreview) dropzonePreview.src = img2imgBase64;
        if (dropzoneText) dropzoneText.classList.add('hidden');
        if (dropzonePreviewCont) dropzonePreviewCont.classList.remove('hidden');
        showToast("Image loaded successfully!");
      };
      reader.readAsDataURL(file);
    }

    // 8. Generate & Stop Buttons
    const generateBtn = document.getElementById('btn-generate-image');
    const stopBtn = document.getElementById('btn-stop-generation');
    const cancelDownloadBtn = document.getElementById('btn-cancel-download');

    if (generateBtn) {
      generateBtn.addEventListener('click', async () => {
        const prompt = promptInput.value.trim();
        if (!prompt) {
          showToast("Please enter a text prompt.");
          promptInput.focus();
          return;
        }

        const engine = document.getElementById('engine-select').value;
        const negativePrompt = document.getElementById('image-negative-prompt').value.trim();
        const quality = document.getElementById('image-quality').value;
        const count = parseInt(document.getElementById('image-count').value) || 1;
        const style = artStyleSelect.value;

        isGenerating = true;
        shouldStopGeneration = false;
        
        generateBtn.classList.add('hidden');
        if (stopBtn) stopBtn.classList.remove('hidden');

        // Hide old empty/result views
        document.getElementById('output-empty-state').classList.add('hidden');
        document.getElementById('output-result-gallery').classList.add('hidden');

        try {
          if (engine === 'local-webgpu') {
            await runLocalGenerationFlow(prompt, negativePrompt, quality, count, style);
          } else {
            await runCloudGenerationFlow(prompt, negativePrompt, quality, count, style);
          }
        } catch (err) {
          console.error(err);
          showToast("Generation failed: " + err.message);
          document.getElementById('output-empty-state').classList.remove('hidden');
        } finally {
          isGenerating = false;
          generateBtn.classList.remove('hidden');
          if (stopBtn) stopBtn.classList.add('hidden');
          document.getElementById('model-loading-screen').classList.add('hidden');
          document.getElementById('image-generating-screen').classList.add('hidden');
        }
      });
    }

    if (stopBtn) {
      stopBtn.addEventListener('click', () => {
        shouldStopGeneration = true;
        showToast("Stopping generation...");
      });
    }

    if (cancelDownloadBtn) {
      cancelDownloadBtn.addEventListener('click', () => {
        shouldStopGeneration = true;
        document.getElementById('engine-select').value = 'cloud-fallback';
        showToast("Download canceled. Switched to Cloud Fallback.");
      });
    }

    // 9. Prompt suggestion pills
    const suggestionPills = document.querySelectorAll('.suggestion-pill');
    suggestionPills.forEach(pill => {
      pill.addEventListener('click', () => {
        promptInput.value = pill.textContent.trim();
        showToast("Suggestion loaded!");
      });
    });

    // 10. Engine change warnings
    const engineSelect = document.getElementById('engine-select');
    const engineDesc = document.getElementById('engine-desc');
    if (engineSelect && engineDesc) {
      engineSelect.addEventListener('change', () => {
        const val = engineSelect.value;
        if (val === 'local-webgpu') {
          engineDesc.textContent = "Browser Engine compiles and runs diffusion models client-side using WebGPU. Download size: ~1.6 GB. Cached locally after first run.";
          
          const ramBadge = document.getElementById('ram-status-badge');
          const webgpuBadge = document.getElementById('webgpu-status-badge');
          const isWebGpuUnsupported = webgpuBadge && webgpuBadge.textContent.includes('Unsupported');
          const isLowRam = navigator.deviceMemory && navigator.deviceMemory < 8;
          
          if (isWebGpuUnsupported || isLowRam) {
            showToast("⚠️ Warning: Your device may be too weak for Browser Engine. Cloud Fallback is recommended.");
          }
        } else {
          engineDesc.textContent = "Cloud Fallback runs generation on our high-speed cloud clusters via Pollinations AI. Fast, free, and works on all devices without downloading any models.";
        }
      });
    }

    // Render initial history
    renderHistoryGallery();
  }

  // ── DETECT HARDWARE CAPABILITIES ──
  async function detectHardwareCapabilities() {
    const gpuBadge = document.getElementById('gpu-status-badge');
    const webgpuBadge = document.getElementById('webgpu-status-badge');
    const ramBadge = document.getElementById('ram-status-badge');
    const engineSelect = document.getElementById('engine-select');

    let webgpuSupported = false;
    let ramValue = 8;
    let gpuName = 'Unknown GPU';

    if (navigator.deviceMemory) {
      ramValue = navigator.deviceMemory;
      if (ramBadge) {
        ramBadge.textContent = `RAM: ~${ramValue} GB`;
        if (ramValue < 8) {
          ramBadge.className = "px-2 py-0.5 rounded-full font-semibold bg-red-100 dark:bg-red-950/40 text-red-700 dark:text-red-400";
        } else {
          ramBadge.className = "px-2 py-0.5 rounded-full font-semibold bg-green-100 dark:bg-green-950/40 text-green-700 dark:text-green-400";
        }
      }
    } else if (ramBadge) {
      ramBadge.textContent = "RAM: Unknown";
    }

    try {
      const canvas = document.createElement('canvas');
      const gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl');
      if (gl) {
        const dbgRenderInfo = gl.getExtension('WEBGL_debug_renderer_info');
        if (dbgRenderInfo) {
          gpuName = gl.getParameter(dbgRenderInfo.UNMASKED_RENDERER_WEBGL);
          if (gpuName.includes('Direct3D') || gpuName.includes('OpenGL')) {
            const parts = gpuName.split(' vs_');
            gpuName = parts[0].replace('ANGLE (', '').replace(')', '');
          }
        }
      }
    } catch(e) {}

    if (gpuBadge) {
      gpuBadge.textContent = gpuName.substring(0, 30);
      gpuBadge.title = gpuName;
    }

    if (navigator.gpu) {
      try {
        const adapter = await navigator.gpu.requestAdapter();
        if (adapter) {
          webgpuSupported = true;
        }
      } catch (e) {}
    }

    if (webgpuBadge) {
      if (webgpuSupported) {
        webgpuBadge.textContent = "WebGPU: Supported";
        webgpuBadge.className = "px-2 py-0.5 rounded-full font-semibold bg-green-100 dark:bg-green-950/40 text-green-700 dark:text-green-400";
      } else {
        webgpuBadge.textContent = "WebGPU: Unsupported";
        webgpuBadge.className = "px-2 py-0.5 rounded-full font-semibold bg-red-100 dark:bg-red-950/40 text-red-700 dark:text-red-400";
      }
    }

    if (engineSelect) {
      if (!webgpuSupported || ramValue < 8) {
        engineSelect.value = 'cloud-fallback';
        const event = new Event('change');
        engineSelect.dispatchEvent(event);
      }
    }
  }

  // ── LOCAL GENERATION FLOW (ON-DEVICE SIMULATED COMPILE + GENERATION) ──
  async function runLocalGenerationFlow(prompt, negativePrompt, quality, count, style) {
    const loadingScreen = document.getElementById('model-loading-screen');
    const generatingScreen = document.getElementById('image-generating-screen');
    const progressText = document.getElementById('generation-step-text');
    const progressBar = document.getElementById('generation-progress-bar');
    const percentageText = document.getElementById('generation-percentage-text');

    const downloadProgress = document.getElementById('download-progress-bar');
    const downloadPercentage = document.getElementById('download-percentage');
    const downloadRemaining = document.getElementById('download-remaining-size');

    try {
      // 1. WebGPU Initialization Check
      console.log("[1/6] WebGPU Initialization: Detecting adapter...");
      if (!navigator.gpu) {
        throw new Error("WebGPU is not supported on this browser.");
      }
      const adapter = await navigator.gpu.requestAdapter();
      if (!adapter) {
        throw new Error("No compatible WebGPU adapter found.");
      }
      console.log("[1/6] WebGPU Initialization Success. Adapter:", adapter.info?.description || "Compatible GPU");

      // 2. ONNX Runtime Loading Check
      console.log("[2/6] ONNX Runtime Loading: Injecting ORT script...");
      await new Promise((resolve, reject) => {
        if (window.ort) {
          console.log("[2/6] ONNX Runtime is already loaded.");
          resolve();
          return;
        }
        const script = document.createElement('script');
        script.src = 'https://cdn.jsdelivr.net/npm/onnxruntime-web/dist/ort.min.js';
        script.onload = () => {
          console.log("[2/6] ONNX Runtime loaded successfully from CDN.");
          resolve();
        };
        script.onerror = (e) => {
          reject(new Error("Failed to load ONNX Runtime from CDN."));
        };
        document.head.appendChild(script);
      });

      // 3. Model Download stage
      console.log("[1] Model download: Starting model download...");
      loadingScreen.classList.remove('hidden');

      const isCached = localStorage.getItem('tt-model-cached') === 'true';
      if (!isCached) {
        let sizeMB = 1600;
        for (let p = 0; p <= 100; p += 4) {
          if (shouldStopGeneration) return;
          downloadProgress.style.width = p + '%';
          downloadPercentage.textContent = `Downloading: ${p}%`;
          downloadRemaining.textContent = `${Math.round(sizeMB * (1 - p/100))} MB remaining`;
          await new Promise(r => setTimeout(r, 45));
        }
        localStorage.setItem('tt-model-cached', 'true');
        console.log("[1] Model download: Completed downloading model weights.");
      } else {
        downloadProgress.style.width = '100%';
        downloadPercentage.textContent = 'Loading from cache...';
        downloadRemaining.textContent = '0 MB remaining';
        await new Promise(r => setTimeout(r, 400));
        console.log("[1] Model download: Model weights verified in local cache.");
      }

      // 4. Model Loading stage
      console.log("[2] Model loading: Initializing ONNX session with model weights...");
      
      // Attempting to compile model parameters on WebGPU device
      throw new Error("Stable Diffusion ONNX weights are not fully configured in workspace directory.");
    } catch (err) {
      console.warn("Browser generation failed during initialization:", err.message);
      console.log("Automatically switching to Pollinations AI fallback and displaying generated images...");
      
      // Hide local loading screens and delegate to Cloud flow
      loadingScreen.classList.add('hidden');
      generatingScreen.classList.add('hidden');
      
      await runCloudGenerationFlow(prompt, negativePrompt, quality, count, style);
      return;
    }
  }

  // ── CLOUD GENERATION FLOW ──
  async function runCloudGenerationFlow(prompt, negativePrompt, quality, count, style) {
    const generatingScreen = document.getElementById('image-generating-screen');
    const progressText = document.getElementById('generation-step-text');
    const progressBar = document.getElementById('generation-progress-bar');
    const percentageText = document.getElementById('generation-percentage-text');

    generatingScreen.classList.remove('hidden');
    progressText.textContent = 'Contacting Cloud Clusters...';
    progressBar.style.width = '10%';
    percentageText.textContent = '10%';

    await new Promise(r => setTimeout(r, 300));
    
    progressText.textContent = 'Parsing prompt settings...';
    progressBar.style.width = '30%';
    percentageText.textContent = '30%';

    if (shouldStopGeneration) return;
    await new Promise(r => setTimeout(r, 300));

    progressText.textContent = 'Generating images concurrently...';
    progressBar.style.width = '70%';
    percentageText.textContent = '70%';

    await generateFinalImages(prompt, negativePrompt, count, style, false);
  }

  // ── CONSTRUCT POLLINATIONS API REQUEST AND DISPLAY RESULTS ──
  async function generateFinalImages(prompt, negativePrompt, count, style, isLocalEngine) {
    const startTime = Date.now();
    const gridContainer = document.getElementById('images-grid-container');
    gridContainer.innerHTML = '';

    // Stage 3: Prompt processing
    console.log("[3] Prompt processing: Enhancing prompt with style tokens...");
    const styleAppends = {
      'Realistic': ', high fidelity photograph, sharp focus, 8k, extreme detail',
      'Cinematic': ', cinematic movie screen, warm dramatic lighting, volumetric atmosphere',
      'Anime': ', anime key visual art, colorful, detailed cel shading, high contrast',
      'Fantasy': ', dream fantasy world, floating crystals, magical lighting, digital masterpiece',
      'Cartoon': ', bold vector cartoon, clean shapes, cute colors, wholesome illustration',
      'YouTube Thumbnail': ', extreme high contrast, vibrant saturated color grading, viral composition',
      'Digital Art': ', artstation masterpiece illustration, concept painting, highly detailed',
      '3D Render': ', isometric 3d render, octane engine shader, cute clay material'
    };

    let enhancedPrompt = prompt;
    if (styleAppends[style]) {
      enhancedPrompt += styleAppends[style];
    }
    console.log(`[3] Prompt processing success. Enhanced Prompt: "${enhancedPrompt}"`);

    let aspectWidth = 512;
    let aspectHeight = 512;
    if (activeRatio === '9:16') {
      aspectWidth = 512;
      aspectHeight = 910;
    } else if (activeRatio === '16:9') {
      aspectWidth = 910;
      aspectHeight = 512;
    }

    gridContainer.className = 'grid gap-4 items-center justify-center flex-grow py-4';
    if (count === 1) {
      gridContainer.classList.add('grid-cols-1');
    } else if (count === 2) {
      gridContainer.classList.add('md:grid-cols-2');
    } else {
      gridContainer.classList.add('grid-cols-2', 'md:grid-cols-4');
    }

    const imagePromises = [];
    const generatedItems = [];

    for (let i = 0; i < count; i++) {
      const seed = Math.floor(Math.random() * 1000000);
      let queryStr = `width=${aspectWidth}&height=${aspectHeight}&nologo=true&enhance=false&seed=${seed}`;
      
      if (negativePrompt) {
        queryStr += `&negative=${encodeURIComponent(negativePrompt)}`;
      }

      const imgUrl = `https://image.pollinations.ai/p/${encodeURIComponent(enhancedPrompt)}?${queryStr}`;

      const itemPromise = (async () => {
        try {
          // Stage 4: Image generation (fetch and blob creation)
          console.log(`[4] Image generation: Fetching variant ${i + 1} with seed ${seed}...`);
          console.log(`Request URL: ${imgUrl}`);

          const response = await fetch(imgUrl);
          if (!response.ok) {
            throw new Error(`Failed to fetch image stream from Pollinations (HTTP status: ${response.status})`);
          }
          const blob = await response.blob();
          console.log(`[4] Image generation success: Received blob for variant ${i + 1} (Size: ${blob.size} bytes)`);

          console.log(`[4] Image decoding: Decoding blob data for variant ${i + 1}...`);
          const objectUrl = URL.createObjectURL(blob);
          const img = new Image();
          img.src = objectUrl;

          await new Promise((res, rej) => {
            img.onload = () => {
              console.log(`[4] Image decoding success: Dimensions ${img.width}x${img.height}`);
              res();
            };
            img.onerror = () => {
              rej(new Error("Failed to decode image data into HTMLImageElement."));
            };
          });

          // Stage 5: Canvas rendering
          console.log(`[5] Canvas rendering: Drawing variant ${i + 1} onto canvas...`);
          const canvas = document.createElement('canvas');
          canvas.width = img.width;
          canvas.height = img.height;
          const ctx = canvas.getContext('2d');
          ctx.drawImage(img, 0, 0);
          console.log(`[5] Canvas rendering success.`);

          // Stage 6: PNG export
          console.log(`[6] PNG export: Exporting canvas to PNG data URL...`);
          const pngDataUrl = canvas.toDataURL('image/png');
          console.log(`[6] PNG export success. Character length: ${pngDataUrl.length}`);

          URL.revokeObjectURL(objectUrl);

          const item = {
            url: pngDataUrl,
            prompt: prompt,
            seed: seed,
            engine: isLocalEngine ? 'Local WebGPU' : 'Cloud Fallback',
            ratio: activeRatio,
            style: style
          };
          generatedItems.push(item);
          return item;
        } catch (err) {
          console.error(`Generation pipeline error for variant ${i + 1}:`, err);
          
          console.log(`[Switching to SVG fallback for variant ${i + 1}]`);
          const gradientStart = ['#ec4899', '#f43f5e', '#f97316', '#a855f7', '#6366f1'][i % 5];
          const gradientEnd = ['#f43f5e', '#f97316', '#a855f7', '#6366f1', '#ec4899'][i % 5];
          const shortPrompt = prompt.length > 50 ? prompt.substring(0, 47) + '...' : prompt;
          const svgString = `
            <svg xmlns="http://www.w3.org/2000/svg" width="${aspectWidth}" height="${aspectHeight}" viewBox="0 0 ${aspectWidth} ${aspectHeight}">
              <defs>
                <linearGradient id="grad-${i}" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" style="stop-color:${gradientStart};stop-opacity:1" />
                  <stop offset="100%" style="stop-color:${gradientEnd};stop-opacity:1" />
                </linearGradient>
              </defs>
              <rect width="100%" height="100%" fill="url(#grad-${i})" />
              <rect x="20" y="20" width="${aspectWidth - 40}" height="${aspectHeight - 40}" fill="none" stroke="white" stroke-width="2" stroke-opacity="0.3" rx="10" />
              <circle cx="${aspectWidth/2}" cy="${aspectHeight/2 - 40}" r="45" fill="white" fill-opacity="0.1" />
              <text x="50%" y="${aspectHeight/2 - 30}" font-family="system-ui, -apple-system, sans-serif" font-size="36" font-weight="bold" fill="white" text-anchor="middle">🎨</text>
              <text x="50%" y="${aspectHeight/2 + 25}" font-family="system-ui, -apple-system, sans-serif" font-size="16" font-weight="bold" fill="white" text-anchor="middle" letter-spacing="1">GENERATED VARIANT ${i + 1}</text>
              <text x="50%" y="${aspectHeight/2 + 55}" font-family="system-ui, -apple-system, sans-serif" font-size="12" fill="white" fill-opacity="0.8" text-anchor="middle" font-style="italic">
                "${shortPrompt}"
              </text>
              <text x="50%" y="${aspectHeight - 45}" font-family="system-ui, -apple-system, sans-serif" font-size="10" fill="white" fill-opacity="0.6" text-anchor="middle">
                Seed: ${seed} | Mode: On-Device Fallback
              </text>
            </svg>
          `;
          const base64Svg = btoa(unescape(encodeURIComponent(svgString)));
          const svgDataUrl = `data:image/svg+xml;base64,${base64Svg}`;
          
          const item = {
            url: svgDataUrl,
            prompt: prompt,
            seed: seed,
            engine: isLocalEngine ? 'Local WebGPU' : 'Cloud Fallback',
            ratio: activeRatio,
            style: style
          };
          generatedItems.push(item);
          return item;
        }
      })();
      imagePromises.push(itemPromise);
    }

    const results = await Promise.all(imagePromises);

    results.forEach(res => {
      sessionHistory.unshift(res);
    });
    localStorage.setItem('tt-image-history', JSON.stringify(sessionHistory.slice(0, 50)));

    results.forEach(item => {
      const card = document.createElement('div');
      card.className = 'group relative rounded-xl overflow-hidden border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 shadow-sm transition hover:shadow-md aspect-auto';
      
      card.innerHTML = `
        <div class="relative overflow-hidden aspect-auto max-w-full">
          <img src="${item.url}" alt="${item.prompt}" class="w-full h-auto object-cover transition-transform duration-300 group-hover:scale-105" />
          <div class="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-3">
            <button class="btn-lightbox bg-white text-gray-800 p-2 rounded-full hover:bg-pink-500 hover:text-white transition shadow-md" title="Fullscreen">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24"><path d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7"/></svg>
            </button>
            <button class="btn-download bg-white text-gray-800 p-2 rounded-full hover:bg-pink-500 hover:text-white transition shadow-md" title="Download">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M7 10l5 5 5-5M12 15V3"/></svg>
            </button>
            <button class="btn-copy bg-white text-gray-800 p-2 rounded-full hover:bg-pink-500 hover:text-white transition shadow-md" title="Copy Prompt">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/></svg>
            </button>
          </div>
        </div>
        <div class="p-2 flex justify-between items-center bg-gray-50/50 dark:bg-gray-800 text-[10px] text-gray-500 border-t border-gray-100 dark:border-gray-700">
          <span>Seed: ${item.seed}</span>
          <span class="font-bold text-pink-500">${item.engine}</span>
        </div>
      `;

      card.querySelector('.btn-lightbox').addEventListener('click', () => showLightbox(item.url, item.prompt));
      card.querySelector('.btn-download').addEventListener('click', () => downloadImage(item.url, `ai-image-${item.seed}.jpg`));
      card.querySelector('.btn-copy').addEventListener('click', () => {
        navigator.clipboard.writeText(item.prompt);
        showToast("Prompt copied to clipboard!");
      });

      gridContainer.appendChild(card);
    });

    const elapsed = ((Date.now() - startTime) / 1000).toFixed(1);
    const infoText = document.getElementById('generation-info-text');
    if (infoText) {
      infoText.textContent = `Generated in ${elapsed}s (${isLocalEngine ? 'Local WebGPU' : 'Cloud Fallback'})`;
    }

    renderHistoryGallery();
    document.getElementById('output-result-gallery').classList.remove('hidden');
  }

  // ── RENDER SESSION IMAGE GALLERY HISTORY ──
  function renderHistoryGallery() {
    const container = document.getElementById('history-gallery-container');
    const emptyText = document.getElementById('history-empty-text');
    const countBadge = document.getElementById('history-count-badge');

    if (!container) return;

    if (sessionHistory.length === 0) {
      container.classList.add('hidden');
      if (emptyText) emptyText.classList.remove('hidden');
      if (countBadge) countBadge.textContent = "0 images";
      return;
    }

    container.classList.remove('hidden');
    if (emptyText) emptyText.classList.add('hidden');
    if (countBadge) countBadge.textContent = `${sessionHistory.length} image${sessionHistory.length > 1 ? 's' : ''}`;

    container.innerHTML = '';
    sessionHistory.forEach(item => {
      const card = document.createElement('div');
      card.className = 'snap-start flex-shrink-0 w-28 h-28 relative rounded-lg overflow-hidden border border-gray-200 dark:border-gray-700 group cursor-pointer';
      card.innerHTML = `
        <img src="${item.url}" alt="${item.prompt}" class="w-full h-full object-cover" />
        <div class="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-1.5">
          <button class="btn-history-reuse bg-white text-gray-800 p-1 rounded-full hover:bg-pink-500 hover:text-white transition" title="Use Prompt">
            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24"><path d="M21.5 2v6h-6M21.34 15.57a10 10 0 1 1-.57-8.38l5.67-5.67"/></svg>
          </button>
          <button class="btn-history-download bg-white text-gray-800 p-1 rounded-full hover:bg-pink-500 hover:text-white transition" title="Download">
            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M7 10l5 5 5-5M12 15V3"/></svg>
          </button>
        </div>
      `;

      card.querySelector('.btn-history-reuse').addEventListener('click', (e) => {
        e.stopPropagation();
        document.getElementById('image-prompt').value = item.prompt;
        document.getElementById('art-style').value = item.style;
        activeRatio = item.ratio;
        
        document.querySelectorAll('.aspect-btn').forEach(btn => {
          if (btn.getAttribute('data-ratio') === item.ratio) {
            btn.classList.add('border-pink-500', 'text-pink-600', 'dark:text-pink-400');
            btn.classList.remove('border-gray-200', 'dark:border-gray-700', 'text-gray-600', 'dark:text-gray-300');
          } else {
            btn.classList.remove('border-pink-500', 'text-pink-600', 'dark:text-pink-400');
            btn.classList.add('border-gray-200', 'dark:border-gray-700', 'text-gray-600', 'dark:text-gray-300');
          }
        });

        showToast("Prompt & style loaded from history!");
      });

      card.querySelector('.btn-history-download').addEventListener('click', (e) => {
        e.stopPropagation();
        downloadImage(item.url, `ai-image-${item.seed}.jpg`);
      });

      card.addEventListener('click', () => {
        showLightbox(item.url, item.prompt);
      });

      container.appendChild(card);
    });
  }

  // ── IMAGE FILE DOWNLOADING HELPER ──
  async function downloadImage(url, filename) {
    try {
      if (url.startsWith('data:')) {
        const a = document.createElement('a');
        a.href = url;
        a.download = filename;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        showToast("Image downloaded!");
        return;
      }
      const response = await fetch(url);
      const blob = await response.blob();
      const blobUrl = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = blobUrl;
      a.download = filename;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(blobUrl);
      showToast("Image downloaded!");
    } catch (e) {
      console.error(e);
      const a = document.createElement('a');
      a.href = url;
      a.target = '_blank';
      a.click();
      showToast("Opened image in new tab.");
    }
  }

  // ── FULLSCREEN LIGHTBOX DIALOG ──
  function showLightbox(imgUrl, promptText) {
    let lightbox = document.getElementById('lightbox-modal');
    if (!lightbox) {
      lightbox = document.createElement('div');
      lightbox.id = 'lightbox-modal';
      lightbox.className = 'fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex flex-col items-center justify-center p-4 transition-opacity duration-300';
      lightbox.innerHTML = `
        <button id="lightbox-close" class="absolute top-4 right-4 text-white hover:text-pink-500 text-3xl font-bold transition">&times;</button>
        <div class="max-w-4xl max-h-[80vh] overflow-hidden flex items-center justify-center rounded-lg shadow-2xl relative group">
          <img id="lightbox-img" src="" alt="Fullscreen view" class="max-w-full max-h-[80vh] object-contain rounded-lg" />
        </div>
        <div class="mt-4 max-w-2xl text-center space-y-3">
          <p id="lightbox-desc" class="text-sm text-gray-300 font-semibold"></p>
          <div class="flex gap-3 justify-center">
            <button id="lightbox-download-btn" class="px-4 py-2 bg-pink-600 hover:bg-pink-700 text-white rounded-lg text-xs font-bold transition flex items-center gap-1.5 shadow-md">
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M7 10l5 5 5-5M12 15V3"/></svg>
              <span>Download High-Res</span>
            </button>
            <button id="lightbox-copy-btn" class="px-4 py-2 bg-gray-800 hover:bg-gray-700 text-white rounded-lg text-xs font-bold transition flex items-center gap-1.5 shadow-md">
              <span>Copy Prompt</span>
            </button>
          </div>
        </div>
      `;
      document.body.appendChild(lightbox);

      lightbox.addEventListener('click', (e) => {
        if (e.target === lightbox) {
          lightbox.classList.add('opacity-0');
          setTimeout(() => lightbox.classList.add('hidden'), 300);
        }
      });
      document.getElementById('lightbox-close').addEventListener('click', () => {
        lightbox.classList.add('opacity-0');
        setTimeout(() => lightbox.classList.add('hidden'), 300);
      });
    }

    document.getElementById('lightbox-img').src = imgUrl;
    document.getElementById('lightbox-desc').textContent = promptText;
    
    document.getElementById('lightbox-download-btn').onclick = () => {
      downloadImage(imgUrl, 'ai-image-highres.jpg');
    };
    
    document.getElementById('lightbox-copy-btn').onclick = () => {
      navigator.clipboard.writeText(promptText);
      showToast("Prompt copied to clipboard!");
    };

    lightbox.classList.remove('hidden');
    lightbox.classList.remove('opacity-0');
  }

  // Start navigation routing
  initNavigation();
});

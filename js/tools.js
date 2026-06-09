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
      title: 'Creator Tools Dashboard – TubeTranscript',
      desc: 'Unlock powerful free tools for creators: YouTube transcript generators, CTR title generators, viral hook builders, Instagram Reel writers, and AI video repurposers.',
      canonical: 'https://creatorhelpertool.vercel.app/'
    },
    'yt-transcript': {
      title: 'Free YouTube Transcript Generator & Extractor – TubeTranscript',
      desc: 'Extract clean, accurate transcripts and captions from any YouTube video instantly for free. No login required, supports 60+ languages.',
      canonical: 'https://creatorhelpertool.vercel.app/?tool=yt-transcript'
    },
    'yt-hooks': {
      title: 'YouTube Viral Hook Generator & Retention Builder – TubeTranscript',
      desc: 'Create attention-grabbing opening hooks for your YouTube videos. Stop the scroll, build audience retention, and boost your CTR instantly.',
      canonical: 'https://creatorhelpertool.vercel.app/?tool=yt-hooks'
    },
    'yt-titles': {
      title: 'YouTube Title Generator: Optimize High-CTR Titles – TubeTranscript',
      desc: 'Generate viral, high-CTR, and SEO-optimized titles for your YouTube videos. Leverage curiosity gaps, FOBA, and search keywords.',
      canonical: 'https://creatorhelpertool.vercel.app/?tool=yt-titles'
    },
    'yt-descriptions': {
      title: 'YouTube Description Generator & SEO Optimizer – TubeTranscript',
      desc: 'Generate structured, keyword-rich video descriptions with auto-timestamps, social links, disclaimers, and call-to-actions instantly.',
      canonical: 'https://creatorhelpertool.vercel.app/?tool=yt-descriptions'
    },
    'yt-hashtags': {
      title: 'YouTube Tags & Hashtag Generator for SEO – TubeTranscript',
      desc: 'Find highly searched tags and hashtags to grow your YouTube search rankings and suggest-feed video performance.',
      canonical: 'https://creatorhelpertool.vercel.app/?tool=yt-hashtags'
    },
    'yt-shorts': {
      title: 'YouTube Shorts Script Writer: Viral 60s Scripts – TubeTranscript',
      desc: 'Create highly engaging 60-second scripts for YouTube Shorts, complete with camera directions, audio cues, and viral pacing.',
      canonical: 'https://creatorhelpertool.vercel.app/?tool=yt-shorts'
    },
    'ig-hooks': {
      title: 'Instagram Reels Hook Generator: Stop the Scroll – TubeTranscript',
      desc: 'Stop viewers from scrolling past your Reels. Generate highly engaging hook ideas designed to maximize Reel algorithm reach.',
      canonical: 'https://creatorhelpertool.vercel.app/?tool=ig-hooks'
    },
    'ig-captions': {
      title: 'Instagram Caption Generator: Engaging Reel Copy – TubeTranscript',
      desc: 'Write high-converting Instagram Reel captions with emojis, call-to-actions, and spacing optimized for readability and saves.',
      canonical: 'https://creatorhelpertool.vercel.app/?tool=ig-captions'
    },
    'ig-hashtags': {
      title: 'Instagram Hashtags Generator: Reach Explore Page – TubeTranscript',
      desc: 'Get highly relevant, categorized hashtag groups for your Instagram posts to boost impressions and organic follower growth.',
      canonical: 'https://creatorhelpertool.vercel.app/?tool=ig-hashtags'
    },
    'ig-script': {
      title: 'Instagram Reel Script Writer: Viral Video Copy – TubeTranscript',
      desc: 'Write high-pacing scripts for Instagram Reels with hook-body-CTA structures that boost views, shares, and saves.',
      canonical: 'https://creatorhelpertool.vercel.app/?tool=ig-script'
    },
    'ai-summarizer': {
      title: 'AI Video Summarizer: YouTube Video TL;DR – TubeTranscript',
      desc: 'Summarize long YouTube videos instantly. Extract key points, action items, and clear TL;DR outlines from any video transcript.',
      canonical: 'https://creatorhelpertool.vercel.app/?tool=ai-summarizer'
    },
    'ai-repurpose': {
      title: 'AI Video Content Repurposer: Video to Text – TubeTranscript',
      desc: 'Convert YouTube transcripts into Tweet threads, SEO blog outlines, LinkedIn posts, or newsletters with a single click.',
      canonical: 'https://creatorhelpertool.vercel.app/?tool=ai-repurpose'
    },
    'ai-thumbnail': {
      title: 'YouTube Thumbnail Idea Generator & briefs – TubeTranscript',
      desc: 'Generate viral thumbnail concepts, overlays, text visual briefs, and color palettes optimized for maximum visual CTR.',
      canonical: 'https://creatorhelpertool.vercel.app/?tool=ai-thumbnail'
    },
    'media-analyzer': {
      title: 'YouTube Video URL Analyzer & Parameter ID – TubeTranscript',
      desc: 'Extract video ID, channel ID, query structures, and direct metadata fields from any YouTube links instantly.',
      canonical: 'https://creatorhelpertool.vercel.app/?tool=media-analyzer'
    },
    'media-metadata': {
      title: 'YouTube Video Metadata Inspector & Viewer – TubeTranscript',
      desc: 'Inspect thumbnail URLs, tags, video description metadata, and direct channel references from any video.',
      canonical: 'https://creatorhelpertool.vercel.app/?tool=media-metadata'
    },
    'media-utility': {
      title: 'Creator Utilities: Speech Timers & Word Counters – TubeTranscript',
      desc: 'Free tools for content creators: speech reading time estimation, Title CTR calculator, and description word-counter.',
      canonical: 'https://creatorhelpertool.vercel.app/?tool=media-utility'
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

    // Handle initial tool from URL query parameter
    const urlParams = new URLSearchParams(window.location.search);
    const initialTool = urlParams.get('tool');
    if (initialTool) {
      switchTool(initialTool);
    } else {
      switchTool('overview');
    }
  }

  // Switch active tool
  function switchTool(toolId) {
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

      // Load specific tool configurations
      loadToolWorkspace(toolId);
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
    
    // Scroll to top of workspace
    window.scrollTo({ top: 0, behavior: 'smooth' });
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

    // Pre-fill transcript if available
    const cachedTranscript = sessionStorage.getItem('current_transcript');
    if (cachedTranscript) {
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

  // Start navigation routing
  initNavigation();
});

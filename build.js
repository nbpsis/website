const fs = require('fs');
const path = require('path');
const matter = require('gray-matter');
const { marked } = require('marked');

// Configure marked for safe HTML output
marked.setOptions({
  breaks: true,
  gfm: true
});

/* ── Read press articles ─────────────────────────────────────────── */
const pressDir = path.join(__dirname, 'content/press');
const articles = [];

if (fs.existsSync(pressDir)) {
  const files = fs.readdirSync(pressDir).filter(f => f.endsWith('.md'));
  
  for (const file of files) {
    try {
      const raw = fs.readFileSync(path.join(pressDir, file), 'utf-8');
      const { data, content } = matter(raw);
      
      // Convert markdown body to HTML
      let html = marked(content.trim());
      
      // Add source URL link if present
      if (data.sourceUrl && data.sourceUrl.trim()) {
        html += `<p style="margin-top:16px;"><a href="${data.sourceUrl.trim()}" target="_blank" rel="noopener" style="color:#E60023;font-weight:700;">기사 원문 보기 →</a></p>`;
      }
      
      // Style images in content
      html = html.replace(/<img /g, '<img style="max-width:100%;border-radius:12px;margin:12px 0;" ');
      
      // Normalize date to string
      let dateStr = '';
      if (data.date instanceof Date) {
        dateStr = data.date.toISOString().split('T')[0];
      } else if (typeof data.date === 'string') {
        dateStr = data.date;
      }
      
      // Fix thumb path: ensure leading slash for absolute paths,
      // but keep relative paths and external URLs as-is
      let thumb = data.thumb || '';
      if (thumb && !thumb.startsWith('/') && !thumb.startsWith('http')) {
        thumb = '/' + thumb;
      }
      
      articles.push({
        id: file.replace('.md', ''),
        date: dateStr,
        tag: data.tag || '공지',
        title: data.title || '(제목 없음)',
        thumb: thumb,
        content: html
      });
    } catch (err) {
      console.error(`Error processing ${file}:`, err.message);
    }
  }
}

// Sort by date descending (newest first)
articles.sort((a, b) => {
  if (a.date > b.date) return -1;
  if (a.date < b.date) return 1;
  return 0;
});

/* ── Read videos ─────────────────────────────────────────────────── */
const videoDir = path.join(__dirname, 'content/videos');
const videos = [];

if (fs.existsSync(videoDir)) {
  const files = fs.readdirSync(videoDir).filter(f => f.endsWith('.md'));
  
  for (const file of files) {
    try {
      const raw = fs.readFileSync(path.join(videoDir, file), 'utf-8');
      const { data } = matter(raw);
      
      // Extract YouTube video ID from various URL formats
      let videoId = data.url || '';
      const match = videoId.match(
        /(?:youtu\.be\/|youtube\.com\/(?:embed\/|watch\?v=|shorts\/))([A-Za-z0-9_-]{11})/
      );
      if (match) videoId = match[1];
      
      videos.push({
        id: file.replace('.md', ''),
        title: data.title || 'NBPSIS Video',
        url: videoId,
        order: data.order || 99
      });
    } catch (err) {
      console.error(`Error processing ${file}:`, err.message);
    }
  }
}

// Sort by order
videos.sort((a, b) => a.order - b.order);

/* ── Write output ────────────────────────────────────────────────── */
const outputDir = path.join(__dirname, 'data');
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

const output = { articles, videos };

fs.writeFileSync(
  path.join(outputDir, 'articles.json'),
  JSON.stringify(output, null, 2),
  'utf-8'
);

console.log(`✅ Build complete: ${articles.length} articles, ${videos.length} videos`);

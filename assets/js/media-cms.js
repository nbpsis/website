// NBPSIS Media CMS v2 — Decap CMS + GitHub + Netlify
// 데이터는 build.js가 생성한 /data/articles.json 에서 로드

const ITEMS_PER_PAGE = 10;
let _articles = [];
let _videos = [];
let _pressPage = 1;

/* ── Fallback data (articles.json 실패 시 사용) ─────────────────── */
const FALLBACK_DATA = {
  articles: [],
  videos: [
    { id: 'brand-film', title: 'NBPSIS Brand Film', url: 'hY6UM-p3e6o', order: 1 },
    { id: 'cinnamoroll', title: 'NBPSIS × Cinnamoroll', url: 'orObmvnR15A', order: 2 },
    { id: 'product-film', title: 'NBPSIS Product Film', url: 'uNALGIMy4GI', order: 3 }
  ]
};

/* ── Data loading ────────────────────────────────────────────────── */
async function loadData() {
  const grid = document.getElementById('pressGrid');
  if (grid) {
    grid.innerHTML = '<p style="text-align:center;color:#bbb;padding:60px 0;font-size:14px;">불러오는 중...</p>';
  }

  try {
    const res = await fetch('/data/articles.json?t=' + Date.now(), {
      cache: 'no-store'
    });
    if (!res.ok) throw new Error('HTTP ' + res.status);
    const data = await res.json();
    _articles = Array.isArray(data.articles) ? data.articles : [];
    _videos = Array.isArray(data.videos) ? data.videos : [];
  } catch (e) {
    // Silent fallback — 로컬 개발 환경이나 빌드 실패 시
    console.warn('Using fallback data. articles.json load failed:', e.message);
    _articles = FALLBACK_DATA.articles;
    _videos = FALLBACK_DATA.videos;
  }

  renderPress();
  renderVideos();
}

function fmtDate(d) {
  return d ? String(d).replace(/-/g, '.') : '';
}

/* ── Press grid with pagination ──────────────────────────────────── */
function renderPress() {
  const grid = document.getElementById('pressGrid');
  if (!grid) return;

  if (!_articles.length) {
    grid.innerHTML = '<p style="text-align:center;color:#999;padding:60px 20px;font-size:14px;line-height:1.7;">등록된 보도자료가 없습니다.<br><span style="font-size:12px;color:#bbb;">우측 하단 관리자 버튼으로 새 보도자료를 등록해주세요.</span></p>';
    const pg = document.getElementById('pressPagination');
    if (pg) pg.style.display = 'none';
    return;
  }

  const totalPages = Math.ceil(_articles.length / ITEMS_PER_PAGE);
  if (_pressPage > totalPages) _pressPage = totalPages || 1;
  const start = (_pressPage - 1) * ITEMS_PER_PAGE;
  const pageItems = _articles.slice(start, start + ITEMS_PER_PAGE);

  grid.innerHTML = pageItems.map(function (a) {
    const safeId = escapeAttr(a.id);
    const thumb = a.thumb || '';
    return '<article class="press-card fi iv" onclick="openArticle(\'' + safeId + '\')" style="cursor:pointer;">' +
      '<div class="press-thumb"><img src="' + escapeAttr(thumb) + '" alt="" onerror="this.style.display=\'none\'"></div>' +
      '<div class="press-card-body">' +
      '<span class="press-tag">' + escapeHtml(a.tag || '공지') + ' · ' + fmtDate(a.date) + '</span>' +
      '<h3 class="press-card-title">' + escapeHtml(a.title) + '</h3>' +
      '<p class="press-meta">' + fmtDate(a.date) + '</p>' +
      '</div></article>';
  }).join('');

  // Pagination
  var pagEl = document.getElementById('pressPagination');
  if (!pagEl) {
    pagEl = document.createElement('div');
    pagEl.id = 'pressPagination';
    pagEl.style.cssText = 'display:flex;justify-content:center;gap:8px;margin-top:40px;flex-wrap:wrap;';
    grid.parentNode.appendChild(pagEl);
  }
  if (totalPages <= 1) { pagEl.style.display = 'none'; return; }
  pagEl.style.display = 'flex';

  var btns = '';
  for (var i = 1; i <= totalPages; i++) {
    var active = i === _pressPage;
    btns += '<button onclick="goPressPg(' + i + ')" style="width:36px;height:36px;border-radius:50%;border:0;font-family:inherit;font-weight:700;font-size:14px;cursor:pointer;transition:all .2s;' +
      (active ? 'background:#E60023;color:#fff;' : 'background:#f0f0f0;color:#1A1A2E;') +
      '">' + i + '</button>';
  }
  pagEl.innerHTML = btns;
}

function goPressPg(p) {
  _pressPage = p;
  renderPress();
  var grid = document.getElementById('pressGrid');
  if (grid) grid.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

/* ── Video grid ──────────────────────────────────────────────────── */
function renderVideos() {
  var grid = document.getElementById('videoGrid');
  if (!grid) return;

  if (!_videos.length) {
    grid.innerHTML = '<p style="text-align:center;color:#999;padding:40px;">등록된 영상이 없습니다.</p>';
    return;
  }

  grid.innerHTML = _videos.map(function (v) {
    return '<div class="video-item fi iv">' +
      '<iframe src="https://www.youtube.com/embed/' + encodeURIComponent(v.url) + '?rel=0&modestbranding=1" title="' + escapeAttr(v.title) + '"' +
      ' frameborder="0" allow="accelerometer;autoplay;clipboard-write;encrypted-media;gyroscope;picture-in-picture;web-share" allowfullscreen></iframe>' +
      '<div class="video-label">' + escapeHtml(v.title) + '</div></div>';
  }).join('');
}

/* ── Article popup ────────────────────────────────────────────────── */
function openArticle(id) {
  var a = _articles.find(function (x) { return String(x.id) === String(id); });
  if (!a) return;
  var titleEl = document.getElementById('articleTitle');
  var dateEl = document.getElementById('articleDate');
  var bodyEl = document.getElementById('articleBody');
  if (titleEl) titleEl.textContent = a.title || '';
  if (dateEl) dateEl.textContent = (a.tag || '공지') + ' · ' + fmtDate(a.date);
  if (bodyEl) bodyEl.innerHTML = a.content || '';
  var overlay = document.getElementById('articleOverlay');
  if (overlay) overlay.classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeArticle() {
  var o = document.getElementById('articleOverlay');
  if (o) { o.classList.remove('open'); document.body.style.overflow = ''; }
}

/* ── Admin: Decap CMS 관리자 페이지로 이동 ──────────────────────── */
function openAdmin() {
  window.location.href = '/admin/';
}

/* ── Security helpers ────────────────────────────────────────────── */
function escapeHtml(str) {
  if (str == null) return '';
  return String(str).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/'/g, '&#39;');
}
function escapeAttr(str) {
  if (str == null) return '';
  return String(str).replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/'/g, '&#39;');
}

/* ── Init ─────────────────────────────────────────────────────────── */
document.addEventListener('DOMContentLoaded', function () {
  loadData();
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') closeArticle();
  });
  var ao = document.getElementById('articleOverlay');
  if (ao) ao.addEventListener('click', function (e) {
    if (e.target === ao) closeArticle();
  });
});

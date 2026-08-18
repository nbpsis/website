// NBPSIS main.js

document.addEventListener('DOMContentLoaded', function() {
  'use strict';

  // Nav scroll shadow
  var nav = document.querySelector('.nav');
  if (nav) {
    window.addEventListener('scroll', function() {
      nav.classList.toggle('scrolled', window.scrollY > 12);
    });
  }

  // Hamburger menu
  var burger = document.querySelector('.nav-burger');
  var mm = document.getElementById('mobileMenu');

  function openMenu() {
    if (!mm) return;
    mm.classList.add('open');
    document.body.style.overflow = 'hidden';
    // Change burger icon to X
    if (burger) {
      var spans = burger.querySelectorAll('span');
      if (spans.length >= 3) {
        spans[0].style.cssText = 'transform:rotate(45deg) translate(5px,5px);';
        spans[1].style.cssText = 'opacity:0;';
        spans[2].style.cssText = 'transform:rotate(-45deg) translate(5px,-5px);';
      }
    }
  }

  function closeMenu() {
    if (!mm) return;
    mm.classList.remove('open');
    document.body.style.overflow = '';
    // Restore burger icon to 三
    if (burger) {
      var spans = burger.querySelectorAll('span');
      spans.forEach(function(s) { s.style.cssText = ''; });
    }
  }

  if (burger && mm) {
    burger.addEventListener('click', function(e) {
      e.stopPropagation();
      mm.classList.contains('open') ? closeMenu() : openMenu();
    });

    // Close when link clicked
    mm.querySelectorAll('a').forEach(function(a) {
      a.addEventListener('click', closeMenu);
    });

    // Close when clicking outside menu
    document.addEventListener('click', function(e) {
      if (mm.classList.contains('open') &&
          !mm.contains(e.target) &&
          !burger.contains(e.target)) {
        closeMenu();
      }
    });

    // Close on ESC
    document.addEventListener('keydown', function(e) {
      if (e.key === 'Escape') closeMenu();
    });
  }

  // Intersection observer fade-in
  var io = new IntersectionObserver(function(entries) {
    entries.forEach(function(e) {
      if (e.isIntersecting) e.target.classList.add('iv');
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });
  document.querySelectorAll('.fi').forEach(function(el) { io.observe(el); });

  // Media tabs
  document.querySelectorAll('.media-tab').forEach(function(tab) {
    tab.addEventListener('click', function() {
      document.querySelectorAll('.media-tab').forEach(function(t) { t.classList.remove('active'); });
      document.querySelectorAll('.media-panel').forEach(function(p) { p.classList.remove('active'); });
      tab.classList.add('active');
      var panel = document.getElementById('panel-' + tab.dataset.tab);
      if (panel) panel.classList.add('active');
    });
  });

  // FAQ accordion
  document.querySelectorAll('.faq-item').forEach(function(item) {
    var btn = item.querySelector('.faq-q');
    if (btn) {
      btn.addEventListener('click', function() {
        var isOpen = item.classList.contains('open');
        document.querySelectorAll('.faq-item').forEach(function(i) { i.classList.remove('open'); });
        if (!isOpen) item.classList.add('open');
      });
    }
  });

  // Hero slider init
  var slides = document.querySelectorAll('.hero-slide');
  var dotsWrap = document.getElementById('heroDots');
  if (slides.length && dotsWrap) {
    slides.forEach(function(_, i) {
      var d = document.createElement('span');
      d.className = 'slide-dot' + (i === 0 ? ' active' : '');
      d.addEventListener('click', function() { heroSlide(i - _heroIdx); });
      dotsWrap.appendChild(d);
    });
    setInterval(function() { heroSlide(1); }, 4000);
  }
});

// Hero Slider
var _heroIdx = 0;
function heroSlide(dir) {
  var slides = document.querySelectorAll('.hero-slide');
  var dots = document.querySelectorAll('.slide-dot');
  if (!slides.length) return;
  slides[_heroIdx].classList.remove('active');
  if (dots[_heroIdx]) dots[_heroIdx].classList.remove('active');
  _heroIdx = (_heroIdx + dir + slides.length) % slides.length;
  slides[_heroIdx].classList.add('active');
  if (dots[_heroIdx]) dots[_heroIdx].classList.add('active');
}

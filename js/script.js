/* Breaker Bros — script.js
   No framework. No dependencies. Plain JS only.
   ------------------------------------------------
   1. Copyright year — keeps footer year current
   2. Header scroll shadow — lifts the header visually on scroll
*/

(function () {
  'use strict';

  /* ── Copyright year ──────────────────────────────────────── */
  var yearEl = document.getElementById('year');
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }

  /* ── Header shadow on scroll ─────────────────────────────── */
  /* The header is already sticky via CSS.
     On scroll we add .is-scrolled which deepens its shadow,
     giving a subtle lifted feel once the page moves. */
  var header = document.querySelector('.site-header');
  if (header) {
    function onScroll() {
      if (window.scrollY > 8) {
        header.classList.add('is-scrolled');
      } else {
        header.classList.remove('is-scrolled');
      }
    }
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll(); /* run once on load in case page is pre-scrolled */
  }

})();

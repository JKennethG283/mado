/* Mado: page behaviour. The engine (scrollcraft.js) owns acts, cues, scrubbing
   and the rail; this file owns the window aperture, the playlist player, the
   menu's mini worlds and the contact block. */
(function () {
  'use strict';

  /* ---- Contact details (from @madomatcha.brew). Empty fields stay hidden. -- */
  var CONTACT = {
    address:   '414 Elizabeth St, Surry Hills NSW 2010',
    mapsUrl:   'https://www.google.com/maps?cid=659832972389321181',  // the Google Maps listing
    hours:     'Open every day, 7am to 5pm',
    phone:     '0424 308 859',
    instagram: 'madomatcha.brew',
    tiktok:    'madomatcha.brew'
  };

  document.documentElement.classList.add('js');
  ScrollCraft.mount(document.body);
  var reduce = ScrollCraft.reduce;
  var root = document.documentElement;
  var inside = document.getElementById('inside');

  function clamp01(x) { return x < 0 ? 0 : x > 1 ? 1 : x; }
  function smooth(a, b, x) { x = clamp01((x - a) / (b - a)); return x * x * (3 - 2 * x); }
  function lerp(a, b, t) { return a + (b - a) * t; }
  function progress(el) { return parseFloat(el.style.getPropertyValue('--sc-p')) || 0; }
  function cover(x, y, w, h) { return Math.hypot(Math.max(x, w - x), Math.max(y, h - y)) + 2; }

  var hero = document.querySelector('[data-mado="hero"]');
  var proc = document.querySelector('[data-mado="process"]');
  var visit = document.querySelector('[data-mado="visit"]');
  var menu = document.getElementById('menu');

  function setVars(el, vars) { for (var k in vars) el.style.setProperty(k, vars[k]); }
  function aperture(sec, x, y, r, extra) {
    setVars(sec, { '--ap-x': x.toFixed(1) + 'px', '--ap-y': y.toFixed(1) + 'px', '--ap-r': r.toFixed(1) + 'px' });
    if (extra) setVars(sec, extra);
  }

  /* Move an object-fit:cover image so its focal point (fx, fy as fractions of
     the image, fr = focal radius as a fraction of the drawn image height) sits
     in a window at (tx, ty) with radius tr. t = 0 fits the window, t = 1 is the
     untouched full-bleed image. */
  function focus(img, w, h, fx, fy, fr, tx, ty, tr, t) {
    var R = (img.naturalWidth || +img.getAttribute('width')) / (img.naturalHeight || +img.getAttribute('height'));
    var Wd = w / h > R ? w : h * R, Hd = Wd / R;
    var px = (w - Wd) / 2 + fx * Wd, py = (h - Hd) / 2 + fy * Hd;
    var s = lerp(tr / (fr * Hd), 1, t);
    setVars(img, {
      '--fo-x': px.toFixed(1) + 'px', '--fo-y': py.toFixed(1) + 'px',
      '--fo-dx': lerp(tx - px, 0, t).toFixed(1) + 'px', '--fo-dy': lerp(ty - py, 0, t).toFixed(1) + 'px',
      '--fo-s': s.toFixed(4)
    });
  }

  var heroImg = hero && hero.querySelector('.hero__cup');
  var visitImg = visit && visit.querySelector('.visit__aperture img');
  if (heroImg) heroImg.setAttribute('data-focus', '');
  if (visitImg) visitImg.setAttribute('data-focus', '');

  /* ---- playlist player -------------------------------------------------- */
  var cards = menu ? Array.prototype.slice.call(menu.querySelectorAll('.drink')) : [];
  var titleEl = menu && menu.querySelector('[data-player-title]');
  var current = -1;

  function menuRange() {
    var top = menu.getBoundingClientRect().top + scrollY;
    return { top: top, len: Math.max(1, menu.offsetHeight - innerHeight) };
  }
  // scroll so card i sits in the middle of the screen
  function goTo(i) {
    i = Math.max(0, Math.min(cards.length - 1, i));
    var rail = menu.querySelector('[data-sc-pan]');
    // same travel the engine uses: overflow plus the rail's overshoot
    var travel = Math.max(1, (rail.scrollWidth - innerWidth) * (1 + (parseFloat(rail.getAttribute('data-sc-pan')) || 0)));
    var c = cards[i];
    var want = c.offsetLeft + c.offsetWidth / 2 - innerWidth / 2;
    var r = menuRange();
    scrollTo({ top: r.top + clamp01(want / travel) * r.len, behavior: reduce ? 'auto' : 'smooth' });
    if (reduce) { var st = menu.querySelector('.sc-stage'); if (st) st.scrollTo({ left: Math.max(0, want), behavior: 'auto' }); }
  }
  if (menu) {
    menu.addEventListener('click', function (ev) {
      var b = ev.target.closest('[data-player]');
      if (!b) return;
      var act = b.getAttribute('data-player');
      trackCurrent();
      if (act === 'prev') goTo((current < 0 ? 0 : current) - 1);
      if (act === 'next') goTo((current < 0 ? -1 : current) + 1);
      if (act === 'toggle') {
        var paused = menu.classList.toggle('is-paused');
        b.setAttribute('aria-pressed', paused ? 'true' : 'false');
        b.setAttribute('aria-label', paused ? 'Play the animations' : 'Pause the animations');
      }
    });
  }
  // also drives the centre-card pop: --focus is 1 at the screen centre, easing to 0
  // about a third of a screen away (scale, tilt and shadow read it in mado.css)
  function trackCurrent() {
    if (!cards.length) return;
    var mid = innerWidth / 2, range = Math.max(260, innerWidth * 0.32), best = 0, bestD = Infinity;
    for (var i = 0; i < cards.length; i++) {
      var r = cards[i].getBoundingClientRect();
      var d = Math.abs(r.left + r.width / 2 - mid);
      if (d < bestD) { bestD = d; best = i; }
      if (!reduce) {
        var a = Math.min(1, d / range), f = 1 - a * a * (3 - 2 * a);
        cards[i].style.setProperty('--focus', f.toFixed(3));
        cards[i].style.zIndex = 1 + Math.round(f * 10);
      }
    }
    if (best !== current) {
      if (current >= 0) cards[current].classList.remove('is-current');
      current = best;
      cards[current].classList.add('is-current');
      if (titleEl) titleEl.textContent = cards[current].querySelector('h3').textContent;
    }
  }

  /* ---- the frame loop ---------------------------------------------------- */
  var last = '';
  function frame() {
    var w = innerWidth, h = innerHeight, mob = w < 761, vmin = Math.min(w, h);
    var key = scrollY + ':' + w + ':' + h;
    if (key !== last) {
      last = key;

      // 1 · the logo ring opens; the cup inside grows into the next act's first frame
      if (hero) {
        var e = reduce ? 0 : smooth(0.04, 0.8, progress(hero));
        var hx = mob ? w / 2 : w * 0.66, hy = h * (mob ? 0.36 : 0.5);
        var r0 = vmin * (mob ? 0.31 : 0.27);
        var r = lerp(r0, cover(hx, hy, w, h), Math.pow(e, 1.5));
        aperture(hero, hx, hy, r, { '--ap-r0': r0.toFixed(1) + 'px', '--e': e.toFixed(4) });
        if (heroImg) focus(heroImg, w, h, 0.5, 0.54, 0.43, hx, hy, r0 * 0.94, Math.pow(e, 1.5));
        // 2 · hand over to the exploding cup the moment the hero's pin ends
        if (inside) inside.classList.toggle('is-on', hero.getBoundingClientRect().bottom <= h + 1);
      }

      // 3 · a small window on the cream page opens into the tea fields
      if (proc) {
        var pe = reduce ? 1 : smooth(0, 0.14, progress(proc));
        aperture(proc, w / 2, h / 2, lerp(vmin * 0.3, cover(w / 2, h / 2, w, h), Math.pow(pe, 1.4)), { '--pe': pe.toFixed(3) });
      }


      // 5 · the shop closes back into the logo: the round sign on the wall becomes the mark
      if (visit) {
        var vp = progress(visit);
        var ve = reduce ? 1 : smooth(0.02, 0.45, vp);
        var tx = mob ? w / 2 : w * 0.3, ty = mob ? h * 0.27 : h * 0.47;
        var rEnd = mob ? Math.min(w * 0.3, h * 0.17) : Math.min(w * 0.19, h * 0.3);
        var cx = lerp(w / 2, tx, ve), cy = lerp(h / 2, ty, ve);
        var vr = lerp(cover(w / 2, h / 2, w, h), rEnd, ve);
        aperture(visit, cx, cy, vr, { '--ring-o': (reduce ? 1 : smooth(0.32, 0.46, vp)).toFixed(3) });
        if (visitImg) focus(visitImg, w, h, 0.5, 0.28, 0.113, cx, cy, vr * 0.66, Math.pow(1 - ve, 1.3));
      }

      var max = root.scrollHeight - h;
      root.style.setProperty('--page-p', (max > 0 ? clamp01(scrollY / max) : 0).toFixed(4));
    }
    // 4 · the player follows the rail every frame: the engine eases the rail after scroll stops
    if (menu) {
      var mr = menu.getBoundingClientRect();
      if (mr.top < innerHeight && mr.bottom > 0) {
        menu.style.setProperty('--menu-p', progress(menu).toFixed(4));
        trackCurrent();
      }
    }
    requestAnimationFrame(frame);
  }
  requestAnimationFrame(frame);
  addEventListener('load', function () { last = ''; });

  /* ---- menu mini worlds ------------------------------------------------- */
  var RISING = { foam: 1, cloud: 1 };
  cards.forEach(function (card, i) {
    var fx = card.querySelector('.drink__fx');
    var theme = card.getAttribute('data-fx');
    if (!fx || reduce) return;
    for (var k = 0; k < 10; k++) {
      var rnd = function (m) { var x = Math.sin(i * 7.31 + k * 12.9898 + m * 78.233) * 43758.5453; return x - Math.floor(x); };
      var s = document.createElement('span');
      s.className = 'fx' + (RISING[theme] ? ' fx--up' : '');
      s.style.left = (6 + rnd(1) * 82).toFixed(1) + '%';
      s.style.setProperty('--s', (9 + rnd(2) * 12).toFixed(1) + 'px');
      s.style.setProperty('--d', (5 + rnd(3) * 5).toFixed(2) + 's');
      s.style.setProperty('--delay', (-rnd(4) * 9).toFixed(2) + 's');
      s.style.setProperty('--spin', ((rnd(5) - 0.5) * 400).toFixed(0) + 'deg');
      fx.appendChild(s);
    }
  });
  if ('IntersectionObserver' in window) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) { en.target.classList.toggle('is-live', en.isIntersecting); });
    }, { rootMargin: '0px 10% 0px 10%' });
    cards.forEach(function (c) { io.observe(c); });
  }

  /* ---- contact block ---------------------------------------------------- */
  function field(name) { return document.querySelector('[data-field="' + name + '"]'); }
  function fill(name, text, href) {
    var el = field(name);
    if (!el) return;
    el.hidden = !text;
    if (!text) return;
    el.textContent = text;
    if (href) el.href = href;
  }
  fill('address', CONTACT.address);
  fill('hours', CONTACT.hours);
  // dial in international form so the link works from any phone: 0424... becomes +61424...
  fill('phone', CONTACT.phone && 'Call ' + CONTACT.phone, 'tel:' + CONTACT.phone.replace(/[^+\d]/g, '').replace(/^0/, '+61'));
  fill('instagram', CONTACT.instagram && 'Instagram @' + CONTACT.instagram, 'https://www.instagram.com/' + encodeURIComponent(CONTACT.instagram) + '/');
  fill('tiktok', CONTACT.tiktok && 'TikTok @' + CONTACT.tiktok, 'https://www.tiktok.com/@' + encodeURIComponent(CONTACT.tiktok));
  var maps = field('maps');
  var mapHref = CONTACT.mapsUrl || (CONTACT.address ? 'https://www.google.com/maps/search/?api=1&query=' + encodeURIComponent('Mado Matcha & Brew, ' + CONTACT.address) : '');
  if (maps) { maps.hidden = !mapHref; if (mapHref) maps.href = mapHref; }
})();

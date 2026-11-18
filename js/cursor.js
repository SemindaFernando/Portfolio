/* Simple cursor effect: one soft glowing circle that smoothly follows the mouse.
   It grows over links/buttons and shrinks on click. Desktop (mouse) only. */
(function () {
  if (window.matchMedia('(hover: none), (pointer: coarse)').matches) return;
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

  var c = document.createElement('div');
  c.className = 'cursor-follow';
  c.setAttribute('aria-hidden', 'true');
  document.body.appendChild(c);

  var mx = 0, my = 0, x = 0, y = 0, seen = false;

  addEventListener('mousemove', function (e) {
    mx = e.clientX; my = e.clientY;
    if (!seen) { seen = true; x = mx; y = my; c.classList.add('is-on'); }
    var t = e.target.closest && e.target.closest('a, button, [role="button"], input, textarea, select, label, .project-card');
    c.classList.toggle('is-hover', !!t);
  }, { passive: true });
  addEventListener('mousedown', function () { c.classList.add('is-down'); });
  addEventListener('mouseup', function () { c.classList.remove('is-down'); });
  document.addEventListener('mouseleave', function () { c.classList.remove('is-on'); seen = false; });

  (function loop() {
    x += (mx - x) * 0.16; y += (my - y) * 0.16;
    c.style.transform = 'translate3d(' + x + 'px,' + y + 'px,0) translate(-50%,-50%)';
    requestAnimationFrame(loop);
  })();
})();

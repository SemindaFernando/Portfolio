/* Cursor effect: a smooth glowing comet tail that follows the mouse.
   Desktop (mouse) only; skipped on touch devices and for "reduce motion". */
(function () {
  if (window.matchMedia('(hover: none), (pointer: coarse)').matches) return;
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

  var canvas = document.createElement('canvas');
  canvas.className = 'cursor-tail';
  canvas.setAttribute('aria-hidden', 'true');
  document.body.appendChild(canvas);
  var ctx = canvas.getContext('2d');

  var W, H, dpr = Math.min(window.devicePixelRatio || 1, 2);
  function resize() {
    W = innerWidth; H = innerHeight;
    canvas.width = W * dpr; canvas.height = H * dpr;
    canvas.style.width = W + 'px'; canvas.style.height = H + 'px';
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
  }
  resize(); addEventListener('resize', resize);

  var N = 26;                       // number of tail points
  var pts = [], mx = -200, my = -200, seen = false, hover = false, headR = 5, pulses = [];
  for (var i = 0; i < N; i++) pts.push({ x: -200, y: -200 });

  addEventListener('mousemove', function (e) {
    mx = e.clientX; my = e.clientY;
    if (!seen) { seen = true; pts.forEach(function (p) { p.x = mx; p.y = my; }); }
    hover = !!(e.target.closest && e.target.closest('a, button, [role="button"], input, textarea, select, label, .project-card'));
  }, { passive: true });
  addEventListener('mousedown', function (e) { pulses.push({ x: e.clientX, y: e.clientY, t: 0 }); });
  document.addEventListener('mouseleave', function () { seen = false; mx = my = -200; });

  function frame() {
    ctx.clearRect(0, 0, W, H);
    if (seen) {
      // each point eases toward the one before it -> a flowing, curved tail
      pts[0].x += (mx - pts[0].x) * 0.5; pts[0].y += (my - pts[0].y) * 0.5;
      for (var i = 1; i < N; i++) {
        pts[i].x += (pts[i - 1].x - pts[i].x) * 0.38;
        pts[i].y += (pts[i - 1].y - pts[i].y) * 0.38;
      }
      ctx.lineCap = 'round'; ctx.lineJoin = 'round';
      ctx.globalCompositeOperation = 'lighter';
      for (var j = N - 1; j > 0; j--) {
        var t = 1 - j / N;                                  // 1 at head -> 0 at tail
        var a = pts[j - 1], b = pts[j];
        var dx = a.x - b.x, dy = a.y - b.y;
        if (dx * dx + dy * dy < 0.04) continue;             // tail collapses when idle
        ctx.strokeStyle = 'rgba(' + Math.round(40 + 16 * t) + ',' + Math.round(110 + 80 * t) + ',255,' + (0.08 + 0.75 * t * t) + ')';
        ctx.lineWidth = 1 + 9 * t * t;
        ctx.shadowColor = 'rgba(56,189,248,' + (0.9 * t) + ')';
        ctx.shadowBlur = 14 * t;
        ctx.beginPath(); ctx.moveTo(a.x, a.y); ctx.lineTo(b.x, b.y); ctx.stroke();
      }
      // glowing head
      headR += ((hover ? 11 : 5) - headR) * 0.2;
      ctx.shadowBlur = 0;
      var g = ctx.createRadialGradient(pts[0].x, pts[0].y, 0, pts[0].x, pts[0].y, headR * 3);
      g.addColorStop(0, 'rgba(255,255,255,0.95)'); g.addColorStop(0.25, 'rgba(125,211,252,0.85)'); g.addColorStop(1, 'rgba(59,130,246,0)');
      ctx.fillStyle = g; ctx.beginPath(); ctx.arc(pts[0].x, pts[0].y, headR * 3, 0, 6.283); ctx.fill();
    }
    // click pulse rings
    ctx.globalCompositeOperation = 'source-over'; ctx.shadowBlur = 0;
    for (var k = pulses.length - 1; k >= 0; k--) {
      var p = pulses[k]; p.t += 0.04;
      if (p.t >= 1) { pulses.splice(k, 1); continue; }
      ctx.strokeStyle = 'rgba(56,189,248,' + (0.8 * (1 - p.t)) + ')'; ctx.lineWidth = 2;
      ctx.beginPath(); ctx.arc(p.x, p.y, 8 + 60 * (1 - Math.pow(1 - p.t, 3)), 0, 6.283); ctx.stroke();
    }
    requestAnimationFrame(frame);
  }
  requestAnimationFrame(frame);
})();

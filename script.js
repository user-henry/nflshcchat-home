// NFLSHC Chat landing page interactivity
(function () {
  // Cursor-following glow
  const glow = document.createElement('div');
  glow.style.cssText =
    'position:fixed;width:260px;height:260px;border-radius:50%;pointer-events:none;' +
    'background:radial-gradient(circle,rgba(255,215,0,0.2),rgba(255,140,0,0.1) 50%,transparent 70%);' +
    'filter:blur(50px);transform:translate(-50%,-50%);z-index:5;opacity:0;' +
    'transition:opacity .3s;mix-blend-mode:screen;';
  document.body.appendChild(glow);
  window.addEventListener('mousemove', (e) => {
    glow.style.left = e.clientX + 'px';
    glow.style.top = e.clientY + 'px';
    glow.style.opacity = '1';
  });
  window.addEventListener('mouseleave', () => { glow.style.opacity = '0'; });

  // Smooth anchor scroll
  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', e => {
      const id = a.getAttribute('href').slice(1);
      const el = id && document.getElementById(id);
      if (el) { e.preventDefault(); el.scrollIntoView({ behavior: 'smooth' }); }
    });
  });
})();

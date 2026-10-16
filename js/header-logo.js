/* header-logo.js
   Reveals the small navbar logo after the visitor scrolls past the hero.
   Works with the CSS rule: body.header-docked .nav-brand { opacity: 1; } */
(function () {
  function update() {
    var hero = document.querySelector('.hero-area');
    var threshold = hero ? hero.offsetHeight * 0.5 : 150;
    var y = window.pageYOffset || document.documentElement.scrollTop || 0;
    if (y > threshold) {
      document.body.classList.add('header-docked');
    } else {
      document.body.classList.remove('header-docked');
    }
  }

  window.addEventListener('scroll', update, { passive: true });
  window.addEventListener('resize', update);
  document.addEventListener('DOMContentLoaded', update);
  update();
})();

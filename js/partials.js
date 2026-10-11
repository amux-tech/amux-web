/*
  Shared partials
  Injects nav + footer into every page.
*/

(function () {
  const NAV_HTML = `
<nav id="navbar">
  <div class="nav-inner">
    <a class="nav-logo" href="#home">
      <span class="nav-logo-main">AMUX</span>
      <span class="nav-logo-sub">Problem-solving technology</span>
    </a>

    <ul class="nav-links" id="navLinks">
      <li><a href="#home">Home</a></li>
      <li><a href="#about">About</a></li>
      <li><a href="#products">Products</a></li>
      <li><a href="#codeclash">CodeClash</a></li>
      <li><a href="#problems">Problems</a></li>
      <li><a href="#team">Leadership</a></li>
      <li><a href="#careers">Careers</a></li>
      <li><a href="#updates">News</a></li>
      <li><a href="#contact">Contact</a></li>
    </ul>

    <a class="nav-cta" href="#submit-problem">Submit a problem</a>

    <div class="ham" id="ham" aria-label="Toggle navigation" aria-expanded="false">
      <span></span><span></span><span></span>
    </div>
  </div>
</nav>

<div class="mobile-menu" id="mobileMenu">
  <a href="#home">Home</a>
  <a href="#about">About</a>
  <a href="#products">Products</a>
  <a href="#codeclash">CodeClash</a>
  <a href="#problems">Problems</a>
  <a href="#team">Leadership</a>
  <a href="#careers">Careers</a>
  <a href="#updates">News</a>
  <a href="#contact">Contact</a>
  <a href="#submit-problem">Submit a problem</a>
</div>`;

  const FOOTER_HTML = `
<footer>
  <div class="footer-inner">
    <div>
      <div class="footer-brand-name">AMUX</div>
      <div class="footer-brand-sub">Problem-solving technology</div>
      <p class="footer-desc">We identify real-world problems and build practical technology products that solve them.</p>
    </div>

    <div>
      <div class="footer-col-title">Navigation</div>
      <ul class="footer-links">
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#products">Products</a></li>
        <li><a href="#codeclash">CodeClash</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </div>

    <div>
      <div class="footer-col-title">Connect</div>
      <ul class="footer-links">
        <li><a href="mailto:helloamux@gmail.com">helloamux@gmail.com</a></li>
        <li><a href="#submit-problem">Submit a problem</a></li>
        <li><a href="#privacy">Privacy</a></li>
        <li><a href="#privacy">Terms</a></li>
      </ul>
    </div>
  </div>

  <div class="footer-bottom">
    <p class="footer-copy">© 2026 AMUX. All rights reserved.</p>
    <p class="footer-copy"><a href="#privacy">Privacy</a> • <a href="#privacy">Terms</a></p>
  </div>
</footer>`;

  const navTarget = document.getElementById('nav-placeholder');
  if (navTarget) navTarget.outerHTML = NAV_HTML;

  const footerTarget = document.getElementById('footer-placeholder');
  if (footerTarget) footerTarget.outerHTML = FOOTER_HTML;
})();

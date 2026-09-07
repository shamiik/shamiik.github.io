/**
 * Academic Researcher Portfolio - Shamik Dey
 * Zero dependencies Vanilla JS & Lightweight Web Components
 */

// 1. Reusable Site Navbar Component
class SiteNavbar extends HTMLElement {
  connectedCallback() {
    const active = (this.getAttribute('active') || '').toLowerCase();
    this.innerHTML = `
<nav class="navbar navbar-expand-lg navbar-dark bg-dark sticky-top">
  <div class="container">
    <a class="navbar-brand" href="/">Shamik Dey</a>
    <button class="navbar-toggler" id="navbar-toggler" type="button" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse justify-content-end" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link ${active === 'home' ? 'active' : ''}" href="/">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link ${active === 'publications' ? 'active' : ''}" href="/publications.html">Publications</a>
        </li>
        <li class="nav-item">
          <a class="nav-link ${active === 'honors' ? 'active' : ''}" href="/honors.html">Honors &amp; Awards</a>
        </li>
        <li class="nav-item">
          <a class="nav-link ${active === 'cv' ? 'active' : ''}" href="/cv.html">CV</a>
        </li>
        <li class="nav-item">
          <a class="nav-link ${active === 'contact' ? 'active' : ''}" href="/contact.html">Contact</a>
        </li>
      </ul>
    </div>
  </div>
</nav>`;
    setupNavbarInteractions(this);
  }
}
customElements.define('site-navbar', SiteNavbar);

// 2. Reusable Site Footer Component
class SiteFooter extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
<footer class="site-footer">
  <div class="container">
    <div class="row">
      <div class="col-md-4 col-sm-6 mb-3 mb-md-0">
        <ul class="list-unstyled">
          <li class="text-secondary font-weight-bold">Shamik Dey</li>
          <li class="text-secondary">Research Assistant &amp; Software Engineer</li>
          <li class="text-secondary">Ahsanullah University of Science and Technology</li>
          <li><a href="https://scholar.google.com/citations?user=A8TmS5oAAAAJ&hl" target="_blank" rel="noopener">Google Scholar</a></li>
        </ul>
      </div>

      <div class="col-md-4 col-sm-6 mb-3 mb-md-0" id="contact-me">
        <ul class="list-unstyled">
          <li class="text-secondary">
            <span class="footer-icon"><i class="fas fa-envelope"></i></span>
            <a href="mailto:shamikdey7@gmail.com">shamikdey7@gmail.com</a>
          </li>
          <li>
            <span class="footer-icon"><i class="fab fa-linkedin-in"></i></span>
            <a href="https://linkedin.com/in/shamikdey" target="_blank" rel="noopener">LinkedIn</a>
          </li>
          <li>
            <span class="footer-icon"><i class="fab fa-github"></i></span>
            <a href="https://github.com/shamiik" target="_blank" rel="noopener">shamiik</a>
          </li>
          <li>
            <span class="footer-icon"><i class="fa-brands fa-x-twitter"></i></span>
            <a href="https://x.com/shamikdeepto" target="_blank" rel="noopener">@shamikdeepto</a>
          </li>
        </ul>
      </div>

      <div class="col-md-4 col-sm-12">
        <ul class="list-unstyled">
          <li class="text-secondary">
            <span class="footer-icon"><i class="fas fa-map-marker-alt"></i></span>
            Mohanagar Project, Rampura<br />
            Dhaka-1219, Bangladesh
          </li>
        </ul>
      </div>
    </div>

    <div class="footer-copy">
      <i class="far fa-copyright"></i>
      Shamik Dey 2026
    </div>
  </div>
</footer>`;
  }
}
customElements.define('site-footer', SiteFooter);

// 3. Mobile Menu Toggle & Navigation Handler
function setupNavbarInteractions(scope = document) {
  const navToggle = scope.querySelector('.navbar-toggler');
  const navMenu = scope.querySelector('#navbarNav');

  if (navToggle && navMenu) {
    navToggle.addEventListener('click', (e) => {
      e.stopPropagation();
      navMenu.classList.toggle('show');
    });

    document.querySelectorAll('.nav-link').forEach(link => {
      link.addEventListener('click', () => {
        navMenu.classList.remove('show');
      });
    });

    document.addEventListener('click', (e) => {
      if (!navToggle.contains(e.target) && !navMenu.contains(e.target)) {
        navMenu.classList.remove('show');
      }
    });
  }
}

// Support regular markup if elements exist on DOMContentLoaded
document.addEventListener('DOMContentLoaded', () => {
  setupNavbarInteractions(document);
});

// 4. BibTeX Citation Toggle
window.toggleBibtex = function (id) {
  const el = document.getElementById(id);
  if (el) {
    el.classList.toggle('open');
  }
};

// 5. Copy BibTeX helper
window.copyBibtex = function (codeId, btn) {
  const codeEl = document.getElementById(codeId);
  if (!codeEl) return;

  navigator.clipboard.writeText(codeEl.textContent).then(() => {
    const originalText = btn.innerHTML;
    btn.innerHTML = 'Copied!';
    btn.classList.add('btn-success');
    btn.classList.remove('btn-light');

    setTimeout(() => {
      btn.innerHTML = originalText;
      btn.classList.remove('btn-success');
      btn.classList.add('btn-light');
    }, 2000);
  }).catch(err => {
    console.error('Failed to copy text: ', err);
  });
};

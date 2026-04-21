// ============================================================
// SILK IVORY — Main JS
// ============================================================

document.addEventListener('DOMContentLoaded', () => {

  // --- NAV SCROLL ---
  const nav = document.querySelector('.nav');
  window.addEventListener('scroll', () => {
    nav.classList.toggle('scrolled', window.scrollY > 40);
  }, { passive: true });

  // --- MOBILE MENU ---
  const toggle = document.querySelector('.nav-toggle');
  const mobileMenu = document.querySelector('.mobile-menu');
  const spans = toggle?.querySelectorAll('span');

  toggle?.addEventListener('click', () => {
    const isOpen = mobileMenu.classList.toggle('open');
    document.body.style.overflow = isOpen ? 'hidden' : '';
    if (spans) {
      if (isOpen) {
        spans[0].style.transform = 'translateY(7px) rotate(45deg)';
        spans[1].style.transform = 'translateY(-7px) rotate(-45deg)';
      } else {
        spans[0].style.transform = '';
        spans[1].style.transform = '';
      }
    }
  });

  // Close mobile menu on link click
  document.querySelectorAll('.mobile-menu a').forEach(link => {
    link.addEventListener('click', () => {
      mobileMenu.classList.remove('open');
      document.body.style.overflow = '';
      if (spans) {
        spans[0].style.transform = '';
        spans[1].style.transform = '';
      }
    });
  });

  // --- SCROLL REVEAL ---
  const revealEls = document.querySelectorAll(
    '.statement-text, .labels-grid, .split-item, .sync-item, ' +
    '.about-large, .about-col-right, .founder-text, .founder-stats, ' +
    '.service-row, .roster-item, .roster-building, .contact-info, .contact-form-wrap'
  );

  revealEls.forEach(el => el.classList.add('reveal'));

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

  revealEls.forEach(el => observer.observe(el));

  // --- CONTACT FORM ---
  const form = document.querySelector('.contact-form');
  if (form) {
    form.addEventListener('submit', async (e) => {
      const btn = form.querySelector('button[type="submit"]');
      const formId = form.action.includes('YOUR_FORM_ID');
      if (formId) {
        e.preventDefault();
        btn.textContent = 'Set up Formspree to enable submissions';
        btn.style.opacity = '0.5';
        return;
      }
      btn.textContent = 'Sending...';
      btn.style.opacity = '0.7';
    });
  }

});

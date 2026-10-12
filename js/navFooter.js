// Navigation + footer behavior.
// Sticky nav shadow + mobile hamburger + active nav link.

document.addEventListener('DOMContentLoaded', () => {
  const navbar = document.getElementById('navbar');
  if (navbar) {
    const toggleShadow = () => navbar.classList.toggle('scrolled', window.scrollY > 14);
    toggleShadow();
    window.addEventListener('scroll', toggleShadow);
  }

  const ham = document.getElementById('ham');
  const mobileMenu = document.getElementById('mobileMenu');
  if (ham && mobileMenu) {
    const setMenuState = (isOpen) => {
      ham.classList.toggle('open', isOpen);
      mobileMenu.classList.toggle('open', isOpen);
      ham.setAttribute('aria-expanded', String(isOpen));
    };

    ham.addEventListener('click', () => {
      setMenuState(!mobileMenu.classList.contains('open'));
    });

    mobileMenu.querySelectorAll('a').forEach(a => {
      a.addEventListener('click', () => {
        setMenuState(false);
      });
    });
  }

  const currentHash = window.location.hash || '#home';
  document.querySelectorAll('.nav-links a, .mobile-menu a').forEach(a => {
    const href = a.getAttribute('href') || '';
    a.classList.toggle('active', href === currentHash);
  });

  document.querySelectorAll('.nav-links a, .mobile-menu a').forEach(a => {
    a.addEventListener('click', () => {
      const href = a.getAttribute('href') || '';
      if (href.startsWith('#')) {
        document.querySelectorAll('.nav-links a, .mobile-menu a').forEach(link => {
          link.classList.toggle('active', link === a);
        });
      }
    });
  });
});


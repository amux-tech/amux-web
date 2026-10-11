// =========================
// Fade-up on scroll
// =========================

document.addEventListener("DOMContentLoaded", () => {
  const fadeElements = document.querySelectorAll(".fade-up");

  const observer = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          // Once visible, stop observing this element
          observer.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.15
    }
  );

  fadeElements.forEach(el => observer.observe(el));
});

// =========================
// Optional: Nav & Footer loading
// Replace URLs if you use partial HTML files.
// =========================

function loadPartial(targetId, url) {
  const target = document.getElementById(targetId);
  if (!target) return;

  fetch(url)
    .then(response => {
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.text();
    })
    .then(html => {
      target.innerHTML = html;
    })
    .catch(error => {
      console.error(`Error loading ${url}:`, error);
    });
}

// Example usage (uncomment when you have nav.html and footer.html):
// loadPartial("nav-placeholder", "/partials/nav.html");
// loadPartial("footer-placeholder", "/partials/footer.html");
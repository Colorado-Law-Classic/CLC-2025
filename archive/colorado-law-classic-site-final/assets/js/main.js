/* Colorado Law Classic Improved JavaScript
 *
 * This script provides shared behaviour across the Colorado Law Classic
 * website. It automatically highlights the current page in the navigation,
 * drives the countdown timer on the home page, reveals images lazily as
 * they enter the viewport, and enables simple filtering of gallery images
 * by year. The code is wrapped in IIFEs (Immediately Invoked Function
 * Expressions) to avoid polluting the global namespace.
 */

// Highlight the active navigation link based on the current filename.
(function () {
  const path = (location.pathname.split('/').pop() || 'index.html').toLowerCase();
  document.querySelectorAll('.nav a[data-nav]').forEach((link) => {
    const href = link.getAttribute('href').toLowerCase();
    if (href.endsWith(path)) {
      link.classList.add('active');
    }
  });
})();

// Countdown timer on the home page. Updates every second.
(function () {
  const countdownEl = document.getElementById('countdown');
  if (!countdownEl) return; // Only run on pages with a countdown element

  // Event date for the 14th Annual Colorado Law Classic (Denver timezone)
  const eventDate = new Date('August 17, 2025 07:30:00 GMT-0600').getTime();

  function updateCountdown() {
    const now = Date.now();
    const distance = eventDate - now;
    if (distance <= 0) {
      countdownEl.textContent = 'Event in progress!';
      return;
    }
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);
    countdownEl.textContent = `${days}d ${hours}h ${minutes}m ${seconds}s until tee-off`;
  }

  updateCountdown();
  setInterval(updateCountdown, 1000);
})();

// Intersection observer to reveal elements with the data-reveal attribute as they scroll into view.
(function () {
  const revealElements = document.querySelectorAll('[data-reveal]');
  if (!revealElements.length) return;
  const observer = new IntersectionObserver(
    (entries, obs) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          obs.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.2 }
  );
  revealElements.forEach((el) => observer.observe(el));
})();

// Gallery filter by year. Buttons should have data-filter attributes ("all" or year),
// and images should have data-year attributes corresponding to their year.
(function () {
  const filterButtons = document.querySelectorAll('.gallery-buttons button');
  if (!filterButtons.length) return;
  const galleryImages = document.querySelectorAll('.gallery-grid img');

  function filterGallery(filter) {
    galleryImages.forEach((img) => {
      const year = img.getAttribute('data-year');
      if (filter === 'all' || filter === year) {
        img.classList.remove('hidden');
      } else {
        img.classList.add('hidden');
      }
    });
    // Update button active state
    filterButtons.forEach((btn) => {
      btn.classList.toggle('active', btn.getAttribute('data-filter') === filter);
    });
  }

  filterButtons.forEach((btn) => {
    btn.addEventListener('click', () => {
      const filter = btn.getAttribute('data-filter');
      filterGallery(filter);
    });
  });
  // Initialize with 'all'
  filterGallery('all');
})();
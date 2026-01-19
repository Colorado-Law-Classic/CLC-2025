/*
 * ==========================================================================
 * COLORADO LAW CLASSIC - Main JavaScript
 * ==========================================================================
 *
 * Shared interactive behaviors for the Colorado Law Classic static website.
 * All code is wrapped in IIFEs (Immediately Invoked Function Expressions)
 * to avoid polluting the global namespace.
 *
 * DOCUMENTATION RULES (for all contributors):
 * 1. Documentation in code — Include comments explaining what each section does
 * 2. Don't make assumptions — Ask clarifying questions when intent is unclear
 * 3. Include these rules — Reference these principles as reminders
 *
 * MODULES:
 * 1. Active Nav Highlighting — Marks current page link in navigation
 * 2. Mobile Menu Toggle — Hamburger menu for screens < 768px
 * 3. Countdown Timer — Days/hours/minutes until event (home page only)
 * 4. Scroll Reveal — Fade-in animation as elements enter viewport
 * 5. Gallery Filter — Filter photos by year (gallery page only)
 * 6. GLightbox Init — Lightbox for full-size image viewing (gallery page only)
 *
 * DEPENDENCIES:
 * - GLightbox (loaded via CDN on gallery.html only)
 *
 * Related files:
 * - assets/css/styles.css — Visual styles these behaviors interact with
 * - All *.html files — Page markup with data-* attributes for JS hooks
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

// Mobile hamburger menu toggle.
// Controls the slide-out navigation on mobile devices (< 768px).
// Uses aria-expanded for accessibility and manages body scroll lock.
(function () {
  const toggle = document.querySelector('.nav-toggle');
  const navLinks = document.querySelector('.nav-links');
  const overlay = document.querySelector('.nav-overlay');

  if (!toggle || !navLinks) return;

  function openMenu() {
    toggle.classList.add('active');
    toggle.setAttribute('aria-expanded', 'true');
    navLinks.classList.add('open');
    if (overlay) overlay.classList.add('active');
    document.body.style.overflow = 'hidden'; // Prevent background scroll
  }

  function closeMenu() {
    toggle.classList.remove('active');
    toggle.setAttribute('aria-expanded', 'false');
    navLinks.classList.remove('open');
    if (overlay) overlay.classList.remove('active');
    document.body.style.overflow = ''; // Restore scroll
  }

  // Toggle menu on hamburger click
  toggle.addEventListener('click', () => {
    const isOpen = navLinks.classList.contains('open');
    if (isOpen) {
      closeMenu();
    } else {
      openMenu();
    }
  });

  // Close menu when clicking overlay
  if (overlay) {
    overlay.addEventListener('click', closeMenu);
  }

  // Close menu when pressing Escape key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && navLinks.classList.contains('open')) {
      closeMenu();
    }
  });

  // Close menu when clicking a nav link (for same-page navigation)
  navLinks.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', closeMenu);
  });
})();

// Countdown timer on the home page. Updates every second.
// Properly clears interval on page unload to prevent memory leaks.
(function () {
  const countdownEl = document.getElementById('countdown');
  if (!countdownEl) return; // Only run on pages with a countdown element

  // Event date for the 15th Annual Colorado Law Classic (Denver timezone) - placeholder date
  const eventDate = new Date('August 16, 2026 07:30:00 GMT-0600').getTime();
  let countdownInterval = null;

  function updateCountdown() {
    const now = Date.now();
    const distance = eventDate - now;
    if (distance <= 0) {
      countdownEl.textContent = 'Event in progress!';
      // Clear interval when event has started
      if (countdownInterval) {
        clearInterval(countdownInterval);
        countdownInterval = null;
      }
      return;
    }
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);
    countdownEl.textContent = `${days}d ${hours}h ${minutes}m ${seconds}s until tee-off`;
  }

  updateCountdown();
  countdownInterval = setInterval(updateCountdown, 1000);

  // Clean up interval on page unload to prevent memory leaks
  window.addEventListener('beforeunload', function () {
    if (countdownInterval) {
      clearInterval(countdownInterval);
    }
  });
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
// and gallery links (anchors) should have data-year attributes corresponding to their year.
// Note: data-year moved from <img> to <a> elements to support lightbox wrapper structure.
(function () {
  const filterButtons = document.querySelectorAll('.gallery-buttons button');
  if (!filterButtons.length) return;
  // Target anchor elements (lightbox wrappers) instead of images
  const galleryItems = document.querySelectorAll('.gallery-grid a');

  function filterGallery(filter) {
    galleryItems.forEach((item) => {
      const year = item.getAttribute('data-year');
      if (filter === 'all' || filter === year) {
        item.classList.remove('hidden');
      } else {
        item.classList.add('hidden');
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

// Initialize GLightbox if present (only loads on gallery page).
// GLightbox provides a lightweight, accessible lightbox for viewing full-size images.
(function () {
  if (typeof GLightbox !== 'undefined') {
    GLightbox({
      selector: '.glightbox',
      touchNavigation: true,
      loop: true,
      closeButton: true
    });
  }
})();
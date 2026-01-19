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
 * 2. Scroll-Aware Nav — Compact nav styling when scrolled (adds .scrolled class)
 * 3. Reading Progress Bar — Gold bar at top showing scroll position
 * 4. Dark Mode Toggle — Theme switcher with localStorage persistence
 * 5. Mobile Menu Toggle — Hamburger menu for screens < 768px
 * 6. Countdown Timer — Days/hours/minutes until event (home page only)
 * 7. Scroll Reveal — Fade-in animation as elements enter viewport
 * 8. Gallery Filter — Filter photos by year (gallery page only)
 * 9. GLightbox Init — Lightbox for full-size image viewing (gallery page only)
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

// Scroll-aware navigation styling.
// Adds .scrolled class when user scrolls down, triggering compact nav styling.
// Uses requestAnimationFrame for smooth, performant updates.
(function () {
  const nav = document.querySelector('.nav');
  if (!nav) return;

  const SCROLL_THRESHOLD = 50; // Pixels before nav changes
  let lastScrollY = 0;
  let ticking = false;

  function updateNav() {
    const scrollY = window.scrollY;

    if (scrollY > SCROLL_THRESHOLD) {
      nav.classList.add('scrolled');
    } else {
      nav.classList.remove('scrolled');
    }

    lastScrollY = scrollY;
    ticking = false;
  }

  function onScroll() {
    if (!ticking) {
      requestAnimationFrame(updateNav);
      ticking = true;
    }
  }

  window.addEventListener('scroll', onScroll, { passive: true });

  // Check initial scroll position (for page refresh mid-scroll)
  updateNav();
})();

// Reading progress bar.
// Shows a gold progress bar at the top indicating scroll position.
// Creates the element dynamically so no HTML changes needed.
(function () {
  // Create progress bar element
  const progressBar = document.createElement('div');
  progressBar.className = 'reading-progress';
  progressBar.setAttribute('aria-hidden', 'true');
  document.body.prepend(progressBar);

  let ticking = false;

  function updateProgress() {
    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const progress = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;

    progressBar.style.width = progress + '%';
    ticking = false;
  }

  function onScroll() {
    if (!ticking) {
      requestAnimationFrame(updateProgress);
      ticking = true;
    }
  }

  window.addEventListener('scroll', onScroll, { passive: true });
  window.addEventListener('resize', updateProgress, { passive: true });

  // Initial update
  updateProgress();
})();

// Dark mode toggle.
// Persists preference to localStorage and respects system preference.
// Creates toggle button dynamically in the nav.
(function () {
  const STORAGE_KEY = 'clc-theme';

  // Create toggle button with sun/moon icons
  const toggle = document.createElement('button');
  toggle.className = 'theme-toggle';
  toggle.setAttribute('aria-label', 'Toggle dark mode');
  toggle.setAttribute('title', 'Toggle dark mode');
  toggle.innerHTML = `
    <svg class="icon-moon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
    </svg>
    <svg class="icon-sun" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <circle cx="12" cy="12" r="5"/>
      <line x1="12" y1="1" x2="12" y2="3"/>
      <line x1="12" y1="21" x2="12" y2="23"/>
      <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/>
      <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/>
      <line x1="1" y1="12" x2="3" y2="12"/>
      <line x1="21" y1="12" x2="23" y2="12"/>
      <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/>
      <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/>
    </svg>
  `;

  // Insert toggle into nav
  const navLinks = document.querySelector('.nav-links');
  if (navLinks) {
    navLinks.appendChild(toggle);
  }

  // Get initial theme preference
  function getPreferredTheme() {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) return stored;
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  }

  // Apply theme
  function setTheme(theme, animate = false) {
    if (animate) {
      document.documentElement.classList.add('dark-mode-transition');
      setTimeout(() => {
        document.documentElement.classList.remove('dark-mode-transition');
      }, 300);
    }

    if (theme === 'dark') {
      document.documentElement.classList.add('dark-mode');
    } else {
      document.documentElement.classList.remove('dark-mode');
    }

    localStorage.setItem(STORAGE_KEY, theme);
  }

  // Toggle theme on click
  toggle.addEventListener('click', () => {
    const currentTheme = document.documentElement.classList.contains('dark-mode') ? 'dark' : 'light';
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme, true);
  });

  // Listen for system preference changes
  window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
    if (!localStorage.getItem(STORAGE_KEY)) {
      setTheme(e.matches ? 'dark' : 'light', true);
    }
  });

  // Apply initial theme (no animation on page load)
  setTheme(getPreferredTheme(), false);
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

// Flip-clock countdown timer on the home page.
// Creates animated flip cards for days, hours, minutes, seconds.
// Properly clears interval on page unload to prevent memory leaks.
(function () {
  const countdownEl = document.getElementById('countdown');
  if (!countdownEl) return;

  // Event date for the 15th Annual Colorado Law Classic (Denver timezone)
  const eventDate = new Date('August 16, 2026 07:30:00 GMT-0600').getTime();
  let countdownInterval = null;
  let prevValues = { days: -1, hours: -1, minutes: -1, seconds: -1 };

  // Build flip-clock HTML structure
  function createFlipUnit(label) {
    return `
      <div class="countdown-unit">
        <div class="countdown-flip" data-unit="${label}">
          <div class="countdown-flip-top"><span>00</span></div>
          <div class="countdown-flip-bottom"><span>00</span></div>
        </div>
        <span class="countdown-label">${label}</span>
      </div>
    `;
  }

  countdownEl.innerHTML = `
    ${createFlipUnit('days')}
    ${createFlipUnit('hours')}
    ${createFlipUnit('minutes')}
    ${createFlipUnit('seconds')}
  `;

  // Add message element after countdown
  const messageEl = document.createElement('div');
  messageEl.className = 'countdown-message';
  messageEl.textContent = 'until tee-off';
  countdownEl.after(messageEl);

  function updateFlipUnit(unit, value) {
    const flipEl = countdownEl.querySelector(`[data-unit="${unit}"]`);
    if (!flipEl) return;

    const formattedValue = String(value).padStart(2, '0');
    const topSpan = flipEl.querySelector('.countdown-flip-top span');
    const bottomSpan = flipEl.querySelector('.countdown-flip-bottom span');

    if (prevValues[unit] !== value) {
      // Trigger flip animation
      flipEl.classList.remove('flip');
      void flipEl.offsetWidth; // Force reflow
      flipEl.classList.add('flip');

      // Update the displayed values
      topSpan.textContent = formattedValue;
      bottomSpan.textContent = formattedValue;

      prevValues[unit] = value;
    }
  }

  function updateCountdown() {
    const now = Date.now();
    const distance = eventDate - now;

    if (distance <= 0) {
      countdownEl.innerHTML = '<div class="countdown-message" style="margin-top:0">Event in progress!</div>';
      messageEl.remove();
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

    updateFlipUnit('days', days);
    updateFlipUnit('hours', hours);
    updateFlipUnit('minutes', minutes);
    updateFlipUnit('seconds', seconds);
  }

  updateCountdown();
  countdownInterval = setInterval(updateCountdown, 1000);

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

// ==========================================================================
// VISUAL POLISH EFFECTS
// Enhanced animations, micro-interactions, and parallax
// ==========================================================================

// Enhanced scroll-triggered animations with staggered delays
(function () {
  const animatedElements = document.querySelectorAll('[data-animate]');
  if (!animatedElements.length) return;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // Add delay if specified
          const delay = entry.target.dataset.delay || 0;
          setTimeout(() => {
            entry.target.classList.add('animated');
          }, delay);
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15, rootMargin: '0px 0px -50px 0px' }
  );

  animatedElements.forEach((el) => observer.observe(el));
})();

// Animated counter for statistics (counts up when visible)
(function () {
  const counters = document.querySelectorAll('[data-count]');
  if (!counters.length) return;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const el = entry.target;
          const target = parseInt(el.dataset.count, 10);
          const duration = parseInt(el.dataset.duration, 10) || 2000;
          const suffix = el.dataset.suffix || '';

          animateCounter(el, target, duration, suffix);
          observer.unobserve(el);
        }
      });
    },
    { threshold: 0.5 }
  );

  function animateCounter(el, target, duration, suffix) {
    const startTime = performance.now();
    const startValue = 0;

    function update(currentTime) {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);

      // Easing function (ease-out)
      const easeOut = 1 - Math.pow(1 - progress, 3);
      const currentValue = Math.floor(startValue + (target - startValue) * easeOut);

      el.textContent = currentValue + suffix;

      if (progress < 1) {
        requestAnimationFrame(update);
      } else {
        el.textContent = target + suffix;
      }
    }

    requestAnimationFrame(update);
  }

  counters.forEach((el) => observer.observe(el));
})();

// Card tilt effect on hover (3D perspective)
(function () {
  const tiltCards = document.querySelectorAll('[data-tilt]');
  if (!tiltCards.length) return;

  tiltCards.forEach((card) => {
    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;

      const rotateX = (y - centerY) / centerY * -8;
      const rotateY = (x - centerX) / centerX * 8;

      card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`;
    });

    card.addEventListener('mouseleave', () => {
      card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) scale3d(1, 1, 1)';
    });
  });
})();

// Parallax effect for hero sections
(function () {
  const parallaxElements = document.querySelectorAll('[data-parallax]');
  if (!parallaxElements.length) return;

  let ticking = false;

  function updateParallax() {
    const scrollY = window.pageYOffset;

    parallaxElements.forEach((el) => {
      const speed = parseFloat(el.dataset.parallax) || 0.5;
      const offset = scrollY * speed;
      el.style.transform = `translateY(${offset}px)`;
    });

    ticking = false;
  }

  window.addEventListener('scroll', () => {
    if (!ticking) {
      requestAnimationFrame(updateParallax);
      ticking = true;
    }
  }, { passive: true });
})();

// Gold shimmer effect on hover for elements with data-shimmer
(function () {
  const shimmerElements = document.querySelectorAll('[data-shimmer]');
  if (!shimmerElements.length) return;

  shimmerElements.forEach((el) => {
    el.addEventListener('mouseenter', () => {
      el.classList.add('shimmer-active');
    });

    el.addEventListener('animationend', () => {
      el.classList.remove('shimmer-active');
    });
  });
})();
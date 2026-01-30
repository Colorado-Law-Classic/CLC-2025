/**
 * ==========================================================================
 * COLORADO LAW CLASSIC - Mockup JavaScript
 * ==========================================================================
 *
 * Handles interactive functionality for the mockup page:
 * - Theme switching (Heritage, Flatirons, Black Tie)
 * - View/tab navigation (Overview, 15 Years, Register)
 * - Tile click actions
 * - Brand icon updates based on theme
 *
 * DOCUMENTATION RULES:
 * 1. Documentation in code — Include comments explaining what each section does
 * 2. Don't make assumptions — Ask clarifying questions when intent is unclear
 * 3. Include these rules — Reference these principles as reminders
 */

(function() {
  'use strict';

  // ==========================================================================
  // Theme Switching
  // ==========================================================================

  /**
   * Updates the page theme by setting the data-theme attribute on the html element.
   * Also updates the brand icon visibility and theme switcher button states.
   * Persists the theme preference to localStorage.
   *
   * @param {string} themeName - One of 'heritage', 'flatirons', or 'noir'
   */
  function setTheme(themeName) {
    // Update the html element's data-theme attribute
    document.documentElement.setAttribute('data-theme', themeName);

    // Update theme switcher button states
    const themeBtns = document.querySelectorAll('.theme-btn');
    themeBtns.forEach(function(btn) {
      if (btn.dataset.theme === themeName) {
        btn.classList.add('active');
      } else {
        btn.classList.remove('active');
      }
    });

    // Update brand icons based on theme
    updateBrandIcon(themeName);

    // Update section badge icon based on theme
    updateSectionBadgeIcon(themeName);

    // Save preference to localStorage
    try {
      localStorage.setItem('clc-mockup-theme', themeName);
    } catch (e) {
      // localStorage may not be available (e.g., private browsing)
    }
  }

  /**
   * Updates the brand icon in the navigation based on the current theme.
   * - Heritage: Triangle (filled)
   * - Flatirons: Mountain
   * - Noir: CSS-based rotated square (no SVG)
   *
   * @param {string} themeName - The current theme name
   */
  function updateBrandIcon(themeName) {
    const iconMountain = document.querySelector('.bento-brand-icon .icon-mountain');
    const iconTriangle = document.querySelector('.bento-brand-icon .icon-triangle');

    if (!iconMountain || !iconTriangle) return;

    if (themeName === 'flatirons') {
      iconMountain.style.display = 'block';
      iconTriangle.style.display = 'none';
    } else if (themeName === 'heritage') {
      iconMountain.style.display = 'none';
      iconTriangle.style.display = 'block';
    } else if (themeName === 'noir') {
      // Noir uses CSS-only icon (rotated square) set via CSS
      iconMountain.style.display = 'none';
      iconTriangle.style.display = 'none';
    }
  }

  /**
   * Updates the section badge icon (the small icon next to "15th Annual")
   * based on the current theme.
   *
   * @param {string} themeName - The current theme name
   */
  function updateSectionBadgeIcon(themeName) {
    const badgeIcon = document.querySelector('.bento-section-badge svg');
    if (!badgeIcon) return;

    if (themeName === 'flatirons') {
      // Mountain icon for Flatirons
      badgeIcon.innerHTML = '<path d="m8 3 4 8 5-5 5 15H2L8 3z" fill="none" stroke="currentColor" stroke-width="2"/>';
    } else {
      // Triangle icon for Heritage and Noir
      badgeIcon.innerHTML = '<path d="M12 2L22 20H2L12 2Z"/>';
    }
  }

  /**
   * Initializes theme switching functionality.
   * Loads saved theme from localStorage or defaults to 'flatirons'.
   */
  function initThemeSwitcher() {
    // Load saved theme or default to flatirons
    let savedTheme = 'flatirons';
    try {
      savedTheme = localStorage.getItem('clc-mockup-theme') || 'flatirons';
    } catch (e) {
      // localStorage may not be available
    }

    // Apply saved theme
    setTheme(savedTheme);

    // Add click handlers to theme buttons
    const themeBtns = document.querySelectorAll('.theme-btn');
    themeBtns.forEach(function(btn) {
      btn.addEventListener('click', function() {
        setTheme(this.dataset.theme);
      });
    });
  }

  // ==========================================================================
  // View Navigation (Tab Switching)
  // ==========================================================================

  /**
   * Switches the visible view/section and updates navigation button states.
   *
   * @param {string} viewName - One of 'home', 'mission', or 'register'
   */
  function setView(viewName) {
    // Update nav link states
    const navLinks = document.querySelectorAll('.bento-nav-link');
    navLinks.forEach(function(link) {
      if (link.dataset.view === viewName) {
        link.classList.add('active');
      } else {
        link.classList.remove('active');
      }
    });

    // Update view visibility
    const views = document.querySelectorAll('.bento-view');
    views.forEach(function(view) {
      const viewId = view.id.replace('view-', '');
      if (viewId === viewName) {
        view.classList.add('active');
        // Trigger animation by adding/removing class
        const animatedEl = view.querySelector('.animate-in');
        if (animatedEl) {
          animatedEl.style.animation = 'none';
          // Force reflow
          animatedEl.offsetHeight;
          animatedEl.style.animation = '';
        }
      } else {
        view.classList.remove('active');
      }
    });

    // Scroll to top when changing views
    window.scrollTo({ top: 0, behavior: 'smooth' });

    // Update URL hash for bookmarking (optional)
    if (history.pushState) {
      history.pushState(null, null, '#' + viewName);
    }
  }

  /**
   * Initializes view navigation functionality.
   */
  function initViewNavigation() {
    // Add click handlers to nav links
    const navLinks = document.querySelectorAll('.bento-nav-link');
    navLinks.forEach(function(link) {
      link.addEventListener('click', function() {
        setView(this.dataset.view);
      });
    });

    // Handle brand click (go to home)
    const brand = document.querySelector('.bento-brand');
    if (brand) {
      brand.addEventListener('click', function(e) {
        e.preventDefault();
        setView('home');
      });
    }

    // Check URL hash on load
    const hash = window.location.hash.replace('#', '');
    if (hash && ['home', 'mission', 'register'].includes(hash)) {
      setView(hash);
    }

    // Handle browser back/forward
    window.addEventListener('popstate', function() {
      const hash = window.location.hash.replace('#', '');
      if (hash && ['home', 'mission', 'register'].includes(hash)) {
        setView(hash);
      } else {
        setView('home');
      }
    });
  }

  // ==========================================================================
  // Tile Click Actions
  // ==========================================================================

  /**
   * Initializes click handlers for interactive tiles.
   */
  function initTileActions() {
    // Registration tile click -> go to register view
    const registerTile = document.querySelector('[data-action="register"]');
    if (registerTile) {
      registerTile.style.cursor = 'pointer';
      registerTile.addEventListener('click', function() {
        setView('register');
      });
    }

    // Sponsors tile click -> go to sponsors page
    const sponsorsTile = document.querySelector('[data-action="sponsors"]');
    if (sponsorsTile) {
      sponsorsTile.style.cursor = 'pointer';
      sponsorsTile.addEventListener('click', function() {
        window.location.href = 'sponsors.html';
      });
    }

    // Location tile click -> open Google Maps
    const locationTile = document.querySelector('[data-action="location"]');
    if (locationTile) {
      locationTile.style.cursor = 'pointer';
      locationTile.addEventListener('click', function() {
        window.open('https://maps.google.com/?q=City+Park+Golf+Course+Denver+CO', '_blank');
      });
    }

    // Registration tier selection
    const tiers = document.querySelectorAll('.bento-register-tier');
    tiers.forEach(function(tier) {
      tier.addEventListener('click', function() {
        // Remove featured class from all tiers
        tiers.forEach(function(t) {
          t.classList.remove('featured');
        });
        // Add featured class to clicked tier
        this.classList.add('featured');
      });
    });
  }

  // ==========================================================================
  // Animations
  // ==========================================================================

  /**
   * Initializes scroll-triggered animations using IntersectionObserver.
   * Adds 'animate' class to parent containers to enable animations,
   * ensuring tiles remain visible if JS is disabled or IntersectionObserver
   * is not supported.
   */
  function initAnimations() {
    // Check for IntersectionObserver support and reduced motion preference
    if (!('IntersectionObserver' in window)) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    // Add animate class to enable CSS transitions
    const grids = document.querySelectorAll('.bento-grid');
    grids.forEach(function(grid) {
      grid.classList.add('animate');
    });

    const statContainers = document.querySelectorAll('.bento-mission-stats');
    statContainers.forEach(function(container) {
      container.classList.add('animate');
    });

    const observer = new IntersectionObserver(function(entries) {
      entries.forEach(function(entry) {
        if (entry.isIntersecting) {
          // Add staggered delay based on element index
          const parent = entry.target.parentElement;
          const siblings = Array.from(parent.children);
          const index = siblings.indexOf(entry.target);
          entry.target.style.transitionDelay = (index * 100) + 'ms';

          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    });

    // Observe bento tiles for staggered animation
    const tiles = document.querySelectorAll('.bento-tile');
    tiles.forEach(function(tile) {
      observer.observe(tile);
    });

    // Observe stat cards
    const stats = document.querySelectorAll('.bento-mission-stat');
    stats.forEach(function(stat) {
      observer.observe(stat);
    });
  }

  // ==========================================================================
  // Keyboard Navigation (Accessibility)
  // ==========================================================================

  /**
   * Adds keyboard navigation support for interactive elements.
   */
  function initKeyboardNav() {
    // Allow Enter/Space on tiles with actions
    const actionTiles = document.querySelectorAll('[data-action]');
    actionTiles.forEach(function(tile) {
      tile.setAttribute('tabindex', '0');
      tile.setAttribute('role', 'button');
      tile.addEventListener('keydown', function(e) {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          this.click();
        }
      });
    });

    // Allow Enter/Space on registration tiers
    const tiers = document.querySelectorAll('.bento-register-tier');
    tiers.forEach(function(tier) {
      tier.setAttribute('tabindex', '0');
      tier.setAttribute('role', 'option');
      tier.addEventListener('keydown', function(e) {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          this.click();
        }
      });
    });
  }

  // ==========================================================================
  // Initialization
  // ==========================================================================

  /**
   * Main initialization function, called when DOM is ready.
   */
  function init() {
    initThemeSwitcher();
    initViewNavigation();
    initTileActions();
    initAnimations();
    initKeyboardNav();
  }

  // Run initialization when DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

})();

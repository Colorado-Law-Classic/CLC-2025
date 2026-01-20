# Coding Conventions

**Analysis Date:** 2026-01-19

## Naming Patterns

**Files:**
- HTML pages: `kebab-case.html` (e.g., `course-map.html`, `brand-preview.html`)
- CSS: single stylesheet `styles.css` in `assets/css/`
- JavaScript: `kebab-case.js` for page-specific scripts (e.g., `main.js`, `anniversary.js`, `course-map.js`, `registration.js`)
- Images: `kebab-case.ext` (e.g., `clc-logo.jpg`, `womble-bond-dickinson.jpg`)

**CSS Classes:**
- BEM-inspired but simplified: `.component-modifier` pattern
- Component names: lowercase hyphenated (e.g., `.nav-toggle`, `.hero-card`, `.sponsor-grid`)
- State classes: `.active`, `.open`, `.visible`, `.hidden`, `.scrolled`
- Modifier pattern: `.btn-outline`, `.btn-small`, `.btn-outline-light`
- Utility classes: `.gold` (text color), `.container` (layout)

**JavaScript:**
- camelCase for all variables and functions (e.g., `selectedFiles`, `updateCountdown`, `formatCurrency`)
- UPPER_SNAKE_CASE for constants (e.g., `CONFIG`, `SCROLL_THRESHOLD`, `STORAGE_KEY`)
- Descriptive function names starting with verbs (e.g., `initUploadZone`, `handleTestimonialSubmit`, `goToStep`)

**CSS Variables:**
- Prefix with category: `--clr-*` (colors), `--space-*` (spacing), `--font-*` (typography), `--shadow-*`, `--transition-*`, `--radius-*`, `--z-*`
- Examples: `--clr-gold`, `--space-md`, `--font-heading`, `--shadow-lg`, `--transition-base`

**Data Attributes:**
- `data-nav` for navigation link highlighting
- `data-reveal` for scroll animations
- `data-filter`, `data-year` for gallery filtering
- `data-animate`, `data-delay` for staggered animations
- `data-tilt`, `data-shimmer`, `data-parallax` for visual effects
- `data-count`, `data-duration`, `data-suffix` for animated counters

## Code Style

**Formatting:**
- No automated formatter configured (no Prettier/ESLint)
- Manual formatting conventions observed:
  - 2-space indentation in HTML, CSS, and JS
  - Single quotes for JS strings
  - Semicolons at end of JS statements
  - CSS properties on separate lines

**HTML Structure:**
```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Page Title – Colorado Law Classic</title>
  <meta name="description" content="...">
  <!-- Open Graph meta tags -->
  <!-- Canonical URL -->
  <!-- Favicon -->
  <!-- Stylesheets -->
  <!-- Fonts -->
  <!-- JSON-LD (index.html only) -->
</head>
<body>
  <a href="#main-content" class="skip-link">Skip to main content</a>
  <nav class="nav">...</nav>
  <section class="container" id="main-content">...</section>
  <footer>...</footer>
  <script src="assets/js/main.js"></script>
</body>
</html>
```

**CSS Organization (in `assets/css/styles.css`):**
1. File header with documentation rules
2. CSS Variables in `:root` (lines 31-94)
3. Dark mode overrides (lines 96-191)
4. Accessibility styles (skip link, focus states)
5. Reset & Base styles
6. Typography
7. Layout (`.container`)
8. Buttons
9. Navigation
10. Hero section
11. Cards
12. Grids
13. Component-specific styles
14. Responsive breakpoints at end

## Import Organization

**HTML - External Resources Order:**
1. Stylesheets (`styles.css`)
2. Third-party CSS (GLightbox on gallery.html)
3. Google Fonts preconnect + stylesheet
4. Scripts at end of body

**JavaScript:**
- No module imports (vanilla JS with IIFEs)
- External libraries loaded via CDN in HTML before main.js
- GLightbox: `https://cdn.jsdelivr.net/npm/glightbox@3.3.0/`

## Error Handling

**Patterns:**
- Guard clauses for missing DOM elements:
```javascript
const toggle = document.querySelector('.nav-toggle');
if (!toggle || !navLinks) return;
```

- Check for optional library presence:
```javascript
if (typeof GLightbox !== 'undefined') {
  GLightbox({ selector: '.glightbox' });
}
```

- Null-safe DOM queries before operations:
```javascript
const nav = document.querySelector('.nav');
if (!nav) return;
```

**Validation (in registration.js):**
```javascript
function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function showFieldError(field, message) {
  field.classList.add('error');
  // Create error element dynamically
}
```

## Logging

**Framework:** Browser console (no external logging)

**Patterns:**
- No logging in production code
- Form submissions show user-facing status messages via DOM updates
- Error states communicated via CSS classes and visible messages

## Comments

**When to Comment:**
- File headers explaining purpose, architecture, and documentation rules
- Section dividers with `/* ---------- Section Name ---------- */`
- Complex logic (countdown timer, form validation)
- Configuration options and setup instructions
- ARIA attributes and accessibility features

**Comment Style:**
```javascript
/**
 * Multi-line JSDoc-style for functions
 * Explains purpose and behavior
 */
function exampleFunction() {
  // Single-line for inline explanations
}
```

```css
/*
 * ==========================================================================
 * FILE HEADER - Explains purpose and architecture
 * ==========================================================================
 */

/* ---------- Section Header ---------- */
/* Inline explanation for complex properties */
```

**Documentation Rules (enforced across codebase):**
1. Documentation in code - Include comments explaining what each section does
2. Don't make assumptions - Ask clarifying questions when intent is unclear
3. Include these rules - Reference these principles in documentation

## Function Design

**Size:** Functions are generally short (10-30 lines), focused on single responsibility

**Parameters:**
- Configuration objects for complex settings (e.g., `CONFIG` in registration.js)
- Single parameters for simple operations
- Event objects when handling DOM events

**Return Values:**
- Boolean for validation functions
- Void for most DOM manipulation functions
- No explicit return pattern for event handlers

**IIFE Pattern (required for all JS modules):**
```javascript
(function () {
  'use strict';

  // Module code here
  const element = document.querySelector('.selector');
  if (!element) return;

  // Implementation
})();
```

## Module Design

**Exports:** None (no module system, all code in IIFEs)

**Barrel Files:** Not applicable

**File Organization:**
- `main.js`: Shared behaviors (nav, scroll effects, countdown, gallery)
- `anniversary.js`: Photo upload and testimonial form
- `course-map.js`: Interactive hole markers and tooltips
- `registration.js`: Multi-step form with validation

## CSS Patterns

**CSS Variables Usage:**
```css
/* Always use variables for consistency */
background: var(--clr-gold);
padding: var(--space-md);
transition: color var(--transition-fast);
```

**Responsive Breakpoints:**
- 768px: Mobile/tablet transition (hamburger menu activates)
- 480px: Small mobile adjustments

**Animation Patterns:**
```css
/* Use CSS variables for transitions */
transition: background-color var(--transition-base), transform var(--transition-base);

/* requestAnimationFrame for scroll handlers */
```

**Theme Support:**
- Light mode default
- Dark mode via `.dark-mode` class on `<html>`
- Theme-aware CSS variables: `--clr-bg`, `--clr-surface`, `--clr-text-primary`

## Accessibility Patterns

**Required elements:**
- Skip link: `<a href="#main-content" class="skip-link">Skip to main content</a>`
- `id="main-content"` on main content section
- `aria-label` on interactive elements without visible text
- `aria-expanded` on toggle buttons
- `aria-live="polite"` on dynamic content (countdown)
- `loading="lazy"` on images below the fold

**Focus styles:**
```css
.btn:focus-visible,
button:focus-visible,
a:focus-visible {
  outline: 3px solid var(--clr-gold);
  outline-offset: 2px;
}
```

---

*Convention analysis: 2026-01-19*

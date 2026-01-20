# Architecture

**Analysis Date:** 2026-01-19

## Pattern Overview

**Overall:** Static Multi-Page Application (MPA)

**Key Characteristics:**
- No build step or bundler - files served directly as written
- No templating system - each HTML page is standalone with duplicated nav/footer
- Client-side JavaScript only - no server rendering
- CSS custom properties for theming (light/dark mode)
- Progressive enhancement - core content works without JS

## Layers

**Presentation Layer (HTML):**
- Purpose: Structure and content for each page
- Location: `/*.html` (root-level HTML files)
- Contains: Page markup, SEO meta tags, JSON-LD structured data
- Depends on: CSS via `<link>`, JS via `<script>`
- Used by: End users via browser

**Styling Layer (CSS):**
- Purpose: Visual design, responsive layout, theming
- Location: `assets/css/styles.css`
- Contains: CSS variables, base styles, components, responsive breakpoints
- Depends on: Nothing (standalone)
- Used by: All HTML pages

**Behavior Layer (JavaScript):**
- Purpose: Client-side interactivity and animations
- Location: `assets/js/main.js`, `assets/js/anniversary.js`, `assets/js/course-map.js`, `assets/js/registration.js`
- Contains: IIFE modules, DOM manipulation, event handlers
- Depends on: DOM elements with specific IDs and data attributes
- Used by: HTML pages that require interactivity

**Assets Layer:**
- Purpose: Static resources (images, future video)
- Location: `assets/img/`, `assets/video/` (future)
- Contains: Logos, sponsor images, gallery photos
- Depends on: Nothing
- Used by: HTML pages via `<img>` tags

## Data Flow

**Page Load Flow:**

1. Browser requests HTML file (e.g., `index.html`)
2. HTML references CSS (`assets/css/styles.css`) and fonts (Google Fonts CDN)
3. HTML references JS (`assets/js/main.js`) at end of body
4. JS initializes based on DOM elements present (conditional feature activation)
5. User interactions trigger JS handlers that modify DOM state

**Theme Toggle Flow:**

1. User clicks theme toggle button (created dynamically by JS)
2. JS reads current theme from `html.dark-mode` class
3. JS toggles class and updates CSS variables cascade
4. Theme preference saved to `localStorage` key `clc-theme`
5. On page load, JS checks localStorage and system preference

**Form Submission Flow:**

1. User fills form fields (contact, testimonial, or registration)
2. JS validates inputs on submission
3. For contact form: Submits to Formspree (external service)
4. For anniversary uploads: Currently simulates success (placeholder)
5. For registration: Currently placeholder - no payment integration

**Gallery Filter Flow:**

1. User clicks filter button (`data-filter` attribute)
2. JS queries all gallery items with `data-year` attributes
3. Items not matching filter receive `.hidden` class
4. Active button receives `.active` class

## Key Abstractions

**CSS Variables (Design Tokens):**
- Purpose: Centralize colors, spacing, typography for theming
- Location: `assets/css/styles.css` lines 31-94 (`:root` block)
- Pattern: `--clr-*` for colors, `--space-*` for spacing, `--shadow-*` for shadows

**Data Attributes (JS Hooks):**
- Purpose: Decouple JS from CSS classes and enable feature flags
- Examples:
  - `data-nav`: Navigation links for active state detection
  - `data-animate`: Elements that animate on scroll (`fade-up`, `fade-in`, `scale`)
  - `data-delay`: Staggered animation timing (milliseconds)
  - `data-filter` / `data-year`: Gallery filtering system
  - `data-tilt` / `data-shimmer`: Card hover effects
  - `data-count` / `data-duration`: Animated counters

**IIFE Modules:**
- Purpose: Encapsulate functionality without polluting global scope
- Location: `assets/js/main.js`, all feature modules
- Pattern: `(function() { ... })();`

## Entry Points

**HTML Pages (10 total):**
- Location: `index.html` (home), `sponsors.html`, `gallery.html`, `contact.html`, `faq.html`, `anniversary.html`, `course-map.html`, `register.html`, `flyer.html`, `brand-preview.html`
- Triggers: Direct URL access, internal navigation links
- Responsibilities: Render page content, load shared styles and scripts

**Main JavaScript:**
- Location: `assets/js/main.js`
- Triggers: Loaded on all pages
- Responsibilities: Nav highlighting, mobile menu, scroll effects, dark mode, countdown timer, gallery filter, GLightbox init

**Page-Specific JavaScript:**
- `assets/js/anniversary.js`: Loaded on `anniversary.html` - drag-drop uploads, testimonial form
- `assets/js/course-map.js`: Loaded on `course-map.html` - SVG map tooltips and panel
- `assets/js/registration.js`: Loaded on `register.html` - multi-step form wizard

## Error Handling

**Strategy:** Graceful degradation with defensive checks

**Patterns:**
- All JS modules check for required DOM elements before executing: `if (!element) return;`
- CSS handles missing images via background fallbacks
- External libraries checked with `if (typeof GLightbox !== 'undefined')`
- Form submissions show user-friendly error messages in designated status elements

## Cross-Cutting Concerns

**Logging:** Console only (`console.error` for actual errors during development)

**Validation:**
- HTML: Native browser validation with `required` attribute
- JS: Type/size validation for file uploads in `anniversary.js`
- No server-side validation (static site)

**Authentication:** None - public static site

**Accessibility:**
- Skip links on all pages
- ARIA attributes on interactive elements (`aria-label`, `aria-expanded`, `aria-live`)
- Keyboard navigation support for custom components
- Focus management in mobile menu

**SEO:**
- Open Graph meta tags on each page
- JSON-LD structured data for event (home page)
- Canonical URLs
- Semantic HTML structure

---

*Architecture analysis: 2026-01-19*

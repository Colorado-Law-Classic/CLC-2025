# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Colorado Law Classic (CLC) - A charity golf tournament website benefiting scholarship funds at CU Law School. This is a static HTML/CSS/JS site with no build step.

**Design Direction:** "Refined Country Club Prestige" — Black + Gold (CU Law School colors)

**Contact Email:** coloradolawgolf@gmail.com

## Development

```bash
npx serve .           # or python -m http.server 8080
```

No build, lint, or test commands—just open HTML files directly in a browser.

## Deployment

GitHub Pages auto-deploys from `main` branch via `.github/workflows/deploy.yml`.

Live URL: `https://redeemedduck.github.io/CLC-2025/`

## Architecture

**No templating system**: Each HTML page duplicates the nav and footer. When updating nav links or footer content, change all `.html` files (10 total: index, sponsors, gallery, contact, faq, anniversary, course-map, register, flyer, brand-preview).

**CSS theming** in `assets/css/styles.css`:
- CSS variables in `:root` block (lines 31-94)
- Dark mode overrides via `.dark-mode` class on `<html>` (lines 96-191)
- Theme stored in `localStorage` key `clc-theme`
- Typography: Playfair Display (headings) + Inter (body)

**JavaScript architecture** — All modules use IIFEs with guard clauses:
```javascript
(function() {
  'use strict';
  const element = document.querySelector('.selector');
  if (!element) return;
  // Implementation
})();
```

**Page-specific scripts:**
| Page | Script | Features |
|------|--------|----------|
| All pages | `main.js` | Nav, mobile menu, scroll effects, dark mode, countdown, gallery filter, GLightbox |
| anniversary.html | `anniversary.js` | Drag-drop photo uploads, testimonial form |
| course-map.html | `course-map.js` | SVG hole markers, tooltips, info panel |
| register.html | `registration.js` | Multi-step form wizard with validation |

**Data attributes (JS hooks):**
- `data-nav`: Navigation link highlighting
- `data-animate`, `data-delay`: Scroll animations
- `data-filter`, `data-year`: Gallery filtering
- `data-tilt`, `data-shimmer`, `data-parallax`: Visual effects
- `data-count`, `data-duration`, `data-suffix`: Animated counters

## Commonly Updated

| What | Where |
|------|-------|
| Event date | `assets/js/main.js:103` — format: `'Month Day, Year HH:MM:SS GMT-0600'` |
| Colors | `assets/css/styles.css` — `:root` block (lines 31-94) |
| Registration | External link to `coloradolawclassic.org` (update href in all pages) |
| Sponsors | `sponsors.html` + add logo images to `assets/img/` |
| Gallery photos | `gallery.html` — wrap in `<a class="glightbox">` with `data-year` attribute |
| Contact email | Update in `contact.html`, `sponsors.html`, `faq.html`, `register.html` |

## Contributor Guidelines

These rules guide all work on this codebase (from `docs/SITE-IMPROVEMENTS.md`):

1. **Documentation in code** — Include comments explaining what each file/section does
2. **Don't make assumptions** — Ask clarifying questions when intent is unclear
3. **Include these rules** — Reference these principles in documentation as reminders

## Documentation

- `docs/SITE-IMPROVEMENTS.md` — Detailed changelog and pending improvements
- `docs/BRAND-GUIDE.md` — Internal brand guidelines (colors, typography, imagery)
- `.planning/` — Architecture analysis, conventions, project state, and roadmap

## Pending Tasks

See `docs/SITE-IMPROVEMENTS.md` for full details:

1. **Flyer Design** — Modernize tournament flyer to match website aesthetic
2. **Sponsor Logos** — Add logos as sponsors are confirmed
3. **Gallery Images** — Add photos as they become available
4. **Registration Page** — Build custom registration (may need payment integration)

## Archive

Previous React implementation preserved in `archive/` for reference.

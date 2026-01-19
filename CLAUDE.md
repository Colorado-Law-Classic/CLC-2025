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

**No templating system**: Each HTML page duplicates the nav and footer. When updating nav links or footer content, change all `.html` files.

**CSS theming via custom properties** in `assets/css/styles.css` (`:root` block, lines 31-87):
- Brand colors: `--clr-black`, `--clr-gold`, `--clr-charcoal`, `--clr-cream`, etc.
- Spacing scale: `--space-xs` through `--space-2xl`
- Shadows: `--shadow-sm`, `--shadow-md`, `--shadow-lg`, `--shadow-gold`
- Transitions: `--transition-fast`, `--transition-base`, `--transition-slow`
- Z-index scale: `--z-nav`, `--z-overlay`, `--z-modal`
- Typography: Playfair Display (headings) + Inter (body)

**JavaScript modules** in `assets/js/main.js` use IIFEs to avoid globals:
- Nav highlighting based on current page
- Mobile hamburger menu toggle
- Countdown timer (event date at line 103, Denver timezone GMT-0600)
- Scroll reveal via IntersectionObserver
- Gallery filter by year (data-filter/data-year attributes)
- GLightbox initialization for gallery lightbox

## Commonly Updated

| What | Where |
|------|-------|
| Event date | `assets/js/main.js:103` — format: `'Month Day, Year HH:MM:SS GMT-0600'` |
| Colors | `assets/css/styles.css` — `:root` block (lines 31-87) |
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

## Pending Tasks

See `docs/SITE-IMPROVEMENTS.md` for full details:

1. **Flyer Design** — Modernize tournament flyer to match website aesthetic
2. **Sponsor Logos** — Add logos as sponsors are confirmed
3. **Gallery Images** — Add photos as they become available
4. **Registration Page** — Build custom registration (may need payment integration)

## Archive

Previous React implementation preserved in `archive/` for reference.

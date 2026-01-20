# Technology Stack

**Analysis Date:** 2026-01-19

## Languages

**Primary:**
- HTML5 - All page markup (`*.html` files in project root)
- CSS3 - Custom properties, flexbox, grid (`assets/css/styles.css`)
- JavaScript ES6+ - IIFEs, async/await, IntersectionObserver (`assets/js/*.js`)

**Secondary:**
- JSON - Structured data (JSON-LD in HTML `<head>`)
- YAML - CI/CD configuration (`.github/workflows/deploy.yml`)

## Runtime

**Environment:**
- Browser-based only (no server-side runtime)
- No Node.js required for development or production

**Package Manager:**
- None - No `package.json`, `npm`, or other package managers
- Dependencies loaded via CDN

## Frameworks

**Core:**
- None - Vanilla HTML/CSS/JS with no framework

**Testing:**
- None - No testing framework configured

**Build/Dev:**
- None - No build step required
- Local development: `npx serve .` or `python -m http.server 8080`

## Key Dependencies

**Critical (CDN-loaded):**
- GLightbox v3.3.0 - Lightbox for gallery images
  - CSS: `https://cdn.jsdelivr.net/npm/glightbox@3.3.0/dist/css/glightbox.min.css`
  - JS: `https://cdn.jsdelivr.net/npm/glightbox@3.3.0/dist/js/glightbox.min.js`
  - Loaded only on `gallery.html`

**Typography (CDN-loaded):**
- Google Fonts - Inter (body) + Playfair Display (headings)
  - `https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Playfair+Display:wght@600;700&display=swap`

**Optional (documented but not active):**
- Cloudinary - Photo upload service (commented out in `assets/js/anniversary.js`)
- Firebase Storage - Alternative upload service (documented in `assets/js/anniversary.js`)
- Payment processors - Stripe, PayPal, Square, Zeffy (documented in `assets/js/registration.js`)

## Configuration

**Environment:**
- No environment variables required
- No `.env` files
- Contact email hardcoded: `coloradolawgolf@gmail.com`
- Event date hardcoded: `assets/js/main.js:256` - `August 16, 2026 07:30:00 GMT-0600`

**Build:**
- No build configuration files
- CSS custom properties in `:root` block (`assets/css/styles.css:31-94`)
- Theme colors: `--clr-black`, `--clr-gold`, `--clr-charcoal`, `--clr-cream`

## Platform Requirements

**Development:**
- Any modern browser for testing
- Optional: Local HTTP server for proper path resolution
- No specific IDE requirements

**Production:**
- GitHub Pages static hosting
- Auto-deploys from `main` branch
- Live URL: `https://redeemedduck.github.io/CLC-2025/`

## File Types

| Extension | Purpose | Location |
|-----------|---------|----------|
| `.html` | Page markup | Project root |
| `.css` | Styles | `assets/css/` |
| `.js` | Interactivity | `assets/js/` |
| `.jpg/.png` | Images | `assets/img/` |
| `.mp4` | Video | `assets/video/` |
| `.yml` | CI/CD | `.github/workflows/` |

---

*Stack analysis: 2026-01-19*

# External Integrations

**Analysis Date:** 2026-01-19

## APIs & External Services

**Registration:**
- External registration via WordPress site
  - URL: `https://coloradolawclassic.org/home/register-here/`
  - Links in: `index.html`, `sponsors.html`, `contact.html`, `anniversary.html`
  - Implementation: External redirect (target="_blank")

**Form Submission:**
- Formspree - Contact form processing
  - Endpoint: `https://formspree.io/f/coloradolawgolf@gmail.com`
  - Location: `contact.html:58`
  - Status: Active (configured but endpoint format may need update to form ID)

**Gallery Lightbox:**
- GLightbox v3.3.0 (CDN)
  - CSS: `https://cdn.jsdelivr.net/npm/glightbox@3.3.0/dist/css/glightbox.min.css`
  - JS: `https://cdn.jsdelivr.net/npm/glightbox@3.3.0/dist/js/glightbox.min.js`
  - Location: `gallery.html` only
  - Status: Active

## Data Storage

**Databases:**
- None - Static site with no database

**File Storage:**
- Local filesystem only (`assets/img/`, `assets/video/`)
- No cloud storage active

**Caching:**
- Browser caching only
- No server-side caching

## Authentication & Identity

**Auth Provider:**
- None - No authentication system
- All content is public

## Monitoring & Observability

**Error Tracking:**
- None configured

**Logs:**
- Browser console only (`console.log` statements in JS)

**Analytics:**
- None configured (no Google Analytics, etc.)

## CI/CD & Deployment

**Hosting:**
- GitHub Pages
  - Source: `main` branch
  - Workflow: `.github/workflows/deploy.yml`
  - Live URL: `https://redeemedduck.github.io/CLC-2025/`

**CI Pipeline:**
- GitHub Actions
  - Trigger: Push to `main` branch or manual dispatch
  - Steps: Checkout, copy files to `_site/`, deploy to Pages
  - No build, test, or lint steps

## Environment Configuration

**Required env vars:**
- None - All configuration is hardcoded

**Secrets location:**
- None required for current functionality

## Webhooks & Callbacks

**Incoming:**
- None

**Outgoing:**
- Formspree form submission (contact page)

## Prepared Integrations (Not Yet Active)

**Photo Uploads (`assets/js/anniversary.js`):**
- Cloudinary - Documented but commented out
  - Config keys: `cloudinaryCloudName`, `cloudinaryUploadPreset`
  - Endpoint: `https://api.cloudinary.com/v1_1/{cloudName}/image/upload`
- Firebase Storage - Documented in comments
  - Requires: Firebase SDK scripts in HTML
- Current status: Simulates success, no actual upload

**Payment Processing (`assets/js/registration.js`):**
- Prepared for integration with:
  - Zeffy (0% fees charity processor)
  - PayPal (PayPal JS SDK)
  - Stripe (Stripe Elements)
  - Square (Web Payments SDK)
- Current status: Form collects data, shows placeholder message
- Fallback: Email to `coloradolawgolf@gmail.com`

**Testimonial Form (`assets/js/anniversary.js`):**
- Formspree documented but not configured
  - Config key: `formspreeEndpoint`
- Current status: Simulates success

## External Links

**Outbound:**
- CU Law giving: `https://giving.cu.edu/fund/sarah-l-rector-memorial-scholarship`
- Colorado Law article: `https://www.colorado.edu/law/2024/10/19/family-tradition-one-alums-journey-colorado-law-and-beyond`
- City Park Golf Course: `https://www.cityofdenvergolf.com/city-park/`
- Sponsor websites (Bartic Group, Womble Bond Dickinson, HROP Law)

## Integration Status Summary

| Integration | Status | File |
|-------------|--------|------|
| External registration | Active | All nav links |
| Contact form (Formspree) | Active | `contact.html` |
| GLightbox gallery | Active | `gallery.html` |
| Google Fonts | Active | All pages |
| Photo uploads | Placeholder | `assets/js/anniversary.js` |
| Payment processing | Placeholder | `assets/js/registration.js` |
| Testimonial form | Placeholder | `assets/js/anniversary.js` |

---

*Integration audit: 2026-01-19*

# Codebase Concerns

**Analysis Date:** 2026-01-19

## Tech Debt

**Duplicated Navigation HTML Across All Pages:**
- Issue: Navigation and footer markup is copy-pasted in every HTML file (~60 lines per file)
- Files: `index.html`, `sponsors.html`, `gallery.html`, `faq.html`, `contact.html`, `register.html`, `anniversary.html`, `course-map.html`, `flyer.html`
- Impact: Any nav change (e.g., adding a new page) requires editing 9+ files manually. High risk of inconsistency.
- Fix approach: Implement a static site generator (Eleventy, Astro, Hugo) with partials, or use JavaScript to inject common components at runtime.

**Register Link Inconsistency:**
- Issue: Most pages link to external `https://coloradolawclassic.org/home/register-here/` but `register.html` has its own nav link pointing to internal `register.html` (line 42)
- Files: `register.html` line 42 differs from all other pages
- Impact: Confusing UX - some pages open external registration, one page has internal form that doesn't actually process payments
- Fix approach: Decide on single registration flow - either all pages link to external, or complete internal registration with payment integration

**Incomplete Registration Payment Integration:**
- Issue: Multi-step registration form collects all data but payment is a placeholder that shows an alert message
- Files: `assets/js/registration.js` lines 551-613, `register.html` lines 386-406
- Impact: Users cannot actually register through the site. Form gives false impression of functionality.
- Fix approach: Integrate Zeffy, PayPal, or Stripe as documented in code comments. Alternatively, remove internal registration page and redirect to external service.

**Anniversary Page Forms Not Functional:**
- Issue: Photo upload and testimonial submission simulate success but don't actually save data anywhere
- Files: `assets/js/anniversary.js` lines 346-390, 458-483
- Impact: User-submitted photos and stories are lost. Users think their content was submitted successfully.
- Fix approach: Integrate Cloudinary for photos and Formspree for testimonials as documented in the file header comments.

**Contact Form Formspree Configuration Incomplete:**
- Issue: Form action points to Formspree but uses email directly instead of form ID format
- Files: `contact.html` line 58: `action="https://formspree.io/f/coloradolawgolf@gmail.com"`
- Impact: Form submission likely fails. Formspree requires format `https://formspree.io/f/{formId}` not direct email.
- Fix approach: Create a Formspree account, generate form ID, and update the action URL.

**Flyer Page Is Standalone Without Site CSS:**
- Issue: `flyer.html` has its own complete inline CSS (~400 lines) that duplicates design tokens
- Files: `flyer.html` lines 10-398
- Impact: Design changes to site don't propagate to flyer. Maintenance burden of two separate style systems.
- Fix approach: Acceptable for print-specific page, but consider importing shared CSS variables or extracting to separate stylesheet.

## Known Bugs

**Gallery Year Mismatch:**
- Symptoms: Gallery filter has "2026" button but images are labeled as "2025" in filenames and actual event is future
- Files: `gallery.html` lines 62, 75-79
- Trigger: Click "2026" filter
- Workaround: Images still display, just confusing labeling

**CSS File Size Limit:**
- Symptoms: CSS file exceeds 25000 tokens, too large to read fully in one operation
- Files: `assets/css/styles.css` (over 1000 lines)
- Trigger: Automated analysis tools
- Workaround: Read in chunks; consider splitting CSS into logical modules

## Security Considerations

**Honeypot Field Visibility:**
- Risk: Contact form honeypot field uses only class-based hiding (`class="honeypot"`), no inline styles
- Files: `contact.html` lines 60-62
- Current mitigation: CSS hides the field
- Recommendations: Add `style="display:none"` inline as fallback, or use CSS-in-JS approach. Add rate limiting if using serverless backend.

**No Content Security Policy:**
- Risk: Pages load third-party resources (Google Fonts, GLightbox CDN, Formspree) without CSP headers
- Files: All HTML files in `<head>`
- Current mitigation: None - relies on CDN trustworthiness
- Recommendations: Add CSP meta tag allowing specific origins. Consider self-hosting GLightbox.

**External Links Missing noopener:**
- Risk: Most external links have `rel="noopener"` but need verification across all files
- Files: All HTML files
- Current mitigation: Partial - most external links correctly use `target="_blank" rel="noopener"`
- Recommendations: Audit all external links for consistent `rel="noopener noreferrer"`

## Performance Bottlenecks

**Large CSS File:**
- Problem: Single monolithic `assets/css/styles.css` loads on every page
- Files: `assets/css/styles.css` (1000+ lines)
- Cause: All page-specific styles bundled together - course map SVG styles, anniversary upload styles, registration form styles all load on every page
- Improvement path: Code-split CSS by page; use critical CSS inlining for above-fold content; purge unused CSS

**Google Fonts Blocking Render:**
- Problem: Google Fonts loaded synchronously in `<head>` blocks first paint
- Files: All HTML files, lines ~20-22
- Cause: Synchronous stylesheet loading
- Improvement path: Add `font-display: swap` (already in URL), consider `preconnect` hints (already present), or self-host fonts

**No Image Optimization Pipeline:**
- Problem: Images served as-is without compression or modern formats
- Files: `assets/img/*.jpg`, `assets/img/*.png`
- Cause: No build process to optimize assets
- Improvement path: Convert to WebP with fallbacks; implement responsive images with `srcset`; compress existing JPGs/PNGs

**SVG Course Map In HTML:**
- Problem: 200+ line inline SVG in `course-map.html` increases HTML payload
- Files: `course-map.html` lines 59-239
- Cause: SVG embedded directly for interactivity
- Improvement path: Acceptable trade-off for interactivity; could externalize and use `<object>` or lazy-load

## Fragile Areas

**Countdown Timer Date Hardcoding:**
- Files: `assets/js/main.js` line 256
- Why fragile: Event date hardcoded as `'August 16, 2026 07:30:00 GMT-0600'` - easy to forget updating for next year's event
- Safe modification: Search for "2026" across all files when updating year
- Test coverage: None - no automated tests exist

**JSON-LD Event Date Must Match Display:**
- Files: `index.html` lines 24-57 (structured data) vs line 142 (display text)
- Why fragile: Event date appears in JSON-LD schema, display card, and countdown timer - three separate locations to update
- Safe modification: Update all three locations simultaneously; search for date patterns
- Test coverage: None

**Mobile Breakpoint Magic Number:**
- Files: `assets/css/styles.css` (768px used throughout for `@media` queries)
- Why fragile: Breakpoint value repeated in multiple places rather than using CSS variable
- Safe modification: Use CSS custom property like `--breakpoint-mobile` or search/replace 768px consistently
- Test coverage: Manual visual testing only

## Scaling Limits

**Static File Hosting:**
- Current capacity: Adequate for expected traffic (charity golf tournament audience)
- Limit: GitHub Pages has soft limits on bandwidth and build minutes
- Scaling path: If traffic spikes, migrate to CDN-backed hosting (Vercel, Netlify, Cloudflare Pages)

**No Database:**
- Current capacity: N/A - all content is static HTML
- Limit: Cannot store registrations, testimonials, or photos without external services
- Scaling path: Integrate headless CMS (Sanity, Contentful) for content; use Supabase/Firebase for user submissions

## Dependencies at Risk

**GLightbox CDN Dependency:**
- Risk: CDN unavailability would break gallery lightbox
- Impact: Gallery images still viewable at grid size; lightbox feature fails gracefully
- Migration plan: Self-host GLightbox by downloading and placing in `assets/js/`

**Google Fonts Dependency:**
- Risk: Google Fonts unavailability would cause font fallback to system fonts
- Impact: Visual degradation only; content remains accessible
- Migration plan: Self-host fonts using `@font-face` with local copies of Inter and Playfair Display

## Missing Critical Features

**No Analytics:**
- Problem: No way to track visitor behavior, popular pages, or conversion rates
- Blocks: Understanding which pages need improvement; measuring marketing effectiveness

**No Form Confirmation Emails:**
- Problem: Contact form and anniversary submissions have no email confirmation to users
- Blocks: Users have no receipt that their submission was received

**No Registration Data Storage:**
- Problem: Even if payment integration is added, no database to store registrant information
- Blocks: Event management, check-in lists, communication with registrants

**No 404 Error Page:**
- Problem: Missing `404.html` means broken links show GitHub's generic 404
- Blocks: Users hitting bad URLs have poor experience and can't navigate back to site

## Test Coverage Gaps

**No Automated Tests:**
- What's not tested: All JavaScript functionality - countdown timer, mobile menu, gallery filter, form validation, scroll animations
- Files: `assets/js/main.js`, `assets/js/registration.js`, `assets/js/anniversary.js`, `assets/js/course-map.js`
- Risk: Regressions go unnoticed until users report issues
- Priority: Medium - site is simple enough that manual testing covers most cases

**No Visual Regression Tests:**
- What's not tested: CSS changes breaking layout on specific browsers/viewport sizes
- Files: All CSS in `assets/css/styles.css`
- Risk: Mobile layout or dark mode could break without notice
- Priority: Low - limited browser matrix (modern browsers only)

**No Link Checking:**
- What's not tested: External links could go stale (e.g., coloradolawclassic.org registration URL)
- Files: All HTML files
- Risk: Broken links frustrate users and hurt credibility
- Priority: High - registration link is critical path

**No Accessibility Testing:**
- What's not tested: Screen reader compatibility, keyboard navigation completeness, color contrast in all states
- Files: All HTML and CSS
- Risk: Excluding users with disabilities; potential legal compliance issues
- Priority: Medium - some accessibility features are present (skip link, ARIA labels, focus styles)

---

*Concerns audit: 2026-01-19*

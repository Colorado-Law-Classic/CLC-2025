# CLC-2025 Site Improvements

This document details the improvements made to the Colorado Law Classic website based on the visual audit.

## Documentation Rules

These three rules guide all work on this codebase:

1. **Documentation in code** — Include comments explaining what each file/section does and how it fits together with the larger picture
2. **Don't make assumptions** — Ask clarifying questions when intent is unclear
3. **Include these rules** — Reference these principles in documentation as reminders

---

## Improvements Implemented

### 1. Fixed Invisible "Become a Sponsor" Button

**Problem:** The hero section's "Become a Sponsor" button used `.btn-outline` with charcoal border/text, making it nearly invisible on the dark hero background.

**Solution:** Created a new `.btn-outline-light` class with white border/text for use on dark backgrounds.

**Files Modified:**
- `assets/css/styles.css` — Added `.btn-outline-light` variant
- `index.html` — Changed hero button class from `btn-outline` to `btn-outline-light`

---

### 2. Replaced "Your Logo Here" Placeholders

**Problem:** Empty sponsor slots showed "Your Logo Here" text, implying the site was incomplete rather than presenting an opportunity.

**Solution:** Changed placeholders to "Sponsorship Available" with a subtle call-to-action styling that links to the contact email.

**Files Modified:**
- `sponsors.html` — Updated placeholder markup and added mailto links
- `assets/css/styles.css` — Added `.sponsor-available` class

---

### 3. Added Favicon

**Problem:** No favicon caused browsers to show a generic icon, missing a branding opportunity.

**Solution:** Used the existing `clc-logo.jpg` as the favicon across all pages, including Apple touch icon support.

**Files Modified:** All `.html` files

---

### 4. Added Gallery Lightbox

**Problem:** Gallery images could only be viewed at their small grid size, limiting the photo viewing experience.

**Solution:** Integrated GLightbox library (~10KB) to enable full-screen image viewing with navigation between photos.

**Files Modified:**
- `gallery.html` — Added GLightbox CSS/JS and wrapped images in lightbox links
- `assets/css/styles.css` — Updated gallery grid styles to handle anchor wrappers
- `assets/js/main.js` — Added GLightbox initialization and updated gallery filter

---

### 5. Implemented Mobile Hamburger Menu

**Problem:** Navigation links became cramped and hard to tap on mobile devices.

**Solution:** Created a slide-out mobile navigation with hamburger toggle button, visible at viewport widths below 768px.

**Files Modified:**
- All HTML files — Added `.nav-toggle` button and `.nav-links` wrapper
- `assets/css/styles.css` — Added hamburger and mobile nav styles
- `assets/js/main.js` — Added toggle functionality with accessibility support

**Features:**
- Three-line hamburger icon that animates to X when open
- Slide-out menu from right side
- Dark overlay to focus attention on menu
- Closes on: overlay click, Escape key, or link click
- `aria-expanded` attribute for screen reader accessibility
- Body scroll lock when menu is open

---

### 6. Added Comprehensive Code Documentation

**Problem:** Code lacked context about how pieces fit together, making maintenance harder.

**Solution:** Added file-level headers, section comments, and inline documentation to CSS and JS files.

**Files Modified:**
- `assets/css/styles.css` — Added file header, architecture overview, and CSS variable documentation
- `assets/js/main.js` — Added file header with module list and dependency notes

---

## Verification Checklist

1. Run local server: `python3 -m http.server 8080`
2. Desktop view at `http://localhost:8080` — all pages load correctly
3. "Become a Sponsor" button visible in hero section
4. Sponsor placeholders show "Sponsorship Available" with hover effect
5. Favicon appears in browser tab
6. Gallery images open in lightbox when clicked
7. Lightbox allows navigation between photos
8. Mobile view (375px) shows hamburger menu
9. Hamburger menu opens/closes correctly
10. Menu closes when clicking overlay or pressing Escape
11. Code comments are clear and helpful

---

## Files Changed Summary

| File | Changes |
|------|---------|
| `assets/css/styles.css` | Button variant, sponsor placeholders, gallery lightbox styles, mobile nav, documentation |
| `assets/js/main.js` | Mobile menu toggle, GLightbox init, updated gallery filter, documentation |
| `index.html` | Favicon, button class fix, mobile nav markup |
| `sponsors.html` | Favicon, placeholder updates, mobile nav markup |
| `gallery.html` | Favicon, GLightbox integration, lightbox image wrappers, mobile nav markup |
| `faq.html` | Favicon, mobile nav markup |
| `brand-guide.html` | Favicon, mobile nav markup |
| `brand-preview.html` | Favicon |
| `docs/SITE-IMPROVEMENTS.md` | This documentation file (new) |

---

## Phase 2 Improvements (Completed)

Following a frontend-design skill assessment, comprehensive design improvements were implemented with a "Refined Country Club Prestige" aesthetic direction.

### 7. Fixed CTA Card Button Visibility

**Problem:** The sponsors page CTA card's "Contact Us" and "View Brand Guide" buttons used `.btn-outline` which was invisible on the dark background.

**Solution:** Added context-specific CSS rules for buttons inside `.cta-card`:

```css
.cta-card .btn-outline,
.cta-card .btn-outline-light {
  background: transparent;
  border-color: rgba(255, 255, 255, 0.8);
  color: var(--clr-light);
}
```

**Files Modified:**
- `assets/css/styles.css` — Added CTA card button overrides (lines 596-609)
- `sponsors.html` — Restructured buttons into `.cta-buttons` wrapper div

---

### 8. Comprehensive Design System Overhaul

**Problem:** Spacing felt cramped and design lacked modern polish.

**Solution:** Implemented a complete CSS design system with:

**Color Palette (Black + Gold - CU Law School colors):**
- `--clr-black: #0a0a0a` — Deep black
- `--clr-charcoal: #1a1a1a` — Primary dark
- `--clr-gold: #d4af37` — Brand gold
- `--clr-gold-light: #e8c860` — Accent gold
- `--clr-cream: #faf9f7` — Warm background

**Spacing Scale:**
- `--space-xs: 0.5rem`
- `--space-sm: 1rem`
- `--space-md: 1.5rem`
- `--space-lg: 2.5rem`
- `--space-xl: 4rem`
- `--space-2xl: 6rem`

**Shadow System:**
- `--shadow-sm` — Subtle elevation
- `--shadow-md` — Card hover states
- `--shadow-lg` — Modal/overlay depth
- `--shadow-gold` — Brand-tinted glow for gold elements

**Transition Timing:**
- `--transition-fast: 0.15s ease`
- `--transition-base: 0.25s ease`
- `--transition-slow: 0.4s ease`

**Files Modified:**
- `assets/css/styles.css` — Complete overhaul of CSS variables and spacing

---

### 9. Hero Section Enhancement

**Improvements:**
- Radial gold gradient overlays for depth
- Subtle SVG pattern overlay (gold crosses at 3% opacity)
- Glassmorphism card with backdrop blur
- Gold-tinted border on hero card
- Proper button wrapper with flexbox gap

**Files Modified:**
- `assets/css/styles.css` — Hero section styles (lines 319-386)
- `index.html` — Added `.hero-buttons` wrapper div

---

### 10. Typography Refinements

**Improvements:**
- Playfair Display for elegant headings
- Inter for clean body text
- Responsive font sizing with `clamp()`
- Improved line height (1.7 for body, 1.2 for headings)
- Subtle letter-spacing adjustments

---

### 11. Card and Component Polish

**Improvements:**
- Cards have gold accent bar on hover (top border)
- Subtle lift animation on hover (`translateY(-4px)`)
- Refined border colors and shadows
- Consistent border-radius (8px)
- Section dividers using subtle borders

---

## Design Direction Summary

**"Refined Country Club Prestige"** — A sophisticated, luxurious aesthetic befitting a charity golf tournament benefiting CU Law School scholarships:

- Generous whitespace and breathing room
- Elegant serif/sans-serif font pairing
- Strategic gold accents convey prestige
- Dark navigation contrasts with cream backgrounds
- Subtle animations add polish without distraction

---

## Phase 2 Verification Checklist

1. ✅ CTA buttons visible on sponsors page dark background
2. ✅ Improved spacing throughout all pages
3. ✅ Modern, polished visual aesthetic
4. ✅ Consistent gold accent usage
5. ✅ Hero buttons properly visible
6. ✅ Card hover effects working
7. ✅ Typography hierarchy clear and elegant

**Status:** All improvements verified via Playwright screenshots

---

## Phase 2.5: Cleanup & Organization (Completed)

### 12. Moved Brand Guide to Internal Documentation

**Problem:** The brand guide was publicly accessible as a page, but should be internal-only for organizers and sponsors.

**Solution:**
- Converted `brand-guide.html` to markdown format
- Moved to `docs/BRAND-GUIDE.md` for internal access
- Removed public page and link from sponsors page

**Files Modified:**
- `brand-guide.html` — Deleted from public site
- `docs/BRAND-GUIDE.md` — Created (new internal document)
- `sponsors.html` — Removed "View Brand Guide" button from CTA

---

### 13. Updated Contact Email Site-wide

**Problem:** Old email address `info@coloradolawclassic.com` was used throughout the site.

**Solution:** Updated all contact email references to `coloradolawgolf@gmail.com`.

**Files Modified:**
- `sponsors.html` — Sponsorship available links and Contact Us button
- `faq.html` — Contact references in intro and volunteer section
- `register.html` — Contact reference for donations
- `docs/BRAND-GUIDE.md` — Contact section

---

## Phase 3: Pending Improvements

The following improvements have been identified and are awaiting implementation:

### 14. Add More Sponsor Logos

**Status:** PENDING - Awaiting assets

**Task:** Add additional sponsor logos to the sponsors page as they are confirmed.

**Requirements:**
- Collect high-resolution logo files from sponsors
- Optimize images for web (compress, appropriate dimensions)
- Add to appropriate sponsor tier (Presenting, Gold, Silver)
- Update `sponsors.html` with new logo entries

**File Locations:**
- Logos: `assets/img/` (name format: `sponsor-name.jpg` or `.png`)
- Page: `sponsors.html`

---

### 15. Add More Gallery Images

**Status:** PENDING - Awaiting assets

**Task:** Expand the photo gallery with more tournament images.

**Requirements:**
- Collect high-quality photos from previous tournaments
- Optimize images for web (compress to reasonable file size)
- Add `data-year` attribute for year filtering
- Include `data-reveal` for scroll animation

**File Locations:**
- Images: `assets/img/gallery/`
- Page: `gallery.html`

**HTML Format:**
```html
<a href="assets/img/gallery/photo-name.jpg" class="glightbox" data-gallery="gallery">
  <img src="assets/img/gallery/photo-name.jpg" alt="Description" data-year="2025" data-reveal loading="lazy">
</a>
```

---

### 16. Create New Registration Page

**Status:** PENDING - Design and implementation needed

**Task:** Build a custom registration page that doesn't rely on external coloradolawclassic.org link.

**Requirements:**
- Modern, on-brand design matching site aesthetic
- Clear pricing information ($150 per player)
- Team registration (4-person scramble format)
- Individual registration option
- Sponsor registration pathway
- Integration considerations:
  - Payment processing (Stripe, Square, or similar)
  - Form submission handling
  - Confirmation emails

**Considerations:**
- May require backend service or third-party form processor
- Alternative: Embed registration form via iframe if external service used

---

### 17. Modernize Flyer Design

**Status:** PENDING - Design needed

**Task:** Create a new, modern flyer design that matches the website's "Refined Country Club Prestige" aesthetic.

**Current Flyer:** `assets/img/flyer.jpg`

**Requirements:**
- Match website color palette (black + gold)
- Use same typography (Playfair Display + Inter)
- Include:
  - Event date, time, location
  - Registration cost
  - QR code linking to registration
  - Sponsor recognition
  - Contact information
- Provide print-ready PDF (8.5x11" or 11x17")
- Provide web-optimized version for download

**Deliverables:**
- `assets/img/flyer-2026.jpg` — Web preview
- `assets/downloads/flyer-2026.pdf` — Print-ready download

---

### 18. Add Contact Us Section with Form

**Status:** PENDING - Implementation needed

**Task:** Create a contact section with a functional form that emails submissions to coloradolawgolf@gmail.com.

**Requirements:**
- Form fields:
  - Name (required)
  - Email (required)
  - Phone (optional)
  - Subject/Topic (dropdown: General Inquiry, Sponsorship, Registration, Volunteering, Other)
  - Message (required, textarea)
- Form submission options:
  - **Option A:** Formspree.io (free tier, no backend needed)
  - **Option B:** Netlify Forms (if deploying to Netlify)
  - **Option C:** Custom backend/serverless function
- Success/error feedback to user
- Spam protection (honeypot field or reCAPTCHA)

**Placement Options:**
1. Dedicated Contact page (`contact.html`)
2. Section on FAQ page
3. Footer component on all pages

**Recommended Implementation (Formspree):**
```html
<form action="https://formspree.io/f/{form-id}" method="POST">
  <input type="text" name="name" placeholder="Your Name" required>
  <input type="email" name="email" placeholder="Your Email" required>
  <select name="subject">
    <option value="general">General Inquiry</option>
    <option value="sponsorship">Sponsorship</option>
    <option value="registration">Registration</option>
    <option value="volunteering">Volunteering</option>
    <option value="other">Other</option>
  </select>
  <textarea name="message" placeholder="Your Message" required></textarea>
  <button type="submit" class="btn">Send Message</button>
</form>
```

---

## Phase 3 Priority Order

1. **Contact Form** — Quick win, improves user engagement
2. **Flyer Design** — Needed for outreach and promotion
3. **Sponsor Logos** — Add as sponsors confirm
4. **Gallery Images** — Add as photos become available
5. **Registration Page** — Larger effort, may need external services

---

## Files Changed Summary (Updated)

| File | Status | Changes |
|------|--------|---------|
| `assets/css/styles.css` | Active | Design system, button variants, mobile nav, documentation |
| `assets/js/main.js` | Active | Mobile menu, GLightbox, gallery filter, documentation |
| `index.html` | Active | Favicon, hero buttons, mobile nav |
| `sponsors.html` | Active | Sponsors, CTA buttons, removed brand guide link |
| `gallery.html` | Active | GLightbox, mobile nav |
| `faq.html` | Active | Mobile nav, updated email |
| `register.html` | Active | Updated email |
| `brand-guide.html` | **Removed** | Moved to internal docs |
| `docs/BRAND-GUIDE.md` | New | Internal brand documentation |
| `docs/SITE-IMPROVEMENTS.md` | Active | This documentation file |

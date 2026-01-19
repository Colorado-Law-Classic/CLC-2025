# Colorado Law Classic - Detailed Task List

**Last Updated:** January 2026
**Project:** CLC-2025 Website Enhancement

---

## PHASE 1: First Priority

### 1.1 Registration Page with Payment Integration
**Status:** COMPLETE (structure built, payment integration pending)

#### Completed Steps:
- [x] Create `register.html` with multi-step form structure
- [x] Build Step 1: Package selection (Individual $150, Foursome $600)
- [x] Build Step 2: Player information fields (1-4 players based on package)
- [x] Build Step 3: Order review and summary
- [x] Build Step 4: Payment method selection and billing info
- [x] Create `assets/js/registration.js` with form logic
- [x] Add form validation (required fields, email format, phone format)
- [x] Add dynamic player field display based on package
- [x] Add order total calculation
- [x] Add progress step indicator
- [x] Add CSS styling in `assets/css/styles.css`
- [x] Fix pricing: Individual $150, Foursome $600 (no discounts)
- [x] Remove unauthorized add-ons (mulligans, donations)

#### Pending Steps (Payment Integration):
- [ ] Choose payment processor (Zeffy recommended for 0% fees)
- [ ] Create account with chosen processor
- [ ] Get API keys / embed code from processor
- [ ] If Zeffy: Add Zeffy embed or redirect to hosted checkout
- [ ] If PayPal: Add PayPal JS SDK script to register.html
- [ ] If PayPal: Initialize PayPal buttons in #paypal-button-container
- [ ] If PayPal: Handle payment capture and confirmation
- [ ] If Stripe: Add Stripe.js script to register.html
- [ ] If Stripe: Create serverless function for payment intent
- [ ] If Stripe: Mount Stripe Elements in #card-element
- [ ] If Stripe: Handle payment confirmation
- [ ] Test payment flow end-to-end
- [ ] Set up confirmation email (via processor or separate service)
- [ ] Update nav links on all pages to point to new register.html

---

### 1.2 Visual Polish & Micro-interactions
**Status:** COMPLETE

#### Completed Steps:
- [x] Add scroll-triggered animations system in `main.js`
- [x] Create `[data-animate]` attribute handler with IntersectionObserver
- [x] Add animation variants: fade-up, fade-in, slide-left, slide-right, scale
- [x] Add staggered delay support via `data-delay` attribute
- [x] Add card tilt effect on hover (3D perspective) via `[data-tilt]`
- [x] Add gold shimmer effect on hover via `[data-shimmer]`
- [x] Add button pulse animation class `.btn-pulse`
- [x] Add animated counter for statistics via `[data-count]`
- [x] Add parallax effect support via `[data-parallax]`
- [x] Add CSS for all animation states in `styles.css`
- [x] Apply animations to index.html cards
- [x] Apply animations to sponsor logos
- [x] Add "15 Years" animated stat banner to index.html
- [x] Add pulse effect to "Register a Team" button

---

### 1.3 Modernize Tournament Flyer
**Status:** COMPLETE (pending visual review)

#### Completed Steps:
- [x] Create `flyer.html` as print-ready HTML flyer
- [x] Use black + gold color scheme matching website
- [x] Add "Celebrating 15 Years" badge
- [x] Add event title: Colorado Law Classic
- [x] Add tagline: Benefiting Scholarship Funds at CU Law School
- [x] Add date: August 2026 (Date TBA)
- [x] Add location: City Park Golf Course, Denver, Colorado
- [x] Add schedule: Check-in 6:30 AM, Shotgun Start 7:30 AM
- [x] Add Player Registration card: $150 per player
- [x] Add includes list: 18 holes, lunch, gift bag, competitions, beverages
- [x] Add Sponsorship Opportunities card:
  - [x] Platinum Sponsor: $2,500
  - [x] Gold Sponsor: $2,000
  - [x] Hole Sponsor: $1,500
  - [x] Hole Sponsor (without golf): $1,000
- [x] Add QR code placeholder for registration
- [x] Add contact info: coloradolawclassic.org, coloradolawgolf@gmail.com
- [x] Add tax notice about $100 goods/services value
- [x] Add "Print / Save as PDF" button
- [x] Set up 8.5" x 11" print-ready layout with @page rules
- [x] Add gold accent borders top and bottom
- [x] Update index.html link from download to view flyer

#### Pending Steps:
- [ ] User to review flyer.html in browser
- [ ] Get user feedback on design
- [ ] Make any requested adjustments
- [ ] Generate actual QR code pointing to registration URL
- [ ] Replace QR code placeholder with real QR code image

---

### 1.4 15th Anniversary Page with Drag-Drop Upload
**Status:** NOT STARTED

#### Questions to Answer First:
- [ ] Clarify: Is drag-drop for public visitor uploads or admin management?
- [ ] Clarify: What content should be on the page?
- [ ] Clarify: Where should uploaded files be stored? (Need backend service)
- [ ] Clarify: What testimonials exist or need to be collected?

#### Steps (assuming public upload functionality):
- [ ] Create `anniversary.html` page
- [ ] Add page header celebrating 15 years
- [ ] Add intro section about the tournament history
- [ ] Create photo upload zone with drag-drop interface
- [ ] Add file type validation (images only: jpg, png, gif, webp)
- [ ] Add file size validation (max size TBD)
- [ ] Add preview of dropped images before upload
- [ ] Choose file storage solution:
  - [ ] Option A: Cloudinary (free tier available)
  - [ ] Option B: Firebase Storage
  - [ ] Option C: AWS S3
  - [ ] Option D: Formspree file uploads
- [ ] Set up chosen storage account
- [ ] Create upload handler in JavaScript
- [ ] Add upload progress indicator
- [ ] Add success/error feedback messages
- [ ] Create testimonial submission form
- [ ] Add fields: Name, Year attended, Testimonial text
- [ ] Connect testimonial form to storage (Formspree or similar)
- [ ] Add gallery section to display uploaded photos
- [ ] Add testimonials display section
- [ ] Add moderation workflow (if needed for public uploads)
- [ ] Add CSS styling matching site aesthetic
- [ ] Add to navigation on all pages
- [ ] Test upload functionality end-to-end

---

## PHASE 2: Modern UX Features

### 2.1 Sticky Navigation with Scroll-Aware Styling
**Status:** NOT STARTED

#### Steps:
- [ ] Add scroll event listener in `main.js`
- [ ] Track scroll position with requestAnimationFrame for performance
- [ ] Add `.nav-scrolled` class when scrolled past threshold (e.g., 100px)
- [ ] Update CSS for `.nav-scrolled` state:
  - [ ] Reduce padding for compact appearance
  - [ ] Add/enhance background blur effect
  - [ ] Adjust shadow for depth
  - [ ] Optionally reduce logo size
- [ ] Add smooth transition between states
- [ ] Test on mobile devices
- [ ] Test with different page lengths
- [ ] Ensure no layout shift when nav changes

---

### 2.2 Progress Indicator (Reading Bar or Section Dots)
**Status:** NOT STARTED

#### Questions to Answer First:
- [ ] Clarify: Reading progress bar at top, or section dots on side?
- [ ] Clarify: Which pages should have this feature?

#### Steps (assuming reading progress bar):
- [ ] Create progress bar element in HTML (or inject via JS)
- [ ] Position fixed at top of viewport, below nav
- [ ] Add scroll event listener
- [ ] Calculate scroll percentage: (scrollY / (docHeight - viewportHeight)) * 100
- [ ] Update progress bar width based on percentage
- [ ] Style with gold color matching brand
- [ ] Add smooth transition for width changes
- [ ] Hide on pages where not applicable
- [ ] Test across different page lengths

#### Steps (assuming section dots):
- [ ] Identify sections on each page
- [ ] Create dot navigation element
- [ ] Position fixed on right side of viewport
- [ ] Generate dots based on number of sections
- [ ] Track which section is currently in view
- [ ] Highlight active section dot
- [ ] Add click-to-scroll functionality for each dot
- [ ] Add smooth scroll behavior
- [ ] Style dots with gold active state
- [ ] Hide on mobile or make touch-friendly

---

### 2.3 Dark Mode Toggle
**Status:** NOT STARTED

#### Steps:
- [ ] Define dark mode color palette:
  - [ ] --clr-black-dm: (background)
  - [ ] --clr-charcoal-dm: (cards/surfaces)
  - [ ] --clr-gold-dm: (accent, may stay same)
  - [ ] --clr-text-dm: (light text for dark bg)
  - [ ] --clr-text-muted-dm: (secondary text)
- [ ] Create `.dark-mode` class on body/html
- [ ] Add CSS custom property overrides for dark mode
- [ ] Create toggle button/switch UI element
- [ ] Position toggle in nav or footer
- [ ] Add click handler to toggle `.dark-mode` class
- [ ] Save preference to localStorage
- [ ] Check localStorage on page load
- [ ] Check system preference via `prefers-color-scheme`
- [ ] Apply saved or system preference on load
- [ ] Add smooth transition when toggling
- [ ] Test all pages in dark mode
- [ ] Ensure sufficient contrast ratios (WCAG)
- [ ] Test images/logos on dark background

---

### 2.4 Enhanced Countdown (Flip-Clock or Radial Animation)
**Status:** NOT STARTED

#### Questions to Answer First:
- [ ] Clarify: Flip-clock style or radial/circular progress style?

#### Steps (assuming flip-clock style):
- [ ] Update countdown HTML structure for flip cards
- [ ] Create front/back card faces for each digit
- [ ] Add CSS for 3D flip animation
- [ ] Add perspective and transform-style
- [ ] Update JS to animate digit changes
- [ ] Detect when digit changes and trigger flip
- [ ] Add shadow/depth effects to cards
- [ ] Style with black/gold theme
- [ ] Test animation smoothness
- [ ] Ensure accessibility (aria-live already present)

#### Steps (assuming radial/circular style):
- [ ] Replace countdown text with SVG circles
- [ ] Create SVG with stroke-dasharray for progress
- [ ] Calculate progress for days, hours, minutes, seconds
- [ ] Animate stroke-dashoffset as time passes
- [ ] Add labels for each unit
- [ ] Style with gold stroke on dark background
- [ ] Test animation performance
- [ ] Ensure values are readable

---

## PHASE 3: Trust & Social Proof

### 3.1 Add Sponsor Logos as Confirmed
**Status:** PENDING (waiting for sponsor confirmations)

#### Steps:
- [ ] Receive sponsor logo files from user
- [ ] Optimize images for web (compress, appropriate dimensions)
- [ ] Save to `assets/img/` with descriptive filenames
- [ ] Add to `sponsors.html` in appropriate tier section
- [ ] Add to `index.html` sponsor preview (if top-tier)
- [ ] Ensure alt text includes sponsor name
- [ ] Add loading="lazy" attribute
- [ ] Test logo display at various screen sizes
- [ ] Verify sponsor approval for logo usage

---

### 3.2 Add Gallery Images as Available
**Status:** PENDING (waiting for photos)

#### Steps:
- [ ] Receive photos from user
- [ ] Verify photo rights/permissions
- [ ] Optimize images for web (compress, create thumbnails)
- [ ] Save to `assets/img/gallery/` or similar folder
- [ ] Add to `gallery.html` with proper structure:
  ```html
  <a href="full-size.jpg" class="glightbox" data-year="YYYY">
    <img src="thumbnail.jpg" alt="Description" loading="lazy">
  </a>
  ```
- [ ] Set appropriate data-year for filtering
- [ ] Write descriptive alt text for accessibility
- [ ] Test lightbox functionality
- [ ] Test year filtering

---

### 3.3 Sponsor Tier Showcase with Hover Details
**Status:** NOT STARTED

#### Steps:
- [ ] Redesign sponsor section on `sponsors.html`
- [ ] Create tier cards (Platinum, Gold, Hole Sponsor)
- [ ] Add hover state for each sponsor logo
- [ ] Design hover overlay/tooltip showing:
  - [ ] Sponsor name
  - [ ] Brief description (if provided)
  - [ ] Website link (if provided)
- [ ] Add CSS transitions for smooth hover effect
- [ ] Consider card flip or slide-up overlay style
- [ ] Ensure mobile-friendly (tap instead of hover)
- [ ] Test with all current sponsors

---

## SAVE FOR LATER PHASES

### Interactive Course Map (City Park Golf Course Denver)
- [ ] Research available course maps online
- [ ] Find or create map graphic
- [ ] Add interactive hotspots for each hole
- [ ] Show hole number, par, yardage on hover/click
- [ ] Mark special holes (sponsored, competitions)
- [ ] Make mobile-responsive

### Impact Stories Section (Scholarship Recipients)
- [ ] Collect stories from scholarship recipients
- [ ] Get photos and permission to share
- [ ] Design story card layout
- [ ] Create section on appropriate page
- [ ] Add privacy considerations

### Visual Timeline of Tournament History (15 Years)
- [ ] Gather data for each year (winners, amount raised, etc.)
- [ ] Design horizontal or vertical timeline
- [ ] Add milestones and highlights
- [ ] Make interactive with click-to-expand

### Video Hero Background
- [ ] Source video footage (golf course or past events)
- [ ] Compress video for web (720p, optimized codec)
- [ ] Add video element with autoplay, muted, loop
- [ ] Add fallback image for slow connections
- [ ] Ensure video doesn't affect performance
- [ ] Add pause option for accessibility

### Testimonials Carousel
- [ ] Collect testimonials from participants, sponsors, recipients
- [ ] Design carousel/slider component
- [ ] Add auto-rotate with pause on hover
- [ ] Add manual navigation (arrows, dots)
- [ ] Ensure accessibility (keyboard navigation)

### Performance Audit
- [ ] Run Lighthouse audit
- [ ] Optimize images (WebP format, srcset)
- [ ] Add lazy loading to all images
- [ ] Minify CSS and JS for production
- [ ] Check Core Web Vitals (LCP, FID, CLS)
- [ ] Fix any identified issues

### Accessibility Audit
- [ ] Run automated accessibility checker (axe, WAVE)
- [ ] Test keyboard navigation on all pages
- [ ] Test with screen reader
- [ ] Ensure all images have alt text
- [ ] Check color contrast ratios
- [ ] Ensure form labels are associated
- [ ] Fix any WCAG violations

### SEO Enhancements
- [ ] Add JSON-LD schema for Event (already on index.html)
- [ ] Add schema to other relevant pages
- [ ] Verify meta descriptions on all pages
- [ ] Add Open Graph tags to all pages (already present)
- [ ] Submit sitemap to Google Search Console
- [ ] Check for broken links
- [ ] Optimize page titles

---

## IMPORTANT REMINDERS

### Pricing (DO NOT CHANGE WITHOUT EXPLICIT PERMISSION)
- Individual Registration: **$150**
- Foursome: **$600** (4 × $150, no discount)
- Platinum Sponsor: **$2,500**
- Gold Sponsor: **$2,000**
- Hole Sponsor: **$1,500**
- Hole Sponsor (without golf): **$1,000**

### Guidelines
1. **Don't make assumptions** — Ask clarifying questions when intent is unclear
2. **Documentation in code** — Include comments explaining what each section does
3. **No unauthorized business decisions** — Never add discounts, change prices, or create packages without explicit approval

### Contact
- Email: coloradolawgolf@gmail.com
- Website: coloradolawclassic.org

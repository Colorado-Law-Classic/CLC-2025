# Codebase Structure

**Analysis Date:** 2026-01-19

## Directory Layout

```
clc-2025/
├── assets/                   # Static assets (CSS, JS, images)
│   ├── css/
│   │   └── styles.css        # Single stylesheet for entire site
│   ├── js/
│   │   ├── main.js           # Shared JS loaded on all pages
│   │   ├── anniversary.js    # Anniversary page features
│   │   ├── course-map.js     # Course map interactivity
│   │   └── registration.js   # Registration form wizard
│   └── img/
│       ├── gallery/          # Tournament photos by year
│       └── *.jpg|*.png       # Logos, sponsor images, flyer
├── docs/                     # Project documentation
├── archive/                  # Previous implementations (React, WordPress)
├── .github/
│   └── workflows/
│       └── deploy.yml        # GitHub Pages deployment
├── .planning/                # GSD planning documents
│   └── codebase/             # Codebase analysis docs
├── *.html                    # All HTML pages at root level
├── CLAUDE.md                 # Claude Code instructions
└── README.md                 # Project readme
```

## Directory Purposes

**`assets/`:**
- Purpose: All static resources the site depends on
- Contains: CSS, JavaScript, images, future video
- Key files: `css/styles.css`, `js/main.js`

**`assets/css/`:**
- Purpose: Stylesheet storage
- Contains: Single `styles.css` file (comprehensive)
- Note: No CSS preprocessor - plain CSS with custom properties

**`assets/js/`:**
- Purpose: JavaScript module storage
- Contains: Shared and page-specific scripts
- Key files:
  - `main.js`: Core features loaded everywhere
  - `anniversary.js`: Upload zone, testimonial form
  - `course-map.js`: SVG map interaction
  - `registration.js`: Multi-step form logic

**`assets/img/`:**
- Purpose: Image assets
- Contains: Logos, sponsor images, hero backgrounds
- Key files: `clc-logo.jpg`, `flyer.jpg`

**`assets/img/gallery/`:**
- Purpose: Tournament photos for gallery page
- Contains: Year-organized images (2024, 2025/2026 folders or naming)
- File naming: Descriptive (e.g., `golfers-group.jpg`, `trophy-team.jpg`)

**`docs/`:**
- Purpose: Project documentation and planning notes
- Contains: Brand guide, site improvements log, session notes
- Key files:
  - `BRAND-GUIDE.md`: Colors, typography, imagery guidelines
  - `SITE-IMPROVEMENTS.md`: Changelog and pending work
  - `GEMINI-VEO-SCRIPT.md`: Hero video generation instructions

**`archive/`:**
- Purpose: Preserve previous implementation attempts
- Contains: React version, WordPress Manus version
- Generated: No
- Committed: Yes (for reference)

**`.github/workflows/`:**
- Purpose: CI/CD automation
- Contains: GitHub Actions deployment workflow
- Key files: `deploy.yml` - deploys to GitHub Pages on main branch push

**Root level (`/`):**
- Purpose: All HTML pages live here (no subdirectories for pages)
- Contains: 10 HTML files, project config files

## Key File Locations

**Entry Points:**
- `index.html`: Home page - hero, countdown, event info, sponsors preview
- `register.html`: Registration wizard (payment integration pending)
- `contact.html`: Contact form via Formspree

**Configuration:**
- `CLAUDE.md`: AI assistant instructions for this codebase
- `.github/workflows/deploy.yml`: Deployment configuration
- No `package.json` - this is a static site without npm dependencies

**Core Logic:**
- `assets/js/main.js`: Shared behaviors (nav, mobile menu, dark mode, countdown, animations)
- `assets/css/styles.css`: Complete visual design system

**Testing:**
- No automated tests - static HTML/CSS/JS site
- Manual testing via local server (`npx serve .`)

## Naming Conventions

**Files:**
- HTML: `kebab-case.html` (e.g., `course-map.html`, `brand-preview.html`)
- CSS/JS: `kebab-case` for multi-word files (e.g., `course-map.js`)
- Images: `kebab-case` with descriptive names (e.g., `womble-bond-dickinson.jpg`)
- Docs: `UPPERCASE.md` for primary docs, mixed for session notes

**CSS:**
- Classes: `kebab-case` (e.g., `.nav-toggle`, `.hero-card`, `.sponsor-grid`)
- CSS variables: `--clr-*`, `--space-*`, `--shadow-*`, `--z-*` prefixes

**JavaScript:**
- Variables/functions: `camelCase`
- Constants: `SCREAMING_SNAKE_CASE` (e.g., `CONFIG`, `SCROLL_THRESHOLD`)
- DOM IDs: `kebab-case` (e.g., `#countdown`, `#upload-zone`)
- Data attributes: `kebab-case` (e.g., `data-animate`, `data-filter`)

**Directories:**
- All lowercase, single words preferred (e.g., `assets`, `docs`, `gallery`)

## Where to Add New Code

**New Page:**
1. Create `new-page.html` at project root
2. Copy nav/footer from existing page (e.g., `index.html`)
3. Add page link to nav in ALL existing HTML files (no templating)
4. Add page-specific JS to `assets/js/new-page.js` if needed
5. Reference new JS at bottom of new page's `<body>`

**New Feature (Global):**
1. Add IIFE module to `assets/js/main.js`
2. Use data attributes on HTML elements for JS hooks
3. Add CSS to `assets/css/styles.css` in appropriate section

**New Feature (Page-Specific):**
1. Create `assets/js/feature-name.js`
2. Add `<script src="assets/js/feature-name.js"></script>` to target page
3. Add styles to `assets/css/styles.css` (single stylesheet)

**New Component/Section:**
1. Add HTML markup to relevant page(s)
2. Add CSS to `assets/css/styles.css` with comment section header
3. Add JS to `main.js` or page-specific file if interactive

**New Images:**
- Sponsor logos: `assets/img/sponsor-name.jpg|png`
- Gallery photos: `assets/img/gallery/descriptive-name.jpg`
- General images: `assets/img/descriptive-name.jpg`

**Utilities/Helpers:**
- Add to `assets/js/main.js` as helper function within relevant IIFE
- No separate utils file (site is small enough)

## Special Directories

**`archive/`:**
- Purpose: Historical implementations kept for reference
- Generated: No
- Committed: Yes
- Note: Contains React source, WordPress Manus concepts - do not deploy

**`.planning/`:**
- Purpose: GSD workflow planning documents
- Generated: By planning tools
- Committed: Optional (useful for continuity)

**`docs/screenshots/`:**
- Purpose: Screenshot documentation
- Generated: Manually captured
- Committed: Yes

**`_site/` (deployment):**
- Purpose: Build output for GitHub Pages
- Generated: Yes (by deploy workflow)
- Committed: No (created during CI)

---

*Structure analysis: 2026-01-19*

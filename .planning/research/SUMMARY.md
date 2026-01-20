# Project Research Summary

**Project:** Colorado Law Classic (CLC-2025) Website Polish
**Domain:** Charity golf tournament event website (refinement phase)
**Researched:** 2026-01-19
**Confidence:** HIGH

## Executive Summary

The Colorado Law Classic website is well-built with excellent fundamentals: semantic HTML, good CSS architecture with custom properties, appropriate vanilla JS, and free GitHub Pages hosting. The site already has impressive differentiators (interactive course map, countdown timer, dark mode, anniversary page) that set it apart from typical charity tournament sites. **The current stack is correct. Do not add frameworks.**

The primary issues are not missing features but **broken functionality**: forms that don't submit (invalid Formspree URL), conflicting registration paths (internal form vs external link), and date inconsistencies ("TBA" alongside specific dates in JSON-LD). For a demo where the organizer wants to "show off progress," having broken forms is worse than having fewer features.

The recommended approach is: (1) Fix critical broken functionality first, (2) Standardize on a single registration path, (3) Resolve date inconsistencies, (4) Optionally solve nav/footer duplication with JavaScript includes. This keeps the site simple, maintainable by volunteers, and avoids the complexity trap of over-engineering a 10-page static site.

## Key Findings

### Recommended Stack

**Verdict: Keep vanilla HTML/CSS/JS. No changes needed.**

The site's simplicity is a feature. Zero build complexity means anyone can edit HTML directly. The only legitimate pain point is nav/footer duplication across 10 files, which can be solved with a simple JavaScript includes pattern (not a framework).

**Core technologies (keep as-is):**
- **HTML5/CSS3/Vanilla JS:** Universal, accessible, no build step
- **Google Fonts (Playfair + Inter):** Excellent typography choices, already loaded
- **GLightbox:** Lightweight gallery lightbox (~10KB), already integrated
- **GitHub Pages:** Free, reliable, auto-deploys, SSL included

**Optional addition:**
- **JavaScript-based includes:** Solve nav/footer duplication without build step
- **Formspree:** Fix contact form (free tier: 50 submissions/month)

**Explicitly avoid:**
- React/Vue/Svelte/Next.js (massive overkill)
- Tailwind CSS (current CSS is well-organized)
- TypeScript (only ~550 lines of JS)
- CMS (content changes once per year)

### Expected Features

**Already complete (table stakes):**
- Event info (date, time, location)
- Pricing ($150/player)
- Sponsor recognition (tiered display)
- Mobile responsive (hamburger menu, responsive grid)
- Photo gallery (year filtering + lightbox)
- FAQ (8 questions covered)
- Schedule (check-in 6:30, shotgun 7:30)

**Broken/incomplete (must fix):**
- Contact form (invalid Formspree URL)
- Registration path (conflicting internal/external)
- Photo upload (JavaScript fakes success)
- Terms link (points to #)

**Impressive differentiators (already built):**
- Interactive SVG course map
- Countdown timer with flip animation
- Dark mode toggle
- 15th anniversary celebration page
- 3D card tilt effects

**Defer (v2+):**
- Live scoring/leaderboard
- User accounts
- Custom payment processing
- Mobile app

### Architecture Approach

**Recommendation: JavaScript-based includes (no build step)**

Store nav and footer in a single `components.js` file that injects HTML into placeholder elements. This provides a single source of truth without requiring Node.js, build steps, or changes to GitHub Pages deployment.

**Component boundaries:**
1. **Navigation** (`components.js`) — Site-wide nav, injected into `#site-nav`
2. **Footer** (`components.js`) — Site-wide footer, injected into `#site-footer`
3. **Page content** (individual `.html` files) — Page-specific content
4. **Styles** (`styles.css`) — All styling (unchanged)
5. **Behaviors** (`main.js`) — Interactive features (unchanged)

**Why not 11ty/Jekyll:** Volunteers aren't developers. Adding a build step means someone needs to run `npm install`, debug build errors, and maintain GitHub Actions. For 10 pages, this is over-engineering.

### Critical Pitfalls

1. **Fake/non-functional forms** — Contact form has invalid Formspree URL (email format, not form ID). Registration form alerts "Payment Integration Pending." Fix by using real Formspree endpoint or removing broken forms.

2. **Inconsistent registration path** — Nav links to external site on some pages, internal form on others. Internal form doesn't process payments. Pick ONE path and use it everywhere.

3. **Date inconsistency** — Visible content says "August 2026 (Date TBA)" while JSON-LD says August 16, 2026. Countdown timer targets specific date. FAQ mentions "September weather" for August event. Standardize all dates.

4. **Terms link to nowhere** — Registration form requires agreeing to terms that don't exist (`href="#"`). Either create terms page or remove requirement.

5. **Missing 404 page** — Users hitting bad URLs see GitHub Pages default error. Create branded 404.html.

## Implications for Roadmap

Based on research, suggested phase structure:

### Phase 1: Critical Fixes

**Rationale:** Broken functionality undermines demo credibility more than missing features
**Delivers:** Working contact form, consistent registration, accurate dates
**Addresses:** All "must fix" items from features audit
**Avoids:** Pitfalls 1-3 (fake forms, inconsistent registration, date conflicts)

Specific tasks:
- Fix Formspree URL (needs real form ID, not email)
- Decide: external registration ONLY, or finish internal form
- Update all "TBA" references to match JSON-LD date (August 16)
- Fix FAQ "September weather" to "August weather"

### Phase 2: Technical Polish

**Rationale:** Professional touches that indicate quality without new features
**Delivers:** Custom 404, proper favicon, clean console, terms page
**Uses:** Existing stack (just adding files)
**Implements:** Standard web practices

Specific tasks:
- Create branded 404.html
- Generate proper favicon set (ICO/PNG/SVG)
- Create terms and conditions page
- Remove console.log statements
- Verify all referenced assets exist (hero video?)

### Phase 3: Nav/Footer Centralization (Optional)

**Rationale:** Reduces maintenance burden for future updates
**Delivers:** Single source of truth for nav/footer across 10 pages
**Uses:** Vanilla JavaScript (components.js)
**Implements:** JavaScript includes pattern from architecture research

Specific tasks:
- Create `assets/js/components.js` with nav/footer HTML
- Update all 10 HTML files with placeholder elements
- Handle active nav state highlighting
- Add CSS to prevent FOUC

### Phase 4: Content Enhancements

**Rationale:** Quick wins that improve demo impression
**Delivers:** Social proof, completeness
**Addresses:** Differentiator features from FEATURES.md

Specific tasks:
- Add 2-3 hardcoded testimonials
- Add social links in footer
- Decide on photo upload (fix or remove)
- Add hero video OR remove video element

### Phase Ordering Rationale

- **Phase 1 first:** Broken things look worse than missing things. Fix what exists before adding more.
- **Phase 2 before Phase 3:** Technical polish is lower effort and independent of architecture changes.
- **Phase 3 optional:** The duplication problem is documented in CLAUDE.md. It's annoying but not broken.
- **Phase 4 last:** Content additions are nice-to-have once foundation is solid.

### Research Flags

**Phases needing no additional research:**
- **Phase 1 (Critical Fixes):** Straightforward fixes, patterns well-documented
- **Phase 2 (Technical Polish):** Standard web practices, no complexity
- **Phase 3 (Nav Centralization):** Pattern provided in architecture research

**Potential research needed:**
- **Formspree setup:** May need to verify exact configuration (free tier limits, AJAX vs form action)
- **Terms content:** May need legal template for event liability/refund policy

## Confidence Assessment

| Area | Confidence | Notes |
|------|------------|-------|
| Stack | HIGH | Established patterns, direct codebase analysis |
| Features | MEDIUM | Domain expertise solid; competitor analysis limited (no WebSearch) |
| Architecture | HIGH | Well-established JS includes pattern, tested approach |
| Pitfalls | HIGH | All critical pitfalls verified via direct codebase inspection |

**Overall confidence:** HIGH

The research is based primarily on direct codebase analysis rather than external sources. All critical findings (broken forms, date inconsistencies, registration conflicts) are verifiable in the code.

### Gaps to Address

- **Formspree configuration:** Need to generate actual Formspree form ID during implementation
- **Terms content:** Legal text for event participation terms not provided
- **Hero video:** Need to confirm if video file exists or should be removed
- **Exact event date:** Assuming August 16, 2026 is correct based on JSON-LD; verify with organizer

## Sources

### Primary (HIGH confidence)
- Direct codebase analysis (CLAUDE.md, all HTML/CSS/JS files)
- File content inspection (forms, dates, links verified in source)

### Secondary (MEDIUM confidence)
- Domain expertise for charity event website patterns
- Professional judgment on volunteer maintainability

### Tertiary (LOW confidence)
- Competitor feature analysis (WebSearch unavailable for verification)
- Current industry best practices (2025-2026 trends unverified)

---
*Research completed: 2026-01-19*
*Ready for roadmap: yes*

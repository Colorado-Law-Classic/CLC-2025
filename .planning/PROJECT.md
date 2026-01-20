# Colorado Law Classic Website

## What This Is

A charity golf tournament website for the 15th Annual Colorado Law Classic, benefiting scholarship funds at CU Law School. The site promotes the event, showcases sponsors, provides event details, and (eventually) handles registration. Currently a static HTML/CSS/JS site with solid brand foundation but incomplete functionality and polish.

## Core Value

A professional, polished website that reflects the prestige of the event — one the organizers are proud to share with sponsors and participants.

## Requirements

### Validated

Existing capabilities that work correctly:

- ✓ Navigation with mobile hamburger menu — existing
- ✓ Countdown timer to event date — existing
- ✓ Gallery with year filtering and lightbox — existing
- ✓ Dark mode toggle with persistence — existing
- ✓ Responsive design across breakpoints — existing
- ✓ Sponsor tier display with hover details — existing
- ✓ Brand foundation (colors, typography, spacing) — existing
- ✓ Accessibility basics (skip link, ARIA, focus states) — existing
- ✓ SEO meta tags and JSON-LD structured data — existing

### Active

Current scope — building toward these:

- [ ] Visual polish and brand consistency across all pages
- [ ] Real tournament photography integrated (user will gather)
- [ ] Hero section with proper background (image or gradient, video optional)
- [ ] Fix contact form (Formspree configuration)
- [ ] Fix or remove placeholder photo upload functionality
- [ ] Fix or remove placeholder testimonial submission
- [ ] Decide registration strategy (external link vs. internal form)
- [ ] Consistent date display (resolve TBA vs. specific date)
- [ ] Proper favicon (not logo.jpg)
- [ ] 404 error page with brand styling
- [ ] Flyer page CSS consistency (reduce duplication or accept as print-specific)
- [ ] Code organization (address duplicated nav/footer across 9+ files)

### Out of Scope

- Video hero background — no video asset exists, would require production
- Payment processing integration — external registration link is sufficient for now
- Analytics integration — can add later, not blocking
- Static site generator migration — too much churn for current goals

## Context

**Brownfield project:** Site exists with ~1200 lines of well-architected CSS, working JavaScript modules, and 10 HTML pages. The foundation is solid — this is refinement, not rebuilding.

**Design direction:** "Refined Country Club Prestige" — black + gold (CU Law colors), Playfair Display + Inter typography, generous whitespace.

**Known technical debt:**
- Navigation/footer duplicated across all HTML files (any change requires editing 9+ files)
- Flyer page has 400 lines of inline CSS duplicating brand tokens
- Several forms simulate success but don't actually submit data

**Assets situation:**
- Tournament photos exist but need to be gathered from organizer
- Only 3 sponsor logos currently in repo
- No hero video (aspirational only)

## Constraints

- **Architecture**: Static HTML/CSS/JS — no build step, no templating system
- **Hosting**: GitHub Pages auto-deploys from main branch
- **Timeline**: Steady pace, want demo-worthy progress within a few weeks
- **Assets**: Photos need gathering, video not available

## Key Decisions

| Decision | Rationale | Outcome |
|----------|-----------|---------|
| Keep static architecture | Works well, no need to introduce complexity | — Pending |
| External registration link | Avoids payment integration complexity | — Pending |
| Address nav duplication later | Visual polish is higher priority than code organization | — Pending |

---
*Last updated: 2026-01-19 after initialization*

# Roadmap: Colorado Law Classic v1 Polish

**Created:** 2026-01-19
**Target:** Demo-worthy progress within 2-3 weeks
**Milestone:** v1 Polish (fix broken functionality, visual consistency)

## Overview

4 phases focusing on fixing what's broken before adding anything new. Each phase is independently shippable and progressively improves the site.

| Phase | Name | Goal | Status |
|-------|------|------|--------|
| 1 | Critical Fixes | Working forms, consistent paths | ✓ Complete |
| 2 | Technical Polish | Professional touches | Pending |
| 3 | Nav Centralization | Single source of truth | Pending |
| 4 | Content Enhancements | Demo impressions | Pending |

## Phase 1: Critical Fixes ✓

**Status:** Complete (2026-01-20)
**Goal:** Make broken things work

**Plans:** 2 plans (Wave 1 - parallel)

Plans:
- [x] 01-01-PLAN.md — Content fixes (registration path, dates, FAQ weather)
- [⊘] 01-02-PLAN.md — Contact form Formspree fix (deferred by user choice)

### Deliverables

1. ~~**Fix contact form**~~ — Deferred (user chose to leave as placeholder)
2. **Standardize registration** ✓ — All pages use external coloradolawclassic.org
3. **Resolve date conflicts** ✓ — All dates show August 16, 2026
4. **Fix FAQ weather** ✓ — August weather reference

### Requirements Covered

- CRIT-01: Contact form submits — **Deferred**
- CRIT-02: Registration path consistent ✓
- CRIT-03: Date references consistent ✓
- CRIT-04: FAQ weather matches ✓

### Success Criteria

- [ ] Contact form submits and receives confirmation — *deferred*
- [x] Every "Register" button/link goes to same destination
- [x] No "TBA" visible if date is set
- [x] FAQ references correct month

---

## Phase 2: Technical Polish

**Goal:** Professional finishing touches

**Why second:** Low effort, high impact. These are quick wins that signal attention to detail.

### Deliverables

1. **Create 404.html** — Branded error page matching site design
2. **Generate favicon** — Proper ICO/PNG/SVG favicon set
3. **Create terms.html** — Basic event terms and conditions page
4. **Clean console** — Remove debug console.log statements
5. **Verify assets** — Ensure all referenced images/videos exist

### Requirements Covered

- TECH-01: 404 page exists
- TECH-02: Proper favicon
- TECH-03: Terms page exists
- TECH-04: Clean console
- TECH-05: All assets exist

### Success Criteria

- [ ] /nonexistent-page shows branded 404
- [ ] Favicon displays in browser tab
- [ ] Terms link in footer works
- [ ] Browser console has no errors or debug logs
- [ ] No broken image placeholders

---

## Phase 3: Nav/Footer Centralization

**Goal:** Single source of truth for nav and footer

**Why third:** This is technical debt reduction, not user-facing improvement. Do after visible fixes are done. Optional if time is tight.

### Deliverables

1. **Create components.js** — Nav and footer HTML in JavaScript template literals
2. **Update HTML files** — Replace nav/footer with placeholder elements
3. **Handle active state** — Nav highlighting based on current page
4. **Prevent FOUC** — CSS to hide placeholders until JS loads

### Requirements Covered

- ARCH-01: Nav single source
- ARCH-02: Footer single source
- ARCH-03: Active state works
- ARCH-04: No FOUC

### Success Criteria

- [ ] Changing nav in one place updates all pages
- [ ] Changing footer in one place updates all pages
- [ ] Current page highlighted in nav
- [ ] No flash of empty space on page load

---

## Phase 4: Content Enhancements

**Goal:** Impressive demo additions

**Why last:** These are "nice to have" once the foundation is solid.

### Deliverables

1. **Add testimonials** — 2-3 hardcoded quotes from past participants
2. **Add social links** — Footer links to any social presence
3. **Resolve photo upload** — Either make it work or remove it
4. **Hero background** — Proper hero with image or gradient (video optional)

### Requirements Covered

- CONT-01: Testimonials displayed
- CONT-02: Social links present
- CONT-03: Photo upload resolved
- CONT-04: Hero background proper

### Success Criteria

- [ ] Homepage shows testimonial(s)
- [ ] Footer has social icons (if applicable)
- [ ] Photo upload either works or is removed
- [ ] Hero section looks polished (no placeholder)

---

## Dependencies

```
Phase 1 ─────► Phase 2 ─────► Phase 3 ─────► Phase 4
(Critical)    (Polish)       (Architecture)  (Content)

Phase 3 is optional. Can skip to Phase 4 if time is tight.
```

## Decision Points

| Before Phase | Decision Needed |
|--------------|-----------------|
| Phase 1 | External registration only, or finish internal form? |
| Phase 1 | Confirm event date is August 16, 2026 |
| Phase 3 | Skip nav centralization if time pressure? |
| Phase 4 | Does organizer have social accounts to link? |
| Phase 4 | Has organizer gathered tournament photos? |

## Risk Mitigation

| Risk | Impact | Mitigation |
|------|--------|------------|
| Formspree configuration unclear | Phase 1 blocked | Research Formspree docs during planning |
| No terms content provided | Phase 2 blocked | Use generic event terms template |
| Photos not gathered yet | Phase 4 delayed | Proceed with placeholder or skip |
| Video doesn't exist | Non-issue | Remove video element, use image |

---
*Roadmap created: 2026-01-19*
*Last updated: 2026-01-20 after Phase 1 execution*

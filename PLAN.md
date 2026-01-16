# Colorado Law Classic 2026 Website Plan

## Project Goal

Create a modern, stylish, cutting-edge website for the 15th Annual Colorado Law Classic (2026) that can be hosted on GitHub Pages.

---

## Current State

### What We Have
- **Logo**: Black and white mountain silhouette with "COLORADO LAW CLASSIC" text
- **Photos**: Denver skyline shots, group photos at City Park Golf Course, award ceremony images
- **Previous site**: Basic React app with placeholder content, dated to 2025
- **Domain**: coloradolawclassic.org (currently pointing elsewhere)

### What Needs to Change
- Update from 14th Annual (2025) → 15th Annual (2026)
- Update event date to August 2026 (exact date TBD)
- Modernize visual design
- Configure for GitHub Pages hosting
- Potentially: new logo and flyer (noted for future)

---

## Brand Foundation

### Confirmed Brand Elements
| Element | Value | Source |
|---------|-------|--------|
| Primary Color | Black | Logo, CU Law |
| Accent Color | Gold | CU Law affiliation |
| Logo Motif | Mountain silhouette (3 peaks) | Existing logo |
| Tone | Professional + approachable | Legal charity golf event |

### Open Questions (Need Your Input)
1. **Event date for 2026** - What Sunday in August?
2. **Are registration prices changing?** - Currently $150/player, $600/foursome
3. **Are sponsorship tiers changing?** - Currently Platinum $2500, Gold $2000, Hole $1500/$1000
4. **Logo** - Keep current or explore refresh? (noted: hold for now)
5. **Photography** - Do you have additional photos beyond what's in the repo?
6. **Any new sections or features** needed on the site?

---

## Technical Approach

### Hosting: GitHub Pages
- Free static hosting from this repository
- URL will be: `https://redeemedduck.github.io/CLC-2025/` (or custom domain)
- Requires: Vite config update + GitHub Actions workflow
- Supports custom domain if desired

### Tech Stack (Already in Place)
- React 18 + TypeScript
- Vite (build tool)
- Tailwind CSS (styling)
- Framer Motion (animations - already installed)
- Radix UI components (already installed)

### What Needs to Be Added
- GitHub Actions deployment workflow
- React Router (for proper URL paths)
- 404.html fallback (GitHub Pages SPA requirement)

---

## Phased Implementation Plan

### Phase 1: GitHub Pages Setup
**Goal**: Get the existing site deploying to GitHub Pages

Tasks:
- [ ] Update `vite.config.ts` with correct base path
- [ ] Create `.github/workflows/deploy.yml`
- [ ] Add 404.html for SPA routing
- [ ] Test deployment

**Deliverable**: Live site at GitHub Pages URL (even if design is old)

---

### Phase 2: Content Updates
**Goal**: Update all 2025 references to 2026

Tasks:
- [ ] Change "14th Annual" → "15th Annual" across all components
- [ ] Update event date once confirmed
- [ ] Review and update any other stale content

**Deliverable**: Accurate 2026 content

---

### Phase 3: Brand & Design System
**Goal**: Establish visual design before building pages

Tasks:
- [ ] Create visual brand preview (HTML page you can view in browser)
- [ ] Define color palette with actual swatches
- [ ] Select and preview typography
- [ ] Design button styles, card styles, spacing system
- [ ] Get your approval before proceeding

**Deliverable**: Brand preview page you can review and approve

---

### Phase 4: Design Implementation
**Goal**: Apply approved design to all pages

Tasks:
- [ ] Update Tailwind config with brand colors
- [ ] Redesign hero section
- [ ] Redesign navigation
- [ ] Update all page components with new design
- [ ] Add animations and interactions
- [ ] Mobile responsiveness check

**Deliverable**: Fully redesigned site

---

### Phase 5: Routing & Polish
**Goal**: Professional URL structure and final polish

Tasks:
- [ ] Implement React Router with proper paths
- [ ] Add page transitions
- [ ] SEO metadata
- [ ] Performance optimization
- [ ] Cross-browser testing

**Deliverable**: Production-ready site

---

### Future (Not In Scope Now)
- New logo design
- New flyer design
- Custom domain setup
- Payment integration updates

---

## Decision Points

Before I proceed with each phase, I will stop and get your approval:

1. **After Phase 1**: "Site is live on GitHub Pages - want me to continue?"
2. **After Phase 3**: "Here's the brand preview - does this direction work?"
3. **After Phase 4**: "Design is implemented - review and feedback?"

---

## Open Items Needing Your Input

Please answer these when ready:

1. **Event date 2026**: _________________
2. **Pricing changes**: Yes / No / TBD
3. **Additional photos to include**: Yes (I'll provide) / No (use existing)
4. **Any new pages or features**: _________________
5. **Ready to proceed with Phase 1?**: Yes / No

---

## Repository Structure (Current)

```
CLC-2025/
├── src/                    # React source code
│   ├── components/         # Page and UI components
│   ├── hooks/              # Custom React hooks
│   ├── lib/                # Utilities
│   └── assets/             # CSS, images
├── public/                 # Static assets
├── archive/                # Old site versions (preserved)
├── .github/workflows/      # (empty - needs deploy.yml)
├── package.json
├── vite.config.ts
├── tailwind.config.js
├── CLAUDE.md
└── PLAN.md                 # This document
```

---

## Next Step

**Waiting for your input on the open questions above**, specifically:
- Event date for 2026
- Confirmation to proceed with Phase 1 (GitHub Pages setup)

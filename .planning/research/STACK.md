# Technology Stack Recommendation

**Project:** Colorado Law Classic (Charity Golf Tournament Website)
**Researched:** 2026-01-19
**Confidence:** HIGH (based on established patterns and codebase analysis)

## Executive Summary

**Verdict: Keep vanilla HTML/CSS/JS. Do NOT add a framework.**

The current stack is appropriate for this project. Static HTML/CSS/JS is the correct choice for a small charity event website with:
- 9 pages (excluding archive)
- Annual content updates
- No dynamic data requirements
- GitHub Pages hosting (free, reliable)

The only legitimate pain point is nav/footer duplication across pages. The solution is a lightweight build step or web components, NOT a JavaScript framework.

---

## Current Stack Assessment

| Technology | Status | Verdict |
|------------|--------|---------|
| Vanilla HTML | Appropriate | KEEP |
| Vanilla CSS with custom properties | Excellent | KEEP |
| Vanilla JS with IIFEs | Good | KEEP |
| Google Fonts (Playfair + Inter) | Good | KEEP |
| GLightbox (CDN) | Good | KEEP |
| GitHub Pages | Excellent | KEEP |

### What's Working Well

1. **Zero build complexity** - Anyone can edit HTML files directly
2. **Fast page loads** - No framework overhead, minimal JS
3. **Excellent browser support** - Works everywhere
4. **Free hosting** - GitHub Pages auto-deploys from main branch
5. **Good CSS architecture** - Custom properties, consistent spacing scale
6. **Accessibility features** - Skip links, ARIA attributes, semantic HTML
7. **SEO ready** - JSON-LD structured data, meta tags, canonical URLs

### The One Real Pain Point

**Nav/footer duplication across 9 HTML files**

From CLAUDE.md:
> "No templating system: Each HTML page duplicates the nav and footer. When updating nav links or footer content, change all .html files."

This is a maintenance burden but NOT severe enough to justify adding a framework.

---

## Recommended Stack (No Major Changes)

### Core (Keep As-Is)

| Technology | Version | Purpose | Why Keep |
|------------|---------|---------|----------|
| HTML5 | N/A | Page structure | Universal, accessible, SEO-friendly |
| CSS3 | N/A | Styling | Custom properties already well-organized |
| Vanilla JS | ES6+ | Interactivity | Small footprint, works everywhere |
| Google Fonts | N/A | Typography | Playfair + Inter are excellent choices |
| GLightbox | 3.x | Gallery lightbox | Already integrated, lightweight (~10KB) |

### Hosting (Keep As-Is)

| Technology | Purpose | Why Keep |
|------------|---------|----------|
| GitHub Pages | Static hosting | Free, reliable, auto-deploys, SSL included |
| GitHub Actions | Deploy pipeline | Already configured (.github/workflows/deploy.yml) |

### Optional Addition: Solve Nav/Footer Duplication

Choose ONE approach (recommendation in order of preference):

#### Option A: Web Components (Recommended)

**What:** Define custom elements for nav and footer in JavaScript.

**Pros:**
- No build step
- Native browser support
- Progressive enhancement (works without JS)
- Single source of truth for nav/footer

**Cons:**
- Slight delay on first paint (JS must execute)
- Requires JavaScript enabled (nav still works as links)

**Complexity:** Low
**Implementation time:** 2-4 hours

Note: When implementing, use DOM APIs (createElement, appendChild) rather than string-based HTML injection to avoid XSS risks.

#### Option B: Build-time includes (11ty)

**What:** Use 11ty (Eleventy) as a static site generator with includes.

**Pros:**
- True partials/includes
- Zero client-side JS required
- Markdown support for content pages
- Very fast builds

**Cons:**
- Requires Node.js for development
- Build step needed before deploy
- Learning curve (though minimal)

**Complexity:** Medium
**Implementation time:** 4-8 hours initial setup

#### Option C: Simple fetch-based includes

**What:** Use JavaScript to fetch and inject nav/footer HTML fragments.

**Pros:**
- No build step
- Very simple to implement

**Cons:**
- Flash of unstyled/missing content
- Extra HTTP requests
- SEO concerns (content loaded via JS)

**Complexity:** Low
**NOT RECOMMENDED** due to SEO implications

---

## What NOT to Adopt

### Do NOT Add: React/Vue/Svelte/Next.js

**Why not:**
- Massive overkill for 9 static pages
- Adds build complexity
- Increases bundle size
- Requires Node.js knowledge to maintain
- Charity volunteers may not have JS framework experience
- No dynamic data that justifies the overhead

### Do NOT Add: Tailwind CSS

**Why not:**
- Current CSS is already well-organized with custom properties
- Would require rebuilding all styles
- Adds build step and PostCSS pipeline
- Current approach is maintainable and readable

### Do NOT Add: TypeScript

**Why not:**
- Very little JavaScript in this project (~550 lines)
- No complex data structures or APIs
- Adds compilation step
- Overkill for countdown timer and gallery filter

### Do NOT Add: CMS (WordPress, Contentful, etc.)

**Why not:**
- Content changes ~once per year
- No non-technical editors requiring a CMS
- Would add hosting costs and complexity
- Current HTML editing is sufficient

---

## For Contact Form (Pending Task)

The site needs a contact form per SITE-IMPROVEMENTS.md. Recommended approach:

### Formspree (Recommended)

**What:** Third-party form backend, free tier available

**Pros:**
- No backend to build or maintain
- Free for low volume (50 submissions/month)
- Works with static sites
- Spam protection included

**Confidence:** HIGH (established service, documented in current improvement plans)

### Alternative: Netlify Forms

Only if migrating hosting to Netlify (not recommended - GitHub Pages works fine)

---

## For Payment Integration (Future Registration)

If custom registration with payments is needed later:

### Stripe Checkout (Recommended)

**What:** Redirect to Stripe-hosted payment page

**Pros:**
- No PCI compliance burden
- Professional, trusted checkout flow
- Works with static sites (redirect-based)

**Cons:**
- 2.9% + $0.30 per transaction
- Requires Stripe account setup

### Alternative: Continue using external registration

The current approach (linking to coloradolawclassic.org for registration) works fine and avoids payment complexity entirely.

---

## Technology Lifecycle Assessment

| Technology | Status | Outlook |
|------------|--------|---------|
| Vanilla HTML/CSS/JS | Stable | Evergreen - will work for decades |
| GitHub Pages | Stable | Reliable, free tier adequate |
| Google Fonts | Stable | Established service |
| GLightbox | Active | Last update 2023, stable library |
| CSS Custom Properties | Stable | Excellent browser support (98%+) |

No technologies in the current stack are at risk of deprecation.

---

## Migration Path (If Ever Needed)

If the site's needs dramatically change in the future:

**Trigger for reconsidering:**
- 20+ pages with shared content
- Multiple content editors needing CMS
- Dynamic features requiring API calls
- E-commerce with complex product catalog

**Then consider:**
- Astro (static-first, partial hydration)
- 11ty (simple static site generator)

**Still avoid:**
- Full SPA frameworks (React, Vue, etc.)

---

## Confidence Assessment

| Recommendation | Confidence | Rationale |
|----------------|------------|-----------|
| Keep vanilla stack | HIGH | Appropriate for project size and needs |
| Avoid frameworks | HIGH | Established best practice for small static sites |
| Web Components for nav/footer | MEDIUM | Modern approach, requires testing |
| Formspree for contact form | HIGH | Documented in current improvement plans |
| Keep GitHub Pages | HIGH | Working well, no reason to change |

---

## Summary

**Bottom line:** The current stack is correct. The site is well-built with good CSS architecture, semantic HTML, and appropriate tooling.

The only worthwhile improvement is solving nav/footer duplication with Web Components (Option A) - a ~4 hour investment that maintains the "no build step" simplicity while creating a single source of truth for shared markup.

Do not be tempted to "modernize" with frameworks. This site's simplicity is a feature, not a bug.

# Architecture Patterns for Static Charity Websites

**Project:** Colorado Law Classic
**Researched:** 2026-01-19
**Context:** 10 HTML pages, duplicated nav/footer, GitHub Pages hosting

## The Problem

The site currently has 10 HTML files at root, each containing:
- **Navigation block** (~26 lines, lines 27-52 in most files)
- **Footer block** (~5 lines)
- **Head metadata** (~20 lines of CSS links, fonts, meta tags)

When the nav changes (adding a page, changing link text, updating external URL), all 10 files need manual editing. This is error-prone and tedious for a volunteer-run project.

---

## Solution Options (Simple to Complex)

### Option 1: Accept the Duplication (Status Quo)

**What:** Keep editing all files manually.

**Pros:**
- No new tools to learn
- No build step to break
- Anyone can edit HTML directly
- Works perfectly on GitHub Pages

**Cons:**
- Nav changes require editing 10 files
- Easy to miss a file
- Inconsistencies creep in over time

**Best for:** Sites with < 5 pages that rarely change nav.

**Verdict for CLC:** Not recommended. With 10 pages and anticipated updates (sponsors, dates, links), the maintenance burden is real.

---

### Option 2: JavaScript-Based Includes (Recommended)

**What:** Store nav and footer as JavaScript that injects HTML into placeholder elements.

**Implementation:**
```html
<!-- In each HTML file -->
<nav id="site-nav"></nav>

<!-- Before closing body -->
<script src="assets/js/components.js"></script>
```

```javascript
// assets/js/components.js
// Security note: This pattern is safe because the HTML content is hardcoded
// in this file (not from user input). For dynamic content, use DOM methods
// or a sanitizer library like DOMPurify.
(function() {
  const navHTML = `
    <div class="container">
      <a href="index.html" class="brand" data-nav>
        <img src="assets/img/clc-logo.jpg" alt="Colorado Law Classic logo" class="logo-image">
        <span>Colorado Law Classic</span>
      </a>
      <!-- ... rest of nav ... -->
    </div>
  `;

  const footerHTML = `
    <div class="container">
      &copy; 2026 Colorado Law Classic. All rights reserved.
    </div>
  `;

  const nav = document.getElementById('site-nav');
  const footer = document.getElementById('site-footer');

  // Safe: content is hardcoded, not from external/user input
  if (nav) nav.insertAdjacentHTML('afterbegin', navHTML);
  if (footer) footer.insertAdjacentHTML('afterbegin', footerHTML);
})();
```

**Pros:**
- Single source of truth for nav/footer
- No build step required
- Works on GitHub Pages
- Existing volunteers can understand it
- Graceful degradation possible (noscript fallback)

**Cons:**
- Flash of unstyled content (FOUC) possible
- SEO: Search engines may not see nav content (minor concern for charity site)
- Requires JavaScript enabled

**Mitigations:**
- Load components.js at top of body, before main.js
- Add `visibility: hidden` to nav placeholder, then show after injection
- SEO: Search engines increasingly execute JS; internal links still work

**Complexity:** LOW
**Confidence:** HIGH (well-established pattern)

---

### Option 3: Fetch-Based HTML Includes

**What:** Store nav/footer as separate HTML files, fetch and inject them.

**Implementation:**
```html
<!-- In each HTML file -->
<nav id="site-nav"></nav>

<script>
  fetch('partials/nav.html')
    .then(r => r.text())
    .then(html => {
      // Safe: partials are developer-controlled files
      document.getElementById('site-nav').insertAdjacentHTML('afterbegin', html);
    });
</script>
```

```html
<!-- partials/nav.html -->
<div class="container">
  <a href="index.html" class="brand" data-nav>
    <!-- ... nav content ... -->
  </a>
</div>
```

**Pros:**
- Clean separation: HTML stays as HTML
- Easier to edit nav.html than JavaScript template strings
- Single source of truth

**Cons:**
- Requires HTTP server (fetch won't work with `file://`)
- Two HTTP requests per page load (nav.html, footer.html)
- Same SEO/FOUC concerns as Option 2
- CORS issues if opened as local file

**Why not for CLC:** The team sometimes previews by double-clicking HTML files. This approach breaks that workflow.

**Complexity:** LOW
**Confidence:** HIGH

---

### Option 4: Build-Time Templating (11ty/Jekyll)

**What:** Use a static site generator to compile templates into HTML at build time.

**Implementation (11ty example):**
```
src/
  _includes/
    nav.njk
    footer.njk
  _layouts/
    base.njk
  pages/
    index.njk
    contact.njk
```

```njk
<!-- _layouts/base.njk -->
<!DOCTYPE html>
<html>
<head>...</head>
<body>
  {% include "nav.njk" %}
  {{ content | safe }}
  {% include "footer.njk" %}
</body>
</html>
```

**Pros:**
- Industry standard for static sites
- True templating with variables, loops, conditionals
- Output is plain HTML (SEO perfect, no FOUC)
- Many hosting platforms support build steps

**Cons:**
- Requires Node.js (11ty) or Ruby (Jekyll) installed
- Build step required before deployment
- Learning curve for volunteers unfamiliar with SSGs
- GitHub Pages workflow changes (needs GitHub Actions)

**GitHub Pages integration:**
- Jekyll: Native support, but Ruby-based
- 11ty: Requires GitHub Actions workflow

**Complexity:** MEDIUM-HIGH
**Confidence:** HIGH (mature tooling)

---

### Option 5: Web Components / Custom Elements

**What:** Define custom HTML elements that encapsulate nav/footer.

**Implementation:**
```html
<site-nav></site-nav>
<main>...</main>
<site-footer></site-footer>

<script src="assets/js/components.js"></script>
```

```javascript
// assets/js/components.js
class SiteNav extends HTMLElement {
  connectedCallback() {
    // Safe: hardcoded content, not from external input
    const template = document.createElement('template');
    template.innerHTML = `<nav class="nav">...</nav>`;
    this.appendChild(template.content.cloneNode(true));
  }
}
customElements.define('site-nav', SiteNav);
```

**Pros:**
- Modern, standards-based approach
- Encapsulation (styles can be scoped)
- Reusable across projects

**Cons:**
- More complex than simple JS injection
- Same SEO/FOUC concerns
- May confuse less technical volunteers
- Overkill for just nav/footer

**Complexity:** MEDIUM
**Confidence:** HIGH (standard browser API)

---

### Option 6: Server-Side Includes (SSI)

**What:** Use server directives to include HTML fragments.

```html
<!--#include file="partials/nav.html" -->
```

**Why not for CLC:** GitHub Pages does not support SSI. Only applicable if self-hosting with Apache/Nginx.

---

## Recommendation for Colorado Law Classic

**Use Option 2: JavaScript-Based Includes**

**Rationale:**

1. **Minimal change to workflow:** No build step, no new tools, no GitHub Actions
2. **Single source of truth:** Nav lives in one JS file
3. **Volunteer-friendly:** Anyone who can edit HTML can edit the JS template
4. **GitHub Pages compatible:** Works exactly as-is
5. **Reversible:** If it doesn't work out, easy to go back to duplicated HTML
6. **Proportionate to problem:** 10 pages don't need a full SSG

**Why not a static site generator:**

The team is volunteers, not professional developers. Adding a build step means:
- Someone needs to run `npm install` and `npm run build`
- GitHub Actions needs setup and maintenance
- Local preview requires `npm run dev`
- Debugging build errors requires SSG knowledge

For 10 pages and occasional nav updates, this is over-engineering.

**The right time to consider 11ty:**
- When you have 20+ pages
- When you need data-driven content (JSON -> HTML)
- When you have complex templating needs
- When the team has developer capacity

---

## Implementation Plan for Option 2

### Phase 1: Create Components File

Create `assets/js/components.js`:
- Extract current nav HTML from index.html
- Extract current footer HTML
- Wrap in a self-executing function
- Export nav and footer injection functions

### Phase 2: Update HTML Files

For each of the 10 HTML files:
1. Replace nav HTML with `<nav id="site-nav" class="nav"></nav>`
2. Replace footer HTML with `<footer id="site-footer"></footer>`
3. Add `<script src="assets/js/components.js"></script>` before main.js

### Phase 3: Handle Active State

Update the nav highlighting logic in main.js to work with injected nav:
- The current logic runs on DOMContentLoaded
- After injection, manually call the highlighting function
- Or: move highlighting into components.js after injection

### Phase 4: Add Loading State

Prevent FOUC:
```css
#site-nav:empty,
#site-footer:empty {
  min-height: 60px; /* approximate nav height */
}
```

---

## Component Boundaries

With this architecture, component responsibilities are:

| Component | Source | Responsibility |
|-----------|--------|---------------|
| Navigation | `components.js` | Site-wide nav, injected into `#site-nav` |
| Footer | `components.js` | Site-wide footer, injected into `#site-footer` |
| Page content | Individual `.html` files | Page-specific content |
| Styles | `styles.css` | All styling (no change) |
| Behaviors | `main.js` | Interactive features (no change) |

---

## Anti-Patterns to Avoid

### Anti-Pattern: Iframe Includes
**What:** Using iframes to embed nav/footer
**Why bad:** Breaks navigation, poor accessibility, styling nightmare

### Anti-Pattern: PHP Includes on GitHub Pages
**What:** Trying to use `<?php include ?>` on GitHub Pages
**Why bad:** GitHub Pages serves static files only, no PHP execution

### Anti-Pattern: Over-Engineering with React/Vue
**What:** Adding a full SPA framework just for nav/footer
**Why bad:** Massive complexity for trivial benefit, breaks accessibility, kills SEO

### Anti-Pattern: Client-Side Routing
**What:** Making navigation a single-page app
**Why bad:** Breaks browser back/forward, deep linking, bookmarks, SEO

---

## Confidence Assessment

| Recommendation | Confidence | Basis |
|----------------|------------|-------|
| JS includes work on GitHub Pages | HIGH | Established pattern, no server requirements |
| 11ty is overkill for 10 pages | HIGH | Professional judgment + maintenance cost analysis |
| FOUC can be mitigated | MEDIUM | Depends on implementation, may need testing |
| SEO impact is minimal | MEDIUM | Search engines execute JS, but degree varies |

---

## Sources

- Codebase analysis: Current nav structure identical across files (verified)
- GitHub Pages documentation: Static hosting, no server-side processing
- Professional experience: Common pattern for small static sites

**Note:** WebSearch unavailable during research. Recommendations based on well-established patterns and direct codebase analysis. The JavaScript includes pattern has been standard practice for static sites for over a decade.

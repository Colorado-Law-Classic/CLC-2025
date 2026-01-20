# Phase 1: Critical Fixes - Research

**Researched:** 2026-01-19
**Domain:** Static site bug fixes (Formspree, content consistency)
**Confidence:** HIGH

## Summary

This phase addresses four critical bugs that undermine site credibility: a broken contact form, inconsistent registration paths, conflicting date references, and incorrect weather information.

Research confirms all issues are straightforward content/configuration fixes requiring no new libraries or architectural changes. The contact form uses an invalid legacy Formspree URL format that has been deprecated. Registration links are inconsistent across pages. Date references conflict between "TBA" text and a specific date (August 16, 2026) in JavaScript/JSON-LD. The FAQ references "September weather" for an August event.

**Primary recommendation:** Fix the Formspree endpoint first (requires account setup), then standardize all content in a single pass through the HTML files.

## Standard Stack

No new libraries required. All fixes use existing HTML/CSS/JS.

### Core (Already in Use)
| Library | Version | Purpose | Status |
|---------|---------|---------|--------|
| Formspree | N/A (service) | Contact form backend | Needs valid endpoint |
| Vanilla JS | ES6+ | Countdown timer | Working correctly |

### No Additional Dependencies
This phase requires zero new dependencies. All fixes are content/configuration changes.

## Architecture Patterns

### Current Form Structure (Contact Page)
```html
<!-- contact.html line 58 - BROKEN -->
<form class="contact-form" action="https://formspree.io/f/coloradolawgolf@gmail.com" method="POST">
```

**Problem:** The URL uses email format inside `/f/` path. Formspree's `/f/` endpoint requires a form ID (alphanumeric code like `xrgvkzpq`), not an email address.

### Correct Formspree Pattern
```html
<!-- Source: Formspree official docs -->
<form class="contact-form" action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
```

Where `YOUR_FORM_ID` is obtained by:
1. Creating a Formspree account at https://formspree.io
2. Creating a new form
3. Copying the form ID from the dashboard

### Registration Link Pattern
The site should use ONE consistent registration approach. Currently found:

| Page | Current Link | Target |
|------|--------------|--------|
| index.html (nav) | `https://coloradolawclassic.org/home/register-here/` | External |
| index.html (hero) | `https://coloradolawclassic.org/home/register-here/` | External |
| index.html (CTA) | `https://coloradolawclassic.org/home/register-here/` | External |
| register.html (nav) | `register.html` | Internal form |
| contact.html (nav) | `https://coloradolawclassic.org/home/register-here/` | External |
| sponsors.html (nav) | `https://coloradolawclassic.org/home/register-here/` | External |
| sponsors.html (CTA) | `https://coloradolawclassic.org/home/register-here/` | External |
| gallery.html (nav) | `https://coloradolawclassic.org/home/register-here/` | External |
| anniversary.html (nav) | `https://coloradolawclassic.org/home/register-here/` | External |
| anniversary.html (CTA) | `https://coloradolawclassic.org/home/register-here/` | External |
| course-map.html (nav) | `https://coloradolawclassic.org/home/register-here/` | External |
| course-map.html (CTA) | `https://coloradolawclassic.org/home/register-here/` | External |
| faq.html (nav) | `https://coloradolawclassic.org/home/register-here/` | External |

**Decision per context:** External registration is preferred. The `register.html` page's nav should link externally like all other pages.

## Don't Hand-Roll

| Problem | Don't Build | Use Instead | Why |
|---------|-------------|-------------|-----|
| Contact form backend | Custom server | Formspree | Already integrated, just needs valid ID |
| Form validation | Custom validation | Browser native + Formspree | HTML5 validation sufficient |
| Registration system | Custom payment | External coloradolawclassic.org | Payment integration not in scope |

## Common Pitfalls

### Pitfall 1: Legacy Formspree URLs
**What goes wrong:** Using email in URL format (`/f/email@example.com`)
**Why it happens:** Old tutorials show deprecated email-based endpoints
**How to avoid:** Always use form ID from Formspree dashboard
**Warning signs:** Form submits but nothing is received; 4xx errors in console

### Pitfall 2: Missing Form Account Setup
**What goes wrong:** Using a placeholder form ID that doesn't exist
**Why it happens:** Developer doesn't have Formspree account access
**How to avoid:** Verify form ID exists and is linked to correct email
**Warning signs:** Form returns Formspree error page after submission

### Pitfall 3: Inconsistent Link Updates
**What goes wrong:** Updating some registration links but missing others
**Why it happens:** Nav is duplicated across all HTML files
**How to avoid:** Use search/replace across all files; verify each page
**Warning signs:** Some pages go to external site, others to internal form

### Pitfall 4: Partial Date Updates
**What goes wrong:** Updating visible text but missing JSON-LD or JS
**Why it happens:** Dates exist in multiple locations with different formats
**How to avoid:** Search for all date references; update systematically
**Warning signs:** Countdown shows different date than page text

## Code Examples

### Fix 1: Contact Form (contact.html line 58)

**Before (BROKEN):**
```html
<form class="contact-form" action="https://formspree.io/f/coloradolawgolf@gmail.com" method="POST">
```

**After (FIXED):**
```html
<form class="contact-form" action="https://formspree.io/f/ACTUAL_FORM_ID" method="POST">
```

Note: `ACTUAL_FORM_ID` must be obtained from Formspree dashboard. Example format: `xrgvkzpq`

### Fix 2: Registration Link Standardization

**Change register.html nav (line 42) from:**
```html
<a href="register.html" class="btn btn-small" data-nav>Register</a>
```

**To:**
```html
<a href="https://coloradolawclassic.org/home/register-here/" target="_blank" rel="noopener" class="btn btn-small" data-nav>Register</a>
```

### Fix 3: Date Consistency

**Locations requiring date review:**

| File | Line | Current Value | Action |
|------|------|---------------|--------|
| index.html | 30 | `"startDate": "2026-08-16T07:30:00-06:00"` | Keep (authoritative) |
| index.html | 142 | `August 2026 (Date TBA)` | Update to `August 16, 2026` |
| register.html | 63 | `August 2026 (TBA)` | Update to `August 16, 2026` |
| flyer.html | 420-421 | `August 2026` + `Date TBA` | Update to `August 16, 2026` |
| main.js | 256 | `August 16, 2026 07:30:00 GMT-0600` | Keep (authoritative) |

**Recommendation:** Use August 16, 2026 everywhere since it's already in JSON-LD and countdown timer.

### Fix 4: FAQ Weather (faq.html line 60)

**Before:**
```html
<p>...Dress in layers for September weather in Denver...</p>
```

**After:**
```html
<p>...Dress in layers for August weather in Denver...</p>
```

## State of the Art

| Old Approach | Current Approach | When Changed | Impact |
|--------------|------------------|--------------|--------|
| Formspree email URLs | Formspree form IDs | 2023 | Email URLs deprecated, may stop working |

**Deprecated:**
- `https://formspree.io/email@example.com` - Legacy format, being phased out
- `https://formspree.io/f/email@example.com` - Invalid hybrid format (current bug)

## Open Questions

1. **Formspree Account Access**
   - What we know: Form needs valid ID from Formspree dashboard
   - What's unclear: Does someone have the coloradolawgolf@gmail.com Formspree account?
   - Recommendation: If no account exists, create one and set up a new form

2. **Exact Event Date**
   - What we know: JSON-LD and countdown use August 16, 2026
   - What's unclear: Is this date confirmed or placeholder?
   - Recommendation: If confirmed, update all "TBA" references; if not, add note to verify

## Detailed File Inventory

### Contact Form Issue (CRIT-01)
| File | Line | Issue |
|------|------|-------|
| contact.html | 58 | Invalid Formspree URL format |

### Registration Inconsistency (CRIT-02)
| File | Line | Current | Should Be |
|------|------|---------|-----------|
| register.html | 42 | `register.html` | External URL |
| register.html | 389-391 | "Payment Integration Pending" message | Keep (explains internal form status) |

Note: The internal `register.html` form is incomplete (payment pending). Nav should point externally, but page can remain for future use.

### Date Conflicts (CRIT-03)
| File | Line | Current Text | Recommended |
|------|------|--------------|-------------|
| index.html | 142 | "August 2026 (Date TBA)" | "August 16, 2026" |
| register.html | 63 | "August 2026 (TBA)" | "August 16, 2026" |
| flyer.html | 420 | "August 2026" | "August 16, 2026" |
| flyer.html | 421 | "Date TBA" | Remove or update |

Authoritative sources (keep as-is):
- index.html line 30: JSON-LD `"startDate": "2026-08-16T07:30:00-06:00"`
- main.js line 256: Countdown `'August 16, 2026 07:30:00 GMT-0600'`

### FAQ Weather (CRIT-04)
| File | Line | Current | Fixed |
|------|------|---------|-------|
| faq.html | 60 | "September weather" | "August weather" |

## Sources

### Primary (HIGH confidence)
- Codebase analysis: All HTML files in /Users/duck/Public/clc-2025/
- Codebase analysis: /Users/duck/Public/clc-2025/assets/js/main.js (countdown timer, line 256)

### Secondary (MEDIUM confidence)
- [Formspree Blog: HTML Form Action Guide](https://formspree.io/blog/html-form-action/) - Confirms `/f/FORM_ID` format
- [Formspree Help: Legacy forms being phased out](https://help.formspree.io/hc/en-us/articles/360056076314-Phasing-out-legacy-forms-email-URLs) - Explains email URL deprecation
- [Formspree Official Site](https://formspree.io/) - Current endpoint format

## Metadata

**Confidence breakdown:**
- Formspree fix: HIGH - Official documentation confirms format
- Registration paths: HIGH - Direct file inspection
- Date locations: HIGH - Grep search of all files
- FAQ fix: HIGH - Direct file inspection

**Research date:** 2026-01-19
**Valid until:** Indefinite (content fixes don't expire)

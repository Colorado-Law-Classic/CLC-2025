# Domain Pitfalls: Charity Event Websites

**Domain:** Charity golf tournament website (polish/refinement phase)
**Project:** Colorado Law Classic - 15th Annual
**Researched:** 2026-01-19
**Confidence:** HIGH (based on codebase audit and domain expertise)

---

## Critical Pitfalls

Mistakes that undermine credibility and trust. For a charity event where the organizer wants to "show off progress," these are especially damaging.

---

### Pitfall 1: Fake or Non-Functional Forms

**What goes wrong:** Forms exist visually but don't actually submit data anywhere. Users fill out information, click submit, and nothing happens (or they get a fake "success" message).

**Why it happens:**
- Developer scaffolded form UI before backend was ready
- Payment integration deferred but form left in place
- Testing with mock responses that were never replaced

**Consequences:**
- Lost registrations (users think they signed up but didn't)
- Lost donations/sponsors who tried to contact
- Massive credibility damage when discovered
- Volunteers/organizers waste time fielding "I submitted but never heard back" complaints

**This codebase evidence:**
- `contact.html` line 58: Form action is `https://formspree.io/f/coloradolawgolf@gmail.com` - This is an **invalid Formspree URL**. Formspree URLs use a form ID like `/f/xyzabc`, not an email address directly
- `register.html`: Full registration form with payment step that shows "Payment Integration Pending" and just alerts with `alert()` on submit (line 603 in registration.js)

**Warning signs:**
- Form `action` attribute points to placeholder URL or invalid service endpoint
- JavaScript intercepts form submission and just logs to console
- No confirmation email system configured
- "Coming soon" or "Pending integration" text visible in production

**Prevention:**
1. **Remove or clearly disable** forms that don't work - don't let users attempt submission
2. **Redirect to working alternative** - If payment isn't integrated, don't show a payment form; redirect to the working external registration
3. **Validate integrations before deployment** - Test form submissions actually arrive somewhere
4. **Use reliable services** - Formspree, Netlify Forms, or similar that "just work" for contact forms

**Priority for polish phase:** CRITICAL - Fix immediately

---

### Pitfall 2: Inconsistent Registration Path (Multiple Doors, Some Locked)

**What goes wrong:** Site has multiple ways to "Register" - some work, some don't, confusing users about which is the real path.

**Why it happens:**
- New registration page built but old external link still present
- Different pages link to different registration endpoints
- Internal vs external registration during transition period

**Consequences:**
- Users try the broken path first, get frustrated, leave
- Some users register externally, others try the internal form (which doesn't work)
- Organizers can't track who registered where

**This codebase evidence:**
- `index.html` line 79: Nav links to external `https://coloradolawclassic.org/home/register-here/`
- `register.html` line 42: Nav links to internal `register.html` page
- The internal registration form doesn't actually process payments
- Contact page links to external registration; FAQ mentions registration but doesn't clarify which

**Warning signs:**
- "Register" button behavior varies by page
- Both internal form and external link coexist
- JSON-LD offers URL (line 53 of index.html) points to external site while visible buttons may go elsewhere

**Prevention:**
1. **Single source of truth** - Pick ONE registration method and use it everywhere
2. **If building custom registration** - Don't ship until payment actually works
3. **Clear transition plan** - If migrating from external to internal, switch all links at once
4. **Audit all "Register" links** - Search codebase for all registration URLs, ensure consistency

**Priority for polish phase:** CRITICAL - Standardize immediately

---

### Pitfall 3: Date Inconsistency Across Site

**What goes wrong:** Different parts of the site show different dates (some specific, some "TBA"), confusing users and creating SEO/schema conflicts.

**Why it happens:**
- Date finalized after initial build
- Some areas updated, others forgotten
- Structured data updated separately from visible content

**Consequences:**
- Users don't know when the event actually is
- Google may show conflicting date in search results vs page content
- Countdown timer contradicts "TBA" text
- Looks unprofessional/unfinished

**This codebase evidence:**
- `index.html` line 142: "August 2026 (Date TBA)"
- `index.html` line 30: JSON-LD shows `"startDate": "2026-08-16T07:30:00-06:00"` (specific date)
- `main.js` line 256: Countdown timer targets `'August 16, 2026 07:30:00 GMT-0600'` (specific date)
- `register.html` line 63: "Date: August 2026 (TBA)"
- FAQ mentions "September weather in Denver" but event is in August

**Warning signs:**
- "TBA" appearing anywhere when date is actually set
- Structured data (JSON-LD) differs from visible content
- Countdown timer running toward a specific date while content says "TBA"
- Season/month references that conflict with actual date

**Prevention:**
1. **Central date constant** - Define event date in ONE place, reference everywhere
2. **Audit all date mentions** - Search for month names, "TBA", date patterns
3. **Schema must match content** - JSON-LD must reflect what's visible on page
4. **Update FAQ seasonally** - Check weather/clothing advice matches actual event month

**Priority for polish phase:** HIGH - Creates confusion and SEO issues

---

## Moderate Pitfalls

Mistakes that create friction and look unprofessional but don't cause data loss.

---

### Pitfall 4: Missing Technical Basics (404 Page, Proper Favicon)

**What goes wrong:** Missing 404.html means users hitting bad URLs see ugly GitHub Pages default or browser error. Using JPG as favicon works but isn't optimal.

**Why it happens:**
- 404 page not considered during build
- Favicon added as afterthought using available image

**Consequences:**
- Broken links (from old emails, typos) show jarring error page
- Users may think entire site is broken
- JPG favicons are larger and may not display correctly in all contexts

**This codebase evidence:**
- No `404.html` file exists (glob found no 404* files)
- Favicon is `clc-logo.jpg` (all pages) - works but not ideal

**Warning signs:**
- Navigating to `/nonexistent-page` shows GitHub/host default error
- Favicon appears blurry or doesn't display in some browsers
- No PNG/ICO/SVG favicon variants

**Prevention:**
1. **Create custom 404.html** - Match site branding, provide navigation back to home
2. **Generate proper favicon set** - Use realfavicongenerator.net or similar
3. **Test 404 behavior** - Try accessing random URLs on deployed site

**Priority for polish phase:** MEDIUM - Affects edge cases but reflects on polish

---

### Pitfall 5: Terms and Conditions Link to Nowhere

**What goes wrong:** "Terms and conditions" link exists but points to `#` or non-existent page.

**Why it happens:**
- Legal copy deferred
- Link added as placeholder during form build

**Consequences:**
- User tries to read terms, gets nothing
- May be legal liability (claiming agreement to non-existent terms)
- Looks unfinished

**This codebase evidence:**
- `register.html` line 445: `<a href="#" id="terms-link">terms and conditions</a>` - links to nowhere

**Warning signs:**
- `href="#"` on any important link
- Links that don't navigate anywhere
- Modal/popup terms that never implemented

**Prevention:**
1. **Write actual terms** - Refund policy, transfer policy, liability waiver
2. **Link to dedicated page or modal** - Not `href="#"`
3. **If terms aren't ready** - Remove the checkbox requirement temporarily

**Priority for polish phase:** MEDIUM - Legal and trust issue

---

### Pitfall 6: External Link Inconsistency

**What goes wrong:** Some external links open in new tab, others don't. Some have `rel="noopener"`, others don't.

**Why it happens:**
- Different developers/sessions added links
- No link policy established

**Consequences:**
- Inconsistent UX
- Security issues (missing noopener)
- SEO issues (missing nofollow for certain links)

**This codebase evidence:**
- Most external links have `target="_blank" rel="noopener"` (good)
- Some internal links styled as buttons go to external sites
- Sponsor links open in new tabs (appropriate)
- But pattern isn't perfectly consistent across all pages

**Warning signs:**
- External links without `target="_blank"`
- `target="_blank"` without `rel="noopener"`
- Inconsistent behavior for same type of link

**Prevention:**
1. **Establish link policy** - External = new tab + noopener; Internal = same tab
2. **Audit all links** - Grep for `href=` and `target=`
3. **Document in style guide** - Make it part of contributor guidelines

**Priority for polish phase:** LOW-MEDIUM - Mostly minor UX issue

---

### Pitfall 7: Placeholder Content Left in Production

**What goes wrong:** "Lorem ipsum", "Your content here", or obviously placeholder text visible on live site.

**Why it happens:**
- Content not finalized before launch
- Developer placeholders not replaced
- Hidden elements become visible through CSS changes

**Consequences:**
- Looks unprofessional
- May confuse users
- Damages credibility

**This codebase evidence:**
- "Sponsorship Available" placeholders are intentional (good - actionable CTA)
- No lorem ipsum found in active pages
- But "Payment Integration Pending" text visible in register.html payment form

**Warning signs:**
- "Lorem ipsum" or similar
- "[Insert X here]" patterns
- "Coming soon" sections that have been "coming soon" for months
- Placeholder images

**Prevention:**
1. **Search for common placeholders** - Lorem, TBD, TODO, Coming Soon, placeholder
2. **Review before deploy** - Fresh eyes check for anything embarrassing
3. **If content isn't ready, remove section** - Empty is better than placeholder

**Priority for polish phase:** MEDIUM - The payment pending message should be addressed

---

## Minor Pitfalls

Annoyances that are easily fixable but often overlooked.

---

### Pitfall 8: Footer Duplication Without Centralization

**What goes wrong:** Footer (and nav) copied across every HTML file. Update one, forget others.

**Why it happens:**
- Static site without templating
- Quick copy-paste development

**Consequences:**
- Inconsistent information across pages
- Copyright year wrong on some pages
- Nav links missing on some pages

**This codebase evidence:**
- CLAUDE.md explicitly notes: "Each HTML page duplicates the nav and footer. When updating nav links or footer content, change all `.html` files."
- All pages manually maintain nav - room for inconsistency

**Warning signs:**
- Different copyright years on different pages
- Nav links don't match across pages
- Footer contact info varies

**Prevention:**
1. **Document the duplication** - Already done in CLAUDE.md
2. **Search and replace carefully** - When updating, check all HTML files
3. **Consider build step** - If site grows, add templating (11ty, Hugo, etc.)

**Priority for polish phase:** LOW - Documented workaround exists

---

### Pitfall 9: Console Errors in Production

**What goes wrong:** JavaScript errors or warnings in browser console that users don't see but indicate issues.

**Why it happens:**
- Missing assets (video, images)
- Features partially implemented
- Third-party scripts failing

**Consequences:**
- Features may silently fail
- Looks bad to technical reviewers
- May indicate actual bugs

**This codebase evidence:**
- `index.html` line 96: Video source `assets/video/hero-bg.mp4` may not exist (fallback poster exists, but video file missing could cause console warning)
- `registration.js` logs to console (development leftover)

**Warning signs:**
- Red errors in browser console
- 404s for assets
- Undefined variable errors

**Prevention:**
1. **Check console before deploy** - On all major pages
2. **Remove console.log statements** - Or use proper logging that's off in production
3. **Ensure all referenced assets exist** - Or remove references

**Priority for polish phase:** LOW - Mostly invisible but worth cleaning

---

### Pitfall 10: Accessibility Gaps in Interactive Elements

**What goes wrong:** Interactive elements (accordions, tabs, modals) lack proper ARIA attributes or keyboard navigation.

**Why it happens:**
- Visual design prioritized over accessibility
- Native HTML elements not used

**Consequences:**
- Screen reader users can't navigate properly
- Keyboard-only users stuck
- Potential ADA compliance issues for nonprofit

**This codebase evidence:**
- FAQ page uses `<details>/<summary>` (good - native accessibility)
- Mobile nav has `aria-expanded` (good)
- Registration form multi-step may have focus management issues
- Countdown has `aria-live` (good)

**Warning signs:**
- Custom interactive elements without ARIA
- No keyboard navigation
- Focus not managed during modals/transitions

**Prevention:**
1. **Use native HTML where possible** - details, dialog, etc.
2. **Add ARIA to custom components** - aria-expanded, aria-controls, etc.
3. **Test with keyboard only** - Tab through entire site

**Priority for polish phase:** LOW-MEDIUM - Good foundation exists, minor gaps

---

## Phase-Specific Warnings for Polish Effort

| Phase Topic | Likely Pitfall | Mitigation |
|-------------|---------------|------------|
| Contact form | Invalid Formspree URL | Generate real Formspree form ID or use alternative |
| Registration | Form shows but doesn't work | Either make it work OR remove form, use only external link |
| Date consistency | TBA vs specific date conflict | Pick one truth, update all instances |
| 404 page | Doesn't exist | Create branded 404.html |
| Favicon | JPG not optimal | Generate proper ICO/PNG/SVG set |
| Terms link | Points to # | Create terms page or remove requirement |
| Payment form | "Pending" visible | Either integrate or remove/hide |
| Console | Possible errors/warnings | Clean up before final polish |

---

## Specific Fixes Checklist for This Codebase

Based on audit, these specific items need attention:

1. **CRITICAL: Contact form** - Fix Formspree URL (currently invalid email format)
2. **CRITICAL: Registration path** - Decide: external link OR working internal form, not both
3. **HIGH: Date standardization** - Update "TBA" references to match JSON-LD date (Aug 16)
4. **HIGH: FAQ season reference** - Change "September weather" to "August weather"
5. **MEDIUM: 404 page** - Create custom 404.html
6. **MEDIUM: Terms link** - Create terms page or remove requirement
7. **MEDIUM: Payment section** - Hide or properly integrate
8. **LOW: Favicon** - Generate proper favicon set
9. **LOW: Console cleanup** - Remove console.log, check for asset 404s

---

## Research Confidence

| Finding | Confidence | Source |
|---------|------------|--------|
| Form URL invalid | HIGH | Direct codebase inspection |
| Date inconsistency | HIGH | Direct codebase inspection |
| Registration path conflict | HIGH | Direct codebase inspection |
| 404 missing | HIGH | Glob search found no 404 files |
| General pitfall patterns | MEDIUM | Domain expertise (WebSearch unavailable) |

**Note:** WebSearch was unavailable for this research. Pitfall patterns are based on domain expertise and direct codebase audit. External sources could not be consulted to verify industry-wide patterns.

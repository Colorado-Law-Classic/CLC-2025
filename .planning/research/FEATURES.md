# Feature Landscape: Charity Golf Tournament Website

**Domain:** Charity golf tournament event website
**Project:** Colorado Law Classic (15th annual, benefiting CU Law scholarships)
**Researched:** 2026-01-19
**Confidence:** MEDIUM (based on domain expertise and current site analysis; WebSearch unavailable for verification)

## Executive Summary

The Colorado Law Classic website already has excellent bones. It covers most table stakes features and includes several differentiators (interactive course map, anniversary celebration page, photo upload concept). The primary gaps are:

1. **Broken/placeholder functionality** - Forms that don't actually submit
2. **Social proof** - No testimonials displayed, no live results
3. **Post-event content** - No results page, no winner announcements

For a demo to impress a friend, the priority should be making existing features *work* rather than adding new ones.

---

## Table Stakes

Features users expect from any charity golf tournament website. Missing these makes the site feel incomplete or unprofessional.

| Feature | Status | Why Expected | Notes |
|---------|--------|--------------|-------|
| Event date, time, location | COMPLETE | Basic event information | Home page has all three |
| Registration path | PARTIAL | Must be able to sign up | External link works; custom form is placeholder |
| Pricing information | COMPLETE | Attendees need to know cost | $150/player clearly shown |
| Sponsor recognition | COMPLETE | Sponsors expect visibility | Tiered display with logos |
| Contact information | COMPLETE | Must be able to reach organizers | Email available, form exists |
| Mobile responsive | COMPLETE | 50%+ traffic is mobile | Hamburger menu, responsive grid |
| Event schedule | COMPLETE | Know what to expect day-of | Check-in 6:30, shotgun 7:30, lunch after |
| Photo gallery | COMPLETE | Proves event is real, builds excitement | Year filtering + lightbox |
| FAQ | COMPLETE | Reduces repetitive questions | 8 common questions covered |
| Dress code info | COMPLETE | Golf-specific expectation | In FAQ |

### Table Stakes Currently Missing

| Feature | Why Important | Complexity | Recommendation |
|---------|---------------|------------|----------------|
| Working contact form | Users expect forms to work | LOW | Formspree integration (already in HTML, just needs valid endpoint) |
| Social media links | Expected in footer | LOW | Add footer icons |
| Course/venue address | People need to navigate there | LOW | Add Google Maps link or embed |

---

## Differentiators

Features that make this site stand out from typical tournament websites. These impress visitors and demonstrate professionalism.

| Feature | Status | Value Proposition | Complexity |
|---------|--------|-------------------|------------|
| Interactive course map | COMPLETE | Shows sophistication, helps players prepare | Already built, very impressive |
| Countdown timer | COMPLETE | Creates urgency, visual interest | Flip-card animation is polished |
| Anniversary celebration page | COMPLETE | Leverages 15-year milestone, emotional appeal | Unique to this event |
| Dark mode | COMPLETE | Modern UX, accessibility | Toggle in nav works |
| Video hero background | PARTIAL | Dramatic visual impact | Structure exists, needs video file |
| Reading progress bar | COMPLETE | Subtle polish indicator | Small touch that signals quality |
| 3D card tilt effects | COMPLETE | Interactive micro-animations | Adds perceived quality |

### High-Impact Differentiators to Add

| Feature | Value Proposition | Complexity | Demo Impact |
|---------|-------------------|------------|-------------|
| Live testimonials display | Social proof, emotional connection | LOW | Shows community engagement |
| Results/leaderboard page | Post-event engagement, winner recognition | MEDIUM | Can be static for demo |
| Sponsor benefit calculator | Interactive sponsorship decision tool | MEDIUM | Impressive for potential sponsors |
| Email signup (newsletter) | Capture interested visitors | LOW | Professional expectation |
| Social sharing buttons | Increase reach | LOW | Standard but often missing |

### Differentiators That Would Wow in a Demo

| Feature | Why It Impresses | Complexity | Notes |
|---------|------------------|------------|-------|
| Animated stat counters | Eye-catching, shows impact | ALREADY EXISTS | Just needs visible placement |
| Photo upload that works | "Real" user interaction | MEDIUM | Current version simulates success |
| Testimonial form that submits | Visible community input | LOW | Connect to Formspree |
| Previous winners timeline | Shows tournament history | MEDIUM | Leverages 15-year history |

---

## Anti-Features

Features to explicitly NOT build for a volunteer-run charity tournament of this size. These add complexity without proportional value.

| Anti-Feature | Why Avoid | What to Do Instead |
|--------------|-----------|-------------------|
| Live scoring/leaderboard during event | Requires real-time backend, on-course data entry | Post-event results page (static HTML) |
| User accounts/login | Massive complexity, security burden | External registration (current approach is fine) |
| Custom payment processing | PCI compliance nightmare | Use external service (Zeffy, PayPal, Square) |
| Event calendar with iCal sync | Over-engineered for single event | Simple "Add to Calendar" links |
| Live chat support | Needs staffing, 24/7 expectation | Email + FAQ is sufficient |
| Automated email marketing | Requires backend, deliverability management | Mailchimp or similar external service |
| Mobile app | Massive scope for single-day event | Responsive website is enough |
| Complex CMS for content editing | Volunteer organizers can edit HTML | Keep it simple, document clearly |
| Multi-language support | Single-location Denver event | English only |
| E-commerce store (merchandise) | Inventory management, fulfillment | Link to external if needed |

---

## Current Site Audit

### What's Working Well

1. **Visual design** - "Refined Country Club Prestige" aesthetic is cohesive and professional
2. **Navigation** - Clear, mobile-friendly, active state highlighting
3. **Information architecture** - All essential info is findable
4. **Accessibility** - Skip links, ARIA labels, semantic HTML
5. **Performance** - Static site loads fast, lazy loading images
6. **SEO basics** - Meta descriptions, Open Graph, JSON-LD structured data
7. **Interactive elements** - Course map, countdown, gallery filter all work

### What Needs Fixing (Priority Order)

| Issue | Current State | Fix Needed | Demo Impact |
|-------|---------------|------------|-------------|
| Contact form doesn't submit | Formspree endpoint is malformed | Fix action URL | HIGH - forms should work |
| Photo upload is fake | JavaScript simulates success | Either make real or remove | HIGH - broken features look bad |
| Testimonial form doesn't submit | No action, no JS handler | Connect to Formspree or email | MEDIUM - engagement feature |
| Registration is external | Links to coloradolawclassic.org | Either keep external or finish custom form | LOW - external works fine |
| Hero video missing | Video element exists, no file | Add video or use static image | MEDIUM - promised but undelivered |

### What's Good Enough (Don't Overthink)

- External registration link (works, no need to rebuild)
- Placeholder sponsor slots (clearly labeled as opportunities)
- Limited gallery photos (can add more later)
- Simple footer (doesn't need to be fancy)

---

## Feature Dependencies

```
                    +------------------+
                    | Working Contact  |
                    | Form (Formspree) |
                    +--------+---------+
                             |
              +--------------+--------------+
              |                             |
     +--------v--------+         +----------v---------+
     | Testimonial     |         | Sponsor Inquiry    |
     | Submission      |         | Form               |
     +-----------------+         +--------------------+

     +------------------+
     | Results Page     |
     +--------+---------+
              |
     +--------v---------+
     | Winners Timeline |
     | (Anniversary)    |
     +------------------+
```

**Key insight:** Contact form fix unlocks multiple features at low cost.

---

## MVP Recommendation (For Demo)

The organizer wants to show off progress. Focus on making existing features work rather than adding new ones.

### Phase 1: Fix Broken Things (High Demo Impact)

1. **Fix contact form** - Change Formspree action to valid endpoint
2. **Fix or remove photo upload** - Either connect to real service or replace with "Email us your photos" CTA
3. **Add testimonial display** - Even 2-3 hardcoded testimonials show social proof

### Phase 2: Quick Polish (Medium Demo Impact)

4. **Add footer social links** - LinkedIn, simple icons
5. **Add previous winners section** - Simple list on anniversary page
6. **Hero video or remove video element** - Don't show broken promises

### Phase 3: Nice to Have (Lower Priority)

7. **Results page template** - Ready for post-event population
8. **Email newsletter signup** - Capture interested visitors
9. **Sponsor benefit comparison** - Interactive sponsorship selector

---

## Competitor/Peer Feature Analysis

Based on domain knowledge of charity golf tournament websites (WebSearch unavailable for verification):

### Common Features Across Similar Sites

| Feature | Prevalence | This Site |
|---------|------------|-----------|
| Event info (date/time/place) | Universal | Yes |
| Registration | Universal | External link |
| Sponsor showcase | Universal | Yes |
| Photo gallery | Very common | Yes |
| Course information | Common | Yes (exceptional!) |
| FAQ | Common | Yes |
| Contact form | Common | Broken |
| Past results | Uncommon | Missing |
| Testimonials | Uncommon | Placeholder |
| Interactive elements | Rare | Excellent |

### What Sets This Site Apart (Positively)

1. Interactive SVG course map with hole-by-hole details
2. Anniversary celebration page with history
3. Dark mode toggle
4. Countdown timer with flip animation
5. Overall design polish (most charity golf sites look dated)

---

## Sources and Confidence Notes

| Assessment | Confidence | Basis |
|------------|------------|-------|
| Table stakes features | HIGH | Standard event website expectations |
| Differentiators | MEDIUM | Domain knowledge, may miss current trends |
| Anti-features | HIGH | Common sense for volunteer-run events |
| Site audit | HIGH | Direct code review |
| Competitor analysis | LOW | Unable to verify with WebSearch |

**Gaps that need validation:**
- Current best practices for nonprofit event sites (2025-2026)
- Specific Formspree configuration requirements
- Whether external registration link is optimal vs. embedded

---

## Recommendations for Roadmap

### Immediate (Demo-Ready)

1. Fix contact form (30 min)
2. Add 2-3 testimonials (1 hour)
3. Decide on photo upload (remove or note as "coming soon")

### Short-Term (Pre-Event)

4. Results page template
5. Social links in footer
6. Newsletter signup (external service)

### Post-Event

7. Populate results page
8. Add event photos
9. Collect real testimonials

**Key principle:** A working 80% solution beats a broken 100% solution. Fix what's there before adding more.

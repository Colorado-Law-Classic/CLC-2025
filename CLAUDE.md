# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Colorado Law Classic (CLC) - A charity golf tournament website benefiting scholarship funds at CU Law School. Built with **Next.js 16 (App Router)** and deployed on **Vercel**.

**Design Direction:** "Quiet Luxury" — Obsidian + Gold (CU Law School colors)

**Contact Email:** coloradolawgolf@gmail.com

## Development

```bash
npm install            # Install dependencies
npm run dev            # Start dev server (http://localhost:3000)
npm run build          # Production build
npm run start          # Start production server
npm run lint           # Run ESLint
```

## Deployment

**Primary deployment:** Vercel (auto-deploys from GitHub)

Configure in Vercel dashboard:
- Framework: Next.js
- Environment variable: `ADMIN_PASSWORD` (for content editing)

## Architecture

**Next.js App Router** with TypeScript:

```
src/
├── app/                    # Routes (App Router)
│   ├── layout.tsx          # Root layout (nav, footer, shared UI)
│   ├── page.tsx            # Homepage
│   ├── sponsors/page.tsx   # Sponsors page
│   ├── gallery/page.tsx    # Photo gallery
│   ├── faq/page.tsx        # FAQ page
│   ├── contact/page.tsx    # Contact form
│   ├── register/page.tsx   # Registration form
│   ├── anniversary/page.tsx # 15 Years celebration
│   ├── course-map/page.tsx # Interactive course map
│   ├── admin/page.tsx      # Content admin panel
│   ├── api/
│   │   ├── auth/route.ts   # Admin authentication
│   │   └── content/route.ts # Content CRUD API
│   └── globals.css         # All styles (imported from original site)
├── components/             # React components
│   ├── Navigation.tsx      # Nav with mobile menu, dark mode, scroll-aware
│   ├── Footer.tsx          # Site footer
│   ├── CountdownTimer.tsx  # Flip-clock countdown to event
│   ├── GalleryGrid.tsx     # Filterable photo gallery
│   ├── ScrollReveal.tsx    # Intersection Observer animations
│   ├── ScrollToTop.tsx     # Scroll-to-top button
│   ├── ReadingProgress.tsx # Reading progress bar
│   ├── RegistrationForm.tsx # Multi-step registration
│   ├── AnniversaryUpload.tsx # Photo upload + testimonial form
│   └── CourseMapInteractive.tsx # SVG course map with hole details
├── data/
│   └── content.ts          # Default content data + TypeScript types
└── lib/
    └── content.ts          # Content loading/saving utilities
```

**CSS:** Global stylesheet in `src/app/globals.css` using CSS custom properties.
- Brand colors: `--clr-obsidian`, `--clr-gold`, `--clr-parchment`, etc.
- Typography: Cormorant Garamond (headings) + Inter (body)
- Dark mode support via `.dark-mode` class

**Content Management:**
- Default content defined in `src/data/content.ts`
- Admin panel at `/admin` for browser-based editing
- Overrides stored in `content.json` at project root
- API routes handle auth and content CRUD

## Browser-Based Content Editing

1. Navigate to `/admin`
2. Enter the admin password (default dev: `clc-admin-2026`, set `ADMIN_PASSWORD` env var in production)
3. Edit event details, hero text, FAQ, stats, footer content
4. Click "Save All Changes"
5. Changes are saved to `content.json` and reflected on the site

## Commonly Updated

| What | Where |
|------|-------|
| Event date/details | Admin panel → Event tab, or `src/data/content.ts` |
| Hero text | Admin panel → Hero tab |
| FAQ items | Admin panel → FAQ tab |
| Stats | Admin panel → Stats tab |
| Colors | `src/app/globals.css` — `:root` block |
| Sponsors | `src/data/content.ts` → `sponsors` array |
| Gallery photos | `src/data/content.ts` → `gallery` array + add images to `public/images/gallery/` |
| Registration URL | Admin panel → Event tab → Registration URL |

## Static Assets

Images are stored in `public/images/`:
- `clc-logo.jpg` — Site logo and favicon
- `bartic-group.jpg`, `womble-bond-dickinson.jpg`, `hrop.png` — Sponsor logos
- `gallery/` — Tournament photos

## Contributor Guidelines

1. **Documentation in code** — Include comments explaining what each file/section does
2. **Don't make assumptions** — Ask clarifying questions when intent is unclear
3. **Include these rules** — Reference these principles in documentation as reminders

## Archive

Previous static HTML implementation preserved in `archive/static-site/` for reference.
Previous React implementation preserved in `archive/` subdirectories.

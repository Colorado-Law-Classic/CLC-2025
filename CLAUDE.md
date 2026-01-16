# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Colorado Law Classic (CLC) - A charity golf tournament website benefiting scholarship funds at CU Law School. The repository contains two implementations:

1. **Static HTML Site** (`colorado-law-classic-site-final/`) - Production-ready static site with vanilla HTML/CSS/JS
2. **React Application** (`colorado_law_classic_source/`) - Modern React/TypeScript implementation with component architecture

## Development Commands (React App)

All commands should be run from `colorado_law_classic_source/`:

```bash
npm run dev      # Start Vite dev server
npm run build    # TypeScript compile + Vite production build
npm run lint     # Run ESLint
npm run preview  # Preview production build locally
```

## Architecture

### React App (`colorado_law_classic_source/`)

- **Build**: Vite + TypeScript
- **Styling**: Tailwind CSS with custom theme variables (HSL-based color system)
- **UI Components**: Radix UI primitives wrapped in `src/components/ui/` (shadcn/ui pattern)
- **Routing**: State-based page switching in `App.tsx` (not react-router despite being a dependency)
- **Forms**: React Hook Form with Zod validation

Key components:
- `App.tsx` - Main layout with state-driven page rendering
- `components/Navbar.tsx` + `Footer.tsx` - Navigation that calls `setCurrentPage()`
- Page components: `HomePage`, `RegistrationPage`, `SponsorshipPage`, `GalleryPage`, etc.

Path alias: `@` maps to `./src` (configured in `vite.config.ts`)

Utility function `cn()` in `src/lib/utils.ts` merges Tailwind classes using `clsx` + `tailwind-merge`.

### Static Site (`colorado-law-classic-site-final/`)

Simple multi-page HTML site:
- `index.html`, `sponsors.html`, `gallery.html`, `faq.html`, `register.html`, `brand-guide.html`
- `assets/css/styles.css` - Custom CSS
- `assets/js/main.js` - Countdown timer and interactions
- `assets/img/` - Tournament logos and sponsor images

## Deployment

The React app builds to static files for deployment to Bluehost via cPanel File Manager. Built files get embedded in the WordPress site via iframe. See `React readme .txt` for detailed Bluehost/WordPress integration steps.

## Payment Integration

Registration uses external payment links (PayPal and Square hosted checkout pages). Payment URLs are hardcoded in the registration components and must be updated with actual merchant links before production.

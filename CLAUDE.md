# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Colorado Law Classic (CLC) - A charity golf tournament website benefiting scholarship funds at CU Law School. This is a static HTML/CSS/JS site designed for simplicity and easy maintenance.

## Site Structure

```
/
├── index.html          # Home page with hero, countdown, event details
├── sponsors.html       # Sponsor tiers and logos
├── gallery.html        # Photo gallery with year filter
├── faq.html            # FAQ accordions
├── register.html       # Registration info (links to external checkout)
├── brand-guide.html    # Branding guidelines
└── assets/
    ├── css/styles.css  # All styles
    ├── js/main.js      # Countdown timer, nav highlighting, gallery filter
    └── img/            # Logo, flyer, sponsor logos, gallery photos
```

## Development

No build step required. Open any HTML file directly in a browser or use a local server:

```bash
npx serve .           # or python -m http.server
```

## Deployment

GitHub Pages serves the site directly from the `main` branch root. Push to `main` and it deploys automatically via GitHub Actions.

Site URL: `https://redeemedduck.github.io/CLC-2025/`

## Brand

- **Primary colors**: Black (#111111) + Gold (#b89b1c)
- **Affiliation**: CU Law School (black and gold)
- **Logo**: Mountain silhouette with "COLORADO LAW CLASSIC" text

## Key Files

- `assets/js/main.js` - Contains countdown timer date (update when event date is confirmed)
- `assets/css/styles.css` - CSS variables at top define colors
- Registration links point to external `coloradolawclassic.org` checkout

## Archive

Previous implementations (React app, documentation) are preserved in `archive/` for reference.

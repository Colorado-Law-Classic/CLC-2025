# Testing Patterns

**Analysis Date:** 2026-01-19

## Test Framework

**Runner:** None

**Status:** This is a static HTML/CSS/JS website with no automated testing framework configured.

**Rationale:** The project is a simple charity event website with no build step, no package.json, and no complex business logic requiring automated tests.

## Manual Testing Approach

**Local Development:**
```bash
# Start local server
npx serve .
# or
python -m http.server 8080
```

**Verification Checklist (from `docs/SITE-IMPROVEMENTS.md`):**
1. Run local server: `python3 -m http.server 8080`
2. Desktop view at `http://localhost:8080` - all pages load correctly
3. Mobile view (responsive design check)
4. Keyboard navigation (focus states, skip link)
5. Form interactions (registration, testimonials)

## Test File Organization

**Location:** No test files exist

**Naming:** Not applicable

**If Tests Were Added:**
- Recommended location: `tests/` directory at project root
- Recommended naming: `*.test.js` or `*.spec.js`
- Suggested framework: Playwright for E2E (browser testing) given static site nature

## What Would Be Tested

**Critical User Flows:**
1. Navigation works on all pages (mobile hamburger menu)
2. Gallery lightbox opens and navigates between images
3. Gallery year filter shows/hides correct images
4. Countdown timer displays correctly and updates
5. Registration form multi-step navigation and validation
6. Contact form submissions
7. External links open in new tabs

**Visual Regression:**
- Hero section renders correctly
- Sponsor logos display properly
- Dark mode toggle works
- Responsive breakpoints (768px, 480px)

**Accessibility:**
- Skip link visible on focus
- Keyboard navigation through all interactive elements
- Focus states visible
- Screen reader compatibility (ARIA attributes)

## Browser Testing

**Recommended Manual Testing:**
- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Mobile Safari (iOS)
- Chrome Mobile (Android)

**Known Compatibility:**
- CSS `backdrop-filter` used (requires Chrome 76+, Firefox 103+, Safari 9+)
- IntersectionObserver used (requires Chrome 58+, Firefox 55+, Safari 12.1+)
- CSS custom properties used (requires Chrome 49+, Firefox 31+, Safari 9.1+)

## Mocking

**Framework:** Not applicable

**If Mocking Were Needed:**
- Form submissions currently simulate success
- Photo uploads in `anniversary.js` have simulated upload functions
- External API integrations (Formspree, Cloudinary, Firebase) are prepared but not active

**Simulation Pattern (from `anniversary.js`):**
```javascript
/**
 * Simulate file upload (for testing without real service)
 * Replace with uploadToCloudinary() or Firebase when service is configured
 */
async function simulateUpload() {
  // Fake progress updates
  for (let i = 0; i <= 100; i += 10) {
    updateProgress(i);
    await new Promise(r => setTimeout(r, 100));
  }
}
```

## Fixtures and Factories

**Test Data:** Not applicable

**Sample Data Locations:**
- Gallery images: `assets/img/gallery/`
- Sponsor logos: `assets/img/`
- Sample event data in `index.html` JSON-LD structured data

## Coverage

**Requirements:** None enforced

**Recommendations if tests were added:**
- Focus on E2E tests covering user journeys
- No unit test coverage needed (no complex business logic)
- Visual regression tests for key pages

## Test Types

**Unit Tests:**
- Not used
- Would be useful for: form validation functions in `registration.js`

**Integration Tests:**
- Not used
- Would be useful for: form submission flows, gallery filtering

**E2E Tests:**
- Not used
- Recommended framework: Playwright
- Would test: full page loads, navigation, form flows

## Adding Tests (Future Recommendation)

**If automated testing becomes needed:**

1. **Install Playwright:**
```bash
npm init -y
npm install -D @playwright/test
npx playwright install
```

2. **Create test file `tests/navigation.spec.js`:**
```javascript
import { test, expect } from '@playwright/test';

test('homepage loads and countdown displays', async ({ page }) => {
  await page.goto('/');
  await expect(page.locator('#countdown')).toBeVisible();
  await expect(page.locator('.countdown-unit')).toHaveCount(4);
});

test('mobile menu opens and closes', async ({ page }) => {
  await page.setViewportSize({ width: 375, height: 667 });
  await page.goto('/');

  await page.click('.nav-toggle');
  await expect(page.locator('.nav-links')).toHaveClass(/open/);

  await page.press('body', 'Escape');
  await expect(page.locator('.nav-links')).not.toHaveClass(/open/);
});

test('gallery filter works', async ({ page }) => {
  await page.goto('/gallery.html');

  await page.click('button[data-filter="2024"]');
  await expect(page.locator('a[data-year="2024"]')).toBeVisible();
  await expect(page.locator('a[data-year="2026"]')).toHaveClass(/hidden/);
});
```

3. **Run tests:**
```bash
npx playwright test
```

## Deployment Testing

**GitHub Actions workflow exists:** `.github/workflows/deploy.yml`

**Current CI behavior:**
- Auto-deploys to GitHub Pages from `main` branch
- No test step in pipeline

**Recommended addition to workflow:**
```yaml
jobs:
  test:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
      - run: npm ci
      - run: npx playwright install --with-deps
      - run: npx playwright test
```

## Validation Without Tests

**Current validation approach:**
- Manual browser testing
- HTML validation via W3C validator
- Lighthouse audits for performance/accessibility
- Visual inspection across breakpoints

**Recommended tools:**
- Lighthouse CI for automated performance checks
- axe-core for accessibility audits
- Percy or Chromatic for visual regression (if needed)

---

*Testing analysis: 2026-01-19*

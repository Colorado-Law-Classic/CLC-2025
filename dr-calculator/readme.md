Created a buildable Vite + React + TypeScript project at [`dr-calculator/`](dr-calculator).

Key fixes / changes:
- Fixed the React Rules of Hooks violation by moving the cashflow projection `useMemo` to the top level of the component in [`dr-calculator/src/App.tsx`](dr-calculator/src/App.tsx:1).
- Added full build tooling + config: [`dr-calculator/package.json`](dr-calculator/package.json), [`dr-calculator/vite.config.ts`](dr-calculator/vite.config.ts), [`dr-calculator/tsconfig.json`](dr-calculator/tsconfig.json), [`dr-calculator/index.html`](dr-calculator/index.html), Tailwind config + CSS in [`dr-calculator/tailwind.config.js`](dr-calculator/tailwind.config.js), [`dr-calculator/postcss.config.js`](dr-calculator/postcss.config.js), [`dr-calculator/src/index.css`](dr-calculator/src/index.css).
- App entry wired via [`dr-calculator/src/main.tsx`](dr-calculator/src/main.tsx:1) → [`dr-calculator/src/App.tsx`](dr-calculator/src/App.tsx:1).

Build status:
- `npm run build` succeeds and outputs production assets to `dr-calculator/dist/`.

Commands:
- Dev server: `cd dr-calculator && npm run dev`
- Production build: `cd dr-calculator && npm run build`
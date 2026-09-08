# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project

Fully static web app for live vibe-coding workshops and talks. Tabs vary by event config, drawn from: Home (default landing page with overview and step-by-step navigation), Slides (embedded HTML deck), Build (prompt wizard for Gemini Canvas), Preview (paste code to test rendering), Showcase (curated tools with category filter), Deploy (deployment guide), Resources (curated links). Brand: "Vibe Coding Workshop", primary color scarlet `#BA0C2F`.

There is no backend. The app was previously an Express + SQLite server on Render (Starter plan, $7/mo — the persistent disk for SQLite forced the paid tier) serving a Gallery tab where students submitted, voted on, and commented on projects. The Gallery was dropped and the server deleted; the app now deploys to GitHub Pages for free.

## Commands

```bash
# Local dev
cd client && npm run dev          # Vite HMR on :5173

# Build
cd client && npm run build        # Output → client/dist/

# Preview the production build at the real base path
cd client && npm run preview      # Serves at /vibe-coding-workshop/

# Lint
cd client && npm run lint
```

## Architecture

**Client** (`client/`): Vite + React 19 + Tailwind v4. Tab-based SPA — `App.jsx` renders `Home.jsx` (default), `Slides.jsx`, `PromptWizard.jsx`, `Preview.jsx`, `Showcase.jsx`, `Deploy.jsx`, or `Resources.jsx` based on active tab. `/#portfolio` renders `Showcase.jsx` against `MY_PORTFOLIO` (hidden, not in nav). Fonts: BioRhyme (headings) + Source Sans Pro (body).

**Iframe rendering** (`SandboxedIframe.jsx`): Shared module used by the Build and Preview tabs. Students paste code from Gemini Canvas which may be React/JSX (with imports) or plain HTML. The `prepareHtml()` → `wrapReactCode()` pipeline: (1) parses all import statements, (2) strips them from the code, (3) generates CDN script tags and `const { ... } = window.globalName` shims, (4) wraps everything in an HTML shell with React, Babel standalone, and Tailwind loaded via CDN. Rendered in sandboxed iframes via Blob URLs.

**PromptWizard** (`PromptWizard.jsx`): Single-screen launchpad — one copyable prompt template at the top, six idea cards below. Clicking a card swaps the prompt content; a Reset link returns to the template. No sidebar, no preview pane, no accordions.

**Deploy**: `.github/workflows/deploy.yml` builds `client/` and publishes `client/dist` to GitHub Pages on every push to `master`. Live at https://rlfordon.github.io/vibe-coding-workshop/. Build requires `npm ci --include=dev` since Vite is a devDependency.

**Base path** (`assetUrl.js`): Pages serves the app from `/vibe-coding-workshop/`, not the domain root, so `vite.config.js` sets `base`. Vite rewrites imports and `index.html` but NOT runtime string literals — the root-relative `slidesUrl` and `screenshot` paths in `eventConfigs.js` would 404. `assetUrl()` rebases them against `import.meta.env.BASE_URL` at the point of use (`Slides.jsx`, `Showcase.jsx`). Any new root-relative asset path referenced from JS must go through it.

## Iframe CDN Rendering

The lucide-react UMD bundle expects `window.react` (lowercase) but React's UMD sets `window.React` (uppercase). Fixed by injecting `window.react = window.React` shim before CDN libs load, and using `'LucideReact'` (PascalCase) in `LIB_GLOBALS`.

## Event Configs

`client/src/eventConfigs.js` — Defines multiple event configurations (workshop for students, faculty for law professors). Each config specifies tabs, showcase items (with category/tags for filtering), and resources. Selected by URL hash — `/#faculty`, `/#practicesummit`, `/#calicon26`; an unrecognized or absent hash falls back to `workshop`. The only query param is `?present=1`, which keeps the Slides iframe mounted across tab switches so the deck holds its position.

## Key Files

- `client/src/eventConfigs.js` — Event-specific configuration (tabs, showcase items, resources)
- `client/src/Home.jsx` — Default landing page with workshop overview and tab navigation
- `client/src/Showcase.jsx` — Tool showcase with category filter bar (All/Teaching/Research/Community) and image lightbox
- `client/src/SandboxedIframe.jsx` — Shared iframe rendering pipeline (prepareHtml, wrapReactCode, CDN shims)
- `client/src/PromptWizard.jsx` — Build tab single-screen launchpad (prompt template + idea cards)
- `client/src/Preview.jsx` — Preview tab (paste code, render in SandboxedIframe)
- `client/src/Deploy.jsx` — Deployment guide for single-file apps
- `client/src/Resources.jsx` — Curated links to vibe-coding articles and guides
- `client/src/assetUrl.js` — Rebases root-relative asset paths onto the Pages base path
- `client/public/slides.html` — Self-contained 23-slide student deck with auto-scaling
- `client/public/slides-faculty.html` — Faculty slide deck (auto-numbered via JS)
- `client/public/slides-practicesummit.html` — AI Legal Practice Summit deck
- `client/public/slides-calicon26.html` — CALIcon 26 deck
- `client/public/showcase/` — Screenshot images for showcase tools
- `.github/workflows/deploy.yml` — Builds and publishes to GitHub Pages on push to `master`
- `backup-handout.html` — Offline backup with all prompts, ideas, and session plan

## Conventions

- ESM throughout (`"type": "module"` in `client/package.json`)
- Tailwind utility classes, no CSS modules or styled-components
- No TypeScript — plain JSX
- Fully static: no server, no API, no database. Anything needing persistence belongs in a third-party service, not a backend in this repo.

## Other Files

- `scratch/` — Non-code working files (CLE descriptions, drafts, notes)

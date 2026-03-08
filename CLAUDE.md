# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project

Single web app for a live vibe-coding workshop (~100 law students). Five tabs: Slides (embedded HTML deck), Build (prompt wizard for Gemini Canvas), Preview (paste code to test rendering), Gallery (submit/view/vote/comment on student HTML projects), Resources (curated links). Hidden admin page at `/#admin` for database reset. Brand: "Vibe Coding Workshop", primary color scarlet `#BA0C2F`.

## Commands

```bash
# Local dev (two terminals)
cd client && npm run dev          # Vite HMR on :5173, proxies /api → :3001
cd server && node index.js        # Express API on :3001

# Build
cd client && npm run build        # Output → client/dist/

# Lint
cd client && npm run lint

# Reset database
rm server/data/workshop.db        # Recreated on next server start
```

## Architecture

**Client** (`client/`): Vite + React 19 + Tailwind v4. Tab-based SPA — `App.jsx` renders `Slides.jsx`, `PromptWizard.jsx`, `Preview.jsx`, `Gallery.jsx`, or `Resources.jsx` based on active tab. `/#admin` renders `Admin.jsx` (hidden, not in nav). Fonts: BioRhyme (headings) + Source Sans Pro (body).

**Server** (`server/`): Express serving the built client as static files + 6 REST endpoints. Uses `sql.js` (pure-JS SQLite compiled to WASM — chosen because `better-sqlite3` requires Visual Studio on this Windows machine). Database persisted to `server/data/workshop.db`, saved to disk after every write. Loads `.env` from project root for local dev (Render sets env vars via dashboard).

**API**: `GET /api/projects` (sorted by votes desc, includes `is_owner` flag per cookie), `POST /api/projects` (author, title, html; stores voter_id as author_id), `POST /api/projects/:id/vote` (dedup via voter_id cookie), `POST /api/projects/:id/comments` (name, text), `DELETE /api/projects/:id` (owner-only, checks author_id matches voter_id cookie), `POST /api/admin/reset` (password-protected, clears all projects). The `voters` and `comments` columns store JSON strings, parsed on read by `parseProject()` in `index.js`.

**Iframe rendering** (`SandboxedIframe.jsx`): Shared module used by both Gallery and Build tabs. Students paste code from Gemini Canvas which may be React/JSX (with imports) or plain HTML. The `prepareHtml()` → `wrapReactCode()` pipeline: (1) parses all import statements, (2) strips them from the code, (3) generates CDN script tags and `const { ... } = window.globalName` shims, (4) wraps everything in an HTML shell with React, Babel standalone, and Tailwind loaded via CDN. Rendered in sandboxed iframes via Blob URLs.

**PromptWizard** (`PromptWizard.jsx`): Single-screen launchpad — one copyable prompt template at the top, six idea cards below. Clicking a card swaps the prompt content; a Reset link returns to the template. No sidebar, no preview pane, no accordions.

**Deploy**: `render.yaml` defines a single Render Web Service (Starter plan, $7/mo) with a 1GB persistent disk for SQLite. Repo: `rlfordon/vibe-coding-workshop-ud` (private). Build requires `npm install --include=dev` since Vite is a devDependency.

## Iframe CDN Rendering

The lucide-react UMD bundle expects `window.react` (lowercase) but React's UMD sets `window.React` (uppercase). Fixed by injecting `window.react = window.React` shim before CDN libs load, and using `'LucideReact'` (PascalCase) in `LIB_GLOBALS`.

## Key Files

- `client/src/SandboxedIframe.jsx` — Shared iframe rendering pipeline (prepareHtml, wrapReactCode, CDN shims)
- `client/src/Gallery.jsx` — Gallery UI (submit/vote/comment)
- `client/src/PromptWizard.jsx` — Build tab single-screen launchpad (prompt template + idea cards)
- `client/src/Preview.jsx` — Preview tab (paste code, render in SandboxedIframe)
- `client/src/Resources.jsx` — Curated links to vibe-coding articles and guides
- `client/src/Admin.jsx` — Password-protected database reset (hidden at `/#admin`)
- `server/db.js` — sql.js wrapper providing a better-sqlite3-like API (`prepare().all()`, `.get()`, `.run()`)
- `client/public/slides.html` — Self-contained 23-slide deck with auto-scaling, served as static file
- `backup-handout.html` — Offline backup with all prompts, ideas, and session plan

## Conventions

- ESM throughout (`"type": "module"` in both package.json files)
- Tailwind utility classes, no CSS modules or styled-components
- No TypeScript — plain JSX
- Vite dev proxy handles `/api` routing; in production Express serves both static and API

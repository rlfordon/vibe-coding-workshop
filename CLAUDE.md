# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project

Single web app for a live vibe-coding workshop (~100 law students, OSU Moritz College of Law). Three tabs: Slides (embedded HTML deck), Build (prompt wizard for Gemini Canvas), Gallery (submit/view/vote/comment on student HTML projects). Brand: "Vibe Coding Workshop", primary color OSU scarlet `#BA0C2F`.

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

**Client** (`client/`): Vite + React 19 + Tailwind v4. Tab-based SPA — `App.jsx` renders `Slides.jsx`, `PromptWizard.jsx`, or `Gallery.jsx` based on active tab. Fonts: BioRhyme (headings) + Source Sans Pro (body).

**Server** (`server/`): Express serving the built client as static files + 4 REST endpoints. Uses `sql.js` (pure-JS SQLite compiled to WASM — chosen because `better-sqlite3` requires Visual Studio on this Windows machine). Database persisted to `server/data/workshop.db`, saved to disk after every write.

**API**: `GET /api/projects` (sorted by votes desc), `POST /api/projects` (author, title, html), `POST /api/projects/:id/vote` (dedup via voter_id cookie), `POST /api/projects/:id/comments` (name, text). The `voters` and `comments` columns store JSON strings, parsed on read by `parseProject()` in `index.js`.

**Gallery iframe rendering** (`Gallery.jsx`): The most complex piece. Students paste code from Gemini Canvas which may be React/JSX (with imports) or plain HTML. The `prepareHtml()` → `wrapReactCode()` pipeline: (1) parses all import statements, (2) strips them from the code, (3) generates CDN script tags and `const { ... } = window.globalName` shims, (4) wraps everything in an HTML shell with React, Babel standalone, and Tailwind loaded via CDN. Rendered in sandboxed iframes via Blob URLs.

**Deploy**: `render.yaml` defines a single Render Web Service with a 1GB persistent disk for SQLite.

## Critical Known Bug

The lucide-react UMD CDN bundle doesn't expose icon components correctly via `window.lucideReact`. Student React code that imports from `lucide-react` renders blank. See `TODO.md` for fix options and `test-output.html` for a standalone reproduction. The relevant code is in `Gallery.jsx` functions: `wrapReactCode()`, `parseImports()`, `buildImportShims()`, `LIB_GLOBALS` map.

## Key Files

- `client/src/Gallery.jsx` — Gallery + iframe sandboxing logic (the complex part)
- `server/db.js` — sql.js wrapper providing a better-sqlite3-like API (`prepare().all()`, `.get()`, `.run()`)
- `client/public/slides.html` — Copy of `vibe-coding-slides.html`, served as static file
- `justice-tech-exercise.jsx` — Original prompt wizard component (source material for `PromptWizard.jsx`)

## Conventions

- ESM throughout (`"type": "module"` in both package.json files)
- Tailwind utility classes, no CSS modules or styled-components
- No TypeScript — plain JSX
- Vite dev proxy handles `/api` routing; in production Express serves both static and API

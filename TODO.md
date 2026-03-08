# Vibe Coding Workshop — TODO

## What's Done

- **Project scaffolded**: Vite + React + Tailwind client, Express + sql.js server
- **App.jsx**: Tab navigation (Slides | Build | Preview | Gallery | Resources) with minimal nav on slides view
- **Slides.jsx**: Embeds `slides.html` in iframe — slides auto-scale to fill available space
- **PromptWizard.jsx**: Redesigned as single-screen launchpad — one copyable prompt template + six idea cards — working
- **SandboxedIframe.jsx**: Extracted from Gallery as shared module — used by both Gallery and Preview tabs
- **Gallery.jsx**: Submit modal, project cards with vote/comment, expanded view modal — working
- **Resources.jsx**: Links to vibe-coding articles and guides (moved out of slide deck)
- **Admin page**: Password-protected database reset at `/#admin` (requires `ADMIN_PASSWORD` env var)
- **Server API**: 5 endpoints (GET projects, POST project, POST vote, POST comment, POST admin/reset)
- **Database**: sql.js (pure JS SQLite, no native deps needed)
- **Config**: render.yaml, .env, .gitignore, README.md all created
- **Branding**: "Vibe Coding Workshop", scarlet #BA0C2F, BioRhyme + Source Sans Pro fonts
- **Slide deck**: 21-slide deck redesigned with story arc, project showcase, and free tools list
- **Preview tab**: Code/Preview toggle, auto-switches to preview on paste

## What's Fixed

- **Gallery iframe rendering of React/JSX** — lucide-react UMD expected `window.react` (lowercase) but React UMD sets `window.React`. Fixed with `window.react = window.React` shim + PascalCase `LIB_GLOBALS`.
- **Render deploy** — changed to Starter plan for persistent disk; added `--include=dev` for Vite in build command.
- **GitHub repo** — `rlfordon/vibe-coding-workshop-ud` (private), deployed via Render Blueprint.
- **Server .env loading** — added lightweight .env loader for local dev (Render sets env vars in dashboard).

## Remaining Items

- [ ] Test full flow on Render: submit React project → renders in gallery → vote → comment
- [ ] Test with plain HTML submissions too (not just React/JSX)
- [ ] Mobile responsiveness pass on gallery
- [ ] Set `ADMIN_PASSWORD` env var in Render dashboard

## Future Ideas

- [ ] **Iteration guidance** — "what to do once you have a working app" content (tips, next steps); could be its own tab or section
- [ ] **AI-powered idea feedback** — use AI on the Build page to give students feedback on their idea before they go to Gemini (big scope)

## Class Plan

**Total time:** ~75 min (flexible 60–90)
**Slides:** ~20 min

**Activity flow:**
1. ~2 min — Form clusters (4–6), pick your own idea (from Build tab or bring your own)
2. ~20 min — Build, first sprint (plan with Gemini, then build in Canvas)
3. ~3 min — Cluster check-in ("show what you have")
4. ~20 min — Build, second sprint (iterate, level up)
5. ~5 min — Swap & test (try someone else's app)
6. ~5 min — Whole-room share (volunteers demo 60 sec each)

**Key points to hit in slides:**
- Open with Thanksgiving app story (jaw-drop moment)
- Emphasize planning conversation before building ("don't just say build me an app")
- Canvas button under Tools — fallback is copy code into Preview tab
- Clusters are support groups, not topic groups
- End with "I started just like you" showcase + free tools for continuing

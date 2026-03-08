# Vibe Coding Workshop — TODO

## What's Done

- **Project scaffolded**: Vite + React + Tailwind client, Express + sql.js server
- **App.jsx**: Tab navigation (Slides | Build | Gallery) with minimal nav on slides view
- **Slides.jsx**: Embeds `vibe-coding-slides.html` in fullscreen iframe — working
- **PromptWizard.jsx**: Reworked — three-path layout (open-ended, inspiration, guided) + code preview pane — working
- **SandboxedIframe.jsx**: Extracted from Gallery as shared module — used by both Gallery and Build tabs
- **Gallery.jsx**: Submit modal, project cards with vote/comment, expanded view modal — working
- **Server API**: All 4 endpoints tested and working (GET projects, POST project, POST vote, POST comment)
- **Database**: sql.js (pure JS SQLite, no native deps needed)
- **Config**: render.yaml, .env.example, .gitignore, README.md all created
- **Branding**: "Vibe Coding Workshop", scarlet #BA0C2F, BioRhyme + Source Sans Pro fonts

## What's Fixed

- **Gallery iframe rendering of React/JSX** — lucide-react UMD expected `window.react` (lowercase) but React UMD sets `window.React`. Fixed with `window.react = window.React` shim + PascalCase `LIB_GLOBALS`.
- **Render deploy** — changed to Starter plan for persistent disk; added `--include=dev` for Vite in build command.
- **GitHub repo** — `rlfordon/vibe-coding-workshop-ud` (private), deployed via Render Blueprint.

## Remaining Items

- [ ] Test full flow on Render: submit React project → renders in gallery → vote → comment
- [ ] Test with plain HTML submissions too (not just React/JSX)
- [ ] Mobile responsiveness pass on gallery
- [ ] Consider adding a delete/reset mechanism for demo day
- [ ] Clean up `test-output.html` from project root (optional)

## Future Ideas

- [ ] **Preview tab** — move code preview out of Build into its own tab (more real estate, clearer separation from prompt phase)
- [ ] **Iteration guidance** — "what to do once you have a working app" content (tips, next steps); could be its own tab or section
- [ ] **AI-powered idea feedback** — use AI on the Build page to give students feedback on their idea before they go to Gemini (big scope)
- [ ] **Update slides** — iteration tips in the slide deck reference old app types from earlier workshop versions

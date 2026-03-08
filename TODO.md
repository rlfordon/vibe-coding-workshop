# Vibe Coding Workshop — TODO

## What's Done

- **Project scaffolded**: Vite + React + Tailwind client, Express + sql.js server
- **App.jsx**: Tab navigation (Slides | Build | Gallery) with minimal nav on slides view
- **Slides.jsx**: Embeds `vibe-coding-slides.html` in fullscreen iframe — working
- **PromptWizard.jsx**: Adapted from user's JSX — topic/mechanic picker + prompt generator — working
- **Gallery.jsx**: Submit modal, project cards with vote/comment, expanded view modal — working
- **Server API**: All 4 endpoints tested and working (GET projects, POST project, POST vote, POST comment)
- **Database**: sql.js (pure JS SQLite, no native deps needed)
- **Config**: render.yaml, .env.example, .gitignore, README.md all created
- **Branding**: "Vibe Coding Workshop" (not Justice Tech), OSU scarlet #BA0C2F, BioRhyme + Source Sans Pro fonts

## What's Broken

### Gallery iframe rendering of React/JSX code (CRITICAL)

Students paste React/JSX from Gemini Canvas into the gallery. The gallery renders it in sandboxed iframes. Currently:

1. **Import stripping** — FIXED. Multiline `import { ... } from '...'` blocks are now correctly removed.
2. **Import shim generation** — FIXED. Parses imports, respects aliases (`PieChart as PieChartIcon`), generates correct `const { ... } = window.globalName` destructuring.
3. **lucide-react UMD bundle** — BROKEN. `window.lucideReact` doesn't expose individual icon components the way we're destructuring them. The test-output.html file throws: `Element type is invalid: expected a string or class/function but got: undefined`. Need to find the correct way to access icons from the lucide-react CDN bundle, or switch to a different icon CDN approach.

### Fix approach options

- **Option A**: Find the correct global/export structure of the lucide-react UMD bundle and adjust destructuring
- **Option B**: Use `lucide` (not `lucide-react`) CDN and create thin React wrapper components for each icon
- **Option C**: Skip icon CDN entirely — replace icon references in stripped code with simple emoji/text fallbacks
- **Option D**: Use a different approach entirely — e.g., have Babel standalone handle the imports via a custom plugin that maps to globals

### Files involved
- `client/src/Gallery.jsx` — the `wrapReactCode()`, `parseImports()`, `buildImportShims()` functions (around line 346+)
- `test-output.html` — standalone test file in project root for debugging the CDN approach in browser

## Other Items

- [ ] Clean up `test-output.html` from project root after fixing
- [ ] Clear stale test data from server/data/workshop.db before demo
- [ ] Verify the Vite dev proxy works (client :5173 → server :3001) end-to-end
- [ ] Test full flow: submit React project → see it render in gallery → vote → comment
- [ ] Test with plain HTML submissions too (not just React/JSX)
- [ ] Mobile responsiveness pass on gallery
- [ ] Consider adding a delete/reset mechanism for demo day

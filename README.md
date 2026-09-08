# Vibe Coding Workshop

A ready-to-run web app for teaching **vibe coding** — building real web apps using AI, no prior coding experience required. Originally designed for ~100 law students at the University of Dayton School of Law, but built to be forked and adapted for any classroom.

---

## For Students

### How the workshop works

Everything lives in one app with tabs that walk you through the process:

1. **Slides** — A 23-slide deck covering what vibe coding is and how to do it. Use arrow keys to navigate.
2. **Build** — Pick from six starter project ideas (tenant rights quiz, case brief builder, contract red-flag spotter, and more), copy a ready-made prompt, and paste it into [Gemini Canvas](https://gemini.google.com) to start building.
3. **Preview** — Paste your code from Gemini Canvas to instantly see how it looks. Supports plain HTML and React.
4. **Deploy** — A step-by-step guide to publishing your app to a real website for free.
5. **Resources** — Articles and guides on vibe coding, secure development, and legal tech.

### Quick tips

- You don't need to install anything — the workshop app runs in your browser
- The Build tab gives you a prompt template that's designed to work well with Gemini Canvas
- When you're ready to share, follow the Deploy tab to publish your project at a real URL

---

## For Educators

This project is open for you to fork and adapt for your own workshops. Here's what you'd want to customize:

### What to change

| What | Where | Notes |
|------|-------|-------|
| **Slide content** | `client/public/slides.html` | Self-contained HTML file — edit directly. 23 slides with auto-scaling. |
| **Project ideas & prompts** | `client/src/PromptWizard.jsx` | Array of idea cards at the top of the file. Each has a title, description, and a full prompt. Swap in ideas relevant to your discipline. |
| **Resource links** | `client/src/Resources.jsx` | Array of curated links at the top of the file. |
| **Deploy guide** | `client/src/Deploy.jsx` | Step-by-step deployment instructions shown to students. |
| **Branding & colors** | `client/src/App.jsx` | The primary color (`#BA0C2F` scarlet) and fonts (BioRhyme + Source Sans Pro) are set inline. |
| **Events & tabs** | `client/src/eventConfigs.js` | Each event config defines its own tabs, showcase items, and resources. Select one by URL hash (`/#faculty`); no hash falls back to `workshop`. |
| **Base path** | `client/vite.config.js` | Set `base` to match your repo name for GitHub Pages, or `'/'` for a custom domain. |
| **Backup handout** | `backup-handout.html` | Offline HTML file with all prompts and the session plan — good to have if the network goes down. |

### What you get out of the box

- A **sandboxed iframe renderer** that handles both plain HTML and React/JSX code (with automatic CDN imports), so students can paste code straight from Gemini Canvas
- A **prompt wizard** that lowers the barrier to getting started — students pick an idea card and get a well-crafted prompt instead of staring at a blank text box
- A **showcase** of finished tools with category filtering and an image lightbox, configured per event
- **Multiple event configs** in one deployment — run a student workshop, a faculty talk, and a conference session from the same URL with different hashes
- **Zero-cost hosting** — the app is fully static, so GitHub Pages serves it free with no server, database, or cold starts

---

## Running It Yourself

### Prerequisites

- [Node.js](https://nodejs.org/) 18+

### Install & run

```bash
cd client && npm install
npm run dev
```

Open **http://localhost:5173**. There is no server to start — the app is fully static.

To check a production build the way it will actually be served:

```bash
cd client && npm run build && npm run preview
```

---

## Deploying to GitHub Pages

`.github/workflows/deploy.yml` builds `client/` and publishes `client/dist` on every push to `master`.

1. Fork this repo and push to GitHub
2. Set `base` in `client/vite.config.js` to `'/<your-repo-name>/'`
3. In the repo, go to **Settings → Pages → Build and deployment → Source** and choose **GitHub Actions**
4. Push to `master` — the workflow lints, builds, and deploys

The site lands at `https://<your-username>.github.io/<your-repo-name>/`.

> **Base path gotcha:** Pages serves the app from a subpath, so root-relative asset
> paths in JS (`/slides.html`, `/showcase/foo.png`) would 404. Vite rewrites imports
> and `index.html`, but never runtime string literals. `client/src/assetUrl.js`
> rebases those at the point of use — route any new root-relative asset path
> through it. On a custom domain, set `base` to `'/'` and this stops mattering.

---

## Project Structure

```
client/                         React frontend (Vite + React 19 + Tailwind v4)
├── src/
│   ├── App.jsx                 Tab-based SPA shell
│   ├── PromptWizard.jsx        Build tab — prompt template + idea cards
│   ├── Preview.jsx             Paste-and-render previewer
│   ├── Showcase.jsx            Tool showcase with filters + lightbox
│   ├── Deploy.jsx              Deployment guide for students
│   ├── Resources.jsx           Curated links
│   ├── SandboxedIframe.jsx     Shared iframe renderer (HTML + React/JSX)
│   ├── Slides.jsx              Embedded slide deck
│   ├── eventConfigs.js         Per-event tabs, showcase items, resources
│   └── assetUrl.js             Rebases asset paths onto the Pages base path
├── public/
│   ├── slides.html             Self-contained slide deck
│   └── showcase/               Screenshots for showcase cards
.github/workflows/deploy.yml    Builds and publishes to GitHub Pages
backup-handout.html             Offline fallback handout
```

## Tech Stack

| | |
|---|---|
| **Frontend** | React 19, Vite, Tailwind CSS v4 |
| **Backend** | None — fully static |
| **Hosting** | GitHub Pages (via GitHub Actions) |

---

## Useful Commands

```bash
cd client && npm run dev         # Dev server with hot reload
cd client && npm run build       # Production build
cd client && npm run preview     # Serve the build at the real base path
cd client && npm run lint        # Lint frontend
```

---

## License

[MIT License](LICENSE) — fork it, adapt it, teach with it.

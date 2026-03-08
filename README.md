# Vibe Coding Workshop

A ready-to-run web app for teaching **vibe coding** — building real web apps using AI, no prior coding experience required. Originally designed for ~100 law students at the University of Dayton School of Law, but built to be forked and adapted for any classroom.

---

## For Students

### How the workshop works

Everything lives in one app with six tabs that walk you through the process:

1. **Slides** — A 23-slide deck covering what vibe coding is and how to do it. Use arrow keys to navigate.
2. **Build** — Pick from six starter project ideas (tenant rights quiz, case brief builder, contract red-flag spotter, and more), copy a ready-made prompt, and paste it into [Gemini Canvas](https://gemini.google.com) to start building.
3. **Preview** — Paste your code from Gemini Canvas to instantly see how it looks. Supports plain HTML and React.
4. **Gallery** — Submit your finished project for the class to see. Browse, vote on, and comment on each other's work.
5. **Deploy** — A step-by-step guide to publishing your app to a real website for free.
6. **Resources** — Articles and guides on vibe coding, secure development, and legal tech.

### Quick tips

- You don't need to install anything — the workshop app runs in your browser
- The Build tab gives you a prompt template that's designed to work well with Gemini Canvas
- When you're ready to share, submit your project in the Gallery tab and see what everyone else built

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
| **Admin password** | Environment variable `ADMIN_PASSWORD` | Used for the hidden database reset page at `/#admin`. |
| **Backup handout** | `backup-handout.html` | Offline HTML file with all prompts and the session plan — good to have if the network goes down. |

### What you get out of the box

- A **Gallery** where students submit HTML projects, view them live in sandboxed iframes, vote, and comment — no setup needed per student
- A **sandboxed iframe renderer** that handles both plain HTML and React/JSX code (with automatic CDN imports), so students can paste code straight from Gemini Canvas
- A **prompt wizard** that lowers the barrier to getting started — students pick an idea card and get a well-crafted prompt instead of staring at a blank text box
- A **single-server deployment** on Render's free/starter tier with SQLite — no database service to configure
- An **admin reset** at `/#admin` to wipe the gallery between workshop sessions

---

## Running It Yourself

### Prerequisites

- [Node.js](https://nodejs.org/) 18+

### Install & run

```bash
# Install dependencies
cd client && npm install && cd ../server && npm install

# Terminal 1 — start the API server
cd server && node index.js

# Terminal 2 — start the frontend with hot reload
cd client && npm run dev
```

Open **http://localhost:5173**. The Vite dev server proxies `/api` requests to Express on port 3001.

### Environment variables

Create a `.env` file in the project root:

```
ADMIN_PASSWORD=your-password-here
```

On Render, set environment variables through the dashboard.

---

## Deploying to Render

**One-click Blueprint deploy:**

1. Fork this repo and push to GitHub
2. In the [Render Dashboard](https://dashboard.render.com) → **New > Blueprint**
3. Connect your repo — Render reads `render.yaml` automatically
4. Click **Apply**

This creates a web service on the Starter plan ($7/mo) with a 1 GB persistent disk for the SQLite database.

<details>
<summary>Manual setup</summary>

Create a **Web Service** with:

- **Build:** `cd client && npm install --include=dev && npm run build && cd ../server && npm install`
- **Start:** `cd server && node index.js`
- **Disk:** Mount at `/opt/render/project/src/server/data` (1 GB)
- **Env vars:** `NODE_ENV=production`, `ADMIN_PASSWORD=...`

</details>

---

## Project Structure

```
client/                         React frontend (Vite + React 19 + Tailwind v4)
├── src/
│   ├── App.jsx                 Tab-based SPA shell
│   ├── PromptWizard.jsx        Build tab — prompt template + idea cards
│   ├── Preview.jsx             Paste-and-render previewer
│   ├── Gallery.jsx             Submit / vote / comment
│   ├── Deploy.jsx              Deployment guide for students
│   ├── Resources.jsx           Curated links
│   ├── SandboxedIframe.jsx     Shared iframe renderer (HTML + React/JSX)
│   ├── Slides.jsx              Embedded slide deck
│   └── Admin.jsx               Database reset (/#admin)
├── public/
│   └── slides.html             Self-contained slide deck
server/
├── index.js                    Express API (6 endpoints)
├── db.js                       SQLite via sql.js (pure-JS WASM, no native deps)
└── data/                       Auto-created; holds workshop.db
render.yaml                     Render Blueprint config
backup-handout.html             Offline fallback handout
```

## Tech Stack

| | |
|---|---|
| **Frontend** | React 19, Vite, Tailwind CSS v4 |
| **Backend** | Express on Node.js |
| **Database** | SQLite via [sql.js](https://github.com/sql-js/sql.js) (pure-JS — no native compilation needed) |
| **Hosting** | Render (Web Service + persistent disk) |

## API

| Method | Endpoint | Description |
|--------|----------|-------------|
| `GET` | `/api/projects` | List all projects (sorted by votes) |
| `POST` | `/api/projects` | Submit a project (author, title, html) |
| `POST` | `/api/projects/:id/vote` | Vote (deduplicated per browser) |
| `POST` | `/api/projects/:id/comments` | Add a comment |
| `DELETE` | `/api/projects/:id` | Delete your own project |
| `POST` | `/api/admin/reset` | Reset the database (password-protected) |

---

## Useful Commands

```bash
cd client && npm run build       # Production build
cd client && npm run lint        # Lint frontend
rm server/data/workshop.db       # Reset database (recreated on next server start)
```

---

## License

Built for educational use. Fork it, adapt it, teach with it.

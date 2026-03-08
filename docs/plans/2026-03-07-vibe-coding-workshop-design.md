# Vibe Coding Workshop Site — Design

## Overview

Single web app for a live vibe-coding workshop (~100 law students, 60-90 min). Three sections in a tab-based SPA: slide deck, prompt wizard, and project gallery.

## Architecture

Express server serving a Vite+React frontend and a REST API. SQLite via `better-sqlite3`. Deployed as one Render Web Service.

```
├── client/                # React app (Vite + Tailwind)
│   ├── src/
│   │   ├── App.jsx        # Tab router + nav
│   │   ├── Slides.jsx     # Iframe embedding slides HTML
│   │   ├── PromptWizard.jsx
│   │   └── Gallery.jsx    # Submit, view, vote, comment
│   └── public/
│       └── slides.html    # Self-contained slide deck
├── server/
│   ├── index.js           # Express + API routes
│   └── db.js              # SQLite setup + queries
├── render.yaml
└── .env.example
```

## Navigation

- Three tabs: Slides | Build | Gallery
- Top bar: "Vibe Coding Workshop" + scarlet accent + tabs
- Slides tab active: nav shrinks to thin strip (just tab buttons), slides fill viewport in iframe

## Gallery

**Data model (one table):**
- id (auto-increment), author (text), title (text), html (text), votes (integer default 0), voters (JSON text, array of voter IDs), comments (JSON text, array of {name, text, timestamp}), created_at (datetime)

**API:**
- `POST /api/projects` — submit project
- `GET /api/projects` — list all, sorted by votes desc
- `POST /api/projects/:id/vote` — upvote (dedup via voter_id cookie)
- `POST /api/projects/:id/comments` — add comment

**Voter dedup:** Random session cookie (`voter_id`) set on first visit.

**UI:**
- Grid of cards: title, author, vote count, vote button, sandboxed iframe preview
- Expand button opens modal with larger iframe
- Collapsible comment section per project
- Submit form as prominent button/modal

## Prompt Wizard

Adapted from existing JSX. Same topic/mechanic/prompt logic. Remove JusticeTechLogo, use site-wide branding. Minimal restyle for cohesion.

## Design

- Fonts: BioRhyme (headings) + Source Sans Pro (body)
- Primary color: scarlet #BA0C2F
- Clean/minimal, white + slate accents
- Mobile-responsive

## Backend

- Express + better-sqlite3
- No auth, no persistent accounts
- Session cookie for vote dedup only
- SQLite DB created on startup if not exists

## Deployment

- Render Web Service (free tier)
- render.yaml for config
- Build: `cd client && npm run build`
- Start: `node server/index.js`
- Server serves built client as static files

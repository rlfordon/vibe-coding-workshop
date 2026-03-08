# Vibe Coding Workshop

A web app for a live vibe-coding workshop at Ohio State Moritz College of Law. Three sections:

- **Slides** — 20-slide instructional deck (arrow keys to navigate)
- **Build** — Prompt wizard that helps students pick a legal topic + game mechanic and generates a starter prompt for Gemini Canvas
- **Gallery** — Students submit HTML projects, view them live in sandboxed iframes, vote, and comment

## Local Development

**Prerequisites:** Node.js 18+

```bash
# Install dependencies
cd client && npm install && cd ../server && npm install

# Start the dev server (client with hot reload)
cd client && npm run dev

# In another terminal, start the API server
cd server && node index.js
```

The client dev server runs on `http://localhost:5173` and proxies API requests to the server on port 3001.

## Deploy to Render

1. Push this repo to GitHub
2. Go to [Render Dashboard](https://dashboard.render.com) → New → **Blueprint**
3. Connect your GitHub repo — Render will read `render.yaml` automatically
4. Click **Apply** — it will create a web service with a persistent disk for the SQLite database

Or manually create a **Web Service**:
- **Build command:** `cd client && npm install && npm run build && cd ../server && npm install`
- **Start command:** `cd server && node index.js`
- Add a **Disk** mounted at `/opt/render/project/src/server/data` (1 GB)

## Project Structure

```
├── client/              # React app (Vite + Tailwind)
│   ├── src/
│   │   ├── App.jsx      # Tab navigation
│   │   ├── Slides.jsx   # Embedded slide deck
│   │   ├── PromptWizard.jsx  # Topic/mechanic picker + prompt generator
│   │   └── Gallery.jsx  # Submit, view, vote, comment
│   └── public/
│       └── slides.html  # Self-contained slide deck
├── server/
│   ├── index.js         # Express API server
│   └── db.js            # SQLite (sql.js) setup
├── render.yaml          # Render deployment config
└── .env.example
```

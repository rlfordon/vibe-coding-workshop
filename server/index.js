import { readFileSync } from "fs";
import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
import crypto from "crypto";
import path from "path";
import { fileURLToPath } from "url";
import db from "./db.js";

// Load .env from project root (Render sets env vars directly, this is for local dev)
try {
  const envPath = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..", ".env");
  const envContents = readFileSync(envPath, "utf-8");
  for (const line of envContents.split("\n")) {
    const match = line.match(/^\s*([\w]+)\s*=\s*(.*)\s*$/);
    if (match && !(match[1] in process.env)) {
      process.env[match[1]] = match[2];
    }
  }
} catch { /* .env not found — fine in production */ }

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 3001;

// ---------------------------------------------------------------------------
// Middleware
// ---------------------------------------------------------------------------
app.use(cors());
app.use(express.json({ limit: "2mb" }));
app.use(cookieParser());

// Assign a voter_id cookie on first visit
app.use((req, res, next) => {
  if (!req.cookies.voter_id) {
    res.cookie("voter_id", crypto.randomUUID(), {
      httpOnly: true,
      maxAge: 1000 * 60 * 60 * 24 * 365, // 1 year
    });
  }
  next();
});

// ---------------------------------------------------------------------------
// Static files — built React app & slides
// ---------------------------------------------------------------------------
const clientDist = path.join(__dirname, "..", "client", "dist");

app.use(express.static(clientDist));

// Serve the slides HTML explicitly so it's reachable at /slides.html
app.use("/slides.html", express.static(path.join(clientDist, "slides.html")));

// ---------------------------------------------------------------------------
// Helper – parse JSON columns and return a plain project object
// ---------------------------------------------------------------------------
function parseProject(row) {
  return {
    ...row,
    voters: JSON.parse(row.voters),
    comments: JSON.parse(row.comments),
  };
}

// ---------------------------------------------------------------------------
// API routes
// ---------------------------------------------------------------------------

// GET /api/projects — all projects sorted by votes desc
app.get("/api/projects", (req, res) => {
  const rows = db.prepare("SELECT * FROM projects ORDER BY votes DESC").all();
  res.json(rows.map(parseProject));
});

// POST /api/projects — create a new project
app.post("/api/projects", (req, res) => {
  const { author, title, html } = req.body;

  if (
    !author || typeof author !== "string" || !author.trim() ||
    !title  || typeof title  !== "string" || !title.trim()  ||
    !html   || typeof html   !== "string" || !html.trim()
  ) {
    return res.status(400).json({ error: "author, title, and html are required non-empty strings." });
  }

  db.prepare("INSERT INTO projects (author, title, html) VALUES (?, ?, ?)")
    .run(author.trim(), title.trim(), html.trim());

  const row = db.prepare("SELECT * FROM projects ORDER BY id DESC LIMIT 1").get();
  res.status(201).json(parseProject(row));
});

// POST /api/projects/:id/vote — vote for a project (one vote per voter_id)
app.post("/api/projects/:id/vote", (req, res) => {
  const voterId = req.cookies.voter_id;
  if (!voterId) {
    return res.status(400).json({ error: "No voter_id cookie found." });
  }

  const row = db.prepare("SELECT * FROM projects WHERE id = ?").get(req.params.id);
  if (!row) {
    return res.status(404).json({ error: "Project not found." });
  }

  const voters = JSON.parse(row.voters);

  if (voters.includes(voterId)) {
    return res.status(400).json({ error: "You have already voted for this project." });
  }

  voters.push(voterId);
  const newVotes = row.votes + 1;

  db.prepare("UPDATE projects SET votes = ?, voters = ? WHERE id = ?").run(
    newVotes,
    JSON.stringify(voters),
    req.params.id
  );

  const updated = db.prepare("SELECT * FROM projects WHERE id = ?").get(req.params.id);
  res.json(parseProject(updated));
});

// POST /api/projects/:id/comments — add a comment
app.post("/api/projects/:id/comments", (req, res) => {
  const { name, text } = req.body;

  if (
    !name || typeof name !== "string" || !name.trim() ||
    !text || typeof text !== "string" || !text.trim()
  ) {
    return res.status(400).json({ error: "name and text are required non-empty strings." });
  }

  const row = db.prepare("SELECT * FROM projects WHERE id = ?").get(req.params.id);
  if (!row) {
    return res.status(404).json({ error: "Project not found." });
  }

  const comments = JSON.parse(row.comments);
  comments.push({
    name: name.trim(),
    text: text.trim(),
    timestamp: new Date().toISOString(),
  });

  db.prepare("UPDATE projects SET comments = ? WHERE id = ?").run(
    JSON.stringify(comments),
    req.params.id
  );

  const updated = db.prepare("SELECT * FROM projects WHERE id = ?").get(req.params.id);
  res.json(parseProject(updated));
});

// ---------------------------------------------------------------------------
// Admin — password-protected database reset
// ---------------------------------------------------------------------------
app.post("/api/admin/reset", (req, res) => {
  const adminPassword = process.env.ADMIN_PASSWORD;
  if (!adminPassword) {
    return res.status(503).json({ error: "Admin not configured." });
  }

  const { password } = req.body;
  if (!password || password !== adminPassword) {
    return res.status(401).json({ error: "Wrong password." });
  }

  db.prepare("DELETE FROM projects").run();
  res.json({ ok: true, message: "All projects deleted." });
});

// ---------------------------------------------------------------------------
// SPA fallback — serve index.html for any non-API, non-static route
// ---------------------------------------------------------------------------
app.get("*", (req, res) => {
  res.sendFile(path.join(clientDist, "index.html"));
});

// ---------------------------------------------------------------------------
// Start
// ---------------------------------------------------------------------------
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});

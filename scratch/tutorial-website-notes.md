# Tutorial Website: "From Canvas to Live Site"

Working notes for a standalone website walking non-technical legal professionals through the developer-stack path (Claude Code + GitHub + Render).

## Why a website, not an article

- Long DIY guides as walls of text are painful — need anchors, sticky TOC, navigation
- Interactive elements only a website can do: Mac/Windows toggle, copy buttons on prompts, tick-off checkboxes, progress bar
- Meta-credibility: "built with the exact stack I'm teaching you, here's the repo"
- Easier to maintain over time — update one section when a tool changes, vs. rewriting a long post

## Three-tier framing (lives in slides)

- **Tier 1 — In-session builders** (Canvas, AI Studio): paste output, prototype fast
- **Tier 2 — One-stop platforms** (Replit, Lovable): vibe-code AND deploy in one tool, no setup
- **Tier 3 — Developer stack** (Claude Code + GitHub + Render): max flexibility, requires installing tools

The tutorial website = walkthrough of Tier 3 specifically. Opens with a "which tier are you?" decision tree so readers who belong on Replit/Lovable don't waste time on a terminal setup guide they don't need.

## Audience

- Lawyers, paralegals, librarians
- Not deeply technical — may have never used a terminal
- Cross-platform (Mac + Windows) — Mac-only isn't realistic for this audience
- Worried about damaging their computer
- Already interested enough to graduate beyond Canvas

## Outline

1. **What you're signing up for** — one-sentence-each tool intros, Canvas vs. Claude Code tradeoff, what you can and can't damage
2. **Four rules before you touch anything**
   - Never commit secrets (API keys, passwords, client data) — what `.gitignore` is for
   - Work in a dedicated project folder, never `$HOME` directly
   - Keep default permission mode on — don't blanket-approve Claude Code
   - Everything lives in git, so you can always roll back
3. **Setup (one-time, ~30 min)** — VS Code, Claude Code extension, Git, GitHub account + GitHub Desktop, Render account (via GitHub sign-in)
4. **Your first project, end to end** — project folder, describe what you want, Plan Mode, review each diff before accepting
5. **Save it — Git in four commands** — what git is, `.gitignore` first, initial commit, push via GitHub Desktop
6. **Ship it — Render in five clicks** — connect to GitHub, point at repo, watch build log, live URL
7. **When things go wrong**
   - "I deleted the wrong thing" → `git restore`
   - "I committed an API key" → rotate immediately, then purge
   - "My deploy is broken" → read Render log, paste into Claude Code
   - "Claude keeps making it worse" → revert to last working commit
8. **The iterate loop** — VS Code → Claude edits → review → commit → push → auto-deploy
9. **When to stop DIY-ing** — signals you need a real developer (real client data, payments, authentication, regulated data)

## Site structure

- Single page, left sidebar TOC (desktop) + mobile drawer
- Sticky sidebar highlights where you are as you scroll
- Mac/Windows toggle at top of Setup section, swaps instructions/screenshots everywhere
- Copy buttons on every prompt and command
- Collapsible "what just happened?" explainers for curious readers
- Checkboxes on the Four Rules section (tick off before proceeding)
- FAQ-style searchable troubleshooting in Section 7
- Progress bar based on checked boxes
- Embedded screenshots at key moments (Plan Mode, GitHub Desktop commit, Render deploy log)
- "Last updated" date on each section
- Sticky "report an issue" link

## Stack decisions

- **Build with:** Vite + React (same as workshop app — Rebecca already knows it, reinforces "I used my own stack")
- **Host on:** Render (eat own dogfood, consistent with the message)
- **Domain:** Custom domain eventually; `*.onrender.com` subdomain acceptable for v1

## Tool references for the tutorial

- VS Code extension for Claude Code (less scary than raw terminal for first-timers)
- GitHub Desktop (avoids SSH keys / token auth nightmare for non-technical users)
- Render web services free tier

## Safety notes to weave in

- Default permission mode asks before each command — stay in it
- Mac Time Machine / Windows restore point before first run
- `.env` for secrets, `.gitignore` those files always
- Render is isolated (doesn't touch your machine)
- GitHub scrapers find leaked secrets within minutes — rotate anything that leaks immediately

## Open questions to resolve when drafting

- Does Claude Code install via VS Code extension alone, or does it need a separate CLI install? Worth checking current docs.
- Which AI model tier should the tutorial assume? (Free? Pro? Max?)
- Should there be a companion screencast later, or text-only?
- One long post or a series? → decided: one long page with good navigation.

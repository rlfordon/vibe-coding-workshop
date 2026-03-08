# Slide Deck Redesign Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Restructure the 20-slide deck into a 22-slide deck that follows Rebecca's personal vibe-coding story arc, matches the new Build/Preview tab flow, and moves inspiration + platform comparison to the end.

**Architecture:** Single self-contained HTML file (`client/public/slides.html`) with inline CSS and JS. Images referenced from same directory (`client/public/`). No build step for the slides themselves — just edit and verify in browser.

**Tech Stack:** Plain HTML/CSS/JS, no frameworks.

---

### Task 1: Add new slide 3 — "My first vibe-coded app"

**Files:**
- Modify: `client/public/slides.html`

**Step 1:** Insert a new slide after slide 2 (What is vibe coding?). This is a simple slide with the Thanksgiving app gif and minimal text. Rebecca narrates the story live.

```html
<!-- SLIDE 3: My first vibe-coded app -->
<div class="slide flex-col">
  <h1>My first vibe-coded app</h1>
  <p style="margin-bottom: 16px;">I made this for Thanksgiving dinner. No code. Just a conversation with AI.</p>
  <div style="flex: 1; display: flex; align-items: center; justify-content: center;">
    <img src="thanksgiving-demo.gif" alt="Thanksgiving Dinner Planner demo" style="max-height: 340px; border-radius: 10px; box-shadow: 0 4px 20px rgba(0,0,0,0.12);">
  </div>
  <span class="slide-number">3</span>
</div>
```

**Step 2:** Update all subsequent slide numbers (old slide 3 "Why vibe code?" becomes slide 4, etc.) and the slide count in the nav bar (`1 / 22`).

**Step 3:** Verify: open `slides.html` in browser, confirm new slide 3 renders with the gif, arrow keys navigate correctly, slide count shows `/ 22`.

**Step 4:** Commit.

```bash
git add client/public/slides.html
git commit -m "slides: add Thanksgiving app story slide"
```

---

### Task 2: Rewrite slide 9 — "Today's tool: Gemini Canvas"

**Files:**
- Modify: `client/public/slides.html`

**Step 1:** Replace the old slide 10 content (platform comparison with three columns) with a focused Gemini Canvas intro. This slide is now slide 9 (after the step-num shift from Task 1). Find the slide that has `<h1>Choose your platform</h1>` and replace its content:

```html
<!-- SLIDE 9: Today's tool -->
<div class="slide flex-col">
  <span class="step-num">2</span>
  <h1>Today's tool: Gemini Canvas</h1>
  <p style="margin-bottom: 16px;">Available through your <strong>university Google account</strong> — no signup needed.</p>
  <ul style="margin-top: 8px;">
    <li>Describe what you want in plain language</li>
    <li>Gemini writes the code and shows you a live preview</li>
    <li>Ask for changes — it updates the app in real time</li>
    <li>When you're happy, copy the code to share</li>
  </ul>
  <div class="callout" style="margin-top: 16px;">
    <p><strong>Canvas</strong> is Gemini's built-in code editor. You'll click the <strong>"Canvas"</strong> button under Tools when you're ready to build.</p>
  </div>
  <span class="slide-number">9</span>
</div>
```

**Step 2:** Verify slide 9 renders correctly in browser.

**Step 3:** Commit.

```bash
git add client/public/slides.html
git commit -m "slides: replace platform comparison with Gemini Canvas intro"
```

---

### Task 3: Update slide 10 — "Plan with AI"

**Files:**
- Modify: `client/public/slides.html`

**Step 1:** Find the slide with `<h1>Ask AI to help plan</h1>` (now slide 10 after renumbering). Replace its content to emphasize the back-and-forth planning conversation:

```html
<!-- SLIDE 10: Plan with AI -->
<div class="slide flex-col">
  <span class="step-num">3</span>
  <h1>Plan with AI</h1>
  <p style="margin-bottom: 12px;">Don't just say "build me an app." <strong>Have a conversation first.</strong></p>
  <ul style="margin-top: 8px;">
    <li>Tell Gemini what problem you want to solve and who it's for</li>
    <li>Let it ask you questions — answer honestly (even "I'm not sure" is fine)</li>
    <li>Go back and forth until you both understand what you're building</li>
    <li><em>Then</em> tell it to start building</li>
  </ul>
  <div class="callout" style="margin-top: 16px;">
    <p><strong>Your prompt template ends with:</strong> "Before you start building, ask me a few questions about who this is for and what their experience should be like."</p>
  </div>
  <span class="slide-number">10</span>
</div>
```

**Step 2:** Verify in browser.

**Step 3:** Commit.

```bash
git add client/public/slides.html
git commit -m "slides: update planning slide to emphasize conversation"
```

---

### Task 4: Update slide 11 — "Build it"

**Files:**
- Modify: `client/public/slides.html`

**Step 1:** Find the slide with `<h1>Execute</h1>` (now slide 11). Replace content to match the new Build tab flow:

```html
<!-- SLIDE 11: Build it -->
<div class="slide flex-col">
  <span class="step-num">4</span>
  <h1>Build it</h1>
  <ul style="margin-top: 8px;">
    <li>Go to the <strong>Build</strong> tab — copy the prompt template or pick an idea card</li>
    <li>Paste the prompt into Gemini and plan together</li>
    <li>When you're ready to build, click <strong>"Canvas"</strong> under Tools</li>
    <li>Test it — click through, try different inputs</li>
    <li>Don't worry about getting it perfect on the first try</li>
  </ul>
  <div class="callout" style="margin-top: 16px;">
    <p><strong>No Canvas button?</strong> That's OK — ask Gemini to write the code, then copy and paste it into the <strong>Preview</strong> tab to see it run.</p>
  </div>
  <span class="slide-number">11</span>
</div>
```

**Step 2:** Verify in browser.

**Step 3:** Commit.

```bash
git add client/public/slides.html
git commit -m "slides: update execute slide for new Build tab flow"
```

---

### Task 5: Move "What your app can & can't do" to slide 14

**Files:**
- Modify: `client/public/slides.html`

**Step 1:** Cut the slide that has `<h1>What your app can &amp; can't do</h1>` from its current position (after "The key distinction").

**Step 2:** Paste it after "Things you can ask for next" (slide 13), making it slide 14. Update the title to frame it for Gemini Canvas:

```html
<!-- SLIDE 14: What Gemini Canvas apps can & can't do -->
<div class="slide flex-col">
  <h1>What Canvas apps can &amp; can't do</h1>
```

Keep the rest of the slide content (can/can't columns, index card test) the same.

**Step 3:** Renumber all affected slides. Verify total is still 22.

**Step 4:** Verify in browser — slide order should be: ... Iterate (12), Things you can ask for next (13), What Canvas apps can & can't do (14), Let's try vibe coding (15) ...

**Step 5:** Commit.

```bash
git add client/public/slides.html
git commit -m "slides: move can/can't-do slide before activity as grounding"
```

---

### Task 6: Update slide 15 subtitle and slide 16 — "Your assignment"

**Files:**
- Modify: `client/public/slides.html`

**Step 1:** Update the "Let's try vibe coding" section divider (slide 15) subtitle:

```html
<!-- SLIDE 15: Let's try it -->
<div class="slide section-slide">
  <h1>Let's try vibe coding</h1>
  <p>Pick an idea and start building.</p>
  <span class="slide-number">15</span>
</div>
```

**Step 2:** Replace slide 16 (old "Your assignment" with cluster/topic/mechanic columns) with the new structure:

```html
<!-- SLIDE 16: Your assignment -->
<div class="slide flex-col">
  <h1>Your assignment</h1>
  <div class="two-col" style="margin-top: 8px;">
    <div>
      <h3>Pick your idea</h3>
      <ul>
        <li>Go to the <strong>Build</strong> tab</li>
        <li>Pick an idea card — or bring your own</li>
        <li>Copy the prompt</li>
      </ul>
      <h3 style="margin-top: 20px;">Sit in clusters</h3>
      <ul>
        <li>Groups of 4–6</li>
        <li>Your cluster = your support group</li>
        <li>Ask them for help before raising your hand</li>
      </ul>
    </div>
    <div>
      <h3>Goals</h3>
      <ul>
        <li>Plan with Gemini before you build</li>
        <li>Get a working first version</li>
        <li>Iterate — make it better</li>
        <li>Test it on someone in your cluster</li>
      </ul>
    </div>
  </div>
  <span class="slide-number">16</span>
</div>
```

**Step 3:** Verify in browser.

**Step 4:** Commit.

```bash
git add client/public/slides.html
git commit -m "slides: update assignment slide for individual ideas + support clusters"
```

---

### Task 7: Update slide 18 — Session plan timeline

**Files:**
- Modify: `client/public/slides.html`

**Step 1:** Find the "Session plan" slide and replace the timeline rows:

```html
<!-- SLIDE 18: Session plan -->
<div class="slide flex-col">
  <h1>Session plan</h1>
  <div style="margin-top: 8px;">
    <div class="timeline-row">
      <div class="timeline-time">~2 min</div>
      <div class="timeline-desc"><strong>Form clusters</strong> — groups of 4–6, pick your idea from the Build tab</div>
    </div>
    <div class="timeline-row">
      <div class="timeline-time">~20 min</div>
      <div class="timeline-desc"><strong>Build — first sprint</strong> — plan with Gemini, then start building</div>
    </div>
    <div class="timeline-row">
      <div class="timeline-time">~3 min</div>
      <div class="timeline-desc"><strong>Cluster check-in</strong> — show your cluster what you have so far</div>
    </div>
    <div class="timeline-row">
      <div class="timeline-time">~20 min</div>
      <div class="timeline-desc"><strong>Build — second sprint</strong> — keep iterating, level up</div>
    </div>
    <div class="timeline-row">
      <div class="timeline-time">~5 min</div>
      <div class="timeline-desc"><strong>Swap &amp; test</strong> — try someone else's app, give feedback</div>
    </div>
    <div class="timeline-row">
      <div class="timeline-time">~5 min</div>
      <div class="timeline-desc"><strong>Whole-room share</strong> — volunteers demo (60 sec each): what you built, what surprised you</div>
    </div>
  </div>
  <span class="slide-number">18</span>
</div>
```

**Step 2:** Verify in browser.

**Step 3:** Commit.

```bash
git add client/public/slides.html
git commit -m "slides: update session timeline with two sprints and check-ins"
```

---

### Task 8: Add slides 20-21 — "I started just like you" and "Keep going"

**Files:**
- Modify: `client/public/slides.html`

**Step 1:** After slide 19 ("Go build something"), insert two new slides. Add a CSS rule for the project showcase cards:

```css
.showcase-card {
  flex: 1;
  text-align: center;
  padding: 12px;
}

.showcase-card img {
  width: 100%;
  max-height: 240px;
  object-fit: contain;
  border-radius: 8px;
  box-shadow: 0 4px 16px rgba(0,0,0,0.1);
  margin-bottom: 10px;
}

.showcase-card h3 {
  font-size: 17px;
  margin-bottom: 4px;
  text-align: center;
}

.showcase-card .small {
  font-size: 12px;
}

.showcase-card a {
  color: var(--osu-scarlet);
  text-decoration: none;
  font-size: 12px;
  font-weight: 600;
}

.showcase-card a:hover {
  text-decoration: underline;
}
```

**Step 2:** Insert slide 20:

```html
<!-- SLIDE 20: I started just like you -->
<div class="slide flex-col">
  <h1>I started just like you</h1>
  <p style="margin-bottom: 12px;">Single-page apps built by talking to AI — no code written by hand.</p>
  <div class="two-col" style="align-items: flex-start;">
    <div class="showcase-card">
      <img src="thanksgiving-demo.gif" alt="Thanksgiving Dinner Planner">
      <h3>Thanksgiving Dinner Planner</h3>
      <a href="https://www.ailawlibrarians.com/2025/11/27/thanksgiving-vibe-coding-and-the-case-for-single-serving-legal-software/" target="_blank">Blog post →</a>
    </div>
    <div class="showcase-card">
      <img src="hallucination-game.png" alt="Citation Hallucination Game">
      <h3>Citation Hallucination Game</h3>
      <a href="https://hallucination-game.replit.app/" target="_blank">Try it →</a> · <a href="https://github.com/rlfordon/hallucination-game" target="_blank">GitHub →</a>
    </div>
  </div>
  <span class="slide-number">20</span>
</div>
```

**Step 3:** Insert slide 21:

```html
<!-- SLIDE 21: Keep going -->
<div class="slide flex-col">
  <h1>Keep going</h1>
  <div class="two-col" style="align-items: flex-start; margin-bottom: 12px;">
    <div class="showcase-card">
      <img src="docket-qna.png" alt="Bankruptcy Docket Q&A">
      <h3>Bankruptcy Docket Q&amp;A</h3>
      <a href="https://bankruptcy-docket-qanda.onrender.com" target="_blank">Try it →</a> · <a href="https://github.com/rlfordon/docket-qna" target="_blank">GitHub →</a>
    </div>
    <div class="showcase-card">
      <img src="hallucination-game.png" alt="This Workshop Site" style="opacity: 0.5;">
      <h3>This Workshop Site</h3>
      <p class="small">The app you're using right now</p>
      <a href="https://github.com/rlfordon/vibe-coding-workshop-ud" target="_blank">GitHub →</a>
    </div>
  </div>
  <h3 style="margin-top: 4px;">Free tools to keep building</h3>
  <ul style="font-size: 16px;">
    <li><strong>Google AI Studio</strong> — free with a personal Google account</li>
    <li><strong>Cursor</strong> — free for students</li>
    <li><strong>Claude Code</strong> — Anthropic's coding CLI</li>
    <li><strong>Others:</strong> Replit, v0, Lovable, Bolt.new</li>
  </ul>
  <span class="slide-number">21</span>
</div>
```

**Step 4:** Move the Resources slide to position 22. Update its slide number.

**Step 5:** Update total slide count in nav bar JS: change `1 / 20` default to `1 / 22`.

**Step 6:** Verify in browser: all 22 slides navigate correctly, images load, links work.

**Step 7:** Commit.

```bash
git add client/public/slides.html client/public/thanksgiving-demo.gif client/public/hallucination-game.png client/public/docket-qna.png
git commit -m "slides: add project showcase and keep-going slides"
```

---

### Task 9: Update docs

**Files:**
- Modify: `CLAUDE.md`
- Modify: `TODO.md`

**Step 1:** Update CLAUDE.md — change "Three tabs" to "Four tabs" in the project description (if not already done). Update any slide deck references.

**Step 2:** Update TODO.md — mark slide update as done, add the preview tab to done list.

**Step 3:** Commit and push.

```bash
git add CLAUDE.md TODO.md
git commit -m "docs: update for slide deck redesign"
git push
```

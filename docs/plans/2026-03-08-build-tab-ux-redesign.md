# Build Tab UX Redesign

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Simplify the Build tab from a multi-section scrolling page into a single-screen launchpad: one copyable prompt template, one list of idea cards, no sidebar.

**Context:** Students arrive having already brainstormed bottleneck/organization problems in class. Most have an idea; some need inspiration; a few need a full prompt. The current page has too many sections, accordions, and a textarea-to-prompt pipeline that adds friction without value. Preview pane is being moved to a separate tab (future work).

---

### Task 1: Consolidate idea data into one list with full prompts

**Files:**
- Modify: `client/src/PromptWizard.jsx`

**Step 1:** Replace `INSPIRATION_EXAMPLES` and `GUIDED_PROJECTS` with a single `PROJECT_IDEAS` array. Keep the best 5-6 ideas. Each entry has `id`, `title`, `description` (one-liner), and `prompt` (full copy-ready prompt with source links where relevant).

```jsx
const PROJECT_IDEAS = [
  {
    id: 'court-filing',
    title: 'Court Filing Decision Tree',
    description: 'Figure out which court to file in based on your dispute.',
    prompt: 'I want to make a Gemini Canvas app. A lot of people don\'t know which court to file in — small claims, municipal, common pleas, etc. I want to build something where someone answers a few questions about their dispute and finds out which court to go to and what the process looks like.\n\nBefore you start building, ask me a few questions about what would be most useful.',
  },
  {
    id: 'sol-calculator',
    title: 'Statute of Limitations Calculator',
    description: 'Check whether the deadline to file a lawsuit has passed.',
    prompt: 'I want to make a Gemini Canvas app. I\'m a law student and I think it would be really useful to have a tool that helps someone figure out whether they\'ve missed the deadline to file a lawsuit in Ohio. Here\'s the relevant statute: https://codes.ohio.gov/ohio-revised-code/chapter-2305\n\nBefore you start building, ask me a few questions about what would be most useful.',
  },
  {
    id: 'case-brief',
    title: 'Case Brief Builder',
    description: 'Fill in the parts of a case brief and get a clean formatted version.',
    prompt: 'I want to make a Gemini Canvas app. Briefing cases takes me forever and I always forget what goes in each section. I want a tool where I can fill in the parts of a case brief and get a clean, formatted version I can use for class.\n\nBefore you start building, ask me a few questions about what would be most useful.',
  },
  {
    id: 'tenant-rights',
    title: 'Know Your Rights: Tenant Edition',
    description: 'Help renters figure out their rights when something goes wrong.',
    prompt: 'I want to make a Gemini Canvas app. A lot of renters don\'t know their rights when something goes wrong — like their landlord won\'t fix something, or they\'re being evicted, or they\'re not getting their security deposit back. I want to build a tool that helps someone figure out what their rights are in Ohio. Here\'s some background: https://www.ohiolegalhelp.org/guide/housing\n\nBefore you start building, ask me a few questions about what would be most useful.',
  },
  {
    id: 'red-flag',
    title: 'Contract Red-Flag Spotter',
    description: 'Teach people to spot dangerous clauses in contracts.',
    prompt: 'I want to make a Gemini Canvas app. A lot of people sign contracts without knowing what to look out for. I want to build something that teaches people to spot red flags in contracts — like one-sided indemnification or automatic renewal clauses. Here\'s some background on Ohio consumer protection law: https://codes.ohio.gov/ohio-revised-code/chapter-1345\n\nBefore you start building, ask me a few questions about what would be most useful.',
  },
  {
    id: 'client-intake',
    title: 'Client Intake Questionnaire',
    description: 'Walk someone through the questions for an initial legal consultation.',
    prompt: 'I want to make a Gemini Canvas app. When someone comes in for an initial legal consultation, there\'s a lot of information to gather — what happened, key dates, who\'s involved, what documents they have. I want to build a tool that walks someone through those questions and gives them a clean summary at the end.\n\nBefore you start building, ask me a few questions about what would be most useful.',
  },
];
```

**Step 2:** Remove `INSPIRATION_EXAMPLES`, `GUIDED_PROJECTS`, and `generateOpenEndedPrompt`.

**Step 3:** Commit.

```bash
git add client/src/PromptWizard.jsx
git commit -m "refactor: consolidate idea data into single PROJECT_IDEAS list"
```

---

### Task 2: Rewrite the page layout — no sidebar, single screen

**Files:**
- Modify: `client/src/PromptWizard.jsx`

**Step 1:** Remove all sidebar content (Goals, Timeline, Safety, Tips sections). Remove the `Section` and `Tip` helper components. Remove the `grid grid-cols-1 lg:grid-cols-12` layout — the page is now single-column, centered.

**Step 2:** Remove the preview pane (textarea, Preview button, SandboxedIframe). Remove the `SandboxedIframe` import. Remove `previewCode` and `showPreview` state.

**Step 3:** Remove the "Describe Your Idea" textarea, the "Generate My Prompt" button, the inspiration/guided accordions, and the floating tip. Remove all state that supported them (`userIdea`, `inspirationOpen`, `guidedOpen`).

**Step 4:** Build the new layout — a single centered column:

```
Header
  "Build Something"
  "Use AI to build a tool that solves a real problem."
  [scarlet divider]

Prompt Template Box (the primary element)
  Label: "YOUR PROMPT"
  Content: the template or a selected project prompt
  Copy button
  If a project idea is selected, a "Reset" link to go back to the template

"Need an idea?" section
  6 cards in a 2x3 or 3x2 grid
  Each card: title + one-line description
  Clicking a card swaps the prompt box content to that project's full prompt
  Selected card gets a visual highlight (scarlet border)
```

**Step 5:** State should be minimal:
```jsx
const [selectedIdea, setSelectedIdea] = useState(null); // null = template, or a PROJECT_IDEAS entry
const [copied, setCopied] = useState(false);
```

The displayed prompt is derived: if `selectedIdea` is null, show the template; otherwise show `selectedIdea.prompt`.

**Step 6:** The template prompt text:
```
I want to make a Gemini Canvas app. [DESCRIBE YOUR IDEA — what problem does it solve? who is it for?]

Before you start building, ask me a few questions about what would be most useful.
```

**Step 7:** Keep the existing copy-to-clipboard logic (with execCommand fallback).

**Step 8:** Clean up unused lucide-react imports. The page should only need: `Copy`, `CheckCircle2`, and possibly `Sparkles` or a lightbulb for the "Need an idea?" header.

**Step 9:** Verify: lint, build, manual check that the page fits on one laptop screen without scrolling.

**Step 10:** Commit.

```bash
git add client/src/PromptWizard.jsx
git commit -m "feat: redesign Build tab as single-screen launchpad"
```

---

### Task 3: Update docs

**Files:**
- Modify: `CLAUDE.md`
- Modify: `TODO.md`

**Step 1:** Update CLAUDE.md PromptWizard description to reflect the new single-screen design.

**Step 2:** Update TODO.md — mark the Build tab redesign as done.

**Step 3:** Commit and push.

```bash
git add CLAUDE.md TODO.md
git commit -m "docs: update for Build tab redesign"
git push
```

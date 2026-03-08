# PromptWizard Rework Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Rework the Build tab's PromptWizard from a rigid topic+mechanic picker into a three-path experience (open-ended, inspiration, guided) with a code preview pane.

**Architecture:** Single-file refactor of `PromptWizard.jsx`. Reuses existing `SandboxedIframe` and `prepareHtml()` from `Gallery.jsx` (extract to shared module or import directly). Sidebar updated with new goals/timeline/tips. No backend changes.

**Tech Stack:** React, Tailwind, existing iframe sandboxing pipeline.

---

### Task 1: Extract SandboxedIframe to shared module

**Files:**
- Create: `client/src/SandboxedIframe.jsx`
- Modify: `client/src/Gallery.jsx`

**Step 1:** Create `client/src/SandboxedIframe.jsx` containing the `SandboxedIframe` component, `prepareHtml()`, `isReactCode()`, `wrapReactCode()`, `parseImports()`, `buildImportShims()`, and `LIB_GLOBALS` — everything from line 346 to end of `Gallery.jsx`.

```jsx
// Move these from Gallery.jsx:
// - LIB_GLOBALS
// - parseImports()
// - buildImportShims()
// - wrapReactCode()
// - isReactCode()
// - prepareHtml()
// - SandboxedIframe component
// Export: SandboxedIframe (default), prepareHtml (named)
```

**Step 2:** Update `Gallery.jsx` to import from the new module:

```jsx
import SandboxedIframe from './SandboxedIframe';
```

Remove the moved code from Gallery.jsx.

**Step 3:** Verify the Gallery tab still renders project iframes correctly (manual test — run dev server, check Gallery).

**Step 4:** Commit.

```bash
git add client/src/SandboxedIframe.jsx client/src/Gallery.jsx
git commit -m "refactor: extract SandboxedIframe to shared module"
```

---

### Task 2: Rewrite PromptWizard — data and prompt generation

**Files:**
- Modify: `client/src/PromptWizard.jsx`

**Step 1:** Replace the existing `topics` and `formats` arrays with new data structures:

```jsx
const INSPIRATION_EXAMPLES = [
  {
    id: 'thanksgiving',
    title: 'Thanksgiving Dinner Coordinator',
    description: 'Upload your recipes, get a step-by-step schedule with times, and adjust everything when you\'re running late.',
  },
  {
    id: 'court-filing',
    title: 'Court Filing Decision Tree',
    description: 'Answer a few questions about your dispute and find out which court to file in and what the process looks like.',
  },
  {
    id: 'discovery',
    title: 'Discovery Response Drafter',
    description: 'Paste in discovery requests, step through them one by one, choose how to respond, and get formatted output.',
  },
  {
    id: 'bluebook',
    title: 'Bluebook Citation Builder',
    description: 'Fill in the fields — author, title, volume, page — and get the correctly formatted Bluebook citation.',
  },
  {
    id: 'study-quizzer',
    title: 'Finals Study Quizzer',
    description: 'Paste in your class notes, get quizzed on the material, and see which topics you need to review most.',
  },
];

const GUIDED_PROJECTS = [
  {
    id: 'sol-calculator',
    title: 'Statute of Limitations Calculator',
    prompt: 'I want to make a Gemini Canvas app. I\'m a law student and I think it would be really useful to have a tool that helps someone figure out whether they\'ve missed the deadline to file a lawsuit in Ohio. Here\'s the relevant statute: https://codes.ohio.gov/ohio-revised-code/chapter-2305\n\nBefore you start building, ask me a few questions about what would be most useful.',
  },
  {
    id: 'small-claims',
    title: 'Should I File in Small Claims Court?',
    prompt: 'I want to make a Gemini Canvas app. I think a lot of people don\'t realize they could handle their dispute in small claims court instead of hiring a lawyer. I want to build something that helps someone figure out if small claims is right for them. Here\'s some info about how it works in Ohio: https://www.ohiolegalhelp.org/topic/small-claims\n\nBefore you start building, ask me a few questions about what would be most useful.',
  },
  {
    id: 'case-brief',
    title: 'Case Brief Builder',
    prompt: 'I want to make a Gemini Canvas app. Briefing cases takes me forever and I always forget what goes in each section. I want a tool where I can fill in the parts of a case brief and get a clean, formatted version I can use for class.\n\nBefore you start building, ask me a few questions about what would be most useful.',
  },
  {
    id: 'deadline-tracker',
    title: 'Legal Deadline Tracker',
    prompt: 'I want to make a Gemini Canvas app. In civil litigation there are so many deadlines that depend on each other \u2014 when the answer is due, when discovery closes, etc. I want a tool where I can enter a key date and see all the downstream deadlines calculated for me. Here are the Ohio Rules of Civil Procedure: https://www.supremecourt.ohio.gov/docs/LegalResources/Rules/civil/CivilProcedure.pdf\n\nBefore you start building, ask me a few questions about what would be most useful.',
  },
  {
    id: 'client-intake',
    title: 'Client Intake Questionnaire',
    prompt: 'I want to make a Gemini Canvas app. When someone comes in for an initial legal consultation, there\'s a lot of information to gather \u2014 what happened, key dates, who\'s involved, what documents they have. I want to build a tool that walks someone through those questions and gives them a clean summary at the end.\n\nBefore you start building, ask me a few questions about what would be most useful.',
  },
  {
    id: 'red-flag',
    title: 'Contract Clause Red-Flag Spotter',
    prompt: 'I want to make a Gemini Canvas app. A lot of people sign contracts without knowing what to look out for. I want to build something that teaches people to spot red flags in contracts \u2014 like one-sided indemnification or automatic renewal clauses. Here\'s some background on Ohio consumer protection law: https://codes.ohio.gov/ohio-revised-code/chapter-1345\n\nBefore you start building, ask me a few questions about what would be most useful.',
  },
  {
    id: 'tenant-rights',
    title: 'Know Your Rights: Tenant Edition',
    prompt: 'I want to make a Gemini Canvas app. A lot of renters don\'t know their rights when something goes wrong \u2014 like their landlord won\'t fix something, or they\'re being evicted, or they\'re not getting their security deposit back. I want to build a tool that helps someone figure out what their rights are in Ohio. Here\'s some background: https://www.ohiolegalhelp.org/guide/housing\n\nBefore you start building, ask me a few questions about what would be most useful.',
  },
  {
    id: 'oral-argument',
    title: 'Mock Oral Argument Practice Tool',
    prompt: 'I want to make a Gemini Canvas app. I want to get better at oral arguments but it\'s hard to practice on my own. I want a tool with a timer, a place to jot notes, and some kind of self-assessment rubric I can fill out after I\'m done to track what I need to work on.\n\nBefore you start building, ask me a few questions about what would be most useful.',
  },
];
```

**Step 2:** Rewrite the `generatePrompt()` function to wrap open-ended user text:

```jsx
const generateOpenEndedPrompt = (userText) => {
  return `I want to make a Gemini Canvas app. ${userText}\n\nBefore you start building, ask me a few questions about what would be most useful.`;
};
```

**Step 3:** Commit.

```bash
git add client/src/PromptWizard.jsx
git commit -m "feat: add new prompt data and generation for reworked wizard"
```

---

### Task 3: Rewrite PromptWizard — main content area UI

**Files:**
- Modify: `client/src/PromptWizard.jsx`

**Step 1:** Replace the main content area (the `lg:col-span-8` div) with three sections:

**Path A — "Describe Your Idea" (always visible, prominent):**
- Header with icon and title: "Describe Your Idea"
- Subtitle: "What problem do you want to solve? What would be useful to have?"
- Text area for free-form input
- "Generate My Prompt" button (disabled until text area has content)

**Path B — "Need Inspiration?" (collapsed accordion):**
- Clicking expands to show `INSPIRATION_EXAMPLES` as cards
- Each card shows title + description
- Clicking a card populates the Path A text area with the description

**Path C — "Just Get Me Started" (collapsed accordion, below Path B):**
- Clicking expands to show `GUIDED_PROJECTS` as a grid of cards
- Each card shows just the title
- Clicking a card sets the generated prompt directly (bypasses Path A text area since these have pre-written prompts)

**Step 2:** Below the three paths, the prompt output section (keep existing styling — the glowing border box with copy button). Add the tip above it:

> **Tip:** Gemini will ask you some questions before building. You don't need to have all the answers — just say "I'm not sure" or "just go with what makes sense" and it'll figure it out.

The prompt output shows either:
- The open-ended generated prompt (from Path A)
- The pre-written prompt (from Path C)
- Placeholder text if nothing selected yet

**Step 3:** Remove the Reference Materials section at the bottom (the Ohio-specific links). References are now embedded in the guided prompts where relevant.

**Step 4:** Verify manually — run dev server, test all three paths, copy button works.

**Step 5:** Commit.

```bash
git add client/src/PromptWizard.jsx
git commit -m "feat: rewrite wizard UI with three-path layout"
```

---

### Task 4: Rewrite PromptWizard — sidebar

**Files:**
- Modify: `client/src/PromptWizard.jsx`

**Step 1:** Update the header:
- Title: "Build Something" (or keep "Vibe-Coding" — user preference)
- Subtitle: remove "Self-Represented Litigant (SRL) Activity"
- Replace with something like "Use AI to build a tool that solves a real problem."

**Step 2:** Update Activity Goals:
- "Identify a real problem to solve"
- "Scope it for a single-page app"
- "Build and iterate with AI"

**Step 3:** Update Timeline (no times, just phases):
- Brainstorm
- Build
- Gallery Walk & Voting

**Step 4:** Keep Safety & Ethics section as-is.

**Step 5:** Update Strategic Tips:
- Keep "Thinking Mode" tip (still relevant for Gemini)
- Keep "Fact Check" tip but remove Ohio-specific reference language
- Change "Iterate" tip to: "Your first version won't be perfect — that's the point. Ask Gemini to change, add, or fix things."

**Step 6:** Commit.

```bash
git add client/src/PromptWizard.jsx
git commit -m "feat: update sidebar for new workshop format"
```

---

### Task 5: Add code preview pane to Build tab

**Files:**
- Modify: `client/src/PromptWizard.jsx`

**Step 1:** Import `SandboxedIframe` from the shared module.

```jsx
import SandboxedIframe from './SandboxedIframe';
```

**Step 2:** Add a new section below the prompt output: "Preview Your App"
- Text area: "Paste your code here to preview it"
- A "Preview" button that renders the pasted code
- `SandboxedIframe` component displaying the rendered result
- The iframe should be a reasonable height (e.g., 400px)
- Include a note: "This is the same renderer the Gallery uses — what you see here is what others will see."

**Step 3:** Add state for preview:

```jsx
const [previewCode, setPreviewCode] = useState('');
const [showPreview, setShowPreview] = useState(false);
```

**Step 4:** Verify manually — paste both raw HTML and React/JSX code, confirm both render.

**Step 5:** Commit.

```bash
git add client/src/PromptWizard.jsx
git commit -m "feat: add code preview pane to Build tab"
```

---

### Task 6: Final cleanup and commit

**Files:**
- Modify: `CLAUDE.md` — update PromptWizard description
- Modify: `TODO.md` — mark wizard rework as done
- Modify: `client/src/PromptWizard.jsx` — remove any unused imports from lucide-react

**Step 1:** Remove unused lucide-react imports and any dead code.

**Step 2:** Update CLAUDE.md to reflect new PromptWizard structure.

**Step 3:** Update TODO.md.

**Step 4:** Commit and push.

```bash
git add -A
git commit -m "chore: update docs and clean up unused imports"
git push
```

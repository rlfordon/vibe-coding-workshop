# Practice Summit Event Config — Design Spec

**Date:** 2026-04-15
**Event:** AI Legal Practice Summit, Capital University Law School, April 18 2026
**Session:** "Vibe Coding for the Legal Profession: Build a Custom Tool with AI in 60 Minutes" (1:20–2:20 p.m.)
**Audience:** Practicing attorneys at a CLE event (5.00 hours total: 4.00 general + 1.00 professional conduct)

## Overview

Add a new `practicesummit` event config for Rebecca's 60-minute hands-on session at the AI Legal Practice Summit. Attorneys will build a tool in Gemini Canvas or Google AI Studio during the session. Accessed via `?event=practicesummit`.

## Event Config

- **Key:** `practicesummit`
- **Title:** "Vibe Coding for the Legal Profession"
- **Subtitle:** "AI Legal Practice Summit"
- **Slides:** `/slides-practicesummit.html` (new deck, adapted from student + faculty decks — separate effort)
- **Default tab:** `home`

## Tabs (in order)

1. **Home** — Landing page with session overview and step navigation
2. **Slides** — Embedded slide deck
3. **Build** — Prompt wizard with two template types and 8 idea cards
4. **Preview** — Paste code to render (existing component, no changes)
5. **Deploy** — Deployment guide (existing component, may be expanded separately)
6. **Showcase** — Curated tools relevant to practicing attorneys
7. **Resources** — Curated links pulled from existing lists

No Gallery tab — dropped because 60-minute session is tight, and attorneys may not want to share work-in-progress at a CLE.

## Home Tab

- **Title:** "Vibe Coding for the Legal Profession"
- **Description:** Practice-focused framing — build a custom tool for your practice by describing what you need in plain English, using AI to go from idea to working app in one session.
- **Steps:** One per tab (Slides, Build, Preview, Deploy, Showcase, Resources) with practice-oriented descriptions.

## Build Tab (PromptWizard)

The existing `PromptWizard` component is currently hardcoded with student-oriented content. It needs to accept config-driven content so the `practicesummit` event can supply its own prompt templates and idea cards.

### Two Prompt Templates

**Gemini Canvas (default):**
```
I want to make a Gemini Canvas app. [DESCRIBE YOUR IDEA — what problem does it solve? who is it for?]

Before you start building, ask me a few questions about who this is for and what their experience should be like.
```

**Google AI Studio:**
```
I want to build an app in Google AI Studio using the Build tab — look it up if you're not sure, Google AI Studio has a Build tab now. [DESCRIBE YOUR IDEA — what problem does it solve? who is it for?]

Before you start building, ask me a few questions about who this is for and what their experience should be like.
```

### 8 Idea Cards

**Gemini Canvas (no AI, interactive tools):**

1. **Client Intake Form** — Walk a new client through the key questions for an initial consultation and produce a clean summary at the end.
2. **Fee Estimate Calculator** — Enter matter type, complexity, estimated hours, and rate to generate a fee estimate for the client.
3. **Deadline Calculator** — Enter a trigger date and case type to compute filing deadlines under the applicable rules.
4. **Case Timeline Builder** — Enter key events from a case and generate a visual timeline for trial prep or client presentations.
5. **US Code Section Explorer** — Browse and search a specific title of the US Code interactively.

**Google AI Studio (AI-powered):**

6. **AI Timeline Builder** — Upload case documents and let AI extract key events into a visual timeline you can edit, add to, and remove from.
7. **AI-Powered Code Explorer** — Browse a title of the US Code with your own annotations, plus pull updates from the government source.
8. **Contract Clause Reviewer** — Paste a contract clause and get a plain-English explanation plus red flags to watch for.

### Implementation Approach

The `PromptWizard` component needs to be made config-driven:
- Move `PROJECT_IDEAS` and `PROMPT_TEMPLATE` into `eventConfigs.js` under each event's `build` key
- `PromptWizard` receives `config.build` as a prop with `{ templates, ideas }` 
- The template switcher (Canvas vs AI Studio) only appears for events that have multiple templates
- Backward compatible: the `workshop` event gets its existing content moved into the config

## Showcase Tab

Curated subset of items from the faculty config, filtered for relevance to practicing attorneys. Most faculty showcase items are relevant. Community examples (e.g., from LegalQuants) can be added over time.

### Items to include (from faculty config)

**Practice-relevant tools (Rebecca's builds):**
- Citation Verifier
- Docket Q&A
- Contract Clause Reviewer (if we build a showcase version)
- DHS AI Use Case Explorer
- AI-Powered Lawyering Heatmap
- Boolean Search Builder
- Career Landscape Explorer
- eDiscovery Simulator

**Community tools:**
- ReadCloser
- Due Process: Screening vs. Diagnostic Tests
- Bail Risk Simulator
- Facial Recognition Bias Sim

**Teaching tools that also resonate with practitioners:**
- TokenExplorer (understanding AI)
- Prompt Coach (practical prompting skill)
- Citation Hallucination Game (AI reliability awareness)
- 4th Amendment Search & Seizure Analysis
- Document Tech Gallery

Categories: likely "All / Practice / AI Literacy / Community" or similar — TBD during implementation.

## Resources Tab

Pull from existing faculty resource list. Same `Resources` component, config-driven items.

## Slides

New file: `client/public/slides-practicesummit.html`
Adapted from both `slides.html` (student, practice-focused content, privacy considerations) and `slides-faculty.html`. Content and structure TBD as a separate effort.

## Files to Modify

1. **`client/src/eventConfigs.js`** — Add `practicesummit` config with all tab/content definitions
2. **`client/src/PromptWizard.jsx`** — Make config-driven (accept `build` prop from event config)
3. **`client/src/App.jsx`** — Pass build config to PromptWizard when rendering the build tab
4. **`client/public/slides-practicesummit.html`** — New slide deck (separate effort)

## Out of Scope

- Slide deck content (separate effort)
- Deploy tab enhancements (separate effort)
- Additional community showcase items (can be added incrementally)
- Gallery tab (intentionally excluded)

// Faculty-audience showcase items — shared between the `faculty` and `cali`
// configs since both target law educators.
const FACULTY_SHOWCASE = [
  {
    title: 'TokenExplorer',
    description:
      'Students manipulate temperature settings and watch probability distributions shift in real time, making the statistical nature of LLMs visible.',
    url: 'https://token-explorer-rlfordon.replit.app/',
    github: 'https://github.com/rlfordon/TokenExplorer',
    screenshot: '/showcase/token-explorer.png',
    week: 'Week 2',
    category: 'teaching',
    tags: ['LLMs', 'interactive demo'],
    builtWith: 'Replit',
  },
  {
    title: 'Prompt Coach',
    description:
      'Split-panel app where students draft prompts on the left and receive real-time AI coaching on technique, confidentiality, and professional judgment on the right.',
    url: 'https://prompt-coach-21cl.replit.app/',
    github: 'https://github.com/rlfordon/prompt-coach',
    screenshot: '/showcase/prompt-coach.png',
    week: 'Week 5',
    category: 'teaching',
    tags: ['prompting', 'AI coaching'],
    builtWith: 'Google AI Studio',
    hostedOn: 'Replit',
  },
  {
    title: 'QnA Markup Screener',
    description:
      'Client intake screener for wage-and-hour claims built with QnA Markup. Students see legal rules as logic: if/then branching based on employer size and hourly rate.',
    url: 'https://www.qnamarkup.org/i/?source=https://raw.githubusercontent.com/rlfordon/vibe-coding-workshop/main/scratch/qna-markup-screener.txt',
    screenshot: '/showcase/qna-markup.png',
    week: 'Week 6',
    category: 'teaching',
    tags: ['decision trees', 'legal aid'],
    builtWith: 'QnA Markup',
  },
  {
    title: 'Decision Tree to QnA Markup Gem',
    description:
      'A Gemini Gem that bridges domain knowledge and technical implementation — students describe their logic and it generates QnA Markup.',
    url: 'https://gemini.google.com/gem/1_GIi-Fpe8LCCNVsTSvUPQ2Dvv3LV0osX?usp=sharing',
    screenshot: '/showcase/qna-gem.png',
    week: 'Week 6',
    category: 'teaching',
    tags: ['Gemini Gems', 'automation'],
    builtWith: 'Gemini Gem',
  },
  {
    title: 'Ohio Unpaid Wages Screener',
    description:
      'The same decision tree vibe-coded into a React app in under 3 minutes. Used as a cliffhanger to introduce vibe coding and spark discussion.',
    url: 'https://gemini.google.com/share/47c8616ea640',
    screenshot: '/showcase/wage-screener.png',
    week: 'Week 6',
    category: 'teaching',
    tags: ['vibe coding', 'React'],
    builtWith: 'Gemini Canvas',
  },
  {
    title: 'Citation Extractor Gem',
    description:
      'A Gemini Gem that extracts all case citations from an uploaded brief into a structured table, ready for verification on Westlaw and Lexis.',
    url: 'https://gemini.google.com/gem/1BYDV9gF0DbH0rQF9L2FqnCgOU0ju9oOT',
    screenshot: '/showcase/citation-extractor.png',
    week: 'Week 7',
    category: 'teaching',
    tags: ['citations', 'Gemini Gems'],
    builtWith: 'Gemini Gem',
  },
  {
    title: 'Citation Hallucination Game',
    description:
      'Competitive team exercise where students create hallucinated citations, then try to catch another team\'s fakes under time pressure.',
    url: 'https://hallucination-game.replit.app/',
    github: 'https://github.com/rlfordon/hallucination-game',
    screenshot: '/showcase/hallucination-game.png',
    week: 'Week 7',
    category: 'teaching',
    tags: ['hallucinations', 'team exercise'],
    builtWith: 'Claude Code',
    hostedOn: 'Replit',
  },
  {
    title: 'Document Tech Gallery',
    description:
      'Seven quick interactive demos (~60 seconds each) covering automation, clause libraries, editing, verification, metadata, redaction, and contract review.',
    url: 'https://doc-tech-gallery.onrender.com',
    github: 'https://github.com/rlfordon/doc-tech-gallery',
    screenshot: '/showcase/doc-tech-gallery.png',
    week: 'Week 8',
    category: 'teaching',
    tags: ['document tech', 'interactive demos'],
    builtWith: 'Claude Code',
    hostedOn: 'Render',
  },
  {
    title: 'Docket Q&A',
    description:
      'AI-powered tool for querying bankruptcy case documents from the RECAP Archive. Ask questions about a case and get answers grounded in the actual filings.',
    url: 'https://bankruptcy-docket-qanda.onrender.com',
    github: 'https://github.com/rlfordon/docket-qna',
    screenshot: '/showcase/docket-qna.png',
    category: 'research',
    tags: ['research', 'AI', 'bankruptcy'],
    builtWith: 'Claude Code',
    hostedOn: 'Render',
  },
  {
    title: 'Citation Verifier',
    description:
      'Verify legal citations at scale — check whether case citations in a brief are real and accurately cited.',
    url: 'https://verify-and-retrieve.replit.app/',
    github: 'https://github.com/rlfordon/citation-verifier',
    screenshot: '/showcase/citation-verifier.png',
    category: 'research',
    tags: ['research', 'citations'],
    builtWith: 'Claude Code',
    hostedOn: 'Replit',
  },
  {
    title: 'AI-Powered Lawyering Heatmap',
    description:
      'Interactive visualization comparing how reasoning models and RAG perform against human-only legal work across specialized tasks.',
    url: 'https://gemini.google.com/share/22471ef31949',
    screenshot: '/showcase/ai-lawyering-heatmap.png',
    category: 'research',
    tags: ['research', 'visualization'],
    builtWith: 'Gemini Canvas',
  },
  {
    title: 'ReadCloser',
    description:
      'Collaborative close-reading and annotation tool by Leon Furze. Teachers share a passage, students highlight and annotate, everything lives in the URL — no accounts, no server.',
    url: 'http://readcloser.com/',
    screenshot: '/showcase/readcloser.png',
    category: 'community',
    tags: ['teaching', 'annotation', 'community'],
  },
  {
    title: 'AI Policy Statement Generator',
    description:
      'Interactive tool for creating AI use policies for courses — choose between entire course or specific assignment, set permission levels, and generate a ready-to-use policy. Created by Ed Beck and Tera Doty-Blance (CC BY 4.0).',
    url: 'https://ai.sunycreate.cloud/ai-policy-generator/',
    github: 'https://github.com/beckej13820/edu-apps',
    screenshot: '/showcase/ai-policy-generator.png',
    category: 'community',
    tags: ['teaching', 'AI policy', 'community'],
  },
  {
    title: 'Due Process: Screening vs. Diagnostic Tests',
    description:
      'Due process simulation by David Colarusso. Adjust parameters for a multi-stage legal system to see how test characteristics and the balance of costs shift across populations.',
    url: 'https://screening-vs-diagnostic-tests-50382557550.us-west1.run.app/',
    source: 'https://suffolklitlab.org/algos-bias-due-process-you/',
    screenshot: '/showcase/screening-diagnostic.png',
    category: 'community',
    tags: ['due process', 'simulation', 'community'],
  },
  {
    title: 'Bail Risk Simulator',
    description:
      'Interactive dashboard by David Colarusso exploring the false positive paradox — how accuracy metrics can mislead when predicting rare events, using bail decisions as context.',
    url: 'https://bail-risk-simulator-50382557550.us-west1.run.app/',
    source: 'https://suffolklitlab.org/algos-bias-due-process-you/',
    screenshot: '/showcase/bail-risk.png',
    category: 'community',
    tags: ['criminal law', 'bias', 'community'],
  },
  {
    title: 'Facial Recognition Bias Sim',
    description:
      'Interactive tool by David Colarusso examining disparate impact from machine bias in facial recognition. Adjust parameters to observe unequal outcomes across populations.',
    url: 'https://facial-recognition-bias-sim-50382557550.us-west1.run.app/',
    source: 'https://suffolklitlab.org/algos-bias-due-process-you/',
    screenshot: '/showcase/facial-recognition.png',
    category: 'community',
    tags: ['civil rights', 'bias', 'community'],
  },
  {
    title: '4th Amendment Search & Seizure Analysis',
    description:
      'Interactive decision tree walking through the gates of Fourth Amendment analysis — applicability, reasonable expectation of privacy, and warrant requirements — with case law at each step.',
    url: 'https://gemini.google.com/share/c7ba3b487abf',
    screenshot: '/showcase/4th-amendment.png',
    category: 'teaching',
    tags: ['constitutional law', 'decision trees'],
    builtWith: 'Gemini Canvas',
  },
  {
    title: 'Career Landscape Explorer',
    description:
      'Interactive tool where students explore how AI reshapes legal careers — browse by practice area or firm type, see a five-variable impact framework adapted from the O-Ring model.',
    url: 'https://career-landscape.onrender.com/',
    github: 'https://github.com/rlfordon/career-landscape',
    screenshot: '/showcase/career-landscape.png',
    category: 'teaching',
    tags: ['careers', 'AI impact'],
    builtWith: 'Claude Code',
    hostedOn: 'Render',
  },
  {
    title: 'eDiscovery Simulator',
    description:
      'Students play a junior associate navigating EDRM phases on a fictional employment case — compare keyword search, TAR/CAL, and GenAI-assisted review across 100 mock documents.',
    url: 'https://ediscovery-simulator.onrender.com/',
    github: 'https://github.com/rlfordon/ediscovery-simulator',
    screenshot: '/showcase/ediscovery-simulator.png',
    category: 'teaching',
    tags: ['eDiscovery', 'simulation'],
    builtWith: 'Claude Code',
    hostedOn: 'Render',
  },
  {
    title: 'DHS AI Use Case Explorer',
    description:
      'Searchable explorer of 236 AI systems in the DHS inventory, with curated watchdog annotations from the Brennan Center, EFF, and others, plus bias taxonomy flags.',
    url: 'https://rlfordon.github.io/dhs-ai-explorer/',
    github: 'https://github.com/rlfordon/dhs-ai-explorer',
    screenshot: '/showcase/dhs-ai-explorer.png',
    category: 'research',
    tags: ['AI policy', 'government', 'bias'],
    builtWith: 'Claude Code',
    hostedOn: 'GitHub Pages',
  },
  {
    title: 'Excel Formula Explorer',
    description:
      'Interactive app teaching Excel text functions through a fictional law firm merger scenario — guided demos with an Excel-like grid, formula bar, and hands-on sandboxes for each function.',
    url: 'https://spreadsheet-sandbox.onrender.com',
    github: 'https://github.com/rlfordon/spreadsheet-sandbox',
    screenshot: '/showcase/spreadsheet-sandbox.png',
    category: 'teaching',
    tags: ['Excel', 'data cleaning'],
    builtWith: 'Claude Code',
    hostedOn: 'Render',
  },
  {
    title: 'Boolean Search Builder',
    description:
      'Step-by-step wizard that guides students through building precise Boolean queries for Westlaw, Lexis, and Bloomberg — handles parentheses, proximity connectors, and truncation automatically.',
    url: 'https://booleanbuilder.replit.app/',
    github: 'https://github.com/rlfordon/BooleanBuilder',
    screenshot: '/showcase/boolean-builder.png',
    category: 'teaching',
    tags: ['legal research', 'Boolean search'],
    builtWith: 'Gemini Canvas',
    hostedOn: 'Replit',
  },
  {
    title: 'Universal History Simulator',
    description:
      'By historian Benjamin Breen (UC Santa Cruz). Drops students into different historical eras with pixel art and LLM-generated narratives grounded in primary sources.',
    url: 'https://historysimulator.vercel.app/',
    github: 'https://github.com/benjaminbreen/UHS',
    screenshot: '/showcase/history-simulator.png',
    category: 'community',
    tags: ['history', 'simulation', 'community'],
  },
  {
    title: 'Literary Canon Explorer',
    description:
      'By Benjamin Breen. Visualizes how literary reputation shifts over time by contrasting Victorian author mentions on Google Books vs. Wikipedia page views.',
    url: 'https://historical-canon-explorer.vercel.app',
    screenshot: '/showcase/literary-canon.png',
    category: 'community',
    tags: ['research', 'visualization', 'community'],
  },
  {
    title: 'Premodern Concordance',
    description:
      'By Benjamin Breen & Mackenzie Cooley. Cross-linguistic analysis of premodern medical and scientific texts, tracking concepts across Portuguese, Spanish, Italian, French, and English sources.',
    url: 'https://premodern-concordance.vercel.app',
    github: 'https://github.com/benjaminbreen/premodern-concordance',
    screenshot: '/showcase/premodern-concordance.png',
    category: 'community',
    tags: ['research', 'corpus analysis', 'community'],
  },
];

export const EVENT_CONFIGS = {
  workshop: {
    id: 'workshop',
    title: 'Vibe Coding Workshop',
    subtitle: 'Workshop',
    slidesUrl: '/slides.html',
    tabs: [
      { id: 'home', label: 'Home' },
      { id: 'slides', label: 'Slides' },
      { id: 'build', label: 'Build' },
      { id: 'preview', label: 'Preview' },
      { id: 'deploy', label: 'Deploy' },
      { id: 'resources', label: 'Resources' },
    ],
    defaultTab: 'home',
    home: {
      title: 'Vibe Coding Workshop',
      description:
        'Build a real web project using AI — no coding experience required. Follow the steps below to go from idea to published site in one session.',
      steps: [
        { tab: 'slides', label: 'Slides', desc: 'Follow along with the workshop presentation' },
        { tab: 'build', label: 'Build', desc: 'Use the prompt wizard to generate your project with AI' },
        { tab: 'preview', label: 'Preview', desc: 'Paste your code to see it rendered live' },
        { tab: 'deploy', label: 'Deploy', desc: 'Learn how to publish your project to the web' },
        { tab: 'resources', label: 'Resources', desc: 'Curated links to keep learning after the workshop' },
      ],
    },
    build: {
      templates: [
        {
          id: 'canvas',
          label: 'Gemini Canvas',
          prompt: 'I want to make a Gemini Canvas app. [DESCRIBE YOUR IDEA \u2014 what problem does it solve? who is it for?]\n\nBefore you start building, ask me a few questions about who this is for and what their experience should be like.',
        },
      ],
      ideas: [
        {
          id: 'court-filing',
          title: 'Court Filing Decision Tree',
          description: 'Figure out which court to file in based on your dispute.',
          prompt: 'I want to make a Gemini Canvas app. A lot of people don\'t know which court to file in \u2014 small claims, municipal, common pleas, etc. I want to build something where someone answers a few questions about their dispute and finds out which court to go to and what the process looks like.\n\nBefore you start building, ask me a few questions about who this is for and what their experience should be like.',
        },
        {
          id: 'sol-calculator',
          title: 'Statute of Limitations Calculator',
          description: 'Check whether the deadline to file a lawsuit has passed.',
          prompt: 'I want to make a Gemini Canvas app. I\'m a law student and I think it would be really useful to have a tool that helps someone figure out whether they\'ve missed the deadline to file a lawsuit in Ohio. Here\'s the relevant statute: https://codes.ohio.gov/ohio-revised-code/chapter-2305\n\nBefore you start building, ask me a few questions about who this is for and what their experience should be like.',
        },
        {
          id: 'case-brief',
          title: 'Case Brief Builder',
          description: 'Fill in the parts of a case brief and get a clean formatted version.',
          prompt: 'I want to make a Gemini Canvas app. Briefing cases takes me forever and I always forget what goes in each section. I want a tool where I can fill in the parts of a case brief and get a clean, formatted version I can use for class.\n\nBefore you start building, ask me a few questions about who this is for and what their experience should be like.',
        },
        {
          id: 'tenant-rights',
          title: 'Know Your Rights: Tenant Edition',
          description: 'Help renters figure out their rights when something goes wrong.',
          prompt: 'I want to make a Gemini Canvas app. A lot of renters don\'t know their rights when something goes wrong \u2014 like their landlord won\'t fix something, or they\'re being evicted, or they\'re not getting their security deposit back. I want to build a tool that helps someone figure out what their rights are in Ohio. Here\'s some background: https://www.ohiolegalhelp.org/guide/housing\n\nBefore you start building, ask me a few questions about who this is for and what their experience should be like.',
        },
        {
          id: 'red-flag',
          title: 'Contract Red-Flag Spotter',
          description: 'Teach people to spot dangerous clauses in contracts.',
          prompt: 'I want to make a Gemini Canvas app. A lot of people sign contracts without knowing what to look out for. I want to build something that teaches people to spot red flags in contracts \u2014 like one-sided indemnification or automatic renewal clauses. Here\'s some background on Ohio consumer protection law: https://codes.ohio.gov/ohio-revised-code/chapter-1345\n\nBefore you start building, ask me a few questions about who this is for and what their experience should be like.',
        },
        {
          id: 'client-intake',
          title: 'Client Intake Questionnaire',
          description: 'Walk someone through the questions for an initial legal consultation.',
          prompt: 'I want to make a Gemini Canvas app. When someone comes in for an initial legal consultation, there\'s a lot of information to gather \u2014 what happened, key dates, who\'s involved, what documents they have. I want to build a tool that walks someone through those questions and gives them a clean summary at the end.\n\nBefore you start building, ask me a few questions about who this is for and what their experience should be like.',
        },
      ],
    },
    resources: [
      {
        title: 'Jamie Tso Interview: Vibe-Coding Your Own Legal AI Tools',
        source: 'Artificial Lawyer',
        url: 'https://www.artificiallawyer.com/2026/01/05/jamie-tso-interview-vibe-coding-your-own-legal-ai-tools/',
      },
      {
        title: "Jamie's collection of vibe-coded apps",
        url: 'https://jamievibes.replit.app/',
      },
      {
        title: 'Projects from LegalQuant Hackathon',
        source: 'LinkedIn',
        url: 'https://www.linkedin.com/posts/jttso_one-week-21-working-legal-tech-apps-im-activity-7421250592033087489-sdjw/?utm_source=share&utm_medium=member_desktop&rcm=ACoAAAIVzO4B8VIAPdxZcB7uT8VZvtQ64_0Xaps',
      },
      {
        title: 'Secure Vibe Coding Guide',
        source: 'Cloud Security Alliance',
        url: 'https://cloudsecurityalliance.org/blog/2025/04/09/secure-vibe-coding-guide',
      },
      {
        title: 'Vibe Coding: Best Practices for Prompting',
        source: 'Supabase',
        url: 'https://supabase.com/blog/vibe-coding-best-practices-for-prompting',
      },
    ],
  },

  faculty: {
    id: 'faculty',
    title: 'Vibe Coding for Law Faculty',
    subtitle: 'Faculty',
    slidesUrl: '/slides-faculty.html',
    tabs: [
      { id: 'home', label: 'Home' },
      { id: 'slides', label: 'Slides' },
      { id: 'showcase', label: 'Showcase' },
      { id: 'deploy', label: 'Deploy' },
      { id: 'resources', label: 'Resources' },
    ],
    defaultTab: 'home',
    home: {
      title: 'Vibe Coding for Law Faculty',
      description:
        'How AI-assisted development is changing what law professors can build for their classrooms — and why the people who understand the problem best should be the ones building the solution.',
      steps: [
        { tab: 'slides', label: 'Slides', desc: 'Presentation on vibe coding in legal education' },
        { tab: 'showcase', label: 'Showcase', desc: 'Tools built with AI for teaching, research, and the classroom' },
        { tab: 'deploy', label: 'Deploy', desc: 'How to publish simple one-file apps from Gemini Canvas' },
        { tab: 'resources', label: 'Resources', desc: 'Articles, tools, and inspiration to get started' },
      ],
    },
    showcase: FACULTY_SHOWCASE,
    resources: [
      {
        title: "Can't Stop, Won't Stop: One Semester, Eight Vibe-Coded Teaching Tools",
        source: 'AI Law Librarians',
        url: 'https://www.ailawlibrarians.com/2026/03/04/cant-stop-wont-stop-one-semester-eight-vibe-coded-teaching-tools/',
      },
      {
        title: 'Jamie Tso Interview: Vibe-Coding Your Own Legal AI Tools',
        source: 'Artificial Lawyer',
        url: 'https://www.artificiallawyer.com/2026/01/05/jamie-tso-interview-vibe-coding-your-own-legal-ai-tools/',
      },
      {
        title: "Jamie's collection of vibe-coded apps",
        url: 'https://jamievibes.replit.app/',
      },
      {
        title: "Barbora Obracajova's Legal Tech Gallery",
        source: 'Lovable',
        url: 'https://legaltechgallery.lovable.app/',
      },
      {
        title: "Barbora Obracajova on vibe-coding for legal education",
        source: 'LinkedIn',
        url: 'https://www.linkedin.com/posts/barboraobracajova_i-vibecoded-an-app-that-changed-how-i-explain-activity-7432409625544724480-9wvm',
      },
      {
        title: "Automation Bias Exercise — Suffolk LIT Lab",
        source: 'Suffolk LIT Lab',
        url: 'https://suffolklitlab.org/algos-bias-due-process-you/#automation-bias',
      },
      {
        title: 'Vibe Coding for Teachers: Create Educational Apps with the Help of AI',
        source: 'Observatory / Tec de Monterrey',
        url: 'https://observatory.tec.mx/edu-bits-2/vibe-coding-for-teachers-create-educational-apps-with-the-help-of-ai/',
      },
      {
        title: 'What Is Happening to Writing?',
        source: 'Res Obscura (Benjamin Breen)',
        url: 'https://resobscura.substack.com/p/what-is-happening-to-writing',
      },
      {
        title: 'Vibe Coding Ideas for Education',
        source: 'Google Doc (community list)',
        url: 'https://docs.google.com/document/d/1g_pSY33Gfm-DpxOvtnoLvsS0rlJj0vHkcZu2ndYuVTI/edit?tab=t.0',
      },
      {
        title: 'Secure Vibe Coding Guide',
        source: 'Cloud Security Alliance',
        url: 'https://cloudsecurityalliance.org/blog/2025/04/09/secure-vibe-coding-guide',
      },
      {
        title: 'Vibe Coding: Best Practices for Prompting',
        source: 'Supabase',
        url: 'https://supabase.com/blog/vibe-coding-best-practices-for-prompting',
      },
    ],
  },

  practicesummit: {
    id: 'practicesummit',
    title: 'Vibe Coding for the Legal Profession',
    subtitle: 'AI Legal Practice Summit',
    slidesUrl: '/slides-practicesummit.html',
    showcaseSubtitle: 'Tools built with AI for legal practice, research, and the profession',
    tabs: [
      { id: 'home', label: 'Home' },
      { id: 'slides', label: 'Slides' },
      { id: 'build', label: 'Build' },
      { id: 'preview', label: 'Preview' },
      { id: 'deploy', label: 'Deploy' },
      { id: 'showcase', label: 'Showcase' },
      { id: 'resources', label: 'Resources' },
    ],
    defaultTab: 'home',
    home: {
      title: 'Vibe Coding for the Legal Profession',
      description:
        'Build a custom tool for your practice — a client intake form, a deadline tracker, a research assistant — just by describing what you need in plain English.',
      steps: [
        { tab: 'slides', label: 'Slides', desc: 'Follow along with the session presentation' },
        { tab: 'build', label: 'Build', desc: 'Use the prompt wizard to generate your project with AI' },
        { tab: 'preview', label: 'Preview', desc: 'Paste your code to see it rendered live' },
        { tab: 'deploy', label: 'Deploy', desc: 'Learn how to publish your project to the web' },
        { tab: 'showcase', label: 'Showcase', desc: 'See examples of what\'s possible — from simple tools to AI-powered apps' },
        { tab: 'resources', label: 'Resources', desc: 'Articles, tools, and inspiration to keep building after the session' },
      ],
    },
    build: {
      templates: [
        {
          id: 'canvas',
          label: 'Gemini Canvas',
          prompt: 'I want to make a Gemini Canvas app. [DESCRIBE YOUR IDEA \u2014 what problem does it solve? who is it for?]\n\nBefore you start building, ask me a few questions about who this is for and what their experience should be like.',
        },
        {
          id: 'aistudio',
          label: 'Google AI Studio',
          note: 'AI Studio apps take longer to build \u2014 great for exploring AI-powered tools, but you may not finish in the session.',
          prompt: 'I want to build an app in Google AI Studio using the Build tab \u2014 look it up if you\'re not sure, Google AI Studio has a Build tab now. [DESCRIBE YOUR IDEA \u2014 what problem does it solve? who is it for?]\n\nBefore you start building, ask me a few questions about who this is for and what their experience should be like.',
        },
      ],
      ideas: [
        {
          id: 'client-intake',
          title: 'Client Intake Form',
          description: 'Walk a new client through intake questions and produce a clean summary.',
          template: 'canvas',
          prompt: 'I want to make a Gemini Canvas app. When someone comes in for an initial consultation, there\'s a lot of information to gather \u2014 what happened, key dates, who\'s involved, what documents they have. I want to build a tool that walks them through those questions and gives a clean summary at the end.\n\nBefore you start building, ask me a few questions about who this is for and what their experience should be like.',
        },
        {
          id: 'fee-calculator',
          title: 'Fee Estimate Calculator',
          description: 'Enter matter type, complexity, and rates to generate a fee estimate.',
          template: 'canvas',
          prompt: 'I want to make a Gemini Canvas app. I want to build a fee estimate calculator for my law practice. A client enters their matter type, the expected complexity, estimated hours, and my hourly rate, and it generates a clear fee estimate they can review.\n\nBefore you start building, ask me a few questions about who this is for and what their experience should be like.',
        },
        {
          id: 'deadline-calculator',
          title: 'Deadline Calculator',
          description: 'Enter a trigger date and case type to compute filing deadlines.',
          template: 'canvas',
          prompt: 'I want to make a Gemini Canvas app. Missing a filing deadline is one of the most common sources of malpractice claims. I want to build a tool where you enter a trigger date and case type, and it computes the key filing deadlines under the applicable rules.\n\nBefore you start building, ask me a few questions about who this is for and what their experience should be like.',
        },
        {
          id: 'case-timeline',
          title: 'Case Timeline Builder',
          description: 'Enter key events from a case and generate a visual timeline.',
          template: 'canvas',
          prompt: 'I want to make a Gemini Canvas app. I need a tool for building case timelines \u2014 I enter key events with dates and descriptions, and it generates a clean visual timeline I can use for trial prep or client presentations.\n\nBefore you start building, ask me a few questions about who this is for and what their experience should be like.',
        },
        {
          id: 'uscode-explorer',
          title: 'US Code Section Explorer',
          description: 'Browse and search a specific title of the US Code interactively.',
          template: 'canvas',
          prompt: 'I want to make a Gemini Canvas app. I want to build an interactive tool for browsing a specific title of the US Code \u2014 search by section number or keyword, read the text, and navigate between sections easily.\n\nBefore you start building, ask me a few questions about who this is for and what their experience should be like.',
        },
        {
          id: 'ai-timeline',
          title: 'AI Timeline Builder',
          description: 'Upload case documents and let AI extract events into an editable timeline.',
          template: 'aistudio',
          prompt: 'I want to build an app in Google AI Studio using the Build tab \u2014 look it up if you\'re not sure, Google AI Studio has a Build tab now. I want a tool where I can upload case documents and the AI extracts key events into a visual timeline. I should be able to edit, add, and remove events from the timeline after it\'s generated.\n\nBefore you start building, ask me a few questions about who this is for and what their experience should be like.',
        },
        {
          id: 'ai-code-explorer',
          title: 'AI-Powered Code Explorer',
          description: 'Browse the US Code with AI-powered annotations and updates from government sources.',
          template: 'aistudio',
          prompt: 'I want to build an app in Google AI Studio using the Build tab \u2014 look it up if you\'re not sure, Google AI Studio has a Build tab now. I want an interactive US Code explorer where I can browse sections, add my own notes and annotations, and pull updates from the official government source.\n\nBefore you start building, ask me a few questions about who this is for and what their experience should be like.',
        },
        {
          id: 'clause-reviewer',
          title: 'Contract Clause Reviewer',
          description: 'Paste a contract clause and get plain-English explanation plus red flags.',
          template: 'aistudio',
          prompt: 'I want to build an app in Google AI Studio using the Build tab \u2014 look it up if you\'re not sure, Google AI Studio has a Build tab now. I want a tool where I can paste a contract clause and get a plain-English explanation of what it means, plus any red flags or issues to watch for.\n\nBefore you start building, ask me a few questions about who this is for and what their experience should be like.',
        },
      ],
    },
    showcase: [
      {
        title: 'TokenExplorer',
        description:
          'Manipulate temperature settings and watch probability distributions shift in real time, making the statistical nature of LLMs visible.',
        url: 'https://token-explorer-rlfordon.replit.app/',
        github: 'https://github.com/rlfordon/TokenExplorer',
        screenshot: '/showcase/token-explorer.png',
        category: 'ai-literacy',
        tags: ['LLMs', 'interactive demo'],
        builtWith: 'Replit',
      },
      {
        title: 'Prompt Coach',
        description:
          'Split-panel app where you draft prompts on the left and receive real-time AI coaching on technique, confidentiality, and professional judgment on the right.',
        url: 'https://prompt-coach-21cl.replit.app/',
        github: 'https://github.com/rlfordon/prompt-coach',
        screenshot: '/showcase/prompt-coach.png',
        category: 'ai-literacy',
        tags: ['prompting', 'AI coaching'],
        builtWith: 'Google AI Studio',
        hostedOn: 'Replit',
      },
      {
        title: 'Citation Hallucination Game',
        description:
          'Competitive exercise where teams create hallucinated citations, then try to catch another team\'s fakes under time pressure.',
        url: 'https://hallucination-game.replit.app/',
        github: 'https://github.com/rlfordon/hallucination-game',
        screenshot: '/showcase/hallucination-game.png',
        category: 'ai-literacy',
        tags: ['hallucinations', 'team exercise'],
        builtWith: 'Claude Code',
        hostedOn: 'Replit',
      },
      {
        title: '4th Amendment Search & Seizure Analysis',
        description:
          'Interactive decision tree walking through the gates of Fourth Amendment analysis \u2014 applicability, reasonable expectation of privacy, and warrant requirements \u2014 with case law at each step.',
        url: 'https://gemini.google.com/share/c7ba3b487abf',
        screenshot: '/showcase/4th-amendment.png',
        category: 'practice',
        tags: ['constitutional law', 'decision trees'],
        builtWith: 'Gemini Canvas',
      },
      {
        title: 'Citation Verifier',
        description:
          'Verify legal citations at scale \u2014 check whether case citations in a brief are real and accurately cited.',
        url: 'https://verify-and-retrieve.replit.app/',
        github: 'https://github.com/rlfordon/citation-verifier',
        screenshot: '/showcase/citation-verifier.png',
        category: 'practice',
        tags: ['citations', 'verification'],
        builtWith: 'Claude Code',
        hostedOn: 'Replit',
      },
      {
        title: 'Docket Q&A',
        description:
          'AI-powered tool for querying bankruptcy case documents from the RECAP Archive. Ask questions about a case and get answers grounded in the actual filings.',
        url: 'https://bankruptcy-docket-qanda.onrender.com',
        github: 'https://github.com/rlfordon/docket-qna',
        screenshot: '/showcase/docket-qna.png',
        category: 'practice',
        tags: ['research', 'AI', 'bankruptcy'],
        builtWith: 'Claude Code',
        hostedOn: 'Render',
      },
      {
        title: 'eDiscovery Simulator',
        description:
          'Navigate EDRM phases on a fictional employment case \u2014 compare keyword search, TAR/CAL, and GenAI-assisted review across 100 mock documents.',
        url: 'https://ediscovery-simulator.onrender.com/',
        github: 'https://github.com/rlfordon/ediscovery-simulator',
        screenshot: '/showcase/ediscovery-simulator.png',
        category: 'practice',
        tags: ['eDiscovery', 'simulation'],
        builtWith: 'Claude Code',
        hostedOn: 'Render',
      },
      {
        title: 'AI-Powered Lawyering Heatmap',
        description:
          'Interactive visualization comparing how reasoning models and RAG perform against human-only legal work across specialized tasks.',
        url: 'https://gemini.google.com/share/22471ef31949',
        screenshot: '/showcase/ai-lawyering-heatmap.png',
        category: 'ai-literacy',
        tags: ['research', 'visualization'],
        builtWith: 'Gemini Canvas',
      },
      {
        title: 'DHS AI Use Case Explorer',
        description:
          'Searchable explorer of 236 AI systems in the DHS inventory, with curated watchdog annotations from the Brennan Center, EFF, and others, plus bias taxonomy flags.',
        url: 'https://rlfordon.github.io/dhs-ai-explorer/',
        github: 'https://github.com/rlfordon/dhs-ai-explorer',
        screenshot: '/showcase/dhs-ai-explorer.png',
        category: 'practice',
        tags: ['AI policy', 'government', 'bias'],
        builtWith: 'Claude Code',
        hostedOn: 'GitHub Pages',
      },
      {
        title: 'Document Tech Gallery',
        description:
          'Seven quick interactive demos covering automation, clause libraries, editing, verification, metadata, redaction, and contract review.',
        url: 'https://doc-tech-gallery.onrender.com',
        github: 'https://github.com/rlfordon/doc-tech-gallery',
        screenshot: '/showcase/doc-tech-gallery.png',
        category: 'practice',
        tags: ['document tech', 'interactive demos'],
        builtWith: 'Claude Code',
        hostedOn: 'Render',
      },
      {
        title: 'Career Landscape Explorer',
        description:
          'Explore how AI reshapes legal careers \u2014 browse by practice area or firm type, see a five-variable impact framework adapted from the O-Ring model.',
        url: 'https://career-landscape.onrender.com/',
        github: 'https://github.com/rlfordon/career-landscape',
        screenshot: '/showcase/career-landscape.png',
        category: 'ai-literacy',
        tags: ['careers', 'AI impact'],
        builtWith: 'Claude Code',
        hostedOn: 'Render',
      },
      {
        title: "Jamie Tso's Vibe-Coded Legal Apps",
        description:
          'Collection of legal tools built by Jamie Tso, Clifford Chance senior associate and founder of LegalQuants \u2014 showcasing what one lawyer can build with vibe coding.',
        url: 'https://jamievibes.replit.app/',
        screenshot: '/showcase/jamie-vibes.png',
        category: 'community',
        tags: ['vibe coding', 'legal tools', 'community'],
      },
      {
        title: "Barbora Obracajova's Legal Tech Gallery",
        description:
          'Curated gallery of legal tech tools built with AI-assisted development, showcasing practical applications across legal workflows.',
        url: 'https://legaltechgallery.lovable.app/',
        screenshot: '/showcase/legal-tech-gallery.png',
        category: 'community',
        tags: ['vibe coding', 'legal tech', 'community'],
      },
      {
        title: 'LegalQuants Hackathon #LQ001 — Manus',
        description:
          'The inaugural LegalQuants hackathon in partnership with Manus AI (January 2026). Twenty submissions judged on creativity, pain point relevance, and production readiness.',
        url: 'https://www.legalquants.com/hackathons#LQ001',
        screenshot: '/showcase/legalquants-lq001.png',
        category: 'community',
        tags: ['hackathon', 'legal tech', 'community'],
      },
      {
        title: 'LegalQuants Hackathon #LQ002 — Replit',
        description:
          'The second LegalQuants hackathon in partnership with Replit (March 2026), bringing together in-house counsels from around the world.',
        url: 'https://www.legalquants.com/hackathons#LQ002',
        screenshot: '/showcase/legalquants-lq002.png',
        category: 'community',
        tags: ['hackathon', 'legal tech', 'community'],
      },
    ],
    resources: {
      galleries: {
        label: 'Galleries & examples',
        tagline: 'Browse what others have built',
        items: [
          {
            title: "Jamie's collection of vibe-coded apps",
            url: 'https://jamievibes.replit.app/',
            description: "Dozens of legal tools one lawyer built solo \u2014 proof of what's possible without a dev team.",
          },
          {
            title: "Barbora Obracajova's Legal Tech Gallery",
            source: 'Lovable',
            url: 'https://legaltechgallery.lovable.app/',
            description: 'Curated gallery of AI-built legal tech, organized by use case.',
          },
          {
            title: 'case.dev Gallery',
            source: 'case.dev',
            url: 'https://case.dev/gallery',
            description: 'Production legal AI apps running at real law firms \u2014 what these tools look like at scale.',
          },
          {
            title: 'LegalQuants Hackathon #LQ001',
            source: 'LegalQuants',
            url: 'https://www.legalquants.com/hackathons#LQ001',
            description: 'Twenty legal AI apps built in one week, judged on creativity and production readiness.',
          },
          {
            title: 'LegalQuants Hackathon #LQ002',
            source: 'LegalQuants',
            url: 'https://www.legalquants.com/hackathons#LQ002',
            description: 'Second hackathon (March 2026), in-house counsel from around the world.',
          },
        ],
      },
      readWatch: {
        label: 'Read & watch',
        tagline: "Learn from others' experience",
        items: [
          {
            title: 'Jamie Tso Interview: Vibe-Coding Your Own Legal AI Tools',
            source: 'Artificial Lawyer',
            url: 'https://www.artificiallawyer.com/2026/01/05/jamie-tso-interview-vibe-coding-your-own-legal-ai-tools/',
            description: 'How a Clifford Chance associate started building his own tools and what it changed about his practice.',
          },
          {
            title: 'Built on a Weekend: Damien Riehl & Mike Bommarito',
            source: 'YouTube',
            url: 'https://www.youtube.com/watch?v=kTh08RbdFlg',
            description: 'Two legal tech veterans demo what vibe coding can actually produce in a weekend.',
          },
          {
            title: "Can't Stop, Won't Stop: One Semester, Eight Vibe-Coded Teaching Tools",
            source: 'AI Law Librarians',
            url: 'https://www.ailawlibrarians.com/2026/03/04/cant-stop-wont-stop-one-semester-eight-vibe-coded-teaching-tools/',
            description: 'My own write-up of eight tools I built in one semester of teaching \u2014 included here because the honest notes on what worked and what didn\u2019t translate directly to practice.',
          },
          {
            title: 'Vibe Coding: Best Practices for Prompting',
            source: 'Supabase',
            url: 'https://supabase.com/blog/vibe-coding-best-practices-for-prompting',
            description: 'Practical techniques for writing better prompts when building.',
          },
          {
            title: 'How to Use Claude Code Safely',
            source: 'Product Talk (Teresa Torres)',
            url: 'https://www.producttalk.org/how-to-use-claude-code-safely',
            description: 'A builder\u2019s practical playbook for using Claude Code without blowing up your repo or leaking data.',
          },
          {
            title: 'Secure Vibe Coding Guide',
            source: 'Cloud Security Alliance',
            url: 'https://cloudsecurityalliance.org/blog/2025/04/09/secure-vibe-coding-guide',
            description: 'What to watch out for \u2014 especially if handling client data.',
          },
        ],
      },
      allInOne: {
        label: 'One-stop platforms',
        tagline: 'Build and deploy in one place',
        items: [
          {
            title: 'Replit',
            url: 'https://replit.com',
            description: "Vibe-code and deploy in the browser \u2014 no local setup needed. Good for quick projects and prototypes; pricing can scale with use.",
          },
          {
            title: 'Lovable',
            url: 'https://lovable.dev',
            description: 'Similar approach to Replit: build a full web app in the browser and deploy with one click. Strong for rapid prototyping without touching a terminal.',
          },
        ],
      },
      developerStack: {
        label: 'Developer stack',
        tagline: 'Maximum flexibility \u2014 requires installing a few tools',
        items: [
          {
            title: 'Claude Code',
            source: 'Anthropic',
            url: 'https://claude.com/claude-code',
            description: 'AI coding assistant that runs on your computer. Handles multi-file projects and iterative debugging \u2014 more capable than the all-in-one platforms for serious work.',
          },
          {
            title: 'GitHub',
            url: 'https://github.com',
            description: 'Free code hosting. Connects your project to Render so pushing an update refreshes your live site, and gives you a history so you can undo mistakes.',
          },
          {
            title: 'Render',
            url: 'https://render.com',
            description: 'Free-tier web hosting. Connects to GitHub and redeploys on push. Works with Canvas exports or full Claude Code projects.',
          },
        ],
      },
    },
  },

  calicon26: {
    id: 'calicon26',
    title: 'Vibe Coding for Law Faculty',
    subtitle: 'CALIcon 26',
    slidesUrl: '/slides-calicon26.html',
    showcaseSubtitle: 'Tools built with AI for teaching, research, and the classroom',
    tabs: [
      { id: 'home', label: 'Home' },
      { id: 'slides', label: 'Slides' },
      { id: 'build', label: 'Build' },
      { id: 'preview', label: 'Preview' },
      { id: 'deploy', label: 'Deploy' },
      { id: 'showcase', label: 'Showcase' },
      { id: 'resources', label: 'Resources' },
    ],
    defaultTab: 'home',
    home: {
      title: 'Vibe Coding for Law Faculty',
      description:
        'How AI-assisted development is changing what law professors can build for their classrooms — and how you can start building your own tools today, without waiting for the IT department or the edtech vendors.',
      steps: [
        { tab: 'slides', label: 'Slides', desc: 'Presentation on vibe coding in legal education' },
        { tab: 'build', label: 'Build', desc: 'Use the prompt wizard to generate a teaching tool with AI' },
        { tab: 'preview', label: 'Preview', desc: 'Paste your code to see it rendered live' },
        { tab: 'deploy', label: 'Deploy', desc: 'How to publish simple one-file apps from Gemini Canvas' },
        { tab: 'showcase', label: 'Showcase', desc: 'Tools built with AI for teaching, research, and the classroom' },
        { tab: 'resources', label: 'Resources', desc: 'Articles, tools, and inspiration to keep building after the session' },
      ],
    },
    build: {
      templates: [
        {
          id: 'canvas',
          label: 'Gemini Canvas',
          prompt: 'I want to make a Gemini Canvas app. [DESCRIBE YOUR IDEA — what problem does it solve? who is it for?]\n\nBefore you start building, ask me a few questions about who this is for and what their experience should be like.',
        },
        {
          id: 'aistudio',
          label: 'Google AI Studio',
          note: 'AI Studio apps take longer to build — great for AI-powered teaching tools, but you may not finish in the session.',
          prompt: 'I want to build an app in Google AI Studio using the Build tab — look it up if you\'re not sure, Google AI Studio has a Build tab now. [DESCRIBE YOUR IDEA — what problem does it solve? who is it for?]\n\nBefore you start building, ask me a few questions about who this is for and what their experience should be like.',
        },
      ],
      ideas: [
        {
          id: 'case-brief',
          title: 'Case Brief Builder',
          description: 'Walk students through the parts of a case brief and output a clean, formatted version.',
          template: 'canvas',
          prompt: 'I want to make a Gemini Canvas app. Briefing cases is one of the first skills law students learn, and they struggle to remember what goes in each section. I want to build a tool where a student fills in the facts, issue, rule, analysis, and conclusion — with prompts to guide them — and gets a clean, formatted brief they can bring to class.\n\nBefore you start building, ask me a few questions about who this is for and what their experience should be like.',
        },
        {
          id: 'doctrinal-tree',
          title: 'Doctrinal Decision Tree',
          description: 'Teach a legal rule as branching questions — applicability, exceptions, and consequences.',
          template: 'canvas',
          prompt: 'I want to make a Gemini Canvas app. I teach [COURSE] and I want to turn a doctrinal rule into an interactive decision tree — students answer questions about a fact pattern and watch the analysis unfold step by step, with the rule and key cases surfaced at each branch.\n\nBefore you start building, ask me a few questions about who this is for and what their experience should be like.',
        },
        {
          id: 'practice-hypo',
          title: 'Practice Hypo Generator',
          description: 'Generate exam-style hypotheticals for a doctrine students can work through on their own.',
          template: 'canvas',
          prompt: 'I want to make a Gemini Canvas app. I want to build a practice hypothetical generator for my students — they pick a doctrine or topic, get a realistic fact pattern, work through IRAC on their own, and can reveal a model answer to compare against.\n\nBefore you start building, ask me a few questions about who this is for and what their experience should be like.',
        },
        {
          id: 'rule-cards',
          title: 'Black-Letter Rule Cards',
          description: 'Interactive flashcard deck for the core rules of a course — quiz mode plus elaboration.',
          template: 'canvas',
          prompt: 'I want to make a Gemini Canvas app. I want to build an interactive flashcard deck for the black-letter rules of [COURSE]. Students should be able to flip through cards, quiz themselves, and see an elaboration with an example case on the back of each card.\n\nBefore you start building, ask me a few questions about who this is for and what their experience should be like.',
        },
        {
          id: 'timeline',
          title: 'Procedural Timeline',
          description: 'Visualize the sequence of a civil or criminal case so students can see the procedural arc.',
          template: 'canvas',
          prompt: 'I want to make a Gemini Canvas app. I want to build an interactive timeline that walks students through the procedural arc of a [CIVIL / CRIMINAL] case — from filing to final judgment — with each milestone explained in plain English and linked to the relevant rule.\n\nBefore you start building, ask me a few questions about who this is for and what their experience should be like.',
        },
        {
          id: 'ai-case-reader',
          title: 'AI Case Reader',
          description: 'Upload an opinion and have AI extract facts, issue, rule, analysis, and holding into an editable brief.',
          template: 'aistudio',
          prompt: 'I want to build an app in Google AI Studio using the Build tab — look it up if you\'re not sure, Google AI Studio has a Build tab now. I want a tool where my students upload a judicial opinion and the AI extracts facts, issue, rule, analysis, and holding into an editable brief they can revise. The point is for them to compare their own reading to the AI\'s and learn where the AI gets things wrong.\n\nBefore you start building, ask me a few questions about who this is for and what their experience should be like.',
        },
        {
          id: 'ai-policy',
          title: 'AI Use Policy Generator',
          description: 'Produce a tailored AI policy for a syllabus — choose permission levels and the tool drafts the language.',
          template: 'aistudio',
          prompt: 'I want to build an app in Google AI Studio using the Build tab — look it up if you\'re not sure, Google AI Studio has a Build tab now. I want a tool that helps a faculty member generate an AI use policy for a syllabus or assignment — they pick the permission level (banned, limited, encouraged), the course context, and the assessment type, and the tool drafts clear policy language plus a short rationale.\n\nBefore you start building, ask me a few questions about who this is for and what their experience should be like.',
        },
        {
          id: 'ai-office-hours',
          title: 'AI Office Hours Tutor',
          description: 'An AI tutor grounded in your course materials that answers student questions in your voice.',
          template: 'aistudio',
          prompt: 'I want to build an app in Google AI Studio using the Build tab — look it up if you\'re not sure, Google AI Studio has a Build tab now. I want an AI tutor for my course. Students ask questions, the AI answers grounded in the materials I upload (syllabus, readings, class notes), and it hedges or sends them to office hours when it isn\'t sure.\n\nBefore you start building, ask me a few questions about who this is for and what their experience should be like.',
        },
      ],
    },
    showcase: FACULTY_SHOWCASE,
    resources: {
      readWatch: {
        label: 'Read & watch',
        tagline: "Why faculty are starting to build their own",
        items: [
          {
            title: 'What If Teachers Built Their Own?',
            source: 'Tim Moon',
            url: 'https://timmoon.substack.com/p/what-if-teachers-built-their-own',
            description: 'The case for teachers taking the tools into their own hands instead of waiting on edtech vendors.',
          },
          {
            title: 'When Teachers Become Builders: Vibe Coding',
            source: 'Needed Now LT',
            url: 'https://needednowlt.substack.com/p/when-teachers-become-builders-vibe',
            description: 'What changes when teachers stop being users and start shipping the tools their classrooms need.',
          },
          {
            title: "Can't Stop, Won't Stop: One Semester, Eight Vibe-Coded Teaching Tools",
            source: 'AI Law Librarians',
            url: 'https://www.ailawlibrarians.com/2026/03/04/cant-stop-wont-stop-one-semester-eight-vibe-coded-teaching-tools/',
            description: 'My own write-up of eight tools built over one semester of teaching — honest notes on what worked and what didn’t.',
          },
          {
            title: 'Vibe Coding for Teachers: Create Educational Apps with the Help of AI',
            source: 'Observatory / Tec de Monterrey',
            url: 'https://observatory.tec.mx/edu-bits-2/vibe-coding-for-teachers-create-educational-apps-with-the-help-of-ai/',
            description: 'A broader look at educators building their own classroom tools with AI.',
          },
          {
            title: 'What Is Happening to Writing?',
            source: 'Res Obscura (Benjamin Breen)',
            url: 'https://resobscura.substack.com/p/what-is-happening-to-writing',
            description: 'A historian’s reflection on AI’s effect on student writing and what educators should do about it.',
          },
          {
            title: 'Jamie Tso Interview: Vibe-Coding Your Own Legal AI Tools',
            source: 'Artificial Lawyer',
            url: 'https://www.artificiallawyer.com/2026/01/05/jamie-tso-interview-vibe-coding-your-own-legal-ai-tools/',
            description: 'How a Clifford Chance associate started building his own tools — a useful model for faculty too.',
          },
          {
            title: 'Vibe Coding: Best Practices for Prompting',
            source: 'Supabase',
            url: 'https://supabase.com/blog/vibe-coding-best-practices-for-prompting',
            description: 'Practical techniques for writing better prompts when building.',
          },
          {
            title: 'Secure Vibe Coding Guide',
            source: 'Cloud Security Alliance',
            url: 'https://cloudsecurityalliance.org/blog/2025/04/09/secure-vibe-coding-guide',
            description: 'What to watch out for — especially if your tool touches student data.',
          },
        ],
      },
      galleries: {
        label: 'Galleries & examples',
        tagline: 'Browse what faculty and practitioners have built',
        items: [
          {
            title: "Barbora Obracajova's Legal Tech Gallery",
            source: 'Lovable',
            url: 'https://legaltechgallery.lovable.app/',
            description: 'Curated gallery of AI-built legal tech, organized by use case.',
          },
          {
            title: "Barbora Obracajova on vibe-coding for legal education",
            source: 'LinkedIn',
            url: 'https://www.linkedin.com/posts/barboraobracajova_i-vibecoded-an-app-that-changed-how-i-explain-activity-7432409625544724480-9wvm',
            description: 'Short post on how one vibe-coded app changed how she explains a concept.',
          },
          {
            title: "Jamie's collection of vibe-coded apps",
            url: 'https://jamievibes.replit.app/',
            description: "Dozens of legal tools one lawyer built solo — proof of what's possible without a dev team.",
          },
          {
            title: 'Automation Bias Exercise — Suffolk LIT Lab',
            source: 'Suffolk LIT Lab',
            url: 'https://suffolklitlab.org/algos-bias-due-process-you/#automation-bias',
            description: 'Classroom-ready interactive exercise on automation bias from the Suffolk LIT Lab.',
          },
          {
            title: 'Vibe Coding Ideas for Education',
            source: 'Google Doc (community list)',
            url: 'https://docs.google.com/document/d/1g_pSY33Gfm-DpxOvtnoLvsS0rlJj0vHkcZu2ndYuVTI/edit?tab=t.0',
            description: 'Community-maintained list of teaching-tool ideas worth building.',
          },
        ],
      },
      allInOne: {
        label: 'One-stop platforms',
        tagline: 'Build and deploy in one place',
        items: [
          {
            title: 'Replit',
            url: 'https://replit.com',
            description: 'Vibe-code and deploy in the browser — no local setup needed. Good for quick projects and prototypes.',
          },
          {
            title: 'Lovable',
            url: 'https://lovable.dev',
            description: 'Build a full web app in the browser and deploy with one click. Strong for rapid prototyping without touching a terminal.',
          },
        ],
      },
      developerStack: {
        label: 'Developer stack',
        tagline: 'Maximum flexibility — requires installing a few tools',
        items: [
          {
            title: 'Claude Code',
            source: 'Anthropic',
            url: 'https://claude.com/claude-code',
            description: 'AI coding assistant that runs on your computer. Handles multi-file projects and iterative debugging — more capable than the all-in-one platforms for serious work.',
          },
          {
            title: 'GitHub',
            url: 'https://github.com',
            description: 'Free code hosting. Connects your project to Render so pushing an update refreshes your live site, and gives you a history so you can undo mistakes.',
          },
          {
            title: 'Render',
            url: 'https://render.com',
            description: 'Free-tier web hosting. Connects to GitHub and redeploys on push. Works with Canvas exports or full Claude Code projects.',
          },
        ],
      },
    },
  },
};

export const DEFAULT_EVENT = 'workshop';

// Portfolio: every showcase item across all event configs that has `builtWith`
// set (the marker for "I built this" vs. community contributions), deduped by
// title. Driven from EVENT_CONFIGS so new event configs are picked up
// automatically.
export const MY_PORTFOLIO = (() => {
  const seen = new Set();
  const out = [];
  for (const config of Object.values(EVENT_CONFIGS)) {
    const items = Array.isArray(config.showcase) ? config.showcase : [];
    for (const item of items) {
      if (!item.builtWith) continue;
      if (seen.has(item.title)) continue;
      seen.add(item.title);
      out.push(item);
    }
  }
  return out;
})();

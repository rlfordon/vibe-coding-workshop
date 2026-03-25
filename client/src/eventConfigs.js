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
      { id: 'gallery', label: 'Gallery' },
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
        { tab: 'gallery', label: 'Gallery', desc: 'Submit your project, browse others, and vote for favorites' },
        { tab: 'deploy', label: 'Deploy', desc: 'Learn how to publish your project to the web' },
        { tab: 'resources', label: 'Resources', desc: 'Curated links to keep learning after the workshop' },
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
      { id: 'resources', label: 'Resources' },
    ],
    defaultTab: 'home',
    home: {
      title: 'Vibe Coding for Law Faculty',
      description:
        'How AI-assisted development is changing what law professors can build for their classrooms — and why the people who understand the problem best should be the ones building the solution.',
      steps: [
        { tab: 'slides', label: 'Slides', desc: 'Presentation on vibe coding in legal education' },
        { tab: 'showcase', label: 'Showcase', desc: 'Eight teaching tools built with AI in one semester' },
        { tab: 'resources', label: 'Resources', desc: 'Articles, tools, and inspiration to get started' },
      ],
    },
    showcase: [
      {
        title: 'TokenExplorer',
        description:
          'Students manipulate temperature settings and watch probability distributions shift in real time, making the statistical nature of LLMs visible.',
        url: 'https://llm-token-explorer.onrender.com',
        github: 'https://github.com/rlfordon/llm-explorer',
        screenshot: '/showcase/token-explorer.png',
        week: 'Week 2',
        tags: ['LLMs', 'interactive demo'],
      },
      {
        title: 'Prompt Coach',
        description:
          'Split-panel app where students draft prompts on the left and receive real-time AI coaching on technique, confidentiality, and professional judgment on the right.',
        url: 'https://prompt-coach.onrender.com',
        github: 'https://github.com/rlfordon/prompt-coach',
        screenshot: '/showcase/prompt-coach.png',
        week: 'Week 5',
        tags: ['prompting', 'AI coaching'],
      },
      {
        title: 'QnA Markup Screener',
        description:
          'Client intake screener for wage-and-hour claims built with QnA Markup. Students see legal rules as logic: if/then branching based on employer size and hourly rate.',
        url: 'https://www.qnamarkup.org/i/?source=https://raw.githubusercontent.com/rlfordon/vibe-coding-workshop/main/scratch/qna-markup-screener.txt',
        screenshot: '/showcase/qna-markup.png',
        week: 'Week 6',
        tags: ['decision trees', 'legal aid'],
      },
      {
        title: 'Decision Tree to QnA Markup Gem',
        description:
          'A Gemini Gem that bridges domain knowledge and technical implementation — students describe their logic and it generates QnA Markup.',
        url: 'https://gemini.google.com',
        screenshot: '/showcase/qna-gem.png',
        week: 'Week 6',
        tags: ['Gemini Gems', 'automation'],
      },
      {
        title: 'Ohio Unpaid Wages Screener',
        description:
          'The same decision tree vibe-coded into a React app in under 3 minutes. Used as a cliffhanger to introduce vibe coding and spark discussion.',
        url: 'https://ohio-wage-screener.onrender.com',
        screenshot: '/showcase/wage-screener.png',
        week: 'Week 6',
        tags: ['vibe coding', 'React'],
      },
      {
        title: 'Citation Extractor Gem',
        description:
          'A Gemini Gem that extracts all case citations from an uploaded brief into a structured table, ready for verification on Westlaw and Lexis.',
        url: 'https://gemini.google.com',
        screenshot: '/showcase/citation-extractor.png',
        week: 'Week 7',
        tags: ['citations', 'Gemini Gems'],
      },
      {
        title: 'Citation Hallucination Game',
        description:
          'Competitive team exercise where students create hallucinated citations, then try to catch another team\'s fakes under time pressure.',
        url: 'https://hallucination-game.replit.app/',
        github: 'https://github.com/rlfordon/hallucination-game',
        screenshot: '/showcase/hallucination-game.png',
        week: 'Week 7',
        tags: ['hallucinations', 'team exercise'],
      },
      {
        title: 'Document Tech Gallery',
        description:
          'Seven quick interactive demos (~60 seconds each) covering automation, clause libraries, editing, verification, metadata, redaction, and contract review.',
        url: 'https://doc-tech-gallery.onrender.com',
        github: 'https://github.com/rlfordon/doc-tech-gallery',
        screenshot: '/showcase/doc-tech-gallery.png',
        week: 'Week 8',
        tags: ['document tech', 'interactive demos'],
      },
    ],
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
        source: 'LinkedIn',
        url: 'https://www.linkedin.com/in/barbora-obracajova/',
      },
      {
        title: "David Colarusso's QnA Markup",
        source: 'QnA Markup',
        url: 'https://www.qnamarkup.org/',
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
};

export const DEFAULT_EVENT = 'workshop';

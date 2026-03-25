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
    showcase: [
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
      },
      {
        title: 'AI-Powered Lawyering Heatmap',
        description:
          'Interactive visualization comparing how reasoning models and RAG perform against human-only legal work across specialized tasks.',
        url: 'https://gemini.google.com/share/22471ef31949',
        screenshot: '/showcase/ai-lawyering-heatmap.png',
        category: 'research',
        tags: ['research', 'visualization'],
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
};

export const DEFAULT_EVENT = 'workshop';

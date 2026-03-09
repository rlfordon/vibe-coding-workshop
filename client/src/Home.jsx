export default function Home({ onNavigate }) {
  const steps = [
    { tab: 'slides', label: 'Slides', desc: 'Follow along with the workshop presentation' },
    { tab: 'build', label: 'Build', desc: 'Use the prompt wizard to generate your project with AI' },
    { tab: 'preview', label: 'Preview', desc: 'Paste your code to see it rendered live' },
    { tab: 'gallery', label: 'Gallery', desc: 'Submit your project, browse others, and vote for favorites' },
    { tab: 'deploy', label: 'Deploy', desc: 'Learn how to publish your project to the web' },
    { tab: 'resources', label: 'Resources', desc: 'Curated links to keep learning after the workshop' },
  ];

  return (
    <div className="max-w-3xl mx-auto px-4 py-16">
      <div className="text-center mb-12">
        <h1 className="font-[BioRhyme,serif] text-4xl sm:text-5xl font-extrabold text-[#BA0C2F] mb-3">
          Vibe Coding Workshop
        </h1>
        <p className="text-lg text-slate-600 max-w-xl mx-auto">
          Build a real web project using AI — no coding experience required.
          Follow the steps below to go from idea to published site in one session.
        </p>
      </div>

      <ol className="space-y-4">
        {steps.map((step, i) => (
          <li key={step.tab}>
            <button
              onClick={() => onNavigate(step.tab)}
              className="w-full text-left flex items-start gap-4 p-4 rounded-xl bg-white border border-slate-200 hover:border-[#BA0C2F]/30 hover:shadow-sm transition-all group"
            >
              <span className="flex-shrink-0 w-8 h-8 rounded-full bg-[#BA0C2F] text-white font-bold flex items-center justify-center text-sm">
                {i + 1}
              </span>
              <div>
                <span className="font-semibold text-slate-900 group-hover:text-[#BA0C2F] transition-colors">
                  {step.label}
                </span>
                <p className="text-sm text-slate-500 mt-0.5">{step.desc}</p>
              </div>
            </button>
          </li>
        ))}
      </ol>
    </div>
  );
}

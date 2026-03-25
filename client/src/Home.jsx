export default function Home({ config, onNavigate }) {
  const { home } = config;

  return (
    <div className="max-w-3xl mx-auto px-4 py-16">
      <div className="text-center mb-12">
        <h1 className="font-[BioRhyme,serif] text-4xl sm:text-5xl font-extrabold text-[#BA0C2F] mb-3">
          {home.title}
        </h1>
        <p className="text-lg text-slate-600 max-w-xl mx-auto">
          {home.description}
        </p>
      </div>

      <ol className="space-y-4">
        {home.steps.map((step, i) => (
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

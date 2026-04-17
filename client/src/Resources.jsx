function ResourceLink({ r }) {
  return (
    <a
      href={r.url}
      target="_blank"
      rel="noopener noreferrer"
      className="block py-3 px-1 border-b border-slate-100 hover:bg-slate-50 transition-colors"
    >
      <div className="text-slate-800 text-[17px]">
        {r.title}
        {r.source && (
          <span className="text-slate-400 text-sm ml-2">— {r.source}</span>
        )}
      </div>
      {r.description && (
        <div className="text-slate-500 text-sm mt-1 leading-snug">{r.description}</div>
      )}
    </a>
  );
}

export default function Resources({ items }) {
  const isGrouped = items && !Array.isArray(items);

  return (
    <div className="max-w-2xl mx-auto px-4 py-12">
      <h1 className="font-[BioRhyme,serif] text-[#BA0C2F] text-3xl font-extrabold mb-2">
        Vibe-coding resources
      </h1>
      <p className="text-slate-500 mb-8">
        Articles, guides, and inspiration for building with AI.
      </p>

      {isGrouped ? (
        <div className="space-y-10">
          {Object.entries(items).map(([key, group]) => (
            <section key={key}>
              <h2 className="font-[BioRhyme,serif] text-slate-900 text-xl font-bold">
                {group.label}
              </h2>
              {group.tagline && (
                <p className="text-slate-500 text-sm mb-3">{group.tagline}</p>
              )}
              <div className="space-y-1">
                {group.items.map((r) => (
                  <ResourceLink key={r.url} r={r} />
                ))}
              </div>
            </section>
          ))}
        </div>
      ) : (
        <div className="space-y-1">
          {items.map((r) => (
            <ResourceLink key={r.url} r={r} />
          ))}
        </div>
      )}
    </div>
  );
}

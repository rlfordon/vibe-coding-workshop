export default function Resources({ items }) {
  return (
    <div className="max-w-2xl mx-auto px-4 py-12">
      <h1 className="font-[BioRhyme,serif] text-[#BA0C2F] text-3xl font-extrabold mb-2">
        Vibe-coding resources
      </h1>
      <p className="text-slate-500 mb-8">
        Articles, guides, and inspiration for building with AI.
      </p>

      <div className="space-y-1">
        {items.map((r) => (
          <a
            key={r.url}
            href={r.url}
            target="_blank"
            rel="noopener noreferrer"
            className="block py-3 px-1 border-b border-slate-100 text-slate-800 hover:text-[#BA0C2F] transition-colors text-[17px]"
          >
            {r.title}
            {r.source && (
              <span className="text-slate-400 text-sm ml-2">— {r.source}</span>
            )}
          </a>
        ))}
      </div>
    </div>
  );
}

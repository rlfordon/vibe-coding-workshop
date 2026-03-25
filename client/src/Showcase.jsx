import { useState } from 'react';
import { ExternalLink, X, BookOpen } from 'lucide-react';

const FILTERS = [
  { id: 'all', label: 'All' },
  { id: 'teaching', label: 'Teaching' },
  { id: 'research', label: 'Research' },
  { id: 'community', label: 'Community' },
];

export default function Showcase({ items }) {
  const [lightbox, setLightbox] = useState(null);
  const [filter, setFilter] = useState('all');

  if (!items || items.length === 0) {
    return (
      <div className="max-w-6xl mx-auto px-4 py-20 text-center text-slate-400">
        No showcase items configured.
      </div>
    );
  }

  const filtered = filter === 'all' ? items : items.filter((item) => item.category === filter);

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 pt-8 pb-20">
      <div className="mb-8">
        <h1 className="text-3xl sm:text-4xl font-[BioRhyme,serif] font-bold text-slate-800 tracking-tight">
          Tool Showcase
        </h1>
        <p className="text-lg text-slate-500 font-medium mt-1">
          Tools built with AI for teaching, research, and the classroom
        </p>
        <div className="h-1.5 w-full bg-[#BA0C2F] rounded-full mt-4" />
      </div>

      {/* Filter bar */}
      <div className="flex gap-2 mb-6">
        {FILTERS.map((f) => (
          <button
            key={f.id}
            onClick={() => setFilter(f.id)}
            className={`px-4 py-1.5 rounded-full text-sm font-semibold transition-colors ${
              filter === f.id
                ? 'bg-[#BA0C2F] text-white'
                : 'bg-slate-100 text-slate-500 hover:bg-slate-200'
            }`}
          >
            {f.label}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {filtered.map((item) => (
          <div
            key={item.title}
            className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden flex flex-col"
          >
            {/* Screenshot */}
            <div className="h-48 bg-slate-100 border-b border-slate-200 overflow-hidden">
              {item.screenshot ? (
                <img
                  src={item.screenshot}
                  alt={item.title}
                  className="w-full h-full object-cover object-top cursor-pointer hover:opacity-90 transition-opacity"
                  onClick={() => setLightbox(item)}
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center text-slate-300 text-sm">
                  No screenshot
                </div>
              )}
            </div>

            {/* Info */}
            <div className="p-4 flex-1 flex flex-col">
              <div className="flex items-start justify-between gap-2">
                <h3 className="font-bold text-slate-800 text-sm leading-tight">
                  {item.title}
                </h3>
                {item.week && (
                  <span className="flex-shrink-0 px-2 py-0.5 bg-[#BA0C2F]/10 text-[#BA0C2F] rounded-full text-[10px] font-bold">
                    {item.week}
                  </span>
                )}
              </div>
              <p className="text-xs text-slate-500 mt-1.5 leading-relaxed flex-1">
                {item.description}
              </p>

              {/* Tags */}
              {item.tags && item.tags.length > 0 && (
                <div className="flex flex-wrap gap-1.5 mt-3">
                  {item.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-0.5 bg-slate-100 text-slate-500 rounded-full text-[10px] font-semibold"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              )}

              {/* Links */}
              <div className="flex items-center gap-3 mt-3 pt-3 border-t border-slate-100">
                {item.url && (
                  <a
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-xs font-bold text-[#BA0C2F] hover:opacity-70 transition-opacity"
                  >
                    <ExternalLink size={12} />
                    Try it
                  </a>
                )}
                {item.source && (
                  <a
                    href={item.source}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-xs font-bold text-slate-500 hover:text-slate-700 transition-colors"
                  >
                    <BookOpen size={12} />
                    About
                  </a>
                )}
                {item.github && (
                  <a
                    href={item.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-slate-500 hover:text-slate-700 transition-colors"
                  >
                    <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                    </svg>
                    GitHub
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox */}
      {lightbox && (
        <div
          className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4 cursor-pointer"
          onClick={() => setLightbox(null)}
        >
          <button
            onClick={() => setLightbox(null)}
            className="absolute top-4 right-4 text-white/80 hover:text-white transition-colors"
          >
            <X size={28} />
          </button>
          <div className="max-w-4xl w-full" onClick={(e) => e.stopPropagation()}>
            <img
              src={lightbox.screenshot}
              alt={lightbox.title}
              className="w-full rounded-lg shadow-2xl"
            />
            <p className="text-white text-center mt-3 font-semibold text-sm">
              {lightbox.title}
            </p>
          </div>
        </div>
      )}
    </div>
  );
}

import { useState } from 'react';
import { ExternalLink, X, BookOpen } from 'lucide-react';

const CATEGORY_LABELS = {
  teaching: 'Teaching',
  research: 'Research',
  community: 'Community',
  practice: 'Practice',
  'ai-literacy': 'AI Literacy',
};

const BUILT_WITH_COLORS = {
  'Claude Code': { bg: 'bg-orange-100', text: 'text-orange-700', border: 'border-orange-200' },
  'Gemini Canvas': { bg: 'bg-blue-100', text: 'text-blue-700', border: 'border-blue-200' },
  'Gemini Gem': { bg: 'bg-purple-100', text: 'text-purple-700', border: 'border-purple-200' },
  'Replit': { bg: 'bg-sky-100', text: 'text-sky-700', border: 'border-sky-200' },
  'Google AI Studio': { bg: 'bg-emerald-100', text: 'text-emerald-700', border: 'border-emerald-200' },
  'QnA Markup': { bg: 'bg-amber-100', text: 'text-amber-700', border: 'border-amber-200' },
};

const HOSTED_ON_COLORS = {
  'Render': { bg: 'bg-teal-50', text: 'text-teal-600', border: 'border-teal-200' },
  'Replit': { bg: 'bg-sky-50', text: 'text-sky-600', border: 'border-sky-200' },
  'GitHub Pages': { bg: 'bg-gray-50', text: 'text-gray-600', border: 'border-gray-200' },
};

export default function Showcase({ items, subtitle }) {
  const [lightbox, setLightbox] = useState(null);
  const [category, setCategory] = useState('all');
  const [builtWith, setBuiltWith] = useState('all');
  const [origin, setOrigin] = useState('all');

  if (!items || items.length === 0) {
    return (
      <div className="max-w-6xl mx-auto px-4 py-20 text-center text-slate-400">
        No showcase items configured.
      </div>
    );
  }

  // Derive available filters from items
  const builtWithOptions = [...new Set(items.map((i) => i.builtWith).filter(Boolean))].sort();
  const categoryOptions = [...new Set(items.map((i) => i.category).filter(Boolean))];
  const categoryFilters = [
    { id: 'all', label: 'All' },
    ...categoryOptions.map((c) => ({ id: c, label: CATEGORY_LABELS[c] || c })),
  ];

  let filtered = items;
  if (category !== 'all') filtered = filtered.filter((i) => i.category === category);
  if (origin === 'mine') filtered = filtered.filter((i) => i.builtWith);
  if (origin === 'community') filtered = filtered.filter((i) => !i.builtWith);
  if (builtWith !== 'all') filtered = filtered.filter((i) => i.builtWith === builtWith);

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 pt-8 pb-20">
      <div className="mb-8">
        <h1 className="text-3xl sm:text-4xl font-[BioRhyme,serif] font-bold text-slate-800 tracking-tight">
          Tool Showcase
        </h1>
        <p className="text-lg text-slate-500 font-medium mt-1">
          {subtitle || 'Tools built with AI for teaching, research, and the classroom'}
        </p>
        <div className="h-1.5 w-full bg-[#BA0C2F] rounded-full mt-4" />
      </div>

      {/* Filter rows */}
      <div className="space-y-3 mb-6">
        {/* Row 1: Origin + Category */}
        <div className="flex flex-wrap items-center gap-2">
          <span className="text-xs font-bold text-slate-400 uppercase tracking-wide mr-1">Show:</span>
          {[
            { id: 'all', label: 'All' },
            { id: 'mine', label: 'My Projects' },
            { id: 'community', label: 'Community' },
          ].map((f) => (
            <button
              key={f.id}
              onClick={() => {
                setOrigin(f.id);
                if (f.id === 'community') setBuiltWith('all');
              }}
              className={`px-3 py-1 rounded-full text-xs font-semibold transition-colors ${
                origin === f.id
                  ? 'bg-[#BA0C2F] text-white'
                  : 'bg-slate-100 text-slate-500 hover:bg-slate-200'
              }`}
            >
              {f.label}
            </button>
          ))}
          <span className="text-slate-200 mx-1">|</span>
          {categoryFilters.map((f) => (
            <button
              key={f.id}
              onClick={() => setCategory(f.id)}
              className={`px-3 py-1 rounded-full text-xs font-semibold transition-colors ${
                category === f.id
                  ? 'bg-[#BA0C2F] text-white'
                  : 'bg-slate-100 text-slate-500 hover:bg-slate-200'
              }`}
            >
              {f.label}
            </button>
          ))}
        </div>

        {/* Row 2: Built with (hidden when showing community only) */}
        {origin !== 'community' && (
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-xs font-bold text-slate-400 uppercase tracking-wide mr-1">Built with:</span>
            <button
              onClick={() => setBuiltWith('all')}
              className={`px-3 py-1 rounded-full text-xs font-semibold transition-colors ${
                builtWith === 'all'
                  ? 'bg-slate-700 text-white'
                  : 'bg-slate-100 text-slate-500 hover:bg-slate-200'
              }`}
            >
              All
            </button>
            {builtWithOptions.map((tool) => {
              const colors = BUILT_WITH_COLORS[tool] || { bg: 'bg-slate-100', text: 'text-slate-600', border: 'border-slate-200' };
              return (
                <button
                  key={tool}
                  onClick={() => setBuiltWith(tool)}
                  className={`px-3 py-1 rounded-full text-xs font-semibold transition-colors border ${
                    builtWith === tool
                      ? `${colors.bg} ${colors.text} ${colors.border}`
                      : 'bg-slate-100 text-slate-500 border-transparent hover:bg-slate-200'
                  }`}
                >
                  {tool}
                </button>
              );
            })}
          </div>
        )}
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

              {/* Built with / Hosted on badges */}
              {(item.builtWith || item.hostedOn) && (
                <div className="flex flex-wrap gap-1.5 mt-3">
                  {item.builtWith && (() => {
                    const colors = BUILT_WITH_COLORS[item.builtWith] || { bg: 'bg-slate-100', text: 'text-slate-600', border: 'border-slate-200' };
                    return (
                      <span className={`px-2 py-0.5 rounded-full text-[10px] font-bold border ${colors.bg} ${colors.text} ${colors.border}`}>
                        {item.builtWith}
                      </span>
                    );
                  })()}
                  {item.hostedOn && (() => {
                    const colors = HOSTED_ON_COLORS[item.hostedOn] || { bg: 'bg-slate-50', text: 'text-slate-600', border: 'border-slate-200' };
                    return (
                      <span className={`px-2 py-0.5 rounded-full text-[10px] font-bold border ${colors.bg} ${colors.text} ${colors.border}`}>
                        Hosted on {item.hostedOn}
                      </span>
                    );
                  })()}
                </div>
              )}

              {/* Tags */}
              {item.tags && item.tags.length > 0 && (
                <div className="flex flex-wrap gap-1.5 mt-2">
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

      {/* Empty state for filters */}
      {filtered.length === 0 && (
        <div className="text-center text-slate-400 py-12">
          No items match the current filters.
        </div>
      )}

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

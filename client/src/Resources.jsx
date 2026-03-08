const RESOURCES = [
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
];

export default function Resources() {
  return (
    <div className="max-w-2xl mx-auto px-4 py-12">
      <h1 className="font-[BioRhyme,serif] text-[#BA0C2F] text-3xl font-extrabold mb-2">
        Vibe-coding resources
      </h1>
      <p className="text-slate-500 mb-8">
        Articles, guides, and inspiration for building with AI.
      </p>

      <div className="space-y-1">
        {RESOURCES.map((r) => (
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

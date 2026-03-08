import { useState, useEffect, useRef } from 'react';
import { ThumbsUp, MessageCircle, X, Send, Plus, Maximize2, ChevronDown, ChevronUp } from 'lucide-react';

const API = '/api/projects';

export default function Gallery() {
  const [projects, setProjects] = useState([]);
  const [showSubmit, setShowSubmit] = useState(false);
  const [expanded, setExpanded] = useState(null);
  const [loading, setLoading] = useState(true);

  const fetchProjects = async () => {
    try {
      const res = await fetch(API);
      const data = await res.json();
      setProjects(data);
    } catch (e) {
      console.error('Failed to fetch projects:', e);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProjects();
    const interval = setInterval(fetchProjects, 5000);
    return () => clearInterval(interval);
  }, []);

  const handleVote = async (id) => {
    try {
      const res = await fetch(`${API}/${id}/vote`, { method: 'POST' });
      if (res.ok) {
        const updated = await res.json();
        setProjects((prev) => prev.map((p) => (p.id === updated.id ? updated : p)).sort((a, b) => b.votes - a.votes));
      }
    } catch (e) {
      console.error('Vote failed:', e);
    }
  };

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 pt-8 pb-20">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-8">
        <div>
          <h1 className="text-3xl sm:text-4xl font-[BioRhyme,serif] font-bold text-slate-800 tracking-tight">
            Project Gallery
          </h1>
          <p className="text-lg text-slate-500 font-medium mt-1">
            {projects.length} project{projects.length !== 1 ? 's' : ''} submitted
          </p>
          <div className="h-1.5 w-full bg-[#BA0C2F] rounded-full mt-4" />
        </div>
        <button
          onClick={() => setShowSubmit(true)}
          className="flex items-center gap-2 px-5 py-2.5 bg-[#BA0C2F] text-white rounded-xl font-bold text-sm hover:opacity-90 active:scale-95 transition-all shadow-sm shrink-0"
        >
          <Plus size={16} />
          Submit Project
        </button>
      </div>

      {/* Loading */}
      {loading && (
        <div className="text-center py-20 text-slate-400 font-medium">Loading projects...</div>
      )}

      {/* Empty state */}
      {!loading && projects.length === 0 && (
        <div className="text-center py-20">
          <p className="text-slate-400 font-medium text-lg mb-2">No projects yet</p>
          <p className="text-slate-400 text-sm">Be the first to submit!</p>
        </div>
      )}

      {/* Project Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {projects.map((project) => (
          <ProjectCard
            key={project.id}
            project={project}
            onVote={() => handleVote(project.id)}
            onExpand={() => setExpanded(project)}
            onProjectUpdate={(updated) => {
              setProjects((prev) =>
                prev.map((p) => (p.id === updated.id ? updated : p)).sort((a, b) => b.votes - a.votes),
              );
            }}
          />
        ))}
      </div>

      {/* Submit Modal */}
      {showSubmit && (
        <SubmitModal
          onClose={() => setShowSubmit(false)}
          onSubmitted={(newProject) => {
            setProjects((prev) => [newProject, ...prev].sort((a, b) => b.votes - a.votes));
            setShowSubmit(false);
          }}
        />
      )}

      {/* Expanded View Modal */}
      {expanded && <ExpandedView project={expanded} onClose={() => setExpanded(null)} />}
    </div>
  );
}

function ProjectCard({ project, onVote, onExpand, onProjectUpdate }) {
  const [showComments, setShowComments] = useState(false);

  return (
    <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden flex flex-col">
      {/* Preview iframe */}
      <div className="relative bg-slate-100 h-56 border-b border-slate-200">
        <SandboxedIframe html={project.html} title={project.title} />
        <button
          onClick={onExpand}
          className="absolute top-2 right-2 p-1.5 bg-white/90 rounded-lg border border-slate-200 shadow-sm hover:bg-white transition-all"
          title="Expand"
        >
          <Maximize2 size={14} className="text-slate-600" />
        </button>
      </div>

      {/* Info */}
      <div className="p-4 flex-1 flex flex-col">
        <h3 className="font-bold text-slate-800 text-sm leading-tight">{project.title}</h3>
        <p className="text-xs text-slate-500 font-medium mt-0.5">by {project.author}</p>

        <div className="flex items-center gap-3 mt-3 pt-3 border-t border-slate-100">
          <button
            onClick={onVote}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold transition-all border border-slate-200 hover:border-[#BA0C2F] hover:text-[#BA0C2F] hover:bg-red-50 text-slate-600"
          >
            <ThumbsUp size={13} />
            {project.votes}
          </button>
          <button
            onClick={() => setShowComments(!showComments)}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold transition-all border border-slate-200 hover:border-slate-300 text-slate-500"
          >
            <MessageCircle size={13} />
            {project.comments.length}
            {showComments ? <ChevronUp size={12} /> : <ChevronDown size={12} />}
          </button>
        </div>

        {/* Comments section */}
        {showComments && (
          <CommentsSection project={project} onProjectUpdate={onProjectUpdate} />
        )}
      </div>
    </div>
  );
}

function CommentsSection({ project, onProjectUpdate }) {
  const [name, setName] = useState('');
  const [text, setText] = useState('');
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!name.trim() || !text.trim()) return;
    setSubmitting(true);
    try {
      const res = await fetch(`${API}/${project.id}/comments`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name: name.trim(), text: text.trim() }),
      });
      if (res.ok) {
        const updated = await res.json();
        onProjectUpdate(updated);
        setText('');
      }
    } catch (e) {
      console.error('Comment failed:', e);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="mt-3 pt-3 border-t border-slate-100 space-y-2">
      {project.comments.map((c, i) => (
        <div key={i} className="text-xs">
          <span className="font-bold text-slate-700">{c.name}</span>{' '}
          <span className="text-slate-500">{c.text}</span>
        </div>
      ))}
      <form onSubmit={handleSubmit} className="flex flex-col gap-1.5 pt-1">
        <input
          type="text"
          placeholder="Your name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="px-2.5 py-1.5 text-xs border border-slate-200 rounded-lg focus:outline-none focus:border-[#BA0C2F] bg-slate-50"
        />
        <div className="flex gap-1.5">
          <input
            type="text"
            placeholder="Add a comment..."
            value={text}
            onChange={(e) => setText(e.target.value)}
            className="flex-1 px-2.5 py-1.5 text-xs border border-slate-200 rounded-lg focus:outline-none focus:border-[#BA0C2F] bg-slate-50"
          />
          <button
            type="submit"
            disabled={submitting || !name.trim() || !text.trim()}
            className="p-1.5 bg-[#BA0C2F] text-white rounded-lg disabled:opacity-40 hover:opacity-90 transition-all"
          >
            <Send size={12} />
          </button>
        </div>
      </form>
    </div>
  );
}

function SubmitModal({ onClose, onSubmitted }) {
  const [author, setAuthor] = useState('');
  const [title, setTitle] = useState('');
  const [html, setHtml] = useState('');
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!author.trim() || !title.trim() || !html.trim()) {
      setError('All fields are required.');
      return;
    }
    setSubmitting(true);
    setError('');
    try {
      const res = await fetch(API, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ author: author.trim(), title: title.trim(), html: html.trim() }),
      });
      if (res.ok) {
        const newProject = await res.json();
        onSubmitted(newProject);
      } else {
        const data = await res.json();
        setError(data.error || 'Submission failed.');
      }
    } catch {
      setError('Network error. Please try again.');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm" onClick={onClose}>
      <div
        className="bg-white rounded-2xl shadow-2xl w-full max-w-lg max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-200">
          <h2 className="font-[BioRhyme,serif] font-bold text-lg text-slate-800">Submit Your Project</h2>
          <button onClick={onClose} className="p-1 hover:bg-slate-100 rounded-lg transition-all">
            <X size={18} className="text-slate-400" />
          </button>
        </div>
        <form onSubmit={handleSubmit} className="p-6 space-y-4">
          <div>
            <label className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 mb-1.5 block">
              Your Name
            </label>
            <input
              type="text"
              value={author}
              onChange={(e) => setAuthor(e.target.value)}
              placeholder="Jane Doe"
              className="w-full px-3 py-2 border border-slate-200 rounded-xl text-sm focus:outline-none focus:border-[#BA0C2F] bg-slate-50"
            />
          </div>
          <div>
            <label className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 mb-1.5 block">
              Project Title
            </label>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="My Legal Micro-Game"
              className="w-full px-3 py-2 border border-slate-200 rounded-xl text-sm focus:outline-none focus:border-[#BA0C2F] bg-slate-50"
            />
          </div>
          <div>
            <label className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 mb-1.5 block">
              HTML Code
            </label>
            <p className="text-[11px] text-slate-400 font-medium mb-1.5">
              Paste the complete HTML from Gemini Canvas. In Canvas, click the three-dot menu and select "Copy code."
            </p>
            <textarea
              value={html}
              onChange={(e) => setHtml(e.target.value)}
              placeholder="<!DOCTYPE html>..."
              rows={8}
              className="w-full px-3 py-2 border border-slate-200 rounded-xl text-sm font-mono focus:outline-none focus:border-[#BA0C2F] bg-slate-50 resize-y"
            />
          </div>
          {error && <p className="text-sm text-red-600 font-medium">{error}</p>}
          <button
            type="submit"
            disabled={submitting}
            className="w-full py-2.5 bg-[#BA0C2F] text-white rounded-xl font-bold text-sm hover:opacity-90 active:scale-[0.98] transition-all disabled:opacity-50"
          >
            {submitting ? 'Submitting...' : 'Submit to Gallery'}
          </button>
        </form>
      </div>
    </div>
  );
}

function ExpandedView({ project, onClose }) {
  return (
    <div className="fixed inset-0 z-50 flex flex-col bg-black/80 backdrop-blur-sm" onClick={onClose}>
      <div className="flex items-center justify-between px-6 py-3 bg-white border-b border-slate-200" onClick={(e) => e.stopPropagation()}>
        <div>
          <h2 className="font-bold text-slate-800 text-sm">{project.title}</h2>
          <p className="text-xs text-slate-500">by {project.author}</p>
        </div>
        <button onClick={onClose} className="p-1.5 hover:bg-slate-100 rounded-lg transition-all">
          <X size={18} className="text-slate-400" />
        </button>
      </div>
      <div className="flex-1 p-4" onClick={(e) => e.stopPropagation()}>
        <div className="w-full h-full bg-white rounded-xl overflow-hidden shadow-2xl">
          <SandboxedIframe html={project.html} title={project.title} />
        </div>
      </div>
    </div>
  );
}

// Map of known npm packages to their browser global variable names
const LIB_GLOBALS = {
  'react': null,        // handled specially
  'react-dom': null,    // handled specially
  'react-dom/client': null,
  'recharts': 'Recharts',
  'lucide-react': 'LucideReact',
  'framer-motion': 'Motion',
};

function parseImports(code) {
  // Match all import statements (including multiline ones)
  const importRegex = /import\s+(?:(\w+)(?:\s*,\s*)?)?(?:\{([^}]*)\})?\s*from\s*['"]([^'"]+)['"]/g;
  const imports = [];
  let match;
  while ((match = importRegex.exec(code)) !== null) {
    const defaultImport = match[1] || null;
    const namedRaw = match[2] || '';
    const source = match[3];
    const named = namedRaw
      .split(',')
      .map(s => s.trim())
      .filter(Boolean)
      .map(s => {
        const parts = s.split(/\s+as\s+/);
        return { original: parts[0], alias: parts[1] || parts[0] };
      });
    imports.push({ defaultImport, named, source });
  }
  return imports;
}

function buildImportShims(imports) {
  const lines = [];
  for (const imp of imports) {
    const globalName = LIB_GLOBALS[imp.source];
    if (globalName === null) continue; // react/react-dom — handled separately
    if (globalName === undefined) continue; // unknown lib — skip, hope for the best

    const lib = `window.${globalName} || {}`;
    if (imp.defaultImport) {
      lines.push(`const ${imp.defaultImport} = ${lib};`);
    }
    if (imp.named.length > 0) {
      const destructures = imp.named.map(n =>
        n.original === n.alias ? n.original : `${n.original}: ${n.alias}`
      ).join(', ');
      lines.push(`const { ${destructures} } = ${lib};`);
    }
  }
  return lines.join('\n');
}

function wrapReactCode(code) {
  const imports = parseImports(code);
  const importShims = buildImportShims(imports);

  // Determine which CDN scripts to include based on what's imported
  const importedSources = new Set(imports.map(i => i.source));
  const cdnScripts = [];
  if (importedSources.has('recharts')) {
    cdnScripts.push('<script src="https://unpkg.com/recharts@2.15.3/umd/Recharts.js" crossorigin><\/script>');
  }
  if (importedSources.has('lucide-react')) {
    cdnScripts.push('<script src="https://unpkg.com/lucide-react@latest/dist/umd/lucide-react.js" crossorigin><\/script>');
  }
  if (importedSources.has('framer-motion')) {
    cdnScripts.push('<script src="https://unpkg.com/framer-motion@11/dist/framer-motion.js" crossorigin><\/script>');
  }

  // Strip all import statements (including multiline) and export default
  let strippedCode = code;
  // Remove all import ... from '...' statements (multiline-safe)
  strippedCode = strippedCode.replace(/import\s+(?:[\w*{}\s,]+)\s+from\s*['"][^'"]+['"];?/g, '');
  // Remove bare imports like import './style.css'
  strippedCode = strippedCode.replace(/import\s+['"][^'"]+['"];?/g, '');

  let componentName = 'App';
  const exportMatch = strippedCode.match(/export\s+default\s+(\w+)/);
  if (exportMatch) {
    componentName = exportMatch[1];
    strippedCode = strippedCode.replace(/export\s+default\s+\w+;?/g, '');
  }

  return `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<script src="https://unpkg.com/react@18/umd/react.development.js" crossorigin><\/script>
<script src="https://unpkg.com/react-dom@18/umd/react-dom.development.js" crossorigin><\/script>
<script src="https://unpkg.com/@babel/standalone@7/babel.min.js"><\/script>
<script src="https://cdn.tailwindcss.com"><\/script>
<script>window.react = window.React;<\/script>
${cdnScripts.join('\n')}
<style>
  body { margin: 0; font-family: system-ui, sans-serif; }
  #error-display { color: red; padding: 20px; font-family: monospace; white-space: pre-wrap; font-size: 13px; }
</style>
</head>
<body>
<div id="root"></div>
<div id="error-display"></div>
<script>
window.onerror = function(msg, url, line, col, err) {
  document.getElementById('error-display').textContent = 'Error: ' + msg + '\\nLine: ' + line;
  return true;
};
<\/script>
<script type="text/babel" data-type="module">
const { useState, useEffect, useRef, useMemo, useCallback, useReducer, useContext, createContext, Fragment, memo, forwardRef } = React;

${importShims}

${strippedCode}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(React.createElement(${componentName}));
<\/script>
</body>
</html>`;
}

function isReactCode(code) {
  return /^\s*import\s+.*from\s+['"]react['"]/m.test(code) ||
         /^\s*import\s+React/m.test(code) ||
         /export\s+default\s+/m.test(code);
}

function prepareHtml(code) {
  if (isReactCode(code)) {
    return wrapReactCode(code);
  }
  // If it's already full HTML, use as-is
  if (/^\s*<!DOCTYPE|^\s*<html/i.test(code)) {
    return code;
  }
  // Bare HTML snippet — wrap in a basic page
  return `<!DOCTYPE html><html><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1.0"><style>body{margin:0;font-family:sans-serif;}</style></head><body>${code}</body></html>`;
}

function SandboxedIframe({ html, title }) {
  const iframeRef = useRef(null);

  useEffect(() => {
    const iframe = iframeRef.current;
    if (!iframe) return;

    const rendered = prepareHtml(html);
    const blob = new Blob([rendered], { type: 'text/html' });
    const url = URL.createObjectURL(blob);
    iframe.src = url;

    return () => URL.revokeObjectURL(url);
  }, [html]);

  return (
    <iframe
      ref={iframeRef}
      title={title}
      sandbox="allow-scripts allow-same-origin"
      className="w-full h-full border-0"
    />
  );
}

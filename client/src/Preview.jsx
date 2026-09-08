import { useState } from 'react';
import { Code, Eye } from 'lucide-react';
import SandboxedIframe from './SandboxedIframe';

export default function Preview() {
  const [code, setCode] = useState('');
  const [view, setView] = useState('code'); // 'code' or 'preview'

  const hasCode = code.trim().length > 0;

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 pt-8 pb-20">
      {/* Header */}
      <div className="mb-6">
        <h1 className="text-3xl sm:text-4xl font-[BioRhyme,serif] font-bold text-slate-800 tracking-tight">
          Preview Your App
        </h1>
        <p className="text-lg text-slate-500 font-medium mt-1">
          Paste your code from Gemini Canvas to see how it looks.
        </p>
        <div className="h-1.5 w-full bg-[#BA0C2F] rounded-full mt-4" />
      </div>

      {/* Toggle */}
      <div className="flex items-center gap-1 mb-3">
        <button
          onClick={() => setView('code')}
          className={`flex items-center gap-1.5 px-4 py-1.5 rounded-lg text-sm font-bold transition-all ${
            view === 'code'
              ? 'bg-[#BA0C2F] text-white'
              : 'text-slate-500 hover:text-slate-800 hover:bg-slate-100'
          }`}
        >
          <Code size={14} />
          Code
        </button>
        <button
          onClick={() => { if (hasCode) setView('preview'); }}
          className={`flex items-center gap-1.5 px-4 py-1.5 rounded-lg text-sm font-bold transition-all ${
            view === 'preview'
              ? 'bg-[#BA0C2F] text-white'
              : hasCode
                ? 'text-slate-500 hover:text-slate-800 hover:bg-slate-100'
                : 'text-slate-300 cursor-not-allowed'
          }`}
        >
          <Eye size={14} />
          Preview
        </button>
      </div>

      {/* Single pane — code or preview */}
      <div className="rounded-xl border border-slate-200 overflow-hidden bg-white" style={{ height: 'calc(100vh - 280px)', minHeight: 400 }}>
        {view === 'code' ? (
          <textarea
            value={code}
            onChange={(e) => setCode(e.target.value)}
            onPaste={() => setTimeout(() => setView('preview'), 0)}
            placeholder="Paste your HTML or React code from Gemini Canvas here..."
            className="w-full h-full px-4 py-3 text-sm font-mono focus:outline-none bg-white resize-none placeholder:text-slate-400"
          />
        ) : (
          <SandboxedIframe html={code} title="Code Preview" />
        )}
      </div>

      {/* Hint */}
      <p className="mt-3 text-xs text-slate-400 font-medium">
        Paste code straight from Gemini Canvas — this renders plain HTML and React/JSX alike.
      </p>
    </div>
  );
}

import { useState } from 'react';
import { Eye } from 'lucide-react';
import SandboxedIframe from './SandboxedIframe';

export default function Preview() {
  const [code, setCode] = useState('');
  const [showPreview, setShowPreview] = useState(false);

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 pt-8 pb-20">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl sm:text-4xl font-[BioRhyme,serif] font-bold text-slate-800 tracking-tight">
          Preview Your App
        </h1>
        <p className="text-lg text-slate-500 font-medium mt-1">
          Paste your code from Gemini Canvas to see how it looks.
        </p>
        <div className="h-1.5 w-full bg-[#BA0C2F] rounded-full mt-4" />
      </div>

      {/* Code input */}
      <textarea
        value={code}
        onChange={(e) => { setCode(e.target.value); setShowPreview(false); }}
        placeholder="Paste your HTML or React code from Gemini Canvas here..."
        rows={8}
        className="w-full px-4 py-3 border border-slate-200 rounded-xl text-sm font-mono focus:outline-none focus:border-[#BA0C2F] bg-white resize-y placeholder:text-slate-400"
      />

      <button
        onClick={() => setShowPreview(true)}
        disabled={!code.trim()}
        className={`mt-4 flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-bold transition-all ${
          !code.trim()
            ? 'bg-slate-200 text-slate-400 cursor-not-allowed'
            : 'bg-[#BA0C2F] text-white hover:opacity-90 active:scale-95 shadow-sm'
        }`}
      >
        <Eye size={15} />
        Preview
      </button>

      {/* Rendered preview */}
      {showPreview && code.trim() && (
        <div className="mt-6 rounded-xl border border-slate-200 overflow-hidden bg-white" style={{ height: 500 }}>
          <SandboxedIframe html={code} title="Code Preview" />
        </div>
      )}

      {/* Hint */}
      <p className="mt-4 text-xs text-slate-400 font-medium">
        This is the same renderer the Gallery uses — what you see here is what others will see.
      </p>
    </div>
  );
}

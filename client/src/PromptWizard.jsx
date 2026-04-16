import { useState } from 'react';
import {
  Copy,
  CheckCircle2,
  Lightbulb,
} from 'lucide-react';

const DEFAULT_TEMPLATE = {
  id: 'canvas',
  label: 'Gemini Canvas',
  prompt: 'I want to make a Gemini Canvas app. [DESCRIBE YOUR IDEA \u2014 what problem does it solve? who is it for?]\n\nBefore you start building, ask me a few questions about who this is for and what their experience should be like.',
};

export default function PromptWizard({ build }) {
  const templates = build?.templates || [DEFAULT_TEMPLATE];
  const ideas = build?.ideas || [];

  const [activeTemplate, setActiveTemplate] = useState(templates[0].id);
  const [selectedIdea, setSelectedIdea] = useState(null);
  const [copied, setCopied] = useState(false);

  const currentTemplate = templates.find((t) => t.id === activeTemplate) || templates[0];
  const displayedPrompt = selectedIdea ? selectedIdea.prompt : currentTemplate.prompt;

  // When switching templates, clear selected idea if it belongs to a different template
  const handleTemplateChange = (templateId) => {
    setActiveTemplate(templateId);
    if (selectedIdea && selectedIdea.template && selectedIdea.template !== templateId) {
      setSelectedIdea(null);
    }
  };

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(displayedPrompt);
    } catch {
      const textArea = document.createElement('textarea');
      textArea.value = displayedPrompt;
      document.body.appendChild(textArea);
      textArea.select();
      document.execCommand('copy');
      document.body.removeChild(textArea);
    }
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  // Group ideas by template if there are multiple templates
  const hasMultipleTemplates = templates.length > 1;
  const ideasForCurrentTemplate = hasMultipleTemplates
    ? ideas.filter((idea) => !idea.template || idea.template === activeTemplate)
    : ideas;

  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 pt-8 pb-20">
      {/* Header */}
      <div className="mb-10">
        <h1 className="text-3xl sm:text-4xl font-[BioRhyme,serif] font-bold text-slate-800 tracking-tight">
          Build Something
        </h1>
        <p className="text-lg text-slate-500 font-medium mt-1">
          Use AI to build a tool that solves a real problem.
        </p>
        <div className="h-1.5 w-full bg-[#BA0C2F] rounded-full mt-4" />
      </div>

      {/* Template Switcher (only if multiple templates) */}
      {hasMultipleTemplates && (
        <div className="mb-6">
          <div className="flex items-center gap-2 mb-2">
            <span className="text-xs font-bold text-slate-400 uppercase tracking-wide">Build with:</span>
          </div>
          <div className="flex gap-2">
            {templates.map((t) => (
              <button
                key={t.id}
                onClick={() => handleTemplateChange(t.id)}
                className={`px-4 py-2 rounded-lg text-sm font-semibold transition-all ${
                  activeTemplate === t.id
                    ? 'bg-[#BA0C2F] text-white'
                    : 'bg-slate-100 text-slate-500 hover:bg-slate-200'
                }`}
              >
                {t.label}
              </button>
            ))}
          </div>
          {currentTemplate.note && (
            <p className="text-xs text-amber-600 mt-2 font-medium">{currentTemplate.note}</p>
          )}
        </div>
      )}

      {/* Prompt Template Box */}
      <div className="relative group mb-10">
        <div className="absolute -inset-1 bg-linear-to-r from-[#BA0C2F] to-slate-400 rounded-[1.5rem] blur opacity-15 group-hover:opacity-20 transition duration-1000" />
        <div className="relative bg-white rounded-2xl border border-slate-200 shadow-xl overflow-hidden">
          <div className="px-5 py-3 bg-slate-50 border-b border-slate-200 flex justify-between items-center">
            <span className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400">
              Your Prompt
            </span>
            <div className="flex items-center gap-3">
              {selectedIdea && (
                <button
                  onClick={() => setSelectedIdea(null)}
                  className="text-xs font-bold text-[#BA0C2F] hover:underline"
                >
                  Reset
                </button>
              )}
              <button
                onClick={copyToClipboard}
                className="flex items-center gap-2 px-4 py-1.5 rounded-lg text-xs font-bold transition-all bg-[#BA0C2F] text-white hover:opacity-90 active:scale-95 shadow-sm"
              >
                {copied ? <CheckCircle2 size={13} /> : <Copy size={13} />}
                {copied ? 'Copied!' : 'Copy Prompt'}
              </button>
            </div>
          </div>
          <div className="p-6 sm:p-8">
            <div className="p-6 rounded-xl border border-slate-100 bg-slate-50/50">
              <pre className="text-slate-700 font-mono text-sm whitespace-pre-wrap leading-relaxed select-all">
                {displayedPrompt}
              </pre>
            </div>
          </div>
        </div>
      </div>

      {/* Need an idea? */}
      {ideasForCurrentTemplate.length > 0 && (
        <div>
          <div className="flex items-center gap-2 mb-4">
            <Lightbulb size={18} className="text-[#BA0C2F]" />
            <h2 className="text-lg font-[BioRhyme,serif] font-bold text-slate-800">Need an idea?</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {ideasForCurrentTemplate.map((idea) => (
              <button
                key={idea.id}
                onClick={() => setSelectedIdea(selectedIdea?.id === idea.id ? null : idea)}
                className={`p-4 rounded-xl text-left transition-all border-2 ${
                  selectedIdea?.id === idea.id
                    ? 'border-[#BA0C2F] bg-red-50/30'
                    : 'border-slate-100 bg-slate-50/50 hover:border-slate-300'
                }`}
              >
                <div className="font-bold text-sm text-slate-800 mb-1">{idea.title}</div>
                <div className="text-[11px] text-slate-500 leading-snug font-medium">{idea.description}</div>
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

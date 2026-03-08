import { useState } from 'react';
import {
  Copy,
  CheckCircle2,
  Lightbulb,
} from 'lucide-react';

const PROJECT_IDEAS = [
  {
    id: 'court-filing',
    title: 'Court Filing Decision Tree',
    description: 'Figure out which court to file in based on your dispute.',
    prompt: 'I want to make a Gemini Canvas app. A lot of people don\'t know which court to file in \u2014 small claims, municipal, common pleas, etc. I want to build something where someone answers a few questions about their dispute and finds out which court to go to and what the process looks like.\n\nBefore you start building, ask me a few questions about who this is for and what their experience should be like.',
  },
  {
    id: 'sol-calculator',
    title: 'Statute of Limitations Calculator',
    description: 'Check whether the deadline to file a lawsuit has passed.',
    prompt: 'I want to make a Gemini Canvas app. I\'m a law student and I think it would be really useful to have a tool that helps someone figure out whether they\'ve missed the deadline to file a lawsuit in Ohio. Here\'s the relevant statute: https://codes.ohio.gov/ohio-revised-code/chapter-2305\n\nBefore you start building, ask me a few questions about who this is for and what their experience should be like.',
  },
  {
    id: 'case-brief',
    title: 'Case Brief Builder',
    description: 'Fill in the parts of a case brief and get a clean formatted version.',
    prompt: 'I want to make a Gemini Canvas app. Briefing cases takes me forever and I always forget what goes in each section. I want a tool where I can fill in the parts of a case brief and get a clean, formatted version I can use for class.\n\nBefore you start building, ask me a few questions about who this is for and what their experience should be like.',
  },
  {
    id: 'tenant-rights',
    title: 'Know Your Rights: Tenant Edition',
    description: 'Help renters figure out their rights when something goes wrong.',
    prompt: 'I want to make a Gemini Canvas app. A lot of renters don\'t know their rights when something goes wrong \u2014 like their landlord won\'t fix something, or they\'re being evicted, or they\'re not getting their security deposit back. I want to build a tool that helps someone figure out what their rights are in Ohio. Here\'s some background: https://www.ohiolegalhelp.org/guide/housing\n\nBefore you start building, ask me a few questions about who this is for and what their experience should be like.',
  },
  {
    id: 'red-flag',
    title: 'Contract Red-Flag Spotter',
    description: 'Teach people to spot dangerous clauses in contracts.',
    prompt: 'I want to make a Gemini Canvas app. A lot of people sign contracts without knowing what to look out for. I want to build something that teaches people to spot red flags in contracts \u2014 like one-sided indemnification or automatic renewal clauses. Here\'s some background on Ohio consumer protection law: https://codes.ohio.gov/ohio-revised-code/chapter-1345\n\nBefore you start building, ask me a few questions about who this is for and what their experience should be like.',
  },
  {
    id: 'client-intake',
    title: 'Client Intake Questionnaire',
    description: 'Walk someone through the questions for an initial legal consultation.',
    prompt: 'I want to make a Gemini Canvas app. When someone comes in for an initial legal consultation, there\'s a lot of information to gather \u2014 what happened, key dates, who\'s involved, what documents they have. I want to build a tool that walks someone through those questions and gives them a clean summary at the end.\n\nBefore you start building, ask me a few questions about who this is for and what their experience should be like.',
  },
];

const PROMPT_TEMPLATE = 'I want to make a Gemini Canvas app. [DESCRIBE YOUR IDEA \u2014 what problem does it solve? who is it for?]\n\nBefore you start building, ask me a few questions about who this is for and what their experience should be like.';

export default function PromptWizard() {
  const [selectedIdea, setSelectedIdea] = useState(null);
  const [copied, setCopied] = useState(false);

  const displayedPrompt = selectedIdea ? selectedIdea.prompt : PROMPT_TEMPLATE;

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
      <div>
        <div className="flex items-center gap-2 mb-4">
          <Lightbulb size={18} className="text-[#BA0C2F]" />
          <h2 className="text-lg font-[BioRhyme,serif] font-bold text-slate-800">Need an idea?</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {PROJECT_IDEAS.map((idea) => (
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
    </div>
  );
}

import { useState } from 'react';
import {
  Clock,
  ShieldAlert,
  Copy,
  Lightbulb,
  CheckCircle2,
  RotateCcw,
  Sparkles,
  Zap,
  PenLine,
  FileText,
  BrainCircuit,
  ChevronDown,
  ChevronRight,
  Compass,
  Rocket,
  Eye,
} from 'lucide-react';
import SandboxedIframe from './SandboxedIframe';

const INSPIRATION_EXAMPLES = [
  {
    id: 'thanksgiving',
    title: 'Thanksgiving Dinner Coordinator',
    description: 'Upload your recipes, get a step-by-step schedule with times, and adjust everything when you\'re running late.',
  },
  {
    id: 'court-filing',
    title: 'Court Filing Decision Tree',
    description: 'Answer a few questions about your dispute and find out which court to file in and what the process looks like.',
  },
  {
    id: 'discovery',
    title: 'Discovery Response Drafter',
    description: 'Paste in discovery requests, step through them one by one, choose how to respond, and get formatted output.',
  },
  {
    id: 'bluebook',
    title: 'Bluebook Citation Builder',
    description: 'Fill in the fields — author, title, volume, page — and get the correctly formatted Bluebook citation.',
  },
  {
    id: 'study-quizzer',
    title: 'Finals Study Quizzer',
    description: 'Paste in your class notes, get quizzed on the material, and see which topics you need to review most.',
  },
];

const GUIDED_PROJECTS = [
  {
    id: 'sol-calculator',
    title: 'Statute of Limitations Calculator',
    prompt: 'I want to make a Gemini Canvas app. I\'m a law student and I think it would be really useful to have a tool that helps someone figure out whether they\'ve missed the deadline to file a lawsuit in Ohio. Here\'s the relevant statute: https://codes.ohio.gov/ohio-revised-code/chapter-2305\n\nBefore you start building, ask me a few questions about what would be most useful.',
  },
  {
    id: 'small-claims',
    title: 'Should I File in Small Claims Court?',
    prompt: 'I want to make a Gemini Canvas app. I think a lot of people don\'t realize they could handle their dispute in small claims court instead of hiring a lawyer. I want to build something that helps someone figure out if small claims is right for them. Here\'s some info about how it works in Ohio: https://www.ohiolegalhelp.org/topic/small-claims\n\nBefore you start building, ask me a few questions about what would be most useful.',
  },
  {
    id: 'case-brief',
    title: 'Case Brief Builder',
    prompt: 'I want to make a Gemini Canvas app. Briefing cases takes me forever and I always forget what goes in each section. I want a tool where I can fill in the parts of a case brief and get a clean, formatted version I can use for class.\n\nBefore you start building, ask me a few questions about what would be most useful.',
  },
  {
    id: 'deadline-tracker',
    title: 'Legal Deadline Tracker',
    prompt: 'I want to make a Gemini Canvas app. In civil litigation there are so many deadlines that depend on each other \u2014 when the answer is due, when discovery closes, etc. I want a tool where I can enter a key date and see all the downstream deadlines calculated for me. Here are the Ohio Rules of Civil Procedure: https://www.supremecourt.ohio.gov/docs/LegalResources/Rules/civil/CivilProcedure.pdf\n\nBefore you start building, ask me a few questions about what would be most useful.',
  },
  {
    id: 'client-intake',
    title: 'Client Intake Questionnaire',
    prompt: 'I want to make a Gemini Canvas app. When someone comes in for an initial legal consultation, there\'s a lot of information to gather \u2014 what happened, key dates, who\'s involved, what documents they have. I want to build a tool that walks someone through those questions and gives them a clean summary at the end.\n\nBefore you start building, ask me a few questions about what would be most useful.',
  },
  {
    id: 'red-flag',
    title: 'Contract Clause Red-Flag Spotter',
    prompt: 'I want to make a Gemini Canvas app. A lot of people sign contracts without knowing what to look out for. I want to build something that teaches people to spot red flags in contracts \u2014 like one-sided indemnification or automatic renewal clauses. Here\'s some background on Ohio consumer protection law: https://codes.ohio.gov/ohio-revised-code/chapter-1345\n\nBefore you start building, ask me a few questions about what would be most useful.',
  },
  {
    id: 'tenant-rights',
    title: 'Know Your Rights: Tenant Edition',
    prompt: 'I want to make a Gemini Canvas app. A lot of renters don\'t know their rights when something goes wrong \u2014 like their landlord won\'t fix something, or they\'re being evicted, or they\'re not getting their security deposit back. I want to build a tool that helps someone figure out what their rights are in Ohio. Here\'s some background: https://www.ohiolegalhelp.org/guide/housing\n\nBefore you start building, ask me a few questions about what would be most useful.',
  },
  {
    id: 'oral-argument',
    title: 'Mock Oral Argument Practice Tool',
    prompt: 'I want to make a Gemini Canvas app. I want to get better at oral arguments but it\'s hard to practice on my own. I want a tool with a timer, a place to jot notes, and some kind of self-assessment rubric I can fill out after I\'m done to track what I need to work on.\n\nBefore you start building, ask me a few questions about what would be most useful.',
  },
];

const generateOpenEndedPrompt = (userText) => {
  return `I want to make a Gemini Canvas app. ${userText}\n\nBefore you start building, ask me a few questions about what would be most useful.`;
};

export default function PromptWizard() {
  const [userIdea, setUserIdea] = useState('');
  const [generatedPrompt, setGeneratedPrompt] = useState('');
  const [copied, setCopied] = useState(false);
  const [inspirationOpen, setInspirationOpen] = useState(false);
  const [guidedOpen, setGuidedOpen] = useState(false);
  const [previewCode, setPreviewCode] = useState('');
  const [showPreview, setShowPreview] = useState(false);

  const handleGeneratePrompt = () => {
    if (!userIdea.trim()) return;
    setGeneratedPrompt(generateOpenEndedPrompt(userIdea.trim()));
  };

  const handleInspirationClick = (example) => {
    setUserIdea(example.description);
    setInspirationOpen(false);
  };

  const handleGuidedClick = (project) => {
    setGeneratedPrompt(project.prompt);
    setGuidedOpen(false);
  };

  const copyToClipboard = async () => {
    if (!generatedPrompt) return;
    try {
      await navigator.clipboard.writeText(generatedPrompt);
    } catch {
      const textArea = document.createElement('textarea');
      textArea.value = generatedPrompt;
      document.body.appendChild(textArea);
      textArea.select();
      document.execCommand('copy');
      document.body.removeChild(textArea);
    }
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 pt-8 pb-20">
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

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Sidebar */}
        <div className="lg:col-span-4 space-y-5">
          {/* Goals */}
          <Section icon={<Lightbulb size={16} />} title="Activity Goals">
            <ul className="space-y-3">
              {['Identify a real problem to solve', 'Scope it for a single-page app', 'Build and iterate with AI'].map(
                (goal, i) => (
                  <li key={i} className="flex gap-2.5 text-sm text-slate-600 font-medium leading-tight">
                    <CheckCircle2 size={15} className="text-[#BA0C2F] shrink-0 mt-0.5" />
                    {goal}
                  </li>
                ),
              )}
            </ul>
          </Section>

          {/* Timeline */}
          <Section icon={<Clock size={16} />} title="Timeline">
            <div className="space-y-2.5">
              {[
                { label: 'Brainstorm' },
                { label: 'Build', bold: true },
                { label: 'Gallery Walk & Voting' },
              ].map((item, i) => (
                <div
                  key={i}
                  className={`flex items-center gap-2.5 text-sm ${
                    item.bold ? 'font-bold text-slate-900' : 'text-slate-600 font-medium'
                  }`}
                >
                  <div className={`w-2 h-2 rounded-full ${item.bold ? 'bg-[#BA0C2F]' : 'bg-slate-300'}`} />
                  <span>{item.label}</span>
                </div>
              ))}
            </div>
          </Section>

          {/* Safety */}
          <section className="bg-red-50 rounded-2xl border border-red-100 overflow-hidden">
            <div className="bg-red-100/50 px-5 py-2.5 border-b border-red-100 flex items-center gap-2">
              <ShieldAlert size={16} className="text-[#BA0C2F]" />
              <h2 className="font-bold text-[#BA0C2F] uppercase tracking-wider text-[10px]">Safety & Ethics</h2>
            </div>
            <div className="p-5 space-y-2.5">
              {['No real client information', 'Include visible legal disclaimer', '8th-grade reading level required'].map(
                (rule, i) => (
                  <div key={i} className="flex gap-2 text-xs font-bold text-red-900/70">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#BA0C2F] mt-1 shrink-0" />
                    {rule}
                  </div>
                ),
              )}
            </div>
          </section>

          {/* Tips */}
          <Section icon={<Sparkles size={16} />} title="Strategic Tips">
            <div className="space-y-5">
              <Tip icon={<BrainCircuit size={13} className="text-[#BA0C2F]" />} title="Thinking Mode">
                <span className="italic">Highly Recommended:</span> Use "Thinking" mode. It helps Gemini reason through
                complex logic before writing code.
              </Tip>
              <Tip icon={<Zap size={13} className="text-yellow-600" />} title="Fact Check">
                AI can hallucinate facts and rules. Always verify important details against a reliable source.
              </Tip>
              <Tip icon={<RotateCcw size={13} className="text-blue-600" />} title="Iterate">
                Your first version won't be perfect — that's the point. Ask Gemini to change, add, or fix things.
              </Tip>
            </div>
          </Section>
        </div>

        {/* Main Content */}
        <div className="lg:col-span-8 space-y-8">
          {/* Path A: Describe Your Idea */}
          <div className="bg-white rounded-3xl border border-slate-200 shadow-sm p-6 sm:p-8">
            <header className="flex items-center gap-3 mb-6">
              <div className="p-2.5 bg-red-50 rounded-xl">
                <PenLine className="text-[#BA0C2F]" size={24} />
              </div>
              <div>
                <h3 className="text-xl font-[BioRhyme,serif] font-bold text-slate-800">Describe Your Idea</h3>
                <p className="text-sm text-slate-500 font-medium">What problem do you want to solve? What would be useful to have?</p>
              </div>
            </header>

            <textarea
              value={userIdea}
              onChange={(e) => setUserIdea(e.target.value)}
              placeholder="Example: I want a tool that helps renters figure out if their landlord is allowed to keep their security deposit..."
              rows={4}
              className="w-full px-4 py-3 border border-slate-200 rounded-xl text-sm focus:outline-none focus:border-[#BA0C2F] bg-slate-50/50 resize-y placeholder:text-slate-400"
            />

            <button
              onClick={handleGeneratePrompt}
              disabled={!userIdea.trim()}
              className={`mt-4 flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-bold transition-all ${
                !userIdea.trim()
                  ? 'bg-slate-200 text-slate-400 cursor-not-allowed'
                  : 'bg-[#BA0C2F] text-white hover:opacity-90 active:scale-95 shadow-sm'
              }`}
            >
              <Sparkles size={15} />
              Generate My Prompt
            </button>
          </div>

          {/* Path B: Need Inspiration? */}
          <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
            <button
              onClick={() => setInspirationOpen(!inspirationOpen)}
              className="w-full px-6 py-4 flex items-center justify-between hover:bg-slate-50/50 transition-colors"
            >
              <div className="flex items-center gap-3">
                <div className="p-2 bg-amber-50 rounded-lg">
                  <Compass size={18} className="text-amber-600" />
                </div>
                <div className="text-left">
                  <h3 className="font-bold text-slate-800 text-sm">Need Inspiration?</h3>
                  <p className="text-xs text-slate-500 font-medium">Browse example ideas to get started</p>
                </div>
              </div>
              {inspirationOpen ? <ChevronDown size={18} className="text-slate-400" /> : <ChevronRight size={18} className="text-slate-400" />}
            </button>

            {inspirationOpen && (
              <div className="px-6 pb-5 pt-1 border-t border-slate-100">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 mt-3">
                  {INSPIRATION_EXAMPLES.map((ex) => (
                    <button
                      key={ex.id}
                      onClick={() => handleInspirationClick(ex)}
                      className="p-4 rounded-xl text-left transition-all border-2 border-slate-100 bg-slate-50/50 hover:border-amber-300 hover:bg-amber-50/30"
                    >
                      <div className="font-bold text-sm text-slate-800 mb-1">{ex.title}</div>
                      <div className="text-[11px] text-slate-500 leading-snug font-medium">{ex.description}</div>
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Path C: Just Get Me Started */}
          <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
            <button
              onClick={() => setGuidedOpen(!guidedOpen)}
              className="w-full px-6 py-4 flex items-center justify-between hover:bg-slate-50/50 transition-colors"
            >
              <div className="flex items-center gap-3">
                <div className="p-2 bg-blue-50 rounded-lg">
                  <Rocket size={18} className="text-blue-600" />
                </div>
                <div className="text-left">
                  <h3 className="font-bold text-slate-800 text-sm">Just Get Me Started</h3>
                  <p className="text-xs text-slate-500 font-medium">Pick a pre-written project prompt</p>
                </div>
              </div>
              {guidedOpen ? <ChevronDown size={18} className="text-slate-400" /> : <ChevronRight size={18} className="text-slate-400" />}
            </button>

            {guidedOpen && (
              <div className="px-6 pb-5 pt-1 border-t border-slate-100">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 mt-3">
                  {GUIDED_PROJECTS.map((proj) => (
                    <button
                      key={proj.id}
                      onClick={() => handleGuidedClick(proj)}
                      className="p-4 rounded-xl text-left transition-all border-2 border-slate-100 bg-slate-50/50 hover:border-blue-300 hover:bg-blue-50/30"
                    >
                      <div className="font-bold text-sm text-slate-800">{proj.title}</div>
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Tip */}
          <div className="bg-amber-50/60 border border-amber-200/60 rounded-xl px-5 py-3">
            <p className="text-xs text-amber-900/70 font-medium leading-relaxed">
              <span className="font-bold">Tip:</span> Gemini will ask you some questions before building. You don't need to have all the answers — just say "I'm not sure" or "just go with what makes sense" and it'll figure it out.
            </p>
          </div>

          {/* Prompt Output */}
          <div className="relative group">
            <div className="absolute -inset-1 bg-linear-to-r from-[#BA0C2F] to-slate-400 rounded-[1.5rem] blur opacity-15 group-hover:opacity-20 transition duration-1000" />
            <div className="relative bg-white rounded-2xl border border-slate-200 shadow-xl overflow-hidden">
              <div className="px-5 py-3 bg-slate-50 border-b border-slate-200 flex justify-between items-center">
                <div className="flex items-center gap-2">
                  <FileText size={14} className="text-slate-400" />
                  <span className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400">
                    Your Prompt
                  </span>
                </div>
                <button
                  onClick={copyToClipboard}
                  disabled={!generatedPrompt}
                  className={`flex items-center gap-2 px-4 py-1.5 rounded-lg text-xs font-bold transition-all ${
                    !generatedPrompt
                      ? 'bg-slate-200 text-slate-400 cursor-not-allowed'
                      : 'bg-[#BA0C2F] text-white hover:opacity-90 active:scale-95 shadow-sm'
                  }`}
                >
                  {copied ? <CheckCircle2 size={13} /> : <Copy size={13} />}
                  {copied ? 'Copied!' : 'Copy Prompt'}
                </button>
              </div>
              <div className="p-6 sm:p-8 relative">
                <div
                  className={`p-6 rounded-xl border border-slate-100 bg-slate-50/50 min-h-[120px] transition-opacity duration-300 ${
                    !generatedPrompt ? 'opacity-30' : 'opacity-100'
                  }`}
                >
                  <pre className="text-slate-700 font-mono text-sm whitespace-pre-wrap leading-relaxed select-all">
                    {generatedPrompt || 'Your prompt will appear here...'}
                  </pre>
                </div>
                {!generatedPrompt && (
                  <div className="absolute inset-0 flex items-center justify-center p-6">
                    <div className="bg-white px-5 py-3 rounded-xl border border-slate-200 shadow-lg">
                      <p className="text-slate-500 text-sm font-semibold">
                        Describe your idea above, or pick a guided project to get started.
                      </p>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Preview Pane */}
          <div className="bg-white rounded-3xl border border-slate-200 shadow-sm p-6 sm:p-8">
            <header className="flex items-center gap-3 mb-4">
              <div className="p-2.5 bg-green-50 rounded-xl">
                <Eye className="text-green-700" size={24} />
              </div>
              <div>
                <h3 className="text-xl font-[BioRhyme,serif] font-bold text-slate-800">Preview Your App</h3>
                <p className="text-sm text-slate-500 font-medium">Paste your code here to preview it</p>
              </div>
            </header>

            <p className="text-xs text-slate-400 font-medium mb-3">
              This is the same renderer the Gallery uses — what you see here is what others will see.
            </p>

            <textarea
              value={previewCode}
              onChange={(e) => { setPreviewCode(e.target.value); setShowPreview(false); }}
              placeholder="Paste your HTML or React code from Gemini Canvas here..."
              rows={6}
              className="w-full px-4 py-3 border border-slate-200 rounded-xl text-sm font-mono focus:outline-none focus:border-[#BA0C2F] bg-slate-50/50 resize-y placeholder:text-slate-400"
            />

            <button
              onClick={() => setShowPreview(true)}
              disabled={!previewCode.trim()}
              className={`mt-4 flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-bold transition-all ${
                !previewCode.trim()
                  ? 'bg-slate-200 text-slate-400 cursor-not-allowed'
                  : 'bg-green-700 text-white hover:opacity-90 active:scale-95 shadow-sm'
              }`}
            >
              <Eye size={15} />
              Preview
            </button>

            {showPreview && previewCode.trim() && (
              <div className="mt-5 rounded-xl border border-slate-200 overflow-hidden bg-white" style={{ height: 400 }}>
                <SandboxedIframe html={previewCode} title="Code Preview" />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

function Section({ icon, title, children }) {
  return (
    <section className="bg-white rounded-2xl border border-slate-200 overflow-hidden">
      <div className="bg-slate-50 px-5 py-2.5 border-b border-slate-200 flex items-center gap-2">
        <span className="text-[#BA0C2F]">{icon}</span>
        <h2 className="font-bold text-slate-700 uppercase tracking-wider text-[10px]">{title}</h2>
      </div>
      <div className="p-5">{children}</div>
    </section>
  );
}

function Tip({ icon, title, children }) {
  return (
    <div className="flex gap-2.5">
      <div className="p-1.5 bg-slate-100 rounded-lg shrink-0 h-fit">{icon}</div>
      <div>
        <h4 className="text-[11px] font-black text-slate-800 mb-0.5 uppercase tracking-wider">{title}</h4>
        <p className="text-[11px] text-slate-500 leading-normal font-medium">{children}</p>
      </div>
    </div>
  );
}

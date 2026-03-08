import { useState } from 'react';
import {
  Clock,
  ShieldAlert,
  Copy,
  ExternalLink,
  Lightbulb,
  CheckCircle2,
  RotateCcw,
  Link as LinkIcon,
  Sparkles,
  Zap,
  MousePointer2,
  FileText,
  BrainCircuit,
} from 'lucide-react';

const SCARLET = '#BA0C2F';

const topics = [
  {
    id: 'served',
    title: "What happens after you've been served?",
    url: 'https://www.ohiobar.org/public-resources/commonly-asked-law-questions-results/courts-and-lawyers/know-how-to-answer-a-complaint/',
    shorthand: 'Filing an Answer',
  },
  {
    id: 'hearing',
    title: 'How to prepare for a hearing',
    url: 'https://www.ohiolegalhelp.org/topic/hearing',
    shorthand: 'Court Basics',
  },
  {
    id: 'debt',
    title: 'Debt collection lawsuits',
    url: 'https://www.ohiolegalhelp.org/topic/debt_lawsuit',
    shorthand: 'Debt Collection',
  },
  {
    id: 'custom',
    title: '[Your Choice]',
    url: '',
    shorthand: 'Choose Your Own',
  },
];

const formats = [
  { id: 'path', title: 'Choose-your-path', desc: '3 decisions \u2192 feedback' },
  { id: 'myth', title: 'Myth vs. Fact', desc: '5 cards with feedback' },
  { id: 'timeline', title: 'Timeline ordering game', desc: 'Step-by-step logic' },
  { id: 'redflag', title: 'Spot the red flag', desc: 'Identify urgent issues' },
  { id: 'custom', title: 'Custom mechanic', desc: 'Make it simple!' },
];

export default function PromptWizard() {
  const [selectedTopic, setSelectedTopic] = useState(null);
  const [selectedFormat, setSelectedFormat] = useState(null);
  const [copied, setCopied] = useState(false);

  const generatePrompt = () => {
    const topicText =
      selectedTopic?.id === 'custom'
        ? '[DESCRIBE YOUR TOPIC HERE]'
        : selectedTopic?.title;

    const formatText =
      selectedFormat?.id === 'custom'
        ? '[DESCRIBE YOUR SIMPLE MECHANIC]'
        : selectedFormat?.title;

    const sourceText = selectedTopic?.url
      ? `\n\nI'm using this as a source: ${selectedTopic.url}`
      : '';

    return `I want to build a tiny micro-game for self-represented litigants about: ${topicText}.\n\nThe format should be a "${formatText}".${sourceText}\n\nCan you give me a quick plan for how this should work? I need a learning objective, 3 key points to teach, and a clear win condition. Once we agree on the plan, I'll have you build the MVP.`;
  };

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(generatePrompt());
    } catch {
      const textArea = document.createElement('textarea');
      textArea.value = generatePrompt();
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
          Vibe-Coding a Micro-Game
        </h1>
        <p className="text-lg text-slate-500 font-medium mt-1">
          Self-Represented Litigant (SRL) Activity
        </p>
        <div className="h-1.5 w-full bg-[#BA0C2F] rounded-full mt-4" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Sidebar */}
        <div className="lg:col-span-4 space-y-5">
          {/* Goals */}
          <Section icon={<Lightbulb size={16} />} title="Activity Goals">
            <ul className="space-y-3">
              {['Confirm tool access & login', 'Practice the vibe-coding loop', 'Apply legal domain expertise'].map(
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
          <Section icon={<Clock size={16} />} title="Timeline: 30m">
            <div className="space-y-2.5">
              {[
                { label: 'Set-up & Plan', time: '5m' },
                { label: 'Build (MVP)', time: '15m', bold: true },
                { label: 'Iterate', time: '5m' },
                { label: 'Share-out', time: '5m' },
              ].map((item, i) => (
                <div
                  key={i}
                  className={`flex justify-between items-center text-sm ${
                    item.bold ? 'font-bold text-slate-900' : 'text-slate-600 font-medium'
                  }`}
                >
                  <span>{item.label}</span>
                  <span className="font-mono bg-slate-100 px-2 py-0.5 rounded text-[10px]">{item.time}</span>
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
                legal branching before writing code.
              </Tip>
              <Tip icon={<Zap size={13} className="text-yellow-600" />} title="Fact Check">
                Use recommended sources to verify logic. AI can hallucinate local rules!
              </Tip>
              <Tip icon={<RotateCcw size={13} className="text-blue-600" />} title="Iterate">
                Focus on the legal logic first. You can iterate on "the look" or extra features in the final 5 minutes.
              </Tip>
            </div>
          </Section>
        </div>

        {/* Main Content */}
        <div className="lg:col-span-8 space-y-8">
          {/* Scope Builder */}
          <div className="bg-white rounded-3xl border border-slate-200 shadow-sm p-6 sm:p-8">
            <header className="flex items-center gap-3 mb-6">
              <div className="p-2.5 bg-red-50 rounded-xl">
                <MousePointer2 className="text-[#BA0C2F]" size={24} />
              </div>
              <div>
                <h3 className="text-xl font-[BioRhyme,serif] font-bold text-slate-800">Define the Scope</h3>
                <p className="text-sm text-slate-500 font-medium">Pick your legal topic and interaction style.</p>
              </div>
            </header>

            <div className="space-y-8">
              {/* Topics */}
              <div>
                <label className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 mb-3 block">
                  Legal Topic
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {topics.map((t) => (
                    <button
                      key={t.id}
                      onClick={() => setSelectedTopic(t)}
                      className={`p-4 rounded-xl text-left transition-all border-2 ${
                        selectedTopic?.id === t.id
                          ? 'border-[#BA0C2F] bg-red-50/30 shadow-sm'
                          : 'border-slate-100 bg-slate-50/50 hover:border-slate-200'
                      }`}
                    >
                      <div
                        className={`font-bold text-sm mb-0.5 ${
                          selectedTopic?.id === t.id ? 'text-[#BA0C2F]' : 'text-slate-800'
                        }`}
                      >
                        {t.shorthand}
                      </div>
                      <div className="text-[11px] text-slate-500 leading-tight font-medium">
                        {t.id === 'custom' ? 'Describe your own legal concept' : t.title}
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Mechanics */}
              <div>
                <label className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 mb-3 block">
                  Game Mechanic
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                  {formats.map((f) => (
                    <button
                      key={f.id}
                      onClick={() => setSelectedFormat(f)}
                      className={`p-3.5 rounded-xl text-left transition-all border-2 ${
                        selectedFormat?.id === f.id
                          ? 'border-[#BA0C2F] bg-red-50/30 shadow-sm'
                          : 'border-slate-100 bg-slate-50/50 hover:border-slate-200'
                      }`}
                    >
                      <div
                        className={`text-xs font-bold mb-0.5 ${
                          selectedFormat?.id === f.id ? 'text-[#BA0C2F]' : 'text-slate-800'
                        }`}
                      >
                        {f.title}
                      </div>
                      <div className="text-[10px] text-slate-500 leading-tight font-medium">{f.desc}</div>
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Prompt Output */}
          <div className="relative group">
            <div className="absolute -inset-1 bg-linear-to-r from-[#BA0C2F] to-slate-400 rounded-[1.5rem] blur opacity-15 group-hover:opacity-20 transition duration-1000" />
            <div className="relative bg-white rounded-2xl border border-slate-200 shadow-xl overflow-hidden">
              <div className="px-5 py-3 bg-slate-50 border-b border-slate-200 flex justify-between items-center">
                <div className="flex items-center gap-2">
                  <FileText size={14} className="text-slate-400" />
                  <span className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400">
                    Construction Prompt
                  </span>
                </div>
                <button
                  onClick={copyToClipboard}
                  disabled={!selectedTopic || !selectedFormat}
                  className={`flex items-center gap-2 px-4 py-1.5 rounded-lg text-xs font-bold transition-all ${
                    !selectedTopic || !selectedFormat
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
                    !selectedTopic || !selectedFormat ? 'opacity-30' : 'opacity-100'
                  }`}
                >
                  <pre className="text-slate-700 font-mono text-sm whitespace-pre-wrap leading-relaxed select-all">
                    {generatePrompt()}
                  </pre>
                </div>
                {(!selectedTopic || !selectedFormat) && (
                  <div className="absolute inset-0 flex items-center justify-center p-6">
                    <div className="bg-white px-5 py-3 rounded-xl border border-slate-200 shadow-lg">
                      <p className="text-slate-500 text-sm font-semibold">
                        Select a topic and mechanic above to build your prompt.
                      </p>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Reference Materials */}
          <div className="space-y-3">
            <label className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 px-1 block">
              Reference Materials
            </label>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
              {[
                {
                  name: 'FCMC Self-Help',
                  url: 'https://municipalcourt.franklincountyohio.gov/Departments-Services/Self-Help-Center',
                  desc: 'Local court guides',
                },
                { name: 'Ohio Legal Help', url: 'https://www.ohiolegalhelp.org', desc: 'Plain-language law' },
                {
                  name: 'Law Library',
                  url: 'https://lawlibrary.franklincountyohio.gov/Home',
                  desc: 'Clinics & research',
                },
              ].map((res, i) => (
                <a
                  key={i}
                  href={res.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm hover:border-[#BA0C2F] hover:shadow-md transition-all group flex flex-col justify-between"
                >
                  <div>
                    <h4 className="font-bold text-slate-800 text-xs mb-0.5 group-hover:text-[#BA0C2F] transition-colors">
                      {res.name}
                    </h4>
                    <p className="text-[10px] text-slate-500 font-medium leading-tight">{res.desc}</p>
                  </div>
                  <div className="mt-3 flex justify-end">
                    <ExternalLink size={11} className="text-slate-300 group-hover:text-[#BA0C2F]" />
                  </div>
                </a>
              ))}

              {selectedTopic && selectedTopic.id !== 'custom' && (
                <a
                  href={selectedTopic.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-red-50 p-4 rounded-xl border-2 border-[#BA0C2F]/20 shadow-sm hover:shadow-md transition-all group flex items-start justify-between md:col-span-3"
                >
                  <div className="flex gap-3">
                    <div className="p-2 bg-[#BA0C2F]/10 rounded-lg h-fit">
                      <LinkIcon size={16} className="text-[#BA0C2F]" />
                    </div>
                    <div>
                      <h4 className="font-bold text-[#BA0C2F] text-sm mb-0.5 uppercase tracking-tight">
                        Active Reference: {selectedTopic.shorthand}
                      </h4>
                      <p className="text-[11px] text-[#BA0C2F]/70 italic font-medium">
                        Your primary source material for this game build.
                      </p>
                    </div>
                  </div>
                  <ExternalLink size={14} className="text-[#BA0C2F]/40 group-hover:text-[#BA0C2F]" />
                </a>
              )}
            </div>
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

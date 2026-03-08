import React, { useState } from 'react';
import { 
  Clock, 
  ShieldAlert, 
  Copy, 
  ExternalLink, 
  Lightbulb, 
  Users, 
  CheckCircle2, 
  AlertCircle, 
  RotateCcw, 
  Library, 
  Link as LinkIcon,
  Sparkles, 
  Zap,
  MousePointer2,
  FileText,
  BrainCircuit
} from 'lucide-react';

const App = () => {
  const [selectedTopic, setSelectedTopic] = useState(null);
  const [selectedFormat, setSelectedFormat] = useState(null);
  const [copied, setCopied] = useState(false);

  // Scarlet Red constant
  const SCARLET = "#ba0c2f";

  // Stacked Typography Logo
  const JusticeTechLogo = () => (
    <div className="flex flex-col leading-none select-none shrink-0 group">
      <span className={`text-[#ba0c2f] font-serif font-black text-4xl uppercase tracking-tighter leading-none`}>
        Justice
      </span>
      <span className={`text-[#ba0c2f] font-sans font-light text-2xl uppercase tracking-[0.25em] leading-none -mt-1 opacity-90`}>
        Tech
      </span>
    </div>
  );

  const topics = [
    {
      id: 'served',
      title: 'What happens after you’ve been served?',
      url: 'https://www.ohiobar.org/public-resources/commonly-asked-law-questions-results/courts-and-lawyers/know-how-to-answer-a-complaint/',
      shorthand: 'Filing an Answer'
    },
    {
      id: 'hearing',
      title: 'How to prepare for a hearing',
      url: 'https://www.ohiolegalhelp.org/topic/hearing',
      shorthand: 'Court Basics'
    },
    {
      id: 'debt',
      title: 'Debt collection lawsuits',
      url: 'https://www.ohiolegalhelp.org/topic/debt_lawsuit',
      shorthand: 'Debt Collection'
    },
    {
      id: 'custom',
      title: '[Your Choice]',
      url: '',
      shorthand: 'Choose Your Own'
    }
  ];

  const formats = [
    { id: 'path', title: 'Choose-your-path', desc: '3 decisions → feedback' },
    { id: 'myth', title: 'Myth vs. Fact', desc: '5 cards with feedback' },
    { id: 'timeline', title: 'Timeline ordering game', desc: 'Step-by-step logic' },
    { id: 'redflag', title: 'Spot the red flag', desc: 'Identify urgent issues' },
    { id: 'custom', title: 'Custom mechanic', desc: 'Make it simple!' }
  ];

  const generatePrompt = () => {
    const topicText = selectedTopic?.id === 'custom' 
      ? '[DESCRIBE YOUR TOPIC HERE]' 
      : selectedTopic?.title;
    
    const formatText = selectedFormat?.id === 'custom'
      ? '[DESCRIBE YOUR SIMPLE MECHANIC]'
      : selectedFormat?.title;

    const sourceText = selectedTopic?.url 
      ? `\n\nI'm using this as a source: ${selectedTopic.url}`
      : "";

    return `I want to build a tiny micro-game for self-represented litigants about: ${topicText}. 
    
The format should be a "${formatText}".${sourceText}

Can you give me a quick plan for how this should work? I need a learning objective, 3 key points to teach, and a clear win condition. Once we agree on the plan, I'll have you build the MVP.`;
  };

  const copyToClipboard = () => {
    const text = generatePrompt();
    const textArea = document.createElement("textarea");
    textArea.value = text;
    document.body.appendChild(textArea);
    textArea.select();
    try {
      document.execCommand('copy');
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Fallback: Oops, unable to copy', err);
    }
    document.body.removeChild(textArea);
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans pb-20 selection:bg-red-100">
      <main className="max-w-6xl mx-auto px-6 pt-16">
        
        {/* Header Section */}
        <div className="mb-12">
          <div className="flex flex-col md:flex-row md:items-end gap-6 md:gap-10 mb-8">
            <JusticeTechLogo />
            <div className="hidden md:block w-px h-16 bg-slate-300" />
            <div className="pb-1">
              <h1 className="text-4xl md:text-5xl font-serif font-bold text-slate-800 tracking-tight leading-tight text-balance">
                Vibe-Coding a Micro-Game
              </h1>
              <p className="text-xl text-slate-500 font-medium tracking-tight">
                Self-Represented Litigant (SRL) Activity
              </p>
            </div>
          </div>
          <div className="h-2 w-full bg-[#ba0c2f] rounded-full shadow-sm" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Sidebar (4 cols) */}
          <div className="lg:col-span-4 space-y-6">
            
            {/* Goals */}
            <section className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
              <div className={`bg-slate-50 px-6 py-3 border-b border-slate-200 flex items-center gap-2`}>
                <Lightbulb size={18} className="text-[#ba0c2f]" />
                <h2 className="font-bold text-slate-700 uppercase tracking-wider text-xs">Activity Goals</h2>
              </div>
              <div className="p-6">
                <ul className="space-y-4">
                  {[
                    "Confirm tool access & login",
                    "Practice the vibe-coding loop",
                    "Apply legal domain expertise"
                  ].map((goal, idx) => (
                    <li key={idx} className="flex gap-3 text-sm text-slate-600 leading-tight font-medium">
                      <CheckCircle2 size={16} className="text-[#ba0c2f] shrink-0 mt-0.5" />
                      {goal}
                    </li>
                  ))}
                </ul>
              </div>
            </section>

            {/* Time */}
            <section className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
              <div className="bg-slate-50 px-6 py-3 border-b border-slate-200 flex items-center gap-2">
                <Clock size={18} className="text-[#ba0c2f]" />
                <h2 className="font-bold text-slate-700 uppercase tracking-wider text-xs">Timeline: 30m</h2>
              </div>
              <div className="p-6">
                <div className="space-y-3">
                  {[
                    { label: "Set-up & Plan", time: "5m" },
                    { label: "Build (MVP)", time: "15m", bold: true },
                    { label: "Iterate", time: "5m" },
                    { label: "Share-out", time: "5m" }
                  ].map((item, idx) => (
                    <div key={idx} className={`flex justify-between items-center text-sm ${item.bold ? 'font-bold text-slate-900' : 'text-slate-600 font-medium'}`}>
                      <span>{item.label}</span>
                      <span className="font-mono bg-slate-100 px-2 py-0.5 rounded text-[10px]">{item.time}</span>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* Safety */}
            <section className="bg-red-50 rounded-2xl border border-red-100 shadow-sm overflow-hidden">
              <div className="bg-red-100/50 px-6 py-3 border-b border-red-100 flex items-center gap-2">
                <ShieldAlert size={18} className="text-[#ba0c2f]" />
                <h2 className="font-bold text-[#ba0c2f] uppercase tracking-wider text-xs">Safety & Ethics</h2>
              </div>
              <div className="p-6 space-y-3">
                {[
                  "No real client information",
                  "Include visible legal disclaimer",
                  "8th-grade reading level required"
                ].map((rule, idx) => (
                  <div key={idx} className="flex gap-2 text-xs font-bold text-red-900/70">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#ba0c2f] mt-1 shrink-0" />
                    {rule}
                  </div>
                ))}
              </div>
            </section>

            {/* Strategic Tips */}
            <section className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
              <div className="bg-slate-50 px-6 py-3 border-b border-slate-200 flex items-center gap-2">
                <Sparkles size={18} className="text-[#ba0c2f]" />
                <h2 className="font-bold text-slate-700 uppercase tracking-wider text-xs">Strategic Tips</h2>
              </div>
              <div className="p-6 space-y-6">
                <div className="flex gap-3">
                  <div className="p-2 bg-slate-100 rounded-lg shrink-0 h-fit">
                    <BrainCircuit size={14} className="text-[#ba0c2f]" />
                  </div>
                  <div>
                    <h4 className="text-[11px] font-black text-slate-800 mb-1 uppercase tracking-wider">Thinking Mode</h4>
                    <p className="text-[11px] text-slate-500 leading-normal font-medium italic">Highly Recommended:</p>
                    <p className="text-[11px] text-slate-500 leading-normal font-medium">Use "Thinking" mode. It helps Gemini reason through legal branching before writing code.</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <div className="p-2 bg-slate-100 rounded-lg shrink-0 h-fit">
                    <Zap size={14} className="text-yellow-600" />
                  </div>
                  <div>
                    <h4 className="text-[11px] font-black text-slate-800 mb-1 uppercase tracking-wider">Fact Check</h4>
                    <p className="text-[11px] text-slate-500 leading-normal font-medium">Use recommended sources to verify logic. AI can hallucinate local rules!</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <div className="p-2 bg-slate-100 rounded-lg shrink-0 h-fit">
                    <RotateCcw size={14} className="text-blue-600" />
                  </div>
                  <div>
                    <h4 className="text-[11px] font-black text-slate-800 mb-1 uppercase tracking-wider">Iterate</h4>
                    <p className="text-[11px] text-slate-500 leading-normal font-medium">Focus on the legal logic first. You can iterate on "the look" or extra features in the final 5 minutes.</p>
                  </div>
                </div>
              </div>
            </section>
          </div>

          {/* Main Content (8 cols) */}
          <div className="lg:col-span-8 space-y-8">
            
            {/* Steps Section */}
            <div className="bg-white rounded-3xl border border-slate-200 shadow-sm p-8 md:p-10">
              <header className="flex items-center gap-4 mb-8">
                <div className="p-3 bg-red-50 rounded-2xl">
                  <MousePointer2 className="text-[#ba0c2f]" size={28} />
                </div>
                <div>
                  <h3 className="text-2xl font-serif font-bold text-slate-800">Define the Scope</h3>
                  <p className="text-sm text-slate-500 font-medium">Pick your legal topic and interaction style.</p>
                </div>
              </header>

              <div className="space-y-10">
                {/* Topic Grid */}
                <div>
                  <label className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 mb-4 block">Legal Topic</label>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {topics.map(t => (
                      <button
                        key={t.id}
                        onClick={() => setSelectedTopic(t)}
                        className={`p-5 rounded-2xl text-left transition-all border-2 group ${
                          selectedTopic?.id === t.id 
                          ? 'border-[#ba0c2f] bg-red-50/30 shadow-sm' 
                          : 'border-slate-100 bg-slate-50/50 hover:border-slate-200'
                        }`}
                      >
                        <div className={`font-bold text-sm mb-1 ${selectedTopic?.id === t.id ? 'text-[#ba0c2f]' : 'text-slate-800'}`}>
                          {t.shorthand}
                        </div>
                        <div className="text-[11px] text-slate-500 leading-tight font-medium">
                          {t.id === 'custom' ? 'Describe your own legal concept' : t.title}
                        </div>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Mechanic Grid */}
                <div>
                  <label className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 mb-4 block">Game Mechanic</label>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                    {formats.map(f => (
                      <button
                        key={f.id}
                        onClick={() => setSelectedFormat(f)}
                        className={`p-4 rounded-2xl text-left transition-all border-2 ${
                          selectedFormat?.id === f.id 
                          ? 'border-[#ba0c2f] bg-red-50/30 shadow-sm' 
                          : 'border-slate-100 bg-slate-50/50 hover:border-slate-200'
                        }`}
                      >
                        <div className={`text-xs font-bold mb-1 ${selectedFormat?.id === f.id ? 'text-[#ba0c2f]' : 'text-slate-800'}`}>
                          {f.title}
                        </div>
                        <div className="text-[10px] text-slate-500 leading-tight font-medium">{f.desc}</div>
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Prompt Window */}
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-[#ba0c2f] to-slate-400 rounded-[2rem] blur opacity-15 group-hover:opacity-20 transition duration-1000"></div>
              <div className="relative bg-white rounded-3xl border border-slate-200 shadow-xl overflow-hidden">
                
                {/* Window Header */}
                <div className="px-6 py-4 bg-slate-50 border-b border-slate-200 flex justify-between items-center">
                  <div className="flex items-center gap-2">
                    <FileText size={16} className="text-slate-400" />
                    <span className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400">Construction Prompt</span>
                  </div>
                  <button 
                    onClick={copyToClipboard}
                    disabled={!selectedTopic || !selectedFormat}
                    className={`flex items-center gap-2 px-5 py-2 rounded-xl text-xs font-bold transition-all shadow-sm ${
                      !selectedTopic || !selectedFormat 
                      ? 'bg-slate-200 text-slate-400 cursor-not-allowed' 
                      : `bg-[#ba0c2f] text-white hover:opacity-90 active:scale-95 shadow-red-100`
                    }`}
                  >
                    {copied ? <CheckCircle2 size={14} /> : <Copy size={14} />}
                    {copied ? 'Prompt Copied' : 'Copy Prompt'}
                  </button>
                </div>

                {/* Prompt Content */}
                <div className="p-8 md:p-10 bg-white">
                  <div className={`p-8 rounded-2xl border border-slate-100 bg-slate-50/50 min-h-[140px] relative transition-opacity duration-300 ${!selectedTopic || !selectedFormat ? 'opacity-30' : 'opacity-100'}`}>
                    <pre className="text-slate-700 font-mono text-sm whitespace-pre-wrap leading-relaxed select-all">
                      {generatePrompt()}
                    </pre>
                  </div>
                  
                  {(!selectedTopic || !selectedFormat) && (
                    <div className="absolute inset-0 flex items-center justify-center p-6 text-center bg-white/40 backdrop-blur-[1px]">
                      <div className="bg-white px-6 py-4 rounded-2xl border border-slate-200 shadow-lg max-w-xs">
                        <p className="text-slate-500 text-sm font-semibold">Select a topic and mechanic above to build your prompt.</p>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Recommended Resources */}
            <div className="space-y-4">
              <label className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 px-2 block">Reference Materials</label>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {[
                  { name: "FCMC Self-Help", url: "https://municipalcourt.franklincountyohio.gov/Departments-Services/Self-Help-Center", desc: "Local court guides" },
                  { name: "Ohio Legal Help", url: "https://www.ohiolegalhelp.org", desc: "Plain-language law" },
                  { name: "Law Library", url: "https://lawlibrary.franklincountyohio.gov/Home", desc: "Clinics & research" }
                ].map((res, idx) => (
                  <a key={idx} href={res.url} target="_blank" className="bg-white p-4 rounded-2xl border border-slate-200 shadow-sm hover:border-[#ba0c2f] hover:shadow-md transition-all group flex flex-col justify-between">
                    <div>
                      <h4 className="font-bold text-slate-800 text-xs mb-1 group-hover:text-[#ba0c2f] transition-colors">{res.name}</h4>
                      <p className="text-[10px] text-slate-500 font-medium leading-tight">{res.desc}</p>
                    </div>
                    <div className="mt-4 flex justify-end">
                      <ExternalLink size={12} className="text-slate-300 group-hover:text-[#ba0c2f]" />
                    </div>
                  </a>
                ))}

                {/* Selected Reference Card */}
                {selectedTopic && selectedTopic.id !== 'custom' && (
                  <a href={selectedTopic.url} target="_blank" className="bg-red-50 p-5 rounded-2xl border-2 border-[#ba0c2f]/20 shadow-sm hover:shadow-md transition-all group flex items-start justify-between md:col-span-3">
                    <div className="flex gap-4">
                      <div className="p-2 bg-[#ba0c2f]/10 rounded-xl h-fit">
                        <LinkIcon size={18} className="text-[#ba0c2f]" />
                      </div>
                      <div>
                        <h4 className="font-bold text-[#ba0c2f] text-sm mb-1 uppercase tracking-tight">Active Reference: {selectedTopic.shorthand}</h4>
                        <p className="text-[11px] text-[#ba0c2f]/70 italic font-medium">Your primary source material for this game build.</p>
                      </div>
                    </div>
                    <ExternalLink size={16} className="text-[#ba0c2f]/40 group-hover:text-[#ba0c2f]" />
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <footer className="mt-24 pt-8 border-t border-slate-200 text-center">
          <p className="text-[10px] text-slate-400 font-bold tracking-[0.3em] uppercase">
            Ohio State University // Moritz College of Law // Justice Tech 2026
          </p>
        </footer>
      </main>
    </div>
  );
};

export default App;
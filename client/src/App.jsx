import { useState } from 'react';
import Slides from './Slides';
import PromptWizard from './PromptWizard';
import Preview from './Preview';
import Gallery from './Gallery';
import Resources from './Resources';
import Deploy from './Deploy';
import Admin from './Admin';

const TABS = [
  { id: 'slides', label: 'Slides' },
  { id: 'build', label: 'Build' },
  { id: 'preview', label: 'Preview' },
  { id: 'gallery', label: 'Gallery' },
  { id: 'deploy', label: 'Deploy' },
  { id: 'resources', label: 'Resources' },
];

export default function App() {
  // Check if URL hash is #admin (hidden route, not in nav)
  const [isAdmin] = useState(() => window.location.hash === '#admin');
  const [activeTab, setActiveTab] = useState('slides');
  const isSlides = activeTab === 'slides';

  if (isAdmin) {
    return (
      <div className="min-h-screen bg-slate-50 font-[Source_Sans_Pro,sans-serif] text-slate-900">
        <Admin />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-50 font-[Source_Sans_Pro,sans-serif] text-slate-900">
      {/* Nav Bar */}
      <nav
        className={`sticky top-0 z-50 border-b transition-all duration-300 ${
          isSlides
            ? 'bg-slate-900 border-slate-800 py-1'
            : 'bg-white border-slate-200 py-3'
        }`}
      >
        <div className={`max-w-6xl mx-auto px-4 flex items-center ${isSlides ? 'justify-center gap-4' : 'justify-between'}`}>
          {/* Branding — hidden when slides are active */}
          {!isSlides && (
            <div className="flex items-center gap-3">
              <div className="flex flex-col leading-none select-none">
                <span className="text-[#BA0C2F] font-[BioRhyme,serif] font-extrabold text-lg uppercase tracking-tight leading-none">
                  Vibe Coding
                </span>
                <span className="text-slate-400 font-semibold text-[10px] uppercase tracking-[0.2em] leading-none">
                  Workshop
                </span>
              </div>
            </div>
          )}

          {/* Tabs */}
          <div className="flex gap-1">
            {TABS.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-4 py-1.5 rounded-lg text-sm font-semibold transition-all ${
                  activeTab === tab.id
                    ? 'bg-[#BA0C2F] text-white'
                    : isSlides
                      ? 'text-slate-400 hover:text-white hover:bg-slate-800'
                      : 'text-slate-500 hover:text-slate-800 hover:bg-slate-100'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      </nav>

      {/* Content */}
      <main>
        {activeTab === 'slides' && <Slides />}
        {activeTab === 'build' && <PromptWizard />}
        {activeTab === 'preview' && <Preview />}
        {activeTab === 'gallery' && <Gallery />}
        {activeTab === 'resources' && <Resources />}
        {activeTab === 'deploy' && <Deploy />}
      </main>
    </div>
  );
}

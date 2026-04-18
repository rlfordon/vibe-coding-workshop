import { useState, useEffect } from 'react';
import { EVENT_CONFIGS, DEFAULT_EVENT } from './eventConfigs';
import Home from './Home';
import Slides from './Slides';
import PromptWizard from './PromptWizard';
import Preview from './Preview';
import Gallery from './Gallery';
import Showcase from './Showcase';
import Resources from './Resources';
import Deploy from './Deploy';
import Admin from './Admin';

function parseHash() {
  const raw = window.location.hash.replace('#', '') || '';
  if (raw === 'admin') return { mode: 'admin', eventId: null };
  const eventId = EVENT_CONFIGS[raw] ? raw : DEFAULT_EVENT;
  return { mode: 'event', eventId };
}

const PRESENTER_MODE =
  typeof window !== 'undefined' &&
  new URLSearchParams(window.location.search).get('present') === '1';

export default function App() {
  const [{ mode, eventId }, setRoute] = useState(parseHash);
  const [activeTab, setActiveTab] = useState(() => {
    const { mode: m, eventId: eid } = parseHash();
    return m === 'admin' ? null : EVENT_CONFIGS[eid]?.defaultTab || 'home';
  });

  useEffect(() => {
    function onHashChange() {
      const next = parseHash();
      setRoute(next);
      if (next.mode === 'event') {
        setActiveTab(EVENT_CONFIGS[next.eventId]?.defaultTab || 'home');
      }
    }
    window.addEventListener('hashchange', onHashChange);
    return () => window.removeEventListener('hashchange', onHashChange);
  }, []);

  if (mode === 'admin') {
    return (
      <div className="min-h-screen overflow-x-hidden bg-slate-50 font-[Source_Sans_Pro,sans-serif] text-slate-900">
        <Admin />
      </div>
    );
  }

  const eventConfig = EVENT_CONFIGS[eventId] || EVENT_CONFIGS[DEFAULT_EVENT];
  const isSlides = activeTab === 'slides';
  const hasSlidesTab = eventConfig.tabs.some((t) => t.id === 'slides');

  return (
    <div className="min-h-screen overflow-x-hidden bg-slate-50 font-[Source_Sans_Pro,sans-serif] text-slate-900">
      {/* Nav Bar */}
      <nav
        className={`sticky top-0 z-50 border-b transition-all duration-300 ${
          isSlides
            ? 'bg-slate-900 border-slate-800 py-1'
            : 'bg-white border-slate-200 py-3'
        }`}
      >
        <div className={`max-w-6xl mx-auto px-4 flex items-center gap-4 ${isSlides ? 'justify-center' : 'justify-between'}`}>
          {/* Branding — hidden when slides are active */}
          {!isSlides && (
            <div className="flex-shrink-0 flex items-center gap-3">
              <div className="flex flex-col leading-none select-none">
                <span className="text-[#BA0C2F] font-[BioRhyme,serif] font-extrabold text-lg uppercase tracking-tight leading-none">
                  Vibe Coding
                </span>
                <span className="text-slate-400 font-semibold text-[10px] uppercase tracking-[0.2em] leading-none">
                  {eventConfig.subtitle}
                </span>
              </div>
            </div>
          )}

          {/* Tabs — horizontally scrollable on mobile */}
          <div className="flex gap-1 overflow-x-auto scrollbar-hide -mx-4 px-4 sm:mx-0 sm:px-0">
            {eventConfig.tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex-shrink-0 px-4 py-1.5 rounded-lg text-sm font-semibold transition-all ${
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
        {activeTab === 'home' && <Home config={eventConfig} onNavigate={setActiveTab} />}
        {/* In presenter mode, keep Slides mounted so the deck holds its position across tabs. */}
        {PRESENTER_MODE && hasSlidesTab ? (
          <div style={{ display: isSlides ? 'block' : 'none' }}>
            <Slides slidesUrl={eventConfig.slidesUrl} />
          </div>
        ) : (
          activeTab === 'slides' && <Slides slidesUrl={eventConfig.slidesUrl} />
        )}
        {activeTab === 'build' && <PromptWizard build={eventConfig.build} />}
        {activeTab === 'preview' && <Preview />}
        {activeTab === 'gallery' && <Gallery eventId={eventConfig.id} />}
        {activeTab === 'showcase' && <Showcase items={eventConfig.showcase} subtitle={eventConfig.showcaseSubtitle} />}
        {activeTab === 'resources' && <Resources items={eventConfig.resources} />}
        {activeTab === 'deploy' && <Deploy />}
      </main>

      {/* Footer — hidden on slides tab */}
      {!isSlides && (
        <footer className="border-t border-slate-200 bg-white mt-12 py-6">
          <div className="max-w-6xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-2 text-sm text-slate-400">
            <span>
              MIT Licensed &middot; Built for{' '}
              <span className="text-[#BA0C2F] font-semibold">{eventConfig.title}</span>
            </span>
            <a
              href="https://github.com/rlfordon/vibe-coding-workshop"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-slate-400 hover:text-slate-600 transition-colors"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
              </svg>
              GitHub
            </a>
          </div>
        </footer>
      )}
    </div>
  );
}

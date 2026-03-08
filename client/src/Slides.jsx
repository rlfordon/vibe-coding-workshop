import { useRef, useState, useEffect } from 'react';

export default function Slides() {
  const containerRef = useRef(null);
  const [isFullscreen, setIsFullscreen] = useState(false);

  useEffect(() => {
    function onFullscreenChange() {
      setIsFullscreen(!!document.fullscreenElement);
    }
    document.addEventListener('fullscreenchange', onFullscreenChange);
    return () => document.removeEventListener('fullscreenchange', onFullscreenChange);
  }, []);

  function toggleFullscreen() {
    if (document.fullscreenElement) {
      document.exitFullscreen();
    } else {
      containerRef.current?.requestFullscreen();
    }
  }

  return (
    <div
      ref={containerRef}
      className="w-full relative bg-[#2a2a2a]"
      style={{ height: isFullscreen ? '100vh' : 'calc(100vh - 42px)' }}
      onDoubleClick={toggleFullscreen}
    >
      <iframe
        src="/slides.html"
        title="Vibe Coding Slides"
        className="w-full h-full border-0"
        allow="fullscreen"
      />
      {!isFullscreen && (
        <button
          onClick={toggleFullscreen}
          title="Fullscreen (double-click or Esc to exit)"
          className="absolute top-3 right-3 bg-black/50 hover:bg-black/70 text-white/80 hover:text-white rounded-lg px-3 py-1.5 text-xs font-semibold transition-all backdrop-blur-sm"
        >
          Fullscreen
        </button>
      )}
    </div>
  );
}

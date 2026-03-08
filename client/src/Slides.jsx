export default function Slides() {
  return (
    <div className="w-full bg-[#2a2a2a]" style={{ height: 'calc(100vh - 42px)' }}>
      <iframe
        src="/slides.html"
        title="Vibe Coding Slides"
        className="w-full h-full border-0"
      />
    </div>
  );
}

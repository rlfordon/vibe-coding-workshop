import { assetUrl } from './assetUrl';

export default function Slides({ slidesUrl }) {
  return (
    <div className="w-full bg-[#2a2a2a]" style={{ height: 'calc(100vh - 42px)' }}>
      <iframe
        src={assetUrl(slidesUrl)}
        title="Slides"
        className="w-full h-full border-0"
      />
    </div>
  );
}

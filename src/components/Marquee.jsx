
export default function Marquee() {
  const items = [
    "index.html",
    "style.css",
    "app.js",
    "assets/",
    "vite build",
    "tailwind",
    "three.js",
    "parallax",
    "orbit camera",
    "neon glow",
  ];

  return (
    <div className="relative my-6 overflow-hidden border-y border-white/10 bg-white/[0.02] py-3">
      <div className="marquee-track flex w-max items-center gap-8">
        {[...items, ...items].map((item, index) => (
          <span
            key={index}
            className="flex shrink-0 items-center gap-8 font-mono text-md uppercase tracking-[0.2em] text-white"
          >
            {item}
            <span className="neon-icon-pink">◆</span>
          </span>
        ))}
      </div>

      <style>{`
        .marquee-track {
          animation: marquee-scroll 30s linear infinite;
        }

        @keyframes marquee-scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        }
      `}</style>
    </div>
  );
}

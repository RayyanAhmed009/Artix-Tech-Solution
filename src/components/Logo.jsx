import React from 'react';

export default function Logo() {
  return (
    <div className="flex flex-col items-center leading-none" aria-label="Artix Tech Solutions">
      <span className="logo-gradient text-[30px] font-black tracking-[0.06em] sm:text-[34px]">ARTIX</span>
      <span className="mt-1 flex items-center gap-1.5 text-[8.5px] font-medium tracking-[0.32em] text-white/80 sm:text-[9px]">
        <span className="h-px w-3 bg-neon-blue" aria-hidden="true" />
        TECH SOLUTIONS
        <span className="h-px w-3 bg-neon-pink" aria-hidden="true" />
      </span>
    </div>
  );
}

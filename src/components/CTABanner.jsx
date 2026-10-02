import React from 'react';
import  Reveal  from './Reveal';
import  GradientButton  from './GradientButton';

function CTABanner() {
  return (
    <section className="mx-auto max-w-7xl px-6 lg:px-10">
      <Reveal>
        <div className="cta-gradient flex flex-col items-start justify-between gap-6 rounded-2xl px-8 py-9 shadow-[0_0_50px_rgba(168,60,245,0.3)] sm:flex-row sm:items-center sm:px-14 lg:px-24">
          <div>
            <h2 className="text-xl font-semibold text-white sm:text-2xl">Have a Project in Mind?</h2>
            <p className="mt-1 text-base text-white/90 sm:text-lg">Let's Create Something Amazing Together!</p>
          </div>
          <GradientButton to="/contact" arrow className="ring-1 ring-white/25">
            Start Your Project
          </GradientButton>
        </div>
      </Reveal>
    </section>
  );
}

export default CTABanner;
import React from 'react';
import { CircleCheckIcon } from 'lucide-react';
import  GradientButton  from '../components/GradientButton';
import  StatsBar  from '../components/StatsBar';
import  Reveal  from '../components/Reveal';
import  TiltCard  from '../components/TiltCard';
// import  ParticleField  from '../components/ParticleField';
import { aboutPoints, aboutStats, images } from '../data/site';

 function About() {
  return (
    <>
      <section className="relative overflow-hidden">
        {/* <ParticleField className="absolute inset-0" count={900} showRings={false} /> */}
        <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-6 pb-16 pt-14 lg:grid-cols-2 lg:px-10">
          <Reveal>

<div>
  <div className="flex items-center gap-2">
    <p className="text-xs font-semibold tracking-[0.15em] text-neon-pink whitespace-nowrap">
      WHO WE ARE
    </p>

    <h1 className="text-3xl font-bold leading-none sm:text-4xl lg:text-4xl">
      ABOUT
    </h1>
  </div>

  <h2 className="mt-2 text-3xl font-semibold leading-tight sm:text-5xl lg:text-5xl">
    <span className="text-gradient-blue">
      Artix Tech Solutions
    </span>
  </h2>
</div>


            <p className="mt-6 max-w-lg text-[15px] leading-relaxed text-white/80">
              Artix Tech Solutions is a creative and technology-driven company delivering innovative digital solutions. We
              combine creativity, technology and strategy to help businesses grow and stand out in the digital world.
            </p>
            <ul className="mt-7 space-y-3.5">
              {aboutPoints.map((p) => (
                <li key={p} className="flex items-center gap-3 text-sm text-white/90">
                 <CircleCheckIcon className="neon-icon-pink h-[22px] w-[22px] shrink-0" aria-hidden="true" />
                  {p}
                </li>
              ))}
            </ul>
            <GradientButton to="/services" arrow className="mt-9">
              Our Services
            </GradientButton>
          </Reveal>

         <Reveal delay={0.08}>
            <TiltCard intensity={8}>
              <div className="drop-shadow-[0_0_22px_rgba(139,92,246,0.55)]">
                <div className="chamfer bg-[linear-gradient(135deg,#41CAFF,#8b5cf6,#F35BFF)] p-[4px]">
                  <img
                    src={images.office}
                    alt="Artix Tech Solutions neon-lit creative studio with multiple monitors"
                    className="chamfer aspect-[16/14] w-full object-cover"
                  />
                </div>
              </div>
            </TiltCard>
          </Reveal>
        </div>
      </section>

      <StatsBar stats={aboutStats} />

      <section className="mx-auto mt-16 max-w-7xl px-6 lg:px-10" aria-labelledby="mission">
        <Reveal>
          <div className="card-glow grid items-center gap-10 rounded-2xl p-8 sm:p-10 lg:grid-cols-2 lg:p-12">
            <div>
              <p id="mission" className="text-xs font-semibold tracking-[0.15em] text-neon-pink">
                OUR MISSION
              </p>
              <h2 className="mt-5 text-xl font-medium leading-relaxed text-white sm:text-[22px]">
                Our mission is to empower businesses with creative digital solutions that drive growth, build strong brands
                and create lasting impact.
              </h2>
            </div>
            <TiltCard intensity={8}>
              <div className="overflow-hidden rounded-xl border border-neon-pink/40 shadow-[0_0_30px_rgba(209,60,242,0.25)]">
                <img src={images.mission} alt="Neon target with an arrow hitting the bullseye" className="aspect-[16/9] w-full object-cover" />
              </div>
            </TiltCard>
          </div>
        </Reveal>
      </section>
    </>
  );
}
export default About;
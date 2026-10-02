import React from 'react';
// import  ParticleField  from '../components/ParticleField';
import  ServiceCard  from '../components/ServiceCard';
import  Reveal  from '../components/Reveal';
import { allServices } from '../data/site';

function Services() {
  return (
    <>
      <section className="relative overflow-hidden">
        {/* <ParticleField className="absolute inset-0" count={1100} ringOffsetX={4.2} /> */}
        <div className="relative mx-auto max-w-7xl px-6 pb-10 pt-16 lg:px-10">
          <Reveal>
            <p className="text-xs font-semibold tracking-[0.15em] text-neon-pink">OUR SERVICES</p>
            <h1 className="mt-4 text-4xl font-semibold leading-tight sm:text-5xl">
              We Provide Best
              <span className="text-gradient-blue block">Digital Services</span>
            </h1>
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-white/70">
              We combine creativity, technology and strategy to deliver exceptional digital solutions.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 lg:px-10" aria-label="All services">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {allServices.map((s, i) => (
            <Reveal key={s.title} delay={i * 0.04} className="h-full">
              <ServiceCard service={s} showLink />
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}
export default Services;
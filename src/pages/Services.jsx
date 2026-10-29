import React from 'react';
// import  ParticleField  from '../components/ParticleField';
import ServiceCard from '../components/ServiceCard';
import Reveal from '../components/Reveal';
import { allServices } from '../data/site';

function Services() {
  return (
    <>
      <section className="relative overflow-hidden">
        {/* <ParticleField className="absolute inset-0" count={1100} ringOffsetX={4.2} /> */}
        <div className="relative mx-auto max-w-7xl px-6 pb-10 pt-16 lg:px-10">
          <Reveal>
            <p className="text-xs font-semibold tracking-[0.15em] text-neon-pink">OUR SERVICES</p>
            <h1 className="mt-4 text-3xl font-semibold leading-tight sm:text-3xl">
              We Provide Best
            </h1>
            <h2 className="mt-2 text-3xl font-semibold leading-tight sm:text-5xl lg:text-5xl">
              <span className="text-gradient-blue">
                Digital Services
              </span>
            </h2>
            <p className="mt-4 max-w-2xl text-sm leading-7 text-white/55 sm:text-base">
              We combine creativity, technology and strategy to deliver exceptional digital solutions.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 lg:px-10" aria-label="All services">
        <div className="grid gap-4 md:grid-cols-3 sm:grid-cols-2 lg:grid-cols-3">
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
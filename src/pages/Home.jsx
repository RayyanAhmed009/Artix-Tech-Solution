import React from 'react';
import { motion } from 'framer-motion';
// import  ParticleField  from '../components/ParticleField';
import  Hero3D  from '../components/Hero3D';
import  GradientButton  from '../components/GradientButton';
import  StatsBar  from '../components/StatsBar';
import  ServiceCard  from '../components/ServiceCard';
import  CTABanner  from '../components/CTABanner';
import  Reveal  from '../components/Reveal';
import { homeServices, homeStats } from '../data/site';

const ease = [0.23, 1, 0.32, 1];

 function Home() {
  return (
    <>
      <section className="relative overflow-hidden">
        {/* <ParticleField className="absolute inset-0" /> */}
        <div className="relative mx-auto grid max-w-7xl items-center gap-10 px-6 pb-16 pt-14 lg:grid-cols-[1.05fr_1fr] lg:px-10 lg:pt-16">
          <div>
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, ease }}
              className="inline-flex rounded-md border border-neon-pink/40 px-3 py-1.5 text-[11px] font-medium tracking-[0.25em] text-neon-pink/90"
            >
              DESIGN • CREATE • ELEVATE
            </motion.p>
            <h1 className="mt-6 text-5xl font-extrabold leading-[1.08] tracking-tight sm:text-6xl lg:text-[68px]">
              {['WE DESIGN.', 'WE CREATE.', 'WE ELEVATE.'].map((line, i) => (
                <motion.span
                  key={line}
                  initial={{ opacity: 0, y: 24, rotateX: -40 }}
                  animate={{ opacity: 1, y: 0, rotateX: 0 }}
                  transition={{ duration: 0.3, delay: 0.08 + i * 0.06, ease }}
                  style={{ transformPerspective: 800 }}
                  className={`block ${i === 0 ? 'text-gradient-soft' : 'text-gradient'}`}
                >
                  {line}
                </motion.span>
              ))}
            </h1>
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.3, ease }}
              className="mt-6 max-w-sm text-lg leading-relaxed text-white/90"
            >
              Creative digital solutions that inspire, engage and deliver results.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.36, ease }}
              className="mt-9 flex flex-wrap gap-4"
            >
              <GradientButton to="/contact">Get Started</GradientButton>
              <GradientButton to="/portfolio" variant="outline">
                View Our Work
              </GradientButton>
            </motion.div>
          </div>
          <Hero3D />
        </div>
      </section>

      <StatsBar stats={homeStats} />

      <section className="mx-auto mt-20 grid max-w-7xl gap-10 px-6 lg:grid-cols-[0.8fr_2fr] lg:px-10" aria-labelledby="home-services">
        <Reveal className="lg:pt-2">
          <p className="text-xs font-semibold tracking-[0.15em] text-white/80">OUR SERVICES</p>
          <h2 id="home-services" className="mt-4 text-3xl font-semibold leading-tight sm:text-[34px]">
            We Provide Best
            <span className="text-gradient-violet block">Services</span>
          </h2>
          <p className="mt-6 max-w-[260px] text-sm leading-relaxed text-white/70">
            We offer a wide range of creative and digital services to help your brand grow and stand out.
          </p>
          <GradientButton to="/services" arrow size="sm" className="mt-8">
            Explore Services
          </GradientButton>
        </Reveal>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {homeServices.map((s, i) => (
            <Reveal key={s.title} delay={i * 0.04}>
              <ServiceCard service={s} />
            </Reveal>
          ))}
        </div>
      </section>

      <div className="mt-20">
        <CTABanner />
      </div>
    </>
  );
}

export default Home;
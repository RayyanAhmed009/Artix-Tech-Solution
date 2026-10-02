import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { ArrowRightIcon } from 'lucide-react';
import  Reveal  from '../components/Reveal';
import  TiltCard  from '../components/TiltCard';
import { portfolioFilters, portfolioItems } from '../data/site';

 function Portfolio() {
  const [active, setActive] = useState('All');
  const visible = active === 'All' ? portfolioItems : portfolioItems.filter((p) => p.filter === active);

  return (
    <section className="mx-auto max-w-7xl px-6 pt-14 lg:px-10" aria-labelledby="portfolio-title">
      <Reveal>
        <p className="text-xs font-semibold tracking-[0.15em] text-neon-pink">OUR PORTFOLIO</p>
        <h1 id="portfolio-title" className="mt-4 text-4xl font-semibold sm:text-5xl">
          Our Recent <span className="text-gradient-violet">Work</span>
        </h1>
      </Reveal>

      <div className="mt-9 flex flex-wrap gap-3 lg:pl-11" role="tablist" aria-label="Filter projects">
        {portfolioFilters.map((f) => (
          <button
            key={f}
            type="button"
            role="tab"
            aria-selected={active === f}
            onClick={() => setActive(f)}
            className={`h-9 whitespace-nowrap rounded-md px-4 text-sm font-medium transition-[background-color,color,box-shadow] duration-150 ${
              active === f ? 'btn-gradient text-white' : 'bg-white/[0.04] text-white/75 hover:bg-white/[0.08] hover:text-white'
            }`}
          >
            {f}
          </button>
        ))}
      </div>

      <motion.div layout className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        <AnimatePresence mode="popLayout">
          {visible.map((p) => (
            <motion.article
              key={p.title}
              layout
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.96 }}
              transition={{ duration: 0.25, ease: [0.23, 1, 0.32, 1] }}
            >
              <TiltCard intensity={7} className="card-glow group overflow-hidden rounded-xl">
                <div className="overflow-hidden">
                  <img
                    src={p.image}
                    alt={p.title}
                    className="aspect-[3/2] w-full object-cover transition-transform duration-300 ease-out group-hover:scale-105"
                  />
                </div>
                <div className="px-5 py-5" style={{ transform: 'translateZ(20px)' }}>
                  <h2 className="text-[15px] font-semibold text-white">{p.title}</h2>
                  <p className="mt-1.5 text-[13px] text-white/55">{p.category}</p>
                </div>
              </TiltCard>
            </motion.article>
          ))}
        </AnimatePresence>
      </motion.div>

      {visible.length === 0 && (
        <p className="mt-10 text-center text-sm text-white/60">No projects in this category yet.</p>
      )}

      <div className="mt-14 flex justify-center">
        <Link
          to="/contact"
          className="group flex h-12 items-stretch overflow-hidden rounded-lg shadow-[0_0_28px_rgba(168,60,245,0.4)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neon-blue"
        >
          <span className="btn-gradient flex items-center px-11 text-sm font-semibold text-white">View More Projects</span>
          <span className="flex w-12 items-center justify-center border border-l-0 border-neon-blue/40 bg-ink text-neon-blue">
            <ArrowRightIcon className="h-4 w-4 transition-transform duration-150 ease-out group-hover:translate-x-0.5" aria-hidden="true" />
          </span>
        </Link>
      </div>
    </section>
  );
}
export default Portfolio;
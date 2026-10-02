import React from 'react';
import { motion } from 'framer-motion';

export default function StatsBar({ stats }) {
  return (
    <section aria-label="Company stats" className="mx-auto max-w-7xl px-6 lg:px-10">
      <div className="card-glow grid grid-cols-2 rounded-2xl lg:grid-cols-4">
        {stats.map((s, i) => {
          const Icon = s.icon;
          return (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 14, rotateX: -25 }}
              whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: i * 0.05, ease: [0.23, 1, 0.32, 1] }}
              style={{ transformPerspective: 800 }}
              className={`flex items-center justify-center gap-4 px-4 py-7 ${
                i < stats.length - 1 ? 'lg:border-r lg:border-white/5' : ''
              } ${i % 2 === 0 ? 'border-r border-white/5 lg:border-r' : ''} ${i < 2 ? 'border-b border-white/5 lg:border-b-0' : ''}`}
            >
              <Icon className="neon-icon-pink h-8 w-8 shrink-0" strokeWidth={1.5} aria-hidden="true" />
              <div>
                <p className="text-2xl font-bold leading-none text-[#4cc3ff] drop-shadow-[0_0_10px_rgba(42,168,245,0.5)] sm:text-3xl">
                  {s.value}
                </p>
                <p className="mt-1.5 text-md text-white/75">{s.label}</p>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}

import React from 'react';
import { motion, useMotionValue, useReducedMotion, useSpring, useTransform } from 'framer-motion';
import { images } from '../data/site';

export default function Hero3D() {
  const reduce = useReducedMotion();
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [14, -14]), { stiffness: 140, damping: 18 });
  const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-18, 18]), { stiffness: 140, damping: 18 });

  const handleMove = (e) => {
    if (reduce) return;
    const rect = e.currentTarget.getBoundingClientRect();
    x.set((e.clientX - rect.left) / rect.width - 0.5);
    y.set((e.clientY - rect.top) / rect.height - 0.5);
  };

  return (
    <div
      onMouseMove={handleMove}
      onMouseLeave={() => {
        x.set(0);
        y.set(0);
      }}
      className="relative mx-auto aspect-square w-full max-w-[580px]"
      style={{ perspective: 1200 }}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.96 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.3, ease: [0.23, 1, 0.32, 1] }}
        style={{ rotateX, rotateY, transformStyle: 'preserve-3d' }}
        className="relative h-full w-full"
      >
        {/* Back orbit rings */}
        <div
          className="absolute inset-[6%] rounded-full border border-neon-blue/25 animate-spin-slow"
          style={{ transform: 'translateZ(-80px)', borderTopColor: 'rgba(209,60,242,0.7)' }}
          aria-hidden="true"
        />
        <div
          className="absolute inset-[16%] rounded-full border border-neon-violet/25 animate-spin-slower"
          style={{ transform: 'translateZ(-40px)', borderRightColor: 'rgba(42,168,245,0.8)' }}
          aria-hidden="true"
        />

        {/* Floating logo */}
        <motion.img
          src={images.hero}
          alt="Glowing 3D Artix 'A' emblem on a holographic platform"
          animate={reduce ? undefined : { y: [0, -16, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
          style={{ transform: 'translateZ(60px)' }}
          className="absolute inset-0 h-full w-full object-contain mix-blend-screen"
        />

        {/* Platform glow */}
        <div
          className="absolute bottom-[10%] left-1/2 h-[14%] w-[70%] rounded-[50%] border border-neon-pink/40"
          style={{ transform: 'translateX(-50%) translateZ(20px) rotateX(70deg)', boxShadow: '0 0 60px rgba(209,60,242,0.45)' }}
          aria-hidden="true"
        />
      </motion.div>
    </div>
  );
}

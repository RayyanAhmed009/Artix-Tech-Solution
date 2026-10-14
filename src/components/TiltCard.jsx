import React from 'react';
import {
  motion,
  useMotionValue,
  useReducedMotion,
  useSpring,
  useTransform,
} from 'framer-motion';

export default function TiltCard({
  children,
  className = '',
  intensity = 6,
}) {
  const reduce = useReducedMotion();

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const config = {
    stiffness: 170,
    damping: 26,
    mass: 0.55,
  };

  const rotateX = useSpring(
    useTransform(y, [-0.5, 0.5], [intensity, -intensity]),
    config
  );

  const rotateY = useSpring(
    useTransform(x, [-0.5, 0.5], [-intensity, intensity]),
    config
  );

  const handleMove = (e) => {
    if (reduce || e.pointerType === 'touch') return;

    const rect = e.currentTarget.getBoundingClientRect();

    if (!rect.width || !rect.height) return;

    x.set((e.clientX - rect.left) / rect.width - 0.5);
    y.set((e.clientY - rect.top) / rect.height - 0.5);
  };

  const handleLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <div
      className="h-full"
      style={{ perspective: '1000px' }}
    >
      <motion.div
        onPointerMove={handleMove}
        onPointerLeave={handleLeave}
        style={{
          rotateX: reduce ? 0 : rotateX,
          rotateY: reduce ? 0 : rotateY,
          transformStyle: 'preserve-3d',
        }}
        className={`h-full ${className}`}
      >
        {children}
      </motion.div>
    </div>
  );
}

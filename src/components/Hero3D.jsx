import React, { useLayoutEffect, useRef } from 'react';
import { animate, createSpring, utils } from 'animejs';
import { images } from '../data/site';

const prefersReducedMotion = () =>
  typeof window !== 'undefined' &&
  window.matchMedia &&
  window.matchMedia('(prefers-reduced-motion: reduce)').matches;

export default function Hero3D() {
  const tiltRef = useRef(null);
  const imgRef = useRef(null);
  const videoRef = useRef(null);

  useLayoutEffect(() => {
    const tilt = tiltRef.current;
    const img = imgRef.current;
    if (!tilt || !img) return undefined;

    const reduce = prefersReducedMotion();

    // Keep the logo lifted in 3D (was style={{ transform: 'translateZ(60px)' }})
    utils.set(img, { translateZ: 60 });

    // Entry: fade + slight scale
    utils.set(tilt, { opacity: 0, scale: 0.96 });
    const entry = animate(tilt, {
      opacity: [0, 1],
      scale: [0.96, 1],
      duration: 300,
      ease: 'cubicBezier(0.23, 1, 0.32, 1)',
    });

    // Floating logo loop (skipped for reduced motion)
    let float;
    if (!reduce) {
      float = animate(img, {
        translateY: [0, -16],
        duration: 3000,
        ease: 'inOutSine',
        alternate: true,
        loop: true,
      });
    }

    return () => {
      entry.cancel();
      if (float) float.cancel();
    };
  }, []);

  const tiltTo = (rx, ry) => {
    const el = tiltRef.current;
    if (!el) return;
    animate(el, {
      rotateX: rx,
      rotateY: ry,
      ease: createSpring({ stiffness: 140, damping: 18 }),
    });
  };


  const handleTimeUpdate = () => {
    const video = videoRef.current;
    if (!video || !Number.isFinite(video.duration)) return;

    // Restart just before the final frame
    if (video.duration - video.currentTime < 0.08) {
      video.currentTime = 0;
      video.play().catch(() => { });
    }
  };
  const handleMove = (e) => {
    if (prefersReducedMotion()) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    // same mapping as before: y [-0.5,0.5] -> [14,-14], x [-0.5,0.5] -> [-18,18]
    tiltTo(-28 * y, 36 * x);
  };

  return (
    <div
      onMouseMove={handleMove}
      onMouseLeave={() => {
        if (!prefersReducedMotion()) tiltTo(0, 0);
      }}
      className="relative mx-auto aspect-square w-full max-w-[480px]"
      style={{ perspective: 1200 }}
    >
      <div
        ref={tiltRef}
        style={{ transformStyle: 'preserve-3d' }}
        className="relative h-full w-full"
      >
        {/* Back orbit rings */}
        {/* <div
          className="absolute inset-[6%] rounded-full border border-neon-blue/25 animate-spin-slow"
          style={{ transform: 'translateZ(-80px)', borderTopColor: 'rgba(209,60,242,0.7)' }}
          aria-hidden="true"
        /> */}
        {/* <div
          className="absolute inset-[16%] rounded-full border border-neon-violet/25 animate-spin-slower"
          style={{ transform: 'translateZ(-40px)', borderRightColor: 'rgba(42,168,245,0.8)' }}
          aria-hidden="true"
        /> */}

        {/* Floating logo */}
        <video
          ref={videoRef}
          src="/assets/hero.webm"
          autoPlay
          muted
          playsInline
          preload="auto"
          controls={false}
          loop={false}
          onTimeUpdate={handleTimeUpdate}
          alt="Glowing 3D Artix 'A' emblem on a holographic platform"
          className="pointer-events-none absolute inset-0 h-full w-full object-cover"
        />



        {/* Platform glow */}
        {/* <div
          className="absolute bottom-[10%] left-1/2 h-[14%] w-[70%] rounded-[50%] border border-neon-pink/40"
          style={{ transform: 'translateX(-50%) translateZ(20px) rotateX(70deg)', boxShadow: '0 0 60px rgba(209,60,242,0.45)' }}
          aria-hidden="true"
        /> */}
      </div>
    </div >
  );
}
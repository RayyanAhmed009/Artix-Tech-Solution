import { useLayoutEffect, useRef, useState } from "react";
import { animate, utils } from 'animejs';
import {
  ArrowRight, Search, Workflow, Lightbulb, PanelsTopLeft, Rocket,
  Layers3, Code2, Palette, Globe, PenTool, Sparkles, Check,
  Menu, X, BadgeCheck
} from "lucide-react";
import GradientButton from "./GradientButton";
import Pricing from "./Pricing";
// import "./index.css";

const EASE = 'cubicBezier(0.22, 1, 0.36, 1)';




function useHeroAnime(rootRef) {
  useLayoutEffect(() => {
    const root = rootRef.current;
    if (!root) return undefined;

    const left = root.querySelector('[data-a="left"]');
    const right = root.querySelector('[data-a="right"]');

    // ---- LEFT SIDE STEPS ----
    const steps = [
      {
        sel: '[data-a="left"]',
        from: { opacity: 0, translateX: -80 },
        to: { opacity: 1, translateX: 0 },
        duration: 1000,
        delay: 0,
      },
      {
        sel: '[data-a="badge"]',
        from: { opacity: 0, translateX: -35, scale: 0.95 },
        to: { opacity: 1, translateX: 0, scale: 1 },
        duration: 700,
        delay: 150,
      },
      ...[0, 1, 2].map((i) => ({
        sel: `[data-a="line-${i}"]`,
        from: { opacity: 0, translateX: -70, rotateX: -35 },
        to: { opacity: 1, translateX: 0, rotateX: 0 },
        duration: 900,
        delay: 350 + i * 180,
      })),
      {
        sel: '[data-a="desc"]',
        from: { opacity: 0, translateX: -45 },
        to: { opacity: 1, translateX: 0 },
        duration: 800,
        delay: 950,
      },
      {
        sel: '[data-a="buttons"]',
        from: { opacity: 0, translateX: -35, translateY: 15 },
        to: { opacity: 1, translateX: 0, translateY: 0 },
        duration: 800,
        delay: 1150,
      },
    ];

    let running = [];

    const reset = () => {
      running.forEach((a) => a.cancel());
      running = [];
      steps.forEach((s) => {
        utils.set(root.querySelectorAll(s.sel), s.from);
      });
    };

    const play = () => {
      reset();
      running = steps.map((s) => {
        const props = {};
        Object.keys(s.from).forEach((k) => {
          props[k] = [s.from[k], s.to[k]];
        });
        return animate(root.querySelectorAll(s.sel), {
          ...props,
          duration: s.duration,
          delay: s.delay,
          ease: EASE,
        });
      });
    };

    reset();

    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) play();
        else reset();
      },
      { threshold: 0.3 }
    );
    if (left) io.observe(left);

    // ---- RIGHT 3D (plays once on mount) ----
    let rightAnim;
    if (right) {
      utils.set(right, {
        opacity: 0,
        translateX: 100,
        scale: 0.88,
        rotateY: -12,
      });
      rightAnim = animate(right, {
        opacity: [0, 1],
        translateX: [100, 0],
        scale: [0.88, 1],
        rotateY: [-12, 0],
        duration: 1100,
        delay: 250,
        ease: 'cubicBezier(0.16, 1, 0.3, 1)',
      });
    }

    return () => {
      io.disconnect();
      running.forEach((a) => a.cancel());
      if (rightAnim) rightAnim.cancel();
    };
  }, [rootRef]);
}

function Hero() {
    const heroRef = useRef(null);
      useHeroAnime(heroRef);
  return (
    <section className="relative overflow-hidden" ref={heroRef}>
           {/* <ParticleField className="absolute inset-0" /> */}
   
           <div className="relative mx-auto grid max-w-7xl items-center gap-10 px-6 pb-16 pt-14 lg:grid-cols-[1.05fr_1fr] lg:px-10 lg:pt-16">
   
             {/* ================= LEFT CONTENT ================= */}
             <div data-a="left">
               {/* Badge */}
              
   
               {/* Heading */}
               <h1
                 className="mt-6 text-5xl font-extrabold leading-[1.08] tracking-tight sm:text-6xl lg:text-[68px]"
                 style={{ perspective: 800 }}
               >
                 {["Your Vision." ,"Our Expertise.", "One Price."].map((line, i) => (
                   <span
                     key={line}
                     data-a={`line-${i}`}
                     className={`block ${i === 0
                       ? "text-gradient-soft"
                       : "text-gradient"
                       }`}
                   >
                     {line}
                   </span>
                 ))}
               </h1>
   
               {/* Description */}
               <p
                 data-a="desc"
                 className="mt-6 max-w-md text-xl tracking-tight leading-relaxed text-white/90"
               >
                 Every business has a different vision. We craft flexible packages designed around your goals, your budget, and your next big move.
               </p>
   
               {/* Buttons */}
               <div data-a="buttons" className="mt-9 flex flex-wrap gap-4">
                 <GradientButton to="/contact">
                   Get Started
                 </GradientButton>
   
                 <GradientButton to="/portfolio" variant="outline">
                   Let's Build
                 </GradientButton>
               </div>
             </div>
   
   
             {/* ================= RIGHT 3D ================= */}
             <div style={{ perspective: 1500 }}>
                <div className="hero-visual">
          <img src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=1100&q=85" alt="Team discussing a project in a modern studio" />
          
        </div>

             </div>
   
           </div>
   
         </section>
  );
}






export default function Packages() {
  return (
  <div >
    <Hero />
  
     <Pricing/>
    </div>
  )
}

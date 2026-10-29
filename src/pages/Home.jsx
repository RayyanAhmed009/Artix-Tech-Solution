import React, { useLayoutEffect, useRef } from 'react';
import { animate, utils } from 'animejs';
// import  ParticleField  from '../components/ParticleField';
import Hero3D from '../components/Hero3D';
import GradientButton from '../components/GradientButton';
import StatsBar from '../components/StatsBar';
import ServiceCard from '../components/ServiceCard';
import CTABanner from '../components/CTABanner';
import Reveal from '../components/Reveal';
import { homeServices, homeStats } from '../data/site';
import Review from '../components/Review';
import NewServicesPopup from '../components/NewServicesPopup';
import Marquee from '../components/Marquee';
import Pricing from '../components/Pricing';
import HowWeWork from '../components/HowWeWork';
import FaqSection from '../components/FaqSection';

const EASE = 'cubicBezier(0.22, 1, 0.36, 1)';

/**
 * Hero animations (Anime.js).
 * - Left content: plays every time it enters the viewport (same as the old
 *   whileInView with once: false), and resets when it leaves.
 * - Right 3D block: plays once on mount.
 */
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

function Home() {
  const heroRef = useRef(null);
  useHeroAnime(heroRef);

  return (
    <>
      <section className="relative overflow-hidden" ref={heroRef}>
        {/* <ParticleField className="absolute inset-0" /> */}

        <div className="relative mx-auto grid max-w-7xl items-center gap-10 px-6 pb-16 pt-14 lg:grid-cols-[1.05fr_1fr] lg:px-10 lg:pt-16">

          {/* ================= LEFT CONTENT ================= */}
          <div data-a="left">
            {/* Badge */}
            <p
              data-a="badge"
              className="inline-flex rounded-md border border-neon-pink/40 px-3 py-1.5 text-[11px] font-medium tracking-[0.25em] text-neon-pink/90"
            >
              DESIGN • CREATE • ELEVATE
            </p>

            {/* Heading */}
            <h1
              className="mt-6 text-5xl font-extrabold leading-[1.08] tracking-tight sm:text-6xl lg:text-[68px]"
              style={{ perspective: 800 }}
            >
              {["WE DESIGN.", "WE CREATE.", "WE ELEVATE."].map((line, i) => (
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
              Creative digital solutions that inspire, engage and deliver results.
            </p>

            {/* Buttons */}
            <div data-a="buttons" className="mt-9 flex flex-wrap gap-4">
              <GradientButton to="/contact">
                Get Started
              </GradientButton>

              <GradientButton to="/portfolio" variant="outline">
                View Our Work
              </GradientButton>
            </div>
          </div>


          {/* ================= RIGHT 3D ================= */}
          <div style={{ perspective: 1500 }}>
            <div data-a="right">
              <Hero3D />
            </div>
          </div>

        </div>

      </section>
      <NewServicesPopup />

      <StatsBar stats={homeStats} />

      <section
        className="mx-auto mt-20 grid max-w-7xl gap-10 px-6 lg:grid-cols-[0.8fr_2fr] lg:px-10"
        aria-labelledby="home-services"
      >
        {/* LEFT CONTENT */}
        <Reveal direction="left" delay={0}>
          <p className="text-xs font-semibold tracking-[0.15em] text-[#f3a8ff]">
            OUR SERVICES
          </p>

          <h2
            id="home-services"
            className="mt-4 text-3xl font-semibold leading-tight sm:text-[34px]"
          >
            We Provide Best
            <span className="text-[#F648FF] block">
              Services
            </span>
          </h2>

          <p className="mt-6 max-w-[260px] text-md leading-relaxed text-white/70">
            We offer a wide range of creative and digital services to help your
            brand grow and stand out.
          </p>

          <GradientButton
            to="/services"
            arrow
            size="sm"
            className="mt-8"
          >
            Explore Services
          </GradientButton>
        </Reveal>

        {/* SERVICE CARDS */}
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {homeServices.map((s, i) => (
            <Reveal
              key={s.title}
              direction={i % 2 === 0 ? "right" : "left"}
              delay={i * 0.15}
            >
              <ServiceCard service={s} />
            </Reveal>
          ))}
        </div>
      </section>
      <div className="mt-20">
        <Marquee />
      </div>
    

      <div className="mt-20">
        <HowWeWork />
      </div>

      <Reveal delay={0}>
        <div className="mt-20">
          <CTABanner />
        </div>
      </Reveal>
      <div className="mt-20">
        <Pricing/>
      </div>
      <div className="mt-10">
        <FaqSection/>
      </div>

      <div className="mt-10">
        <Review />
      </div>
    </>
  );
}

export default Home;
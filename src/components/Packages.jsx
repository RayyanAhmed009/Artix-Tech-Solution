import { useLayoutEffect, useRef, useState } from "react";
import { animate, utils } from 'animejs';
import {
  Plus, Palette, Globe, PenTool, Sparkles, Check,
  Menu, X, BadgeCheck
} from "lucide-react";
import GradientButton from "./GradientButton";
import Pricing from "./Pricing";
import HowWeWork from "./HowWeWork";
// import "./index.css";

const EASE = 'cubicBezier(0.22, 1, 0.36, 1)';

const leftFaqs = [
  {
    question: "Which package is right for my business?",
    answer:
      "If you're just getting online, start with Starter. If you're established and need custom design and a CMS, Growth is our most popular choice. For custom platforms or e-commerce at scale, choose Scale.",
  },
  {
    question: "Can I upgrade packages later?",
    answer:
      "Yes — every package is built with a clear upgrade path, so moving from Starter to Growth, or Growth to Scale, is straightforward.",
  },
  {
    question: "Can I mix features from different packages?",
    answer:
      "Absolutely. Each package page includes optional add-ons, and Scale projects are fully custom-scoped around your exact needs.",
  },

];

const rightFaqs = [
  {
    question: "Do all packages include support after launch?",
    answer:
      "Yes — every package includes a post-launch support window, from 2 weeks on Starter up to ongoing priority support on Scale.",
  },
  {
    question: "How long each package take to deliver?",
    answer:
      "Starter typically takes 2–3 weeks, Growth 4–5 weeks, and Scale 8–16 weeks depending on project complexity.",
  },
  {
    question: "Can I pay in installments?",
    answer:
      "Yes, flexible payment plans are available across all packages — ask us during your consultation.",
  },


];


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
            className=" text-5xl font-extrabold leading-[1.08] tracking-tight sm:text-5xl lg:text-[68px]"
            style={{ perspective: 800 }}
          >
            {["Your Vision.", "Our Expertise.", "One Price."].map((line, i) => (
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
            className="mt-6 max-w-md text-md tracking-tight leading-relaxed text-white/90"
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

function FaqItem({ faq }) {
  const [open, setOpen] = useState(false);

  return (
    <div
      className={`overflow-hidden rounded-xl border card-glow transition-colors duration-300 ${open
        ? "border-[#d96bff50]"
        : "border-[#d96bff50] hover:border-[#F648FF]"
        }`}
    >
      <button
        type="button"
        onClick={() => setOpen((previous) => !previous)}
        aria-expanded={open}
        className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left sm:px-6 sm:py-5"
      >
        <span className="text-sm font-semibold text-white sm:text-[15px]">
          {faq.question}
        </span>

        <Plus
          className={`h-4 w-4 shrink-0 transition-all duration-300 ${open
            ? "rotate-45 text-purple-600"
            : "rotate-0 text-white"
            }`}
        />
      </button>

      <div
        className={`grid transition-all duration-300 ease-out ${open
          ? "grid-rows-[1fr] opacity-100"
          : "grid-rows-[0fr] opacity-0"
          }`}
      >
        <div className="overflow-hidden">
          <p className="px-5 pb-5 text-sm leading-relaxed text-white sm:px-6 sm:pb-6">
            {faq.answer}
          </p>
        </div>
      </div>
    </div>
  );
}

function FaqSection() {
  return (
    <section className="card-glow">
      <div className="mx-auto max-w-7xl px-4 pb-16 pt-14 sm:px-6 lg:px-8 lg:pb-24 lg:pt-20">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,340px)_1fr] lg:gap-16">

          {/* Section Heading */}
          <div>
            <p className="text-sm font-bold tracking-wide text-[#f3a8ff]">
              Frequently Asked Questions
            </p>

            <h2 className="mt-3 whitespace-nowrap text-2xl text-gradient font-extrabold leading-tight tracking-tight sm:text-3xl lg:text-2xl">
              Your Questions Answered.
            </h2>

            <p className="mt-4 max-w-sm text-sm leading-7 text-white">
              Find answers to common questions about our services,
              development process, pricing and ongoing support.
            </p>
          </div>

          {/* FAQ Columns */}
          <div className="grid gap-4 sm:grid-cols-2 sm:gap-x-6 lg:gap-x-8">

            {/* Left Column */}
            <div className="flex flex-col gap-4">
              {leftFaqs.map((faq) => (
                <FaqItem key={faq.question} faq={faq} />
              ))}
            </div>

            {/* Right Column */}
            <div className="flex flex-col gap-4">
              {rightFaqs.map((faq) => (
                <FaqItem key={faq.question} faq={faq} />
              ))}
            </div>

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

      <Pricing />

      <div className="mt-10">
        <FaqSection />
      </div>

    </div>
  )
}

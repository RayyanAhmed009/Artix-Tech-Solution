import { motion } from "framer-motion";
import {
  Search,
  Palette,
  Code2,
  Rocket,
  ArrowUpRight,
} from "lucide-react";

const steps = [
  {
    number: "01",
    title: "Discover",
    description:
      "We understand your business, goals, audience, and project requirements before creating a strategy.",
    icon: Search,
    tag: "Strategy & Research",
    iconColor: "neon-icon-pink",
  },
  {
    number: "02",
    title: "Design",
    description:
      "We transform ideas into beautiful, intuitive and user-focused digital experiences.",
    icon: Palette,
    tag: "UI/UX & Creativity",
    iconColor: "neon-icon-blue",
  },
  {
    number: "03",
    title: "Develop",
    description:
      "We bring designs to life with clean code, modern technologies and responsive development.",
    icon: Code2,
    tag: "Code & Engineering",
    iconColor: "neon-icon-silver",
  },
  {
    number: "04",
    title: "Launch",
    description:
      "We test, optimize and launch your project, helping you move forward with confidence.",
    icon: Rocket,
    tag: "Testing & Delivery",
    iconColor: "neon-icon-purple",
  },
];

export default function HowWeWork() {
  return (
    <section
      id="process"
      className="mx-auto w-full max-w-7xl px-6 lg:px-10"
    >
      {/* Background glow */}
      <div className="pointer-events-none absolute -left-40 top-20 -z-10 h-80 w-80 rounded-full" />
      <div className="pointer-events-none absolute -right-40 bottom-0 -z-10 h-96 w-96 rounded-full" />

      <div className="mx-auto max-w-7xl">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
          className="mx-auto mb-16 max-w-3xl text-center"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-purple-400/20 bg-purple-500/[0.08] px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-purple-300">
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-fuchsia-400" />
            Our Process
          </span>

          <h2 className="mt-6 text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
            From Vision to{" "}
            <span className="text-gradient bg-clip-text text-transparent">
              Reality.
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-white/55 sm:text-base">
            Great digital products don't happen by accident. We follow
            a thoughtful process to turn your ideas into meaningful
            digital experiences.
          </p>
        </motion.div>

        {/* Steps */}
        <div className="relative grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {/* Connecting line on desktop */}

          {steps.map((step, index) => {
            const Icon = step.icon;

            return (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.12,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="group relative"
              >
                <div className="relative flex h-full flex-col rounded-2xl border border-[#d96bff50] card-glow p-6 transition-all duration-500 hover:-translate-y-2 hover:border-[#d96bff] hover:shadow-[0_20px_70px_-35px_rgba(168,85,247,0.4)] sm:p-7">
                  {/* Number and icon */}
                  <div className="relative z-10 mb-8 flex items-center justify-between">
                    <span className="font-mono text-sm tracking-widest text-white/40">
                      / {step.number}
                    </span>

                    <div className="flex h-12 w-12 items-center justify-center rounded-xl text-purple-300 transition-all duration-500 group-hover:scale-110 group-hover:border-purple-300/50 group-hover:text-pink-300">
                      <step.icon
                        size={30}
                        strokeWidth={1.7}
                        className= {step.iconColor}
                      />
                    </div>
                  </div>

                  <h3 className="text-2xl font-semibold tracking-tight">
                    {step.title}
                  </h3>

                  <p className="mt-4 flex-1 text-sm leading-7 text-white/55">
                    {step.description}
                  </p>

                  <div className="mt-7 flex items-center justify-between border-t border-white/[0.08] pt-5">
                    <span className="text-[10px] font-medium uppercase tracking-[0.12em] text-white/40">
                      {step.tag}
                    </span>

                    <ArrowUpRight
                      size={17}
                      className="text-white/30 transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-purple-300"
                    />
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom CTA */}

      </div>
    </section>
  );
}
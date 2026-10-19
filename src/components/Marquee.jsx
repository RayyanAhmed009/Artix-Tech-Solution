import { motion } from "framer-motion";
import {
  FaReact,
  FaJs,
  FaHtml5,
  FaCss3Alt,
  FaNodeJs,
} from "react-icons/fa";

import {
  SiVite,
  SiTailwindcss,
  SiMongodb,
} from "react-icons/si";
import { TbBrandAdobeIllustrator, TbBrandAdobePhotoshop } from "react-icons/tb";
const technologies = [
  { name: "Photoshop", icon: TbBrandAdobePhotoshop, color: "#31A8FF" },
  { name: "Illustrator", icon: TbBrandAdobeIllustrator, color: "#FF9A00" },
  { name: "React", icon: FaReact, color: "#61DAFB" },
  { name: "JavaScript", icon: FaJs, color: "#F7DF1E" },
  { name: "Tailwind CSS", icon: SiTailwindcss, color: "#38BDF8" },
  { name: "Vite", icon: SiVite, color: "#BD34FE" },
  { name: "Node.js", icon: FaNodeJs, color: "#68A063" },
  { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
  { name: "HTML5", icon: FaHtml5, color: "#E34F26" },
  { name: "CSS3", icon: FaCss3Alt, color: "#1572B6" },
];

export default function Marquee() {

  const items = [...technologies, ...technologies];

  return (

    <motion.section
      initial={{ opacity: 0, x: -70 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: false, amount: 0.2, }}
      transition={{
        duration: 0.9,
        ease: [0.16, 1, 0.3, 1],
      }}

      className="card-glow relative  my-10 overflow-hidden border border-[#d96bff50] py-7"
    >
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{
          duration: 0.7,
          ease: [0.16, 1, 0.3, 1],
        }}
        className="mx-auto mb-10 max-w-7xl text-center"
      >


        <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
          Tools &{" "}
          <span className="bg-gradient-to-r from-[#2aa8f5] via-[#8b5cf6] to-[#d13cf2] bg-clip-text text-transparent">
            Technologies
          </span>
        </h2>



      </motion.div>

      {/* Neon ambient glow */}
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-20 bg-gradient-to-r from-[#080610] to-transparent sm:w-32" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-20 bg-gradient-to-l from-[#080610] to-transparent sm:w-32" />

      <div className="pointer-events-none absolute left-1/2 top-0 h-px w-1/2 -translate-x-1/2 bg-gradient-to-r from-transparent via-fuchsia-500/50 to-transparent" />

      <div className="marquee-track flex w-max items-center">
        {items.map(({ name, icon: Icon, color }, index) => (
          <div
            key={`${name}-${index}`}
            className="tech-marquee-item group flex shrink-0 items-center gap-3 px-6 sm:px-9"
            title={name}
          >
            <Icon
              className="tech-marquee-icon text-[27px] sm:text-[32px]"
              style={{ color }}
            />

            <span className="font-mono text-sm font-medium tracking-wide text-white/65 transition-colors duration-300 group-hover:text-white sm:text-base">
              {name}
            </span>

            <span className="ml-3 h-1.5 w-1.5 rounded-full bg-fuchsia-400/70 shadow-[0_0_10px_#d946ef]" />
          </div>
        ))}
      </div>

      <style>{`
        .marquee-track {
          animation: marquee-scroll 30s linear infinite;
          will-change: transform;
        }

        .tech-marquee-item {
          transition: opacity 250ms ease;
        }

        .tech-marquee-icon {
          filter: drop-shadow(0 0 0 transparent);
          transition:
            filter 250ms ease,
            transform 250ms ease;
        }

        .tech-marquee-item:hover .tech-marquee-icon {
          filter: drop-shadow(0 0 8px currentColor);
          transform: translateY(-2px) scale(1.1);
        }

        @keyframes marquee-scroll {
          from {
            transform: translate3d(0, 0, 0);
          }

          to {
            transform: translate3d(-50%, 0, 0);
          }
        }

       

        @media (prefers-reduced-motion: reduce) {
          .marquee-track {
            animation: none;
          }
        }
      `}</style>
    </motion.section>
  );
}

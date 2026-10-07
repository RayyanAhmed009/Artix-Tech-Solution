import {
  motion,
  useInView,
  useMotionValue,
  animate,
} from "framer-motion";
import { useEffect, useRef, useState } from "react";

export default function StatsBar({ stats }) {
  return (
    <section
      aria-label="Company stats"
      className="mx-auto max-w-7xl px-6 lg:px-10"
    >
      <div className="card-glow grid grid-cols-2 rounded-2xl lg:grid-cols-4 border border-[#d96bff50]">

        {stats.map((s, i) => {
          const Icon = s.icon;

          return (
            <motion.div
              key={s.label}

              initial={{
                opacity: 0,
                y: 60,
                scale: 0.92,
                rotateX: -20,
              }}

              whileInView={{
                opacity: 1,
                y: 0,
                scale: 1,
                rotateX: 0,
              }}

              viewport={{
                once: true,
                amount: 0.25,
              }}

              transition={{
                duration: 1.1,
                delay: i * 0.15,
                ease: [0.16, 1, 0.3, 1],
              }}

              style={{
                transformPerspective: 1000,
              }}

              className={`flex items-center justify-center gap-4 px-4 py-7 ${i < stats.length - 1
                ? "lg:border-r lg:border-white/5"
                : ""
                } ${i % 2 === 0
                  ? "border-r border-white/5 lg:border-r"
                  : ""
                } ${i < 2
                  ? "border-b border-white/5 lg:border-b-0"
                  : ""
                }`}
            >

              {/* ICON */}
              <motion.div
                initial={{
                  opacity: 0,
                  y: 60,
                  scale: 0.92,
                  rotateX: -20,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                  scale: 1,
                  rotateX: 0,
                }}
                viewport={{
                  once: false,
                  amount: 0.25,
                }}
                transition={{
                  duration: 1.1,
                  delay: i * 0.15,
                  ease: [0.16, 1, 0.3, 1],
                }}
              >
                <Icon
                  className="neon-icon-pink h-8 w-8 shrink-0"
                  strokeWidth={1.5}
                  aria-hidden="true"
                />
              </motion.div>


              {/* NUMBER + LABEL */}
              <div>

                <p
                  className="
                text-2xl
                font-bold
                leading-none
                text-[#4cc3ff]
                drop-shadow-[0_0_10px_rgba(42,168,245,0.5)]
                sm:text-3xl
              "
                >
                  <AnimatedNumber
                    value={s.value}
                    start={true}
                  />
                </p>

                <motion.p
                  initial={{
                    opacity: 0,
                    x: -15,
                  }}

                  whileInView={{
                    opacity: 1,
                    x: 0,
                  }}

                  viewport={{
                    once: true,
                    amount: 0.5,
                  }}

                  transition={{
                    duration: 0.7,
                    delay: i * 0.15 + 0.35,
                  }}

                  className="mt-1.5 text-md text-white/75"
                >
                  {s.label}
                </motion.p>

              </div>

            </motion.div>
          );
        })}

      </div>
    </section>
  );

  function AnimatedNumber({ value }) {
    const ref = useRef(null);

    const isInView = useInView(ref, {
      once: false,
      amount: 0.5,
    });

    const [displayValue, setDisplayValue] = useState("0");

    useEffect(() => {
      const match = String(value).match(
        /^([^0-9]*)([\d,.]+)(.*)$/
      );

      if (!match) {
        setDisplayValue(value);
        return;
      }

      const prefix = match[1];
      const numberPart = match[2];
      const suffix = match[3];

      const target = parseFloat(
        numberPart.replace(/,/g, "")
      );

      if (isInView) {
        setDisplayValue(`${prefix}0${suffix}`);

        const startTime = performance.now();
        const duration = 2200;

        let animationFrame;

        const update = (currentTime) => {
          const elapsed = currentTime - startTime;
          const progress = Math.min(elapsed / duration, 1);

          // Smooth ease-out
          const eased =
            1 - Math.pow(1 - progress, 3);

          const current = Math.round(
            target * eased
          );

          setDisplayValue(
            `${prefix}${current.toLocaleString()}${suffix}`
          );

          if (progress < 1) {
            animationFrame =
              requestAnimationFrame(update);
          }
        };

        animationFrame =
          requestAnimationFrame(update);

        return () => {
          cancelAnimationFrame(animationFrame);
        };
      } else {
        setDisplayValue(`${prefix}0${suffix}`);
      }
    }, [isInView, value]);

    return (
      <span ref={ref}>
        {displayValue}
      </span>
    );
  }
}

import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { animate, utils } from "animejs";

const EASE_CARD = "cubicBezier(0.16, 1, 0.3, 1)";

// Fire onEnter when `el` is `threshold` visible. If once=false, onLeave fires when it leaves.
function observe(el, threshold, once, onEnter, onLeave) {
  const io = new IntersectionObserver(
    ([entry]) => {
      if (entry.isIntersecting) {
        onEnter();
        if (once) io.disconnect();
      } else if (!once && onLeave) {
        onLeave();
      }
    },
    { threshold }
  );
  io.observe(el);
  return () => io.disconnect();
}

function toProps(from, to) {
  const props = {};
  Object.keys(from).forEach((k) => {
    props[k] = [from[k], to[k]];
  });
  return props;
}

function StatItem({ s, i, total }) {
  const Icon = s.icon;
  const cardRef = useRef(null);
  const iconRef = useRef(null);
  const labelRef = useRef(null);

  useLayoutEffect(() => {
    const cleanups = [];
    const anims = [];

    const cardFrom = { opacity: 0, translateY: 60, scale: 0.92, rotateX: -20 };
    const cardTo = { opacity: 1, translateY: 0, scale: 1, rotateX: 0 };
    const labelFrom = { opacity: 0, translateX: -15 };
    const labelTo = { opacity: 1, translateX: 0 };

    const run = (el, from, to, opts) => {
      utils.set(el, from);
      const a = animate(el, { ...toProps(from, to), ...opts });
      anims.push(a);
      return a;
    };

    // CARD (plays once, amount 0.25)
    utils.set(cardRef.current, cardFrom);
    cleanups.push(
      observe(cardRef.current, 0.25, true, () => {
        run(cardRef.current, cardFrom, cardTo, {
          duration: 1100,
          delay: i * 150,
          ease: EASE_CARD,
        });
      })
    );

    // ICON (replays every time, amount 0.25)
    utils.set(iconRef.current, cardFrom);
    let iconAnim;
    cleanups.push(
      observe(
        iconRef.current,
        0.25,
        false,
        () => {
          if (iconAnim) iconAnim.cancel();
          utils.set(iconRef.current, cardFrom);
          iconAnim = run(iconRef.current, cardFrom, cardTo, {
            duration: 1100,
            delay: i * 150,
            ease: EASE_CARD,
          });
        },
        () => {
          if (iconAnim) iconAnim.cancel();
          utils.set(iconRef.current, cardFrom);
        }
      )
    );

    // LABEL (plays once, amount 0.5)
    utils.set(labelRef.current, labelFrom);
    cleanups.push(
      observe(labelRef.current, 0.5, true, () => {
        run(labelRef.current, labelFrom, labelTo, {
          duration: 700,
          delay: i * 150 + 350,
          ease: "outCubic",
        });
      })
    );

    return () => {
      cleanups.forEach((fn) => fn());
      anims.forEach((a) => a.cancel());
    };
  }, [i]);

  return (
    <div
      ref={cardRef}
      className={`flex items-center justify-center gap-4 px-4 py-7 ${i < total - 1
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
      <div ref={iconRef}>
        <Icon
          className="neon-icon-pink h-8 w-8 shrink-0"
          strokeWidth={1.5}
          aria-hidden="true"
        />
      </div>

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
          <AnimatedNumber value={s.value} start={true} />
        </p>

        <p ref={labelRef} className="mt-1.5 text-md text-white/75">
          {s.label}
        </p>
      </div>
    </div>
  );
}

export default function StatsBar({ stats }) {
  return (
    <section
      aria-label="Company stats"
      className="mx-auto max-w-7xl px-6 lg:px-10"
    >
      <div
        className="card-glow grid grid-cols-2 rounded-2xl lg:grid-cols-4 border border-[#d96bff50]"
        style={{ perspective: 1000 }}
      >
        {stats.map((s, i) => (
          <StatItem key={s.label} s={s} i={i} total={stats.length} />
        ))}
      </div>
    </section>
  );
}

function AnimatedNumber({ value }) {
  const ref = useRef(null);
  const [displayValue, setDisplayValue] = useState("0");

  useEffect(() => {
    const match = String(value).match(/^([^0-9]*)([\d,.]+)(.*)$/);

    if (!match) {
      setDisplayValue(value);
      return undefined;
    }

    const prefix = match[1];
    const suffix = match[3];
    const target = parseFloat(match[2].replace(/,/g, ""));
    const zero = `${prefix}0${suffix}`;

    setDisplayValue(zero);

    const state = { v: 0 };
    let anim;

    const io = new IntersectionObserver(
      ([entry]) => {
        if (anim) anim.cancel();
        if (entry.isIntersecting) {
          state.v = 0;
          setDisplayValue(zero);
          anim = animate(state, {
            v: target,
            duration: 2200,
            ease: "outCubic",
            onUpdate: () => {
              setDisplayValue(
                `${prefix}${Math.round(state.v).toLocaleString()}${suffix}`
              );
            },
          });
        } else {
          setDisplayValue(zero);
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) io.observe(ref.current);

    return () => {
      io.disconnect();
      if (anim) anim.cancel();
    };
  }, [value]);

  return <span ref={ref}>{displayValue}</span>;
}
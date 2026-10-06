import { motion } from "framer-motion";

export default function Reveal({
  children,
  className = "",
  delay = 0,
  direction = "up",
}) {
  const initialPosition = {
    left: { x: -100, y: 0 },
    right: { x: 100, y: 0 },
    up: { x: 0, y: 60 },
    down: { x: 0, y: -60 },
  };

  return (
    <motion.div
      initial={{
        opacity: 0,
        ...initialPosition[direction],
        scale: 0.95,
      }}
      whileInView={{
        opacity: 1,
        x: 0,
        y: 0,
        scale: 1,
      }}
      viewport={{
        once: false,
        amount: 0.2,
      }}
      transition={{
        duration: 1.5,
        delay,
        ease: [0.16, 1, 0.3, 1],
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
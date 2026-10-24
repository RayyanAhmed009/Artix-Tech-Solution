
import { motion } from "framer-motion";

export default function Loader() {
  return (
   <motion.div
  className="fixed inset-0 z-[99999] flex h-[100dvh] w-full items-center justify-center overflow-hidden bg-[#05040b]"
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  exit={{ opacity: 0 }}
  transition={{ duration: 0.4 }}
>
  {/* Background glow */}
  <div className="pointer-events-none absolute left-1/2 top-1/2 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#8b35f5]/10 blur-[100px]" />

  {/* Centered content */}
  <div className="relative z-10 flex flex-col items-center justify-center">
    {/* Logo */}
    <motion.div
      className="relative flex h-56 w-56 items-center justify-center"
      initial={{ opacity: 0, scale: 0.8, y: 12 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
    >
      <div className="absolute inset-3 rounded-full bg-[#d13cf2]/15 blur-2xl" />

      <motion.div
        className="absolute inset-0 rounded-full border border-white/[0.08] border-t-[#d13cf2] border-r-[#8b35f5]"
        animate={{ rotate: 360 }}
        transition={{
          duration: 5,
          ease: "linear",
          repeat: Infinity,
        }}
      />

      <motion.img
        src="/assets/icon.png"
        alt="Artix Tech Solutions"
        className="relative z-10 h-28 w-28 object-contain"
        animate={{
          filter: [
            "drop-shadow(0 0 5px #d13cf233)",
            "drop-shadow(0 0 16px #8b35f599)",
            "drop-shadow(0 0 5px #d13cf233)",
          ],
        }}
        transition={{ duration: 2.5, repeat: Infinity }}
      />
    </motion.div>

    {/* Loading bar */}
    <div className="relative mt-5 h-[3px] w-36 overflow-hidden rounded-full bg-white/10">
      <motion.div
        className="absolute inset-y-0 left-0 w-1/2 rounded-full bg-gradient-to-r from-[#d13cf2] via-[#8b35f5] to-[#2aa8f5]"
        animate={{ x: ["-100%", "200%"] }}
        transition={{
          duration: 1.3,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
    </div>

    {/* Tagline */}
    <motion.p
      className="mt-5 text-center text-xs font-medium tracking-[0.22em] text-white sm:text-sm"
      animate={{ opacity: [0.4, 1, 0.4] }}
      transition={{ duration: 2, repeat: Infinity }}
    >
      DESIGN. CREATE. ELEVATE.
    </motion.p>
  </div>
</motion.div>
  );
}

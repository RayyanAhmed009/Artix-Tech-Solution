
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const loadingMessages = [
  "CRAFTING DIGITAL EXPERIENCES",
  "BUILDING SOMETHING EXTRAORDINARY",
  "DESIGNING THE FUTURE",
  "ALMOST READY",
];

export default function Loader() {
  const [progress, setProgress] = useState(0);
  const [message, setMessage] = useState(0);

  useEffect(() => {
    const duration = 5000;
    const interval = 80;
    const totalSteps = duration / interval;
    let step = 0;

    const timer = setInterval(() => {
      step++;

      const value = Math.min(
        Math.round((step / totalSteps) * 100),
        100
      );

      setProgress(value);

      if (value >= 100) {
        clearInterval(timer);
      }
    }, interval);

    const messageTimer = setInterval(() => {
      setMessage((prev) => (prev + 1) % loadingMessages.length);
    }, 850);

    return () => {
      clearInterval(timer);
      clearInterval(messageTimer);
    };
  }, []);

  return (
    <motion.div
      className="fixed inset-0 z-[99999] flex h-[100dvh] w-full items-center justify-center overflow-hidden bg-[#03020a]"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6, ease: "easeInOut" }}
    >
      {/* Background gradients */}
      <div className="pointer-events-none absolute inset-0">
        <motion.div
          className="absolute left-1/2 top-1/2 h-[450px] w-[450px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#8b35f5]/10 blur-[130px]"
          animate={{
            scale: [1, 1.25, 1],
            opacity: [0.4, 0.8, 0.4],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        <motion.div
          className="absolute -left-32 top-0 h-72 w-72 rounded-full bg-[#d13cf2]/10 blur-[120px]"
          animate={{
            x: [0, 80, 0],
            y: [0, 60, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
          }}
        />

        <motion.div
          className="absolute -bottom-32 -right-20 h-80 w-80 rounded-full bg-[#2aa8f5]/10 blur-[130px]"
          animate={{
            x: [0, -60, 0],
            y: [0, -50, 0],
          }}
          transition={{
            duration: 7,
            repeat: Infinity,
          }}
        />

        {/* Subtle grid */}
        <div
          className="absolute inset-0 opacity-[0.035]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
            backgroundSize: "55px 55px",
          }}
        />
      </div>

      {/* Main content */}
      <div className="relative z-10 flex w-full max-w-md flex-col items-center px-6">

        {/* Logo animation */}
        <motion.div
          className="relative flex h-64 w-64 items-center justify-center"
          initial={{ opacity: 0, scale: 0.7, y: 25 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{
            duration: 1,
            ease: [0.16, 1, 0.3, 1],
          }}
        >
          {/* Outer rotating ring */}
          <motion.div
            className="absolute inset-1 rounded-full border border-white/[0.04]"
            animate={{ rotate: 360 }}
            transition={{
              duration: 18,
              repeat: Infinity,
              ease: "linear",
            }}
          >
            <div className="absolute left-1/2 top-0 h-2 w-2 -translate-x-1/2 rounded-full bg-[#d13cf2] shadow-[0_0_15px_#d13cf2]" />
          </motion.div>

          {/* Main ring */}
          <motion.div
            className="absolute inset-5 rounded-full border border-white/[0.06] border-t-[#d13cf2] border-r-[#8b35f5]"
            animate={{ rotate: 360 }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "linear",
            }}
          />

          {/* Inner ring */}
          <motion.div
            className="absolute inset-9 rounded-full border border-white/[0.04] border-b-[#2aa8f5]/70"
            animate={{ rotate: -360 }}
            transition={{
              duration: 7,
              repeat: Infinity,
              ease: "linear",
            }}
          />

          {/* Logo glow */}
          <motion.div
            className="absolute inset-12 rounded-full bg-gradient-to-br from-[#d13cf2]/20 via-[#8b35f5]/10 to-[#2aa8f5]/20 blur-2xl"
            animate={{
              scale: [0.9, 1.15, 0.9],
              opacity: [0.4, 0.9, 0.4],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />

          {/* Logo */}
          <motion.img
            src="/assets/icon.png"
            alt="Artix Tech Solutions"
            className="relative z-10 h-28 w-28 object-contain"
            animate={{
              scale: [1, 1.04, 1],
              filter: [
                "drop-shadow(0 0 8px #d13cf244)",
                "drop-shadow(0 0 25px #8b35f599)",
                "drop-shadow(0 0 8px #d13cf244)",
              ],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </motion.div>

        {/* Brand name */}
        <motion.div
          className="-mt-2 text-center"
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.7 }}
        >
         

          <motion.p
          className="mt-4 text-center text-[10px] font-medium tracking-[0.3em] text-white/80 sm:text-xs"
          animate={{
            opacity: [0.5, 1, 0.5],
          }}
          transition={{
            duration: 2.5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          DESIGN.
          <span className="mx-2 text-[#d13cf2]">CREATE.</span>
          <span className="text-[#2aa8f5]">ELEVATE.</span>
        </motion.p>
        </motion.div>

        {/* Animated loading text */}
        <div className="mt-10 flex h-5 items-center justify-center">
          <motion.p
            key={message}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            className="text-center text-[9px] font-medium tracking-[0.25em] text-white/50 sm:text-[10px]"
          >
            {loadingMessages[message]}
          </motion.p>
        </div>

        {/* Progress bar */}
        <div className="mt-5 w-full max-w-[240px]">

          <div className="relative h-[3px] overflow-hidden rounded-full bg-white/[0.07]">

            <motion.div
              className="absolute inset-y-0 left-0 rounded-full bg-gradient-to-r from-[#d13cf2] via-[#8b35f5] to-[#2aa8f5]"
              animate={{ width: `${progress}%` }}
              transition={{
                duration: 0.2,
                ease: "easeOut",
              }}
            />

            {/* Moving highlight */}
            <motion.div
              className="absolute inset-y-0 w-16 bg-gradient-to-r from-transparent via-white/50 to-transparent"
              animate={{ x: ["-100%", "240px"] }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: "linear",
              }}
            />
          </div>

          {/* Percentage */}
        
        </div>

        {/* Tagline */}
       

      </div>

      {/* Bottom branding */}
     
    </motion.div>
  );
}

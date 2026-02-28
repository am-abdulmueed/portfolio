import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";

const Logo = () => {
  return (
    <Link href="/" className="flex items-center gap-1 group text-foreground relative">
      <div className="relative w-10 h-10 flex items-center justify-center">
        {/* Soft Animated Outer Glow */}
        <motion.div
          animate={{ scale: [1, 1.2, 1], opacity: [0.15, 0.3, 0.15] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className="absolute inset-0 bg-primary/30 dark:bg-foreground/20 rounded-full blur-[10px]"
        />
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute inset-0 bg-gradient-to-tr from-transparent via-foreground/5 to-transparent rounded-full border border-foreground/5 dark:border-white/10"
        />

        {/* High-End Polished SVG Logo */}
        <svg
          width="40"
          height="40"
          viewBox="0 0 100 100"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="relative z-10 transition-all duration-500 group-hover:scale-105 group-hover:drop-shadow-[0_0_15px_rgba(var(--nextui-foreground),0.3)]"
        >
          {/* Backdrop Glass Layer */}
          <path
            d="M28 20C28 17.2386 30.2386 15 33 15H58C72.3594 15 84 26.6406 84 41C84 47.95 81.2704 54.2635 76.8122 58.9168C81.8285 63.6743 85 70.4357 85 77.9388C85 89.0177 76.0177 98 64.9388 98H33C30.2386 98 28 95.7614 28 93V20Z"
            fill="currentColor"
            fillOpacity="0.03"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeOpacity="0.3"
          />

          {/* Precision Top Loop */}
          <path
            d="M38 28H58C65.1797 28 71 33.8203 71 41C71 48.1797 65.1797 54 58 54H38V28Z"
            fill="currentColor"
            fillOpacity="0.8"
            className="transition-opacity duration-300 group-hover:opacity-100"
          />

          {/* Precision Bottom Loop */}
          <path
            d="M38 58H65C72.1797 58 78 63.8203 78 71C78 78.1797 72.1797 84 65 84H38V58Z"
            fill="currentColor"
            fillOpacity="0.95"
            className="transition-opacity duration-300 group-hover:opacity-100"
          />

          {/* Animated Tech / Pixel Accents */}
          <rect x="44" y="36" width="6" height="6" rx="1.5" className="fill-background animate-pulse" />
          <rect x="52" y="66" width="6" height="6" rx="1.5" className="fill-background animate-pulse" style={{ animationDelay: '1s' }} />

          {/* Subtle connecting circuit line */}
          <path d="M28 56H38" stroke="currentColor" strokeWidth="2" strokeOpacity="0.5" />
        </svg>
      </div>
    </Link>
  );
};

export default Logo;

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const Logo = ({ pathName }) => {
  const isNexGama = pathName === "/nexgama" || pathName?.startsWith("/nexgama");
  const isMuxio = pathName === "/muxio" || pathName?.startsWith("/nexgama"); // Note: original code has nexgama here, keeping logic as requested or fixing to muxio
  const isMuxioReal = pathName === "/muxio" || pathName?.startsWith("/muxio");
  const isHome = pathName === "/";

  const words = ["BetaPix", "muxio", "Abdul Mueed"];
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (isNexGama || isMuxioReal || isHome) return;
    const t = setInterval(() => {
      setIndex((i) => (i + 1) % words.length);
    }, 2500);
    return () => clearInterval(t);
  }, [isNexGama, isMuxioReal, isHome]);

  const Frame = ({ src, alt, href, label, subLabel, color }) => (
    <Link href={href} className="flex items-center gap-3 group">
      <div className="relative w-10 h-10 md:w-11 md:h-11 flex items-center justify-center overflow-hidden transition-all duration-500 group-hover:scale-110">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={src}
          alt={alt}
          className="w-full h-full object-contain"
        />
      </div>
      <div className="flex flex-col -space-y-1">
        <span className="text-sm md:text-lg font-black italic tracking-tighter uppercase text-foreground leading-tight">{label}</span>
        <span className={`text-[8px] md:text-[9px] font-black uppercase tracking-[0.4em] ${color}`}>{subLabel}</span>
      </div>
    </Link>
  );

  if (isNexGama) {
    return <Frame src="/nexgama/logo.png" alt="NexGama" href="/nexgama" label="NexGama" subLabel="Pro Gaming" color="text-primary" />;
  }

  if (isMuxioReal) {
    return <Frame src="/muxio.png" alt="Muxio" href="/muxio" label="Muxio" subLabel="Music Core" color="text-secondary" />;
  }

  if (isHome) {
    return <Frame src="/nexgama/footer.png" alt="BetaPix" href="/" label="BetaPix" subLabel="Entertainment" color="text-primary" />;
  }

  // Default Fallback (BetaPix Words Cycling)
  return (
    <Link href="/" className="flex items-center gap-2 group text-foreground relative">
      <div className="relative w-10 h-10 flex items-center justify-center">
        <motion.div
          animate={{ scale: [1, 1.2, 1], opacity: [0.15, 0.3, 0.15] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className="absolute inset-0 bg-primary/30 dark:bg-foreground/20 rounded-full blur-[10px]"
        />
        <svg width="32" height="32" viewBox="0 0 100 100" fill="none" className="relative z-10">
          <path d="M28 20C28 17.2386 30.2386 15 33 15H58C72.3594 15 84 26.6406 84 41C84 47.95 81.2704 54.2635 76.8122 58.9168C81.8285 63.6743 85 70.4357 85 77.9388L33 98V20Z" fill="currentColor" opacity="0.1" />
          <path d="M38 28H58C65.1797 28 71 33.8203 71 41C71 48.1797 65.1797 54 58 54H38V28Z" fill="currentColor" />
          <path d="M38 58H65C72.1797 58 78 63.8203 78 71C78 78.1797 72.1797 84 65 84H38V58Z" fill="currentColor" />
        </svg>
      </div>
      <div className="flex items-center h-6 px-3 rounded-full border border-white/10 bg-background/50 backdrop-blur-md overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.span
            key={words[index]}
            initial={{ y: 12, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -12, opacity: 0 }}
            transition={{ duration: 0.35 }}
            className="text-[10px] font-bold tracking-wide uppercase"
          >
            {words[index]}
          </motion.span>
        </AnimatePresence>
      </div>
    </Link>
  );
};

export default Logo;

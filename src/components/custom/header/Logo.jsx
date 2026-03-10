import React, { useEffect, useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const Logo = ({ pathName }) => {
  const isNexGama = pathName === "/nexgama" || pathName?.startsWith("/nexgama");
  const isMuxio = pathName === "/muxio" || pathName?.startsWith("/muxio");
  const isHome = pathName === "/";

  const words = ["BetaPix", "muxio", "NexGama", "Abdul Mueed"];
  const [index, setIndex] = useState(0);

  useEffect(() => {
    // Rotating words now show on Home and other pages (not NexGama/Muxio specific views)
    if (isNexGama || isMuxio) return;
    const t = setInterval(() => {
      setIndex((i) => (i + 1) % words.length);
    }, 2500);
    return () => clearInterval(t);
  }, [isNexGama, isMuxio]);

  const Frame = ({ src, alt, href, label, subLabel, color, showRotating = false }) => (
    <div className="flex items-center gap-3">
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
          <span className={`text-sm md:text-lg font-black italic tracking-tighter uppercase leading-tight text-foreground group-hover:text-primary transition-colors`}>{label}</span>
          <span className={`text-[8px] md:text-[9px] font-black uppercase tracking-[0.4em] ${color === 'text-secondary' ? 'text-purple-500' : color}`}>{subLabel}</span>
        </div>
      </Link>

      {showRotating && (
        <div className="flex items-center h-8 px-3 rounded-full border border-black/5 dark:border-white/10 bg-black/5 dark:bg-white/5 backdrop-blur-md overflow-hidden ml-1 hidden md:flex">
          <AnimatePresence mode="wait">
            <motion.span
              key={words[index]}
              initial={{ y: 12, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -12, opacity: 0 }}
              transition={{ duration: 0.35 }}
              className="text-[10px] font-bold tracking-wide uppercase text-foreground/80"
            >
              {words[index]}
            </motion.span>
          </AnimatePresence>
        </div>
      )}
    </div>
  );

  if (isNexGama) {
    return <Frame src="/nexgama/logo.png" alt="NexGama" href="/nexgama" label="NexGama" subLabel="Pro Gaming" color="text-primary" />;
  }

  if (isMuxio) {
    return <Frame src="/muxio.png" alt="Muxio" href="/muxio" label="Muxio" subLabel="Music Core" color="text-secondary" />;
  }

  // Home Page and Default Fallback (Both now have the BetaPix Logo + Rotating Name)
  return (
    <Frame
      src="/nexgama/footer.png"
      alt="BetaPix"
      href="/"
      label="BetaPix"
      subLabel="Entertainment"
      color="text-primary dark:text-primary"
      showRotating={true}
    />
  );
};

export default Logo;

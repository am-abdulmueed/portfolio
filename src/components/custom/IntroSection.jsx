"use client";
import React from "react";
import { motion } from "framer-motion";
import HomeHeading from "./typo/HomeHeading";
import Image from "next/image";
import { MdAutoAwesome } from "react-icons/md";

const IntroSection = () => {
  return (
    <section className="intro-section relative min-h-[90vh] flex items-center overflow-hidden pt-28 md:pt-20">
      {/* Dynamic Background */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/10 via-background to-background"></div>

      {/* Animated Grid Pattern */}
      <div className="absolute inset-0 -z-10 opacity-[0.03] dark:opacity-[0.05]"
        style={{
          backgroundImage: `linear-gradient(to right, #888 1px, transparent 1px), linear-gradient(to bottom, #888 1px, transparent 1px)`,
          backgroundSize: '40px 40px'
        }}
      />

      {/* Modern Mesh Gradient */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full -z-10 opacity-30 blur-[120px]">
        <div className="absolute top-0 right-0 w-[40%] h-[40%] bg-gradient-to-br from-primary via-secondary to-transparent rounded-full animate-pulse" />
        <div className="absolute bottom-0 left-0 w-[40%] h-[40%] bg-gradient-to-tr from-secondary via-primary to-transparent rounded-full animate-pulse delay-700" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <HomeHeading />
          </motion.div>

          <motion.div
            className="relative perspective-1000 hidden lg:block"
            initial={{ opacity: 0, scale: 0.9, rotateY: 10 }}
            animate={{ opacity: 1, scale: 1, rotateY: 0 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
          >
            {/* Glow beneath the image */}
            <div className="absolute -inset-10 bg-primary/20 rounded-full blur-[100px] animate-pulse duration-[4000ms]"></div>

            <motion.div
              whileHover={{ rotateY: -10, rotateX: 5, scale: 1.05 }}
              transition={{ type: "spring", stiffness: 100, damping: 20 }}
              className="relative z-10"
            >
              <Image
                src="/mockup/intro.png"
                alt="Muxio App Interface"
                width={800}
                height={750}
                className="drop-shadow-[0_20px_50px_rgba(0,0,0,0.5)] rounded-2xl md:rounded-3xl transform shadow-2xl"
                priority
              />

              {/* Floating Badge on Image - Repositioned to Bottom Right */}
              <motion.div
                className="absolute -bottom-10 -right-10 p-5 bg-background/60 backdrop-blur-2xl border border-white/10 rounded-[2rem] shadow-2xl z-20 flex items-center gap-4 transition-all hover:bg-background/80"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              >
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-white shadow-lg">
                  <MdAutoAwesome size={24} />
                </div>
                <div>
                  <p className="text-[10px] font-black text-primary uppercase tracking-[0.2em] leading-none mb-1">Status</p>
                  <p className="text-sm font-black uppercase tracking-tight">Verified Project</p>
                  <p className="text-[10px] font-bold opacity-50">MUXIO v2.0.7</p>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default IntroSection;

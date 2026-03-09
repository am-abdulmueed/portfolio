"use client";
import React from "react";
import { Button, Card, CardBody, Chip } from "@nextui-org/react";
import { Play, Music, Gamepad2, ArrowRight, Zap, Sparkles, Trophy, Cpu } from "lucide-react";
import NextLink from "next/link";
import { motion } from "framer-motion";

export default function RootHome() {
  return (
    <main className="relative min-h-screen bg-background overflow-hidden transition-colors duration-700">
      {/* Cinematic Noise Texture */}
      <div className="fixed inset-0 z-[1] pointer-events-none opacity-[0.03] dark:opacity-[0.05] bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />

      {/* Dynamic Background Architecture */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-primary/5 via-background to-secondary/5" />

        {/* Adaptive Fluid Blobs */}
        <motion.div
          animate={{
            x: [0, 100, 0],
            y: [0, -50, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -top-[10%] -left-[10%] w-[70vw] h-[70vw] bg-primary/10 dark:bg-primary/5 rounded-full blur-[160px]"
        />
        <motion.div
          animate={{
            x: [0, -100, 0],
            y: [0, 50, 0],
            scale: [1.1, 1, 1.1],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -bottom-[10%] -right-[10%] w-[60vw] h-[60vw] bg-secondary/10 dark:bg-secondary/5 rounded-full blur-[160px]"
        />
      </div>

      <div className="container mx-auto px-6 pt-48 pb-40 relative z-10 flex flex-col items-center text-center max-w-7xl">
        {/* Elite Badge */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-12 inline-flex items-center gap-4 px-8 py-3 rounded-full bg-white/[0.03] dark:bg-white/[0.01] border border-black/5 dark:border-white/5 backdrop-blur-3xl shadow-2xl"
        >
          <Sparkles size={20} className="text-primary animate-pulse" />
          <span className="text-[10px] md:text-sm font-black uppercase tracking-[0.6em] text-foreground/60">Elite Digital Ecosystem</span>
        </motion.div>

        {/* Hero Title - Redefined */}
        <div className="relative mb-16 px-4">
          <h1 className="text-7xl md:text-[12rem] font-black italic uppercase tracking-[ -0.05em] leading-[0.8] mb-4">
            <motion.span
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
              className="block text-foreground"
            >Crafting</motion.span>
            <motion.span
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="bg-clip-text text-transparent bg-gradient-to-r from-primary via-foreground to-secondary animate-gradient-x"
            >The Future</motion.span>
          </h1>
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: "100%" }}
            transition={{ duration: 1.5, delay: 0.5 }}
            className="h-1 bg-gradient-to-r from-transparent via-primary/50 to-transparent mt-8"
          />
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="max-w-3xl text-default-500 text-lg md:text-2xl font-medium leading-relaxed mb-24 px-6 border-l-2 border-primary/20"
        >
          Where extreme engineering meets cinematic artistry. <br className="hidden md:block" />
          Step into the next generation of high-performance digital experiences.
        </motion.p>

        {/* Entry Grid - Ultra Premium */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 w-full mb-32">
          {/* NexGama - Pro Gaming */}
          <Card
            as={NextLink}
            href="/nexgama"
            className="group relative min-h-[500px] md:min-h-[600px] border-none bg-transparent overflow-hidden rounded-[3rem] md:rounded-[4rem] cursor-none md:cursor-pointer"
          >
            <div className="absolute inset-0 bg-content1/40 dark:bg-white/[0.01] backdrop-blur-3xl border border-black/5 dark:border-white/5 group-hover:bg-primary/5 group-hover:border-primary/40 transition-all duration-700" />

            {/* Brand Glow */}
            <div className="absolute -inset-20 bg-primary/20 rounded-full blur-[100px] opacity-0 group-hover:opacity-100 transition-opacity duration-1000 -z-10" />

            <CardBody className="p-12 md:p-20 flex flex-col justify-between relative z-10">
              <div className="absolute top-0 right-0 p-16 opacity-[0.02] group-hover:opacity-10 group-hover:scale-125 group-hover:rotate-12 transition-all duration-1000">
                <Gamepad2 size={400} />
              </div>

              <div className="space-y-6 text-left">
                <div className="inline-flex px-6 py-2 rounded-full bg-primary/20 border border-primary/30 backdrop-blur-md">
                  <span className="text-[10px] md:text-xs font-black uppercase tracking-widest text-primary">High-Performance Gaming</span>
                </div>
                <h2 className="text-5xl sm:text-6xl md:text-8xl lg:text-[7rem] font-black italic uppercase tracking-tighter leading-none group-hover:skew-x-2 transition-transform duration-500 break-words">NexGama</h2>
                <p className="text-default-500 text-lg md:text-xl font-medium leading-relaxed max-w-sm">
                  1000+ elite PC-grade titles. Zero latency. Instant web scale rendering.
                </p>
              </div>

              <div className="flex justify-between items-end gap-6">
                <div className="flex gap-8 md:gap-12">
                  <div className="flex flex-col">
                    <span className="text-3xl md:text-5xl font-black italic text-foreground leading-none">1.2K+</span>
                    <span className="text-[10px] md:text-xs uppercase tracking-[0.3em] font-black text-primary mt-2">Active Titles</span>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-3xl md:text-5xl font-black italic text-foreground leading-none">PRO</span>
                    <span className="text-[10px] md:text-xs uppercase tracking-[0.3em] font-black text-secondary mt-2">Engine</span>
                  </div>
                </div>
                <div className="w-16 h-16 md:w-24 md:h-24 flex-shrink-0 rounded-full bg-foreground text-background flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-700 shadow-3xl group-hover:scale-110">
                  <ArrowRight className="w-8 h-8 md:w-12 md:h-12" />
                </div>
              </div>
            </CardBody>
          </Card>

          {/* Muxio - Audio Architecture */}
          <Card
            as={NextLink}
            href="/muxio"
            className="group relative min-h-[500px] md:min-h-[600px] border-none bg-transparent overflow-hidden rounded-[3rem] md:rounded-[4rem]"
          >
            <div className="absolute inset-0 bg-content1/40 dark:bg-white/[0.01] backdrop-blur-3xl border border-black/5 dark:border-white/5 group-hover:bg-secondary/5 group-hover:border-secondary/40 transition-all duration-700" />

            {/* Brand Glow */}
            <div className="absolute -inset-20 bg-secondary/20 rounded-full blur-[100px] opacity-0 group-hover:opacity-100 transition-opacity duration-1000 -z-10" />

            <CardBody className="p-12 md:p-20 flex flex-col justify-between relative z-10">
              <div className="absolute top-0 right-0 p-16 opacity-[0.02] group-hover:opacity-10 group-hover:scale-125 group-hover:-rotate-12 transition-all duration-1000">
                <Music size={400} />
              </div>

              <div className="space-y-6 text-left">
                <div className="inline-flex px-6 py-2 rounded-full bg-secondary/20 border border-secondary/30 backdrop-blur-md">
                  <span className="text-[10px] md:text-xs font-black uppercase tracking-widest text-secondary">Cinematic Soundscape</span>
                </div>
                <h2 className="text-5xl sm:text-6xl md:text-8xl lg:text-[7rem] font-black italic uppercase tracking-tighter leading-none group-hover:-skew-x-2 transition-transform duration-500 break-words">Muxio</h2>
                <p className="text-default-500 text-lg md:text-xl font-medium leading-relaxed max-w-sm">
                  Pure high-fidelity audio environment. Engineered for clarity, speed, and immersion.
                </p>
              </div>

              <div className="flex justify-between items-end gap-6">
                <div className="flex gap-8 md:gap-12">
                  <div className="flex flex-col">
                    <span className="text-3xl md:text-5xl font-black italic text-foreground leading-none">Hi-Fi</span>
                    <span className="text-[10px] md:text-xs uppercase tracking-[0.3em] font-black text-secondary mt-2">Bitrate</span>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-3xl md:text-5xl font-black italic text-foreground leading-none">ZERO</span>
                    <span className="text-[10px] md:text-xs uppercase tracking-[0.3em] font-black text-primary mt-2">Loss</span>
                  </div>
                </div>
                <div className="w-16 h-16 md:w-24 md:h-24 flex-shrink-0 rounded-full bg-foreground text-background flex items-center justify-center group-hover:bg-secondary group-hover:text-secondary-foreground transition-all duration-700 shadow-3xl group-hover:scale-110">
                  <ArrowRight className="w-8 h-8 md:w-12 md:h-12" />
                </div>
              </div>
            </CardBody>
          </Card>
        </div>

        {/* System Architecture Bar - Ultra Responsive */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          className="w-full flex flex-col md:flex-row justify-center items-center gap-8 md:gap-12 py-10 px-6 md:px-16 rounded-[2.5rem] md:rounded-[3rem] bg-content1/20 border border-white/5 backdrop-blur-3xl shadow-3xl"
        >
          <div className="flex items-center gap-4 shrink-0 transition-all">
            <div className="w-3 h-3 rounded-full bg-green-500 shadow-[0_0_15px_rgba(34,197,94,0.5)] animate-pulse" />
            <span className="text-[10px] md:text-xs font-black uppercase tracking-[0.4em] text-foreground/80">Systems Fully Operational</span>
          </div>

          <div className="hidden md:block w-px h-6 bg-white/10 shrink-0" />

          <div className="flex flex-wrap justify-center items-center gap-6 md:gap-10">
            <div className="flex items-center gap-3 group transition-all">
              <Cpu size={20} className="text-primary group-hover:scale-110 transition-transform" />
              <span className="text-[9px] md:text-[10px] font-black uppercase tracking-widest text-default-400">Core v2.1.0_LATEST</span>
            </div>
            <div className="flex items-center gap-3 group transition-all">
              <Zap size={20} className="text-secondary group-hover:scale-110 transition-transform" />
              <span className="text-[9px] md:text-[10px] font-black uppercase tracking-widest text-default-400">Low Latency</span>
            </div>
            <div className="flex items-center gap-3 group transition-all">
              <Sparkles size={20} className="text-yellow-500 group-hover:scale-110 transition-transform" />
              <span className="text-[9px] md:text-[10px] font-black uppercase tracking-widest text-default-400">AI Driven UX</span>
            </div>
          </div>
        </motion.div>
      </div>
    </main>
  );
}

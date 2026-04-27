"use client";
import React from "react";
import { Button, Card, CardBody, Chip } from "@nextui-org/react";
import { Play, Music, Gamepad2, ArrowRight, Zap, Sparkles, Trophy, Cpu, Layers } from "lucide-react";
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
          className="mb-12 inline-flex items-center gap-4 px-4 md:px-8 py-3 rounded-full bg-white/[0.03] dark:bg-white/[0.01] border border-black/5 dark:border-white/5 backdrop-blur-3xl shadow-2xl"
        >
          <Sparkles size={20} className="text-primary animate-pulse" />
          <span className="text-[10px] md:text-sm font-black uppercase tracking-[0.2em] md:tracking-[0.6em] text-foreground/60">Elite Digital Ecosystem</span>
        </motion.div>

        {/* Hero Title - Redefined */}
        <div className="relative mb-16 px-4">
          <h1 className="text-5xl sm:text-7xl md:text-[12rem] font-black italic uppercase tracking-[-0.05em] leading-[0.8] mb-4">
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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 w-full mb-32">
          {/* NexGama - Pro Gaming */}
          <Card
            as={NextLink}
            href="/nexgama"
            className="group relative min-h-[400px] md:min-h-[520px] border-none bg-transparent overflow-hidden rounded-[2.5rem] md:rounded-[3.5rem] cursor-none md:cursor-pointer shadow-xl dark:shadow-none"
          >
            <div className="absolute inset-0 bg-white/80 dark:bg-white/[0.02] backdrop-blur-2xl border border-black/5 dark:border-white/10 group-hover:bg-primary/5 group-hover:border-primary/30 transition-all duration-500" />

            {/* Brand Glow */}
            <div className="absolute -top-20 -right-20 w-64 h-64 bg-primary/20 rounded-full blur-[80px] opacity-0 group-hover:opacity-100 transition-opacity duration-700 -z-10" />

            <CardBody className="p-8 md:p-10 flex flex-col justify-between relative z-10">
              <div className="absolute top-0 right-0 p-8 opacity-[0.03] group-hover:opacity-10 group-hover:scale-110 group-hover:rotate-12 transition-all duration-700">
                <Gamepad2 size={320} />
              </div>

              <div className="space-y-4 text-left">
                <div className="inline-flex px-4 py-1.5 rounded-full bg-primary/10 dark:bg-primary/20 border border-primary/20 backdrop-blur-md">
                  <span className="text-[9px] md:text-xs font-black uppercase tracking-widest text-primary-600 dark:text-primary-400">Pro Gaming</span>
                </div>
                <h2 className="text-5xl md:text-7xl font-black italic uppercase tracking-tighter leading-[0.9] group-hover:skew-x-1 transition-transform duration-500 break-words">NexGama</h2>
                <p className="text-default-500 text-sm md:text-base font-medium leading-relaxed max-w-[260px]">
                  1000+ elite PC titles. Zero latency streaming.
                </p>
              </div>

              <div className="flex justify-between items-end gap-4 mt-4">
                <div className="flex gap-6 md:gap-10">
                  <div className="flex flex-col">
                    <span className="text-2xl md:text-4xl font-black italic text-foreground leading-none">1.2K+</span>
                    <span className="text-[8px] md:text-[10px] uppercase tracking-widest font-black text-primary mt-2">Titles</span>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-2xl md:text-4xl font-black italic text-foreground leading-none">PRO</span>
                    <span className="text-[8px] md:text-[10px] uppercase tracking-widest font-black text-secondary mt-2">Engine</span>
                  </div>
                </div>
                <div className="w-14 h-14 md:w-16 md:h-16 flex-shrink-0 rounded-[1.2rem] bg-foreground text-background flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-500 shadow-xl group-hover:scale-105">
                  <ArrowRight className="w-7 h-7 md:w-8 md:h-8" />
                </div>
              </div>
            </CardBody>
          </Card>

          {/* Muxio - Audio Architecture */}
          <Card
            as={NextLink}
            href="/muxio"
            className="group relative min-h-[400px] md:min-h-[520px] border-none bg-transparent overflow-hidden rounded-[2.5rem] md:rounded-[3.5rem] shadow-xl dark:shadow-none"
          >
            <div className="absolute inset-0 bg-white/80 dark:bg-white/[0.02] backdrop-blur-2xl border border-black/5 dark:border-white/10 group-hover:bg-secondary/5 group-hover:border-secondary/30 transition-all duration-500" />

            {/* Brand Glow */}
            <div className="absolute -top-20 -right-20 w-64 h-64 bg-secondary/20 rounded-full blur-[80px] opacity-0 group-hover:opacity-100 transition-opacity duration-700 -z-10" />

            <CardBody className="p-8 md:p-10 flex flex-col justify-between relative z-10">
              <div className="absolute top-0 right-0 p-8 opacity-[0.03] group-hover:opacity-10 group-hover:scale-110 group-hover:-rotate-12 transition-all duration-700">
                <Music size={320} />
              </div>

              <div className="space-y-4 text-left">
                <div className="inline-flex px-4 py-1.5 rounded-full bg-secondary/10 dark:bg-secondary/20 border border-secondary/20 backdrop-blur-md">
                  <span className="text-[9px] md:text-xs font-black uppercase tracking-widest text-secondary-600 dark:text-secondary-400">Hi-Fi Audio</span>
                </div>
                <h2 className="text-5xl md:text-7xl font-black italic uppercase tracking-tighter leading-[0.9] group-hover:-skew-x-1 transition-transform duration-500 break-words">Muxio</h2>
                <p className="text-default-500 text-sm md:text-base font-medium leading-relaxed max-w-[260px]">
                  Pure high-fidelity sound. Engineered for immersion.
                </p>
              </div>

              <div className="flex justify-between items-end gap-4 mt-4">
                <div className="flex gap-6 md:gap-10">
                  <div className="flex flex-col">
                    <span className="text-2xl md:text-4xl font-black italic text-foreground leading-none">Hi-Fi</span>
                    <span className="text-[8px] md:text-[10px] uppercase tracking-widest font-black text-secondary mt-2">Bitrate</span>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-2xl md:text-4xl font-black italic text-foreground leading-none">ZERO</span>
                    <span className="text-[8px] md:text-[10px] uppercase tracking-widest font-black text-primary mt-2">Loss</span>
                  </div>
                </div>
                <div className="w-14 h-14 md:w-16 md:h-16 flex-shrink-0 rounded-[1.2rem] bg-foreground text-background flex items-center justify-center group-hover:bg-secondary group-hover:text-secondary-foreground transition-all duration-500 shadow-xl group-hover:scale-105">
                  <ArrowRight className="w-7 h-7 md:w-8 md:h-8" />
                </div>
              </div>
            </CardBody>
          </Card>

          {/* PluginStream - Cinematic Engine */}
          <Card
            as={NextLink}
            href="/pluginstream"
            className="group relative min-h-[400px] md:min-h-[520px] border-none bg-transparent overflow-hidden rounded-[2.5rem] md:rounded-[3.5rem] shadow-xl dark:shadow-none"
          >
            <div className="absolute inset-0 bg-white/80 dark:bg-white/[0.02] backdrop-blur-2xl border border-black/5 dark:border-white/10 group-hover:bg-red-500/5 group-hover:border-red-500/30 transition-all duration-500" />

            {/* Brand Glow */}
            <div className="absolute -top-20 -right-20 w-64 h-64 bg-red-500/20 rounded-full blur-[80px] opacity-0 group-hover:opacity-100 transition-opacity duration-700 -z-10" />

            <CardBody className="p-8 md:p-10 flex flex-col justify-between relative z-10">
              <div className="absolute top-0 right-0 p-8 opacity-[0.03] group-hover:opacity-10 group-hover:scale-110 group-hover:rotate-6 transition-all duration-700">
                <Layers size={320} />
              </div>

              <div className="space-y-4 text-left">
                <div className="inline-flex px-4 py-1.5 rounded-full bg-red-500/10 dark:bg-red-500/20 border border-red-500/20 backdrop-blur-md">
                  <span className="text-[9px] md:text-xs font-black uppercase tracking-widest text-red-600 dark:text-red-400">Cinema</span>
                </div>
                <h2 className="text-5xl md:text-7xl font-black italic uppercase tracking-tighter leading-[0.9] group-hover:skew-x-1 transition-transform duration-500 break-words">PluginStream</h2>
                <p className="text-default-500 text-sm md:text-base font-medium leading-relaxed max-w-[260px]">
                  100+ premium plugins for Netflix, Prime & more.
                </p>
              </div>

              <div className="flex justify-between items-end gap-4 mt-4">
                <div className="flex gap-6 md:gap-10">
                  <div className="flex flex-col">
                    <span className="text-2xl md:text-4xl font-black italic text-foreground leading-none">100+</span>
                    <span className="text-[8px] md:text-[10px] uppercase tracking-widest font-black text-red-500 mt-2">Plugins</span>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-2xl md:text-4xl font-black italic text-foreground leading-none">4K</span>
                    <span className="text-[8px] md:text-[10px] uppercase tracking-widest font-black text-purple-500 mt-2">UHD</span>
                  </div>
                </div>
                <div className="w-14 h-14 md:w-16 md:h-16 flex-shrink-0 rounded-[1.2rem] bg-foreground text-background flex items-center justify-center group-hover:bg-red-600 group-hover:text-white transition-all duration-500 shadow-xl group-hover:scale-105">
                  <ArrowRight className="w-7 h-7 md:w-8 md:h-8" />
                </div>
              </div>
            </CardBody>
          </Card>
        </div>

        {/* System Architecture Bar - Ultra Responsive */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          className="w-full flex flex-col md:flex-row justify-center items-center gap-8 md:gap-12 py-10 px-6 md:px-16 rounded-[2.5rem] md:rounded-[3rem] bg-content1/70 dark:bg-content1/20 border border-black/10 dark:border-white/5 backdrop-blur-3xl shadow-2xl"
        >
          <div className="flex items-center gap-4 shrink-0 transition-all">
            <div className="w-3 h-3 rounded-full bg-green-500 shadow-[0_0_15px_rgba(34,197,94,0.5)] animate-pulse" />
            <span className="text-[10px] md:text-xs font-black uppercase tracking-[0.4em] text-foreground/80">Systems Fully Operational</span>
          </div>

          <div className="hidden md:block w-px h-6 bg-black/5 dark:bg-white/10 shrink-0" />

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

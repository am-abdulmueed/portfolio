"use client";
import React from "react";
import { motion } from "framer-motion";
import { Button } from "@nextui-org/react";
import { Gamepad2, Zap, Shield, Play, Cpu } from "lucide-react";
import { FaGooglePlay } from "react-icons/fa";
import Image from "next/image";

const NexGamaHero = ({ onLaunchDeckClick }) => {
    return (
        <section className="relative min-h-[90vh] flex flex-col items-center justify-center pt-32 pb-20 overflow-hidden">
            {/* Background Ambience */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full -z-10 opacity-30 pointer-events-none">
                <div className="absolute top-[-10%] left-[-10%] w-[800px] h-[800px] bg-primary/20 rounded-full blur-[160px] animate-pulse" />
                <div className="absolute bottom-[-10%] right-[-10%] w-[600px] h-[600px] bg-secondary/10 rounded-full blur-[140px]" />
            </div>

            <div className="container mx-auto px-6 max-w-7xl relative z-10 flex flex-col items-center text-center space-y-12">
                {/* Animated Badge */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="px-6 py-2 rounded-full bg-primary/10 border border-primary/20 backdrop-blur-3xl flex items-center gap-2 group"
                >
                    <Gamepad2 className="text-primary group-hover:rotate-12 transition-transform" size={16} />
                    <span className="text-[10px] md:text-xs font-black uppercase tracking-[0.4em] text-primary">NexGama Gaming Engine</span>
                </motion.div>

                {/* Hero Title */}
                <div className="space-y-6">
                    <motion.h1
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="text-4xl sm:text-6xl md:text-9xl font-black italic tracking-tighter leading-[0.9] uppercase bg-clip-text text-transparent bg-gradient-to-br from-foreground via-foreground/80 to-muted-foreground"
                    >
                        Instantly <br />
                        <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary via-secondary to-primary animate-gradient">Evolution</span>
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.2 }}
                        className="text-foreground/70 text-sm md:text-2xl font-medium max-w-2xl mx-auto leading-relaxed px-4 md:px-0"
                    >
                        Experience 1000+ professional level games directly in your browser. No installs, no permissions, just high-performance Unity & Unreal Engine games.
                    </motion.p>
                </div>

                {/* Action Buttons */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    className="flex flex-col sm:flex-row items-center gap-6"
                >
                    <Button
                        size="lg"
                        radius="full"
                        onClick={onLaunchDeckClick}
                        className="h-16 px-10 bg-foreground text-background font-black text-lg uppercase tracking-widest shadow-2xl hover:scale-105 transition-transform"
                        endContent={<Cpu size={22} className="fill-none" />}
                    >
                        Launch NexGama
                    </Button>
                    <Button
                        size="lg"
                        radius="full"
                        as="a"
                        href="https://play.google.com/store/apps/details?id=com.betapix.nexgama"
                        target="_blank"
                        variant="bordered"
                        className="h-16 px-10 border-2 border-foreground text-foreground font-black text-lg uppercase tracking-widest hover:bg-foreground hover:text-background transition-all"
                        startContent={<FaGooglePlay size={20} />}
                    >
                        Download App
                    </Button>
                    <div className="flex -space-x-3 mt-4 sm:mt-0">
                        {[1, 2, 3, 4].map((i) => (
                            <div key={i} className="w-8 h-8 md:w-10 md:h-10 rounded-full border-2 border-background overflow-hidden relative">
                                <img src={`/nexgama/${i}.png`} alt={`Player ${i}`} className="w-full h-full object-cover" />
                            </div>
                        ))}
                        <div className="h-8 md:h-10 px-3 md:px-4 rounded-full bg-default-100 flex items-center justify-center text-[8px] md:text-[10px] font-black uppercase border-2 border-background">
                            +20K Players
                        </div>
                    </div>
                </motion.div>

                {/* Hero Image / Video Mockup */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                    className="relative w-full max-w-5xl aspect-video rounded-[3rem] overflow-hidden border-2 border-white/10 shadow-3xl mt-20 group"
                >
                    <img
                        src="/nexgama/image.jpg"
                        alt="NexGama Gameplay Preview"
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-60" />
                    <div className="absolute bottom-4 left-4 right-4 md:bottom-10 md:left-10 md:right-auto p-3 md:p-4 backdrop-blur-xl bg-black/20 md:bg-white/5 border border-white/10 rounded-xl md:rounded-2xl flex items-center justify-center md:justify-start gap-4 md:gap-6">
                        <div className="flex items-center gap-1.5 md:gap-2">
                            <Zap className="text-primary" size={16} md={20} />
                            <span className="text-[10px] md:text-sm font-black uppercase tracking-widest text-white">Low Latency</span>
                        </div>
                        <div className="w-px h-4 md:h-6 bg-white/20" />
                        <div className="flex items-center gap-1.5 md:gap-2">
                            <Shield className="text-secondary" size={16} md={20} />
                            <span className="text-[10px] md:text-sm font-black uppercase tracking-widest text-white">No Sandbox</span>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default NexGamaHero;

"use client";
import React from "react";
import { motion } from "framer-motion";
import { Button, Chip } from "@nextui-org/react";
import { Play, Shield, Zap, Globe, Sparkles } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const PluginStreamHero = () => {
    const scrollToSearch = () => {
        const element = document.getElementById('plugin-search');
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <section className="relative min-h-[90vh] flex flex-col items-center justify-center pt-32 pb-20 overflow-hidden">
            {/* Background Ambience */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full -z-10 opacity-30 pointer-events-none">
                <div className="absolute top-[-10%] left-[-10%] w-[800px] h-[800px] bg-red-500/10 rounded-full blur-[160px] animate-pulse" />
                <div className="absolute bottom-[-10%] right-[-10%] w-[600px] h-[600px] bg-blue-500/10 rounded-full blur-[140px]" />
            </div>

            <div className="container mx-auto px-6 max-w-7xl relative z-10 flex flex-col items-center text-center space-y-12">
                {/* Animated Badge */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="px-6 py-2 rounded-full bg-red-500/10 border border-red-500/20 backdrop-blur-3xl flex items-center gap-2 group"
                >
                    <Sparkles className="text-red-500 group-hover:rotate-12 transition-transform" size={16} />
                    <span className="text-[10px] md:text-xs font-black uppercase tracking-[0.4em] text-red-500">PluginStream Premium</span>
                </motion.div>

                {/* Hero Title */}
                <div className="space-y-6">
                    <motion.h1
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="text-[2.6rem] sm:text-7xl md:text-8xl lg:text-9xl font-black italic tracking-tighter leading-[0.85] uppercase bg-clip-text text-transparent bg-gradient-to-br from-foreground via-foreground/80 to-muted-foreground"
                    >
                        Unlimited <br />
                        <span className="bg-clip-text text-transparent bg-gradient-to-r from-red-600 via-purple-600 to-blue-600 animate-gradient-x">Streaming</span>
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.2 }}
                        className="text-foreground/70 text-sm md:text-2xl font-medium max-w-3xl mx-auto leading-relaxed px-4 md:px-0"
                    >
                        100+ premium plugins for Netflix, Prime, HBO & Disney+. Plus YouTube Pro (Ad-Free + Background Play), Movies, Live TV & Games - all free in one app!
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
                        as={Link}
                        href="https://github.com/am-abdulmueed/pluginstream/releases/latest/download/pluginstream.apk"
                        className="h-16 px-10 bg-red-600 text-white font-black text-lg uppercase tracking-widest shadow-2xl hover:scale-105 transition-transform"
                    >
                        Download Now
                    </Button>
                    <Button
                        size="lg"
                        radius="full"
                        variant="bordered"
                        onClick={scrollToSearch}
                        className="h-16 px-10 border-2 border-foreground text-foreground font-black text-lg uppercase tracking-widest hover:bg-foreground hover:text-background transition-all"
                    >
                        Explore Channels
                    </Button>
                </motion.div>

                {/* Feature Chips */}
                <motion.div 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    className="grid grid-cols-2 lg:flex lg:flex-wrap justify-center gap-3 md:gap-4 w-full max-w-2xl px-4"
                >
                    {[
                        { icon: <Shield size={16} />, label: "Secure" },
                        { icon: <Zap size={16} />, label: "Ultra Fast" },
                        { icon: <Globe size={16} />, label: "Worldwide" },
                        { icon: <Play size={16} />, label: "Free Access" }
                    ].map((feature, i) => (
                        <div key={i} className="flex items-center justify-center lg:justify-start gap-3 px-4 lg:px-6 py-3 md:py-4 rounded-2xl bg-white/5 dark:bg-white/[0.03] border-2 border-black/5 dark:border-white/10 backdrop-blur-xl shadow-lg transition-all hover:scale-105 active:scale-95 cursor-default group/chip">
                            <span className="text-red-500 group-hover/chip:animate-pulse">{feature.icon}</span>
                            <span className="text-[10px] md:text-sm font-black uppercase tracking-widest text-foreground/80">{feature.label}</span>
                        </div>
                    ))}
                </motion.div>

                {/* Hero Image */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                    className="relative w-full max-w-6xl aspect-[21/9] rounded-[2rem] md:rounded-[4rem] overflow-hidden border-2 border-white/10 shadow-3xl mt-12 group bg-black"
                >
                    <Image
                        src="/pluginstream/hero.png"
                        alt="PluginStream Cinematic Experience"
                        fill
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000 opacity-80"
                        priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-80" />
                </motion.div>
            </div>
        </section>
    );
};

export default PluginStreamHero;

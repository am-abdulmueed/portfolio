"use client";
import React from "react";
import { motion } from "framer-motion";
import { Card, CardBody, Badge, Button, Link, Image } from "@nextui-org/react";
import { Layers, Rocket, Target, Trophy } from "lucide-react";
import { FaAndroid, FaGooglePlay } from "react-icons/fa";

/**
 * Game grid showcasing the 1000+ games dynamically.
 */
const GameGrid = () => {
    // Using some of the provided numbered images for features
    const features = [
        { title: "Unity Pro", img: "/nexgama/5.jpg", tag: "Engine", icon: <Rocket size={18} /> },
        { title: "Unreal Visuals", img: "/nexgama/10.jpg", tag: "Tech", icon: <Layers size={18} /> },
        { title: "Indie Gems", img: "/nexgama/6.jpg", tag: "Creative", icon: <Target size={18} /> },
        { title: "Global Rank", img: "/nexgama/13.jpg", tag: "Competitive", icon: <Trophy size={18} /> },
    ];

    // Numbered thumbnails for the big grid effect
    const thumbnails = [2, 3, 4, 9, 11, 12, 14, 15];

    return (
        <section className="py-20 bg-background relative overflow-hidden">
            {/* Dynamic Aura Background */}
            <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[500px] h-[500px] bg-secondary/10 rounded-full blur-[160px] -z-10" />

            <div className="container mx-auto px-6 max-w-7xl">
                <div className="flex flex-col md:flex-row justify-between items-end gap-10 mb-20">
                    <div className="space-y-4">
                        <h2 className="text-[12px] font-black uppercase tracking-[0.6em] text-primary">Unbox The Library</h2>
                        <h3 className="text-4xl md:text-6xl font-black italic tracking-tighter leading-tight uppercase">
                            1000+ PROFESSIONAL <br />
                            <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">LEVEL GAMES</span>
                        </h3>
                    </div>
                    <p className="text-foreground font-bold text-lg md:text-xl max-w-md md:text-right leading-relaxed">
                        From hyper-casual to triple-A grade visuals, NexGama aggregates the best web-optimized titles under one roof.
                    </p>
                </div>

                {/* Dynamic Staggered Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-20">
                    {features.map((item, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: idx * 0.1 }}
                            viewport={{ once: true }}
                        >
                            <Card className="bg-content1/50 dark:bg-white/[0.03] backdrop-blur-3xl border-2 border-white/5 rounded-[2.5rem] overflow-hidden group h-[450px]">
                                <CardBody className="p-0 relative flex flex-col justify-end h-full">
                                    <div className="absolute inset-0 w-full h-full aspect-[4/5]">
                                        <img
                                            src={item.img}
                                            alt={item.title}
                                            className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000"
                                        />
                                    </div>
                                    <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent" />

                                    <div className="relative p-10 space-y-4">
                                        <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center shadow-[0_0_30px_rgba(var(--primary-rgb),0.6)] relative z-20 border border-white/20">
                                            <div className="text-white">
                                                {React.cloneElement(item.icon, { size: 24, strokeWidth: 3, className: "text-white" })}
                                            </div>
                                        </div>
                                        <div className="space-y-1 relative z-20">
                                            <h4 className="text-2xl font-black italic uppercase tracking-tight text-white drop-shadow-md">{item.title}</h4>
                                            <span className="inline-block px-3 py-1 rounded-full bg-white/20 border border-white/20 text-[10px] font-black uppercase tracking-widest text-white backdrop-blur-md">{item.tag}</span>
                                        </div>
                                    </div>
                                </CardBody>
                            </Card>
                        </motion.div>
                    ))}
                </div>

                {/* Rapid Showcase Gallery */}
                <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4 px-2">
                    {thumbnails.map((num, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ delay: idx * 0.05 }}
                            viewport={{ once: true }}
                            className="aspect-square rounded-2xl overflow-hidden border border-white/5 group relative"
                        >
                            <img
                                src={`/nexgama/${num}.png`}
                                alt={`Game Preview ${num}`}
                                className="w-full h-full object-cover group-hover:grayscale-0 grayscale transition-all duration-300 pointer-events-none"
                            />
                            <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity" />
                        </motion.div>
                    ))}
                </div>

                {/* NexGama Special Section */}
                <div className="mt-20">
                    <div className="flex items-center gap-4 px-2 mb-8">
                        <div className="h-10 w-1.5 bg-gradient-to-b from-primary to-secondary rounded-full" />
                        <h3 className="text-3xl font-black uppercase tracking-tight italic">NexGama <span className="text-primary">Gaming</span></h3>
                    </div>

                    <Card className="bg-foreground text-background p-6 md:p-12 rounded-[2.5rem] md:rounded-[4rem] overflow-hidden group shadow-3xl">
                        <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 via-transparent to-secondary/20 opacity-40 group-hover:rotate-6 transition-transform duration-1000" />

                        <div className="relative z-10 flex flex-col md:flex-row items-center gap-8 md:gap-12">
                            <div className="relative w-24 h-24 md:w-32 md:h-32 shrink-0">
                                {/* eslint-disable-next-line @next/next/no-img-element */}
                                <img
                                    src="/nexgama/icon.png"
                                    alt="NexGama Icon"
                                    className="w-full h-full rounded-3xl shadow-2xl group-hover:scale-110 transition-transform duration-500 border border-white/10 object-contain"
                                />
                                <div className="absolute -bottom-2 -right-2 bg-[#121212] text-white p-2 rounded-xl shadow-xl border border-white/20 z-20">
                                    <FaAndroid size={16} className="text-white" />
                                </div>
                            </div>

                            <div className="flex-1 text-center md:text-left space-y-4">
                                <h4 className="text-3xl md:text-5xl font-black italic uppercase leading-none tracking-tighter">Pro Level Gaming <br />On The Go</h4>
                                <p className="text-background/70 text-sm md:text-lg font-medium max-w-xl">Download the NexGama standalone app for a dedicated, optimized gaming experience with 1000+ PC-grade titles.</p>
                            </div>

                            <Button
                                size="lg"
                                radius="full"
                                as={Link}
                                href="https://play.google.com/store/apps/details?id=com.betapix.nexgama"
                                target="_blank"
                                className="h-16 md:h-20 px-10 md:px-14 bg-background text-foreground font-black text-lg md:text-xl uppercase tracking-widest shadow-2xl hover:scale-105 transition-transform w-full md:w-auto"
                                startContent={<FaGooglePlay size={24} />}
                            >
                                Get App
                            </Button>
                        </div>
                    </Card>
                </div>

                <div className="mt-32 pt-16 border-t border-white/5 text-center space-y-4">
                    <p className="text-default-400 font-black uppercase tracking-[0.4em] text-[10px]">And Hundreds More Categories Awaiting Your Play</p>
                </div>
            </div>
        </section>
    );
};

export default GameGrid;

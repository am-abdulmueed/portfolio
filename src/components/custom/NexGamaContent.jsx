"use client";
import React from "react";
import NexGamaHero from "@/components/custom/NexGamaHero";
import GameGrid from "@/components/custom/GameGrid";
import GameCategoryExplorer from "@/components/custom/GameCategoryExplorer";
import {
    Badge,
    Card,
    CardBody,
    Button,
    Divider,
} from "@nextui-org/react";
import { Zap, Play, Target, Rocket, Shield, Gamepad2, Layers, Cpu, LayoutDashboard } from "lucide-react";
import { FaGooglePlay } from "react-icons/fa";
import Image from "next/image";

const NexGamaContent = () => {
    const scrollToGameExplorer = () => {
        document.getElementById('game-explorer')?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <main className="bg-background min-h-screen">
            {/* Main Sections */}
            <NexGamaHero onLaunchDeckClick={scrollToGameExplorer} />
            <GameGrid />
            <section id="game-explorer">
                <GameCategoryExplorer />
            </section>

            {/* Feature Bento Section */}
            <section className="py-20 relative overflow-hidden">
                {/* Cinematic Backdrop Glow */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-primary/5 rounded-full blur-[200px] -z-10" />

                <div className="container mx-auto px-6 max-w-7xl">
                    <div className="mb-20 text-center space-y-4">
                        <h2 className="text-[10px] md:text-[12px] font-black uppercase tracking-[0.4em] md:tracking-[0.6em] text-secondary">Unlimited Possibilities</h2>
                        <h3 className="text-3xl md:text-7xl font-black italic tracking-tighter uppercase leading-[0.9]">
                            The Future of <br /> Web Gaming
                        </h3>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-10">
                        {/* Feature 1: No Installation */}
                        <Card className="bg-content1/50 dark:bg-white/[0.03] backdrop-blur-3xl border-2 border-white/5 p-6 md:p-8 rounded-[2rem] md:rounded-[2.5rem] shadow-xl min-h-[350px] md:h-[500px] flex flex-col justify-end group">
                            <div className="absolute top-6 left-6 md:top-10 md:left-10 p-3 md:p-4 rounded-2xl md:rounded-3xl bg-primary/20 backdrop-blur-xl border border-primary/20 text-primary group-hover:scale-110 transition-transform">
                                <Rocket size={24} md={32} strokeWidth={2.5} />
                            </div>
                            <Image
                                src="/nexgama/image (6).jpg"
                                alt="No Installation Feature"
                                fill
                                className="object-cover opacity-40 group-hover:opacity-90 transition-opacity -z-10"
                            />
                            <div className="relative z-10 space-y-2 md:space-y-4">
                                <h4 className="text-2xl md:text-3xl font-black italic uppercase tracking-tight text-foreground leading-[1]">No Installation <br />Required</h4>
                                <p className="text-foreground font-semibold text-xs md:text-sm leading-relaxed drop-shadow-sm">NexGama utilizes next-generation streaming blobs to load 1000+ games in seconds. No disk space needed.</p>
                            </div>
                        </Card>

                        {/* Feature 2: High Fidelity Tech */}
                        <Card className="bg-content1/50 dark:bg-white/[0.03] backdrop-blur-3xl border-2 border-white/5 p-6 md:p-8 rounded-[2rem] md:rounded-[2.5rem] shadow-xl min-h-[350px] md:h-[500px] flex flex-col justify-end group">
                            <div className="absolute top-6 left-6 md:top-10 md:left-10 p-3 md:p-4 rounded-2xl md:rounded-3xl bg-secondary/20 backdrop-blur-xl border border-secondary/20 text-secondary group-hover:scale-110 transition-transform">
                                <Zap size={24} md={32} strokeWidth={2.5} />
                            </div>
                            <Image
                                src="/nexgama/image (7).jpg"
                                alt="High Fidelity Tech Feature"
                                fill
                                className="object-cover opacity-40 group-hover:opacity-90 transition-opacity -z-10"
                            />
                            <div className="relative z-10 space-y-2 md:space-y-4">
                                <h4 className="text-2xl md:text-3xl font-black italic uppercase tracking-tight text-foreground leading-[1]">High-Fidelity <br />Optimization</h4>
                                <p className="text-foreground font-semibold text-xs md:text-sm leading-relaxed drop-shadow-sm">Optimized for Unity & Unreal Engine. NexGama ensures smooth framerates and crystal clear visuals across all browsers.</p>
                            </div>
                        </Card>

                        {/* Feature 3: Privacy First */}
                        <Card className="bg-content1/50 dark:bg-white/[0.03] backdrop-blur-3xl border-2 border-white/5 p-6 md:p-8 rounded-[2rem] md:rounded-[2.5rem] shadow-xl min-h-[350px] md:h-[500px] flex flex-col justify-end group">
                            <div className="absolute top-6 left-6 md:top-10 md:left-10 p-3 md:p-4 rounded-2xl md:rounded-3xl bg-foreground/10 backdrop-blur-xl border border-white/10 text-foreground group-hover:scale-110 transition-transform">
                                <Shield size={24} md={32} strokeWidth={2.5} />
                            </div>
                            <Image
                                src="/nexgama/image (8).jpg"
                                alt="Privacy First Feature"
                                fill
                                className="object-cover opacity-40 group-hover:opacity-90 transition-opacity -z-10"
                            />
                            <div className="relative z-10 space-y-2 md:space-y-4">
                                <h4 className="text-2xl md:text-3xl font-black italic uppercase tracking-tight text-foreground leading-[1]">Zero Permissions <br />Sandbox</h4>
                                <p className="text-foreground font-semibold text-xs md:text-sm leading-relaxed drop-shadow-sm">No tracking, no system access. NexGama runs in a strictly isolated environment for maximum user safety.</p>
                            </div>
                        </Card>
                    </div>
                </div>
            </section>

            {/* Footer CTA */}
            <section className="py-16 md:py-32 relative overflow-hidden">
                <div className="container mx-auto px-4 md:px-6 max-w-7xl">
                    <Card className="bg-foreground text-background p-8 md:p-20 rounded-[2.5rem] md:rounded-[4rem] text-center space-y-8 md:space-y-12 overflow-hidden group shadow-3xl">
                        {/* Abs Decorative Pattern */}
                        <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 via-transparent to-secondary/20 opacity-40 group-hover:rotate-6 transition-transform duration-1000" />

                        <div className="relative z-10 space-y-4">
                            <h2 className="text-3xl md:text-8xl font-black italic tracking-tighter uppercase leading-[0.85]">Ready to Play?</h2>
                            <p className="text-background/80 text-xs md:text-2xl font-medium max-w-2xl mx-auto leading-relaxed">Join 20,000+ players who have ditched downloads for instant-access pro gaming.</p>
                        </div>

                        <div className="relative z-10 flex flex-col sm:flex-row items-center justify-center gap-4 md:gap-6">
                            <Button
                                size="lg"
                                radius="full"
                                onClick={scrollToGameExplorer}
                                className="h-12 md:h-20 px-8 md:px-12 bg-background text-foreground font-black text-sm md:text-2xl uppercase tracking-[0.2em] shadow-2xl hover:scale-105 transition-transform w-full sm:w-auto"
                                endContent={<Rocket size={20} md={28} className="rotate-45" />}
                            >
                                Launch Deck
                            </Button>
                            <Button
                                size="lg"
                                radius="full"
                                variant="bordered"
                                as="a"
                                href="https://play.google.com/store/apps/details?id=com.betapix.nexgama"
                                target="_blank"
                                className="h-12 md:h-20 px-8 md:px-12 border-2 md:border-4 border-background text-background font-black text-sm md:text-xl uppercase tracking-widest hover:bg-background hover:text-foreground transition-all w-full sm:w-auto"
                                startContent={<FaGooglePlay size={18} md={24} />}
                            >
                                Download App
                            </Button>
                        </div>
                    </Card>
                </div>
            </section>

            {/* Final SEO Text Overlay (Visually hidden but SEO relevant context) */}
            <div className="sr-only">
                <h3>Advanced Web Gaming Aggregator by Abdul Mueed (BetaPix)</h3>
                <p>NexGama is the leading offline game and pro games platform designed for advanced gamers. Aggregating thousands of titles across the web. Developed by Abdul Mueed.</p>
            </div>
        </main>
    );
};

export default NexGamaContent;

"use client";

import React from "react";
import { Card, CardBody, Button, Link } from "@nextui-org/react";
import { motion } from "framer-motion";
import {
    Cpu,
    Smartphone,
    Zap,
    Layers,
    Globe,
    ArrowRight,
    Code2,
    Rocket,
    ShieldCheck,
    CheckCircle2,
    Palette,
    Search
} from "lucide-react";
import { FaReact } from "react-icons/fa";
import { SiKotlin, SiFlutter } from "react-icons/si";

const WhyHireMe = () => {
    const highlights = [
        {
            icon: <Smartphone className="text-foreground" size={32} />,
            title: "Cross-Platform Mastery",
            description: "One single codebase, infinite possibilities. I build high-performance apps for iOS, Android, and Web using Flutter, React Native, and Kotlin Multiplatform."
        },
        {
            icon: <Palette className="text-foreground" size={32} />,
            title: "Premium Graphics Design",
            description: "I create stunning visual identities and high-end UI/UX designs that make your brand stand out. Aesthetics and functionality go hand in hand."
        },
        {
            icon: <Search className="text-foreground" size={32} />,
            title: "Strategic SEO & Visibility",
            description: "I optimize your digital products for maximum organic reach. From technical SEO to speed optimization, I ensure your project is seen by the right audience."
        }
    ];

    const technologies = [
        { name: "Flutter", icon: <SiFlutter className="text-foreground" />, color: "text-foreground" },
        { name: "React Native", icon: <FaReact className="text-foreground" />, color: "text-foreground" },
        { name: "Kotlin / KMP", icon: <SiKotlin className="text-foreground" />, color: "text-foreground" },
        { name: "Next.js / Web", icon: <Globe className="text-foreground" />, color: "text-foreground" },
        { name: "Backend / Cloud", icon: <Zap className="text-foreground" />, color: "text-foreground" },
        { name: "SEO / Marketing", icon: <Search className="text-foreground" />, color: "text-foreground" },
        { name: "UI/UX / Graphics", icon: <Palette className="text-foreground" />, color: "text-foreground" },
    ];

    return (
        <div className="min-h-screen bg-background pt-32 pb-20 overflow-x-hidden">
            {/* Background Decor - Adjusted for mobile */}
            <div className="absolute top-0 left-[-10%] md:left-[-5%] w-[300px] md:w-[1000px] h-[300px] md:h-[1000px] bg-primary/5 rounded-full blur-[80px] md:blur-[160px] -z-10 animate-pulse" />

            <div className="container mx-auto px-6 max-w-7xl relative">
                <div className="flex flex-col items-center text-center space-y-8 mb-20">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="px-6 py-2 rounded-full bg-primary/10 border border-primary/20 backdrop-blur-xl"
                    >
                        <span className="text-xs font-black uppercase tracking-[0.4em] text-primary">The Strategic Advantage</span>
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="text-4xl md:text-7xl font-black tracking-tighter leading-tight bg-clip-text text-transparent bg-gradient-to-br from-foreground via-foreground/90 to-muted-foreground"
                    >
                        Why Partner <br /> With <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary italic">BetaPix?</span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.2 }}
                        className="text-lg md:text-xl text-default-500 max-w-2xl font-medium"
                    >
                        I don&apos;t just write code; I engineer solutions that scale. By utilizing cross-platform technologies, I save you time and cost without compromising on quality.
                    </motion.p>
                </div>

                {/* Highlights Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-32">
                    {highlights.map((item, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3 + i * 0.1 }}
                        >
                            <Card className="h-full bg-content1/50 border-default-200 dark:border-white/5 backdrop-blur-3xl rounded-[2.5rem] p-6 md:p-8 hover:bg-content2 transition-all duration-500 shadow-xl">
                                <CardBody className="p-0 space-y-6">
                                    <div className="w-16 h-16 rounded-2xl bg-default-100 dark:bg-white/5 flex items-center justify-center border border-default-200 dark:border-white/10">
                                        {item.icon}
                                    </div>
                                    <h3 className="text-2xl font-black tracking-tight">{item.title}</h3>
                                    <p className="text-default-500 font-medium leading-relaxed">
                                        {item.description}
                                    </p>
                                </CardBody>
                            </Card>
                        </motion.div>
                    ))}
                </div>

                {/* Tech Showcase */}
                <div className="relative rounded-[2.5rem] md:rounded-[3rem] bg-gradient-to-br from-primary/10 to-transparent border border-primary/20 p-8 md:p-20 overflow-hidden mb-32">
                    <div className="absolute top-0 right-0 w-[200px] md:w-[500px] h-[200px] md:h-[500px] bg-secondary/10 rounded-full blur-[80px] md:blur-[120px] -z-10" />

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <div className="space-y-8 text-center lg:text-left">
                            <h2 className="text-3xl md:text-5xl font-black tracking-tighter">Unified Development, <br />Global Output.</h2>
                            <p className="text-base md:text-lg text-default-500 font-medium">
                                Using a single codebase approach, I deliver unified experiences across all platforms. This means your app looks and behaves identically on iOS and Android while keeping maintenance costs low.
                            </p>

                            <ul className="space-y-4 inline-block text-left">
                                {[
                                    "Cross-platform mastery (Flutter / React Native / Kotlin Multiplatform)",
                                    "State-of-the-art UI/UX patterns",
                                    "Highly scalable backend architectures",
                                    "Future-proof development standards"
                                ].map((text, i) => (
                                    <li key={i} className="flex items-center gap-3 font-bold text-foreground text-sm md:text-base">
                                        <CheckCircle2 size={18} className="text-primary shrink-0" />
                                        {text}
                                    </li>
                                ))}
                            </ul>

                            <Button
                                as={Link}
                                href="/projects"
                                color="primary"
                                radius="full"
                                size="lg"
                                className="font-black uppercase tracking-widest h-14 md:h-16 px-10 shadow-xl shadow-primary/20 w-full md:w-auto"
                                endContent={<ArrowRight size={20} />}
                            >
                                Inspect My Projects
                            </Button>
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                            {technologies.map((tech, i) => (
                                <motion.div
                                    key={i}
                                    whileHover={{ scale: 1.05 }}
                                    className="p-4 md:p-6 rounded-3xl bg-background/50 border border-default-200 dark:border-white/10 backdrop-blur-xl flex flex-col items-center gap-4 text-center"
                                >
                                    <div className={`text-4xl ${tech.color}`}>
                                        {tech.icon}
                                    </div>
                                    <span className="text-[10px] md:text-xs font-black uppercase tracking-widest leading-tight">{tech.name}</span>
                                </motion.div>
                            ))}
                            <div className="p-4 md:p-6 rounded-3xl bg-primary/20 border border-primary/30 backdrop-blur-xl flex flex-col items-center justify-center gap-2 text-center">
                                <Rocket className="text-primary animate-bounce" />
                                <span className="text-[10px] md:text-xs font-black uppercase tracking-widest text-primary">High Velocity</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* CTA */}
                <div className="text-center space-y-10">
                    <h2 className="text-4xl md:text-7xl font-black tracking-tighter">Ready for Infinite <br />Scalability?</h2>
                    <div className="flex flex-col md:flex-row items-center justify-center gap-6">
                        <Button
                            as={Link}
                            href="/contact"
                            variant="shadow"
                            color="primary"
                            radius="full"
                            size="lg"
                            className="font-black uppercase tracking-widest h-16 px-12 text-lg w-full md:w-auto"
                        >
                            Start Your Project
                        </Button>
                        <Button
                            as={Link}
                            href="/architecture"
                            variant="bordered"
                            radius="full"
                            size="lg"
                            className="font-black uppercase tracking-widest h-16 px-12 text-lg border-2 w-full md:w-auto"
                        >
                            View Architecture
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WhyHireMe;

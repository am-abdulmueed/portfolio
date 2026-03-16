"use client";
import React from "react";
import { motion } from "framer-motion";
import { Scale, Zap, Globe, Heart, ShieldQuestion } from "lucide-react";
import { Card, CardBody, Button } from "@nextui-org/react";
import Link from "next/link";

const TermsClient = () => {
    const sections = [
        {
            icon: <Scale className="text-primary" size={24} />,
            title: "Agreement of Service",
            content: "By accessing Muxio, NexGama, or any services provided by BetaPix, you agree to be bound by these Terms and Conditions. These terms govern your use of our digital platforms and tools."
        },
        {
            icon: <Zap className="text-orange-500" size={24} />,
            title: "Acceptable Use",
            content: "We encourage creativity and exploration. However, you must use our services lawfully. Any attempt to disrupt our systems, bypass security sandboxes, or use our tools for malicious purposes is strictly prohibited."
        },
        {
            icon: <Globe className="text-success" size={24} />,
            title: "Global Compliance",
            content: "Our services are designed as open architectural experiments. While we strive for global compatibility, you are responsible for ensuring your use complies with local laws in your jurisdiction."
        },
        {
            icon: <Heart className="text-danger" size={24} />,
            title: "User Responsibility",
            content: "You are responsible for the content you process or create using our tools. We provide high-performance environments, but the ultimate output and its impact remain the responsibility of the user."
        },
        {
            icon: <ShieldQuestion className="text-warning" size={24} />,
            title: "Limitation of Liability",
            content: "As these platforms are part of an evolving engineering showcase, we provide them 'as is' without warranties. We are not liable for any specific outcomes resulting from the use of our experimental software."
        }
    ];

    return (
        <main className="min-h-screen bg-background pt-24 md:pt-32 pb-20 relative overflow-x-hidden">
            {/* Background Ambience */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full -z-10 opacity-30 pointer-events-none overflow-hidden">
                <div className="absolute top-[10%] right-[-10%] w-[600px] h-[600px] bg-secondary/20 rounded-full blur-[160px] animate-pulse" />
                <div className="absolute bottom-[10%] left-[-10%] w-[500px] h-[500px] bg-primary/10 rounded-full blur-[140px]" />
            </div>

            <div className="w-full max-w-4xl mx-auto px-4 md:px-6 relative z-10 box-border">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center mb-12 md:mb-16 space-y-6"
                >
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/10 border-2 border-secondary/20 backdrop-blur-xl shadow-lg">
                        <Scale size={16} className="text-foreground" />
                        <span className="text-[10px] font-black uppercase tracking-[0.4em] text-foreground">Operational Guidelines</span>
                    </div>
                    <h1 className="text-[1.7rem] sm:text-5xl md:text-7xl font-black italic tracking-tighter uppercase leading-[0.9] text-foreground px-2">
                        Terms of <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#db2777] to-[#9333ea]">Service</span>
                    </h1>
                    <p className="text-default-500 text-[13px] md:text-lg font-medium max-w-2xl mx-auto px-6 leading-relaxed">
                        High-performance systems require clear operational boundaries. These terms ensure a safe, fair, and high-performance experience for every explorer.
                    </p>
                </motion.div>
                <div className="space-y-6 md:space-y-8">
                    {sections.map((section, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ delay: idx * 0.1 }}
                            className="w-full"
                        >
                            <Card className="bg-white/70 dark:bg-black/40 backdrop-blur-3xl border-2 border-black/5 dark:border-white/10 rounded-[2rem] md:rounded-[2.5rem] overflow-hidden shadow-2xl hover:border-primary/50 transition-all group w-full">
                                <CardBody className="p-5 md:p-14 flex flex-col md:flex-row gap-5 md:gap-10 items-center md:items-start text-center md:text-left">
                                    <div className="p-4 md:p-5 rounded-[1.2rem] md:rounded-[1.5rem] bg-default-100 dark:bg-white/5 border-2 border-default-300 dark:border-white/10 shrink-0 shadow-lg group-hover:scale-110 transition-transform">
                                        {section.icon}
                                    </div>
                                    <div className="space-y-3 md:space-y-5 w-full">
                                        <h2 className="text-[1.25rem] md:text-3xl font-black uppercase italic tracking-tighter text-foreground group-hover:text-primary transition-colors leading-tight">{section.title}</h2>
                                        <p className="text-default-600 dark:text-default-400 font-bold leading-relaxed text-[14px] md:text-xl">
                                            {section.content}
                                        </p>
                                    </div>
                                </CardBody>
                            </Card>
                        </motion.div>
                    ))}
                </div>

                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    className="mt-20 md:mt-24 p-8 md:p-16 rounded-[2.5rem] md:rounded-[4rem] bg-gradient-to-br from-secondary/20 via-primary/10 to-transparent border-2 border-secondary/30 backdrop-blur-2xl text-center space-y-10"
                >
                    <div className="space-y-6">
                        <h3 className="text-3xl md:text-4xl font-black uppercase italic tracking-tighter text-foreground">Need Clarification?</h3>
                        <p className="text-default-600 dark:text-default-400 font-bold text-base md:text-lg max-w-lg mx-auto leading-relaxed">
                            Our team is here to ensure absolute transparency in our operations. If you have questions about our protocol, let&apos;s talk.
                        </p>
                    </div>

                    <Button
                        as={Link}
                        href="/contact"
                        variant="solid"
                        color="secondary"
                        radius="full"
                        size="lg"
                        className="font-black italic uppercase tracking-[0.2em] px-10 md:px-14 h-16 md:h-20 shadow-3xl hover:scale-105 transition-all text-base md:text-lg"
                    >
                        Contact Team
                    </Button>

                    <div className="text-[10px] font-black uppercase tracking-[0.4em] text-purple-600 dark:text-secondary">
                        Protocol v2.4 | System Sync: March 2024
                    </div>
                </motion.div>
            </div>
        </main>
    );
};

export default TermsClient;

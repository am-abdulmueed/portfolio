"use client";
import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { Shield, Lock, Eye, Server, RefreshCw, FileText } from "lucide-react";
import { Card, CardBody } from "@nextui-org/react";

const PrivacyClient = () => {
    const sections = [
        {
            icon: <Shield className="text-primary" size={24} />,
            title: "Our Privacy Commitment",
            content: "Your privacy is our highest priority. We build our digital ecosystem with a 'Privacy by Design' philosophy. We believe that technology should empower users without compromising their personal data."
        },
        {
            icon: <Eye className="text-orange-500" size={24} />,
            title: "Data Transparency",
            content: "We are clear about what we collect. Most of our tools, like NexGama and Muxio, operate with minimal to zero tracking. We do not sell your personal information to third parties."
        },
        {
            icon: <Lock className="text-success" size={24} />,
            title: "Security Protocols",
            content: "We use industry-standard encryption and security measures to protect any data processed by our systems. Our sandboxed environments ensure that games and applications run safely."
        },
        {
            icon: <Server className="text-warning" size={24} />,
            title: "Information Processing",
            content: "Information is processed strictly for the purpose of providing and improving our services. We utilize localized storage when possible to keep your preferences on your own device."
        },
        {
            icon: <RefreshCw className="text-danger" size={24} />,
            title: "Policy Evolution",
            content: "As our technology evolves, so do our privacy practices. We will update this policy as needed to ensure it remains at the forefront of digital safety standards."
        }
    ];

    return (
        <main className="min-h-screen bg-background pt-24 md:pt-32 pb-20 relative overflow-x-hidden">
            {/* Background Ambience */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full -z-10 opacity-30 pointer-events-none overflow-hidden">
                <div className="absolute top-[10%] left-[-10%] w-[600px] h-[600px] bg-primary/20 rounded-full blur-[160px] animate-pulse" />
                <div className="absolute bottom-[10%] right-[-10%] w-[500px] h-[500px] bg-secondary/10 rounded-full blur-[140px]" />
            </div>

            <div className="w-full max-w-4xl mx-auto px-4 md:px-6 relative z-10 box-border">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center mb-12 md:mb-16 space-y-6"
                >
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 backdrop-blur-xl">
                        <Lock size={16} className="text-primary" />
                        <span className="text-[10px] font-black uppercase tracking-[0.4em] text-primary">Confidential Protocol</span>
                    </div>
                    <h1 className="text-[1.7rem] sm:text-5xl md:text-7xl font-black italic tracking-tighter uppercase leading-[0.9] text-foreground px-2">
                        Privacy <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#9333ea] to-[#db2777]">Policy</span>
                    </h1>
                    <p className="text-default-500 text-[13px] md:text-lg font-medium max-w-2xl mx-auto px-6 leading-relaxed">
                        Your trust is the foundation of our engineering. We are committed to absolute transparency and data integrity.
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
                    className="mt-24 p-16 rounded-[4rem] bg-gradient-to-br from-primary/20 via-secondary/10 to-transparent border border-primary/30 backdrop-blur-2xl text-center space-y-8"
                >
                    <FileText className="mx-auto text-primary" size={48} strokeWidth={2.5} />
                    <h3 className="text-4xl font-black uppercase italic tracking-tighter text-foreground">Questions?</h3>
                    <p className="text-default-600 dark:text-default-400 font-bold text-lg max-w-lg mx-auto leading-relaxed">
                        Your security is our priority. If you have any inquiries regarding your data or our protocols, reach out to our team.
                    </p>
                    <div className="pt-6 text-[10px] font-black uppercase tracking-[0.4em] text-blue-600 dark:text-primary">
                        Protocol Integrity Sync: March 2024
                    </div>
                </motion.div>
            </div>
        </main>
    );
};

export default PrivacyClient;

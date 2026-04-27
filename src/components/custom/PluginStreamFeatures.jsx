"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Zap, Shield, Globe, Play } from "lucide-react";

const PluginStreamFeatures = () => {
    const features = [
        {
            title: "Premium Content",
            description: "Stream from Netflix, Prime Video, HBO Max, and Apple TV+ without any subscription costs.",
            icon: <Play className="text-red-500" size={32} />,
            image: "/pluginstream/premium_content.jpg"
        },
        {
            title: "Fast & Secure",
            description: "Engineered for speed. Enjoy buffer-free 4K streaming with enterprise-grade security.",
            icon: <Zap className="text-yellow-500" size={32} />,
            image: "/pluginstream/fast_secure.jpg"
        },
        {
            title: "Global Reach",
            description: "100+ plugins covering regions from USA to Turkey, Indonesia to India. Worldwide entertainment.",
            icon: <Globe className="text-blue-500" size={32} />,
            image: "/pluginstream/global_reach.jpg"
        }
    ];

    return (
        <section className="py-20 md:py-32 space-y-24 md:space-y-48">
            {features.map((feature, idx) => (
                <div 
                    key={idx}
                    className={`flex flex-col ${idx % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-12 md:gap-16 items-center px-4 md:px-0`}
                >
                    <motion.div 
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="flex-1 space-y-6 md:space-y-8 text-center lg:text-left flex flex-col items-center lg:items-start"
                    >
                        <div className="w-16 h-16 rounded-3xl bg-white/5 dark:bg-white/[0.03] border-2 border-black/5 dark:border-white/10 flex items-center justify-center shadow-xl">
                            {feature.icon}
                        </div>
                        <h2 className="text-3xl sm:text-4xl md:text-7xl font-black italic uppercase tracking-tighter leading-tight">
                            {feature.title}
                        </h2>
                        <p className="text-lg md:text-2xl text-foreground/60 font-medium leading-relaxed max-w-xl">
                            {feature.description}
                        </p>
                    </motion.div>

                    <motion.div 
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="flex-1 relative aspect-video w-full rounded-[2.5rem] md:rounded-[4rem] overflow-hidden border-2 border-black/5 dark:border-white/10 shadow-3xl group"
                    >
                        <Image 
                            src={feature.image} 
                            alt={feature.title} 
                            fill 
                            className="object-cover group-hover:scale-110 transition-transform duration-1000"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-80 group-hover:opacity-40 transition-opacity duration-500" />
                    </motion.div>
                </div>
            ))}
        </section>
    );
};

export default PluginStreamFeatures;

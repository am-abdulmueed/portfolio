"use client";
import React from "react";
import { motion } from "framer-motion";
import { pluginCategories } from "@/lib/PluginStreamData";
import { Chip } from "@nextui-org/react";

const PluginCategorySection = () => {
    return (
        <section className="py-24 container mx-auto px-6 max-w-7xl">
            <div className="space-y-24">
                {pluginCategories.map((category, idx) => (
                    <motion.div
                        key={idx}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: idx * 0.1 }}
                        className="space-y-8"
                    >
                        <div className="flex items-center gap-6">
                            <h2 className="text-3xl md:text-5xl font-black italic uppercase tracking-tighter whitespace-nowrap">
                                {category.title}
                            </h2>
                            <div className="h-px w-full bg-gradient-to-r from-red-500/50 to-transparent" />
                        </div>

                        <div className="flex flex-wrap gap-3">
                            {category.plugins.map((plugin, pIdx) => (
                                <motion.div
                                    key={pIdx}
                                    whileHover={{ scale: 1.05, y: -2 }}
                                    className="px-4 py-2 rounded-xl bg-white/[0.03] border border-white/5 backdrop-blur-sm hover:bg-white/[0.08] hover:border-red-500/30 transition-all cursor-default"
                                >
                                    <span className="text-xs md:text-sm font-bold tracking-tight text-foreground/80 hover:text-foreground">
                                        {plugin}
                                    </span>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                ))}
            </div>

            {/* Final Call to Action / Info */}
            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                className="mt-32 p-12 rounded-[3rem] bg-gradient-to-br from-red-600/20 via-purple-600/10 to-transparent border border-white/10 text-center space-y-6"
            >
                <h3 className="text-4xl md:text-6xl font-black italic uppercase tracking-tighter">Everything in One Place</h3>
                <p className="text-lg md:text-xl text-foreground/60 max-w-2xl mx-auto font-medium">
                    Our repository provides seamless integration with Netflix, Disney Plus, Hotstar, Prime Video, and many more. Enjoy the best content from around the world without restrictions.
                </p>
            </motion.div>
        </section>
    );
};

export default PluginCategorySection;

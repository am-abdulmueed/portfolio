"use client";
import React from "react";
import { motion } from "framer-motion";
import { premiumPlatforms } from "@/lib/PluginStreamData";
import { Sparkles, CheckCircle2 } from "lucide-react";

const PremiumComparison = () => {
    const [expandedIndex, setExpandedIndex] = React.useState(null);

    return (
        <section className="py-24 container mx-auto px-6 max-w-7xl">
                {/* Header Section */}
                <div className="text-center space-y-6 mb-20 px-4">
                    <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        className="inline-flex items-center gap-2 px-6 py-2 rounded-full bg-red-500/10 border-2 border-red-500/20 text-red-500 text-[10px] font-black uppercase tracking-[0.4em] shadow-lg"
                    >
                        <Sparkles size={14} />
                        Premium Engine Comparison
                    </motion.div>
                    <h2 className="text-4xl md:text-8xl font-black italic uppercase tracking-tighter leading-[0.85] flex flex-col items-center">
                        World Top Paid 
                        <span className="text-red-500 border-b-8 border-red-500/10 pb-2">Platforms</span>
                    </h2>
                    <p className="text-base md:text-2xl text-foreground/60 font-medium max-w-3xl mx-auto leading-relaxed">
                        We provide all these OTT platforms absolutely 100% free of charge. <br className="hidden md:block"/> Join the streaming revolution today.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
                    {premiumPlatforms.map((cat, idx) => (
                        <motion.div 
                            key={idx}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                            className="p-8 md:p-10 rounded-[3rem] bg-white dark:bg-white/[0.02] border-2 border-black/5 dark:border-white/10 backdrop-blur-3xl shadow-2xl dark:shadow-none flex flex-col transition-all duration-500 hover:border-red-500/30 group/card"
                        >
                        <div className="flex justify-between items-center border-b border-red-500/20 pb-4 mb-6">
                            <h3 className="text-xl md:text-2xl font-black italic uppercase tracking-tight text-red-500">
                                {cat.category}
                            </h3>
                            <button 
                                onClick={() => setExpandedIndex(expandedIndex === idx ? null : idx)}
                                className="lg:hidden p-2 rounded-full bg-red-500/10 text-red-500 hover:bg-red-500 hover:text-white transition-all"
                            >
                                <motion.div animate={{ rotate: expandedIndex === idx ? 180 : 0 }}>
                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6"/></svg>
                                </motion.div>
                            </button>
                        </div>

                        <div className={`space-y-4 flex-grow overflow-hidden transition-all duration-500 ${expandedIndex === idx ? 'max-h-[1000px] opacity-100' : 'max-h-[120px] lg:max-h-none opacity-80 lg:opacity-100'}`}>
                            {cat.platforms.map((platform, pIdx) => (
                                <div key={pIdx} className="flex items-center justify-between group py-1">
                                    <div className="space-y-0.5 max-w-[70%]">
                                        <p className="font-black text-foreground group-hover:text-red-500 transition-colors uppercase tracking-tight text-sm md:text-base">
                                            {platform.name}
                                        </p>
                                        <p className="text-[9px] md:text-[10px] text-foreground/40 font-bold uppercase tracking-widest truncate">
                                            {platform.origin} • {platform.bestFor}
                                        </p>
                                    </div>
                                    <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-green-500/10 border border-green-500/20 shrink-0">
                                        <span className="text-[8px] md:text-[10px] font-black text-green-500 uppercase tracking-widest animate-pulse">FREE</span>
                                        <CheckCircle2 size={10} className="text-green-500" />
                                    </div>
                                </div>
                            ))}
                        </div>

                        <button 
                            onClick={() => setExpandedIndex(expandedIndex === idx ? null : idx)}
                            className="mt-6 w-full py-3 rounded-2xl bg-black/5 dark:bg-white/5 border border-black/5 dark:border-white/5 text-[10px] font-black uppercase tracking-widest hover:bg-red-500 hover:text-white transition-all lg:hidden"
                        >
                            {expandedIndex === idx ? "Show Less" : "View Details"}
                        </button>
                    </motion.div>
                ))}
            </div>

            <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                className="mt-16 p-8 rounded-[2rem] bg-gradient-to-r from-red-600 to-purple-600 text-white text-center shadow-3xl"
            >
                <h4 className="text-2xl md:text-4xl font-black italic uppercase tracking-tighter mb-2">No Subscription Needed</h4>
                <p className="text-sm md:text-lg font-bold uppercase tracking-[0.2em] opacity-90">100% Free • High Quality • No Limits</p>
            </motion.div>
        </section>
    );
};

export default PremiumComparison;

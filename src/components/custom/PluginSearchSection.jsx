"use client";
import React, { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, Globe, X } from "lucide-react";
import { pluginCategories } from "@/lib/PluginStreamData";
import { Input, Button } from "@nextui-org/react";

const PluginSearchSection = () => {
    const [searchQuery, setSearchQuery] = useState("");

    const filteredPlugins = useMemo(() => {
        const cleanQuery = searchQuery.replace(/\s+/g, '').toLowerCase();
        if (cleanQuery === "") return [];

        let results = [];
        pluginCategories.forEach(category => {
            category.plugins.forEach(plugin => {
                const cleanPlugin = plugin.replace(/\s+/g, '').toLowerCase();
                const matchesSearch = cleanPlugin.includes(cleanQuery);
                if (matchesSearch) {
                    results.push({ 
                        name: plugin, 
                        region: category.region, 
                        category: category.title,
                        priority: category.title === "Premium OTT" ? 2 : (category.title === "Global Premium Collections" ? 1 : 0)
                    });
                }
            });
        });
        
        const unique = Array.from(new Set(results.map(p => p.name)))
            .map(name => results.find(p => p.name === name))
            .sort((a, b) => {
                if (b.priority !== a.priority) return b.priority - a.priority;
                return a.name.localeCompare(b.name);
            });
        
        return unique;
    }, [searchQuery]);

    return (
        <section id="plugin-search" className="py-24 container mx-auto px-6 max-w-7xl space-y-12 scroll-mt-32">
            <div className="flex flex-col items-center text-center space-y-8">
                <h2 className="text-3xl md:text-5xl font-black italic uppercase tracking-tighter">
                    Find Your <span className="text-red-500">Perfect Channel</span>
                </h2>

                {/* Search Bar */}
                <div className="w-full max-w-2xl relative group mt-8">
                    <div className="absolute -inset-1 bg-gradient-to-r from-red-600 to-purple-600 rounded-[2rem] blur opacity-20 group-focus-within:opacity-40 transition duration-500" />
                    <Input
                        value={searchQuery}
                        onChange={(e) => {
                            setSearchQuery(e.target.value);
                        }}
                        placeholder="Search any OTT platform you want to need"
                        size="lg"
                        radius="full"
                        startContent={<Search className="text-foreground/40" size={20} />}
                        endContent={searchQuery && <Button isIconOnly variant="light" size="sm" onClick={() => setSearchQuery("")}><X size={16}/></Button>}
                        classNames={{
                            inputWrapper: "h-16 md:h-20 bg-white dark:bg-white/[0.03] backdrop-blur-xl border-2 border-black/10 dark:border-white/10 group-focus-within:border-red-500/50 transition-all px-8 shadow-xl dark:shadow-none",
                            input: "text-lg md:text-xl font-bold placeholder:text-foreground/30",
                        }}
                    />
                </div>
            </div>

            {/* Results Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 min-h-[100px]">
                <AnimatePresence mode="popLayout">
                    {filteredPlugins.length > 0 ? (
                        filteredPlugins.map((plugin, idx) => (
                            <motion.div
                                key={plugin.name}
                                layout
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.8 }}
                                transition={{ duration: 0.2 }}
                                whileHover={{ y: -5, scale: 1.05 }}
                                className="p-4 rounded-3xl bg-white dark:bg-white/[0.02] border-2 border-black/10 dark:border-white/10 flex flex-col items-center text-center space-y-3 group hover:border-red-500/50 transition-all cursor-pointer shadow-xl hover:shadow-2xl"
                            >
                                <div className="w-12 h-12 rounded-2xl bg-red-500/10 flex items-center justify-center text-red-500 shadow-inner">
                                    <Globe size={22} />
                                </div>
                                <div className="flex flex-col items-center w-full px-1">
                                    <span className="text-[10px] md:text-sm font-black uppercase tracking-tight truncate w-full group-hover:text-red-500 transition-colors">
                                        {plugin.name}
                                    </span>
                                    {plugin.priority > 1 && (
                                        <span className="text-[7px] font-black bg-red-500 text-white px-2 py-0.5 rounded-full uppercase tracking-tighter animate-pulse mt-1">Premium</span>
                                    )}
                                </div>
                                <span className="text-[8px] font-black text-foreground/30 uppercase tracking-[0.2em]">{plugin.region}</span>
                            </motion.div>
                        ))
                    ) : (
                        searchQuery === "" ? (
                            <div className="col-span-full py-10 text-center opacity-40">
                                <p className="text-sm font-bold uppercase tracking-[0.2em]">Start searching to see channels</p>
                            </div>
                        ) : (
                            <div className="col-span-full py-20 text-center space-y-4">
                                <div className="w-20 h-20 bg-white/5 rounded-full flex items-center justify-center mx-auto">
                                    <Search size={40} className="text-foreground/20" />
                                </div>
                                <p className="text-xl font-bold text-foreground/40 italic">No channels found for "{searchQuery}"</p>
                            </div>
                        )
                    )}
                </AnimatePresence>
            </div>
        </section>
    );
};

export default PluginSearchSection;

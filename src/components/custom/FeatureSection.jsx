"use client";
import React, { useState } from "react";
import {
  MdLibraryMusic,
  MdLyrics,
  MdFeaturedPlayList,
  MdExplore,
  MdInsights,
  MdOfflinePin
} from "react-icons/md";
import { Card, CardBody, CardHeader, Button } from "@nextui-org/react";
import { motion, AnimatePresence } from "framer-motion";

const features = [
  {
    title: "Seamless Streaming",
    descriptions:
      "Play music from YouTube Music & YouTube without interruptions or ads. Smooth background playback included.",
    image: MdLibraryMusic,
    color: "from-blue-600 to-cyan-500",
    iconColor: "text-white",
    borderColor: "group-hover:border-blue-500/50",
    category: "Playback",
  },
  {
    title: "Smart Browsing",
    descriptions:
      "Explore Home, Charts, Moods & Genres with lightning-fast YouTube Music integration.",
    image: MdExplore,
    color: "from-purple-600 to-pink-500",
    iconColor: "text-white",
    borderColor: "group-hover:border-purple-500/50",
    category: "Browse",
  },
  {
    title: "Personalized Insights",
    descriptions:
      "Sync with YouTube Music, analyze your listening habits, and curate custom playlists.",
    image: MdInsights,
    color: "from-rose-600 to-orange-500",
    iconColor: "text-white",
    borderColor: "group-hover:border-pink-500/50",
    category: "Personalization",
  },
  {
    title: "Offline Freedom",
    descriptions: "Save your favorite tracks for offline listening anytime, anywhere. Data efficiency at its best.",
    image: MdOfflinePin,
    color: "from-emerald-600 to-teal-500",
    iconColor: "text-white",
    borderColor: "group-hover:border-green-500/50",
    category: "Playback",
  },
  {
    title: "Synced Lyrics",
    descriptions:
      "Follow every beat with synced lyrics from Musixmatch and YouTube Transcript. Multi-language support.",
    image: MdLyrics,
    color: "from-amber-500 to-yellow-400",
    iconColor: "text-white",
    borderColor: "group-hover:border-yellow-500/50",
    category: "Playback",
  },
  {
    title: "And Much More",
    descriptions:
      "SponsorBlock, Sleep Timer, Android Auto, and high-quality video options. Built for power users.",
    image: MdFeaturedPlayList,
    color: "from-red-600 to-rose-500",
    iconColor: "text-white",
    borderColor: "group-hover:border-red-500/50",
    category: "Core",
  },
];

const FeatureSection = () => {
  const categories = ["All", "Playback", "Browse", "Personalization", "Core"];
  const [selectedCategory, setSelectedCategory] = useState("All");
  const visibleFeatures = features.filter(f => selectedCategory === "All" || f.category === selectedCategory);

  return (
    <div className="py-24 px-6 relative overflow-hidden">
      {/* Background Orbs */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-[120px] -z-10"></div>
      <div className="absolute bottom-10 right-1/4 w-96 h-96 bg-secondary/10 rounded-full blur-[120px] -z-10"></div>

      <div className="text-center mb-16 space-y-4">
        <motion.h4
          className="text-primary font-bold uppercase tracking-widest text-sm"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Powerful Features
        </motion.h4>
        <motion.h1
          className="text-4xl md:text-6xl font-black tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-foreground via-foreground/90 to-muted-foreground"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
        >
          Everything you need in a <br /> <span className="text-primary">Music App</span>
        </motion.h1>
      </div>

      <div className="flex flex-wrap items-center justify-center gap-3 mb-12">
        {categories.map((cat, i) => (
          <motion.button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.05 }}
            className={`px-6 py-2.5 rounded-2xl text-sm font-bold transition-all duration-300 ${selectedCategory === cat
                ? "bg-primary text-primary-foreground shadow-[0_0_20px_rgba(var(--primary),0.3)] scale-105"
                : "bg-background/40 backdrop-blur-md border border-white/5 text-muted-foreground hover:bg-white/10"
              }`}
          >
            {cat}
          </motion.button>
        ))}
      </div>

      <motion.div
        layout
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto"
      >
        <AnimatePresence mode='popLayout'>
          {visibleFeatures.map((feature, index) => (
            <motion.div
              layout
              key={feature.title}
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ duration: 0.4 }}
              whileHover={{ y: -8 }}
              className="group"
            >
              <Card
                isBlurred
                className="h-full border border-white/5 bg-background/40 backdrop-blur-2xl shadow-xl rounded-[2.5rem] p-4 flex flex-col items-center group-hover:border-primary/20 transition-colors duration-500 overflow-hidden"
              >
                <div className={`p-8 rounded-[2rem] bg-gradient-to-br ${feature.color} shadow-2xl mb-8 group-hover:scale-110 transition-transform duration-500`}>
                  <feature.image size={48} className={feature.iconColor} />
                </div>

                <CardBody className="text-center p-0 gap-4">
                  <h3 className="text-2xl font-black tracking-tight text-foreground">
                    {feature.title}
                  </h3>
                  <p className="text-default-500 text-lg leading-relaxed font-medium px-4">
                    {feature.descriptions}
                  </p>
                </CardBody>

                <div className="mt-auto pt-8 pb-4">
                  <Button
                    as="a"
                    href="/download"
                    variant="light"
                    radius="full"
                    className="font-bold text-primary group-hover:bg-primary/10 transition-colors px-8"
                  >
                    Details
                  </Button>
                </div>
              </Card>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </div>
  );
};

export default FeatureSection;

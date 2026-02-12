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
 import { motion } from "framer-motion";

const features = [
  {
    title: "Streaming Music",
    descriptions:
      "Play music from YouTube Music or YouTube free without ads in the background",
    image: MdLibraryMusic,
    color: "from-blue-500/20 to-blue-500/10 text-blue-500",
    iconColor: "text-blue-500",
    borderColor: "group-hover:border-blue-500/50",
    category: "Playback",
  },
  {
    title: "Browsing",
    descriptions:
      "Browsing Home, Charts, Podcast, Moods & Genre with YouTube Music data at high speed",
    image: MdExplore,
    color: "from-purple-500/20 to-purple-500/10 text-purple-500",
    iconColor: "text-purple-500",
    borderColor: "group-hover:border-purple-500/50",
    category: "Browse",
  },
  {
    title: "Personalized",
    descriptions:
      "Analyze your playing data, create custom playlists, and sync with YouTube Music",
    image: MdInsights,
    color: "from-pink-500/20 to-pink-500/10 text-pink-500",
    iconColor: "text-pink-500",
    borderColor: "group-hover:border-pink-500/50",
    category: "Personalization",
  },
  {
    title: "Offline Playing",
    descriptions: "Caching and can save data for offline playback",
    image: MdOfflinePin,
    color: "from-green-500/20 to-green-500/10 text-green-500",
    iconColor: "text-green-500",
    borderColor: "group-hover:border-green-500/50",
    category: "Playback",
  },
  {
    title: "Synced lyrics",
    descriptions:
      "Synced lyrics from Musixmatch and YouTube Transcript and translated lyrics from Musixmatch",
    image: MdLyrics,
    color: "from-yellow-500/20 to-yellow-500/10 text-yellow-500",
    iconColor: "text-yellow-500",
    borderColor: "group-hover:border-yellow-500/50",
    category: "Playback",
  },
  {
    title: "Many more",
    descriptions:
      "Many more features like SponsorBlock, Sleep Timer, Android Auto, Video Option, etc",
    image: MdFeaturedPlayList,
    color: "from-red-500/20 to-red-500/10 text-red-500",
    iconColor: "text-red-500",
    borderColor: "group-hover:border-red-500/50",
    category: "Core",
  },
];

const FeatureSection = () => {
  const categories = ["All", "Playback", "Browse", "Personalization", "Core"];
  const [selectedCategory, setSelectedCategory] = useState("All");
  const visibleFeatures = features.filter(f => selectedCategory === "All" || f.category === selectedCategory);
  return (
    <div className="py-20 px-6 relative overflow-hidden">
       {/* Background decorative elements */}
       <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[100px] -z-10"></div>
       <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-secondary/20 rounded-full blur-[100px] -z-10"></div>
       <div className="absolute inset-0 -z-10 opacity-20" style={{ backgroundImage: "radial-gradient(circle at 20% 15%, rgba(59,130,246,0.08), transparent 40%), radial-gradient(circle at 80% 75%, rgba(168,85,247,0.08), transparent 40%), repeating-linear-gradient(0deg, rgba(255,255,255,0.03) 0px, rgba(255,255,255,0.03) 1px, transparent 1px, transparent 22px)" }}></div>

      <h1 className="text-center scroll-m-20 text-3xl md:text-4xl font-bold tracking-tight lg:text-6xl bg-clip-text py-8 md:py-10 text-transparent bg-gradient-to-r from-gradientstart to-gradientend">
        Features
      </h1>
      <div className="flex items-center justify-center gap-2 mb-6 md:mb-8 flex-wrap">
        {categories.map(cat => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={`px-3 md:px-4 py-1.5 md:py-2 rounded-lg md:rounded-xl text-xs md:text-sm font-medium transition-all duration-300 ${
              selectedCategory === cat
                ? "bg-primary text-primary-foreground shadow-lg shadow-primary/20 scale-105"
                : "bg-background/50 border border-border/50 text-muted-foreground hover:bg-secondary hover:text-foreground hover:border-primary/30"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8 max-w-7xl mx-auto">
        {visibleFeatures.map((feature, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 24, scale: 0.98 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5, delay: index * 0.05 }}
            whileHover={{ y: -6 }}
          >
            <Card
              isBlurred
              className={`py-6 sm:py-7 md:py-8 border-small border-default-200/50 bg-background/40 backdrop-blur-xl shadow-lg hover:shadow-2xl transition-all duration-500 ease-out group ${feature.borderColor} rounded-2xl md:rounded-3xl ring-1 ring-transparent hover:ring-primary/30 relative overflow-hidden`}
            >
              <motion.div
                className="absolute inset-0 pointer-events-none"
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
              >
                <motion.div
                  className="absolute -left-1/3 top-0 h-full w-1/3 bg-gradient-to-r from-white/10 to-transparent"
                  initial={{ x: "-100%" }}
                  whileHover={{ x: "250%" }}
                  transition={{ duration: 0.8 }}
                />
              </motion.div>
              <CardHeader className="flex justify-center pb-5 md:pb-6">
                <div className={`p-4 sm:p-5 md:p-6 rounded-2xl bg-gradient-to-br ${feature.color} shadow-inner`}>
                  <feature.image size={40} className={`drop-shadow-md ${feature.iconColor}`} />
                </div>
              </CardHeader>
              <CardBody className="text-center gap-3 px-8">
                <h1 className="text-xl md:text-2xl font-bold tracking-tight text-foreground group-hover:bg-clip-text group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-gradientstart group-hover:to-gradientend transition-all duration-300">
                  {feature.title}
                </h1>
                <p className="text-default-500 leading-relaxed font-medium text-sm md:text-base">
                  {feature.descriptions}
                </p>
                <div className="mt-4">
                  <Button as="a" href="/download" color="default" variant="light" radius="full" className="hover:scale-105 transition-transform text-xs md:text-sm px-4 py-1.5">
                    Learn more
                  </Button>
                </div>
              </CardBody>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default FeatureSection;

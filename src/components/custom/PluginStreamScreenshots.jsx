"use client";
import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence, useAnimation } from "framer-motion";
import Image from "next/image";
import { X } from "lucide-react";

const images = [
  "/pluginstream/5.png",
  "/pluginstream/6.png",
  "/pluginstream/7.png",
  "/pluginstream/8.png",
  "/pluginstream/9.png",
];

const PluginStreamScreenshots = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [isPaused, setIsPaused] = useState(false);
  const scrollRef = useRef(null);

  // Triple the images to ensure a seamless infinite loop
  const duplicatedImages = [...images, ...images, ...images];

  return (
    <section className="py-20 overflow-hidden bg-black/5 dark:bg-white/5">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 space-y-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-black italic uppercase tracking-tighter"
          >
            App <span className="text-red-600">Screenshots</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-foreground/60 text-lg font-medium max-w-2xl mx-auto"
          >
            Explore the sleek and intuitive interface of PluginStream. Designed for the ultimate cinematic experience.
          </motion.p>
        </div>

        <div 
          className="relative w-full"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* Scrolling Container with Drag support */}
          <div className="flex overflow-hidden group">
            <motion.div 
              className="flex gap-4 pb-8 cursor-grab active:cursor-grabbing"
              drag="x"
              dragConstraints={{ left: -2000, right: 0 }} // Approximate constraint
              animate={{ 
                x: isPaused ? undefined : ["0%", "-33.33%"] 
              }}
              transition={{ 
                duration: 40, 
                ease: "linear", 
                repeat: Infinity,
                repeatType: "loop"
              }}
            >
              {duplicatedImages.map((src, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: (index % images.length) * 0.05 }}
                  onClick={() => setSelectedImage(src)}
                  className="flex-shrink-0 w-[160px] md:w-[220px] aspect-[9/16] relative rounded-[1.5rem] md:rounded-[2rem] overflow-hidden border-2 md:border-4 border-black/10 dark:border-white/10 shadow-xl group/item"
                >
                  <Image
                    src={src}
                    alt={`Screenshot ${index + 1}`}
                    fill
                    className="object-cover transition-transform duration-500 group-hover/item:scale-110 pointer-events-none"
                    draggable={false}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover/item:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                     <div className="p-2 md:p-3 rounded-full bg-white/20 backdrop-blur-md border border-white/30 scale-0 group-hover/item:scale-100 transition-transform duration-300">
                        <span className="text-white font-bold uppercase tracking-widest text-[10px]">View</span>
                     </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
          
          {/* Subtle instruction */}
          <div className="text-center mt-4">
            <p className="text-[10px] md:text-xs font-bold uppercase tracking-widest text-foreground/40 animate-pulse">
              Drag to swap • Hover to pause • Click to enlarge
            </p>
          </div>
        </div>
      </div>

      {/* Full Screen Overlay */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 backdrop-blur-xl p-4 md:p-10"
            onClick={() => setSelectedImage(null)}
          >
            <motion.button
              initial={{ scale: 0, rotate: -90 }}
              animate={{ scale: 1, rotate: 0 }}
              exit={{ scale: 0, rotate: 90 }}
              className="absolute top-6 right-6 p-4 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors z-[110]"
              onClick={(e) => {
                e.stopPropagation();
                setSelectedImage(null);
              }}
            >
              <X size={32} strokeWidth={3} />
            </motion.button>

            <motion.div
              initial={{ scale: 0.8, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.8, opacity: 0, y: 20 }}
              className="relative w-full h-full max-w-5xl flex items-center justify-center"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative w-full h-full aspect-[9/16] max-h-[90vh]">
                <Image
                  src={selectedImage}
                  alt="Full screen screenshot"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default PluginStreamScreenshots;

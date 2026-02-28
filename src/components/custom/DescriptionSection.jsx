"use client";
import React from "react";
import Image from "next/image";
import { Card, CardBody } from "@nextui-org/react";
import { motion } from "framer-motion";

const DescriptionSection = () => {
  return (
    <section className="description-section relative py-24 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-64 h-64 bg-primary/5 rounded-full blur-3xl -z-10 animate-pulse"></div>

      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <motion.div
            className="relative group"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="absolute -inset-4 bg-gradient-to-tr from-primary/30 to-secondary/30 rounded-3xl opacity-20 group-hover:opacity-40 blur-2xl transition duration-700"></div>
            <Image
              src="/mockup/description.png"
              alt="Muxio Features"
              width={800}
              height={750}
              className="relative drop-shadow-[0_20px_50px_rgba(0,0,0,0.3)] rounded-3xl hover:scale-[1.02] transition-transform duration-700 ease-in-out border border-white/5"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
          >
            <div>
              <h4 className="text-primary font-bold uppercase tracking-widest text-sm mb-4">Core Philosophy</h4>
              <h2 className="text-4xl md:text-5xl font-black tracking-tighter bg-clip-text text-transparent bg-gradient-to-r from-foreground via-foreground/80 to-muted-foreground leading-tight">
                Simple yet Powerful. <br />
                <span className="text-primary">User-Centric</span> Design.
              </h2>
            </div>

            <Card className="bg-background/40 backdrop-blur-xl border border-white/5 shadow-2xl rounded-3xl overflow-hidden group">
              <CardBody className="p-8 gap-6">
                <div className="flex items-start gap-4">
                  <div className="w-1.5 h-16 bg-gradient-to-b from-primary to-secondary rounded-full shrink-0" />
                  <div>
                    <h4 className="text-xl md:text-2xl font-bold tracking-tight mb-3">
                      Experience ad-free streaming at its finest.
                    </h4>
                    <p className="text-default-500 text-lg leading-relaxed font-medium">
                      Muxio brings music discovery inspired by top platforms like YouTube Music & SoundCloud.
                      With playback up to 256kbps audio or 1080p video, we ensure every beat is crystal clear.
                      Plus, it&apos;s open-source and privacy-first.
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4 mt-4">
                  <div className="p-4 rounded-2xl bg-primary/5 border border-primary/10">
                    <p className="font-bold text-primary">256kbps</p>
                    <p className="text-xs text-default-400">High Fidelity Audio</p>
                  </div>
                  <div className="p-4 rounded-2xl bg-secondary/5 border border-secondary/10">
                    <p className="font-bold text-secondary">No Ads</p>
                    <p className="text-xs text-default-400">Pure Listening Experience</p>
                  </div>
                </div>
              </CardBody>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default DescriptionSection;

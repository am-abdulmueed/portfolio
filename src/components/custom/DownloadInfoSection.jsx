"use client";
import React from "react";
import Link from "next/link";
import { Button, Card, CardBody } from "@nextui-org/react";
import { MdDownload, MdStar } from "react-icons/md";
import { motion } from "framer-motion";
import Download from "./Download";

const DownloadInfoSection = () => {
  return (
    <section className="download-cta relative py-32 overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-transparent via-primary/5 to-transparent"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] bg-primary/10 rounded-full blur-[120px] -z-10 animate-pulse"></div>

      <div className="container mx-auto px-6">
        <Card className="bg-background/40 backdrop-blur-3xl border border-white/5 shadow-2xl rounded-[3rem] overflow-hidden">
          <CardBody className="p-12 md:p-20">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
              >
                <Download />
              </motion.div>

              <motion.div
                className="space-y-8"
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
              >
                <div className="space-y-4">
                  <div className="flex items-center gap-2 text-primary">
                    <MdStar className="animate-spin-slow" />
                    <span className="text-xs font-black uppercase tracking-widest">Join the Community</span>
                  </div>
                  <h2 className="text-5xl md:text-6xl font-black tracking-tighter leading-tight">
                    Start Your <span className="text-primary">Muxio</span> <br /> Journey Today.
                  </h2>
                  <p className="text-default-500 text-xl font-medium leading-relaxed">
                    Download Muxio for your device and unlock a world of ad-free music,
                    synced lyrics, and high-quality streaming. Built with ❤️ for enthusiasts.
                  </p>
                </div>

                <div className="flex flex-wrap items-center gap-6">
                  <Button
                    color="primary"
                    size="lg"
                    href="/download"
                    as={Link}
                    radius="full"
                    className="h-16 px-10 font-black text-lg shadow-[0_0_30px_rgba(var(--primary),0.2)] hover:scale-105 transition-transform"
                    endContent={<MdDownload size={24} className="animate-bounce" />}
                  >
                    Download Now
                  </Button>
                  <div className="flex flex-col">
                    <span className="text-xs font-bold text-default-400 uppercase tracking-tighter">Availability</span>
                    <span className="text-sm font-bold">Android • Windows • iOS</span>
                  </div>
                </div>
              </motion.div>
            </div>
          </CardBody>
        </Card>
      </div>
    </section>
  );
};

export default DownloadInfoSection;

"use client";

import { Button, Chip, Card, CardBody } from "@nextui-org/react";
import { useRouter } from "next/navigation";
import React from "react";
import { motion } from "framer-motion";
import { MdDownload } from "react-icons/md";
import Announcement from "../Announcement";
import RatingCard from "../RatingCard";
import AnimatedShinyText from "../AnimatedShinyText";

const HomeHeading = () => {
  const version = "2.0.7";
  const router = useRouter();

  return (
    <div className="flex flex-col gap-6 relative mt-12 md:mt-0">
      <div className="flex flex-col gap-2">
        <Announcement />
      </div>

      <div className="relative space-y-4">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="scroll-m-20 text-5xl font-extrabold tracking-tight lg:text-7xl leading-[1.1] bg-clip-text text-transparent bg-gradient-to-br from-foreground via-foreground/90 to-muted-foreground">
            Muxio: The Future of <br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary italic animate-gradient-x bg-[length:200%_auto]">
              Music Discovery
            </span>
          </h2>
        </motion.div>

        <motion.p
          className="text-lg md:text-xl text-default-500 max-w-xl leading-relaxed font-medium"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          An all-in-one platform to stream, discover, and download from top platforms.
          Experience music like never before with Muxio — built for creators, listeners, and everyone in between.
        </motion.p>
      </div>

      <div className="flex flex-wrap items-center gap-6 mt-4">
        <motion.div
          whileHover={{ scale: 1.05, filter: "brightness(1.1)" }}
          whileTap={{ scale: 0.95 }}
          className="relative z-10"
        >
          <div className="absolute -inset-1 bg-gradient-to-r from-gradientstart to-gradientend rounded-full blur opacity-40 animate-pulse"></div>
          <Button
            color="primary"
            size="lg"
            radius="full"
            className="font-bold shadow-xl px-10 relative h-14 text-lg"
            endContent={<MdDownload size={24} className="animate-bounce" />}
            onPress={() => router.push('/download')}
          >
            Get Muxio Free
          </Button>
        </motion.div>
        <div className="flex flex-col">
          <span className="text-xs font-bold text-default-400 uppercase tracking-tighter">Current Build</span>
          <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">v{version}</span>
        </div>
      </div>

      <div className="flex gap-4 items-center mt-2">
        <RatingCard rating={4.9} users="20k+" />
      </div>

      {/* Decorative Orbs */}
      <motion.div
        className="absolute -top-20 -left-20 w-40 h-40 rounded-full bg-primary/20 blur-[80px] -z-10"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3]
        }}
        transition={{ duration: 8, repeat: Infinity }}
      />
      <motion.div
        className="absolute bottom-0 -right-20 w-60 h-60 rounded-full bg-secondary/10 blur-[100px] -z-10"
        animate={{
          scale: [1.2, 1, 1.2],
          opacity: [0.2, 0.4, 0.2]
        }}
        transition={{ duration: 10, repeat: Infinity }}
      />
    </div>
  );
};

export default HomeHeading;

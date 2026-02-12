"use client";

import { Button, Chip, Card, CardBody } from "@nextui-org/react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";
import { motion } from "framer-motion";
import { MdDownload, MdStar } from "react-icons/md";
import Announcement from "../Announcement";
import { FaAndroid, FaWindows, FaApple, FaLinux } from "react-icons/fa";
import RatingCard from "../RatingCard";

const HomeHeading = () => {
  const version = "1.01";
  const router = useRouter();

  return (
    <div className="flex flex-col gap-4 relative">
      <Announcement />
      <div className="relative">
        <h2 className="scroll-m-20 text-4xl font-bold tracking-tight lg:text-6xl pb-2 bg-clip-text text-transparent bg-gradient-to-r from-gradientstart to-gradientend">
          Muxio: Discover, trend & stream from top platforms
        </h2>
        <motion.div
          className="absolute left-0 bottom-0 h-[3px] bg-gradient-to-r from-gradientstart to-gradientend rounded-full"
          initial={{ width: "0%" }}
          animate={{ width: "60%" }}
          transition={{ duration: 0.8 }}
        />
      </div>
      <h4 className="scroll-m-20 text-xl font-medium tracking-tight text-default-500 max-w-2xl">
        Stream your favorite music, videos, podcasts, radio and more from
        YouTube Music with muxio for free.
      </h4>
      <div className="flex flex-col items-start gap-6 mt-6">
        <div className="flex items-center gap-4 relative z-[100]">
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
          >
            <Button
              color="primary"
              size="lg"
              radius="full"
              className="font-semibold shadow-lg shadow-primary/40 cursor-pointer relative z-[100] pointer-events-auto"
              endContent={<MdDownload size={20} />}
              onPress={() => router.push('/download')}
            >
              Download Now
            </Button>
          </motion.div>
          <p className="text-default-500 font-medium">
             v{version}
          </p>
        </div>
      </div>
      <div className="flex gap-2 items-center text-sm text-default-400 mt-2">
         <span>Supports:</span>
         <Chip size="sm" variant="dot" color="success">Android</Chip>
         <Chip size="sm" variant="dot" color="warning">iOS</Chip>
      </div>
      <motion.div
        className="absolute -top-10 -right-10 w-24 h-24 rounded-full bg-gradient-to-br from-primary/20 to-secondary/20 blur-2xl"
        animate={{ y: [0, -6, 0], x: [0, 6, 0] }}
        transition={{ duration: 6, repeat: Infinity }}
      />
      <motion.div
        className="absolute -bottom-6 -left-12 w-32 h-32 rounded-full bg-gradient-to-br from-secondary/20 to-primary/20 blur-2xl"
        animate={{ y: [0, 8, 0], x: [0, -6, 0] }}
        transition={{ duration: 7, repeat: Infinity }}
      />
      <RatingCard rating={4.8} users="20k+" />
    </div>
  );
};

export default HomeHeading;

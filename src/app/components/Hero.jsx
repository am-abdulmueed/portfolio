"use client";
import React from "react";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import Typewriter from "typewriter-effect";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";

import { motion } from "framer-motion";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import Contact from "../olds/Contact";
import {
  DownloadIcon,
  Github,
  Instagram,
  InstagramIcon,
  Linkedin,
  Mail,
  ArrowRight,
  Sparkles,
  Code2,
  Palette,
  Zap,
  Star,
  Heart,
  PhoneCall,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import Myinfo from "./Myinfo";
import SparklesText from "@/components/ui/sparkles-text";
import ContactDialog from "./Myinfo";

const socialLinks = [
  { icon: Github, href: "https://github.com/am-abdulmueed", label: "GitHub" },
  {
    icon: Linkedin,
    href: "https://linkedin.com/in/am-abdulmueed",
    label: "LinkedIn",
  },
  {
    icon: Instagram,
    href: "https://instagram.com/a.b.d.u.l.m.u.e.e.d",
    label: "Instagram",
  },
  { icon: Mail, href: "mailto:am-abdulmueed@gmail.com", label: "Email" },
];

const skills = [
  "React",
  "Node.js",
  "TypeScript",
  "Next.js",
  "Python",
  "MongoDB",
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: {
    opacity: 0,
    y: 30,
    scale: 0.95,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 15,
    },
  },
};

const titleVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 80,
      damping: 20,
      duration: 1.2,
    },
  },
};

function Hero() {
  const { toast } = useToast();
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 md:px-12 lg:px-24 overflow-hidden pt-8 sm:pt-0">
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-neutral-950 dark:via-neutral-900 dark:to-purple-950/20"></div>

        <motion.div
          animate={{
            x: [0, 100, 0],
            y: [0, -100, 0],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute top-10 sm:top-20 right-10 sm:right-20 w-16 h-16 sm:w-32 sm:h-32 bg-gradient-to-r from-blue-400/20 to-purple-400/20 rounded-full blur-xl hidden sm:block"
        />
        <motion.div
          animate={{
            x: [0, -50, 0],
            y: [0, 50, 0],
            rotate: [360, 180, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute bottom-10 sm:bottom-20 left-10 sm:left-20 w-12 h-12 sm:w-24 sm:h-24 bg-gradient-to-r from-pink-400/20 to-orange-400/20 rounded-full blur-xl hidden sm:block"
        />
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center w-full"
      >
        {/* Text Content */}
        <div className="text-center lg:text-left order-2 lg:order-1 mb-9">
          {/* Greeting Badge */}
          <motion.div variants={itemVariants} className="mb-4 sm:mb-6">
            <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-2 bg-white/80 dark:bg-neutral-800/80 backdrop-blur-sm rounded-full border border-neutral-200/50 dark:border-neutral-700/50 shadow-lg">
              <motion.div
                animate={{ rotate: [0, 14, -8, 14, -4, 10, 0] }}
                transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
                className="text-sm sm:text-base"
              >
                👋
              </motion.div>
              <span className="text-xs sm:text-sm font-medium text-neutral-700 dark:text-neutral-300">
                Hi, I'm{" "}
                <strong className="text-blue-600 dark:text-blue-400">
                  Abdul Mueed
                </strong>
              </span>
            </div>
          </motion.div>

          {/* Main Title */}
          <motion.div variants={titleVariants} className="mb-6 sm:mb-8">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl font-bold leading-tight sm:leading-none mb-2 sm:mb-4">
              <span className="block bg-gradient-to-r from-neutral-900 via-neutral-700 to-neutral-900 dark:from-white dark:via-neutral-300 dark:to-white bg-clip-text text-transparent">
                Fullstack
              </span>
              <span className="block bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent animate-pulse min-h-[1.2em]">
                <Typewriter
                  options={{
                    strings: ["Developer", "Designer", "Creator", "Innovator"],
                    autoStart: true,
                    loop: true,
                    deleteSpeed: 50,
                    delay: 100,
                  }}
                />
              </span>
            </h1>
          </motion.div>

          {/* Description */}
          <motion.div variants={itemVariants} className="mb-6 sm:mb-8">
            <p className="text-base sm:text-lg md:text-xl text-neutral-600 dark:text-neutral-300 leading-relaxed mb-4 sm:mb-6">
              Specialized in{" "}
              <span className="text-blue-600 dark:text-blue-400 font-semibold">
                Web Design
              </span>
              ,
              <span className="text-purple-600 dark:text-purple-400 font-semibold">
                {" "}
                UX/UI
              </span>
              , and
              <span className="text-pink-600 dark:text-pink-400 font-semibold">
                {" "}
                Full-Stack Development
              </span>
              .
            </p>
            <p className="text-sm sm:text-base text-neutral-500 dark:text-neutral-400 leading-relaxed">
              I help startups and business owners create compelling digital
              experiences that
              <span className="text-green-600 dark:text-green-400 font-medium">
                {" "}
                increase brand awareness
              </span>{" "}
              and
              <span className="text-orange-600 dark:text-orange-400 font-medium">
                {" "}
                drive sales
              </span>
              .
            </p>
          </motion.div>

          {/* Skills */}
          <motion.div variants={itemVariants} className="mb-6 sm:mb-8">
            <div className="flex flex-wrap gap-2 justify-center lg:justify-start">
              {skills.map((skill, index) => (
                <motion.span
                  key={skill}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 1 + index * 0.1 }}
                  whileHover={{ scale: 1.1, y: -2 }}
                  className="px-2 sm:px-3 py-1 text-xs font-medium bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/30 dark:to-purple-900/30 text-blue-700 dark:text-blue-300 rounded-full border border-blue-200/50 dark:border-blue-700/50 cursor-pointer"
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </motion.div>

          {/* Action Buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start mb-6 sm:mb-8"
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full sm:w-auto"
            >
              <a
                href="https://cal.com/am-abdulmueed/30min"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button className="group w-full sm:w-auto px-6 sm:px-8 py-4 sm:py-6 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full font-semibold shadow-lg hover:shadow-2xl transition-all duration-300 border-0 text-sm sm:text-base">
                  <PhoneCall className="w-4 h-4 mr-2 group-hover:text-gray-300 transition-colors animate-wiggle" />
                  Book a Call
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: isLoaded ? 1 : 0, x: isLoaded ? 0 : -20 }}
              transition={{ delay: 1.5, duration: 0.8 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full sm:w-auto"
            >
              {/* <Button className="w-full sm:w-auto px-6 sm:px-8 py-4 sm:py-6 bg-white dark:bg-neutral-800 text-neutral-800 dark:text-white rounded-full font-semibold shadow-lg hover:shadow-xl border border-neutral-200 dark:border-neutral-700 transition-all duration-300 text-sm sm:text-base">
               dsds
              </Button> */}
               <ContactDialog />
            </motion.div>
          </motion.div>

          {/* Social Links */}
          <motion.div
            variants={itemVariants}
            className="flex gap-3 sm:gap-4 justify-center lg:justify-start"
          >
            {socialLinks.map((social, index) => (
              <motion.a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.8 + index * 0.1 }}
                whileHover={{ scale: 1.2, y: -3 }}
                whileTap={{ scale: 0.9 }}
                className="w-10 h-10 sm:w-12 sm:h-12 bg-white/80 dark:bg-neutral-800/80 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg hover:shadow-xl border border-neutral-200/50 dark:border-neutral-700/50 group transition-all duration-300"
              >
                <social.icon className="w-4 h-4 sm:w-5 sm:h-5 text-neutral-600 dark:text-neutral-300 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors" />
              </motion.a>
            ))}
          </motion.div>
        </div>

        {/* Visual Element */}
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.5, duration: 1, type: "spring" }}
          className="relative flex items-center justify-center order-1 lg:order-2 mb-8 lg:mb-0"
        >
          <div className="relative">
            {/* Main Circle - Responsive sizing */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 rounded-full bg-gradient-to-r from-blue-400/20 via-purple-400/20 to-pink-400/20 backdrop-blur-sm border border-white/30 dark:border-neutral-700/30"
            />

            {/* Center Content */}
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-6 sm:p-8">
              <motion.div
                // animate={{ y: [-5, 5, -5] }}
                // transition={{
                //   duration: 4,
                //   repeat: Infinity,
                //   ease: "easeInOut",
                // }}
                // className="mb-3 sm:mb-4"
              >
                <div>
                  <Image
                    src="/b.webp"
                    width={1000}
                    height={1000}
                    alt="Abdul Mueed"
                    className="rounded-full object-cover shadow-lg"
                  />
                </div>

                {/* <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl flex items-center justify-center shadow-xl">
                  <Code2 className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
                </div> */}
              </motion.div>

              {/* <h3 className="text-lg sm:text-2xl font-bold text-neutral-800 dark:text-white mb-1 sm:mb-2">
                Crafting Digital
              </h3>
              <p className="text-base sm:text-lg text-transparent bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text font-semibold">
                Experiences
              </p>

              Animated Dots
              <div className="flex gap-2 mt-3 sm:mt-4">
                <motion.div
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 2, repeat: Infinity, delay: 0 }}
                  className="w-2 h-2 sm:w-3 sm:h-3 bg-blue-500 rounded-full"
                />
                <motion.div
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 2, repeat: Infinity, delay: 0.3 }}
                  className="w-2 h-2 sm:w-3 sm:h-3 bg-purple-500 rounded-full"
                />
                <motion.div
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 2, repeat: Infinity, delay: 0.6 }}
                  className="w-2 h-2 sm:w-3 sm:h-3 bg-pink-500 rounded-full"
                />
              </div> */}
            </div>

            {/* Floating Icons - Adjusted for mobile */}
            <motion.div
              animate={{
                x: [0, 20, 0],
                y: [0, -20, 0],
                rotate: [0, 180, 360],
              }}
              transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-4 -right-4 sm:-top-8 sm:-right-8 w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-r from-pink-500 to-rose-500 rounded-full flex items-center justify-center shadow-lg"
            >
              <Palette className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
            </motion.div>

            <motion.div
              animate={{
                x: [0, -15, 0],
                y: [0, 15, 0],
                rotate: [360, 180, 0],
              }}
              transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -bottom-3 -left-3 sm:-bottom-6 sm:-left-6 w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center shadow-lg"
            >
              <Zap className="w-4 h-4 sm:w-6 sm:h-6 text-white" />
            </motion.div>
          </div>
        </motion.div>
      </motion.div>

      {/* Scroll Indicator - Hidden on mobile */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2.5, duration: 1 }}
        className="absolute bottom-4 sm:bottom-8 left-1/2 transform -translate-x-1/2 hidden sm:block"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="w-6 h-10 border-2 border-neutral-300 dark:border-neutral-600 rounded-full flex justify-center"
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="w-1 h-2 bg-neutral-400 dark:bg-neutral-500 rounded-full mt-2"
          />
        </motion.div>
      </motion.div>
    </section>
  );
}

export default Hero;

<style jsx global>{`
  @keyframes wiggle {
    0%, 100% { transform: rotate(-15deg) translateY(0); }
    20% { transform: rotate(15deg) translateY(-2px); }
    40% { transform: rotate(-10deg) translateY(2px); }
    60% { transform: rotate(10deg) translateY(-2px); }
    80% { transform: rotate(-5deg) translateY(2px); }
  }
  .animate-wiggle {
    animation: wiggle 1s infinite;
    display: inline-block;
  }
`}</style>

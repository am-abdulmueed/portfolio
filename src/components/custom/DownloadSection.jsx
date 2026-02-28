"use client";
import { Image, Link, Button, Card, CardBody, CardHeader, Chip } from "@nextui-org/react";
import React from "react";
import { motion } from "framer-motion";
import Announcement from "./Announcement";
import {
  FaAndroid, FaWindows, FaApple, FaLinux,
  FaGooglePlay, FaAppStoreIos, FaMobileAlt, FaDesktop,
  FaArrowRight
} from "react-icons/fa";
import { MdDownload, MdVerified, MdSecurity } from "react-icons/md";
import RatingCard from "./RatingCard";

const mobilePlatforms = [
  {
    name: "Play Store",
    url: "https://play.google.com/store/apps/details?id=com.betapix.muxio",
    icon: <FaGooglePlay size={28} />,
    description: "Official Android Store",
    color: "from-[#34A853] to-[#0F9D58]",
    tag: "Recommended"
  },
  {
    name: "App Store",
    url: "https://apps.apple.com/app/com.betapix.muxio",
    icon: <FaAppStoreIos size={28} />,
    description: "iOS & iPadOS App",
    color: "from-[#0071E3] to-[#007AFF]",
    tag: "Coming Soon"
  },
];

const desktopPlatforms = [
  {
    name: "Windows",
    icon: <FaWindows size={32} />,
    url: "https://github.com/am-abdulmueed/muxio/releases",
    description: "Standard .exe installer for PC",
    color: "from-[#0078D4] to-[#00A4EF]",
  },
  {
    name: "macOS",
    icon: <FaApple size={32} />,
    url: "https://github.com/am-abdulmueed/muxio/releases",
    description: "Universal .dmg for Intel & M1/M2",
    color: "from-foreground via-foreground/80 to-muted-foreground",
  },
  {
    name: "Linux",
    icon: <FaLinux size={32} />,
    url: "https://github.com/am-abdulmueed/muxio/releases",
    description: "Portable AppImage & .deb packages",
    color: "from-[#FCC624] to-[#E95420]",
  },
];

const DownloadSection = () => {
  return (
    <section className="download-section min-h-screen py-32 relative overflow-x-hidden">
      {/* Cinematic Background */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_50%_0%,rgba(var(--primary-rgb),0.15),transparent_50%)]"></div>
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] -z-10 animate-pulse"></div>
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-secondary/5 rounded-full blur-[120px] -z-10 animate-pulse delay-1000"></div>

      <div className="container mx-auto px-6 max-w-7xl">
        <div className="flex flex-col items-center text-center mb-20 space-y-6">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <Announcement />
          </motion.div>

          <motion.h1
            className="text-5xl md:text-7xl font-black tracking-tighter leading-tight bg-clip-text text-transparent bg-gradient-to-br from-foreground via-foreground/90 to-muted-foreground"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            Ready to <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary italic">Elevate</span> <br />
            Your Music Experience?
          </motion.h1>

          <motion.p
            className="text-default-500 text-xl font-medium max-w-2xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            Choose your device and get started with the world's most versatile music discovery platform.
          </motion.p>

          <motion.div
            className="flex items-center gap-6 pt-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            <RatingCard rating={4.9} users="20,000+" />
            <div className="flex flex-col items-start gap-1">
              <div className="flex items-center gap-2 text-primary font-bold text-sm">
                <MdVerified /> <span>Official Build</span>
              </div>
              <div className="flex items-center gap-2 text-default-400 font-bold text-xs uppercase tracking-widest">
                <MdSecurity /> <span>Safe & Secure</span>
              </div>
            </div>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Mobile Powerhouse */}
          <div className="space-y-8">
            <div className="flex items-center gap-4 px-2">
              <div className="h-10 w-1.5 bg-primary rounded-full" />
              <h3 className="text-3xl font-black uppercase tracking-tight">Mobile Experience</h3>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {mobilePlatforms.map((item, key) => (
                <motion.div
                  key={key}
                  whileHover={{ y: -5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <Card
                    isPressable
                    as={Link}
                    href={item.url}
                    isExternal
                    className="border border-white/5 bg-background/40 backdrop-blur-2xl p-4 rounded-[2.5rem] shadow-xl group overflow-hidden"
                  >
                    <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${item.color} opacity-0 group-hover:opacity-10 blur-2xl transition-opacity`} />
                    <CardBody className="flex flex-col items-start gap-6">
                      <div className={`p-4 rounded-3xl bg-gradient-to-br ${item.color} text-white shadow-lg`}>
                        {item.icon}
                      </div>
                      <div className="space-y-1">
                        <div className="flex items-center gap-2">
                          <h4 className="font-black text-xl">{item.name}</h4>
                          <Chip size="sm" variant="flat" className="text-[9px] font-black uppercase tracking-widest h-5">{item.tag}</Chip>
                        </div>
                        <p className="text-sm text-default-400 font-medium">{item.description}</p>
                      </div>
                    </CardBody>
                  </Card>
                </motion.div>
              ))}
            </div>

            <Card className="bg-primary/5 border border-primary/20 rounded-[2.5rem] p-8">
              <div className="flex flex-col gap-4">
                <h4 className="text-xl font-black">Why Muxio Mobile?</h4>
                <ul className="grid grid-cols-2 gap-4 text-sm font-medium text-default-500">
                  <li className="flex items-center gap-2"><FaArrowRight className="text-primary" size={12} /> Ad-free Playback</li>
                  <li className="flex items-center gap-2"><FaArrowRight className="text-primary" size={12} /> Background Audio</li>
                  <li className="flex items-center gap-2"><FaArrowRight className="text-primary" size={12} /> Offline Mode</li>
                  <li className="flex items-center gap-2"><FaArrowRight className="text-primary" size={12} /> Synced Lyrics</li>
                </ul>
              </div>
            </Card>
          </div>

          {/* Desktop Dominance */}
          <div className="space-y-8">
            <div className="flex items-center gap-4 px-2">
              <div className="h-10 w-1.5 bg-secondary rounded-full" />
              <h3 className="text-3xl font-black uppercase tracking-tight">Desktop Control</h3>
            </div>

            <div className="flex flex-col gap-6">
              {desktopPlatforms.map((platform, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Card
                    isPressable
                    as={Link}
                    href={platform.url}
                    isExternal
                    className="border border-white/5 bg-background/40 backdrop-blur-2xl p-6 rounded-[2.5rem] shadow-xl group"
                  >
                    <CardBody className="flex flex-col sm:flex-row items-center gap-6 md:gap-8 text-center sm:text-left">
                      <div className={`p-5 rounded-3xl bg-gradient-to-br ${platform.color} group-hover:scale-110 transition-transform text-white shadow-2xl shrink-0`}>
                        {platform.icon}
                      </div>
                      <div className="flex-1 space-y-2">
                        <h4 className="font-black text-2xl">{platform.name}</h4>
                        <p className="text-default-400 font-medium text-sm md:text-base leading-relaxed">{platform.description}</p>
                      </div>
                      <Button color="primary" variant="shadow" radius="full" size="lg" className="font-black px-10 w-full sm:w-auto mt-2 sm:mt-0">
                        Get
                      </Button>
                    </CardBody>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-32 pt-16 border-t border-white/5 text-center space-y-4">
          <p className="text-sm font-black text-primary uppercase tracking-[0.3em]">System Requirements</p>
          <div className="flex flex-wrap justify-center gap-4 text-xs font-bold text-default-400 uppercase tracking-widest">
            <span>Android 8.0+</span>
            <span className="opacity-30">•</span>
            <span>iOS 14.1+</span>
            <span className="opacity-30">•</span>
            <span>Windows 10/11</span>
            <span className="opacity-30">•</span>
            <span>macOS 11+</span>
            <span className="opacity-30">•</span>
            <span>X11/Wayland</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DownloadSection;

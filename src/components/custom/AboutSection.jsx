"use client";
import React from "react";
import {
  Card,
  CardHeader,
  CardBody,
  Link,
  Button,
  Chip,
  Divider,
} from "@nextui-org/react";
import { AnimatePresence, motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaInstagram, FaEnvelope } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import {
  Code2,
  Database,
  Globe,
  Smartphone,
  Terminal,
  Wrench,
  Monitor,
  Palette,
  Search,
  Zap,
  ArrowRight
} from "lucide-react";

const skills = [
  {
    category: "Mobile Systems",
    icon: <Smartphone className="text-foreground" size={20} />,
    items: ["Flutter", "React Native", "Kotlin Multiplatform", "Java"],
    color: "primary",
  },
  {
    category: "Web Ecosystem",
    icon: <Globe className="text-foreground" size={20} />,
    items: ["Next.js", "React", "JavaScript", "TailwindCSS"],
    color: "secondary",
  },
  {
    category: "Visual Identity",
    icon: <Palette className="text-foreground" size={20} />,
    items: ["UI/UX", "Graphics Design", "Brand Identity"],
    color: "primary",
  },
  {
    category: "Strategy & SEO",
    icon: <Search className="text-foreground" size={20} />,
    items: ["Technical SEO", "Speed Optimization", "Growth"],
    color: "secondary",
  },
  {
    category: "Backend Infrastructure",
    icon: <Database className="text-foreground" size={20} />,
    items: ["Node.js", "Appwrite", "PostgreSQL", "Firebase"],
    color: "success",
  },
  {
    category: "Core Engineering",
    icon: <Terminal className="text-foreground" size={20} />,
    items: ["Python", "C++", "System Architecture"],
    color: "danger",
  },
];

const AboutSection = () => {
  return (
    <section className="relative pt-32 pb-20 overflow-hidden min-h-screen bg-background">
      {/* Dynamic Background */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-[1400px] -z-10 opacity-30 pointer-events-none">
        <div className="absolute top-[10%] left-[10%] w-72 h-72 bg-primary/20 rounded-full blur-[100px] animate-pulse" />
        <div className="absolute bottom-[20%] right-[10%] w-96 h-96 bg-secondary/20 rounded-full blur-[120px]" />
      </div>

      <div className="container mx-auto px-6 max-w-7xl">
        {/* Cinematic Header */}
        <div className="flex flex-col items-center text-center space-y-6 mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="px-6 py-2 rounded-full bg-primary/10 border border-primary/20 backdrop-blur-xl"
          >
            <span className="text-xs font-black uppercase tracking-[0.4em] text-primary">Behind The Code</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="text-5xl md:text-8xl font-black tracking-tighter leading-tight bg-clip-text text-transparent bg-gradient-to-br from-foreground via-foreground/90 to-muted-foreground"
          >
            A Journey of <br /> <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary italic">Digital Creation</span>
          </motion.h1>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Profile Card (4 cols) */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="lg:col-span-4"
          >
            <Card className="bg-content1/50 dark:bg-white/[0.03] backdrop-blur-3xl border-default-200 dark:border-white/5 rounded-[3rem] p-8 shadow-2xl h-full">
              <CardBody className="p-0 flex flex-col items-center gap-8 py-4">
                <div className="relative group">
                  <div className="absolute -inset-1 bg-gradient-to-r from-primary to-secondary rounded-full opacity-0 group-hover:opacity-100 transition duration-500 blur-xl"></div>
                  <div className="w-44 h-44 relative rounded-full border-2 border-white/10 p-1 group-hover:border-primary/50 transition-colors bg-default-100 overflow-hidden shadow-2xl">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src="/dev.jpg"
                      alt="Abdul Mueed"
                      className="w-full h-full rounded-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                  </div>
                  <div className="absolute -bottom-2 -right-2 w-12 h-12 bg-foreground rounded-full flex items-center justify-center border-4 border-background text-background shadow-xl">
                    <Zap size={20} />
                  </div>
                </div>

                <div className="text-center space-y-2">
                  <h3 className="text-3xl font-black tracking-tight text-foreground">
                    Abdul Mueed
                  </h3>
                  <div className="inline-block px-4 py-1 rounded-full bg-default-100 dark:bg-white/5 border border-default-200 dark:border-white/10 text-[10px] font-black uppercase tracking-widest text-primary">
                    Full Stack Strategist
                  </div>
                </div>

                <p className="text-sm text-center text-default-500 font-medium px-4 leading-relaxed">
                  Architecting digital experiences that merge aesthetic precision with technical excellence.
                </p>

                <div className="flex flex-wrap justify-center gap-3">
                  {[
                    { icon: <FaGithub />, href: "https://github.com/am-abdulmueed", color: "bg-[#24292e]", iconColor: "text-white" },
                    { icon: <FaLinkedin />, href: "https://www.linkedin.com/in/abdulmueed/", color: "bg-[#0077b5]", iconColor: "text-white" },
                    { icon: <FaInstagram />, href: "https://www.instagram.com/a.b.d.u.l.m.u.e.e.d/", color: "bg-gradient-to-tr from-[#f9ce34] via-[#ee2a7b] to-[#6228d7]", iconColor: "text-white" },
                    { icon: <FaXTwitter />, href: "https://x.com/a.b.d.u.l.m.u.e.e.d", color: "bg-foreground", iconColor: "text-background" },
                    { icon: <FaEnvelope />, href: "mailto:am.abdulmueed3@gmail.com", color: "bg-warning", iconColor: "text-white" }
                  ].map((social, idx) => (
                    <motion.a
                      key={idx}
                      href={social.href}
                      target="_blank"
                      whileHover={{ scale: 1.1, y: -2 }}
                      whileTap={{ scale: 0.9 }}
                      className={`w-12 h-12 rounded-2xl ${social.color} ${social.iconColor} flex items-center justify-center shadow-lg transition-all`}
                    >
                      {social.icon}
                    </motion.a>
                  ))}
                </div>
              </CardBody>
            </Card>
          </motion.div>

          {/* Bio & Skills (8 cols) */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="lg:col-span-8 flex flex-col gap-10"
          >
            {/* Story Card */}
            <Card className="bg-content1/50 dark:bg-white/[0.03] backdrop-blur-3xl border-default-200 dark:border-white/5 rounded-[3rem] p-8 md:p-12 shadow-2xl">
              <CardBody className="p-0 space-y-6">
                <h4 className="text-2xl font-black tracking-tight text-foreground flex items-center gap-3">
                  <Terminal className="text-primary" size={24} />
                  The Mission
                </h4>
                <div className="space-y-4">
                  <p className="text-lg text-default-500 leading-relaxed font-medium">
                    I am a <span className="text-foreground font-black">Full Stack Developer</span> and designer who believes code is more than just instructions—it&apos;s a tool to solve human problems.
                  </p>
                  <p className="text-default-500 leading-relaxed font-medium">
                    With a focus on <span className="text-primary font-bold">Cross-Platform Efficiency</span>, I build applications that bridge the gap between high-performance backends and visually stunning user interfaces. Whether it&apos;s a mobile app, a web platform, or a unified brand identity, my goal is always the same: <span className="italic">Excellence by Design.</span>
                  </p>
                </div>
              </CardBody>
            </Card>

            {/* Skills Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {skills.map((skill, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                >
                  <Card className="bg-content1/50 dark:bg-white/[0.03] backdrop-blur-2xl border-default-100 dark:border-white/5 rounded-[2.5rem] p-6 hover:bg-content2 transition-colors duration-500 h-full shadow-lg">
                    <CardBody className="p-0 space-y-4">
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 rounded-2xl bg-default-100 dark:bg-white/5 flex items-center justify-center border border-default-200 dark:border-white/10">
                          {skill.icon}
                        </div>
                        <h5 className="font-black text-xs uppercase tracking-widest text-foreground">{skill.category}</h5>
                      </div>
                      <div className="flex flex-wrap gap-2 pt-2">
                        {skill.items.map((item, j) => (
                          <Chip
                            key={j}
                            variant="flat"
                            size="sm"
                            className="bg-primary/10 border-none text-primary font-black uppercase text-[9px] tracking-widest px-2"
                          >
                            {item}
                          </Chip>
                        ))}
                      </div>
                    </CardBody>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Experience CTA */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="mt-10 md:mt-20 p-8 md:p-12 rounded-[2.5rem] md:rounded-[4rem] bg-gradient-to-r from-primary/10 to-transparent border border-primary/20 flex flex-col md:flex-row items-center justify-between gap-6 md:gap-10"
        >
          <div className="space-y-4 text-center md:text-left">
            <h2 className="text-3xl md:text-5xl font-black tracking-tighter leading-tight">Elevating Ideas Through <br /> Technical Precision.</h2>
            <p className="text-sm md:text-base text-default-500 font-medium max-w-lg">Ready to transform your vision into a world-class digital product? Let&apos;s discuss your next mission.</p>
          </div>
          <Button
            as={Link}
            href="/contact"
            color="primary"
            radius="full"
            size="lg"
            className="font-black uppercase tracking-[0.1em] md:tracking-[0.2em] h-14 md:h-20 px-8 md:px-12 text-sm md:text-lg shadow-2xl shadow-primary/30 w-full md:w-auto"
            endContent={<ArrowRight size={20} />}
          >
            Start Transmission
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;

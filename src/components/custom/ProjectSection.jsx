"use client";

import React, { useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ExternalLink, Github, Terminal, Code2, Layers, Globe,
  Shield, Zap, Music, Cloud, Film, Search,
  SlidersHorizontal, X, ArrowUpRight, Code
} from 'lucide-react';
import { Button, Input, Chip, Card, CardBody, Tooltip } from '@nextui-org/react';
import Link from 'next/link';

const projects = [
  {
    title: "AI Base",
    status: "Live",
    description: "Discover & Explore AI Tools & Prompts. Find the best AI chatbots, image generators, and prompts—all in one place.",
    link: "https://am-aibase.vercel.app/",
    github: "https://github.com/am-abdulmueed/ai-base/",
    tech: ["AI", "Next.js", "Directory"],
    icon: <Globe size={24} />,
    category: "AI",
    color: "from-blue-600 to-cyan-500"
  },
  {
    title: "Supercharged URL Shortener",
    status: "Live",
    description: "Supercharged URL Shortener Built with Next.js 14 & MongoDB.",
    link: "https://url-shs.vercel.app/",
    github: "https://github.com/am-abdulmueed/url-shortener",
    tech: ["Next.js 14", "MongoDB", "Shadcn"],
    icon: <Zap size={24} />,
    category: "Web App",
    color: "from-yellow-500 to-orange-500"
  },
  {
    title: "Drawir",
    status: "Live",
    description: "A online web based drawing/presentation app made with nextjs!",
    link: "https://drawir.vercel.app",
    github: "https://github.com/am-abdulmueed/drawir",
    tech: ["Next.js", "Canvas", "Drawing"],
    icon: <Code2 size={24} />,
    category: "Tool",
    color: "from-purple-600 to-fuchsia-500"
  },
  {
    title: "MySocials",
    status: "Live",
    description: "An open-source link-in-bio tool designed to simplify the management of social media links.",
    link: "https://msocials.vercel.app",
    github: "https://github.com/am-abdulmueed/MySocials",
    tech: ["Next.js", "Shadcn", "MongoDB"],
    icon: <Globe size={24} />,
    category: "Web App",
    color: "from-emerald-500 to-teal-500"
  },
  {
    title: "Cookie Consent",
    status: "Live",
    description: "Beautifully designed, customizable cookie consent for web built on top of shadcn-ui and tailwind-css!",
    link: "https://am-scc.vercel.app/",
    github: "https://github.com/am-abdulmueed/cookie-consent",
    tech: ["Shadcn-ui", "TailwindCSS", "Component"],
    icon: <Shield size={24} />,
    category: "Component",
    color: "from-indigo-600 to-blue-500"
  },
  {
    title: "IDE Alpha",
    status: "Live",
    description: "A lightweight online html, css, and javascript editor and compiler built using nextjs, tailwindcss and shadcn-ui.",
    link: "https://ide-alpha.vercel.app",
    github: "https://github.com/am-abdulmueed/IDE",
    tech: ["Next.js", "TailwindCSS", "Shadcn-ui"],
    icon: <Terminal size={24} />,
    category: "Tool",
    color: "from-red-600 to-rose-500"
  },
  {
    title: "CodeBin",
    status: "Live",
    description: "An snippets sharing web app with output for developers & non-developers.",
    link: "https://am-codebin.vercel.app/",
    github: "https://github.com/am-abdulmueed/codebin",
    tech: ["Web App", "Sharing", "Dev Tool"],
    icon: <Code2 size={24} />,
    category: "Web App",
    color: "from-zinc-700 to-zinc-500"
  },
  {
    title: "p2p-share",
    status: "Open Source",
    description: "A realtime P2P file sharing web app.",
    link: "https://github.com/am-abdulmueed/p2p-share",
    github: "https://github.com/am-abdulmueed/p2p-share",
    tech: ["P2P", "WebRTC", "File Sharing"],
    icon: <Layers size={24} />,
    category: "Web App",
    color: "from-cyan-600 to-blue-500"
  },
  {
    title: "ai_agent",
    status: "Open Source",
    description: "An AI agent for coding & chat via terminal.",
    link: "https://github.com/am-abdulmueed/ai_agent",
    github: "https://github.com/am-abdulmueed/ai_agent",
    tech: ["AI", "Terminal", "CLI"],
    icon: <Terminal size={24} />,
    category: "AI",
    color: "from-blue-600 to-indigo-500"
  },
  {
    title: "passbit",
    status: "Open Source",
    description: "An end-to-end password manager's backend using nitro.build!",
    link: "https://github.com/am-abdulmueed/passbit",
    github: "https://github.com/am-abdulmueed/passbit",
    tech: ["Nitro.build", "Backend", "Security"],
    icon: <Shield size={24} />,
    category: "Backend",
    color: "from-rose-600 to-orange-500"
  },
  {
    title: "bonsai",
    status: "Open Source",
    description: "A flexible state management library with tree and flat state support.",
    link: "https://github.com/am-abdulmueed/bonsai",
    github: "https://github.com/am-abdulmueed/bonsai",
    tech: ["Library", "State Management", "DevTools"],
    icon: <Layers size={24} />,
    category: "Library",
    color: "from-emerald-600 to-green-400"
  },
  {
    title: "Tailwind CSS Bg Gradient",
    status: "Live",
    description: "A plugin for Tailwind CSS to create background gradients.",
    link: "https://tailwind-background.vercel.app/",
    github: "https://github.com/am-abdulmueed/tailwind-background",
    tech: ["Tailwind CSS", "Plugin", "CSS"],
    icon: <Code2 size={24} />,
    category: "Library",
    color: "from-sky-500 to-blue-600"
  },
    {
    title: "PluginStream",
    status: "Live",
    description: "An AI-powered entertainment super-app for movies, dramas, web series, games, and music. Features real-time subtitles, multilingual AI voice dubbing, integrated cloud gaming, and free access to YouTube & YouTube Music.",
    link: "https://github.com/am-abdulmueed/pluginstream",
    tech: ["AI", "React Native", "Streaming", "Subtitles", "Cloud Gaming", "YouTube API"],
    icon: <Film size={24} />,
    category: "AI",
    color: "from-red-600 to-rose-700"
  },
  {
    title: "MusicHub",
    status: "Live",
    description: "A responsive music app built with React and Node.js. Features include playlist management and a recommendation system.",
    link: "https://music-hubs.vercel.app/",
    tech: ["React", "Node.js", "Music API"],
    icon: <Music size={24} />,
    category: "Web App",
    color: "from-indigo-600 to-purple-600"
  },
  {
    title: "Cloud Storage WebApp",
    status: "Closed Source",
    description: "An app to upload and access files from anywhere.",
    link: "https://github.com/am-abdulmueed/cloud-storage",
    tech: ["Cloud Storage", "File Upload", "WebApp"],
    icon: <Cloud size={24} />,
    category: "Web App",
    color: "from-blue-500 to-cyan-400"
  },
  {
    title: "Aurio",
    status: "Closed Source",
    description: "A futuristic music streaming app inspired by Spotify and YouTube Music.",
    link: "https://github.com/BetaAE/aurioappprot",
    tech: ["AI", "Flutter", "Music", "Streaming"],
    icon: <Music size={24} />,
    category: "App",
    color: "from-primary to-secondary"
  }
];

const statusColors = {
  "Live": "bg-green-500/10 text-green-500 border-green-500/20",
  "Open Source": "bg-blue-500/10 text-blue-500 border-blue-500/20",
  "Closed Source": "bg-yellow-500/10 text-yellow-500 border-yellow-500/20"
};

const categories = ["All", "Web App", "AI", "Tool", "Library", "Backend", "Component", "App"];

const ProjectSection = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [showFilters, setShowFilters] = useState(false);
  const inputRef = useRef(null);

  const filteredProjects = projects.filter(project => {
    const matchesCategory = selectedCategory === "All" || project.category === selectedCategory;
    const matchesSearch = project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.tech.some(t => t.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  return (
    <section className="project-section py-32 relative overflow-hidden bg-background" id="projects">
      {/* Cinematic Background */}
      <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[120px] -z-10 animate-pulse" />
      <div className="absolute bottom-1/4 right-0 w-[500px] h-[500px] bg-secondary/5 rounded-full blur-[120px] -z-10 animate-pulse delay-700" />
      <div className="absolute inset-0 -z-20 opacity-[0.03] dark:opacity-[0.05]"
        style={{
          backgroundImage: `linear-gradient(to right, #888 1px, transparent 1px), linear-gradient(to bottom, #888 1px, transparent 1px)`,
          backgroundSize: '80px 80px'
        }}
      />

      <div className="container px-6 mx-auto relative z-10 max-w-7xl">
        <div className="flex flex-col items-center text-center mb-24 space-y-6">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 backdrop-blur-md"
          >
            <Code size={16} className="text-primary" />
            <span className="text-[10px] font-black uppercase tracking-[0.3em] text-primary">Portfolio Showcase</span>
          </motion.div>

          <motion.h1
            className="text-5xl md:text-7xl font-black tracking-tighter leading-tight bg-clip-text text-transparent bg-gradient-to-br from-foreground via-foreground/90 to-muted-foreground"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
          >
            Featured <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary italic">Projects</span>
          </motion.h1>

          <motion.p
            className="text-default-500 text-xl font-medium max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            A curated selection of my technical work, from AI modules to robust web platforms.
          </motion.p>

          <motion.div
            className="w-full max-w-2xl mt-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-[2rem] blur opacity-0 group-focus-within:opacity-100 transition-opacity" />
              <Input
                variant="flat"
                size="lg"
                ref={inputRef}
                placeholder="Search by title, tech or category..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                startContent={<Search className="text-default-400" size={20} />}
                endContent={
                  <Button
                    isIconOnly
                    size="sm"
                    variant={showFilters ? "solid" : "light"}
                    color={showFilters ? "primary" : "default"}
                    onClick={() => setShowFilters(!showFilters)}
                    className="rounded-xl z-20 pointer-events-auto"
                  >
                    <SlidersHorizontal size={18} />
                  </Button>
                }
                classNames={{
                  inputWrapper: "bg-white/80 dark:bg-black/60 backdrop-blur-2xl border-2 border-default-200 dark:border-white/10 h-16 rounded-[1.5rem] shadow-xl group-hover:border-primary/40 focus-within:!border-primary transition-all",
                  input: "text-lg font-black placeholder:text-default-400"
                }}
              />
            </div>

            <AnimatePresence>
              {showFilters && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  className="mt-6 flex flex-wrap justify-center gap-2 p-6 bg-white/5 backdrop-blur-3xl rounded-[2rem] border border-white/5"
                >
                  {categories.map((cat) => (
                    <Chip
                      key={cat}
                      onClick={() => setSelectedCategory(cat)}
                      variant={selectedCategory === cat ? "shadow" : "flat"}
                      color={selectedCategory === cat ? "primary" : "default"}
                      className={`cursor-pointer font-black text-[11px] uppercase tracking-widest px-6 h-12 hover:scale-105 transition-all shadow-md ${selectedCategory === cat
                          ? "bg-primary text-primary-foreground"
                          : "bg-default-100 dark:bg-white/10 text-default-600 dark:text-default-400"
                        }`}
                    >
                      {cat}
                    </Chip>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </div>

        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => (
              <motion.div
                layout
                key={project.title}
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, transition: { duration: 0.2 } }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
              >
                <Card
                  isBlurred
                  className="group relative h-full bg-content1/50 dark:bg-background/40 backdrop-blur-3xl border border-black/10 dark:border-white/5 rounded-[2.5rem] p-4 group overflow-hidden hover:border-primary/30 transition-all duration-500 shadow-xl dark:shadow-none"
                >
                  <div className={`absolute top-0 right-0 w-48 h-48 bg-gradient-to-br ${project.color} opacity-0 group-hover:opacity-10 blur-[80px] transition-opacity duration-700`} />

                  <CardBody className="p-4 flex flex-col items-start gap-8 relative z-10">
                    <div className="w-full flex justify-between items-start">
                      <div className={`p-4 rounded-3xl bg-gradient-to-br ${project.color} text-white shadow-2xl group-hover:scale-110 transition-transform duration-500`}>
                        {project.icon}
                      </div>
                      <Chip
                        variant="dot"
                        className={`font-black uppercase tracking-[0.2em] text-[9px] border-white/10 ${statusColors[project.status]}`}
                      >
                        {project.status}
                      </Chip>
                    </div>

                    <div className="space-y-3">
                      <h3 className="text-2xl font-black tracking-tighter group-hover:text-primary transition-colors duration-300">
                        {project.title}
                      </h3>
                      <p className="text-default-500 font-medium leading-relaxed line-clamp-3">
                        {project.description}
                      </p>
                    </div>

                    <div className="w-full mt-auto space-y-8">
                      <div className="flex flex-wrap gap-2">
                        {project.tech.map((t, i) => (
                          <Chip key={i} size="sm" variant="flat" className="bg-primary/5 text-primary/70 font-bold uppercase text-[9px] tracking-widest px-2 h-6">
                            {t}
                          </Chip>
                        ))}
                      </div>

                      <div className="flex items-center gap-4 pt-6 border-t border-black/5 dark:border-white/5">
                        <Button
                          as={Link}
                          href={project.link}
                          target="_blank"
                          variant="solid"
                          color="primary"
                          radius="full"
                          className="font-black px-8 h-12 shadow-lg hover:shadow-primary/40 group-hover:scale-105 transition-all text-xs uppercase"
                          endContent={<ArrowUpRight size={16} />}
                        >
                          Visit Showcase
                        </Button>
                        {project.github && (
                          <Tooltip content="Source Code" placement="bottom">
                            <Button
                              as={Link}
                              href={project.github}
                              target="_blank"
                              isIconOnly
                              variant="light"
                              radius="full"
                              className="text-default-400 hover:text-foreground hover:bg-white/5"
                            >
                              <Github size={24} />
                            </Button>
                          </Tooltip>
                        )}
                      </div>
                    </div>
                  </CardBody>
                </Card>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {filteredProjects.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="flex flex-col items-center justify-center py-32 space-y-6"
          >
            <div className="p-8 rounded-full bg-secondary/10 text-default-400">
              <Search size={64} />
            </div>
            <p className="text-2xl font-black text-default-400 uppercase tracking-tighter">No masterpieces found</p>
            <Button
              onPress={() => { setSelectedCategory("All"); setSearchQuery(""); }}
              variant="flat"
              color="primary"
              radius="full"
              className="font-black uppercase"
            >
              Reset Filters
            </Button>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default ProjectSection;

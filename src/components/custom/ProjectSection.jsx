"use client";
import React, { useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Github, Terminal, Code2, Layers, Globe, Shield, Zap, Music, Cloud, Film, Search, SlidersHorizontal, X } from 'lucide-react';
import Link from 'next/link';

const projects = [
  {
    title: "AI Base",
    status: "Live",
    description: "Discover & Explore AI Tools & Prompts. Find the best AI chatbots, image generators, and prompts—all in one place.",
    link: "https://am-aibase.vercel.app/",
    github: "https://github.com/am-abdulmueed/ai-base/",
    tech: ["AI", "Next.js", "Directory"],
    icon: <Globe size={20} />,
    category: "AI"
  },
  {
    title: "Supercharged URL Shortener",
    status: "Live",
    description: "Supercharged URL Shortener Built with Next.js 14 & MongoDB.",
    link: "https://url-shs.vercel.app/",
    github: "https://github.com/am-abdulmueed/url-shortener",
    tech: ["Next.js 14", "MongoDB", "Shadcn"],
    icon: <Zap size={20} />,
    category: "Web App"
  },
  {
    title: "Drawir",
    status: "Live",
    description: "A online web based drawing/presentation app made with nextjs!",
    link: "https://drawir.vercel.app",
    github: "https://github.com/am-abdulmueed/drawir",
    tech: ["Next.js", "Canvas", "Drawing"],
    icon: <Code2 size={20} />,
    category: "Tool"
  },
  {
    title: "MySocials",
    status: "Live",
    description: "An open-source link-in-bio tool designed to simplify the management of social media links.",
    link: "https://msocials.vercel.app",
    github: "https://github.com/am-abdulmueed/MySocials",
    tech: ["Next.js", "Shadcn", "MongoDB"],
    icon: <Globe size={20} />,
    category: "Web App"
  },
  {
    title: "Cookie Consent",
    status: "Live",
    description: "Beautifully designed, customizable cookie consent for web built on top of shadcn-ui and tailwind-css!",
    link: "https://am-scc.vercel.app/",
    github: "https://github.com/am-abdulmueed/cookie-consent",
    tech: ["Shadcn-ui", "TailwindCSS", "Component"],
    icon: <Shield size={20} />,
    category: "Component"
  },
  {
    title: "IDE Alpha",
    status: "Live",
    description: "A lightweight online html, css, and javascript editor and compiler built using nextjs, tailwindcss and shadcn-ui.",
    link: "https://ide-alpha.vercel.app",
    github: "https://github.com/am-abdulmueed/IDE",
    tech: ["Next.js", "TailwindCSS", "Shadcn-ui"],
    icon: <Terminal size={20} />,
    category: "Tool"
  },
  {
    title: "CodeBin",
    status: "Live",
    description: "An snippets sharing web app with output for developers & non-developers.",
    link: "https://am-codebin.vercel.app/",
    github: "https://github.com/am-abdulmueed/codebin",
    tech: ["Web App", "Sharing", "Dev Tool"],
    icon: <Code2 size={20} />,
    category: "Web App"
  },
  {
    title: "p2p-share",
    status: "Open Source",
    description: "A realtime P2P file sharing web app.",
    link: "https://github.com/am-abdulmueed/p2p-share",
    github: "https://github.com/am-abdulmueed/p2p-share",
    tech: ["P2P", "WebRTC", "File Sharing"],
    icon: <Layers size={20} />,
    category: "Web App"
  },
  {
    title: "ai_agent",
    status: "Open Source",
    description: "An AI agent for coding & chat via terminal.",
    link: "https://github.com/am-abdulmueed/ai_agent",
    github: "https://github.com/am-abdulmueed/ai_agent",
    tech: ["AI", "Terminal", "CLI"],
    icon: <Terminal size={20} />,
    category: "AI"
  },
  {
    title: "passbit",
    status: "Open Source",
    description: "An end-to-end password manager's backend using nitro.build!",
    link: "https://github.com/am-abdulmueed/passbit",
    github: "https://github.com/am-abdulmueed/passbit",
    tech: ["Nitro.build", "Backend", "Security"],
    icon: <Shield size={20} />,
    category: "Backend"
  },
  {
    title: "bonsai",
    status: "Open Source",
    description: "A flexible state management library with tree and flat state support.",
    link: "https://github.com/am-abdulmueed/bonsai",
    github: "https://github.com/am-abdulmueed/bonsai",
    tech: ["Library", "State Management", "DevTools"],
    icon: <Layers size={20} />,
    category: "Library"
  },
  {
    title: "Tailwind CSS Bg Gradient",
    status: "Live",
    description: "A plugin for Tailwind CSS to create background gradients.",
    link: "https://tailwind-background.vercel.app/",
    github: "https://github.com/am-abdulmueed/tailwind-background",
    tech: ["Tailwind CSS", "Plugin", "CSS"],
    icon: <Code2 size={20} />,
    category: "Library"
  },
  {
    title: "MusicHub",
    status: "Live",
    description: "A responsive music app built with React and Node.js. Features include playlist management and a recommendation system.",
    link: "https://music-hubs.vercel.app/",
    tech: ["React", "Node.js", "Music API"],
    icon: <Music size={20} />,
    category: "Web App"
  },
  {
    title: "Cloud Storage WebApp",
    status: "Closed Source",
    description: "An app to upload and access files from anywhere.",
    link: "https://github.com/am-abdulmueed/cloud-storage",
    tech: ["Cloud Storage", "File Upload", "WebApp"],
    icon: <Cloud size={20} />,
    category: "Web App"
  },
  {
    title: "Cloudup",
    status: "Closed Source",
    description: "An AI-powered entertainment platform for movies, dramas, and web series.",
    link: "https://github.com/BetaAE/cloudupprot",
    tech: ["AI", "React Native", "Streaming", "Subtitles"],
    icon: <Film size={20} />,
    category: "AI"
  },
  {
    title: "Aurio",
    status: "Closed Source",
    description: "A futuristic music streaming app inspired by Spotify and YouTube Music.",
    link: "https://github.com/BetaAE/aurioappprot",
    tech: ["AI", "Flutter", "Music", "Streaming"],
    icon: <Music size={20} />,
    category: "App"
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
                          project.status.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          project.tech.some(t => t.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  return (
    <section className="py-20 relative overflow-hidden min-h-screen" id="projects">
      {/* Background elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[10%] right-[5%] w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-[10%] left-[5%] w-64 h-64 bg-secondary/5 rounded-full blur-3xl" />
      </div>

      <div className="container px-4 mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight">
            Featured <span className="text-primary">Projects</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto mb-8">
            A showcase of my recent work, ranging from AI tools and developer utilities to web applications.
          </p>

          {/* Search and Filter Controls */}
          <div className="flex flex-col items-center max-w-2xl mx-auto mb-16 w-full relative z-20">
            <div className="relative flex items-center w-full gap-3">
              {/* Search Bar */}
              <div className="relative flex-grow group">
                <div className="absolute inset-y-0 left-0 pl-5 flex items-center pointer-events-none text-muted-foreground group-focus-within:text-primary transition-colors z-10">
                  <Search size={22} />
                </div>
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search projects..."
                  className="w-full h-14 pl-14 pr-4 bg-secondary/30 backdrop-blur-md border border-border/50 rounded-2xl focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/20 transition-all duration-300 text-lg placeholder:text-muted-foreground/50 shadow-sm"
                  ref={inputRef}
                />
              </div>

              {/* Filter Toggle Button */}
              <button
                onClick={() => setShowFilters(!showFilters)}
                className={`h-14 w-14 flex-shrink-0 flex items-center justify-center rounded-2xl border transition-all duration-300 ${
                  showFilters 
                    ? "bg-primary text-primary-foreground border-primary shadow-lg shadow-primary/20" 
                    : "bg-secondary/30 border-border/50 text-muted-foreground hover:bg-secondary/50 hover:text-foreground hover:border-primary/30"
                }`}
                aria-label="Toggle filters"
              >
                {showFilters ? <X size={24} /> : <SlidersHorizontal size={24} />}
              </button>
            </div>

            {/* Collapsible Filter Section */}
            <AnimatePresence>
              {showFilters && (
                <motion.div
                  initial={{ height: 0, opacity: 0, marginTop: 0 }}
                  animate={{ height: 'auto', opacity: 1, marginTop: 16 }}
                  exit={{ height: 0, opacity: 0, marginTop: 0 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  className="overflow-hidden w-full"
                >
                  <div className="p-5 bg-secondary/20 rounded-2xl border border-border/50 backdrop-blur-sm">
                    <div className="flex items-center justify-between mb-4">
                      <p className="text-sm font-medium text-muted-foreground">Filter by category</p>
                      {selectedCategory !== "All" && (
                        <button 
                          onClick={() => setSelectedCategory("All")}
                          className="text-xs text-primary hover:underline"
                        >
                          Reset
                        </button>
                      )}
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {categories.map((category) => (
                        <button
                          key={category}
                          onClick={() => setSelectedCategory(category)}
                          className={`px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300 ${
                            selectedCategory === category
                              ? "bg-primary text-primary-foreground shadow-lg shadow-primary/20 scale-105"
                              : "bg-background/50 border border-border/50 text-muted-foreground hover:bg-secondary hover:text-foreground hover:border-primary/30"
                          }`}
                        >
                          {category}
                        </button>
                      ))}
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </motion.div>

        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <AnimatePresence>
            {filteredProjects.map((project, index) => (
              <motion.div
                layout
                key={project.title}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                className="group perspective-1000"
                data-cursor-text="VIEW"
              >
                <div className="relative h-full bg-background/50 backdrop-blur-sm border border-border/50 rounded-2xl p-6 transition-all duration-300 hover:border-primary/50 hover:shadow-xl hover:shadow-primary/5 hover:-translate-y-1 overflow-hidden">
                  {/* Hover Glow Effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  <div className="relative z-10 flex flex-col h-full">
                    <div className="flex justify-between items-start mb-4">
                      <div className="p-2.5 bg-secondary/50 rounded-xl group-hover:bg-primary/10 group-hover:text-primary transition-colors duration-300">
                        {project.icon}
                      </div>
                      <span className={`text-xs px-2.5 py-1 rounded-full border font-medium ${statusColors[project.status] || "bg-secondary/50 text-muted-foreground"}`}>
                        {project.status}
                      </span>
                    </div>

                    <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors duration-300">
                      {project.title}
                    </h3>
                    
                    <p className="text-muted-foreground text-sm mb-6 line-clamp-3 flex-grow">
                      {project.description}
                    </p>

                    <div className="space-y-4">
                      <div className="flex flex-wrap gap-2">
                        {project.tech.map((tech, i) => (
                          <span key={i} className="text-[10px] uppercase tracking-wider px-2 py-1 bg-secondary/30 rounded-md text-muted-foreground">
                            {tech}
                          </span>
                        ))}
                      </div>

                      <div className="flex items-center gap-3 pt-4 border-t border-border/50">
                        <Link 
                          href={project.link} 
                          target="_blank" 
                          className="flex items-center gap-2 text-sm font-medium hover:text-primary transition-colors"
                        >
                          <ExternalLink size={16} />
                          Live Demo
                        </Link>
                        {project.github && (
                          <Link 
                            href={project.github} 
                            target="_blank" 
                            className="flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors ml-auto"
                          >
                            <Github size={16} />
                            Code
                          </Link>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {filteredProjects.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-20"
          >
            <p className="text-muted-foreground text-lg">No projects found matching your criteria.</p>
            <button 
              onClick={() => {setSelectedCategory("All"); setSearchQuery("");}}
              className="mt-4 text-primary hover:underline"
            >
              Clear filters
            </button>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default ProjectSection;

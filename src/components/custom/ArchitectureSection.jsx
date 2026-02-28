"use client";

import React, { useState } from "react";
import { Card, CardHeader, CardBody, Chip, Button } from "@nextui-org/react";
import {
  Globe, Server, Shield, Database, Cloud,
  GitBranch, Bug, Box, Cpu, MonitorDot,
  ChevronDown, Layers, Sparkles
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const layers = [
  {
    title: "Client (Frontend)",
    description: "Next.js App Router, React, TailwindCSS, NextUI components, SSR/ISR for SEO.",
    icon: <Globe size={24} />,
    color: "from-blue-600 to-indigo-500",
    chips: ["Next.js", "React", "TailwindCSS", "NextUI", "SSR/ISR"],
  },
  {
    title: "API Gateway",
    description: "Next.js Route Handlers or BFF. Validations, rate limiting, caching hints.",
    icon: <Server size={24} />,
    color: "from-purple-600 to-fuchsia-500",
    chips: ["Route Handlers", "BFF", "Zod/Valibot", "Rate Limit"],
  },
  {
    title: "Auth",
    description: "Session/JWT based auth, OAuth providers, role-based access control.",
    icon: <Shield size={24} />,
    color: "from-rose-600 to-pink-500",
    chips: ["JWT/Session", "OAuth", "RBAC"],
  },
  {
    title: "Data Layer",
    description: "Primary database with ORM, read/write separation, pagination and indexing.",
    icon: <Database size={24} />,
    color: "from-emerald-600 to-teal-500",
    chips: ["PostgreSQL", "MongoDB", "ORM", "Indexes"],
  },
  {
    title: "Cache & CDN",
    description: "Edge caching for HTML/API, CDN for static assets, client-side memoization.",
    icon: <Cloud size={24} />,
    color: "from-cyan-600 to-blue-500",
    chips: ["CDN", "Edge Cache", "SWR/React Query"],
  },
  {
    title: "Storage",
    description: "Object storage for images/files with signed URLs and image optimization.",
    icon: <Box size={24} />,
    color: "from-orange-600 to-amber-500",
    chips: ["Object Storage", "Signed URLs", "Image Optimize"],
  },
  {
    title: "Observability",
    description: "Logs, metrics, tracing, uptime checks, error reporting and alerts.",
    icon: <MonitorDot size={24} />,
    color: "from-red-600 to-rose-500",
    chips: ["Logging", "Tracing", "Alerts", "Uptime"],
  },
  {
    title: "CI/CD",
    description: "Automated tests, lint/typechecks, preview deployments, blue/green releases.",
    icon: <GitBranch size={24} />,
    color: "from-blue-500 to-cyan-400",
    chips: ["CI", "CD", "Preview", "Blue/Green"],
  },
  {
    title: "Quality & Security",
    description: "E2E and unit tests, vulnerability scans, headers and content security policy.",
    icon: <Bug size={24} />,
    color: "from-yellow-600 to-amber-500",
    chips: ["E2E/Unit", "CSP", "Security Headers", "Scanning"],
  },
  {
    title: "Infra",
    description: "Serverless/edge runtimes, horizontal scaling, regions and failover.",
    icon: <Cpu size={24} />,
    color: "from-zinc-600 to-zinc-400 dark:from-zinc-400 dark:to-zinc-200",
    chips: ["Serverless", "Edge", "Scaling", "Multi-Region"],
  },
];

const diagrams = {
  "Client (Frontend)": (
    <svg viewBox="0 0 600 140" className="w-full h-[140px]">
      <defs>
        <marker id="arrow" markerWidth="10" markerHeight="10" refX="6" refY="3" orient="auto">
          <path d="M0,0 L0,6 L6,3 z" fill="currentColor" />
        </marker>
      </defs>
      <rect x="20" y="40" rx="12" ry="12" width="140" height="60" className="fill-default-100 dark:fill-default-200" />
      <text x="90" y="75" textAnchor="middle" className="fill-default-900 dark:fill-white text-[14px] font-black uppercase tracking-widest">Browser</text>
      <rect x="230" y="40" rx="12" ry="12" width="160" height="60" className="fill-default-100 dark:fill-default-200" />
      <text x="310" y="65" textAnchor="middle" className="fill-default-900 dark:fill-white text-[14px] font-black uppercase tracking-widest">Next.js</text>
      <text x="310" y="85" textAnchor="middle" className="fill-default-500 text-[10px] font-bold uppercase tracking-widest">App Router</text>
      <rect x="440" y="40" rx="12" ry="12" width="140" height="60" className="fill-default-100 dark:fill-default-200" />
      <text x="510" y="75" textAnchor="middle" className="fill-default-900 dark:fill-white text-[14px] font-black uppercase tracking-widest">SSR/ISR</text>
      <line x1="160" y1="70" x2="230" y2="70" className="stroke-primary" strokeWidth="2" markerEnd="url(#arrow)" />
      <line x1="390" y1="70" x2="440" y2="70" className="stroke-primary" strokeWidth="2" markerEnd="url(#arrow)" />
    </svg>
  ),
  "API Gateway": (
    <svg viewBox="0 0 600 140" className="w-full h-[140px]">
      <defs>
        <marker id="arrow" markerWidth="10" markerHeight="10" refX="6" refY="3" orient="auto">
          <path d="M0,0 L0,6 L6,3 z" fill="currentColor" />
        </marker>
      </defs>
      <rect x="20" y="40" rx="12" ry="12" width="140" height="60" className="fill-default-100 dark:fill-default-200" />
      <text x="90" y="75" textAnchor="middle" className="fill-default-900 dark:fill-white text-[14px] font-black">CLIENT</text>
      <rect x="230" y="25" rx="8" ry="8" width="160" height="40" className="fill-default-100 dark:fill-default-200" />
      <text x="310" y="50" textAnchor="middle" className="fill-default-900 dark:fill-white text-[12px] font-black">ROUTE HANDLERS</text>
      <rect x="230" y="85" rx="8" ry="8" width="160" height="40" className="fill-default-100 dark:fill-default-200" />
      <text x="310" y="110" textAnchor="middle" className="fill-default-900 dark:fill-white text-[12px] font-black">BFF</text>
      <rect x="440" y="40" rx="12" ry="12" width="160" height="60" className="fill-default-100 dark:fill-default-200" />
      <text x="520" y="75" textAnchor="middle" className="fill-default-900 dark:fill-white text-[12px] font-black">VALIDATION</text>
      <line x1="160" y1="70" x2="230" y2="45" className="stroke-primary" strokeWidth="2" markerEnd="url(#arrow)" />
      <line x1="160" y1="70" x2="230" y2="105" className="stroke-primary" strokeWidth="2" markerEnd="url(#arrow)" />
    </svg>
  ),
  // ... (diagrams continue with similar clean styling)
};

const ArchitectureSection = () => {
  const [open, setOpen] = useState(null);

  return (
    <section className="py-24 px-6 relative overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[120px] -z-10 animate-pulse"></div>
      <div className="absolute bottom-10 right-1/4 w-[500px] h-[500px] bg-secondary/10 rounded-full blur-[120px] -z-10 animate-pulse delay-1000"></div>

      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-20 space-y-6">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 backdrop-blur-md mb-4"
          >
            <Layers size={16} className="text-primary" />
            <span className="text-xs font-black uppercase tracking-[0.2em] text-primary">System Overview</span>
          </motion.div>

          <motion.h1
            className="text-5xl md:text-7xl font-black tracking-tighter leading-tight bg-clip-text text-transparent bg-gradient-to-br from-foreground via-foreground/90 to-muted-foreground"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
          >
            Muxio <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary italic">Architecture</span>
          </motion.h1>

          <motion.p
            className="text-default-500 text-xl font-medium max-w-3xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            A high-performance, secure, and scalable multi-layered system designed
            to deliver the ultimate music experience across all platforms.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {layers.map((layer, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: idx % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
            >
              <Card
                isBlurred
                className={`group border border-white/5 bg-background/40 backdrop-blur-2xl rounded-[2.5rem] p-6 h-full hover:border-primary/20 transition-all duration-500 ${open === idx ? 'ring-2 ring-primary/40' : ''}`}
              >
                <div className="flex flex-col md:flex-row gap-8 items-start md:items-center">
                  <div className={`p-6 rounded-3xl bg-gradient-to-br ${layer.color} text-white shadow-2xl group-hover:scale-110 transition-transform duration-500`}>
                    {layer.icon}
                  </div>

                  <div className="flex-1 space-y-4">
                    <div className="flex items-center justify-between">
                      <h3 className="text-2xl font-black tracking-tight">{layer.title}</h3>
                      <Button
                        isIconOnly
                        variant="light"
                        radius="full"
                        onPress={() => setOpen(open === idx ? null : idx)}
                        className={`transition-transform duration-500 ${open === idx ? 'rotate-180 bg-primary/10 text-primary' : ''}`}
                      >
                        <ChevronDown size={24} />
                      </Button>
                    </div>

                    <p className="text-default-500 font-medium text-lg leading-relaxed">
                      {layer.description}
                    </p>

                    <div className="flex flex-wrap gap-2">
                      {layer.chips.map((chip, i) => (
                        <Chip key={i} size="sm" variant="flat" className="bg-primary/10 text-primary font-bold px-3 uppercase text-[10px]">
                          {chip}
                        </Chip>
                      ))}
                    </div>
                  </div>
                </div>

                <AnimatePresence>
                  {open === idx && (
                    <motion.div
                      initial={{ opacity: 0, height: 0, mt: 0 }}
                      animate={{ opacity: 1, height: "auto", mt: 24 }}
                      exit={{ opacity: 0, height: 0, mt: 0 }}
                      className="overflow-hidden"
                    >
                      <div className="p-8 rounded-[2rem] bg-white/5 border border-white/5 backdrop-blur-3xl shadow-inner">
                        <div className="flex items-center gap-2 mb-6">
                          <Sparkles size={16} className="text-primary" />
                          <span className="text-[10px] font-black uppercase tracking-widest text-default-400">Flow Visualization</span>
                        </div>
                        {diagrams[layer.title] || (
                          <div className="py-12 flex items-center justify-center italic text-default-400 font-medium">
                            Visualization for this layer is coming soon...
                          </div>
                        )}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="mt-24 text-center pb-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
        >
          <p className="text-default-400 font-bold uppercase tracking-[0.3em] text-xs">
            Refining the Future of Audio Infrastructure
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default ArchitectureSection;


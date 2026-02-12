 "use client";
 
import React, { useState } from "react";
import { Card, CardHeader, CardBody, Chip } from "@nextui-org/react";
import { Globe, Server, Shield, Database, Cloud, GitBranch, Bug, Box, Cpu, MonitorDot } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
 
const layers = [
  {
    title: "Client (Frontend)",
    description: "Next.js App Router, React, TailwindCSS, NextUI components, SSR/ISR for SEO.",
    icon: <Globe size={18} />,
    chips: ["Next.js", "React", "TailwindCSS", "NextUI", "SSR/ISR"],
  },
  {
    title: "API Gateway",
    description: "Next.js Route Handlers or BFF. Validations, rate limiting, caching hints.",
    icon: <Server size={18} />,
    chips: ["Route Handlers", "BFF", "Zod/Valibot", "Rate Limit"],
  },
  {
    title: "Auth",
    description: "Session/JWT based auth, OAuth providers, role-based access control.",
    icon: <Shield size={18} />,
    chips: ["JWT/Session", "OAuth", "RBAC"],
  },
  {
    title: "Data Layer",
    description: "Primary database with ORM, read/write separation, pagination and indexing.",
    icon: <Database size={18} />,
    chips: ["PostgreSQL", "MongoDB", "ORM", "Indexes"],
  },
  {
    title: "Cache & CDN",
    description: "Edge caching for HTML/API, CDN for static assets, client-side memoization.",
    icon: <Cloud size={18} />,
    chips: ["CDN", "Edge Cache", "SWR/React Query"],
  },
  {
    title: "Storage",
    description: "Object storage for images/files with signed URLs and image optimization.",
    icon: <Box size={18} />,
    chips: ["Object Storage", "Signed URLs", "Image Optimize"],
  },
  {
    title: "Observability",
    description: "Logs, metrics, tracing, uptime checks, error reporting and alerts.",
    icon: <MonitorDot size={18} />,
    chips: ["Logging", "Tracing", "Alerts", "Uptime"],
  },
  {
    title: "CI/CD",
    description: "Automated tests, lint/typechecks, preview deployments, blue/green releases.",
    icon: <GitBranch size={18} />,
    chips: ["CI", "CD", "Preview", "Blue/Green"],
  },
  {
    title: "Quality & Security",
    description: "E2E and unit tests, vulnerability scans, headers and content security policy.",
    icon: <Bug size={18} />,
    chips: ["E2E/Unit", "CSP", "Security Headers", "Scanning"],
  },
  {
    title: "Infra",
    description: "Serverless/edge runtimes, horizontal scaling, regions and failover.",
    icon: <Cpu size={18} />,
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
      <rect x="20" y="40" rx="8" ry="8" width="140" height="60" className="fill-default-50 dark:fill-default-200" />
      <text x="90" y="75" textAnchor="middle" className="fill-default-900 dark:fill-white text-[16px] font-bold">Browser</text>
      <rect x="230" y="40" rx="8" ry="8" width="160" height="60" className="fill-default-50 dark:fill-default-200" />
      <text x="310" y="65" textAnchor="middle" className="fill-default-900 dark:fill-white text-[16px] font-bold">Next.js Pages</text>
      <text x="310" y="85" textAnchor="middle" className="fill-default-700 dark:fill-default-300 text-[14px]">App Router</text>
      <rect x="440" y="40" rx="8" ry="8" width="140" height="60" className="fill-default-50 dark:fill-default-200" />
      <text x="510" y="65" textAnchor="middle" className="fill-default-900 dark:fill-white text-[16px] font-bold">SSR/ISR</text>
      <line x1="160" y1="70" x2="230" y2="70" className="stroke-default-700 dark:stroke-default-300" strokeWidth="2" markerEnd="url(#arrow)" />
      <line x1="390" y1="70" x2="440" y2="70" className="stroke-default-700 dark:stroke-default-300" strokeWidth="2" markerEnd="url(#arrow)" />
    </svg>
  ),
  "API Gateway": (
    <svg viewBox="0 0 600 140" className="w-full h-[140px]">
      <defs>
        <marker id="arrow" markerWidth="10" markerHeight="10" refX="6" refY="3" orient="auto">
          <path d="M0,0 L0,6 L6,3 z" fill="currentColor" />
        </marker>
      </defs>
      <rect x="20" y="40" rx="8" ry="8" width="140" height="60" className="fill-default-50 dark:fill-default-200" />
      <text x="90" y="75" textAnchor="middle" className="fill-default-900 dark:fill-white text-[16px] font-bold">Client</text>
      <rect x="230" y="25" rx="8" ry="8" width="160" height="40" className="fill-default-50 dark:fill-default-200" />
      <text x="310" y="50" textAnchor="middle" className="fill-default-900 dark:fill-white text-[16px] font-bold">Route Handlers</text>
      <rect x="230" y="85" rx="8" ry="8" width="160" height="40" className="fill-default-50 dark:fill-default-200" />
      <text x="310" y="110" textAnchor="middle" className="fill-default-900 dark:fill-white text-[16px] font-bold">BFF</text>
      <rect x="440" y="40" rx="8" ry="8" width="160" height="60" className="fill-default-50 dark:fill-default-200" />
      <text x="520" y="75" textAnchor="middle" className="fill-default-900 dark:fill-white text-[16px] font-bold">Validation/RateLimit</text>
      <line x1="160" y1="70" x2="230" y2="45" className="stroke-default-700 dark:stroke-default-300" strokeWidth="2" markerEnd="url(#arrow)" />
      <line x1="160" y1="70" x2="230" y2="105" className="stroke-default-700 dark:stroke-default-300" strokeWidth="2" markerEnd="url(#arrow)" />
      <line x1="390" y1="45" x2="440" y2="60" className="stroke-default-700 dark:stroke-default-300" strokeWidth="2" markerEnd="url(#arrow)" />
      <line x1="390" y1="105" x2="440" y2="80" className="stroke-default-700 dark:stroke-default-300" strokeWidth="2" markerEnd="url(#arrow)" />
    </svg>
  ),
  "Auth": (
    <svg viewBox="0 0 600 140" className="w-full h-[140px]">
      <defs>
        <marker id="arrow" markerWidth="10" markerHeight="10" refX="6" refY="3" orient="auto">
          <path d="M0,0 L0,6 L6,3 z" fill="currentColor" />
        </marker>
      </defs>
      <rect x="20" y="40" rx="8" ry="8" width="140" height="60" className="fill-default-50 dark:fill-default-200" />
      <text x="90" y="75" textAnchor="middle" className="fill-default-900 dark:fill-white text-[16px] font-bold">User</text>
      <rect x="230" y="40" rx="8" ry="8" width="160" height="60" className="fill-default-50 dark:fill-default-200" />
      <text x="310" y="75" textAnchor="middle" className="fill-default-900 dark:fill-white text-[16px] font-bold">OAuth Provider</text>
      <rect x="440" y="25" rx="8" ry="8" width="140" height="40" className="fill-default-50 dark:fill-default-200" />
      <text x="510" y="50" textAnchor="middle" className="fill-default-900 dark:fill-white text-[16px] font-bold">JWT</text>
      <rect x="440" y="85" rx="8" ry="8" width="140" height="40" className="fill-default-50 dark:fill-default-200" />
      <text x="510" y="110" textAnchor="middle" className="fill-default-900 dark:fill-white text-[16px] font-bold">Session</text>
      <line x1="160" y1="70" x2="230" y2="70" className="stroke-default-700 dark:stroke-default-300" strokeWidth="2" markerEnd="url(#arrow)" />
      <line x1="390" y1="70" x2="440" y2="45" className="stroke-default-700 dark:stroke-default-300" strokeWidth="2" markerEnd="url(#arrow)" />
      <line x1="390" y1="70" x2="440" y2="105" className="stroke-default-700 dark:stroke-default-300" strokeWidth="2" markerEnd="url(#arrow)" />
    </svg>
  ),
  "Data Layer": (
    <svg viewBox="0 0 600 140" className="w-full h-[140px]">
      <defs>
        <marker id="arrow" markerWidth="10" markerHeight="10" refX="6" refY="3" orient="auto">
          <path d="M0,0 L0,6 L6,3 z" fill="currentColor" />
        </marker>
      </defs>
      <rect x="20" y="40" rx="8" ry="8" width="140" height="60" className="fill-default-50 dark:fill-default-200" />
      <text x="90" y="75" textAnchor="middle" className="fill-default-900 dark:fill-white text-[16px] font-bold">API</text>
      <rect x="230" y="40" rx="8" ry="8" width="160" height="60" className="fill-default-50 dark:fill-default-200" />
      <text x="310" y="75" textAnchor="middle" className="fill-default-900 dark:fill-white text-[16px] font-bold">ORM</text>
      <rect x="440" y="25" rx="8" ry="8" width="140" height="40" className="fill-default-50 dark:fill-default-200" />
      <text x="510" y="50" textAnchor="middle" className="fill-default-900 dark:fill-white text-[16px] font-bold">Primary DB</text>
      <rect x="440" y="85" rx="8" ry="8" width="140" height="40" className="fill-default-50 dark:fill-default-200" />
      <text x="510" y="110" textAnchor="middle" className="fill-default-900 dark:fill-white text-[16px] font-bold">Read Replica</text>
      <line x1="160" y1="70" x2="230" y2="70" className="stroke-default-700 dark:stroke-default-300" strokeWidth="2" markerEnd="url(#arrow)" />
      <line x1="390" y1="70" x2="440" y2="45" className="stroke-default-700 dark:stroke-default-300" strokeWidth="2" markerEnd="url(#arrow)" />
      <line x1="390" y1="70" x2="440" y2="105" className="stroke-default-700 dark:stroke-default-300" strokeWidth="2" markerEnd="url(#arrow)" />
    </svg>
  ),
  "Cache & CDN": (
    <svg viewBox="0 0 600 140" className="w-full h-[140px]">
      <defs>
        <marker id="arrow" markerWidth="10" markerHeight="10" refX="6" refY="3" orient="auto">
          <path d="M0,0 L0,6 L6,3 z" fill="currentColor" />
        </marker>
      </defs>
      <rect x="20" y="40" rx="8" ry="8" width="140" height="60" className="fill-default-50 dark:fill-default-200" />
      <text x="90" y="75" textAnchor="middle" className="fill-default-900 dark:fill-white text-[16px] font-bold">Edge</text>
      <rect x="230" y="40" rx="8" ry="8" width="160" height="60" className="fill-default-50 dark:fill-default-200" />
      <text x="310" y="75" textAnchor="middle" className="fill-default-900 dark:fill-white text-[16px] font-bold">Cache</text>
      <rect x="440" y="40" rx="8" ry="8" width="140" height="60" className="fill-default-50 dark:fill-default-200" />
      <text x="510" y="75" textAnchor="middle" className="fill-default-900 dark:fill-white text-[16px] font-bold">CDN</text>
      <line x1="160" y1="70" x2="230" y2="70" className="stroke-default-700 dark:stroke-default-300" strokeWidth="2" markerEnd="url(#arrow)" />
      <line x1="390" y1="70" x2="440" y2="70" className="stroke-default-700 dark:stroke-default-300" strokeWidth="2" markerEnd="url(#arrow)" />
    </svg>
  ),
  "Storage": (
    <svg viewBox="0 0 600 140" className="w-full h-[140px]">
      <defs>
        <marker id="arrow" markerWidth="10" markerHeight="10" refX="6" refY="3" orient="auto">
          <path d="M0,0 L0,6 L6,3 z" fill="currentColor" />
        </marker>
      </defs>
      <rect x="20" y="40" rx="8" ry="8" width="140" height="60" className="fill-default-50 dark:fill-default-200" />
      <text x="90" y="75" textAnchor="middle" className="fill-default-900 dark:fill-white text-[16px] font-bold">App</text>
      <rect x="230" y="40" rx="8" ry="8" width="160" height="60" className="fill-default-50 dark:fill-default-200" />
      <text x="310" y="65" textAnchor="middle" className="fill-default-900 dark:fill-white text-[16px] font-bold">Signed URL</text>
      <text x="310" y="85" textAnchor="middle" className="fill-default-700 dark:fill-default-300 text-[14px]">Policy</text>
      <rect x="440" y="40" rx="8" ry="8" width="140" height="60" className="fill-default-50 dark:fill-default-200" />
      <text x="510" y="75" textAnchor="middle" className="fill-default-900 dark:fill-white text-[16px] font-bold">Object Store</text>
      <line x1="160" y1="70" x2="230" y2="70" className="stroke-default-700 dark:stroke-default-300" strokeWidth="2" markerEnd="url(#arrow)" />
      <line x1="390" y1="70" x2="440" y2="70" className="stroke-default-700 dark:stroke-default-300" strokeWidth="2" markerEnd="url(#arrow)" />
    </svg>
  ),
  "Observability": (
    <div className="flex items-center gap-2 justify-center">
      <span className="px-2 py-1 rounded-md bg-default-100">Logs</span>
      <span>•</span>
      <span className="px-2 py-1 rounded-md bg-default-100">Metrics</span>
      <span>•</span>
      <span className="px-2 py-1 rounded-md bg-default-100">Tracing</span>
    </div>
  ),
  "CI/CD": (
    <div className="flex items-center gap-2 justify-center">
      <span className="px-2 py-1 rounded-md bg-default-100">Commit</span>
      <span>→</span>
      <span className="px-2 py-1 rounded-md bg-default-100">CI</span>
      <span>→</span>
      <span className="px-2 py-1 rounded-md bg-default-100">Preview/Deploy</span>
    </div>
  ),
  "Quality & Security": (
    <div className="flex items-center gap-2 justify-center">
      <span className="px-2 py-1 rounded-md bg-default-100">Tests</span>
      <span>•</span>
      <span className="px-2 py-1 rounded-md bg-default-100">Scanning</span>
      <span>•</span>
      <span className="px-2 py-1 rounded-md bg-default-100">Headers/CSP</span>
    </div>
  ),
  Infra: (
    <div className="flex items-center gap-2 justify-center">
      <span className="px-2 py-1 rounded-md bg-default-100">Serverless</span>
      <span>•</span>
      <span className="px-2 py-1 rounded-md bg-default-100">Edge</span>
      <span>•</span>
      <span className="px-2 py-1 rounded-md bg-default-100">Multi-Region</span>
    </div>
  ),
};

const ArchitectureSection = () => {
  const [open, setOpen] = useState(null);
  return (
    <section className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-28 -left-20 h-72 w-72 rounded-full bg-gradient-to-tr from-gradientstart/30 to-gradientend/20 blur-3xl" />
        <div className="absolute -bottom-28 -right-20 h-72 w-72 rounded-full bg-gradient-to-tr from-gradientend/30 to-gradientstart/20 blur-3xl" />
      </div>
      <div className="relative isolate px-6 py-20 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="text-center mb-12">
            <h2 className="scroll-m-20 text-4xl font-bold tracking-tight lg:text-6xl bg-clip-text text-transparent bg-gradient-to-r from-gradientstart to-gradientend">
              Architecture
            </h2>
            <h4 className="mt-4 scroll-m-20 text-xl font-medium tracking-tight text-default-500 max-w-2xl mx-auto">
              Modern full-stack architecture overview for scalable, secure and high-performance apps.
            </h4>
          </div>
 
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {layers.map((layer, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                whileHover={{ y: -4 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
              >
                <Card
                  isPressable
                  onPress={() => setOpen(open === idx ? null : idx)}
                  className="border-small border-default-200/50 bg-background/60 backdrop-blur-md rounded-3xl hover:border-primary/50 hover:shadow-lg transition-all"
                >
                  <CardHeader className="flex items-center gap-3 px-5 pt-5">
                    <div className="p-2 rounded-full bg-default-100 text-default-700">
                      {layer.icon}
                    </div>
                    <h3 className="text-lg font-semibold">{layer.title}</h3>
                  </CardHeader>
                  <CardBody className="px-5 pb-5">
                    <p className="text-default-500 text-sm mb-4">{layer.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {layer.chips.map((c, i) => (
                        <Chip key={i} size="sm" variant="flat" className="bg-default-200/50">
                          {c}
                        </Chip>
                      ))}
                    </div>
                    <AnimatePresence>
                      {open === idx && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          className="mt-4 p-4 rounded-xl border border-default-200 bg-gradient-to-br from-default-100/40 to-default-200/30"
                        >
                          {diagrams[layer.title]}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </CardBody>
                </Card>
              </motion.div>
            ))}
          </div>
 
          <div className="mt-10 text-center">
            <p className="text-sm text-default-400">
              Detailed docs and implementation examples coming soon.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
 
export default ArchitectureSection;

"use client";
import { Card, CardBody, CardHeader, Image, Link } from "@nextui-org/react";
import React from "react";
import { TbBrandNextjs } from "react-icons/tb";
import { FaGithub, FaDiscord, FaLinkedin, FaInstagram, FaEnvelope } from "react-icons/fa";
import { SiCrowdin } from "react-icons/si";
import NextLink from "next/link";

const communities = [
  {
    title: "Discord",
    description: "Join our Discord server to get in touch with the community.",
    icon: <FaDiscord size={40} className="text-foreground" />,
    url: "https://discord.gg/Rq5tWVM9Hg",
  },
  {
    title: "GitHub",
    description: "Contribute to the project on GitHub or create an issue.",
    icon: <FaGithub size={40} className="text-foreground" />,
    url: "https://github.com/am-abdulmueed",
  },
  {
    title: "Crowdin",
    description: "Help us translate the app into your language.",
    icon: <SiCrowdin size={40} className="text-foreground" />,
    url: "https://crowdin.com/project/muxio",
  },
];
const Footer = () => {
  return (
    <footer className="relative isolate px-6 pt-32 pb-16 lg:px-8 border-t border-black/5 dark:border-white/5 bg-background overflow-hidden">
      {/* Cinematic Aura Background */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-full -z-10 opacity-20 pointer-events-none">
        <div className="absolute bottom-[-10%] left-[-10%] w-[800px] h-[800px] bg-primary/20 rounded-full blur-[160px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[600px] h-[600px] bg-secondary/10 rounded-full blur-[140px]" />
      </div>

      <div className="container mx-auto max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-20">
          {/* Brand Section */}
          <div className="space-y-6 col-span-1 lg:col-span-1">
            <NextLink href="/" className="flex items-center gap-3 group">
              <div className="w-10 h-10 md:w-11 md:h-11 bg-foreground rounded-xl border border-black/10 dark:border-white/10 shadow-xl overflow-hidden group-hover:scale-105 transition-transform duration-500">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  alt="logo"
                  src="/nexgama/footer.png"
                  className="w-full h-full object-cover"
                />
              </div>
              <span className="text-2xl font-black tracking-tighter uppercase italic">BetaPix</span>
            </NextLink>
            <p className="text-default-500 font-medium text-sm leading-relaxed max-w-xs">
              Pushing the boundaries of web experiences. Developing high-performance platforms, cinematic UIs, and next-gen gaming ecosystems.
            </p>
            <div className="flex gap-4">
              {[
                { icon: <FaGithub size={22} />, href: "https://github.com/am-abdulmueed" },
                { icon: <FaLinkedin size={22} />, href: "https://www.linkedin.com/in/abdulmueed/" },
                { icon: <FaInstagram size={22} />, href: "https://www.instagram.com/a.b.d.u.l.m.u.e.e.d/" }
              ].map((social, i) => (
                <Link
                  key={i}
                  href={social.href}
                  isExternal
                  className="w-12 h-12 rounded-2xl bg-black/5 dark:bg-white/5 border border-black/5 dark:border-white/10 flex items-center justify-center text-default-400 hover:bg-primary hover:text-white hover:border-primary transition-all shadow-sm"
                >
                  {social.icon}
                </Link>
              ))}
            </div>
          </div>

          {/* Links Section: Split into 2 columns on mobile */}
          <div className="col-span-1 md:col-span-2 grid grid-cols-2 gap-8">
            {/* Platform Column */}
            <div className="space-y-6">
              <h4 className="text-[10px] font-black uppercase tracking-[0.5em] text-primary">Platform</h4>
              <div className="flex flex-col gap-4">
                {[
                  { name: "NexGama Engine", path: "/nexgama" },
                  { name: "Muxio Core", path: "/muxio" },
                  { name: "Project Showcase", path: "/projects" },
                  { name: "Hire Ecosystem", path: "/why-hire-me" }
                ].map((item, i) => (
                  <NextLink key={i} href={item.path} className="text-default-500 hover:text-primary font-bold text-sm tracking-tight transition-colors">
                    {item.name}
                  </NextLink>
                ))}
              </div>
            </div>

            {/* Resources Column */}
            <div className="space-y-6">
              <h4 className="text-[10px] font-black uppercase tracking-[0.5em] text-primary">Resources</h4>
              <div className="flex flex-col gap-4">
                {[
                  { name: "Download App", path: "/download" },
                  { name: "Privacy Policy", path: "/privacy" },
                  { name: "Terms of Service", path: "/terms" },
                  { name: "Open Source", path: "https://github.com/am-abdulmueed" }
                ].map((item, i) => (
                  <NextLink key={i} href={item.path} className="text-default-500 hover:text-primary font-bold text-sm tracking-tight transition-colors">
                    {item.name}
                  </NextLink>
                ))}
              </div>
            </div>
          </div>

          {/* Connect Column */}
          <div className="space-y-6">
            <h4 className="text-[10px] font-black uppercase tracking-[0.5em] text-primary">Connect</h4>
            <div className="flex flex-col gap-4 text-sm font-bold tracking-tight">
              <Link href="mailto:am.abdulmueed3@gmail.com" className="text-default-500 hover:text-primary transition-colors flex items-center gap-2">
                <FaEnvelope size={14} className="text-primary" /> am.abdulmueed3@gmail.com
              </Link>
              <div className="p-4 rounded-3xl bg-primary/5 border border-primary/10 space-y-2 group hover:bg-primary/10 transition-colors">
                <p className="text-[8px] font-black uppercase tracking-widest text-primary">Status</p>
                <p className="text-xs text-foreground/80 leading-relaxed">Currently open for premium projects and high-performance collaborations.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex flex-col items-center md:items-start gap-1">
            <p className="text-default-500 text-xs font-black uppercase tracking-[0.2em]">© {new Date().getFullYear()} BetaPix Entertainment</p>
            <p className="text-[9px] text-default-400 font-bold uppercase tracking-[0.3em]">Crafted by <span className="text-primary">Abdul Mueed</span></p>
          </div>
          <div className="flex items-center gap-6">
            <Link isExternal href="https://nextjs.org/" className="text-default-400 hover:text-foreground text-[10px] font-black uppercase tracking-widest flex items-center gap-2 transition-colors">
              Built with Next.js <TbBrandNextjs size={14} />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

"use client";
import * as React from "react";
import Logo from "./Logo";
import NextLink from "next/link";
import {
  Navbar as NavbarNext,
  NavbarBrand,
  NavbarMenuToggle,
  NavbarMenuItem,
  NavbarMenu,
  NavbarContent,
  NavbarItem,
  Link,
  Button,
} from "@nextui-org/react";
import ThemeSwitcher from "../ThemeSwitcher";
import { usePathname } from "next/navigation";
import { Github, Menu, X, Home, Cpu, Layers, Sparkles, Download, Info, Mail } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaInstagram, FaEnvelope, FaDiscord } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

async function fetcher() {
  try {
    const res = await fetch(
      "https://api.github.com/repos/am-abdulmueed/muxio?page=1&per_page=1"
    );
    if (!res.ok) {
      console.error("Failed to fetch GitHub stars:", res.statusText);
      return null;
    }
    return res.json();
  } catch (error) {
    console.error("Error fetching GitHub stars:", error);
    return null;
  }
}
let formatter = Intl.NumberFormat('en', { notation: 'compact' });

export default function Navbar() {
  const [starCount, setStarCount] = useState(null);
  const [progress, setProgress] = useState(0);
  const [hidden, setHidden] = useState(false);
  const lastScrollRef = useRef(0);
  const containerRef = useRef(null);
  const menuRefs = useRef([]);
  const [indicator, setIndicator] = useState({ left: 0, width: 0, visible: false });
  useEffect(() => {
    fetcher().then((data) => {
      if (data && data.stargazers_count) {
        setStarCount(data.stargazers_count);
      }
    });
  }, []);
  const menus = [
    { title: "Home", path: "/", icon: <Home size={20} /> },
    { title: "Architecture", path: "/architecture", icon: <Cpu size={20} /> },
    { title: "Projects", path: "/projects", icon: <Layers size={20} /> },
    { title: "Why Hire Me", path: "/why-hire-me", icon: <Sparkles size={20} /> },
    { title: "Download", path: "/download", icon: <Download size={20} /> },
    { title: "About Us", path: "/about", icon: <Info size={20} /> },
    { title: "Contact", path: "/contact", icon: <Mail size={20} /> },
    { title: "GitHub", path: "https://github.com/am-abdulmueed/", isExternal: true, icon: <FaGithub size={20} /> },
  ];
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [scroll, setScroll] = React.useState(false);
  const pathName = usePathname();
  const isBlogPage = pathName.startsWith('/blogs');

  useEffect(() => {
    const handleScroll = () => {
      setScroll(window.scrollY > 50);
      const total = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(total > 0 ? Math.min(1, window.scrollY / total) : 0);
      const last = lastScrollRef.current;
      if (window.scrollY > last + 10 && window.scrollY > 100) {
        setHidden(true);
      } else if (window.scrollY < last - 10 || window.scrollY <= 100) {
        setHidden(false);
      }
      lastScrollRef.current = window.scrollY;
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const idx = menus.findIndex((m) => ((m.path === '/blogs' && isBlogPage) || pathName === m.path));
    if (idx >= 0 && containerRef.current && menuRefs.current[idx]) {
      const cRect = containerRef.current.getBoundingClientRect();
      const rRect = menuRefs.current[idx].getBoundingClientRect();
      setIndicator({
        left: rRect.left - cRect.left,
        width: rRect.width,
        visible: true,
      });
    } else {
      setIndicator((prev) => ({ ...prev, visible: false }));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathName, isBlogPage, isMenuOpen]);

  return (
    <>
      <motion.div
        initial={{ y: 0 }}
        animate={{ y: hidden ? -80 : 0 }}
        transition={{ duration: 0.25, ease: "easeOut" }}
        className="fixed top-0 left-0 right-0 z-50"
      >
        <NavbarNext
          isBordered={false}
          maxWidth="2xl"
          className={`pt-2 ${scroll ? "bg-background/70 backdrop-blur-md supports-[backdrop-filter]:bg-background/60 border-b border-default-200/40 shadow-sm" : "bg-transparent"}`}
          position="fixed"
          disableScrollHandler
          onMenuOpenChange={setIsMenuOpen}
          isMenuOpen={isMenuOpen}
        >
          <NavbarContent className="md:hidden pr-3" justify="start">
            <NavbarBrand>
              <Logo />
            </NavbarBrand>
          </NavbarContent>

          <NavbarContent className="md:hidden" justify="end">
            <div className="flex items-center gap-4">
              <ThemeSwitcher />
              <button
                className="relative z-50 p-2 text-foreground focus:outline-none"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                aria-label={isMenuOpen ? "Close menu" : "Open menu"}
              >
                <div className="flex flex-col gap-1.5 items-end">
                  <motion.span
                    animate={isMenuOpen ? { rotate: 45, y: 8, width: "32px" } : { rotate: 0, y: 0, width: "24px" }}
                    className="h-1 bg-foreground rounded-full"
                  />
                  <motion.span
                    animate={isMenuOpen ? { opacity: 0, x: 20 } : { opacity: 1, x: 0, width: "32px" }}
                    className="h-1 bg-foreground rounded-full"
                  />
                  <motion.span
                    animate={isMenuOpen ? { rotate: -45, y: -8, width: "32px" } : { rotate: 0, y: 0, width: "16px" }}
                    className="h-1 bg-foreground rounded-full"
                  />
                </div>
              </button>
            </div>
          </NavbarContent>

          <NavbarContent className="hidden md:flex gap-4" justify="start">
            <NavbarBrand className="" justify="start">
              <Logo />
            </NavbarBrand>
          </NavbarContent>

          <NavbarContent className="hidden md:flex gap-4" justify="end">
            <div ref={containerRef} className="relative flex items-center gap-4">
              {menus.map((menu, index) => (
                <NavbarItem key={index} isActive={(menu.path === '/blogs' && isBlogPage) || pathName === menu.path}>
                  <Button
                    ref={(el) => (menuRefs.current[index] = el)}
                    color="default"
                    variant={(menu.path === '/blogs' && isBlogPage) || pathName === menu.path ? "solid" : "light"}
                    as={menu.isExternal ? Link : NextLink}
                    size="md"
                    href={menu.path}
                    isExternal={menu.isExternal}
                    showAnchorIcon={menu.isExternal}
                    startContent={!menu.isExternal && menu.icon}
                    className="data-[active=true]:shadow-md font-bold px-4"
                  >
                    {menu.title}
                  </Button>
                </NavbarItem>
              ))}
              {indicator.visible && (
                <motion.div
                  className="absolute -bottom-2 h-1 rounded-full bg-gradient-to-r from-gradientstart to-gradientend"
                  initial={false}
                  animate={{ left: indicator.left, width: indicator.width }}
                  transition={{ type: "spring", stiffness: 400, damping: 30 }}
                />
              )}
            </div>
            <NavbarItem>
              <ThemeSwitcher></ThemeSwitcher>
            </NavbarItem>
          </NavbarContent>
        </NavbarNext>
      </motion.div>
      <motion.div
        className="fixed top-0 left-0 h-[2px] bg-gradient-to-r from-gradientstart to-gradientend z-[60]"
        initial={{ width: "0%" }}
        animate={{ width: `${Math.round(progress * 100)}%` }}
        transition={{ duration: 0.1 }}
      />

      <AnimatePresence>
        {isMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-[90] bg-background/80 backdrop-blur-md md:hidden"
              onClick={() => setIsMenuOpen(false)}
            />
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed inset-y-0 right-0 z-[100] w-[85%] bg-background border-l border-default-200 shadow-2xl md:hidden flex flex-col overflow-y-auto"
            >
              <div className="p-8 pt-24 flex flex-col h-full">
                <div className="flex flex-col gap-6">
                  <p className="text-[10px] font-black uppercase tracking-[0.5em] text-primary mb-2">Navigation</p>
                  {menus.map((item, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.05 + 0.1 }}
                    >
                      <Link
                        color="foreground"
                        href={item.path}
                        as={item.isExternal ? undefined : NextLink}
                        isExternal={item.isExternal}
                        onPress={() => setIsMenuOpen(false)}
                        className="group flex items-center gap-4 py-2 w-full"
                      >
                        <div className={`p-3 rounded-2xl transition-all duration-300 ${(item.path === '/blogs' && isBlogPage) || pathName === item.path
                          ? "bg-gradient-to-br from-primary to-primary-600 text-white shadow-lg shadow-primary/30 scale-110"
                          : "bg-default-100 text-default-500 group-hover:bg-primary/10 group-hover:text-primary group-hover:scale-105"
                          }`}>
                          {React.cloneElement(item.icon, {
                            className: (item.path === '/blogs' && isBlogPage) || pathName === item.path
                              ? "text-white"
                              : ""
                          })}
                        </div>
                        <span className={`text-xl font-black tracking-tight ${(item.path === '/blogs' && isBlogPage) || pathName === item.path
                          ? "text-primary"
                          : "text-foreground group-hover:text-primary transition-colors"
                          }`}>
                          {item.title}
                        </span>
                        {((item.path === '/blogs' && isBlogPage) || pathName === item.path) && (
                          <div className="ml-auto w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
                        )}
                      </Link>
                    </motion.div>
                  ))}
                </div>

                <div className="mt-12 pb-10">
                  <div className="w-full h-px bg-default-200/60 mb-8" />
                  <p className="text-[10px] font-black uppercase tracking-[0.5em] text-primary mb-6">Social Mission</p>
                  <div className="grid grid-cols-3 gap-4">
                    {[
                      { icon: <FaGithub size={20} />, href: "https://github.com/am-abdulmueed", label: "GitHub" },
                      { icon: <FaXTwitter size={20} />, href: "https://x.com/a.b.d.u.l.m.u.e.e.d", label: "X" },
                      { icon: <FaLinkedin size={20} />, href: "https://www.linkedin.com/in/abdulmueed/", label: "In" },
                      { icon: <FaDiscord size={20} />, href: "https://discord.com/users/am_abdulmueed", label: "Discord" },
                      { icon: <FaInstagram size={18} />, href: "https://www.instagram.com/a.b.d.u.l.m.u.e.e.d/", label: "Insta" },
                      { icon: <FaEnvelope size={18} />, href: "mailto:am.abdulmueed3@gmail.com", label: "Email" },
                    ].map((social, idx) => (
                      <Link
                        key={idx}
                        isExternal
                        href={social.href}
                        className="flex flex-col items-center gap-2 p-3 rounded-2xl bg-default-100 hover:bg-primary/10 hover:text-primary transition-all group shadow-sm"
                      >
                        <div className="text-default-500 group-hover:text-primary transition-colors">
                          {social.icon}
                        </div>
                        <span className="text-[9px] font-black uppercase tracking-widest text-default-400 group-hover:text-primary">{social.label}</span>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}

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
import { Github, Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
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
  useEffect(() => {
    fetcher().then((data) => {
      if (data && data.stargazers_count) {
        setStarCount(data.stargazers_count);
      }
    });
  }, []);
  const menus = [
    { title: "Home", path: "/" },
    { title: "Projects", path: "/projects" },
    { title: "Download", path: "/download" },
    { title: "About Us", path: "/about" },
    { title: "Contact", path: "/contact" },
    { title: "GitHub", path: "https://github.com/am-abdulmueed/", isExternal: true },
  ];
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [scroll, setScroll] = React.useState(false);
  const pathName = usePathname();
  const isBlogPage = pathName.startsWith('/blogs');

  useEffect(() => {
    const handleScroll = () => {
      setScroll(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <NavbarNext
        isBordered={false}
        maxWidth="2xl"
        className={`z-50 pt-2 ${scroll ? "bg-background/70 backdrop-blur-md supports-[backdrop-filter]:bg-background/60" : "bg-transparent"}`}
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
          <ThemeSwitcher />
          <button
            className="md:hidden text-3xl font-bold leading-none focus:outline-none transition-transform hover:scale-110 active:scale-95"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          >
            {isMenuOpen ? <X size={28} /> : "≡"}
          </button>
        </NavbarContent>

        <NavbarContent className="hidden md:flex gap-4" justify="start">
          <NavbarBrand className="" justify="start">
            <Logo />
            <NextLink href="/">
              <h1 className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-gradientstart/60 to-50% to-gradientend/60">
                Muxio
              </h1>
            </NextLink>
          </NavbarBrand>
        </NavbarContent>

        <NavbarContent className="hidden md:flex gap-4" justify="end">
          {menus.map((menu, index) => (
            <NavbarItem key={index} isActive={(menu.path === '/blogs' && isBlogPage) || pathName === menu.path}>
              <Button
                color="default"
                variant={(menu.path === '/blogs' && isBlogPage) || pathName === menu.path ? "solid" : "light"}
                as={menu.isExternal ? Link : NextLink}
                size="md"
                href={menu.path}
                isExternal={menu.isExternal}
                showAnchorIcon={menu.isExternal}
              >
                <p className="font-bold">{menu.title}</p>
              </Button>
            </NavbarItem>
          ))}
          <NavbarItem>
            <ThemeSwitcher></ThemeSwitcher>
          </NavbarItem>
        </NavbarContent>
      </NavbarNext>

      <AnimatePresence>
        {isMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-[90] bg-black/50 backdrop-blur-sm md:hidden"
              onClick={() => setIsMenuOpen(false)}
            />
            <motion.div
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              exit={{ y: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              drag="y"
              dragConstraints={{ top: 0 }}
              dragElastic={{ top: 0, bottom: 0.5 }}
              onDragEnd={(e, { offset, velocity }) => {
                if (offset.y > 50 || velocity.y > 500) {
                  setIsMenuOpen(false);
                }
              }}
              className="fixed bottom-0 left-0 right-0 z-[100] h-auto max-h-[85vh] bg-background/95 backdrop-blur-xl rounded-t-3xl border-t border-default-200 shadow-2xl p-6 md:hidden flex flex-col overflow-y-auto pb-10"
            >
              <div className="flex justify-center mb-4">
                <div className="w-12 h-1.5 rounded-full bg-default-300" />
              </div>
              <div className="flex flex-col gap-2">
                {menus.map((item, index) => (
                  <Link
                    key={`${item}-${index}`}
                    className="w-full"
                    color="foreground"
                    href={item.path}
                    as={item.isExternal ? undefined : NextLink}
                    isExternal={item.isExternal}
                    showAnchorIcon={item.isExternal}
                    onPress={() => setIsMenuOpen(false)}
                    size="lg"
                  >
                    <p
                      className={
                        (item.path === '/blogs' && isBlogPage) || pathName === item.path
                          ? "font-bold text-lg text-primary w-full text-center py-2"
                          : "font-bold text-lg w-full text-center py-2"
                      }
                    >
                      {item.title}
                    </p>
                  </Link>
                ))}
              </div>
              <div className="mt-6 mb-0">
                <div className="w-full h-px bg-default-200/60" />
                <p className="text-center text-sm text-default-500 mt-3">Connect</p>
                <div className="flex justify-center gap-4 mt-2 mb-1">
                  <Link
                    isExternal
                    href="https://github.com/am-abdulmueed"
                    aria-label="GitHub"
                    className="rounded-full p-2 hover:bg-default-200/50 transition-colors"
                  >
                    <FaGithub size={22} />
                  </Link>
                  <Link
                    isExternal
                    href="https://x.com/a.b.d.u.l.m.u.e.e.d"
                    aria-label="X (Twitter)"
                    className="rounded-full p-2 hover:bg-default-200/50 transition-colors"
                  >
                    <FaXTwitter size={22} />
                  </Link>
                  <Link
                    isExternal
                    href="https://www.instagram.com/a.b.d.u.l.m.u.e.e.d/"
                    aria-label="Instagram"
                    className="rounded-full p-2 hover:bg-default-200/50 transition-colors"
                  >
                    <FaInstagram size={22} />
                  </Link>
                  <Link
                    isExternal
                    href="mailto:am.abdulmueed3@gmail.com?subject=Inquiry%20from%20Muxio%20Website&body=Ref%3A%20https%3A%2F%2Fmuxioo.vercel.app%0A%0AName%3A%20%0APhone%20(Optional)%3A%20%0AMessage%3A%20"
                    aria-label="Email"
                    className="rounded-full p-2 hover:bg-default-200/50 transition-colors"
                  >
                    <FaEnvelope size={22} />
                  </Link>
                  <Link
                    isExternal
                    href="https://discord.com/users/am_abdulmueed"
                    aria-label="Discord"
                    className="rounded-full p-2 hover:bg-default-200/50 transition-colors"
                  >
                    <FaDiscord size={22} />
                  </Link>
                  <Link
                    isExternal
                    href="https://www.linkedin.com/in/abdulmueed/"
                    aria-label="LinkedIn"
                    className="rounded-full p-2 hover:bg-default-200/50 transition-colors"
                  >
                    <FaLinkedin size={22} />
                  </Link>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}

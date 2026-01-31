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
    { title: "Download", path: "/download" },
    { title: "About Us", path: "/about" },
    { title: "Contact", path: "/contact" },
    { title: "GitHub", path: "https://github.com/am-abdulmueed/muxio", isExternal: true },
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
        position="sticky"
        disableScrollHandler
      >
        <NavbarContent className="md:hidden pr-3" justify="start">
          <NavbarBrand>
            <Logo />
          </NavbarBrand>
        </NavbarContent>

        <NavbarContent className="md:hidden" justify="end">
          <ThemeSwitcher />
          <Button
            isIconOnly
            variant="light"
            onClick={() => setIsMenuOpen(true)}
            aria-label="Open menu"
          >
            <Menu size={24} />
          </Button>
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
                <p className="font-semibold">{menu.title}</p>
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
              onClick={() => setIsMenuOpen(false)}
              className="fixed inset-0 z-[100] bg-black/50 backdrop-blur-sm md:hidden"
            />
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", bounce: 0, duration: 0.4 }}
              className="fixed top-0 right-0 z-[101] h-full w-[280px] bg-background/95 backdrop-blur-xl shadow-2xl md:hidden border-l border-default-100"
            >
              <div className="flex flex-col h-full">
                <div className="flex justify-end p-4">
                  <Button
                    isIconOnly
                    variant="light"
                    onClick={() => setIsMenuOpen(false)}
                    aria-label="Close menu"
                  >
                    <X size={24} />
                  </Button>
                </div>
                <div className="flex flex-col px-6 gap-6 mt-4">
                  {menus.map((item, index) => (
                    <Link
                      key={`${item}-${index}`}
                      as={item.isExternal ? undefined : NextLink}
                      className="w-full"
                      color="foreground"
                      href={item.path}
                      isExternal={item.isExternal}
                      showAnchorIcon={item.isExternal}
                      onPress={() => setIsMenuOpen(false)}
                    >
                      <p
                        className={
                          (item.path === '/blogs' && isBlogPage) || pathName === item.path
                            ? "font-bold text-xl text-primary"
                            : "font-semibold text-xl"
                        }
                      >
                        {item.title}
                      </p>
                    </Link>
                  ))}
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
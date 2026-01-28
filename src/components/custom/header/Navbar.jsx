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
    <NavbarNext
      isBordered={false}
      isMenuOpen={isMenuOpen}
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

      <NavbarContent className="md:hidden z-[100]" justify="end">
        <ThemeSwitcher />
        <button
          className="group flex items-center justify-center p-2 rounded-md text-foreground hover:bg-default-100 active:bg-default-200 outline-none transition-colors"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
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
              <p className="font-semibold">{menu.title}</p>
            </Button>
          </NavbarItem>
        ))}
        <NavbarItem>
          <ThemeSwitcher></ThemeSwitcher>
        </NavbarItem>
      </NavbarContent>

      <NavbarMenu className="bg-background pt-6">
        {menus.map((item, index) => (
          <NavbarMenuItem
            key={`${item}-${index}`}
            isActive={(item.path === '/blogs' && isBlogPage) || pathName === item.path}
          >
            <Link
              as={item.isExternal ? undefined : NextLink}
              className="w-full"
              color="foreground"
              href={item.path}
              size="lg"
              isExternal={item.isExternal}
              showAnchorIcon={item.isExternal}
              onPress={() => setIsMenuOpen(false)}
            >
              <p
                className={
                  (item.path === '/blogs' && isBlogPage) || pathName === item.path
                    ? "font-bold text-lg"
                    : "font-semibold text-lg"
                }
              >
                {item.title}
              </p>
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </NavbarNext>
  );
}
"use client";
import React from "react";
import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  Button,
} from "@nextui-org/react";
import { Moon, Sun } from "lucide-react";
import { useState, useEffect } from "react";
import { useTheme } from "next-themes";

const ThemeSwitcher = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);
  return (
    mounted && (
      <Dropdown>
        <DropdownTrigger>
          <Button 
            isIconOnly 
            aria-label="Change Theme"
            variant="light"
            className="rounded-xl border border-default-200/50 bg-background/40 backdrop-blur-md shadow-sm hover:shadow-md"
          >
            {theme === "light" ? <Sun /> : <Moon />}
          </Button>
        </DropdownTrigger>
        <DropdownMenu 
          aria-label="Static Actions"
          className="bg-background/95 backdrop-blur-md border border-default-200/60 rounded-2xl shadow-2xl p-1"
        >
          <DropdownItem key="dark" onClick={() => setTheme("dark")} className="rounded-xl hover:bg-secondary/30">
            Dark
          </DropdownItem>
          <DropdownItem key="light" onClick={() => setTheme("light")} className="rounded-xl hover:bg-secondary/30">
            Light
          </DropdownItem>
          <DropdownItem key="system" onClick={() => setTheme("system")} className="rounded-xl hover:bg-secondary/30">
            System
          </DropdownItem>
        </DropdownMenu>
      </Dropdown>
    )
  );
};
export default ThemeSwitcher;

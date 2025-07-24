"use client"
import { Moon, Sun } from "lucide-react";
import { Button } from "./button";
import { useTheme } from "next-themes";

export default function Themeswitcher() {
    const { setTheme, resolvedTheme: theme } = useTheme();
    return (
        <div>
            <Button className="dark:hidden flex rounded-full " size="icon" variant="outline" onClick={() => setTheme("dark")}>
                <Moon className="h-4 w-4 " />
            </Button>
            <Button className="dark:flex hidden rounded-full" size="icon" variant="outline" onClick={() => setTheme("light")}>
                <Sun className="h4 w-4" />
            </Button>
        </div>
    )
}
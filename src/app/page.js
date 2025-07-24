import { Divide, Layout } from "lucide-react";
import Image from "next/image";
import Header from "./components/Header";

import { ThemeProvider } from "next-themes";
import Section, { Skills } from "./components/Section";
import Fetuter from "./components/Fetuter";
import Bottumtext from "./components/bottumtext";
import Projects from "./components/projects";
import Hero from "./components/Hero";
// import An from './components/An';

export default function Home() {
  return (
    <div>
      <Hero />
      <Skills />
      <Section />
      <Skills />
      <Projects />
      <Fetuter />
      

      {/* <Projects /> */}
      {/* <Fotter /> */}
    </div>
  );
}

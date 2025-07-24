"use client"

import { useEffect } from 'react';
import Lenis from "lenis";

const LLenis = () => {
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const lenis = new Lenis();
      <link rel="stylesheet" href="https://unpkg.com/lenis@1.1.14/dist/lenis.css"></link>
      // Listen for the scroll event and log the event data
      lenis.on('scroll', (e) => {
        console.log(e);
      });

      // Use requestAnimationFrame to continuously update the scroll
      function raf(time) {
        lenis.raf(time);
        requestAnimationFrame(raf);
      }

      requestAnimationFrame(raf);
    }
  }, []);

  return null;
};

export default LLenis;
"use client";

import React, { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

const CustomCursor = () => {
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  const [isCoarse, setIsCoarse] = useState(false);
  const [isPointer, setIsPointer] = useState(false);
  const [isClicking, setIsClicking] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [cursorText, setCursorText] = useState("");

  const springConfig = { damping: 30, stiffness: 500, mass: 0.5 };
  const smoothX = useSpring(cursorX, springConfig);
  const smoothY = useSpring(cursorY, springConfig);

  useEffect(() => {
    const moveCursor = (e) => {
      if (!isVisible) setIsVisible(true);
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);

      const target = e.target;
      const clickable = target.closest('a, button, [role="button"], input, select, textarea');
      const isClickable = !!clickable || window.getComputedStyle(target).cursor === 'pointer';

      setIsPointer(isClickable);
      setCursorText(target.getAttribute('data-cursor-text') || (clickable ? clickable.getAttribute('data-cursor-text') : ""));
    };

    const handleMouseDown = () => setIsClicking(true);
    const handleMouseUp = () => setIsClicking(false);
    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    window.addEventListener("mousemove", moveCursor);
    window.addEventListener("mousedown", handleMouseDown);
    window.addEventListener("mouseup", handleMouseUp);
    document.addEventListener("mouseleave", handleMouseLeave);
    document.addEventListener("mouseenter", handleMouseEnter);

    const mq = window.matchMedia("(pointer: coarse)");
    const updateCoarse = () => setIsCoarse(mq.matches || window.innerWidth <= 768);
    updateCoarse();
    mq.addEventListener("change", updateCoarse);

    if (!mq.matches && window.innerWidth > 768) {
      document.body.classList.add('has-custom-cursor');
    }

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      window.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("mouseup", handleMouseUp);
      document.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("mouseenter", handleMouseEnter);
      mq.removeEventListener("change", updateCoarse);
      document.body.classList.remove('has-custom-cursor');
    };
  }, [cursorX, cursorY, isVisible]);

  useEffect(() => {
    if (isCoarse) {
      document.body.classList.remove('has-custom-cursor');
    }
  }, [isCoarse]);

  if (isCoarse) return null;

  return (
    <div className={`fixed inset-0 pointer-events-none z-[999999] transition-opacity duration-300 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
      {/* Outer Ring */}
      <motion.div
        className="fixed top-0 left-0 w-8 h-8 border-2 border-primary rounded-full"
        style={{
          x: smoothX,
          y: smoothY,
          translateX: "-50%",
          translateY: "-50%",
        }}
        animate={{
          scale: isClicking ? 0.8 : (isPointer ? 1.8 : 1),
          borderColor: isPointer ? "var(--nextui-secondary)" : "var(--nextui-primary)",
          borderWidth: isPointer ? "3px" : "2px",
        }}
      />

      {/* Inner Dot with Glow */}
      <motion.div
        className="fixed top-0 left-0 w-2 h-2 bg-primary rounded-full shadow-[0_0_15px_rgba(var(--nextui-primary-rgb),0.8)]"
        style={{
          x: cursorX,
          y: cursorY,
          translateX: "-50%",
          translateY: "-50%",
        }}
        animate={{
          scale: isClicking ? 1.5 : (isPointer ? 0 : 1),
          backgroundColor: isPointer ? "var(--nextui-secondary)" : "var(--nextui-primary)",
        }}
      />

      {/* Custom Text/Icon Hover */}
      <motion.div
        className="fixed top-0 left-0 flex items-center justify-center pointer-events-none"
        style={{
          x: smoothX,
          y: smoothY,
          translateX: "-50%",
          translateY: "-50%",
        }}
        animate={{
          opacity: isPointer ? 1 : 0,
          scale: isPointer ? 1 : 0.5,
        }}
      >
        <div className="relative flex items-center justify-center">
          {cursorText ? (
            <span className="text-white text-[11px] font-black uppercase tracking-tighter whitespace-nowrap bg-primary px-3 py-1.5 rounded-full shadow-2xl mt-20 border border-white/20">
              {cursorText}
            </span>
          ) : (
            isPointer && (
              <div className="mt-0 text-primary-foreground bg-primary p-1.5 rounded-full shadow-lg">
                <ArrowUpRight size={14} className="stroke-[4px]" />
              </div>
            )
          )}
        </div>
      </motion.div>
    </div>
  );
};

export default CustomCursor;

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
  const [cursorText, setCursorText] = useState("");

  const springConfig = { damping: 25, stiffness: 400 };
  const smoothX = useSpring(cursorX, springConfig);
  const smoothY = useSpring(cursorY, springConfig);

  useEffect(() => {
    const moveCursor = (e) => {
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

    window.addEventListener("mousemove", moveCursor);
    window.addEventListener("mousedown", handleMouseDown);
    window.addEventListener("mouseup", handleMouseUp);

    const mq = window.matchMedia("(pointer: coarse)");
    const updateCoarse = () => setIsCoarse(mq.matches || window.innerWidth <= 768);
    updateCoarse();
    mq.addEventListener("change", updateCoarse);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      window.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("mouseup", handleMouseUp);
      mq.removeEventListener("change", updateCoarse);
    };
  }, [cursorX, cursorY]);

  if (isCoarse) return null;

  return (
    <div className="fixed inset-0 pointer-events-none z-[999999] mix-blend-difference">
      {/* Outer Ring */}
      <motion.div
        className="fixed top-0 left-0 w-8 h-8 border border-white rounded-full transition-colors"
        style={{
          x: smoothX,
          y: smoothY,
          translateX: "-50%",
          translateY: "-50%",
        }}
        animate={{
          scale: isClicking ? 0.8 : (isPointer ? 1.5 : 1),
          opacity: isPointer ? 1 : 0.5,
          borderWidth: isPointer ? "2px" : "1px",
        }}
      />

      {/* Inner Dot */}
      <motion.div
        className="fixed top-0 left-0 w-4 h-4 bg-white rounded-full shadow-[0_0_15px_rgba(255,255,255,0.8)]"
        style={{
          x: cursorX,
          y: cursorY,
          translateX: "-50%",
          translateY: "-50%",
        }}
        animate={{
          scale: isClicking ? 0.5 : (isPointer ? 0 : 1),
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
        }}
      >
        <div className="relative flex items-center justify-center">
          {cursorText ? (
            <span className="text-white text-[10px] font-black uppercase tracking-tighter whitespace-nowrap bg-white/20 backdrop-blur-sm px-2 py-1 rounded-md border border-white/10 mt-14">
              {cursorText}
            </span>
          ) : (
            isPointer && <ArrowUpRight size={16} className="text-white" />
          )}
        </div>
      </motion.div>
    </div>
  );
};

export default CustomCursor;

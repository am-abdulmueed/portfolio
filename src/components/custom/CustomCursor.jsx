"use client";
import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const CustomCursor = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isPointer, setIsPointer] = useState(false);

  useEffect(() => {
    const mouseMove = (e) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY
      })
      
      // Check if hovering over clickable element
      const target = e.target;
      const isClickable = (
        target.tagName.toLowerCase() === 'a' ||
        target.tagName.toLowerCase() === 'button' ||
        target.onclick ||
        window.getComputedStyle(target).cursor === 'pointer' ||
        target.closest('a') || 
        target.closest('button')
      );
      
      setIsPointer(!!isClickable);
    }

    window.addEventListener("mousemove", mouseMove);

    return () => {
      window.removeEventListener("mousemove", mouseMove);
    }
  }, []);

  return (
    <>
      <motion.div
        className="fixed top-0 left-0 w-4 h-4 bg-white rounded-full pointer-events-none z-[9999] mix-blend-difference flex items-center justify-center"
        animate={{ 
          x: mousePosition.x - 8, 
          y: mousePosition.y - 8,
          scale: isPointer ? 1.5 : 1,
          opacity: 1 
        }}
        transition={{ 
          type: "spring",
          damping: 30,
          stiffness: 300,
          mass: 0.5
        }}
      >
        <div className="w-1.5 h-1.5 bg-black rounded-full" />
      </motion.div>
      <motion.div
         className="fixed top-0 left-0 w-8 h-8 border border-white rounded-full pointer-events-none z-[9998] mix-blend-difference opacity-50"
         animate={{ 
            x: mousePosition.x - 16, 
            y: mousePosition.y - 16,
            scale: isPointer ? 1.8 : 1,
         }}
         transition={{ 
            type: "spring",
            damping: 20,
            stiffness: 150,
            mass: 0.8
         }}
      />
    </>
  );
};

export default CustomCursor;

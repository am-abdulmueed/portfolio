"use client";
import React, { useEffect, useState, useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform, useVelocity, useAnimationFrame } from 'framer-motion';
import { ArrowUpRight, ChevronRight } from 'lucide-react';

const CustomCursor = () => {
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  
  // Physics for the Head (The '>')
  const springConfig = { damping: 25, stiffness: 700 };
  const headX = useSpring(cursorX, springConfig);
  const headY = useSpring(cursorY, springConfig);

  // Velocity for rotation calculation
  const velocityX = useVelocity(cursorX);
  const velocityY = useVelocity(cursorY);
  
  // Persist rotation even when stopped
  const rotate = useMotionValue(0);
  const wavePhase = useMotionValue(0); // For the "alive" wave animation
  
  useAnimationFrame((t) => {
    const vx = velocityX.get();
    const vy = velocityY.get();
    
    // Update rotation
    if (Math.abs(vx) > 0.1 || Math.abs(vy) > 0.1) {
      const angle = Math.atan2(vy, vx) * (180 / Math.PI);
      rotate.set(angle);
    }

    // Increment wave phase for idle animation (speed = 0.005)
    wavePhase.set(t * 0.005);
  });

  const [isPointer, setIsPointer] = useState(false);
  const [isClicking, setIsClicking] = useState(false);
  const [cursorText, setCursorText] = useState("");

  // Calculate tail positions based on head position and rotation
  // Each tail dot aims for a spot "behind" the head
  const useTailSegment = (index, gap = 12) => {
    // Calculate target position based on rotation + wave
    const targetX = useTransform([headX, rotate, wavePhase], ([x, r, w]) => {
      const angleRad = r * (Math.PI / 180);
      const perpAngle = angleRad + Math.PI / 2;
      
      // Base position behind head
      const baseX = x - Math.cos(angleRad) * (gap * (index + 1));
      
      // Wave offset (perpendicular to direction)
      // Amplitude decreases for first few segments to keep head stable, increases for tail
      const waveAmplitude = 2 + (index * 0.5); 
      const waveOffset = Math.sin(w - index * 0.5) * waveAmplitude;
      
      return baseX + Math.cos(perpAngle) * waveOffset;
    });
    
    const targetY = useTransform([headY, rotate, wavePhase], ([y, r, w]) => {
      const angleRad = r * (Math.PI / 180);
      const perpAngle = angleRad + Math.PI / 2;
      
      const baseY = y - Math.sin(angleRad) * (gap * (index + 1));
      
      const waveAmplitude = 2 + (index * 0.5);
      const waveOffset = Math.sin(w - index * 0.5) * waveAmplitude;
      
      return baseY + Math.sin(perpAngle) * waveOffset;
    });

    // Add spring physics to make it fluid, not rigid
    const stiffness = 200 - (index * 10); 
    const damping = 20 + (index * 2);
    
    const x = useSpring(targetX, { stiffness, damping });
    const y = useSpring(targetY, { stiffness, damping });
    
    return { x, y };
  };

  // Create chain
  const tail1 = useTailSegment(0);
  const tail2 = useTailSegment(1);
  const tail3 = useTailSegment(2);
  const tail4 = useTailSegment(3);
  const tail5 = useTailSegment(4);
  const tail6 = useTailSegment(5);
  const tail7 = useTailSegment(6);
  const tail8 = useTailSegment(7);
  
  const tails = [tail1, tail2, tail3, tail4, tail5, tail6, tail7, tail8];

  useEffect(() => {
    const moveCursor = (e) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
      
      const target = e.target;
      
      // Check for clickable elements
      const clickable = target.closest('a, button, [role="button"], input, select, textarea');
      const isClickable = !!clickable || window.getComputedStyle(target).cursor === 'pointer';
      
      setIsPointer(isClickable);

      // Check for custom cursor text
      const text = target.getAttribute('data-cursor-text') || clickable?.getAttribute('data-cursor-text');
      setCursorText(text || "");
    }

    const handleMouseDown = () => setIsClicking(true);
    const handleMouseUp = () => setIsClicking(false);

    window.addEventListener("mousemove", moveCursor);
    window.addEventListener("mousedown", handleMouseDown);
    window.addEventListener("mouseup", handleMouseUp);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      window.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("mouseup", handleMouseUp);
    }
  }, [cursorX, cursorY]);

  return (
    <>
      {/* The Head: A Chevron '>' Shape */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9999] mix-blend-difference flex items-center justify-center text-white drop-shadow-[0_0_2px_rgba(255,255,255,0.8)]"
        style={{
          x: headX,
          y: headY,
          translateX: "-50%",
          translateY: "-50%",
          rotate: rotate,
        }}
        animate={{ 
          scale: isClicking ? 0.8 : (isPointer ? 0 : 1.2), // Hide when hovering link
          opacity: isPointer ? 0 : 1 // Hide when hovering link
        }}
      >
        <ChevronRight size={24} strokeWidth={3} />
      </motion.div>
      
      {/* The Tail: Dotted Trail with Tapering */}
      {tails.map((tail, index) => (
        <motion.div
          key={index}
          className="fixed top-0 left-0 bg-white rounded-full pointer-events-none z-[9998] mix-blend-difference drop-shadow-[0_0_1px_rgba(255,255,255,0.5)]"
          style={{
            x: tail.x,
            y: tail.y,
            translateX: "-50%",
            translateY: "-50%",
          }}
          animate={{
            width: isPointer ? 0 : Math.max(2, 10 - index * 1.2), // Tapering size
            height: isPointer ? 0 : Math.max(2, 10 - index * 1.2),
            opacity: isPointer ? 0 : 0.8 - (index * 0.1), // Tapering opacity
          }}
        />
      ))}

      {/* Expanded Hover State (Ring) */}
      <motion.div
         className="fixed top-0 left-0 flex items-center justify-center pointer-events-none z-[9997] mix-blend-difference"
         style={{
            x: headX,
            y: headY,
            translateX: "-50%",
            translateY: "-50%",
         }}
         animate={{ 
            width: isPointer ? 32 : 0,
            height: isPointer ? 32 : 0,
            opacity: isPointer ? 1 : 0,
            border: "1.5px solid white",
            borderRadius: isPointer ? "8px" : "50%", // Diamond/Squircle shape
            rotate: isPointer ? 45 : 0,
            backgroundColor: isClicking ? "rgba(255,255,255,0.3)" : "transparent",
            scale: isClicking ? 0.8 : 1
         }}
         transition={{
            type: "spring", damping: 20, stiffness: 300
         }}
      >
         {/* Text/Icon inside Ring */}
         <motion.div
          animate={{ 
            opacity: isPointer ? 1 : 0,
            scale: isPointer ? 1 : 0,
            rotate: isPointer ? -45 : 0 // Counter-rotate to keep content upright
          }}
          className="text-white font-bold text-[8px] tracking-widest uppercase"
        >
          {cursorText ? cursorText : <ArrowUpRight size={20} strokeWidth={2} />}
        </motion.div>
      </motion.div>
    </>
  );
};

export default CustomCursor;

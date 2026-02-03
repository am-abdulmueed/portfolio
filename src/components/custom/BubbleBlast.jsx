"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const BubbleBlast = () => {
  const [blasts, setBlasts] = useState([]);

  // Short pop sound base64
  const playPopSound = () => {
    try {
      const audio = new Audio("data:audio/wav;base64,UklGRl9vT19XQVZFZm10IBAAAAABAAEAQB8AAEAfAAABAAgAZGF0YU");
      // Use a more complete short pop sound if possible, or just a very short generated buffer
      // Actually, let's use a real generated beep context for better reliability without external assets
      
      const AudioContext = window.AudioContext || window.webkitAudioContext;
      if (AudioContext) {
        const audioCtx = new AudioContext();
        const oscillator = audioCtx.createOscillator();
        const gainNode = audioCtx.createGain();
        
        oscillator.type = 'sine';
        oscillator.frequency.setValueAtTime(800, audioCtx.currentTime);
        oscillator.frequency.exponentialRampToValueAtTime(100, audioCtx.currentTime + 0.1);
        
        gainNode.gain.setValueAtTime(0.3, audioCtx.currentTime);
        gainNode.gain.exponentialRampToValueAtTime(0.01, audioCtx.currentTime + 0.1);
        
        oscillator.connect(gainNode);
        gainNode.connect(audioCtx.destination);
        
        oscillator.start();
        oscillator.stop(audioCtx.currentTime + 0.1);
      }
    } catch (e) {
      // Ignore audio errors (e.g. user didn't interact yet)
    }
  };

  useEffect(() => {
    const handleClick = (e) => {
      playPopSound();
      const newBlast = {
        id: Date.now(),
        x: e.clientX,
        y: e.clientY,
      };
      setBlasts((prev) => [...prev, newBlast]);

      // Cleanup blast after animation
      setTimeout(() => {
        setBlasts((prev) => prev.filter((b) => b.id !== newBlast.id));
      }, 1000);
    };

    window.addEventListener("click", handleClick);
    return () => window.removeEventListener("click", handleClick);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-[9997] overflow-hidden">
      <AnimatePresence>
        {blasts.map((blast) => (
          <BlastGroup key={blast.id} x={blast.x} y={blast.y} />
        ))}
      </AnimatePresence>
    </div>
  );
};

const BlastGroup = ({ x, y }) => {
  const bubbleCount = 12;
  const bubbles = Array.from({ length: bubbleCount });

  return (
    <>
      {bubbles.map((_, i) => (
        <Bubble key={i} x={x} y={y} index={i} total={bubbleCount} />
      ))}
    </>
  );
};

const Bubble = ({ x, y, index, total }) => {
  const angle = (index / total) * 360;
  const randomDistance = Math.random() * 50 + 50; // Distance traveled
  const randomSize = Math.random() * 10 + 5; // Size of bubble
  
  // Convert polar to cartesian
  const dirX = Math.cos((angle * Math.PI) / 180) * randomDistance;
  const dirY = Math.sin((angle * Math.PI) / 180) * randomDistance;

  // Generate random vibrant color using HSL
  // Hue: 0-360 (full spectrum)
  // Saturation: 70-100% (vibrant)
  // Lightness: 50-60% (balanced visibility)
  const hue = Math.floor(Math.random() * 360);
  const saturation = Math.floor(Math.random() * 30) + 70;
  const lightness = Math.floor(Math.random() * 10) + 50;
  const color = `hsl(${hue}, ${saturation}%, ${lightness}%)`;

  return (
    <motion.div
      initial={{ 
        x: x, 
        y: y, 
        scale: 0,
        opacity: 1 
      }}
      animate={{ 
        x: x + dirX, 
        y: y + dirY, 
        scale: [0, 1.5, 0],
        opacity: [1, 1, 0] 
      }}
      transition={{ 
        duration: 0.8, 
        ease: "easeOut" 
      }}
      style={{
        position: "absolute",
        width: randomSize,
        height: randomSize,
        borderRadius: "50%",
        backgroundColor: color,
        boxShadow: `0 0 10px ${color}`,
      }}
    />
  );
};

export default BubbleBlast;

"use client";
import React, { useRef, useEffect } from "react";
import { animate } from "framer-motion";
import { Card, CardBody } from "@nextui-org/react";

export default function Download() {
  const nodeRef = useRef();

  useEffect(() => {
    const node = nodeRef.current;
    // Hardcoded download count
    const sum = 1827561; 
    
    if (node) {
      const controls = animate(0, sum, {
        duration: 2,
        ease: "easeOut",
        onUpdate(value) {
          node.textContent = Intl.NumberFormat("en-US").format(
            value.toFixed(0)
          );
        },
      });
      return () => controls.stop();
    }
  }, []);

  return (
    <Card className="bg-background/40 backdrop-blur-md border-small border-default-200/50 shadow-sm w-full">
      <CardBody className="py-12 flex flex-col items-center justify-center gap-2">
          <h1
          className="text-center text-6xl md:text-8xl font-black tracking-tighter bg-clip-text text-transparent bg-gradient-to-r from-gradientstart to-gradientend drop-shadow-sm"
          ref={nodeRef}
          />
          <h1 className="text-center text-2xl font-semibold tracking-tight lg:text-3xl text-default-500 uppercase letter-spacing-widest">
          Downloads
          </h1>
      </CardBody>
    </Card>
  );
}
function Counter({ from, to }) {
  const nodeRef = useRef();

  useEffect(() => {
    const node = nodeRef.current;

    const controls = animate(from, to, {
      duration: 1,
      onUpdate(value) {
        node.textContent = value.toFixed(2);
      },
    });

    return () => controls.stop();
  }, [from, to]);

  return (
    <h1
      className="text-center scroll-m-20 text-4xl font-bold tracking-tight lg:text-5xl bg-clip-text py-10 text-transparent bg-gradient-to-r from-gradientstart/60 to-50% to-gradientend/60"
      ref={nodeRef}
    />
  );
}

"use client";
import React, { useRef, useEffect } from "react";
import { animate, motion } from "framer-motion";
import { Card, CardBody } from "@nextui-org/react";

export default function Download() {
  const nodeRef = useRef();

  useEffect(() => {
    const node = nodeRef.current;
    const sum = 1827561;

    if (node) {
      const controls = animate(0, sum, {
        duration: 2.5,
        ease: [0.16, 1, 0.3, 1],
        onUpdate(value) {
          node.textContent = Intl.NumberFormat("en-US").format(
            Math.floor(value)
          );
        },
      });
      return () => controls.stop();
    }
  }, []);

  return (
    <div className="relative group overflow-hidden">
      {/* Decorative Glow */}
      <div className="absolute -inset-1 bg-gradient-to-r from-primary to-secondary rounded-[3rem] blur opacity-20 group-hover:opacity-40 transition duration-1000"></div>

      <Card className="bg-background/60 backdrop-blur-2xl border border-white/10 shadow-2xl w-full rounded-[3rem] overflow-hidden">
        <CardBody className="py-14 px-6 flex flex-col items-center justify-center gap-4 relative">
          <motion.div
            initial={{ scale: 0.5, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            className="absolute -top-10 -left-10 w-32 h-32 bg-primary/20 rounded-full blur-3xl"
          />

          <div className="w-full flex justify-center">
            <h1
              className="inline-block min-w-[9ch] text-center font-black tracking-tight tabular-nums leading-none text-[clamp(2.5rem,12vw,6rem)] md:text-8xl bg-clip-text text-transparent bg-gradient-to-br from-primary via-primary/80 to-secondary drop-shadow-2xl"
              ref={nodeRef}
            >
              1,827,561
            </h1>
          </div>
          <div className="flex flex-col items-center">
            <h2 className="text-center text-2xl font-black tracking-[0.2em] uppercase text-default-400">
              Downloads
            </h2>
            <div className="w-12 h-1 bg-primary rounded-full mt-2" />
          </div>
        </CardBody>
      </Card>
    </div>
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

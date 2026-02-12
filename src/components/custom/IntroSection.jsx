 "use client";
import React from "react";
import { motion } from "framer-motion";
import HomeHeading from "./typo/HomeHeading";
import Image from "next/image";

const IntroSection = () => {
  return (
    <section className="intro-section relative overflow-hidden">
      <div
        className="absolute inset-0 -z-10 transform-gpu overflow-hidden blur-3xl pointer-events-none"
        aria-hidden="true"
      >
        <div
          className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#80e6ff] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
        ></div>
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage:
              "radial-gradient(circle at 20% 10%, rgba(59,130,246,0.15), transparent 40%), radial-gradient(circle at 80% 80%, rgba(168,85,247,0.12), transparent 40%), repeating-linear-gradient(0deg, rgba(255,255,255,0.04) 0px, rgba(255,255,255,0.04) 1px, transparent 1px, transparent 20px)",
          }}
        />
      </div>
      <div className="relative isolate px-6 py-14 lg:px-8">
        <div className="mx-auto place-items-center py-21 sm:py-35 lg:py-42 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10">
          <HomeHeading />
          <motion.div 
            className="relative group perspective-1000"
            initial={{ rotateX: 0, rotateY: 0, scale: 1 }}
            whileHover={{ rotateX: 6, rotateY: -6, scale: 1.02 }}
            transition={{ type: "spring", stiffness: 200, damping: 20 }}
          >
            <div className="absolute -inset-4 bg-gradient-to-r from-primary to-secondary rounded-xl opacity-20 group-hover:opacity-40 blur-xl transition duration-500"></div>
            <Image
              src="/mockup/intro.png"
              alt="intro"
              width={1200}
              height={1125}
              className="relative drop-shadow-2xl transition-transform duration-500 ease-out"
            ></Image>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default IntroSection;

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@nextui-org/react";
import { ExternalLink } from "lucide-react";

const ScreenshotSection = () => {
  return (
    <section className="screenshot-section ">
      <div className="relative isolate pt-14">
        <h1 className="text-center scroll-m-20 text-4xl font-bold tracking-tight lg:text-5xl bg-clip-text py-10 text-transparent bg-gradient-to-r from-gradientstart/60 to-50% to-gradientend/60">
          Screenshot
        </h1>
        <div className="w-full flex items-center justify-center relative group">
          <Image
            className="hover:blur-sm transition-all duration-500 ease-in-out"
            src="/mockup/screenshot.png"
            alt="screenshot"
            width={1600}
            height={1200}
            sizes="(max-width: 1600px) 100vw, 75vw"
            style={{ objectFit: "contain" }}
          />
          <Button
            className="absolute opacity-0 group-hover:opacity-100 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transition-all duration-500 ease-out transform scale-90 group-hover:scale-100 bg-black/40 backdrop-blur-md border border-white/20 shadow-[0_0_30px_rgba(0,0,0,0.3)] hover:bg-black/60 rounded-full px-8 py-7"
            variant="flat"
          >
            <Link
              rel="noopener noreferrer"
              target="_blank"
              href="https://photos.app.goo.gl/dHTHswR3DJk3UzQt8"
              className="flex items-center gap-2 text-white font-bold tracking-widest uppercase text-sm"
            >
              Show More <ExternalLink size={18} />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ScreenshotSection;

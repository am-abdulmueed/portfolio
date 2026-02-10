"use client";

import { Button, Chip } from "@nextui-org/react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";
import { MdDownload } from "react-icons/md";
import Announcement from "../Announcement";

const HomeHeading = () => {
  const version = "1.01";
  const router = useRouter();

  return (
    <div className="flex flex-col gap-4">
      <Announcement />
      <h2 className="scroll-m-20 text-4xl font-bold tracking-tight lg:text-6xl pb-2 bg-clip-text text-transparent bg-gradient-to-r from-gradientstart to-gradientend animate-in fade-in slide-in-from-bottom-4 duration-1000">
        Muxio: Discover, trend & stream from top platforms
      </h2>
      <h4 className="scroll-m-20 text-xl font-medium tracking-tight text-default-500 max-w-2xl">
        Stream your favorite music, videos, podcasts, radio and more from
        YouTube Music with muxio for free.
      </h4>
      <div className="flex flex-col items-start gap-6 mt-6">
        <div className="flex items-center gap-4 relative z-[100]">
          <Button
            color="primary"
            size="lg"
            radius="full"
            className="font-semibold shadow-lg shadow-primary/40 hover:scale-105 transition-transform cursor-pointer relative z-[100] pointer-events-auto"
            endContent={<MdDownload size={20} />}
            onPress={() => router.push('/download')}
          >
            Download Now
          </Button>
          <p className="text-default-500 font-medium">
             v{version}
          </p>
        </div>
      </div>
      <div className="flex gap-2 items-center text-sm text-default-400 mt-2">
         <span>Supports:</span>
         <Chip size="sm" variant="dot" color="success">Android</Chip>
         <Chip size="sm" variant="dot" color="warning">iOS</Chip>
      </div>
    </div>
  );
};

export default HomeHeading;

"use client";
import React from "react";
import Link from "next/link";
import { Button } from "@nextui-org/react";
import { MdDownload } from "react-icons/md";
import Download from "./Download";

const DownloadInfoSection = () => {
  return (
    <section className="download-section relative overflow-hidden">
      <div className="relative isolate px-6 py-28 lg:px-8">
        <div
          className="absolute inset-x-0 -z-10 transform-gpu overflow-hidden blur-3xl"
          aria-hidden="true"
        >
          <div
            className="relative right-[calc(50%-15rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-br from-[#80e6ff] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
            style={{
              clipPath:
                "polygon(57% 25%, 70% 31%, 77% 45%, 66% 56%, 43% 55%, 35% 41%, 41% 29%)",
            }}
          ></div>
        </div>
        <div className="mx-auto place-items-center py-14 sm:py-21 lg:py-28 grid gap-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
          <div className="w-full">
            <Download />
          </div>
          <div className="flex flex-col justify-center items-start space-y-6">
            <div>
              <h2 className="scroll-m-20 text-4xl font-bold tracking-tight lg:text-5xl pb-4 bg-clip-text text-transparent bg-gradient-to-r from-gradientstart to-gradientend">
                Be a muxio
              </h2>
              <h4 className="scroll-m-20 text-xl font-medium tracking-tight text-default-500">
                Download muxio to your Android Device now to get the best
                experience for streaming music now!
              </h4>
            </div>
            <div>
              <Button
                color="primary"
                size="lg"
                href="/download"
                as={Link}
                radius="full"
                className="font-semibold shadow-lg shadow-primary/40 hover:scale-105 transition-transform"
                endContent={<MdDownload size={20} />}
              >
                Download App
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DownloadInfoSection;

import DownloadSection from "@/components/custom/DownloadSection";
import React from "react";

export const metadata = {
  title: "Download muxio",
  description: "Download muxio - Muxio: Discover, trend & stream from top platforms",
  openGraph: {
    title: "Download muxio",
    description: "Download muxio - Muxio: Discover, trend & stream from top platforms",
    images: [
      {
        url: "/images/blog/feature.jpg",
        width: 1200,
        height: 630,
        alt: "muxio - Feel free when playing music",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Download muxio",
    description: "Download muxio - Muxio: Discover, trend & stream from top platforms",
    images: ["/images/blog/feature.jpg"],
  },
};

export default function Download() {
  return (
    <>
      <div className="lg:px-16 md:px-16 sm:px-10">
        <DownloadSection />
      </div>
    </>
  );
}

import DownloadSection from "@/components/custom/DownloadSection";
import React from "react";

export const metadata = {
  title: "Download Muxio & PluginStream - Free Movies & Music App",
  description: "Download the official Muxio app and PluginStream engine. Access free movies, premium OTT plugins, and global music/streaming platforms. Fast, secure, and free download.",
  keywords: ["download muxio", "download pluginstream", "free movies app download", "premium streaming plugins", "android ott app", "plugins stream free movie download"],
  alternates: {
    canonical: "/download",
  },
  openGraph: {
    title: "Download Muxio & PluginStream",
    description: "Access free premium movies and OTT content globally. Download Muxio and PluginStream now.",
    images: [
      {
        url: "/images/blog/feature.jpg",
        width: 1200,
        height: 630,
        alt: "Download Muxio & PluginStream",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Download Muxio & PluginStream - Free Movies",
    description: "Stream premium OTT content for free. Download our official app today.",
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

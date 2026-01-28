import DonateSection from "@/components/custom/DonateSection";
import React from "react";

export const metadata = {
  title: "Donate to muxio",
  description: "Support the development of muxio - Muxio: Discover, trend & stream from top platforms",
  openGraph: {
    title: "Donate to muxio",
    description: "Support the development of muxio - Muxio: Discover, trend & stream from top platforms",
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
    title: "Donate to muxio",
    description: "Support the development of muxio - Muxio: Discover, trend & stream from top platforms",
    images: ["/images/blog/feature.jpg"],
  },
};

const Donate = () => {
  return (
    <div className="lg:px-16 md:px-16 sm:px-10">
      <DonateSection />
    </div>
  );
};

export default Donate;

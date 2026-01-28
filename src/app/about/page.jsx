import AboutSection from "@/components/custom/AboutSection";
import React from "react";

export const metadata = {
  title: "About muxio",
  description: "Learn more about muxio - Muxio: Discover, trend & stream from top platforms",
  openGraph: {
    title: "About muxio",
    description: "Learn more about muxio - Muxio: Discover, trend & stream from top platforms",
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
    title: "About muxio",
    description: "Learn more about muxio - Muxio: Discover, trend & stream from top platforms",
    images: ["/images/blog/feature.jpg"],
  },
};

const About = () => {
  return (
    <div className="lg:px-16 md:px-16 sm:px-10">
      <AboutSection />
    </div>
  );
};

export default About;

import AboutSection from "@/components/custom/AboutSection";
import React from "react";

export const metadata = {
  title: "About | Abdul Mueed",
  description: "Learn more about Abdul Mueed — full-stack developer, designer, and creator.",
  alternates: {
    canonical: "/about",
  },
  openGraph: {
    title: "About | Abdul Mueed",
    description: "Learn more about Abdul Mueed — full-stack developer, designer, and creator.",
    images: [
      {
        url: "https://am-abdulmueed.vercel.app/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Abdul Mueed Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "About | Abdul Mueed",
    description: "Learn more about Abdul Mueed — full-stack developer, designer, and creator.",
    images: ["https://am-abdulmueed.vercel.app/og-image.jpg"],
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

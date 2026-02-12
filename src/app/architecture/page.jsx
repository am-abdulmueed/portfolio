import ArchitectureSection from "@/components/custom/ArchitectureSection";
import React from "react";

export const metadata = {
  title: "Muxio Music Architecture",
  description: "Explore Muxio Music modern full-stack architecture: client, API, auth, data, cache, storage, observability, CI/CD, and infra.",
  alternates: {
    canonical: "/architecture",
  },
  openGraph: {
    title: "Muxio Music Architecture",
    description: "Modern full-stack architecture overview for scalable, secure, high-performance apps.",
    images: [
      {
        url: "/images/blog/feature.jpg",
        width: 1200,
        height: 630,
        alt: "Muxio Music - Architecture",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Muxio Music Architecture",
    description: "Modern full-stack architecture overview for scalable, secure, high-performance apps.",
    images: ["/images/blog/feature.jpg"],
  },
};

export default function ArchitecturePage() {
  return (
    <div className="lg:px-16 md:px-16 sm:px-10">
      <ArchitectureSection />
    </div>
  );
}

import HomeHeading from "@/components/custom/typo/HomeHeading";
import Image from "next/image";
import IntroSection from "@/components/custom/IntroSection";
import DescriptionSection from "@/components/custom/DescriptionSection";
import FeatureSection from "@/components/custom/FeatureSection";
import ScreenshotSection from "@/components/custom/ScreenshotSection";
import DownloadInfoSection from "@/components/custom/DownloadInfoSection";
import AdSense from "@/components/custom/AdSense";

export const metadata = {
  title: "Muxio Music",
  description: "Muxio Music app: Discover, stream & download from top platforms. Free, fast, and open-source.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Muxio Music",
    description: "Muxio Music app: Discover, stream & download from top platforms.",
    images: [
      {
        url: "/images/blog/feature.jpg",
        width: 1200,
        height: 630,
        alt: "Muxio Music - Feel free when playing music",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Muxio Music",
    description: "Muxio Music app: Discover, stream & download from top platforms. Free, fast, and open-source.",
    images: ["/images/blog/feature.jpg"],
  },
};

export default function Home() {
  return (
    <>
      <IntroSection />
      <div className="lg:px-16 md:px-16 sm:px-10">
        <AdSense className="my-8" />
        <DescriptionSection />
        <FeatureSection />
      </div>
      <ScreenshotSection />
      <div className="lg:px-16 md:px-16 sm:px-10">
        <DownloadInfoSection />
        <AdSense adFormat="rectangle" className="my-8" />
      </div>
    </>
  );
}

import HomeHeading from "@/components/custom/typo/HomeHeading";
import Image from "next/image";
import IntroSection from "@/components/custom/IntroSection";
import DescriptionSection from "@/components/custom/DescriptionSection";
import FeatureSection from "@/components/custom/FeatureSection";
import ScreenshotSection from "@/components/custom/ScreenshotSection";
import DownloadInfoSection from "@/components/custom/DownloadInfoSection";
import AdSense from "@/components/custom/AdSense";

export const metadata = {
  title: "Abdul Mueed | Full-stack Developer",
  description: "Explore the portfolio of Abdul Mueed — full-stack developer, designer, and creator. Discover projects, skills, and experience.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Abdul Mueed | Full-stack Developer",
    description: "Explore the portfolio of Abdul Mueed — full-stack developer, designer, and creator. Discover projects, skills, and experience.",
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
    title: "Abdul Mueed | Full-stack Developer",
    description: "Explore the portfolio of Abdul Mueed — full-stack developer, designer, and creator. Discover projects, skills, and experience.",
    images: ["https://am-abdulmueed.vercel.app/og-image.jpg"],
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

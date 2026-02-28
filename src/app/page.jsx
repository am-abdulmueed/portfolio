import HomeHeading from "@/components/custom/typo/HomeHeading";
import Image from "next/image";
import IntroSection from "@/components/custom/IntroSection";
import DescriptionSection from "@/components/custom/DescriptionSection";
import FeatureSection from "@/components/custom/FeatureSection";
import ScreenshotSection from "@/components/custom/ScreenshotSection";
import DownloadInfoSection from "@/components/custom/DownloadInfoSection";
import AdSense from "@/components/custom/AdSense";

export const metadata = {
  title: "Abdul Mueed | Full-stack Developer | Muxio",
  description: "Explore the portfolio of Abdul Mueed — full-stack developer, designer, and creator. Discover projects, skills, and experience.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Abdul Mueed | Full-stack Developer | Muxio",
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
    title: "Abdul Mueed | Full-stack Developer | Muxio",
    description: "Explore the portfolio of Abdul Mueed — full-stack developer, designer, and creator. Discover projects, skills, and experience.",
    images: ["https://am-abdulmueed.vercel.app/og-image.jpg"],
  },
};

export default function Home() {
  return (
    <div className="relative overflow-hidden min-h-screen">
      <IntroSection />

      <div className="lg:px-16 md:px-16 sm:px-10 relative z-10 space-y-24">
        <AdSense className="my-12 opacity-80" />
        <DescriptionSection />
        <FeatureSection />
      </div>

      <div className="my-24">
        <ScreenshotSection />
      </div>

      <div className="lg:px-16 md:px-16 sm:px-10 relative z-10 space-y-24">
        <DownloadInfoSection />
        <AdSense adFormat="rectangle" className="my-12 opacity-80" />
      </div>

      {/* Global Background Blobs */}
      <div className="fixed inset-0 -z-50 pointer-events-none overflow-hidden">
        <div className="absolute top-[20%] right-[-10%] w-[40vw] h-[40vw] bg-primary/5 rounded-full blur-[120px]" />
        <div className="absolute bottom-[20%] left-[-10%] w-[40vw] h-[40vw] bg-secondary/5 rounded-full blur-[120px]" />
      </div>
    </div>
  );
}

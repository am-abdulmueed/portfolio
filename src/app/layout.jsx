import "./globals.css";
import { cn } from "@/lib/utils";
import Providers from "./providers";
import Header from "@/components/custom/header/Header";
import Footer from "@/components/custom/footer/Footer";
import AdblockDetector from "@/components/custom/AdblockDetector";
import CustomCursor from "@/components/custom/CustomCursor";
import BubbleBlast from "@/components/custom/BubbleBlast";
import RightClickDisable from "@/components/custom/RightClickDisable";
import Script from "next/script";
import localFont from 'next/font/local'

const sfpDisplay = localFont({
  src: [
    {
      path: '../../public/fonts/sfprodisplay/sf-regular.otf',
      weight: '400'
    },
    {
      path: '../../public/fonts/sfprodisplay/sf-medium.otf',
      weight: '600'
    },
    {
      path: '../../public/fonts/sfprodisplay/sf-bold.otf',
      weight: '700'
    }
  ],
  variable: '--font-sfpdisplay'
})

export const metadata = {
  title: {
    default: "Muxio - Discover, Stream & Download Music",
    template: "%s | Muxio",
  },
  description: "Muxio brings music discovery inspired by YouTube Music & SoundCloud, with playback up to 256kbps audio or 1080p video. Personalize your experience with a sleek UI influenced by Spotify.",
  applicationName: "Muxio",
  authors: [{ name: "am-abdulmueed", url: "https://github.com/am-abdulmueed" }],
  generator: "Next.js",
  keywords: ["music", "streaming", "download", "youtube music", "soundcloud", "spotify alternative", "muxio", "audio", "video", "abdulmueed", "abdul mueed", "betapix", "betaae", "a.b.d.u.l.m.u.e.e.d"],
  referrer: "origin-when-cross-origin",
  creator: "Abdul Mueed",
  publisher: "Abdul Mueed",
  metadataBase: new URL("https://muxioo.vercel.app"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Muxio - Discover, Stream & Download Music",
    description: "Muxio brings music discovery inspired by YouTube Music & SoundCloud, with playback up to 256kbps audio or 1080p video. Personalize your experience with a sleek UI influenced by Spotify.",
    url: "https://muxioo.vercel.app",
    siteName: "Muxio",
    images: [
      {
        url: "https://muxioo.vercel.app/opengraph.png",
        width: 1200,
        height: 630,
        alt: "Muxio - Music Discovery App",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Muxio - Discover, Stream & Download Music",
    description: "Muxio brings music discovery inspired by YouTube Music & SoundCloud, with playback up to 256kbps audio or 1080p video. Personalize your experience with a sleek UI influenced by Spotify.",
    images: ["https://muxioo.vercel.app/opengraph.png"],
    creator: "@am_abdulmueed", // Assuming handle or generic
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  appleWebApp: {
    title: "Muxio",
    statusBarStyle: "default",
    startupImage: [
      "/opengraph.png",
    ],
  },
};

const RootLayout = ({ children }) => {
  return (
    <html lang="en" className="dark">
      <head>
        {/* <Script
          id="adsense-script"
          async
          src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-${process.env.NEXT_PUBLIC_ADSENSE_PUBLISHER_ID}`}
          crossorigin="anonymous"
          strategy="lazyOnload">
        </Script> */}
      </head>
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased selection:bg-blue-500/30 selection:text-blue-500",
          sfpDisplay.variable,
        )} suppressHydrationWarning
      >
        <Providers>
          <CustomCursor />
          <BubbleBlast />
          <RightClickDisable />
          <AdblockDetector />
          <Header />
          {children}
          <Footer />
          <div itemScope itemType="https://schema.org/WebSite">
            <link itemProp="url" href="https://muxioo.vercel.app" />
            <meta itemProp="name" content="Muxio" />
          </div>
        </Providers>
      </body>
    </html>
  );
};
export default RootLayout;

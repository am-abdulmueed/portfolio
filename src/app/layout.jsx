import "./globals.css";
import { cn } from "@/lib/utils";
import Providers from "./providers";
import Header from "@/components/custom/header/Header";
import Footer from "@/components/custom/footer/Footer";
import AdblockDetector from "@/components/custom/AdblockDetector";
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
  title: "Muxio - Discover, Stream & Download Music",
  description: "Muxio brings music discovery inspired by YouTube Music & SoundCloud, with playback up to 256kbps audio or 1080p video. Personalize your experience with a sleek UI influenced by Spotify.",
  metadataBase: new URL("https://muxio-web.vercel.app"),
  openGraph: {
    title: "Muxio - Discover, Stream & Download Music",
    description: "Muxio brings music discovery inspired by YouTube Music & SoundCloud, with playback up to 256kbps audio or 1080p video. Personalize your experience with a sleek UI influenced by Spotify.",
    url: "https://muxio-web.vercel.app",
    siteName: "Muxio",
    images: [
      {
        url: "/opengraph.png",
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
    images: ["/opengraph.png"],
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
          "min-h-screen bg-background font-sans antialiased",
          sfpDisplay.variable,
        )} suppressHydrationWarning
      >
        <Providers>
          {/* <AdblockDetector /> */}
          <Header />
          {children}
          <Footer />
          <div itemScope itemType="https://schema.org/WebSite">
            <link itemProp="url" href="https://muxio-web.vercel.app" />
            <meta itemProp="name" content="Muxio" />
          </div>
        </Providers>
      </body>
    </html>
  );
};
export default RootLayout;

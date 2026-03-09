import "./globals.css";
import { cn } from "@/lib/utils";
import Providers from "./providers";
import Header from "@/components/custom/header/Header";
import Footer from "@/components/custom/footer/Footer";
// import AdblockDetector from "@/components/custom/AdblockDetector";
import CustomCursor from "@/components/custom/CustomCursor";
import BubbleBlast from "@/components/custom/BubbleBlast";
import RightClickDisable from "@/components/custom/RightClickDisable";
import BackToTop from "@/components/custom/BackToTop";
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
    default: "Abdul Mueed",
    template: "%s | Abdul Mueed",
  },
  description: "Official website of Abdul Mueed (also known as Betapix). Full-stack developer, designer, and creator.",
  applicationName: "Abdul Mueed Portfolio",
  authors: [{ name: "Abdul Mueed", url: "https://am-abdulmueed.vercel.app" }],
  generator: "Next.js",
  keywords: [
    "Abdul Mueed",
    "am-abdulmueed",
    "betapix",
    "muxioo",
    "web developer",
    "Full-stack Developer",
    "Web Designer",
    "freelance developer",
    "NexGama",
    "nex gama",
    "pro games",
    "online gaming",
    "advanced game"
  ],
  icons: {
    icon: ["/abdul.webp"],
  },
  referrer: "origin-when-cross-origin",
  creator: "Abdul Mueed",
  publisher: "Abdul Mueed",
  metadataBase: new URL("https://am-abdulmueed.vercel.app"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Abdul Mueed | Full-stack Developer | Muxio",
    description: "Explore the portfolio of Abdul Mueed — full-stack developer, designer, and creator. Discover projects, skills, and experience.",
    url: "https://am-abdulmueed.vercel.app",
    siteName: "Abdul Mueed",
    images: [
      {
        url: "https://am-abdulmueed.vercel.app/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Abdul Mueed Portfolio",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Abdul Mueed | Full-stack Developer | Muxio",
    description: "Explore the portfolio of Abdul Mueed — full-stack developer, designer, and creator. Discover projects, skills, and experience.",
    images: ["https://am-abdulmueed.vercel.app/og-image.jpg"],
    site: "@amabdulmueed",
    creator: "@amabdulmueed",
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
};

const RootLayout = ({ children }) => {
  return (
    <html lang="en" className="dark">
      <head>
        <meta name="google-site-verification" content="qLRjnYPkkip8LaAY6lScBacvL7YTnVJJEBvSrVhtPrw" />
        <Script id="ld-website" type="application/ld+json" strategy="beforeInteractive">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebSite",
            "url": "https://am-abdulmueed.vercel.app",
            "name": "Abdul Mueed",
            "publisher": {
              "@type": "Person",
              "name": "Abdul Mueed"
            },
            "potentialAction": {
              "@type": "SearchAction",
              "target": "https://am-abdulmueed.vercel.app/search?q={search_term_string}",
              "query-input": "required name=search_term_string"
            }
          })}
        </Script>
        <Script id="ld-person" type="application/ld+json" strategy="beforeInteractive">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Person",
            "name": "Abdul Mueed",
            "url": "https://am-abdulmueed.vercel.app",
            "jobTitle": "Full-stack Developer",
            "sameAs": [
              "https://github.com/am-abdulmueed",
              "https://twitter.com/amabdulmueed"
            ]
          })}
        </Script>
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
          <CustomCursor />
          <BubbleBlast />
          <RightClickDisable />
          {/* <AdblockDetector /> */}
          <Header />
          {children}
          <Footer />
          <BackToTop />
          <div itemScope itemType="https://schema.org/WebSite">
            <link itemProp="url" href="https://am-abdulmueed.vercel.app" />
            <meta itemProp="name" content="Abdul Mueed" />
          </div>
        </Providers>
      </body>
    </html>
  );
};
export default RootLayout;

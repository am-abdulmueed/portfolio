import "./globals.css";
import { Toaster } from "@/components/ui/toaster"
import { Bricolage_Grotesque } from "next/font/google";
import NextTopLoader from "nextjs-toploader";
import Header from "./components/Header";
import Footer from "./components/footer";
import { ThemeProvider } from "next-themes";

const bricolage_grotesque = Bricolage_Grotesque({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800"],
});


export const metadata = {
  title: "Abdul Mueed",
  description: "Developer Portfolio of Abdul Mueed. Full-stack developer, designer, and creator. Explore projects, skills, and experience.",
  icons: {
    icon: ['./abdul.webp']
  },
  openGraph: {
    title: 'Abdul Mueed | Full-stack Developer',
    description: 'Explore the portfolio of Abdul Mueed — full-stack developer, designer, and creator. Discover projects, skills, and experience.',
    url: 'https://am-abdulmueed.vercel.app',
    type: 'website',
    images: [
      {
        url: 'https://am-abdulmueed.vercel.app/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Abdul Mueed Portfolio',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Abdul Mueed | Full-stack Developer',
    description: 'Explore the portfolio of Abdul Mueed — full-stack developer, designer, and creator. Discover projects, skills, and experience.',
    images: ['https://am-abdulmueed.vercel.app/og-image.jpg'],
    site: '@amabdulmueed',
  },
  metadataBase: new URL('https://am-abdulmueed-vercel.app'),
  alternates: {
    canonical: 'https://am-abdulmueed-vercel.app',
  },
  verification: {
    google: 't4IJjdrxRNZqEvg8gEUObftSM_xXIe6Fv-DbB4r5cB8',
  },
};


export default function RootLayout({ children }) {
  return (
    <html lang="en" >
      <head>
        <meta name="google-site-verification" content="t4IJjdrxRNZqEvg8gEUObftSM_xXIe6Fv-DbB4r5cB8" />
         <script
          dangerouslySetInnerHTML={{
            __html: `
              document.addEventListener('contextmenu', function(event) {
                event.preventDefault();
              });
            `,
          }}
        />
      </head>
      <body className={bricolage_grotesque.className}>
        <Toaster />
        <NextTopLoader
        color="hsl(var(--primary))"
        initialPosition={0.08}
        crawlSpeed={200}
        height={3}
        crawl={true}
        showSpinner={false}
        easing="ease"
        speed={400}
        shadow="0 0 10px hsl(var(--primary)),0 0 5px hsl(var(--primary))"
        template='<div class="bar" role="bar"><div class="peg"></div></div> 
        <div class="spinner" role="spinner"><div class="spinner-icon"></div></div>'
        zIndex={1600}
        showAtBottom={false}
        />
        <ThemeProvider enableSystem={true} attribute="class" defaultTheme="system" >
          <Header/>
          {children}
          <Footer/>
        </ThemeProvider>
      </body>
    </html>
  );
}

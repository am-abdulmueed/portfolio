import PluginStreamHero from "@/components/custom/PluginStreamHero";
import PluginStreamFeatures from "@/components/custom/PluginStreamFeatures";
import PluginSearchSection from "@/components/custom/PluginSearchSection";
import PremiumComparison from "@/components/custom/PremiumComparison";
import AdSense from "@/components/custom/AdSense";

export const metadata = {
    title: "PluginStream - Free Premium Movies & OTT Plugins",
    description: "Stream Netflix, Prime, Disney+, and HBO for free with PluginStream. Get 100+ powerful plugins for free movie streaming and live TV. Fast, secure, and free streaming plugins.",
    keywords: ["PluginStream", "free movies", "OTT plugins", "watch netflix free", "premium streaming", "free live TV plugins", "plugins stream free movie", "streaming plugins free"],
    alternates: {
        canonical: "/pluginstream",
    },
    openGraph: {
        title: "PluginStream - Free Premium Movies & OTT Plugins",
        description: "Stream Netflix, Prime, Disney+, and HBO for free with PluginStream.",
        url: "https://pluginstream.vercel.app/pluginstream",
        siteName: "PluginStream",
        images: [
            {
                url: "/pluginstream/opengraph.jpg",
                width: 1200,
                height: 630,
                alt: "PluginStream - Free Premium Streaming",
            },
        ],
        locale: "en_US",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "PluginStream - Free Premium Movies & OTT Plugins",
        description: "Stream Netflix, Prime, Disney+, and HBO for free with PluginStream.",
        images: ["/pluginstream/opengraph.jpg"],
    },
};

export default function PluginStreamPage() {
    return (
        <div className="relative overflow-hidden min-h-screen">
            {/* Background Texture */}
            <div className="fixed inset-0 z-[-1] pointer-events-none opacity-[0.03] bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />

            <PluginStreamHero />

            <div className="lg:px-16 md:px-16 sm:px-10 relative z-10">
                <AdSense className="my-12 opacity-80" />
                <PremiumComparison />
                <AdSense adFormat="rectangle" className="my-12 opacity-80" />
                <PluginStreamFeatures />
                <PluginSearchSection />
                <AdSense adFormat="rectangle" className="my-12 opacity-80" />
            </div>

            {/* Global Background Blobs */}
            <div className="fixed inset-0 -z-50 pointer-events-none overflow-hidden text-black dark:text-white">
                <div className="absolute top-[20%] right-[-10%] w-[50vw] h-[50vw] bg-red-500/5 rounded-full blur-[120px]" />
                <div className="absolute bottom-[20%] left-[-10%] w-[50vw] h-[50vw] bg-purple-500/5 rounded-full blur-[120px]" />
            </div>
        </div>
    );
}

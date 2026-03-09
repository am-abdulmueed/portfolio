import React from "react";
import NexGamaContent from "@/components/custom/NexGamaContent";

export const metadata = {
    title: "NexGama - 1000+ Pro Games | Play Instantly",
    description: "Play over 1000+ professional level games from Unity and Unreal Engine instantly. No installation, no permissions, just pure gaming performance by Muxio.",
    keywords: [
        "NexGama", "NexGama Games", "NexGama Gaming", "offline game", "advanced game",
        "game aggregate", "abdul mueed", "betapix", "betaae", "nex gama", "pro games",
        "Unity games web", "Unreal Engine web games", "no install games", "free browser games"
    ],
    alternates: {
        canonical: "https://am-abdulmueed.vercel.app/nexgama",
    },
    openGraph: {
        title: "NexGama - 1000+ Pro Games by BetaPix",
        description: "Launch 1000+ games instantly. No permissions required.",
        url: "https://am-abdulmueed.vercel.app/nexgama",
        images: [
            { url: "/nexgama/og.png", width: 1200, height: 630, alt: "NexGama OG Image" },
            { url: "/nexgama/og1.png", width: 1200, height: 630, alt: "NexGama OG Image 2" },
            { url: "/nexgama/og2.png", width: 1200, height: 630, alt: "NexGama OG Image 3" },
            { url: "/nexgama/og3.jpg", width: 1200, height: 630, alt: "NexGama OG Image 4" },
        ],
    },
};

const NexGamaPage = () => {
    return <NexGamaContent />;
};

export default NexGamaPage;

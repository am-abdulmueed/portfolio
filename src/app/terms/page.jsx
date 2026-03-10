import TermsClient from "./TermsClient";

export const metadata = {
    title: "Terms of Service | BetaPix Entertainment",
    description: "Operational guidelines and usage agreements for Muxio, NexGama, and BetaPix services. Transparency and performance rules.",
    openGraph: {
        title: "Terms of Service | BetaPix",
        description: "Ensuring a safe and high-performance experience for every explorer.",
    }
};

export default function TermsPage() {
    return <TermsClient />;
}

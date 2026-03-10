import PrivacyClient from "./PrivacyClient";

export const metadata = {
    title: "Privacy Policy | BetaPix Entertainment",
    description: "Our commitment to transparency and data integrity. Learn how we handle your information with a Privacy by Design philosophy.",
    openGraph: {
        title: "Privacy Policy | BetaPix",
        description: "Your trust is the foundation of our engineering.",
    }
};

export default function PrivacyPage() {
    return <PrivacyClient />;
}

import type { Metadata } from "next";
import InfoPage from "@/components/InfoPage";

export const metadata: Metadata = { title: "Terms of Use", alternates: { canonical: "/terms" } };

export default function TermsPage() {
  return <InfoPage title="Terms of Use" intro="Use random.easy to make everyday choices faster and more fun, while keeping the final responsibility for important decisions with you." sections={[
    { heading: "Use of the tools", body: "The tools are provided for general decision-making, learning, and entertainment. Do not use a random result as the basis for a regulated, legal, medical, financial, safety-critical, or high-value selection process." },
    { heading: "Your content", body: "You are responsible for the names, lists, and other information you enter. Do not submit confidential information or personal data you are not authorized to use, especially on a shared device or in a public setting." },
    { heading: "Accounts and cloud data", body: "Sign-in and cloud sync are optional. You are responsible for maintaining access to the Google account you use and for ensuring that any list you save is appropriate to store online." },
    { heading: "Advertising and third-party services", body: "The site may display clearly labelled advertisements or use third-party services after the relevant privacy choice is made. Advertisements are not recommendations or endorsements by random.easy." },
    { heading: "Changes", body: "We may improve, change, or retire tools as the product evolves. Material changes to these terms will be reflected on this page." },
  ]} />;
}

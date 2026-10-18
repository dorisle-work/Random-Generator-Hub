import type { Metadata } from "next";
import InfoPage from "@/components/InfoPage";
import { supportEmail } from "@/lib/site";

export const metadata: Metadata = { title: "Privacy Policy", alternates: { canonical: "/privacy" } };

export default function PrivacyPage() {
  return <InfoPage title="Privacy Policy" intro="This policy explains how random.easy handles browser storage, optional cloud sync, and optional advertising or measurement technologies." sections={[
    { heading: "Browser-based tool data", body: "Most tool inputs and results are processed in your browser. Spin the Wheel stores its current choices and sound preference in browser storage so the tool can be reused on the same device. Do not enter confidential, sensitive, or special-category personal data into any tool." },
    { heading: "Optional Google sign-in and cloud sync", body: "When you choose to sign in with Google, authentication is handled through Supabase. We receive the account information needed to identify your session and, when you save a wheel, the saved list is stored against your signed-in account. Cloud sync is optional and the core tools work without an account." },
    { heading: "Advertising and measurement", body: "We use a Google AdSense site-verification tag so Google can review this website. Advertising placements and analytics are optional: when you accept optional cookies, providers may use cookies or similar technologies to measure traffic, show ads, and prevent fraud. You can revisit this choice through the Privacy choices link in the footer." },
    { heading: "External services", body: "Google AdSense, Google, Supabase, and websites linked from random.easy operate under their own privacy policies. Their processing may be subject to rules in the country where you use the service." },
    { heading: "Data retention and updates", body: "Browser storage remains until you clear it. Cloud-saved lists remain associated with your account until deleted or the service is changed. We may update this policy when the product, advertising setup, or legal requirements change." },
    { heading: "Contact", body: supportEmail ? <>For privacy requests, contact <a href={`mailto:${supportEmail}`}>{supportEmail}</a>.</> : "Before advertising is enabled in production, the site operator will publish a contact address for privacy requests here and in the site footer." },
  ]} />;
}

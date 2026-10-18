import type { Metadata } from "next";
import Link from "next/link";
import TeamGeneratorClient from "./TeamGeneratorClient";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ToolGuide from "@/components/ToolGuide";
import { AdSlot } from "@/components/ConsentAndMonetization";

export const metadata: Metadata = {
  title: "Random Team Generator — Split People Into Random Teams",
  description:
    "Free online random team generator. Enter names and split them into balanced random teams instantly. Perfect for classrooms, sports, and office activities.",
  alternates: { canonical: "/random-team-generator" },
};

export default function RandomTeamGeneratorPage() {
  return (
    <>
      <Header />
      <main style={{ minHeight: "100vh" }}>
        <div className="site-container tool-page-shell">
          <nav className="breadcrumb">
            <Link href="/">Home</Link> <span aria-hidden="true">›</span>
            <Link href="/categories/random-picker">Random Picker</Link> <span aria-hidden="true">›</span>
            <span style={{ color: "var(--text)" }}>Team Generator</span>
          </nav>

          <div className="page-intro">
            <h1>Random Team Generator</h1>
            <p>
              Enter names and split them into random balanced teams
            </p>
          </div>

          <TeamGeneratorClient />
          <AdSlot slot={process.env.NEXT_PUBLIC_ADSENSE_SLOT_TOOL_INLINE} className="tool-ad-slot" />
          <ToolGuide tool="random-team-generator" />
        </div>
      </main>
      <Footer />
    </>
  );
}

import type { Metadata } from "next";
import Link from "next/link";
import NumberGeneratorClient from "./NumberGeneratorClient";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ToolGuide from "@/components/ToolGuide";
import { AdSlot } from "@/components/ConsentAndMonetization";

export const metadata: Metadata = {
  title: "Random Number Generator — Generate Random Numbers Online",
  description:
    "Free online random number generator. Generate one or multiple random numbers between any range instantly. Perfect for lotteries, games, and statistics.",
  alternates: { canonical: "/random-number-generator" },
};

export default function RandomNumberGeneratorPage() {
  return (
    <>
      <Header />
      <main style={{ minHeight: "100vh" }}>
        <div className="site-container tool-page-shell">
          <nav className="breadcrumb">
            <Link href="/">Home</Link> <span aria-hidden="true">›</span>
            <Link href="/categories/random-picker">Random Picker</Link> <span aria-hidden="true">›</span>
            <span style={{ color: "var(--text)" }}>Number Generator</span>
          </nav>

          <div className="page-intro">
            <h1>Random Number Generator</h1>
            <p>
              Generate random numbers in any range, instantly
            </p>
          </div>

          <NumberGeneratorClient />
          <AdSlot slot={process.env.NEXT_PUBLIC_ADSENSE_SLOT_TOOL_INLINE} className="tool-ad-slot" />
          <ToolGuide tool="random-number-generator" />
        </div>
      </main>
      <Footer />
    </>
  );
}

import type { Metadata } from "next";
import Link from "next/link";
import CoinFlipClient from "./CoinFlipClient";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ToolGuide from "@/components/ToolGuide";
import { AdSlot } from "@/components/ConsentAndMonetization";

export const metadata: Metadata = {
  title: "Coin Flip — Free Online Heads or Tails",
  description:
    "Flip a coin online for free. Get instant heads or tails result with a beautiful 3D coin flip animation. No real coin needed!",
  alternates: { canonical: "/coin-flip" },
};

export default function CoinFlipPage() {
  return (
    <>
      <Header />
      <main style={{ minHeight: "100vh" }}>
        <div className="site-container tool-page-shell">
          <nav className="breadcrumb">
            <Link href="/">Home</Link> <span aria-hidden="true">›</span>
            <Link href="/categories/random-picker">Random Picker</Link> <span aria-hidden="true">›</span>
            <span style={{ color: "var(--text)" }}>Coin Flip</span>
          </nav>

          <div className="page-intro">
            <h1>Coin Flip</h1>
            <p>
              Heads or tails? Flip a virtual coin and get an instant result
            </p>
          </div>

          <CoinFlipClient />
          <AdSlot slot={process.env.NEXT_PUBLIC_ADSENSE_SLOT_TOOL_INLINE} className="tool-ad-slot" />
          <ToolGuide tool="coin-flip" />
        </div>
      </main>
      <Footer />
    </>
  );
}

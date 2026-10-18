import type { Metadata } from "next";
import Link from "next/link";
import YesNoClient from "./YesNoClient";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ToolGuide from "@/components/ToolGuide";
import { AdSlot } from "@/components/ConsentAndMonetization";

export const metadata: Metadata = {
  title: "Yes or No Generator — Random Yes/No Decision Maker",
  description:
    "Can't decide? Let our Yes or No generator make the decision for you. Free, instant, and fun random yes or no answer.",
  alternates: { canonical: "/yes-or-no" },
};

export default function YesOrNoPage() {
  return (
    <>
      <Header />
      <main style={{ minHeight: "100vh" }}>
        <div className="site-container tool-page-shell">
          <nav className="breadcrumb">
            <Link href="/">Home</Link> <span aria-hidden="true">›</span>
            <Link href="/categories/random-picker">Random Picker</Link> <span aria-hidden="true">›</span>
            <span style={{ color: "var(--text)" }}>Yes or No</span>
          </nav>

          <div className="page-intro">
            <h1>Yes or No Generator</h1>
            <p>
              Ask your question and get an instant random yes or no answer
            </p>
          </div>

          <YesNoClient />
          <AdSlot slot={process.env.NEXT_PUBLIC_ADSENSE_SLOT_TOOL_INLINE} className="tool-ad-slot" />
          <ToolGuide tool="yes-or-no" />
        </div>
      </main>
      <Footer />
    </>
  );
}

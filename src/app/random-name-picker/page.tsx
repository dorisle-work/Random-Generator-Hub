import type { Metadata } from "next";
import Link from "next/link";
import NamePickerClient from "./NamePickerClient";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ToolGuide from "@/components/ToolGuide";
import { AdSlot } from "@/components/ConsentAndMonetization";

export const metadata: Metadata = {
  title: "Random Name Picker — Pick a Random Name from a List",
  description:
    "Free random name picker tool. Add names and let the randomizer pick one for you. Great for teachers, giveaways, team selection, and more.",
  alternates: { canonical: "/random-name-picker" },
};

export default function RandomNamePickerPage() {
  return (
    <>
      <Header />
      <main style={{ minHeight: "100vh" }}>
        <div className="site-container tool-page-shell">
          <nav className="breadcrumb">
            <Link href="/">Home</Link> <span aria-hidden="true">›</span>
            <Link href="/categories/random-picker">Random Picker</Link> <span aria-hidden="true">›</span>
            <span style={{ color: "var(--text)" }}>Name Picker</span>
          </nav>

          <div className="page-intro">
            <h1>Random Name Picker</h1>
            <p>
              Add names to the list and pick one at random
            </p>
          </div>

          <NamePickerClient />
          <AdSlot slot={process.env.NEXT_PUBLIC_ADSENSE_SLOT_TOOL_INLINE} className="tool-ad-slot" />
          <ToolGuide tool="random-name-picker" />
        </div>
      </main>
      <Footer />
    </>
  );
}

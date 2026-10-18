import type { Metadata } from "next";
import Link from "next/link";
import SpinWheelClient from "./SpinWheelClient";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ToolGuide from "@/components/ToolGuide";
import { AdSlot } from "@/components/ConsentAndMonetization";

export const metadata: Metadata = {
  title: "Spin the Wheel — Free Online Wheel Spinner",
  description:
    "Free online spin the wheel randomizer. Add your own choices, customize colors, and spin for a random result. Perfect for classrooms, games, and decision making.",
  alternates: { canonical: "/spin-the-wheel" },
};

export default function SpinTheWheelPage() {
  return (
    <>
      <Header />
      <main style={{ minHeight: "100vh" }}>
        <div className="site-container" style={{ padding: "52px 0 64px" }}>
          <nav className="breadcrumb">
            <Link href="/">Home</Link> <span aria-hidden="true">›</span>
            <Link href="/categories/random-picker">Random Picker</Link> <span aria-hidden="true">›</span>
            <span style={{ color: "var(--text)" }}>Spin the Wheel</span>
          </nav>

          <div className="page-intro">
            <h1>Spin the Wheel</h1>
            <p>
              Add your choices and let the wheel decide!
            </p>
          </div>

          <SpinWheelClient />
          <AdSlot slot={process.env.NEXT_PUBLIC_ADSENSE_SLOT_TOOL_INLINE} className="tool-ad-slot" />
          <ToolGuide tool="spin-the-wheel" />
        </div>
      </main>
      <Footer />
    </>
  );
}

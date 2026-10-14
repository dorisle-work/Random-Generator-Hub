import type { Metadata } from "next";
import NumberGeneratorClient from "./NumberGeneratorClient";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Random Number Generator — Generate Random Numbers Online",
  description:
    "Free online random number generator. Generate one or multiple random numbers between any range instantly. Perfect for lotteries, games, and statistics.",
};

export default function RandomNumberGeneratorPage() {
  return (
    <>
      <Header />
      <main style={{ minHeight: "100vh" }}>
        <div style={{ maxWidth: 800, margin: "0 auto", padding: "40px 24px" }}>
          <nav className="breadcrumb">
            <a href="/">Home</a> <span>›</span>
            <a href="/#categories">Random Picker</a> <span>›</span>
            <span style={{ color: "var(--text)" }}>Number Generator</span>
          </nav>

          <div style={{ textAlign: "center", marginBottom: 40 }}>
            <h1 style={{ fontSize: "clamp(1.8rem, 4vw, 2.8rem)", fontWeight: 800, color: "var(--text)", marginBottom: 10 }}>
              🔢 Random Number Generator
            </h1>
            <p style={{ color: "var(--text-muted)", fontSize: "1rem" }}>
              Generate random numbers in any range, instantly
            </p>
          </div>

          <NumberGeneratorClient />
        </div>
      </main>
      <Footer />
    </>
  );
}

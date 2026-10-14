import type { Metadata } from "next";
import CoinFlipClient from "./CoinFlipClient";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Coin Flip — Free Online Heads or Tails",
  description:
    "Flip a coin online for free. Get instant heads or tails result with a beautiful 3D coin flip animation. No real coin needed!",
};

export default function CoinFlipPage() {
  return (
    <>
      <Header />
      <main style={{ minHeight: "100vh" }}>
        <div style={{ maxWidth: 800, margin: "0 auto", padding: "40px 24px" }}>
          <nav className="breadcrumb">
            <a href="/">Home</a> <span>›</span>
            <a href="/#categories">Random Picker</a> <span>›</span>
            <span style={{ color: "var(--text)" }}>Coin Flip</span>
          </nav>

          <div style={{ textAlign: "center", marginBottom: 40 }}>
            <h1 style={{ fontSize: "clamp(1.8rem, 4vw, 2.8rem)", fontWeight: 800, color: "var(--text)", marginBottom: 10 }}>
              🪙 Coin Flip
            </h1>
            <p style={{ color: "var(--text-muted)", fontSize: "1rem" }}>
              Heads or tails? Flip a virtual coin and get an instant result
            </p>
          </div>

          <CoinFlipClient />
        </div>
      </main>
      <Footer />
    </>
  );
}

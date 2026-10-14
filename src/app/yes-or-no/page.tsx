import type { Metadata } from "next";
import YesNoClient from "./YesNoClient";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Yes or No Generator — Random Yes/No Decision Maker",
  description:
    "Can't decide? Let our Yes or No generator make the decision for you. Free, instant, and fun random yes or no answer.",
};

export default function YesOrNoPage() {
  return (
    <>
      <Header />
      <main style={{ minHeight: "100vh" }}>
        <div style={{ maxWidth: 800, margin: "0 auto", padding: "40px 24px" }}>
          <nav className="breadcrumb">
            <a href="/">Home</a> <span>›</span>
            <a href="/#categories">Random Picker</a> <span>›</span>
            <span style={{ color: "var(--text)" }}>Yes or No</span>
          </nav>

          <div style={{ textAlign: "center", marginBottom: 40 }}>
            <h1 style={{ fontSize: "clamp(1.8rem, 4vw, 2.8rem)", fontWeight: 800, color: "var(--text)", marginBottom: 10 }}>
              ✅ Yes or No Generator
            </h1>
            <p style={{ color: "var(--text-muted)", fontSize: "1rem" }}>
              Ask your question and get an instant random yes or no answer
            </p>
          </div>

          <YesNoClient />
        </div>
      </main>
      <Footer />
    </>
  );
}

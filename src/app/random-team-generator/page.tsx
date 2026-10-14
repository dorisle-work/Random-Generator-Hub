import type { Metadata } from "next";
import TeamGeneratorClient from "./TeamGeneratorClient";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Random Team Generator — Split People Into Random Teams",
  description:
    "Free online random team generator. Enter names and split them into balanced random teams instantly. Perfect for classrooms, sports, and office activities.",
};

export default function RandomTeamGeneratorPage() {
  return (
    <>
      <Header />
      <main style={{ minHeight: "100vh" }}>
        <div style={{ maxWidth: 1000, margin: "0 auto", padding: "40px 24px" }}>
          <nav className="breadcrumb">
            <a href="/">Home</a> <span>›</span>
            <a href="/#categories">Random Picker</a> <span>›</span>
            <span style={{ color: "var(--text)" }}>Team Generator</span>
          </nav>

          <div style={{ textAlign: "center", marginBottom: 40 }}>
            <h1 style={{ fontSize: "clamp(1.8rem, 4vw, 2.8rem)", fontWeight: 800, color: "var(--text)", marginBottom: 10 }}>
              👥 Random Team Generator
            </h1>
            <p style={{ color: "var(--text-muted)", fontSize: "1rem" }}>
              Enter names and split them into random balanced teams
            </p>
          </div>

          <TeamGeneratorClient />
        </div>
      </main>
      <Footer />
    </>
  );
}

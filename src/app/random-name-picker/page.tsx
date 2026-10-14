import type { Metadata } from "next";
import NamePickerClient from "./NamePickerClient";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Random Name Picker — Pick a Random Name from a List",
  description:
    "Free random name picker tool. Add names and let the randomizer pick one for you. Great for teachers, giveaways, team selection, and more.",
};

export default function RandomNamePickerPage() {
  return (
    <>
      <Header />
      <main style={{ minHeight: "100vh" }}>
        <div style={{ maxWidth: 1000, margin: "0 auto", padding: "40px 24px" }}>
          <nav className="breadcrumb">
            <a href="/">Home</a> <span>›</span>
            <a href="/#categories">Random Picker</a> <span>›</span>
            <span style={{ color: "var(--text)" }}>Name Picker</span>
          </nav>

          <div style={{ textAlign: "center", marginBottom: 40 }}>
            <h1 style={{ fontSize: "clamp(1.8rem, 4vw, 2.8rem)", fontWeight: 800, color: "var(--text)", marginBottom: 10 }}>
              🎯 Random Name Picker
            </h1>
            <p style={{ color: "var(--text-muted)", fontSize: "1rem" }}>
              Add names to the list and pick one at random
            </p>
          </div>

          <NamePickerClient />

          <div style={{ marginTop: 64 }}>
            <div className="glass-card" style={{ padding: 32 }}>
              <h2 style={{ fontSize: "1.2rem", fontWeight: 700, marginBottom: 12, color: "var(--text)" }}>
                Popular use cases
              </h2>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
                {[
                  "Student name drawing 📚", "Giveaway winner 🎁", "Team captain selection 🏆",
                  "Meeting presenter order 💼", "Secret Santa 🎄", "Game night first player 🎮",
                ].map((u) => (
                  <span key={u} className="chip">{u}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

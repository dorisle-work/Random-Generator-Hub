import type { Metadata } from "next";
import SpinWheelClient from "./SpinWheelClient";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Spin the Wheel — Free Online Wheel Spinner",
  description:
    "Free online spin the wheel randomizer. Add your own choices, customize colors, and spin for a random result. Perfect for classrooms, games, and decision making.",
};

export default function SpinTheWheelPage() {
  return (
    <>
      <Header />
      <main style={{ minHeight: "100vh" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto", padding: "40px 24px" }}>
          <nav className="breadcrumb">
            <a href="/">Home</a> <span>›</span>
            <a href="/#categories">Random Picker</a> <span>›</span>
            <span style={{ color: "var(--text)" }}>Spin the Wheel</span>
          </nav>

          <div style={{ textAlign: "center", marginBottom: 40 }}>
            <h1 style={{ fontSize: "clamp(1.8rem, 4vw, 2.8rem)", fontWeight: 800, color: "var(--text)", marginBottom: 10 }}>
              🎡 Spin the Wheel
            </h1>
            <p style={{ color: "var(--text-muted)", fontSize: "1rem" }}>
              Add your choices and let the wheel decide!
            </p>
          </div>

          <SpinWheelClient />

          {/* SEO content */}
          <div style={{ marginTop: 64, maxWidth: 720, margin: "64px auto 0" }}>
            <div className="glass-card" style={{ padding: 32, marginBottom: 24 }}>
              <h2 style={{ fontSize: "1.2rem", fontWeight: 700, marginBottom: 12, color: "var(--text)" }}>
                How to use Spin the Wheel
              </h2>
              <ol style={{ paddingLeft: 20, color: "var(--text-muted)", lineHeight: 2, fontSize: "0.92rem" }}>
                <li>Type your choices in the input box (one per line or comma-separated)</li>
                <li>Click <strong>Add</strong> to add them to the wheel</li>
                <li>Press the <strong>SPIN</strong> button to spin</li>
                <li>Watch the wheel spin and land on a random result!</li>
              </ol>
            </div>

            <div className="glass-card" style={{ padding: 32 }}>
              <h2 style={{ fontSize: "1.2rem", fontWeight: 700, marginBottom: 12, color: "var(--text)" }}>
                Popular use cases
              </h2>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
                {[
                  "Choosing what to eat 🍕", "Classroom activities 📚", "Game night decisions 🎮",
                  "Team assignments 👥", "Prize giveaways 🎁", "Travel destinations ✈️",
                  "Movie night picks 🎬", "Workout selection 💪",
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

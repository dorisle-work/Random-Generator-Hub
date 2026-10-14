import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import HeroSearch from "@/components/HeroSearch";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Random Generator Hub — Random anything, instantly.",
  description:
    "Free online random generator tools. Spin the Wheel, Random Name Picker, Number Generator, Team Generator, Coin Flip & more. No signup required.",
};

const tools = [
  {
    emoji: "🎡",
    name: "Spin the Wheel",
    desc: "Add your choices and spin for a random winner",
    href: "/spin-the-wheel",
    badge: "HOT",
    color: "#635BFF",
    bg: "rgba(99,91,255,0.08)",
  },
  {
    emoji: "🎯",
    name: "Random Name Picker",
    desc: "Pick a random name from your list instantly",
    href: "/random-name-picker",
    badge: "HOT",
    color: "#EC4899",
    bg: "rgba(236,72,153,0.08)",
  },
  {
    emoji: "🔢",
    name: "Number Generator",
    desc: "Generate random numbers in any range",
    href: "/random-number-generator",
    badge: null,
    color: "#10B981",
    bg: "rgba(16,185,129,0.08)",
  },
  {
    emoji: "👥",
    name: "Team Generator",
    desc: "Split people into random balanced teams",
    href: "/random-team-generator",
    badge: null,
    color: "#F59E0B",
    bg: "rgba(245,158,11,0.08)",
  },
  {
    emoji: "✅",
    name: "Yes or No Generator",
    desc: "Get a quick yes or no decision",
    href: "/yes-or-no",
    badge: "NEW",
    color: "#3B82F6",
    bg: "rgba(59,130,246,0.08)",
  },
  {
    emoji: "🪙",
    name: "Coin Flip",
    desc: "Flip a coin for heads or tails",
    href: "/coin-flip",
    badge: null,
    color: "#8B5CF6",
    bg: "rgba(139,92,246,0.08)",
  },
];

const categories = [
  { emoji: "🎡", name: "Random Picker", desc: "Wheels, names, numbers, teams", color: "#635BFF" },
  { emoji: "📚", name: "Education", desc: "For teachers and classrooms", color: "#10B981" },
  { emoji: "🎮", name: "Entertainment", desc: "Games, food, movies", color: "#F59E0B" },
  { emoji: "🎨", name: "Creative & Dev", desc: "Colors, passwords, UUIDs", color: "#EC4899" },
  { emoji: "💼", name: "Productivity", desc: "Teams, tasks, icebreakers", color: "#3B82F6" },
  { emoji: "✨", name: "Fun Generators", desc: "Animals, superpowers, stories", color: "#8B5CF6" },
];

export default function Home() {
  return (
    <>
      <Header />
      <main>
        {/* Hero */}
        <section style={{
          background: "linear-gradient(160deg, rgba(99,91,255,0.06) 0%, rgba(196,242,227,0.08) 50%, rgba(255,207,112,0.06) 100%)",
          padding: "80px 24px 64px",
          textAlign: "center",
          position: "relative",
          overflow: "hidden",
        }}>
          {/* Decorative blobs */}
          <div style={{
            position: "absolute", top: -60, right: -60, width: 300, height: 300,
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(99,91,255,0.15), transparent 70%)",
            pointerEvents: "none",
          }} />
          <div style={{
            position: "absolute", bottom: -40, left: -40, width: 250, height: 250,
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(255,207,112,0.15), transparent 70%)",
            pointerEvents: "none",
          }} />

          <div style={{ position: "relative", maxWidth: 700, margin: "0 auto" }}>
            <div style={{
              display: "inline-flex", alignItems: "center", gap: 8,
              background: "rgba(99,91,255,0.1)",
              border: "1.5px solid rgba(99,91,255,0.2)",
              borderRadius: 20, padding: "6px 14px",
              fontSize: "0.82rem", fontWeight: 600, color: "var(--primary)",
              marginBottom: 24,
            }}>
              🎲 Free · No signup · 6+ tools
            </div>

            <h1 style={{
              fontSize: "clamp(2.2rem, 5vw, 3.6rem)",
              fontWeight: 800,
              lineHeight: 1.15,
              marginBottom: 20,
              color: "var(--text)",
            }}>
              Make every choice{" "}
              <span className="gradient-text">more fun.</span>
            </h1>

            <p style={{
              fontSize: "1.15rem",
              color: "var(--text-muted)",
              lineHeight: 1.7,
              marginBottom: 36,
              maxWidth: 520,
              margin: "0 auto 36px",
            }}>
              Your favorite random generator tools in one place. Free, fast, and no account needed.
            </p>

            {/* Search bar */}
            <HeroSearch />

            {/* Quick links */}
            <div style={{ display: "flex", flexWrap: "wrap", gap: 8, justifyContent: "center" }}>
              <span style={{ fontSize: "0.85rem", color: "var(--text-muted)", alignSelf: "center" }}>Popular:</span>
              {["Spin Wheel", "Name Picker", "Dice Roller"].map((t) => (
                <span key={t} className="chip active" style={{ fontSize: "0.82rem" }}>{t}</span>
              ))}
            </div>
          </div>
        </section>

        {/* Popular Tools Grid */}
        <section id="tools" style={{ padding: "64px 24px", maxWidth: 1200, margin: "0 auto" }}>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 32, flexWrap: "wrap", gap: 12 }}>
            <div>
              <h2 style={{ fontSize: "1.6rem", fontWeight: 800, color: "var(--text)" }}>
                ✨ Popular Tools
              </h2>
              <p style={{ color: "var(--text-muted)", marginTop: 4, fontSize: "0.9rem" }}>
                Start with these fan favorites
              </p>
            </div>
          </div>

          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
            gap: 20,
          }}>
            {tools.map((tool, i) => (
              <Link
                key={tool.href}
                href={tool.href}
                className="tool-card"
                style={{ animationDelay: `${i * 0.06}s` }}
              >
                <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between" }}>
                  <div style={{
                    width: 52, height: 52,
                    borderRadius: 14,
                    background: tool.bg,
                    display: "flex", alignItems: "center", justifyContent: "center",
                    fontSize: 26,
                    flexShrink: 0,
                  }}>
                    {tool.emoji}
                  </div>
                  {tool.badge && (
                    <span className={`badge badge-${tool.badge === "HOT" ? "hot" : "new"}`}>
                      {tool.badge}
                    </span>
                  )}
                </div>
                <div>
                  <h3 style={{ fontWeight: 700, fontSize: "1rem", color: "var(--text)", marginBottom: 4 }}>
                    {tool.name}
                  </h3>
                  <p style={{ fontSize: "0.86rem", color: "var(--text-muted)", lineHeight: 1.5 }}>
                    {tool.desc}
                  </p>
                </div>
                <div style={{
                  display: "flex", alignItems: "center", gap: 4,
                  color: tool.color, fontSize: "0.82rem", fontWeight: 600,
                }}>
                  Try now →
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* Categories */}
        <section id="categories" style={{
          padding: "64px 24px",
          background: "linear-gradient(180deg, transparent, rgba(99,91,255,0.03))",
        }}>
          <div style={{ maxWidth: 1200, margin: "0 auto" }}>
            <div style={{ textAlign: "center", marginBottom: 40 }}>
              <h2 style={{ fontSize: "1.6rem", fontWeight: 800, color: "var(--text)", marginBottom: 8 }}>
                Browse by Category
              </h2>
              <p style={{ color: "var(--text-muted)", fontSize: "0.9rem" }}>
                Find the perfect tool for every occasion
              </p>
            </div>

            <div style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(180px, 1fr))",
              gap: 16,
            }}>
              {categories.map((cat) => (
                <div key={cat.name} className="glass-card" style={{ padding: "20px 18px", cursor: "pointer" }}>
                  <div style={{
                    width: 44, height: 44,
                    borderRadius: 12,
                    background: `${cat.color}18`,
                    display: "flex", alignItems: "center", justifyContent: "center",
                    fontSize: 22, marginBottom: 10,
                  }}>
                    {cat.emoji}
                  </div>
                  <h3 style={{ fontWeight: 700, fontSize: "0.9rem", color: "var(--text)", marginBottom: 4 }}>
                    {cat.name}
                  </h3>
                  <p style={{ fontSize: "0.78rem", color: "var(--text-muted)" }}>{cat.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Banner */}
        <section style={{ padding: "40px 24px", maxWidth: 1200, margin: "0 auto" }}>
          <div style={{
            background: "linear-gradient(135deg, var(--primary), #8B5CF6, #EC4899)",
            borderRadius: 28,
            padding: "48px 40px",
            textAlign: "center",
            position: "relative",
            overflow: "hidden",
          }}>
            <div style={{
              position: "absolute", top: -30, right: -30, width: 200, height: 200,
              borderRadius: "50%",
              background: "rgba(255,255,255,0.07)",
            }} />
            <div style={{
              position: "absolute", bottom: -20, left: -20, width: 150, height: 150,
              borderRadius: "50%",
              background: "rgba(255,255,255,0.07)",
            }} />
            <h2 style={{
              color: "white", fontSize: "1.8rem", fontWeight: 800, marginBottom: 12, position: "relative",
            }}>
              Ready to decide? 🎲
            </h2>
            <p style={{
              color: "rgba(255,255,255,0.85)", fontSize: "1rem", marginBottom: 28, position: "relative",
            }}>
              Pick a tool and let randomness make your day more interesting.
            </p>
            <Link href="/spin-the-wheel" style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              background: "white",
              color: "var(--primary)",
              padding: "14px 32px",
              borderRadius: 14,
              fontWeight: 700,
              textDecoration: "none",
              fontSize: "1rem",
              boxShadow: "0 4px 20px rgba(0,0,0,0.15)",
              transition: "transform 0.2s",
              position: "relative",
            }}>
              🎡 Start with Spin the Wheel
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

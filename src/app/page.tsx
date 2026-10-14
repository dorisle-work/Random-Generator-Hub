import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import HeroSearch from "@/components/HeroSearch";

export const metadata: Metadata = {
  title: "Pick easy — Random anything, instantly.",
  description:
    "Free random generator tools by easy. Spin the Wheel, Random Name Picker, Number Generator, Team Generator, Coin Flip & more. No signup required.",
};

const tools = [
  {
    emoji: "🎡",
    name: "Spin the Wheel",
    desc: "Add your choices and spin for a random winner",
    href: "/spin-the-wheel",
    badge: "HOT",
    accentBg: "rgba(199,244,61,0.12)",
  },
  {
    emoji: "🎯",
    name: "Random Name Picker",
    desc: "Pick a random name from your list instantly",
    href: "/random-name-picker",
    badge: "HOT",
    accentBg: "rgba(199,244,61,0.08)",
  },
  {
    emoji: "🔢",
    name: "Number Generator",
    desc: "Generate random numbers in any range",
    href: "/random-number-generator",
    badge: null,
    accentBg: "rgba(199,244,61,0.06)",
  },
  {
    emoji: "👥",
    name: "Team Generator",
    desc: "Split people into random balanced teams",
    href: "/random-team-generator",
    badge: null,
    accentBg: "rgba(199,244,61,0.06)",
  },
  {
    emoji: "✅",
    name: "Yes or No",
    desc: "Get a quick yes or no decision",
    href: "/yes-or-no",
    badge: "NEW",
    accentBg: "rgba(199,244,61,0.08)",
  },
  {
    emoji: "🪙",
    name: "Coin Flip",
    desc: "Flip a coin for heads or tails",
    href: "/coin-flip",
    badge: null,
    accentBg: "rgba(199,244,61,0.06)",
  },
];

const categories = [
  { emoji: "🎡", name: "Random Picker",     desc: "Wheels, names, numbers, teams" },
  { emoji: "📚", name: "Education",          desc: "For teachers and classrooms" },
  { emoji: "🎮", name: "Entertainment",      desc: "Games, food, movies" },
  { emoji: "🎨", name: "Creative & Dev",     desc: "Colors, passwords, UUIDs" },
  { emoji: "💼", name: "Productivity",       desc: "Teams, tasks, icebreakers" },
  { emoji: "✨", name: "Fun Generators",     desc: "Animals, superpowers, stories" },
];

export default function Home() {
  return (
    <>
      <Header />
      <main>
        {/* Hero */}
        <section style={{
          padding: "72px 24px 60px",
          textAlign: "center",
          position: "relative",
          overflow: "hidden",
        }}>
          {/* Lime blob decorations */}
          <div style={{
            position: "absolute", top: -80, right: -80, width: 400, height: 400,
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(199,244,61,0.18) 0%, transparent 70%)",
            pointerEvents: "none",
          }} />
          <div style={{
            position: "absolute", bottom: -40, left: -60, width: 300, height: 300,
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(199,244,61,0.1) 0%, transparent 70%)",
            pointerEvents: "none",
          }} />

          <div style={{ position: "relative", maxWidth: 680, margin: "0 auto" }}>
            {/* easy badge */}
            <div style={{
              display: "inline-flex", alignItems: "center", gap: 8,
              background: "#C7F43D",
              borderRadius: "999px",
              padding: "5px 14px 5px 8px",
              fontSize: "0.78rem",
              fontWeight: 700,
              color: "#161713",
              marginBottom: 28,
            }}>
              <span style={{
                background: "#161713", color: "#C7F43D",
                borderRadius: "999px", padding: "2px 8px", fontSize: "0.72rem",
              }}>easy</span>
              tools · Free · No signup
            </div>

            <h1 style={{
              fontSize: "clamp(2.2rem, 5vw, 3.8rem)",
              fontWeight: 800,
              lineHeight: 1.12,
              letterSpacing: "-0.03em",
              marginBottom: 18,
              color: "var(--text)",
            }}>
              Random anything,{" "}
              <span style={{
                background: "#C7F43D",
                borderRadius: "8px",
                padding: "0 8px",
                color: "#161713",
                display: "inline-block",
              }}>
                instantly.
              </span>
            </h1>

            <p style={{
              fontSize: "1.1rem",
              color: "var(--text-muted)",
              lineHeight: 1.7,
              marginBottom: 36,
              maxWidth: 500,
              margin: "0 auto 36px",
            }}>
              Your favourite random generator tools in one place. Free, fast, and no account needed.
            </p>

            <HeroSearch />

            {/* Quick chips */}
            <div style={{ display: "flex", flexWrap: "wrap", gap: 8, justifyContent: "center", marginTop: 16 }}>
              <span style={{ fontSize: "0.82rem", color: "var(--text-muted)", alignSelf: "center" }}>Try:</span>
              {["Spin Wheel", "Name Picker", "Coin Flip"].map((t) => (
                <span key={t} className="chip active" style={{ fontSize: "0.8rem" }}>{t}</span>
              ))}
            </div>
          </div>
        </section>

        {/* Tools Grid */}
        <section id="tools" style={{ padding: "0 24px 64px", maxWidth: 1200, margin: "0 auto" }}>
          <div style={{ display: "flex", alignItems: "baseline", gap: 12, marginBottom: 28 }}>
            <h2 style={{ fontSize: "1.5rem", fontWeight: 800, color: "var(--text)", letterSpacing: "-0.02em" }}>
              Popular Tools
            </h2>
            <span style={{
              background: "#C7F43D", color: "#161713",
              borderRadius: "999px", padding: "2px 10px",
              fontSize: "0.72rem", fontWeight: 800,
            }}>
              {tools.length} free tools
            </span>
          </div>

          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
            gap: 16,
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
                    width: 48, height: 48,
                    borderRadius: "var(--radius-sm)",
                    background: tool.accentBg,
                    border: "1.5px solid rgba(199,244,61,0.3)",
                    display: "flex", alignItems: "center", justifyContent: "center",
                    fontSize: 24, flexShrink: 0,
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
                  <h3 style={{ fontWeight: 700, fontSize: "0.97rem", color: "var(--text)", marginBottom: 4, letterSpacing: "-0.01em" }}>
                    {tool.name}
                  </h3>
                  <p style={{ fontSize: "0.84rem", color: "var(--text-muted)", lineHeight: 1.5 }}>
                    {tool.desc}
                  </p>
                </div>
                <div style={{
                  display: "flex", alignItems: "center", gap: 4,
                  fontSize: "0.8rem", fontWeight: 700,
                  color: "var(--text-muted)",
                  marginTop: 4,
                }}>
                  Try now →
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* Categories */}
        <section id="categories" style={{
          padding: "40px 24px 64px",
          background: "var(--bg-elevated)",
        }}>
          <div style={{ maxWidth: 1200, margin: "0 auto" }}>
            <div style={{ marginBottom: 32 }}>
              <h2 style={{ fontSize: "1.5rem", fontWeight: 800, color: "var(--text)", letterSpacing: "-0.02em", marginBottom: 6 }}>
                Browse by Category
              </h2>
              <p style={{ color: "var(--text-muted)", fontSize: "0.88rem" }}>
                Find the perfect tool for every occasion
              </p>
            </div>

            <div style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(175px, 1fr))",
              gap: 14,
            }}>
              {categories.map((cat) => (
                <div key={cat.name} className="easy-card" style={{ padding: "18px 16px", cursor: "pointer" }}>
                  <div style={{
                    width: 40, height: 40,
                    borderRadius: "var(--radius-sm)",
                    background: "rgba(199,244,61,0.12)",
                    border: "1.5px solid rgba(199,244,61,0.25)",
                    display: "flex", alignItems: "center", justifyContent: "center",
                    fontSize: 20, marginBottom: 10,
                  }}>
                    {cat.emoji}
                  </div>
                  <h3 style={{ fontWeight: 700, fontSize: "0.88rem", color: "var(--text)", marginBottom: 3, letterSpacing: "-0.01em" }}>
                    {cat.name}
                  </h3>
                  <p style={{ fontSize: "0.76rem", color: "var(--text-muted)", lineHeight: 1.4 }}>{cat.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Banner — Easy style */}
        <section style={{ padding: "40px 24px 20px", maxWidth: 1200, margin: "0 auto" }}>
          <div style={{
            background: "#C7F43D",
            borderRadius: "var(--radius-lg)",
            padding: "48px 40px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: 24,
            position: "relative",
            overflow: "hidden",
          }}>
            <div style={{
              position: "absolute", top: -30, right: 80, width: 180, height: 180,
              borderRadius: "50%",
              background: "rgba(22,23,19,0.06)",
            }} />
            <div>
              <h2 style={{
                color: "#161713", fontSize: "clamp(1.4rem, 3vw, 2rem)",
                fontWeight: 800, marginBottom: 8, letterSpacing: "-0.03em",
              }}>
                Có cách dễ hơn mà. 🎲
              </h2>
              <p style={{ color: "rgba(22,23,19,0.65)", fontSize: "0.95rem" }}>
                Pick a tool and let randomness make your decision.
              </p>
            </div>
            <Link href="/spin-the-wheel" style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              background: "#161713",
              color: "#C7F43D",
              padding: "14px 28px",
              borderRadius: "var(--radius-md)",
              fontWeight: 700,
              textDecoration: "none",
              fontSize: "0.95rem",
              flexShrink: 0,
              transition: "transform 0.18s",
              position: "relative",
            }}>
              🎡 Spin the Wheel
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

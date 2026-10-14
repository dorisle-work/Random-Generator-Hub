import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import HeroSearch from "@/components/HeroSearch";
import {
  IconWheel, IconUser, IconHash, IconTeam, IconYesNo, IconCoin,
} from "@/components/Icons";

export const metadata: Metadata = {
  title: "Pick easy — Random anything, instantly.",
  description:
    "Free random generator tools by easy. Spin the Wheel, Random Name Picker, Number Generator, Team Generator, Coin Flip & more. No signup required.",
};

const tools = [
  {
    Icon: IconWheel,
    name: "Spin the Wheel",
    desc: "Add your choices and spin for a random winner",
    href: "/spin-the-wheel",
    badge: "HOT",
  },
  {
    Icon: IconUser,
    name: "Random Name Picker",
    desc: "Pick a random name from your list instantly",
    href: "/random-name-picker",
    badge: "HOT",
  },
  {
    Icon: IconHash,
    name: "Number Generator",
    desc: "Generate random numbers in any range",
    href: "/random-number-generator",
    badge: null,
  },
  {
    Icon: IconTeam,
    name: "Team Generator",
    desc: "Split people into random balanced teams",
    href: "/random-team-generator",
    badge: null,
  },
  {
    Icon: IconYesNo,
    name: "Yes or No",
    desc: "Get a quick yes or no answer to any question",
    href: "/yes-or-no",
    badge: "NEW",
  },
  {
    Icon: IconCoin,
    name: "Coin Flip",
    desc: "Flip a coin for heads or tails",
    href: "/coin-flip",
    badge: null,
  },
];

const categories = [
  { label: "Random Picker",  desc: "Wheel, names, numbers" },
  { label: "Education",      desc: "Teachers & classrooms" },
  { label: "Entertainment",  desc: "Games, food, movies" },
  { label: "Creative & Dev", desc: "Colors, passwords, UUIDs" },
  { label: "Productivity",   desc: "Teams, tasks, icebreakers" },
  { label: "Fun",            desc: "Animals, superpowers, stories" },
];

export default function Home() {
  return (
    <>
      <Header />
      <main>

        {/* ── Hero ───────────────────────────────────────────── */}
        <section style={{ padding: "64px 24px 48px", position: "relative", overflow: "hidden" }}>
          {/* subtle lime glow */}
          <div style={{
            position: "absolute", top: -100, right: -80, width: 500, height: 500,
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(199,244,61,0.22) 0%, transparent 65%)",
            pointerEvents: "none",
          }} />

          <div style={{ maxWidth: 640, margin: "0 auto", textAlign: "center", position: "relative" }}>

            {/* eyebrow badge */}
            <div style={{
              display: "inline-flex", alignItems: "center", gap: 6,
              background: "#C7F43D",
              borderRadius: "999px",
              padding: "4px 14px 4px 6px",
              marginBottom: 24,
            }}>
              <span style={{
                background: "#161713", color: "#C7F43D",
                borderRadius: "999px", padding: "2px 9px",
                fontSize: "0.7rem", fontWeight: 800,
              }}>easy</span>
              <span style={{ fontSize: "0.78rem", fontWeight: 600, color: "#161713" }}>
                tools · Free · No signup
              </span>
            </div>

            {/* Heading */}
            <h1 style={{
              fontSize: "clamp(2rem, 4.5vw, 3.2rem)",
              fontWeight: 800,
              lineHeight: 1.15,
              letterSpacing: "-0.03em",
              color: "var(--text)",
              marginBottom: 16,
            }}>
              Random anything,{" "}
              <mark style={{
                background: "#C7F43D",
                color: "#161713",
                borderRadius: "6px",
                padding: "0 6px",
                fontStyle: "normal",
              }}>
                instantly.
              </mark>
            </h1>

            {/* Subheading */}
            <p style={{
              fontSize: "1rem",
              color: "var(--text-muted)",
              lineHeight: 1.65,
              maxWidth: 480,
              margin: "0 auto 32px",
              fontWeight: 400,
            }}>
              Your favourite random generator tools in one place —
              free, fast, and no account needed.
            </p>

            <HeroSearch />

            {/* quick chips */}
            <div style={{ display: "flex", flexWrap: "wrap", gap: 8, justifyContent: "center", marginTop: 14 }}>
              <span style={{ fontSize: "0.8rem", color: "var(--text-muted)", alignSelf: "center" }}>Try:</span>
              {["Spin Wheel", "Name Picker", "Coin Flip"].map((t) => (
                <span key={t} className="chip active" style={{ fontSize: "0.78rem" }}>{t}</span>
              ))}
            </div>
          </div>
        </section>

        {/* ── Tools Grid ─────────────────────────────────────── */}
        <section id="tools" style={{ padding: "0 24px 56px", maxWidth: 1200, margin: "0 auto" }}>

          {/* Section header */}
          <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 20 }}>
            <h2 style={{
              fontSize: "1.1rem",
              fontWeight: 700,
              color: "var(--text)",
              letterSpacing: "-0.01em",
            }}>
              Popular Tools
            </h2>
            <span style={{
              background: "#C7F43D", color: "#161713",
              borderRadius: "999px", padding: "2px 10px",
              fontSize: "0.7rem", fontWeight: 800,
            }}>
              {tools.length} free
            </span>
          </div>

          {/* Grid */}
          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))",
            gap: 14,
          }}>
            {tools.map(({ Icon, name, desc, href, badge }, i) => (
              <Link
                key={href}
                href={href}
                className="tool-card"
                style={{ animationDelay: `${i * 0.05}s` }}
              >
                {/* icon + badge row */}
                <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between" }}>
                  <div style={{
                    width: 44, height: 44,
                    borderRadius: "var(--radius-sm)",
                    background: "rgba(199,244,61,0.1)",
                    border: "1.5px solid rgba(199,244,61,0.3)",
                    display: "flex", alignItems: "center", justifyContent: "center",
                    flexShrink: 0,
                    color: "#5a7a00",
                  }}>
                    <Icon size={22} strokeWidth={1.8} color="currentColor" />
                  </div>
                  {badge && (
                    <span className={`badge badge-${badge === "HOT" ? "hot" : "new"}`}>
                      {badge}
                    </span>
                  )}
                </div>

                {/* text */}
                <div>
                  <h3 style={{
                    fontWeight: 700,
                    fontSize: "0.92rem",
                    color: "var(--text)",
                    marginBottom: 3,
                    letterSpacing: "-0.01em",
                  }}>
                    {name}
                  </h3>
                  <p style={{
                    fontSize: "0.82rem",
                    color: "var(--text-muted)",
                    lineHeight: 1.5,
                    fontWeight: 400,
                  }}>
                    {desc}
                  </p>
                </div>

                <span style={{
                  fontSize: "0.78rem",
                  fontWeight: 600,
                  color: "var(--text-muted)",
                }}>
                  Try now →
                </span>
              </Link>
            ))}
          </div>
        </section>

        {/* ── Categories ─────────────────────────────────────── */}
        <section id="categories" style={{
          padding: "40px 24px 56px",
          background: "var(--bg-elevated)",
        }}>
          <div style={{ maxWidth: 1200, margin: "0 auto" }}>

            <div style={{ marginBottom: 24 }}>
              <h2 style={{
                fontSize: "1.1rem",
                fontWeight: 700,
                color: "var(--text)",
                letterSpacing: "-0.01em",
                marginBottom: 4,
              }}>
                Browse by Category
              </h2>
              <p style={{ fontSize: "0.83rem", color: "var(--text-muted)", fontWeight: 400 }}>
                Find the perfect tool for every occasion
              </p>
            </div>

            <div style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(160px, 1fr))",
              gap: 12,
            }}>
              {categories.map((cat) => (
                <div key={cat.label} className="easy-card" style={{
                  padding: "16px",
                  cursor: "pointer",
                }}>
                  <h3 style={{
                    fontWeight: 700,
                    fontSize: "0.85rem",
                    color: "var(--text)",
                    marginBottom: 3,
                    letterSpacing: "-0.01em",
                  }}>
                    {cat.label}
                  </h3>
                  <p style={{ fontSize: "0.75rem", color: "var(--text-muted)", lineHeight: 1.4, fontWeight: 400 }}>
                    {cat.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── CTA ────────────────────────────────────────────── */}
        <section style={{ padding: "40px 24px 20px", maxWidth: 1200, margin: "0 auto" }}>
          <div style={{
            background: "#C7F43D",
            borderRadius: "var(--radius-lg)",
            padding: "40px 36px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: 20,
            position: "relative",
            overflow: "hidden",
          }}>
            <div style={{
              position: "absolute", top: -40, right: 60,
              width: 160, height: 160, borderRadius: "50%",
              background: "rgba(22,23,19,0.06)",
            }} />
            <div>
              <h2 style={{
                color: "#161713",
                fontSize: "1.5rem",
                fontWeight: 800,
                letterSpacing: "-0.03em",
                marginBottom: 6,
              }}>
                Có cách dễ hơn mà. 🎲
              </h2>
              <p style={{ color: "rgba(22,23,19,0.6)", fontSize: "0.88rem", fontWeight: 400 }}>
                Pick a tool and let randomness make your decision.
              </p>
            </div>
            <Link href="/spin-the-wheel" style={{
              display: "inline-flex", alignItems: "center", gap: 8,
              background: "#161713", color: "#C7F43D",
              padding: "12px 24px",
              borderRadius: "var(--radius-md)",
              fontWeight: 700, fontSize: "0.88rem",
              textDecoration: "none", flexShrink: 0,
              transition: "opacity 0.18s",
            }}>
              Spin the Wheel →
            </Link>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}

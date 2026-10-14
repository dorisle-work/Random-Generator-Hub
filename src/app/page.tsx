import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import HeroSearch from "@/components/HeroSearch";
import {
  IconWheel, IconUser, IconHash, IconTeam, IconYesNo, IconCoin,
} from "@/components/Icons";

export const metadata: Metadata = {
  title: "random.easy — Random anything, instantly.",
  description:
    "Free random generator tools by easy. Spin the Wheel, Random Name Picker, Number Generator, Team Generator, Coin Flip & more. No signup required.",
};

const tools = [
  {
    Icon: IconWheel,
    name: "Spin the Wheel",
    desc: "Add your choices and spin for a random winner with customizable colors & sound",
    href: "/spin-the-wheel",
    badge: "HOT",
  },
  {
    Icon: IconUser,
    name: "Random Name Picker",
    desc: "Pick a fair random name or winner from your custom list instantly",
    href: "/random-name-picker",
    badge: "HOT",
  },
  {
    Icon: IconHash,
    name: "Number Generator",
    desc: "Generate single or multiple unique random numbers in any custom range",
    href: "/random-number-generator",
    badge: null,
  },
  {
    Icon: IconTeam,
    name: "Team Generator",
    desc: "Split groups of people into perfectly random and balanced teams",
    href: "/random-team-generator",
    badge: null,
  },
  {
    Icon: IconYesNo,
    name: "Yes or No",
    desc: "Get an instant, decisive yes or no answer for any quick question",
    href: "/yes-or-no",
    badge: "NEW",
  },
  {
    Icon: IconCoin,
    name: "Coin Flip",
    desc: "Flip a 3D animated coin for fair heads or tails decision making",
    href: "/coin-flip",
    badge: null,
  },
];

const categories = [
  { label: "Random Picker",  desc: "Wheel, names, and number generators" },
  { label: "Education",      desc: "Classroom activities, student picker" },
  { label: "Entertainment",  desc: "Party games, food, movie night picks" },
  { label: "Creative & Dev", desc: "Colors, passwords, random UUIDs" },
  { label: "Productivity",   desc: "Team assignments, tasks, icebreakers" },
  { label: "Fun & Games",    desc: "Coin flip, yes/no, quick decisions" },
];

export default function Home() {
  return (
    <>
      <Header />
      <main>

        {/* ── Hero ───────────────────────────────────────────── */}
        <section style={{ padding: "72px 24px 56px", position: "relative", overflow: "hidden" }}>
          {/* subtle lime glow */}
          <div style={{
            position: "absolute", top: -120, right: -80, width: 560, height: 560,
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(199,244,61,0.22) 0%, transparent 65%)",
            pointerEvents: "none",
          }} />

          <div style={{ maxWidth: 760, margin: "0 auto", textAlign: "center", position: "relative" }}>

            {/* eyebrow badge */}
            <div style={{
              display: "inline-flex", alignItems: "center", gap: 8,
              background: "#C7F43D",
              borderRadius: "999px",
              padding: "5px 16px 5px 8px",
              marginBottom: 28,
              boxShadow: "0 2px 10px rgba(199,244,61,0.35)",
            }}>
              <span style={{
                background: "#161713", color: "#C7F43D",
                borderRadius: "999px", padding: "3px 11px",
                fontSize: "0.78rem", fontWeight: 800,
                letterSpacing: "-0.01em",
              }}>easy</span>
              <span style={{ fontSize: "0.88rem", fontWeight: 700, color: "#161713" }}>
                tools · 100% Free · No signup required
              </span>
            </div>

            {/* Heading */}
            <h1 style={{
              fontSize: "clamp(2.5rem, 5.5vw, 4.2rem)",
              fontWeight: 800,
              lineHeight: 1.12,
              letterSpacing: "-0.035em",
              color: "var(--text)",
              marginBottom: 20,
            }}>
              Random anything,{" "}
              <mark style={{
                background: "#C7F43D",
                color: "#161713",
                borderRadius: "10px",
                padding: "2px 10px",
                fontStyle: "normal",
                display: "inline-block",
              }}>
                instantly.
              </mark>
            </h1>

            {/* Subheading */}
            <p style={{
              fontSize: "1.18rem",
              color: "var(--text-muted)",
              lineHeight: 1.65,
              maxWidth: 560,
              margin: "0 auto 36px",
              fontWeight: 400,
            }}>
              Your favourite random decision and generator tools in one fast, beautiful place. Pick what you need and get instant results.
            </p>

            <HeroSearch />

            {/* quick chips */}
            <div style={{ display: "flex", flexWrap: "wrap", gap: 10, justifyContent: "center", marginTop: 16 }}>
              <span style={{ fontSize: "0.92rem", fontWeight: 600, color: "var(--text-muted)", alignSelf: "center" }}>
                Try quickly:
              </span>
              {[
                { name: "Spin Wheel", href: "/spin-the-wheel" },
                { name: "Name Picker", href: "/random-name-picker" },
                { name: "Coin Flip", href: "/coin-flip" },
                { name: "Yes / No", href: "/yes-or-no" },
              ].map((t) => (
                <Link
                  key={t.name}
                  href={t.href}
                  className="chip active"
                  style={{ textDecoration: "none" }}
                >
                  {t.name}
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* ── Tools Grid ─────────────────────────────────────── */}
        <section id="tools" style={{ padding: "0 24px 68px", maxWidth: 1240, margin: "0 auto" }}>

          {/* Section header */}
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 28 }}>
            <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
              <h2 style={{
                fontSize: "1.75rem",
                fontWeight: 800,
                color: "var(--text)",
                letterSpacing: "-0.03em",
              }}>
                Popular Tools
              </h2>
              <span style={{
                background: "#C7F43D", color: "#161713",
                borderRadius: "999px", padding: "4px 12px",
                fontSize: "0.8rem", fontWeight: 800,
              }}>
                {tools.length} free tools
              </span>
            </div>
          </div>

          {/* Grid - 3 columns on desktop with generous breathing room */}
          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))",
            gap: 22,
          }}>
            {tools.map(({ Icon, name, desc, href, badge }, i) => (
              <Link
                key={href}
                href={href}
                className="tool-card"
                style={{ animationDelay: `${i * 0.05}s` }}
              >
                {/* icon + badge row */}
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                  <div style={{
                    width: 52, height: 52,
                    borderRadius: "var(--radius-sm)",
                    background: "rgba(199,244,61,0.15)",
                    border: "1.5px solid rgba(199,244,61,0.4)",
                    display: "flex", alignItems: "center", justifyContent: "center",
                    flexShrink: 0,
                    color: "#527500",
                  }}>
                    <Icon size={26} strokeWidth={2} color="currentColor" />
                  </div>
                  {badge && (
                    <span className={`badge badge-${badge === "HOT" ? "hot" : "new"}`}>
                      {badge}
                    </span>
                  )}
                </div>

                {/* text */}
                <div style={{ flex: 1 }}>
                  <h3 style={{
                    fontWeight: 700,
                    fontSize: "1.25rem",
                    color: "var(--text)",
                    marginBottom: 8,
                    letterSpacing: "-0.02em",
                  }}>
                    {name}
                  </h3>
                  <p style={{
                    fontSize: "0.98rem",
                    color: "var(--text-muted)",
                    lineHeight: 1.55,
                    fontWeight: 400,
                  }}>
                    {desc}
                  </p>
                </div>

                <div style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  paddingTop: 8,
                  borderTop: "1px solid var(--border)",
                  marginTop: 4,
                }}>
                  <span style={{
                    fontSize: "0.92rem",
                    fontWeight: 700,
                    color: "var(--text)",
                    display: "inline-flex",
                    alignItems: "center",
                    gap: 6,
                  }}>
                    Open tool →
                  </span>
                  <span style={{
                    fontSize: "0.8rem",
                    fontWeight: 600,
                    color: "var(--text-muted)",
                  }}>
                    Free
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* ── Categories ─────────────────────────────────────── */}
        <section id="categories" style={{
          padding: "56px 24px 72px",
          background: "var(--bg-elevated)",
        }}>
          <div style={{ maxWidth: 1240, margin: "0 auto" }}>

            <div style={{ marginBottom: 32 }}>
              <h2 style={{
                fontSize: "1.75rem",
                fontWeight: 800,
                color: "var(--text)",
                letterSpacing: "-0.03em",
                marginBottom: 8,
              }}>
                Browse by Category
              </h2>
              <p style={{ fontSize: "1.0625rem", color: "var(--text-muted)", fontWeight: 400 }}>
                Find the right generator tool designed for your everyday task
              </p>
            </div>

            <div style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))",
              gap: 16,
            }}>
              {categories.map((cat) => (
                <div key={cat.label} className="easy-card" style={{
                  padding: "22px 20px",
                  cursor: "pointer",
                }}>
                  <h3 style={{
                    fontWeight: 700,
                    fontSize: "1.125rem",
                    color: "var(--text)",
                    marginBottom: 6,
                    letterSpacing: "-0.015em",
                  }}>
                    {cat.label}
                  </h3>
                  <p style={{ fontSize: "0.92rem", color: "var(--text-muted)", lineHeight: 1.5, fontWeight: 400 }}>
                    {cat.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── CTA ────────────────────────────────────────────── */}
        <section style={{ padding: "52px 24px 28px", maxWidth: 1240, margin: "0 auto" }}>
          <div style={{
            background: "#C7F43D",
            borderRadius: "var(--radius-lg)",
            padding: "48px 44px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: 24,
            position: "relative",
            overflow: "hidden",
            boxShadow: "0 12px 40px rgba(199,244,61,0.25)",
          }}>
            <div style={{
              position: "absolute", top: -40, right: 60,
              width: 200, height: 200, borderRadius: "50%",
              background: "rgba(22,23,19,0.06)",
            }} />
            <div>
              <h2 style={{
                color: "#161713",
                fontSize: "clamp(1.75rem, 3.5vw, 2.4rem)",
                fontWeight: 800,
                letterSpacing: "-0.035em",
                marginBottom: 8,
              }}>
                Có cách dễ hơn mà. 🎲
              </h2>
              <p style={{ color: "rgba(22,23,19,0.72)", fontSize: "1.0625rem", fontWeight: 500 }}>
                Pick a tool and let randomness make your decision in seconds.
              </p>
            </div>
            <Link href="/spin-the-wheel" style={{
              display: "inline-flex", alignItems: "center", gap: 10,
              background: "#161713", color: "#C7F43D",
              padding: "16px 32px",
              borderRadius: "var(--radius-pill)",
              fontWeight: 800, fontSize: "1.0625rem",
              textDecoration: "none", flexShrink: 0,
              transition: "transform 0.18s, opacity 0.18s",
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

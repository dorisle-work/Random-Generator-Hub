"use client";
import Link from "next/link";

export default function Footer() {
  const tools = [
    { name: "Spin the Wheel", href: "/spin-the-wheel" },
    { name: "Random Name Picker", href: "/random-name-picker" },
    { name: "Number Generator", href: "/random-number-generator" },
    { name: "Team Generator", href: "/random-team-generator" },
    { name: "Yes or No", href: "/yes-or-no" },
    { name: "Coin Flip", href: "/coin-flip" },
  ];

  return (
    <footer style={{
      background: "var(--card-bg)",
      borderTop: "1px solid var(--border)",
      padding: "48px 24px 24px",
      marginTop: 80,
    }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
          gap: 40,
          marginBottom: 40,
        }}>
          {/* Brand */}
          <div>
            <Link href="/" style={{ textDecoration: "none", display: "flex", alignItems: "center", gap: 8, marginBottom: 12 }}>
              <span style={{ fontSize: 24 }}>🎲</span>
              <span style={{ fontWeight: 800, fontSize: "1.1rem", color: "var(--text)" }}>
                Random<span style={{ color: "var(--primary)" }}>Hub</span>
              </span>
            </Link>
            <p style={{ color: "var(--text-muted)", fontSize: "0.88rem", lineHeight: 1.6, maxWidth: 240 }}>
              Free random generator tools for everyone. No signup required.
            </p>
          </div>

          {/* Tools */}
          <div>
            <h3 style={{ fontWeight: 700, fontSize: "0.9rem", marginBottom: 14, color: "var(--text)" }}>Popular Tools</h3>
            <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
              {tools.map((t) => (
                <Link key={t.href} href={t.href} style={{
                  color: "var(--text-muted)",
                  textDecoration: "none",
                  fontSize: "0.88rem",
                  transition: "color 0.2s",
                }}>
                  {t.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Legal */}
          <div>
            <h3 style={{ fontWeight: 700, fontSize: "0.9rem", marginBottom: 14, color: "var(--text)" }}>Company</h3>
            <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
              {[
                { name: "About", href: "/about" },
                { name: "Privacy Policy", href: "/privacy" },
                { name: "Terms of Use", href: "/terms" },
              ].map((l) => (
                <Link key={l.href} href={l.href} style={{
                  color: "var(--text-muted)",
                  textDecoration: "none",
                  fontSize: "0.88rem",
                }}>
                  {l.name}
                </Link>
              ))}
            </div>
          </div>
        </div>

        <div style={{
          borderTop: "1px solid var(--border)",
          paddingTop: 20,
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: "wrap",
          gap: 12,
        }}>
          <p style={{ color: "var(--text-muted)", fontSize: "0.82rem" }}>
            © {new Date().getFullYear()} Random Generator Hub. All rights reserved.
          </p>
          <p style={{ color: "var(--text-muted)", fontSize: "0.82rem" }}>
            Made with ❤️ for everyone who needs a little randomness
          </p>
        </div>
      </div>
    </footer>
  );
}

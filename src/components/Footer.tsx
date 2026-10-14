"use client";
import Link from "next/link";

function EasySymbol() {
  return (
    <svg width="24" height="24" viewBox="0 0 128 128" aria-hidden="true">
      <rect width="128" height="128" rx="32" fill="#C7F43D" />
      <path
        fill="#161713"
        fillRule="evenodd"
        d="M91 33C81 19 57 21 43 32C27 44 24 65 34 79C44 94 68 96 86 82C95 75 84 61 77 67C65 77 54 76 49 69L88 54C99 50 98 41 91 33ZM46 53C47 42 60 34 70 39C74 41 75 44 70 46Z"
      />
      <path
        d="M34 94Q64 122 96 91"
        fill="none"
        stroke="#161713"
        strokeWidth="13"
        strokeLinecap="round"
      />
    </svg>
  );
}

const tools = [
  { name: "Spin the Wheel",    href: "/spin-the-wheel" },
  { name: "Random Name Picker",href: "/random-name-picker" },
  { name: "Number Generator",  href: "/random-number-generator" },
  { name: "Team Generator",    href: "/random-team-generator" },
  { name: "Yes or No",         href: "/yes-or-no" },
  { name: "Coin Flip",         href: "/coin-flip" },
];

export default function Footer() {
  return (
    <footer style={{
      background: "var(--bg-elevated)",
      borderTop: "1px solid var(--border)",
      padding: "56px 24px 36px",
      marginTop: 88,
    }}>
      <div style={{ maxWidth: 1240, margin: "0 auto" }}>
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
          gap: 48,
          marginBottom: 48,
        }}>
          {/* Brand */}
          <div>
            <Link href="/" style={{ textDecoration: "none", display: "flex", alignItems: "center", gap: 10, marginBottom: 12 }}>
              <EasySymbol />
              <span style={{ fontWeight: 800, fontSize: "1.25rem", color: "var(--text)", letterSpacing: "-0.02em" }}>
                random<span style={{ color: "#8ab800", WebkitTextStroke: "0.5px currentColor" }}>.easy</span>
              </span>
            </Link>
            <p style={{ color: "var(--text-muted)", fontSize: "0.95rem", lineHeight: 1.6, maxWidth: 260, marginBottom: 16 }}>
              Free random decision and generation tools. Part of the easy ecosystem.
            </p>
            <a
              href="https://easy.io.vn"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 8,
                background: "#C7F43D",
                color: "#161713",
                padding: "8px 16px",
                borderRadius: "999px",
                fontSize: "0.85rem",
                fontWeight: 700,
                textDecoration: "none",
                transition: "opacity 0.18s",
              }}
            >
              <EasySymbol />
              easy.io.vn ↗
            </a>
          </div>

          {/* Tools */}
          <div>
            <h3 style={{ fontWeight: 700, fontSize: "0.95rem", marginBottom: 16, color: "var(--text)", textTransform: "uppercase", letterSpacing: "0.06em" }}>
              Tools
            </h3>
            <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
              {tools.map((t) => (
                <Link key={t.href} href={t.href} style={{
                  color: "var(--text-muted)",
                  textDecoration: "none",
                  fontSize: "0.95rem",
                  fontWeight: 500,
                  transition: "color 0.18s",
                }}>
                  {t.name}
                </Link>
              ))}
            </div>
          </div>

          {/* easy ecosystem */}
          <div>
            <h3 style={{ fontWeight: 700, fontSize: "0.95rem", marginBottom: 16, color: "var(--text)", textTransform: "uppercase", letterSpacing: "0.06em" }}>
              easy ecosystem
            </h3>
            <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
              {[
                { name: "easy.io.vn", href: "https://easy.io.vn", tag: "Hub" },
                { name: "game.easy", href: "https://game.easy.io.vn", tag: "Games" },
                { name: "tools.easy", href: "https://tools.easy.io.vn", tag: "Tools" },
              ].map((l) => (
                <a key={l.href} href={l.href} target="_blank" rel="noopener noreferrer" style={{
                  color: "var(--text-muted)",
                  textDecoration: "none",
                  fontSize: "0.95rem",
                  fontWeight: 500,
                  display: "flex",
                  alignItems: "center",
                  gap: 8,
                }}>
                  {l.name}
                  <span style={{
                    fontSize: "0.72rem",
                    background: "var(--bg)",
                    border: "1px solid var(--border)",
                    borderRadius: "4px",
                    padding: "2px 6px",
                    color: "var(--text-muted)",
                    fontWeight: 600,
                  }}>{l.tag}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Legal */}
          <div>
            <h3 style={{ fontWeight: 700, fontSize: "0.95rem", marginBottom: 16, color: "var(--text)", textTransform: "uppercase", letterSpacing: "0.06em" }}>
              Info
            </h3>
            <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
              {[
                { name: "About", href: "/about" },
                { name: "Privacy Policy", href: "/privacy" },
                { name: "Terms of Use", href: "/terms" },
              ].map((l) => (
                <Link key={l.href} href={l.href} style={{
                  color: "var(--text-muted)",
                  textDecoration: "none",
                  fontSize: "0.95rem",
                  fontWeight: 500,
                }}>
                  {l.name}
                </Link>
              ))}
            </div>
          </div>
        </div>

        <div style={{
          borderTop: "1px solid var(--border)",
          paddingTop: 24,
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: "wrap",
          gap: 14,
        }}>
          <p style={{ color: "var(--text-muted)", fontSize: "0.85rem" }}>
            © {new Date().getFullYear()} easy.io.vn — Dễ hơn mỗi ngày.
          </p>
          <p style={{ color: "var(--text-muted)", fontSize: "0.85rem" }}>
            random.easy is part of the{" "}
            <a href="https://easy.io.vn" target="_blank" rel="noopener noreferrer"
              style={{ color: "#8ab800", fontWeight: 700, textDecoration: "none" }}>
              easy
            </a>
            {" "}ecosystem
          </p>
        </div>
      </div>
    </footer>
  );
}

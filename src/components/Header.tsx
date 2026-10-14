"use client";
import Link from "next/link";
import { useState, useEffect } from "react";

/* Easy "e + smile" logo as inline SVG */
function EasyLogo({ size = 28 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 128 128" aria-label="easy logo" role="img">
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

export default function Header() {
  const [dark, setDark] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem("theme");
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    if (saved === "dark" || (!saved && prefersDark)) {
      setDark(true);
      document.documentElement.classList.add("dark");
    }
  }, []);

  const toggleTheme = () => {
    setDark((d) => {
      const next = !d;
      document.documentElement.classList.toggle("dark", next);
      localStorage.setItem("theme", next ? "dark" : "light");
      return next;
    });
  };

  return (
    <header style={{
      background: "var(--card-bg)",
      borderBottom: "1px solid var(--border)",
      position: "sticky",
      top: 0,
      zIndex: 50,
    }}>
      <div style={{
        maxWidth: 1200,
        margin: "0 auto",
        padding: "0 24px",
        height: 60,
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
      }}>
        {/* Logo */}
        <Link href="/" style={{ textDecoration: "none", display: "flex", alignItems: "center", gap: 10 }}>
          <EasyLogo size={32} />
          <div style={{ display: "flex", flexDirection: "column", lineHeight: 1 }}>
            <span style={{
              fontWeight: 800,
              fontSize: "0.95rem",
              color: "var(--text)",
              letterSpacing: "-0.02em",
            }}>
              Pick <span style={{ color: "#C7F43D", WebkitTextStroke: "1px #161713" }}>easy</span>
            </span>
            <span style={{ fontSize: "0.65rem", color: "var(--text-muted)", fontWeight: 500 }}>
              by easy.io.vn
            </span>
          </div>
        </Link>

        {/* Desktop nav */}
        <nav style={{ display: "flex", alignItems: "center", gap: 2 }} className="hidden-mobile">
          <Link href="/" className="nav-link">Home</Link>
          <Link href="/#tools" className="nav-link">Tools</Link>
          <Link href="/#categories" className="nav-link">Categories</Link>
          <a
            href="https://easy.io.vn"
            target="_blank"
            rel="noopener noreferrer"
            className="nav-link"
            style={{ display: "flex", alignItems: "center", gap: 6 }}
          >
            <span style={{
              background: "#C7F43D",
              color: "#161713",
              fontSize: "0.7rem",
              fontWeight: 800,
              padding: "2px 8px",
              borderRadius: "999px",
            }}>easy</span>
            ecosystem
          </a>
        </nav>

        {/* Actions */}
        <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
          <button
            onClick={toggleTheme}
            aria-label="Toggle theme"
            style={{
              width: 36, height: 36,
              borderRadius: "var(--radius-sm)",
              border: "1.5px solid var(--border)",
              background: "var(--bg-elevated)",
              cursor: "pointer",
              display: "flex", alignItems: "center", justifyContent: "center",
              fontSize: 16, transition: "all 0.18s",
              color: "var(--text)",
            }}
          >
            {dark ? "☀️" : "🌙"}
          </button>

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Menu"
            className="show-mobile"
            style={{
              width: 36, height: 36,
              borderRadius: "var(--radius-sm)",
              border: "1.5px solid var(--border)",
              background: "var(--bg-elevated)",
              cursor: "pointer",
              display: "none",
              alignItems: "center", justifyContent: "center",
              fontSize: 18,
              color: "var(--text)",
            }}
          >
            {menuOpen ? "✕" : "☰"}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div style={{
          background: "var(--card-bg)",
          borderTop: "1px solid var(--border)",
          padding: "12px 24px",
          display: "flex",
          flexDirection: "column",
          gap: 4,
        }}>
          <Link href="/" className="nav-link" onClick={() => setMenuOpen(false)}>Home</Link>
          <Link href="/#tools" className="nav-link" onClick={() => setMenuOpen(false)}>Tools</Link>
          <Link href="/#categories" className="nav-link" onClick={() => setMenuOpen(false)}>Categories</Link>
          <a href="https://easy.io.vn" target="_blank" rel="noopener noreferrer" className="nav-link">
            easy ecosystem ↗
          </a>
        </div>
      )}

      <style>{`
        @media (max-width: 768px) {
          .hidden-mobile { display: none !important; }
          .show-mobile   { display: flex !important; }
        }
      `}</style>
    </header>
  );
}

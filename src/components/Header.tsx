"use client";
import Link from "next/link";
import { useState, useEffect } from "react";

/* Easy "e + smile" logo as inline SVG */
function EasyLogo({ size = 36 }: { size?: number }) {
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

function IconSun() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="5" />
      <line x1="12" y1="1" x2="12" y2="3" />
      <line x1="12" y1="21" x2="12" y2="23" />
      <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
      <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
      <line x1="1" y1="12" x2="3" y2="12" />
      <line x1="21" y1="12" x2="23" y2="12" />
      <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
      <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
    </svg>
  );
}

function IconMoon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
    </svg>
  );
}

function IconMenu() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <line x1="3" y1="12" x2="21" y2="12" />
      <line x1="3" y1="6" x2="21" y2="6" />
      <line x1="3" y1="18" x2="21" y2="18" />
    </svg>
  );
}

function IconClose() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <line x1="18" y1="6" x2="6" y2="18" />
      <line x1="6" y1="6" x2="18" y2="18" />
    </svg>
  );
}

export default function Header() {
  const [dark, setDark] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem("theme");
    if (saved === "dark") {
      setDark(true);
      document.documentElement.classList.add("dark");
    }
    // Default is always light — no prefers-color-scheme auto
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
      backdropFilter: "blur(12px)",
    }}>
      <div style={{
        maxWidth: 1240,
        margin: "0 auto",
        padding: "0 24px",
        height: 68,
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
      }}>
        {/* Logo */}
        <Link href="/" style={{ textDecoration: "none", display: "flex", alignItems: "center", gap: 12 }}>
          <EasyLogo size={38} />
          <div style={{ display: "flex", flexDirection: "column", lineHeight: 1.1 }}>
            <span style={{
              fontWeight: 800,
              fontSize: "1.25rem",
              color: "var(--text)",
              letterSpacing: "-0.03em",
            }}>
              random<span style={{ color: "#8ab800", WebkitTextStroke: "0.5px currentColor" }}>.easy</span>
            </span>
            <span style={{ fontSize: "0.78rem", color: "var(--text-muted)", fontWeight: 500, letterSpacing: "-0.01em" }}>
              by easy.io.vn
            </span>
          </div>
        </Link>

        {/* Desktop nav */}
        <nav style={{ display: "flex", alignItems: "center", gap: 6 }} className="hidden-mobile">
          <Link href="/" className="nav-link">Home</Link>
          <Link href="/#tools" className="nav-link">Tools</Link>
          <Link href="/#categories" className="nav-link">Categories</Link>
          <a
            href="https://easy.io.vn"
            target="_blank"
            rel="noopener noreferrer"
            className="nav-link"
            style={{ display: "flex", alignItems: "center", gap: 8, marginLeft: 6 }}
          >
            <span style={{
              background: "#C7F43D",
              color: "#161713",
              fontSize: "0.75rem",
              fontWeight: 800,
              padding: "3px 10px",
              borderRadius: "999px",
            }}>easy</span>
            ecosystem ↗
          </a>
        </nav>

        {/* Actions */}
        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <button
            onClick={toggleTheme}
            aria-label="Toggle theme"
            title={dark ? "Switch to light mode" : "Switch to dark mode"}
            style={{
              width: 42, height: 42,
              borderRadius: "var(--radius-sm)",
              border: "1.5px solid var(--border)",
              background: "var(--bg)",
              cursor: "pointer",
              display: "flex", alignItems: "center", justifyContent: "center",
              transition: "all 0.18s",
              color: "var(--text)",
            }}
          >
            {dark ? <IconSun /> : <IconMoon />}
          </button>

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Menu"
            className="show-mobile"
            style={{
              width: 42, height: 42,
              borderRadius: "var(--radius-sm)",
              border: "1.5px solid var(--border)",
              background: "var(--bg)",
              cursor: "pointer",
              display: "none",
              alignItems: "center", justifyContent: "center",
              color: "var(--text)",
            }}
          >
            {menuOpen ? <IconClose /> : <IconMenu />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div style={{
          background: "var(--card-bg)",
          borderTop: "1px solid var(--border)",
          padding: "16px 24px",
          display: "flex",
          flexDirection: "column",
          gap: 8,
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

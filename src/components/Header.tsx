"use client";
import Link from "next/link";
import { useState, useEffect } from "react";

export default function Header() {
  const [dark, setDark] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem("theme");
    if (saved === "dark" || (!saved && window.matchMedia("(prefers-color-scheme: dark)").matches)) {
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
      backdropFilter: "blur(12px)",
    }}>
      <div style={{
        maxWidth: 1200,
        margin: "0 auto",
        padding: "0 24px",
        height: 64,
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
      }}>
        {/* Logo */}
        <Link href="/" style={{ textDecoration: "none", display: "flex", alignItems: "center", gap: 10 }}>
          <span style={{ fontSize: 28 }}>🎲</span>
          <span style={{ fontWeight: 800, fontSize: "1.1rem", color: "var(--text)" }}>
            Random<span style={{ color: "var(--primary)" }}>Hub</span>
          </span>
        </Link>

        {/* Desktop nav */}
        <nav style={{ display: "flex", alignItems: "center", gap: 4 }} className="hidden-mobile">
          <Link href="/" className="nav-link">Home</Link>
          <Link href="/#tools" className="nav-link">All Tools</Link>
          <Link href="/#categories" className="nav-link">Categories</Link>
        </nav>

        {/* Actions */}
        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <button
            onClick={toggleTheme}
            aria-label="Toggle theme"
            style={{
              width: 40, height: 40,
              borderRadius: 12,
              border: "1.5px solid var(--border)",
              background: "var(--bg)",
              cursor: "pointer",
              display: "flex", alignItems: "center", justifyContent: "center",
              fontSize: 18, transition: "all 0.2s",
              color: "var(--text)",
            }}
          >
            {dark ? "☀️" : "🌙"}
          </button>

          {/* Mobile menu button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Menu"
            className="show-mobile"
            style={{
              width: 40, height: 40,
              borderRadius: 12,
              border: "1.5px solid var(--border)",
              background: "var(--bg)",
              cursor: "pointer",
              display: "none",
              alignItems: "center", justifyContent: "center",
              fontSize: 20,
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
          padding: "16px 24px",
          display: "flex",
          flexDirection: "column",
          gap: 4,
        }}>
          <Link href="/" className="nav-link" onClick={() => setMenuOpen(false)}>Home</Link>
          <Link href="/#tools" className="nav-link" onClick={() => setMenuOpen(false)}>All Tools</Link>
          <Link href="/#categories" className="nav-link" onClick={() => setMenuOpen(false)}>Categories</Link>
        </div>
      )}

      <style>{`
        @media (max-width: 768px) {
          .hidden-mobile { display: none !important; }
          .show-mobile { display: flex !important; }
        }
      `}</style>
    </header>
  );
}

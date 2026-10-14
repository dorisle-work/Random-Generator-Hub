"use client";
import { useState } from "react";

export default function CoinFlipClient() {
  const [flipping, setFlipping] = useState(false);
  const [result, setResult] = useState<"heads" | "tails" | null>(null);
  const [stats, setStats] = useState({ heads: 0, tails: 0 });
  const [history, setHistory] = useState<("heads" | "tails")[]>([]);

  const flip = () => {
    if (flipping) return;
    setFlipping(true);
    setResult(null);

    setTimeout(() => {
      const outcome: "heads" | "tails" = Math.random() < 0.5 ? "heads" : "tails";
      setResult(outcome);
      setStats((s) => ({ ...s, [outcome]: s[outcome] + 1 }));
      setHistory((h) => [outcome, ...h].slice(0, 20));
      setFlipping(false);
    }, 1200);
  };

  const total = stats.heads + stats.tails;

  return (
    <div style={{ maxWidth: 560, margin: "0 auto" }}>
      {/* Coin display */}
      <div className="glass-card" style={{ padding: 48, textAlign: "center", marginBottom: 24 }}>
        {/* Coin */}
        <div
          style={{
            width: 160, height: 160,
            borderRadius: "50%",
            margin: "0 auto 32px",
            display: "flex", alignItems: "center", justifyContent: "center",
            fontSize: "4.5rem",
            position: "relative",
            cursor: "pointer",
            transition: "transform 0.1s",
            background: result === "heads"
              ? "radial-gradient(circle at 35% 35%, #FFCF70, #D97706)"
              : result === "tails"
              ? "radial-gradient(circle at 35% 35%, #C0C0C0, #9CA3AF)"
              : "radial-gradient(circle at 35% 35%, #FFCF70, #D97706)",
            boxShadow: "0 8px 32px rgba(0,0,0,0.2), inset 0 2px 8px rgba(255,255,255,0.3)",
            animation: flipping ? "coin-flip 1.2s cubic-bezier(0.4,0,0.2,1)" : "none",
          }}
          onClick={flip}
          role="button"
          aria-label="Flip coin"
        >
          <span style={{ filter: "drop-shadow(0 2px 4px rgba(0,0,0,0.2))", userSelect: "none" }}>
            {flipping ? "🪙" : result === "tails" ? "🌕" : "🪙"}
          </span>
        </div>

        {/* Result text */}
        <div style={{ minHeight: 80, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
          {flipping ? (
            <p style={{ color: "var(--text-muted)", fontSize: "1rem", fontWeight: 600 }}>Flipping...</p>
          ) : result ? (
            <div className="animate-bounce-in">
              <div style={{
                fontSize: "2.4rem", fontWeight: 900,
                color: result === "heads" ? "#D97706" : "#6B7280",
                marginBottom: 4,
                textTransform: "uppercase",
                letterSpacing: "0.05em",
              }}>
                {result === "heads" ? "HEADS! 🥇" : "TAILS! 🌕"}
              </div>
              <p style={{ color: "var(--text-muted)", fontSize: "0.9rem" }}>
                Click the coin or button to flip again
              </p>
            </div>
          ) : (
            <p style={{ color: "var(--text-muted)", fontSize: "1rem" }}>
              Click to flip the coin!
            </p>
          )}
        </div>

        <button
          id="coin-flip-button"
          onClick={flip}
          disabled={flipping}
          className="btn-primary"
          style={{ width: "100%", justifyContent: "center", fontSize: "1.1rem", padding: "16px" }}
        >
          {flipping ? "🪙 Flipping..." : "🪙 Flip Coin"}
        </button>
      </div>

      {/* Stats */}
      {total > 0 && (
        <div className="glass-card" style={{ padding: 24, marginBottom: 20 }}>
          <h3 style={{ fontWeight: 700, fontSize: "0.95rem", marginBottom: 16, color: "var(--text)" }}>
            📊 Flip Stats
          </h3>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16, marginBottom: 16 }}>
            {[
              { label: "🥇 Heads", count: stats.heads, color: "#D97706" },
              { label: "🌕 Tails", count: stats.tails, color: "#6B7280" },
            ].map((s) => (
              <div key={s.label} style={{
                textAlign: "center", padding: 16,
                background: `${s.color}12`,
                borderRadius: 14,
                border: `1.5px solid ${s.color}30`,
              }}>
                <div style={{ fontSize: "2rem", fontWeight: 800, color: s.color }}>{s.count}</div>
                <div style={{ fontSize: "0.85rem", fontWeight: 600, color: s.color, opacity: 0.8 }}>{s.label}</div>
                {total > 0 && (
                  <div style={{ fontSize: "0.75rem", color: "var(--text-muted)", marginTop: 4 }}>
                    {Math.round((s.count / total) * 100)}%
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Progress bar */}
          <div style={{ height: 8, background: "var(--border)", borderRadius: 4, overflow: "hidden" }}>
            <div style={{
              height: "100%",
              width: total ? `${(stats.heads / total) * 100}%` : "50%",
              background: "linear-gradient(90deg, #D97706, #FBBF24)",
              borderRadius: 4,
              transition: "width 0.4s ease",
            }} />
          </div>
          <div style={{ display: "flex", justifyContent: "space-between", marginTop: 4, fontSize: "0.75rem", color: "var(--text-muted)" }}>
            <span>Heads</span>
            <span>{total} total flips</span>
            <span>Tails</span>
          </div>
        </div>
      )}

      {/* History */}
      {history.length > 0 && (
        <div className="glass-card" style={{ padding: 20 }}>
          <h3 style={{ fontWeight: 700, fontSize: "0.9rem", marginBottom: 12, color: "var(--text)" }}>
            📋 Recent Flips
          </h3>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
            {history.map((h, i) => (
              <span key={i} style={{
                width: 32, height: 32,
                borderRadius: 8,
                display: "inline-flex", alignItems: "center", justifyContent: "center",
                fontSize: 14,
                background: h === "heads" ? "rgba(217,119,6,0.15)" : "rgba(107,114,128,0.15)",
                border: `1.5px solid ${h === "heads" ? "#D97706" : "#6B7280"}30`,
              }}>
                {h === "heads" ? "H" : "T"}
              </span>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

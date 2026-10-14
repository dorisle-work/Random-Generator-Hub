"use client";
import { useState } from "react";

const YES_VARIANTS = ["YES! ✅", "Absolutely! 🎯", "Go for it! 🚀", "Definitely! 💪", "Yes, do it! ⚡"];
const NO_VARIANTS = ["NO ❌", "Nope! 🚫", "Not this time! 😅", "Skip it! 🙅", "No way! 🛑"];
const MAYBE_VARIANTS = ["Maybe... 🤔", "Ask again! 🔄", "Unclear! 🌫️"];

export default function YesNoClient() {
  const [question, setQuestion] = useState("");
  const [result, setResult] = useState<{ text: string; type: "yes" | "no" | "maybe" } | null>(null);
  const [animating, setAnimating] = useState(false);
  const [count, setCount] = useState({ yes: 0, no: 0, maybe: 0 });

  const decide = () => {
    setAnimating(true);
    setResult(null);

    setTimeout(() => {
      const rand = Math.random();
      let type: "yes" | "no" | "maybe";
      let text: string;

      if (rand < 0.45) {
        type = "yes";
        text = YES_VARIANTS[Math.floor(Math.random() * YES_VARIANTS.length)];
      } else if (rand < 0.9) {
        type = "no";
        text = NO_VARIANTS[Math.floor(Math.random() * NO_VARIANTS.length)];
      } else {
        type = "maybe";
        text = MAYBE_VARIANTS[Math.floor(Math.random() * MAYBE_VARIANTS.length)];
      }

      setResult({ text, type });
      setCount((c) => ({ ...c, [type]: c[type] + 1 }));
      setAnimating(false);
    }, 600);
  };

  const colorMap = {
    yes: { bg: "rgba(16,185,129,0.12)", border: "#10B981", text: "#10B981" },
    no: { bg: "rgba(239,68,68,0.12)", border: "#EF4444", text: "#EF4444" },
    maybe: { bg: "rgba(245,158,11,0.12)", border: "#F59E0B", text: "#F59E0B" },
  };

  return (
    <div style={{ maxWidth: 600, margin: "0 auto" }}>
      {/* Question input */}
      <div className="glass-card" style={{ padding: 32, marginBottom: 24 }}>
        <label style={{ fontWeight: 700, fontSize: "0.95rem", color: "var(--text)", display: "block", marginBottom: 12 }}>
          🤔 What&apos;s your question?
        </label>
        <input
          id="yes-no-question"
          className="tool-input"
          placeholder="Should I go to the gym today?"
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && decide()}
          style={{ fontSize: "1rem", marginBottom: 20 }}
        />
        <button
          id="yes-no-button"
          onClick={decide}
          disabled={animating}
          className="btn-primary"
          style={{ width: "100%", justifyContent: "center", fontSize: "1.1rem", padding: "16px" }}
        >
          {animating ? "🤔 Thinking..." : "✨ Get Answer"}
        </button>
      </div>

      {/* Result */}
      {(result || animating) && (
        <div
          className="glass-card animate-bounce-in"
          style={{
            padding: 48,
            textAlign: "center",
            marginBottom: 24,
            border: result ? `2px solid ${colorMap[result.type].border}` : "2px solid var(--border)",
            background: result ? colorMap[result.type].bg : "var(--card-bg)",
          }}
        >
          {animating ? (
            <div style={{ fontSize: "4rem" }} className="animate-float">🎲</div>
          ) : result ? (
            <>
              <div style={{
                fontSize: "clamp(2rem, 8vw, 4rem)",
                fontWeight: 900,
                color: colorMap[result.type].text,
                lineHeight: 1.2,
                marginBottom: 12,
              }}>
                {result.text}
              </div>
              {question && (
                <p style={{ color: "var(--text-muted)", fontSize: "0.9rem", fontStyle: "italic" }}>
                  &ldquo;{question}&rdquo;
                </p>
              )}
              <button
                onClick={decide}
                className="btn-secondary"
                style={{ marginTop: 20 }}
              >
                Ask Again 🔄
              </button>
            </>
          ) : null}
        </div>
      )}

      {/* Stats */}
      {(count.yes + count.no + count.maybe) > 0 && (
        <div className="glass-card" style={{ padding: 20 }}>
          <h3 style={{ fontWeight: 700, fontSize: "0.9rem", marginBottom: 14, color: "var(--text)" }}>
            📊 Your Session Stats
          </h3>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 12 }}>
            {[
              { label: "YES", count: count.yes, color: "#10B981" },
              { label: "NO", count: count.no, color: "#EF4444" },
              { label: "MAYBE", count: count.maybe, color: "#F59E0B" },
            ].map((s) => (
              <div key={s.label} style={{
                textAlign: "center",
                padding: "12px 8px",
                background: `${s.color}12`,
                borderRadius: 12,
                border: `1.5px solid ${s.color}30`,
              }}>
                <div style={{ fontSize: "1.6rem", fontWeight: 800, color: s.color }}>{s.count}</div>
                <div style={{ fontSize: "0.75rem", fontWeight: 700, color: s.color, opacity: 0.8 }}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

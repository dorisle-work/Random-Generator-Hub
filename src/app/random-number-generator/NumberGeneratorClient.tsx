"use client";
import { useState } from "react";
import { randomInt, shuffle } from "@/lib/random";
import CopyResultButton from "@/components/CopyResultButton";
import { IconHash, IconHistory, IconPlay } from "@/components/Icons";

export default function NumberGeneratorClient() {
  const [min, setMin] = useState(1);
  const [max, setMax] = useState(100);
  const [count, setCount] = useState(1);
  const [allowDupes, setAllowDupes] = useState(true);
  const [results, setResults] = useState<number[]>([]);
  const [generating, setGenerating] = useState(false);
  const [history, setHistory] = useState<number[][]>([]);
  const [animatingResult, setAnimatingResult] = useState<number | null>(null);
  const rangeSize = max - min + 1;
  const hasValidRange = Number.isInteger(min) && Number.isInteger(max) && min < max && rangeSize <= 1_000_000;
  const canGenerate = hasValidRange && (allowDupes || count <= rangeSize);

  const generate = () => {
    if (generating) return;
    if (!canGenerate) return;

    setGenerating(true);
    setResults([]);

    // Animate
    let ticks = 0;
    const interval = setInterval(() => {
      const preview: number[] = [];
      for (let i = 0; i < Math.min(count, 5); i++) {
        preview.push(randomInt(min, max));
      }
      setAnimatingResult(preview[0]);
      ticks++;
      if (ticks >= 15) {
        clearInterval(interval);
        // Real generation
        const pool = Array.from({ length: rangeSize }, (_, i) => i + min);
        const picked: number[] = [];
        const shuffled = allowDupes ? pool : shuffle(pool);
        for (let i = 0; i < count; i++) {
          if (allowDupes) {
            picked.push(randomInt(min, max));
          } else {
            picked.push(shuffled[i]);
          }
        }
        setResults(picked.sort((a, b) => a - b));
        setAnimatingResult(null);
        setHistory((h) => [picked, ...h].slice(0, 5));
        setGenerating(false);
      }
    }, 50);
  };

  const isSingle = count === 1;
  const resetSession = () => {
    setResults([]);
    setHistory([]);
    setAnimatingResult(null);
  };

  return (
    <div style={{ maxWidth: 600, margin: "0 auto" }}>
      {/* Settings */}
      <div className="glass-card" style={{ padding: 28, marginBottom: 24 }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16, marginBottom: 16 }}>
          <div>
            <label style={{ fontSize: "0.85rem", fontWeight: 600, color: "var(--text-muted)", display: "block", marginBottom: 6 }}>
              Minimum
            </label>
            <input
              id="num-min"
              type="number"
              className="tool-input"
              value={min}
              onChange={(e) => setMin(Number(e.target.value))}
            />
          </div>
          <div>
            <label style={{ fontSize: "0.85rem", fontWeight: 600, color: "var(--text-muted)", display: "block", marginBottom: 6 }}>
              Maximum
            </label>
            <input
              id="num-max"
              type="number"
              className="tool-input"
              value={max}
              onChange={(e) => setMax(Number(e.target.value))}
            />
          </div>
        </div>

        <div style={{ marginBottom: 16 }}>
          <label style={{ fontSize: "0.85rem", fontWeight: 600, color: "var(--text-muted)", display: "block", marginBottom: 6 }}>
            How many numbers? <span style={{ color: "var(--primary)" }}>{count}</span>
          </label>
          <input
            id="num-count"
            type="range"
            min={1}
            max={20}
            value={count}
            onChange={(e) => setCount(Number(e.target.value))}
            style={{ width: "100%", accentColor: "var(--primary)" }}
          />
          <div style={{ display: "flex", justifyContent: "space-between", fontSize: "0.75rem", color: "var(--text-muted)", marginTop: 4 }}>
            <span>1</span><span>20</span>
          </div>
        </div>

        <label style={{ display: "flex", alignItems: "center", gap: 10, cursor: "pointer", fontSize: "0.88rem", color: "var(--text)", marginBottom: 20 }}>
          <input
            type="checkbox"
            checked={allowDupes}
            onChange={(e) => setAllowDupes(e.target.checked)}
            style={{ width: 16, height: 16, accentColor: "var(--primary)" }}
          />
          Allow duplicate numbers
        </label>

        <button
          id="generate-number-button"
          onClick={generate}
          disabled={generating || !canGenerate}
          className="btn-primary"
          style={{ width: "100%", justifyContent: "center", fontSize: "1.1rem", padding: "16px" }}
        >
          <span className="button-content"><IconPlay size={18} /> {generating ? "Generating…" : "Generate"}</span>
        </button>

        {!hasValidRange && (
          <p style={{ color: "#EF4444", fontSize: "0.82rem", marginTop: 8, textAlign: "center" }}>
            Use whole numbers with a range from 2 to 1,000,000 values.
          </p>
        )}
        {hasValidRange && !allowDupes && count > rangeSize && (
          <p style={{ color: "#EF4444", fontSize: "0.82rem", marginTop: 8, textAlign: "center" }}>
            Choose fewer results or allow duplicates.
          </p>
        )}
      </div>

      {/* Result display */}
      {(generating || results.length > 0) && (
        <div className="result-display animate-fade-in" style={{ marginBottom: 24, flexWrap: "wrap", gap: 12 }}>
          {generating ? (
            <div style={{
              fontSize: isSingle ? "5rem" : "3rem",
              fontWeight: 900,
              color: "var(--primary)",
              fontVariantNumeric: "tabular-nums",
              animation: "number-tick 0.08s ease infinite",
            }}>
              {animatingResult ?? "..."}
            </div>
          ) : (
            <>
              {results.map((n, i) => (
                <div
                  key={i}
                  className="animate-result"
                  style={{
                    fontSize: isSingle ? "5rem" : count <= 5 ? "3rem" : "2rem",
                    fontWeight: 900,
                    color: "var(--primary)",
                    padding: isSingle ? "0" : "8px 16px",
                    background: isSingle ? "transparent" : "rgba(99,91,255,0.1)",
                    borderRadius: 12,
                    lineHeight: 1,
                    animationDelay: `${i * 0.05}s`,
                  }}
                >
                  {n}
                </div>
              ))}
              <div className="result-actions">
                <CopyResultButton text={results.join(", ")} label="Copy numbers" style={{ padding: "8px 14px", fontSize: "0.8rem" }} />
                <button type="button" className="text-button" onClick={resetSession}>Clear session</button>
              </div>
            </>
          )}
        </div>
      )}

      {/* Quick presets */}
      <div className="glass-card" style={{ padding: 20, marginBottom: 20 }}>
        <h3 style={{ fontWeight: 700, fontSize: "0.88rem", marginBottom: 12, color: "var(--text)" }}>
          <span className="button-content"><IconHash size={17} /> Quick presets</span>
        </h3>
        <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
          {[
            { label: "1–6 (Dice)", min: 1, max: 6, count: 1 },
            { label: "1–10", min: 1, max: 10, count: 1 },
            { label: "1–100", min: 1, max: 100, count: 1 },
            { label: "Lottery (1–49, pick 6)", min: 1, max: 49, count: 6 },
            { label: "0–255 (Color)", min: 0, max: 255, count: 3 },
          ].map((p) => (
            <button
              key={p.label}
              className="chip"
              onClick={() => { setMin(p.min); setMax(p.max); setCount(p.count); setResults([]); }}
            >
              {p.label}
            </button>
          ))}
        </div>
      </div>

      {/* History */}
      {history.length > 0 && (
        <div className="glass-card" style={{ padding: 20 }}>
          <h3 style={{ fontWeight: 700, fontSize: "0.88rem", marginBottom: 10, color: "var(--text)" }}><span className="button-content"><IconHistory size={17} /> History</span></h3>
          {history.map((entry, i) => (
            <div key={i} className="history-item" style={{ marginBottom: 6 }}>
              <span style={{ color: "var(--primary)", fontWeight: 600, fontSize: "0.8rem" }}>#{i + 1}</span>
              <span>{entry.join(", ")}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

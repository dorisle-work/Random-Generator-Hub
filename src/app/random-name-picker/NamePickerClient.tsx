"use client";
import { useState } from "react";
import { pickRandom } from "@/lib/random";
import CopyResultButton from "@/components/CopyResultButton";
import { IconHistory, IconTarget, IconUser, IconX } from "@/components/Icons";

export default function NamePickerClient() {
  const [input, setInput] = useState("");
  const [names, setNames] = useState<string[]>(["Alice", "Bob", "Charlie", "David", "Emma"]);
  const [result, setResult] = useState<string | null>(null);
  const [picking, setPicking] = useState(false);
  const [history, setHistory] = useState<string[]>([]);
  const [removeAfterPick, setRemoveAfterPick] = useState(false);
  const [allowDupes, setAllowDupes] = useState(true);
  const [picked, setPicked] = useState<Set<string>>(new Set());

  const available = allowDupes ? names : names.filter((n) => !picked.has(n));

  const pick = () => {
    if (picking || available.length === 0) return;
    setPicking(true);
    setResult(null);

    // Animate through names rapidly
    let ticks = 0;
    const maxTicks = 18;
    const interval = setInterval(() => {
      const randomName = pickRandom(available);
      if (randomName) setResult(randomName);
      ticks++;
      if (ticks >= maxTicks) {
        clearInterval(interval);
        const winner = pickRandom(available);
        if (!winner) return;
        setResult(winner);
        setHistory((h) => [winner, ...h].slice(0, 10));
        if (removeAfterPick) {
          setNames((prev) => {
            const idx = prev.indexOf(winner);
            if (idx > -1) {
              const next = [...prev];
              next.splice(idx, 1);
              return next;
            }
            return prev;
          });
        }
        if (!allowDupes) {
          setPicked((p) => new Set([...p, winner]));
        }
        setPicking(false);
      }
    }, 60);
  };

  const addNames = () => {
    const trimmed = input.trim();
    if (!trimmed) return;
    const newNames = trimmed.split(/[\n,]+/).map((s) => s.trim()).filter(Boolean);
    setNames((prev) => [...new Set([...prev, ...newNames])]);
    setInput("");
  };

  const removeName = (idx: number) => {
    setNames((prev) => prev.filter((_, i) => i !== idx));
    setResult(null);
  };

  const reset = () => {
    setPicked(new Set());
    setResult(null);
  };

  return (
    <div style={{ display: "grid", gridTemplateColumns: "1fr 320px", gap: 24, alignItems: "start" }}
      className="name-grid">
      {/* Main area */}
      <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
        {/* Add names */}
        <div className="glass-card" style={{ padding: 24 }}>
          <h3 style={{ fontWeight: 700, fontSize: "0.95rem", marginBottom: 12, color: "var(--text)" }}>
            <span className="button-content"><IconUser size={18} /> Your names</span>
          </h3>
          <textarea
            id="name-input"
            className="tool-input"
            placeholder="Add names (one per line or comma-separated)&#10;Alice&#10;Bob&#10;Charlie"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            rows={4}
            style={{ resize: "vertical", marginBottom: 10 }}
          />
          <button onClick={addNames} className="btn-primary" style={{ width: "100%", justifyContent: "center" }}>
            Add names
          </button>
        </div>

        {/* Result */}
        <div className="result-display" style={{ minHeight: 160 }}>
          {picking ? (
            <div style={{
              fontSize: "2rem", fontWeight: 800, color: "var(--primary)",
              animation: "number-tick 0.1s ease infinite",
            }}>
              {result || "..."}
            </div>
          ) : result ? (
            <div className="animate-result" style={{ textAlign: "center" }}>
              <div style={{ fontSize: "0.85rem", color: "var(--text-muted)", marginBottom: 8 }}>Selected</div>
              <div style={{ fontSize: "2.4rem", fontWeight: 900, color: "var(--primary)", marginBottom: 16 }}>
                {result}
              </div>
              <button onClick={pick} disabled={available.length === 0} className="btn-primary" style={{ padding: "10px 24px" }}>
                Pick Again
              </button>
              <CopyResultButton text={result} label="Copy name" style={{ marginTop: 10, padding: "8px 16px", fontSize: "0.82rem" }} />
            </div>
          ) : (
            <p style={{ color: "var(--text-muted)", fontSize: "0.95rem" }}>
              {names.length === 0 ? "Add names above to get started" : "Press the button to pick a random name!"}
            </p>
          )}
        </div>

        <button
          id="pick-name-button"
          onClick={pick}
          disabled={picking || available.length === 0}
          className="btn-primary"
          style={{ justifyContent: "center", fontSize: "1.1rem", padding: "16px" }}
        >
          <span className="button-content"><IconTarget size={19} /> {picking ? "Picking…" : available.length === 0 ? "No more names" : "Pick random name"}</span>
        </button>

        {/* Settings */}
        <div className="glass-card" style={{ padding: 20 }}>
          <h3 style={{ fontWeight: 700, fontSize: "0.88rem", marginBottom: 12, color: "var(--text)" }}>Settings</h3>
          <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
            {[
              { label: "Remove name after picking", value: removeAfterPick, set: setRemoveAfterPick },
              { label: "Allow duplicate results", value: allowDupes, set: (v: boolean) => { setAllowDupes(v); reset(); } },
            ].map(({ label, value, set }) => (
              <label key={label} style={{ display: "flex", alignItems: "center", gap: 10, cursor: "pointer", fontSize: "0.88rem", color: "var(--text)" }}>
                <input
                  type="checkbox"
                  checked={value}
                  onChange={(e) => set(e.target.checked)}
                  style={{ width: 16, height: 16, accentColor: "var(--primary)", cursor: "pointer" }}
                />
                {label}
              </label>
            ))}
          </div>
          {!allowDupes && picked.size > 0 && (
            <button onClick={reset} className="btn-secondary" style={{ marginTop: 12, padding: "8px 16px", fontSize: "0.82rem" }}>
              Reset (picked {picked.size}/{names.length})
            </button>
          )}
          {history.length > 0 && (
            <button type="button" className="text-button" onClick={() => { setHistory([]); setResult(null); }} style={{ marginTop: 12 }}>
              Clear result history
            </button>
          )}
        </div>
      </div>

      {/* Sidebar */}
      <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
        {/* Names list */}
        <div className="glass-card" style={{ padding: 20 }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 12 }}>
            <h3 style={{ fontWeight: 700, fontSize: "0.88rem", color: "var(--text)" }}>
              List ({names.length})
            </h3>
            {names.length > 0 && (
              <button
                onClick={() => { setNames([]); setResult(null); setPicked(new Set()); }}
                style={{ background: "none", border: "none", color: "var(--text-muted)", cursor: "pointer", fontSize: "0.75rem" }}
              >
                Clear all
              </button>
            )}
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 5, maxHeight: 300, overflowY: "auto" }}>
            {names.map((name, i) => (
              <div key={i} style={{
                display: "flex", alignItems: "center", justifyContent: "space-between",
                padding: "8px 10px",
                background: picked.has(name) ? "rgba(99,91,255,0.05)" : "var(--bg)",
                borderRadius: 8,
                fontSize: "0.86rem",
                color: picked.has(name) ? "var(--text-muted)" : "var(--text)",
                textDecoration: picked.has(name) ? "line-through" : "none",
              }}>
                <span style={{ overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>{name}</span>
                <button
                  onClick={() => removeName(i)}
                  style={{ background: "none", border: "none", cursor: "pointer", color: "var(--text-muted)", fontSize: 12, flexShrink: 0, padding: "2px 4px" }}
                  aria-label={`Remove ${name}`}
                ><IconX size={15} /></button>
              </div>
            ))}
            {names.length === 0 && (
              <p style={{ color: "var(--text-muted)", fontSize: "0.82rem", textAlign: "center", padding: "20px 0" }}>
                No names yet
              </p>
            )}
          </div>
        </div>

        {/* History */}
        {history.length > 0 && (
          <div className="glass-card" style={{ padding: 20 }}>
            <h3 style={{ fontWeight: 700, fontSize: "0.88rem", marginBottom: 10, color: "var(--text)" }}><span className="button-content"><IconHistory size={17} /> History</span></h3>
            {history.map((h, i) => (
              <div key={i} className="history-item">
                <span style={{ color: "var(--primary)", fontWeight: 600, fontSize: "0.8rem" }}>#{i + 1}</span>
                <span>{h}</span>
              </div>
            ))}
          </div>
        )}
      </div>

      <style>{`
        @media (max-width: 768px) {
          .name-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </div>
  );
}

"use client";
import { useState, useRef, useEffect, useCallback } from "react";

const COLORS = [
  "#635BFF", "#EC4899", "#10B981", "#F59E0B",
  "#3B82F6", "#8B5CF6", "#EF4444", "#14B8A6",
  "#F97316", "#06B6D4", "#84CC16", "#E879F9",
];

interface WheelItem {
  id: string;
  label: string;
  color: string;
}

export default function SpinWheelClient() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [items, setItems] = useState<WheelItem[]>([
    { id: "1", label: "🍕 Pizza", color: COLORS[0] },
    { id: "2", label: "🍔 Burger", color: COLORS[1] },
    { id: "3", label: "🍣 Sushi", color: COLORS[2] },
    { id: "4", label: "🍜 Ramen", color: COLORS[3] },
    { id: "5", label: "🫕 Hotpot", color: COLORS[4] },
  ]);
  const [input, setInput] = useState("");
  const [spinning, setSpinning] = useState(false);
  const [result, setResult] = useState<string | null>(null);
  const [currentAngle, setCurrentAngle] = useState(0);
  const [history, setHistory] = useState<string[]>([]);
  const animRef = useRef<number>(0);
  const angleRef = useRef(0);

  const drawWheel = useCallback((angle: number) => {
    const canvas = canvasRef.current;
    if (!canvas || items.length === 0) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const cx = canvas.width / 2;
    const cy = canvas.height / 2;
    const r = cx - 8;
    const slice = (2 * Math.PI) / items.length;

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Outer ring shadow
    ctx.save();
    ctx.shadowColor = "rgba(99,91,255,0.3)";
    ctx.shadowBlur = 20;
    ctx.beginPath();
    ctx.arc(cx, cy, r + 4, 0, 2 * Math.PI);
    ctx.fillStyle = "rgba(99,91,255,0.1)";
    ctx.fill();
    ctx.restore();

    items.forEach((item, i) => {
      const startAngle = angle + i * slice;
      const endAngle = startAngle + slice;

      // Slice
      ctx.beginPath();
      ctx.moveTo(cx, cy);
      ctx.arc(cx, cy, r, startAngle, endAngle);
      ctx.closePath();
      ctx.fillStyle = item.color;
      ctx.fill();
      ctx.strokeStyle = "rgba(255,255,255,0.3)";
      ctx.lineWidth = 2;
      ctx.stroke();

      // Label
      ctx.save();
      ctx.translate(cx, cy);
      ctx.rotate(startAngle + slice / 2);
      ctx.textAlign = "right";
      ctx.fillStyle = "white";
      ctx.font = `bold ${Math.min(14, 200 / items.length)}px Plus Jakarta Sans, sans-serif`;
      ctx.shadowColor = "rgba(0,0,0,0.3)";
      ctx.shadowBlur = 4;
      const maxLen = 12;
      const label = item.label.length > maxLen ? item.label.slice(0, maxLen) + "…" : item.label;
      ctx.fillText(label, r - 12, 5);
      ctx.restore();
    });

    // Center circle
    ctx.beginPath();
    ctx.arc(cx, cy, 24, 0, 2 * Math.PI);
    ctx.fillStyle = "white";
    ctx.shadowColor = "rgba(0,0,0,0.2)";
    ctx.shadowBlur = 8;
    ctx.fill();
    ctx.strokeStyle = "rgba(99,91,255,0.3)";
    ctx.lineWidth = 3;
    ctx.stroke();

    ctx.font = "bold 14px sans-serif";
    ctx.fillStyle = "var(--primary, #635BFF)";
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.shadowBlur = 0;
    ctx.fillText("🎲", cx, cy);
  }, [items]);

  useEffect(() => {
    drawWheel(currentAngle);
  }, [items, currentAngle, drawWheel]);

  const spin = () => {
    if (spinning || items.length < 2) return;
    setSpinning(true);
    setResult(null);

    const totalRotation = 1440 + Math.random() * 1440; // 4-8 full spins
    const duration = 4000 + Math.random() * 2000;
    const startAngle = angleRef.current;
    const startTime = performance.now();

    const ease = (t: number) => 1 - Math.pow(1 - t, 4);

    const animate = (now: number) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = ease(progress);
      const angle = startAngle + totalRotation * eased * (Math.PI / 180);
      angleRef.current = angle;
      setCurrentAngle(angle);
      drawWheel(angle);

      if (progress < 1) {
        animRef.current = requestAnimationFrame(animate);
      } else {
        // Calculate winner
        const slice = (2 * Math.PI) / items.length;
        const normalized = ((angle % (2 * Math.PI)) + 2 * Math.PI) % (2 * Math.PI);
        const pointerAngle = (2 * Math.PI - normalized + Math.PI / 2) % (2 * Math.PI);
        const winnerIdx = Math.floor(pointerAngle / slice) % items.length;
        const winner = items[winnerIdx];
        setResult(winner.label);
        setHistory((h) => [winner.label, ...h].slice(0, 10));
        setSpinning(false);
      }
    };

    animRef.current = requestAnimationFrame(animate);
  };

  const addItem = () => {
    const trimmed = input.trim();
    if (!trimmed) return;
    const newItems = trimmed.split(",").map((s) => s.trim()).filter(Boolean).map((label, i) => ({
      id: Date.now() + "-" + i,
      label,
      color: COLORS[(items.length + i) % COLORS.length],
    }));
    setItems((prev) => [...prev, ...newItems]);
    setInput("");
  };

  const removeItem = (id: string) => {
    setItems((prev) => prev.filter((item) => item.id !== id));
    setResult(null);
  };

  const removeWinner = () => {
    if (result) {
      setItems((prev) => prev.filter((item) => item.label !== result));
      setResult(null);
    }
  };

  return (
    <div style={{ display: "grid", gridTemplateColumns: "1fr 340px", gap: 28, alignItems: "start" }}
      className="spin-grid">
      {/* Canvas */}
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 20 }}>
        <div style={{ position: "relative", display: "inline-block" }}>
          {/* Pointer */}
          <div style={{
            position: "absolute",
            top: "50%",
            right: -16,
            transform: "translateY(-50%)",
            width: 0, height: 0,
            borderTop: "16px solid transparent",
            borderBottom: "16px solid transparent",
            borderRight: "28px solid var(--primary)",
            filter: "drop-shadow(0 2px 6px rgba(99,91,255,0.5))",
            zIndex: 10,
          }} />
          <canvas
            ref={canvasRef}
            width={320}
            height={320}
            style={{
              borderRadius: "50%",
              boxShadow: "0 8px 40px rgba(0,0,0,0.15)",
              display: "block",
            }}
          />
        </div>

        <button
          id="spin-button"
          onClick={spin}
          disabled={spinning || items.length < 2}
          className="btn-primary"
          style={{ fontSize: "1.1rem", padding: "16px 48px", minWidth: 200 }}
        >
          {spinning ? "⏳ Spinning..." : "🎡 SPIN"}
        </button>

        {/* Result */}
        {result && (
          <div className="result-display animate-bounce-in" style={{ width: "100%", maxWidth: 360 }}>
            <div style={{ fontSize: "0.85rem", color: "var(--text-muted)", marginBottom: 8, fontWeight: 600 }}>
              🎉 Result
            </div>
            <div style={{ fontSize: "1.8rem", fontWeight: 800, color: "var(--primary)", marginBottom: 12 }}>
              {result}
            </div>
            <div style={{ display: "flex", gap: 10 }}>
              <button onClick={spin} className="btn-primary" style={{ padding: "10px 20px", fontSize: "0.9rem" }}>
                Spin Again
              </button>
              <button onClick={removeWinner} className="btn-secondary" style={{ padding: "10px 20px", fontSize: "0.9rem" }}>
                Remove & Spin
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Sidebar */}
      <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
        {/* Add items */}
        <div className="glass-card" style={{ padding: 20 }}>
          <h3 style={{ fontWeight: 700, fontSize: "0.95rem", marginBottom: 14, color: "var(--text)" }}>
            🎯 Your Choices
          </h3>
          <div style={{ display: "flex", gap: 8, marginBottom: 12 }}>
            <input
              id="wheel-input"
              className="tool-input"
              placeholder="Add choice..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && addItem()}
              style={{ flex: 1 }}
            />
            <button onClick={addItem} className="btn-primary" style={{ padding: "10px 16px" }}>
              Add
            </button>
          </div>
          <p style={{ fontSize: "0.75rem", color: "var(--text-muted)", marginBottom: 12 }}>
            Tip: separate multiple with commas
          </p>

          {/* Items list */}
          <div style={{ display: "flex", flexDirection: "column", gap: 6, maxHeight: 260, overflowY: "auto" }}>
            {items.map((item) => (
              <div key={item.id} style={{
                display: "flex", alignItems: "center", gap: 8,
                padding: "8px 12px",
                background: "var(--bg)",
                borderRadius: 10,
                fontSize: "0.88rem",
                color: "var(--text)",
              }}>
                <span style={{
                  width: 12, height: 12, borderRadius: 4, flexShrink: 0,
                  background: item.color,
                }} />
                <span style={{ flex: 1, overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>
                  {item.label}
                </span>
                <button
                  onClick={() => removeItem(item.id)}
                  style={{
                    background: "none", border: "none", cursor: "pointer",
                    color: "var(--text-muted)", fontSize: 14, padding: "2px 4px",
                    borderRadius: 4, transition: "color 0.2s",
                  }}
                  aria-label={`Remove ${item.label}`}
                >✕</button>
              </div>
            ))}
          </div>

          {items.length > 0 && (
            <button
              onClick={() => { setItems([]); setResult(null); }}
              style={{
                marginTop: 12, background: "none", border: "none",
                color: "var(--text-muted)", cursor: "pointer", fontSize: "0.8rem",
              }}
            >
              Clear all
            </button>
          )}
        </div>

        {/* History */}
        {history.length > 0 && (
          <div className="glass-card" style={{ padding: 20 }}>
            <h3 style={{ fontWeight: 700, fontSize: "0.95rem", marginBottom: 12, color: "var(--text)" }}>
              📋 History
            </h3>
            <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
              {history.slice(0, 5).map((h, i) => (
                <div key={i} className="history-item">
                  <span style={{ color: "var(--primary)", fontWeight: 600 }}>#{i + 1}</span>
                  <span>{h}</span>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      <style>{`
        @media (max-width: 768px) {
          .spin-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </div>
  );
}

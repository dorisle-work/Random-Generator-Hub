"use client";
import { useState, useRef, useEffect, useCallback } from "react";
import { randomInt } from "@/lib/random";
import { getSupabaseBrowserClient, isSupabaseConfigured } from "@/lib/supabase";
import { IconCloud, IconHistory, IconPlay, IconPlus, IconTarget, IconVolume, IconX } from "@/components/Icons";

const COLORS = [
  "#B8B5FF", "#9FD6FF", "#FFB8C5", "#B7EDCF",
  "#FFE28A", "#D8C0FA", "#BDE8DF", "#FFC6A5",
  "#F8B5E2", "#B9E3FF", "#D6E887", "#FFD1A8",
];

interface WheelItem {
  id: string;
  label: string;
  color: string;
}

const DEFAULT_ITEMS: WheelItem[] = [
  { id: "1", label: "Pizza", color: COLORS[0] },
  { id: "2", label: "Burger", color: COLORS[1] },
  { id: "3", label: "Sushi", color: COLORS[2] },
  { id: "4", label: "Ramen", color: COLORS[3] },
  { id: "5", label: "Hotpot", color: COLORS[4] },
];

function cleanLabel(label: string) {
  const withoutDecorativeEmoji = label.replace(/^[\p{Extended_Pictographic}\uFE0F\u200D\s]+/u, "").trim();
  return withoutDecorativeEmoji || label.trim();
}

function normalizeItems(items: WheelItem[]) {
  return items.map((item, index) => ({
    ...item,
    label: cleanLabel(item.label),
    color: COLORS[index % COLORS.length],
  }));
}

function loadItems() {
  if (typeof window === "undefined") return DEFAULT_ITEMS;
  try {
    const saved = window.localStorage.getItem("random-easy:wheel-items");
    const parsed = saved ? JSON.parse(saved) : null;
    return Array.isArray(parsed) && parsed.every((item) => typeof item?.label === "string")
      ? normalizeItems(parsed as WheelItem[])
      : DEFAULT_ITEMS;
  } catch {
    return DEFAULT_ITEMS;
  }
}

function isWheelItems(value: unknown): value is WheelItem[] {
  return Array.isArray(value) && value.length > 0 && value.every((item) => {
    if (!item || typeof item !== "object") return false;
    const candidate = item as Partial<WheelItem>;
    return typeof candidate.id === "string" && typeof candidate.label === "string" && typeof candidate.color === "string";
  });
}

function playSound(frequency: number, duration: number) {
  if (typeof window === "undefined") return;
  const AudioContextConstructor = window.AudioContext;
  if (!AudioContextConstructor) return;
  const context = new AudioContextConstructor();
  const oscillator = context.createOscillator();
  const gain = context.createGain();
  oscillator.type = "sine";
  oscillator.frequency.value = frequency;
  gain.gain.setValueAtTime(0.0001, context.currentTime);
  gain.gain.exponentialRampToValueAtTime(0.08, context.currentTime + 0.01);
  gain.gain.exponentialRampToValueAtTime(0.0001, context.currentTime + duration);
  oscillator.connect(gain).connect(context.destination);
  oscillator.start();
  oscillator.stop(context.currentTime + duration);
  oscillator.addEventListener("ended", () => void context.close());
}

export default function SpinWheelClient() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [items, setItems] = useState<WheelItem[]>(loadItems);
  const [input, setInput] = useState("");
  const [spinning, setSpinning] = useState(false);
  const [result, setResult] = useState<string | null>(null);
  const [currentAngle, setCurrentAngle] = useState(0);
  const [history, setHistory] = useState<string[]>([]);
  const [soundEnabled, setSoundEnabled] = useState(() => typeof window === "undefined" ? true : window.localStorage.getItem("random-easy:wheel-sound") !== "off");
  const [cloudMessage, setCloudMessage] = useState("");
  const [cloudBusy, setCloudBusy] = useState<"save" | "load" | "delete" | null>(null);
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
    ctx.shadowColor = "rgba(22,23,19,0.13)";
    ctx.shadowBlur = 24;
    ctx.beginPath();
    ctx.arc(cx, cy, r + 4, 0, 2 * Math.PI);
    ctx.fillStyle = "rgba(199,244,61,0.08)";
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
      ctx.strokeStyle = "rgba(250,250,247,0.58)";
      ctx.lineWidth = 1;
      ctx.stroke();

      // Label
      ctx.save();
      ctx.translate(cx, cy);
      ctx.rotate(startAngle + slice / 2);
      ctx.textAlign = "right";
      ctx.fillStyle = "#29313B";
      ctx.font = `600 ${Math.min(14, 200 / items.length)}px Plus Jakarta Sans, sans-serif`;
      ctx.shadowColor = "rgba(255,255,255,0.45)";
      ctx.shadowBlur = 1;
      const maxLen = 12;
      const label = item.label.length > maxLen ? item.label.slice(0, maxLen) + "…" : item.label;
      ctx.fillText(label, r - 12, 5);
      ctx.restore();
    });

    // Center circle
    ctx.save();
    ctx.beginPath();
    ctx.arc(cx, cy, 22, 0, 2 * Math.PI);
    ctx.fillStyle = "#FAFAF7";
    ctx.shadowColor = "rgba(22,23,19,0.16)";
    ctx.shadowBlur = 12;
    ctx.fill();
    ctx.strokeStyle = "rgba(22,23,19,0.18)";
    ctx.lineWidth = 1.5;
    ctx.stroke();

    ctx.strokeStyle = "#8675E8";
    ctx.lineWidth = 2;
    ctx.shadowBlur = 0;
    ctx.beginPath();
    ctx.arc(cx, cy, 8, 0, 2 * Math.PI);
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(cx - 12, cy); ctx.lineTo(cx - 8, cy);
    ctx.moveTo(cx + 8, cy); ctx.lineTo(cx + 12, cy);
    ctx.moveTo(cx, cy - 12); ctx.lineTo(cx, cy - 8);
    ctx.moveTo(cx, cy + 8); ctx.lineTo(cx, cy + 12);
    ctx.stroke();
    ctx.restore();
  }, [items]);

  useEffect(() => {
    drawWheel(currentAngle);
  }, [items, currentAngle, drawWheel]);

  useEffect(() => {
    window.localStorage.setItem("random-easy:wheel-items", JSON.stringify(items));
  }, [items]);

  useEffect(() => {
    window.localStorage.setItem("random-easy:wheel-sound", soundEnabled ? "on" : "off");
  }, [soundEnabled]);

  useEffect(() => () => cancelAnimationFrame(animRef.current), []);

  const spin = () => {
    if (spinning || items.length < 2) return;
    setSpinning(true);
    setResult(null);
    if (soundEnabled) playSound(360, 0.07);

    // Select the winning slice before the animation. The final rotation is then
    // calculated to land its centre under the pointer, so each list position
    // gets exactly one equally likely draw rather than relying on pixel/angle rounding.
    const winnerIndex = randomInt(0, items.length - 1);
    const slice = (2 * Math.PI) / items.length;
    const targetPointerAngle = winnerIndex * slice + slice / 2;
    const currentAngle = ((angleRef.current % (2 * Math.PI)) + 2 * Math.PI) % (2 * Math.PI);
    const targetAngle = ((Math.PI / 2 - targetPointerAngle) + 2 * Math.PI) % (2 * Math.PI);
    const remainingAngle = ((targetAngle - currentAngle) + 2 * Math.PI) % (2 * Math.PI);
    const totalRotation = remainingAngle + randomInt(4, 8) * 2 * Math.PI;
    const duration = randomInt(4000, 6000);
    const startAngle = angleRef.current;
    const startTime = performance.now();

    const ease = (t: number) => 1 - Math.pow(1 - t, 4);

    const animate = (now: number) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = ease(progress);
      const angle = startAngle + totalRotation * eased;
      angleRef.current = angle;
      setCurrentAngle(angle);
      drawWheel(angle);

      if (progress < 1) {
        animRef.current = requestAnimationFrame(animate);
      } else {
        // Calculate winner
        const normalized = ((angle % (2 * Math.PI)) + 2 * Math.PI) % (2 * Math.PI);
        const pointerAngle = (2 * Math.PI - normalized + Math.PI / 2) % (2 * Math.PI);
        const winnerIdx = Math.floor(pointerAngle / slice) % items.length;
        const winner = items[winnerIdx];
        setResult(winner.label);
        setHistory((h) => [winner.label, ...h].slice(0, 10));
        if (soundEnabled) {
          playSound(660, 0.12);
          window.setTimeout(() => playSound(880, 0.16), 95);
        }
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
      label: cleanLabel(label),
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

  const saveToCloud = async () => {
    if (cloudBusy) return;
    setCloudBusy("save");
    const client = getSupabaseBrowserClient();
    if (!client) {
      setCloudMessage("Add Supabase project keys to enable cloud sync.");
      setCloudBusy(null);
      return;
    }
    const { data: userData, error: userError } = await client.auth.getUser();
    if (userError || !userData.user) {
      setCloudMessage("Sign in with Google from the header before saving.");
      setCloudBusy(null);
      return;
    }
    const { error } = await client.from("saved_lists").upsert({
      user_id: userData.user.id,
      tool: "spin-the-wheel",
      name: "My wheel",
      payload: { items },
      updated_at: new Date().toISOString(),
    }, { onConflict: "user_id,tool,name" });
    setCloudMessage(error ? error.message : "Wheel saved to your cloud account.");
    setCloudBusy(null);
  };

  const loadFromCloud = async () => {
    if (cloudBusy) return;
    setCloudBusy("load");
    const client = getSupabaseBrowserClient();
    if (!client) {
      setCloudMessage("Add Supabase project keys to enable cloud sync.");
      setCloudBusy(null);
      return;
    }
    const { data: userData, error: userError } = await client.auth.getUser();
    if (userError || !userData.user) {
      setCloudMessage("Sign in with Google from the header before loading.");
      setCloudBusy(null);
      return;
    }
    const { data, error } = await client
      .from("saved_lists")
      .select("payload")
      .eq("user_id", userData.user.id)
      .eq("tool", "spin-the-wheel")
      .eq("name", "My wheel")
      .maybeSingle();

    if (error) {
      setCloudMessage(error.message);
      setCloudBusy(null);
      return;
    }
    const savedItems = data?.payload && typeof data.payload === "object"
      ? (data.payload as { items?: unknown }).items
      : undefined;
    if (!isWheelItems(savedItems)) {
      setCloudMessage("No saved wheel found in your cloud account yet.");
      setCloudBusy(null);
      return;
    }
    setItems(normalizeItems(savedItems));
    setResult(null);
    setHistory([]);
    setCloudMessage("Saved wheel loaded from your cloud account.");
    setCloudBusy(null);
  };

  const deleteCloudCopy = async () => {
    if (cloudBusy || !window.confirm("Delete the saved cloud copy of this wheel? This cannot be undone.")) return;
    setCloudBusy("delete");
    const client = getSupabaseBrowserClient();
    if (!client) {
      setCloudMessage("Add Supabase project keys to enable cloud sync.");
      setCloudBusy(null);
      return;
    }
    const { data: userData, error: userError } = await client.auth.getUser();
    if (userError || !userData.user) {
      setCloudMessage("Sign in with Google from the header before managing cloud data.");
      setCloudBusy(null);
      return;
    }
    const { error } = await client
      .from("saved_lists")
      .delete()
      .eq("user_id", userData.user.id)
      .eq("tool", "spin-the-wheel")
      .eq("name", "My wheel");
    setCloudMessage(error ? error.message : "Saved cloud copy deleted.");
    setCloudBusy(null);
  };

  return (
    <div style={{ display: "grid", gridTemplateColumns: "1fr 390px", gap: 28, alignItems: "start" }}
      className="spin-grid">
      {/* Canvas */}
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 24 }}>
        <div className="spin-canvas-wrap" style={{ position: "relative", display: "inline-block" }}>
          {/* Pointer */}
          <svg aria-hidden="true" style={{
            position: "absolute",
            top: "50%",
            right: -4,
            transform: "translateY(-50%)",
            width: 38, height: 42,
            filter: "drop-shadow(0 3px 5px rgba(22,23,19,0.16))",
            zIndex: 10,
          }} viewBox="0 0 38 42"><path d="M3 21 34 5v32Z" fill="#FF9AB2" stroke="#493D63" strokeWidth="1.25" /></svg>
          <canvas
            ref={canvasRef}
            width={430}
            height={430}
            className="spin-canvas"
            style={{ borderRadius: "50%", display: "block" }}
          />
        </div>

        <button
          id="spin-button"
          onClick={spin}
          disabled={spinning || items.length < 2}
          className="btn-primary spin-wheel-action"
          style={{ fontSize: "1rem", padding: "15px 34px", minWidth: 200 }}
        >
          <span className="button-content"><IconPlay size={19} /> {spinning ? "Spinning…" : "Spin wheel"}</span>
        </button>

        {/* Result */}
        {result && (
          <div className="result-display animate-result" style={{ width: "100%", maxWidth: 360 }}>
            <div style={{ fontSize: "0.85rem", color: "var(--text-muted)", marginBottom: 8, fontWeight: 600 }}>
              Result
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
      <div className="spin-sidebar" style={{ display: "flex", flexDirection: "column", gap: 16 }}>
        {/* Add items */}
        <div className="glass-card spin-panel" style={{ padding: 20 }}>
          <h3 className="spin-panel-title"><IconTarget size={18} /> Your choices</h3>
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
            <button onClick={addItem} className="btn-primary spin-add-button" style={{ padding: "10px 14px", minWidth: 48 }} aria-label="Add choices">
              <IconPlus size={19} />
            </button>
          </div>
          <p style={{ fontSize: "0.75rem", color: "var(--text-muted)", marginBottom: 12 }}>
            Tip: separate multiple with commas
          </p>

          {/* Items list */}
          <div className="wheel-list" style={{ display: "flex", flexDirection: "column", maxHeight: 260, overflowY: "auto" }}>
            {items.map((item) => (
              <div key={item.id} className="wheel-item" style={{
                display: "flex", alignItems: "center", gap: 8,
                padding: "8px 0",
                fontSize: "0.88rem",
                color: "var(--text)",
              }}>
                <span className="wheel-color-dot" style={{
                  background: item.color,
                }} />
                <span style={{ flex: 1, overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>
                  {item.label}
                </span>
                <button
                  onClick={() => removeItem(item.id)}
                  className="icon-button"
                  aria-label={`Remove ${item.label}`}
                ><IconX size={16} /></button>
              </div>
            ))}
          </div>

          {items.length > 0 && (
            <button
              onClick={() => { setItems([]); setResult(null); }}
              className="text-button"
              style={{ marginTop: 12 }}
            >
              Clear choices
            </button>
          )}
          <div className="spin-controls" style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 10, marginTop: 18, flexWrap: "wrap" }}>
            <label style={{ display: "inline-flex", alignItems: "center", gap: 8, color: "var(--text-muted)", fontSize: "0.8rem", cursor: "pointer" }}>
              <input type="checkbox" checked={soundEnabled} onChange={(event) => setSoundEnabled(event.target.checked)} />
              <IconVolume size={16} /> Sound
            </label>
            <div style={{ display: "flex", gap: 8 }}>
              <button type="button" onClick={loadFromCloud} disabled={cloudBusy !== null} className="btn-secondary" style={{ padding: "8px 12px", fontSize: "0.78rem" }}>
                <span className="button-content"><IconCloud size={15} /> {cloudBusy === "load" ? "Loading…" : "Load"}</span>
              </button>
              <button type="button" onClick={saveToCloud} disabled={cloudBusy !== null} className="btn-secondary" style={{ padding: "8px 12px", fontSize: "0.78rem" }}>
                <span className="button-content"><IconCloud size={15} /> {cloudBusy === "save" ? "Saving…" : isSupabaseConfigured() ? "Save" : "Setup"}</span>
              </button>
              <button type="button" onClick={deleteCloudCopy} disabled={cloudBusy !== null} className="icon-button" aria-label="Delete saved cloud copy" title="Delete saved cloud copy">
                <IconX size={16} />
              </button>
            </div>
          </div>
          {cloudMessage && <p role="status" style={{ marginTop: 10, color: "var(--text-muted)", fontSize: "0.75rem", lineHeight: 1.4 }}>{cloudMessage}</p>}
        </div>

        {/* History */}
        {history.length > 0 && (
          <div className="glass-card spin-panel" style={{ padding: 20 }}>
            <h3 className="spin-panel-title"><IconHistory size={17} /> Recent results</h3>
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

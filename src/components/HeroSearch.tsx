"use client";
import { IconSearch } from "@/components/Icons";

export default function HeroSearch() {
  const scrollToTools = () => {
    const el = document.getElementById("tools");
    el?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div style={{ position: "relative", maxWidth: 540, margin: "0 auto 28px" }}>
      <span style={{
        position: "absolute", left: 18, top: "50%", transform: "translateY(-50%)",
        display: "flex", alignItems: "center", color: "var(--text-muted)", pointerEvents: "none",
      }}>
        <IconSearch size={22} strokeWidth={2} />
      </span>
      <input
        type="search"
        placeholder="Search random tools (e.g. wheel, coin, numbers)..."
        aria-label="Search tools"
        className="tool-input"
        style={{
          paddingLeft: 52,
          paddingRight: 20,
          height: 56,
          fontSize: "1.0625rem",
          borderRadius: "var(--radius-pill)",
          cursor: "pointer",
          boxShadow: "0 4px 20px rgba(22,23,19,0.06)",
        }}
        readOnly
        onClick={scrollToTools}
      />
    </div>
  );
}

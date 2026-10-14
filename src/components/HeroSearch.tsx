"use client";
import { useRef } from "react";

export default function HeroSearch() {
  const toolsRef = useRef<HTMLElement | null>(null);

  const scrollToTools = () => {
    const el = document.getElementById("tools");
    el?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div style={{ position: "relative", maxWidth: 480, margin: "0 auto 24px" }}>
      <span style={{
        position: "absolute", left: 18, top: "50%", transform: "translateY(-50%)",
        fontSize: 18, color: "var(--text-muted)",
      }}>🔍</span>
      <input
        type="search"
        placeholder="Search random tools..."
        aria-label="Search tools"
        className="tool-input"
        style={{ paddingLeft: 48, height: 52, fontSize: "1rem", cursor: "pointer" }}
        readOnly
        onClick={scrollToTools}
      />
    </div>
  );
}

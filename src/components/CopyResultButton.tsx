"use client";

import { useState, type CSSProperties } from "react";

interface CopyResultButtonProps {
  text: string;
  label?: string;
  className?: string;
  style?: CSSProperties;
}

export default function CopyResultButton({
  text,
  label = "Copy result",
  className = "btn-secondary",
  style,
}: CopyResultButtonProps) {
  const [status, setStatus] = useState<"idle" | "copied" | "error">("idle");

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(text);
      setStatus("copied");
      window.setTimeout(() => setStatus("idle"), 1800);
    } catch {
      setStatus("error");
    }
  };

  return (
    <div style={{ display: "inline-grid", gap: 5, justifyItems: "start" }}>
      <button type="button" onClick={copy} className={className} style={style}>
        {status === "copied" ? "✓ Copied" : label}
      </button>
      {status === "error" && <span className="action-message" role="status">Couldn&apos;t copy. Select the result manually.</span>}
    </div>
  );
}

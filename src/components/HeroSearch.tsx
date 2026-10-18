"use client";
import { IconSearch } from "@/components/Icons";
import { FormEvent, useState } from "react";

export default function HeroSearch() {
  const [query, setQuery] = useState("");

  const submit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const normalizedQuery = query.trim().toLowerCase();
    const cards = Array.from(document.querySelectorAll<HTMLElement>("[data-tool-search]"));
    let matches = 0;
    cards.forEach((card) => {
      const isMatch = card.dataset.toolSearch?.includes(normalizedQuery) ?? false;
      card.hidden = !isMatch;
      if (isMatch) matches += 1;
    });
    const status = document.getElementById("tool-search-status");
    if (status) status.hidden = matches > 0;
    document.getElementById("tools")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <form onSubmit={submit} role="search" style={{ position: "relative", maxWidth: 540, margin: "0 auto 28px" }}>
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
        value={query}
        onChange={(event) => setQuery(event.target.value)}
        style={{
          paddingLeft: 52,
          paddingRight: 20,
          height: 56,
          fontSize: "1.0625rem",
          borderRadius: "var(--radius-pill)",
          boxShadow: "0 4px 20px rgba(22,23,19,0.06)",
        }}
      />
      <button type="submit" className="search-submit">Search</button>
    </form>
  );
}

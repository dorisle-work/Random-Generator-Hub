"use client";
import { useState } from "react";

const TEAM_COLORS = [
  { bg: "rgba(99,91,255,0.1)", border: "#635BFF", text: "#635BFF", emoji: "🔵" },
  { bg: "rgba(236,72,153,0.1)", border: "#EC4899", text: "#EC4899", emoji: "🔴" },
  { bg: "rgba(16,185,129,0.1)", border: "#10B981", text: "#10B981", emoji: "🟢" },
  { bg: "rgba(245,158,11,0.1)", border: "#F59E0B", text: "#F59E0B", emoji: "🟡" },
  { bg: "rgba(139,92,246,0.1)", border: "#8B5CF6", text: "#8B5CF6", emoji: "🟣" },
  { bg: "rgba(239,68,68,0.1)", border: "#EF4444", text: "#EF4444", emoji: "🟠" },
];

interface Team {
  name: string;
  members: string[];
  color: typeof TEAM_COLORS[0];
}

export default function TeamGeneratorClient() {
  const [input, setInput] = useState("Alice\nBob\nCharlie\nDavid\nEmma\nFrank");
  const [numTeams, setNumTeams] = useState(2);
  const [teams, setTeams] = useState<Team[]>([]);
  const [generating, setGenerating] = useState(false);

  const generate = () => {
    if (generating) return;
    const names = input.split(/[\n,]+/).map((s) => s.trim()).filter(Boolean);
    if (names.length < 2) return;

    setGenerating(true);
    setTeams([]);

    setTimeout(() => {
      // Fisher-Yates shuffle
      const shuffled = [...names];
      for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
      }

      const actualTeams = Math.min(numTeams, names.length);
      const result: Team[] = Array.from({ length: actualTeams }, (_, i) => ({
        name: `Team ${i + 1}`,
        members: [],
        color: TEAM_COLORS[i % TEAM_COLORS.length],
      }));

      shuffled.forEach((name, i) => {
        result[i % actualTeams].members.push(name);
      });

      setTeams(result);
      setGenerating(false);
    }, 600);
  };

  const copyTeams = () => {
    const text = teams
      .map((t) => `${t.name}: ${t.members.join(", ")}`)
      .join("\n");
    navigator.clipboard.writeText(text);
  };

  const names = input.split(/[\n,]+/).map((s) => s.trim()).filter(Boolean);
  const memberPerTeam = names.length > 0 ? Math.ceil(names.length / numTeams) : 0;

  return (
    <div>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 24, marginBottom: 24 }}
        className="team-grid">
        {/* Left: Input */}
        <div className="glass-card" style={{ padding: 24 }}>
          <h3 style={{ fontWeight: 700, fontSize: "0.95rem", marginBottom: 12, color: "var(--text)" }}>
            👤 Participants ({names.length})
          </h3>
          <textarea
            id="team-names-input"
            className="tool-input"
            placeholder="Enter names (one per line)&#10;Alice&#10;Bob&#10;Charlie"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            rows={10}
            style={{ resize: "vertical", marginBottom: 0 }}
          />
        </div>

        {/* Right: Settings */}
        <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
          <div className="glass-card" style={{ padding: 24 }}>
            <h3 style={{ fontWeight: 700, fontSize: "0.95rem", marginBottom: 16, color: "var(--text)" }}>
              ⚙️ Settings
            </h3>

            <label style={{ fontSize: "0.85rem", fontWeight: 600, color: "var(--text-muted)", display: "block", marginBottom: 8 }}>
              Number of teams: <span style={{ color: "var(--primary)", fontSize: "1rem" }}>{numTeams}</span>
            </label>
            <input
              id="team-count-slider"
              type="range" min={2} max={Math.max(2, Math.min(10, names.length))}
              value={numTeams}
              onChange={(e) => setNumTeams(Number(e.target.value))}
              style={{ width: "100%", accentColor: "var(--primary)", marginBottom: 8 }}
            />
            <div style={{ display: "flex", justifyContent: "space-between", fontSize: "0.75rem", color: "var(--text-muted)", marginBottom: 20 }}>
              <span>2</span><span>10</span>
            </div>

            {names.length > 0 && (
              <div style={{
                padding: "10px 14px",
                background: "rgba(99,91,255,0.08)",
                borderRadius: 10,
                fontSize: "0.82rem",
                color: "var(--text-muted)",
                marginBottom: 16,
              }}>
                ≈ {memberPerTeam} member{memberPerTeam !== 1 ? "s" : ""} per team
              </div>
            )}

            {/* Quick presets */}
            <div style={{ display: "flex", flexWrap: "wrap", gap: 6, marginBottom: 20 }}>
              {[2, 3, 4, 5].map((n) => (
                <button key={n} className={`chip ${numTeams === n ? "active" : ""}`}
                  onClick={() => setNumTeams(n)} style={{ fontSize: "0.8rem" }}>
                  {n} teams
                </button>
              ))}
            </div>

            <button
              id="generate-teams-button"
              onClick={generate}
              disabled={generating || names.length < 2}
              className="btn-primary"
              style={{ width: "100%", justifyContent: "center", padding: "14px" }}
            >
              {generating ? "🎲 Shuffling..." : "👥 Generate Teams"}
            </button>

            {names.length < 2 && (
              <p style={{ color: "#EF4444", fontSize: "0.8rem", marginTop: 8, textAlign: "center" }}>
                Add at least 2 participants
              </p>
            )}
          </div>
        </div>
      </div>

      {/* Results */}
      {(generating || teams.length > 0) && (
        <div>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 16 }}>
            <h3 style={{ fontWeight: 700, fontSize: "1.1rem", color: "var(--text)" }}>
              🎉 Teams
            </h3>
            {teams.length > 0 && (
              <div style={{ display: "flex", gap: 10 }}>
                <button onClick={copyTeams} className="btn-secondary" style={{ padding: "8px 16px", fontSize: "0.82rem" }}>
                  📋 Copy
                </button>
                <button onClick={generate} className="btn-primary" style={{ padding: "8px 16px", fontSize: "0.82rem" }}>
                  🔀 Reshuffle
                </button>
              </div>
            )}
          </div>

          {generating ? (
            <div style={{ textAlign: "center", padding: 40, color: "var(--text-muted)" }}>
              <div style={{ fontSize: "3rem", marginBottom: 12 }} className="animate-float">🎲</div>
              <p>Shuffling participants...</p>
            </div>
          ) : (
            <div style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))",
              gap: 16,
            }}>
              {teams.map((team, i) => (
                <div
                  key={i}
                  className="glass-card animate-fade-in-up"
                  style={{
                    padding: 20,
                    borderColor: team.color.border,
                    borderWidth: 2,
                    background: team.color.bg,
                    animationDelay: `${i * 0.08}s`,
                  }}
                >
                  <div style={{
                    display: "flex", alignItems: "center", gap: 8,
                    marginBottom: 14,
                  }}>
                    <span style={{ fontSize: 22 }}>{team.color.emoji}</span>
                    <h4 style={{ fontWeight: 800, color: team.color.text, fontSize: "1rem" }}>
                      {team.name}
                    </h4>
                    <span style={{
                      marginLeft: "auto",
                      fontSize: "0.75rem", fontWeight: 600,
                      color: team.color.text, opacity: 0.7,
                    }}>
                      {team.members.length} members
                    </span>
                  </div>
                  <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
                    {team.members.map((member, j) => (
                      <div key={j} style={{
                        padding: "7px 12px",
                        background: "var(--card-bg)",
                        borderRadius: 8,
                        fontSize: "0.88rem",
                        color: "var(--text)",
                        fontWeight: 500,
                        border: "1px solid var(--border)",
                      }}>
                        {member}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      )}

      <style>{`
        @media (max-width: 640px) {
          .team-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </div>
  );
}

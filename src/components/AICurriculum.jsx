import { useState } from "react";
import curriculum from "../data/curriculum";
import PhaseSection from "./PhaseSection";

export default function AICurriculum() {
  const [expandedLesson, setExpandedLesson] = useState(null);
  const [completed, setCompleted] = useState({});

  const totalLessons = curriculum.reduce((sum, p) => sum + p.lessons.length, 0);
  const completedCount = Object.values(completed).filter(Boolean).length;

  const toggleComplete = (id, e) => {
    e.stopPropagation();
    setCompleted(prev => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <div style={{ fontFamily: "var(--font-sans, system-ui)", maxWidth: 760, margin: "0 auto", padding: "0.5rem 0 3rem" }}>
      <div style={{ marginBottom: "2.5rem" }}>
        <h1 style={{ fontSize: 26, fontWeight: 500, margin: "0 0 6px", color: "var(--color-text-primary)" }}>
          AI for DevOps engineers
        </h1>
        <p style={{ fontSize: 15, color: "var(--color-text-secondary)", margin: "0 0 4px", lineHeight: 1.6 }}>
          Hey Alex — 15 self-paced lessons, each with a curated tutorial. Go at your own pace.
        </p>
        <p style={{ fontSize: 13, color: "var(--color-text-tertiary)", margin: "0 0 1.25rem" }}>
          From "what's a neural network?" to vibe-coding full apps and running AI on your desktop.
        </p>
        <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
          <div style={{ flex: 1, height: 6, background: "var(--color-background-tertiary)", borderRadius: 3, overflow: "hidden" }}>
            <div style={{ height: "100%", width: `${(completedCount / totalLessons) * 100}%`, background: "#0F6E56", borderRadius: 3, transition: "width 0.4s ease" }} />
          </div>
          <span style={{ fontSize: 13, color: "var(--color-text-secondary)", whiteSpace: "nowrap" }}>{completedCount}/{totalLessons} complete</span>
        </div>
      </div>

      {curriculum.map((phase, pi) => (
        <PhaseSection
          key={pi}
          phase={phase}
          phaseIndex={pi}
          expandedLesson={expandedLesson}
          setExpandedLesson={setExpandedLesson}
          completed={completed}
          toggleComplete={toggleComplete}
          totalLessons={totalLessons}
        />
      ))}

      <div style={{ textAlign: "center", padding: "2rem 1rem", color: "var(--color-text-secondary)", fontSize: 14, lineHeight: 1.6, borderTop: "0.5px solid var(--color-border-tertiary)" }}>
        Total estimated time: ~40–55 hours at your own pace.
        <br />By lesson 15, Alex will understand AI from neurons to production agents — and have the tools to build and ship AI-powered systems.
      </div>
    </div>
  );
}

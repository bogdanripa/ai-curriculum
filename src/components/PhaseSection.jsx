import LessonCard from "./LessonCard";

export default function PhaseSection({ phase, phaseIndex, expandedLesson, setExpandedLesson, completed, toggleComplete, totalLessons }) {
  return (
    <div style={{ marginBottom: "2.5rem" }}>
      <div style={{ marginBottom: "1rem" }}>
        <div style={{ display: "inline-block", fontSize: 11, fontWeight: 500, letterSpacing: "0.05em", color: phase.color.text, background: phase.color.bg, padding: "3px 10px", borderRadius: 8, marginBottom: 8 }}>
          PHASE {phaseIndex + 1}
        </div>
        <h2 style={{ fontSize: 19, fontWeight: 500, margin: "0 0 4px", color: "var(--color-text-primary)" }}>{phase.phase.replace(/Phase \d: /, "")}</h2>
        <p style={{ fontSize: 14, color: "var(--color-text-secondary)", margin: 0, lineHeight: 1.5 }}>{phase.description}</p>
      </div>

      <div style={{ display: "flex", flexDirection: "column" }}>
        {phase.lessons.map((lesson, li) => (
          <LessonCard
            key={lesson.id}
            lesson={lesson}
            phase={phase}
            isFirst={li === 0}
            isLast={li === phase.lessons.length - 1}
            isExpanded={expandedLesson === lesson.id}
            isDone={completed[lesson.id]}
            toggleComplete={toggleComplete}
            onToggleExpand={() => setExpandedLesson(expandedLesson === lesson.id ? null : lesson.id)}
            totalLessons={totalLessons}
            onNavigateNext={() => setExpandedLesson(lesson.id + 1)}
          />
        ))}
      </div>
    </div>
  );
}

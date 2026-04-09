import LessonDetail from "./LessonDetail";

export default function LessonCard({ lesson, phase, isFirst, isLast, isExpanded, isDone, toggleComplete, onToggleExpand, totalLessons, onNavigateNext }) {
  return (
    <div>
      <div
        onClick={onToggleExpand}
        style={{
          display: "flex", alignItems: "center", gap: 14, padding: "14px 16px",
          background: "var(--color-background-primary)",
          border: "0.5px solid var(--color-border-tertiary)",
          borderBottom: isLast && !isExpanded ? "0.5px solid var(--color-border-tertiary)" : isExpanded ? "0.5px solid var(--color-border-tertiary)" : "none",
          borderRadius: isExpanded ? "12px 12px 0 0" : isFirst ? "12px 12px 0 0" : isLast ? "0 0 12px 12px" : 0,
          cursor: "pointer", transition: "background 0.15s",
        }}
        onMouseEnter={e => e.currentTarget.style.background = "var(--color-background-secondary)"}
        onMouseLeave={e => e.currentTarget.style.background = "var(--color-background-primary)"}
      >
        <div onClick={(e) => toggleComplete(lesson.id, e)} style={{
          width: 28, height: 28, borderRadius: "50%", flexShrink: 0,
          border: isDone ? "none" : `2px solid ${phase.color.light}`,
          background: isDone ? phase.color.accent : "transparent",
          display: "flex", alignItems: "center", justifyContent: "center",
          color: "#fff", fontSize: 13, fontWeight: 500, cursor: "pointer", transition: "all 0.2s",
        }}>
          {isDone ? "\u2713" : <span style={{ color: phase.color.accent, fontSize: 12, fontWeight: 500 }}>{lesson.id}</span>}
        </div>
        <div style={{ flex: 1, minWidth: 0 }}>
          <div style={{ fontSize: 15, fontWeight: 500, color: "var(--color-text-primary)", textDecoration: isDone ? "line-through" : "none", opacity: isDone ? 0.5 : 1 }}>{lesson.title}</div>
          <div style={{ fontSize: 13, color: "var(--color-text-secondary)", marginTop: 2 }}>{lesson.subtitle}</div>
        </div>
        <div style={{ fontSize: 12, color: "var(--color-text-tertiary)", whiteSpace: "nowrap", flexShrink: 0 }}>{lesson.duration}</div>
        <div style={{ fontSize: 14, color: "var(--color-text-tertiary)", transition: "transform 0.2s", transform: isExpanded ? "rotate(180deg)" : "rotate(0deg)", flexShrink: 0 }}>{"\u25BE"}</div>
      </div>

      {isExpanded && (
        <LessonDetail
          lesson={lesson}
          phase={phase}
          isDone={isDone}
          toggleComplete={toggleComplete}
          totalLessons={totalLessons}
          onNavigateNext={onNavigateNext}
        />
      )}
    </div>
  );
}

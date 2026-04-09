export default function LessonDetail({ lesson, phase, isDone, toggleComplete, totalLessons, onNavigateNext }) {
  return (
    <div style={{ border: "0.5px solid var(--color-border-tertiary)", borderTop: "none", borderRadius: "0 0 12px 12px", padding: "20px 20px 24px", background: "var(--color-background-primary)", marginBottom: 6 }}>

      <div style={{ padding: "16px", borderRadius: 8, background: phase.color.bg, marginBottom: 16 }}>
        <div style={{ fontSize: 11, fontWeight: 500, color: phase.color.accent, marginBottom: 6, letterSpacing: "0.04em" }}>TUTORIAL</div>
        {lesson.tutorial.url ? (
          <a href={lesson.tutorial.url} target="_blank" rel="noopener noreferrer" style={{ fontSize: 15, fontWeight: 500, color: phase.color.text, textDecoration: "none", display: "block", marginBottom: 8, lineHeight: 1.4 }}>
            {lesson.tutorial.title} {"\u2197"}
          </a>
        ) : (
          <div style={{ fontSize: 15, fontWeight: 500, color: phase.color.text, marginBottom: 8, lineHeight: 1.4 }}>{lesson.tutorial.title}</div>
        )}
        <div style={{ fontSize: 14, lineHeight: 1.6, color: phase.color.text, opacity: 0.85 }}>{lesson.tutorial.description}</div>
      </div>

      {lesson.extras && lesson.extras.length > 0 && (
        <div style={{ marginBottom: 16 }}>
          <div style={{ fontSize: 11, fontWeight: 500, color: "var(--color-text-secondary)", marginBottom: 8, letterSpacing: "0.04em" }}>SUPPLEMENTARY RESOURCES</div>
          {lesson.extras.map((extra, i) => (
            <a key={i} href={extra.url} target="_blank" rel="noopener noreferrer" style={{
              display: "flex", alignItems: "center", gap: 8, padding: "8px 12px", marginBottom: 4,
              background: "var(--color-background-secondary)", borderRadius: 8,
              fontSize: 14, color: "var(--color-text-primary)", textDecoration: "none", lineHeight: 1.4,
            }}>
              <span style={{ color: phase.color.accent, flexShrink: 0, fontSize: 12 }}>{"\u2192"}</span>
              <span>{extra.label}</span>
              <span style={{ color: "var(--color-text-tertiary)", fontSize: 12, marginLeft: "auto", flexShrink: 0 }}>{"\u2197"}</span>
            </a>
          ))}
        </div>
      )}

      <div style={{ padding: "14px 16px", borderRadius: 8, border: "0.5px solid var(--color-border-tertiary)", marginBottom: 10 }}>
        <div style={{ fontSize: 11, fontWeight: 500, color: "var(--color-text-secondary)", marginBottom: 4, letterSpacing: "0.03em" }}>KEY TAKEAWAY</div>
        <div style={{ fontSize: 14, lineHeight: 1.6, color: "var(--color-text-primary)" }}>{lesson.keyTakeaway}</div>
      </div>

      <div style={{ padding: "14px 16px", borderRadius: 8, border: "0.5px solid var(--color-border-tertiary)" }}>
        <div style={{ fontSize: 11, fontWeight: 500, color: "var(--color-text-secondary)", marginBottom: 4, letterSpacing: "0.03em" }}>DEVOPS ANALOGY</div>
        <div style={{ fontSize: 14, lineHeight: 1.6, color: "var(--color-text-primary)", fontStyle: "italic" }}>{lesson.devopsAnalogy}</div>
      </div>

      <div style={{ display: "flex", gap: 10, marginTop: 16, flexWrap: "wrap" }}>
        <button onClick={(e) => toggleComplete(lesson.id, e)} style={{
          padding: "8px 20px", background: isDone ? "transparent" : phase.color.accent,
          color: isDone ? phase.color.accent : "#fff",
          border: isDone ? `1.5px solid ${phase.color.accent}` : "1.5px solid transparent",
          borderRadius: 8, fontSize: 14, fontWeight: 500, cursor: "pointer",
        }}>
          {isDone ? "Mark incomplete" : "Mark complete \u2713"}
        </button>
        {lesson.id < totalLessons && (
          <button onClick={(e) => { e.stopPropagation(); onNavigateNext(); }} style={{
            padding: "8px 20px", background: "transparent", color: "var(--color-text-secondary)",
            border: "0.5px solid var(--color-border-tertiary)", borderRadius: 8, fontSize: 14, cursor: "pointer",
          }}>
            Next lesson {"\u2192"}
          </button>
        )}
      </div>
    </div>
  );
}

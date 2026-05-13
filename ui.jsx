/* ============================================================
   UI primitives — Year 8 Atomic
   Exposes (via window): Glossary, Term, Button, Chip, Callout,
                          Tabs, Tab, Progress, QuizMC, BlurReveal, Icon
   ============================================================ */

const { useState, useEffect, useRef, useMemo, useCallback, createContext, useContext } = React;

/* ---------- Icons (small inline SVG set) ---------- */
function Icon({ name, size = 18, stroke = 1.6, ...rest }) {
  const s = { width: size, height: size, fill: "none", stroke: "currentColor", strokeWidth: stroke, strokeLinecap: "round", strokeLinejoin: "round", ...(rest.style || {}) };
  const props = { viewBox: "0 0 24 24", style: s, ...rest };
  switch (name) {
    case "play": return <svg {...props}><polygon points="6 4 20 12 6 20 6 4" fill="currentColor" stroke="none"/></svg>;
    case "pause": return <svg {...props}><rect x="6" y="5" width="4" height="14" fill="currentColor" stroke="none"/><rect x="14" y="5" width="4" height="14" fill="currentColor" stroke="none"/></svg>;
    case "stop": return <svg {...props}><rect x="6" y="6" width="12" height="12" fill="currentColor" stroke="none"/></svg>;
    case "check": return <svg {...props}><polyline points="20 6 9 17 4 12"/></svg>;
    case "x": return <svg {...props}><line x1="6" y1="6" x2="18" y2="18"/><line x1="6" y1="18" x2="18" y2="6"/></svg>;
    case "right": return <svg {...props}><polyline points="9 6 15 12 9 18"/></svg>;
    case "left": return <svg {...props}><polyline points="15 6 9 12 15 18"/></svg>;
    case "home": return <svg {...props}><path d="M3 12l9-9 9 9"/><path d="M5 10v10h14V10"/></svg>;
    case "speaker": return <svg {...props}><polygon points="3 9 7 9 12 5 12 19 7 15 3 15 3 9" fill="currentColor" stroke="none"/><path d="M16 8a5 5 0 010 8"/></svg>;
    case "speaker-off": return <svg {...props}><polygon points="3 9 7 9 12 5 12 19 7 15 3 15 3 9" fill="currentColor" stroke="none"/><line x1="15" y1="9" x2="21" y2="15"/><line x1="21" y1="9" x2="15" y2="15"/></svg>;
    case "text-size": return <svg {...props}><path d="M4 7h10"/><path d="M9 7v12"/><path d="M14 14h6"/><path d="M17 14v5"/></svg>;
    case "dyslexic": return <svg {...props}><circle cx="12" cy="12" r="9"/><path d="M8 12h8M12 8v8"/></svg>;
    case "simple": return <svg {...props}><path d="M3 6h18"/><path d="M3 12h12"/><path d="M3 18h18"/></svg>;
    case "atom": return <svg {...props}><circle cx="12" cy="12" r="1.5" fill="currentColor" stroke="none"/><ellipse cx="12" cy="12" rx="10" ry="4"/><ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(60 12 12)"/><ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(120 12 12)"/></svg>;
    case "trophy": return <svg {...props}><path d="M8 21h8M12 17v4"/><path d="M7 4h10v5a5 5 0 01-10 0V4z"/><path d="M17 6h3v2a3 3 0 01-3 3M7 6H4v2a3 3 0 003 3"/></svg>;
    case "sparkle": return <svg {...props}><path d="M12 3v6M12 15v6M3 12h6M15 12h6"/></svg>;
    case "info": return <svg {...props}><circle cx="12" cy="12" r="9"/><line x1="12" y1="8" x2="12" y2="8.01"/><line x1="12" y1="12" x2="12" y2="16"/></svg>;
    case "lock": return <svg {...props}><rect x="5" y="11" width="14" height="10" rx="2"/><path d="M8 11V7a4 4 0 018 0v4"/></svg>;
    case "reset": return <svg {...props}><path d="M3 12a9 9 0 109-9"/><polyline points="3 5 3 12 10 12"/></svg>;
    default: return null;
  }
}

/* ---------- Glossary context ---------- */
const GlossaryCtx = createContext({});

function GlossaryProvider({ children }) {
  return <GlossaryCtx.Provider value={window.AppData.GLOSSARY}>{children}</GlossaryCtx.Provider>;
}

function Term({ children, k }) {
  const glossary = useContext(GlossaryCtx);
  const key = k || (typeof children === "string" ? children.toLowerCase() : "");
  const def = glossary[key];
  if (!def) return <span>{children}</span>;
  return (
    <span className="term" tabIndex={0}>
      {children}
      <span className="term-pop" role="tooltip">
        <strong>{key}</strong> — {def}
      </span>
    </span>
  );
}

/* ---------- Button ---------- */
function Button({ variant = "default", size, icon, iconRight, children, className = "", ...rest }) {
  const cls = `btn ${variant === "primary" ? "btn-primary" : variant === "accent" ? "btn-accent" : variant === "ghost" ? "btn-ghost" : ""} ${size === "sm" ? "btn-sm" : ""} ${className}`;
  return (
    <button className={cls} {...rest}>
      {icon ? <Icon name={icon} /> : null}
      {children}
      {iconRight ? <Icon name={iconRight} /> : null}
    </button>
  );
}

/* ---------- Chip ---------- */
function Chip({ variant, children, ...rest }) {
  return <span className={`chip ${variant || ""}`} {...rest}>{children}</span>;
}

/* ---------- Callout ---------- */
function Callout({ kind = "tip", title, children }) {
  return (
    <div className={`callout ${kind}`}>
      {title ? <strong>{title}</strong> : null}
      {title ? <div style={{ marginTop: 4 }}>{children}</div> : children}
    </div>
  );
}

/* ---------- Tabs ---------- */
function Tabs({ items, active, onChange }) {
  return (
    <div className="tabs">
      {items.map(it => (
        <button key={it.id} className={`tab ${active === it.id ? "active" : ""}`} onClick={() => onChange(it.id)}>
          {it.label}
        </button>
      ))}
    </div>
  );
}

/* ---------- Progress bar ---------- */
function Progress({ value, max = 100 }) {
  const pct = Math.min(100, Math.max(0, (value / max) * 100));
  return <div className="progressbar"><div style={{ width: pct + "%" }}/></div>;
}

/* ---------- Multiple-choice quiz ---------- */
function QuizMC({ question, options, correctIndex, explain }) {
  const [picked, setPicked] = useState(null);
  return (
    <div className="quiz-q">
      <div className="stem">{question}</div>
      <div className="quiz-opts">
        {options.map((opt, i) => {
          const isPicked = picked === i;
          const isCorrect = picked !== null && i === correctIndex;
          const isWrong = picked === i && i !== correctIndex;
          return (
            <button
              key={i}
              className={`quiz-opt ${isPicked ? "selected" : ""} ${isCorrect ? "correct" : ""} ${isWrong ? "wrong" : ""}`}
              onClick={() => setPicked(i)}
              disabled={picked !== null && i !== correctIndex && i !== picked}
            >
              {opt}
            </button>
          );
        })}
      </div>
      {picked !== null && (
        <div className="quiz-explain">
          {picked === correctIndex ? "✓ Yep, that's right. " : "Not quite — the answer is highlighted in green. "}
          {explain}
          {picked !== correctIndex && (
            <div style={{ marginTop: 6 }}>
              <Button size="sm" variant="ghost" onClick={() => setPicked(null)}>Try again</Button>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

/* ---------- Blur/reveal — "predict before you peek" pattern ---------- */
function BlurReveal({ children, label = "Tap to reveal" }) {
  const [shown, setShown] = useState(false);
  return (
    <div
      className={`reveal-blur ${shown ? "shown" : ""}`}
      onClick={() => setShown(true)}
      role="button"
      tabIndex={0}
      title={shown ? "" : label}
      style={{ display: "inline-block", padding: "2px 6px", borderRadius: 6, background: shown ? "transparent" : "var(--bg-2)" }}
    >
      {children}
    </div>
  );
}

/* ============================================================
   UDL controls — TTS, plain language, text size, dyslexic font
   ============================================================ */

function useUDL() {
  const [textSize, setTextSize] = useState(() => parseFloat(localStorage.getItem("udl.textSize") || "1"));
  const [dyslexic, setDyslexic] = useState(() => localStorage.getItem("udl.dyslexic") === "1");
  const [plain, setPlain] = useState(() => localStorage.getItem("udl.plain") === "1");
  const [ttsOn, setTtsOn] = useState(false);

  useEffect(() => {
    document.documentElement.style.setProperty("--text-scale", textSize);
    localStorage.setItem("udl.textSize", String(textSize));
  }, [textSize]);
  useEffect(() => {
    document.documentElement.setAttribute("data-dyslexic", dyslexic ? "true" : "false");
    localStorage.setItem("udl.dyslexic", dyslexic ? "1" : "0");
  }, [dyslexic]);
  useEffect(() => {
    localStorage.setItem("udl.plain", plain ? "1" : "0");
  }, [plain]);

  return { textSize, setTextSize, dyslexic, setDyslexic, plain, setPlain, ttsOn, setTtsOn };
}

function UDLBar({ udl }) {
  const cycleSize = () => {
    const sizes = [1, 1.15, 1.3];
    const i = sizes.indexOf(udl.textSize);
    udl.setTextSize(sizes[(i + 1) % sizes.length]);
  };

  const readPage = () => {
    if (!("speechSynthesis" in window)) return;
    if (udl.ttsOn) {
      window.speechSynthesis.cancel();
      udl.setTtsOn(false);
      return;
    }
    const mainEl = document.querySelector(".main-inner");
    if (!mainEl) return;
    const text = mainEl.innerText.replace(/\s+/g, " ").trim();
    const utter = new SpeechSynthesisUtterance(text);
    utter.rate = 0.95;
    utter.pitch = 1;
    utter.onend = () => udl.setTtsOn(false);
    utter.onerror = () => udl.setTtsOn(false);
    window.speechSynthesis.cancel();
    window.speechSynthesis.speak(utter);
    udl.setTtsOn(true);
  };

  // Ensure TTS stops when navigating
  useEffect(() => {
    return () => { if ("speechSynthesis" in window) window.speechSynthesis.cancel(); };
  }, []);

  return (
    <div className="udl-controls" role="toolbar" aria-label="Accessibility controls">
      <button
        className={`udl-btn ${udl.ttsOn ? "on" : ""}`}
        title="Read aloud"
        onClick={readPage}
        aria-pressed={udl.ttsOn}
      >
        <Icon name={udl.ttsOn ? "speaker-off" : "speaker"} />
        <span>{udl.ttsOn ? "Stop" : "Read aloud"}</span>
      </button>
      <button
        className={`udl-btn ${udl.plain ? "on" : ""}`}
        title="Plain language mode"
        onClick={() => udl.setPlain(!udl.plain)}
        aria-pressed={udl.plain}
      >
        <Icon name="simple" />
        <span>Plain</span>
      </button>
      <button
        className={`udl-btn ${udl.textSize > 1 ? "on" : ""}`}
        title="Text size"
        onClick={cycleSize}
      >
        <Icon name="text-size" />
        <span>{udl.textSize === 1 ? "A" : udl.textSize === 1.15 ? "A+" : "A++"}</span>
      </button>
      <button
        className={`udl-btn ${udl.dyslexic ? "on" : ""}`}
        title="Dyslexia-friendly font"
        onClick={() => udl.setDyslexic(!udl.dyslexic)}
        aria-pressed={udl.dyslexic}
      >
        <Icon name="dyslexic" />
        <span>Dyslexic</span>
      </button>
    </div>
  );
}

/* ---------- PlainSwitch — show one of two strings based on plain-language toggle ---------- */
function P({ normal, plain, children, udl }) {
  // If used as <P udl={udl} normal="..." plain="..." /> — pick by state
  if (normal !== undefined || plain !== undefined) {
    return <span>{udl?.plain ? (plain || normal) : (normal || plain)}</span>;
  }
  return <span>{children}</span>;
}

/* ---------- Local persistent state ---------- */
function usePersisted(key, initial) {
  const [v, setV] = useState(() => {
    try { const raw = localStorage.getItem(key); return raw === null ? initial : JSON.parse(raw); }
    catch { return initial; }
  });
  useEffect(() => { try { localStorage.setItem(key, JSON.stringify(v)); } catch {} }, [key, v]);
  return [v, setV];
}

/* Export */
Object.assign(window, {
  Icon, Term, GlossaryProvider, Button, Chip, Callout, Tabs, Progress, QuizMC, BlurReveal,
  useUDL, UDLBar, P, usePersisted,
});

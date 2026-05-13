/* ============================================================
   App — navigation shell, routing, progress
   ============================================================ */

const { useState: a_useState, useEffect: a_useEffect, useMemo: a_useMemo, useRef: a_useRef } = React;

function App() {
  const udl = useUDL();
  const [view, setView] = a_useState({ kind: "home" }); // {kind: 'home'|'lesson'|'sidequest', id?}
  const [progress, setProgress] = usePersisted("y8.progress", {}); // lessonId -> true
  const [openUnits, setOpenUnits] = usePersisted("y8.openUnits", { u1: true, u2: true, u3: true, u4: true });

  const { LESSONS, UNITS, getLesson, getUnitLessons, SIDE_QUESTS } = window.AppData;

  const navigate = (next) => {
    setView(next);
    if ("speechSynthesis" in window) window.speechSynthesis.cancel();
    udl.setTtsOn(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const markComplete = (lessonId) => {
    setProgress({ ...progress, [lessonId]: true });
  };

  // Find prev/next for lesson nav
  const lessonIndex = (lid) => LESSONS.findIndex(l => l.id === lid);
  const navPrev = (lid) => {
    const i = lessonIndex(lid);
    return i > 0 ? LESSONS[i - 1] : null;
  };
  const navNext = (lid) => {
    const i = lessonIndex(lid);
    return i < LESSONS.length - 1 ? LESSONS[i + 1] : null;
  };

  const totalProgress = Object.keys(progress).filter(k => progress[k]).length;

  return (
    <GlossaryProvider>
      <div className="app">
        {/* Sidebar */}
        <aside className="sidebar">
          <div className="sidebar-brand" onClick={() => navigate({ kind: "home" })} role="button" style={{ cursor: "pointer" }}>
            <div className="logo"/>
            <div>
              <div className="sub">Year 8 · Science</div>
              <div className="title">Atomic Structure</div>
            </div>
          </div>

          <div className="nav-section">
            <button className={`nav-item ${view.kind === "home" ? "active" : ""}`} onClick={() => navigate({ kind: "home" })}>
              <Icon name="home" size={16} />
              <span className="label">Home</span>
            </button>
          </div>

          {UNITS.map(u => {
            const lessons = getUnitLessons(u.id);
            const isOpen = openUnits[u.id];
            const done = lessons.filter(l => progress[l.id]).length;
            return (
              <div key={u.id} className="nav-unit" data-unit={u.id}>
                <button className="nav-unit-head" onClick={() => setOpenUnits({ ...openUnits, [u.id]: !isOpen })}>
                  <div className="pill" />
                  <span style={{ flex: 1 }}>{u.title}</span>
                  <span className="chip" style={{ fontSize: "0.65rem", padding: "2px 6px" }}>{done}/{lessons.length}</span>
                </button>
                {isOpen && lessons.map(l => (
                  <button
                    key={l.id}
                    className={`nav-item ${view.kind === "lesson" && view.id === l.id ? "active" : ""} ${progress[l.id] ? "done" : ""}`}
                    onClick={() => navigate({ kind: "lesson", id: l.id })}
                    style={{ paddingLeft: 24 }}
                  >
                    <span className="dot"/>
                    <span className="num">{l.syllabus}</span>
                    <span className="label">{l.title}</span>
                  </button>
                ))}
              </div>
            );
          })}

          <div className="nav-section">
            <div className="nav-section-title">Side quests</div>
            {SIDE_QUESTS.map(q => (
              <button
                key={q.id}
                className={`nav-item ${view.kind === "sidequest" && view.id === q.id ? "active" : ""}`}
                onClick={() => navigate({ kind: "sidequest", id: q.id })}
              >
                <span style={{ width: 18, textAlign: "center" }}>{q.icon}</span>
                <span className="label">{q.title}</span>
              </button>
            ))}
          </div>

          <div style={{ marginTop: "auto", padding: "8px 4px", fontSize: "0.75rem", color: "var(--ink-muted)" }}>
            <div style={{ marginBottom: 6 }}>{totalProgress} / {LESSONS.length} lessons complete</div>
            <Progress value={totalProgress} max={LESSONS.length} />
          </div>
        </aside>

        {/* Main */}
        <main className="main">
          <div className="main-inner">
            <div className="topbar">
              <div className="crumb">
                <span onClick={() => navigate({ kind: "home" })} style={{ cursor: "pointer" }}>Home</span>
                {view.kind === "lesson" && (() => {
                  const l = getLesson(view.id);
                  const u = UNITS.find(u => u.id === l.unit);
                  return <>
                    <span className="sep">/</span>
                    <span>{u.num} {u.title}</span>
                    <span className="sep">/</span>
                    <span className="here">{l.title}</span>
                  </>;
                })()}
                {view.kind === "sidequest" && (() => {
                  const sq = SIDE_QUESTS.find(s => s.id === view.id);
                  return <>
                    <span className="sep">/</span>
                    <span>Side quest</span>
                    <span className="sep">/</span>
                    <span className="here">{sq.title}</span>
                  </>;
                })()}
              </div>
              <UDLBar udl={udl} />
            </div>

            {view.kind === "home" && <HomeView navigate={navigate} progress={progress} udl={udl} />}
            {view.kind === "lesson" && (() => {
              const lesson = getLesson(view.id);
              return <LessonView lesson={lesson} navigate={navigate} markComplete={markComplete} progress={progress} prev={navPrev(view.id)} next={navNext(view.id)} udl={udl} />;
            })()}
            {view.kind === "sidequest" && <SideQuestView id={view.id} udl={udl} />}
          </div>
        </main>
      </div>
    </GlossaryProvider>
  );
}

/* ------------------------------------------------------------
   Home view
------------------------------------------------------------ */
function HomeView({ navigate, progress, udl }) {
  const { UNITS, LESSONS, SIDE_QUESTS, getUnitLessons } = window.AppData;
  const totalDone = Object.keys(progress).filter(k => progress[k]).length;
  const firstIncomplete = LESSONS.find(l => !progress[l.id]) || LESSONS[0];

  // Atom decoration in hero — richer illustration with orbital trails, glow, and depth
  const heroAtom = (
    <svg viewBox="0 0 260 260" style={{ width: "100%", height: "100%", display: "block" }} aria-hidden="true">
      <defs>
        <radialGradient id="nucGrad" cx="35%" cy="35%" r="65%">
          <stop offset="0%" stopColor="oklch(0.92 0.14 60)" />
          <stop offset="40%" stopColor="oklch(0.7 0.2 45)" />
          <stop offset="100%" stopColor="oklch(0.42 0.18 30)" />
        </radialGradient>
        <radialGradient id="nucGlow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="oklch(0.85 0.18 50 / 0.45)" />
          <stop offset="50%" stopColor="oklch(0.85 0.18 50 / 0.12)" />
          <stop offset="100%" stopColor="oklch(0.85 0.18 50 / 0)" />
        </radialGradient>
        <linearGradient id="orbit1" x1="0" x2="1" y1="0" y2="0">
          <stop offset="0%" stopColor="oklch(0.55 0.16 30 / 0)" />
          <stop offset="20%" stopColor="oklch(0.55 0.16 30 / 0.85)" />
          <stop offset="60%" stopColor="oklch(0.55 0.16 30 / 0.5)" />
          <stop offset="100%" stopColor="oklch(0.55 0.16 30 / 0)" />
        </linearGradient>
        <linearGradient id="orbit2" x1="0" x2="1" y1="0" y2="0">
          <stop offset="0%" stopColor="oklch(0.5 0.16 220 / 0)" />
          <stop offset="20%" stopColor="oklch(0.5 0.16 220 / 0.8)" />
          <stop offset="60%" stopColor="oklch(0.5 0.16 220 / 0.45)" />
          <stop offset="100%" stopColor="oklch(0.5 0.16 220 / 0)" />
        </linearGradient>
        <linearGradient id="orbit3" x1="0" x2="1" y1="0" y2="0">
          <stop offset="0%" stopColor="oklch(0.55 0.16 290 / 0)" />
          <stop offset="25%" stopColor="oklch(0.55 0.16 290 / 0.75)" />
          <stop offset="65%" stopColor="oklch(0.55 0.16 290 / 0.4)" />
          <stop offset="100%" stopColor="oklch(0.55 0.16 290 / 0)" />
        </linearGradient>
        <radialGradient id="electronGrad" cx="35%" cy="35%" r="65%">
          <stop offset="0%" stopColor="oklch(0.92 0.12 230)" />
          <stop offset="60%" stopColor="oklch(0.55 0.18 230)" />
          <stop offset="100%" stopColor="oklch(0.35 0.18 230)" />
        </radialGradient>

        <style>{`
          .orbit-spin-1 { animation: orbit-spin 14s linear infinite; transform-origin: 130px 130px; }
          .orbit-spin-2 { animation: orbit-spin 22s linear infinite reverse; transform-origin: 130px 130px; }
          .orbit-spin-3 { animation: orbit-spin 32s linear infinite; transform-origin: 130px 130px; }
          .pulse { animation: pulse 4s ease-in-out infinite; transform-origin: 130px 130px; }
          .twinkle { animation: twinkle 3.5s ease-in-out infinite; }
          .twinkle-b { animation: twinkle 4.5s ease-in-out infinite; animation-delay: -1.2s; }
          .twinkle-c { animation: twinkle 5s ease-in-out infinite; animation-delay: -2.6s; }
          @keyframes orbit-spin { to { transform: rotate(360deg); } }
          @keyframes pulse {
            0%, 100% { transform: scale(1); opacity: 0.95; }
            50% { transform: scale(1.06); opacity: 1; }
          }
          @keyframes twinkle {
            0%, 100% { opacity: 0.25; transform: scale(0.8); }
            50% { opacity: 1; transform: scale(1.1); }
          }
        `}</style>
      </defs>

      {/* faint outer ring */}
      <circle cx="130" cy="130" r="118" fill="none" stroke="oklch(0.55 0.05 60 / 0.18)" strokeWidth="0.8" strokeDasharray="2 5" />

      {/* nucleus glow */}
      <circle cx="130" cy="130" r="60" fill="url(#nucGlow)" className="pulse" />

      {/* orbit 1 — horizontal-ish */}
      <g className="orbit-spin-1">
        <ellipse cx="130" cy="130" rx="105" ry="34" fill="none" stroke="url(#orbit1)" strokeWidth="1.6" />
        <g transform="translate(235, 130)">
          <circle r="7" fill="url(#electronGrad)" />
          <circle r="3" fill="oklch(0.95 0.05 230 / 0.9)" cx="-1.5" cy="-1.5" />
        </g>
      </g>

      {/* orbit 2 — rotated */}
      <g className="orbit-spin-2" style={{ transform: "rotate(60deg)", transformOrigin: "130px 130px" }}>
        <g className="orbit-spin-2">
          <ellipse cx="130" cy="130" rx="105" ry="34" fill="none" stroke="url(#orbit2)" strokeWidth="1.6" />
          <g transform="translate(235, 130)">
            <circle r="6" fill="url(#electronGrad)" />
            <circle r="2.5" fill="oklch(0.95 0.05 230 / 0.9)" cx="-1.5" cy="-1.5" />
          </g>
        </g>
      </g>

      {/* orbit 3 — another rotation */}
      <g style={{ transform: "rotate(120deg)", transformOrigin: "130px 130px" }}>
        <g className="orbit-spin-3">
          <ellipse cx="130" cy="130" rx="105" ry="34" fill="none" stroke="url(#orbit3)" strokeWidth="1.6" />
          <g transform="translate(25, 130)">
            <circle r="6.5" fill="url(#electronGrad)" />
            <circle r="2.5" fill="oklch(0.95 0.05 230 / 0.9)" cx="-1.5" cy="-1.5" />
          </g>
        </g>
      </g>

      {/* nucleus — cluster of protons + neutrons */}
      <g className="pulse">
        <circle cx="130" cy="130" r="22" fill="url(#nucGrad)" />
        {/* individual nucleons */}
        <circle cx="124" cy="124" r="7" fill="oklch(0.72 0.2 30)" opacity="0.9" />
        <circle cx="136" cy="124" r="7" fill="oklch(0.55 0.02 250)" opacity="0.8" />
        <circle cx="124" cy="136" r="7" fill="oklch(0.55 0.02 250)" opacity="0.85" />
        <circle cx="136" cy="136" r="7" fill="oklch(0.72 0.2 30)" opacity="0.9" />
        <circle cx="130" cy="118" r="6" fill="oklch(0.72 0.2 30)" opacity="0.85" />
        <circle cx="130" cy="142" r="6" fill="oklch(0.55 0.02 250)" opacity="0.85" />
        {/* highlight */}
        <ellipse cx="122" cy="122" rx="8" ry="5" fill="oklch(0.98 0.02 60 / 0.4)" transform="rotate(-30 122 122)" />
      </g>

      {/* sparkles */}
      <g className="twinkle">
        <path d="M 215 50 L 218 56 L 224 59 L 218 62 L 215 68 L 212 62 L 206 59 L 212 56 Z" fill="oklch(0.8 0.16 60 / 0.7)" />
      </g>
      <g className="twinkle-b">
        <path d="M 45 200 L 47 204 L 51 206 L 47 208 L 45 212 L 43 208 L 39 206 L 43 204 Z" fill="oklch(0.65 0.16 290 / 0.65)" />
      </g>
      <g className="twinkle-c">
        <circle cx="50" cy="60" r="2.5" fill="oklch(0.6 0.16 220 / 0.7)" />
      </g>
      <g className="twinkle">
        <circle cx="220" cy="210" r="2" fill="oklch(0.6 0.16 145 / 0.7)" />
      </g>
    </svg>
  );

  return (
    <>
      <section className="hero">
        <div className="eyebrow">Year 8 · Term 2 · Chemistry</div>
        <h1>The world is made of just <em style={{ fontStyle: "normal", color: "var(--c-orange-deep)" }}>118 things</em>.</h1>
        <p className="lead">Welcome to atomic structure and the periodic table. Eighteen lessons, eight simulations, a memory game, scientist trading cards, and a daily element — covering syllabus points <strong>6.1.1 to 6.4.1</strong>.</p>
        <div className="hero-cta">
          <Button variant="accent" iconRight="right" onClick={() => navigate({ kind: "lesson", id: firstIncomplete.id })}>
            {totalDone === 0 ? "Start lesson 6.1.1" : totalDone === LESSONS.length ? "All done — review" : `Continue: ${firstIncomplete.title}`}
          </Button>
          <Button variant="ghost" onClick={() => navigate({ kind: "sidequest", id: "sq-eotd" })}>Today's element →</Button>
        </div>
        <div style={{ position: "absolute", right: 24, top: 24, width: 220, height: 220 }}>{heroAtom}</div>
      </section>

      <h2 style={{ margin: "0 0 14px" }}>The four units</h2>
      <div className="units-grid">
        {UNITS.map(u => {
          const lessons = getUnitLessons(u.id);
          const done = lessons.filter(l => progress[l.id]).length;
          return (
            <button key={u.id} className="unit-card" data-unit={u.id} onClick={() => navigate({ kind: "lesson", id: lessons[0].id })}>
              <div className="stripe" />
              <div className="unit-num">{u.num}</div>
              <h3>{u.title}</h3>
              <div className="unit-blurb">{u.blurb}</div>
              <div className="unit-meta">
                <Chip variant={done === lessons.length ? "ok" : done > 0 ? "info" : ""}>{done}/{lessons.length} lessons</Chip>
                <span className="spacer" />
                <span>Start →</span>
              </div>
            </button>
          );
        })}
      </div>

      <h2 style={{ margin: "0 0 14px" }}>Side quests</h2>
      <div className="quests-row" style={{ gridTemplateColumns: "repeat(3, 1fr)" }}>
        {SIDE_QUESTS.slice(0, 3).map(q => (
          <button key={q.id} className="quest-card" onClick={() => navigate({ kind: "sidequest", id: q.id })}>
            <div className="qicon">{q.icon}</div>
            <h4>{q.title}</h4>
            <div className="qsub">{q.sub}</div>
          </button>
        ))}
      </div>
      <div className="quests-row" style={{ gridTemplateColumns: "repeat(2, 1fr)" }}>
        {SIDE_QUESTS.slice(3).map(q => (
          <button key={q.id} className="quest-card" onClick={() => navigate({ kind: "sidequest", id: q.id })}>
            <div className="qicon">{q.icon}</div>
            <h4>{q.title}</h4>
            <div className="qsub">{q.sub}</div>
          </button>
        ))}
      </div>

      <Callout kind="tip" title="Make it work for you">
        Top-right of every page has controls for <strong>read-aloud</strong>, <strong>plain language</strong>, <strong>text size</strong>, and a <strong>dyslexia-friendly font</strong>. <em>Underlined words</em> show definitions on hover. Every quiz lets you retry without penalty.
      </Callout>
    </>
  );
}

/* ------------------------------------------------------------
   Lesson view
------------------------------------------------------------ */
function LessonView({ lesson, navigate, markComplete, progress, prev, next, udl }) {
  const { UNITS } = window.AppData;
  const unit = UNITS.find(u => u.id === lesson.unit);
  const isDone = !!progress[lesson.id];

  const Body = window["Lesson" + lesson.syllabus.replace(/\./g, "")];

  return (
    <article className="lesson">
      <div className="lesson-header">
        <div className="eyebrow">{unit.num} {unit.title} · {lesson.syllabus}</div>
        <h2>{lesson.title}</h2>
        <div className="lead">{lesson.summary}</div>
      </div>

      <SectionBanner unitId={lesson.unit} />

      {Body ? <Body udl={udl} /> : <p>Lesson coming soon.</p>}

      <div className="lesson-nav">
        <div>
          {prev ? (
            <Button icon="left" variant="ghost" onClick={() => navigate({ kind: "lesson", id: prev.id })}>
              {prev.syllabus} · {prev.title}
            </Button>
          ) : <span/>}
        </div>
        <div style={{ display: "flex", gap: 8 }}>
          {!isDone ? (
            <Button variant="primary" icon="check" onClick={() => markComplete(lesson.id)}>Mark complete</Button>
          ) : (
            <span className="badge-ribbon"><Icon name="trophy" size={14} /> Lesson complete</span>
          )}
          {next && (
            <Button variant="accent" iconRight="right" onClick={() => navigate({ kind: "lesson", id: next.id })}>
              {next.syllabus} · {next.title}
            </Button>
          )}
        </div>
      </div>
    </article>
  );
}

/* ------------------------------------------------------------
   Side quest view
------------------------------------------------------------ */
function SideQuestView({ id, udl }) {
  const { SIDE_QUESTS } = window.AppData;
  const sq = SIDE_QUESTS.find(s => s.id === id);

  const map = {
    "sq-eotd": SideQuestEOTD,
    "sq-cards": SideQuestScientists,
    "sq-mystery": SideQuestMystery,
    "sq-predict": SideQuestPredict,
    "sq-aussie": SideQuestAussie,
  };
  const Body = map[id];

  return (
    <article className="lesson">
      <div className="lesson-header">
        <div className="eyebrow">Side quest</div>
        <h2>{sq.title}</h2>
        <div className="lead">{sq.sub}</div>
      </div>
      {Body ? <Body /> : <p>Coming soon.</p>}
    </article>
  );
}

// Mount
const root = ReactDOM.createRoot(document.getElementById("app-root"));
root.render(<App />);

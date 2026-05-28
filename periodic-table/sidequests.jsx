/* ============================================================
   Side quests (extras, badges)
   ============================================================ */

const { useState: sq_useState, useMemo: sq_useMemo, useEffect: sq_useEffect } = React;

/* ------------------------------------------------------------
   Element of the day
------------------------------------------------------------ */
function SideQuestEOTD() {
  const { ELEMENTS } = window.AppData;
  // Pick deterministically from the day of year
  const dayOfYear = sq_useMemo(() => {
    const now = new Date();
    const start = new Date(now.getFullYear(), 0, 0);
    return Math.floor((now - start) / 86400000);
  }, []);
  const el = ELEMENTS[dayOfYear % ELEMENTS.length];

  const [seen, setSeen] = usePersisted("eotd.seen", {});
  sq_useEffect(() => {
    setSeen({ ...seen, [el.sym]: (seen[el.sym] || 0) + 1 });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [el.sym]);

  return (
    <>
      <p>Every day, meet a different element. Come back tomorrow for a new one.</p>
      <div className="card" style={{ display: "grid", gridTemplateColumns: "180px 1fr", gap: 20, padding: 24 }}>
        <div className={`big-card pt-cell ${el.category}`} style={{ aspectRatio: 1, padding: 14 }}>
          <span className="num">{el.z}</span>
          <span className="sym" style={{ fontSize: "3.6rem", fontFamily: "var(--font-display)" }}>{el.sym}</span>
          <span className="name">{el.name}</span>
          <span className="mass" style={{ fontSize: "0.8rem", opacity: 0.7, marginTop: "auto" }}>{el.mass}</span>
        </div>
        <div>
          <Chip variant="info">{window.AppData.CATEGORY_LABELS[el.category]}</Chip>
          <h3 style={{ marginTop: 10 }}>{el.name}</h3>
          <p style={{ fontSize: "0.95rem" }}><strong>Where you'd find it:</strong> {el.uses}</p>
          {el.fact && <p style={{ fontSize: "0.95rem", fontStyle: "italic", color: "var(--ink-2)" }}>{el.fact}</p>}
          {el.shells && <p style={{ fontSize: "0.9rem" }}>Electron config: <span className="mono">{el.shells.join(", ")}</span></p>}
          <Chip variant="warn" style={{ marginTop: 8 }}>You've seen this one {seen[el.sym] || 1} time{(seen[el.sym] || 1) === 1 ? "" : "s"}.</Chip>
        </div>
      </div>
    </>
  );
}

/* ------------------------------------------------------------
   Scientist trading cards
------------------------------------------------------------ */
function SideQuestScientists() {
  const { SCIENTISTS } = window.AppData;
  const [flipped, setFlipped] = sq_useState({});
  const [failedPhotos, setFailedPhotos] = sq_useState({});

  const palette = [
    "linear-gradient(135deg, oklch(0.7 0.15 50), oklch(0.5 0.16 45))",
    "linear-gradient(135deg, oklch(0.7 0.13 200), oklch(0.5 0.14 210))",
    "linear-gradient(135deg, oklch(0.65 0.15 290), oklch(0.45 0.16 290))",
    "linear-gradient(135deg, oklch(0.7 0.13 145), oklch(0.5 0.14 145))",
  ];

  return (
    <>
      <p>Nine scientists who reshaped our understanding of the atom. Tap a card to flip it.</p>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 14 }}>
        {SCIENTISTS.map((s, i) => {
          const isFlipped = !!flipped[s.name];
          return (
            <div
              key={s.name}
              onClick={() => setFlipped({ ...flipped, [s.name]: !isFlipped })}
              style={{ perspective: 1000, cursor: "pointer", aspectRatio: "5 / 7" }}
            >
              <div style={{
                width: "100%", height: "100%",
                position: "relative",
                transformStyle: "preserve-3d",
                transition: "transform 600ms cubic-bezier(.5,0,.5,1)",
                transform: isFlipped ? "rotateY(180deg)" : "none",
              }}>
                {/* Front */}
                <div style={{
                  position: "absolute", inset: 0,
                  backfaceVisibility: "hidden",
                  borderRadius: "var(--r)",
                  background: palette[i % palette.length],
                  color: "white",
                  display: "flex", flexDirection: "column",
                  boxShadow: "var(--shadow-2)",
                  overflow: "hidden",
                }}>
                  {/* Portrait area — fills top 62% */}
                  <div style={{
                    position: "relative",
                    height: "62%",
                    width: "100%",
                    overflow: "hidden",
                    background: palette[i % palette.length],
                  }}>
                    {s.photo && !failedPhotos[s.name] ? (
                      <img
                        src={`https://commons.wikimedia.org/wiki/Special:FilePath/${encodeURIComponent(s.photo)}?width=500`}
                        alt={s.name}
                        onError={() => setFailedPhotos(prev => ({ ...prev, [s.name]: true }))}
                        referrerPolicy="no-referrer"
                        style={{
                          width: "100%", height: "100%",
                          objectFit: "cover",
                          objectPosition: "center 20%",
                          display: "block",
                          filter: "saturate(0.85) contrast(1.05)",
                        }}
                      />
                    ) : (
                      <div style={{
                        position: "absolute", inset: 0,
                        display: "flex", alignItems: "center", justifyContent: "center",
                        fontFamily: "var(--font-display)",
                        fontSize: "5rem",
                        color: "rgba(255,255,255,0.85)",
                        textShadow: "0 2px 12px rgba(0,0,0,0.3)",
                        background: `radial-gradient(circle at 35% 35%, oklch(1 0 0 / 0.18), transparent 60%), ${palette[i % palette.length]}`,
                      }}>
                        {s.name.split(" ").map(w => w[0]).join("").slice(0, 2)}
                      </div>
                    )}
                    {/* soft gradient into card body for visual continuity */}
                    <div style={{
                      position: "absolute", left: 0, right: 0, bottom: 0, height: "40%",
                      background: "linear-gradient(to bottom, transparent, oklch(0.2 0.05 30 / 0.55))",
                      pointerEvents: "none",
                    }} />
                  </div>
                  {/* Text panel */}
                  <div style={{
                    flex: 1,
                    padding: "12px 16px 14px",
                    display: "flex", flexDirection: "column",
                    position: "relative",
                    background: "linear-gradient(to bottom, oklch(0.2 0.05 30 / 0.55), oklch(0.18 0.05 30 / 0.9))",
                  }}>
                    <div style={{ fontSize: "0.65rem", letterSpacing: "0.12em", textTransform: "uppercase", opacity: 0.9 }}>{s.where}</div>
                    <h3 style={{ marginTop: 2, fontFamily: "var(--font-display)", lineHeight: 1.05, fontSize: "1.05rem" }}>{s.name}</h3>
                    <div style={{ fontFamily: "var(--font-mono)", fontSize: "0.75rem", opacity: 0.85 }}>{s.when}</div>
                    <div style={{ marginTop: 6, fontSize: "0.75rem", opacity: 0.95, lineHeight: 1.3 }}>{s.contrib}</div>
                    <div style={{ position: "absolute", right: 10, bottom: 6, fontSize: "0.55rem", opacity: 0.6 }}>tap to flip</div>
                  </div>
                </div>

                {/* Back */}
                <div style={{
                  position: "absolute", inset: 0,
                  backfaceVisibility: "hidden",
                  transform: "rotateY(180deg)",
                  borderRadius: "var(--r)",
                  background: "var(--paper)",
                  border: "1px solid var(--border)",
                  padding: 18,
                  display: "flex", flexDirection: "column",
                  boxShadow: "var(--shadow-2)",
                }}>
                  <div style={{ display: "flex", gap: 10, alignItems: "center" }}>
                    {s.photo && <CCAvatar file={s.photo} size={48} alt={s.name} />}
                    <div>
                      <Chip variant="info">Fun fact</Chip>
                      <h4 style={{ marginTop: 4, fontSize: "0.95rem" }}>{s.name}</h4>
                    </div>
                  </div>
                  <p style={{ fontSize: "0.85rem", color: "var(--ink-2)", margin: "10px 0 0" }}>{s.fun}</p>
                  <div style={{ marginTop: "auto", fontSize: "0.65rem", color: "var(--ink-muted)" }}>Image: Wikimedia Commons · public domain</div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}

/* ------------------------------------------------------------
   Mystery element
------------------------------------------------------------ */
function SideQuestMystery() {
  const { ELEMENTS } = window.AppData;
  // Filter to elements with rich facts
  const POOL = ELEMENTS.filter(e => e.z <= 20 || ["Au", "Ag", "Cu", "Fe", "Hg", "Pb", "Sn", "U", "W", "Pt"].includes(e.sym));

  const [round, setRound] = sq_useState(0);
  const [target, setTarget] = sq_useState(null);
  const [revealed, setRevealed] = sq_useState(0);  // # clues revealed
  const [guess, setGuess] = sq_useState("");
  const [outcome, setOutcome] = sq_useState(null);

  sq_useEffect(() => {
    const pick = POOL[Math.floor(Math.random() * POOL.length)];
    setTarget(pick);
    setRevealed(0);
    setGuess("");
    setOutcome(null);
  }, [round]);

  if (!target) return null;

  const clues = [
    target.uses ? `It's used in: ${target.uses}` : null,
    target.fact ? `Fun fact: ${target.fact}` : null,
    `It's a ${window.AppData.CATEGORY_LABELS[target.category].toLowerCase()}, atomic number ${target.z}.`,
    `Its symbol is ${target.sym} and its mass is about ${Math.round(target.mass)}.`,
  ].filter(Boolean);

  const submit = () => {
    const g = guess.trim().toLowerCase();
    if (!g) return;
    if (g === target.name.toLowerCase() || g === target.sym.toLowerCase()) {
      setOutcome("correct");
    } else {
      setOutcome("wrong");
      setRevealed(Math.min(clues.length, revealed + 1));
    }
  };

  return (
    <>
      <p>I'm thinking of an element. I'll give you clues — one at a time. Can you guess?</p>
      <div className="card">
        <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
          {clues.slice(0, revealed + 1).map((c, i) => (
            <div key={i} style={{ padding: 10, background: "var(--bg-2)", borderRadius: 8, fontSize: "0.95rem" }}>
              <strong>Clue {i + 1}:</strong> {c}
            </div>
          ))}
          {revealed + 1 < clues.length && outcome !== "correct" && (
            <Button size="sm" variant="ghost" onClick={() => setRevealed(revealed + 1)}>Reveal next clue</Button>
          )}
        </div>

        {outcome === "correct" ? (
          <Callout kind="tip" title={`✓ It was ${target.name}!`}>
            You got it in {revealed + 1} clue{revealed + 1 === 1 ? "" : "s"}. {target.fact || target.uses}
          </Callout>
        ) : (
          <div style={{ marginTop: 14, display: "flex", gap: 8 }}>
            <input
              type="text"
              value={guess}
              onChange={(e) => { setGuess(e.target.value); setOutcome(null); }}
              onKeyDown={(e) => e.key === "Enter" && submit()}
              placeholder="Type the element name or symbol…"
              style={{
                flex: 1,
                padding: "10px 14px",
                fontSize: "0.95rem",
                fontFamily: "inherit",
                border: "1px solid var(--border-strong)",
                borderRadius: 8,
                background: "var(--paper)",
                color: "var(--ink)",
              }}
            />
            <Button variant="primary" onClick={submit}>Guess</Button>
          </div>
        )}

        {outcome === "wrong" && (
          <div style={{ marginTop: 8, color: "var(--c-red)", fontSize: "0.88rem" }}>
            Not quite — try again with another clue.
          </div>
        )}

        <div style={{ marginTop: 14 }}>
          <Button size="sm" variant="ghost" icon="reset" onClick={() => setRound(round + 1)}>New mystery</Button>
        </div>
      </div>
    </>
  );
}

/* ------------------------------------------------------------
   Predict before you peek
------------------------------------------------------------ */
function SideQuestPredict() {
  const items = [
    { q: "Bohr's model says electrons orbit the nucleus in fixed shells. The first shell can hold up to…", a: "2 electrons" },
    { q: "Most reactive metal on the periodic table?", a: "Caesium (Cs) — bottom-left, Group 1. Even reacts with ice." },
    { q: "The only metal that's a liquid at room temperature?", a: "Mercury (Hg) — melts at −39 °C." },
    { q: "What's the most abundant element in the Earth's atmosphere?", a: "Nitrogen (about 78%)." },
    { q: "Which element has the highest melting point of any metal?", a: "Tungsten (W) — 3422 °C. Used in light bulb filaments." },
    { q: "Which two elements are liquid at room temperature?", a: "Mercury (Hg) and Bromine (Br)." },
    { q: "If a neutral atom has 11 protons, how many electrons does it have? What element is it?", a: "11 electrons. It's sodium (Na)." },
    { q: "Approximately how thick (in atoms) is a sheet of paper?", a: "About 100,000 atoms thick." },
  ];
  return (
    <>
      <p>Try to guess first. Click the blurred answer to reveal.</p>
      <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
        {items.map((it, i) => (
          <div key={i} className="card">
            <div style={{ fontWeight: 600, marginBottom: 8 }}>{it.q}</div>
            <div><BlurReveal>{it.a}</BlurReveal></div>
          </div>
        ))}
      </div>
    </>
  );
}

/* ------------------------------------------------------------
   Aussie connections
------------------------------------------------------------ */
function SideQuestAussie() {
  const items = [
    { title: "Rutherford — kiwi-born", text: "Ernest Rutherford was born and raised in New Zealand before moving to the UK. He's often called the 'father of nuclear physics' and did his famous gold-foil experiment in Manchester." },
    { title: "Australia → world's aluminium", text: "Australia is the world's largest producer of bauxite — the ore that aluminium is made from. Most of the aluminium in the cans, foil and aircraft frames near you started its journey in an Australian mine." },
    { title: "Iron ore powerhouse", text: "Around half the world's iron ore comes from the Pilbara region of Western Australia. Without it, an enormous fraction of global steel production stops." },
    { title: "Mark Oliphant", text: "Adelaide-born physicist whose work on hydrogen isotopes was crucial in the development of nuclear physics. Later instrumental in setting up the Australian National University." },
    { title: "Lithium — the new gold rush", text: "Australia is the world's largest producer of lithium, mined mainly in WA. Lithium powers phones, laptops, and the EV revolution." },
    { title: "Synchrotron in Melbourne", text: "The Australian Synchrotron in Clayton, Victoria, uses a 216-metre ring to accelerate electrons to almost light speed — used for atomic-scale imaging of everything from new drugs to ancient fossils." },
  ];
  return (
    <>
      <p>The atomic structure story has Australian threads woven through it — from the scientists to the mines.</p>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 12 }}>
        {items.map((it, i) => (
          <div key={i} className="card">
            <h4>{it.title}</h4>
            <p style={{ fontSize: "0.9rem", color: "var(--ink-2)", margin: "6px 0 0" }}>{it.text}</p>
          </div>
        ))}
      </div>
    </>
  );
}

Object.assign(window, {
  SideQuestEOTD, SideQuestScientists, SideQuestMystery, SideQuestPredict, SideQuestAussie,
});

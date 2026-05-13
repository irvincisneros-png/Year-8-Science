/* ============================================================
   Unit 6.3 — Periodic table (7 lessons)
   ============================================================ */

const { useState: u63_useState, useEffect: u63_useEffect, useMemo: u63_useMemo, useRef: u63_useRef } = React;

/* ------------------------------------------------------------
   Lesson 6.3.1 — Patterns in the periodic table
------------------------------------------------------------ */
function Lesson631({ udl }) {
  const [filter, setFilter] = u63_useState(null);
  const [sel, setSel] = u63_useState(null);
  const groups = [
    { id: "alkali", label: "Group 1 — Alkali metals", note: "Very reactive, soft. Reactivity INCREASES going down." },
    { id: "alkaline", label: "Group 2 — Alkaline earth", note: "Reactive metals, but less than Group 1." },
    { id: "halogen", label: "Group 17 — Halogens", note: "Very reactive non-metals. Reactivity DECREASES going down." },
    { id: "noble", label: "Group 18 — Noble gases", note: "Almost completely unreactive." },
  ];

  return (
    <>
      <p>The periodic table is the most useful chart in chemistry. Elements are arranged in <strong>order of atomic number</strong> (number of protons), and lined up so that elements with similar properties stack into columns.</p>

      <div style={{ display: "grid", gridTemplateColumns: "1.4fr 1fr", gap: 14, margin: "10px 0 18px" }}>
        <CCImage src="assets/pdf-img-p25.jpg" caption="The modern periodic table — 118 elements arranged by atomic number." frame />
        <CCImage src="assets/pdf-img-p26.jpg" caption="Groups (columns) and periods (rows) — the first 3 periods, with category colour-coding." frame />
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14 }}>
        <div className="card">
          <h4>Groups (columns)</h4>
          <p style={{ fontSize: "0.92rem", color: "var(--ink-2)", margin: "6px 0 0" }}>18 vertical columns. Elements in the same group behave similarly because they have the <strong>same number of outer electrons</strong>.</p>
        </div>
        <div className="card">
          <h4>Periods (rows)</h4>
          <p style={{ fontSize: "0.92rem", color: "var(--ink-2)", margin: "6px 0 0" }}>7 horizontal rows. Across a period, elements gradually change from metals (left) to non-metals (right).</p>
        </div>
      </div>

      <h3>Some special groups</h3>
      <div style={{ display: "flex", gap: 6, flexWrap: "wrap", margin: "10px 0" }}>
        <Button size="sm" variant={filter === null ? "primary" : "default"} onClick={() => setFilter(null)}>Show all</Button>
        {groups.map(g => (
          <Button key={g.id} size="sm" variant={filter === g.id ? "primary" : "default"} onClick={() => setFilter(g.id)}>{g.label}</Button>
        ))}
      </div>

      {filter && (
        <div style={{ background: "var(--bg-2)", borderRadius: "var(--r)", padding: "12px 14px", fontSize: "0.92rem" }}>
          {groups.find(g => g.id === filter)?.note}
        </div>
      )}

      <PeriodicTable
        highlightCategory={filter}
        dimOthers={!!filter}
        selected={sel}
        onSelect={setSel}
      />

      <h3 style={{ marginTop: 22 }}>Reactivity patterns</h3>
      <ul>
        <li>Going <strong>DOWN</strong> Group 1, reactivity <strong>INCREASES</strong>. Caesium is far more reactive than lithium.</li>
        <li>Going <strong>DOWN</strong> Group 17, reactivity <strong>DECREASES</strong>. Fluorine is more reactive than iodine.</li>
        <li>Most reactive metal: bottom-left (caesium, francium). Most reactive non-metal: top-right (fluorine).</li>
        <li>Noble gases (Group 18): essentially unreactive.</li>
      </ul>

      <Callout kind="tip" title="Try this">
        Click the "Group 1" filter above, then click an element on the table to see its details. Notice how the alkali metals run down the left column — and how they get further from helium (the small element in the top-right) as they get more reactive.
      </Callout>

      {sel && <ElementDetail z={sel} />}

      <div className="activity">
        <div className="activity-head"><h4>Quick check</h4><span className="badge">Quiz</span></div>
        <QuizMC
          question="Sodium reacts violently with water. Based on periodic table patterns, would potassium (below sodium in Group 1) be more or less reactive?"
          options={["Less reactive (it's further from helium)", "More reactive (reactivity INCREASES down Group 1)", "About the same", "It doesn't react with water"]}
          correctIndex={1}
          explain="Going down Group 1, reactivity increases. Potassium reacts with water more vigorously than sodium — and caesium reacts almost explosively."
        />
        <QuizMC
          question="Which group's elements are almost completely unreactive?"
          options={["Group 1 (alkali metals)", "Group 2 (alkaline earths)", "Group 17 (halogens)", "Group 18 (noble gases)"]}
          correctIndex={3}
          explain="Noble gases have full outer shells — they don't need to gain or lose electrons, so they barely react."
        />
      </div>
    </>
  );
}

/* ------------------------------------------------------------
   Lesson 6.3.2 — Predicting properties
------------------------------------------------------------ */
function Lesson632({ udl }) {
  // Predict-before-peek with rubidium worked example
  return (
    <>
      <p>Because the table is so well-organised, you can <strong>predict</strong> what an element will be like just from its position — before you've ever seen it.</p>

      <h3>What the group tells you</h3>
      <ul>
        <li>Whether it's a metal or non-metal (left = metal, right = non-metal, zig-zag = metalloid).</li>
        <li>How many electrons are in its outer shell.</li>
        <li>What charge its ions will form (Group 1 → +1, Group 2 → +2, Group 17 → −1).</li>
        <li>How it'll react.</li>
      </ul>

      <h3>What the period tells you</h3>
      <ul>
        <li>How many electron shells the atom has (Period 3 → 3 shells).</li>
        <li>Roughly how big the atom is (atoms get bigger going down).</li>
      </ul>

      <div className="activity">
        <div className="activity-head"><h4>Worked prediction: Rubidium (Rb)</h4><span className="badge">Predict</span></div>
        <p style={{ marginTop: 0 }}>Rubidium is in <strong>Group 1, Period 5</strong>. Without looking, predict its properties — then peek.</p>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10 }}>
          <div className="card">
            <h4>Predict:</h4>
            <ul style={{ paddingLeft: 18, margin: "6px 0", fontSize: "0.92rem" }}>
              <li>Metal or non-metal?</li>
              <li>How many outer electrons?</li>
              <li>How reactive?</li>
              <li>How many electron shells?</li>
            </ul>
          </div>
          <div className="card" style={{ background: "var(--bg-2)" }}>
            <h4>Answers:</h4>
            <ul style={{ paddingLeft: 18, margin: "6px 0", fontSize: "0.92rem" }}>
              <li>Metal (it's on the left): <BlurReveal>soft, shiny alkali metal</BlurReveal></li>
              <li>Outer electrons: <BlurReveal>1 (Group 1)</BlurReveal></li>
              <li>Reactivity: <BlurReveal>very reactive — more than sodium</BlurReveal></li>
              <li>Shells: <BlurReveal>5 (Period 5)</BlurReveal></li>
            </ul>
          </div>
        </div>
        <p style={{ fontSize: "0.88rem", color: "var(--ink-2)", marginTop: 10 }}>When rubidium was tested in real life, every one of these predictions turned out to be correct.</p>
      </div>

      <div className="activity">
        <div className="activity-head"><h4>Your turn</h4><span className="badge">Quiz</span></div>
        <QuizMC
          question="Chlorine is in Group 17, Period 3. Predict: what charge will its ion form?"
          options={["+1", "−1", "+7", "0"]}
          correctIndex={1}
          explain="Group 17 elements (halogens) gain one electron to fill their outer shell — they form −1 ions like Cl⁻."
        />
        <QuizMC
          question="Element X is in Group 2, Period 4. How many electron shells does it have, and how many outer electrons?"
          options={["2 shells, 4 outer electrons", "4 shells, 2 outer electrons", "2 shells, 2 outer electrons", "4 shells, 4 outer electrons"]}
          correctIndex={1}
          explain="Period number = number of shells (4). Group number (for groups 1, 2, 13–18) tells you outer electrons (2)."
        />
        <QuizMC
          question="Two elements are both in Group 2 — one in Period 2, one in Period 5. Which is more reactive?"
          options={["The Period 2 one", "The Period 5 one", "Same reactivity", "Neither reacts"]}
          correctIndex={1}
          explain="In Groups 1 and 2, reactivity increases going DOWN. The Period 5 element (further down) is more reactive."
        />
      </div>
    </>
  );
}

/* ------------------------------------------------------------
   Lesson 6.3.3 — Element symbols + matching game
------------------------------------------------------------ */
function SymbolGame() {
  const { ELEMENTS } = window.AppData;

  // Pool: common elements, weighted toward 'must-knows' + Latin-name oddballs
  const POOL = [
    "H","He","Li","Be","C","N","O","F","Ne","Na","Mg","Al","Si","P","S","Cl","K","Ca",
    "Fe","Cu","Zn","Ag","Au","Hg","Pb","Sn","Sb","W","I","Ar","Br",
  ];

  const [round, setRound] = u63_useState(0);
  const [cards, setCards] = u63_useState([]);  // {id, kind, text, sym, flipped, matched}
  const [first, setFirst] = u63_useState(null);
  const [moves, setMoves] = u63_useState(0);
  const [pairs, setPairs] = u63_useState(0);
  const [done, setDone] = u63_useState(false);

  const newGame = (count = 8) => {
    const picks = [...POOL].sort(() => Math.random() - 0.5).slice(0, count);
    const stack = [];
    picks.forEach((s, i) => {
      const el = ELEMENTS.find(e => e.sym === s);
      stack.push({ id: `s-${i}`, kind: "sym", text: s, sym: s, flipped: false, matched: false });
      stack.push({ id: `n-${i}`, kind: "name", text: el.name, sym: s, flipped: false, matched: false });
    });
    setCards(stack.sort(() => Math.random() - 0.5));
    setFirst(null); setMoves(0); setPairs(0); setDone(false);
  };

  u63_useEffect(() => { newGame(); }, [round]);

  const flip = (idx) => {
    if (cards[idx].flipped || cards[idx].matched) return;
    const next = cards.map((c, i) => i === idx ? { ...c, flipped: true } : c);
    setCards(next);

    if (first === null) {
      setFirst(idx);
    } else {
      const a = next[first], b = next[idx];
      setMoves(m => m + 1);
      if (a.sym === b.sym && a.kind !== b.kind) {
        // Match
        setTimeout(() => {
          setCards(prev => prev.map((c, i) => (i === first || i === idx) ? { ...c, matched: true } : c));
          setPairs(p => {
            const np = p + 1;
            if (np === next.length / 2) setDone(true);
            return np;
          });
          setFirst(null);
        }, 400);
      } else {
        // No match
        setTimeout(() => {
          setCards(prev => prev.map((c, i) => (i === first || i === idx) ? { ...c, flipped: false } : c));
          setFirst(null);
        }, 800);
      }
    }
  };

  return (
    <div>
      <div style={{ display: "flex", gap: 10, alignItems: "center", marginBottom: 12, flexWrap: "wrap" }}>
        <Chip>{pairs} / {cards.length / 2} pairs</Chip>
        <Chip variant="info">{moves} moves</Chip>
        <span className="spacer" />
        <Button size="sm" variant="ghost" icon="reset" onClick={() => setRound(r => r + 1)}>New game</Button>
      </div>

      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(8, 1fr)",
        gap: 8,
      }}>
        {cards.map((c, i) => (
          <button
            key={c.id}
            onClick={() => flip(i)}
            disabled={c.matched}
            style={{
              aspectRatio: 1,
              borderRadius: 10,
              border: c.matched ? "1.5px solid var(--c-green)" : "1.5px solid var(--border)",
              background: c.matched ? "var(--c-green-soft)" :
                          c.flipped ? "var(--paper)" :
                          "linear-gradient(135deg, oklch(0.85 0.08 50) 0%, oklch(0.7 0.12 30) 100%)",
              cursor: c.matched ? "default" : "pointer",
              padding: 6,
              display: "flex", alignItems: "center", justifyContent: "center",
              fontFamily: c.kind === "sym" ? "var(--font-display)" : "var(--font-body)",
              fontSize: c.kind === "sym" ? "1.6rem" : "0.8rem",
              fontWeight: c.kind === "sym" ? 400 : 600,
              color: c.matched ? "var(--c-green-deep)" : c.flipped ? "var(--ink)" : "transparent",
              transition: "all 200ms",
              textAlign: "center",
              lineHeight: 1,
            }}
          >
            {c.flipped || c.matched ? c.text : ""}
          </button>
        ))}
      </div>

      {done && (
        <Callout kind="tip" title="Game complete!">
          You matched all {cards.length / 2} pairs in {moves} moves. {moves <= cards.length / 2 + 4 ? "Phenomenal memory." : moves <= cards.length ? "Solid work." : "You'll get faster next time!"}
        </Callout>
      )}
    </div>
  );
}

function Lesson633({ udl }) {
  const latinNames = [
    ["Sodium", "Na", "Natrium"],
    ["Potassium", "K", "Kalium"],
    ["Iron", "Fe", "Ferrum"],
    ["Copper", "Cu", "Cuprum"],
    ["Silver", "Ag", "Argentum"],
    ["Gold", "Au", "Aurum"],
    ["Mercury", "Hg", "Hydrargyrum"],
    ["Lead", "Pb", "Plumbum"],
    ["Tin", "Sn", "Stannum"],
    ["Antimony", "Sb", "Stibium"],
    ["Tungsten", "W", "Wolfram (German)"],
  ];

  return (
    <>
      <p>Every element has its own <strong>chemical symbol</strong>. Chemists everywhere — Sydney, São Paulo, Seoul — can read each other's formulas because the symbols are universal.</p>

      <h3>The 3 rules</h3>
      <ol style={{ margin: "6px 0 14px", paddingLeft: 22 }}>
        <li>One or two letters.</li>
        <li>First letter <strong>always capital</strong>.</li>
        <li>Second letter (if any) <strong>always lower case</strong>.</li>
      </ol>

      <Callout kind="warn" title="Capitalisation matters!">
        <span className="mono">CO</span> means carbon + oxygen (carbon monoxide). <span className="mono">Co</span> means cobalt. Get the caps wrong and you've written a different chemical entirely.
      </Callout>

      <h3>Why some symbols look weird</h3>
      <p>Some symbols don't match the modern English name — they come from the element's old <strong>Latin name</strong>.</p>
      <table>
        <thead><tr><th>English name</th><th>Symbol</th><th>Latin origin</th></tr></thead>
        <tbody>
          {latinNames.map(([en, sym, lat], i) => (
            <tr key={i}>
              <td>{en}</td>
              <td><span className="formula" style={{ fontSize: "1.1rem" }}>{sym}</span></td>
              <td><em>{lat}</em></td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="activity">
        <div className="activity-head"><h4>Symbol matching memory game</h4><span className="badge">Game</span></div>
        <p style={{ marginTop: 0 }}>Flip cards to match each element name with its symbol. New game shuffles a fresh set.</p>
        <SymbolGame />
      </div>
    </>
  );
}

/* ------------------------------------------------------------
   Lesson 6.3.4 — Chemical formulas decoder
------------------------------------------------------------ */
function FormulaDecoder() {
  const { COMPOUNDS, getElementBySym } = window.AppData;
  const [idx, setIdx] = u63_useState(0);
  const [answer, setAnswer] = u63_useState({});  // sym -> count
  const [checked, setChecked] = u63_useState(false);

  const cur = COMPOUNDS[idx];
  const symbolsInFormula = cur.parts.map(p => p[0]);

  const next = () => {
    setIdx((idx + 1) % COMPOUNDS.length);
    setAnswer({});
    setChecked(false);
  };
  const prev = () => {
    setIdx((idx - 1 + COMPOUNDS.length) % COMPOUNDS.length);
    setAnswer({});
    setChecked(false);
  };

  const allRight = checked && cur.parts.every(([s, n]) => answer[s] === n);

  // Distractor pool
  const distractors = ["Mg","Fe","Cu","Zn","P","B","Br","I","Ag","Au","Pb","Sn","Ba","Si","He","Ne","Ar"];
  const symbolBank = u63_useMemo(() => {
    const real = symbolsInFormula;
    const fake = distractors.filter(s => !real.includes(s)).slice(0, 6 - real.length);
    return [...real, ...fake].sort(() => Math.random() - 0.5);
  }, [idx]);

  return (
    <div>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 12 }}>
        <Button size="sm" icon="left" onClick={prev}>Prev</Button>
        <div style={{ textAlign: "center" }}>
          <div style={{ fontSize: "0.8rem", color: "var(--ink-muted)" }}>Compound {idx + 1} of {COMPOUNDS.length}</div>
          <div className="formula" style={{ fontSize: "2.6rem" }}>
            {renderFormula(cur.f)}
          </div>
          <div style={{ fontSize: "0.9rem", color: "var(--ink-2)" }}>{cur.name}</div>
        </div>
        <Button size="sm" iconRight="right" onClick={next}>Next</Button>
      </div>

      <p style={{ fontSize: "0.92rem", color: "var(--ink-2)" }}>
        Click each element symbol to add it. Use + and − to set how many atoms.
      </p>

      <div style={{ display: "flex", flexWrap: "wrap", gap: 8, marginBottom: 12 }}>
        {symbolBank.map(s => {
          const placed = !!answer[s];
          return (
            <button
              key={s}
              className="drag-chip"
              style={{ background: placed ? "var(--c-orange-soft)" : "var(--paper)", borderColor: placed ? "var(--c-orange-deep)" : "var(--border-strong)" }}
              onClick={() => setAnswer({ ...answer, [s]: (answer[s] || 0) + 1 })}
            >
              {s}
            </button>
          );
        })}
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(160px, 1fr))", gap: 8 }}>
        {Object.entries(answer).map(([sym, count]) => {
          const el = getElementBySym(sym);
          return (
            <div key={sym} className="card" style={{ padding: 10, display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <div>
                <div style={{ fontFamily: "var(--font-display)", fontSize: "1.3rem" }}>{sym}</div>
                <div style={{ fontSize: "0.7rem", color: "var(--ink-muted)" }}>{el?.name || "?"}</div>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: 4 }}>
                <Button size="sm" variant="ghost" onClick={() => {
                  const next = { ...answer, [sym]: count - 1 };
                  if (next[sym] <= 0) delete next[sym];
                  setAnswer(next);
                }}>−</Button>
                <span style={{ minWidth: 22, textAlign: "center", fontFamily: "var(--font-mono)", fontWeight: 600 }}>{count}</span>
                <Button size="sm" variant="ghost" onClick={() => setAnswer({ ...answer, [sym]: count + 1 })}>+</Button>
              </div>
            </div>
          );
        })}
      </div>

      <div style={{ display: "flex", gap: 8, marginTop: 12 }}>
        <Button variant="primary" onClick={() => setChecked(true)}>Check</Button>
        <Button variant="ghost" icon="reset" onClick={() => { setAnswer({}); setChecked(false); }}>Clear</Button>
      </div>

      {checked && (
        <div style={{ marginTop: 12 }}>
          {allRight ? (
            <Callout kind="tip" title="✓ Got it!">
              <span className="formula">{renderFormula(cur.f)}</span> is <strong>{cur.name}</strong>. {cur.use}
            </Callout>
          ) : (
            <Callout kind="warn" title="Close — but not quite.">
              The correct breakdown is:
              <ul style={{ margin: "6px 0 0", paddingLeft: 20 }}>
                {cur.parts.map(([s, n]) => {
                  const el = window.AppData.getElementBySym(s);
                  return <li key={s}><strong>{n} × {s}</strong> ({el?.name})</li>;
                })}
              </ul>
            </Callout>
          )}
        </div>
      )}
    </div>
  );
}

function renderFormula(f) {
  // Convert "H2O" → H<sub>2</sub>O
  const out = [];
  let cur = "";
  for (let i = 0; i < f.length; i++) {
    const ch = f[i];
    if (/[0-9]/.test(ch)) {
      if (cur) { out.push(<span key={i + "c"}>{cur}</span>); cur = ""; }
      let n = ch;
      while (i + 1 < f.length && /[0-9]/.test(f[i + 1])) { n += f[++i]; }
      out.push(<sub key={i + "s"}>{n}</sub>);
    } else {
      cur += ch;
    }
  }
  if (cur) out.push(<span key="e">{cur}</span>);
  return out;
}

function Lesson634({ udl }) {
  return (
    <>
      <p>A <strong>chemical formula</strong> packs a lot into a few characters. It tells you which elements are in a compound and exactly how many atoms of each.</p>

      <h3>How to read one</h3>
      <ul>
        <li>Each <strong>symbol</strong> = one element.</li>
        <li>A small number (subscript) after a symbol = how many atoms of that element.</li>
        <li>No number = 1 atom.</li>
      </ul>

      <table>
        <thead><tr><th>Formula</th><th>Elements</th><th>How many of each</th></tr></thead>
        <tbody>
          <tr><td className="formula" style={{ fontSize: "1.05rem" }}>{renderFormula("H2O")}</td><td>Hydrogen, Oxygen</td><td>2 H, 1 O</td></tr>
          <tr><td className="formula" style={{ fontSize: "1.05rem" }}>{renderFormula("CO2")}</td><td>Carbon, Oxygen</td><td>1 C, 2 O</td></tr>
          <tr><td className="formula" style={{ fontSize: "1.05rem" }}>{renderFormula("NaCl")}</td><td>Sodium, Chlorine</td><td>1 Na, 1 Cl</td></tr>
          <tr><td className="formula" style={{ fontSize: "1.05rem" }}>{renderFormula("CaCO3")}</td><td>Calcium, Carbon, Oxygen</td><td>1 Ca, 1 C, 3 O</td></tr>
          <tr><td className="formula" style={{ fontSize: "1.05rem" }}>{renderFormula("C6H12O6")}</td><td>Carbon, Hydrogen, Oxygen</td><td>6 C, 12 H, 6 O</td></tr>
        </tbody>
      </table>

      <Callout kind="tip" title="Stuck on a symbol?">
        Use the periodic table! Don't recognise <span className="mono">K</span>? Look it up — that's potassium (from Latin <em>kalium</em>).
      </Callout>

      <div className="activity">
        <div className="activity-head"><h4>Formula decoder</h4><span className="badge">Game</span></div>
        <p style={{ marginTop: 0 }}>Twelve real compounds. For each, click the elements you see in the formula and set how many of each.</p>
        <FormulaDecoder />
      </div>
    </>
  );
}

/* ------------------------------------------------------------
   Lesson 6.3.5 — Identifying elements + flame test sim
------------------------------------------------------------ */
function FlameTestSim() {
  const { FLAME_TESTS } = window.AppData;
  const [picked, setPicked] = u63_useState(null);
  const [mode, setMode] = u63_useState("explore"); // explore | guess
  const [guess, setGuess] = u63_useState(null);
  const [target, setTarget] = u63_useState(null);
  const [score, setScore] = u63_useState(0);
  const [shown, setShown] = u63_useState(0);

  const current = mode === "explore" ? FLAME_TESTS.find(f => f.sym === picked) : target;

  const newGuess = () => {
    const pick = FLAME_TESTS[Math.floor(Math.random() * FLAME_TESTS.length)];
    setTarget(pick);
    setGuess(null);
    setShown(s => s + 1);
  };

  u63_useEffect(() => {
    if (mode === "guess" && !target) newGuess();
  }, [mode]);

  return (
    <div>
      <div style={{ display: "flex", gap: 8, marginBottom: 12 }}>
        <Button size="sm" variant={mode === "explore" ? "primary" : "default"} onClick={() => { setMode("explore"); setPicked(null); }}>Explore mode</Button>
        <Button size="sm" variant={mode === "guess" ? "primary" : "default"} onClick={() => { setMode("guess"); setGuess(null); newGuess(); setScore(0); setShown(0); }}>Guess mode</Button>
        {mode === "guess" && <span className="spacer" />}
        {mode === "guess" && <Chip>{score} / {shown} correct</Chip>}
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
        <div style={{
          aspectRatio: "3 / 4",
          background: "linear-gradient(180deg, oklch(0.15 0.02 250) 0%, oklch(0.10 0.01 250) 100%)",
          borderRadius: "var(--r)",
          position: "relative",
          overflow: "hidden",
          display: "flex", alignItems: "flex-end", justifyContent: "center"
        }}>
          {/* Bunsen burner shape */}
          <div style={{ position: "absolute", bottom: 20, width: 50, left: "50%", marginLeft: -25, background: "oklch(0.3 0.01 250)", height: 80, borderRadius: 4, zIndex: 2 }}/>
          <div style={{ position: "absolute", bottom: 100, width: 40, left: "50%", marginLeft: -20, background: "oklch(0.25 0.01 250)", height: 16, borderRadius: 4, zIndex: 2 }}/>

          {/* Flame */}
          {current ? (
            <div style={{
              position: "absolute",
              bottom: 116,
              left: "50%",
              transform: "translateX(-50%)",
              width: 50, height: 130,
              background: `radial-gradient(ellipse at center bottom, ${current.hex} 0%, ${current.hex.replace(/oklch\(([^)]+)\)/, (m, p) => `oklch(${p.split(" ").map((v,i)=> i===2 ? +v + 0 : v).join(" ")})`)} 30%, transparent 80%)`,
              filter: "blur(8px)",
              opacity: 0.95,
              animation: "flicker 2s ease-in-out infinite alternate",
            }}/>
          ) : (
            <div style={{
              position: "absolute",
              bottom: 116,
              left: "50%",
              transform: "translateX(-50%)",
              width: 28, height: 80,
              background: "radial-gradient(ellipse at center bottom, oklch(0.8 0.18 240) 0%, oklch(0.6 0.18 220) 40%, transparent 80%)",
              filter: "blur(6px)",
              opacity: 0.9,
            }}/>
          )}

          <style>{`@keyframes flicker { 0% { transform: translateX(-50%) scaleY(1); } 100% { transform: translateX(-50%) scaleY(1.08); } }`}</style>

          {current && (
            <div style={{
              position: "absolute", top: 10, left: 10, color: "white", fontFamily: "var(--font-mono)", fontSize: "0.8rem", zIndex: 3,
            }}>
              {mode === "explore" ? `${current.name} (${current.sym})` : "Unknown sample"}
            </div>
          )}
        </div>

        <div>
          {mode === "explore" ? (
            <>
              <h4 style={{ marginTop: 0 }}>Pick a metal salt</h4>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 6 }}>
                {FLAME_TESTS.map(f => (
                  <Button
                    key={f.sym}
                    size="sm"
                    variant={picked === f.sym ? "primary" : "default"}
                    onClick={() => setPicked(f.sym)}
                  >
                    {f.name} ({f.sym})
                  </Button>
                ))}
              </div>
              {current && (
                <div style={{ marginTop: 14 }}>
                  <Chip style={{ background: current.hex, color: "white" }}>{current.colour}</Chip>
                  <p style={{ fontSize: "0.88rem", color: "var(--ink-2)", marginTop: 8 }}>{current.note}</p>
                </div>
              )}
            </>
          ) : (
            <>
              <h4 style={{ marginTop: 0 }}>What metal is it?</h4>
              <p style={{ fontSize: "0.88rem", color: "var(--ink-2)", margin: "4px 0 10px" }}>The flame looks like <strong>{current?.colour.toLowerCase()}</strong>. Which metal?</p>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 6 }}>
                {FLAME_TESTS.map(f => {
                  const isCorrect = guess && guess === target.sym && f.sym === target.sym;
                  const isWrong = guess === f.sym && f.sym !== target.sym;
                  return (
                    <Button
                      key={f.sym}
                      size="sm"
                      variant="default"
                      style={{
                        borderColor: isCorrect ? "var(--c-green)" : isWrong ? "var(--c-red)" : "var(--border)",
                        background: isCorrect ? "var(--c-green-soft)" : isWrong ? "var(--c-red-soft)" : "var(--paper)",
                      }}
                      onClick={() => {
                        if (guess) return;
                        setGuess(f.sym);
                        if (f.sym === target.sym) setScore(s => s + 1);
                      }}
                      disabled={!!guess}
                    >
                      {f.name}
                    </Button>
                  );
                })}
              </div>
              {guess && (
                <div style={{ marginTop: 12 }}>
                  {guess === target.sym ?
                    <Callout kind="tip" title="✓ Yes!">{target.note}</Callout>
                    : <Callout kind="warn" title="Not quite">It's {target.name} — {target.note}</Callout>
                  }
                  <Button size="sm" variant="primary" onClick={newGuess} style={{ marginTop: 8 }}>Next sample</Button>
                </div>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
}

function Lesson635({ udl }) {
  return (
    <>
      <p>You've classified samples on appearance. But how do <em>real</em> chemists check if an unknown is a metal? They run multiple tests.</p>

      <h3>The five common tests</h3>
      <ol style={{ paddingLeft: 22 }}>
        <li><strong>Conductivity:</strong> battery + bulb + sample. Metals light the bulb. (Watch out — graphite does too!)</li>
        <li><strong>Malleability:</strong> tap gently with a hammer. Metals flatten, non-metals shatter.</li>
        <li><strong>Reaction with acid:</strong> most metals fizz in dilute hydrochloric acid (producing hydrogen gas). Non-metals don't.</li>
        <li><strong>Appearance:</strong> metals shine when freshly polished. (Some non-metals like iodine are shiny too — not foolproof.)</li>
        <li><strong>Flame test:</strong> some metals colour a flame distinctively. This identifies <em>which</em> metal, not just whether it's a metal.</li>
      </ol>

      <CCImage file="Bratislava Novoročný ohňostroj 2005 (3).jpg" width={720} caption="Fireworks are flame tests on a giant scale — each colour comes from a different metal compound." frame />

      <div className="activity">
        <div className="activity-head"><h4>Flame test simulator</h4><span className="badge">Sim</span></div>
        <p style={{ marginTop: 0 }}>Drop a metal salt into a Bunsen flame and watch the colour. Try <strong>Explore mode</strong> first to learn the colours, then switch to <strong>Guess mode</strong>.</p>
        <FlameTestSim />
      </div>

      <Callout kind="fact" title="Where you've seen this">
        Fireworks! Red bursts use strontium or lithium. Green = barium or copper. Yellow = sodium. Lilac = potassium. Every colour you see in the sky is a flame test on a massive scale.
      </Callout>

      <div className="activity">
        <div className="activity-head"><h4>Quick check</h4><span className="badge">Quiz</span></div>
        <QuizMC
          question="A student tests an unknown shiny sample. It conducts electricity but SHATTERS when hit. What is it most likely?"
          options={["A metal", "A non-metal", "A metalloid", "A liquid"]}
          correctIndex={2}
          explain="Shiny + conductive (a bit) + brittle = metalloid (e.g. silicon, germanium). Real metals would bend, not shatter."
        />
        <QuizMC
          question="Why is doing several tests more reliable than just one?"
          options={[
            "Because tests are sometimes wrong",
            "Some elements share a single property with another group — multiple tests cross-check the classification",
            "Because chemists like to be busy",
            "Because some elements change between tests"
          ]}
          correctIndex={1}
          explain="Graphite conducts electricity (like a metal) but is brittle (like a non-metal). You'd never spot that with just one test."
        />
      </div>
    </>
  );
}

/* ------------------------------------------------------------
   Lesson 6.3.6 — Modelling the first 18 elements
------------------------------------------------------------ */
function Lesson636({ udl }) {
  return (
    <>
      <p>The most important pattern in chemistry: as you walk along the periodic table from element 1 to 18, you add <strong>one proton and one electron each step</strong>. The shells fill up in a predictable way — and that pattern is the reason groups behave the same.</p>

      <h3>The rules, once more</h3>
      <ul>
        <li>Shell 1: max 2 electrons.</li>
        <li>Shell 2: max 8 electrons.</li>
        <li>Shell 3: max 8 electrons (for the first 20 elements).</li>
        <li>Always fill <strong>inside-out</strong>.</li>
      </ul>

      <div className="activity">
        <div className="activity-head"><h4>Build the first 18</h4><span className="badge">Sim</span></div>
        <p style={{ marginTop: 0 }}>Pick an element, then add the right number of protons, neutrons and electrons. Or hit Auto-build to watch the atom assemble itself.</p>
        <AtomBuilder />
      </div>

      <Callout kind="fact" title="Patterns you should see">
        H, Li, Na all have <strong>1 outer electron</strong> → same group, same behaviour.
        He, Ne, Ar all have <strong>full outer shells</strong> → noble gases, unreactive.
        F, Cl both have <strong>7 outer electrons</strong> → halogens, super reactive.
      </Callout>

      <div className="activity">
        <div className="activity-head"><h4>Quick check</h4><span className="badge">Quiz</span></div>
        <QuizMC
          question="An atom has the electron arrangement 2, 8, 7. Which existing element does it behave most like?"
          options={["Sodium (Na)", "Argon (Ar)", "Chlorine (Cl)", "Oxygen (O)"]}
          correctIndex={2}
          explain="It has 7 outer electrons — same as fluorine and chlorine. It's chlorine itself (Z = 17)."
        />
        <QuizMC
          question="Argon has 8 electrons in its outer shell. Why is it so unreactive?"
          options={[
            "It's too heavy to react",
            "Its outer shell is full — it doesn't need to gain or lose electrons",
            "It only exists at high temperatures",
            "It's poisonous"
          ]}
          correctIndex={1}
          explain="A full outer shell is energetically very stable. Argon (and the other noble gases) have no incentive to bond with anything."
        />
      </div>
    </>
  );
}

/* ------------------------------------------------------------
   Lesson 6.3.7 — History of the periodic table
------------------------------------------------------------ */
function Lesson637({ udl }) {
  const steps = [
    { yr: 1817, who: "Döbereiner", contrib: "Triads — grouped elements in threes with similar properties (e.g. Li / Na / K)." },
    { yr: 1864, who: "Newlands", contrib: "Law of Octaves — every 8th element seemed similar, like notes in a scale." },
    { yr: 1869, who: "Mendeleev", contrib: "First widely-accepted periodic table. Left gaps for unknown elements — and predicted their properties." },
    { yr: 1913, who: "Moseley", contrib: "Showed elements should be ordered by ATOMIC NUMBER (protons), not mass." },
  ];

  return (
    <>
      <p>The periodic table didn't appear fully-formed. It took a century of pattern-spotting, near-misses, and one brave dreamer named Mendeleev.</p>

      <div className="timeline">
        {steps.map((s, i) => (
          <div key={i} className="tl-step">
            <div className="yr">{s.yr}</div>
            <div className="who">{s.who}</div>
            <div className="name" style={{ fontSize: "0.78rem" }}>{s.contrib}</div>
          </div>
        ))}
      </div>

      <h3>Why Mendeleev's table worked when others failed</h3>
      <ul>
        <li>He arranged elements by atomic mass <em>and</em> chemical properties — not just mass.</li>
        <li>He left <strong>gaps</strong> where no known element fitted, and <strong>predicted</strong> what would eventually fill them.</li>
        <li>Within 15 years, three of those predicted elements (gallium, scandium, germanium) had been discovered — their properties matched his predictions almost exactly.</li>
        <li>He sometimes swapped elements out of strict mass order if their behaviour demanded it — a bold call that later turned out to be right.</li>
      </ul>

      <Callout kind="fact" title="The fix from Moseley (1913)">
        Henry Moseley showed the real ordering principle is <strong>atomic number</strong> (number of protons), not mass. Reorder by protons and every awkward swap Mendeleev made fixes itself. Moseley was killed at Gallipoli aged 27 — a huge loss to science.
      </Callout>

      <p>The modern table is still being added to — elements 113–118 were officially named between 2003 and 2016, all made in atom-smashing labs.</p>

      <div className="activity">
        <div className="activity-head"><h4>Quick check</h4><span className="badge">Quiz</span></div>
        <QuizMC
          question="Why was Mendeleev's decision to leave GAPS in his table so important?"
          options={[
            "It made the table prettier",
            "It let him predict undiscovered elements — and their predicted properties matched when they were found",
            "He didn't know where to put some elements",
            "He wanted to test his students"
          ]}
          correctIndex={1}
          explain="The gaps turned the table from a filing system into a prediction machine. Gallium, scandium and germanium all matched his predictions."
        />
      </div>
    </>
  );
}

Object.assign(window, { Lesson631, Lesson632, Lesson633, Lesson634, Lesson635, Lesson636, Lesson637, FormulaDecoder, SymbolGame, FlameTestSim, renderFormula });

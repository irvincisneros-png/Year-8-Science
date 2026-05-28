/* ============================================================
   Unit 6.2 — Atomic structure
   5 lessons + 2 simulations: history timeline, Rutherford gold-foil
   ============================================================ */

const { useState: u62_useState, useEffect: u62_useEffect, useMemo: u62_useMemo, useRef: u62_useRef } = React;

/* ------------------------------------------------------------
   Lesson 6.2.1 — The atom
------------------------------------------------------------ */
function Lesson621({ udl }) {
  return (
    <>
      <p>An <Term>atom</Term> is the smallest particle of an element that <em>still has the properties of that element</em>. If you took a chunk of pure copper and kept cutting it in half — like nano-origami — the smallest piece that would still behave like copper is a single copper atom.</p>
      <p>Cut any further and you get <strong>subatomic particles</strong> (protons, neutrons, electrons). Those don't have the properties of copper on their own.</p>

      <h3>Atoms are absurdly small</h3>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14 }}>
        <div className="card">
          <div style={{ fontFamily: "var(--font-display)", fontSize: "2.4rem", color: "var(--c-orange-deep)", lineHeight: 1 }}>100,000</div>
          <div style={{ fontSize: "0.92rem", color: "var(--ink-2)", marginTop: 6 }}>atoms thick — a single sheet of paper.</div>
        </div>
        <div className="card">
          <div style={{ fontFamily: "var(--font-display)", fontSize: "2.4rem", color: "var(--c-purple-deep)", lineHeight: 1 }}>10<sup style={{ fontSize: "0.5em" }}>18</sup></div>
          <div style={{ fontSize: "0.92rem", color: "var(--ink-2)", marginTop: 6 }}>atoms in one grain of salt. That's a billion-billion.</div>
        </div>
      </div>

      <h3>Every element has its own atoms</h3>
      <p>Hydrogen atoms aren't the same as helium atoms. Helium isn't carbon. <strong>All atoms of the same element are identical.</strong> All atoms of <em>different</em> elements have different sizes, masses and behaviours — that's why elements behave differently.</p>

      <Callout kind="fact" title="A 2,400-year-old idea">
        Around 400 BCE, the Greek philosopher <Term k="democritus">Democritus</Term> suggested that if you kept cutting matter in half, you'd eventually reach a particle that couldn't be cut anymore. He called it <em>átomos</em> — "uncuttable". It took until 1803 for John Dalton to provide actual scientific evidence.
      </Callout>

      <div className="activity">
        <div className="activity-head"><h4>Quick check</h4><span className="badge">Quiz</span></div>
        <QuizMC
          question="A piece of pure copper is split into ever smaller pieces. What's the smallest piece that still behaves like copper?"
          options={["A copper electron", "A copper atom", "A copper proton", "A copper nucleus"]}
          correctIndex={1}
          explain="An atom is the smallest unit of an element that still has the properties of that element."
        />
        <QuizMC
          question="What does the Greek word 'átomos' mean?"
          options={["Tiny ball", "Uncuttable", "Heavy", "Pure"]}
          correctIndex={1}
          explain="It literally means 'uncuttable' — the smallest possible piece."
        />
      </div>
    </>
  );
}

/* ------------------------------------------------------------
   Lesson 6.2.2 — Subatomic particles
------------------------------------------------------------ */
function Lesson622({ udl }) {
  return (
    <>
      <p>Atoms aren't really uncuttable after all. They're made of three kinds of <strong>subatomic particles</strong>:</p>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 14, margin: "10px 0 18px" }}>
        <div className="card" style={{ borderColor: "var(--c-red)", background: "var(--c-red-soft)" }}>
          <div className="particle proton" style={{ width: 56, height: 56, position: "relative", marginBottom: 8 }}>p⁺</div>
          <h4><Term>Proton</Term></h4>
          <div style={{ fontSize: "0.88rem", color: "var(--ink-2)" }}>Charge: <strong>+1</strong><br/>Mass: <strong>1</strong><br/>In the <Term>nucleus</Term></div>
        </div>
        <div className="card">
          <div className="particle neutron" style={{ width: 56, height: 56, position: "relative", marginBottom: 8 }}>n</div>
          <h4><Term>Neutron</Term></h4>
          <div style={{ fontSize: "0.88rem", color: "var(--ink-2)" }}>Charge: <strong>0</strong><br/>Mass: <strong>1</strong><br/>In the <Term>nucleus</Term></div>
        </div>
        <div className="card" style={{ borderColor: "var(--c-teal-deep)", background: "var(--c-teal-soft)" }}>
          <div className="particle electron" style={{ width: 56, height: 56, position: "relative", marginBottom: 8 }}>e⁻</div>
          <h4><Term>Electron</Term></h4>
          <div style={{ fontSize: "0.88rem", color: "var(--ink-2)" }}>Charge: <strong>−1</strong><br/>Mass: ~0 (1/1836)<br/>In <Term>shell</Term>s</div>
        </div>
      </div>

      <h3>Why atoms are usually neutral</h3>
      <p>Protons (+1) and electrons (−1) have <strong>equal and opposite charges</strong>. When an atom has the same number of protons and electrons, those charges cancel out and the atom has no overall charge. Add or remove electrons, and it becomes an <Term>ion</Term> — a charged version of the atom.</p>

      <Callout kind="tip" title="The mass thing">
        A proton is about <strong>1,836 times heavier</strong> than an electron. That's why the mass of an atom basically comes from its protons and neutrons in the nucleus — electrons barely register.
      </Callout>

      <div className="activity">
        <div className="activity-head"><h4>Quick check</h4><span className="badge">Quiz</span></div>
        <QuizMC
          question="A neutral atom has 8 protons. How many electrons must it have?"
          options={["0", "8", "16", "It depends on the element"]}
          correctIndex={1}
          explain="For an atom to be neutral, protons (+1 each) and electrons (−1 each) must balance. 8 protons → 8 electrons."
        />
        <QuizMC
          question="Which subatomic particle has almost no mass?"
          options={["Proton", "Neutron", "Electron", "Nucleus"]}
          correctIndex={2}
          explain="Electrons are about 1/1836 the mass of a proton — basically nothing on the atomic scale."
        />
      </div>
    </>
  );
}

/* ------------------------------------------------------------
   Lesson 6.2.3 — Planetary (Bohr) model
   Visual + interactive: show a generic atom with shell rings
------------------------------------------------------------ */
function PlanetaryDemo({ z = 6 }) {
  // Tiny non-interactive Bohr demo, used in 6.2.3
  const el = window.AppData.getElementByZ(z);
  if (!el) return null;
  const shells = el.shells || [2, Math.min(8, Math.max(0, z - 2)), Math.max(0, z - 10)];
  const W = 360, H = 240;
  const cx = W / 2, cy = H / 2;
  const baseR = 28;
  const ringStep = 28;

  return (
    <svg viewBox={`0 0 ${W} ${H}`} style={{ width: "100%", maxWidth: 420, display: "block", margin: "0 auto" }}>
      {/* shells */}
      {shells.map((_, i) => (
        <circle key={i} cx={cx} cy={cy} r={baseR + (i + 1) * ringStep} fill="none" stroke="oklch(0.6 0.03 250 / 0.45)" strokeDasharray="3 4" strokeWidth="1.2" />
      ))}
      {/* nucleus blob with mixed protons + neutrons */}
      <g>
        {(() => {
          const n = Math.max(z, Math.round(el.mass) - z);
          const total = z + n;
          const points = [];
          for (let i = 0; i < total; i++) {
            const ang = (i / total) * Math.PI * 2;
            const rad = total <= 4 ? 4 : 7;
            points.push([cx + Math.cos(ang) * rad, cy + Math.sin(ang) * rad, i < z ? "p" : "n"]);
          }
          return points.map(([x, y, t], i) => (
            <circle key={i} cx={x} cy={y} r="5" fill={t === "p" ? "oklch(0.6 0.2 25)" : "oklch(0.55 0 0)"} stroke="white" strokeWidth="0.8" />
          ));
        })()}
      </g>
      {/* electrons */}
      {shells.map((count, i) => {
        const r = baseR + (i + 1) * ringStep;
        return Array.from({ length: count }).map((_, j) => {
          const ang = (j / count) * Math.PI * 2 + i * 0.3;
          const x = cx + Math.cos(ang) * r;
          const y = cy + Math.sin(ang) * r;
          return <circle key={`${i}-${j}`} cx={x} cy={y} r="5" fill="oklch(0.55 0.16 230)" stroke="white" strokeWidth="0.8" />;
        });
      })}
      {/* labels */}
      <text x={cx} y={H - 8} textAnchor="middle" style={{ fontSize: 10, fill: "var(--ink-muted)", fontFamily: "var(--font-mono)" }}>{el.name} ({el.sym}) — Z = {el.z}</text>
    </svg>
  );
}

function Lesson623({ udl }) {
  return (
    <>
      <p>The <strong>planetary model</strong> (also called the <strong>Bohr model</strong>) is the picture you'll mostly use this year. Niels Bohr proposed it in 1913 — and even though it's not the most accurate model anymore, it's incredibly useful for understanding chemistry.</p>

      <h3>Inside the atom, in Bohr's words</h3>
      <ul>
        <li>The <Term>nucleus</Term> sits at the centre, like the Sun.</li>
        <li>The nucleus contains <strong>protons (+)</strong> and <strong>neutrons (0)</strong>, packed tightly.</li>
        <li><strong>Electrons (−)</strong> orbit around the nucleus in fixed <Term>shell</Term>s — like planets.</li>
        <li>Most of the atom is empty space.</li>
      </ul>

      <div className="card" style={{ background: "var(--bg-2)", padding: 18 }}>
        <PlanetaryDemo z={6} />
        <div style={{ textAlign: "center", color: "var(--ink-muted)", fontSize: "0.85rem", marginTop: 6 }}>
          Carbon (Z=6) — 2 in the first shell, 4 in the second.
        </div>
      </div>

      <h3>Shell rules</h3>
      <ul>
        <li><strong>1st shell:</strong> up to <strong>2</strong> electrons.</li>
        <li><strong>2nd shell:</strong> up to <strong>8</strong> electrons.</li>
        <li><strong>3rd shell:</strong> up to <strong>8</strong> electrons (for the first 20 elements).</li>
        <li>Electrons fill <em>inside out</em>. Inner shell first, then the next.</li>
      </ul>

      <Callout kind="fact" title="A football stadium of nothing">
        If an atom were the size of a football stadium, its nucleus would be the size of a <strong>pea</strong> in the centre circle. The electrons would be tiny specks zipping around in the far seats. Almost everything around you — and everything <em>inside</em> you — is empty space.
      </Callout>

      <p style={{ marginTop: 14 }}>You'll <em>build</em> all 18 of these models yourself in lesson 6.3.6.</p>

      <div className="activity">
        <div className="activity-head"><h4>Quick check</h4><span className="badge">Quiz</span></div>
        <QuizMC
          question="An atom has 2 electrons in shell 1, and 3 electrons in shell 2. How many electrons does it have in total?"
          options={["3", "5", "8", "10"]}
          correctIndex={1}
          explain="2 + 3 = 5 electrons. This is boron (Z=5)."
        />
        <QuizMC
          question="If most of an atom is empty space, why does a metal feel solid?"
          options={[
            "It's not really solid — your hand passes through it",
            "Electrons in your hand repel the electrons in the metal",
            "The nucleus is much bigger than people think",
            "Gravity holds the atoms together"
          ]}
          correctIndex={1}
          explain="The electrons in your hand and in the metal repel each other (like-charges repel). You're not actually touching the metal — you're feeling electrons push back."
        />
      </div>
    </>
  );
}

/* ------------------------------------------------------------
   Lesson 6.2.4 — History timeline (interactive)
------------------------------------------------------------ */
function HistoryViz({ model }) {
  // Draw a simple visualization of the active model
  const W = 360, H = 220;
  const cx = W / 2, cy = H / 2;
  return (
    <svg viewBox={`0 0 ${W} ${H}`} style={{ width: "100%", maxWidth: 420, display: "block", margin: "10px auto" }}>
      {model === "dalton" && (
        <g>
          <circle cx={cx} cy={cy} r="60" fill="oklch(0.7 0.13 30)" stroke="oklch(0.4 0.15 30)" strokeWidth="2" />
          <text x={cx} y={cy + 4} textAnchor="middle" style={{ fontSize: 12, fill: "white", fontFamily: "var(--font-display)" }}>solid sphere</text>
        </g>
      )}
      {model === "thomson" && (
        <g>
          <circle cx={cx} cy={cy} r="70" fill="oklch(0.78 0.13 30 / 0.7)" stroke="oklch(0.5 0.15 30)" strokeWidth="2" />
          {[[-30,-15],[20,-25],[35,15],[-15,30],[5,5],[-40,5],[15,-5]].map(([dx,dy], i) => (
            <circle key={i} cx={cx+dx} cy={cy+dy} r="6" fill="oklch(0.45 0.16 230)" stroke="white" strokeWidth="1" />
          ))}
          <text x={cx} y={H - 8} textAnchor="middle" style={{ fontSize: 10, fill: "var(--ink-muted)" }}>positive 'dough' with electron 'plums'</text>
        </g>
      )}
      {model === "rutherford" && (
        <g>
          <circle cx={cx} cy={cy} r="80" fill="none" stroke="oklch(0.6 0.03 250 / 0.4)" strokeDasharray="3 3" />
          {/* nucleus */}
          <circle cx={cx} cy={cy} r="8" fill="oklch(0.5 0.2 25)" />
          {/* scattered electrons */}
          {[[-50,-40],[60,-20],[-30,55],[55,40],[10,-65]].map(([dx,dy], i) => (
            <circle key={i} cx={cx+dx} cy={cy+dy} r="4" fill="oklch(0.45 0.16 230)" />
          ))}
          <text x={cx} y={H - 8} textAnchor="middle" style={{ fontSize: 10, fill: "var(--ink-muted)" }}>tiny dense nucleus, mostly empty space</text>
        </g>
      )}
      {model === "bohr" && (
        <g>
          {[30, 55, 80].map((r, i) => (
            <circle key={i} cx={cx} cy={cy} r={r} fill="none" stroke="oklch(0.6 0.03 250 / 0.55)" strokeDasharray="3 4" />
          ))}
          <circle cx={cx} cy={cy} r="9" fill="oklch(0.5 0.2 25)" />
          {[[0,-30],[30,0],[0,30],[-30,0]].map(([dx,dy], i) => (
            <circle key={i} cx={cx+dx} cy={cy+dy} r="4" fill="oklch(0.45 0.16 230)" />
          ))}
          {[[55,0],[-55,0],[0,55],[0,-55],[38,38],[-38,38],[38,-38],[-38,-38]].map(([dx,dy], i) => (
            <circle key={i} cx={cx+dx} cy={cy+dy} r="4" fill="oklch(0.45 0.16 230)" />
          ))}
          <text x={cx} y={H - 8} textAnchor="middle" style={{ fontSize: 10, fill: "var(--ink-muted)" }}>fixed shells / energy levels</text>
        </g>
      )}
      {model === "quantum" && (
        <g>
          <defs>
            <radialGradient id="cloud" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="oklch(0.45 0.16 230 / 0.95)" />
              <stop offset="40%" stopColor="oklch(0.55 0.16 230 / 0.4)" />
              <stop offset="100%" stopColor="oklch(0.65 0.16 230 / 0)" />
            </radialGradient>
          </defs>
          <ellipse cx={cx} cy={cy} rx="90" ry="68" fill="url(#cloud)" />
          <circle cx={cx} cy={cy} r="8" fill="oklch(0.5 0.2 25)" />
          <text x={cx} y={H - 8} textAnchor="middle" style={{ fontSize: 10, fill: "var(--ink-muted)" }}>probability cloud — fuzzy electron locations</text>
        </g>
      )}
    </svg>
  );
}

function Lesson624({ udl }) {
  const { HISTORY } = window.AppData;
  const [active, setActive] = u62_useState(HISTORY[0].id);
  const cur = HISTORY.find(h => h.id === active);

  return (
    <>
      <p>Our picture of the atom has been redrawn five times in 200 years. Every time a scientist invented better tools, they saw something new — and had to update the model. <strong>This is how science actually works:</strong> ideas get tested, improved, and sometimes replaced.</p>

      <div className="timeline">
        {HISTORY.map(h => (
          <button key={h.id} className={`tl-step ${active === h.id ? "active" : ""}`} onClick={() => setActive(h.id)}>
            <div className="yr">{h.year}</div>
            <div className="who">{h.who.split(/[\s&]+/).slice(-1)[0]}</div>
            <div className="name">{h.name}</div>
          </button>
        ))}
      </div>

      <div className="card" style={{ borderColor: "var(--ink)", boxShadow: "var(--shadow-2)" }}>
        <div style={{ display: "grid", gridTemplateColumns: "auto 1fr 1.4fr", gap: 18, alignItems: "center" }}>
          {cur.photo ? (
            <CCAvatar file={cur.photo} size={110} alt={cur.who} />
          ) : <div style={{ width: 110 }} />}
          <HistoryViz model={cur.id} />
          <div>
            <Chip variant="info">{cur.year}</Chip>
            <h3 style={{ margin: "8px 0 4px" }}>{cur.name}</h3>
            <div style={{ color: "var(--ink-muted)", fontSize: "0.88rem" }}>{cur.who}</div>
            <p style={{ marginTop: 10, fontWeight: 600 }}>{cur.one_liner}</p>
            <p style={{ fontSize: "0.92rem", color: "var(--ink-2)" }}>{cur.description}</p>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10, marginTop: 8, fontSize: "0.85rem" }}>
              <div><strong>Evidence:</strong> {cur.evidence}</div>
              <div><strong>Limitation:</strong> {cur.why_wrong}</div>
            </div>
          </div>
        </div>
      </div>

      <Callout kind="fact" title="Why teachers still use Bohr">
        The quantum cloud model is more accurate, but it's impossibly hard to draw and the maths is brutal. The Bohr (planetary) model is "wrong in interesting ways" — accurate enough to explain everything you need in school chemistry.
      </Callout>

      <div className="activity">
        <div className="activity-head"><h4>Quick check</h4><span className="badge">Quiz</span></div>
        <QuizMC
          question="What did Rutherford's gold-foil experiment prove that Thomson's plum-pudding model couldn't explain?"
          options={[
            "That electrons exist",
            "That the atom has a tiny, dense, positive nucleus and is mostly empty space",
            "That atoms can't be cut",
            "That elements emit specific colours of light"
          ]}
          correctIndex={1}
          explain="Most alpha particles passed straight through (mostly empty space) but a few bounced sharply back (hit something tiny and dense — the nucleus)."
        />
      </div>
    </>
  );
}

/* ------------------------------------------------------------
   Lesson 6.2.5 — Tech that revealed the atom + Rutherford simulator
------------------------------------------------------------ */
function RutherfordSim() {
  const [model, setModel] = u62_useState("nuclear"); // pudding | nuclear
  const [running, setRunning] = u62_useState(true);
  const [shots, setShots] = u62_useState({ through: 0, deflected: 0, back: 0 });
  const stageRef = u62_useRef(null);

  // Maintain a list of active particles
  const particlesRef = u62_useRef([]);
  const lastTimeRef = u62_useRef(0);
  const rafRef = u62_useRef(0);

  u62_useEffect(() => {
    let alive = true;
    function step(t) {
      if (!alive) return;
      const dt = lastTimeRef.current ? Math.min(0.05, (t - lastTimeRef.current) / 1000) : 0.016;
      lastTimeRef.current = t;
      const stage = stageRef.current;
      if (!stage) { rafRef.current = requestAnimationFrame(step); return; }
      const w = stage.clientWidth, h = stage.clientHeight;
      const cx = w * 0.62, cy = h * 0.5;
      const nucleusR = 6;
      const atomR = Math.min(w, h) * 0.32;

      // spawn
      if (running && particlesRef.current.length < 24) {
        if (Math.random() < 0.45) {
          const startY = cy + (Math.random() - 0.5) * atomR * 1.6;
          particlesRef.current.push({
            x: -10, y: startY,
            vx: 220, vy: 0,
            dead: false,
            colour: "oklch(0.62 0.2 50)",
            id: Math.random()
          });
        }
      }
      // update
      particlesRef.current.forEach(p => {
        if (p.dead) return;
        const dx = cx - p.x, dy = cy - p.y;
        const d = Math.hypot(dx, dy);

        if (model === "pudding") {
          // Inside atom-radius: gentle uniform deflection
          if (d < atomR) {
            // small randomish force
            p.vx += (Math.random() - 0.5) * 6;
            p.vy += (Math.random() - 0.5) * 6;
          }
        } else if (model === "nuclear") {
          // Coulomb-like inverse-square repulsion from nucleus
          if (d < nucleusR + 2) {
            // direct hit — bounce back HARD
            const a = Math.atan2(p.y - cy, p.x - cx);
            p.vx = Math.cos(a) * 260;
            p.vy = Math.sin(a) * 260;
          } else if (d < atomR) {
            const f = 1400 / Math.max(8, d * d);
            const ux = dx / d, uy = dy / d;
            p.vx -= ux * f;
            p.vy -= uy * f;
          }
        } else if (model === "solid") {
          // Dalton: solid ball, everything bounces
          if (d < atomR) {
            const a = Math.atan2(p.y - cy, p.x - cx);
            p.vx = Math.cos(a) * 220;
            p.vy = Math.sin(a) * 220;
          }
        }
        p.x += p.vx * dt;
        p.y += p.vy * dt;
        if (p.x > w + 30 || p.x < -30 || p.y < -30 || p.y > h + 30) {
          p.dead = true;
          // Classify
          const exitedRight = p.x > w + 20;
          const exitedBack = p.x < -20;
          if (exitedRight && Math.abs(p.y - cy) < atomR * 0.2) {
            setShots(s => ({ ...s, through: s.through + 1 }));
          } else if (exitedBack) {
            setShots(s => ({ ...s, back: s.back + 1 }));
          } else {
            setShots(s => ({ ...s, deflected: s.deflected + 1 }));
          }
        }
      });
      particlesRef.current = particlesRef.current.filter(p => !p.dead);

      // render via DOM (use a state bump)
      forceRender(c => c + 1);
      rafRef.current = requestAnimationFrame(step);
    }
    rafRef.current = requestAnimationFrame(step);
    return () => { alive = false; cancelAnimationFrame(rafRef.current); };
  }, [model, running]);

  // Force re-render trick
  const [, forceRender] = u62_useState(0);

  const total = shots.through + shots.deflected + shots.back;
  const reset = () => {
    particlesRef.current = [];
    setShots({ through: 0, deflected: 0, back: 0 });
  };

  return (
    <div>
      <div style={{ display: "flex", gap: 8, flexWrap: "wrap", marginBottom: 10 }}>
        <Button size="sm" variant={model === "solid" ? "primary" : "default"} onClick={() => { setModel("solid"); reset(); }}>Dalton solid sphere</Button>
        <Button size="sm" variant={model === "pudding" ? "primary" : "default"} onClick={() => { setModel("pudding"); reset(); }}>Thomson plum pudding</Button>
        <Button size="sm" variant={model === "nuclear" ? "primary" : "default"} onClick={() => { setModel("nuclear"); reset(); }}>Rutherford nuclear</Button>
        <span className="spacer" />
        <Button size="sm" variant="ghost" icon={running ? "pause" : "play"} onClick={() => setRunning(!running)}>{running ? "Pause" : "Play"}</Button>
        <Button size="sm" variant="ghost" icon="reset" onClick={reset}>Reset count</Button>
      </div>

      <div ref={stageRef} style={{
        position: "relative",
        width: "100%",
        aspectRatio: "16 / 8",
        background: "radial-gradient(circle at 62% 50%, var(--bg-2) 0%, var(--paper) 80%)",
        borderRadius: "var(--r)",
        overflow: "hidden",
        border: "1px solid var(--border)"
      }}>
        {/* Atom illustration */}
        {(() => {
          const w = stageRef.current?.clientWidth || 600;
          const h = stageRef.current?.clientHeight || 300;
          const cx = w * 0.62, cy = h * 0.5;
          const atomR = Math.min(w, h) * 0.32;
          return (
            <>
              {/* atom boundary */}
              <div style={{
                position: "absolute",
                left: cx - atomR, top: cy - atomR,
                width: atomR * 2, height: atomR * 2,
                borderRadius: "50%",
                border: model === "solid" ? "2px solid oklch(0.5 0.15 30)" : "1.5px dashed oklch(0.6 0.03 250 / 0.5)",
                background: model === "solid" ? "oklch(0.78 0.13 30 / 0.6)" :
                            model === "pudding" ? "oklch(0.85 0.13 30 / 0.35)" :
                            "transparent",
              }}/>
              {/* embedded electrons (pudding) */}
              {model === "pudding" && [[-30,-15],[20,-25],[35,15],[-15,30],[5,5],[-40,5],[15,-5],[40,-30],[-20,-40]].map(([dx, dy], i) => (
                <div key={i} className="particle electron" style={{
                  width: 12, height: 12,
                  left: cx + dx - 6,
                  top: cy + dy - 6,
                }}/>
              ))}
              {/* nucleus */}
              {model === "nuclear" && (
                <>
                  <div style={{
                    position: "absolute", left: cx - 6, top: cy - 6,
                    width: 12, height: 12, borderRadius: "50%",
                    background: "oklch(0.55 0.2 25)",
                    boxShadow: "0 0 12px oklch(0.6 0.2 25 / 0.7)"
                  }}/>
                  {/* a few electrons just for show */}
                  {[[-40,-50],[60,-40],[-50,50],[50,40],[0,-70],[0,70]].map(([dx,dy], i) => (
                    <div key={i} className="particle electron" style={{
                      width: 8, height: 8,
                      left: cx + dx - 4,
                      top: cy + dy - 4,
                    }}/>
                  ))}
                </>
              )}
              {/* alpha particle source */}
              <div style={{
                position: "absolute", left: 6, top: cy - 22, width: 24, height: 44,
                background: "var(--ink)", color: "var(--paper)", borderRadius: 6,
                fontSize: 10, display: "flex", alignItems: "center", justifyContent: "center",
                textAlign: "center", lineHeight: 1.1, fontFamily: "var(--font-mono)"
              }}>α-src</div>
              {/* particles */}
              {particlesRef.current.map(p => (
                <div key={p.id} style={{
                  position: "absolute",
                  left: p.x - 4, top: p.y - 4,
                  width: 8, height: 8, borderRadius: "50%",
                  background: p.colour,
                  boxShadow: "0 0 6px " + p.colour,
                }}/>
              ))}
            </>
          );
        })()}
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 10, marginTop: 12 }}>
        <div className="card" style={{ padding: 12 }}><div style={{ color: "var(--ink-muted)", fontSize: "0.8rem" }}>Passed through</div><div style={{ fontSize: "1.6rem", fontFamily: "var(--font-display)" }}>{shots.through}</div></div>
        <div className="card" style={{ padding: 12 }}><div style={{ color: "var(--ink-muted)", fontSize: "0.8rem" }}>Deflected</div><div style={{ fontSize: "1.6rem", fontFamily: "var(--font-display)" }}>{shots.deflected}</div></div>
        <div className="card" style={{ padding: 12 }}><div style={{ color: "var(--ink-muted)", fontSize: "0.8rem" }}>Bounced back</div><div style={{ fontSize: "1.6rem", fontFamily: "var(--font-display)" }}>{shots.back}</div></div>
      </div>

      <Callout kind="tip" title={model === "solid" ? "Dalton — solid ball" : model === "pudding" ? "Thomson — pudding" : "Rutherford — nucleus"} >
        {model === "solid" && "If atoms were solid balls, EVERY alpha particle would bounce. That's not what Rutherford saw."}
        {model === "pudding" && "If the positive charge were spread evenly through the atom, particles would only deflect a tiny bit. Some would still pass through, but none should bounce sharply back."}
        {model === "nuclear" && "What Rutherford actually observed: most particles pass straight through (atom is mostly empty), some deflect, and a rare few bounce almost straight back — they've hit the tiny dense nucleus."}
      </Callout>
    </div>
  );
}

function Lesson625({ udl }) {
  const techs = [
    { name: "Cathode ray tube", when: "Late 1800s", what: "Beams of negative particles in a vacuum.", impact: "Thomson discovers the electron → plum-pudding model." },
    { name: "Radioactive sources", when: "Early 1900s", what: "Alpha particles fired from radium / polonium.", impact: "Rutherford's gold-foil experiment → nuclear model." },
    { name: "Spectroscope", when: "1860s+", what: "Splits light into its component colours.", impact: "Each element has a unique 'fingerprint' → supported Bohr shells." },
    { name: "Particle accelerator", when: "1930s+", what: "Smashes particles at near-light speeds.", impact: "Discovery of quarks inside protons & neutrons." },
    { name: "Scanning tunnelling microscope", when: "1981+", what: "Maps atoms by sensing electron 'tunnelling'.", impact: "We can finally see individual atoms." },
  ];

  return (
    <>
      <p>Atoms are far too small for any ordinary microscope. Every time scientists built better tools, they could see more — and the atomic model improved. <strong>Without these technologies, our picture of the atom would have frozen at Dalton in 1803.</strong></p>

      <table>
        <thead><tr><th>Technology</th><th>What it does</th><th>Why it mattered</th></tr></thead>
        <tbody>
          {techs.map((t, i) => <tr key={i}>
            <td><strong>{t.name}</strong><div style={{ color: "var(--ink-muted)", fontSize: "0.8rem" }}>{t.when}</div></td>
            <td>{t.what}</td>
            <td>{t.impact}</td>
          </tr>)}
        </tbody>
      </table>

      <div className="activity">
        <div className="activity-head"><h4>Run Rutherford's gold-foil experiment</h4><span className="badge">Sim</span></div>
        <p style={{ marginTop: 0 }}>Fire alpha particles at the atom. Switch between the three competing models and watch what happens. Which one matches what Rutherford saw in 1911?</p>
        <RutherfordSim />
      </div>

      <Callout kind="fact" title="Rutherford's reaction">
        On seeing particles bounce back, Rutherford famously said it was "as if you had fired a 15-inch shell at a piece of tissue paper and it came back and hit you". A few weeks of head-scratching later, he proposed the nucleus.
      </Callout>
    </>
  );
}

Object.assign(window, { Lesson621, Lesson622, Lesson623, Lesson624, Lesson625 });

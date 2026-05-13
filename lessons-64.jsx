/* ============================================================
   Unit 6.4 — Atoms in context (materials & uses)
   ============================================================ */

const { useState: u64_useState, useMemo: u64_useMemo } = React;

function MaterialsChooser() {
  const { MATERIALS_CASES, getElementBySym } = window.AppData;
  const [idx, setIdx] = u64_useState(0);
  const [picked, setPicked] = u64_useState(null);
  const cur = MATERIALS_CASES[idx];

  const next = () => { setIdx((idx + 1) % MATERIALS_CASES.length); setPicked(null); };
  const prev = () => { setIdx((idx - 1 + MATERIALS_CASES.length) % MATERIALS_CASES.length); setPicked(null); };

  const isCorrect = picked === cur.correct;

  // Inline SVG illustrations keyed to the item name
  const visual = (() => {
    switch (cur.item) {
      case "Drink can":
        return (
          <svg viewBox="0 0 120 140" style={{ width: "100%", height: "100%" }}>
            <defs>
              <linearGradient id="can" x1="0" x2="1" y1="0" y2="0">
                <stop offset="0%" stopColor="oklch(0.65 0.04 250)" />
                <stop offset="35%" stopColor="oklch(0.88 0.03 240)" />
                <stop offset="60%" stopColor="oklch(0.78 0.04 245)" />
                <stop offset="100%" stopColor="oklch(0.55 0.04 250)" />
              </linearGradient>
              <linearGradient id="canLabel" x1="0" x2="0" y1="0" y2="1">
                <stop offset="0%" stopColor="oklch(0.55 0.2 25)" />
                <stop offset="100%" stopColor="oklch(0.4 0.2 20)" />
              </linearGradient>
            </defs>
            {/* shadow */}
            <ellipse cx="60" cy="128" rx="32" ry="4" fill="oklch(0.3 0.03 250 / 0.2)" />
            {/* body */}
            <rect x="30" y="22" width="60" height="100" rx="3" fill="url(#can)" />
            {/* top rim */}
            <ellipse cx="60" cy="22" rx="30" ry="5" fill="oklch(0.85 0.03 240)" stroke="oklch(0.5 0.03 250)" strokeWidth="0.8"/>
            <ellipse cx="60" cy="22" rx="26" ry="3.5" fill="oklch(0.6 0.03 250)" />
            {/* pull tab */}
            <ellipse cx="60" cy="22" rx="8" ry="2" fill="oklch(0.5 0.03 250)" />
            <rect x="56" y="18" width="8" height="1.5" rx="0.7" fill="oklch(0.35 0.02 250)" />
            {/* bottom rim */}
            <ellipse cx="60" cy="122" rx="30" ry="5" fill="oklch(0.55 0.03 250)" />
            {/* label band */}
            <rect x="30" y="48" width="60" height="42" fill="url(#canLabel)" />
            <text x="60" y="74" textAnchor="middle" style={{ fontSize: 11, fontFamily: "var(--font-display)", fill: "white", fontWeight: 600 }}>FIZZ</text>
            <text x="60" y="84" textAnchor="middle" style={{ fontSize: 4, fontFamily: "var(--font-mono)", fill: "white", opacity: 0.85, letterSpacing: 1 }}>375ml</text>
            {/* highlight strip */}
            <rect x="34" y="22" width="3" height="100" fill="oklch(0.98 0.01 240 / 0.5)" />
          </svg>
        );
      case "Electrical wire (in your wall)":
        return (
          <svg viewBox="0 0 140 100" style={{ width: "100%", height: "100%" }}>
            <defs>
              <linearGradient id="copperCore" x1="0" x2="0" y1="0" y2="1">
                <stop offset="0%" stopColor="oklch(0.85 0.14 50)" />
                <stop offset="50%" stopColor="oklch(0.6 0.17 40)" />
                <stop offset="100%" stopColor="oklch(0.42 0.16 35)" />
              </linearGradient>
            </defs>
            {/* insulation casing */}
            <path d="M 5,30 Q 30,55 60,40 T 130,38 L 130,55 Q 100,70 70,58 T 5,55 Z"
              fill="oklch(0.78 0.13 30)" stroke="oklch(0.45 0.15 25)" strokeWidth="1"/>
            {/* cut-back showing copper */}
            <path d="M 80,40 L 130,38 L 130,55 L 80,57 Z" fill="oklch(0.55 0.04 30)" opacity="0.7"/>
            {/* exposed copper strands */}
            <g stroke="oklch(0.55 0.17 40)" strokeWidth="1.6" strokeLinecap="round" fill="none">
              <path d="M 95,42 Q 110,45 130,42" />
              <path d="M 95,46 Q 110,49 130,46" />
              <path d="M 95,50 Q 110,53 130,50" />
              <path d="M 95,54 Q 110,57 130,54" />
            </g>
            <path d="M 90,40 Q 105,52 130,48" stroke="url(#copperCore)" strokeWidth="2.5" fill="none" strokeLinecap="round" />
            {/* electricity spark */}
            <g fill="oklch(0.88 0.15 90)">
              <path d="M 132,40 L 138,46 L 134,46 L 138,52 L 132,52 L 136,58 L 130,53 L 134,53 L 130,47 L 132,47 Z" />
            </g>
          </svg>
        );
      case "Light bulb filament":
        return (
          <svg viewBox="0 0 120 140" style={{ width: "100%", height: "100%" }}>
            <defs>
              <radialGradient id="bulbGlow" cx="50%" cy="55%">
                <stop offset="0%" stopColor="oklch(0.97 0.16 90 / 0.95)" />
                <stop offset="40%" stopColor="oklch(0.88 0.16 80 / 0.7)" />
                <stop offset="100%" stopColor="oklch(0.85 0.12 80 / 0)" />
              </radialGradient>
              <radialGradient id="bulbGlass" cx="40%" cy="40%">
                <stop offset="0%" stopColor="oklch(0.99 0.02 90 / 0.8)" />
                <stop offset="60%" stopColor="oklch(0.95 0.08 85 / 0.4)" />
                <stop offset="100%" stopColor="oklch(0.85 0.1 80 / 0.2)" />
              </radialGradient>
            </defs>
            {/* glow halo */}
            <circle cx="60" cy="60" r="55" fill="url(#bulbGlow)" />
            {/* glass bulb */}
            <path d="M 35,75 Q 25,55 35,38 Q 45,18 60,18 Q 75,18 85,38 Q 95,55 85,75 Z"
              fill="url(#bulbGlass)" stroke="oklch(0.75 0.06 80)" strokeWidth="1" />
            {/* metal base */}
            <rect x="46" y="73" width="28" height="6" fill="oklch(0.45 0.03 80)" />
            <path d="M 46,79 L 74,79 L 72,90 L 48,90 Z" fill="oklch(0.55 0.04 80)" />
            {/* base threads */}
            <line x1="48" y1="83" x2="72" y2="83" stroke="oklch(0.35 0.03 80)" strokeWidth="0.6" />
            <line x1="48" y1="86" x2="72" y2="86" stroke="oklch(0.35 0.03 80)" strokeWidth="0.6" />
            {/* contact tip */}
            <ellipse cx="60" cy="93" rx="6" ry="2" fill="oklch(0.5 0.03 80)" />
            {/* filament support */}
            <line x1="55" y1="73" x2="55" y2="55" stroke="oklch(0.4 0.05 80)" strokeWidth="0.8" />
            <line x1="65" y1="73" x2="65" y2="55" stroke="oklch(0.4 0.05 80)" strokeWidth="0.8" />
            {/* glowing filament — zig-zag */}
            <path d="M 55,55 L 57,50 L 53,46 L 57,42 L 53,38 L 57,34 L 53,32 L 57,30 L 63,30 L 67,32 L 63,34 L 67,38 L 63,42 L 67,46 L 63,50 L 65,55"
              fill="none" stroke="oklch(0.98 0.18 90)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" filter="drop-shadow(0 0 4px oklch(0.95 0.18 80))" />
            <path d="M 55,55 L 57,50 L 53,46 L 57,42 L 53,38 L 57,34 L 53,32 L 57,30 L 63,30 L 67,32 L 63,34 L 67,38 L 63,42 L 67,46 L 63,50 L 65,55"
              fill="none" stroke="oklch(0.85 0.18 80)" strokeWidth="0.6" />
          </svg>
        );
      case "Aircraft body":
        return (
          <svg viewBox="0 0 200 120" style={{ width: "100%", height: "100%" }}>
            <defs>
              <linearGradient id="planeBody" x1="0" x2="0" y1="0" y2="1">
                <stop offset="0%" stopColor="oklch(0.95 0.01 240)" />
                <stop offset="50%" stopColor="oklch(0.82 0.02 240)" />
                <stop offset="100%" stopColor="oklch(0.6 0.03 240)" />
              </linearGradient>
            </defs>
            {/* tail wing */}
            <path d="M 30,55 L 18,30 L 28,30 L 42,55 Z" fill="oklch(0.65 0.03 240)" />
            {/* main body */}
            <ellipse cx="100" cy="60" rx="90" ry="14" fill="url(#planeBody)" stroke="oklch(0.55 0.04 240)" strokeWidth="0.8" />
            {/* nose cone */}
            <path d="M 175,60 Q 195,55 195,60 Q 195,65 175,60" fill="oklch(0.4 0.04 240)" />
            {/* main wing */}
            <path d="M 70,68 L 130,68 L 155,90 L 95,82 Z" fill="oklch(0.75 0.02 240)" stroke="oklch(0.55 0.04 240)" strokeWidth="0.8" />
            {/* engine */}
            <ellipse cx="115" cy="80" rx="10" ry="5" fill="oklch(0.45 0.03 240)" />
            <circle cx="120" cy="80" r="3" fill="oklch(0.3 0.04 240)" />
            {/* windows */}
            <g fill="oklch(0.35 0.08 220)">
              {[60, 75, 90, 105, 120, 135, 150].map((x, i) => (
                <rect key={i} x={x} y="55" width="6" height="4" rx="1.5" />
              ))}
            </g>
            {/* cockpit */}
            <path d="M 165,55 Q 172,52 178,58 L 175,60 L 168,60 Z" fill="oklch(0.4 0.08 220)" />
            {/* clouds */}
            <ellipse cx="40" cy="20" rx="14" ry="5" fill="oklch(0.97 0.02 240 / 0.7)" />
            <ellipse cx="160" cy="25" rx="18" ry="6" fill="oklch(0.97 0.02 240 / 0.7)" />
          </svg>
        );
      case "Cutlery":
        return (
          <svg viewBox="0 0 140 140" style={{ width: "100%", height: "100%" }}>
            <defs>
              <linearGradient id="steel" x1="0" x2="1" y1="0" y2="0">
                <stop offset="0%" stopColor="oklch(0.6 0.02 240)" />
                <stop offset="50%" stopColor="oklch(0.92 0.01 240)" />
                <stop offset="100%" stopColor="oklch(0.55 0.02 240)" />
              </linearGradient>
            </defs>
            {/* fork */}
            <g transform="translate(30, 12) rotate(-8)">
              <rect x="-4" y="40" width="8" height="75" rx="2" fill="url(#steel)" />
              <path d="M -8,40 L -6,8 L -4,8 L -3,38 L 3,38 L 4,8 L 6,8 L 8,40 Z" fill="url(#steel)" stroke="oklch(0.5 0.02 240)" strokeWidth="0.5"/>
              <rect x="-6" y="6" width="12" height="3" fill="oklch(0.5 0.02 240)" rx="1" />
            </g>
            {/* knife */}
            <g transform="translate(70, 12)">
              <rect x="-4" y="40" width="8" height="75" rx="2" fill="url(#steel)" />
              <path d="M -5,40 L -3,8 Q -2,4 0,4 Q 2,4 3,8 L 5,40 Z" fill="url(#steel)" stroke="oklch(0.5 0.02 240)" strokeWidth="0.5"/>
              <line x1="-2" y1="14" x2="-2" y2="38" stroke="oklch(0.55 0.02 240)" strokeWidth="0.5" />
            </g>
            {/* spoon */}
            <g transform="translate(110, 12) rotate(8)">
              <rect x="-4" y="40" width="8" height="75" rx="2" fill="url(#steel)" />
              <ellipse cx="0" cy="22" rx="11" ry="18" fill="url(#steel)" stroke="oklch(0.5 0.02 240)" strokeWidth="0.5"/>
              <ellipse cx="-2" cy="20" rx="6" ry="11" fill="oklch(0.95 0.01 240 / 0.6)" />
            </g>
          </svg>
        );
      case "MRI scanner cooling":
        return (
          <svg viewBox="0 0 160 120" style={{ width: "100%", height: "100%" }}>
            <defs>
              <linearGradient id="mri" x1="0" x2="1" y1="0" y2="0">
                <stop offset="0%" stopColor="oklch(0.65 0.04 240)" />
                <stop offset="50%" stopColor="oklch(0.92 0.02 240)" />
                <stop offset="100%" stopColor="oklch(0.6 0.04 240)" />
              </linearGradient>
              <radialGradient id="mriBore" cx="50%" cy="50%">
                <stop offset="0%" stopColor="oklch(0.25 0.04 240)" />
                <stop offset="100%" stopColor="oklch(0.4 0.05 240)" />
              </radialGradient>
            </defs>
            {/* base */}
            <rect x="20" y="92" width="120" height="14" rx="2" fill="oklch(0.55 0.02 240)" />
            {/* main donut body */}
            <rect x="20" y="22" width="120" height="72" rx="14" fill="url(#mri)" stroke="oklch(0.4 0.04 240)" strokeWidth="0.8"/>
            {/* bore (hole through middle) */}
            <ellipse cx="80" cy="58" rx="34" ry="26" fill="url(#mriBore)" />
            {/* patient bed */}
            <rect x="40" y="62" width="80" height="6" rx="1" fill="oklch(0.7 0.02 240)" />
            <rect x="40" y="68" width="80" height="3" fill="oklch(0.5 0.02 240)" />
            {/* cold-vapour wisps (helium cooling) */}
            <g fill="none" stroke="oklch(0.7 0.13 230 / 0.6)" strokeWidth="1.2" strokeLinecap="round">
              <path d="M 28,18 Q 32,10 36,16 Q 40,22 44,14" />
              <path d="M 116,16 Q 120,8 124,14 Q 128,20 132,12" />
            </g>
            <g fill="oklch(0.75 0.13 230 / 0.5)">
              <circle cx="50" cy="14" r="2" />
              <circle cx="110" cy="12" r="1.8" />
              <circle cx="70" cy="8" r="1.5" />
              <circle cx="92" cy="10" r="1.5" />
            </g>
            {/* small "He" label */}
            <text x="80" y="113" textAnchor="middle" style={{ fontSize: 7, fontFamily: "var(--font-mono)", fill: "var(--ink-muted)", letterSpacing: 1 }}>cooled with liquid He · −269°C</text>
          </svg>
        );
      default:
        return null;
    }
  })();

  return (
    <div>
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 14 }}>
        <Button size="sm" icon="left" onClick={prev}>Prev</Button>
        <div style={{ textAlign: "center" }}>
          <div style={{ fontSize: "0.78rem", color: "var(--ink-muted)" }}>Brief {idx + 1} of {MATERIALS_CASES.length}</div>
          <h3 style={{ margin: "4px 0" }}>{cur.item}</h3>
        </div>
        <Button size="sm" iconRight="right" onClick={next}>Next</Button>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "200px 1fr", gap: 16, marginBottom: 14 }}>
        <div style={{
          background: "linear-gradient(135deg, oklch(0.96 0.02 60) 0%, oklch(0.94 0.03 200) 100%)",
          borderRadius: "var(--r)",
          border: "1px solid var(--border)",
          padding: 14,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          aspectRatio: "1",
        }}>
          {visual}
        </div>
        <div className="card" style={{ background: "var(--bg-2)" }}>
          <div style={{ fontWeight: 600, marginBottom: 6 }}>What it needs:</div>
          <ul style={{ margin: 0, paddingLeft: 20, fontSize: "0.92rem" }}>
            {cur.needs.map((n, i) => <li key={i}>{n}</li>)}
          </ul>
        </div>
      </div>

      <h4 style={{ marginBottom: 10 }}>What would you make it from?</h4>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 10 }}>
        {cur.options.map(opt => {
          const isElement = opt.length <= 2 && /^[A-Z]/.test(opt);
          const el = isElement ? getElementBySym(opt) : null;
          const name = el?.name || (opt === "stainless" ? "Stainless steel" : opt);
          const isMyPick = picked === opt;
          const showRight = picked && opt === cur.correct;
          const showWrong = picked === opt && opt !== cur.correct;

          return (
            <button
              key={opt}
              onClick={() => setPicked(opt)}
              disabled={!!picked && !isMyPick && opt !== cur.correct}
              className="card"
              style={{
                background: showRight ? "var(--c-green-soft)" : showWrong ? "var(--c-red-soft)" : isMyPick ? "var(--bg-2)" : "var(--paper)",
                borderColor: showRight ? "var(--c-green)" : showWrong ? "var(--c-red)" : isMyPick ? "var(--ink)" : "var(--border)",
                cursor: picked ? "default" : "pointer",
                fontFamily: "inherit",
                color: "inherit",
                textAlign: "center",
                padding: 14,
              }}
            >
              {el ? (
                <>
                  <div style={{ fontFamily: "var(--font-display)", fontSize: "1.8rem" }}>{el.sym}</div>
                  <div style={{ fontSize: "0.85rem", fontWeight: 600 }}>{el.name}</div>
                </>
              ) : (
                <div style={{ fontSize: "0.95rem", fontWeight: 600 }}>{name}</div>
              )}
            </button>
          );
        })}
      </div>

      {picked && (
        <div style={{ marginTop: 14 }}>
          {isCorrect ?
            <Callout kind="tip" title={`✓ ${cur.correct_name} — good choice.`}>{cur.why}</Callout>
            : <Callout kind="warn" title="A working engineer would reach for something else here.">The best fit is <strong>{cur.correct_name}</strong>. {cur.why}</Callout>
          }
        </div>
      )}
    </div>
  );
}

function Lesson641({ udl }) {
  return (
    <>
      <p>Knowing what materials <em>can</em> do is half the picture. Real engineers also weigh: <strong>how much does it cost? How available is it? How easy is it to recycle?</strong> A perfect material that's too rare won't be used. A cheap-and-cheerful one that's "good enough" often wins.</p>

      <h3>What goes into the decision</h3>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 10 }}>
        {[
          { t: "Physical properties", d: "Strength, density, hardness, transparency, melting point." },
          { t: "Chemical properties", d: "Reactivity, resistance to rust, behaviour with acids and water." },
          { t: "Electrical / thermal", d: "Does it conduct heat? Electricity? Or insulate?" },
          { t: "Availability", d: "Is it everywhere on Earth, or are there only a few mines?" },
          { t: "Cost", d: "Extraction + processing + transport." },
          { t: "Environmental impact", d: "Pollution, energy, recyclability." },
        ].map((c, i) => (
          <div key={i} className="card">
            <h4>{c.t}</h4>
            <p style={{ fontSize: "0.88rem", color: "var(--ink-2)", margin: "6px 0 0" }}>{c.d}</p>
          </div>
        ))}
      </div>

      <h3>Case studies you should know</h3>
      <table>
        <thead><tr><th>Item</th><th>Material</th><th>Why this choice</th></tr></thead>
        <tbody>
          <tr><td>Aircraft body</td><td>Aluminium alloy (duralumin)</td><td>Light, corrosion-resistant, easily shaped. Pure Al is too soft so it's alloyed with Cu + Mg.</td></tr>
          <tr><td>Drink can</td><td>Aluminium</td><td>Light, doesn't rust, easy to recycle. Recycling uses only 5% of the energy of new aluminium!</td></tr>
          <tr><td>Bridge / building</td><td>Steel (Fe + C) — sometimes stainless</td><td>Strong, abundant, cheap. Chromium added for outdoor structures to stop rust.</td></tr>
          <tr><td>Electrical wire</td><td>Copper</td><td>Brilliant conductor, ductile, much cheaper than silver.</td></tr>
          <tr><td>Jewellery</td><td>Gold (usually alloyed)</td><td>Doesn't tarnish, attractive, soft to shape. Alloyed with Cu/Ag/Zn for hardness.</td></tr>
          <tr><td>Concrete</td><td>Mostly Ca, Si, Al, O</td><td>Cheap, very strong under compression, raw materials are everywhere.</td></tr>
        </tbody>
      </table>

      <Callout kind="fact" title="Why not platinum wires?">
        Platinum conducts electricity. Silver conducts even better. But they're both <strong>far more expensive</strong> than copper, so we never wire houses with them. "Good enough + cheap" beats "perfect + impossible" every time.
      </Callout>

      <div className="activity">
        <div className="activity-head"><h4>Pick the right material</h4><span className="badge">Sim</span></div>
        <p style={{ marginTop: 0 }}>Six design briefs. For each, pick the material an engineer would actually use. We'll tell you why.</p>
        <MaterialsChooser />
      </div>

      <div className="activity">
        <div className="activity-head"><h4>Research task</h4><span className="badge">Extension</span></div>
        <p style={{ marginTop: 0 }}>Pick <strong>three everyday items</strong> from different parts of your life (a kitchen item, a transport item, a personal item). For each, find out:</p>
        <ol style={{ paddingLeft: 22 }}>
          <li>What's it made of?</li>
          <li>What 3 properties make it suit the job?</li>
          <li>Where does the material come from? Common or rare?</li>
          <li>What's <em>one</em> alternative material that could also work?</li>
        </ol>
        <p style={{ fontSize: "0.88rem", color: "var(--ink-2)" }}>Bonus: pick one item and trace its <em>environmental footprint</em> from raw material to landfill or recycling.</p>
      </div>
    </>
  );
}

Object.assign(window, { Lesson641, MaterialsChooser });

/* ============================================================
   Periodic Table + Atom Builder (used by Unit 6.3 lessons)
   Exposes: PeriodicTable, AtomBuilder
   ============================================================ */

const { useState: pt_useState, useEffect: pt_useEffect, useMemo: pt_useMemo, useRef: pt_useRef } = React;

/* ------------------------------------------------------------
   PeriodicTable component — full 118 element grid
   Props: filter, highlightCategory, onSelect, selected, mode
------------------------------------------------------------ */
function PeriodicTable({ onSelect, selected, highlightCategory, dimOthers, mode = "default" }) {
  const { PT_LAYOUT, ELEMENTS, getElementByZ, CATEGORY_LABELS } = window.AppData;

  return (
    <div className="ptable-wrap">
      <div className="ptable">
        {PT_LAYOUT.flatMap((row, r) =>
          row.map((z, c) => {
            if (!z) return <div key={`${r}-${c}`} className="pt-cell empty" />;
            const el = getElementByZ(z);
            const isHighlighted = selected === z || (highlightCategory && el.category === highlightCategory);
            const isDim = dimOthers && highlightCategory && el.category !== highlightCategory && selected !== z;
            return (
              <button
                key={z}
                className={`pt-cell ${el.category} ${isHighlighted ? "highlight" : ""} ${isDim ? "dim" : ""}`}
                onClick={() => onSelect && onSelect(z)}
                title={`${el.name} (${el.sym})`}
              >
                <span className="num">{el.z}</span>
                <span className="sym">{el.sym}</span>
                <span className="name">{el.name}</span>
              </button>
            );
          })
        )}
      </div>

      <div className="pt-legend">
        {Object.entries(CATEGORY_LABELS).map(([k, label]) => (
          <div key={k} className="pt-legend-item">
            <div className={`pt-legend-sw pt-cell ${k}`} style={{ width: 14, height: 14, padding: 0 }} />
            <span>{label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ------------------------------------------------------------
   ElementDetail — info card shown alongside table or in popovers
------------------------------------------------------------ */
function ElementDetail({ z }) {
  const { getElementByZ, CATEGORY_LABELS } = window.AppData;
  if (!z) return (
    <div className="card" style={{ background: "var(--bg-2)", textAlign: "center", padding: 30, color: "var(--ink-muted)" }}>
      Click any element to learn more.
    </div>
  );
  const el = getElementByZ(z);
  return (
    <div className="elem-detail">
      <div className={`big-card pt-cell ${el.category}`} style={{ aspectRatio: 1, cursor: "default" }}>
        <span className="num">{el.z}</span>
        <span className="sym">{el.sym}</span>
        <span className="name">{el.name}</span>
        <span className="mass">{el.mass}</span>
      </div>
      <div>
        <h3 style={{ marginTop: 0 }}>{el.name}</h3>
        <div style={{ display: "flex", gap: 6, flexWrap: "wrap", marginBottom: 8 }}>
          <Chip variant="info">{CATEGORY_LABELS[el.category]}</Chip>
          {el.group ? <Chip>Group {el.group}</Chip> : null}
          <Chip>Period {el.period}</Chip>
          <Chip>State: {el.state}</Chip>
        </div>
        <p style={{ margin: "8px 0", fontSize: "0.92rem" }}><strong>Uses:</strong> {el.uses}</p>
        {el.fact && <p style={{ margin: 0, fontSize: "0.88rem", color: "var(--ink-2)", fontStyle: "italic" }}>{el.fact}</p>}
        {el.shells && (
          <div style={{ marginTop: 10, fontSize: "0.85rem" }}>
            <strong>Electron shells:</strong> <span className="mono">{el.shells.join(", ")}</span>
          </div>
        )}
      </div>
    </div>
  );
}

/* ------------------------------------------------------------
   AtomBuilder — interactive Bohr model builder for first 18
------------------------------------------------------------ */
function AtomBuilder() {
  const { ELEMENTS, getElementByZ } = window.AppData;
  const first18 = ELEMENTS.filter(e => e.z <= 18);

  const [z, setZ] = pt_useState(1);
  const [protonsPlaced, setProtonsPlaced] = pt_useState(0);
  const [neutronsPlaced, setNeutronsPlaced] = pt_useState(0);
  const [electronsPlaced, setElectronsPlaced] = pt_useState(0);
  const [autoBuild, setAutoBuild] = pt_useState(false);

  const el = getElementByZ(z);
  const targetProtons = el.z;
  const targetNeutrons = Math.max(0, Math.round(el.mass) - el.z);
  const targetElectrons = el.z;

  const switchElement = (newZ) => {
    setZ(newZ);
    setProtonsPlaced(0);
    setNeutronsPlaced(0);
    setElectronsPlaced(0);
  };

  // Auto-build animation
  pt_useEffect(() => {
    if (!autoBuild) return;
    let cancelled = false;
    let step = 0;
    const totalSteps = targetProtons + targetNeutrons + targetElectrons;
    const tick = () => {
      if (cancelled) return;
      step++;
      if (step <= targetProtons) setProtonsPlaced(step);
      else if (step <= targetProtons + targetNeutrons) setNeutronsPlaced(step - targetProtons);
      else if (step <= totalSteps) setElectronsPlaced(step - targetProtons - targetNeutrons);
      else { setAutoBuild(false); return; }
      setTimeout(tick, 250);
    };
    tick();
    return () => { cancelled = true; };
  }, [autoBuild, z]);

  // Electron shell distribution given count
  const shells = pt_useMemo(() => {
    const caps = [2, 8, 8];
    const result = [];
    let remaining = electronsPlaced;
    for (let i = 0; i < caps.length && remaining > 0; i++) {
      const k = Math.min(caps[i], remaining);
      result.push(k);
      remaining -= k;
    }
    return result;
  }, [electronsPlaced]);

  const isComplete = protonsPlaced === targetProtons && neutronsPlaced === targetNeutrons && electronsPlaced === targetElectrons;
  const isNeutral = protonsPlaced === electronsPlaced;
  const overallCharge = protonsPlaced - electronsPlaced;

  // Stage layout
  const W = 600, H = 380;
  const cx = W / 2, cy = H / 2;
  const baseR = 32;
  const ringStep = 42;

  // Nucleus particle positions
  const nucleusParticles = pt_useMemo(() => {
    const total = protonsPlaced + neutronsPlaced;
    const out = [];
    for (let i = 0; i < total; i++) {
      const ring = Math.floor(Math.sqrt(i));
      const idxInRing = i - ring * ring;
      const ringSize = (ring + 1) * (ring + 1) - ring * ring;
      const ang = (idxInRing / ringSize) * Math.PI * 2 + ring * 0.5;
      const rad = ring * 9;
      const isProton = i < protonsPlaced;
      out.push({ x: cx + Math.cos(ang) * rad, y: cy + Math.sin(ang) * rad, type: isProton ? "proton" : "neutron" });
    }
    return out;
  }, [protonsPlaced, neutronsPlaced]);

  // Electron positions per shell
  const electronDots = pt_useMemo(() => {
    const out = [];
    shells.forEach((count, si) => {
      const r = baseR + (si + 1) * ringStep;
      for (let i = 0; i < count; i++) {
        const ang = (i / count) * Math.PI * 2 - Math.PI / 2 + si * 0.4;
        out.push({ x: cx + Math.cos(ang) * r, y: cy + Math.sin(ang) * r, shell: si });
      }
    });
    return out;
  }, [shells]);

  return (
    <div>
      <div style={{ display: "flex", gap: 14, alignItems: "flex-start", flexWrap: "wrap" }}>
        {/* Stage */}
        <div style={{ flex: "2 1 460px", minWidth: 360 }}>
          <div className="atom-stage" style={{ aspectRatio: `${W} / ${H}` }}>
            <svg viewBox={`0 0 ${W} ${H}`} style={{ position: "absolute", inset: 0, width: "100%", height: "100%" }}>
              {/* Shell rings (always show possible shells based on Z) */}
              {[0, 1, 2].map(i => {
                const need = el.shells ? el.shells.length : 1;
                const has = i < need;
                if (!has) return null;
                const r = baseR + (i + 1) * ringStep;
                return <circle key={i} cx={cx} cy={cy} r={r} fill="none" stroke="oklch(0.6 0.03 250 / 0.4)" strokeDasharray="3 4" strokeWidth="1.2" />;
              })}
              {/* nucleus halo */}
              <circle cx={cx} cy={cy} r={baseR - 2} fill="oklch(0.95 0.06 60 / 0.5)" stroke="oklch(0.6 0.03 250 / 0.3)" strokeDasharray="2 3" />
              {/* nucleus particles */}
              {nucleusParticles.map((p, i) => (
                <g key={i}>
                  <circle cx={p.x} cy={p.y} r="7" fill={p.type === "proton" ? "oklch(0.6 0.22 25)" : "oklch(0.55 0 0)"} stroke="white" strokeWidth="1.2" />
                  <text x={p.x} y={p.y + 2.5} textAnchor="middle" style={{ fontSize: 7, fill: "white", fontFamily: "var(--font-mono)", fontWeight: 700 }}>
                    {p.type === "proton" ? "p" : "n"}
                  </text>
                </g>
              ))}
              {/* electrons */}
              {electronDots.map((p, i) => (
                <g key={i}>
                  <circle cx={p.x} cy={p.y} r="7" fill="oklch(0.5 0.18 230)" stroke="white" strokeWidth="1.2">
                    <animate attributeName="opacity" values="0;1" dur="0.3s" fill="freeze" />
                  </circle>
                  <text x={p.x} y={p.y + 2.5} textAnchor="middle" style={{ fontSize: 7, fill: "white", fontFamily: "var(--font-mono)", fontWeight: 700 }}>e</text>
                </g>
              ))}
              {/* labels */}
              <text x={W - 14} y={20} textAnchor="end" style={{ fontSize: 11, fill: "var(--ink-muted)", fontFamily: "var(--font-mono)" }}>
                {el.sym} · Z={el.z}
              </text>
              {isComplete && (
                <text x={cx} y={H - 14} textAnchor="middle" style={{ fontSize: 13, fill: "var(--c-green-deep)", fontFamily: "var(--font-display)" }}>
                  ✓ {el.name} complete
                </text>
              )}
            </svg>
          </div>

          {/* Controls — add particles */}
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 10, marginTop: 10 }}>
            <div className="card" style={{ padding: 12, borderColor: "var(--c-red)" }}>
              <div style={{ fontSize: "0.8rem", color: "var(--ink-muted)" }}>Protons <span style={{ float: "right", fontWeight: 600, color: "var(--ink)" }}>{protonsPlaced} / {targetProtons}</span></div>
              <div style={{ display: "flex", gap: 6, marginTop: 8 }}>
                <Button size="sm" onClick={() => setProtonsPlaced(Math.max(0, protonsPlaced - 1))}>−</Button>
                <Button size="sm" variant="accent" onClick={() => setProtonsPlaced(Math.min(targetProtons + 2, protonsPlaced + 1))}>+ proton</Button>
              </div>
            </div>
            <div className="card" style={{ padding: 12 }}>
              <div style={{ fontSize: "0.8rem", color: "var(--ink-muted)" }}>Neutrons <span style={{ float: "right", fontWeight: 600, color: "var(--ink)" }}>{neutronsPlaced} / {targetNeutrons}</span></div>
              <div style={{ display: "flex", gap: 6, marginTop: 8 }}>
                <Button size="sm" onClick={() => setNeutronsPlaced(Math.max(0, neutronsPlaced - 1))}>−</Button>
                <Button size="sm" variant="primary" onClick={() => setNeutronsPlaced(Math.min(targetNeutrons + 2, neutronsPlaced + 1))}>+ neutron</Button>
              </div>
            </div>
            <div className="card" style={{ padding: 12, borderColor: "var(--c-teal-deep)" }}>
              <div style={{ fontSize: "0.8rem", color: "var(--ink-muted)" }}>Electrons <span style={{ float: "right", fontWeight: 600, color: "var(--ink)" }}>{electronsPlaced} / {targetElectrons}</span></div>
              <div style={{ display: "flex", gap: 6, marginTop: 8 }}>
                <Button size="sm" onClick={() => setElectronsPlaced(Math.max(0, electronsPlaced - 1))}>−</Button>
                <Button size="sm" style={{ background: "var(--c-teal-deep)", color: "white", borderColor: "var(--c-teal-deep)" }} onClick={() => setElectronsPlaced(Math.min(targetElectrons + 2, electronsPlaced + 1))}>+ electron</Button>
              </div>
            </div>
          </div>

          <div style={{ display: "flex", gap: 8, marginTop: 10, flexWrap: "wrap" }}>
            <Button size="sm" variant="ghost" icon="reset" onClick={() => { setProtonsPlaced(0); setNeutronsPlaced(0); setElectronsPlaced(0); setAutoBuild(false); }}>Empty</Button>
            <Button size="sm" variant="ghost" icon="sparkle" onClick={() => { setProtonsPlaced(0); setNeutronsPlaced(0); setElectronsPlaced(0); setAutoBuild(true); }}>Auto-build</Button>
            <span className="spacer" />
            <Chip variant={isNeutral ? "ok" : "warn"}>
              Charge: {overallCharge === 0 ? "0 (neutral)" : (overallCharge > 0 ? `+${overallCharge}` : overallCharge)}
            </Chip>
          </div>
        </div>

        {/* Side panel — element picker + info */}
        <div style={{ flex: "1 1 240px", minWidth: 240 }}>
          <div className="card" style={{ marginBottom: 10 }}>
            <h4 style={{ margin: 0 }}>Pick an element</h4>
            <p style={{ fontSize: "0.8rem", color: "var(--ink-muted)", margin: "4px 0 8px" }}>Hydrogen → Argon (Z = 1 to 18)</p>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(6, 1fr)", gap: 4 }}>
              {first18.map(e => (
                <button
                  key={e.z}
                  onClick={() => switchElement(e.z)}
                  className={`pt-cell ${e.category}`}
                  style={{
                    fontSize: "0.65rem",
                    outline: z === e.z ? "2.5px solid var(--ink)" : "none",
                    outlineOffset: "1px",
                  }}
                  title={e.name}
                >
                  <span className="num">{e.z}</span>
                  <span className="sym" style={{ fontSize: "0.9rem" }}>{e.sym}</span>
                </button>
              ))}
            </div>
          </div>

          <div className="card">
            <div style={{ display: "flex", alignItems: "baseline", gap: 8 }}>
              <span style={{ fontFamily: "var(--font-display)", fontSize: "1.8rem" }}>{el.sym}</span>
              <span style={{ fontWeight: 600 }}>{el.name}</span>
              <span className="spacer" />
              <span style={{ fontFamily: "var(--font-mono)", fontSize: "0.8rem", color: "var(--ink-muted)" }}>Z {el.z}</span>
            </div>
            {el.shells && (
              <div style={{ marginTop: 6, fontSize: "0.85rem" }}>
                Electron config: <span className="mono">{el.shells.join(", ")}</span>
              </div>
            )}
            <div style={{ marginTop: 4, fontSize: "0.85rem", color: "var(--ink-2)" }}>
              Mass number: <span className="mono">{Math.round(el.mass)}</span>
            </div>
            <p style={{ fontSize: "0.84rem", color: "var(--ink-2)", marginTop: 8 }}>{el.uses}</p>
          </div>

          {isComplete && (
            <Callout kind="tip" title="Nice work!">
              {el.name} has {el.shells?.join(" + ") || el.z} electrons.{" "}
              {el.group === 18 && "Its outer shell is full — that's why noble gases are unreactive."}
              {el.group === 1 && "One lone outer electron — that's why Group 1 metals are so reactive."}
              {el.group === 17 && "Just one electron short of a full shell — that's why halogens grab electrons so eagerly."}
            </Callout>
          )}
        </div>
      </div>
    </div>
  );
}

Object.assign(window, { PeriodicTable, ElementDetail, AtomBuilder });

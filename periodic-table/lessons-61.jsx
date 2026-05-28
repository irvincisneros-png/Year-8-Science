/* ============================================================
   Unit 6.1 — Classification of matter
   3 lessons: elements, metals/non-metals/metalloids classifier, properties→uses
   ============================================================ */

const { useState: u61_useState, useMemo: u61_useMemo, useEffect: u61_useEffect } = React;

/* ------------------------------------------------------------
   Lesson 6.1.1 — What's an element?
------------------------------------------------------------ */
function Lesson611({ udl }) {
  const commonElements = [
    { sym: "O",  name: "Oxygen",   where: "21% of the air. Every breath you take." },
    { sym: "C",  name: "Carbon",   where: "Pencil lead, diamonds, all living things." },
    { sym: "Fe", name: "Iron",     where: "Steel, bike frames, your blood." },
    { sym: "Al", name: "Aluminium",where: "Drink cans, cooking foil, window frames." },
    { sym: "Cu", name: "Copper",   where: "Electrical wires, water pipes, coins." },
    { sym: "Au", name: "Gold",     where: "Jewellery, electronics, Olympic medals." },
    { sym: "He", name: "Helium",   where: "Party balloons. MRI machines." },
    { sym: "N",  name: "Nitrogen", where: "78% of the air. Fertilisers." },
    { sym: "Si", name: "Silicon",  where: "Computer chips. Glass. Sand." },
    { sym: "Ca", name: "Calcium",  where: "Bones, teeth, milk, chalk." },
  ];

  return (
    <>
      <p>An <Term>element</Term> is a pure substance made of just one type of <Term>atom</Term>. They're the building blocks of everything — your body, the air, your phone, the chair you're sitting on. Everything.</p>

      <p>{udl.plain
        ? "There are 118 known elements. About 94 of them are found naturally on Earth — the rest are made by scientists in labs."
        : "There are 118 known elements, but only about 94 occur naturally on Earth. Each has its own unique name and chemical symbol (gold is Au, oxygen is O, iron is Fe). Scientists have arranged them all into the periodic table — you'll meet it in Unit 6.3."}</p>

      <h3>What pure elements look like</h3>
      <p style={{ fontSize: "0.92rem", color: "var(--ink-2)" }}>Most of the time, elements turn up combined with other elements. But sometimes you can find a pure sample — and they look surprisingly different from each other.</p>
      <CCImage src="assets/pdf-img-p5.jpg" caption="Six familiar metals — iron, aluminium, copper, silver, gold, mercury — and the key properties they share." frame style={{ margin: "10px 0 18px" }} />

      <h3>Some you'd recognise</h3>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))", gap: 10, margin: "10px 0 18px" }}>
        {commonElements.map(e => (
          <div key={e.sym} className="card" style={{ padding: 14 }}>
            <div style={{ display: "flex", alignItems: "baseline", gap: 8 }}>
              <span style={{ fontFamily: "var(--font-display)", fontSize: "1.6rem", color: "var(--c-orange-deep)" }}>{e.sym}</span>
              <span style={{ fontWeight: 600 }}>{e.name}</span>
            </div>
            <div style={{ fontSize: "0.85rem", color: "var(--ink-2)", marginTop: 4 }}>{e.where}</div>
          </div>
        ))}
      </div>

      <h3>Elements vs <Term>compound</Term>s vs <Term>mixture</Term>s</h3>
      <div className="row" style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 12 }}>
        <div className="card">
          <Chip variant="info">Element</Chip>
          <h4 style={{ margin: "8px 0 4px" }}>One kind of atom</h4>
          <p style={{ fontSize: "0.92rem", color: "var(--ink-2)" }}>A gold ring. A copper wire. Pure oxygen gas. Just one type of atom, repeated billions of times.</p>
        </div>
        <div className="card">
          <Chip variant="fact">Compound</Chip>
          <h4 style={{ margin: "8px 0 4px" }}>Atoms joined chemically</h4>
          <p style={{ fontSize: "0.92rem", color: "var(--ink-2)" }}>Water (<span className="formula">H<sub>2</sub>O</span>) — 2 hydrogen + 1 oxygen, locked together. You can't see the H or O anymore.</p>
        </div>
        <div className="card">
          <Chip variant="warn">Mixture</Chip>
          <h4 style={{ margin: "8px 0 4px" }}>Just mixed together</h4>
          <p style={{ fontSize: "0.92rem", color: "var(--ink-2)" }}>Air (N₂, O₂, Ar, CO₂…). Brass (Cu + Zn). They keep their own properties — you can separate them again.</p>
        </div>
      </div>

      <div className="activity">
        <div className="activity-head">
          <h4>Quick check</h4>
          <span className="badge">Quiz</span>
        </div>
        <QuizMC
          question="A piece of brass (a mix of copper and zinc) is best described as…"
          options={["An element", "A compound", "A mixture (alloy)", "A subatomic particle"]}
          correctIndex={2}
          explain="Brass is a mixture (specifically, an alloy) of copper and zinc. The copper and zinc keep their own properties — they're not chemically joined."
        />
        <QuizMC
          question="Roughly how many elements occur naturally on Earth?"
          options={["About 12", "About 94", "About 250", "About 1,000"]}
          correctIndex={1}
          explain="118 are known in total — about 94 occur naturally, and the rest are made in labs."
        />
      </div>

      <Callout kind="fact" title="Did you know?">
        A grain of salt contains about <strong>one quintillion</strong> atoms (1,000,000,000,000,000,000). If you wanted to count them all at one atom per second, it would take you longer than the age of the universe.
      </Callout>
    </>
  );
}

/* ------------------------------------------------------------
   Lesson 6.1.2 — Metals / non-metals / metalloids classifier
------------------------------------------------------------ */
function Lesson612({ udl }) {
  const { SAMPLES } = window.AppData;
  const [answers, setAnswers] = u61_useState({});  // sample.id -> "metal" | "nonmetal" | "metalloid"
  const [revealed, setRevealed] = u61_useState(false);

  const score = u61_useMemo(() => {
    return SAMPLES.reduce((acc, s) => acc + (answers[s.id] === s.expect ? 1 : 0), 0);
  }, [answers]);

  const allAnswered = Object.keys(answers).length === SAMPLES.length;

  return (
    <>
      <p>Every element fits into one of three families: <Term>metal</Term>s, <Term>non-metal</Term>s, or <Term>metalloid</Term>s. You can tell them apart by their <em>physical properties</em>.</p>

      <h3>Property cheat sheet</h3>
      <table>
        <thead>
          <tr><th>Property</th><th>Metals</th><th>Non-metals</th><th>Metalloids</th></tr>
        </thead>
        <tbody>
          <tr><td>Appearance</td><td>Shiny (<Term>lustrous</Term>)</td><td>Dull</td><td>Mostly shiny</td></tr>
          <tr><td>Conducts electricity?</td><td>Yes</td><td>No</td><td>Sometimes (<Term>semiconductor</Term>)</td></tr>
          <tr><td>Bend or break?</td><td><Term>Malleable</Term> & <Term>ductile</Term></td><td>Brittle (if solid)</td><td>Brittle</td></tr>
          <tr><td>State at room temp</td><td>Mostly solid (Hg is liquid)</td><td>Gas, liquid or solid</td><td>Solid</td></tr>
          <tr><td>Where on the table?</td><td>Left & middle</td><td>Right (and H)</td><td>Zig-zag line between them</td></tr>
        </tbody>
      </table>

      <Callout kind="warn" title="Watch out">
        <strong>Carbon (graphite)</strong> conducts electricity — but it's a non-metal! That's why <em>one</em> test is never enough. Always check several properties before you decide.
      </Callout>

      <div className="activity">
        <div className="activity-head">
          <h4>The lab bench</h4>
          <span className="badge">Sim</span>
        </div>
        <p style={{ marginTop: 0 }}>Eight samples have been brought to you. Read each one's properties and classify it. Tap once for each category to cycle through.</p>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))", gap: 12, margin: "14px 0" }}>
          {SAMPLES.map(s => {
            const a = answers[s.id];
            const isCorrect = revealed && a === s.expect;
            const isWrong = revealed && a && a !== s.expect;
            return (
              <div key={s.id} className="card" style={{
                borderColor: isCorrect ? "var(--c-green)" : isWrong ? "var(--c-red)" : "var(--border)",
                background: isCorrect ? "var(--c-green-soft)" : isWrong ? "var(--c-red-soft)" : "var(--paper)",
              }}>
                <div style={{ fontWeight: 600, marginBottom: 6 }}>{s.name}</div>
                <div style={{ display: "grid", gridTemplateColumns: "auto 1fr", gap: "2px 8px", fontSize: "0.84rem", color: "var(--ink-2)" }}>
                  <span>Looks:</span> <span>{s.shiny ? "Shiny" : s.gas ? "Invisible (gas)" : "Dull"}</span>
                  <span>Conducts?</span> <span>{s.conducts === "sometimes" ? "Sometimes" : s.conducts ? "Yes" : "No"}</span>
                  <span>Hammer test:</span> <span>{s.gas ? "—" : s.malleable ? "Flattens" : "Shatters"}</span>
                </div>
                <div style={{ display: "flex", gap: 4, marginTop: 10 }}>
                  {["metal", "nonmetal", "metalloid"].map(t => (
                    <button
                      key={t}
                      className="btn btn-sm"
                      style={{
                        flex: 1,
                        background: a === t ? "var(--ink)" : "var(--paper)",
                        color: a === t ? "var(--paper)" : "var(--ink-2)",
                        borderColor: a === t ? "var(--ink)" : "var(--border)",
                      }}
                      onClick={() => { setAnswers({ ...answers, [s.id]: t }); if (revealed) setRevealed(false); }}
                    >
                      {t === "nonmetal" ? "non-metal" : t}
                    </button>
                  ))}
                </div>
                {revealed && a && a !== s.expect && (
                  <div style={{ fontSize: "0.8rem", color: "var(--c-red)", marginTop: 8 }}>
                    Actually: <strong>{s.expect === "nonmetal" ? "non-metal" : s.expect}</strong>. {s.hint}
                  </div>
                )}
                {revealed && isCorrect && (
                  <div style={{ fontSize: "0.8rem", color: "var(--c-green-deep)", marginTop: 8 }}>✓ Yep. {s.hint}</div>
                )}
              </div>
            );
          })}
        </div>

        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <div style={{ color: "var(--ink-2)" }}>
            {Object.keys(answers).length} / {SAMPLES.length} classified
            {revealed ? ` · ${score}/${SAMPLES.length} correct` : ""}
          </div>
          <div style={{ display: "flex", gap: 8 }}>
            <Button variant="ghost" icon="reset" onClick={() => { setAnswers({}); setRevealed(false); }}>Reset</Button>
            <Button variant="primary" disabled={!allAnswered} onClick={() => setRevealed(true)}>Check answers</Button>
          </div>
        </div>
      </div>

      <Callout kind="tip" title="Practical activity 1 (book version)">
        In the lab, you'd test samples using a hand lens, a conductivity tester (battery + bulb), and a small hammer on a heat-proof mat — gathering several pieces of evidence before classifying.
      </Callout>
    </>
  );
}

/* ------------------------------------------------------------
   Lesson 6.1.3 — Properties → uses
------------------------------------------------------------ */
function Lesson613({ udl }) {
  const matches = [
    { mat: "Copper", prop: "Excellent electrical conductor, ductile", use: "Electrical wires, water pipes" },
    { mat: "Aluminium", prop: "Low density, corrosion-resistant", use: "Aircraft bodies, drink cans" },
    { mat: "Iron / Steel", prop: "Strong, cheap, magnetic", use: "Buildings, vehicles, tools" },
    { mat: "Gold", prop: "Doesn't tarnish, shiny, malleable", use: "Jewellery, electrical contacts" },
    { mat: "Tungsten", prop: "Extremely high melting point", use: "Light bulb filaments" },
    { mat: "Diamond (carbon)", prop: "Hardest natural material", use: "Cutting & drilling tools" },
    { mat: "Graphite (carbon)", prop: "Soft, slippery, conducts", use: "Pencil leads, lubricants" },
    { mat: "Helium", prop: "Less dense than air, non-flammable", use: "Balloons, MRI machines" },
  ];

  const alloys = [
    { name: "Steel", from: "Iron + carbon", win: "Much stronger than pure iron", use: "Buildings, cars, tools" },
    { name: "Stainless steel", from: "Iron + chromium + nickel", win: "Doesn't rust", use: "Cutlery, sinks, surgical tools" },
    { name: "Brass", from: "Copper + zinc", win: "Harder, attractive gold colour", use: "Door handles, instruments" },
    { name: "Bronze", from: "Copper + tin", win: "Hard, corrosion-resistant", use: "Statues, bells, ship propellers" },
    { name: "Solder", from: "Tin + lead (or silver)", win: "Low melting point", use: "Joining electronics" },
  ];

  return (
    <>
      <p>The reason copper wires aren't gold, and aeroplanes aren't iron, comes down to this: <strong>properties decide use.</strong> Designers and engineers pick a material based on what the job needs.</p>

      <h3>Elements at work</h3>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 10, marginBottom: 12 }}>
        <CCImage src="assets/pdf-img-p5.jpg" caption="Metals — iron, aluminium, copper, silver, gold, mercury and their uses." frame />
        <CCImage src="assets/pdf-img-p6.jpg" caption="Non-metals — carbon, sulfur, oxygen, nitrogen, chlorine, bromine and their uses." frame />
        <CCImage src="assets/pdf-img-p7.jpg" caption="Metalloids — boron, silicon, germanium and their semiconductor uses." frame />
      </div>
      <table>
        <thead><tr><th>Material</th><th>Key properties</th><th>Common use</th></tr></thead>
        <tbody>
          {matches.map((m, i) => <tr key={i}><td><strong>{m.mat}</strong></td><td>{m.prop}</td><td>{m.use}</td></tr>)}
        </tbody>
      </table>

      <h3>Why we make <Term>alloy</Term>s</h3>
      <p>Pure metals don't always have the exact properties we need. An <Term>alloy</Term> is a mixture of a metal with one or more other elements — it lets us tune the properties.</p>
      <table>
        <thead><tr><th>Alloy</th><th>Made from</th><th>Improvement</th><th>Use</th></tr></thead>
        <tbody>
          {alloys.map((a, i) => <tr key={i}><td><strong>{a.name}</strong></td><td>{a.from}</td><td>{a.win}</td><td>{a.use}</td></tr>)}
        </tbody>
      </table>

      <Callout kind="fact" title="Carbon: same atoms, totally different stuff">
        Diamond is the hardest natural material on Earth. Graphite is so soft it leaves marks on paper. Both are made of <strong>only carbon atoms</strong> — the difference is how those atoms are arranged.
      </Callout>

      <div className="activity">
        <div className="activity-head"><h4>Quick check</h4><span className="badge">Quiz</span></div>
        <QuizMC
          question="Why is copper used for household electrical wiring rather than silver, even though silver conducts slightly better?"
          options={[
            "Copper is denser",
            "Silver is poisonous",
            "Silver is far more expensive — copper is good enough at a much lower cost",
            "Silver isn't ductile"
          ]}
          correctIndex={2}
          explain="Both are great conductors. Copper wins on cost — it's plentiful and cheap to extract."
        />
        <QuizMC
          question="Stainless steel contains iron + chromium + nickel. Why use stainless rather than ordinary steel for surgical instruments?"
          options={[
            "It's cheaper",
            "It's softer and easier to shape",
            "It doesn't rust, even when sterilised with hot water again and again",
            "It's a better magnet"
          ]}
          correctIndex={2}
          explain="The chromium and nickel form a protective oxide layer that stops rust — vital for tools that are washed and sterilised constantly."
        />
      </div>
    </>
  );
}

Object.assign(window, { Lesson611, Lesson612, Lesson613 });

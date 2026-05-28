/* global React, DotPoint, Callout, Figure, Term, MCQ, WrittenQ, QGroup, Interactive,
   Slider, SegToggle, Stat, Reveal, FlipCard, MatchBuckets, Ring, mountTopicApp */
const { useState, useEffect, useRef, useMemo } = React;

/* ================================================================
   SECTION 8.1 INTERACTIVES
   ================================================================ */

function DataTypeSorter() {
  return (
    <Interactive title="Sort the data types" subtitle="Click each item to place it in the correct bucket.">
      <MatchBuckets
        items={[
          { id: "a", label: "Temperature in degrees Celsius", bucket: "quant" },
          { id: "b", label: "Hair colour", bucket: "qual" },
          { id: "c", label: "Number of students absent", bucket: "discrete" },
          { id: "d", label: "Mass of a rock sample (g)", bucket: "cont" },
          { id: "e", label: "Type of cloud", bucket: "qual" },
          { id: "f", label: "Count of birds seen today", bucket: "discrete" },
          { id: "g", label: "Recorded by you in an experiment", bucket: "primary" },
          { id: "h", label: "BOM rainfall records from 1990", bucket: "secondary" },
        ]}
        buckets={[
          { id: "quant", label: "Quantitative" },
          { id: "qual", label: "Qualitative" },
          { id: "discrete", label: "Discrete" },
          { id: "cont", label: "Continuous" },
          { id: "primary", label: "Primary" },
          { id: "secondary", label: "Secondary" },
        ]}
      />
    </Interactive>
  );
}

function DigitalFootprintSorter() {
  return (
    <Interactive title="Active or passive footprint?" subtitle="Sort each activity into the correct category.">
      <MatchBuckets
        items={[
          { id: "a", label: "Posting a photo on social media", bucket: "active" },
          { id: "b", label: "A website storing your browsing history via cookies", bucket: "passive" },
          { id: "c", label: "Filling in an online form", bucket: "active" },
          { id: "d", label: "An app tracking your location in the background", bucket: "passive" },
          { id: "e", label: "Sending an email", bucket: "active" },
          { id: "f", label: "A search engine saving your query", bucket: "passive" },
        ]}
        buckets={[
          { id: "active", label: "Active footprint" },
          { id: "passive", label: "Passive footprint" },
        ]}
      />
    </Interactive>
  );
}

/* ================================================================
   SECTION 8.2 INTERACTIVES
   ================================================================ */

function ModelTypeSorter() {
  return (
    <Interactive title="Match the model to its type" subtitle="Classify each example by the type of scientific model it represents.">
      <MatchBuckets
        items={[
          { id: "a", label: "A 3D globe of Earth", bucket: "physical" },
          { id: "b", label: "A food web diagram", bucket: "conceptual" },
          { id: "c", label: "F = ma", bucket: "mathematical" },
          { id: "d", label: "A bar chart of rainfall data", bucket: "graphical" },
          { id: "e", label: "A model DNA double helix", bucket: "physical" },
          { id: "f", label: "A water cycle diagram", bucket: "conceptual" },
          { id: "g", label: "A climate simulation program", bucket: "computational" },
          { id: "h", label: "A scatter plot of temperature vs time", bucket: "graphical" },
        ]}
        buckets={[
          { id: "physical", label: "Physical" },
          { id: "conceptual", label: "Conceptual" },
          { id: "mathematical", label: "Mathematical" },
          { id: "graphical", label: "Graphical" },
          { id: "computational", label: "Computational" },
        ]}
      />
    </Interactive>
  );
}

/* Rainfall bar chart with Sydney data + trend explorer */
function RainfallBarChart() {
  const months = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
  const values = [103,117,131,126,120,130,97,68,66,81,83,78];
  const maxVal = Math.max(...values);
  const w = 560; const h = 200; const pad = { top: 20, right: 10, bottom: 40, left: 50 };
  const chartW = w - pad.left - pad.right;
  const chartH = h - pad.top - pad.bottom;
  const barW = chartW / months.length;

  const [highlighted, setHighlighted] = useState(null);

  return (
    <Interactive title="Sydney monthly rainfall (2023)" subtitle="Hover over a bar to read its value. Spot which months are wettest and driest.">
      <svg viewBox={`0 0 ${w} ${h}`} width="100%" style={{ maxWidth: w, display: "block", margin: "0 auto" }}>
        {/* y-axis gridlines and labels */}
        {[0, 50, 100, 150].map(v => {
          const y = pad.top + chartH - (v / 150) * chartH;
          return (
            <g key={v}>
              <line x1={pad.left} x2={w - pad.right} y1={y} y2={y} stroke="var(--border)" strokeDasharray="4 2" />
              <text x={pad.left - 6} y={y + 4} textAnchor="end" fontSize="11" fill="var(--ink-muted)">{v}</text>
            </g>
          );
        })}
        {/* y-axis label */}
        <text transform={`translate(12,${pad.top + chartH / 2}) rotate(-90)`} textAnchor="middle" fontSize="11" fill="var(--ink-muted)">Rainfall (mm)</text>
        {/* bars */}
        {values.map((v, i) => {
          const bh = (v / 150) * chartH;
          const x = pad.left + i * barW + 2;
          const y = pad.top + chartH - bh;
          const isHigh = highlighted === i;
          return (
            <g key={i} style={{ cursor: "pointer" }} onMouseEnter={() => setHighlighted(i)} onMouseLeave={() => setHighlighted(null)}>
              <rect x={x} y={y} width={barW - 4} height={bh}
                fill={isHigh ? "var(--accent-deep)" : "var(--accent-soft)"}
                stroke={isHigh ? "var(--accent-deep)" : "none"}
                rx="2" />
              {isHigh && (
                <text x={x + (barW - 4) / 2} y={y - 5} textAnchor="middle" fontSize="12" fontWeight="700" fill="var(--accent-deep)">{v} mm</text>
              )}
              <text x={x + (barW - 4) / 2} y={pad.top + chartH + 14} textAnchor="middle" fontSize="10" fill="var(--ink-muted)">{months[i]}</text>
            </g>
          );
        })}
        {/* axes */}
        <line x1={pad.left} x2={pad.left} y1={pad.top} y2={pad.top + chartH} stroke="var(--border)" />
        <line x1={pad.left} x2={w - pad.right} y1={pad.top + chartH} y2={pad.top + chartH} stroke="var(--border)" />
      </svg>
      <p className="muted" style={{ marginBottom: 0, marginTop: "0.5rem" }}>
        The wettest months are March and June. The driest are September and August.
        This bar chart is a <strong>graphical model</strong> of Sydney's rainfall pattern.
      </p>
    </Interactive>
  );
}

/* Population line graph with interpolation + extrapolation explorer */
function PopulationModel() {
  const years = [1981, 1991, 2001, 2011, 2021];
  const sydney = [3.2, 3.7, 4.1, 4.6, 5.2];
  const melbourne = [2.7, 3.1, 3.5, 4.1, 5.0];
  const [showExtrap, setShowExtrap] = useState(false);
  const [targetYear, setTargetYear] = useState(2006);

  const w = 560; const h = 220;
  const pad = { top: 20, right: 20, bottom: 40, left: 50 };
  const chartW = w - pad.left - pad.right;
  const chartH = h - pad.top - pad.bottom;

  const minYear = 1981; const maxYear = showExtrap ? 2041 : 2021;
  const minPop = 2.5; const maxPop = showExtrap ? 8 : 5.5;

  const xScale = (yr) => pad.left + ((yr - minYear) / (maxYear - minYear)) * chartW;
  const yScale = (pop) => pad.top + chartH - ((pop - minPop) / (maxPop - minPop)) * chartH;

  const sydExtrap = showExtrap ? [...sydney, 5.8, 6.4] : sydney;
  const melExtrap = showExtrap ? [...melbourne, 5.7, 6.6] : melbourne;
  const extrapYears = showExtrap ? [...years, 2031, 2041] : years;

  const pointsToPath = (yrs, pops) =>
    yrs.map((yr, i) => `${i === 0 ? "M" : "L"}${xScale(yr)},${yScale(pops[i])}`).join(" ");

  // Interpolate for target year
  const interpolate = (yrs, pops, yr) => {
    for (let i = 0; i < yrs.length - 1; i++) {
      if (yr >= yrs[i] && yr <= yrs[i + 1]) {
        const t = (yr - yrs[i]) / (yrs[i + 1] - yrs[i]);
        return (pops[i] + t * (pops[i + 1] - pops[i])).toFixed(2);
      }
    }
    return null;
  };

  const isInterp = targetYear >= 1981 && targetYear <= 2021;
  const sydPred = isInterp ? interpolate(years, sydney, targetYear) : null;
  const melPred = isInterp ? interpolate(years, melbourne, targetYear) : null;

  return (
    <Interactive title="Population growth model: Sydney vs Melbourne" subtitle="Toggle extrapolation and use the slider to read off interpolated values.">
      <div className="ctrl-row" style={{ marginBottom: "0.75rem" }}>
        <SegToggle
          options={[{ value: "off", label: "Measured data only" }, { value: "on", label: "Show extrapolation to 2041" }]}
          value={showExtrap ? "on" : "off"}
          onChange={v => setShowExtrap(v === "on")}
        />
      </div>
      <svg viewBox={`0 0 ${w} ${h}`} width="100%" style={{ maxWidth: w, display: "block", margin: "0 auto" }}>
        {/* gridlines */}
        {[3, 4, 5, 6, 7].filter(v => v <= maxPop && v >= minPop).map(v => {
          const y = yScale(v);
          return (
            <g key={v}>
              <line x1={pad.left} x2={w - pad.right} y1={y} y2={y} stroke="var(--border)" strokeDasharray="4 2" />
              <text x={pad.left - 6} y={y + 4} textAnchor="end" fontSize="11" fill="var(--ink-muted)">{v}M</text>
            </g>
          );
        })}
        {/* x-axis labels */}
        {extrapYears.map((yr, i) => (
          <text key={yr} x={xScale(yr)} y={pad.top + chartH + 16} textAnchor="middle" fontSize="11"
            fill={yr > 2021 ? "var(--accent-deep)" : "var(--ink-muted)"}>{yr}</text>
        ))}
        {/* lines */}
        <path d={pointsToPath(extrapYears.slice(0, years.length), sydney)} fill="none" stroke="var(--accent-deep)" strokeWidth="2.5" />
        <path d={pointsToPath(extrapYears.slice(0, years.length), melbourne)} fill="none" stroke="#f59e0b" strokeWidth="2.5" />
        {showExtrap && (
          <>
            <path d={pointsToPath(extrapYears.slice(years.length - 1), sydExtrap.slice(years.length - 1))} fill="none" stroke="var(--accent-deep)" strokeWidth="2" strokeDasharray="6 4" />
            <path d={pointsToPath(extrapYears.slice(years.length - 1), melExtrap.slice(years.length - 1))} fill="none" stroke="#f59e0b" strokeWidth="2" strokeDasharray="6 4" />
          </>
        )}
        {/* dots */}
        {years.map((yr, i) => (
          <g key={yr}>
            <circle cx={xScale(yr)} cy={yScale(sydney[i])} r="5" fill="var(--accent-deep)" />
            <circle cx={xScale(yr)} cy={yScale(melbourne[i])} r="5" fill="#f59e0b" />
          </g>
        ))}
        {/* interpolation line */}
        {isInterp && (
          <line x1={xScale(targetYear)} x2={xScale(targetYear)} y1={pad.top} y2={pad.top + chartH}
            stroke="var(--ink-muted)" strokeDasharray="3 3" strokeWidth="1.5" />
        )}
        {/* legend */}
        <rect x={pad.left + 10} y={pad.top + 4} width="14" height="4" fill="var(--accent-deep)" rx="2" />
        <text x={pad.left + 28} y={pad.top + 10} fontSize="11" fill="var(--ink)">Sydney</text>
        <rect x={pad.left + 80} y={pad.top + 4} width="14" height="4" fill="#f59e0b" rx="2" />
        <text x={pad.left + 98} y={pad.top + 10} fontSize="11" fill="var(--ink)">Melbourne</text>
        {showExtrap && <text x={w - pad.right - 5} y={pad.top + 10} textAnchor="end" fontSize="10" fill="var(--accent-deep)">Dashed = extrapolated</text>}
        {/* axes */}
        <line x1={pad.left} x2={pad.left} y1={pad.top} y2={pad.top + chartH} stroke="var(--border)" />
        <line x1={pad.left} x2={w - pad.right} y1={pad.top + chartH} y2={pad.top + chartH} stroke="var(--border)" />
      </svg>
      <div style={{ marginTop: "0.75rem" }}>
        <Slider label="Read value for year" min={1981} max={2021} step={1} value={targetYear} onChange={setTargetYear} unit="" />
      </div>
      {isInterp ? (
        <div className="stat-readout">
          <Stat value={sydPred} label="Sydney pop. (millions)" />
          <Stat value={melPred} label="Melbourne pop. (millions)" />
        </div>
      ) : (
        <p className="muted" style={{ marginBottom: 0 }}>Slider only works for measured years (1981 to 2021).</p>
      )}
      <p className="muted" style={{ marginBottom: 0, marginTop: "0.5rem" }}>
        Solid lines = measured data. Dashed lines = extrapolated predictions. Extrapolation assumes past trends continue.
      </p>
    </Interactive>
  );
}

/* ================================================================
   SECTION 8.3 INTERACTIVES
   ================================================================ */

function ScientificInquiryQuiz() {
  const claims = [
    { text: "Adding fertiliser increases plant growth rate, measured over 4 weeks.", answer: "sci", explain: "This claim is testable: you can measure plant height with and without fertiliser and compare." },
    { text: "This forest has a special spiritual energy that heals people.", answer: "nonsci", explain: "This claim cannot be measured or tested experimentally. It operates outside empirical science." },
    { text: "Plants exposed to 12 hours of light per day grow taller than those getting 6 hours.", answer: "sci", explain: "Testable: light hours can be controlled, plant height measured, and results compared." },
    { text: "The universe was created for a purpose.", answer: "nonsci", explain: "This is a philosophical or spiritual claim. Science cannot test purpose or intent." },
    { text: "Drinking more water improves concentration test scores in Year 8 students.", answer: "sci", explain: "Testable: students can be split into groups with different water intake and scores measured." },
  ];

  const [idx, setIdx] = useState(0);
  const [chosen, setChosen] = useState(null);
  const [score, setScore] = useState(0);
  const [done, setDone] = useState(false);

  const handleChoice = (val) => {
    if (chosen !== null) return;
    setChosen(val);
    if (val === claims[idx].answer) setScore(s => s + 1);
  };

  const next = () => {
    if (idx + 1 >= claims.length) { setDone(true); return; }
    setIdx(i => i + 1);
    setChosen(null);
  };

  const reset = () => { setIdx(0); setChosen(null); setScore(0); setDone(false); };

  const c = claims[idx];

  if (done) {
    return (
      <Interactive title="Scientific or not? Quiz complete!" subtitle="">
        <div className="stat-readout">
          <Stat value={`${score}/${claims.length}`} label="Correct" />
        </div>
        <p className="muted" style={{ marginBottom: "0.75rem" }}>
          {score === claims.length ? "Perfect! You can identify scientific claims confidently." : "Review the explanations and try again."}
        </p>
        <button className="btn btn-accent" onClick={reset}>Try again</button>
      </Interactive>
    );
  }

  return (
    <Interactive title="Scientific or not?" subtitle="Read each claim and decide: is it a scientific claim or a non-scientific claim?">
      <p style={{ fontWeight: "600", marginBottom: "0.75rem" }}>Claim {idx + 1} of {claims.length}:</p>
      <p style={{ marginBottom: "1rem", lineHeight: "1.5" }}>{c.text}</p>
      <div className="row" style={{ gap: "0.75rem", marginBottom: "1rem" }}>
        <button className={`btn ${chosen ? (c.answer === "sci" ? "btn-accent" : "btn-ghost") : "btn-ghost"}`} onClick={() => handleChoice("sci")}>Scientific</button>
        <button className={`btn ${chosen ? (c.answer === "nonsci" ? "btn-accent" : "btn-ghost") : "btn-ghost"}`} onClick={() => handleChoice("nonsci")}>Non-scientific</button>
      </div>
      {chosen !== null && (
        <div>
          <p style={{ fontWeight: "700", color: chosen === c.answer ? "var(--success)" : "var(--warn)", marginBottom: "0.5rem" }}>
            {chosen === c.answer ? "Correct!" : "Not quite."}
          </p>
          <p className="muted" style={{ marginBottom: "0.75rem" }}>{c.explain}</p>
          <button className="btn btn-accent" onClick={next}>{idx + 1 >= claims.length ? "See results" : "Next claim"}</button>
        </div>
      )}
    </Interactive>
  );
}

/* ================================================================
   SECTION 8.4 INTERACTIVES
   ================================================================ */

function MeanMedianModeCalc() {
  const [raw, setRaw] = useState("12, 15, 14, 12, 18, 12, 20");

  const parse = (s) => {
    return s.split(/[\s,;]+/).map(v => parseFloat(v)).filter(v => !isNaN(v));
  };

  const nums = useMemo(() => parse(raw), [raw]);

  const mean = useMemo(() => {
    if (nums.length === 0) return null;
    return (nums.reduce((a, b) => a + b, 0) / nums.length).toFixed(2);
  }, [nums]);

  const median = useMemo(() => {
    if (nums.length === 0) return null;
    const s = [...nums].sort((a, b) => a - b);
    const m = Math.floor(s.length / 2);
    return s.length % 2 === 0 ? ((s[m - 1] + s[m]) / 2).toFixed(2) : s[m].toFixed(2);
  }, [nums]);

  const mode = useMemo(() => {
    if (nums.length === 0) return null;
    const freq = {};
    nums.forEach(n => { freq[n] = (freq[n] || 0) + 1; });
    const maxF = Math.max(...Object.values(freq));
    if (maxF === 1) return "none";
    return Object.keys(freq).filter(k => freq[k] === maxF).join(", ");
  }, [nums]);

  const range = useMemo(() => {
    if (nums.length === 0) return null;
    return (Math.max(...nums) - Math.min(...nums)).toFixed(2);
  }, [nums]);

  const sorted = useMemo(() => [...nums].sort((a, b) => a - b), [nums]);

  return (
    <Interactive title="Mean, median, mode and range calculator" subtitle="Type your own numbers separated by commas. Watch the statistics update instantly.">
      <div className="ctrl-row" style={{ marginBottom: "0.75rem" }}>
        <label style={{ fontWeight: "600", marginRight: "0.5rem", whiteSpace: "nowrap" }}>Your numbers:</label>
        <input
          type="text"
          value={raw}
          onChange={e => setRaw(e.target.value)}
          style={{
            flex: 1,
            padding: "0.4rem 0.75rem",
            border: "2px solid var(--border)",
            borderRadius: "8px",
            fontSize: "1rem",
            fontFamily: "var(--font-mono, monospace)",
            background: "var(--surface)",
            color: "var(--ink)",
          }}
          placeholder="e.g. 5, 8, 6, 5, 10"
        />
      </div>
      {nums.length > 0 && (
        <>
          <p className="muted" style={{ marginBottom: "0.5rem" }}>Sorted: {sorted.join(", ")}</p>
          <div className="stat-readout">
            <Stat value={mean} label="Mean" />
            <Stat value={median} label="Median" />
            <Stat value={mode} label="Mode" />
            <Stat value={range} label="Range" />
          </div>
          <div style={{ marginTop: "0.75rem", fontSize: "0.875rem", color: "var(--ink-muted)" }}>
            <p style={{ marginBottom: "0.25rem" }}><strong>Mean:</strong> ({nums.join(" + ")}) / {nums.length} = {mean}</p>
            <p style={{ marginBottom: "0.25rem" }}><strong>Median:</strong> middle value of sorted list = {median}</p>
            <p style={{ marginBottom: "0.25rem" }}><strong>Mode:</strong> most frequent value(s) = {mode}</p>
            <p style={{ marginBottom: 0 }}><strong>Range:</strong> {Math.max(...nums)} - {Math.min(...nums)} = {range}</p>
          </div>
        </>
      )}
      {nums.length === 0 && <p className="muted">Enter at least one number above.</p>}
    </Interactive>
  );
}

/* Scatter plot explorer: spot the trend */
function ScatterExplorer() {
  const datasets = {
    positive: {
      label: "Positive trend",
      pts: [
        [17,155],[17.5,158],[18,160],[18.2,161],[18.5,163],[19,165],[19.2,164],
        [19.5,167],[20,169],[20.3,170],[20.5,171],[21,173],[21.5,175],[22,177],
        [22.3,176],[22.5,179],[23,181],[23.5,183],[24,185],
      ],
      xlabel: "Hand span (cm)", ylabel: "Height (cm)",
      desc: "As hand span increases, height also tends to increase. This is a positive trend.",
    },
    negative: {
      label: "Negative trend",
      pts: [
        [0,100],[200,97],[400,93],[600,88],[800,84],[1000,79],[1200,74],
        [1400,69],[1600,63],[1800,58],[2000,53],[2200,47],[2400,41],[2600,35],
        [2800,28],[3000,21],
      ],
      xlabel: "Altitude (m)", ylabel: "Oxygen level (% of sea level)",
      desc: "As altitude increases, available oxygen decreases. This is a negative trend.",
    },
    none: {
      label: "No trend",
      pts: [
        [35,62],[36,78],[37,55],[38,91],[39,43],[40,82],[41,67],[42,50],
        [43,88],[44,71],[45,59],[46,76],[37,48],[41,93],[39,65],[44,57],
      ],
      xlabel: "Shoe size", ylabel: "Maths score (%)",
      desc: "There is no clear trend between shoe size and maths score. The points are scattered randomly.",
    },
  };

  const [key, setKey] = useState("positive");
  const ds = datasets[key];
  const allX = ds.pts.map(p => p[0]);
  const allY = ds.pts.map(p => p[1]);
  const minX = Math.min(...allX); const maxX = Math.max(...allX);
  const minY = Math.min(...allY); const maxY = Math.max(...allY);

  const w = 500; const h = 200;
  const pad = { top: 15, right: 15, bottom: 40, left: 50 };
  const cW = w - pad.left - pad.right;
  const cH = h - pad.top - pad.bottom;

  const xS = (v) => pad.left + ((v - minX) / (maxX - minX || 1)) * cW;
  const yS = (v) => pad.top + cH - ((v - minY) / (maxY - minY || 1)) * cH;

  // simple line of best fit
  const n = ds.pts.length;
  const sumX = allX.reduce((a, b) => a + b, 0);
  const sumY = allY.reduce((a, b) => a + b, 0);
  const sumXY = ds.pts.reduce((a, [x, y]) => a + x * y, 0);
  const sumX2 = allX.reduce((a, x) => a + x * x, 0);
  const slope = (n * sumXY - sumX * sumY) / (n * sumX2 - sumX * sumX);
  const intercept = (sumY - slope * sumX) / n;
  const lobfY1 = slope * minX + intercept;
  const lobfY2 = slope * maxX + intercept;

  return (
    <Interactive title="Spot the trend" subtitle="Switch between datasets and observe how the scatter pattern changes.">
      <SegToggle
        options={[
          { value: "positive", label: "Positive" },
          { value: "negative", label: "Negative" },
          { value: "none", label: "No trend" },
        ]}
        value={key}
        onChange={setKey}
      />
      <svg viewBox={`0 0 ${w} ${h}`} width="100%" style={{ maxWidth: w, display: "block", margin: "0.75rem auto 0" }}>
        {/* axes */}
        <line x1={pad.left} x2={pad.left} y1={pad.top} y2={pad.top + cH} stroke="var(--border)" />
        <line x1={pad.left} x2={w - pad.right} y1={pad.top + cH} y2={pad.top + cH} stroke="var(--border)" />
        {/* axis labels */}
        <text x={pad.left + cW / 2} y={h - 4} textAnchor="middle" fontSize="11" fill="var(--ink-muted)">{ds.xlabel}</text>
        <text transform={`translate(12,${pad.top + cH / 2}) rotate(-90)`} textAnchor="middle" fontSize="11" fill="var(--ink-muted)">{ds.ylabel}</text>
        {/* line of best fit */}
        <line
          x1={xS(minX)} y1={yS(lobfY1)}
          x2={xS(maxX)} y2={yS(lobfY2)}
          stroke="var(--accent-deep)" strokeWidth="2" strokeDasharray="6 3" opacity="0.7"
        />
        {/* points */}
        {ds.pts.map(([x, y], i) => (
          <circle key={i} cx={xS(x)} cy={yS(y)} r="5" fill="var(--accent-soft)" stroke="var(--accent-deep)" strokeWidth="1.5" />
        ))}
        {/* legend */}
        <line x1={pad.left + 10} x2={pad.left + 28} y1={pad.top + 8} y2={pad.top + 8} stroke="var(--accent-deep)" strokeWidth="2" strokeDasharray="5 2" />
        <text x={pad.left + 33} y={pad.top + 13} fontSize="11" fill="var(--ink)">Line of best fit</text>
      </svg>
      <p style={{ marginTop: "0.75rem", marginBottom: 0 }}><strong>What this shows:</strong> {ds.desc}</p>
    </Interactive>
  );
}

/* Accuracy vs reliability simulator */
function AccuracyReliabilitySim() {
  const [mode, setMode] = useState("accurate-reliable");

  const configs = {
    "accurate-reliable":  { label: "Accurate + Reliable",  cx: 50, cy: 50, spread: 6,  bias: 0,   biasDeg: 0,  color: "#10b981" },
    "reliable-only":      { label: "Reliable only",         cx: 50, cy: 50, spread: 5,  bias: 18,  biasDeg: 45, color: "#f59e0b" },
    "accurate-only":      { label: "Accurate only",          cx: 50, cy: 50, spread: 22, bias: 0,   biasDeg: 0,  color: "#3b82f6" },
    "neither":            { label: "Neither",                cx: 50, cy: 50, spread: 22, bias: 18,  biasDeg: 45, color: "#ef4444" },
  };

  const cfg = configs[mode];

  const seed = useRef(42);
  const pseudoRandom = (s) => {
    let x = Math.sin(s) * 10000;
    return x - Math.floor(x);
  };

  const dots = useMemo(() => {
    const pts = [];
    const bx = cfg.bias * Math.cos((cfg.biasDeg * Math.PI) / 180);
    const by = cfg.bias * Math.sin((cfg.biasDeg * Math.PI) / 180);
    for (let i = 0; i < 10; i++) {
      const r = pseudoRandom(i * 7 + 3) * cfg.spread - cfg.spread / 2;
      const angle = pseudoRandom(i * 11 + 5) * 2 * Math.PI;
      pts.push({
        x: 50 + bx + r * Math.cos(angle),
        y: 50 + by + r * Math.sin(angle),
      });
    }
    return pts;
  }, [mode]);

  const size = 180;

  return (
    <Interactive title="Accuracy vs reliability simulator" subtitle="Switch between the four combinations and observe how the dot patterns differ.">
      <SegToggle
        options={[
          { value: "accurate-reliable", label: "Both" },
          { value: "reliable-only", label: "Reliable only" },
          { value: "accurate-only", label: "Accurate only" },
          { value: "neither", label: "Neither" },
        ]}
        value={mode}
        onChange={setMode}
      />
      <div style={{ display: "flex", justifyContent: "center", marginTop: "0.75rem" }}>
        <svg viewBox="0 0 100 100" width={size} height={size}>
          {/* target circles */}
          {[40, 30, 20, 10].map(r => (
            <circle key={r} cx="50" cy="50" r={r} fill="none" stroke="var(--border)" strokeWidth="0.8" />
          ))}
          {/* bullseye */}
          <circle cx="50" cy="50" r="3" fill="var(--accent-deep)" opacity="0.4" />
          {/* label: true value */}
          <text x="53" y="49" fontSize="5" fill="var(--ink-muted)">true value</text>
          {/* dots */}
          {dots.map((d, i) => (
            <circle key={i} cx={d.x} cy={d.y} r="3.5" fill={cfg.color} opacity="0.85" />
          ))}
        </svg>
      </div>
      <p style={{ textAlign: "center", marginTop: "0.5rem", fontWeight: "700", color: cfg.color }}>{cfg.label}</p>
      <div style={{ marginTop: "0.5rem", fontSize: "0.875rem", color: "var(--ink-muted)" }}>
        <p style={{ marginBottom: "0.25rem" }}><strong>Accurate:</strong> dots cluster around the bullseye (true value).</p>
        <p style={{ marginBottom: 0 }}><strong>Reliable:</strong> dots cluster tightly together, regardless of where.</p>
      </div>
    </Interactive>
  );
}

/* ================================================================
   SECTION 8.5 INTERACTIVE
   ================================================================ */

function ModelBuilderWalkthrough() {
  const [step, setStep] = useState(0);

  const steps = [
    {
      label: "1. Formulate a question",
      content: "We ask: Does hand span predict height in Year 8 students? This is specific, measurable, and testable.",
      color: "var(--accent-deep)",
    },
    {
      label: "2. Plan data collection",
      content: "We will measure hand span (cm) and height (cm) for 20 students. These are continuous quantitative variables. We control for measurement method.",
      color: "#f59e0b",
    },
    {
      label: "3. Collect and record data",
      content: "Each student measures their own hand span and height. Data is recorded in a table: Student | Hand span (cm) | Height (cm).",
      color: "#8b5cf6",
    },
    {
      label: "4. Calculate statistics",
      content: "Mean hand span = 20.5 cm. Range = 9 cm. Mean height = 172 cm. Range = 38 cm.",
      color: "#10b981",
    },
    {
      label: "5. Graph the data",
      content: "Plot a scatter graph: hand span on the x-axis, height on the y-axis. Draw a line of best fit.",
      color: "#ef4444",
    },
    {
      label: "6. Identify the pattern",
      content: "The scatter plot shows a positive trend. Students with larger hand spans tend to be taller.",
      color: "#0891b2",
    },
    {
      label: "7. Build and communicate model",
      content: "Our model: height increases by about 3.8 cm for each 1 cm increase in hand span. This is valid for hand spans between 16 cm and 26 cm.",
      color: "#3b82f6",
    },
    {
      label: "8. Evaluate and reflect",
      content: "Limitations: small sample (one class), body proportions vary. Improvements: use a larger diverse sample, control for age and sex.",
      color: "#64748b",
    },
  ];

  return (
    <Interactive title="Model-building walkthrough" subtitle="Step through the full data science process for a hand span vs height investigation.">
      <div style={{ display: "flex", flexWrap: "wrap", gap: "0.4rem", marginBottom: "1rem" }}>
        {steps.map((s, i) => (
          <button
            key={i}
            onClick={() => setStep(i)}
            className={`chip${i === step ? " accent" : ""}`}
            style={{ cursor: "pointer", border: `2px solid ${i === step ? s.color : "var(--border)"}`, fontWeight: i === step ? "700" : "400" }}
          >
            Step {i + 1}
          </button>
        ))}
      </div>
      <div style={{
        background: "var(--surface-raised)",
        borderLeft: `4px solid ${steps[step].color}`,
        borderRadius: "10px",
        padding: "1rem 1.25rem",
        minHeight: "80px",
      }}>
        <p style={{ fontWeight: "700", marginBottom: "0.35rem", color: steps[step].color }}>{steps[step].label}</p>
        <p style={{ marginBottom: 0 }}>{steps[step].content}</p>
      </div>
      <div style={{ display: "flex", gap: "0.5rem", marginTop: "0.75rem" }}>
        <button className="btn btn-ghost" onClick={() => setStep(s => Math.max(0, s - 1))} disabled={step === 0}>Previous</button>
        <button className="btn btn-accent" onClick={() => setStep(s => Math.min(steps.length - 1, s + 1))} disabled={step === steps.length - 1}>Next step</button>
      </div>
    </Interactive>
  );
}

/* Hand span scatter with line-of-best-fit predictions */
function HandSpanScatter() {
  const pts = [
    [16.5,153],[17.0,157],[17.8,159],[18.0,161],[18.5,163],[19.0,166],
    [19.5,168],[20.0,170],[20.5,171],[21.0,173],[21.5,174],[22.0,176],
    [22.5,178],[23.0,180],[23.5,181],[24.0,184],[24.5,185],[25.0,187],
    [25.5,189],[26.0,191],
  ];

  const [targetSpan, setTargetSpan] = useState(21);

  const allX = pts.map(p => p[0]);
  const allY = pts.map(p => p[1]);
  const minX = 16; const maxX = 27;
  const minY = 148; const maxY = 196;

  const w = 520; const h = 210;
  const pad = { top: 15, right: 20, bottom: 42, left: 50 };
  const cW = w - pad.left - pad.right;
  const cH = h - pad.top - pad.bottom;

  const xS = (v) => pad.left + ((v - minX) / (maxX - minX)) * cW;
  const yS = (v) => pad.top + cH - ((v - minY) / (maxY - minY)) * cH;

  // line of best fit
  const n = pts.length;
  const sumX = allX.reduce((a, b) => a + b, 0);
  const sumY = allY.reduce((a, b) => a + b, 0);
  const sumXY = pts.reduce((a, [x, y]) => a + x * y, 0);
  const sumX2 = allX.reduce((a, x) => a + x * x, 0);
  const slope = (n * sumXY - sumX * sumY) / (n * sumX2 - sumX * sumX);
  const intercept = (sumY - slope * sumX) / n;
  const pred = (x) => slope * x + intercept;
  const predHeight = pred(targetSpan).toFixed(1);

  const isExtrap = targetSpan < Math.min(...allX) || targetSpan > Math.max(...allX);

  return (
    <Interactive title="Hand span vs height: live predictions" subtitle="Drag the slider to predict height from hand span using the line of best fit.">
      <svg viewBox={`0 0 ${w} ${h}`} width="100%" style={{ maxWidth: w, display: "block", margin: "0 auto" }}>
        {/* gridlines */}
        {[155, 165, 175, 185, 195].map(v => {
          const y = yS(v);
          return (
            <g key={v}>
              <line x1={pad.left} x2={w - pad.right} y1={y} y2={y} stroke="var(--border)" strokeDasharray="3 2" />
              <text x={pad.left - 6} y={y + 4} textAnchor="end" fontSize="10" fill="var(--ink-muted)">{v}</text>
            </g>
          );
        })}
        {/* x labels */}
        {[17, 19, 21, 23, 25].map(v => (
          <text key={v} x={xS(v)} y={pad.top + cH + 14} textAnchor="middle" fontSize="10" fill="var(--ink-muted)">{v}</text>
        ))}
        <text x={pad.left + cW / 2} y={h - 2} textAnchor="middle" fontSize="11" fill="var(--ink-muted)">Hand span (cm)</text>
        <text transform={`translate(12,${pad.top + cH / 2}) rotate(-90)`} textAnchor="middle" fontSize="11" fill="var(--ink-muted)">Height (cm)</text>
        {/* line of best fit */}
        <line x1={xS(minX)} y1={yS(pred(minX))} x2={xS(maxX)} y2={yS(pred(maxX))}
          stroke="var(--accent-deep)" strokeWidth="2" strokeDasharray="6 3" />
        {/* points */}
        {pts.map(([x, y], i) => (
          <circle key={i} cx={xS(x)} cy={yS(y)} r="5" fill="var(--accent-soft)" stroke="var(--accent-deep)" strokeWidth="1.5" />
        ))}
        {/* prediction marker */}
        <line x1={xS(targetSpan)} x2={xS(targetSpan)} y1={pad.top} y2={pad.top + cH}
          stroke={isExtrap ? "#ef4444" : "#10b981"} strokeDasharray="4 3" strokeWidth="2" />
        <circle cx={xS(targetSpan)} cy={yS(pred(targetSpan))} r="7" fill={isExtrap ? "#ef4444" : "#10b981"} />
        {/* axes */}
        <line x1={pad.left} x2={pad.left} y1={pad.top} y2={pad.top + cH} stroke="var(--border)" />
        <line x1={pad.left} x2={w - pad.right} y1={pad.top + cH} y2={pad.top + cH} stroke="var(--border)" />
      </svg>
      <div style={{ marginTop: "0.75rem" }}>
        <Slider label="Hand span" min={16} max={27} step={0.5} value={targetSpan} onChange={setTargetSpan} unit=" cm" />
      </div>
      <div className="stat-readout">
        <Stat value={`${predHeight} cm`} label="Predicted height" />
        <Stat value={isExtrap ? "Extrapolation" : "Interpolation"} label="Prediction type" />
      </div>
      {isExtrap && <p style={{ color: "#ef4444", marginTop: "0.5rem", marginBottom: 0 }}>You are outside the measured range. This is extrapolation and carries higher uncertainty.</p>}
    </Interactive>
  );
}

/* ================================================================
   SECTION COMPONENTS
   ================================================================ */

function Section81({ progress, setProgress }) {
  return (
    <>
      <div className="topic-head">
        <div className="eyebrow">8.1 Data</div>
        <h1>Where does data come from?</h1>
        <p className="lead">Data surrounds us everywhere. Learning to classify, collect, and question data is the first step in data science.</p>
      </div>

      <DotPoint id="8.1.1" title="Sources of data and their applications" progress={progress} setProgress={setProgress}>
        <p>
          <Term def="Any collection of facts, measurements, observations, or descriptions that can be recorded and analysed.">Data</Term> is all around you. Scientists measure temperature and rainfall. Governments count populations. Hospitals record patient health. Even the step count on your phone is a data point. The source of data shapes how reliable and useful it is for answering questions.
        </p>
        <p>
          Data comes in different types. <Term def="Data that consists of numbers and can be measured or counted.">Quantitative data</Term> uses numbers, such as temperature in degrees Celsius or the height of a plant. <Term def="Data that describes categories or qualities and cannot be averaged.">Qualitative data</Term> uses descriptions or categories, such as hair colour or cloud type. Quantitative data divides further into <Term def="Data counted in whole numbers, such as number of students absent.">discrete data</Term> (whole number counts) and <Term def="Data that can take any value on a scale, such as mass or time.">continuous data</Term> (measured on a smooth scale).
        </p>
        <p>
          Data can also be classified by who collected it. <Term def="Data collected directly by the researcher through their own experiment, survey, or observation.">Primary data</Term> you collect yourself, for example recording temperatures in a class experiment. <Term def="Data collected by someone else that a researcher uses, such as downloading records from a government database.">Secondary data</Term> was collected by someone else, such as downloading rainfall records from the Bureau of Meteorology.
        </p>
        <Callout kind="key" title="Data types matter">Choosing the correct data type for a question determines which graphs and statistical tools you can use. Averages only make sense for quantitative data.</Callout>
        <DataTypeSorter />
        <QGroup title="Check yourself">
          <MCQ num={1}
            question="A student records how many birds visit a feeder each day for a week. What type of data is this?"
            options={["Qualitative", "Continuous quantitative", "Discrete quantitative", "Secondary data"]}
            correct={2}
            explain="You count birds in whole numbers (you cannot see 3.7 birds), so this is discrete quantitative data."
          />
          <WrittenQ num={2}
            question="Give one example of primary data and one example of secondary data a scientist might use to study climate change. Explain why each fits its category."
            model="Primary: a student measures daily temperature at school using a thermometer. They collected it themselves. Secondary: the scientist downloads 50-year temperature records from the Bureau of Meteorology. Someone else collected the original data."
          />
        </QGroup>
      </DotPoint>

      <DotPoint id="8.1.2" title="Digital footprints and safe engagement with digital systems" progress={progress} setProgress={setProgress}>
        <p>
          Every time you go online, you leave behind traces called your <Term def="The trail of data left behind by a person's online activities, including information deliberately shared and passively collected.">digital footprint</Term>. An <Term def="A digital footprint created when a person deliberately shares information, such as posting a photo or sending a message.">active digital footprint</Term> is created when you post a photo, fill in a form, or send a message. A <Term def="A digital footprint created without the user's direct awareness, such as a website tracking browsing history via cookies.">passive digital footprint</Term> is created without you knowing it, when websites track your browsing history, apps record your location, and search engines store your queries.
        </p>
        <p>
          Companies use digital footprint data to target advertising. Governments use it to study population behaviour. Researchers use it to identify social trends. However, this data also carries risks: it can be misused by hackers, sold without your consent, or used to discriminate. In data science, strict ethical guidelines protect people's privacy when working with personal datasets.
        </p>
        <Callout kind="warn" title="Staying safe online">Use strong unique passwords. Review app permissions carefully. Think before you post. A message or image you delete may still exist on other servers.</Callout>
        <DigitalFootprintSorter />
        <QGroup title="Check yourself">
          <MCQ num={3}
            question="Which of these creates a PASSIVE digital footprint?"
            options={["Posting a comment on a video", "An app recording your location while you use it", "Filling in your name on a website form", "Sending an email to a friend"]}
            correct={1}
            explain="A passive footprint is created without your direct action. An app recording your location runs in the background without you explicitly sharing that data."
          />
          <WrittenQ num={4}
            question="Explain why it may be impossible to completely erase a digital footprint once it is created."
            model="Once data is shared online, it can be copied, cached, or stored by multiple servers worldwide. Even if a user deletes a post, copies may exist in backups or on devices of others who downloaded the content."
          />
        </QGroup>
      </DotPoint>

      <DotPoint id="8.1.3" title="Data science as an interdisciplinary field" progress={progress} setProgress={setProgress}>
        <p>
          <Term def="An interdisciplinary field that uses statistics, computing, scientific methods, and domain knowledge to extract meaningful insights from data.">Data science</Term> is the practice of turning raw data into knowledge. It is <Term def="Drawing knowledge and methods from multiple different fields rather than a single subject.">interdisciplinary</Term>, meaning it combines statistics, computer science, mathematics, and specialist knowledge of the topic being studied. No single subject can do the whole job alone.
        </p>
        <p>
          The scientific method is at the core of data science. A data scientist starts with a question, collects and cleans data, applies <Term def="A step-by-step computational procedure that processes data systematically to find patterns or make predictions.">algorithms</Term> to find patterns, builds a model, and communicates results honestly. Algorithms can process millions of data points far faster than any human, but they are only as reliable as the data they are trained on. Biased or incomplete data produces unreliable results no matter how powerful the algorithm.
        </p>
        <Callout kind="fact" title="Data science in action">Australian epidemiologists used data science models during COVID-19 to predict hospital demand and guide vaccination rollout decisions. The models drew on statistics, computing, and medical knowledge together.</Callout>
        <Figure caption="The data science process: from question to communicated findings.">
          <svg viewBox="0 0 580 60" width="100%" style={{ maxWidth: 580 }}>
            {["Ask a question","Collect data","Clean data","Analyse patterns","Build model","Communicate"].map((s, i) => (
              <g key={s} transform={`translate(${i * 96 + 4}, 8)`}>
                <rect width="86" height="40" rx="8" fill="var(--accent-soft)" stroke="var(--accent-deep)" />
                <text x="43" y="16" textAnchor="middle" fontSize="9.5" fontWeight="700" fill="var(--ink)">{s.split(" ").slice(0,2).join(" ")}</text>
                <text x="43" y="28" textAnchor="middle" fontSize="9" fill="var(--ink-muted)">{s.split(" ").slice(2).join(" ")}</text>
                {i < 5 && <text x="95" y="26" textAnchor="middle" fontSize="16" fill="var(--accent-deep)">›</text>}
              </g>
            ))}
          </svg>
        </Figure>
        <QGroup title="Check yourself">
          <MCQ num={5}
            question="Which best describes why data science is called 'interdisciplinary'?"
            options={["It only uses statistics.", "It combines knowledge from statistics, computing, mathematics, and specialist domains.", "It is only practised by scientists.", "It only works with digital data."]}
            correct={1}
            explain="Data science draws on multiple fields. A data scientist investigating climate change needs atmospheric science, statistics, programming, and communication skills."
          />
        </QGroup>
      </DotPoint>
    </>
  );
}

function Section82({ progress, setProgress }) {
  return (
    <>
      <div className="topic-head">
        <div className="eyebrow">8.2 Scientific Models</div>
        <h1>What is a scientific model?</h1>
        <p className="lead">Scientists build simplified representations of complex phenomena to understand, predict, and communicate how the world works.</p>
      </div>

      <DotPoint id="8.2.1" title="Scientific inquiry compared with non-scientific approaches" progress={progress} setProgress={setProgress}>
        <p>
          <Term def="A systematic process for investigating natural phenomena that relies on evidence, reproducibility, and the willingness to revise conclusions when new data emerge.">Scientific inquiry</Term> depends on evidence. A scientific claim must be <Term def="Capable of being confirmed or refuted by gathering evidence through experiment or observation.">testable</Term>: it must be possible to design an investigation that could support or disprove it. Scientists conduct controlled experiments, measure variables carefully, and subject their findings to <Term def="The process by which other qualified scientists examine a study's methods, data, and conclusions before results are published.">peer review</Term>.
        </p>
        <p>
          Non-scientific approaches may rely on tradition, authority, intuition, or spiritual belief. They are not necessarily wrong as ways of viewing the world, but they operate by different rules: claims may be accepted without experimental testing, or may be untestable by design. For example, the claim "plants grow taller when watered daily than weekly" is scientific because it is measurable. The claim "this land has a spiritual connection to our ancestors" is meaningful to those who hold it, but it cannot be tested experimentally.
        </p>
        <Callout kind="key" title="Key features of scientific inquiry">Evidence-based. Testable hypothesis. Controlled variables. Repeatable by other scientists. Revised when new evidence demands it.</Callout>
        <ScientificInquiryQuiz />
        <QGroup title="Check yourself">
          <MCQ num={1}
            question="Which statement is a SCIENTIFIC claim?"
            options={["Plants have feelings.", "Adding nitrogen fertiliser increases wheat yield measured over 6 weeks.", "The moon brings good luck to farmers.", "Nature is beautiful and should be protected."]}
            correct={1}
            explain="This claim identifies specific variables (nitrogen fertiliser and wheat yield) and a timeframe. It can be tested by measuring plant growth with and without added nitrogen."
          />
          <WrittenQ num={2}
            question="Explain why a result that cannot be reproduced by other scientists is not accepted as scientific evidence."
            model="Science requires repeatability: if only one scientist in one lab gets a result, it might be due to their specific equipment, sample, or technique. When independent scientists reproduce the same result in different settings, confidence grows that the result reflects a genuine natural phenomenon rather than a fluke."
          />
        </QGroup>
      </DotPoint>

      <DotPoint id="8.2.2" title="Scientific models as representations based on data and observations" progress={progress} setProgress={setProgress}>
        <p>
          A <Term def="A simplified representation of a real-world phenomenon, built from data and observations, used to understand, predict, and communicate about that phenomenon.">scientific model</Term> is not a perfect copy of reality. It is a simplified tool built from data to capture the most important features of a phenomenon. A map is a model of a landscape: it shows roads and distances but leaves out the colour of individual buildings or the sound of traffic. That simplification is what makes it useful.
        </p>
        <p>
          All models are grounded in data. The more data available, the more accurately a model can represent reality. But all models have limits: they are built from incomplete data and may fail in conditions outside the original observations. Scientists test their models by comparing predictions to new measurements. When predictions fail, the model is revised or replaced. This cycle of observation, modelling, testing, and revision drives scientific progress.
        </p>
        <Callout kind="tip" title="All models are wrong, but some are useful">A model does not need to be perfect to be valuable. A weather forecast model may be wrong sometimes, but it still helps you decide whether to carry an umbrella. Usefulness, not perfection, is the standard.</Callout>
        <Figure caption="The model-building cycle: data feeds models, models generate predictions, predictions are tested against new data.">
          <svg viewBox="0 0 500 100" width="100%" style={{ maxWidth: 500 }}>
            {[
              { label: "Collect data", x: 20, y: 30 },
              { label: "Find patterns", x: 150, y: 30 },
              { label: "Build model", x: 280, y: 30 },
              { label: "Test predictions", x: 375, y: 30 },
            ].map((s, i, arr) => (
              <g key={s.label}>
                <rect x={s.x} y={s.y} width="110" height="38" rx="8" fill="var(--accent-soft)" stroke="var(--accent-deep)" />
                <text x={s.x + 55} y={s.y + 23} textAnchor="middle" fontSize="11" fontWeight="700" fill="var(--ink)">{s.label}</text>
                {i < arr.length - 1 && <text x={s.x + 118} y={s.y + 25} textAnchor="middle" fontSize="18" fill="var(--accent-deep)">›</text>}
              </g>
            ))}
            <path d="M 485 49 Q 490 85 250 85 Q 10 85 15 49" fill="none" stroke="var(--accent-deep)" strokeWidth="1.5" markerEnd="url(#arrow)" />
            <text x="250" y="97" textAnchor="middle" fontSize="10" fill="var(--ink-muted)">Revise if predictions fail</text>
          </svg>
        </Figure>
        <QGroup title="Check yourself">
          <MCQ num={3}
            question="Why is a model NEVER a perfect copy of the real world?"
            options={["Scientists are not skilled enough to build perfect models.", "Models are built from finite data under specific conditions; reality is infinitely complex.", "Models are only used for teaching, not real science.", "Models must be simple so students can understand them."]}
            correct={1}
            explain="Every model involves assumptions and simplifications. No model can capture every detail of reality. The goal is a useful representation, not a perfect one."
          />
        </QGroup>
      </DotPoint>

      <DotPoint id="8.2.3" title="Types of models used by scientists" progress={progress} setProgress={setProgress}>
        <p>
          Scientists use different types of models depending on what they are studying. <Term def="Three-dimensional objects built to represent structures or systems, such as a globe or a model DNA double helix.">Physical models</Term> are 3D objects you can hold. <Term def="Diagrams, words, or analogies that represent ideas and relationships, such as a food web or water cycle diagram.">Conceptual models</Term> use diagrams or analogies. <Term def="Equations and numerical relationships that represent how variables interact, such as F = ma.">Mathematical models</Term> use formulas. <Term def="Computer programs that simulate complex systems using algorithms and mathematical rules.">Computational models</Term> run on computers to simulate complex systems. <Term def="Visual representations of data through graphs, charts, maps, and tables.">Graphical models</Term> display data visually, and are central to data science.
        </p>
        <p>
          In data science, graphical models are used constantly. A scatter plot, bar chart, or line graph is a model of the relationship between variables in a dataset. It shows what the data reveals and allows predictions to be made. Choosing the right type of model for a question is itself a key skill.
        </p>
        <ModelTypeSorter />
        <RainfallBarChart />
        <QGroup title="Check yourself">
          <MCQ num={4}
            question="A scientist uses equations to predict how a virus spreads through a school. What type of model is this?"
            options={["Physical model", "Conceptual model", "Mathematical or computational model", "Graphical model"]}
            correct={2}
            explain="Using equations to predict spread is a mathematical model. When run on a computer with data inputs, it becomes a computational model."
          />
          <WrittenQ num={5}
            question="Explain why a food web is described as a conceptual model rather than a physical one."
            model="A food web uses a diagram with labelled arrows to represent feeding relationships between organisms. It cannot be directly observed as a whole physical object. It is a simplified representation of complex real-world interactions built from observations of what organisms eat."
          />
        </QGroup>
      </DotPoint>

      <DotPoint id="8.2.4" title="Analysing models to identify trends and generate predictions" progress={progress} setProgress={setProgress}>
        <p>
          Analysing a model means examining its data to identify <Term def="The general direction or pattern of change in data, such as consistently increasing, decreasing, or remaining constant.">trends</Term>, spot <Term def="A data point that falls far outside the general pattern of the rest of the dataset.">outliers</Term>, and make predictions. From a graph, you can <Term def="Estimating a value within the range of measured data using the established trend.">interpolate</Term> (estimate values within the measured range) or <Term def="Predicting a value beyond the range of measured data by projecting the trend forward or backward.">extrapolate</Term> (predict values beyond the data range). Extrapolation always carries more uncertainty because conditions outside the measured range may behave differently.
        </p>
        <p>
          Computer-based models are especially powerful because they allow scientists to run <Term def="Virtual experiments where variables are changed and the model calculates outcomes rapidly.">simulations</Term>. A climate model can simulate the effect of doubling atmospheric carbon dioxide without waiting decades for real-world change. Changing one variable while holding others constant is called <Term def="Changing one variable in a computer model while keeping others constant to see how sensitive the output is to that variable.">sensitivity analysis</Term>. It reveals which variables have the greatest influence on a system.
        </p>
        <PopulationModel />
        <QGroup title="Check yourself">
          <MCQ num={6}
            question="A student uses a population graph to predict the city's population in a year that was not measured but falls between two measured years. What is this called?"
            options={["Extrapolation", "Interpolation", "Sensitivity analysis", "Simulation"]}
            correct={1}
            explain="Interpolation estimates a value within the range of existing measurements. It is less risky than extrapolation because data on both sides supports the estimate."
          />
          <WrittenQ num={7}
            question="Describe one advantage of using a computer simulation model over a real-world experiment."
            model="A computer simulation allows scientists to change variables instantly and run hundreds of scenarios in seconds, safely and cheaply. Some real-world experiments would be impossible, unethical, or take decades to complete."
          />
        </QGroup>
      </DotPoint>
    </>
  );
}

function Section83({ progress, setProgress }) {
  return (
    <>
      <div className="topic-head">
        <div className="eyebrow">8.3 Applications of Models</div>
        <h1>From data to theory</h1>
        <p className="lead">Models do not appear fully formed. They are built patiently from evidence, tested repeatedly, and refined into scientific theories.</p>
      </div>

      <DotPoint id="8.3.1" title="Data and observations used to develop models" progress={progress} setProgress={setProgress}>
        <p>
          Before a model can be built, scientists must gather data through observation, measurement, and experimentation. The quality and quantity of data directly determines the accuracy of the resulting model. <Term def="Data noting what is seen or noticed without necessarily assigning precise numbers.">Observational data</Term> can suggest initial relationships and hypotheses. <Term def="Data consisting of precise numerical values recorded through measurement.">Quantitative measurement data</Term> provides the numerical foundation on which a mathematical model is built.
        </p>
        <p>
          The plate tectonics model is a great example. People noticed the coastlines of Africa and South America looked like puzzle pieces. Observations of similar rock formations and fossils on both continents added evidence. Measurements of the seafloor showed new rock forming at mid-ocean ridges. Seismic data showed earthquakes concentrating along specific lines. No single dataset built the model. It required many independent lines of evidence working together.
        </p>
        <Callout kind="fact" title="John Snow's spatial model">In 1854, doctor John Snow mapped cholera deaths in London onto a street map. The cluster of deaths around one water pump was instantly visible in the spatial model. He identified the contaminated pump as the source before germ theory was even established. This was data science in action, over 150 years ago.</Callout>
        <Figure caption="Multiple independent evidence types contributed to the plate tectonics model.">
          <svg viewBox="0 0 580 70" width="100%" style={{ maxWidth: 580 }}>
            {[
              "Coastline shapes",
              "Fossil distribution",
              "Rock type and age",
              "Seafloor spreading",
              "Earthquake locations",
              "Plate tectonics model",
            ].map((s, i) => (
              <g key={s} transform={`translate(${i * 95 + 5}, 14)`}>
                <rect width="88" height="42" rx="8"
                  fill={i === 5 ? "var(--accent-deep)" : "var(--accent-soft)"}
                  stroke="var(--accent-deep)" />
                <text x="44" y="17" textAnchor="middle" fontSize="9.5" fontWeight={i === 5 ? "800" : "700"}
                  fill={i === 5 ? "#fff" : "var(--ink)"}>{s.split(" ").slice(0, 2).join(" ")}</text>
                <text x="44" y="30" textAnchor="middle" fontSize="9" fill={i === 5 ? "#fff" : "var(--ink-muted)"}>{s.split(" ").slice(2).join(" ")}</text>
                {i < 5 && <text x="96" y="28" textAnchor="middle" fontSize="16" fill="var(--accent-deep)">›</text>}
              </g>
            ))}
          </svg>
        </Figure>
        <QGroup title="Check yourself">
          <MCQ num={1}
            question="Why does having multiple INDEPENDENT lines of evidence increase confidence in a model?"
            options={["More data is always better regardless of type.", "Each dataset has its own potential errors; when independent sources agree, it is unlikely they are all wrong in the same way.", "Computer algorithms can only process multiple datasets.", "Peer review requires multiple data types."]}
            correct={1}
            explain="If independent datasets with different possible errors all point to the same conclusion, the probability that all are wrong in the same direction is very low. This mutual confirmation greatly strengthens the model."
          />
          <WrittenQ num={2}
            question="A scientist wants to build a model of fish populations in a lake. List three types of data they might collect and explain the role of each."
            model="1. Total fish count (net sampling): provides population size data. 2. Water temperature and chemistry: environmental factors that influence fish survival. 3. Prey species abundance: food availability affects how many fish the lake can support."
          />
        </QGroup>
      </DotPoint>

      <DotPoint id="8.3.2" title="How scientists develop workable theories from models" progress={progress} setProgress={setProgress}>
        <p>
          In everyday speech, "theory" often means a guess. In science, a <Term def="A well-substantiated explanation of a natural phenomenon, supported by large amounts of evidence from multiple independent sources, tested repeatedly, and accepted by the scientific community.">scientific theory</Term> is far more powerful: it is the strongest type of explanation science can offer. The theory of evolution, the germ theory of disease, and the theory of plate tectonics have all withstood enormous amounts of testing and have guided major practical advances.
        </p>
        <p>
          The pathway from a model to a theory involves many stages. A scientist builds a preliminary model from data, publishes it for peer review, and other scientists test its predictions independently. If the model withstands repeated testing from many independent groups, and if it successfully predicts new observations, it gradually gains the broad scientific acceptance needed to be called a theory. A theory is never considered proven beyond all doubt: it remains open to revision if compelling new evidence demands it.
        </p>
        <Callout kind="key" title="Theory does not mean guess">When scientists say something is a theory, they mean it has survived enormous amounts of testing. Germ theory has been confirmed by hundreds of thousands of experiments and directly guided the development of antibiotics that have saved hundreds of millions of lives.</Callout>
        <Figure caption="The pathway from initial observation to a workable scientific theory.">
          <svg viewBox="0 0 580 60" width="100%" style={{ maxWidth: 580 }}>
            {[
              "Observation + data",
              "Hypothesis",
              "Preliminary model",
              "Peer review",
              "Independent testing",
              "Scientific theory",
            ].map((s, i) => (
              <g key={s} transform={`translate(${i * 95 + 5}, 8)`}>
                <rect width="88" height="42" rx="8"
                  fill={i === 5 ? "var(--accent-deep)" : "var(--accent-soft)"}
                  stroke="var(--accent-deep)" />
                <text x="44" y="17" textAnchor="middle" fontSize="9.5" fontWeight={i === 5 ? "800" : "700"}
                  fill={i === 5 ? "#fff" : "var(--ink)"}>{s.split(" ").slice(0, 2).join(" ")}</text>
                <text x="44" y="30" textAnchor="middle" fontSize="9" fill={i === 5 ? "#fff" : "var(--ink-muted)"}>{s.split(" ").slice(2).join(" ")}</text>
                {i < 5 && <text x="96" y="28" textAnchor="middle" fontSize="16" fill="var(--accent-deep)">›</text>}
              </g>
            ))}
          </svg>
        </Figure>
        <QGroup title="Check yourself">
          <MCQ num={3}
            question="A student says 'evolution is only a theory, so it might be wrong.' What is the flaw in this reasoning?"
            options={["The student is correct; theories can be wrong.", "In science, a theory is the strongest possible explanation, supported by enormous amounts of evidence from many independent sources.", "Theories are proven facts and can never be changed.", "Evolution has not been tested enough to be a theory."]}
            correct={1}
            explain="'Theory' in science does not mean guess. A scientific theory has survived repeated testing by independent researchers. The theory of evolution is one of the most thoroughly tested explanations in all of science."
          />
          <WrittenQ num={4}
            question="Describe two characteristics that a model must demonstrate before it can be considered a scientific theory."
            model="1. The model must generate predictions that are confirmed by new, independent observations. 2. The model must be tested repeatedly by independent scientists in different conditions without being refuted. Both characteristics show that the model is robust and not just a result of one scientist's specific data or methods."
          />
        </QGroup>
      </DotPoint>
    </>
  );
}

function Section84({ progress, setProgress }) {
  return (
    <>
      <div className="topic-head">
        <div className="eyebrow">8.4 Collecting, Using and Analysing Datasets</div>
        <h1>Collecting and analysing data</h1>
        <p className="lead">Good data collection is the foundation of reliable science. Learn to ask testable questions, calculate key statistics, and find patterns.</p>
      </div>

      <DotPoint id="8.4.1" title="Formulating and investigating scientific questions" progress={progress} setProgress={setProgress}>
        <p>
          A <Term def="A question that can be investigated by collecting and analysing measurable data, with identifiable variables and a testable prediction.">scientific question</Term> is specific, measurable, and testable. Compare "Does exercise affect pulse?" with "Does 10 minutes of jogging change the resting pulse rate (beats per minute) of Year 8 students measured 2 minutes after stopping?" The second version identifies the <Term def="The variable a researcher deliberately changes in an experiment.">independent variable</Term> (jogging time), the <Term def="The variable measured as a result of changing the independent variable.">dependent variable</Term> (pulse rate), the subjects, and the measurement method.
        </p>
        <p>
          A good scientific question leads to a <Term def="An educated prediction about the outcome of an investigation, written in the form: if (independent variable), then (dependent variable) will change because (scientific reasoning).">hypothesis</Term>: a prediction in the form "If [independent variable] changes, then [dependent variable] will [change in this way], because [reason]." The hypothesis guides the design of the data collection and gives you something to test your results against.
        </p>
        <Callout kind="key" title="Variables in a fair test">
          Independent variable: what you change. Dependent variable: what you measure. Controlled variables: everything else you keep the same to make the test fair.
        </Callout>
        <Figure caption="A well-structured scientific question identifies three variable types clearly.">
          <svg viewBox="0 0 520 56" width="100%" style={{ maxWidth: 520 }}>
            {[
              { label: "Independent variable", sub: "What you change", color: "var(--accent-deep)" },
              { label: "Dependent variable", sub: "What you measure", color: "#8b5cf6" },
              { label: "Controlled variables", sub: "What you keep the same", color: "#10b981" },
            ].map((s, i) => (
              <g key={s.label} transform={`translate(${i * 173 + 4}, 6)`}>
                <rect width="164" height="44" rx="10" fill="var(--surface-raised)" stroke={s.color} strokeWidth="2" />
                <text x="82" y="21" textAnchor="middle" fontSize="11" fontWeight="700" fill={s.color}>{s.label}</text>
                <text x="82" y="35" textAnchor="middle" fontSize="10" fill="var(--ink-muted)">{s.sub}</text>
              </g>
            ))}
          </svg>
        </Figure>
        <QGroup title="Check yourself">
          <MCQ num={1}
            question="Which of these is a properly formulated scientific question?"
            options={[
              "Is music good for studying?",
              "Does 30 minutes of classical music affect the number of correct answers on a maths test for Year 8 students?",
              "Why do plants need sunlight?",
              "Is it better to sleep more?",
            ]}
            correct={1}
            explain="This version specifies the independent variable (30 minutes of classical music), the dependent variable (number of correct answers), and the population (Year 8 students). It is measurable and testable."
          />
          <WrittenQ num={2}
            question="A student wants to test whether screen brightness affects battery life. Write a properly formulated scientific question and identify the independent and dependent variables."
            model="Scientific question: Does increasing smartphone screen brightness (25%, 50%, 75%, 100%) affect the time in minutes for a fully charged battery to reach 50% charge under standard use conditions? Independent variable: screen brightness level. Dependent variable: time to reach 50% battery (minutes)."
          />
        </QGroup>
      </DotPoint>

      <DotPoint id="8.4.2" title="Repeated trials, mean, range, accuracy and reliability" progress={progress} setProgress={setProgress}>
        <p>
          Scientists rarely rely on a single measurement. Conducting <Term def="Repeating the same measurement or experiment multiple times to produce a more reliable estimate.">repeated trials</Term> reduces the effect of random errors. The <Term def="The arithmetic average of a dataset, calculated by summing all values and dividing by the number of values.">mean</Term> (sum of all values divided by count) gives a representative central value. The <Term def="The difference between the largest and smallest values in a dataset, describing how spread out the data is.">range</Term> (largest minus smallest) shows how spread out the data is. A small range suggests consistent, reliable measurements.
        </p>
        <p>
          <Term def="How close a measurement or set of measurements is to the true or accepted value.">Accuracy</Term> and <Term def="How consistently a measurement can be reproduced. Reliable data gives similar results each time, regardless of whether it is close to the true value.">reliability</Term> are not the same thing. If a scale always reads 2 kg too high, every reading is reliable (consistent) but inaccurate. To improve accuracy, instruments must be calibrated. To improve reliability, repeat measurements and average them.
        </p>
        <AccuracyReliabilitySim />
        <MeanMedianModeCalc />
        <QGroup title="Check yourself">
          <MCQ num={3}
            question="A student measures the boiling point of water 5 times and gets: 98, 99, 98, 99, 98 degrees Celsius. The true value is 100 degrees Celsius. How is this data best described?"
            options={["Accurate and reliable", "Reliable but not accurate", "Accurate but not reliable", "Neither accurate nor reliable"]}
            correct={1}
            explain="The readings are very consistent (range = 1, so reliable), but they are all about 2 degrees below the true value of 100 degrees Celsius. This indicates a systematic error, making the data reliable but not accurate."
          />
          <WrittenQ num={4}
            question="Calculate the mean and range for this dataset: 14, 18, 16, 14, 22, 16. Show your working."
            model="Sum = 14 + 18 + 16 + 14 + 22 + 16 = 100. Mean = 100 / 6 = 16.67 (to 2 d.p.). Range = 22 - 14 = 8."
          />
        </QGroup>
      </DotPoint>

      <DotPoint id="8.4.3" title="Patterns, trends, and testing predictions with data" progress={progress} setProgress={setProgress}>
        <p>
          After summarising data with statistics, the next step is to look for <Term def="Consistent relationships between variables that appear across multiple data points.">patterns</Term>: consistent relationships between variables. A positive trend means as the independent variable increases, the dependent variable also increases. A negative trend means one increases while the other decreases. A <Term def="A straight line or smooth curve drawn through scatter plot data to represent the general trend, minimising distance to all points.">line of best fit</Term> drawn on a scatter plot makes the trend visible and allows predictions.
        </p>
        <p>
          When you find a pattern, compare it to your hypothesis. If the data matches, the hypothesis is supported. If it does not match, the hypothesis is not supported. Either outcome is valuable in science. Be aware that finding a <Term def="A statistical relationship where two variables change together, without necessarily one causing the other.">correlation</Term> between two variables does not prove that one caused the other. A third hidden variable might be responsible.
        </p>
        <Callout kind="warn" title="Correlation is not causation">Both ice cream sales and drowning rates increase in summer. They are correlated, but ice cream does not cause drowning. The common factor is hot weather. Always consider other explanations before concluding causation.</Callout>
        <ScatterExplorer />
        <QGroup title="Check yourself">
          <MCQ num={5}
            question="A scatter plot shows that as fertiliser amount increases, plant height also increases. What type of trend is this?"
            options={["Negative trend", "No trend", "Positive trend", "Correlation with causation"]}
            correct={2}
            explain="When both variables increase together, this is a positive trend. Note: this shows correlation. To establish that fertiliser caused the growth, controlled variables must be maintained."
          />
          <WrittenQ num={6}
            question="A student's data does not match their hypothesis. Does this mean the investigation failed? Explain your answer."
            model="No, the investigation did not fail. A result that does not match the hypothesis is still a valid scientific result. It shows the hypothesis was not supported by the evidence, which is itself important information. It prompts the scientist to revise the hypothesis or investigate alternative explanations."
          />
        </QGroup>
      </DotPoint>

      <DotPoint id="8.4.4" title="Mean, median, mode and range: measures of centre and spread" progress={progress} setProgress={setProgress}>
        <p>
          The word "average" can refer to three different statistics. The <Term def="The arithmetic average: sum divided by count. Sensitive to outliers.">mean</Term> is the most common: add all values and divide by how many there are. The <Term def="The middle value when all data are arranged in order. Resistant to outliers.">median</Term> is the middle value in an ordered list. The <Term def="The most frequently occurring value in a dataset. Most useful for discrete or categorical data.">mode</Term> is the most frequent value. The <Term def="The difference between the largest and smallest values. Describes the total spread of the data.">range</Term> describes spread.
        </p>
        <p>
          The mean is sensitive to <Term def="A data point that is far from the general pattern of the rest of the dataset.">outliers</Term>: one very large or small value can pull it far from most of the data. The median is resistant to outliers because it only depends on order, not size. When data is skewed (has a long tail on one side), the median is often the better measure of centre. For example, the Australian Bureau of Statistics reports median household income, not mean, because a small number of very high earners would otherwise inflate the mean far above what most Australians actually earn.
        </p>
        <MeanMedianModeCalc />
        <QGroup title="Check yourself">
          <MCQ num={7}
            question="Ten house prices are: $400k, $450k, $420k, $410k, $430k, $440k, $415k, $425k, $435k, $3 million. Which measure of centre would best represent a typical house price in this suburb?"
            options={["Mean, because it uses all data points", "Median, because it is resistant to the $3 million outlier", "Mode, because it is the most common price", "Range, because it shows the spread"]}
            correct={1}
            explain="The $3 million value is an extreme outlier that would inflate the mean well above what most houses cost. The median gives a much better picture of what a typical buyer would pay."
          />
          <WrittenQ num={8}
            question="Calculate the mean, median, mode, and range for this dataset: 5, 8, 6, 5, 10, 6, 5. Show your working."
            model="Ordered: 5, 5, 5, 6, 6, 8, 10. Mean = (5+8+6+5+10+6+5) / 7 = 45 / 7 = 6.43. Median = 4th value = 6. Mode = 5 (appears 3 times). Range = 10 - 5 = 5."
          />
        </QGroup>
      </DotPoint>
    </>
  );
}

function Section85({ progress, setProgress }) {
  return (
    <>
      <div className="topic-head">
        <div className="eyebrow">8.5 Data Science 1 in Context</div>
        <h1>Creating your own model</h1>
        <p className="lead">Apply everything you have learned: collect data, calculate statistics, graph the results, identify patterns, and communicate your model.</p>
      </div>

      <DotPoint id="8.5.1" title="Create a model to explain an observable phenomenon" progress={progress} setProgress={setProgress}>
        <p>
          At the heart of data science is the ability to turn raw observations into a model that explains how something works. A model can take many forms: a table with a trend line, a labelled diagram, a mathematical rule, or a set of clearly stated principles drawn from data. What all models share is that they are built from evidence, they simplify reality to highlight the most important features, and they generate predictions that can be tested.
        </p>
        <p>
          A complete model-building project follows the full data science cycle: formulate a question, plan data collection, collect and organise data, calculate descriptive statistics, produce a graph, identify the pattern, build and communicate the model, and evaluate its limitations. Reporting uncertainty honestly is as important as reporting the pattern. A good scientist describes the conditions under which their model is valid and the conditions under which it might break down.
        </p>
        <Callout kind="key" title="What a complete model report includes">Question addressed. Data collection method. Descriptive statistics (mean, range). A clearly labelled graph. Pattern description. Predictions (noting interpolation vs extrapolation). Limitations and suggested improvements. Honest statement about accuracy and reliability.</Callout>
        <ModelBuilderWalkthrough />
        <HandSpanScatter />
        <QGroup title="Check yourself">
          <MCQ num={1}
            question="A student creates a scatter plot of hand span vs height for 5 students and all points fall exactly on the line. A classmate says the model is perfect. What is the most likely problem?"
            options={[
              "The model is indeed perfect.",
              "With only 5 points, a line can be forced through all of them. Real measurements always show some variability, so zero scatter suggests the sample is too small or data was fabricated.",
              "The student used the wrong type of graph.",
              "The line of best fit should not pass through all points.",
            ]}
            correct={1}
            explain="In real investigations, random measurement error and natural variability always cause scatter around the line. A perfect fit to a very small dataset is more likely to reflect data problems than genuine scientific certainty."
          />
          <WrittenQ num={2}
            question="You have built a graphical model showing a positive trend between hours of sleep and reaction speed in Year 8 students. List two limitations of your model and explain how you would improve it."
            model="Limitation 1: small sample size from one class. The model may not represent all Year 8 students. Improvement: measure a larger, more diverse sample from multiple schools. Limitation 2: sleep hours were self-reported, which is inaccurate. Improvement: use an objective sleep tracker device to measure sleep duration."
          />
          <WrittenQ num={3}
            question="Explain why the data science process is described as a cycle rather than a straight-line sequence."
            model="The process is a cycle because conclusions from a model generate new questions, which require more data collection, refined models, and further testing. Each model and its evaluation reveal new questions, driving further investigation rather than ending at a single answer."
          />
        </QGroup>
      </DotPoint>
    </>
  );
}

/* ================================================================
   MOUNT
   ================================================================ */
mountTopicApp({
  year: 8,
  topicTitle: "Data Science 1",
  strand: "Stage 4 · NSW Science",
  accent: "teal",
  storageKey: "y8.datascience",
  hubHref: "../",
  intro: "Data is everywhere: in weather apps, fitness trackers, hospital records, and social media feeds. In this topic you will learn where data comes from, how scientists build models from data, and how to collect, analyse, and present your own data using statistics and graphs. You will practise the full data science cycle and discover how this powerful interdisciplinary field drives discoveries in medicine, climate science, and beyond.",
  glossary: {
    "data": "Any collection of facts, measurements, observations, or descriptions that can be recorded and analysed.",
    "quantitative data": "Data that consists of numbers and can be measured or counted.",
    "qualitative data": "Data that describes categories or qualities and cannot be averaged.",
    "discrete data": "Quantitative data counted in whole numbers, such as number of students absent.",
    "continuous data": "Quantitative data measured on a smooth scale, such as mass or temperature.",
    "primary data": "Data collected directly by the researcher through their own experiment, survey, or observation.",
    "secondary data": "Data collected by someone else that a researcher uses, such as government records.",
    "digital footprint": "The trail of data left by a person's online activities, including deliberately shared and passively collected information.",
    "active digital footprint": "A digital footprint created when a person deliberately shares information online.",
    "passive digital footprint": "A digital footprint created without the user's direct awareness, such as browsing history tracked by cookies.",
    "data science": "An interdisciplinary field using statistics, computing, scientific methods, and domain knowledge to extract insights from data.",
    "algorithm": "A step-by-step computational procedure that processes data to find patterns or make predictions.",
    "scientific model": "A simplified representation of a real-world phenomenon, built from data and observations.",
    "physical model": "A three-dimensional object representing a structure or system.",
    "conceptual model": "A diagram, analogy, or word-based representation of ideas and relationships.",
    "mathematical model": "Equations and formulas that represent relationships between variables.",
    "graphical model": "A visual representation of data through charts, graphs, maps, or tables.",
    "computational model": "A computer-based simulation using algorithms and mathematical rules.",
    "scientific theory": "A well-substantiated explanation of a natural phenomenon, supported by extensive independent evidence and accepted by the scientific community.",
    "independent variable": "The variable a researcher deliberately changes in an experiment.",
    "dependent variable": "The variable measured as a result of changing the independent variable.",
    "controlled variable": "A variable kept constant throughout an experiment to ensure a fair test.",
    "hypothesis": "An educated prediction about the outcome of an investigation.",
    "mean": "The arithmetic average: sum of all values divided by the number of values.",
    "median": "The middle value when all data are arranged in ascending order.",
    "mode": "The most frequently occurring value in a dataset.",
    "range": "The difference between the largest and smallest values in a dataset.",
    "accuracy": "How close a measurement is to the true or accepted value.",
    "reliability": "How consistently a measurement can be reproduced across repeated trials.",
    "interpolation": "Estimating a value within the range of measured data using the established trend.",
    "extrapolation": "Predicting a value beyond the range of measured data by projecting the trend.",
    "trend": "The general direction or pattern of change in data over time or across categories.",
    "outlier": "A data point that falls far outside the general pattern of the rest of the dataset.",
    "line of best fit": "A line drawn through scatter plot data to represent the general trend.",
    "correlation": "A statistical relationship where two variables change together, not necessarily because one causes the other.",
    "peer review": "The process by which other qualified scientists examine a study's methods and conclusions before publication.",
    "sensitivity analysis": "Changing one variable in a model while keeping others constant to see how sensitive the output is.",
    "simulation": "A virtual experiment run on a computer where variables can be changed rapidly.",
  },
  sections: [
    {
      id: "8.1",
      label: "Data",
      accent: "teal",
      blurb: "Types of data, digital footprints, and data science as a discipline.",
      points: ["8.1.1", "8.1.2", "8.1.3"],
      render: (p) => <Section81 {...p} />,
    },
    {
      id: "8.2",
      label: "Scientific Models",
      accent: "teal",
      blurb: "What models are, types of models, and how to read trends and make predictions.",
      points: ["8.2.1", "8.2.2", "8.2.3", "8.2.4"],
      render: (p) => <Section82 {...p} />,
    },
    {
      id: "8.3",
      label: "Applications of Models",
      accent: "teal",
      blurb: "How data builds models and how models become theories.",
      points: ["8.3.1", "8.3.2"],
      render: (p) => <Section83 {...p} />,
    },
    {
      id: "8.4",
      label: "Collecting and Analysing Data",
      accent: "teal",
      blurb: "Scientific questions, repeated trials, statistics, and finding patterns.",
      points: ["8.4.1", "8.4.2", "8.4.3", "8.4.4"],
      render: (p) => <Section84 {...p} />,
    },
    {
      id: "8.5",
      label: "Data Science in Context",
      accent: "teal",
      blurb: "Build and communicate your own scientific model from real data.",
      points: ["8.5.1"],
      render: (p) => <Section85 {...p} />,
    },
  ],
});

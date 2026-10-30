/* Generated from content.jsx by tools/build.js. Edit the .jsx, not this file. */
"use strict";

function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
/* global React, DotPoint, Callout, Figure, Term, MCQ, WrittenQ, QGroup, Interactive,
   Slider, SegToggle, Stat, Reveal, FlipCard, MatchBuckets, Ring, mountTopicApp */
var _React = React,
  useState = _React.useState,
  useEffect = _React.useEffect,
  useRef = _React.useRef,
  useMemo = _React.useMemo;

/* =========================================================
   SECTION 5.1 -- BODY SYSTEMS
   Custom interactives
   ========================================================= */

/* --- Levels of Organisation Builder --- */
function LevelsBuilder() {
  var levels = [{
    id: "cell",
    label: "Cell",
    colour: "#6ee7b7",
    desc: "Basic unit of life"
  }, {
    id: "tissue",
    label: "Tissue",
    colour: "#34d399",
    desc: "Similar cells grouped together"
  }, {
    id: "organ",
    label: "Organ",
    colour: "#10b981",
    desc: "Several tissues working together"
  }, {
    id: "system",
    label: "Organ System",
    colour: "#059669",
    desc: "Organs with a shared goal"
  }, {
    id: "organism",
    label: "Organism",
    colour: "#047857",
    desc: "All systems integrated"
  }];
  var _useState = useState(null),
    _useState2 = _slicedToArray(_useState, 2),
    selected = _useState2[0],
    setSelected = _useState2[1];
  var examples = {
    cell: ["Red blood cell", "Muscle cell", "Nerve cell", "Epithelial cell"],
    tissue: ["Muscle tissue", "Connective tissue", "Epithelial tissue", "Nervous tissue"],
    organ: ["Heart", "Lung", "Kidney", "Stomach"],
    system: ["Circulatory system", "Respiratory system", "Digestive system", "Excretory system"],
    organism: ["A human being"]
  };
  return /*#__PURE__*/React.createElement(Interactive, {
    title: "Levels of Organisation",
    subtitle: "Tap a level to see examples. Each level is built from the one below it.",
    takeaway: "Living things are organised from the simplest unit (the cell) up through tissues and organs to complete organ systems, and each level depends on the one below it."
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 8,
      flexWrap: "wrap",
      justifyContent: "center",
      marginBottom: 16
    }
  }, levels.map(function (lv) {
    return /*#__PURE__*/React.createElement("button", {
      key: lv.id,
      onClick: function onClick() {
        return setSelected(lv.id === selected ? null : lv.id);
      },
      style: {
        background: lv.id === selected ? lv.colour : "var(--surface-raised)",
        color: lv.id === selected ? "#fff" : "var(--ink)",
        border: "2px solid ".concat(lv.colour),
        borderRadius: 10,
        padding: "10px 18px",
        fontWeight: 700,
        cursor: "pointer",
        transition: "all 0.2s",
        fontSize: 15
      }
    }, lv.label);
  })), selected && /*#__PURE__*/React.createElement("div", {
    style: {
      background: "var(--surface-raised)",
      borderRadius: 12,
      padding: "14px 20px"
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      margin: "0 0 6px",
      fontWeight: 700,
      color: "var(--accent-deep)"
    }
  }, levels.find(function (l) {
    return l.id === selected;
  }).label, ": ", levels.find(function (l) {
    return l.id === selected;
  }).desc), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 8,
      flexWrap: "wrap"
    }
  }, examples[selected].map(function (ex) {
    return /*#__PURE__*/React.createElement("span", {
      key: ex,
      className: "chip accent",
      style: {
        fontSize: 13
      }
    }, ex);
  }))), /*#__PURE__*/React.createElement("p", {
    className: "muted",
    style: {
      marginBottom: 0,
      marginTop: 12
    }
  }, "The hierarchy runs: Cell to Tissue to Organ to Organ System to Organism."));
}

/* --- Digestion Journey Animator --- */
function DigestionJourney() {
  var stages = [{
    name: "Mouth",
    icon: "👄",
    colour: "#fde68a",
    text: "Teeth chew food (mechanical digestion). Saliva adds enzymes that begin breaking down starch into sugars (chemical digestion). Food is shaped into a bolus."
  }, {
    name: "Oesophagus",
    icon: "↓",
    colour: "#fcd34d",
    text: "Muscular contractions called peristalsis push the bolus down to the stomach. No digestion happens here."
  }, {
    name: "Stomach",
    icon: "🫃",
    colour: "#fbbf24",
    text: "Powerful muscles churn food. Acid (hydrochloric acid) and enzymes break down protein. Food becomes a paste called chyme."
  }, {
    name: "Small Intestine",
    icon: "🌀",
    colour: "#86efac",
    text: "Most digestion and almost all nutrient absorption happens here. Bile from the liver emulsifies fats. Pancreatic enzymes break down carbohydrates, proteins, and fats. Nutrients cross into the blood through villi."
  }, {
    name: "Large Intestine",
    icon: "💧",
    colour: "#6ee7b7",
    text: "Water and salts are reabsorbed into the blood. The remaining undigested material is compacted into faeces."
  }, {
    name: "Rectum / Anus",
    icon: "🚽",
    colour: "#a7f3d0",
    text: "Faeces are stored in the rectum and expelled through the anus. The journey is complete."
  }];
  var _useState3 = useState(0),
    _useState4 = _slicedToArray(_useState3, 2),
    step = _useState4[0],
    setStep = _useState4[1];
  return /*#__PURE__*/React.createElement(Interactive, {
    title: "Digestion Journey",
    subtitle: "Follow food from mouth to exit. Tap Next to advance.",
    takeaway: "Food is broken down step by step as it moves through the digestive system, with most nutrient absorption happening in the small intestine."
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 6,
      marginBottom: 16,
      flexWrap: "wrap"
    }
  }, stages.map(function (s, i) {
    return /*#__PURE__*/React.createElement("button", {
      key: s.name,
      onClick: function onClick() {
        return setStep(i);
      },
      style: {
        background: i === step ? s.colour : "var(--surface-raised)",
        border: "2px solid ".concat(s.colour),
        borderRadius: 8,
        padding: "6px 12px",
        fontWeight: i === step ? 700 : 400,
        cursor: "pointer",
        fontSize: 13,
        color: "var(--ink)"
      }
    }, s.icon, " ", s.name);
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      background: stages[step].colour + "33",
      border: "2px solid ".concat(stages[step].colour),
      borderRadius: 14,
      padding: "18px 22px"
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      fontWeight: 700,
      fontSize: 18,
      margin: "0 0 8px"
    }
  }, stages[step].icon, " ", stages[step].name), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0
    }
  }, stages[step].text)), /*#__PURE__*/React.createElement("div", {
    className: "ctrl-row",
    style: {
      marginTop: 12
    }
  }, /*#__PURE__*/React.createElement("button", {
    className: "btn btn-ghost",
    onClick: function onClick() {
      return setStep(function (s) {
        return Math.max(0, s - 1);
      });
    },
    disabled: step === 0
  }, "Back"), /*#__PURE__*/React.createElement("button", {
    className: "btn btn-accent",
    onClick: function onClick() {
      return setStep(function (s) {
        return Math.min(stages.length - 1, s + 1);
      });
    },
    disabled: step === stages.length - 1
  }, "Next")));
}

/* --- Body System Sorter --- */
function SystemSorter() {
  return /*#__PURE__*/React.createElement(Interactive, {
    title: "Sort the Organs",
    subtitle: "Drag or tap each organ into the correct body system bucket.",
    takeaway: "Each organ belongs to a specific body system, and knowing which organ does which job is the foundation for understanding how the body works."
  }, /*#__PURE__*/React.createElement(MatchBuckets, {
    items: [{
      id: "heart",
      label: "Heart",
      bucket: "circ"
    }, {
      id: "kidney",
      label: "Kidney",
      bucket: "excr"
    }, {
      id: "stomach",
      label: "Stomach",
      bucket: "dig"
    }, {
      id: "alveoli",
      label: "Alveoli",
      bucket: "resp"
    }, {
      id: "liver",
      label: "Liver",
      bucket: "dig"
    }, {
      id: "lungs",
      label: "Lungs",
      bucket: "resp"
    }, {
      id: "bladder",
      label: "Bladder",
      bucket: "excr"
    }, {
      id: "artery",
      label: "Artery",
      bucket: "circ"
    }],
    buckets: [{
      id: "dig",
      label: "Digestive"
    }, {
      id: "circ",
      label: "Circulatory"
    }, {
      id: "resp",
      label: "Respiratory"
    }, {
      id: "excr",
      label: "Excretory"
    }]
  }));
}

/* --- Blood Circulation Diagram --- */
function CirculationSVG() {
  return /*#__PURE__*/React.createElement(Figure, {
    caption: "Blood travels two circuits: the pulmonary circuit (heart to lungs and back) and the systemic circuit (heart to body and back)."
  }, /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 560 300",
    width: "100%",
    style: {
      maxWidth: 560
    }
  }, /*#__PURE__*/React.createElement("rect", {
    x: "220",
    y: "110",
    width: "120",
    height: "80",
    rx: "14",
    fill: "#fca5a5",
    stroke: "#ef4444",
    strokeWidth: "2"
  }), /*#__PURE__*/React.createElement("text", {
    x: "280",
    y: "148",
    textAnchor: "middle",
    fontSize: "13",
    fontWeight: "700",
    fill: "#7f1d1d"
  }, "Heart"), /*#__PURE__*/React.createElement("text", {
    x: "280",
    y: "163",
    textAnchor: "middle",
    fontSize: "11",
    fill: "#7f1d1d"
  }, "4 chambers"), /*#__PURE__*/React.createElement("rect", {
    x: "50",
    y: "90",
    width: "110",
    height: "60",
    rx: "12",
    fill: "#bfdbfe",
    stroke: "#3b82f6",
    strokeWidth: "2"
  }), /*#__PURE__*/React.createElement("text", {
    x: "105",
    y: "122",
    textAnchor: "middle",
    fontSize: "13",
    fontWeight: "700",
    fill: "#1e3a8a"
  }, "Lungs"), /*#__PURE__*/React.createElement("text", {
    x: "105",
    y: "137",
    textAnchor: "middle",
    fontSize: "10",
    fill: "#1e3a8a"
  }, "O\u2082 in, CO\u2082 out"), /*#__PURE__*/React.createElement("rect", {
    x: "400",
    y: "90",
    width: "110",
    height: "60",
    rx: "12",
    fill: "#bbf7d0",
    stroke: "#22c55e",
    strokeWidth: "2"
  }), /*#__PURE__*/React.createElement("text", {
    x: "455",
    y: "122",
    textAnchor: "middle",
    fontSize: "13",
    fontWeight: "700",
    fill: "#14532d"
  }, "Body Cells"), /*#__PURE__*/React.createElement("text", {
    x: "455",
    y: "137",
    textAnchor: "middle",
    fontSize: "10",
    fill: "#14532d"
  }, "O\u2082 used, CO\u2082 made"), /*#__PURE__*/React.createElement("path", {
    d: "M220 135 Q160 90 160 120",
    fill: "none",
    stroke: "#3b82f6",
    strokeWidth: "2.5",
    markerEnd: "url(#arr)"
  }), /*#__PURE__*/React.createElement("text", {
    x: "178",
    y: "110",
    textAnchor: "middle",
    fontSize: "10",
    fill: "#3b82f6"
  }, "deoxygenated"), /*#__PURE__*/React.createElement("path", {
    d: "M160 150 Q160 180 220 165",
    fill: "none",
    stroke: "#ef4444",
    strokeWidth: "2.5",
    markerEnd: "url(#arr)"
  }), /*#__PURE__*/React.createElement("text", {
    x: "170",
    y: "190",
    textAnchor: "middle",
    fontSize: "10",
    fill: "#ef4444"
  }, "oxygenated"), /*#__PURE__*/React.createElement("path", {
    d: "M340 135 Q400 90 400 120",
    fill: "none",
    stroke: "#ef4444",
    strokeWidth: "2.5",
    markerEnd: "url(#arr)"
  }), /*#__PURE__*/React.createElement("text", {
    x: "388",
    y: "108",
    textAnchor: "middle",
    fontSize: "10",
    fill: "#ef4444"
  }, "oxygenated"), /*#__PURE__*/React.createElement("path", {
    d: "M400 150 Q400 180 340 165",
    fill: "none",
    stroke: "#3b82f6",
    strokeWidth: "2.5",
    markerEnd: "url(#arr)"
  }), /*#__PURE__*/React.createElement("text", {
    x: "390",
    y: "190",
    textAnchor: "middle",
    fontSize: "10",
    fill: "#3b82f6"
  }, "deoxygenated"), /*#__PURE__*/React.createElement("defs", null, /*#__PURE__*/React.createElement("marker", {
    id: "arr",
    markerWidth: "6",
    markerHeight: "6",
    refX: "5",
    refY: "3",
    orient: "auto"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M0,0 L0,6 L6,3 z",
    fill: "#555"
  }))), /*#__PURE__*/React.createElement("text", {
    x: "105",
    y: "175",
    textAnchor: "middle",
    fontSize: "11",
    fill: "var(--muted)"
  }, "Pulmonary circuit"), /*#__PURE__*/React.createElement("text", {
    x: "455",
    y: "175",
    textAnchor: "middle",
    fontSize: "11",
    fill: "var(--muted)"
  }, "Systemic circuit")));
}

/* --- Structure vs Function Cell Explorer --- */
function CellExplorer() {
  var cells = [{
    id: "rbc",
    name: "Red Blood Cell",
    colour: "#fca5a5",
    feature: "Biconcave disc shape, no nucleus, packed with haemoglobin",
    "function": "Maximum surface area for absorbing oxygen; flexible enough to squeeze through narrow capillaries; haemoglobin binds and carries O₂"
  }, {
    id: "alveolar",
    name: "Alveolar Cell",
    colour: "#bfdbfe",
    feature: "Extremely thin wall (one cell thick), moist surface, surrounded by capillaries",
    "function": "Short diffusion distance means O₂ and CO₂ cross quickly between air and blood"
  }, {
    id: "villus",
    name: "Villus Absorptive Cell",
    colour: "#bbf7d0",
    feature: "Covered in microvilli (brush border), thin wall, rich blood supply",
    "function": "Huge surface area dramatically increases the rate of nutrient absorption in the small intestine"
  }, {
    id: "ciliated",
    name: "Ciliated Airway Cell",
    colour: "#fde68a",
    feature: "Tiny hair-like cilia on the surface",
    "function": "Cilia beat rhythmically to sweep mucus (containing trapped dust and bacteria) upward and out of the airways"
  }];
  var _useState5 = useState("rbc"),
    _useState6 = _slicedToArray(_useState5, 2),
    active = _useState6[0],
    setActive = _useState6[1];
  var cell = cells.find(function (c) {
    return c.id === active;
  });
  return /*#__PURE__*/React.createElement(Interactive, {
    title: "Cell Structure and Function Explorer",
    subtitle: "Select a cell type to see how its structure matches its job.",
    takeaway: "A cell's shape and features are directly linked to what it does - structure always matches function in biology."
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 8,
      flexWrap: "wrap",
      marginBottom: 14
    }
  }, cells.map(function (c) {
    return /*#__PURE__*/React.createElement("button", {
      key: c.id,
      onClick: function onClick() {
        return setActive(c.id);
      },
      style: {
        background: c.id === active ? c.colour : "var(--surface-raised)",
        border: "2px solid ".concat(c.colour),
        borderRadius: 10,
        padding: "8px 14px",
        fontWeight: c.id === active ? 700 : 400,
        cursor: "pointer",
        fontSize: 13,
        color: "var(--ink)"
      }
    }, c.name);
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: 12
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      background: cell.colour + "33",
      border: "2px solid ".concat(cell.colour),
      borderRadius: 12,
      padding: "14px 16px"
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      fontWeight: 700,
      margin: "0 0 6px",
      fontSize: 13,
      color: "var(--muted)"
    }
  }, "STRUCTURAL FEATURE"), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0
    }
  }, cell.feature)), /*#__PURE__*/React.createElement("div", {
    style: {
      background: "#f0fdf4",
      border: "2px solid #86efac",
      borderRadius: 12,
      padding: "14px 16px"
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      fontWeight: 700,
      margin: "0 0 6px",
      fontSize: 13,
      color: "var(--muted)"
    }
  }, "FUNCTION ENABLED"), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0
    }
  }, cell["function"]))));
}

/* --- System Integration Simulator --- */
function ExerciseSim() {
  var _useState7 = useState(false),
    _useState8 = _slicedToArray(_useState7, 2),
    exercising = _useState8[0],
    setExercising = _useState8[1];
  var base = {
    hr: 70,
    rr: 14,
    sweat: 0
  };
  var active = {
    hr: 150,
    rr: 30,
    sweat: 100
  };
  var vals = exercising ? active : base;
  return /*#__PURE__*/React.createElement(Interactive, {
    title: "Body Systems During Exercise",
    subtitle: "Toggle exercise to see how systems respond together.",
    takeaway: "Body systems don't work in isolation - during exercise the circulatory, respiratory, and excretory systems all change at the same time to meet the body's increased demands."
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "center",
      marginBottom: 18
    }
  }, /*#__PURE__*/React.createElement("button", {
    className: exercising ? "btn btn-accent" : "btn btn-ghost",
    onClick: function onClick() {
      return setExercising(function (v) {
        return !v;
      });
    },
    style: {
      fontSize: 16,
      padding: "12px 32px"
    }
  }, exercising ? "Stop Running" : "Start Running")), /*#__PURE__*/React.createElement("div", {
    className: "stat-readout"
  }, /*#__PURE__*/React.createElement(Stat, {
    value: vals.hr,
    label: "Heart rate (bpm)"
  }), /*#__PURE__*/React.createElement(Stat, {
    value: vals.rr,
    label: "Breathing rate (breaths/min)"
  }), /*#__PURE__*/React.createElement(Stat, {
    value: exercising ? "High" : "Low",
    label: "Sweat (excretory)"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 14,
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: 10
    }
  }, [{
    label: "Circulatory",
    text: exercising ? "Heart rate increases; more blood to muscles" : "Normal heart rate; even blood distribution"
  }, {
    label: "Respiratory",
    text: exercising ? "Breathing rate and depth increase; more O₂ to alveoli" : "Normal breathing rate"
  }, {
    label: "Digestive",
    text: exercising ? "Blood diverted away; digestion slows" : "Normal digestion activity"
  }, {
    label: "Excretory (skin)",
    text: exercising ? "Sweating increases to remove heat" : "Low sweating"
  }].map(function (s) {
    return /*#__PURE__*/React.createElement("div", {
      key: s.label,
      style: {
        background: "var(--surface-raised)",
        borderRadius: 10,
        padding: "10px 14px"
      }
    }, /*#__PURE__*/React.createElement("p", {
      style: {
        fontWeight: 700,
        margin: "0 0 4px",
        fontSize: 13
      }
    }, s.label), /*#__PURE__*/React.createElement("p", {
      style: {
        margin: 0,
        fontSize: 13
      }
    }, s.text));
  })));
}

/* =========================================================
   SECTION 5.1 RENDER
   ========================================================= */
function Section51(_ref) {
  var progress = _ref.progress,
    setProgress = _ref.setProgress;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    className: "topic-head"
  }, /*#__PURE__*/React.createElement("div", {
    className: "eyebrow"
  }, "5.1 Body Systems"), /*#__PURE__*/React.createElement("h1", null, "From cells to organism"), /*#__PURE__*/React.createElement("p", {
    className: "lead"
  }, "Your body is organised in layers, from the tiniest cell all the way up to the whole you.")), /*#__PURE__*/React.createElement(Figure, {
    src: "img/body-systems.png",
    caption: "Major body systems \u2014 circulatory, respiratory and digestive \u2014 working together."
  }), /*#__PURE__*/React.createElement(DotPoint, {
    id: "5.1.1",
    title: "Explain the interrelationship among cells, tissues and organs",
    progress: progress,
    setProgress: setProgress
  }, /*#__PURE__*/React.createElement("p", null, "Every living thing is built in levels. The ", /*#__PURE__*/React.createElement(Term, {
    def: "The smallest structural and functional unit of all life."
  }, "cell"), " is the basic building block. Similar cells team up to form ", /*#__PURE__*/React.createElement(Term, {
    def: "A group of similar cells working together to do one job."
  }, "tissue"), ", tissues combine into ", /*#__PURE__*/React.createElement(Term, {
    def: "A discrete structure made from several tissue types that carries out a complex task."
  }, "organs"), ", and organs that share a goal form an ", /*#__PURE__*/React.createElement(Term, {
    def: "A group of organs cooperating to carry out a broad role for the body."
  }, "organ system"), ". Finally, all systems together make up the ", /*#__PURE__*/React.createElement(Term, {
    def: "A complete living thing: all systems working as one."
  }, "organism"), "."), /*#__PURE__*/React.createElement("p", null, "For example, individual muscle cells are long and can contract. Many of them grouped together form muscle tissue, which can generate real force. Muscle tissue combined with connective tissue and nervous tissue builds the heart. The heart, blood vessels, and blood together form the circulatory system."), /*#__PURE__*/React.createElement("p", null, "This hierarchy matters because each level depends on the one below it. Damaged cells mean tissue cannot function; lost tissue means the organ loses capacity; a failing organ means the whole system suffers."), /*#__PURE__*/React.createElement(Callout, {
    kind: "key",
    title: "Key idea"
  }, "Structure follows function at every level: from a biconcave red blood cell up to the six-metre-long small intestine. Healthy cells make healthy organs, and healthy organs make a healthy you."), /*#__PURE__*/React.createElement(Figure, {
    caption: "The five levels of biological organisation, from simplest to most complex."
  }, /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 580 80",
    width: "100%",
    style: {
      maxWidth: 580
    }
  }, ["Cell", "Tissue", "Organ", "Organ System", "Organism"].map(function (label, i) {
    return /*#__PURE__*/React.createElement("g", {
      key: label,
      transform: "translate(".concat(i * 116 + 4, ",10)")
    }, /*#__PURE__*/React.createElement("rect", {
      width: "106",
      height: "50",
      rx: "10",
      fill: "hsl(".concat(155 + i * 8, ",60%,").concat(80 - i * 8, "%)"),
      stroke: "var(--accent-deep)",
      strokeWidth: "1.5"
    }), /*#__PURE__*/React.createElement("text", {
      x: "53",
      y: "29",
      textAnchor: "middle",
      fontSize: "12",
      fontWeight: "700",
      fill: "var(--ink)"
    }, label), i < 4 && /*#__PURE__*/React.createElement("text", {
      x: "116",
      y: "29",
      textAnchor: "middle",
      fontSize: "18",
      fill: "var(--accent-deep)"
    }, "\u203A"));
  }))), /*#__PURE__*/React.createElement(LevelsBuilder, null), /*#__PURE__*/React.createElement(QGroup, {
    title: "Check yourself"
  }, /*#__PURE__*/React.createElement(MCQ, {
    num: 1,
    question: "Which order correctly shows the levels of organisation from simplest to most complex?",
    options: ["Organ, tissue, cell, organism", "Cell, tissue, organ, organism", "Tissue, organ, cell, system", "Organism, organ, tissue, cell"],
    correct: 1,
    explain: "Cells build tissues, tissues build organs, organs form systems, systems form the organism. Always smallest to most complex."
  }), /*#__PURE__*/React.createElement(WrittenQ, {
    num: 2,
    question: "A student says that damage to one cell cannot affect the whole organism. Is this true? Explain your reasoning.",
    model: "This is generally not true. Each level of organisation depends on the level below it. If cells are damaged, the tissues they form cannot function well. Without functional tissues, organs lose capacity. If organs fail, organ systems cannot do their job, which harms the whole organism. The extent of the impact depends on how many cells are damaged and how critical their role is."
  }))), /*#__PURE__*/React.createElement(DotPoint, {
    id: "5.1.2",
    title: "Identify the role of the digestive, circulatory, respiratory and excretory systems of humans, and name the major organs",
    progress: progress,
    setProgress: setProgress
  }, /*#__PURE__*/React.createElement("p", null, "Your body relies on four major systems to keep every cell supplied and clean. The ", /*#__PURE__*/React.createElement(Term, {
    def: "The system that breaks food into small molecules that can be absorbed into the blood."
  }, "digestive system"), " processes food. The ", /*#__PURE__*/React.createElement(Term, {
    def: "The system that uses the heart and blood vessels to move oxygen, nutrients, and waste around the body."
  }, "circulatory system"), " delivers everything to cells. The ", /*#__PURE__*/React.createElement(Term, {
    def: "The system that extracts oxygen from air and removes carbon dioxide."
  }, "respiratory system"), " handles gas exchange. The ", /*#__PURE__*/React.createElement(Term, {
    def: "The system that removes metabolic waste products from the body, mainly through the kidneys."
  }, "excretory system"), " filters out waste."), /*#__PURE__*/React.createElement("p", null, "The digestive system runs from mouth to anus. Food is chewed and mixed with saliva in the mouth, pushed down the oesophagus by ", /*#__PURE__*/React.createElement(Term, {
    def: "Wave-like muscular contractions that push food along the gut."
  }, "peristalsis"), ", broken down in the stomach with acid and enzymes, and then most nutrients are absorbed in the small intestine. The liver produces bile to emulsify fats, and the pancreas secretes enzymes. Water is absorbed all along the gut, and the large intestine reabsorbs most of what is left."), /*#__PURE__*/React.createElement("p", null, "The circulatory system runs two separate loops. The ", /*#__PURE__*/React.createElement(Term, {
    def: "The loop that carries blood from the heart to the lungs and back."
  }, "pulmonary circuit"), " sends blood to the lungs to pick up oxygen. The ", /*#__PURE__*/React.createElement(Term, {
    def: "The loop that carries oxygenated blood from the heart to all body tissues and back."
  }, "systemic circuit"), " delivers that oxygen to every tissue. Arteries carry blood away from the heart; veins return it; capillaries are where exchange actually happens."), /*#__PURE__*/React.createElement("p", null, "The respiratory system brings air in through the nose and mouth, past the larynx and trachea, into bronchi and bronchioles, and finally into tiny air sacs called ", /*#__PURE__*/React.createElement(Term, {
    def: "Tiny air sacs in the lungs where gas exchange occurs by diffusion."
  }, "alveoli"), ". The ", /*#__PURE__*/React.createElement(Term, {
    def: "A dome-shaped muscle beneath the lungs that drives breathing by flattening (inhale) and relaxing (exhale)."
  }, "diaphragm"), " drives breathing."), /*#__PURE__*/React.createElement("p", null, "The kidneys are the main excretory organs. All of your blood passes through the kidneys roughly every five minutes, where they filter out ", /*#__PURE__*/React.createElement(Term, {
    def: "A waste product made when proteins are broken down, removed from the blood by the kidneys."
  }, "urea"), ", excess salts, and water to form urine. Urine drains through ureters to the bladder. The skin also excretes via sweat, and the lungs excrete carbon dioxide."), /*#__PURE__*/React.createElement(CirculationSVG, null), /*#__PURE__*/React.createElement(DigestionJourney, null), /*#__PURE__*/React.createElement(SystemSorter, null), /*#__PURE__*/React.createElement(QGroup, {
    title: "Check yourself"
  }, /*#__PURE__*/React.createElement(MCQ, {
    num: 3,
    question: "Where does most nutrient absorption occur in the digestive system?",
    options: ["Stomach", "Large intestine", "Small intestine", "Oesophagus"],
    correct: 2,
    explain: "The small intestine is the main site of both chemical digestion and nutrient absorption. Its villi and microvilli provide a huge surface area for this job."
  }), /*#__PURE__*/React.createElement(WrittenQ, {
    num: 4,
    question: "Explain how the respiratory and circulatory systems work together to deliver oxygen to muscle cells.",
    model: "The respiratory system absorbs oxygen from inhaled air across the thin walls of the alveoli into the blood. The circulatory system then transports that oxygen, bound to haemoglobin in red blood cells, to the muscle cells via arteries and capillaries. At the muscle cells, oxygen diffuses from the blood into the cells for use in cellular respiration."
  }))), /*#__PURE__*/React.createElement(DotPoint, {
    id: "5.1.3",
    title: "Draw or annotate representations of models of organ systems to describe their processes and functions",
    progress: progress,
    setProgress: setProgress
  }, /*#__PURE__*/React.createElement("p", null, "Scientists use ", /*#__PURE__*/React.createElement(Term, {
    def: "A simplified representation of a complex system, used to explain how the system works."
  }, "models"), " such as diagrams, physical replicas, and computer simulations to represent organ systems. An ", /*#__PURE__*/React.createElement(Term, {
    def: "A diagram where each label includes a brief description of the function, not just the name of the structure."
  }, "annotated diagram"), " links structure to function, making it far more useful than a plain label."), /*#__PURE__*/React.createElement("p", null, "When drawing scientific diagrams, follow these conventions: use a pencil first, rule label lines neatly (never arrows for labels), write all labels horizontally, do not let label lines cross, include a clear title, and add a scale if relevant. These rules exist so any reader can interpret the diagram without confusion."), /*#__PURE__*/React.createElement(Callout, {
    kind: "tip",
    title: "Annotation vs labelling"
  }, "A label just names the structure (for example, \"small intestine\"). An annotation also states its function (for example, \"small intestine: main site of nutrient absorption\"). Always prefer annotations in science."), /*#__PURE__*/React.createElement(Figure, {
    caption: "Blood flow through the heart: the two circuits shown as a flow diagram."
  }, /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 560 260",
    width: "100%",
    style: {
      maxWidth: 560
    }
  }, [{
    text: "Right atrium receives deoxygenated blood",
    x: 30,
    y: 20,
    c: "#bfdbfe"
  }, {
    text: "Right ventricle pumps to lungs",
    x: 30,
    y: 80,
    c: "#bfdbfe"
  }, {
    text: "Lungs: O₂ absorbed, CO₂ released",
    x: 30,
    y: 140,
    c: "#c7d2fe"
  }, {
    text: "Left atrium receives oxygenated blood",
    x: 290,
    y: 140,
    c: "#fca5a5"
  }, {
    text: "Left ventricle pumps to body",
    x: 290,
    y: 80,
    c: "#fca5a5"
  }, {
    text: "O₂ and nutrients delivered to all body tissues",
    x: 290,
    y: 20,
    c: "#fca5a5"
  }].map(function (box, i) {
    return /*#__PURE__*/React.createElement("g", {
      key: i
    }, /*#__PURE__*/React.createElement("rect", {
      x: box.x,
      y: box.y,
      width: "230",
      height: "46",
      rx: "10",
      fill: box.c,
      stroke: "#94a3b8",
      strokeWidth: "1.5"
    }), /*#__PURE__*/React.createElement("text", {
      x: box.x + 115,
      y: box.y + 27,
      textAnchor: "middle",
      fontSize: "11.5",
      fontWeight: "600",
      fill: "#1e293b"
    }, box.text));
  }), [[30 + 115, 66, 30 + 115, 80], [30 + 115, 126, 30 + 115, 140], [260, 163, 290, 163]].map(function (a, i) {
    return /*#__PURE__*/React.createElement("line", {
      key: i,
      x1: a[0],
      y1: a[1],
      x2: a[2],
      y2: a[3],
      stroke: "#64748b",
      strokeWidth: "2",
      markerEnd: "url(#arrowSmall)"
    });
  }), [[290 + 115, 80, 290 + 115, 66], [290 + 115, 140, 290 + 115, 126]].map(function (a, i) {
    return /*#__PURE__*/React.createElement("line", {
      key: "r" + i,
      x1: a[0],
      y1: a[1],
      x2: a[2],
      y2: a[3],
      stroke: "#64748b",
      strokeWidth: "2",
      markerEnd: "url(#arrowSmall)"
    });
  }), /*#__PURE__*/React.createElement("defs", null, /*#__PURE__*/React.createElement("marker", {
    id: "arrowSmall",
    markerWidth: "5",
    markerHeight: "5",
    refX: "4",
    refY: "2.5",
    orient: "auto"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M0,0 L0,5 L5,2.5 z",
    fill: "#64748b"
  }))), /*#__PURE__*/React.createElement("text", {
    x: "280",
    y: "215",
    textAnchor: "middle",
    fontSize: "12",
    fill: "var(--muted)"
  }, "Follow arrows for blood flow direction"))), /*#__PURE__*/React.createElement(QGroup, {
    title: "Check yourself"
  }, /*#__PURE__*/React.createElement(MCQ, {
    num: 5,
    question: "What is the difference between a label and an annotation on a scientific diagram?",
    options: ["Labels are in colour; annotations are in pencil", "A label names a structure; an annotation also describes its function", "Annotations use arrows; labels use lines", "They mean exactly the same thing"],
    correct: 1,
    explain: "A label just names the structure. An annotation goes further and explains what that structure does, making the diagram much more informative."
  }))), /*#__PURE__*/React.createElement(DotPoint, {
    id: "5.1.4",
    title: "Describe how the structures of organ systems, and the specialised cells within these systems, enable them to carry out their functions",
    progress: progress,
    setProgress: setProgress
  }, /*#__PURE__*/React.createElement("p", null, "A key principle of biology is that ", /*#__PURE__*/React.createElement("strong", null, "structure determines function"), ". Every specialised cell has a shape, size, or surface feature that makes it uniquely suited to its job. The same principle applies at the organ level."), /*#__PURE__*/React.createElement("p", null, "The small intestine is roughly six to seven metres long and its inner wall is folded into ", /*#__PURE__*/React.createElement(Term, {
    def: "Finger-like projections of the intestinal wall that greatly increase its surface area."
  }, "villi"), " and ", /*#__PURE__*/React.createElement(Term, {
    def: "Tiny projections on the surface of individual intestinal cells, further increasing surface area."
  }, "microvilli"), ". This gives an adult a total absorptive surface area of roughly 30 square metres. Larger surface area means more absorption per minute. Similarly, the ", /*#__PURE__*/React.createElement(Term, {
    def: "The tiny air sacs in the lungs where gas exchange occurs."
  }, "alveoli"), " in the lungs have a combined surface area of about 70 square metres with walls just one cell thick, creating ideal conditions for rapid gas exchange."), /*#__PURE__*/React.createElement(Callout, {
    kind: "fact",
    title: "Did you know?"
  }, "If you unfolded and spread out the inner lining of your small intestine, it would cover roughly the floor area of a large lounge room (about 30 m\xB2)!"), /*#__PURE__*/React.createElement(CellExplorer, null), /*#__PURE__*/React.createElement(QGroup, {
    title: "Check yourself"
  }, /*#__PURE__*/React.createElement(WrittenQ, {
    num: 6,
    question: "Explain why having a large surface area is important for the small intestine and the alveoli.",
    model: "Absorption and gas exchange happen across surfaces by diffusion and active transport. A larger surface area means more molecules can cross at any one moment, increasing the total rate of absorption or gas exchange. This is why both the small intestine (villi and microvilli, about 30 m\xB2) and the alveoli (about 70 m\xB2) have structural features that maximise their surface area."
  }))), /*#__PURE__*/React.createElement(DotPoint, {
    id: "5.1.5",
    title: "Explain how a disorder or disease affecting the components of a body system, or the removal of any component in the body system, impacts on the overall functioning of the system and the organism as a whole",
    progress: progress,
    setProgress: setProgress
  }, /*#__PURE__*/React.createElement("p", null, "Body systems are made of interdependent parts. When one component is damaged, diseased, or removed, the rest of the system must compensate, or the whole system's performance drops. Because systems themselves are interdependent, a problem in one often has knock-on effects for others."), /*#__PURE__*/React.createElement("p", null, "For example, ", /*#__PURE__*/React.createElement(Term, {
    def: "A condition in which the arteries supplying the heart muscle become narrowed by fatty deposits, reducing blood flow."
  }, "coronary artery disease"), " reduces blood flow to the heart. This weakens the heart's pumping ability, which means less oxygen reaches body tissues. ", /*#__PURE__*/React.createElement(Term, {
    def: "A chronic condition where the airways become inflamed and narrowed, making it harder to breathe."
  }, "Asthma"), " narrows the airways, reducing oxygen delivery to the alveoli and therefore the blood. ", /*#__PURE__*/React.createElement(Term, {
    def: "A disease where the body's own immune system destroys the insulin-producing cells of the pancreas."
  }, "Type 1 diabetes"), " means glucose cannot enter cells, so blood glucose rises to dangerous levels and the digestive, circulatory, and excretory systems are all affected over time."), /*#__PURE__*/React.createElement("p", null, "The body has real ability to compensate. When one kidney is removed (a ", /*#__PURE__*/React.createElement(Term, {
    def: "The surgical removal of a kidney."
  }, "nephrectomy"), "), the remaining kidney enlarges and increases its filtration rate to partly restore function. But compensation has limits: if damage is too severe, the organism becomes unwell."), /*#__PURE__*/React.createElement(Callout, {
    kind: "warn",
    title: "Compensation has limits"
  }, "The body can adapt to losing one kidney, or part of the small intestine. But complete kidney failure, or the removal of both lungs, cannot be compensated. This is why early treatment of system disorders matters."), /*#__PURE__*/React.createElement(QGroup, {
    title: "Check yourself"
  }, /*#__PURE__*/React.createElement(MCQ, {
    num: 7,
    question: "Why does coeliac disease cause malnutrition even if a person eats plenty of food?",
    options: ["The stomach cannot produce acid", "The liver stops making bile", "Damaged villi reduce the surface area for nutrient absorption", "Peristalsis stops working"],
    correct: 2,
    explain: "Coeliac disease damages the villi lining the small intestine, greatly reducing the surface area available for absorption. Even if the person eats well, nutrients cannot be absorbed efficiently, leading to deficiencies."
  }))), /*#__PURE__*/React.createElement(DotPoint, {
    id: "5.1.6",
    title: "Describe how the components of each body system interact to allow the efficient functioning of an organism",
    progress: progress,
    setProgress: setProgress
  }, /*#__PURE__*/React.createElement("p", null, "No body system works alone. Each relies on others for raw materials and waste removal. This ", /*#__PURE__*/React.createElement(Term, {
    def: "The way multiple body systems depend on and communicate with each other to keep the whole organism alive."
  }, "integration"), " is clearest during exercise, when several systems must coordinate rapidly."), /*#__PURE__*/React.createElement("p", null, "When you start running, your muscles need more oxygen and glucose. The respiratory system increases breathing rate and depth. The circulatory system raises heart rate and sends more blood to muscles. The digestive system slows as blood is diverted away. The skin sweats more to release heat. The nervous and endocrine systems coordinate all of this simultaneously."), /*#__PURE__*/React.createElement(ExerciseSim, null), /*#__PURE__*/React.createElement(Callout, {
    kind: "key",
    title: "Key interactions to know"
  }, "Digestive plus circulatory: nutrients absorbed in gut enter blood. Respiratory plus circulatory: O\u2082 loaded at alveoli; CO\u2082 unloaded. Excretory plus circulatory: kidneys filter blood. All systems: coordinated by the nervous and endocrine systems."), /*#__PURE__*/React.createElement(QGroup, {
    title: "Check yourself"
  }, /*#__PURE__*/React.createElement(WrittenQ, {
    num: 8,
    question: "Describe the sequence of events involving the digestive, circulatory, and excretory systems that occur after you eat a meal.",
    model: "The digestive system breaks food into small molecules (glucose, amino acids, fatty acids) and absorbs them through the small intestine into the blood. The circulatory system transports these nutrients to the liver and then to all body cells. As cells metabolise nutrients, waste products such as urea enter the blood. The circulatory system carries urea to the kidneys, where the excretory system filters it out to produce urine."
  }))));
}

/* =========================================================
   SECTION 5.2 -- PLANT SYSTEMS
   Custom interactives
   ========================================================= */

/* --- Transpiration simulator --- */
function TranspirationSim() {
  var _useState9 = useState(20),
    _useState0 = _slicedToArray(_useState9, 2),
    temp = _useState0[0],
    setTemp = _useState0[1];
  var _useState1 = useState(50),
    _useState10 = _slicedToArray(_useState1, 2),
    humidity = _useState10[0],
    setHumidity = _useState10[1];
  var _useState11 = useState(0),
    _useState12 = _slicedToArray(_useState11, 2),
    wind = _useState12[0],
    setWind = _useState12[1];
  var rate = useMemo(function () {
    var base = (temp - 10) * 2 + (100 - humidity) * 0.5 + wind * 3;
    return Math.max(0, Math.min(100, Math.round(base)));
  }, [temp, humidity, wind]);
  var rateLabel = rate < 20 ? "Very low" : rate < 40 ? "Low" : rate < 60 ? "Moderate" : rate < 80 ? "High" : "Very high";
  return /*#__PURE__*/React.createElement(Interactive, {
    title: "Transpiration Rate Simulator",
    subtitle: "Adjust conditions and see how transpiration rate changes. High temperature and low humidity drive faster water loss.",
    takeaway: "Transpiration rate increases with higher temperature, lower humidity, and greater wind speed because these conditions steepen the concentration gradient for water vapour leaving the leaf."
  }, /*#__PURE__*/React.createElement("div", {
    className: "ctrl-row"
  }, /*#__PURE__*/React.createElement(Slider, {
    label: "Temperature",
    min: 5,
    max: 40,
    value: temp,
    onChange: setTemp,
    unit: " \xB0C"
  }), /*#__PURE__*/React.createElement(Slider, {
    label: "Humidity",
    min: 10,
    max: 95,
    value: humidity,
    onChange: setHumidity,
    unit: "%"
  }), /*#__PURE__*/React.createElement(Slider, {
    label: "Wind speed",
    min: 0,
    max: 10,
    value: wind,
    onChange: setWind,
    unit: " m/s"
  })), /*#__PURE__*/React.createElement("div", {
    className: "stat-readout"
  }, /*#__PURE__*/React.createElement(Stat, {
    value: rate,
    label: "Transpiration rate (relative)"
  }), /*#__PURE__*/React.createElement(Stat, {
    value: rateLabel,
    label: "Rate description"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      background: "var(--surface-raised)",
      borderRadius: 10,
      padding: "10px 14px",
      marginTop: 10
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: 13
    }
  }, temp >= 30 && humidity < 40 ? "Hot and dry conditions: stomata may close to conserve water." : wind > 6 ? "High wind removes moist air near the leaf surface, steepening the concentration gradient." : "Moderate conditions. The plant can maintain a balance between photosynthesis needs and water conservation.")));
}

/* --- Xylem vs Phloem comparison --- */
function VascularComparison() {
  var _useState13 = useState("xylem"),
    _useState14 = _slicedToArray(_useState13, 2),
    view = _useState14[0],
    setView = _useState14[1];
  var data = {
    xylem: {
      colour: "#bfdbfe",
      facts: ["Made of dead hollow cells with thick, lignin-strengthened walls", "No end walls between cells, forming continuous open tubes", "Transports water and dissolved minerals upward from roots to stems and leaves", "Flow is one-directional: always upward", "Driven by transpiration pull from the leaves"]
    },
    phloem: {
      colour: "#bbf7d0",
      facts: ["Made of living sieve-tube cells with sieve plates between them", "Supported by companion cells", "Transports dissolved sugars (mainly sucrose) to all parts of the plant", "Flow can go in both directions: from leaves to roots, flowers, and fruits", "Driven by differences in sugar concentration (source to sink)"]
    }
  };
  var chosen = data[view];
  return /*#__PURE__*/React.createElement(Interactive, {
    title: "Xylem vs Phloem",
    subtitle: "Compare the two vascular tissues that transport water and sugar through a plant.",
    takeaway: "Xylem (dead cells, water upward) and phloem (living cells, sugars in both directions) are two distinct transport tissues that together supply all parts of the plant."
  }, /*#__PURE__*/React.createElement(SegToggle, {
    options: [{
      value: "xylem",
      label: "Xylem"
    }, {
      value: "phloem",
      label: "Phloem"
    }],
    value: view,
    onChange: setView
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      background: chosen.colour + "44",
      border: "2px solid ".concat(chosen.colour),
      borderRadius: 14,
      padding: "16px 20px",
      marginTop: 14
    }
  }, chosen.facts.map(function (f, i) {
    return /*#__PURE__*/React.createElement("div", {
      key: i,
      style: {
        display: "flex",
        gap: 10,
        marginBottom: 6
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        color: view === "xylem" ? "#1d4ed8" : "#15803d",
        fontWeight: 700,
        fontSize: 16
      }
    }, "\u2022"), /*#__PURE__*/React.createElement("p", {
      style: {
        margin: 0
      }
    }, f));
  })));
}

/* --- Plant cell microscopy identifier --- */
function PlantCellIdentifier() {
  return /*#__PURE__*/React.createElement(Interactive, {
    title: "Identify Plant Cells",
    subtitle: "Match each cell description to the correct cell type.",
    takeaway: "Each plant cell type has a distinctive shape or feature that reveals its function, and you can identify it under a microscope from those structural clues."
  }, /*#__PURE__*/React.createElement(MatchBuckets, {
    items: [{
      id: "gc",
      label: "Kidney-shaped; controls stoma opening",
      bucket: "guard"
    }, {
      id: "pm",
      label: "Long columns; chloroplast-rich; near top of leaf",
      bucket: "palisade"
    }, {
      id: "xy",
      label: "Dead; hollow; lignified; no end walls",
      bucket: "xylem"
    }, {
      id: "rh",
      label: "Long extension; absorbs water from soil",
      bucket: "roothair"
    }, {
      id: "ep",
      label: "Flat; transparent; tightly packed; few chloroplasts",
      bucket: "epidermis"
    }],
    buckets: [{
      id: "guard",
      label: "Guard cell"
    }, {
      id: "palisade",
      label: "Palisade mesophyll"
    }, {
      id: "xylem",
      label: "Xylem vessel"
    }, {
      id: "roothair",
      label: "Root hair cell"
    }, {
      id: "epidermis",
      label: "Epidermal cell"
    }]
  }));
}

/* =========================================================
   SECTION 5.2 RENDER
   ========================================================= */
function Section52(_ref2) {
  var progress = _ref2.progress,
    setProgress = _ref2.setProgress;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    className: "topic-head"
  }, /*#__PURE__*/React.createElement("div", {
    className: "eyebrow"
  }, "5.2 Plant Systems"), /*#__PURE__*/React.createElement("h1", null, "How plants move water and sugar"), /*#__PURE__*/React.createElement("p", {
    className: "lead"
  }, "Plants have their own transport system built from two tissue types, carrying water up and sugar in all directions.")), /*#__PURE__*/React.createElement(Figure, {
    src: "img/plant-transport.png",
    caption: "Xylem carries water up; phloem moves sugars \u2014 a plant's transport tissues."
  }), /*#__PURE__*/React.createElement(DotPoint, {
    id: "5.2.1",
    title: "Determine the role, structure and function of the components of a plant, including the xylem and phloem, in maintaining plants as multicellular organisms",
    progress: progress,
    setProgress: setProgress
  }, /*#__PURE__*/React.createElement("p", null, "Like animals, plants are organised into cells, tissues, and organs. The three main plant organs are ", /*#__PURE__*/React.createElement(Term, {
    def: "The underground organ that anchors the plant, absorbs water and minerals, and stores food."
  }, "roots"), ", ", /*#__PURE__*/React.createElement(Term, {
    def: "The organ that provides structural support, holds leaves up to the light, and contains the vascular tissue."
  }, "stems"), ", and ", /*#__PURE__*/React.createElement(Term, {
    def: "The main photosynthetic organ of the plant, also responsible for gas exchange and transpiration."
  }, "leaves"), "."), /*#__PURE__*/React.createElement("p", null, "Plants face a unique challenge: their leaves need water from the soil far below, and their roots need sugars made by the leaves far above. Two specialised ", /*#__PURE__*/React.createElement(Term, {
    def: "Tissue that forms a transport system in plants, running through the roots, stems, and leaves in vascular bundles."
  }, "vascular tissues"), " solve this: ", /*#__PURE__*/React.createElement(Term, {
    def: "Dead hollow plant tissue with lignin-strengthened walls that transports water and dissolved minerals upward from roots to leaves."
  }, "xylem"), " carries water and minerals upward; ", /*#__PURE__*/React.createElement(Term, {
    def: "Living plant tissue made of sieve-tube cells that transports dissolved sugars in both directions between leaves, roots, flowers, and fruits."
  }, "phloem"), " carries dissolved sugars to wherever they are needed."), /*#__PURE__*/React.createElement("p", null, "Water enters root hair cells by osmosis and passes into the xylem. It is then pulled upward by ", /*#__PURE__*/React.createElement(Term, {
    def: "The process by which water evaporates from leaf surfaces through stomata, creating a pulling force that draws water up the xylem."
  }, "transpiration"), " pull. As water evaporates from the leaf surface through tiny pores called ", /*#__PURE__*/React.createElement(Term, {
    def: "Tiny pores on leaf surfaces, mainly on the underside, flanked by guard cells that control their opening and closing."
  }, "stomata"), ", it creates suction that draws more water up from the roots. Cohesion (water molecules sticking to each other) maintains a continuous water column."), /*#__PURE__*/React.createElement(Callout, {
    kind: "key",
    title: "Xylem vs Phloem"
  }, "Xylem: dead cells, water and minerals, always upward. Phloem: living cells, sugars, both directions. Together they are the plant's transport system."), /*#__PURE__*/React.createElement(VascularComparison, null), /*#__PURE__*/React.createElement(TranspirationSim, null), /*#__PURE__*/React.createElement(QGroup, {
    title: "Check yourself"
  }, /*#__PURE__*/React.createElement(MCQ, {
    num: 9,
    question: "Which statement about xylem is correct?",
    options: ["Xylem cells are living and transport sugar", "Xylem cells are dead and transport water upward", "Xylem cells are living and transport water in both directions", "Xylem cells transport carbon dioxide to the roots"],
    correct: 1,
    explain: "Xylem cells are dead when functional, have thick lignin-strengthened walls, and transport water and dissolved minerals upward from roots to leaves."
  }), /*#__PURE__*/React.createElement(WrittenQ, {
    num: 10,
    question: "Explain why transpiration is useful for the plant even though it loses water.",
    model: "Transpiration creates the pulling force (transpiration pull) that draws water upward through the xylem from the roots. Without this suction, water could not reach the upper leaves against gravity. Transpiration also cools the leaf through evaporation and maintains the flow of dissolved minerals that the plant needs."
  }))), /*#__PURE__*/React.createElement(DotPoint, {
    id: "5.2.2",
    title: "Use scientific tools and instruments to observe the specialised cells and tissues involved in the structure and function of plants",
    progress: progress,
    setProgress: setProgress
  }, /*#__PURE__*/React.createElement("p", null, "Plant cells and tissues are too small to see with the naked eye. A ", /*#__PURE__*/React.createElement(Term, {
    def: "An instrument that uses visible light and glass lenses to magnify objects up to about 2000 times their actual size."
  }, "light microscope"), " lets you magnify them hundreds of times. To prepare a specimen, you slice thin sections, place them on a glass slide, add a coverslip, and stain them if needed."), /*#__PURE__*/React.createElement("p", null, "Stains make structures visible by adding colour contrast. ", /*#__PURE__*/React.createElement(Term, {
    def: "A stain that turns blue-black in the presence of starch, used to detect starch in plant cells."
  }, "Iodine"), " stains starch blue-black. ", /*#__PURE__*/React.createElement(Term, {
    def: "A stain that colours lignified cell walls (such as xylem) pink-red, making vascular tissue visible."
  }, "Safranin"), " stains lignified walls pink-red. These let you tell apart epidermal cells, palisade mesophyll, spongy mesophyll, xylem, phloem, stomata, and guard cells in a leaf cross-section."), /*#__PURE__*/React.createElement("p", null, "Under the microscope you can see ", /*#__PURE__*/React.createElement(Term, {
    def: "Kidney-shaped cells that flank each stoma and control its opening by changing their internal water pressure."
  }, "guard cells"), ", which are kidney-shaped and control the size of stomata openings. ", /*#__PURE__*/React.createElement(Term, {
    def: "Elongated, chloroplast-rich cells arranged in tight columns just below the upper epidermis of a leaf."
  }, "Palisade mesophyll cells"), " are packed with green chloroplasts and positioned near the top of the leaf to catch maximum light. The ", /*#__PURE__*/React.createElement(Term, {
    def: "Loosely arranged cells below the palisade layer with large air spaces for gas exchange."
  }, "spongy mesophyll"), " has large air spaces that allow gases to move freely."), /*#__PURE__*/React.createElement(Callout, {
    kind: "tip",
    title: "Microscopy safety"
  }, "When preparing leaf sections with a razor blade, always cut away from your fingers and keep the blade flat on the bench when not in use. Wear safety goggles. Report any cuts immediately to your teacher."), /*#__PURE__*/React.createElement(Figure, {
    caption: "A cross-section of a leaf showing the main tissue layers from upper to lower epidermis."
  }, /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 560 220",
    width: "100%",
    style: {
      maxWidth: 560
    }
  }, /*#__PURE__*/React.createElement("rect", {
    x: "20",
    y: "20",
    width: "520",
    height: "28",
    rx: "4",
    fill: "#fde68a",
    stroke: "#d97706",
    strokeWidth: "1.5"
  }), /*#__PURE__*/React.createElement("text", {
    x: "30",
    y: "39",
    fontSize: "12",
    fontWeight: "600",
    fill: "#92400e"
  }, "Upper epidermis (flat, transparent cells)"), [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11].map(function (i) {
    return /*#__PURE__*/React.createElement("rect", {
      key: "p" + i,
      x: 20 + i * 44,
      y: "48",
      width: "36",
      height: "50",
      rx: "5",
      fill: "#86efac",
      stroke: "#16a34a",
      strokeWidth: "1"
    });
  }), /*#__PURE__*/React.createElement("text", {
    x: "300",
    y: "78",
    textAnchor: "middle",
    fontSize: "12",
    fontWeight: "600",
    fill: "#14532d"
  }, "Palisade mesophyll (chloroplast-rich)"), [0, 1, 2, 3].map(function (i) {
    return /*#__PURE__*/React.createElement("ellipse", {
      key: "s" + i,
      cx: 80 + i * 130,
      cy: "130",
      rx: "45",
      ry: "20",
      fill: "#bbf7d0",
      stroke: "#22c55e",
      strokeWidth: "1"
    });
  }), /*#__PURE__*/React.createElement("text", {
    x: "300",
    y: "160",
    textAnchor: "middle",
    fontSize: "12",
    fontWeight: "600",
    fill: "#14532d"
  }, "Spongy mesophyll (air spaces)"), /*#__PURE__*/React.createElement("rect", {
    x: "20",
    y: "170",
    width: "520",
    height: "24",
    rx: "4",
    fill: "#fde68a",
    stroke: "#d97706",
    strokeWidth: "1.5"
  }), /*#__PURE__*/React.createElement("text", {
    x: "30",
    y: "186",
    fontSize: "12",
    fontWeight: "600",
    fill: "#92400e"
  }, "Lower epidermis (stomata on this surface)"), /*#__PURE__*/React.createElement("ellipse", {
    cx: "450",
    cy: "182",
    rx: "12",
    ry: "5",
    fill: "#7f1d1d"
  }), /*#__PURE__*/React.createElement("text", {
    x: "450",
    y: "208",
    textAnchor: "middle",
    fontSize: "10",
    fill: "var(--muted)"
  }, "Stoma"), /*#__PURE__*/React.createElement("rect", {
    x: "250",
    y: "100",
    width: "60",
    height: "28",
    rx: "6",
    fill: "#bfdbfe",
    stroke: "#3b82f6",
    strokeWidth: "1.5"
  }), /*#__PURE__*/React.createElement("text", {
    x: "280",
    y: "118",
    textAnchor: "middle",
    fontSize: "10",
    fontWeight: "700",
    fill: "#1e3a8a"
  }, "Vein"))), /*#__PURE__*/React.createElement(PlantCellIdentifier, null), /*#__PURE__*/React.createElement(QGroup, {
    title: "Check yourself"
  }, /*#__PURE__*/React.createElement(MCQ, {
    num: 11,
    question: "Why are most stomata found on the lower surface of a leaf rather than the upper surface?",
    options: ["There are more guard cells on the lower surface", "The underside receives more sunlight", "The lower surface is cooler and shaded, which reduces water loss through the stomata", "Stomata only work in the dark"],
    correct: 2,
    explain: "Most stomata are on the shaded lower surface to reduce water loss. The underside is cooler and less exposed to direct sunlight, so evaporation through the stomata is slower."
  }))));
}

/* =========================================================
   SECTION 5.3 -- ECOSYSTEMS
   Custom interactives
   ========================================================= */

/* --- Ecosystem components sorter --- */
function EcosystemSorter() {
  return /*#__PURE__*/React.createElement(Interactive, {
    title: "Sort: Biotic or Abiotic?",
    subtitle: "Place each item into the correct category.",
    takeaway: "An ecosystem is made up of both living (biotic) and non-living (abiotic) components that interact with each other."
  }, /*#__PURE__*/React.createElement(MatchBuckets, {
    items: [{
      id: "oak",
      label: "Oak tree",
      bucket: "biotic"
    }, {
      id: "sunlight",
      label: "Sunlight",
      bucket: "abiotic"
    }, {
      id: "fox",
      label: "Red fox",
      bucket: "biotic"
    }, {
      id: "temp",
      label: "Temperature",
      bucket: "abiotic"
    }, {
      id: "fungi",
      label: "Decomposer fungi",
      bucket: "biotic"
    }, {
      id: "water",
      label: "Water",
      bucket: "abiotic"
    }, {
      id: "eagle",
      label: "Wedge-tailed eagle",
      bucket: "biotic"
    }, {
      id: "soil",
      label: "Soil minerals",
      bucket: "abiotic"
    }],
    buckets: [{
      id: "biotic",
      label: "Biotic (living)"
    }, {
      id: "abiotic",
      label: "Abiotic (non-living)"
    }]
  }));
}

/* --- Food web builder (interactive SVG) --- */
function FoodWebSim() {
  var organisms = [{
    id: "grass",
    label: "Grass",
    level: 0,
    x: 240,
    y: 230
  }, {
    id: "grasshopper",
    label: "Grasshopper",
    level: 1,
    x: 100,
    y: 170
  }, {
    id: "rabbit",
    label: "Rabbit",
    level: 1,
    x: 240,
    y: 160
  }, {
    id: "mouse",
    label: "Mouse",
    level: 1,
    x: 380,
    y: 170
  }, {
    id: "lizard",
    label: "Lizard",
    level: 2,
    x: 100,
    y: 90
  }, {
    id: "kookaburra",
    label: "Kookaburra",
    level: 2,
    x: 260,
    y: 60
  }, {
    id: "eagle",
    label: "Eagle",
    level: 3,
    x: 420,
    y: 60
  }];
  var links = [["grass", "grasshopper"], ["grass", "rabbit"], ["grass", "mouse"], ["grasshopper", "lizard"], ["grasshopper", "kookaburra"], ["rabbit", "eagle"], ["mouse", "kookaburra"], ["mouse", "eagle"], ["lizard", "eagle"]];
  var _useState15 = useState(null),
    _useState16 = _slicedToArray(_useState15, 2),
    removed = _useState16[0],
    setRemoved = _useState16[1];
  var levelColours = ["#86efac", "#fde68a", "#fdba74", "#fca5a5"];
  var levelLabels = ["Producer", "Primary consumer", "Secondary consumer", "Tertiary consumer"];
  var getOrg = function getOrg(id) {
    return organisms.find(function (o) {
      return o.id === id;
    });
  };
  return /*#__PURE__*/React.createElement(Interactive, {
    title: "Australian Grassland Food Web",
    subtitle: "Tap any organism to see what happens if it is removed. Arrows show energy flow (prey to predator).",
    takeaway: "Removing any species from a food web disrupts other species that depend on it, showing how interconnected organisms in an ecosystem really are."
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 8,
      flexWrap: "wrap",
      marginBottom: 10
    }
  }, levelLabels.map(function (ll, i) {
    return /*#__PURE__*/React.createElement("span", {
      key: ll,
      style: {
        background: levelColours[i],
        borderRadius: 8,
        padding: "4px 10px",
        fontSize: 12,
        fontWeight: 600
      }
    }, ll);
  })), /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 530 280",
    width: "100%",
    style: {
      maxWidth: 530
    }
  }, links.map(function (link) {
    var a = getOrg(link[0]);
    var b = getOrg(link[1]);
    var faded = removed && link[0] !== removed && link[1] !== removed;
    return /*#__PURE__*/React.createElement("line", {
      key: link[0] + link[1],
      x1: a.x,
      y1: a.y,
      x2: b.x,
      y2: b.y,
      stroke: faded ? "#e2e8f0" : "#64748b",
      strokeWidth: faded ? 1 : 2,
      markerEnd: "url(#fwArr)"
    });
  }), organisms.map(function (org) {
    var isRemoved = removed === org.id;
    var isAffected = removed && links.some(function (l) {
      return l[0] === removed && l[1] === org.id;
    });
    return /*#__PURE__*/React.createElement("g", {
      key: org.id,
      transform: "translate(".concat(org.x - 46, ",").concat(org.y - 18, ")"),
      style: {
        cursor: "pointer"
      },
      onClick: function onClick() {
        return setRemoved(removed === org.id ? null : org.id);
      }
    }, /*#__PURE__*/React.createElement("rect", {
      width: "92",
      height: "36",
      rx: "10",
      fill: isRemoved ? "#ef4444" : isAffected ? "#fde68a" : levelColours[org.level],
      stroke: isRemoved ? "#991b1b" : "#94a3b8",
      strokeWidth: isRemoved ? 3 : 1.5,
      opacity: isRemoved ? 0.5 : 1
    }), /*#__PURE__*/React.createElement("text", {
      x: "46",
      y: "22",
      textAnchor: "middle",
      fontSize: "11",
      fontWeight: "700",
      fill: "#1e293b"
    }, org.label));
  }), /*#__PURE__*/React.createElement("defs", null, /*#__PURE__*/React.createElement("marker", {
    id: "fwArr",
    markerWidth: "5",
    markerHeight: "5",
    refX: "4",
    refY: "2.5",
    orient: "auto"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M0,0 L0,5 L5,2.5 z",
    fill: "#64748b"
  })))), removed && /*#__PURE__*/React.createElement("div", {
    style: {
      background: "#fef2f2",
      border: "2px solid #fca5a5",
      borderRadius: 12,
      padding: "12px 16px",
      marginTop: 10
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontWeight: 700
    }
  }, "If ", /*#__PURE__*/React.createElement("span", {
    style: {
      color: "#dc2626"
    }
  }, getOrg(removed).label), " is removed:"), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: "4px 0 0"
    }
  }, removed === "grass" ? "All consumers lose their food source. The entire food web collapses." : removed === "eagle" ? "Prey such as rabbits, mice and lizards may increase in number with less predation." : "Predators that depended on this organism lose a food source and may decline.")));
}

/* --- Energy pyramid visualiser --- */
function EnergyPyramid() {
  var _useState17 = useState(10000),
    _useState18 = _slicedToArray(_useState17, 2),
    baseEnergy = _useState18[0],
    setBaseEnergy = _useState18[1];
  var levels = [{
    name: "Producers",
    colour: "#86efac"
  }, {
    name: "Primary consumers",
    colour: "#fde68a"
  }, {
    name: "Secondary consumers",
    colour: "#fdba74"
  }, {
    name: "Tertiary consumers",
    colour: "#fca5a5"
  }];
  var values = levels.map(function (_, i) {
    return Math.round(baseEnergy * Math.pow(0.1, i));
  });
  var maxW = 360;
  return /*#__PURE__*/React.createElement(Interactive, {
    title: "Energy Pyramid",
    subtitle: "Adjust the starting energy and see how little reaches the top predator (10% rule).",
    takeaway: "Only about 10% of energy passes from one trophic level to the next, so top predators receive a tiny fraction of the energy that producers originally captured from the Sun."
  }, /*#__PURE__*/React.createElement(Slider, {
    label: "Producer energy",
    min: 1000,
    max: 100000,
    step: 1000,
    value: baseEnergy,
    onChange: setBaseEnergy,
    unit: " kJ"
  }), /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 480 220",
    width: "100%",
    style: {
      maxWidth: 480,
      marginTop: 12
    }
  }, levels.map(function (lv, i) {
    var w = maxW * (values[i] / baseEnergy);
    var x = (440 - w) / 2;
    var y = 20 + i * 48;
    return /*#__PURE__*/React.createElement("g", {
      key: lv.name
    }, /*#__PURE__*/React.createElement("rect", {
      x: x,
      y: y,
      width: w,
      height: "40",
      rx: "6",
      fill: lv.colour,
      stroke: "#94a3b8",
      strokeWidth: "1.5"
    }), /*#__PURE__*/React.createElement("text", {
      x: "220",
      y: y + 24,
      textAnchor: "middle",
      fontSize: "12",
      fontWeight: "700",
      fill: "#1e293b"
    }, lv.name), /*#__PURE__*/React.createElement("text", {
      x: "404",
      y: y + 24,
      textAnchor: "start",
      fontSize: "11",
      fill: "var(--muted)"
    }, values[i].toLocaleString(), " kJ"));
  })), /*#__PURE__*/React.createElement("div", {
    className: "stat-readout"
  }, /*#__PURE__*/React.createElement(Stat, {
    value: values[3].toLocaleString(),
    label: "Energy at top (kJ)"
  }), /*#__PURE__*/React.createElement(Stat, {
    value: (values[3] / baseEnergy * 100).toFixed(2) + "%",
    label: "Efficiency (producer to tertiary)"
  })));
}

/* =========================================================
   SECTION 5.3 RENDER
   ========================================================= */
function Section53(_ref3) {
  var progress = _ref3.progress,
    setProgress = _ref3.setProgress;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    className: "topic-head"
  }, /*#__PURE__*/React.createElement("div", {
    className: "eyebrow"
  }, "5.3 Ecosystems"), /*#__PURE__*/React.createElement("h1", null, "Energy, matter, and living together"), /*#__PURE__*/React.createElement("p", {
    className: "lead"
  }, "An ecosystem is every living thing in an area, plus the non-living environment, all interacting as one system.")), /*#__PURE__*/React.createElement(Figure, {
    src: "img/ecosystem.png",
    caption: "Energy flows from the Sun through producers and consumers in a food web."
  }), /*#__PURE__*/React.createElement(DotPoint, {
    id: "5.3.1",
    title: "Identify the components that make up an ecosystem",
    progress: progress,
    setProgress: setProgress
  }, /*#__PURE__*/React.createElement("p", null, "An ", /*#__PURE__*/React.createElement(Term, {
    def: "A community of living organisms interacting with each other and with the non-living physical environment in a defined area."
  }, "ecosystem"), " has two types of components. ", /*#__PURE__*/React.createElement(Term, {
    def: "The living parts of an ecosystem: producers, consumers, and decomposers."
  }, "Biotic"), " components are all the living things: ", /*#__PURE__*/React.createElement(Term, {
    def: "Organisms that produce their own food from inorganic matter using light or chemical energy (e.g. plants, algae)."
  }, "producers"), " (autotrophs), ", /*#__PURE__*/React.createElement(Term, {
    def: "Organisms that must eat other organisms to obtain energy (e.g. animals)."
  }, "consumers"), " (heterotrophs), and ", /*#__PURE__*/React.createElement(Term, {
    def: "Organisms such as bacteria and fungi that break down dead organic matter into simpler inorganic substances."
  }, "decomposers"), ". ", /*#__PURE__*/React.createElement(Term, {
    def: "The non-living physical and chemical parts of an ecosystem: sunlight, water, temperature, soil, gases."
  }, "Abiotic"), " components are the non-living parts: sunlight, water, temperature, soil, and atmospheric gases."), /*#__PURE__*/React.createElement("p", null, "Ecosystems can be vast (the Great Barrier Reef, the Australian outback) or tiny (a rock pool, a rotting log). What makes something an ecosystem is that the living and non-living components interact and influence each other. Ecologists study these interactions to understand how energy and matter move through them and how they respond to change."), /*#__PURE__*/React.createElement(Callout, {
    kind: "fact",
    title: "Australian example"
  }, "The Great Barrier Reef is one of Earth's largest ecosystems. Its biotic components include coral, fish, sea turtles, seagrass, and sharks. Its abiotic components include water temperature, salinity, pH, sunlight, and ocean currents."), /*#__PURE__*/React.createElement(EcosystemSorter, null), /*#__PURE__*/React.createElement(QGroup, {
    title: "Check yourself"
  }, /*#__PURE__*/React.createElement(MCQ, {
    num: 12,
    question: "Which of the following is an ABIOTIC component of a forest ecosystem?",
    options: ["A decomposer fungus", "A fern plant", "Soil temperature", "A native bird"],
    correct: 2,
    explain: "Abiotic means non-living. Soil temperature is a physical factor. The fungus, fern, and bird are all living (biotic) components."
  }))), /*#__PURE__*/React.createElement(DotPoint, {
    id: "5.3.2",
    title: "Investigate the interactions of biotic and abiotic factors in an ecosystem",
    progress: progress,
    setProgress: setProgress
  }, /*#__PURE__*/React.createElement("p", null, "Biotic and abiotic factors constantly influence each other. Plants modify the abiotic environment: tree canopies reduce light and temperature at the forest floor, roots add organic matter to soil, and leaves release water vapour that increases local humidity. Animals also modify their environment: earthworms aerate soil, beavers create wetlands, and grazers expose bare soil."), /*#__PURE__*/React.createElement("p", null, "The biotic interactions within an ecosystem include: ", /*#__PURE__*/React.createElement(Term, {
    def: "A biotic interaction where one organism (the predator) kills and eats another (the prey)."
  }, "predation"), ", ", /*#__PURE__*/React.createElement(Term, {
    def: "A biotic interaction where two or more organisms need the same limited resource."
  }, "competition"), ", ", /*#__PURE__*/React.createElement(Term, {
    def: "A relationship where both species benefit from the interaction."
  }, "mutualism"), ", and ", /*#__PURE__*/React.createElement(Term, {
    def: "A relationship where one organism (the parasite) benefits at the expense of another (the host)."
  }, "parasitism"), "."), /*#__PURE__*/React.createElement("p", null, "Predator and prey populations are linked in a cycle. When prey is plentiful, predators increase. More predators eat more prey, so prey numbers fall. With less food, predators decline. With fewer predators, prey recover. The two populations oscillate together."), /*#__PURE__*/React.createElement(Callout, {
    kind: "key",
    title: "Biotic interactions summary"
  }, "Predation: one eats the other. Competition: both need the same resource. Mutualism: both benefit (bee and flower). Parasitism: one benefits, one is harmed (tapeworm and host)."), /*#__PURE__*/React.createElement(QGroup, {
    title: "Check yourself"
  }, /*#__PURE__*/React.createElement(WrittenQ, {
    num: 13,
    question: "A drought reduces water availability in a grassland ecosystem. Predict how this abiotic change would affect the biotic components of the ecosystem.",
    model: "Less water means plants cannot grow as vigorously, so vegetation cover decreases. Herbivore populations decline as their food supply drops. With fewer herbivores, predator populations also decline. Decomposer activity may slow in dry soil. The whole food web is reduced. If the drought is severe, some species may locally go extinct."
  }))), /*#__PURE__*/React.createElement(DotPoint, {
    id: "5.3.3",
    title: "Identify how matter and energy are cycled through an ecosystem",
    progress: progress,
    setProgress: setProgress
  }, /*#__PURE__*/React.createElement("p", null, "In an ecosystem, energy and matter behave very differently. ", /*#__PURE__*/React.createElement("strong", null, "Matter is cycled:"), " the atoms that make up living things are continuously recycled. A carbon atom in a leaf may become part of a caterpillar, then a bird, then return to the air as CO\u2082 when the bird decomposes, and then enter a new plant."), /*#__PURE__*/React.createElement("p", null, /*#__PURE__*/React.createElement("strong", null, "Energy flows in one direction only:"), " it enters as sunlight, is captured by producers during photosynthesis, passes to consumers through feeding, and is eventually lost as waste heat at every step. Energy cannot be recycled; it must be continuously supplied by the Sun. This is why ecosystems need a constant supply of solar energy to function."), /*#__PURE__*/React.createElement("p", null, "The ", /*#__PURE__*/React.createElement(Term, {
    def: "The continuous movement of carbon atoms between the atmosphere, living organisms, and the soil or ocean."
  }, "carbon cycle"), " is one key matter cycle. Plants absorb CO\u2082 by photosynthesis; consumers eat plants; all organisms release CO\u2082 by respiration; decomposers release CO\u2082 from dead matter. The ", /*#__PURE__*/React.createElement(Term, {
    def: "The continuous movement of nitrogen between the atmosphere, soil, and living organisms, involving several types of bacteria."
  }, "nitrogen cycle"), " is another. Most organisms cannot use nitrogen gas directly. ", /*#__PURE__*/React.createElement(Term, {
    def: "Bacteria (some in soil, some in legume root nodules) that convert nitrogen gas into ammonia that plants can use."
  }, "Nitrogen-fixing bacteria"), " convert N\u2082 into ammonia, which other bacteria convert to nitrates that plants absorb."), /*#__PURE__*/React.createElement(Callout, {
    kind: "key",
    title: "Energy vs matter"
  }, "Energy flows one way: in from the Sun, out as heat. Matter cycles: the same atoms are reused again and again. You are partly made of atoms that once belonged to ancient stars, dinosaurs, and long-dead trees."), /*#__PURE__*/React.createElement(QGroup, {
    title: "Check yourself"
  }, /*#__PURE__*/React.createElement(MCQ, {
    num: 14,
    question: "Which statement correctly describes energy and matter in an ecosystem?",
    options: ["Both energy and matter are recycled indefinitely", "Energy is recycled; matter flows in one direction", "Energy flows in one direction and is lost as heat; matter is cycled", "Neither energy nor matter can be recycled"],
    correct: 2,
    explain: "Energy flows one way (Sun to producers to consumers, lost as heat). Matter such as carbon and nitrogen is cycled repeatedly between organisms and the environment."
  }))), /*#__PURE__*/React.createElement(DotPoint, {
    id: "5.3.4",
    title: "Create a food web and ecological energy pyramid based on local area observations to describe how matter and energy move through an ecosystem",
    progress: progress,
    setProgress: setProgress
  }, /*#__PURE__*/React.createElement("p", null, "A ", /*#__PURE__*/React.createElement(Term, {
    def: "A linear sequence showing the transfer of energy from one organism to the next through feeding."
  }, "food chain"), " shows one pathway of energy transfer. A ", /*#__PURE__*/React.createElement(Term, {
    def: "Many interconnected food chains showing the complex feeding relationships among all species in an ecosystem."
  }, "food web"), " shows the realistic picture: most organisms eat more than one thing and are eaten by more than one predator. Arrows in a food web always point in the direction of energy transfer (from prey to predator)."), /*#__PURE__*/React.createElement("p", null, "An ", /*#__PURE__*/React.createElement(Term, {
    def: "A diagram showing the amount of energy, biomass, or number of organisms at each trophic level, with producers at the base."
  }, "ecological energy pyramid"), " shows how energy decreases at each ", /*#__PURE__*/React.createElement(Term, {
    def: "A feeding position in a food chain: producers are level 1, primary consumers level 2, etc."
  }, "trophic level"), ". Producers capture the most energy. Only about 10 percent of the energy at one level passes to the next. This is the ", /*#__PURE__*/React.createElement(Term, {
    def: "The rule that approximately 10% of energy at one trophic level is transferred to the next trophic level; the rest is lost as heat."
  }, "10 percent rule"), ", which explains why food chains rarely exceed four or five levels."), /*#__PURE__*/React.createElement(FoodWebSim, null), /*#__PURE__*/React.createElement(EnergyPyramid, null), /*#__PURE__*/React.createElement(QGroup, {
    title: "Check yourself"
  }, /*#__PURE__*/React.createElement(WrittenQ, {
    num: 15,
    question: "Using the 10% rule, calculate how much energy is available to tertiary consumers if producers fix 100 000 kJ of energy. Show your working.",
    model: "Producers: 100 000 kJ. Primary consumers (10%): 10 000 kJ. Secondary consumers (10%): 1 000 kJ. Tertiary consumers (10%): 100 kJ. Only 100 kJ is available at the tertiary consumer level, which is just 0.1% of the original producer energy."
  }))), /*#__PURE__*/React.createElement(DotPoint, {
    id: "5.3.5",
    title: "Create written texts to explain how energy pyramids show the amount of energy or matter at each trophic level",
    progress: progress,
    setProgress: setProgress
  }, /*#__PURE__*/React.createElement("p", null, "An energy pyramid is a visual model of energy at each trophic level. The base (producers) is always the widest because they capture the most solar energy. Each level above is narrower because roughly 90 percent of energy is lost at each transfer, mainly as heat through cellular respiration."), /*#__PURE__*/React.createElement("p", null, "You can also draw pyramids of ", /*#__PURE__*/React.createElement(Term, {
    def: "The total mass of living organisms at a particular trophic level, usually measured in grams or kilograms per square metre."
  }, "biomass"), " (total mass of living matter at each level) or pyramids of numbers (count of individuals). A pyramid of energy always has the widest base. A pyramid of numbers can be inverted: one tree (one producer) may support thousands of caterpillars."), /*#__PURE__*/React.createElement("p", null, "When writing about an energy pyramid, use vocabulary like trophic level, producer, consumer, biomass, energy transfer, and respiration. Explain the pattern (each level is smaller), explain the cause (energy lost as heat), and state the implication (top predators must be few in number; huge quantities of producers support the whole food web)."), /*#__PURE__*/React.createElement(Callout, {
    kind: "tip",
    title: "Writing tip"
  }, "A strong scientific explanation of an energy pyramid: (1) introduces the diagram, (2) describes the pattern, (3) explains the cause using the 10% rule, and (4) states what this means for the ecosystem."), /*#__PURE__*/React.createElement(QGroup, {
    title: "Check yourself"
  }, /*#__PURE__*/React.createElement(MCQ, {
    num: 16,
    question: "Why does a pyramid of energy always have the widest level at the base?",
    options: ["Producers are the largest organisms in an ecosystem", "Producers always outnumber all other organisms", "Producers capture solar energy directly and have the most energy available; each higher level receives only 10% of the level below", "Energy increases as it moves up trophic levels"],
    correct: 2,
    explain: "Producers convert sunlight directly into chemical energy, giving them the highest energy content. Each trophic level above receives only about 10% of the energy from the one below, so each successive level must be narrower."
  }))), /*#__PURE__*/React.createElement(DotPoint, {
    id: "5.3.6",
    title: "Examine secondary-source data on the factors that change populations, including the introduction of a new species to an ecosystem, to identify trends, patterns and relationships, and draw conclusions",
    progress: progress,
    setProgress: setProgress
  }, /*#__PURE__*/React.createElement("p", null, "Populations change in response to four factors: ", /*#__PURE__*/React.createElement(Term, {
    def: "The number of new individuals born per unit time."
  }, "birth rate"), ", ", /*#__PURE__*/React.createElement(Term, {
    def: "The number of individuals that die per unit time."
  }, "death rate"), ", immigration (individuals moving in), and emigration (individuals moving out). A population grows when birth rate plus immigration exceeds death rate plus emigration. A population hits the ", /*#__PURE__*/React.createElement(Term, {
    def: "The maximum number of individuals an environment can support, given available food, water, space, and other resources."
  }, "carrying capacity"), " when resources become limiting."), /*#__PURE__*/React.createElement("p", null, "One of the most dramatic causes of population change is the introduction of an ", /*#__PURE__*/React.createElement(Term, {
    def: "A species brought (deliberately or accidentally) to a new area where it did not previously exist, often with severe impacts on native species."
  }, "introduced or invasive species"), ". In its native range, a species is controlled by predators, competitors, and diseases. In a new environment these controls may be absent, so its population can grow explosively, harming native species through predation, competition, or disease."), /*#__PURE__*/React.createElement("p", null, "Australia has one of the world's worst records of extinction caused by introduced species. Since European settlement in 1788, about 34 mammal species have gone extinct, more than any other comparable country. Key introduced species include the European rabbit (overgrazes vegetation), the cane toad (toxic to native predators), the European red fox (predates small native mammals), and the feral cat (cats kill an estimated two billion animals per year, mostly native species)."), /*#__PURE__*/React.createElement(Callout, {
    kind: "warn",
    title: "Australia and invasive species"
  }, "Australia's wildlife evolved in isolation for about 45 million years with no placental predators. Native animals had no evolved defences against cats and foxes when they arrived. Combined with large-scale land clearing, this has made Australia's extinction crisis one of the most severe in the world."), /*#__PURE__*/React.createElement(Figure, {
    caption: "Estimated animals killed each year in Australia by feral and pet cats, by animal group (Woinarski, Murphy, Legge and colleagues, 2017\u20132020). These are estimates from diet studies, so treat them as approximate."
  }, /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 500 190",
    width: "100%",
    style: {
      maxWidth: 500
    }
  }, [{
    label: "Mammals",
    value: 1140,
    colour: "#34d399"
  }, {
    label: "Reptiles",
    value: 649,
    colour: "#6ee7b7"
  }, {
    label: "Birds",
    value: 377,
    colour: "#86efac"
  }, {
    label: "Frogs",
    value: 93,
    colour: "#10b981"
  }].map(function (d, i) {
    var barW = d.value / 1200 * 300;
    var y = 20 + i * 38;
    return /*#__PURE__*/React.createElement("g", {
      key: d.label
    }, /*#__PURE__*/React.createElement("text", {
      x: "80",
      y: y + 18,
      textAnchor: "end",
      fontSize: "12",
      fontWeight: "600",
      fill: "var(--ink)"
    }, d.label), /*#__PURE__*/React.createElement("rect", {
      x: "90",
      y: y,
      width: barW,
      height: "28",
      rx: "6",
      fill: d.colour
    }), /*#__PURE__*/React.createElement("text", {
      x: 95 + barW,
      y: y + 18,
      fontSize: "11",
      fill: "var(--muted)"
    }, d.value, "M/yr"));
  }), /*#__PURE__*/React.createElement("text", {
    x: "250",
    y: "182",
    textAnchor: "middle",
    fontSize: "11",
    fill: "var(--muted)"
  }, "Estimated kills per year (millions)"))), /*#__PURE__*/React.createElement(QGroup, {
    title: "Check yourself"
  }, /*#__PURE__*/React.createElement(WrittenQ, {
    num: 17,
    question: "Analyse the data: a native marsupial population fell from 50 000 in 2000 to 12 000 in 2020 in an area where feral foxes were present. Describe the trend and suggest a conclusion.",
    model: "The trend shows a sharp decline: the population fell by 38 000 individuals, a 76% decrease over 20 years. This is a steep and consistent downward trend. A possible conclusion is that feral fox predation is contributing to the decline. However, other factors (habitat loss, drought, disease) may also be involved. To be confident, you would need to compare this with a control site where foxes are absent or controlled, and eliminate other explanatory variables."
  }))));
}

/* =========================================================
   SECTION 5.4 -- LIVING SYSTEMS IN CONTEXT
   Custom interactives
   ========================================================= */

/* --- Threat factor sorter --- */
function ThreatSorter() {
  return /*#__PURE__*/React.createElement(Interactive, {
    title: "Match Each Threat to Its Category",
    subtitle: "Place each threatening factor into the correct group.",
    takeaway: "Australia's threatened species face four main types of threat - invasive species, habitat loss, disease, and climate change - and most threatened species are affected by more than one."
  }, /*#__PURE__*/React.createElement(MatchBuckets, {
    items: [{
      id: "cats",
      label: "Feral cats hunting bilbies",
      bucket: "invasive"
    }, {
      id: "clearing",
      label: "Land clearing for farms",
      bucket: "habitat"
    }, {
      id: "dftd",
      label: "Devil facial tumour disease",
      bucket: "disease"
    }, {
      id: "drought",
      label: "More frequent droughts",
      bucket: "climate"
    }, {
      id: "foxes",
      label: "European foxes preying on native mammals",
      bucket: "invasive"
    }, {
      id: "fragmentation",
      label: "Roads splitting habitat into patches",
      bucket: "habitat"
    }, {
      id: "chytrid",
      label: "Chytrid fungus killing frogs",
      bucket: "disease"
    }, {
      id: "fire",
      label: "Increased bushfire frequency",
      bucket: "climate"
    }],
    buckets: [{
      id: "invasive",
      label: "Invasive species"
    }, {
      id: "habitat",
      label: "Habitat loss"
    }, {
      id: "disease",
      label: "Disease"
    }, {
      id: "climate",
      label: "Climate change"
    }]
  }));
}

/* --- Conservation strategy explorer --- */
function ConservationSim() {
  var strategies = [{
    id: "fence",
    label: "Predator-free sanctuary",
    desc: "A specially designed fence excludes cats and foxes from an area. Native species breed inside without predation. The bilby and numbat have been successfully re-established using this method.",
    threat: "Invasive predators",
    effectiveness: 90
  }, {
    id: "captive",
    label: "Captive breeding",
    desc: "Animals are bred in zoos or specialised facilities. This builds up numbers that can later be reintroduced to suitable habitat. It acts as an insurance policy against wild population collapse.",
    threat: "Small population size",
    effectiveness: 70
  }, {
    id: "baiting",
    label: "Predator baiting (1080)",
    desc: "Sodium fluoroacetate (1080) baits are distributed in areas where foxes and dogs hunt native wildlife. Effective over large areas but requires ongoing effort.",
    threat: "Foxes and wild dogs",
    effectiveness: 65
  }, {
    id: "habitat",
    label: "Habitat restoration",
    desc: "Revegetation of cleared land provides food, shelter, and corridors that allow animals to move between populations. Essential for species affected by land clearing.",
    threat: "Habitat loss",
    effectiveness: 60
  }, {
    id: "law",
    label: "Legal protection",
    desc: "Listing species under the Environment Protection and Biodiversity Conservation Act (1999) triggers recovery plans and restricts activities that harm listed species.",
    threat: "Ongoing human pressure",
    effectiveness: 50
  }];
  var _useState19 = useState("fence"),
    _useState20 = _slicedToArray(_useState19, 2),
    active = _useState20[0],
    setActive = _useState20[1];
  var s = strategies.find(function (st) {
    return st.id === active;
  });
  return /*#__PURE__*/React.createElement(Interactive, {
    title: "Conservation Strategies Explorer",
    subtitle: "Select a strategy to learn how it works and what threat it targets.",
    takeaway: "Different conservation strategies target different threats, and the most effective approach for a species depends on identifying the main cause of its decline."
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 8,
      flexWrap: "wrap",
      marginBottom: 14
    }
  }, strategies.map(function (st) {
    return /*#__PURE__*/React.createElement("button", {
      key: st.id,
      onClick: function onClick() {
        return setActive(st.id);
      },
      style: {
        background: st.id === active ? "var(--accent-deep)" : "var(--surface-raised)",
        color: st.id === active ? "#fff" : "var(--ink)",
        border: "2px solid var(--accent-deep)",
        borderRadius: 10,
        padding: "8px 14px",
        fontWeight: st.id === active ? 700 : 400,
        cursor: "pointer",
        fontSize: 13
      }
    }, st.label);
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      background: "var(--surface-raised)",
      borderRadius: 14,
      padding: "16px 20px"
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      fontWeight: 700,
      margin: "0 0 4px",
      color: "var(--accent-deep)"
    }
  }, "Targets: ", s.threat), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: "0 0 12px"
    }
  }, s.desc), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 12
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 13,
      fontWeight: 600
    }
  }, "Relative effectiveness (illustrative):"), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      background: "#e2e8f0",
      borderRadius: 8,
      height: 14
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: s.effectiveness + "%",
      background: "var(--accent-deep)",
      borderRadius: 8,
      height: 14,
      transition: "width 0.4s"
    }
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 13,
      fontWeight: 700
    }
  }, s.effectiveness, "%"))));
}

/* --- IUCN categories flipcards --- */
function IUCNCards() {
  var cards = [{
    front: "Least Concern",
    back: "Population is stable. No immediate threat. Example: common brushtail possum."
  }, {
    front: "Vulnerable",
    back: "Population declining. Faces risk in the medium term. Example: koala (eastern populations)."
  }, {
    front: "Endangered",
    back: "Population significantly reduced. High risk of extinction. Example: Tasmanian devil."
  }, {
    front: "Critically Endangered",
    back: "Very small population. Extremely high extinction risk. Example: northern hairy-nosed wombat."
  }, {
    front: "Extinct in the Wild",
    back: "Survives only in captivity or cultivation. Example: Christmas Island blue-tailed skink (Lister’s gecko is another)."
  }, {
    front: "Extinct",
    back: "Last individual known to have died. Example: thylacine (Tasmanian tiger, 1936)."
  }];
  return /*#__PURE__*/React.createElement(Interactive, {
    title: "IUCN Conservation Categories",
    subtitle: "Tap each card to reveal the meaning and an Australian example.",
    takeaway: "The IUCN system ranks how close a species is to extinction, from Least Concern all the way to Extinct, giving scientists and governments a shared language for conservation priority."
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))",
      gap: 10
    }
  }, cards.map(function (c) {
    return /*#__PURE__*/React.createElement(FlipCard, {
      key: c.front,
      front: c.front,
      back: c.back
    });
  })));
}

/* =========================================================
   SECTION 5.4 RENDER
   ========================================================= */
function Section54(_ref4) {
  var progress = _ref4.progress,
    setProgress = _ref4.setProgress;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    className: "topic-head"
  }, /*#__PURE__*/React.createElement("div", {
    className: "eyebrow"
  }, "5.4 Living Systems in Context"), /*#__PURE__*/React.createElement("h1", null, "Extinction, endangerment, and conservation"), /*#__PURE__*/React.createElement("p", {
    className: "lead"
  }, "Australia has lost more mammal species than any other country. Understanding why, and what we can do, is urgent science.")), /*#__PURE__*/React.createElement(DotPoint, {
    id: "5.4.1",
    title: "Investigate factors that lead to a species becoming endangered or extinct to explain why Australia has some of the world's highest rates of species population decline and extinction",
    progress: progress,
    setProgress: setProgress
  }, /*#__PURE__*/React.createElement("p", null, "A species is ", /*#__PURE__*/React.createElement(Term, {
    def: "A species whose population has declined significantly and faces a high risk of extinction if threatening processes continue."
  }, "endangered"), " when its population has fallen to the point where extinction is a real risk. A species is ", /*#__PURE__*/React.createElement(Term, {
    def: "A species for which there is no reasonable doubt that the last individual has died."
  }, "extinct"), " when every individual has died. The International Union for Conservation of Nature (", /*#__PURE__*/React.createElement(Term, {
    def: "The international body that assesses the conservation status of species worldwide, using categories from Least Concern to Extinct."
  }, "IUCN"), ") uses a series of categories to rank how close a species is to extinction."), /*#__PURE__*/React.createElement("p", null, "Extinction is rarely caused by one factor alone. The main threats to Australian wildlife are: ", /*#__PURE__*/React.createElement(Term, {
    def: "The destruction or fragmentation of the natural environment that a species needs to survive and reproduce."
  }, "habitat loss"), " (land clearing for agriculture and urban development), predation and competition from ", /*#__PURE__*/React.createElement(Term, {
    def: "A species that has been brought to a new area where it did not previously exist, often with severe impacts on native species."
  }, "introduced species"), ", ", /*#__PURE__*/React.createElement(Term, {
    def: "A disease or pathogen that infects a species and reduces its population."
  }, "disease"), ", and ", /*#__PURE__*/React.createElement(Term, {
    def: "Long-term shifts in temperature, rainfall, and extreme weather events that alter the conditions species need to survive."
  }, "climate change"), ". Australia faces all four simultaneously."), /*#__PURE__*/React.createElement("p", null, "Australia's particularly high extinction rate has several explanations. Its wildlife evolved in geographic isolation for about 45 million years, with no exposure to placental predators such as cats or foxes. When European settlers arrived in 1788 with these animals, native species had no evolved defences. Many Australian mammals fall in the critical weight range of 35 g to 5.5 kg, which makes them especially vulnerable to cat and fox predation. Large-scale land clearing removed vast areas of native vegetation, particularly temperate woodland in south-eastern Australia where many endemic species lived."), /*#__PURE__*/React.createElement("p", null, "Recovery efforts combine predator control, ", /*#__PURE__*/React.createElement(Term, {
    def: "A fenced area from which cats and foxes are excluded, allowing native species to breed safely without predation."
  }, "predator-free sanctuaries"), ", captive breeding, habitat restoration, and legal protections. Species such as the bilby and numbat have been successfully returned to parts of their former range using these approaches."), /*#__PURE__*/React.createElement(Callout, {
    kind: "warn",
    title: "Australia's extinction crisis"
  }, "Since European settlement, Australia has lost approximately 34 mammal species to extinction. This is the highest rate of mammal extinction of any continent over that period. Combined threats of introduced predators, habitat loss, and climate change continue to push more species toward extinction today."), /*#__PURE__*/React.createElement(IUCNCards, null), /*#__PURE__*/React.createElement(ThreatSorter, null), /*#__PURE__*/React.createElement(ConservationSim, null), /*#__PURE__*/React.createElement(QGroup, {
    title: "Check yourself"
  }, /*#__PURE__*/React.createElement(MCQ, {
    num: 18,
    question: "Which of the following best explains why Australian native mammals are especially vulnerable to feral cats and foxes?",
    options: ["Native mammals are too small to survive in any environment", "Native mammals evolved in isolation without exposure to placental predators and have no effective anti-predator behaviours", "Feral cats and foxes carry diseases that only affect Australian marsupials", "Australian mammals reproduce too slowly to sustain any level of predation"],
    correct: 1,
    explain: "Australia's mammals evolved in geographic isolation for tens of millions of years with no placental predators. When cats and foxes arrived with European settlers, native species had no evolved behaviours or adaptations to avoid or escape these hunters."
  }), /*#__PURE__*/React.createElement(WrittenQ, {
    num: 19,
    question: "Explain why protecting habitat alone is not enough to save the eastern barred bandicoot. In your answer, refer to the main threatening factors for this species.",
    model: "The eastern barred bandicoot became extinct on mainland Australia primarily because of fox and cat predation. Even where habitat remained, cats and foxes could hunt bandicoots freely within it. Habitat protection without predator control does not remove the main lethal threat. Recovery of the species on the mainland has only been achieved inside predator-free fenced sanctuaries. This shows that addressing the root threatening process (predation) is essential, not just preserving habitat."
  }))));
}

/* =========================================================
   MOUNT
   ========================================================= */
mountTopicApp({
  year: 8,
  topicTitle: "Living Systems",
  branch: "biology",
  heroImage: "img/hero.png",
  strand: "Stage 4 · NSW Science",
  accent: "emerald",
  storageKey: "y8.livingsystems",
  hubHref: "../",
  intro: "Your body is a team of specialised systems working together. Plants have their own transport networks. Ecosystems link every living and non-living thing in an area. In this topic you will zoom from a single cell all the way up to the whole biosphere, and explore what happens when living systems are disrupted.",
  glossary: {
    "cell": "The smallest structural and functional unit of all life.",
    "tissue": "A group of similar cells working together to carry out a shared function.",
    "organ": "A structure made of several tissue types that performs a complex task.",
    "organ system": "A group of organs cooperating to carry out a broad role for the organism.",
    "organism": "A complete living thing, with all its organ systems integrated and functioning.",
    "peristalsis": "Wave-like muscular contractions that move food along the digestive tract.",
    "alveoli": "Tiny air sacs in the lungs where gas exchange between air and blood occurs by diffusion.",
    "villi": "Finger-like projections on the inner wall of the small intestine that increase surface area for absorption.",
    "xylem": "Dead hollow plant tissue with lignin-strengthened walls that transports water and minerals upward from roots to leaves.",
    "phloem": "Living plant tissue made of sieve-tube cells that transports dissolved sugars to all parts of the plant.",
    "transpiration": "The evaporation of water from leaf surfaces, mainly through stomata, which drives the upward flow of water through xylem.",
    "stomata": "Tiny pores on leaf surfaces, flanked by guard cells, through which gas exchange and water loss occur.",
    "ecosystem": "A community of living organisms interacting with each other and with the non-living components of their environment.",
    "biotic": "The living components of an ecosystem: producers, consumers, and decomposers.",
    "abiotic": "The non-living physical and chemical components of an ecosystem: sunlight, water, temperature, soil, gases.",
    "producer": "An organism that makes its own food from inorganic substances using light or chemical energy (autotroph).",
    "consumer": "An organism that obtains energy by eating other organisms (heterotroph).",
    "decomposer": "An organism such as a bacterium or fungus that breaks down dead organic matter into simpler inorganic substances.",
    "food web": "A network of interconnected food chains showing the feeding relationships among all species in an ecosystem.",
    "trophic level": "A feeding position in a food chain: producers are level 1, primary consumers level 2, and so on.",
    "biomass": "The total mass of living organisms at a particular trophic level, measured in grams or kilograms per square metre.",
    "10 percent rule": "The rule that approximately 10% of energy at one trophic level is transferred to the next; the rest is lost as heat.",
    "carrying capacity": "The maximum number of individuals of a species that an environment can support given its available resources.",
    "invasive species": "A species introduced to an area where it did not previously exist, often with severe impacts on native species.",
    "endangered": "A species whose population has declined significantly and faces a high risk of extinction if threatening processes continue.",
    "extinct": "A species for which there is no reasonable doubt that the last individual has died.",
    "urea": "A waste product formed when proteins are broken down in the liver, removed from the blood by the kidneys.",
    "haemoglobin": "The protein in red blood cells that binds oxygen and carries it around the body.",
    "predator-free sanctuary": "A fenced area from which cats and foxes are excluded, allowing native species to breed safely.",
    "nitrogen-fixing bacteria": "Bacteria that convert atmospheric nitrogen gas into ammonia, making nitrogen available to plants."
  },
  sections: [{
    id: "5.1",
    label: "Body Systems",
    accent: "emerald",
    blurb: "From cells to organisms, and how disorders affect the whole body.",
    points: ["5.1.1", "5.1.2", "5.1.3", "5.1.4", "5.1.5", "5.1.6"],
    render: function render(p) {
      return /*#__PURE__*/React.createElement(Section51, p);
    }
  }, {
    id: "5.2",
    label: "Plant Systems",
    accent: "green",
    blurb: "How plants transport water and sugar using xylem and phloem.",
    points: ["5.2.1", "5.2.2"],
    render: function render(p) {
      return /*#__PURE__*/React.createElement(Section52, p);
    }
  }, {
    id: "5.3",
    label: "Ecosystems",
    accent: "teal",
    blurb: "Energy flow, matter cycling, food webs, and population change.",
    points: ["5.3.1", "5.3.2", "5.3.3", "5.3.4", "5.3.5", "5.3.6"],
    render: function render(p) {
      return /*#__PURE__*/React.createElement(Section53, p);
    }
  }, {
    id: "5.4",
    label: "Living Systems in Context",
    accent: "amber",
    blurb: "Extinction, endangerment, and conservation in Australia.",
    points: ["5.4.1"],
    render: function render(p) {
      return /*#__PURE__*/React.createElement(Section54, p);
    }
  }]
});

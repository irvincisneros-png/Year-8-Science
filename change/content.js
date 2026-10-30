/* Generated from content.jsx by tools/build.js. Edit the .jsx, not this file. */
"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _toConsumableArray(r) { return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }
function _arrayWithoutHoles(r) { if (Array.isArray(r)) return _arrayLikeToArray(r); }
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

/* ============================================================
   SECTION 7.1: ENERGY TRANSFERS
   Custom interactive: Heat Transfer Mode Explorer
   ============================================================ */

function HeatTransferSim() {
  var _useState = useState("conduction"),
    _useState2 = _slicedToArray(_useState, 2),
    mode = _useState2[0],
    setMode = _useState2[1];
  var animRef = useRef(null);
  var _useState3 = useState(0),
    _useState4 = _slicedToArray(_useState3, 2),
    tick = _useState4[0],
    setTick = _useState4[1];
  useEffect(function () {
    var id = setInterval(function () {
      return setTick(function (t) {
        return t + 1;
      });
    }, 80);
    return function () {
      return clearInterval(id);
    };
  }, []);
  var configs = {
    conduction: {
      label: "Conduction",
      desc: "Vibrating particles pass energy along a solid rod. No bulk movement of matter.",
      color1: "#f97316",
      color2: "#fed7aa"
    },
    convection: {
      label: "Convection",
      desc: "Warm fluid rises and cool fluid sinks, forming circulating currents.",
      color1: "#ef4444",
      color2: "#bfdbfe"
    },
    radiation: {
      label: "Radiation",
      desc: "Infrared waves carry energy through empty space. No medium needed.",
      color1: "#eab308",
      color2: "#fef9c3"
    }
  };
  var cfg = configs[mode];
  function ConductionAnim() {
    var nodes = [0, 1, 2, 3, 4, 5, 6, 7];
    return /*#__PURE__*/React.createElement("svg", {
      viewBox: "0 0 320 80",
      width: "100%",
      style: {
        maxWidth: 320
      }
    }, /*#__PURE__*/React.createElement("rect", {
      x: "10",
      y: "30",
      width: "300",
      height: "20",
      rx: "6",
      fill: "#d1d5db"
    }), nodes.map(function (i) {
      var phase = (tick * 0.25 + i * 0.7) % (2 * Math.PI);
      var amp = Math.max(0, 8 - i * 0.8);
      var cy = 40 + Math.sin(phase) * amp;
      var heat = Math.max(0, 1 - i / 7);
      var r = Math.floor(255 * heat + 59 * (1 - heat));
      var g = Math.floor(115 * heat + 130 * (1 - heat));
      var b = Math.floor(20 * heat + 246 * (1 - heat));
      return /*#__PURE__*/React.createElement("circle", {
        key: i,
        cx: 20 + i * 40,
        cy: cy,
        r: "7",
        fill: "rgb(".concat(r, ",").concat(g, ",").concat(b, ")")
      });
    }), /*#__PURE__*/React.createElement("text", {
      x: "10",
      y: "72",
      fontSize: "10",
      fill: "var(--ink)"
    }, "HOT end"), /*#__PURE__*/React.createElement("text", {
      x: "260",
      y: "72",
      fontSize: "10",
      fill: "var(--ink)"
    }, "COOL end"));
  }
  function ConvectionAnim() {
    var t = tick * 0.04;
    var path1 = "M 60 60 Q 80 ".concat(30 + Math.sin(t) * 5, " 160 20 Q 240 ").concat(10 + Math.sin(t + 1) * 5, " 260 60 Q 240 90 160 100 Q 80 90 60 60");
    return /*#__PURE__*/React.createElement("svg", {
      viewBox: "0 0 320 120",
      width: "100%",
      style: {
        maxWidth: 320
      }
    }, /*#__PURE__*/React.createElement("rect", {
      x: "10",
      y: "10",
      width: "300",
      height: "100",
      rx: "8",
      fill: "#dbeafe"
    }), /*#__PURE__*/React.createElement("rect", {
      x: "10",
      y: "90",
      width: "300",
      height: "20",
      rx: "0",
      fill: "#f97316",
      opacity: "0.7"
    }), /*#__PURE__*/React.createElement("path", {
      d: path1,
      fill: "none",
      stroke: "#ef4444",
      strokeWidth: "2.5",
      strokeDasharray: "6 3",
      opacity: "0.7"
    }), /*#__PURE__*/React.createElement("text", {
      x: "140",
      y: "28",
      textAnchor: "middle",
      fontSize: "10",
      fill: "#1e40af"
    }, "warm air rises"), /*#__PURE__*/React.createElement("text", {
      x: "140",
      y: "85",
      textAnchor: "middle",
      fontSize: "10",
      fill: "#991b1b"
    }, "heat source"), /*#__PURE__*/React.createElement("text", {
      x: "25",
      y: "65",
      fontSize: "9",
      fill: "#1e40af"
    }, "cool"), /*#__PURE__*/React.createElement("text", {
      x: "25",
      y: "76",
      fontSize: "9",
      fill: "#1e40af"
    }, "sinks"), /*#__PURE__*/React.createElement("text", {
      x: "272",
      y: "65",
      fontSize: "9",
      fill: "#1e40af"
    }, "cool"), /*#__PURE__*/React.createElement("text", {
      x: "272",
      y: "76",
      fontSize: "9",
      fill: "#1e40af"
    }, "sinks"));
  }
  function RadiationAnim() {
    var rays = [0, 1, 2, 3, 4, 5, 6];
    return /*#__PURE__*/React.createElement("svg", {
      viewBox: "0 0 320 100",
      width: "100%",
      style: {
        maxWidth: 320
      }
    }, /*#__PURE__*/React.createElement("circle", {
      cx: "50",
      cy: "50",
      r: "28",
      fill: "#fde047"
    }), /*#__PURE__*/React.createElement("text", {
      x: "50",
      y: "55",
      textAnchor: "middle",
      fontSize: "10",
      fontWeight: "700",
      fill: "#713f12"
    }, "SUN"), rays.map(function (i) {
      var angle = (-20 + i * 20) * (Math.PI / 180);
      var phase = (tick * 0.12 + i * 0.4) % 1;
      var x1 = 50 + Math.cos(angle) * 32;
      var y1 = 50 + Math.sin(angle) * 32;
      var x2 = 50 + Math.cos(angle) * (90 + phase * 140);
      var y2 = 50 + Math.sin(angle) * (90 + phase * 140);
      return /*#__PURE__*/React.createElement("line", {
        key: i,
        x1: x1,
        y1: y1,
        x2: x2,
        y2: y2,
        stroke: "#f97316",
        strokeWidth: "2",
        opacity: 0.7 - phase * 0.5
      });
    }), /*#__PURE__*/React.createElement("rect", {
      x: "265",
      y: "20",
      width: "42",
      height: "60",
      rx: "4",
      fill: "#86efac"
    }), /*#__PURE__*/React.createElement("text", {
      x: "286",
      y: "55",
      textAnchor: "middle",
      fontSize: "9",
      fill: "#14532d"
    }, "Earth"), /*#__PURE__*/React.createElement("text", {
      x: "155",
      y: "15",
      textAnchor: "middle",
      fontSize: "9",
      fill: "var(--muted)"
    }, "vacuum of space"));
  }
  return /*#__PURE__*/React.createElement(Interactive, {
    title: "Heat Transfer Explorer",
    subtitle: "Tap a mode to see how it works.",
    takeaway: "Heat moves in three distinct ways: conduction through solids by particle vibration, convection through fluids by circulating currents, and radiation as electromagnetic waves that need no medium at all."
  }, /*#__PURE__*/React.createElement("div", {
    className: "ctrl-row",
    style: {
      justifyContent: "center",
      gap: "0.5rem"
    }
  }, Object.keys(configs).map(function (k) {
    return /*#__PURE__*/React.createElement("button", {
      key: k,
      className: mode === k ? "btn btn-accent" : "btn btn-ghost",
      onClick: function onClick() {
        return setMode(k);
      },
      style: {
        minWidth: 100
      }
    }, configs[k].label);
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      margin: "1rem 0",
      textAlign: "center"
    }
  }, mode === "conduction" && /*#__PURE__*/React.createElement(ConductionAnim, null), mode === "convection" && /*#__PURE__*/React.createElement(ConvectionAnim, null), mode === "radiation" && /*#__PURE__*/React.createElement(RadiationAnim, null)), /*#__PURE__*/React.createElement("p", {
    style: {
      textAlign: "center",
      marginBottom: 0
    }
  }, cfg.desc));
}

/* Energy store PE vs KE interactive */
function EnergyStoreSim() {
  var _useState5 = useState(5),
    _useState6 = _slicedToArray(_useState5, 2),
    height = _useState6[0],
    setHeight = _useState6[1];
  var _useState7 = useState(2),
    _useState8 = _slicedToArray(_useState7, 2),
    mass = _useState8[0],
    setMass = _useState8[1];
  var g = 10;
  var pe = (mass * g * height).toFixed(1);
  var ke = pe;
  var ballY = 20 + (1 - height / 10) * 100;
  return /*#__PURE__*/React.createElement(Interactive, {
    title: "Gravitational PE to KE",
    subtitle: "A ball dropped from rest. Adjust height and mass to see energy change.",
    takeaway: "As a falling object loses height, its gravitational potential energy converts into kinetic energy, and the total energy stays the same throughout the fall."
  }, /*#__PURE__*/React.createElement("div", {
    className: "ctrl-row"
  }, /*#__PURE__*/React.createElement(Slider, {
    label: "Height",
    min: 1,
    max: 10,
    step: 0.5,
    value: height,
    onChange: setHeight,
    unit: " m"
  }), /*#__PURE__*/React.createElement(Slider, {
    label: "Mass",
    min: 0.5,
    max: 5,
    step: 0.5,
    value: mass,
    onChange: setMass,
    unit: " kg"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: "1rem",
      alignItems: "flex-end"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 80 140",
    width: "80",
    style: {
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("line", {
    x1: "40",
    y1: "15",
    x2: "40",
    y2: "130",
    stroke: "var(--muted)",
    strokeWidth: "1",
    strokeDasharray: "4 3"
  }), /*#__PURE__*/React.createElement("rect", {
    x: "5",
    y: "120",
    width: "70",
    height: "12",
    rx: "3",
    fill: "var(--accent-soft)"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "40",
    cy: ballY,
    r: "10",
    fill: "var(--accent-deep)"
  }), /*#__PURE__*/React.createElement("text", {
    x: "52",
    y: ballY + 4,
    fontSize: "9",
    fill: "var(--ink)"
  }, height, "m")), /*#__PURE__*/React.createElement("div", {
    className: "stat-readout",
    style: {
      flex: 1
    }
  }, /*#__PURE__*/React.createElement(Stat, {
    value: pe,
    label: "Gravitational PE (J)"
  }), /*#__PURE__*/React.createElement(Stat, {
    value: ke,
    label: "Max KE on impact (J)"
  }), /*#__PURE__*/React.createElement(Stat, {
    value: mass,
    label: "Mass (kg)"
  }))), /*#__PURE__*/React.createElement("p", {
    className: "muted",
    style: {
      marginBottom: 0
    }
  }, "At the top: all PE, no KE. Just before impact: all KE, no PE. Total energy is conserved."));
}

/* Energy transformation chain builder */
function EnergyChainSim() {
  var devices = [{
    id: "solar",
    label: "Solar panel",
    from: "Radiant",
    to: "Electrical"
  }, {
    id: "battery",
    label: "Battery",
    from: "Chemical PE",
    to: "Electrical"
  }, {
    id: "motor",
    label: "Electric motor",
    from: "Electrical",
    to: "Kinetic"
  }, {
    id: "bulb",
    label: "Light globe",
    from: "Electrical",
    to: "Light + Heat"
  }, {
    id: "plant",
    label: "Plant (photosynthesis)",
    from: "Radiant",
    to: "Chemical PE"
  }, {
    id: "dam",
    label: "Hydro dam",
    from: "Gravitational PE",
    to: "Electrical"
  }];
  var _useState9 = useState("solar"),
    _useState0 = _slicedToArray(_useState9, 2),
    selected = _useState0[0],
    setSelected = _useState0[1];
  var dev = devices.find(function (d) {
    return d.id === selected;
  });
  return /*#__PURE__*/React.createElement(Interactive, {
    title: "Energy Transformation Spotter",
    subtitle: "Pick a device and trace the energy change.",
    takeaway: "Every device converts energy from one form to another, and some energy is always lost as heat during every transformation."
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexWrap: "wrap",
      gap: "0.4rem",
      marginBottom: "1rem"
    }
  }, devices.map(function (d) {
    return /*#__PURE__*/React.createElement("button", {
      key: d.id,
      className: selected === d.id ? "chip accent" : "chip",
      onClick: function onClick() {
        return setSelected(d.id);
      }
    }, d.label);
  })), dev && /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 340 60",
    width: "100%",
    style: {
      maxWidth: 340
    }
  }, /*#__PURE__*/React.createElement("rect", {
    x: "5",
    y: "10",
    width: "100",
    height: "40",
    rx: "8",
    fill: "var(--accent-soft)",
    stroke: "var(--accent-deep)"
  }), /*#__PURE__*/React.createElement("text", {
    x: "55",
    y: "34",
    textAnchor: "middle",
    fontSize: "11",
    fontWeight: "700",
    fill: "var(--ink)"
  }, dev.from), /*#__PURE__*/React.createElement("polygon", {
    points: "115,30 135,20 135,40",
    fill: "var(--accent-deep)"
  }), /*#__PURE__*/React.createElement("rect", {
    x: "140",
    y: "10",
    width: "100",
    height: "40",
    rx: "8",
    fill: "var(--accent-deep)"
  }), /*#__PURE__*/React.createElement("text", {
    x: "190",
    y: "26",
    textAnchor: "middle",
    fontSize: "10",
    fontWeight: "700",
    fill: "#fff"
  }, dev.label), /*#__PURE__*/React.createElement("polygon", {
    points: "250,30 270,20 270,40",
    fill: "var(--accent-deep)"
  }), /*#__PURE__*/React.createElement("rect", {
    x: "275",
    y: "10",
    width: "60",
    height: "40",
    rx: "8",
    fill: "var(--accent-soft)",
    stroke: "var(--accent-deep)"
  }), /*#__PURE__*/React.createElement("text", {
    x: "305",
    y: "34",
    textAnchor: "middle",
    fontSize: "10",
    fontWeight: "700",
    fill: "var(--ink)"
  }, dev.to)), /*#__PURE__*/React.createElement("p", {
    className: "muted",
    style: {
      marginBottom: 0
    }
  }, "Some energy is always lost as heat during every transformation."));
}

/* Open vs Closed system quiz */
function SystemClassifier() {
  var items = [{
    id: "a",
    label: "Sealed thermos flask",
    bucket: "closed"
  }, {
    id: "b",
    label: "Boiling saucepan (no lid)",
    bucket: "open"
  }, {
    id: "c",
    label: "Human body",
    bucket: "open"
  }, {
    id: "d",
    label: "Swinging pendulum (ideal)",
    bucket: "closed"
  }, {
    id: "e",
    label: "Campfire in the open air",
    bucket: "open"
  }, {
    id: "f",
    label: "Sealed pressure cooker",
    bucket: "closed"
  }];
  return /*#__PURE__*/React.createElement(Interactive, {
    title: "Open or Closed System?",
    subtitle: "Drag or click each item into the correct bucket.",
    takeaway: "Open systems exchange both energy and matter with their surroundings, while closed systems exchange only energy - understanding this distinction helps you predict how energy behaves in any situation."
  }, /*#__PURE__*/React.createElement(MatchBuckets, {
    items: items,
    buckets: [{
      id: "open",
      label: "Open System"
    }, {
      id: "closed",
      label: "Closed System"
    }]
  }));
}
function Section71(_ref) {
  var progress = _ref.progress,
    setProgress = _ref.setProgress;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    className: "topic-head"
  }, /*#__PURE__*/React.createElement("div", {
    className: "eyebrow"
  }, "7.1 Energy Transfers"), /*#__PURE__*/React.createElement("h1", null, "Energy on the move"), /*#__PURE__*/React.createElement("p", {
    className: "lead"
  }, "Energy never stays still. It moves, transforms, and passes between objects in predictable ways.")), /*#__PURE__*/React.createElement(Figure, {
    src: "img/heat-transfer.png",
    caption: "Heat moves by conduction, convection and radiation."
  }), /*#__PURE__*/React.createElement(DotPoint, {
    id: "7.1.1",
    title: "Conduction, convection and radiation",
    progress: progress,
    setProgress: setProgress
  }, /*#__PURE__*/React.createElement("p", null, "Heat energy always flows from warmer objects to cooler ones until temperatures equalise. Scientists recognise three distinct ways this happens. ", /*#__PURE__*/React.createElement(Term, {
    def: "Transfer of heat through a solid by particle-to-particle vibration, with no bulk movement of matter."
  }, "Conduction"), " works through direct contact in solids. ", /*#__PURE__*/React.createElement(Term, {
    def: "Transfer of heat through fluids as warm, less-dense regions rise and cool, denser regions sink."
  }, "Convection"), " moves energy through liquids and gases via circulating currents. ", /*#__PURE__*/React.createElement(Term, {
    def: "Transfer of energy as electromagnetic (infrared) waves; requires no medium."
  }, "Radiation"), " is the only mode that works through a vacuum."), /*#__PURE__*/React.createElement("p", null, "A campfire shows all three at once. Heat conducts into the ground beneath it, convection currents carry warm air upward, and infrared radiation warms your face from a distance. Understanding which mode dominates in a situation helps engineers design better heaters, insulators, and cooling systems."), /*#__PURE__*/React.createElement(Callout, {
    kind: "key",
    title: "Key distinction"
  }, "Conduction and convection both need matter to work. Radiation is the only mode that can cross empty space, which is why the Sun can warm Earth across 150 million kilometres of near-vacuum."), /*#__PURE__*/React.createElement(HeatTransferSim, null), /*#__PURE__*/React.createElement("div", {
    className: "data-table",
    style: {
      overflowX: "auto"
    }
  }, /*#__PURE__*/React.createElement("table", null, /*#__PURE__*/React.createElement("thead", null, /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("th", null, "Feature"), /*#__PURE__*/React.createElement("th", null, "Conduction"), /*#__PURE__*/React.createElement("th", null, "Convection"), /*#__PURE__*/React.createElement("th", null, "Radiation"))), /*#__PURE__*/React.createElement("tbody", null, /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("td", null, "Medium needed?"), /*#__PURE__*/React.createElement("td", null, "Yes (solid)"), /*#__PURE__*/React.createElement("td", null, "Yes (fluid)"), /*#__PURE__*/React.createElement("td", null, "No")), /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("td", null, "Matter moves?"), /*#__PURE__*/React.createElement("td", null, "No"), /*#__PURE__*/React.createElement("td", null, "Yes (bulk flow)"), /*#__PURE__*/React.createElement("td", null, "No")), /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("td", null, "Best in"), /*#__PURE__*/React.createElement("td", null, "Metals"), /*#__PURE__*/React.createElement("td", null, "Liquids and gases"), /*#__PURE__*/React.createElement("td", null, "Vacuum or air")), /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("td", null, "Example"), /*#__PURE__*/React.createElement("td", null, "Hot pan handle"), /*#__PURE__*/React.createElement("td", null, "Boiling water"), /*#__PURE__*/React.createElement("td", null, "Sunlight warming skin"))))), /*#__PURE__*/React.createElement(QGroup, {
    title: "Check yourself"
  }, /*#__PURE__*/React.createElement(MCQ, {
    num: 1,
    question: "Which heat transfer mode does NOT require a medium?",
    options: ["Conduction", "Convection", "Radiation", "All three require a medium"],
    correct: 2,
    explain: "Radiation travels as electromagnetic waves and needs no physical medium, allowing it to cross the vacuum of space."
  }), /*#__PURE__*/React.createElement(WrittenQ, {
    num: 2,
    question: "Explain why a metal spoon heats up when left in a hot drink, but the plastic handle of the pot stays cool.",
    model: "The metal spoon conducts heat well because its free electrons rapidly transfer kinetic energy along the metal from the hot liquid to the handle. Plastic has no free electrons and its tightly bound structure transfers energy very slowly, so the plastic handle stays cool."
  }))), /*#__PURE__*/React.createElement(DotPoint, {
    id: "7.1.2",
    title: "Kinetic and potential energy stores",
    progress: progress,
    setProgress: setProgress
  }, /*#__PURE__*/React.createElement("p", null, "All energy belongs to one of two broad categories. ", /*#__PURE__*/React.createElement(Term, {
    def: "Energy an object has because of its motion."
  }, "Kinetic energy (KE)"), " depends on both mass and speed. ", /*#__PURE__*/React.createElement(Term, {
    def: "Stored energy due to an object's position, condition, or composition."
  }, "Potential energy (PE)"), " is stored energy waiting to be released. Every type of energy you encounter can be described using these two ideas."), /*#__PURE__*/React.createElement("p", null, /*#__PURE__*/React.createElement(Term, {
    def: "PE stored due to height above a reference point."
  }, "Gravitational PE"), " increases as you lift an object higher. ", /*#__PURE__*/React.createElement(Term, {
    def: "PE stored in stretched, compressed, or deformed materials."
  }, "Elastic PE"), " is stored in a compressed spring or stretched rubber band. ", /*#__PURE__*/React.createElement(Term, {
    def: "PE stored in chemical bonds between atoms."
  }, "Chemical PE"), " powers everything from batteries to the food you eat. ", /*#__PURE__*/React.createElement(Term, {
    def: "A combination of KE and PE from randomly moving particles."
  }, "Thermal energy"), " is both: the moving particles have KE and the forces between them store PE."), /*#__PURE__*/React.createElement(Callout, {
    kind: "fact",
    title: "Did you know?"
  }, "The food energy in a chocolate bar is chemical PE stored in the bonds between atoms. When your body digests it and your cells respire, that stored energy is released to power your muscles."), /*#__PURE__*/React.createElement(EnergyStoreSim, null), /*#__PURE__*/React.createElement(QGroup, {
    title: "Check yourself"
  }, /*#__PURE__*/React.createElement(MCQ, {
    num: 3,
    question: "A ball is held stationary at the top of a ramp. Which energy store is greatest at this moment?",
    options: ["Kinetic energy", "Thermal energy", "Gravitational potential energy", "Elastic potential energy"],
    correct: 2,
    explain: "The stationary ball has maximum gravitational PE because of its height. It has no KE because it is not moving."
  }))), /*#__PURE__*/React.createElement(DotPoint, {
    id: "7.1.3",
    title: "Energy transformations",
    progress: progress,
    setProgress: setProgress
  }, /*#__PURE__*/React.createElement("p", null, "Energy transforms from one form into another constantly. A torch turns chemical PE (battery) into electrical energy, then into light and heat. A solar panel turns radiant energy directly into electrical energy. Plants use radiant energy from the Sun to build chemical PE in glucose."), /*#__PURE__*/React.createElement("p", null, "Most transformations waste some energy as heat that spreads into surroundings. Scientists describe efficiency as the percentage of input energy that becomes the useful output. A standard incandescent globe converts only about 5 percent of electrical energy into light; modern LEDs reach around 40 to 50 percent. Identifying the full chain of transformations in any system is a core scientific skill."), /*#__PURE__*/React.createElement(EnergyChainSim, null), /*#__PURE__*/React.createElement(Callout, {
    kind: "tip",
    title: "Tip"
  }, "Draw energy transformation chains as arrows: Chemical PE (battery) to Electrical to Light plus Heat (waste). The waste arrow is always there.")), /*#__PURE__*/React.createElement(DotPoint, {
    id: "7.1.4",
    title: "Representing energy transformations",
    progress: progress,
    setProgress: setProgress
  }, /*#__PURE__*/React.createElement("p", null, "Practical investigations help you observe energy transformations directly. One classic method is heating water with a Bunsen burner while recording temperature every minute. The rising temperature is direct evidence that chemical PE in the gas is transforming into thermal energy."), /*#__PURE__*/React.createElement("p", null, /*#__PURE__*/React.createElement(Term, {
    def: "A diagram where arrow width is proportional to the amount of energy, showing useful output and waste."
  }, "Sankey diagrams"), " represent transformations visually. Wide arrows carry more energy; the useful output arrow is narrower than the input arrow because some energy always becomes waste heat. Energy-flow diagrams use labelled arrows to trace the pathway from source to output. Combining experimental data with these representations deepens your understanding of real systems."), /*#__PURE__*/React.createElement(Callout, {
    kind: "key",
    title: "Reading a Sankey diagram"
  }, "Input arrow width equals the sum of all output arrow widths, showing that total energy is always conserved even when some becomes waste.")), /*#__PURE__*/React.createElement(DotPoint, {
    id: "7.1.5",
    title: "Open and closed systems",
    progress: progress,
    setProgress: setProgress
  }, /*#__PURE__*/React.createElement("p", null, "A ", /*#__PURE__*/React.createElement(Term, {
    def: "A defined collection of matter or components chosen for study."
  }, "system"), " is any group of objects you decide to study together. ", /*#__PURE__*/React.createElement(Term, {
    def: "A system that exchanges both energy and matter with its surroundings."
  }, "Open systems"), " exchange both energy and matter with their surroundings. A boiling saucepan without a lid is open because steam escapes and heat radiates away. ", /*#__PURE__*/React.createElement(Term, {
    def: "A system that exchanges energy but not matter with its surroundings."
  }, "Closed systems"), " exchange energy but not matter. A sealed thermos flask keeps matter in but slowly loses thermal energy through its walls."), /*#__PURE__*/React.createElement("p", null, "In an ideal system with no energy losses, energy cycles between stores without being lost. A swinging pendulum repeatedly exchanges gravitational PE (highest point) for KE (lowest point). In reality, friction and air resistance bleed energy away as heat, so the pendulum slows. Earth itself is nearly closed for matter but open for energy: solar radiation pours in and infrared radiation flows out."), /*#__PURE__*/React.createElement(SystemClassifier, null)), /*#__PURE__*/React.createElement(DotPoint, {
    id: "7.1.6",
    title: "Law of conservation of energy",
    progress: progress,
    setProgress: setProgress
  }, /*#__PURE__*/React.createElement("p", null, "The ", /*#__PURE__*/React.createElement(Term, {
    def: "Energy cannot be created or destroyed; it can only transform or transfer. The total amount of energy stays constant."
  }, "law of conservation of energy"), " is one of the most powerful ideas in all of science. Whenever energy appears to vanish, it has simply transformed into a less useful form (almost always thermal energy) that spreads out into the surroundings."), /*#__PURE__*/React.createElement("p", null, "A skateboarder at the top of a half-pipe with 500 J of gravitational PE will have at most 500 J of KE at the bottom. In practice they have less, because friction and air resistance convert some PE to heat and sound. The total never exceeds 500 J, and when you count the heat and sound produced it never drops below 500 J either. This principle lets engineers calculate efficiencies and predict outcomes."), /*#__PURE__*/React.createElement(QGroup, {
    title: "Check yourself"
  }, /*#__PURE__*/React.createElement(MCQ, {
    num: 4,
    question: "A 100 W lamp converts 100 J of electrical energy per second. How much total energy (light plus heat) must it produce each second?",
    options: ["Less than 100 J", "Exactly 100 J", "More than 100 J", "It depends on the bulb type"],
    correct: 1,
    explain: "Conservation of energy requires that total output always equals total input. So 100 J must be produced each second, split between light and waste heat."
  }), /*#__PURE__*/React.createElement(WrittenQ, {
    num: 5,
    question: "A student claims 'energy is destroyed when a candle burns out.' Evaluate this claim using the law of conservation of energy.",
    model: "The claim is incorrect. When a candle burns, chemical PE in the wax transforms into thermal energy and light energy that spread into the surroundings. The total amount of energy remains the same; none is destroyed. The law of conservation of energy forbids the creation or destruction of energy."
  }))), /*#__PURE__*/React.createElement(DotPoint, {
    id: "7.1.7",
    title: "Solar energy transformations",
    progress: progress,
    setProgress: setProgress
  }, /*#__PURE__*/React.createElement("p", null, "The Sun is Earth's primary energy source. It sends out radiant energy (infrared, visible light and ultraviolet) that drives almost every energy system on Earth. Plants absorb sunlight and store it as chemical PE in glucose through photosynthesis. Animals eat plants and gain that stored energy. Over millions of years, compressed ancient biomass became ", /*#__PURE__*/React.createElement(Term, {
    def: "Coal, oil, and natural gas: stores of ancient solar energy locked in chemical bonds."
  }, "fossil fuels"), "."), /*#__PURE__*/React.createElement("p", null, "Modern technologies harness solar energy directly. ", /*#__PURE__*/React.createElement(Term, {
    def: "Photovoltaic cells that convert radiant energy directly into electrical energy."
  }, "Solar panels"), " skip several transformation steps. Solar thermal systems concentrate sunlight to boil water and drive turbines. Wind energy is indirect solar energy: uneven heating of Earth's surface creates pressure differences that drive air movement, which turbines convert to electricity. Even hydroelectric dams trace their energy back to solar-driven evaporation that lifts water to altitude and stores gravitational PE."), /*#__PURE__*/React.createElement(Callout, {
    kind: "fact",
    title: "Australia and solar"
  }, "Australia receives more solar radiation per square metre than any other continent. Solar panels and wind farms are now among the cheapest sources of new electricity generation.")));
}

/* ============================================================
   SECTION 7.2: CHEMICAL CHANGE
   Custom interactive: Physical vs Chemical Change Sorter + Exo/Endo Sim
   ============================================================ */

function ChangeClassifier() {
  var items = [{
    id: "a",
    label: "Ice melting",
    bucket: "physical"
  }, {
    id: "b",
    label: "Iron rusting",
    bucket: "chemical"
  }, {
    id: "c",
    label: "Sugar dissolving in water",
    bucket: "physical"
  }, {
    id: "d",
    label: "Burning wood",
    bucket: "chemical"
  }, {
    id: "e",
    label: "Cutting paper",
    bucket: "physical"
  }, {
    id: "f",
    label: "Bicarbonate soda + vinegar fizzing",
    bucket: "chemical"
  }, {
    id: "g",
    label: "Bending a wire",
    bucket: "physical"
  }, {
    id: "h",
    label: "Cooking an egg",
    bucket: "chemical"
  }];
  return /*#__PURE__*/React.createElement(Interactive, {
    title: "Physical or Chemical Change?",
    subtitle: "Sort each observation into the correct category.",
    takeaway: "Physical changes alter the form of a substance without producing anything new, while chemical changes create entirely new substances that are difficult to reverse."
  }, /*#__PURE__*/React.createElement(MatchBuckets, {
    items: items,
    buckets: [{
      id: "physical",
      label: "Physical Change"
    }, {
      id: "chemical",
      label: "Chemical Change"
    }]
  }));
}
function ExoEndoSim() {
  var _useState1 = useState("neutralisation"),
    _useState10 = _slicedToArray(_useState1, 2),
    reaction = _useState10[0],
    setReaction = _useState10[1];
  var reactions = {
    neutralisation: {
      label: "Neutralisation (acid + base)",
      type: "exothermic",
      dt: 11,
      color: "#f97316"
    },
    combustion: {
      label: "Combustion (ethanol)",
      type: "exothermic",
      dt: 45,
      color: "#ef4444"
    },
    ammonium: {
      label: "Dissolving ammonium nitrate",
      type: "endothermic",
      dt: -16,
      color: "#3b82f6"
    },
    citric: {
      label: "Citric acid + bicarbonate soda",
      type: "endothermic",
      dt: -4,
      color: "#60a5fa"
    }
  };
  var rx = reactions[reaction];
  var startTemp = 22;
  var finalTemp = startTemp + rx.dt;
  var barH = Math.min(Math.abs(rx.dt) * 3, 90);
  var barColor = rx.dt > 0 ? "#f97316" : "#3b82f6";
  var barY = rx.dt > 0 ? 60 - barH : 60;
  return /*#__PURE__*/React.createElement(Interactive, {
    title: "Exothermic vs Endothermic Reactions",
    subtitle: "Select a reaction and observe the temperature change.",
    takeaway: "Exothermic reactions release energy and warm their surroundings, while endothermic reactions absorb energy and cool their surroundings - the direction of heat flow tells you which type of reaction is occurring."
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexWrap: "wrap",
      gap: "0.4rem",
      marginBottom: "1rem"
    }
  }, Object.keys(reactions).map(function (k) {
    return /*#__PURE__*/React.createElement("button", {
      key: k,
      className: reaction === k ? "chip accent" : "chip",
      onClick: function onClick() {
        return setReaction(k);
      }
    }, reactions[k].label);
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: "1.5rem",
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 80 130",
    width: "80",
    style: {
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("rect", {
    x: "25",
    y: "10",
    width: "30",
    height: "110",
    rx: "4",
    fill: "#e5e7eb"
  }), /*#__PURE__*/React.createElement("rect", {
    x: "26",
    y: 10 + barY,
    width: "28",
    height: barH,
    fill: barColor,
    opacity: "0.85"
  }), /*#__PURE__*/React.createElement("line", {
    x1: "10",
    y1: "70",
    x2: "70",
    y2: "70",
    stroke: "#9ca3af",
    strokeWidth: "1"
  }), /*#__PURE__*/React.createElement("text", {
    x: "40",
    y: "126",
    textAnchor: "middle",
    fontSize: "9",
    fill: "var(--muted)"
  }, "temp"), /*#__PURE__*/React.createElement("text", {
    x: "8",
    y: "73",
    textAnchor: "end",
    fontSize: "8",
    fill: "var(--muted)"
  }, startTemp)), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "stat-readout"
  }, /*#__PURE__*/React.createElement(Stat, {
    value: finalTemp,
    label: "Final temp (\xB0C)"
  }), /*#__PURE__*/React.createElement(Stat, {
    value: "".concat(rx.dt > 0 ? "+" : "").concat(rx.dt),
    label: "Change (\xB0C)"
  })), /*#__PURE__*/React.createElement("p", {
    style: {
      marginTop: "0.5rem",
      marginBottom: 0
    }
  }, "This reaction is ", /*#__PURE__*/React.createElement("strong", null, rx.type), ".", rx.dt > 0 ? " Energy is released to the surroundings; the mixture warms up." : " Energy is absorbed from the surroundings; the mixture cools down."))));
}
function WordEquationBuilder() {
  var reactions = [{
    id: "mg",
    label: "Burning magnesium",
    reactants: ["magnesium", "oxygen"],
    products: ["magnesium oxide"],
    observation: "Bright white flame; white powder remains"
  }, {
    id: "acid",
    label: "Acid + carbonate",
    reactants: ["hydrochloric acid", "calcium carbonate"],
    products: ["calcium chloride", "water", "carbon dioxide"],
    observation: "Fizzing; solid dissolves; slight warmth"
  }, {
    id: "rust",
    label: "Iron rusting",
    reactants: ["iron", "oxygen", "water"],
    products: ["iron(III) oxide"],
    observation: "Reddish-brown coating forms slowly"
  }, {
    id: "photo",
    label: "Photosynthesis",
    reactants: ["carbon dioxide", "water"],
    products: ["glucose", "oxygen"],
    observation: "Requires light; green plants absorb CO2"
  }];
  var _useState11 = useState("mg"),
    _useState12 = _slicedToArray(_useState11, 2),
    selected = _useState12[0],
    setSelected = _useState12[1];
  var rx = reactions.find(function (r) {
    return r.id === selected;
  });
  return /*#__PURE__*/React.createElement(Interactive, {
    title: "Word Equation Builder",
    subtitle: "Select a reaction to see its word equation and initial/final observations.",
    takeaway: "A word equation summarises a chemical reaction by naming the reactants on the left and the products on the right, with an arrow meaning 'produces' in between."
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexWrap: "wrap",
      gap: "0.4rem",
      marginBottom: "1rem"
    }
  }, reactions.map(function (r) {
    return /*#__PURE__*/React.createElement("button", {
      key: r.id,
      className: selected === r.id ? "chip accent" : "chip",
      onClick: function onClick() {
        return setSelected(r.id);
      }
    }, r.label);
  })), rx && /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 380 60",
    width: "100%",
    style: {
      maxWidth: 380
    }
  }, rx.reactants.map(function (r, i) {
    return /*#__PURE__*/React.createElement("g", {
      key: r
    }, /*#__PURE__*/React.createElement("rect", {
      x: i * (180 / rx.reactants.length),
      y: "8",
      width: 160 / rx.reactants.length,
      height: "36",
      rx: "6",
      fill: "var(--accent-soft)",
      stroke: "var(--accent-deep)"
    }), /*#__PURE__*/React.createElement("text", {
      x: i * (180 / rx.reactants.length) + 160 / rx.reactants.length / 2,
      y: "31",
      textAnchor: "middle",
      fontSize: "10",
      fill: "var(--ink)"
    }, r), i < rx.reactants.length - 1 && /*#__PURE__*/React.createElement("text", {
      x: i * (180 / rx.reactants.length) + 160 / rx.reactants.length + 5,
      y: "31",
      fontSize: "14",
      fontWeight: "700",
      fill: "var(--accent-deep)"
    }, "+"));
  }), /*#__PURE__*/React.createElement("text", {
    x: "188",
    y: "31",
    fontSize: "18",
    fill: "var(--accent-deep)",
    fontWeight: "700"
  }, "\u2192"), rx.products.map(function (p, i) {
    return /*#__PURE__*/React.createElement("g", {
      key: p
    }, /*#__PURE__*/React.createElement("rect", {
      x: 200 + i * (170 / rx.products.length),
      y: "8",
      width: 155 / rx.products.length,
      height: "36",
      rx: "6",
      fill: "var(--accent-deep)"
    }), /*#__PURE__*/React.createElement("text", {
      x: 200 + i * (170 / rx.products.length) + 155 / rx.products.length / 2,
      y: "31",
      textAnchor: "middle",
      fontSize: "10",
      fill: "#fff"
    }, p), i < rx.products.length - 1 && /*#__PURE__*/React.createElement("text", {
      x: 200 + i * (170 / rx.products.length) + 155 / rx.products.length + 5,
      y: "31",
      fontSize: "14",
      fontWeight: "700",
      fill: "var(--accent-deep)"
    }, "+"));
  })), /*#__PURE__*/React.createElement("p", {
    style: {
      marginTop: "0.5rem",
      marginBottom: 0
    }
  }, /*#__PURE__*/React.createElement("strong", null, "Observation:"), " ", rx.observation)));
}
function Section72(_ref2) {
  var progress = _ref2.progress,
    setProgress = _ref2.setProgress;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    className: "topic-head"
  }, /*#__PURE__*/React.createElement("div", {
    className: "eyebrow"
  }, "7.2 Chemical Change"), /*#__PURE__*/React.createElement("h1", null, "When substances transform"), /*#__PURE__*/React.createElement("p", {
    className: "lead"
  }, "Chemical changes create brand new substances with entirely different properties from the starting materials.")), /*#__PURE__*/React.createElement(Figure, {
    src: "img/chemical-change.png",
    caption: "Signs of a chemical change \u2014 bubbles, a colour change and heat."
  }), /*#__PURE__*/React.createElement(DotPoint, {
    id: "7.2.1",
    title: "Indicators of physical and chemical change",
    progress: progress,
    setProgress: setProgress
  }, /*#__PURE__*/React.createElement("p", null, "A ", /*#__PURE__*/React.createElement(Term, {
    def: "A change that alters the form or appearance of a substance without producing any new substance."
  }, "physical change"), " is usually reversible and creates no new substance. Melting ice, dissolving sugar, and cutting paper are all physical changes. A ", /*#__PURE__*/React.createElement(Term, {
    def: "A change that produces one or more new substances with different chemical properties."
  }, "chemical change"), " produces new substances that are difficult or impossible to reverse."), /*#__PURE__*/React.createElement("p", null, "Scientists watch for five key indicators of chemical change: a permanent ", /*#__PURE__*/React.createElement(Term, {
    def: "A new colour that appears and cannot be reversed by simple physical means."
  }, "colour change"), ", ", /*#__PURE__*/React.createElement(Term, {
    def: "Bubbles or fizzing showing a new gas has been produced."
  }, "gas production"), ", formation of a ", /*#__PURE__*/React.createElement(Term, {
    def: "A solid that appears in a clear liquid mixture."
  }, "precipitate"), ", a significant ", /*#__PURE__*/React.createElement(Term, {
    def: "The mixture becomes noticeably hotter (exothermic) or colder (endothermic) without external heating."
  }, "temperature change"), ", and the change being difficult to reverse. One indicator on its own is only a clue, so look for several together to be confident that a new substance has formed."), /*#__PURE__*/React.createElement(Callout, {
    kind: "warn",
    title: "Watch out"
  }, "Bubbles alone do not always mean a chemical change. Boiling water produces bubbles, but that is a physical change. Look for multiple indicators together."), /*#__PURE__*/React.createElement(ChangeClassifier, null), /*#__PURE__*/React.createElement(QGroup, {
    title: "Check yourself"
  }, /*#__PURE__*/React.createElement(MCQ, {
    num: 6,
    question: "Which observation is the BEST single indicator of a chemical change?",
    options: ["The substance changes shape", "A new permanent colour appears in the mixture", "The substance dissolves in water", "The temperature of the surroundings changes slightly"],
    correct: 1,
    explain: "A permanent colour change strongly suggests a new substance has formed. Dissolving or changing shape are physical changes; a slight temperature change alone is less definitive."
  }))), /*#__PURE__*/React.createElement(DotPoint, {
    id: "7.2.2",
    title: "Reactants, products, and word equations",
    progress: progress,
    setProgress: setProgress
  }, /*#__PURE__*/React.createElement("p", null, "In every chemical reaction, the starting materials are called ", /*#__PURE__*/React.createElement(Term, {
    def: "The substances you start with in a chemical reaction."
  }, "reactants"), " and the new substances formed are called ", /*#__PURE__*/React.createElement(Term, {
    def: "The new substances produced in a chemical reaction."
  }, "products"), ". Atoms are neither created nor destroyed; they are simply rearranged into new combinations. Describing the initial state (what you see before) and the final state (what you see after) is the first step in analysing any reaction."), /*#__PURE__*/React.createElement("p", null, "A ", /*#__PURE__*/React.createElement(Term, {
    def: "A sentence-level description of a reaction showing reactants on the left, an arrow meaning 'produces', and products on the right."
  }, "word equation"), " summarises a reaction concisely. Reactants go on the left, products on the right, separated by an arrow meaning \"produces\". For example: magnesium + oxygen produces magnesium oxide. Multiple substances are separated by plus signs."), /*#__PURE__*/React.createElement(WordEquationBuilder, null), /*#__PURE__*/React.createElement(Callout, {
    kind: "key",
    title: "Format"
  }, "reactant 1 + reactant 2 produces product 1 + product 2. The arrow always points from reactants to products.")), /*#__PURE__*/React.createElement(DotPoint, {
    id: "7.2.3",
    title: "Energy changes in chemical reactions",
    progress: progress,
    setProgress: setProgress
  }, /*#__PURE__*/React.createElement("p", null, "All chemical reactions involve energy. When bonds in the reactants break, energy is absorbed. When new bonds form in the products, energy is released. If more energy is released than absorbed overall, the reaction is ", /*#__PURE__*/React.createElement(Term, {
    def: "A reaction that releases energy (heat) to the surroundings, causing the temperature to rise."
  }, "exothermic"), ". Combustion, neutralisation, and rusting are all exothermic. Hand warmers and self-heating food cans use exothermic reactions to generate warmth."), /*#__PURE__*/React.createElement("p", null, "If more energy is absorbed than released, the reaction is ", /*#__PURE__*/React.createElement(Term, {
    def: "A reaction that absorbs energy from the surroundings, causing the temperature to fall."
  }, "endothermic"), ". Dissolving ammonium nitrate in water, photosynthesis, and some decomposition reactions are endothermic. Instant cold packs rely on endothermic reactions to pull heat away from a sore muscle, reducing swelling."), /*#__PURE__*/React.createElement(ExoEndoSim, null), /*#__PURE__*/React.createElement(QGroup, {
    title: "Check yourself"
  }, /*#__PURE__*/React.createElement(WrittenQ, {
    num: 7,
    question: "Compare the energy change in combustion with the energy change in photosynthesis. How are these two processes related?",
    model: "Combustion is exothermic: chemical PE in the fuel (glucose, wood, petrol) is released as heat and light. Photosynthesis is endothermic: light energy from the Sun is absorbed and stored as chemical PE in glucose. Together they are essentially reverse reactions: photosynthesis builds the chemical stores that combustion releases."
  }))), /*#__PURE__*/React.createElement(DotPoint, {
    id: "7.2.4",
    title: "Photosynthesis, respiration, and scientific reports",
    progress: progress,
    setProgress: setProgress
  }, /*#__PURE__*/React.createElement("p", null, /*#__PURE__*/React.createElement(Term, {
    def: "The process by which plants convert light energy into chemical PE (glucose) using CO2 and water."
  }, "Photosynthesis"), " is endothermic: carbon dioxide plus water produces glucose plus oxygen (requires light and chlorophyll). This happens in the ", /*#__PURE__*/React.createElement(Term, {
    def: "The organelle in plant cells where photosynthesis occurs."
  }, "chloroplasts"), " of plant cells. ", /*#__PURE__*/React.createElement(Term, {
    def: "The process by which cells break down glucose to release energy, producing CO2 and water."
  }, "Cellular respiration"), " is exothermic: glucose plus oxygen produces carbon dioxide plus water plus energy (ATP). This happens in the ", /*#__PURE__*/React.createElement(Term, {
    def: "The organelle in cells where aerobic respiration occurs."
  }, "mitochondria"), " of most plant and animal cells."), /*#__PURE__*/React.createElement("p", null, "Together, these two processes form the backbone of the carbon and oxygen cycles. During daylight, plants photosynthesise faster than they respire, producing a net release of oxygen. At night, without light, plants only respire. When you document an investigation of these processes, you write a formal scientific report with sections in this order: Title, Aim, Hypothesis, Materials, Method, Results, Discussion, and Conclusion."), /*#__PURE__*/React.createElement(Callout, {
    kind: "key",
    title: "Complementary reactions"
  }, "Photosynthesis: CO2 + water produces glucose + O2 (endothermic). Respiration: glucose + O2 produces CO2 + water + energy (exothermic). They are linked in a cycle."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: "1rem",
      flexWrap: "wrap"
    }
  }, /*#__PURE__*/React.createElement(FlipCard, {
    front: "Photosynthesis",
    back: "CO2 + water produces glucose + O2. Needs light. Chloroplasts. Endothermic."
  }), /*#__PURE__*/React.createElement(FlipCard, {
    front: "Respiration",
    back: "Glucose + O2 produces CO2 + water + energy. Most cells. Mitochondria. Exothermic."
  }))));
}

/* ============================================================
   SECTION 7.3: GEOLOGICAL CHANGE
   Custom interactives: Plate Boundary Selector, Rock Cycle Navigator, Stratigraphy Game
   ============================================================ */

function PlateBoundarySim() {
  var _useState13 = useState("convergent"),
    _useState14 = _slicedToArray(_useState13, 2),
    boundary = _useState14[0],
    setBoundary = _useState14[1];
  var configs = {
    convergent: {
      label: "Convergent",
      desc: "Two plates move TOWARD each other. Oceanic crust subducts beneath continental crust, forming a deep trench and a volcanic mountain range.",
      color: "#ef4444"
    },
    divergent: {
      label: "Divergent",
      desc: "Two plates move APART. Magma rises to fill the gap, creating new crust and a mid-ocean ridge (or rift valley on land).",
      color: "#3b82f6"
    },
    transform: {
      label: "Transform",
      desc: "Two plates SLIDE past each other horizontally. No crust is created or destroyed, but friction builds stress that releases as earthquakes.",
      color: "#a855f7"
    }
  };
  var cfg = configs[boundary];
  function ConvAnim() {
    return /*#__PURE__*/React.createElement("svg", {
      viewBox: "0 0 300 120",
      width: "100%",
      style: {
        maxWidth: 300
      }
    }, /*#__PURE__*/React.createElement("rect", {
      x: "0",
      y: "60",
      width: "120",
      height: "30",
      rx: "4",
      fill: "#d97706"
    }), /*#__PURE__*/React.createElement("text", {
      x: "60",
      y: "80",
      textAnchor: "middle",
      fontSize: "10",
      fontWeight: "700",
      fill: "#fff"
    }, "Continental plate"), /*#__PURE__*/React.createElement("rect", {
      x: "170",
      y: "60",
      width: "130",
      height: "30",
      rx: "4",
      fill: "#1e40af"
    }), /*#__PURE__*/React.createElement("text", {
      x: "235",
      y: "80",
      textAnchor: "middle",
      fontSize: "10",
      fontWeight: "700",
      fill: "#fff"
    }, "Oceanic plate"), /*#__PURE__*/React.createElement("polygon", {
      points: "165,65 135,95 155,95",
      fill: "#b45309"
    }), /*#__PURE__*/React.createElement("text", {
      x: "148",
      y: "112",
      textAnchor: "middle",
      fontSize: "9",
      fill: "var(--muted)"
    }, "subduction"), /*#__PURE__*/React.createElement("polygon", {
      points: "80,56 95,36 110,56",
      fill: "#ef4444"
    }), /*#__PURE__*/React.createElement("text", {
      x: "95",
      y: "30",
      textAnchor: "middle",
      fontSize: "9",
      fill: "#ef4444"
    }, "volcano"), /*#__PURE__*/React.createElement("text", {
      x: "150",
      y: "55",
      textAnchor: "middle",
      fontSize: "9",
      fill: "var(--muted)"
    }, "trench"), /*#__PURE__*/React.createElement("line", {
      x1: "145",
      y1: "58",
      x2: "145",
      y2: "64",
      stroke: "var(--muted)",
      strokeWidth: "1"
    }));
  }
  function DivAnim() {
    return /*#__PURE__*/React.createElement("svg", {
      viewBox: "0 0 300 100",
      width: "100%",
      style: {
        maxWidth: 300
      }
    }, /*#__PURE__*/React.createElement("rect", {
      x: "0",
      y: "40",
      width: "120",
      height: "30",
      rx: "4",
      fill: "#1e40af"
    }), /*#__PURE__*/React.createElement("text", {
      x: "60",
      y: "60",
      textAnchor: "middle",
      fontSize: "10",
      fontWeight: "700",
      fill: "#fff"
    }, "Plate A"), /*#__PURE__*/React.createElement("rect", {
      x: "180",
      y: "40",
      width: "120",
      height: "30",
      rx: "4",
      fill: "#1e40af"
    }), /*#__PURE__*/React.createElement("text", {
      x: "240",
      y: "60",
      textAnchor: "middle",
      fontSize: "10",
      fontWeight: "700",
      fill: "#fff"
    }, "Plate B"), /*#__PURE__*/React.createElement("polygon", {
      points: "130,70 148,50 148,70",
      fill: "#ef4444",
      opacity: "0.8"
    }), /*#__PURE__*/React.createElement("polygon", {
      points: "170,70 152,50 152,70",
      fill: "#ef4444",
      opacity: "0.8"
    }), /*#__PURE__*/React.createElement("text", {
      x: "150",
      y: "42",
      textAnchor: "middle",
      fontSize: "9",
      fill: "#ef4444"
    }, "new crust"), /*#__PURE__*/React.createElement("text", {
      x: "95",
      y: "85",
      fontSize: "8",
      fill: "#3b82f6"
    }, "plates move apart"), /*#__PURE__*/React.createElement("text", {
      x: "175",
      y: "85",
      fontSize: "8",
      fill: "#3b82f6"
    }, "plates move apart"));
  }
  function TransAnim() {
    return /*#__PURE__*/React.createElement("svg", {
      viewBox: "0 0 300 100",
      width: "100%",
      style: {
        maxWidth: 300
      }
    }, /*#__PURE__*/React.createElement("rect", {
      x: "10",
      y: "30",
      width: "270",
      height: "20",
      rx: "4",
      fill: "#7c3aed"
    }), /*#__PURE__*/React.createElement("text", {
      x: "150",
      y: "44",
      textAnchor: "middle",
      fontSize: "9",
      fontWeight: "700",
      fill: "#fff"
    }, "Plate A moving right"), /*#__PURE__*/React.createElement("rect", {
      x: "10",
      y: "55",
      width: "270",
      height: "20",
      rx: "4",
      fill: "#a855f7"
    }), /*#__PURE__*/React.createElement("text", {
      x: "150",
      y: "69",
      textAnchor: "middle",
      fontSize: "9",
      fontWeight: "700",
      fill: "#fff"
    }, "Plate B moving left"), /*#__PURE__*/React.createElement("polygon", {
      points: "285,40 270,35 270,45",
      fill: "#fef3c7"
    }), /*#__PURE__*/React.createElement("polygon", {
      points: "15,60 30,55 30,65",
      fill: "#fef3c7"
    }), /*#__PURE__*/React.createElement("text", {
      x: "150",
      y: "95",
      textAnchor: "middle",
      fontSize: "9",
      fill: "var(--muted)"
    }, "friction builds stress, then earthquake"));
  }
  return /*#__PURE__*/React.createElement(Interactive, {
    title: "Plate Boundary Explorer",
    subtitle: "Select a boundary type to see what happens.",
    takeaway: "The three types of plate boundary - convergent, divergent, and transform - each produce different geological features such as volcanoes, ocean ridges, and earthquake zones."
  }, /*#__PURE__*/React.createElement("div", {
    className: "ctrl-row",
    style: {
      justifyContent: "center",
      gap: "0.5rem"
    }
  }, Object.keys(configs).map(function (k) {
    return /*#__PURE__*/React.createElement("button", {
      key: k,
      className: boundary === k ? "btn btn-accent" : "btn btn-ghost",
      onClick: function onClick() {
        return setBoundary(k);
      },
      style: {
        minWidth: 100
      }
    }, configs[k].label);
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      margin: "1rem 0",
      textAlign: "center"
    }
  }, boundary === "convergent" && /*#__PURE__*/React.createElement(ConvAnim, null), boundary === "divergent" && /*#__PURE__*/React.createElement(DivAnim, null), boundary === "transform" && /*#__PURE__*/React.createElement(TransAnim, null)), /*#__PURE__*/React.createElement("p", {
    style: {
      textAlign: "center",
      marginBottom: 0
    }
  }, cfg.desc));
}
function RockCycleSim() {
  var _useState15 = useState(0),
    _useState16 = _slicedToArray(_useState15, 2),
    stage = _useState16[0],
    setStage = _useState16[1];
  var stages = [{
    name: "Magma",
    color: "#ef4444",
    desc: "Molten rock deep underground or at the surface as lava during eruptions.",
    next: "Cools to form igneous rock"
  }, {
    name: "Igneous rock",
    color: "#b45309",
    desc: "Granite (slow cooling, large crystals) or basalt (fast cooling, small crystals).",
    next: "Weathering and erosion break it into sediments"
  }, {
    name: "Sediments",
    color: "#d97706",
    desc: "Loose fragments of rock and minerals transported by water, wind, or ice.",
    next: "Compaction and cementation form sedimentary rock"
  }, {
    name: "Sedimentary rock",
    color: "#92400e",
    desc: "Sandstone, limestone, shale: layered rock that may contain fossils.",
    next: "Heat and pressure transform it into metamorphic rock"
  }, {
    name: "Metamorphic rock",
    color: "#1d4ed8",
    desc: "Marble, slate, quartzite: existing rock recrystallised by heat and pressure.",
    next: "Deep burial and further heating melt it back to magma"
  }];
  var current = stages[stage];
  var next = stages[(stage + 1) % stages.length];
  var positions = [{
    cx: 150,
    cy: 40
  }, {
    cx: 270,
    cy: 90
  }, {
    cx: 230,
    cy: 175
  }, {
    cx: 70,
    cy: 175
  }, {
    cx: 30,
    cy: 90
  }];
  var arrows = [{
    x1: 175,
    y1: 52,
    x2: 250,
    y2: 80
  }, {
    x1: 262,
    y1: 110,
    x2: 240,
    y2: 162
  }, {
    x1: 208,
    y1: 178,
    x2: 92,
    y2: 178
  }, {
    x1: 55,
    y1: 162,
    x2: 42,
    y2: 108
  }, {
    x1: 45,
    y1: 78,
    x2: 128,
    y2: 45
  }];
  return /*#__PURE__*/React.createElement(Interactive, {
    title: "Rock Cycle Navigator",
    subtitle: "Tap each stage to learn how it transforms into the next.",
    takeaway: "Rocks are not permanent - they continuously transform between igneous, sedimentary, and metamorphic types through a cycle driven by heat, pressure, weathering, and erosion over millions of years."
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: "1rem",
      alignItems: "flex-start",
      flexWrap: "wrap"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 300 220",
    width: "300",
    style: {
      flexShrink: 0
    }
  }, arrows.map(function (a, i) {
    return /*#__PURE__*/React.createElement("line", {
      key: i,
      x1: a.x1,
      y1: a.y1,
      x2: a.x2,
      y2: a.y2,
      stroke: i === stage ? "var(--accent-deep)" : "#9ca3af",
      strokeWidth: i === stage ? 3 : 1.5,
      markerEnd: "url(#arr)"
    });
  }), /*#__PURE__*/React.createElement("defs", null, /*#__PURE__*/React.createElement("marker", {
    id: "arr",
    markerWidth: "8",
    markerHeight: "8",
    refX: "6",
    refY: "3",
    orient: "auto"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M0,0 L6,3 L0,6 Z",
    fill: "var(--accent-deep)"
  }))), stages.map(function (s, i) {
    return /*#__PURE__*/React.createElement("g", {
      key: s.name,
      onClick: function onClick() {
        return setStage(i);
      },
      style: {
        cursor: "pointer"
      }
    }, /*#__PURE__*/React.createElement("circle", {
      cx: positions[i].cx,
      cy: positions[i].cy,
      r: "30",
      fill: i === stage ? s.color : "#e5e7eb",
      stroke: i === stage ? s.color : "#9ca3af",
      strokeWidth: "2"
    }), /*#__PURE__*/React.createElement("text", {
      x: positions[i].cx,
      y: positions[i].cy + 4,
      textAnchor: "middle",
      fontSize: "9",
      fontWeight: "700",
      fill: i === stage ? "#fff" : "#374151"
    }, s.name.split(" ")[0]), s.name.split(" ").length > 1 && /*#__PURE__*/React.createElement("text", {
      x: positions[i].cx,
      y: positions[i].cy + 15,
      textAnchor: "middle",
      fontSize: "9",
      fontWeight: "700",
      fill: i === stage ? "#fff" : "#374151"
    }, s.name.split(" ").slice(1).join(" ")));
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minWidth: 160
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      background: current.color,
      color: "#fff",
      borderRadius: 10,
      padding: "0.6rem 0.8rem",
      marginBottom: "0.6rem"
    }
  }, /*#__PURE__*/React.createElement("strong", null, current.name)), /*#__PURE__*/React.createElement("p", {
    style: {
      marginBottom: "0.5rem"
    }
  }, current.desc), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: "0.8rem",
      color: "var(--muted)"
    }
  }, "Next: ", current.next), /*#__PURE__*/React.createElement("button", {
    className: "btn btn-accent",
    style: {
      marginTop: "0.7rem"
    },
    onClick: function onClick() {
      return setStage((stage + 1) % stages.length);
    }
  }, "Next stage"))));
}
function StratigraphySim() {
  var layers = [{
    label: "Layer E (surface)",
    fossil: "Modern marine shells",
    color: "#fef3c7",
    age: "Youngest"
  }, {
    label: "Layer D",
    fossil: "Fish scales",
    color: "#fde68a",
    age: "Younger"
  }, {
    label: "Layer C",
    fossil: "Coral fragments",
    color: "#fcd34d",
    age: "Middle"
  }, {
    label: "Layer B",
    fossil: "Trilobite fragments",
    color: "#d97706",
    age: "Older"
  }, {
    label: "Layer A (base)",
    fossil: "Stromatolite traces",
    color: "#92400e",
    age: "Oldest"
  }];
  var _useState17 = useState([]),
    _useState18 = _slicedToArray(_useState17, 2),
    revealed = _useState18[0],
    setRevealed = _useState18[1];
  var toggle = function toggle(i) {
    return setRevealed(function (prev) {
      return prev.includes(i) ? prev.filter(function (x) {
        return x !== i;
      }) : [].concat(_toConsumableArray(prev), [i]);
    });
  };
  return /*#__PURE__*/React.createElement(Interactive, {
    title: "Rock Strata Explorer",
    subtitle: "Tap any layer to reveal its fossils and relative age.",
    takeaway: "By the law of superposition, lower rock layers in an undisturbed sequence are older, allowing scientists to determine the relative age of fossils without needing exact dates."
  }, /*#__PURE__*/React.createElement("p", {
    className: "muted",
    style: {
      marginTop: 0
    }
  }, "Law of superposition: lower layers are older in undisturbed rock sequences."), layers.map(function (l, i) {
    return /*#__PURE__*/React.createElement("div", {
      key: i,
      onClick: function onClick() {
        return toggle(i);
      },
      style: {
        background: l.color,
        padding: "0.5rem 0.8rem",
        marginBottom: 3,
        borderRadius: 6,
        cursor: "pointer",
        borderLeft: "4px solid #92400e"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center"
      }
    }, /*#__PURE__*/React.createElement("strong", {
      style: {
        fontSize: "0.85rem"
      }
    }, l.label), /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: "0.75rem",
        color: "#713f12"
      }
    }, revealed.includes(i) ? "hide" : "tap to reveal")), revealed.includes(i) && /*#__PURE__*/React.createElement("div", {
      style: {
        marginTop: "0.3rem",
        fontSize: "0.82rem"
      }
    }, /*#__PURE__*/React.createElement("span", null, "Fossil: ", l.fossil), /*#__PURE__*/React.createElement("span", {
      style: {
        marginLeft: "1rem",
        fontWeight: 700
      }
    }, "Age: ", l.age)));
  }));
}
function MineralTester() {
  var minerals = [{
    name: "Quartz",
    hardness: 7,
    streak: "White",
    lustre: "Glassy (vitreous)",
    use: "Glassmaking, electronics"
  }, {
    name: "Calcite",
    hardness: 3,
    streak: "White",
    lustre: "Vitreous to pearly",
    use: "Cement, chalk"
  }, {
    name: "Feldspar",
    hardness: 6,
    streak: "White",
    lustre: "Pearly",
    use: "Ceramics, glassware"
  }, {
    name: "Mica",
    hardness: 2.5,
    streak: "White",
    lustre: "Pearly, silky",
    use: "Insulation, cosmetics"
  }, {
    name: "Pyrite",
    hardness: 6.5,
    streak: "Greenish-black",
    lustre: "Metallic",
    use: "Sulfur production"
  }];
  var _useState19 = useState("Quartz"),
    _useState20 = _slicedToArray(_useState19, 2),
    mineral = _useState20[0],
    setMineral = _useState20[1];
  var m = minerals.find(function (x) {
    return x.name === mineral;
  });
  var tools = [{
    name: "Fingernail",
    hardness: 2.5
  }, {
    name: "Copper coin",
    hardness: 3.5
  }, {
    name: "Steel nail",
    hardness: 5.5
  }];
  return /*#__PURE__*/React.createElement(Interactive, {
    title: "Mineral Property Tester",
    subtitle: "Select a mineral to test its hardness with common tools.",
    takeaway: "Minerals can be identified by measurable physical properties such as hardness, streak, and lustre, because a harder mineral scratches a softer one but not the other way around."
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexWrap: "wrap",
      gap: "0.4rem",
      marginBottom: "1rem"
    }
  }, minerals.map(function (mn) {
    return /*#__PURE__*/React.createElement("button", {
      key: mn.name,
      className: mineral === mn.name ? "chip accent" : "chip",
      onClick: function onClick() {
        return setMineral(mn.name);
      }
    }, mn.name);
  })), m && /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "stat-readout"
  }, /*#__PURE__*/React.createElement(Stat, {
    value: m.hardness,
    label: "Mohs hardness"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: "0.5rem",
      display: "flex",
      flexWrap: "wrap",
      gap: "0.5rem"
    }
  }, tools.map(function (t) {
    return /*#__PURE__*/React.createElement("div", {
      key: t.name,
      style: {
        background: t.hardness < m.hardness ? "#dcfce7" : "#fee2e2",
        borderRadius: 8,
        padding: "0.4rem 0.7rem",
        fontSize: "0.82rem"
      }
    }, /*#__PURE__*/React.createElement("strong", null, t.name), " (hardness ", t.hardness, ")", /*#__PURE__*/React.createElement("div", null, t.hardness < m.hardness ? "Cannot scratch " + m.name : "Can scratch " + m.name));
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: "0.6rem",
      fontSize: "0.85rem"
    }
  }, /*#__PURE__*/React.createElement("strong", null, "Streak:"), " ", m.streak, " | ", /*#__PURE__*/React.createElement("strong", null, "Lustre:"), " ", m.lustre, " | ", /*#__PURE__*/React.createElement("strong", null, "Use:"), " ", m.use)), /*#__PURE__*/React.createElement("p", {
    className: "muted",
    style: {
      marginTop: "0.5rem",
      marginBottom: 0
    }
  }, "Hardness scale: 1 (talc, softest) to 10 (diamond, hardest)."));
}
function Section73(_ref3) {
  var progress = _ref3.progress,
    setProgress = _ref3.setProgress;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    className: "topic-head"
  }, /*#__PURE__*/React.createElement("div", {
    className: "eyebrow"
  }, "7.3 Geological Change"), /*#__PURE__*/React.createElement("h1", null, "Earth's restless surface"), /*#__PURE__*/React.createElement("p", {
    className: "lead"
  }, "Rocks form, break down, and transform over millions of years. Plates drift, mountains rise, and the fossil record preserves life's long story.")), /*#__PURE__*/React.createElement(Figure, {
    src: "img/rock-cycle.png",
    caption: "The rock cycle: rocks transform through heat, pressure and weathering."
  }), /*#__PURE__*/React.createElement(DotPoint, {
    id: "7.3.1",
    title: "Movement of tectonic plates",
    progress: progress,
    setProgress: setProgress
  }, /*#__PURE__*/React.createElement("p", null, "Earth's outer shell is broken into roughly 15 large rigid slabs called ", /*#__PURE__*/React.createElement(Term, {
    def: "Large, rigid slabs of rock that make up Earth's outer shell and move slowly across the mantle."
  }, "tectonic plates"), ". They sit on the ", /*#__PURE__*/React.createElement(Term, {
    def: "The thick layer of hot, solid rock beneath Earth's crust that flows very slowly over millions of years."
  }, "mantle"), " and drift at 2 to 10 centimetres per year, about the same rate your fingernails grow. The driving force is ", /*#__PURE__*/React.createElement(Term, {
    def: "Circular flow in the mantle where hot rock rises, spreads, cools, and sinks, dragging plates along."
  }, "convection in the mantle"), ": rock heated by the core rises, spreads under the crust, cools, and sinks again."), /*#__PURE__*/React.createElement("p", null, "Where two plates meet, a ", /*#__PURE__*/React.createElement(Term, {
    def: "The edge where two tectonic plates meet, associated with earthquakes and volcanic activity."
  }, "plate boundary"), " forms. At ", /*#__PURE__*/React.createElement(Term, {
    def: "A boundary where two plates move toward each other; may form trenches and volcanoes."
  }, "convergent boundaries"), ", plates push together and denser oceanic crust subducts beneath lighter continental crust, forming trenches and volcanic mountain ranges. At ", /*#__PURE__*/React.createElement(Term, {
    def: "A boundary where two plates move apart; new crust is created at mid-ocean ridges."
  }, "divergent boundaries"), ", plates pull apart and magma fills the gap to create new crust. At ", /*#__PURE__*/React.createElement(Term, {
    def: "A boundary where two plates slide horizontally past each other; frequent earthquakes but no crust created or destroyed."
  }, "transform boundaries"), ", plates grind past each other, generating powerful earthquakes."), /*#__PURE__*/React.createElement(PlateBoundarySim, null), /*#__PURE__*/React.createElement(QGroup, {
    title: "Check yourself"
  }, /*#__PURE__*/React.createElement(MCQ, {
    num: 8,
    question: "At which type of plate boundary is new oceanic crust created?",
    options: ["Convergent boundary", "Transform boundary", "Divergent boundary", "Subduction zone"],
    correct: 2,
    explain: "At divergent boundaries, plates move apart and magma rises to fill the gap, solidifying as new oceanic crust and building mid-ocean ridges."
  }))), /*#__PURE__*/React.createElement(DotPoint, {
    id: "7.3.2",
    title: "Evidence for plate tectonics",
    progress: progress,
    setProgress: setProgress
  }, /*#__PURE__*/React.createElement("p", null, "In 1912, Alfred Wegener proposed that the continents had once been joined in a supercontinent he called ", /*#__PURE__*/React.createElement(Term, {
    def: "The ancient supercontinent proposed by Wegener that later broke apart into today's continents."
  }, "Pangaea"), ". Scientists were sceptical because he could not explain what force could move whole continents. Over the following decades, multiple independent lines of evidence built an overwhelming case."), /*#__PURE__*/React.createElement("p", null, "The matching fit of the coastlines of South America and Africa was the first clue. Identical fossil species, including ", /*#__PURE__*/React.createElement(Term, {
    def: "An ancient seed fern found on all southern continents, indicating they were once joined."
  }, "Glossopteris"), " (a plant) and Mesosaurus (a freshwater reptile), were found on continents now separated by thousands of kilometres of open ocean. Matching ancient rock sequences across those continents confirmed the connection. Then, the discovery of mid-ocean ridges and ", /*#__PURE__*/React.createElement(Term, {
    def: "The process by which new oceanic crust forms at mid-ocean ridges and moves outward."
  }, "sea-floor spreading"), " revealed the mechanism: convection currents in the mantle. The global distribution of earthquakes and volcanoes along narrow belts at plate boundaries completed the picture, and plate tectonics theory was widely accepted by the 1960s."), /*#__PURE__*/React.createElement(Callout, {
    kind: "key",
    title: "Science in action"
  }, "Wegener's theory was rejected initially because there was no mechanism. When sea-floor spreading was discovered, the evidence fell into place. This shows how scientific theories develop as new evidence accumulates.")), /*#__PURE__*/React.createElement(DotPoint, {
    id: "7.3.3",
    title: "Earthquakes and volcanoes as evidence of geological change",
    progress: progress,
    setProgress: setProgress
  }, /*#__PURE__*/React.createElement("p", null, "An ", /*#__PURE__*/React.createElement(Term, {
    def: "A sudden shaking of the ground caused by the rapid release of stress stored in Earth's crust along a fault."
  }, "earthquake"), " occurs when stress built up along a ", /*#__PURE__*/React.createElement(Term, {
    def: "A crack in Earth's crust where blocks of rock are locked by friction and can suddenly slip."
  }, "fault"), " exceeds the frictional force and the rocks suddenly slip. Energy radiates outward as seismic waves. The point of slip underground is the ", /*#__PURE__*/React.createElement(Term, {
    def: "The point inside Earth where an earthquake originates."
  }, "focus"), ", and the point directly above it on the surface is the ", /*#__PURE__*/React.createElement(Term, {
    def: "The point on Earth's surface directly above the earthquake focus."
  }, "epicentre"), ". Earthquakes can uplift land, trigger landslides, and generate tsunamis."), /*#__PURE__*/React.createElement("p", null, "A ", /*#__PURE__*/React.createElement(Term, {
    def: "An opening in Earth's crust through which magma, gases, and ash are expelled."
  }, "volcano"), " forms where magma reaches the surface. Once erupted, the molten rock is called lava. Volcanoes occur most often at convergent boundaries (subducting crust melts and rises), divergent boundaries (magma fills the gap), and above ", /*#__PURE__*/React.createElement(Term, {
    def: "Columns of unusually hot mantle material that melt through overlying plates, creating volcanic islands."
  }, "hot spots"), " like those that formed the Hawaiian Islands. Volcanic eruptions build entirely new landforms; the Hawaiian Islands and Iceland are completely volcanic in origin."), /*#__PURE__*/React.createElement(Callout, {
    kind: "fact",
    title: "Geological change is ongoing"
  }, "Both earthquakes and volcanoes change Earth's surface in real time. They are not just ancient history but evidence that geological processes are active right now.")), /*#__PURE__*/React.createElement(DotPoint, {
    id: "7.3.4",
    title: "Aboriginal and Torres Strait Islander cultural accounts of geological events",
    progress: progress,
    setProgress: setProgress
  }, /*#__PURE__*/React.createElement("p", null, "Aboriginal and Torres Strait Islander peoples hold the world's oldest continuous cultural traditions, stretching back more than 65,000 years. Their ancestors witnessed volcanic eruptions, rising seas, and coastal flooding. Oral traditions passed carefully from generation to generation preserved these observations with remarkable accuracy."), /*#__PURE__*/React.createElement("p", null, "The ", /*#__PURE__*/React.createElement(Term, {
    def: "Traditional Custodians of country around Budj Bim (Mount Eccles) in south-western Victoria."
  }, "Gunditjmara people"), " of south-western Victoria describe the volcanic creation of the Budj Bim landscape in their oral traditions. Geologists have dated the lava flows to between about 30,000 and 37,000 years ago, making these among the oldest known accounts of a volcanic eruption anywhere in the world. Research by Nunn and Reid (2016) identified more than 20 Aboriginal oral traditions from coastal Australia that appear to preserve memories of sea-level rise at the end of the last Ice Age, roughly 7,000 to 12,000 years ago. These cultural accounts represent long-lived empirical knowledge belonging to and held under the custodianship of the relevant peoples."), /*#__PURE__*/React.createElement(Callout, {
    kind: "key",
    title: "Respectful research"
  }, "Scientists work in genuine partnership with community Elders. Cultural knowledge is shared publicly only with community consent and is attributed correctly to the custodian community.")), /*#__PURE__*/React.createElement(DotPoint, {
    id: "7.3.5",
    title: "Observable properties of minerals and rocks",
    progress: progress,
    setProgress: setProgress
  }, /*#__PURE__*/React.createElement("p", null, "A ", /*#__PURE__*/React.createElement(Term, {
    def: "A naturally occurring, inorganic solid with a definite chemical composition and crystalline structure."
  }, "mineral"), " is identified by its physical properties: ", /*#__PURE__*/React.createElement(Term, {
    def: "Resistance to scratching, rated 1 (softest) to 10 (hardest) on the Mohs scale."
  }, "hardness"), ", streak (powder colour on unglazed porcelain), ", /*#__PURE__*/React.createElement(Term, {
    def: "How a mineral's surface reflects light; may be metallic, glassy, pearly, or dull."
  }, "lustre"), ", colour, and cleavage. A ", /*#__PURE__*/React.createElement(Term, {
    def: "The way a mineral breaks along flat surfaces due to its internal crystal structure."
  }, "cleavage"), " plane shows how a mineral splits. No single property is enough; geologists use a combination. The Mohs scale rates hardness from 1 (talc) to 10 (diamond)."), /*#__PURE__*/React.createElement("p", null, "Rocks are made of one or more minerals. ", /*#__PURE__*/React.createElement(Term, {
    def: "Rock formed by the cooling and solidification of magma or lava; may have visible crystals."
  }, "Igneous rocks"), " like granite and basalt form from cooling magma. ", /*#__PURE__*/React.createElement(Term, {
    def: "Rock formed by compaction and cementation of sediment layers; may contain fossils and visible layers."
  }, "Sedimentary rocks"), " like sandstone and limestone show visible layers and may preserve fossils. ", /*#__PURE__*/React.createElement(Term, {
    def: "Rock formed when existing rock is changed by heat and pressure; often shows banding or foliation."
  }, "Metamorphic rocks"), " like marble and slate show banding or foliation from being recrystallised under heat and pressure."), /*#__PURE__*/React.createElement(MineralTester, null), /*#__PURE__*/React.createElement(QGroup, {
    title: "Check yourself"
  }, /*#__PURE__*/React.createElement(WrittenQ, {
    num: 9,
    question: "A geologist finds a rock with visible layers and a shell embedded in it. What rock type is it most likely to be, and how did it form?",
    model: "It is most likely a sedimentary rock such as limestone. It formed when marine sediments and shell material accumulated in layers on the sea floor, were buried under more sediment, and over millions of years were compacted and cemented together (lithification). The shell is a fossil preserved in the layers."
  }))), /*#__PURE__*/React.createElement(DotPoint, {
    id: "7.3.6",
    title: "The rock cycle",
    progress: progress,
    setProgress: setProgress
  }, /*#__PURE__*/React.createElement("p", null, "The ", /*#__PURE__*/React.createElement(Term, {
    def: "The continuous series of geological processes by which rocks are formed, broken down, and transformed into other types over millions of years."
  }, "rock cycle"), " shows that no rock type is permanent. Magma cools to form igneous rock. Weathering and erosion break igneous rock into ", /*#__PURE__*/React.createElement(Term, {
    def: "Loose fragments of rock and minerals produced by weathering and transported by water, wind, or ice."
  }, "sediments"), ". Sediments are buried, compacted, and cemented in a process called ", /*#__PURE__*/React.createElement(Term, {
    def: "The process by which loose sediment is compacted and cemented into solid sedimentary rock."
  }, "lithification"), " to form sedimentary rock. If any rock is subjected to intense heat and pressure (without melting), minerals recrystallise into metamorphic rock. If temperatures are high enough, metamorphic rock melts back to magma, completing the cycle."), /*#__PURE__*/React.createElement("p", null, "Each pathway takes millions to hundreds of millions of years. The rock making up the cliffs you walk past today has likely passed through several stages of the cycle over Earth's 4.6-billion-year history. Australia is home to some of the world's oldest rocks, including Precambrian formations more than 3.5 billion years old in the Pilbara."), /*#__PURE__*/React.createElement(RockCycleSim, null)), /*#__PURE__*/React.createElement(DotPoint, {
    id: "7.3.7",
    title: "Fossils and evidence of past life",
    progress: progress,
    setProgress: setProgress
  }, /*#__PURE__*/React.createElement("p", null, "A ", /*#__PURE__*/React.createElement(Term, {
    def: "The preserved remains or trace of an organism that lived in the past, usually found in sedimentary rock."
  }, "fossil"), " most commonly forms in sedimentary rock when an organism dies, is buried rapidly by sediment, and its hard parts (bones, shells, teeth) are preserved as more layers accumulate. In ", /*#__PURE__*/React.createElement(Term, {
    def: "A fossilisation process where minerals replace or fill spaces in buried organic material."
  }, "permineralisation"), ", minerals dissolved in groundwater gradually replace the original tissue. A ", /*#__PURE__*/React.createElement(Term, {
    def: "A fossil type: a hollow negative impression left in rock after the hard parts of a buried organism dissolve."
  }, "mould fossil"), " forms when hard parts dissolve away, leaving a hollow impression. If that hollow fills with minerals or sediment, a ", /*#__PURE__*/React.createElement(Term, {
    def: "A fossil type: a solid replica formed when a mould fills with minerals or sediment."
  }, "cast fossil"), " results."), /*#__PURE__*/React.createElement("p", null, "Fossils provide direct evidence that life on Earth has changed over time. Different species appear in different rock layers, and many organisms in older strata are extinct. ", /*#__PURE__*/React.createElement(Term, {
    def: "Fossils of organisms that lived for a short time but were widespread; used to match rock layers of the same age."
  }, "Index fossils"), " help geologists match rock layers across different locations. Trace fossils, such as footprints and burrows, record behaviour rather than physical remains. The fossil record, combined with radiometric dating, allows scientists to reconstruct the history of life over hundreds of millions of years."), /*#__PURE__*/React.createElement(Callout, {
    kind: "fact",
    title: "Australian fossils"
  }, "The Ediacara Hills in South Australia contain fossils of soft-bodied organisms dating to about 560 million years ago, among the oldest known complex multicellular life forms in the world.")), /*#__PURE__*/React.createElement(DotPoint, {
    id: "7.3.8",
    title: "Law of superposition and relative dating",
    progress: progress,
    setProgress: setProgress
  }, /*#__PURE__*/React.createElement("p", null, "The ", /*#__PURE__*/React.createElement(Term, {
    def: "In an undisturbed sequence of sedimentary rock layers, the oldest layers are at the bottom and the youngest are at the top."
  }, "law of superposition"), " states that in an undisturbed sequence of sedimentary strata, lower layers are older. This allows ", /*#__PURE__*/React.createElement(Term, {
    def: "Determining whether one rock or layer is older or younger than another, without knowing its exact age in years."
  }, "relative dating"), ": geologists can order events without needing exact ages. The law was first formalised by Danish scientist Nicolas Steno in the seventeenth century."), /*#__PURE__*/React.createElement("p", null, "For the law to apply, strata must be undisturbed; tectonic forces can tilt, fold, or overturn sequences. Geologists check using ", /*#__PURE__*/React.createElement(Term, {
    def: "The sedimentary feature where coarser particles settle at the base and finer particles settle at the top of a layer."
  }, "graded bedding"), " and ripple marks to confirm which way was originally up. Index fossils from the same layer in different locations confirm they are the same age. ", /*#__PURE__*/React.createElement(Term, {
    def: "Determining the actual age of a rock in years, using radioactive decay rates."
  }, "Absolute dating"), " methods such as radiometric dating give the actual age in years and complement relative dating."), /*#__PURE__*/React.createElement(StratigraphySim, null), /*#__PURE__*/React.createElement(QGroup, {
    title: "Check yourself"
  }, /*#__PURE__*/React.createElement(MCQ, {
    num: 10,
    question: "In an undisturbed rock sequence with layers W (top), X, Y, Z (bottom), which layer is oldest?",
    options: ["W", "X", "Y", "Z"],
    correct: 3,
    explain: "By the law of superposition, the deepest layer in an undisturbed sequence is the oldest. Z is at the bottom and was deposited first."
  }))), /*#__PURE__*/React.createElement(DotPoint, {
    id: "7.3.9",
    title: "Elemental composition of Earth and other planets",
    progress: progress,
    setProgress: setProgress
  }, /*#__PURE__*/React.createElement("p", null, "Earth's ", /*#__PURE__*/React.createElement(Term, {
    def: "The outermost solid layer of Earth, dominated by silicate minerals."
  }, "crust"), " is dominated by oxygen (46%) and silicon (28%), mostly combined as silicate minerals like quartz and feldspar. Aluminium, iron, calcium, and magnesium make up most of the rest. This is the composition we see in everyday rocks and soils. When you include the dense metallic core of mostly iron and nickel, iron becomes the most abundant element by mass in the whole planet (about 32%)."), /*#__PURE__*/React.createElement("p", null, "Mars, often called the Red Planet, has a surface broadly similar to Earth's crust but with a higher proportion of ", /*#__PURE__*/React.createElement(Term, {
    def: "Iron combined with oxygen; the red compound responsible for the rusty colour of Mars's surface."
  }, "iron oxide"), ", which gives it its characteristic colour. Data from Mars rovers show Martian surface rocks are rich in silicon, iron, magnesium, and sulfur. All the rocky inner planets (Mercury, Venus, Earth, Mars) share silicate mineral surfaces because conditions close to the Sun only allowed high-melting-point materials to condense when the solar system formed. Scientists probe Earth's interior composition by analysing seismic waves from earthquakes, which travel at different speeds through materials of different densities."), /*#__PURE__*/React.createElement("div", {
    className: "data-table",
    style: {
      overflowX: "auto"
    }
  }, /*#__PURE__*/React.createElement("table", null, /*#__PURE__*/React.createElement("thead", null, /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("th", null, "Element"), /*#__PURE__*/React.createElement("th", null, "Earth crust (%)"), /*#__PURE__*/React.createElement("th", null, "Whole Earth (%)"), /*#__PURE__*/React.createElement("th", null, "Mars surface (approx. %)"))), /*#__PURE__*/React.createElement("tbody", null, /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("td", null, "Oxygen"), /*#__PURE__*/React.createElement("td", null, "46"), /*#__PURE__*/React.createElement("td", null, "30"), /*#__PURE__*/React.createElement("td", null, "45")), /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("td", null, "Silicon"), /*#__PURE__*/React.createElement("td", null, "28"), /*#__PURE__*/React.createElement("td", null, "15"), /*#__PURE__*/React.createElement("td", null, "22")), /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("td", null, "Iron"), /*#__PURE__*/React.createElement("td", null, "5"), /*#__PURE__*/React.createElement("td", null, "32"), /*#__PURE__*/React.createElement("td", null, "16")), /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("td", null, "Aluminium"), /*#__PURE__*/React.createElement("td", null, "8"), /*#__PURE__*/React.createElement("td", null, "1"), /*#__PURE__*/React.createElement("td", null, "6")), /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("td", null, "Magnesium"), /*#__PURE__*/React.createElement("td", null, "2"), /*#__PURE__*/React.createElement("td", null, "14"), /*#__PURE__*/React.createElement("td", null, "6"))))), /*#__PURE__*/React.createElement(Callout, {
    kind: "key",
    title: "Seismic evidence"
  }, "We cannot drill to Earth's core, but earthquake waves change speed and direction at boundaries between layers of different composition, letting scientists map the interior remotely."), /*#__PURE__*/React.createElement(QGroup, {
    title: "Check yourself"
  }, /*#__PURE__*/React.createElement(WrittenQ, {
    num: 11,
    question: "Explain why oxygen is the most abundant element in Earth's crust even though we think of oxygen as a gas.",
    model: "In Earth's crust, oxygen is not present mainly as a gas but is chemically bonded within silicate minerals such as quartz (silicon dioxide). These solid mineral structures contain large numbers of oxygen atoms, so by mass oxygen dominates the crust even though the oxygen we breathe is a gas."
  }))));
}

/* ============================================================
   SECTION 7.4: CHANGE IN CONTEXT
   Custom interactive: Chain-Reaction Energy-Transfer Planner
   ============================================================ */

function ChainReactionPlanner() {
  var storeOptions = ["Gravitational PE", "Kinetic", "Elastic PE", "Chemical PE", "Electrical", "Sound", "Thermal (heat)"];
  var defaultStages = [{
    store: "Gravitational PE",
    desc: "Ball at top of ramp"
  }, {
    store: "Kinetic",
    desc: "Ball rolling down"
  }, {
    store: "Elastic PE",
    desc: "Stretched rubber band"
  }, {
    store: "Kinetic",
    desc: "Rubber band snaps object"
  }, {
    store: "Sound",
    desc: "Object strikes bell"
  }];
  var _useState21 = useState(defaultStages),
    _useState22 = _slicedToArray(_useState21, 2),
    stages = _useState22[0],
    setStages = _useState22[1];
  var updateStore = function updateStore(i, val) {
    setStages(function (s) {
      return s.map(function (st, idx) {
        return idx === i ? _objectSpread(_objectSpread({}, st), {}, {
          store: val
        }) : st;
      });
    });
  };
  var updateDesc = function updateDesc(i, val) {
    setStages(function (s) {
      return s.map(function (st, idx) {
        return idx === i ? _objectSpread(_objectSpread({}, st), {}, {
          desc: val
        }) : st;
      });
    });
  };
  var addStage = function addStage() {
    return setStages(function (s) {
      return [].concat(_toConsumableArray(s), [{
        store: "Gravitational PE",
        desc: "New stage"
      }]);
    });
  };
  var removeStage = function removeStage(i) {
    return setStages(function (s) {
      return s.filter(function (_, idx) {
        return idx !== i;
      });
    });
  };
  var storeColors = {
    "Gravitational PE": "#f59e0b",
    "Kinetic": "#3b82f6",
    "Elastic PE": "#10b981",
    "Chemical PE": "#8b5cf6",
    "Electrical": "#f97316",
    "Sound": "#ec4899",
    "Thermal (heat)": "#ef4444"
  };
  return /*#__PURE__*/React.createElement(Interactive, {
    title: "Chain-Reaction Machine Planner",
    subtitle: "Design your own chain-reaction machine. Edit the stages and see the energy flow.",
    takeaway: "In a chain-reaction machine, energy is transferred and transformed at each stage, but some is always lost as heat and sound, so the more stages there are, the lower the overall efficiency."
  }, /*#__PURE__*/React.createElement("div", null, stages.map(function (st, i) {
    return /*#__PURE__*/React.createElement("div", {
      key: i,
      style: {
        display: "flex",
        alignItems: "center",
        gap: "0.5rem",
        marginBottom: "0.4rem"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        width: 12,
        height: 12,
        borderRadius: "50%",
        background: storeColors[st.store] || "#9ca3af",
        flexShrink: 0
      }
    }), /*#__PURE__*/React.createElement("select", {
      "aria-label": "Energy store for stage ".concat(i + 1),
      value: st.store,
      onChange: function onChange(e) {
        return updateStore(i, e.target.value);
      },
      style: {
        fontSize: "0.82rem",
        padding: "0.2rem 0.3rem",
        borderRadius: 6,
        border: "1px solid #d1d5db"
      }
    }, storeOptions.map(function (o) {
      return /*#__PURE__*/React.createElement("option", {
        key: o,
        value: o
      }, o);
    })), /*#__PURE__*/React.createElement("input", {
      "aria-label": "Description of stage ".concat(i + 1),
      value: st.desc,
      onChange: function onChange(e) {
        return updateDesc(i, e.target.value);
      },
      style: {
        flex: 1,
        fontSize: "0.82rem",
        padding: "0.2rem 0.4rem",
        borderRadius: 6,
        border: "1px solid #d1d5db"
      }
    }), stages.length > 2 && /*#__PURE__*/React.createElement("button", {
      onClick: function onClick() {
        return removeStage(i);
      },
      "aria-label": "Remove stage ".concat(i + 1),
      style: {
        background: "none",
        border: "none",
        cursor: "pointer",
        fontSize: "1rem",
        color: "#9ca3af"
      }
    }, "x"), i < stages.length - 1 && /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: "1.1rem",
        color: "var(--accent-deep)"
      }
    }, "\u2192"));
  })), /*#__PURE__*/React.createElement("button", {
    className: "btn btn-ghost",
    onClick: addStage,
    style: {
      marginTop: "0.5rem"
    }
  }, "+ Add stage"), /*#__PURE__*/React.createElement("p", {
    className: "muted",
    style: {
      marginTop: "0.6rem",
      marginBottom: 0
    }
  }, "Each transfer loses some energy as heat and sound. More stages means lower overall efficiency."));
}
function Section74(_ref4) {
  var progress = _ref4.progress,
    setProgress = _ref4.setProgress;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    className: "topic-head"
  }, /*#__PURE__*/React.createElement("div", {
    className: "eyebrow"
  }, "7.4 Change in Context"), /*#__PURE__*/React.createElement("h1", null, "Chain-reaction machines"), /*#__PURE__*/React.createElement("p", {
    className: "lead"
  }, "Bring energy concepts to life by designing a machine where each stage triggers the next in a cascade of transfers.")), /*#__PURE__*/React.createElement(DotPoint, {
    id: "7.4.1",
    title: "Energy stores and transfers in chain-reaction machines",
    progress: progress,
    setProgress: setProgress
  }, /*#__PURE__*/React.createElement("p", null, "A ", /*#__PURE__*/React.createElement(Term, {
    def: "A deliberately complicated sequence of steps that completes a simple task by triggering a series of energy transfers."
  }, "chain-reaction machine"), " (sometimes called a Rube Goldberg machine) makes energy transfers visible. Each stage holds a particular energy store: gravitational PE (an object held at height), elastic PE (a stretched spring or rubber band), kinetic energy (a moving object), or chemical energy (a battery or fuel). When each store releases its energy, it triggers the next stage in the sequence."), /*#__PURE__*/React.createElement("p", null, "Energy is transferred by mechanical work (a force acting over a distance), electrical flow, or heat transfer. At every stage the total energy is conserved, but some is always dissipated as heat and sound due to friction and air resistance. The more stages in the chain, the more energy is dissipated overall and the lower the machine's efficiency. Real engineers minimise unnecessary steps for exactly this reason."), /*#__PURE__*/React.createElement("p", null, "Designing your own machine requires planning which energy stores are active at each stage and ensuring each transfer delivers enough energy to trigger the next step. Testing and adjusting is part of the engineering process. You annotate your design by labelling each store and the type of transfer (mechanical, electrical, or thermal) between them."), /*#__PURE__*/React.createElement(Callout, {
    kind: "key",
    title: "Conservation reminder"
  }, "No matter how many stages your machine has, the total energy output (useful work plus all the waste heat and sound) always equals the energy input. Energy is never created or destroyed."), /*#__PURE__*/React.createElement(ChainReactionPlanner, null), /*#__PURE__*/React.createElement(QGroup, {
    title: "Check yourself"
  }, /*#__PURE__*/React.createElement(MCQ, {
    num: 12,
    question: "A marble of mass 0.02 kg is released from a height of 0.5 m (g = 10 m/s\xB2). What is its maximum gravitational PE (in joules)?",
    options: ["0.01 J", "0.1 J", "1 J", "10 J"],
    correct: 1,
    explain: "PE = mgh = 0.02 x 10 x 0.5 = 0.1 J. This is the maximum KE the marble can have at the bottom of the ramp (ignoring friction)."
  }), /*#__PURE__*/React.createElement(WrittenQ, {
    num: 13,
    question: "Explain why the final stage of a chain-reaction machine always produces less useful energy than the energy put into the first stage. Use the terms 'dissipated' and 'conservation of energy' in your answer.",
    model: "At every transfer between stages, some energy is dissipated as thermal energy (heat from friction) and sound. This energy is no longer available to do useful work in the next stage. Conservation of energy means the total energy is unchanged; it is just that an increasing proportion has been dissipated and cannot be recovered as useful energy by the time the final stage is reached."
  }))));
}

/* ============================================================
   MOUNT
   ============================================================ */
mountTopicApp({
  year: 8,
  topicTitle: "Change",
  branch: "change",
  heroImage: "img/hero.png",
  strand: "Stage 4 · NSW Science",
  accent: "amber",
  storageKey: "y8.change",
  hubHref: "../",
  intro: "Change is everywhere in science. In this topic you will trace how energy moves and transforms between objects, how chemical reactions create brand new substances, and how the restless forces inside Earth reshape rocks and continents over millions of years. From the heat in a Bunsen burner to the volcanic eruption recorded in an ancient story, change is the theme that connects them all.",
  glossary: {
    "conduction": "Transfer of heat through a solid by particle-to-particle vibration, with no bulk movement of matter.",
    "convection": "Transfer of heat through a fluid as warm, less-dense regions rise and cool, denser regions sink, forming circulating currents.",
    "radiation": "Transfer of energy as electromagnetic (infrared) waves through a vacuum or medium; requires no physical contact.",
    "kinetic energy": "Energy an object possesses because of its motion; increases with both mass and speed.",
    "potential energy": "Stored energy due to an object's position, condition, or composition; can be released as kinetic energy.",
    "law of conservation of energy": "Energy cannot be created or destroyed; it can only transform from one form to another. Total energy stays constant.",
    "physical change": "A change that alters the form or appearance of a substance without producing a new substance; generally reversible.",
    "chemical change": "A change that produces one or more new substances with different properties from the original materials.",
    "exothermic reaction": "A chemical reaction that releases energy (heat) to the surroundings, causing a temperature rise.",
    "endothermic reaction": "A chemical reaction that absorbs energy from the surroundings, causing a temperature drop.",
    "word equation": "A representation of a chemical reaction showing reactants on the left, an arrow meaning 'produces', and products on the right.",
    "photosynthesis": "The process by which plants use light energy to convert carbon dioxide and water into glucose and oxygen.",
    "cellular respiration": "The process by which cells break down glucose to release energy, producing carbon dioxide and water.",
    "tectonic plate": "A large, rigid slab of rock that makes up part of Earth's outer shell; moves slowly driven by mantle convection.",
    "Pangaea": "The ancient supercontinent proposed by Alfred Wegener that broke apart to form today's continents.",
    "sea-floor spreading": "The process by which new oceanic crust forms at mid-ocean ridges and moves outward as plates diverge.",
    "fault": "A crack in Earth's crust where blocks of rock are locked by friction and can suddenly slip, causing an earthquake.",
    "mineral": "A naturally occurring, inorganic solid with a definite chemical composition and crystalline structure.",
    "igneous rock": "Rock formed by the cooling and solidification of magma or lava.",
    "sedimentary rock": "Rock formed by the compaction and cementation of sediment layers; may contain fossils.",
    "metamorphic rock": "Rock formed when existing rock is changed by heat and pressure without melting.",
    "rock cycle": "The continuous series of geological processes by which rocks are formed, broken down, and transformed into other types over millions of years.",
    "fossil": "The preserved remains or trace of an organism that lived in the past, usually found in sedimentary rock.",
    "law of superposition": "In an undisturbed sequence of sedimentary rock layers, the oldest layers are at the bottom and the youngest are at the top.",
    "relative dating": "Determining whether one rock layer is older or younger than another without knowing its exact age in years.",
    "index fossil": "A fossil of an organism that lived for a short time but was widespread; used to match rock layers of the same age in different locations.",
    "Sankey diagram": "A diagram where arrow widths are proportional to energy amounts, showing useful output energy and waste energy from a transformation.",
    "lithification": "The process by which loose sediment is compacted and cemented into solid sedimentary rock.",
    "mantle convection": "Circular flow in Earth's mantle where hot rock rises, spreads under the crust, cools, and sinks, dragging tectonic plates.",
    "Mohs hardness scale": "A scale from 1 (softest, talc) to 10 (hardest, diamond) that rates a mineral's resistance to scratching."
  },
  sections: [{
    id: "7.1",
    label: "Energy Transfers",
    accent: "amber",
    blurb: "How heat moves and energy transforms between forms.",
    points: ["7.1.1", "7.1.2", "7.1.3", "7.1.4", "7.1.5", "7.1.6", "7.1.7"],
    render: function render(p) {
      return /*#__PURE__*/React.createElement(Section71, p);
    }
  }, {
    id: "7.2",
    label: "Chemical Change",
    accent: "orange",
    blurb: "Indicators of chemical change, reactions, and energy changes.",
    points: ["7.2.1", "7.2.2", "7.2.3", "7.2.4"],
    render: function render(p) {
      return /*#__PURE__*/React.createElement(Section72, p);
    }
  }, {
    id: "7.3",
    label: "Geological Change",
    accent: "amber",
    blurb: "Tectonic plates, the rock cycle, fossils, and Earth's composition.",
    points: ["7.3.1", "7.3.2", "7.3.3", "7.3.4", "7.3.5", "7.3.6", "7.3.7", "7.3.8", "7.3.9"],
    render: function render(p) {
      return /*#__PURE__*/React.createElement(Section73, p);
    }
  }, {
    id: "7.4",
    label: "Change in Context",
    accent: "orange",
    blurb: "Design a chain-reaction machine to demonstrate energy transfers.",
    points: ["7.4.1"],
    render: function render(p) {
      return /*#__PURE__*/React.createElement(Section74, p);
    }
  }]
});

/* Generated from lessons-62.jsx by tools/build.js. Edit the .jsx, not this file. */
"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
/* ============================================================
   Unit 6.2 — Atomic structure
   5 lessons + 2 simulations: history timeline, Rutherford gold-foil
   ============================================================ */

var _React = React,
  u62_useState = _React.useState,
  u62_useEffect = _React.useEffect,
  u62_useMemo = _React.useMemo,
  u62_useRef = _React.useRef;

/* ------------------------------------------------------------
   Lesson 6.2.1 — The atom
------------------------------------------------------------ */
function Lesson621(_ref) {
  var udl = _ref.udl;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("p", null, "An ", /*#__PURE__*/React.createElement(Term, null, "atom"), " is the smallest particle of an element that ", /*#__PURE__*/React.createElement("em", null, "still has the properties of that element"), ". If you took a chunk of pure copper and kept cutting it in half \u2014 the smallest piece that would still behave like copper is a single copper atom."), /*#__PURE__*/React.createElement("p", null, "Cut any further and you get ", /*#__PURE__*/React.createElement("strong", null, "subatomic particles"), " (protons, neutrons, electrons). Those don't have the properties of copper on their own."), /*#__PURE__*/React.createElement("h3", null, "Atoms are absurdly small"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
      gap: 14
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "card"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-display)",
      fontSize: "2.4rem",
      color: "var(--c-orange-deep)",
      lineHeight: 1
    }
  }, "1,000,000"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: "0.92rem",
      color: "var(--ink-2)",
      marginTop: 6
    }
  }, "atoms thick \u2014 a single sheet of paper.")), /*#__PURE__*/React.createElement("div", {
    className: "card"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-display)",
      fontSize: "2.4rem",
      color: "var(--c-purple-deep)",
      lineHeight: 1
    }
  }, "10", /*#__PURE__*/React.createElement("sup", {
    style: {
      fontSize: "0.5em"
    }
  }, "18")), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: "0.92rem",
      color: "var(--ink-2)",
      marginTop: 6
    }
  }, "atoms in one grain of salt. That's a billion-billion."))), /*#__PURE__*/React.createElement("h3", null, "Every element has its own atoms"), /*#__PURE__*/React.createElement("p", null, "Hydrogen atoms aren't the same as helium atoms. Helium isn't carbon. ", /*#__PURE__*/React.createElement("strong", null, "All atoms of the same element have the same number of protons"), ", so they behave in the same way. Atoms of ", /*#__PURE__*/React.createElement("em", null, "different"), " elements have different numbers of protons, with different sizes, masses and behaviours \u2014 that's why elements behave differently."), /*#__PURE__*/React.createElement(Callout, {
    kind: "fact",
    title: "A 2,400-year-old idea"
  }, "Around 400 BCE, the Greek philosopher ", /*#__PURE__*/React.createElement(Term, {
    k: "democritus"
  }, "Democritus"), " suggested that if you kept cutting matter in half, you'd eventually reach a particle that couldn't be cut anymore. He called it ", /*#__PURE__*/React.createElement("em", null, "\xE1tomos"), " \u2014 \"uncuttable\". It took until 1803 for John Dalton to provide actual scientific evidence."), /*#__PURE__*/React.createElement("div", {
    className: "activity"
  }, /*#__PURE__*/React.createElement("div", {
    className: "activity-head"
  }, /*#__PURE__*/React.createElement("h4", null, "Quick check"), /*#__PURE__*/React.createElement("span", {
    className: "badge"
  }, "Quiz")), /*#__PURE__*/React.createElement(QuizMC, {
    question: "A piece of pure copper is split into ever smaller pieces. What's the smallest piece that still behaves like copper?",
    options: ["A copper electron", "A copper atom", "A copper proton", "A copper nucleus"],
    correctIndex: 1,
    explain: "An atom is the smallest unit of an element that still has the properties of that element."
  }), /*#__PURE__*/React.createElement(QuizMC, {
    question: "What does the Greek word '\xE1tomos' mean?",
    options: ["Tiny ball", "Uncuttable", "Heavy", "Pure"],
    correctIndex: 1,
    explain: "It literally means 'uncuttable' \u2014 the smallest possible piece."
  })));
}

/* ------------------------------------------------------------
   Lesson 6.2.2 — Subatomic particles
------------------------------------------------------------ */
function Lesson622(_ref2) {
  var udl = _ref2.udl;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("p", null, "Atoms aren't really uncuttable after all. They're made of three kinds of ", /*#__PURE__*/React.createElement("strong", null, "subatomic particles"), ":"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))",
      gap: 14,
      margin: "10px 0 18px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "card",
    style: {
      borderColor: "var(--c-red)",
      background: "var(--c-red-soft)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "particle proton",
    style: {
      width: 56,
      height: 56,
      position: "relative",
      marginBottom: 8
    }
  }, "p\u207A"), /*#__PURE__*/React.createElement("h4", null, /*#__PURE__*/React.createElement(Term, null, "Proton")), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: "0.88rem",
      color: "var(--ink-2)"
    }
  }, "Charge: ", /*#__PURE__*/React.createElement("strong", null, "+1"), /*#__PURE__*/React.createElement("br", null), "Mass: ", /*#__PURE__*/React.createElement("strong", null, "1"), /*#__PURE__*/React.createElement("br", null), "In the ", /*#__PURE__*/React.createElement(Term, null, "nucleus"))), /*#__PURE__*/React.createElement("div", {
    className: "card"
  }, /*#__PURE__*/React.createElement("div", {
    className: "particle neutron",
    style: {
      width: 56,
      height: 56,
      position: "relative",
      marginBottom: 8
    }
  }, "n"), /*#__PURE__*/React.createElement("h4", null, /*#__PURE__*/React.createElement(Term, null, "Neutron")), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: "0.88rem",
      color: "var(--ink-2)"
    }
  }, "Charge: ", /*#__PURE__*/React.createElement("strong", null, "0"), /*#__PURE__*/React.createElement("br", null), "Mass: ", /*#__PURE__*/React.createElement("strong", null, "1"), /*#__PURE__*/React.createElement("br", null), "In the ", /*#__PURE__*/React.createElement(Term, null, "nucleus"))), /*#__PURE__*/React.createElement("div", {
    className: "card",
    style: {
      borderColor: "var(--c-teal-deep)",
      background: "var(--c-teal-soft)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "particle electron",
    style: {
      width: 56,
      height: 56,
      position: "relative",
      marginBottom: 8
    }
  }, "e\u207B"), /*#__PURE__*/React.createElement("h4", null, /*#__PURE__*/React.createElement(Term, null, "Electron")), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: "0.88rem",
      color: "var(--ink-2)"
    }
  }, "Charge: ", /*#__PURE__*/React.createElement("strong", null, "\u22121"), /*#__PURE__*/React.createElement("br", null), "Mass: ~0 (1/1836)", /*#__PURE__*/React.createElement("br", null), "In ", /*#__PURE__*/React.createElement(Term, null, "shell"), "s"))), /*#__PURE__*/React.createElement("h3", null, "Why atoms are usually neutral"), /*#__PURE__*/React.createElement("p", null, "Protons (+1) and electrons (\u22121) have ", /*#__PURE__*/React.createElement("strong", null, "equal and opposite charges"), ". When an atom has the same number of protons and electrons, those charges cancel out and the atom has no overall charge. Add or remove electrons, and it becomes an ", /*#__PURE__*/React.createElement(Term, null, "ion"), " \u2014 a charged version of the atom."), /*#__PURE__*/React.createElement(Callout, {
    kind: "tip",
    title: "The mass thing"
  }, "A proton is about ", /*#__PURE__*/React.createElement("strong", null, "1,836 times heavier"), " than an electron. That's why the mass of an atom basically comes from its protons and neutrons in the nucleus \u2014 electrons barely register."), /*#__PURE__*/React.createElement("div", {
    className: "activity"
  }, /*#__PURE__*/React.createElement("div", {
    className: "activity-head"
  }, /*#__PURE__*/React.createElement("h4", null, "Quick check"), /*#__PURE__*/React.createElement("span", {
    className: "badge"
  }, "Quiz")), /*#__PURE__*/React.createElement(QuizMC, {
    question: "A neutral atom has 8 protons. How many electrons must it have?",
    options: ["0", "8", "16", "It depends on the element"],
    correctIndex: 1,
    explain: "For an atom to be neutral, protons (+1 each) and electrons (\u22121 each) must balance. 8 protons \u2192 8 electrons."
  }), /*#__PURE__*/React.createElement(QuizMC, {
    question: "Which subatomic particle has almost no mass?",
    options: ["Proton", "Neutron", "Electron", "Nucleus"],
    correctIndex: 2,
    explain: "Electrons are about 1/1836 the mass of a proton \u2014 basically nothing on the atomic scale."
  })));
}

/* ------------------------------------------------------------
   Lesson 6.2.3 — Planetary (Bohr) model
   Visual + interactive: show a generic atom with shell rings
------------------------------------------------------------ */
function PlanetaryDemo(_ref3) {
  var _ref3$z = _ref3.z,
    z = _ref3$z === void 0 ? 6 : _ref3$z;
  // Tiny non-interactive Bohr demo, used in 6.2.3
  var el = window.AppData.getElementByZ(z);
  if (!el) return null;
  var shells = el.shells || [2, Math.min(8, Math.max(0, z - 2)), Math.max(0, z - 10)];
  var W = 360,
    H = 240;
  var cx = W / 2,
    cy = H / 2;
  var baseR = 28;
  var ringStep = 28;
  return /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 ".concat(W, " ").concat(H),
    style: {
      width: "100%",
      maxWidth: 420,
      display: "block",
      margin: "0 auto"
    }
  }, shells.map(function (_, i) {
    return /*#__PURE__*/React.createElement("circle", {
      key: i,
      cx: cx,
      cy: cy,
      r: baseR + (i + 1) * ringStep,
      fill: "none",
      stroke: "oklch(0.6 0.03 250 / 0.45)",
      strokeDasharray: "3 4",
      strokeWidth: "1.2"
    });
  }), /*#__PURE__*/React.createElement("g", null, function () {
    var n = Math.max(z, Math.round(el.mass) - z);
    var total = z + n;
    var points = [];
    for (var i = 0; i < total; i++) {
      var ang = i / total * Math.PI * 2;
      var rad = total <= 4 ? 4 : 7;
      points.push([cx + Math.cos(ang) * rad, cy + Math.sin(ang) * rad, i < z ? "p" : "n"]);
    }
    return points.map(function (_ref4, i) {
      var _ref5 = _slicedToArray(_ref4, 3),
        x = _ref5[0],
        y = _ref5[1],
        t = _ref5[2];
      return /*#__PURE__*/React.createElement("circle", {
        key: i,
        cx: x,
        cy: y,
        r: "5",
        fill: t === "p" ? "oklch(0.6 0.2 25)" : "oklch(0.55 0 0)",
        stroke: "white",
        strokeWidth: "0.8"
      });
    });
  }()), shells.map(function (count, i) {
    var r = baseR + (i + 1) * ringStep;
    return Array.from({
      length: count
    }).map(function (_, j) {
      var ang = j / count * Math.PI * 2 + i * 0.3;
      var x = cx + Math.cos(ang) * r;
      var y = cy + Math.sin(ang) * r;
      return /*#__PURE__*/React.createElement("circle", {
        key: "".concat(i, "-").concat(j),
        cx: x,
        cy: y,
        r: "5",
        fill: "oklch(0.55 0.16 230)",
        stroke: "white",
        strokeWidth: "0.8"
      });
    });
  }), /*#__PURE__*/React.createElement("text", {
    x: cx,
    y: H - 8,
    textAnchor: "middle",
    style: {
      fontSize: 10,
      fill: "var(--ink-muted)",
      fontFamily: "var(--font-mono)"
    }
  }, el.name, " (", el.sym, ") \u2014 Z = ", el.z));
}
function Lesson623(_ref6) {
  var udl = _ref6.udl;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("p", null, "The ", /*#__PURE__*/React.createElement("strong", null, "planetary model"), " (also called the ", /*#__PURE__*/React.createElement("strong", null, "Bohr model"), ") is the picture you'll mostly use this year. Niels Bohr proposed it in 1913 \u2014 and even though it's not the most accurate model anymore, it's incredibly useful for understanding chemistry."), /*#__PURE__*/React.createElement("h3", null, "Inside the atom, in Bohr's words"), /*#__PURE__*/React.createElement("ul", null, /*#__PURE__*/React.createElement("li", null, "The ", /*#__PURE__*/React.createElement(Term, null, "nucleus"), " sits at the centre, like the Sun."), /*#__PURE__*/React.createElement("li", null, "The nucleus contains ", /*#__PURE__*/React.createElement("strong", null, "protons (+)"), " and ", /*#__PURE__*/React.createElement("strong", null, "neutrons (0)"), ", packed tightly."), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("strong", null, "Electrons (\u2212)"), " orbit around the nucleus in fixed ", /*#__PURE__*/React.createElement(Term, null, "shell"), "s \u2014 like planets."), /*#__PURE__*/React.createElement("li", null, "Most of the atom is empty space.")), /*#__PURE__*/React.createElement("div", {
    className: "card",
    style: {
      background: "var(--bg-2)",
      padding: 18
    }
  }, /*#__PURE__*/React.createElement(PlanetaryDemo, {
    z: 6
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: "center",
      color: "var(--ink-muted)",
      fontSize: "0.85rem",
      marginTop: 6
    }
  }, "Carbon (Z = 6): 6 protons and 6 neutrons in the nucleus; 2 electrons in the first shell, 4 in the second.")), /*#__PURE__*/React.createElement("h3", null, "Shell rules"), /*#__PURE__*/React.createElement("ul", null, /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("strong", null, "1st shell:"), " up to ", /*#__PURE__*/React.createElement("strong", null, "2"), " electrons."), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("strong", null, "2nd shell:"), " up to ", /*#__PURE__*/React.createElement("strong", null, "8"), " electrons."), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("strong", null, "3rd shell:"), " holds ", /*#__PURE__*/React.createElement("strong", null, "8"), " electrons before the 4th shell starts filling (true for the first 20 elements)."), /*#__PURE__*/React.createElement("li", null, "Electrons fill ", /*#__PURE__*/React.createElement("em", null, "inside out"), ". Inner shell first, then the next.")), /*#__PURE__*/React.createElement(Callout, {
    kind: "fact",
    title: "A football stadium of nothing"
  }, "If an atom were the size of a football stadium, its nucleus would be the size of a ", /*#__PURE__*/React.createElement("strong", null, "pea"), " in the centre circle. The electrons would be tiny specks zipping around in the far seats. Almost everything around you \u2014 and everything ", /*#__PURE__*/React.createElement("em", null, "inside"), " you \u2014 is empty space."), /*#__PURE__*/React.createElement("p", {
    style: {
      marginTop: 14
    }
  }, "You'll ", /*#__PURE__*/React.createElement("em", null, "build"), " all 18 of these models yourself in lesson 6.3.6."), /*#__PURE__*/React.createElement("div", {
    className: "activity"
  }, /*#__PURE__*/React.createElement("div", {
    className: "activity-head"
  }, /*#__PURE__*/React.createElement("h4", null, "Quick check"), /*#__PURE__*/React.createElement("span", {
    className: "badge"
  }, "Quiz")), /*#__PURE__*/React.createElement(QuizMC, {
    question: "An atom has 2 electrons in shell 1, and 3 electrons in shell 2. How many electrons does it have in total?",
    options: ["3", "5", "8", "10"],
    correctIndex: 1,
    explain: "2 + 3 = 5 electrons. This is boron (Z=5)."
  }), /*#__PURE__*/React.createElement(QuizMC, {
    question: "If most of an atom is empty space, why does a metal feel solid?",
    options: ["It's not really solid — your hand passes through it", "Electrons in your hand repel the electrons in the metal", "The nucleus is much bigger than people think", "Gravity holds the atoms together"],
    correctIndex: 1,
    explain: "The electrons in your hand and in the metal repel each other (like charges repel). What you feel as touching is that electrical push-back."
  })));
}

/* ------------------------------------------------------------
   Lesson 6.2.4 — History timeline (interactive)
------------------------------------------------------------ */
function HistoryViz(_ref7) {
  var model = _ref7.model;
  // Draw a simple visualization of the active model
  var W = 360,
    H = 220;
  var cx = W / 2,
    cy = H / 2;
  return /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 ".concat(W, " ").concat(H),
    style: {
      width: "100%",
      maxWidth: 420,
      display: "block",
      margin: "10px auto"
    }
  }, model === "dalton" && /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("circle", {
    cx: cx,
    cy: cy,
    r: "60",
    fill: "oklch(0.7 0.13 30)",
    stroke: "oklch(0.4 0.15 30)",
    strokeWidth: "2"
  }), /*#__PURE__*/React.createElement("text", {
    x: cx,
    y: cy + 4,
    textAnchor: "middle",
    style: {
      fontSize: 12,
      fill: "white",
      fontFamily: "var(--font-display)"
    }
  }, "solid sphere")), model === "thomson" && /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("circle", {
    cx: cx,
    cy: cy,
    r: "70",
    fill: "oklch(0.78 0.13 30 / 0.7)",
    stroke: "oklch(0.5 0.15 30)",
    strokeWidth: "2"
  }), [[-30, -15], [20, -25], [35, 15], [-15, 30], [5, 5], [-40, 5], [15, -5]].map(function (_ref8, i) {
    var _ref9 = _slicedToArray(_ref8, 2),
      dx = _ref9[0],
      dy = _ref9[1];
    return /*#__PURE__*/React.createElement("circle", {
      key: i,
      cx: cx + dx,
      cy: cy + dy,
      r: "6",
      fill: "oklch(0.45 0.16 230)",
      stroke: "white",
      strokeWidth: "1"
    });
  }), /*#__PURE__*/React.createElement("text", {
    x: cx,
    y: H - 8,
    textAnchor: "middle",
    style: {
      fontSize: 10,
      fill: "var(--ink-muted)"
    }
  }, "positive 'dough' with electron 'plums'")), model === "rutherford" && /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("circle", {
    cx: cx,
    cy: cy,
    r: "80",
    fill: "none",
    stroke: "oklch(0.6 0.03 250 / 0.4)",
    strokeDasharray: "3 3"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: cx,
    cy: cy,
    r: "8",
    fill: "oklch(0.5 0.2 25)"
  }), [[-50, -40], [60, -20], [-30, 55], [55, 40], [10, -65]].map(function (_ref0, i) {
    var _ref1 = _slicedToArray(_ref0, 2),
      dx = _ref1[0],
      dy = _ref1[1];
    return /*#__PURE__*/React.createElement("circle", {
      key: i,
      cx: cx + dx,
      cy: cy + dy,
      r: "4",
      fill: "oklch(0.45 0.16 230)"
    });
  }), /*#__PURE__*/React.createElement("text", {
    x: cx,
    y: H - 8,
    textAnchor: "middle",
    style: {
      fontSize: 10,
      fill: "var(--ink-muted)"
    }
  }, "tiny dense nucleus, mostly empty space")), model === "bohr" && /*#__PURE__*/React.createElement("g", null, [30, 55, 80].map(function (r, i) {
    return /*#__PURE__*/React.createElement("circle", {
      key: i,
      cx: cx,
      cy: cy,
      r: r,
      fill: "none",
      stroke: "oklch(0.6 0.03 250 / 0.55)",
      strokeDasharray: "3 4"
    });
  }), /*#__PURE__*/React.createElement("circle", {
    cx: cx,
    cy: cy,
    r: "9",
    fill: "oklch(0.5 0.2 25)"
  }), [[0, -30], [0, 30]].map(function (_ref10, i) {
    var _ref11 = _slicedToArray(_ref10, 2),
      dx = _ref11[0],
      dy = _ref11[1];
    return /*#__PURE__*/React.createElement("circle", {
      key: i,
      cx: cx + dx,
      cy: cy + dy,
      r: "4",
      fill: "oklch(0.45 0.16 230)"
    });
  }), [[55, 0], [-55, 0], [0, 55], [0, -55], [38, 38], [-38, 38], [38, -38], [-38, -38]].map(function (_ref12, i) {
    var _ref13 = _slicedToArray(_ref12, 2),
      dx = _ref13[0],
      dy = _ref13[1];
    return /*#__PURE__*/React.createElement("circle", {
      key: i,
      cx: cx + dx,
      cy: cy + dy,
      r: "4",
      fill: "oklch(0.45 0.16 230)"
    });
  }), /*#__PURE__*/React.createElement("text", {
    x: cx,
    y: H - 8,
    textAnchor: "middle",
    style: {
      fontSize: 10,
      fill: "var(--ink-muted)"
    }
  }, "fixed shells / energy levels")), model === "quantum" && /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("defs", null, /*#__PURE__*/React.createElement("radialGradient", {
    id: "cloud",
    cx: "50%",
    cy: "50%",
    r: "50%"
  }, /*#__PURE__*/React.createElement("stop", {
    offset: "0%",
    stopColor: "oklch(0.45 0.16 230 / 0.95)"
  }), /*#__PURE__*/React.createElement("stop", {
    offset: "40%",
    stopColor: "oklch(0.55 0.16 230 / 0.4)"
  }), /*#__PURE__*/React.createElement("stop", {
    offset: "100%",
    stopColor: "oklch(0.65 0.16 230 / 0)"
  }))), /*#__PURE__*/React.createElement("ellipse", {
    cx: cx,
    cy: cy,
    rx: "90",
    ry: "68",
    fill: "url(#cloud)"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: cx,
    cy: cy,
    r: "8",
    fill: "oklch(0.5 0.2 25)"
  }), /*#__PURE__*/React.createElement("text", {
    x: cx,
    y: H - 8,
    textAnchor: "middle",
    style: {
      fontSize: 10,
      fill: "var(--ink-muted)"
    }
  }, "probability cloud \u2014 fuzzy electron locations")));
}
function Lesson624(_ref14) {
  var udl = _ref14.udl;
  var HISTORY = window.AppData.HISTORY;
  var _u62_useState = u62_useState(HISTORY[0].id),
    _u62_useState2 = _slicedToArray(_u62_useState, 2),
    active = _u62_useState2[0],
    setActive = _u62_useState2[1];
  var cur = HISTORY.find(function (h) {
    return h.id === active;
  });
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("p", null, "Our picture of the atom has been redrawn four times since Dalton's first model in 1803. Every time a scientist invented better tools, they saw something new \u2014 and had to update the model. ", /*#__PURE__*/React.createElement("strong", null, "This is how science actually works:"), " ideas get tested, improved, and sometimes replaced."), /*#__PURE__*/React.createElement("div", {
    className: "timeline"
  }, HISTORY.map(function (h) {
    return /*#__PURE__*/React.createElement("button", {
      key: h.id,
      className: "tl-step ".concat(active === h.id ? "active" : ""),
      onClick: function onClick() {
        return setActive(h.id);
      }
    }, /*#__PURE__*/React.createElement("div", {
      className: "yr"
    }, h.year), /*#__PURE__*/React.createElement("div", {
      className: "who"
    }, h.who.split(" & ")[0].split(/\s+/).slice(-1)[0]), /*#__PURE__*/React.createElement("div", {
      className: "name"
    }, h.name));
  })), /*#__PURE__*/React.createElement("div", {
    className: "card",
    style: {
      borderColor: "var(--ink)",
      boxShadow: "var(--shadow-2)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
      gap: 18,
      alignItems: "center",
      justifyItems: "center"
    }
  }, cur.photo ? /*#__PURE__*/React.createElement(CCAvatar, {
    file: cur.photo,
    size: 110,
    alt: cur.who
  }) : /*#__PURE__*/React.createElement("div", {
    style: {
      width: 110
    }
  }), /*#__PURE__*/React.createElement(HistoryViz, {
    model: cur.id
  }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Chip, {
    variant: "info"
  }, cur.year), /*#__PURE__*/React.createElement("h3", {
    style: {
      margin: "8px 0 4px"
    }
  }, cur.name), /*#__PURE__*/React.createElement("div", {
    style: {
      color: "var(--ink-muted)",
      fontSize: "0.88rem"
    }
  }, cur.who), /*#__PURE__*/React.createElement("p", {
    style: {
      marginTop: 10,
      fontWeight: 600
    }
  }, cur.one_liner), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: "0.92rem",
      color: "var(--ink-2)"
    }
  }, cur.description), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))",
      gap: 10,
      marginTop: 8,
      fontSize: "0.85rem"
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("strong", null, "Evidence:"), " ", cur.evidence), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("strong", null, "Limitation:"), " ", cur.why_wrong))))), /*#__PURE__*/React.createElement(Callout, {
    kind: "fact",
    title: "Why teachers still use Bohr"
  }, "The quantum cloud model is more accurate, but it's impossibly hard to draw and the maths is brutal. The Bohr (planetary) model is \"wrong in interesting ways\" \u2014 accurate enough to explain everything you need in school chemistry."), /*#__PURE__*/React.createElement("div", {
    className: "activity"
  }, /*#__PURE__*/React.createElement("div", {
    className: "activity-head"
  }, /*#__PURE__*/React.createElement("h4", null, "Quick check"), /*#__PURE__*/React.createElement("span", {
    className: "badge"
  }, "Quiz")), /*#__PURE__*/React.createElement(QuizMC, {
    question: "What did Rutherford's gold-foil experiment prove that Thomson's plum-pudding model couldn't explain?",
    options: ["That electrons exist", "That the atom has a tiny, dense, positive nucleus and is mostly empty space", "That atoms can't be cut", "That elements emit specific colours of light"],
    correctIndex: 1,
    explain: "Most alpha particles passed straight through (mostly empty space) but a few bounced sharply back (hit something tiny and dense \u2014 the nucleus)."
  })));
}

/* ------------------------------------------------------------
   Lesson 6.2.5 — Tech that revealed the atom + Rutherford simulator
------------------------------------------------------------ */
function RutherfordSim() {
  var _u62_useState3 = u62_useState("nuclear"),
    _u62_useState4 = _slicedToArray(_u62_useState3, 2),
    model = _u62_useState4[0],
    setModel = _u62_useState4[1]; // pudding | nuclear
  var _u62_useState5 = u62_useState(true),
    _u62_useState6 = _slicedToArray(_u62_useState5, 2),
    running = _u62_useState6[0],
    setRunning = _u62_useState6[1];
  var _u62_useState7 = u62_useState({
      through: 0,
      deflected: 0,
      back: 0
    }),
    _u62_useState8 = _slicedToArray(_u62_useState7, 2),
    shots = _u62_useState8[0],
    setShots = _u62_useState8[1];
  var stageRef = u62_useRef(null);

  // Maintain a list of active particles
  var particlesRef = u62_useRef([]);
  var lastTimeRef = u62_useRef(0);
  var rafRef = u62_useRef(0);
  u62_useEffect(function () {
    var alive = true;
    function step(t) {
      if (!alive) return;
      var dt = lastTimeRef.current ? Math.min(0.05, (t - lastTimeRef.current) / 1000) : 0.016;
      lastTimeRef.current = t;
      var stage = stageRef.current;
      if (!stage) {
        rafRef.current = requestAnimationFrame(step);
        return;
      }
      var w = stage.clientWidth,
        h = stage.clientHeight;
      var cx = w * 0.62,
        cy = h * 0.5;
      var nucleusR = 6;
      var atomR = Math.min(w, h) * 0.32;

      // spawn
      if (running && particlesRef.current.length < 24) {
        if (Math.random() < 0.45) {
          var startY = cy + (Math.random() - 0.5) * atomR * 1.6;
          particlesRef.current.push({
            x: -10,
            y: startY,
            vx: 220,
            vy: 0,
            dead: false,
            colour: "oklch(0.62 0.2 50)",
            id: Math.random()
          });
        }
      }
      // update
      particlesRef.current.forEach(function (p) {
        if (p.dead) return;
        var dx = cx - p.x,
          dy = cy - p.y;
        var d = Math.hypot(dx, dy);
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
            var a = Math.atan2(p.y - cy, p.x - cx);
            p.vx = Math.cos(a) * 260;
            p.vy = Math.sin(a) * 260;
          } else if (d < atomR) {
            var f = 1400 / Math.max(8, d * d);
            var ux = dx / d,
              uy = dy / d;
            p.vx -= ux * f;
            p.vy -= uy * f;
          }
        } else if (model === "solid") {
          // Dalton: solid ball, everything bounces
          if (d < atomR) {
            var _a = Math.atan2(p.y - cy, p.x - cx);
            p.vx = Math.cos(_a) * 220;
            p.vy = Math.sin(_a) * 220;
          }
        }
        p.x += p.vx * dt;
        p.y += p.vy * dt;
        if (p.x > w + 30 || p.x < -30 || p.y < -30 || p.y > h + 30) {
          p.dead = true;
          // Classify
          var exitedRight = p.x > w + 20;
          var exitedBack = p.x < -20;
          if (exitedRight && Math.abs(p.vy) < 0.18 * Math.abs(p.vx)) {
            setShots(function (s) {
              return _objectSpread(_objectSpread({}, s), {}, {
                through: s.through + 1
              });
            });
          } else if (exitedBack) {
            setShots(function (s) {
              return _objectSpread(_objectSpread({}, s), {}, {
                back: s.back + 1
              });
            });
          } else {
            setShots(function (s) {
              return _objectSpread(_objectSpread({}, s), {}, {
                deflected: s.deflected + 1
              });
            });
          }
        }
      });
      particlesRef.current = particlesRef.current.filter(function (p) {
        return !p.dead;
      });

      // render via DOM (use a state bump)
      forceRender(function (c) {
        return c + 1;
      });
      rafRef.current = requestAnimationFrame(step);
    }
    rafRef.current = requestAnimationFrame(step);
    return function () {
      alive = false;
      cancelAnimationFrame(rafRef.current);
    };
  }, [model, running]);

  // Force re-render trick
  var _u62_useState9 = u62_useState(0),
    _u62_useState0 = _slicedToArray(_u62_useState9, 2),
    forceRender = _u62_useState0[1];
  var total = shots.through + shots.deflected + shots.back;
  var reset = function reset() {
    particlesRef.current = [];
    setShots({
      through: 0,
      deflected: 0,
      back: 0
    });
  };
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 8,
      flexWrap: "wrap",
      marginBottom: 10
    }
  }, /*#__PURE__*/React.createElement(Button, {
    size: "sm",
    variant: model === "solid" ? "primary" : "default",
    onClick: function onClick() {
      setModel("solid");
      reset();
    }
  }, "Dalton solid sphere"), /*#__PURE__*/React.createElement(Button, {
    size: "sm",
    variant: model === "pudding" ? "primary" : "default",
    onClick: function onClick() {
      setModel("pudding");
      reset();
    }
  }, "Thomson plum pudding"), /*#__PURE__*/React.createElement(Button, {
    size: "sm",
    variant: model === "nuclear" ? "primary" : "default",
    onClick: function onClick() {
      setModel("nuclear");
      reset();
    }
  }, "Rutherford nuclear"), /*#__PURE__*/React.createElement("span", {
    className: "spacer"
  }), /*#__PURE__*/React.createElement(Button, {
    size: "sm",
    variant: "ghost",
    icon: running ? "pause" : "play",
    onClick: function onClick() {
      return setRunning(!running);
    }
  }, running ? "Pause" : "Play"), /*#__PURE__*/React.createElement(Button, {
    size: "sm",
    variant: "ghost",
    icon: "reset",
    onClick: reset
  }, "Reset count")), /*#__PURE__*/React.createElement("div", {
    ref: stageRef,
    style: {
      position: "relative",
      width: "100%",
      aspectRatio: "16 / 8",
      background: "radial-gradient(circle at 62% 50%, var(--bg-2) 0%, var(--paper) 80%)",
      borderRadius: "var(--r)",
      overflow: "hidden",
      border: "1px solid var(--border)"
    }
  }, function (_stageRef$current, _stageRef$current2) {
    var w = ((_stageRef$current = stageRef.current) === null || _stageRef$current === void 0 ? void 0 : _stageRef$current.clientWidth) || 600;
    var h = ((_stageRef$current2 = stageRef.current) === null || _stageRef$current2 === void 0 ? void 0 : _stageRef$current2.clientHeight) || 300;
    var cx = w * 0.62,
      cy = h * 0.5;
    var atomR = Math.min(w, h) * 0.32;
    return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
      style: {
        position: "absolute",
        left: cx - atomR,
        top: cy - atomR,
        width: atomR * 2,
        height: atomR * 2,
        borderRadius: "50%",
        border: model === "solid" ? "2px solid oklch(0.5 0.15 30)" : "1.5px dashed oklch(0.6 0.03 250 / 0.5)",
        background: model === "solid" ? "oklch(0.78 0.13 30 / 0.6)" : model === "pudding" ? "oklch(0.85 0.13 30 / 0.35)" : "transparent"
      }
    }), model === "pudding" && [[-30, -15], [20, -25], [35, 15], [-15, 30], [5, 5], [-40, 5], [15, -5], [40, -30], [-20, -40]].map(function (_ref15, i) {
      var _ref16 = _slicedToArray(_ref15, 2),
        dx = _ref16[0],
        dy = _ref16[1];
      return /*#__PURE__*/React.createElement("div", {
        key: i,
        className: "particle electron",
        style: {
          width: 12,
          height: 12,
          left: cx + dx - 6,
          top: cy + dy - 6
        }
      });
    }), model === "nuclear" && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
      style: {
        position: "absolute",
        left: cx - 6,
        top: cy - 6,
        width: 12,
        height: 12,
        borderRadius: "50%",
        background: "oklch(0.55 0.2 25)",
        boxShadow: "0 0 12px oklch(0.6 0.2 25 / 0.7)"
      }
    }), [[-40, -50], [60, -40], [-50, 50], [50, 40], [0, -70], [0, 70]].map(function (_ref17, i) {
      var _ref18 = _slicedToArray(_ref17, 2),
        dx = _ref18[0],
        dy = _ref18[1];
      return /*#__PURE__*/React.createElement("div", {
        key: i,
        className: "particle electron",
        style: {
          width: 8,
          height: 8,
          left: cx + dx - 4,
          top: cy + dy - 4
        }
      });
    })), /*#__PURE__*/React.createElement("div", {
      style: {
        position: "absolute",
        left: 6,
        top: cy - 22,
        width: 24,
        height: 44,
        background: "var(--ink)",
        color: "var(--paper)",
        borderRadius: 6,
        fontSize: 10,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        lineHeight: 1.1,
        fontFamily: "var(--font-mono)"
      }
    }, "\u03B1-src"), particlesRef.current.map(function (p) {
      return /*#__PURE__*/React.createElement("div", {
        key: p.id,
        style: {
          position: "absolute",
          left: p.x - 4,
          top: p.y - 4,
          width: 8,
          height: 8,
          borderRadius: "50%",
          background: p.colour,
          boxShadow: "0 0 6px " + p.colour
        }
      });
    }));
  }()), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(3, 1fr)",
      gap: 10,
      marginTop: 12
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "card",
    style: {
      padding: 12
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      color: "var(--ink-muted)",
      fontSize: "0.8rem"
    }
  }, "Passed through"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: "1.6rem",
      fontFamily: "var(--font-display)"
    }
  }, shots.through)), /*#__PURE__*/React.createElement("div", {
    className: "card",
    style: {
      padding: 12
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      color: "var(--ink-muted)",
      fontSize: "0.8rem"
    }
  }, "Deflected"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: "1.6rem",
      fontFamily: "var(--font-display)"
    }
  }, shots.deflected)), /*#__PURE__*/React.createElement("div", {
    className: "card",
    style: {
      padding: 12
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      color: "var(--ink-muted)",
      fontSize: "0.8rem"
    }
  }, "Bounced back"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: "1.6rem",
      fontFamily: "var(--font-display)"
    }
  }, shots.back))), /*#__PURE__*/React.createElement(Callout, {
    kind: "tip",
    title: model === "solid" ? "Dalton — solid ball" : model === "pudding" ? "Thomson — pudding" : "Rutherford — nucleus"
  }, model === "solid" && "If atoms were solid balls, EVERY alpha particle would bounce. That's not what Rutherford saw.", model === "pudding" && "If the positive charge were spread evenly through the atom, particles would only deflect a tiny bit. Some would still pass through, but none should bounce sharply back.", model === "nuclear" && "What Rutherford actually observed: most particles pass straight through (atom is mostly empty), some deflect, and a rare few bounce almost straight back — they've hit the tiny dense nucleus."));
}
function Lesson625(_ref19) {
  var udl = _ref19.udl;
  var techs = [{
    name: "Cathode ray tube",
    when: "Late 1800s",
    what: "Beams of negative particles in a vacuum.",
    impact: "Thomson discovers the electron → plum-pudding model."
  }, {
    name: "Radioactive sources",
    when: "Early 1900s",
    what: "Alpha particles fired from radium / polonium.",
    impact: "Rutherford's gold-foil experiment → nuclear model."
  }, {
    name: "Spectroscope",
    when: "1860s+",
    what: "Splits light into its component colours.",
    impact: "Each element has a unique 'fingerprint' → supported Bohr shells."
  }, {
    name: "Particle accelerator",
    when: "1930s+",
    what: "Smashes particles at near-light speeds.",
    impact: "Discovery of quarks inside protons & neutrons."
  }, {
    name: "Scanning tunnelling microscope",
    when: "1981+",
    what: "Maps atoms by sensing electron 'tunnelling'.",
    impact: "We can finally see individual atoms."
  }];
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("p", null, "Atoms are far too small for any ordinary microscope. Every time scientists built better tools, they could see more \u2014 and the atomic model improved. ", /*#__PURE__*/React.createElement("strong", null, "Without these technologies, our picture of the atom would have frozen at Dalton in 1803.")), /*#__PURE__*/React.createElement("table", null, /*#__PURE__*/React.createElement("thead", null, /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("th", null, "Technology"), /*#__PURE__*/React.createElement("th", null, "What it does"), /*#__PURE__*/React.createElement("th", null, "Why it mattered"))), /*#__PURE__*/React.createElement("tbody", null, techs.map(function (t, i) {
    return /*#__PURE__*/React.createElement("tr", {
      key: i
    }, /*#__PURE__*/React.createElement("td", null, /*#__PURE__*/React.createElement("strong", null, t.name), /*#__PURE__*/React.createElement("div", {
      style: {
        color: "var(--ink-muted)",
        fontSize: "0.8rem"
      }
    }, t.when)), /*#__PURE__*/React.createElement("td", null, t.what), /*#__PURE__*/React.createElement("td", null, t.impact));
  }))), /*#__PURE__*/React.createElement("div", {
    className: "activity"
  }, /*#__PURE__*/React.createElement("div", {
    className: "activity-head"
  }, /*#__PURE__*/React.createElement("h4", null, "Run Rutherford's gold-foil experiment"), /*#__PURE__*/React.createElement("span", {
    className: "badge"
  }, "Sim")), /*#__PURE__*/React.createElement("p", {
    style: {
      marginTop: 0
    }
  }, "Fire alpha particles at the atom. Switch between the three competing models and watch what happens. Which one matches what Rutherford saw in 1911?"), /*#__PURE__*/React.createElement(RutherfordSim, null)), /*#__PURE__*/React.createElement(Callout, {
    kind: "fact",
    title: "Rutherford's reaction"
  }, "On seeing particles bounce back, Rutherford famously said it was \"as if you had fired a 15-inch shell at a piece of tissue paper and it came back and hit you\". After about two years of thinking it over, he proposed the nuclear model in 1911."));
}
Object.assign(window, {
  Lesson621: Lesson621,
  Lesson622: Lesson622,
  Lesson623: Lesson623,
  Lesson624: Lesson624,
  Lesson625: Lesson625
});

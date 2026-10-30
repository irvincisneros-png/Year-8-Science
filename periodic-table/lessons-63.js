/* Generated from lessons-63.jsx by tools/build.js. Edit the .jsx, not this file. */
"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _toConsumableArray(r) { return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }
function _arrayWithoutHoles(r) { if (Array.isArray(r)) return _arrayLikeToArray(r); }
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
   Unit 6.3 — Periodic table (7 lessons)
   ============================================================ */

var _React = React,
  u63_useState = _React.useState,
  u63_useEffect = _React.useEffect,
  u63_useMemo = _React.useMemo,
  u63_useRef = _React.useRef;

/* Accurate inline diagram of groups and periods for the first 18 elements.
   Colours use the same --t-* category tokens as the interactive table below. */
function GroupsPeriodsFigure() {
  var cells = [
  // [symbol, Z, group, period, category]
  ["H", 1, 1, 1, "nonmetal"], ["He", 2, 18, 1, "noble"], ["Li", 3, 1, 2, "alkali"], ["Be", 4, 2, 2, "alkaline"], ["B", 5, 13, 2, "metalloid"], ["C", 6, 14, 2, "nonmetal"], ["N", 7, 15, 2, "nonmetal"], ["O", 8, 16, 2, "nonmetal"], ["F", 9, 17, 2, "halogen"], ["Ne", 10, 18, 2, "noble"], ["Na", 11, 1, 3, "alkali"], ["Mg", 12, 2, 3, "alkaline"], ["Al", 13, 13, 3, "post"], ["Si", 14, 14, 3, "metalloid"], ["P", 15, 15, 3, "nonmetal"], ["S", 16, 16, 3, "nonmetal"], ["Cl", 17, 17, 3, "halogen"], ["Ar", 18, 18, 3, "noble"]];
  var S = 42,
    G = 4;
  var colX = function colX(g) {
    return g <= 2 ? 78 + (g - 1) * (S + G) : 78 + 2 * (S + G) + 150 + (g - 13) * (S + G);
  };
  var rowY = function rowY(p) {
    return 40 + (p - 1) * (S + G);
  };
  var legend = [["alkali", "Alkali metal"], ["alkaline", "Alkaline earth metal"], ["post", "Post-transition metal"], ["metalloid", "Metalloid"], ["nonmetal", "Reactive non-metal"], ["halogen", "Halogen"], ["noble", "Noble gas"]];
  return /*#__PURE__*/React.createElement("figure", {
    style: {
      margin: "12px 0"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      borderRadius: "var(--r)",
      border: "1px solid var(--border)",
      background: "var(--paper)",
      padding: "10px 6px"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    role: "img",
    "aria-label": "The first three periods of the periodic table. Columns are groups 1, 2 and 13 to 18; rows are periods 1, 2 and 3. Period 1: H, He. Period 2: Li, Be, B, C, N, O, F, Ne. Period 3: Na, Mg, Al, Si, P, S, Cl, Ar. The gap between groups 2 and 13 is where the transition metals (groups 3 to 12) fit from period 4 onwards.",
    viewBox: "0 0 640 250",
    style: {
      width: "100%",
      display: "block"
    }
  }, [1, 2, 13, 14, 15, 16, 17, 18].map(function (g) {
    return /*#__PURE__*/React.createElement("text", {
      key: g,
      x: colX(g) + S / 2,
      y: "30",
      textAnchor: "middle",
      style: {
        fontSize: 12,
        fontWeight: 700,
        fill: "var(--ink)",
        fontFamily: "var(--font-mono)"
      }
    }, g);
  }), /*#__PURE__*/React.createElement("text", {
    x: "4",
    y: "30",
    style: {
      fontSize: 11,
      fill: "var(--ink-muted)"
    }
  }, "Group \u2192"), [1, 2, 3].map(function (p) {
    return /*#__PURE__*/React.createElement("text", {
      key: p,
      x: "4",
      y: rowY(p) + S / 2 + 4,
      style: {
        fontSize: 11,
        fill: "var(--ink-muted)"
      }
    }, "Period ", p);
  }), /*#__PURE__*/React.createElement("line", {
    x1: colX(2) + S + 10,
    x2: colX(13) - 10,
    y1: rowY(3) + S / 2,
    y2: rowY(3) + S / 2,
    stroke: "var(--ink-muted)",
    strokeDasharray: "4 4"
  }), /*#__PURE__*/React.createElement("text", {
    x: (colX(2) + S + colX(13)) / 2,
    y: rowY(2) + S / 2 + 4,
    textAnchor: "middle",
    style: {
      fontSize: 10.5,
      fill: "var(--ink-muted)"
    }
  }, "Groups 3\u201312 (transition"), /*#__PURE__*/React.createElement("text", {
    x: (colX(2) + S + colX(13)) / 2,
    y: rowY(2) + S / 2 + 18,
    textAnchor: "middle",
    style: {
      fontSize: 10.5,
      fill: "var(--ink-muted)"
    }
  }, "metals) start in period 4"), cells.map(function (_ref) {
    var _ref2 = _slicedToArray(_ref, 5),
      sym = _ref2[0],
      z = _ref2[1],
      g = _ref2[2],
      p = _ref2[3],
      cat = _ref2[4];
    return /*#__PURE__*/React.createElement("g", {
      key: sym
    }, /*#__PURE__*/React.createElement("rect", {
      x: colX(g),
      y: rowY(p),
      width: S,
      height: S,
      rx: "5",
      style: {
        fill: "var(--t-".concat(cat, ")")
      }
    }), /*#__PURE__*/React.createElement("text", {
      x: colX(g) + 4,
      y: rowY(p) + 11,
      style: {
        fontSize: 9,
        fill: "#1f2937",
        fontFamily: "var(--font-mono)"
      }
    }, z), /*#__PURE__*/React.createElement("text", {
      x: colX(g) + S / 2,
      y: rowY(p) + 31,
      textAnchor: "middle",
      style: {
        fontSize: 16,
        fontWeight: 700,
        fill: "#1f2937",
        fontFamily: "var(--font-display)"
      }
    }, sym));
  }), legend.map(function (_ref3, i) {
    var _ref4 = _slicedToArray(_ref3, 2),
      cat = _ref4[0],
      label = _ref4[1];
    var x = 20 + i % 4 * 155,
      y = 196 + Math.floor(i / 4) * 24;
    return /*#__PURE__*/React.createElement("g", {
      key: cat
    }, /*#__PURE__*/React.createElement("rect", {
      x: x,
      y: y - 11,
      width: "14",
      height: "14",
      rx: "3",
      style: {
        fill: "var(--t-".concat(cat, ")")
      }
    }), /*#__PURE__*/React.createElement("text", {
      x: x + 20,
      y: y,
      style: {
        fontSize: 11.5,
        fill: "var(--ink)"
      }
    }, label));
  }))), /*#__PURE__*/React.createElement("figcaption", {
    style: {
      fontSize: "0.78rem",
      color: "var(--ink-muted)",
      marginTop: 6,
      lineHeight: 1.45
    }
  }, "Groups (columns) and periods (rows) for the first 18 elements, colour-coded by category (same colours as the interactive table below)."));
}

/* ------------------------------------------------------------
   Lesson 6.3.1 — Patterns in the periodic table
------------------------------------------------------------ */
function Lesson631(_ref5) {
  var _groups$find;
  var udl = _ref5.udl;
  var _u63_useState = u63_useState(null),
    _u63_useState2 = _slicedToArray(_u63_useState, 2),
    filter = _u63_useState2[0],
    setFilter = _u63_useState2[1];
  var _u63_useState3 = u63_useState(null),
    _u63_useState4 = _slicedToArray(_u63_useState3, 2),
    sel = _u63_useState4[0],
    setSel = _u63_useState4[1];
  var groups = [{
    id: "alkali",
    label: "Group 1 — Alkali metals",
    note: "Very reactive, soft. Reactivity INCREASES going down."
  }, {
    id: "alkaline",
    label: "Group 2 — Alkaline earth",
    note: "Reactive metals, but less than Group 1."
  }, {
    id: "halogen",
    label: "Group 17 — Halogens",
    note: "Very reactive non-metals. Reactivity DECREASES going down."
  }, {
    id: "noble",
    label: "Group 18 — Noble gases",
    note: "Almost completely unreactive."
  }];
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("p", null, "The periodic table is the most useful chart in chemistry. Elements are arranged in ", /*#__PURE__*/React.createElement("strong", null, "order of atomic number"), " (number of protons), and lined up so that elements with similar properties stack into columns."), /*#__PURE__*/React.createElement("div", {
    style: {
      margin: "10px 0 18px"
    }
  }, /*#__PURE__*/React.createElement(CCImage, {
    src: "assets/pdf-img-p25.jpg",
    alt: "Black-and-white periodic table of all 118 elements showing each symbol, atomic number and atomic mass.",
    caption: "The modern periodic table \u2014 118 elements arranged by atomic number (the NESA data-sheet version you will use in exams).",
    frame: true
  }), /*#__PURE__*/React.createElement(GroupsPeriodsFigure, null)), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
      gap: 14
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "card"
  }, /*#__PURE__*/React.createElement("h4", null, "Groups (columns)"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: "0.92rem",
      color: "var(--ink-2)",
      margin: "6px 0 0"
    }
  }, "18 vertical columns. Elements in the same group behave similarly because they have the ", /*#__PURE__*/React.createElement("strong", null, "same number of outer electrons"), ".")), /*#__PURE__*/React.createElement("div", {
    className: "card"
  }, /*#__PURE__*/React.createElement("h4", null, "Periods (rows)"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: "0.92rem",
      color: "var(--ink-2)",
      margin: "6px 0 0"
    }
  }, "7 horizontal rows. Across a period, elements gradually change from metals (left) to non-metals (right)."))), /*#__PURE__*/React.createElement("h3", null, "Some special groups"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 6,
      flexWrap: "wrap",
      margin: "10px 0"
    }
  }, /*#__PURE__*/React.createElement(Button, {
    size: "sm",
    variant: filter === null ? "primary" : "default",
    onClick: function onClick() {
      return setFilter(null);
    }
  }, "Show all"), groups.map(function (g) {
    return /*#__PURE__*/React.createElement(Button, {
      key: g.id,
      size: "sm",
      variant: filter === g.id ? "primary" : "default",
      onClick: function onClick() {
        return setFilter(g.id);
      }
    }, g.label);
  })), filter && /*#__PURE__*/React.createElement("div", {
    style: {
      background: "var(--bg-2)",
      borderRadius: "var(--r)",
      padding: "12px 14px",
      fontSize: "0.92rem"
    }
  }, (_groups$find = groups.find(function (g) {
    return g.id === filter;
  })) === null || _groups$find === void 0 ? void 0 : _groups$find.note), /*#__PURE__*/React.createElement(PeriodicTable, {
    highlightCategory: filter,
    dimOthers: !!filter,
    selected: sel,
    onSelect: setSel
  }), /*#__PURE__*/React.createElement("h3", {
    style: {
      marginTop: 22
    }
  }, "Reactivity patterns"), /*#__PURE__*/React.createElement("ul", null, /*#__PURE__*/React.createElement("li", null, "Going ", /*#__PURE__*/React.createElement("strong", null, "DOWN"), " Group 1, reactivity ", /*#__PURE__*/React.createElement("strong", null, "INCREASES"), ". Caesium is far more reactive than lithium."), /*#__PURE__*/React.createElement("li", null, "Going ", /*#__PURE__*/React.createElement("strong", null, "DOWN"), " Group 17, reactivity ", /*#__PURE__*/React.createElement("strong", null, "DECREASES"), ". Fluorine is more reactive than iodine."), /*#__PURE__*/React.createElement("li", null, "Most reactive metal: bottom-left (caesium; francium is too rare and radioactive to test properly). Most reactive non-metal: top-right (fluorine)."), /*#__PURE__*/React.createElement("li", null, "Noble gases (Group 18): essentially unreactive.")), /*#__PURE__*/React.createElement(Callout, {
    kind: "tip",
    title: "Try this"
  }, "Click the \"Group 1\" filter above, then click an element on the table to see its details. Notice how the alkali metals run down the left column, and how they get more reactive the further down the column they sit."), sel && /*#__PURE__*/React.createElement(ElementDetail, {
    z: sel
  }), /*#__PURE__*/React.createElement("div", {
    className: "activity"
  }, /*#__PURE__*/React.createElement("div", {
    className: "activity-head"
  }, /*#__PURE__*/React.createElement("h4", null, "Quick check"), /*#__PURE__*/React.createElement("span", {
    className: "badge"
  }, "Quiz")), /*#__PURE__*/React.createElement(QuizMC, {
    question: "Sodium reacts violently with water. Based on periodic table patterns, would potassium (below sodium in Group 1) be more or less reactive?",
    options: ["Less reactive (it is a bigger atom)", "More reactive (reactivity INCREASES down Group 1)", "About the same", "It doesn't react with water"],
    correctIndex: 1,
    explain: "Going down Group 1, reactivity increases. Potassium reacts with water more vigorously than sodium \u2014 and caesium reacts almost explosively."
  }), /*#__PURE__*/React.createElement(QuizMC, {
    question: "Which group's elements are almost completely unreactive?",
    options: ["Group 1 (alkali metals)", "Group 2 (alkaline earths)", "Group 17 (halogens)", "Group 18 (noble gases)"],
    correctIndex: 3,
    explain: "Noble gases have full outer shells: they don't need to gain or lose electrons, so they barely react."
  })));
}

/* ------------------------------------------------------------
   Lesson 6.3.2 — Predicting properties
------------------------------------------------------------ */
function Lesson632(_ref6) {
  var udl = _ref6.udl;
  // Predict-before-peek with rubidium worked example
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("p", null, "Because the table is so well-organised, you can ", /*#__PURE__*/React.createElement("strong", null, "predict"), " what an element will be like just from its position \u2014 before you've ever seen it."), /*#__PURE__*/React.createElement("h3", null, "What the group tells you"), /*#__PURE__*/React.createElement("ul", null, /*#__PURE__*/React.createElement("li", null, "Whether it's a metal or non-metal (left = metal, right = non-metal, zig-zag = metalloid)."), /*#__PURE__*/React.createElement("li", null, "How many electrons are in its outer shell (Groups 1 and 2: the group number; Groups 13 to 18: the group number minus 10, except helium with 2)."), /*#__PURE__*/React.createElement("li", null, "What charge its ions will form (Group 1 \u2192 +1, Group 2 \u2192 +2, Group 17 \u2192 \u22121)."), /*#__PURE__*/React.createElement("li", null, "How it'll react.")), /*#__PURE__*/React.createElement("h3", null, "What the period tells you"), /*#__PURE__*/React.createElement("ul", null, /*#__PURE__*/React.createElement("li", null, "How many electron shells the atom has (Period 3 \u2192 3 shells)."), /*#__PURE__*/React.createElement("li", null, "Roughly how big the atom is (atoms get bigger going down a group, because each period adds a shell).")), /*#__PURE__*/React.createElement("div", {
    className: "activity"
  }, /*#__PURE__*/React.createElement("div", {
    className: "activity-head"
  }, /*#__PURE__*/React.createElement("h4", null, "Worked prediction: Rubidium (Rb)"), /*#__PURE__*/React.createElement("span", {
    className: "badge"
  }, "Predict")), /*#__PURE__*/React.createElement("p", {
    style: {
      marginTop: 0
    }
  }, "Rubidium is in ", /*#__PURE__*/React.createElement("strong", null, "Group 1, Period 5"), ". Without looking, predict its properties \u2014 then peek."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
      gap: 10
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "card"
  }, /*#__PURE__*/React.createElement("h4", null, "Predict:"), /*#__PURE__*/React.createElement("ul", {
    style: {
      paddingLeft: 18,
      margin: "6px 0",
      fontSize: "0.92rem"
    }
  }, /*#__PURE__*/React.createElement("li", null, "Metal or non-metal?"), /*#__PURE__*/React.createElement("li", null, "How many outer electrons?"), /*#__PURE__*/React.createElement("li", null, "How reactive?"), /*#__PURE__*/React.createElement("li", null, "How many electron shells?"))), /*#__PURE__*/React.createElement("div", {
    className: "card",
    style: {
      background: "var(--bg-2)"
    }
  }, /*#__PURE__*/React.createElement("h4", null, "Answers:"), /*#__PURE__*/React.createElement("ul", {
    style: {
      paddingLeft: 18,
      margin: "6px 0",
      fontSize: "0.92rem"
    }
  }, /*#__PURE__*/React.createElement("li", null, "Metal (it's on the left): ", /*#__PURE__*/React.createElement(BlurReveal, null, "soft, shiny alkali metal")), /*#__PURE__*/React.createElement("li", null, "Outer electrons: ", /*#__PURE__*/React.createElement(BlurReveal, null, "1 (Group 1)")), /*#__PURE__*/React.createElement("li", null, "Reactivity: ", /*#__PURE__*/React.createElement(BlurReveal, null, "very reactive \u2014 more than sodium")), /*#__PURE__*/React.createElement("li", null, "Shells: ", /*#__PURE__*/React.createElement(BlurReveal, null, "5 (Period 5)"))))), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: "0.88rem",
      color: "var(--ink-2)",
      marginTop: 10
    }
  }, "When rubidium was tested in real life, every one of these predictions turned out to be correct.")), /*#__PURE__*/React.createElement("div", {
    className: "activity"
  }, /*#__PURE__*/React.createElement("div", {
    className: "activity-head"
  }, /*#__PURE__*/React.createElement("h4", null, "Your turn"), /*#__PURE__*/React.createElement("span", {
    className: "badge"
  }, "Quiz")), /*#__PURE__*/React.createElement(QuizMC, {
    question: "Chlorine is in Group 17, Period 3. Predict: what charge will its ion form?",
    options: ["+1", "−1", "+7", "0"],
    correctIndex: 1,
    explain: "Group 17 elements (halogens) gain one electron to fill their outer shell \u2014 they form \u22121 ions like Cl\u207B."
  }), /*#__PURE__*/React.createElement(QuizMC, {
    question: "Element X is in Group 2, Period 4. How many electron shells does it have, and how many outer electrons?",
    options: ["2 shells, 4 outer electrons", "4 shells, 2 outer electrons", "2 shells, 2 outer electrons", "4 shells, 4 outer electrons"],
    correctIndex: 1,
    explain: "Period number = number of shells (4). For Groups 1 and 2, the group number tells you the number of outer electrons (2)."
  }), /*#__PURE__*/React.createElement(QuizMC, {
    question: "Two elements are both in Group 2 \u2014 one in Period 2, one in Period 5. Which is more reactive?",
    options: ["The Period 2 one", "The Period 5 one", "Same reactivity", "Neither reacts"],
    correctIndex: 1,
    explain: "In Groups 1 and 2, reactivity increases going DOWN. The Period 5 element (further down) is more reactive."
  })));
}

/* ------------------------------------------------------------
   Lesson 6.3.3 — Element symbols + matching game
------------------------------------------------------------ */
function SymbolGame() {
  var ELEMENTS = window.AppData.ELEMENTS;

  // Pool: common elements, weighted toward 'must-knows' + Latin-name oddballs
  var POOL = ["H", "He", "Li", "Be", "C", "N", "O", "F", "Ne", "Na", "Mg", "Al", "Si", "P", "S", "Cl", "K", "Ca", "Fe", "Cu", "Zn", "Ag", "Au", "Hg", "Pb", "Sn", "Sb", "W", "I", "Ar", "Br"];
  var _u63_useState5 = u63_useState(0),
    _u63_useState6 = _slicedToArray(_u63_useState5, 2),
    round = _u63_useState6[0],
    setRound = _u63_useState6[1];
  var _u63_useState7 = u63_useState([]),
    _u63_useState8 = _slicedToArray(_u63_useState7, 2),
    cards = _u63_useState8[0],
    setCards = _u63_useState8[1]; // {id, kind, text, sym, flipped, matched}
  var _u63_useState9 = u63_useState(null),
    _u63_useState0 = _slicedToArray(_u63_useState9, 2),
    first = _u63_useState0[0],
    setFirst = _u63_useState0[1];
  var _u63_useState1 = u63_useState(0),
    _u63_useState10 = _slicedToArray(_u63_useState1, 2),
    moves = _u63_useState10[0],
    setMoves = _u63_useState10[1];
  var _u63_useState11 = u63_useState(0),
    _u63_useState12 = _slicedToArray(_u63_useState11, 2),
    pairs = _u63_useState12[0],
    setPairs = _u63_useState12[1];
  var _u63_useState13 = u63_useState(false),
    _u63_useState14 = _slicedToArray(_u63_useState13, 2),
    done = _u63_useState14[0],
    setDone = _u63_useState14[1];
  var _u63_useState15 = u63_useState(false),
    _u63_useState16 = _slicedToArray(_u63_useState15, 2),
    busy = _u63_useState16[0],
    setBusy = _u63_useState16[1];
  var newGame = function newGame() {
    var count = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 8;
    var picks = [].concat(POOL).sort(function () {
      return Math.random() - 0.5;
    }).slice(0, count);
    var stack = [];
    picks.forEach(function (s, i) {
      var el = ELEMENTS.find(function (e) {
        return e.sym === s;
      });
      stack.push({
        id: "s-".concat(i),
        kind: "sym",
        text: s,
        sym: s,
        flipped: false,
        matched: false
      });
      stack.push({
        id: "n-".concat(i),
        kind: "name",
        text: el.name,
        sym: s,
        flipped: false,
        matched: false
      });
    });
    setCards(stack.sort(function () {
      return Math.random() - 0.5;
    }));
    setFirst(null);
    setBusy(false);
    setMoves(0);
    setPairs(0);
    setDone(false);
  };
  u63_useEffect(function () {
    newGame();
  }, [round]);
  var flip = function flip(idx) {
    if (busy || cards[idx].flipped || cards[idx].matched) return;
    var next = cards.map(function (c, i) {
      return i === idx ? _objectSpread(_objectSpread({}, c), {}, {
        flipped: true
      }) : c;
    });
    setCards(next);
    if (first === null) {
      setFirst(idx);
    } else {
      var a = next[first],
        b = next[idx];
      setMoves(function (m) {
        return m + 1;
      });
      setBusy(true);
      if (a.sym === b.sym && a.kind !== b.kind) {
        // Match
        setTimeout(function () {
          setCards(function (prev) {
            return prev.map(function (c, i) {
              return i === first || i === idx ? _objectSpread(_objectSpread({}, c), {}, {
                matched: true
              }) : c;
            });
          });
          setPairs(function (p) {
            var np = p + 1;
            if (np === next.length / 2) setDone(true);
            return np;
          });
          setFirst(null);
          setBusy(false);
        }, 400);
      } else {
        // No match
        setTimeout(function () {
          setCards(function (prev) {
            return prev.map(function (c, i) {
              return i === first || i === idx ? _objectSpread(_objectSpread({}, c), {}, {
                flipped: false
              }) : c;
            });
          });
          setFirst(null);
          setBusy(false);
        }, 800);
      }
    }
  };
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 10,
      alignItems: "center",
      marginBottom: 12,
      flexWrap: "wrap"
    }
  }, /*#__PURE__*/React.createElement(Chip, null, pairs, " / ", cards.length / 2, " pairs"), /*#__PURE__*/React.createElement(Chip, {
    variant: "info"
  }, moves, " moves"), /*#__PURE__*/React.createElement("span", {
    className: "spacer"
  }), /*#__PURE__*/React.createElement(Button, {
    size: "sm",
    variant: "ghost",
    icon: "reset",
    onClick: function onClick() {
      return setRound(function (r) {
        return r + 1;
      });
    }
  }, "New game")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fill, minmax(64px, 1fr))",
      gap: 8
    }
  }, cards.map(function (c, i) {
    return /*#__PURE__*/React.createElement("button", {
      key: c.id,
      onClick: function onClick() {
        return flip(i);
      },
      disabled: c.matched,
      "aria-label": c.flipped || c.matched ? c.text : "Hidden card",
      style: {
        aspectRatio: 1,
        borderRadius: 10,
        border: c.matched ? "1.5px solid var(--c-green)" : "1.5px solid var(--border)",
        background: c.matched ? "var(--c-green-soft)" : c.flipped ? "var(--paper)" : "linear-gradient(135deg, oklch(0.85 0.08 50) 0%, oklch(0.7 0.12 30) 100%)",
        cursor: c.matched ? "default" : "pointer",
        padding: 6,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontFamily: c.kind === "sym" ? "var(--font-display)" : "var(--font-body)",
        fontSize: c.kind === "sym" ? "1.6rem" : "0.8rem",
        fontWeight: c.kind === "sym" ? 400 : 600,
        color: c.matched ? "var(--c-green-deep)" : c.flipped ? "var(--ink)" : "transparent",
        transition: "all 200ms",
        textAlign: "center",
        lineHeight: 1
      }
    }, c.flipped || c.matched ? c.text : "");
  })), done && /*#__PURE__*/React.createElement(Callout, {
    kind: "tip",
    title: "Game complete!"
  }, "You matched all ", cards.length / 2, " pairs in ", moves, " moves. ", moves <= cards.length / 2 + 4 ? "Phenomenal memory." : moves <= cards.length ? "Solid work." : "You'll get faster next time!"));
}
function Lesson633(_ref7) {
  var udl = _ref7.udl;
  var latinNames = [["Sodium", "Na", "Natrium"], ["Potassium", "K", "Kalium"], ["Iron", "Fe", "Ferrum"], ["Copper", "Cu", "Cuprum"], ["Silver", "Ag", "Argentum"], ["Gold", "Au", "Aurum"], ["Mercury", "Hg", "Hydrargyrum"], ["Lead", "Pb", "Plumbum"], ["Tin", "Sn", "Stannum"], ["Antimony", "Sb", "Stibium"], ["Tungsten", "W", "Wolfram (German)"]];
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("p", null, "Every element has its own ", /*#__PURE__*/React.createElement("strong", null, "chemical symbol"), ". Chemists everywhere \u2014 Sydney, S\xE3o Paulo, Seoul \u2014 can read each other's formulas because the symbols are universal."), /*#__PURE__*/React.createElement("h3", null, "The 3 rules"), /*#__PURE__*/React.createElement("ol", {
    style: {
      margin: "6px 0 14px",
      paddingLeft: 22
    }
  }, /*#__PURE__*/React.createElement("li", null, "One or two letters."), /*#__PURE__*/React.createElement("li", null, "First letter ", /*#__PURE__*/React.createElement("strong", null, "always capital"), "."), /*#__PURE__*/React.createElement("li", null, "Second letter (if any) ", /*#__PURE__*/React.createElement("strong", null, "always lower case"), ".")), /*#__PURE__*/React.createElement(Callout, {
    kind: "warn",
    title: "Capitalisation matters!"
  }, /*#__PURE__*/React.createElement("span", {
    className: "mono"
  }, "CO"), " means carbon + oxygen (carbon monoxide). ", /*#__PURE__*/React.createElement("span", {
    className: "mono"
  }, "Co"), " means cobalt. Get the caps wrong and you've written a different chemical entirely."), /*#__PURE__*/React.createElement("h3", null, "Why some symbols look weird"), /*#__PURE__*/React.createElement("p", null, "Some symbols don't match the modern English name \u2014 they come from the element's old ", /*#__PURE__*/React.createElement("strong", null, "Latin name"), "."), /*#__PURE__*/React.createElement("table", null, /*#__PURE__*/React.createElement("thead", null, /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("th", null, "English name"), /*#__PURE__*/React.createElement("th", null, "Symbol"), /*#__PURE__*/React.createElement("th", null, "Latin origin"))), /*#__PURE__*/React.createElement("tbody", null, latinNames.map(function (_ref8, i) {
    var _ref9 = _slicedToArray(_ref8, 3),
      en = _ref9[0],
      sym = _ref9[1],
      lat = _ref9[2];
    return /*#__PURE__*/React.createElement("tr", {
      key: i
    }, /*#__PURE__*/React.createElement("td", null, en), /*#__PURE__*/React.createElement("td", null, /*#__PURE__*/React.createElement("span", {
      className: "formula",
      style: {
        fontSize: "1.1rem"
      }
    }, sym)), /*#__PURE__*/React.createElement("td", null, /*#__PURE__*/React.createElement("em", null, lat)));
  }))), /*#__PURE__*/React.createElement("div", {
    className: "activity"
  }, /*#__PURE__*/React.createElement("div", {
    className: "activity-head"
  }, /*#__PURE__*/React.createElement("h4", null, "Symbol matching memory game"), /*#__PURE__*/React.createElement("span", {
    className: "badge"
  }, "Game")), /*#__PURE__*/React.createElement("p", {
    style: {
      marginTop: 0
    }
  }, "Flip cards to match each element name with its symbol. New game shuffles a fresh set."), /*#__PURE__*/React.createElement(SymbolGame, null)));
}

/* ------------------------------------------------------------
   Lesson 6.3.4 — Chemical formulas decoder
------------------------------------------------------------ */
function FormulaDecoder() {
  var _window$AppData = window.AppData,
    COMPOUNDS = _window$AppData.COMPOUNDS,
    getElementBySym = _window$AppData.getElementBySym;
  var _u63_useState17 = u63_useState(0),
    _u63_useState18 = _slicedToArray(_u63_useState17, 2),
    idx = _u63_useState18[0],
    setIdx = _u63_useState18[1];
  var _u63_useState19 = u63_useState({}),
    _u63_useState20 = _slicedToArray(_u63_useState19, 2),
    answer = _u63_useState20[0],
    setAnswer = _u63_useState20[1]; // sym -> count
  var _u63_useState21 = u63_useState(false),
    _u63_useState22 = _slicedToArray(_u63_useState21, 2),
    checked = _u63_useState22[0],
    setChecked = _u63_useState22[1];
  var cur = COMPOUNDS[idx];
  var symbolsInFormula = cur.parts.map(function (p) {
    return p[0];
  });
  var next = function next() {
    setIdx((idx + 1) % COMPOUNDS.length);
    setAnswer({});
    setChecked(false);
  };
  var prev = function prev() {
    setIdx((idx - 1 + COMPOUNDS.length) % COMPOUNDS.length);
    setAnswer({});
    setChecked(false);
  };
  var allRight = checked && Object.keys(answer).length === cur.parts.length && cur.parts.every(function (_ref0) {
    var _ref1 = _slicedToArray(_ref0, 2),
      s = _ref1[0],
      n = _ref1[1];
    return answer[s] === n;
  });

  // Distractor pool
  var distractors = ["Mg", "Fe", "Cu", "Zn", "P", "B", "Br", "I", "Ag", "Au", "Pb", "Sn", "Ba", "Si", "He", "Ne", "Ar"];
  var symbolBank = u63_useMemo(function () {
    var real = symbolsInFormula;
    var fake = distractors.filter(function (s) {
      return !real.includes(s);
    }).slice(0, 6 - real.length);
    return [].concat(_toConsumableArray(real), _toConsumableArray(fake)).sort(function () {
      return Math.random() - 0.5;
    });
  }, [idx]);
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      marginBottom: 12
    }
  }, /*#__PURE__*/React.createElement(Button, {
    size: "sm",
    icon: "left",
    onClick: prev
  }, "Prev"), /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: "center"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: "0.8rem",
      color: "var(--ink-muted)"
    }
  }, "Compound ", idx + 1, " of ", COMPOUNDS.length), /*#__PURE__*/React.createElement("div", {
    className: "formula",
    style: {
      fontSize: "2.6rem"
    }
  }, renderFormula(cur.f)), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: "0.9rem",
      color: "var(--ink-2)"
    }
  }, cur.name)), /*#__PURE__*/React.createElement(Button, {
    size: "sm",
    iconRight: "right",
    onClick: next
  }, "Next")), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: "0.92rem",
      color: "var(--ink-2)"
    }
  }, "Click each element symbol to add it. Use + and \u2212 to set how many atoms."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexWrap: "wrap",
      gap: 8,
      marginBottom: 12
    }
  }, symbolBank.map(function (s) {
    var placed = !!answer[s];
    return /*#__PURE__*/React.createElement("button", {
      key: s,
      className: "drag-chip",
      style: {
        background: placed ? "var(--c-orange-soft)" : "var(--paper)",
        borderColor: placed ? "var(--c-orange-deep)" : "var(--border-strong)"
      },
      onClick: function onClick() {
        return setAnswer(_objectSpread(_objectSpread({}, answer), {}, _defineProperty({}, s, (answer[s] || 0) + 1)));
      }
    }, s);
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fill, minmax(160px, 1fr))",
      gap: 8
    }
  }, Object.entries(answer).map(function (_ref10) {
    var _ref11 = _slicedToArray(_ref10, 2),
      sym = _ref11[0],
      count = _ref11[1];
    var el = getElementBySym(sym);
    return /*#__PURE__*/React.createElement("div", {
      key: sym,
      className: "card",
      style: {
        padding: 10,
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center"
      }
    }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: "var(--font-display)",
        fontSize: "1.3rem"
      }
    }, sym), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: "0.7rem",
        color: "var(--ink-muted)"
      }
    }, (el === null || el === void 0 ? void 0 : el.name) || "?")), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        alignItems: "center",
        gap: 4
      }
    }, /*#__PURE__*/React.createElement(Button, {
      size: "sm",
      variant: "ghost",
      onClick: function onClick() {
        var next = _objectSpread(_objectSpread({}, answer), {}, _defineProperty({}, sym, count - 1));
        if (next[sym] <= 0) delete next[sym];
        setAnswer(next);
      }
    }, "\u2212"), /*#__PURE__*/React.createElement("span", {
      style: {
        minWidth: 22,
        textAlign: "center",
        fontFamily: "var(--font-mono)",
        fontWeight: 600
      }
    }, count), /*#__PURE__*/React.createElement(Button, {
      size: "sm",
      variant: "ghost",
      onClick: function onClick() {
        return setAnswer(_objectSpread(_objectSpread({}, answer), {}, _defineProperty({}, sym, count + 1)));
      }
    }, "+")));
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 8,
      marginTop: 12
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    onClick: function onClick() {
      return setChecked(true);
    }
  }, "Check"), /*#__PURE__*/React.createElement(Button, {
    variant: "ghost",
    icon: "reset",
    onClick: function onClick() {
      setAnswer({});
      setChecked(false);
    }
  }, "Clear")), checked && /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 12
    }
  }, allRight ? /*#__PURE__*/React.createElement(Callout, {
    kind: "tip",
    title: "\u2713 Got it!"
  }, /*#__PURE__*/React.createElement("span", {
    className: "formula"
  }, renderFormula(cur.f)), " is ", /*#__PURE__*/React.createElement("strong", null, cur.name), ". ", cur.use) : /*#__PURE__*/React.createElement(Callout, {
    kind: "warn",
    title: "Close \u2014 but not quite."
  }, "The correct breakdown is:", /*#__PURE__*/React.createElement("ul", {
    style: {
      margin: "6px 0 0",
      paddingLeft: 20
    }
  }, cur.parts.map(function (_ref12) {
    var _ref13 = _slicedToArray(_ref12, 2),
      s = _ref13[0],
      n = _ref13[1];
    var el = window.AppData.getElementBySym(s);
    return /*#__PURE__*/React.createElement("li", {
      key: s
    }, /*#__PURE__*/React.createElement("strong", null, n, " \xD7 ", s), " (", el === null || el === void 0 ? void 0 : el.name, ")");
  })))));
}
function renderFormula(f) {
  // Convert "H2O" → H<sub>2</sub>O
  var out = [];
  var cur = "";
  for (var i = 0; i < f.length; i++) {
    var ch = f[i];
    if (/[0-9]/.test(ch)) {
      if (cur) {
        out.push(/*#__PURE__*/React.createElement("span", {
          key: i + "c"
        }, cur));
        cur = "";
      }
      var n = ch;
      while (i + 1 < f.length && /[0-9]/.test(f[i + 1])) {
        n += f[++i];
      }
      out.push(/*#__PURE__*/React.createElement("sub", {
        key: i + "s"
      }, n));
    } else {
      cur += ch;
    }
  }
  if (cur) out.push(/*#__PURE__*/React.createElement("span", {
    key: "e"
  }, cur));
  return out;
}
function Lesson634(_ref14) {
  var udl = _ref14.udl;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("p", null, "A ", /*#__PURE__*/React.createElement("strong", null, "chemical formula"), " packs a lot into a few characters. It tells you which elements are in a compound and exactly how many atoms of each."), /*#__PURE__*/React.createElement("h3", null, "How to read one"), /*#__PURE__*/React.createElement("ul", null, /*#__PURE__*/React.createElement("li", null, "Each ", /*#__PURE__*/React.createElement("strong", null, "symbol"), " = one element."), /*#__PURE__*/React.createElement("li", null, "A small number (subscript) after a symbol = how many atoms of that element."), /*#__PURE__*/React.createElement("li", null, "No number = 1 atom.")), /*#__PURE__*/React.createElement("table", null, /*#__PURE__*/React.createElement("thead", null, /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("th", null, "Formula"), /*#__PURE__*/React.createElement("th", null, "Elements"), /*#__PURE__*/React.createElement("th", null, "How many of each"))), /*#__PURE__*/React.createElement("tbody", null, /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("td", {
    className: "formula",
    style: {
      fontSize: "1.05rem"
    }
  }, renderFormula("H2O")), /*#__PURE__*/React.createElement("td", null, "Hydrogen, Oxygen"), /*#__PURE__*/React.createElement("td", null, "2 H, 1 O")), /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("td", {
    className: "formula",
    style: {
      fontSize: "1.05rem"
    }
  }, renderFormula("CO2")), /*#__PURE__*/React.createElement("td", null, "Carbon, Oxygen"), /*#__PURE__*/React.createElement("td", null, "1 C, 2 O")), /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("td", {
    className: "formula",
    style: {
      fontSize: "1.05rem"
    }
  }, renderFormula("NaCl")), /*#__PURE__*/React.createElement("td", null, "Sodium, Chlorine"), /*#__PURE__*/React.createElement("td", null, "1 Na, 1 Cl")), /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("td", {
    className: "formula",
    style: {
      fontSize: "1.05rem"
    }
  }, renderFormula("CaCO3")), /*#__PURE__*/React.createElement("td", null, "Calcium, Carbon, Oxygen"), /*#__PURE__*/React.createElement("td", null, "1 Ca, 1 C, 3 O")), /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("td", {
    className: "formula",
    style: {
      fontSize: "1.05rem"
    }
  }, renderFormula("C6H12O6")), /*#__PURE__*/React.createElement("td", null, "Carbon, Hydrogen, Oxygen"), /*#__PURE__*/React.createElement("td", null, "6 C, 12 H, 6 O")))), /*#__PURE__*/React.createElement(Callout, {
    kind: "tip",
    title: "Stuck on a symbol?"
  }, "Use the periodic table! Don't recognise ", /*#__PURE__*/React.createElement("span", {
    className: "mono"
  }, "K"), "? Look it up \u2014 that's potassium (from Latin ", /*#__PURE__*/React.createElement("em", null, "kalium"), ")."), /*#__PURE__*/React.createElement("div", {
    className: "activity"
  }, /*#__PURE__*/React.createElement("div", {
    className: "activity-head"
  }, /*#__PURE__*/React.createElement("h4", null, "Formula decoder"), /*#__PURE__*/React.createElement("span", {
    className: "badge"
  }, "Game")), /*#__PURE__*/React.createElement("p", {
    style: {
      marginTop: 0
    }
  }, "Twelve real compounds. For each, click the elements you see in the formula and set how many of each."), /*#__PURE__*/React.createElement(FormulaDecoder, null)));
}

/* ------------------------------------------------------------
   Lesson 6.3.5 — Identifying elements + flame test sim
------------------------------------------------------------ */
function FlameTestSim() {
  var FLAME_TESTS = window.AppData.FLAME_TESTS;
  var _u63_useState23 = u63_useState(null),
    _u63_useState24 = _slicedToArray(_u63_useState23, 2),
    picked = _u63_useState24[0],
    setPicked = _u63_useState24[1];
  var _u63_useState25 = u63_useState("explore"),
    _u63_useState26 = _slicedToArray(_u63_useState25, 2),
    mode = _u63_useState26[0],
    setMode = _u63_useState26[1]; // explore | guess
  var _u63_useState27 = u63_useState(null),
    _u63_useState28 = _slicedToArray(_u63_useState27, 2),
    guess = _u63_useState28[0],
    setGuess = _u63_useState28[1];
  var _u63_useState29 = u63_useState(null),
    _u63_useState30 = _slicedToArray(_u63_useState29, 2),
    target = _u63_useState30[0],
    setTarget = _u63_useState30[1];
  var _u63_useState31 = u63_useState(0),
    _u63_useState32 = _slicedToArray(_u63_useState31, 2),
    score = _u63_useState32[0],
    setScore = _u63_useState32[1];
  var _u63_useState33 = u63_useState(0),
    _u63_useState34 = _slicedToArray(_u63_useState33, 2),
    shown = _u63_useState34[0],
    setShown = _u63_useState34[1];
  var current = mode === "explore" ? FLAME_TESTS.find(function (f) {
    return f.sym === picked;
  }) : target;
  var newGuess = function newGuess() {
    var pick = FLAME_TESTS[Math.floor(Math.random() * FLAME_TESTS.length)];
    setTarget(pick);
    setGuess(null);
    setShown(function (s) {
      return s + 1;
    });
  };
  u63_useEffect(function () {
    if (mode === "guess" && !target) newGuess();
  }, [mode]);
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 8,
      marginBottom: 12
    }
  }, /*#__PURE__*/React.createElement(Button, {
    size: "sm",
    variant: mode === "explore" ? "primary" : "default",
    onClick: function onClick() {
      setMode("explore");
      setPicked(null);
    }
  }, "Explore mode"), /*#__PURE__*/React.createElement(Button, {
    size: "sm",
    variant: mode === "guess" ? "primary" : "default",
    onClick: function onClick() {
      setMode("guess");
      setGuess(null);
      setScore(0);
      setShown(0);
      newGuess();
    }
  }, "Guess mode"), mode === "guess" && /*#__PURE__*/React.createElement("span", {
    className: "spacer"
  }), mode === "guess" && /*#__PURE__*/React.createElement(Chip, null, score, " / ", shown, " correct")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
      gap: 16
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      aspectRatio: "3 / 4",
      maxHeight: 420,
      background: "linear-gradient(180deg, oklch(0.15 0.02 250) 0%, oklch(0.10 0.01 250) 100%)",
      borderRadius: "var(--r)",
      position: "relative",
      overflow: "hidden",
      display: "flex",
      alignItems: "flex-end",
      justifyContent: "center"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      bottom: 20,
      width: 50,
      left: "50%",
      marginLeft: -25,
      background: "oklch(0.3 0.01 250)",
      height: 80,
      borderRadius: 4,
      zIndex: 2
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      bottom: 100,
      width: 40,
      left: "50%",
      marginLeft: -20,
      background: "oklch(0.25 0.01 250)",
      height: 16,
      borderRadius: 4,
      zIndex: 2
    }
  }), current ? /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      bottom: 116,
      left: "50%",
      transform: "translateX(-50%)",
      width: 50,
      height: 130,
      background: "radial-gradient(ellipse at center bottom, ".concat(current.hex, " 0%, ").concat(current.hex.replace(/oklch\(([^)]+)\)/, function (m, p) {
        return "oklch(".concat(p.split(" ").map(function (v, i) {
          return i === 2 ? +v + 0 : v;
        }).join(" "), ")");
      }), " 30%, transparent 80%)"),
      filter: "blur(8px)",
      opacity: 0.95,
      animation: "flicker 2s ease-in-out infinite alternate"
    }
  }) : /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      bottom: 116,
      left: "50%",
      transform: "translateX(-50%)",
      width: 28,
      height: 80,
      background: "radial-gradient(ellipse at center bottom, oklch(0.8 0.18 240) 0%, oklch(0.6 0.18 220) 40%, transparent 80%)",
      filter: "blur(6px)",
      opacity: 0.9
    }
  }), /*#__PURE__*/React.createElement("style", null, "@keyframes flicker { 0% { transform: translateX(-50%) scaleY(1); } 100% { transform: translateX(-50%) scaleY(1.08); } }"), current && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      top: 10,
      left: 10,
      color: "white",
      fontFamily: "var(--font-mono)",
      fontSize: "0.8rem",
      zIndex: 3
    }
  }, mode === "explore" ? "".concat(current.name, " (").concat(current.sym, ")") : "Unknown sample")), /*#__PURE__*/React.createElement("div", null, mode === "explore" ? /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("h4", {
    style: {
      marginTop: 0
    }
  }, "Pick a metal salt"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(2, 1fr)",
      gap: 6
    }
  }, FLAME_TESTS.map(function (f) {
    return /*#__PURE__*/React.createElement(Button, {
      key: f.sym,
      size: "sm",
      variant: picked === f.sym ? "primary" : "default",
      onClick: function onClick() {
        return setPicked(f.sym);
      }
    }, f.name, " (", f.sym, ")");
  })), current && /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 14
    }
  }, /*#__PURE__*/React.createElement(Chip, {
    style: {
      background: current.hex,
      color: "white"
    }
  }, current.colour), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: "0.88rem",
      color: "var(--ink-2)",
      marginTop: 8
    }
  }, current.note))) : /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("h4", {
    style: {
      marginTop: 0
    }
  }, "What metal is it?"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: "0.88rem",
      color: "var(--ink-2)",
      margin: "4px 0 10px"
    }
  }, "The flame looks like ", /*#__PURE__*/React.createElement("strong", null, current === null || current === void 0 ? void 0 : current.colour.toLowerCase()), ". Which metal?"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(2, 1fr)",
      gap: 6
    }
  }, FLAME_TESTS.map(function (f) {
    var isCorrect = guess && guess === target.sym && f.sym === target.sym;
    var isWrong = guess === f.sym && f.sym !== target.sym;
    return /*#__PURE__*/React.createElement(Button, {
      key: f.sym,
      size: "sm",
      variant: "default",
      style: {
        borderColor: isCorrect ? "var(--c-green)" : isWrong ? "var(--c-red)" : "var(--border)",
        background: isCorrect ? "var(--c-green-soft)" : isWrong ? "var(--c-red-soft)" : "var(--paper)"
      },
      onClick: function onClick() {
        if (guess) return;
        setGuess(f.sym);
        if (f.sym === target.sym) setScore(function (s) {
          return s + 1;
        });
      },
      disabled: !!guess
    }, f.name);
  })), guess && /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 12
    }
  }, guess === target.sym ? /*#__PURE__*/React.createElement(Callout, {
    kind: "tip",
    title: "\u2713 Yes!"
  }, target.note) : /*#__PURE__*/React.createElement(Callout, {
    kind: "warn",
    title: "Not quite"
  }, "It's ", target.name, " \u2014 ", target.note), /*#__PURE__*/React.createElement(Button, {
    size: "sm",
    variant: "primary",
    onClick: newGuess,
    style: {
      marginTop: 8
    }
  }, "Next sample"))))));
}
function Lesson635(_ref15) {
  var udl = _ref15.udl;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("p", null, "You've classified samples on appearance. But how do ", /*#__PURE__*/React.createElement("em", null, "real"), " chemists check if an unknown is a metal? They run multiple tests."), /*#__PURE__*/React.createElement("h3", null, "The five common tests"), /*#__PURE__*/React.createElement("ol", {
    style: {
      paddingLeft: 22
    }
  }, /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("strong", null, "Conductivity:"), " battery + bulb + sample. Metals light the bulb. (Watch out \u2014 graphite does too!)"), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("strong", null, "Malleability:"), " tap gently with a hammer. Metals flatten, non-metals shatter."), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("strong", null, "Reaction with acid:"), " reactive metals (like magnesium, zinc and iron) fizz in dilute hydrochloric acid, producing hydrogen gas. Non-metals don't."), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("strong", null, "Appearance:"), " metals shine when freshly polished. (Some non-metals like iodine are shiny too \u2014 not foolproof.)"), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("strong", null, "Flame test:"), " some metals colour a flame distinctively. This identifies ", /*#__PURE__*/React.createElement("em", null, "which"), " metal, not just whether it's a metal.")), /*#__PURE__*/React.createElement(CCImage, {
    src: "assets/fireworks.jpg",
    source: "illustration",
    alt: "Hand-drawn night sky over a city with five firework bursts: red, yellow, green, blue-green and lilac.",
    caption: "Fireworks are flame tests on a giant scale \u2014 each colour comes from a different metal compound.",
    frame: true
  }), /*#__PURE__*/React.createElement("div", {
    className: "activity"
  }, /*#__PURE__*/React.createElement("div", {
    className: "activity-head"
  }, /*#__PURE__*/React.createElement("h4", null, "Flame test simulator"), /*#__PURE__*/React.createElement("span", {
    className: "badge"
  }, "Sim")), /*#__PURE__*/React.createElement("p", {
    style: {
      marginTop: 0
    }
  }, "Drop a metal salt into a Bunsen flame and watch the colour. Try ", /*#__PURE__*/React.createElement("strong", null, "Explore mode"), " first to learn the colours, then switch to ", /*#__PURE__*/React.createElement("strong", null, "Guess mode"), "."), /*#__PURE__*/React.createElement(FlameTestSim, null)), /*#__PURE__*/React.createElement(Callout, {
    kind: "fact",
    title: "Where you've seen this"
  }, "Fireworks! Red bursts use strontium (or lithium). Green = barium. Yellow = sodium. Orange = calcium. Blue comes from copper compounds. Most firework colours work like a flame test on a massive scale."), /*#__PURE__*/React.createElement("div", {
    className: "activity"
  }, /*#__PURE__*/React.createElement("div", {
    className: "activity-head"
  }, /*#__PURE__*/React.createElement("h4", null, "Quick check"), /*#__PURE__*/React.createElement("span", {
    className: "badge"
  }, "Quiz")), /*#__PURE__*/React.createElement(QuizMC, {
    question: "A student tests an unknown shiny sample. It conducts electricity but SHATTERS when hit. What is it most likely?",
    options: ["A metal", "A non-metal", "A metalloid", "A liquid"],
    correctIndex: 2,
    explain: "Shiny + conductive (a bit) + brittle = metalloid (e.g. silicon, germanium). Real metals would bend, not shatter."
  }), /*#__PURE__*/React.createElement(QuizMC, {
    question: "Why is doing several tests more reliable than just one?",
    options: ["Because tests are sometimes wrong", "Some elements share a single property with another group — multiple tests cross-check the classification", "Because chemists like to be busy", "Because some elements change between tests"],
    correctIndex: 1,
    explain: "Graphite conducts electricity (like a metal) but is brittle (like a non-metal). You'd never spot that with just one test."
  })));
}

/* ------------------------------------------------------------
   Lesson 6.3.6 — Modelling the first 18 elements
------------------------------------------------------------ */
function Lesson636(_ref16) {
  var udl = _ref16.udl;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("p", null, "The most important pattern in chemistry: as you walk along the periodic table from element 1 to 18, you add ", /*#__PURE__*/React.createElement("strong", null, "one proton and one electron each step"), ". The shells fill up in a predictable way \u2014 and that pattern is the reason groups behave the same."), /*#__PURE__*/React.createElement("h3", null, "The rules, once more"), /*#__PURE__*/React.createElement("ul", null, /*#__PURE__*/React.createElement("li", null, "Shell 1: max 2 electrons."), /*#__PURE__*/React.createElement("li", null, "Shell 2: max 8 electrons."), /*#__PURE__*/React.createElement("li", null, "Shell 3: holds 8 electrons before shell 4 starts (for the first 20 elements)."), /*#__PURE__*/React.createElement("li", null, "Always fill ", /*#__PURE__*/React.createElement("strong", null, "inside-out"), ".")), /*#__PURE__*/React.createElement("div", {
    className: "activity"
  }, /*#__PURE__*/React.createElement("div", {
    className: "activity-head"
  }, /*#__PURE__*/React.createElement("h4", null, "Build the first 18"), /*#__PURE__*/React.createElement("span", {
    className: "badge"
  }, "Sim")), /*#__PURE__*/React.createElement("p", {
    style: {
      marginTop: 0
    }
  }, "Pick an element, then add the right number of protons, neutrons and electrons. Or hit Auto-build to watch the atom assemble itself."), /*#__PURE__*/React.createElement(AtomBuilder, null)), /*#__PURE__*/React.createElement(Callout, {
    kind: "fact",
    title: "Patterns you should see"
  }, "H, Li, Na all have ", /*#__PURE__*/React.createElement("strong", null, "1 outer electron"), " \u2192 same group, same behaviour. He, Ne, Ar all have ", /*#__PURE__*/React.createElement("strong", null, "full outer shells"), " \u2192 noble gases, unreactive. F, Cl both have ", /*#__PURE__*/React.createElement("strong", null, "7 outer electrons"), " \u2192 halogens, super reactive."), /*#__PURE__*/React.createElement("div", {
    className: "activity"
  }, /*#__PURE__*/React.createElement("div", {
    className: "activity-head"
  }, /*#__PURE__*/React.createElement("h4", null, "Quick check"), /*#__PURE__*/React.createElement("span", {
    className: "badge"
  }, "Quiz")), /*#__PURE__*/React.createElement(QuizMC, {
    question: "An atom has the electron arrangement 2, 8, 7. Which element is it?",
    options: ["Sodium (Na)", "Argon (Ar)", "Chlorine (Cl)", "Oxygen (O)"],
    correctIndex: 2,
    explain: "2 + 8 + 7 = 17 electrons, so this IS chlorine (Z = 17). Its 7 outer electrons put it in Group 17 with fluorine."
  }), /*#__PURE__*/React.createElement(QuizMC, {
    question: "Argon has 8 electrons in its outer shell. Why is it so unreactive?",
    options: ["It's too heavy to react", "Its outer shell is full — it doesn't need to gain or lose electrons", "It only exists at high temperatures", "It's poisonous"],
    correctIndex: 1,
    explain: "A full outer shell is very stable. Argon (like the other noble gases) has no tendency to gain, lose or share electrons, so it almost never forms compounds."
  })));
}

/* ------------------------------------------------------------
   Lesson 6.3.7 — History of the periodic table
------------------------------------------------------------ */
function Lesson637(_ref17) {
  var udl = _ref17.udl;
  var steps = [{
    yr: 1817,
    who: "Döbereiner",
    contrib: "Triads — grouped elements in threes with similar properties (e.g. Li / Na / K)."
  }, {
    yr: 1864,
    who: "Newlands",
    contrib: "Law of Octaves — every 8th element seemed similar, like notes in a scale."
  }, {
    yr: 1869,
    who: "Mendeleev",
    contrib: "First widely-accepted periodic table. Left gaps for unknown elements — and predicted their properties."
  }, {
    yr: 1913,
    who: "Moseley",
    contrib: "Showed elements should be ordered by ATOMIC NUMBER (protons), not mass."
  }];
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("p", null, "The periodic table didn't appear fully-formed. It took a century of pattern-spotting, near-misses, and one brave dreamer named Mendeleev."), /*#__PURE__*/React.createElement("div", {
    className: "timeline"
  }, steps.map(function (s, i) {
    return /*#__PURE__*/React.createElement("div", {
      key: i,
      className: "tl-step"
    }, /*#__PURE__*/React.createElement("div", {
      className: "yr"
    }, s.yr), /*#__PURE__*/React.createElement("div", {
      className: "who"
    }, s.who), /*#__PURE__*/React.createElement("div", {
      className: "name",
      style: {
        fontSize: "0.78rem"
      }
    }, s.contrib));
  })), /*#__PURE__*/React.createElement("h3", null, "Why Mendeleev's table worked when others failed"), /*#__PURE__*/React.createElement("ul", null, /*#__PURE__*/React.createElement("li", null, "He arranged elements by atomic mass ", /*#__PURE__*/React.createElement("em", null, "and"), " chemical properties \u2014 not just mass."), /*#__PURE__*/React.createElement("li", null, "He left ", /*#__PURE__*/React.createElement("strong", null, "gaps"), " where no known element fitted, and ", /*#__PURE__*/React.createElement("strong", null, "predicted"), " what would eventually fill them."), /*#__PURE__*/React.createElement("li", null, "Within about 17 years, three of those predicted elements (gallium 1875, scandium 1879, germanium 1886) had been discovered, and their properties matched his predictions closely."), /*#__PURE__*/React.createElement("li", null, "He sometimes swapped elements out of strict mass order if their behaviour demanded it \u2014 a bold call that later turned out to be right.")), /*#__PURE__*/React.createElement(Callout, {
    kind: "fact",
    title: "The fix from Moseley (1913)"
  }, "Henry Moseley showed the real ordering principle is ", /*#__PURE__*/React.createElement("strong", null, "atomic number"), " (number of protons), not mass. Reorder by protons and every awkward swap Mendeleev made fixes itself. Moseley was killed at Gallipoli aged 27 \u2014 a huge loss to science."), /*#__PURE__*/React.createElement("p", null, "The modern table is still being added to \u2014 elements 113\u2013118 were officially named between 2012 and 2016, all made in atom-smashing labs."), /*#__PURE__*/React.createElement("div", {
    className: "activity"
  }, /*#__PURE__*/React.createElement("div", {
    className: "activity-head"
  }, /*#__PURE__*/React.createElement("h4", null, "Quick check"), /*#__PURE__*/React.createElement("span", {
    className: "badge"
  }, "Quiz")), /*#__PURE__*/React.createElement(QuizMC, {
    question: "Why was Mendeleev's decision to leave GAPS in his table so important?",
    options: ["It made the table prettier", "It let him predict undiscovered elements — and their predicted properties matched when they were found", "He didn't know where to put some elements", "He wanted to test his students"],
    correctIndex: 1,
    explain: "The gaps turned the table from a filing system into a prediction machine. Gallium, scandium and germanium all matched his predictions."
  })));
}
Object.assign(window, {
  Lesson631: Lesson631,
  Lesson632: Lesson632,
  Lesson633: Lesson633,
  Lesson634: Lesson634,
  Lesson635: Lesson635,
  Lesson636: Lesson636,
  Lesson637: Lesson637,
  FormulaDecoder: FormulaDecoder,
  SymbolGame: SymbolGame,
  FlameTestSim: FlameTestSim,
  renderFormula: renderFormula
});

/* Generated from lessons-61.jsx by tools/build.js. Edit the .jsx, not this file. */
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
   Unit 6.1 — Classification of matter
   3 lessons: elements, metals/non-metals/metalloids classifier, properties→uses
   ============================================================ */

var _React = React,
  u61_useState = _React.useState,
  u61_useMemo = _React.useMemo,
  u61_useEffect = _React.useEffect;

/* ------------------------------------------------------------
   Lesson 6.1.1 — What's an element?
------------------------------------------------------------ */
function Lesson611(_ref) {
  var udl = _ref.udl;
  var commonElements = [{
    sym: "O",
    name: "Oxygen",
    where: "21% of the air. Every breath you take."
  }, {
    sym: "C",
    name: "Carbon",
    where: "Pencil lead, diamonds, all living things."
  }, {
    sym: "Fe",
    name: "Iron",
    where: "Steel, bike frames, your blood."
  }, {
    sym: "Al",
    name: "Aluminium",
    where: "Drink cans, cooking foil, window frames."
  }, {
    sym: "Cu",
    name: "Copper",
    where: "Electrical wires, water pipes, coins."
  }, {
    sym: "Au",
    name: "Gold",
    where: "Jewellery, electronics, Olympic medals."
  }, {
    sym: "He",
    name: "Helium",
    where: "Party balloons. MRI machines."
  }, {
    sym: "N",
    name: "Nitrogen",
    where: "78% of the air. Fertilisers."
  }, {
    sym: "Si",
    name: "Silicon",
    where: "Computer chips. Glass. Sand."
  }, {
    sym: "Ca",
    name: "Calcium",
    where: "Bones, teeth, milk, chalk."
  }];
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("p", null, "An ", /*#__PURE__*/React.createElement(Term, null, "element"), " is a pure substance made of just one type of ", /*#__PURE__*/React.createElement(Term, null, "atom"), ". They're the building blocks of everything \u2014 your body, the air, your phone, the chair you're sitting on. Everything."), /*#__PURE__*/React.createElement("p", null, udl.plain ? "There are 118 known elements. About 94 of them are found naturally on Earth — the rest are made by scientists in labs." : "There are 118 known elements, but only about 94 occur naturally on Earth. Each has its own unique name and chemical symbol (gold is Au, oxygen is O, iron is Fe). Scientists have arranged them all into the periodic table — you'll meet it in Unit 6.3."), /*#__PURE__*/React.createElement("h3", null, "What pure elements look like"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: "0.92rem",
      color: "var(--ink-2)"
    }
  }, "Most of the time, elements turn up combined with other elements. But sometimes you can find a pure sample \u2014 and they look surprisingly different from each other."), /*#__PURE__*/React.createElement(CCImage, {
    src: "assets/pdf-img-p5.jpg",
    caption: "Six familiar metals \u2014 iron, aluminium, copper, silver, gold, mercury \u2014 and the key properties they share.",
    frame: true,
    style: {
      margin: "10px 0 18px"
    }
  }), /*#__PURE__*/React.createElement("h3", null, "Some you'd recognise"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))",
      gap: 10,
      margin: "10px 0 18px"
    }
  }, commonElements.map(function (e) {
    return /*#__PURE__*/React.createElement("div", {
      key: e.sym,
      className: "card",
      style: {
        padding: 14
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        alignItems: "baseline",
        gap: 8
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: "var(--font-display)",
        fontSize: "1.6rem",
        color: "var(--c-orange-deep)"
      }
    }, e.sym), /*#__PURE__*/React.createElement("span", {
      style: {
        fontWeight: 600
      }
    }, e.name)), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: "0.85rem",
        color: "var(--ink-2)",
        marginTop: 4
      }
    }, e.where));
  })), /*#__PURE__*/React.createElement("h3", null, "Elements vs ", /*#__PURE__*/React.createElement(Term, null, "compound"), "s vs ", /*#__PURE__*/React.createElement(Term, null, "mixture"), "s"), /*#__PURE__*/React.createElement("div", {
    className: "row",
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(3, 1fr)",
      gap: 12
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "card"
  }, /*#__PURE__*/React.createElement(Chip, {
    variant: "info"
  }, "Element"), /*#__PURE__*/React.createElement("h4", {
    style: {
      margin: "8px 0 4px"
    }
  }, "One kind of atom"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: "0.92rem",
      color: "var(--ink-2)"
    }
  }, "A gold ring. A copper wire. Pure oxygen gas. Just one type of atom, repeated billions of times.")), /*#__PURE__*/React.createElement("div", {
    className: "card"
  }, /*#__PURE__*/React.createElement(Chip, {
    variant: "fact"
  }, "Compound"), /*#__PURE__*/React.createElement("h4", {
    style: {
      margin: "8px 0 4px"
    }
  }, "Atoms joined chemically"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: "0.92rem",
      color: "var(--ink-2)"
    }
  }, "Water (", /*#__PURE__*/React.createElement("span", {
    className: "formula"
  }, "H", /*#__PURE__*/React.createElement("sub", null, "2"), "O"), ") \u2014 2 hydrogen + 1 oxygen, locked together. You can't see the H or O anymore.")), /*#__PURE__*/React.createElement("div", {
    className: "card"
  }, /*#__PURE__*/React.createElement(Chip, {
    variant: "warn"
  }, "Mixture"), /*#__PURE__*/React.createElement("h4", {
    style: {
      margin: "8px 0 4px"
    }
  }, "Just mixed together"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: "0.92rem",
      color: "var(--ink-2)"
    }
  }, "Air (N\u2082, O\u2082, Ar, CO\u2082\u2026). Brass (Cu + Zn). They keep their own properties \u2014 you can separate them again."))), /*#__PURE__*/React.createElement("div", {
    className: "activity"
  }, /*#__PURE__*/React.createElement("div", {
    className: "activity-head"
  }, /*#__PURE__*/React.createElement("h4", null, "Quick check"), /*#__PURE__*/React.createElement("span", {
    className: "badge"
  }, "Quiz")), /*#__PURE__*/React.createElement(QuizMC, {
    question: "A piece of brass (a mix of copper and zinc) is best described as\u2026",
    options: ["An element", "A compound", "A mixture (alloy)", "A subatomic particle"],
    correctIndex: 2,
    explain: "Brass is a mixture (specifically, an alloy) of copper and zinc. The copper and zinc keep their own properties \u2014 they're not chemically joined."
  }), /*#__PURE__*/React.createElement(QuizMC, {
    question: "Roughly how many elements occur naturally on Earth?",
    options: ["About 12", "About 94", "About 250", "About 1,000"],
    correctIndex: 1,
    explain: "118 are known in total \u2014 about 94 occur naturally, and the rest are made in labs."
  })), /*#__PURE__*/React.createElement(Callout, {
    kind: "fact",
    title: "Did you know?"
  }, "A grain of salt contains about ", /*#__PURE__*/React.createElement("strong", null, "one quintillion"), " atoms (1,000,000,000,000,000,000). If you wanted to count them all at one atom per second, it would take you longer than the age of the universe."));
}

/* ------------------------------------------------------------
   Lesson 6.1.2 — Metals / non-metals / metalloids classifier
------------------------------------------------------------ */
function Lesson612(_ref2) {
  var udl = _ref2.udl;
  var SAMPLES = window.AppData.SAMPLES;
  var _u61_useState = u61_useState({}),
    _u61_useState2 = _slicedToArray(_u61_useState, 2),
    answers = _u61_useState2[0],
    setAnswers = _u61_useState2[1]; // sample.id -> "metal" | "nonmetal" | "metalloid"
  var _u61_useState3 = u61_useState(false),
    _u61_useState4 = _slicedToArray(_u61_useState3, 2),
    revealed = _u61_useState4[0],
    setRevealed = _u61_useState4[1];
  var score = u61_useMemo(function () {
    return SAMPLES.reduce(function (acc, s) {
      return acc + (answers[s.id] === s.expect ? 1 : 0);
    }, 0);
  }, [answers]);
  var allAnswered = Object.keys(answers).length === SAMPLES.length;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("p", null, "Every element fits into one of three families: ", /*#__PURE__*/React.createElement(Term, null, "metal"), "s, ", /*#__PURE__*/React.createElement(Term, null, "non-metal"), "s, or ", /*#__PURE__*/React.createElement(Term, null, "metalloid"), "s. You can tell them apart by their ", /*#__PURE__*/React.createElement("em", null, "physical properties"), "."), /*#__PURE__*/React.createElement("h3", null, "Property cheat sheet"), /*#__PURE__*/React.createElement("table", null, /*#__PURE__*/React.createElement("thead", null, /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("th", null, "Property"), /*#__PURE__*/React.createElement("th", null, "Metals"), /*#__PURE__*/React.createElement("th", null, "Non-metals"), /*#__PURE__*/React.createElement("th", null, "Metalloids"))), /*#__PURE__*/React.createElement("tbody", null, /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("td", null, "Appearance"), /*#__PURE__*/React.createElement("td", null, "Shiny (", /*#__PURE__*/React.createElement(Term, null, "lustrous"), ")"), /*#__PURE__*/React.createElement("td", null, "Dull"), /*#__PURE__*/React.createElement("td", null, "Mostly shiny")), /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("td", null, "Conducts electricity?"), /*#__PURE__*/React.createElement("td", null, "Yes"), /*#__PURE__*/React.createElement("td", null, "No"), /*#__PURE__*/React.createElement("td", null, "Sometimes (", /*#__PURE__*/React.createElement(Term, null, "semiconductor"), ")")), /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("td", null, "Bend or break?"), /*#__PURE__*/React.createElement("td", null, /*#__PURE__*/React.createElement(Term, null, "Malleable"), " & ", /*#__PURE__*/React.createElement(Term, null, "ductile")), /*#__PURE__*/React.createElement("td", null, "Brittle (if solid)"), /*#__PURE__*/React.createElement("td", null, "Brittle")), /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("td", null, "State at room temp"), /*#__PURE__*/React.createElement("td", null, "Mostly solid (Hg is liquid)"), /*#__PURE__*/React.createElement("td", null, "Gas, liquid or solid"), /*#__PURE__*/React.createElement("td", null, "Solid")), /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("td", null, "Where on the table?"), /*#__PURE__*/React.createElement("td", null, "Left & middle"), /*#__PURE__*/React.createElement("td", null, "Right (and H)"), /*#__PURE__*/React.createElement("td", null, "Zig-zag line between them")))), /*#__PURE__*/React.createElement(Callout, {
    kind: "warn",
    title: "Watch out"
  }, /*#__PURE__*/React.createElement("strong", null, "Carbon (graphite)"), " conducts electricity \u2014 but it's a non-metal! That's why ", /*#__PURE__*/React.createElement("em", null, "one"), " test is never enough. Always check several properties before you decide."), /*#__PURE__*/React.createElement("div", {
    className: "activity"
  }, /*#__PURE__*/React.createElement("div", {
    className: "activity-head"
  }, /*#__PURE__*/React.createElement("h4", null, "The lab bench"), /*#__PURE__*/React.createElement("span", {
    className: "badge"
  }, "Sim")), /*#__PURE__*/React.createElement("p", {
    style: {
      marginTop: 0
    }
  }, "Eight samples have been brought to you. Read each one's properties and classify it. Tap once for each category to cycle through."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))",
      gap: 12,
      margin: "14px 0"
    }
  }, SAMPLES.map(function (s) {
    var a = answers[s.id];
    var isCorrect = revealed && a === s.expect;
    var isWrong = revealed && a && a !== s.expect;
    return /*#__PURE__*/React.createElement("div", {
      key: s.id,
      className: "card",
      style: {
        borderColor: isCorrect ? "var(--c-green)" : isWrong ? "var(--c-red)" : "var(--border)",
        background: isCorrect ? "var(--c-green-soft)" : isWrong ? "var(--c-red-soft)" : "var(--paper)"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontWeight: 600,
        marginBottom: 6
      }
    }, s.name), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "grid",
        gridTemplateColumns: "auto 1fr",
        gap: "2px 8px",
        fontSize: "0.84rem",
        color: "var(--ink-2)"
      }
    }, /*#__PURE__*/React.createElement("span", null, "Looks:"), " ", /*#__PURE__*/React.createElement("span", null, s.shiny ? "Shiny" : s.gas ? "Invisible (gas)" : "Dull"), /*#__PURE__*/React.createElement("span", null, "Conducts?"), " ", /*#__PURE__*/React.createElement("span", null, s.conducts === "sometimes" ? "Sometimes" : s.conducts ? "Yes" : "No"), /*#__PURE__*/React.createElement("span", null, "Hammer test:"), " ", /*#__PURE__*/React.createElement("span", null, s.gas ? "—" : s.malleable ? "Flattens" : "Shatters")), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        gap: 4,
        marginTop: 10
      }
    }, ["metal", "nonmetal", "metalloid"].map(function (t) {
      return /*#__PURE__*/React.createElement("button", {
        key: t,
        className: "btn btn-sm",
        style: {
          flex: 1,
          background: a === t ? "var(--ink)" : "var(--paper)",
          color: a === t ? "var(--paper)" : "var(--ink-2)",
          borderColor: a === t ? "var(--ink)" : "var(--border)"
        },
        onClick: function onClick() {
          setAnswers(_objectSpread(_objectSpread({}, answers), {}, _defineProperty({}, s.id, t)));
          if (revealed) setRevealed(false);
        }
      }, t === "nonmetal" ? "non-metal" : t);
    })), revealed && a && a !== s.expect && /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: "0.8rem",
        color: "var(--c-red)",
        marginTop: 8
      }
    }, "Actually: ", /*#__PURE__*/React.createElement("strong", null, s.expect === "nonmetal" ? "non-metal" : s.expect), ". ", s.hint), revealed && isCorrect && /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: "0.8rem",
        color: "var(--c-green-deep)",
        marginTop: 8
      }
    }, "\u2713 Yep. ", s.hint));
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      color: "var(--ink-2)"
    }
  }, Object.keys(answers).length, " / ", SAMPLES.length, " classified", revealed ? " \xB7 ".concat(score, "/").concat(SAMPLES.length, " correct") : ""), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 8
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "ghost",
    icon: "reset",
    onClick: function onClick() {
      setAnswers({});
      setRevealed(false);
    }
  }, "Reset"), /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    disabled: !allAnswered,
    onClick: function onClick() {
      return setRevealed(true);
    }
  }, "Check answers")))), /*#__PURE__*/React.createElement(Callout, {
    kind: "tip",
    title: "Practical activity 1 (book version)"
  }, "In the lab, you'd test samples using a hand lens, a conductivity tester (battery + bulb), and a small hammer on a heat-proof mat \u2014 gathering several pieces of evidence before classifying."));
}

/* ------------------------------------------------------------
   Lesson 6.1.3 — Properties → uses
------------------------------------------------------------ */
function Lesson613(_ref3) {
  var udl = _ref3.udl;
  var matches = [{
    mat: "Copper",
    prop: "Excellent electrical conductor, ductile",
    use: "Electrical wires, water pipes"
  }, {
    mat: "Aluminium",
    prop: "Low density, corrosion-resistant",
    use: "Aircraft bodies, drink cans"
  }, {
    mat: "Iron / Steel",
    prop: "Strong, cheap, magnetic",
    use: "Buildings, vehicles, tools"
  }, {
    mat: "Gold",
    prop: "Doesn't tarnish, shiny, malleable",
    use: "Jewellery, electrical contacts"
  }, {
    mat: "Tungsten",
    prop: "Extremely high melting point",
    use: "Light bulb filaments"
  }, {
    mat: "Diamond (carbon)",
    prop: "Hardest natural material",
    use: "Cutting & drilling tools"
  }, {
    mat: "Graphite (carbon)",
    prop: "Soft, slippery, conducts",
    use: "Pencil leads, lubricants"
  }, {
    mat: "Helium",
    prop: "Less dense than air, non-flammable",
    use: "Balloons, MRI machines"
  }];
  var alloys = [{
    name: "Steel",
    from: "Iron + carbon",
    win: "Much stronger than pure iron",
    use: "Buildings, cars, tools"
  }, {
    name: "Stainless steel",
    from: "Iron + chromium + nickel",
    win: "Doesn't rust",
    use: "Cutlery, sinks, surgical tools"
  }, {
    name: "Brass",
    from: "Copper + zinc",
    win: "Harder, attractive gold colour",
    use: "Door handles, instruments"
  }, {
    name: "Bronze",
    from: "Copper + tin",
    win: "Hard, corrosion-resistant",
    use: "Statues, bells, ship propellers"
  }, {
    name: "Solder",
    from: "Tin + lead (or silver)",
    win: "Low melting point",
    use: "Joining electronics"
  }];
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("p", null, "The reason copper wires aren't gold, and aeroplanes aren't iron, comes down to this: ", /*#__PURE__*/React.createElement("strong", null, "properties decide use."), " Designers and engineers pick a material based on what the job needs."), /*#__PURE__*/React.createElement("h3", null, "Elements at work"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(3, 1fr)",
      gap: 10,
      marginBottom: 12
    }
  }, /*#__PURE__*/React.createElement(CCImage, {
    src: "assets/pdf-img-p5.jpg",
    caption: "Metals \u2014 iron, aluminium, copper, silver, gold, mercury and their uses.",
    frame: true
  }), /*#__PURE__*/React.createElement(CCImage, {
    src: "assets/pdf-img-p6.jpg",
    caption: "Non-metals \u2014 carbon, sulfur, oxygen, nitrogen, chlorine, bromine and their uses.",
    frame: true
  }), /*#__PURE__*/React.createElement(CCImage, {
    src: "assets/pdf-img-p7.jpg",
    caption: "Metalloids \u2014 boron, silicon, germanium and their semiconductor uses.",
    frame: true
  })), /*#__PURE__*/React.createElement("table", null, /*#__PURE__*/React.createElement("thead", null, /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("th", null, "Material"), /*#__PURE__*/React.createElement("th", null, "Key properties"), /*#__PURE__*/React.createElement("th", null, "Common use"))), /*#__PURE__*/React.createElement("tbody", null, matches.map(function (m, i) {
    return /*#__PURE__*/React.createElement("tr", {
      key: i
    }, /*#__PURE__*/React.createElement("td", null, /*#__PURE__*/React.createElement("strong", null, m.mat)), /*#__PURE__*/React.createElement("td", null, m.prop), /*#__PURE__*/React.createElement("td", null, m.use));
  }))), /*#__PURE__*/React.createElement("h3", null, "Why we make ", /*#__PURE__*/React.createElement(Term, null, "alloy"), "s"), /*#__PURE__*/React.createElement("p", null, "Pure metals don't always have the exact properties we need. An ", /*#__PURE__*/React.createElement(Term, null, "alloy"), " is a mixture of a metal with one or more other elements \u2014 it lets us tune the properties."), /*#__PURE__*/React.createElement("table", null, /*#__PURE__*/React.createElement("thead", null, /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("th", null, "Alloy"), /*#__PURE__*/React.createElement("th", null, "Made from"), /*#__PURE__*/React.createElement("th", null, "Improvement"), /*#__PURE__*/React.createElement("th", null, "Use"))), /*#__PURE__*/React.createElement("tbody", null, alloys.map(function (a, i) {
    return /*#__PURE__*/React.createElement("tr", {
      key: i
    }, /*#__PURE__*/React.createElement("td", null, /*#__PURE__*/React.createElement("strong", null, a.name)), /*#__PURE__*/React.createElement("td", null, a.from), /*#__PURE__*/React.createElement("td", null, a.win), /*#__PURE__*/React.createElement("td", null, a.use));
  }))), /*#__PURE__*/React.createElement(Callout, {
    kind: "fact",
    title: "Carbon: same atoms, totally different stuff"
  }, "Diamond is the hardest natural material on Earth. Graphite is so soft it leaves marks on paper. Both are made of ", /*#__PURE__*/React.createElement("strong", null, "only carbon atoms"), " \u2014 the difference is how those atoms are arranged."), /*#__PURE__*/React.createElement("div", {
    className: "activity"
  }, /*#__PURE__*/React.createElement("div", {
    className: "activity-head"
  }, /*#__PURE__*/React.createElement("h4", null, "Quick check"), /*#__PURE__*/React.createElement("span", {
    className: "badge"
  }, "Quiz")), /*#__PURE__*/React.createElement(QuizMC, {
    question: "Why is copper used for household electrical wiring rather than silver, even though silver conducts slightly better?",
    options: ["Copper is denser", "Silver is poisonous", "Silver is far more expensive — copper is good enough at a much lower cost", "Silver isn't ductile"],
    correctIndex: 2,
    explain: "Both are great conductors. Copper wins on cost \u2014 it's plentiful and cheap to extract."
  }), /*#__PURE__*/React.createElement(QuizMC, {
    question: "Stainless steel contains iron + chromium + nickel. Why use stainless rather than ordinary steel for surgical instruments?",
    options: ["It's cheaper", "It's softer and easier to shape", "It doesn't rust, even when sterilised with hot water again and again", "It's a better magnet"],
    correctIndex: 2,
    explain: "The chromium forms a thin, tough oxide layer on the surface that stops rust \u2014 vital for tools that are washed and sterilised constantly."
  })));
}
Object.assign(window, {
  Lesson611: Lesson611,
  Lesson612: Lesson612,
  Lesson613: Lesson613
});

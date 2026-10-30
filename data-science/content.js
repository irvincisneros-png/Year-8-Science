/* Generated from content.jsx by tools/build.js. Edit the .jsx, not this file. */
"use strict";

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

/* ================================================================
   SECTION 8.1 INTERACTIVES
   ================================================================ */

function DataTypeSorter() {
  return /*#__PURE__*/React.createElement(Interactive, {
    title: "Sort the data types",
    subtitle: "Click each item to place it in the correct bucket.",
    takeaway: "Data can be classified by its nature (quantitative or qualitative), by how numerical data is counted or measured (discrete or continuous), and by who collected it (primary or secondary)."
  }, /*#__PURE__*/React.createElement(MatchBuckets, {
    items: [{
      id: "a",
      label: "Temperature in degrees Celsius",
      bucket: "cont"
    }, {
      id: "b",
      label: "Hair colour",
      bucket: "qual"
    }, {
      id: "c",
      label: "Number of students absent",
      bucket: "discrete"
    }, {
      id: "d",
      label: "Mass of a rock sample (g)",
      bucket: "cont"
    }, {
      id: "e",
      label: "Type of cloud",
      bucket: "qual"
    }, {
      id: "f",
      label: "Count of birds seen today",
      bucket: "discrete"
    }, {
      id: "g",
      label: "Recorded by you in an experiment",
      bucket: "primary"
    }, {
      id: "h",
      label: "BOM rainfall records from 1990",
      bucket: "secondary"
    }],
    buckets: [{
      id: "qual",
      label: "Qualitative (descriptions)"
    }, {
      id: "discrete",
      label: "Quantitative: discrete (counted)"
    }, {
      id: "cont",
      label: "Quantitative: continuous (measured)"
    }, {
      id: "primary",
      label: "Primary"
    }, {
      id: "secondary",
      label: "Secondary"
    }]
  }));
}
function DigitalFootprintSorter() {
  return /*#__PURE__*/React.createElement(Interactive, {
    title: "Active or passive footprint?",
    subtitle: "Sort each activity into the correct category.",
    takeaway: "Your digital footprint is created both by things you deliberately post (active) and by data collected about you without your direct action (passive), and both types persist online."
  }, /*#__PURE__*/React.createElement(MatchBuckets, {
    items: [{
      id: "a",
      label: "Posting a photo on social media",
      bucket: "active"
    }, {
      id: "b",
      label: "A website storing your browsing history via cookies",
      bucket: "passive"
    }, {
      id: "c",
      label: "Filling in an online form",
      bucket: "active"
    }, {
      id: "d",
      label: "An app tracking your location in the background",
      bucket: "passive"
    }, {
      id: "e",
      label: "Sending an email",
      bucket: "active"
    }, {
      id: "f",
      label: "A search engine saving your query",
      bucket: "passive"
    }],
    buckets: [{
      id: "active",
      label: "Active footprint"
    }, {
      id: "passive",
      label: "Passive footprint"
    }]
  }));
}

/* ================================================================
   SECTION 8.2 INTERACTIVES
   ================================================================ */

function ModelTypeSorter() {
  return /*#__PURE__*/React.createElement(Interactive, {
    title: "Match the model to its type",
    subtitle: "Classify each example by the type of scientific model it represents.",
    takeaway: "Scientists use different types of models - physical, conceptual, mathematical, graphical, and computational - and the best choice depends on what aspect of a phenomenon you need to represent."
  }, /*#__PURE__*/React.createElement(MatchBuckets, {
    items: [{
      id: "a",
      label: "A 3D globe of Earth",
      bucket: "physical"
    }, {
      id: "b",
      label: "A food web diagram",
      bucket: "conceptual"
    }, {
      id: "c",
      label: "F = ma",
      bucket: "mathematical"
    }, {
      id: "d",
      label: "A bar chart of rainfall data",
      bucket: "graphical"
    }, {
      id: "e",
      label: "A model DNA double helix",
      bucket: "physical"
    }, {
      id: "f",
      label: "A water cycle diagram",
      bucket: "conceptual"
    }, {
      id: "g",
      label: "A climate simulation program",
      bucket: "computational"
    }, {
      id: "h",
      label: "A scatter plot of temperature vs time",
      bucket: "graphical"
    }],
    buckets: [{
      id: "physical",
      label: "Physical"
    }, {
      id: "conceptual",
      label: "Conceptual"
    }, {
      id: "mathematical",
      label: "Mathematical"
    }, {
      id: "graphical",
      label: "Graphical"
    }, {
      id: "computational",
      label: "Computational"
    }]
  }));
}

/* Rainfall bar chart with Sydney data + trend explorer */
function RainfallBarChart() {
  var months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  var values = [103, 117, 131, 126, 120, 130, 97, 68, 66, 81, 83, 78];
  var maxVal = Math.max.apply(Math, values);
  var w = 560;
  var h = 200;
  var pad = {
    top: 20,
    right: 10,
    bottom: 40,
    left: 50
  };
  var chartW = w - pad.left - pad.right;
  var chartH = h - pad.top - pad.bottom;
  var barW = chartW / months.length;
  var _useState = useState(null),
    _useState2 = _slicedToArray(_useState, 2),
    highlighted = _useState2[0],
    setHighlighted = _useState2[1];
  return /*#__PURE__*/React.createElement(Interactive, {
    title: "Sydney average monthly rainfall",
    subtitle: "Hover over (or tap) a bar to read its value. Spot which months are wettest and driest.",
    takeaway: "A bar chart is a graphical model that makes patterns in data visible - in this case showing that Sydney's rainfall is highest in autumn and early winter and lowest in late winter and spring."
  }, /*#__PURE__*/React.createElement("svg", {
    role: "img",
    "aria-label": "Bar chart of Sydney average monthly rainfall in millimetres. March (131 mm) and June (130 mm) are wettest; September (66 mm) and August (68 mm) are driest.",
    viewBox: "0 0 ".concat(w, " ").concat(h),
    width: "100%",
    style: {
      maxWidth: w,
      display: "block",
      margin: "0 auto"
    }
  }, [0, 50, 100, 150].map(function (v) {
    var y = pad.top + chartH - v / 150 * chartH;
    return /*#__PURE__*/React.createElement("g", {
      key: v
    }, /*#__PURE__*/React.createElement("line", {
      x1: pad.left,
      x2: w - pad.right,
      y1: y,
      y2: y,
      stroke: "var(--border)",
      strokeDasharray: "4 2"
    }), /*#__PURE__*/React.createElement("text", {
      x: pad.left - 6,
      y: y + 4,
      textAnchor: "end",
      fontSize: "11",
      fill: "var(--ink-muted)"
    }, v));
  }), /*#__PURE__*/React.createElement("text", {
    transform: "translate(12,".concat(pad.top + chartH / 2, ") rotate(-90)"),
    textAnchor: "middle",
    fontSize: "11",
    fill: "var(--ink-muted)"
  }, "Rainfall (mm)"), values.map(function (v, i) {
    var bh = v / 150 * chartH;
    var x = pad.left + i * barW + 2;
    var y = pad.top + chartH - bh;
    var isHigh = highlighted === i;
    return /*#__PURE__*/React.createElement("g", {
      key: i,
      style: {
        cursor: "pointer"
      },
      onMouseEnter: function onMouseEnter() {
        return setHighlighted(i);
      },
      onMouseLeave: function onMouseLeave() {
        return setHighlighted(null);
      },
      onClick: function onClick() {
        return setHighlighted(i);
      }
    }, /*#__PURE__*/React.createElement("rect", {
      x: x,
      y: y,
      width: barW - 4,
      height: bh,
      fill: isHigh ? "var(--accent-deep)" : "var(--accent-soft)",
      stroke: isHigh ? "var(--accent-deep)" : "none",
      rx: "2"
    }), isHigh && /*#__PURE__*/React.createElement("text", {
      x: x + (barW - 4) / 2,
      y: y - 5,
      textAnchor: "middle",
      fontSize: "12",
      fontWeight: "700",
      fill: "var(--accent-deep)"
    }, v, " mm"), /*#__PURE__*/React.createElement("text", {
      x: x + (barW - 4) / 2,
      y: pad.top + chartH + 14,
      textAnchor: "middle",
      fontSize: "10",
      fill: "var(--ink-muted)"
    }, months[i]));
  }), /*#__PURE__*/React.createElement("line", {
    x1: pad.left,
    x2: pad.left,
    y1: pad.top,
    y2: pad.top + chartH,
    stroke: "var(--border)"
  }), /*#__PURE__*/React.createElement("line", {
    x1: pad.left,
    x2: w - pad.right,
    y1: pad.top + chartH,
    y2: pad.top + chartH,
    stroke: "var(--border)"
  })), /*#__PURE__*/React.createElement("p", {
    className: "muted",
    style: {
      marginBottom: 0,
      marginTop: "0.5rem"
    }
  }, "The wettest months are March and June. The driest are September and August. This bar chart is a ", /*#__PURE__*/React.createElement("strong", null, "graphical model"), " of Sydney's rainfall pattern."));
}

/* Population line graph with interpolation + extrapolation explorer */
function PopulationModel() {
  var years = [1981, 1991, 2001, 2011, 2021];
  var sydney = [3.2, 3.7, 4.1, 4.6, 5.2];
  var melbourne = [2.7, 3.1, 3.5, 4.1, 5.0];
  var _useState3 = useState(false),
    _useState4 = _slicedToArray(_useState3, 2),
    showExtrap = _useState4[0],
    setShowExtrap = _useState4[1];
  var _useState5 = useState(2006),
    _useState6 = _slicedToArray(_useState5, 2),
    targetYear = _useState6[0],
    setTargetYear = _useState6[1];
  var w = 560;
  var h = 220;
  var pad = {
    top: 20,
    right: 20,
    bottom: 40,
    left: 50
  };
  var chartW = w - pad.left - pad.right;
  var chartH = h - pad.top - pad.bottom;
  var minYear = 1981;
  var maxYear = showExtrap ? 2041 : 2021;
  var minPop = 2.5;
  var maxPop = showExtrap ? 8 : 5.5;
  var xScale = function xScale(yr) {
    return pad.left + (yr - minYear) / (maxYear - minYear) * chartW;
  };
  var yScale = function yScale(pop) {
    return pad.top + chartH - (pop - minPop) / (maxPop - minPop) * chartH;
  };
  var sydExtrap = showExtrap ? [].concat(sydney, [5.8, 6.4]) : sydney;
  var melExtrap = showExtrap ? [].concat(melbourne, [5.7, 6.6]) : melbourne;
  var extrapYears = showExtrap ? [].concat(years, [2031, 2041]) : years;
  var pointsToPath = function pointsToPath(yrs, pops) {
    return yrs.map(function (yr, i) {
      return "".concat(i === 0 ? "M" : "L").concat(xScale(yr), ",").concat(yScale(pops[i]));
    }).join(" ");
  };

  // Interpolate for target year
  var interpolate = function interpolate(yrs, pops, yr) {
    for (var i = 0; i < yrs.length - 1; i++) {
      if (yr >= yrs[i] && yr <= yrs[i + 1]) {
        var t = (yr - yrs[i]) / (yrs[i + 1] - yrs[i]);
        return (pops[i] + t * (pops[i + 1] - pops[i])).toFixed(2);
      }
    }
    return null;
  };
  var isInterp = targetYear >= 1981 && targetYear <= 2021;
  var sydPred = isInterp ? interpolate(years, sydney, targetYear) : null;
  var melPred = isInterp ? interpolate(years, melbourne, targetYear) : null;
  return /*#__PURE__*/React.createElement(Interactive, {
    title: "Population growth model: Sydney vs Melbourne",
    subtitle: "Toggle extrapolation and use the slider to read off interpolated values.",
    takeaway: "Interpolation estimates values within measured data and is fairly reliable, while extrapolation predicts beyond the data range and carries more uncertainty because conditions may change."
  }, /*#__PURE__*/React.createElement("div", {
    className: "ctrl-row",
    style: {
      marginBottom: "0.75rem"
    }
  }, /*#__PURE__*/React.createElement(SegToggle, {
    options: [{
      value: "off",
      label: "Measured data only"
    }, {
      value: "on",
      label: "Show extrapolation to 2041"
    }],
    value: showExtrap ? "on" : "off",
    onChange: function onChange(v) {
      return setShowExtrap(v === "on");
    }
  })), /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 ".concat(w, " ").concat(h),
    width: "100%",
    style: {
      maxWidth: w,
      display: "block",
      margin: "0 auto"
    }
  }, [3, 4, 5, 6, 7].filter(function (v) {
    return v <= maxPop && v >= minPop;
  }).map(function (v) {
    var y = yScale(v);
    return /*#__PURE__*/React.createElement("g", {
      key: v
    }, /*#__PURE__*/React.createElement("line", {
      x1: pad.left,
      x2: w - pad.right,
      y1: y,
      y2: y,
      stroke: "var(--border)",
      strokeDasharray: "4 2"
    }), /*#__PURE__*/React.createElement("text", {
      x: pad.left - 6,
      y: y + 4,
      textAnchor: "end",
      fontSize: "11",
      fill: "var(--ink-muted)"
    }, v, "M"));
  }), extrapYears.map(function (yr, i) {
    return /*#__PURE__*/React.createElement("text", {
      key: yr,
      x: xScale(yr),
      y: pad.top + chartH + 16,
      textAnchor: "middle",
      fontSize: "11",
      fill: yr > 2021 ? "var(--accent-deep)" : "var(--ink-muted)"
    }, yr);
  }), /*#__PURE__*/React.createElement("path", {
    d: pointsToPath(extrapYears.slice(0, years.length), sydney),
    fill: "none",
    stroke: "var(--accent-deep)",
    strokeWidth: "2.5"
  }), /*#__PURE__*/React.createElement("path", {
    d: pointsToPath(extrapYears.slice(0, years.length), melbourne),
    fill: "none",
    stroke: "#f59e0b",
    strokeWidth: "2.5"
  }), showExtrap && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
    d: pointsToPath(extrapYears.slice(years.length - 1), sydExtrap.slice(years.length - 1)),
    fill: "none",
    stroke: "var(--accent-deep)",
    strokeWidth: "2",
    strokeDasharray: "6 4"
  }), /*#__PURE__*/React.createElement("path", {
    d: pointsToPath(extrapYears.slice(years.length - 1), melExtrap.slice(years.length - 1)),
    fill: "none",
    stroke: "#f59e0b",
    strokeWidth: "2",
    strokeDasharray: "6 4"
  })), years.map(function (yr, i) {
    return /*#__PURE__*/React.createElement("g", {
      key: yr
    }, /*#__PURE__*/React.createElement("circle", {
      cx: xScale(yr),
      cy: yScale(sydney[i]),
      r: "5",
      fill: "var(--accent-deep)"
    }), /*#__PURE__*/React.createElement("circle", {
      cx: xScale(yr),
      cy: yScale(melbourne[i]),
      r: "5",
      fill: "#f59e0b"
    }));
  }), isInterp && /*#__PURE__*/React.createElement("line", {
    x1: xScale(targetYear),
    x2: xScale(targetYear),
    y1: pad.top,
    y2: pad.top + chartH,
    stroke: "var(--ink-muted)",
    strokeDasharray: "3 3",
    strokeWidth: "1.5"
  }), /*#__PURE__*/React.createElement("rect", {
    x: pad.left + 10,
    y: pad.top + 4,
    width: "14",
    height: "4",
    fill: "var(--accent-deep)",
    rx: "2"
  }), /*#__PURE__*/React.createElement("text", {
    x: pad.left + 28,
    y: pad.top + 10,
    fontSize: "11",
    fill: "var(--ink)"
  }, "Sydney"), /*#__PURE__*/React.createElement("rect", {
    x: pad.left + 80,
    y: pad.top + 4,
    width: "14",
    height: "4",
    fill: "#f59e0b",
    rx: "2"
  }), /*#__PURE__*/React.createElement("text", {
    x: pad.left + 98,
    y: pad.top + 10,
    fontSize: "11",
    fill: "var(--ink)"
  }, "Melbourne"), showExtrap && /*#__PURE__*/React.createElement("text", {
    x: w - pad.right - 5,
    y: pad.top + 10,
    textAnchor: "end",
    fontSize: "10",
    fill: "var(--accent-deep)"
  }, "Dashed = extrapolated"), /*#__PURE__*/React.createElement("line", {
    x1: pad.left,
    x2: pad.left,
    y1: pad.top,
    y2: pad.top + chartH,
    stroke: "var(--border)"
  }), /*#__PURE__*/React.createElement("line", {
    x1: pad.left,
    x2: w - pad.right,
    y1: pad.top + chartH,
    y2: pad.top + chartH,
    stroke: "var(--border)"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: "0.75rem"
    }
  }, /*#__PURE__*/React.createElement(Slider, {
    label: "Read value for year",
    min: 1981,
    max: 2021,
    step: 1,
    value: targetYear,
    onChange: setTargetYear,
    unit: ""
  })), isInterp ? /*#__PURE__*/React.createElement("div", {
    className: "stat-readout"
  }, /*#__PURE__*/React.createElement(Stat, {
    value: sydPred,
    label: "Sydney pop. (millions)"
  }), /*#__PURE__*/React.createElement(Stat, {
    value: melPred,
    label: "Melbourne pop. (millions)"
  })) : /*#__PURE__*/React.createElement("p", {
    className: "muted",
    style: {
      marginBottom: 0
    }
  }, "Slider only works for measured years (1981 to 2021)."), /*#__PURE__*/React.createElement("p", {
    className: "muted",
    style: {
      marginBottom: 0,
      marginTop: "0.5rem"
    }
  }, "Solid lines = measured data. Dashed lines = extrapolated predictions. Extrapolation assumes past trends continue."));
}

/* ================================================================
   SECTION 8.3 INTERACTIVES
   ================================================================ */

function ScientificInquiryQuiz() {
  var claims = [{
    text: "Adding fertiliser increases plant growth rate, measured over 4 weeks.",
    answer: "sci",
    explain: "This claim is testable: you can measure plant height with and without fertiliser and compare."
  }, {
    text: "This forest has a special spiritual energy that cannot be detected or measured in any way.",
    answer: "nonsci",
    explain: "This claim cannot be measured or tested experimentally. It operates outside empirical science."
  }, {
    text: "Plants exposed to 12 hours of light per day grow taller than those getting 6 hours.",
    answer: "sci",
    explain: "Testable: light hours can be controlled, plant height measured, and results compared."
  }, {
    text: "The universe was created for a purpose.",
    answer: "nonsci",
    explain: "This is a philosophical or spiritual claim. Science cannot test purpose or intent."
  }, {
    text: "Drinking more water improves concentration test scores in Year 8 students.",
    answer: "sci",
    explain: "Testable: students can be split into groups with different water intake and scores measured."
  }];
  var _useState7 = useState(0),
    _useState8 = _slicedToArray(_useState7, 2),
    idx = _useState8[0],
    setIdx = _useState8[1];
  var _useState9 = useState(null),
    _useState0 = _slicedToArray(_useState9, 2),
    chosen = _useState0[0],
    setChosen = _useState0[1];
  var _useState1 = useState(0),
    _useState10 = _slicedToArray(_useState1, 2),
    score = _useState10[0],
    setScore = _useState10[1];
  var _useState11 = useState(false),
    _useState12 = _slicedToArray(_useState11, 2),
    done = _useState12[0],
    setDone = _useState12[1];
  var handleChoice = function handleChoice(val) {
    if (chosen !== null) return;
    setChosen(val);
    if (val === claims[idx].answer) setScore(function (s) {
      return s + 1;
    });
  };
  var next = function next() {
    if (idx + 1 >= claims.length) {
      setDone(true);
      return;
    }
    setIdx(function (i) {
      return i + 1;
    });
    setChosen(null);
  };
  var reset = function reset() {
    setIdx(0);
    setChosen(null);
    setScore(0);
    setDone(false);
  };
  var c = claims[idx];
  if (done) {
    return /*#__PURE__*/React.createElement(Interactive, {
      title: "Scientific or not? Quiz complete!",
      subtitle: "",
      takeaway: "A scientific claim must be testable - it must be possible to design an investigation that could support or disprove it - while non-scientific claims operate by different rules that science cannot address."
    }, /*#__PURE__*/React.createElement("div", {
      className: "stat-readout"
    }, /*#__PURE__*/React.createElement(Stat, {
      value: "".concat(score, "/").concat(claims.length),
      label: "Correct"
    })), /*#__PURE__*/React.createElement("p", {
      className: "muted",
      style: {
        marginBottom: "0.75rem"
      }
    }, score === claims.length ? "Perfect! You can identify scientific claims confidently." : "Review the explanations and try again."), /*#__PURE__*/React.createElement("button", {
      className: "btn btn-accent",
      onClick: reset
    }, "Try again"));
  }
  return /*#__PURE__*/React.createElement(Interactive, {
    title: "Scientific or not?",
    subtitle: "Read each claim and decide: is it a scientific claim or a non-scientific claim?",
    takeaway: "A scientific claim must be testable - it must be possible to design an investigation that could support or disprove it - while non-scientific claims operate by different rules that science cannot address."
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      fontWeight: "600",
      marginBottom: "0.75rem"
    }
  }, "Claim ", idx + 1, " of ", claims.length, ":"), /*#__PURE__*/React.createElement("p", {
    style: {
      marginBottom: "1rem",
      lineHeight: "1.5"
    }
  }, c.text), /*#__PURE__*/React.createElement("div", {
    className: "row",
    style: {
      gap: "0.75rem",
      marginBottom: "1rem"
    }
  }, /*#__PURE__*/React.createElement("button", {
    className: "btn ".concat(chosen ? c.answer === "sci" ? "btn-accent" : "btn-ghost" : "btn-ghost"),
    onClick: function onClick() {
      return handleChoice("sci");
    }
  }, "Scientific"), /*#__PURE__*/React.createElement("button", {
    className: "btn ".concat(chosen ? c.answer === "nonsci" ? "btn-accent" : "btn-ghost" : "btn-ghost"),
    onClick: function onClick() {
      return handleChoice("nonsci");
    }
  }, "Non-scientific")), chosen !== null && /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("p", {
    style: {
      fontWeight: "700",
      color: chosen === c.answer ? "var(--success)" : "var(--warn)",
      marginBottom: "0.5rem"
    }
  }, chosen === c.answer ? "Correct!" : "Not quite."), /*#__PURE__*/React.createElement("p", {
    className: "muted",
    style: {
      marginBottom: "0.75rem"
    }
  }, c.explain), /*#__PURE__*/React.createElement("button", {
    className: "btn btn-accent",
    onClick: next
  }, idx + 1 >= claims.length ? "See results" : "Next claim")));
}

/* ================================================================
   SECTION 8.4 INTERACTIVES
   ================================================================ */

function MeanMedianModeCalc() {
  var _useState13 = useState("12, 15, 14, 12, 18, 12, 20"),
    _useState14 = _slicedToArray(_useState13, 2),
    raw = _useState14[0],
    setRaw = _useState14[1];
  var parse = function parse(s) {
    return s.split(/[\s,;]+/).map(function (v) {
      return parseFloat(v);
    }).filter(function (v) {
      return !isNaN(v);
    });
  };
  var nums = useMemo(function () {
    return parse(raw);
  }, [raw]);
  var mean = useMemo(function () {
    if (nums.length === 0) return null;
    return (nums.reduce(function (a, b) {
      return a + b;
    }, 0) / nums.length).toFixed(2);
  }, [nums]);
  var median = useMemo(function () {
    if (nums.length === 0) return null;
    var s = _toConsumableArray(nums).sort(function (a, b) {
      return a - b;
    });
    var m = Math.floor(s.length / 2);
    return s.length % 2 === 0 ? ((s[m - 1] + s[m]) / 2).toFixed(2) : s[m].toFixed(2);
  }, [nums]);
  var mode = useMemo(function () {
    if (nums.length === 0) return null;
    var freq = {};
    nums.forEach(function (n) {
      freq[n] = (freq[n] || 0) + 1;
    });
    var maxF = Math.max.apply(Math, _toConsumableArray(Object.values(freq)));
    if (maxF === 1) return "none";
    return Object.keys(freq).filter(function (k) {
      return freq[k] === maxF;
    }).join(", ");
  }, [nums]);
  var range = useMemo(function () {
    if (nums.length === 0) return null;
    return (Math.max.apply(Math, _toConsumableArray(nums)) - Math.min.apply(Math, _toConsumableArray(nums))).toFixed(2);
  }, [nums]);
  var sorted = useMemo(function () {
    return _toConsumableArray(nums).sort(function (a, b) {
      return a - b;
    });
  }, [nums]);
  return /*#__PURE__*/React.createElement(Interactive, {
    title: "Mean, median, mode and range calculator",
    subtitle: "Type your own numbers separated by commas. Watch the statistics update instantly.",
    takeaway: "The mean, median, and mode each describe the centre of a dataset in a different way, while the range shows how spread out the data is."
  }, /*#__PURE__*/React.createElement("div", {
    className: "ctrl-row",
    style: {
      marginBottom: "0.75rem"
    }
  }, /*#__PURE__*/React.createElement("label", {
    style: {
      fontWeight: "600",
      marginRight: "0.5rem",
      whiteSpace: "nowrap"
    }
  }, "Your numbers:"), /*#__PURE__*/React.createElement("input", {
    type: "text",
    "aria-label": "Your numbers, separated by commas",
    value: raw,
    onChange: function onChange(e) {
      return setRaw(e.target.value);
    },
    style: {
      flex: 1,
      padding: "0.4rem 0.75rem",
      border: "2px solid var(--border)",
      borderRadius: "8px",
      fontSize: "1rem",
      fontFamily: "var(--font-mono, monospace)",
      background: "var(--surface)",
      color: "var(--ink)"
    },
    placeholder: "e.g. 5, 8, 6, 5, 10"
  })), nums.length > 0 && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("p", {
    className: "muted",
    style: {
      marginBottom: "0.5rem"
    }
  }, "Sorted: ", sorted.join(", ")), /*#__PURE__*/React.createElement("div", {
    className: "stat-readout"
  }, /*#__PURE__*/React.createElement(Stat, {
    value: mean,
    label: "Mean"
  }), /*#__PURE__*/React.createElement(Stat, {
    value: median,
    label: "Median"
  }), /*#__PURE__*/React.createElement(Stat, {
    value: mode,
    label: "Mode"
  }), /*#__PURE__*/React.createElement(Stat, {
    value: range,
    label: "Range"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: "0.75rem",
      fontSize: "0.875rem",
      color: "var(--ink-muted)"
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      marginBottom: "0.25rem"
    }
  }, /*#__PURE__*/React.createElement("strong", null, "Mean:"), " (", nums.join(" + "), ") / ", nums.length, " = ", mean), /*#__PURE__*/React.createElement("p", {
    style: {
      marginBottom: "0.25rem"
    }
  }, /*#__PURE__*/React.createElement("strong", null, "Median:"), " middle value of sorted list = ", median), /*#__PURE__*/React.createElement("p", {
    style: {
      marginBottom: "0.25rem"
    }
  }, /*#__PURE__*/React.createElement("strong", null, "Mode:"), " most frequent value(s) = ", mode), /*#__PURE__*/React.createElement("p", {
    style: {
      marginBottom: 0
    }
  }, /*#__PURE__*/React.createElement("strong", null, "Range:"), " ", Math.max.apply(Math, _toConsumableArray(nums)), " - ", Math.min.apply(Math, _toConsumableArray(nums)), " = ", range))), nums.length === 0 && /*#__PURE__*/React.createElement("p", {
    className: "muted"
  }, "Enter at least one number above."));
}

/* Scatter plot explorer: spot the trend */
function ScatterExplorer() {
  var datasets = {
    positive: {
      label: "Positive trend",
      pts: [[17, 155], [17.5, 158], [18, 160], [18.2, 161], [18.5, 163], [19, 165], [19.2, 164], [19.5, 167], [20, 169], [20.3, 170], [20.5, 171], [21, 173], [21.5, 175], [22, 177], [22.3, 176], [22.5, 179], [23, 181], [23.5, 183], [24, 185]],
      xlabel: "Hand span (cm)",
      ylabel: "Height (cm)",
      desc: "As hand span increases, height also tends to increase. This is a positive trend."
    },
    negative: {
      label: "Negative trend",
      pts: [[0, 100], [200, 98], [400, 95], [600, 93], [800, 91], [1000, 89], [1200, 87], [1400, 85], [1600, 83], [1800, 81], [2000, 79], [2200, 77], [2400, 75], [2600, 73], [2800, 72], [3000, 70]],
      xlabel: "Altitude (m)",
      ylabel: "Oxygen level (% of sea level)",
      desc: "As altitude increases, available oxygen decreases. This is a negative trend."
    },
    none: {
      label: "No trend",
      pts: [[35, 62], [36, 78], [37, 55], [38, 91], [39, 43], [40, 82], [41, 67], [42, 50], [43, 88], [44, 71], [45, 59], [46, 76], [37, 48], [41, 93], [39, 65], [44, 57]],
      xlabel: "Shoe size",
      ylabel: "Maths score (%)",
      desc: "There is no clear trend between shoe size and maths score. The points are scattered randomly."
    }
  };
  var _useState15 = useState("positive"),
    _useState16 = _slicedToArray(_useState15, 2),
    key = _useState16[0],
    setKey = _useState16[1];
  var ds = datasets[key];
  var allX = ds.pts.map(function (p) {
    return p[0];
  });
  var allY = ds.pts.map(function (p) {
    return p[1];
  });
  var minX = Math.min.apply(Math, _toConsumableArray(allX));
  var maxX = Math.max.apply(Math, _toConsumableArray(allX));
  var minY = Math.min.apply(Math, _toConsumableArray(allY));
  var maxY = Math.max.apply(Math, _toConsumableArray(allY));
  var w = 500;
  var h = 200;
  var pad = {
    top: 15,
    right: 15,
    bottom: 40,
    left: 50
  };
  var cW = w - pad.left - pad.right;
  var cH = h - pad.top - pad.bottom;
  var xS = function xS(v) {
    return pad.left + (v - minX) / (maxX - minX || 1) * cW;
  };
  var yS = function yS(v) {
    return pad.top + cH - (v - minY) / (maxY - minY || 1) * cH;
  };

  // simple line of best fit
  var n = ds.pts.length;
  var sumX = allX.reduce(function (a, b) {
    return a + b;
  }, 0);
  var sumY = allY.reduce(function (a, b) {
    return a + b;
  }, 0);
  var sumXY = ds.pts.reduce(function (a, _ref) {
    var _ref2 = _slicedToArray(_ref, 2),
      x = _ref2[0],
      y = _ref2[1];
    return a + x * y;
  }, 0);
  var sumX2 = allX.reduce(function (a, x) {
    return a + x * x;
  }, 0);
  var slope = (n * sumXY - sumX * sumY) / (n * sumX2 - sumX * sumX);
  var intercept = (sumY - slope * sumX) / n;
  var lobfY1 = slope * minX + intercept;
  var lobfY2 = slope * maxX + intercept;
  return /*#__PURE__*/React.createElement(Interactive, {
    title: "Spot the trend",
    subtitle: "Switch between datasets and observe how the scatter pattern changes.",
    takeaway: "Scatter plots reveal whether two variables share a positive trend, a negative trend, or no trend at all, and a line of best fit makes that pattern easy to see and use for predictions."
  }, /*#__PURE__*/React.createElement(SegToggle, {
    options: [{
      value: "positive",
      label: "Positive"
    }, {
      value: "negative",
      label: "Negative"
    }, {
      value: "none",
      label: "No trend"
    }],
    value: key,
    onChange: setKey
  }), /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 ".concat(w, " ").concat(h),
    width: "100%",
    style: {
      maxWidth: w,
      display: "block",
      margin: "0.75rem auto 0"
    }
  }, /*#__PURE__*/React.createElement("line", {
    x1: pad.left,
    x2: pad.left,
    y1: pad.top,
    y2: pad.top + cH,
    stroke: "var(--border)"
  }), /*#__PURE__*/React.createElement("line", {
    x1: pad.left,
    x2: w - pad.right,
    y1: pad.top + cH,
    y2: pad.top + cH,
    stroke: "var(--border)"
  }), /*#__PURE__*/React.createElement("text", {
    x: pad.left + cW / 2,
    y: h - 4,
    textAnchor: "middle",
    fontSize: "11",
    fill: "var(--ink-muted)"
  }, ds.xlabel), /*#__PURE__*/React.createElement("text", {
    transform: "translate(12,".concat(pad.top + cH / 2, ") rotate(-90)"),
    textAnchor: "middle",
    fontSize: "11",
    fill: "var(--ink-muted)"
  }, ds.ylabel), /*#__PURE__*/React.createElement("line", {
    x1: xS(minX),
    y1: yS(lobfY1),
    x2: xS(maxX),
    y2: yS(lobfY2),
    stroke: "var(--accent-deep)",
    strokeWidth: "2",
    strokeDasharray: "6 3",
    opacity: "0.7"
  }), ds.pts.map(function (_ref3, i) {
    var _ref4 = _slicedToArray(_ref3, 2),
      x = _ref4[0],
      y = _ref4[1];
    return /*#__PURE__*/React.createElement("circle", {
      key: i,
      cx: xS(x),
      cy: yS(y),
      r: "5",
      fill: "var(--accent-soft)",
      stroke: "var(--accent-deep)",
      strokeWidth: "1.5"
    });
  }), /*#__PURE__*/React.createElement("line", {
    x1: pad.left + 10,
    x2: pad.left + 28,
    y1: pad.top + 8,
    y2: pad.top + 8,
    stroke: "var(--accent-deep)",
    strokeWidth: "2",
    strokeDasharray: "5 2"
  }), /*#__PURE__*/React.createElement("text", {
    x: pad.left + 33,
    y: pad.top + 13,
    fontSize: "11",
    fill: "var(--ink)"
  }, "Line of best fit")), /*#__PURE__*/React.createElement("p", {
    style: {
      marginTop: "0.75rem",
      marginBottom: 0
    }
  }, /*#__PURE__*/React.createElement("strong", null, "What this shows:"), " ", ds.desc));
}

/* Accuracy vs reliability simulator */
function AccuracyReliabilitySim() {
  var _useState17 = useState("accurate-reliable"),
    _useState18 = _slicedToArray(_useState17, 2),
    mode = _useState18[0],
    setMode = _useState18[1];
  var configs = {
    "accurate-reliable": {
      label: "Accurate + Reliable",
      cx: 50,
      cy: 50,
      spread: 6,
      bias: 0,
      biasDeg: 0,
      color: "#10b981"
    },
    "reliable-only": {
      label: "Reliable only",
      cx: 50,
      cy: 50,
      spread: 5,
      bias: 18,
      biasDeg: 45,
      color: "#f59e0b"
    },
    "accurate-only": {
      label: "Accurate only",
      cx: 50,
      cy: 50,
      spread: 22,
      bias: 0,
      biasDeg: 0,
      color: "#3b82f6"
    },
    "neither": {
      label: "Neither",
      cx: 50,
      cy: 50,
      spread: 22,
      bias: 18,
      biasDeg: 45,
      color: "#ef4444"
    }
  };
  var cfg = configs[mode];
  var seed = useRef(42);
  var pseudoRandom = function pseudoRandom(s) {
    var x = Math.sin(s) * 10000;
    return x - Math.floor(x);
  };
  var dots = useMemo(function () {
    var pts = [];
    var bx = cfg.bias * Math.cos(cfg.biasDeg * Math.PI / 180);
    var by = cfg.bias * Math.sin(cfg.biasDeg * Math.PI / 180);
    for (var i = 0; i < 10; i++) {
      var r = pseudoRandom(i * 7 + 3) * cfg.spread - cfg.spread / 2;
      var angle = pseudoRandom(i * 11 + 5) * 2 * Math.PI;
      pts.push({
        x: 50 + bx + r * Math.cos(angle),
        y: 50 + by + r * Math.sin(angle)
      });
    }
    return pts;
  }, [mode]);
  var size = 180;
  return /*#__PURE__*/React.createElement(Interactive, {
    title: "Accuracy vs reliability simulator",
    subtitle: "Switch between the four combinations and observe how the dot patterns differ.",
    takeaway: "Accuracy means being close to the true value, while reliability means getting consistent results each time - and it's possible to be one without being the other."
  }, /*#__PURE__*/React.createElement(SegToggle, {
    options: [{
      value: "accurate-reliable",
      label: "Both"
    }, {
      value: "reliable-only",
      label: "Reliable only"
    }, {
      value: "accurate-only",
      label: "Accurate only"
    }, {
      value: "neither",
      label: "Neither"
    }],
    value: mode,
    onChange: setMode
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "center",
      marginTop: "0.75rem"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 100 100",
    width: size,
    height: size
  }, [40, 30, 20, 10].map(function (r) {
    return /*#__PURE__*/React.createElement("circle", {
      key: r,
      cx: "50",
      cy: "50",
      r: r,
      fill: "none",
      stroke: "var(--border)",
      strokeWidth: "0.8"
    });
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "50",
    cy: "50",
    r: "3",
    fill: "var(--accent-deep)",
    opacity: "0.4"
  }), /*#__PURE__*/React.createElement("text", {
    x: "53",
    y: "49",
    fontSize: "5",
    fill: "var(--ink-muted)"
  }, "true value"), dots.map(function (d, i) {
    return /*#__PURE__*/React.createElement("circle", {
      key: i,
      cx: d.x,
      cy: d.y,
      r: "3.5",
      fill: cfg.color,
      opacity: "0.85"
    });
  }))), /*#__PURE__*/React.createElement("p", {
    style: {
      textAlign: "center",
      marginTop: "0.5rem",
      fontWeight: "700",
      color: cfg.color
    }
  }, cfg.label), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: "0.5rem",
      fontSize: "0.875rem",
      color: "var(--ink-muted)"
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      marginBottom: "0.25rem"
    }
  }, /*#__PURE__*/React.createElement("strong", null, "Accurate:"), " dots cluster around the bullseye (true value)."), /*#__PURE__*/React.createElement("p", {
    style: {
      marginBottom: 0
    }
  }, /*#__PURE__*/React.createElement("strong", null, "Reliable:"), " dots cluster tightly together, regardless of where.")));
}

/* ================================================================
   SECTION 8.5 INTERACTIVE
   ================================================================ */

function ModelBuilderWalkthrough() {
  var _useState19 = useState(0),
    _useState20 = _slicedToArray(_useState19, 2),
    step = _useState20[0],
    setStep = _useState20[1];
  var steps = [{
    label: "1. Formulate a question",
    content: "We ask: Does hand span predict height in Year 8 students? This is specific, measurable, and testable.",
    color: "var(--accent-deep)"
  }, {
    label: "2. Plan data collection",
    content: "We will measure hand span (cm) and height (cm) for 20 students. These are continuous quantitative variables. We control for measurement method.",
    color: "#f59e0b"
  }, {
    label: "3. Collect and record data",
    content: "Each student measures their own hand span and height. Data is recorded in a table: Student | Hand span (cm) | Height (cm).",
    color: "#8b5cf6"
  }, {
    label: "4. Calculate statistics",
    content: "Mean hand span = 21.3 cm. Range = 9.5 cm. Mean height = 173 cm. Range = 38 cm.",
    color: "#10b981"
  }, {
    label: "5. Graph the data",
    content: "Plot a scatter graph: hand span on the x-axis, height on the y-axis. Draw a line of best fit.",
    color: "#ef4444"
  }, {
    label: "6. Identify the pattern",
    content: "The scatter plot shows a positive trend. Students with larger hand spans tend to be taller.",
    color: "#0891b2"
  }, {
    label: "7. Build and communicate model",
    content: "Our model: height increases by about 3.8 cm for each 1 cm increase in hand span. This is valid for hand spans between 16.5 cm and 26 cm.",
    color: "#3b82f6"
  }, {
    label: "8. Evaluate and reflect",
    content: "Limitations: small sample (one class), body proportions vary. Improvements: use a larger diverse sample, control for age and sex.",
    color: "#64748b"
  }];
  return /*#__PURE__*/React.createElement(Interactive, {
    title: "Model-building walkthrough",
    subtitle: "Step through the full data science process for a hand span vs height investigation.",
    takeaway: "Building a scientific model follows a complete cycle: from forming a question through collecting data, calculating statistics, graphing, identifying patterns, and finally evaluating the model's limitations."
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexWrap: "wrap",
      gap: "0.4rem",
      marginBottom: "1rem"
    }
  }, steps.map(function (s, i) {
    return /*#__PURE__*/React.createElement("button", {
      key: i,
      onClick: function onClick() {
        return setStep(i);
      },
      className: "chip".concat(i === step ? " accent" : ""),
      style: {
        cursor: "pointer",
        border: "2px solid ".concat(i === step ? s.color : "var(--border)"),
        fontWeight: i === step ? "700" : "400"
      }
    }, "Step ", i + 1);
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      background: "var(--surface-raised)",
      borderLeft: "4px solid ".concat(steps[step].color),
      borderRadius: "10px",
      padding: "1rem 1.25rem",
      minHeight: "80px"
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      fontWeight: "700",
      marginBottom: "0.35rem",
      color: steps[step].color
    }
  }, steps[step].label), /*#__PURE__*/React.createElement("p", {
    style: {
      marginBottom: 0
    }
  }, steps[step].content)), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: "0.5rem",
      marginTop: "0.75rem"
    }
  }, /*#__PURE__*/React.createElement("button", {
    className: "btn btn-ghost",
    onClick: function onClick() {
      return setStep(function (s) {
        return Math.max(0, s - 1);
      });
    },
    disabled: step === 0
  }, "Previous"), /*#__PURE__*/React.createElement("button", {
    className: "btn btn-accent",
    onClick: function onClick() {
      return setStep(function (s) {
        return Math.min(steps.length - 1, s + 1);
      });
    },
    disabled: step === steps.length - 1
  }, "Next step")));
}

/* Hand span scatter with line-of-best-fit predictions */
function HandSpanScatter() {
  var pts = [[16.5, 153], [17.0, 157], [17.8, 159], [18.0, 161], [18.5, 163], [19.0, 166], [19.5, 168], [20.0, 170], [20.5, 171], [21.0, 173], [21.5, 174], [22.0, 176], [22.5, 178], [23.0, 180], [23.5, 181], [24.0, 184], [24.5, 185], [25.0, 187], [25.5, 189], [26.0, 191]];
  var _useState21 = useState(21),
    _useState22 = _slicedToArray(_useState21, 2),
    targetSpan = _useState22[0],
    setTargetSpan = _useState22[1];
  var allX = pts.map(function (p) {
    return p[0];
  });
  var allY = pts.map(function (p) {
    return p[1];
  });
  var minX = 16;
  var maxX = 27;
  var minY = 148;
  var maxY = 196;
  var w = 520;
  var h = 210;
  var pad = {
    top: 15,
    right: 20,
    bottom: 42,
    left: 50
  };
  var cW = w - pad.left - pad.right;
  var cH = h - pad.top - pad.bottom;
  var xS = function xS(v) {
    return pad.left + (v - minX) / (maxX - minX) * cW;
  };
  var yS = function yS(v) {
    return pad.top + cH - (v - minY) / (maxY - minY) * cH;
  };

  // line of best fit
  var n = pts.length;
  var sumX = allX.reduce(function (a, b) {
    return a + b;
  }, 0);
  var sumY = allY.reduce(function (a, b) {
    return a + b;
  }, 0);
  var sumXY = pts.reduce(function (a, _ref5) {
    var _ref6 = _slicedToArray(_ref5, 2),
      x = _ref6[0],
      y = _ref6[1];
    return a + x * y;
  }, 0);
  var sumX2 = allX.reduce(function (a, x) {
    return a + x * x;
  }, 0);
  var slope = (n * sumXY - sumX * sumY) / (n * sumX2 - sumX * sumX);
  var intercept = (sumY - slope * sumX) / n;
  var pred = function pred(x) {
    return slope * x + intercept;
  };
  var predHeight = pred(targetSpan).toFixed(1);
  var isExtrap = targetSpan < Math.min.apply(Math, _toConsumableArray(allX)) || targetSpan > Math.max.apply(Math, _toConsumableArray(allX));
  return /*#__PURE__*/React.createElement(Interactive, {
    title: "Hand span vs height: live predictions",
    subtitle: "Drag the slider to predict height from hand span using the line of best fit.",
    takeaway: "A line of best fit lets you make predictions from a graphical model, but predictions become increasingly uncertain when you extrapolate beyond the range of your original measurements."
  }, /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 ".concat(w, " ").concat(h),
    width: "100%",
    style: {
      maxWidth: w,
      display: "block",
      margin: "0 auto"
    }
  }, [155, 165, 175, 185, 195].map(function (v) {
    var y = yS(v);
    return /*#__PURE__*/React.createElement("g", {
      key: v
    }, /*#__PURE__*/React.createElement("line", {
      x1: pad.left,
      x2: w - pad.right,
      y1: y,
      y2: y,
      stroke: "var(--border)",
      strokeDasharray: "3 2"
    }), /*#__PURE__*/React.createElement("text", {
      x: pad.left - 6,
      y: y + 4,
      textAnchor: "end",
      fontSize: "10",
      fill: "var(--ink-muted)"
    }, v));
  }), [17, 19, 21, 23, 25].map(function (v) {
    return /*#__PURE__*/React.createElement("text", {
      key: v,
      x: xS(v),
      y: pad.top + cH + 14,
      textAnchor: "middle",
      fontSize: "10",
      fill: "var(--ink-muted)"
    }, v);
  }), /*#__PURE__*/React.createElement("text", {
    x: pad.left + cW / 2,
    y: h - 2,
    textAnchor: "middle",
    fontSize: "11",
    fill: "var(--ink-muted)"
  }, "Hand span (cm)"), /*#__PURE__*/React.createElement("text", {
    transform: "translate(12,".concat(pad.top + cH / 2, ") rotate(-90)"),
    textAnchor: "middle",
    fontSize: "11",
    fill: "var(--ink-muted)"
  }, "Height (cm)"), /*#__PURE__*/React.createElement("line", {
    x1: xS(minX),
    y1: yS(pred(minX)),
    x2: xS(maxX),
    y2: yS(pred(maxX)),
    stroke: "var(--accent-deep)",
    strokeWidth: "2",
    strokeDasharray: "6 3"
  }), pts.map(function (_ref7, i) {
    var _ref8 = _slicedToArray(_ref7, 2),
      x = _ref8[0],
      y = _ref8[1];
    return /*#__PURE__*/React.createElement("circle", {
      key: i,
      cx: xS(x),
      cy: yS(y),
      r: "5",
      fill: "var(--accent-soft)",
      stroke: "var(--accent-deep)",
      strokeWidth: "1.5"
    });
  }), /*#__PURE__*/React.createElement("line", {
    x1: xS(targetSpan),
    x2: xS(targetSpan),
    y1: pad.top,
    y2: pad.top + cH,
    stroke: isExtrap ? "#ef4444" : "#10b981",
    strokeDasharray: "4 3",
    strokeWidth: "2"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: xS(targetSpan),
    cy: yS(pred(targetSpan)),
    r: "7",
    fill: isExtrap ? "#ef4444" : "#10b981"
  }), /*#__PURE__*/React.createElement("line", {
    x1: pad.left,
    x2: pad.left,
    y1: pad.top,
    y2: pad.top + cH,
    stroke: "var(--border)"
  }), /*#__PURE__*/React.createElement("line", {
    x1: pad.left,
    x2: w - pad.right,
    y1: pad.top + cH,
    y2: pad.top + cH,
    stroke: "var(--border)"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: "0.75rem"
    }
  }, /*#__PURE__*/React.createElement(Slider, {
    label: "Hand span",
    min: 16,
    max: 27,
    step: 0.5,
    value: targetSpan,
    onChange: setTargetSpan,
    unit: " cm"
  })), /*#__PURE__*/React.createElement("div", {
    className: "stat-readout"
  }, /*#__PURE__*/React.createElement(Stat, {
    value: "".concat(predHeight, " cm"),
    label: "Predicted height"
  }), /*#__PURE__*/React.createElement(Stat, {
    value: isExtrap ? "Extrapolation" : "Interpolation",
    label: "Prediction type"
  })), isExtrap && /*#__PURE__*/React.createElement("p", {
    style: {
      color: "#ef4444",
      marginTop: "0.5rem",
      marginBottom: 0
    }
  }, "You are outside the measured range. This is extrapolation and carries higher uncertainty."));
}

/* ================================================================
   SECTION COMPONENTS
   ================================================================ */

function Section81(_ref9) {
  var progress = _ref9.progress,
    setProgress = _ref9.setProgress;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    className: "topic-head"
  }, /*#__PURE__*/React.createElement("div", {
    className: "eyebrow"
  }, "8.1 Data"), /*#__PURE__*/React.createElement("h1", null, "Where does data come from?"), /*#__PURE__*/React.createElement("p", {
    className: "lead"
  }, "Data surrounds us everywhere. Learning to classify, collect, and question data is the first step in data science.")), /*#__PURE__*/React.createElement(DotPoint, {
    id: "8.1.1",
    title: "Sources of data and their applications",
    progress: progress,
    setProgress: setProgress
  }, /*#__PURE__*/React.createElement("p", null, /*#__PURE__*/React.createElement(Term, {
    def: "Any collection of facts, measurements, observations, or descriptions that can be recorded and analysed."
  }, "Data"), " is all around you. Scientists measure temperature and rainfall. Governments count populations. Hospitals record patient health. Even the step count on your phone is a data point. The source of data shapes how reliable and useful it is for answering questions."), /*#__PURE__*/React.createElement("p", null, "Data comes in different types. ", /*#__PURE__*/React.createElement(Term, {
    def: "Data that consists of numbers and can be measured or counted."
  }, "Quantitative data"), " uses numbers, such as temperature in degrees Celsius or the height of a plant. ", /*#__PURE__*/React.createElement(Term, {
    def: "Data that describes categories or qualities and cannot be averaged."
  }, "Qualitative data"), " uses descriptions or categories, such as hair colour or cloud type. Quantitative data divides further into ", /*#__PURE__*/React.createElement(Term, {
    def: "Data counted in whole numbers, such as number of students absent."
  }, "discrete data"), " (whole number counts) and ", /*#__PURE__*/React.createElement(Term, {
    def: "Data that can take any value on a scale, such as mass or time."
  }, "continuous data"), " (measured on a smooth scale)."), /*#__PURE__*/React.createElement("p", null, "Data can also be classified by who collected it. ", /*#__PURE__*/React.createElement(Term, {
    def: "Data collected directly by the researcher through their own experiment, survey, or observation."
  }, "Primary data"), " you collect yourself, for example recording temperatures in a class experiment. ", /*#__PURE__*/React.createElement(Term, {
    def: "Data collected by someone else that a researcher uses, such as downloading records from a government database."
  }, "Secondary data"), " was collected by someone else, such as downloading rainfall records from the Bureau of Meteorology."), /*#__PURE__*/React.createElement(Callout, {
    kind: "key",
    title: "Data types matter"
  }, "Choosing the correct data type for a question determines which graphs and statistical tools you can use. Averages only make sense for quantitative data."), /*#__PURE__*/React.createElement(DataTypeSorter, null), /*#__PURE__*/React.createElement(QGroup, {
    title: "Check yourself"
  }, /*#__PURE__*/React.createElement(MCQ, {
    num: 1,
    question: "A student records how many birds visit a feeder each day for a week. What type of data is this?",
    options: ["Qualitative", "Continuous quantitative", "Discrete quantitative", "Secondary data"],
    correct: 2,
    explain: "You count birds in whole numbers (you cannot see 3.7 birds), so this is discrete quantitative data."
  }), /*#__PURE__*/React.createElement(WrittenQ, {
    num: 2,
    question: "Give one example of primary data and one example of secondary data a scientist might use to study climate change. Explain why each fits its category.",
    model: "Primary: a student measures daily temperature at school using a thermometer. They collected it themselves. Secondary: the scientist downloads 50-year temperature records from the Bureau of Meteorology. Someone else collected the original data."
  }))), /*#__PURE__*/React.createElement(DotPoint, {
    id: "8.1.2",
    title: "Digital footprints and safe engagement with digital systems",
    progress: progress,
    setProgress: setProgress
  }, /*#__PURE__*/React.createElement("p", null, "Every time you go online, you leave behind traces called your ", /*#__PURE__*/React.createElement(Term, {
    def: "The trail of data left behind by a person's online activities, including information deliberately shared and passively collected."
  }, "digital footprint"), ". An ", /*#__PURE__*/React.createElement(Term, {
    def: "A digital footprint created when a person deliberately shares information, such as posting a photo or sending a message."
  }, "active digital footprint"), " is created when you post a photo, fill in a form, or send a message. A ", /*#__PURE__*/React.createElement(Term, {
    def: "A digital footprint created without the user's direct awareness, such as a website tracking browsing history via cookies."
  }, "passive digital footprint"), " is created without you knowing it, when websites track your browsing history, apps record your location, and search engines store your queries."), /*#__PURE__*/React.createElement("p", null, "Companies use digital footprint data to target advertising. Governments use it to study population behaviour. Researchers use it to identify social trends. However, this data also carries risks: it can be misused by hackers, sold without your consent, or used to discriminate. In data science, strict ethical guidelines protect people's privacy when working with personal datasets."), /*#__PURE__*/React.createElement(Callout, {
    kind: "warn",
    title: "Staying safe online"
  }, "Use strong unique passwords. Review app permissions carefully. Think before you post. A message or image you delete may still exist on other servers."), /*#__PURE__*/React.createElement(DigitalFootprintSorter, null), /*#__PURE__*/React.createElement(QGroup, {
    title: "Check yourself"
  }, /*#__PURE__*/React.createElement(MCQ, {
    num: 3,
    question: "Which of these creates a PASSIVE digital footprint?",
    options: ["Posting a comment on a video", "An app recording your location in the background", "Filling in your name on a website form", "Sending an email to a friend"],
    correct: 1,
    explain: "A passive footprint is created without your direct action. An app recording your location runs in the background without you explicitly sharing that data."
  }), /*#__PURE__*/React.createElement(WrittenQ, {
    num: 4,
    question: "Explain why it may be impossible to completely erase a digital footprint once it is created.",
    model: "Once data is shared online, it can be copied, cached, or stored by multiple servers worldwide. Even if a user deletes a post, copies may exist in backups or on devices of others who downloaded the content."
  }))), /*#__PURE__*/React.createElement(DotPoint, {
    id: "8.1.3",
    title: "Data science as an interdisciplinary field",
    progress: progress,
    setProgress: setProgress
  }, /*#__PURE__*/React.createElement("p", null, /*#__PURE__*/React.createElement(Term, {
    def: "An interdisciplinary field that uses statistics, computing, scientific methods, and domain knowledge to extract meaningful insights from data."
  }, "Data science"), " is the practice of turning raw data into knowledge. It is ", /*#__PURE__*/React.createElement(Term, {
    def: "Drawing knowledge and methods from multiple different fields rather than a single subject."
  }, "interdisciplinary"), ", meaning it combines statistics, computer science, mathematics, and specialist knowledge of the topic being studied. No single subject can do the whole job alone."), /*#__PURE__*/React.createElement("p", null, "The scientific method is at the core of data science. A data scientist starts with a question, collects and cleans data, applies ", /*#__PURE__*/React.createElement(Term, {
    def: "A step-by-step computational procedure that processes data systematically to find patterns or make predictions."
  }, "algorithms"), " to find patterns, builds a model, and communicates results honestly. Algorithms can process millions of data points far faster than any human, but they are only as reliable as the data they are trained on. Biased or incomplete data produces unreliable results no matter how powerful the algorithm."), /*#__PURE__*/React.createElement(Callout, {
    kind: "fact",
    title: "Data science in action"
  }, "Australian epidemiologists used data science models during COVID-19 to predict hospital demand and guide vaccination rollout decisions. The models drew on statistics, computing, and medical knowledge together."), /*#__PURE__*/React.createElement(Figure, {
    caption: "The data science process: from question to communicated findings."
  }, /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 580 60",
    width: "100%",
    style: {
      maxWidth: 580
    }
  }, ["Ask a question", "Collect data", "Clean data", "Analyse patterns", "Build model", "Communicate"].map(function (s, i) {
    return /*#__PURE__*/React.createElement("g", {
      key: s,
      transform: "translate(".concat(i * 96 + 4, ", 8)")
    }, /*#__PURE__*/React.createElement("rect", {
      width: "86",
      height: "40",
      rx: "8",
      fill: "var(--accent-soft)",
      stroke: "var(--accent-deep)"
    }), /*#__PURE__*/React.createElement("text", {
      x: "43",
      y: "16",
      textAnchor: "middle",
      fontSize: "9.5",
      fontWeight: "700",
      fill: "var(--ink)"
    }, s.split(" ").slice(0, 2).join(" ")), /*#__PURE__*/React.createElement("text", {
      x: "43",
      y: "28",
      textAnchor: "middle",
      fontSize: "9",
      fill: "var(--ink-muted)"
    }, s.split(" ").slice(2).join(" ")), i < 5 && /*#__PURE__*/React.createElement("text", {
      x: "95",
      y: "26",
      textAnchor: "middle",
      fontSize: "16",
      fill: "var(--accent-deep)"
    }, "\u203A"));
  }))), /*#__PURE__*/React.createElement(QGroup, {
    title: "Check yourself"
  }, /*#__PURE__*/React.createElement(MCQ, {
    num: 5,
    question: "Which best describes why data science is called 'interdisciplinary'?",
    options: ["It only uses statistics.", "It combines knowledge from statistics, computing, mathematics, and specialist domains.", "It is only practised by scientists.", "It only works with digital data."],
    correct: 1,
    explain: "Data science draws on multiple fields. A data scientist investigating climate change needs atmospheric science, statistics, programming, and communication skills."
  }))));
}
function Section82(_ref0) {
  var progress = _ref0.progress,
    setProgress = _ref0.setProgress;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    className: "topic-head"
  }, /*#__PURE__*/React.createElement("div", {
    className: "eyebrow"
  }, "8.2 Scientific Models"), /*#__PURE__*/React.createElement("h1", null, "What is a scientific model?"), /*#__PURE__*/React.createElement("p", {
    className: "lead"
  }, "Scientists build simplified representations of complex phenomena to understand, predict, and communicate how the world works.")), /*#__PURE__*/React.createElement(Figure, {
    src: "img/model.png",
    caption: "A trend line models the pattern in scattered data and predicts what comes next."
  }), /*#__PURE__*/React.createElement(DotPoint, {
    id: "8.2.1",
    title: "Scientific inquiry compared with non-scientific approaches",
    progress: progress,
    setProgress: setProgress
  }, /*#__PURE__*/React.createElement("p", null, /*#__PURE__*/React.createElement(Term, {
    def: "A systematic process for investigating natural phenomena that relies on evidence, reproducibility, and the willingness to revise conclusions when new data emerge."
  }, "Scientific inquiry"), " depends on evidence. A scientific claim must be ", /*#__PURE__*/React.createElement(Term, {
    def: "Capable of being confirmed or refuted by gathering evidence through experiment or observation."
  }, "testable"), ": it must be possible to design an investigation that could support or disprove it. Scientists conduct controlled experiments, measure variables carefully, and subject their findings to ", /*#__PURE__*/React.createElement(Term, {
    def: "The process by which other qualified scientists examine a study's methods, data, and conclusions before results are published."
  }, "peer review"), "."), /*#__PURE__*/React.createElement("p", null, "Non-scientific approaches may rely on tradition, authority, intuition, or spiritual belief. They are not necessarily wrong as ways of viewing the world, but they operate by different rules: claims may be accepted without experimental testing, or may be untestable by design. For example, the claim \"plants grow taller when watered daily than weekly\" is scientific because it is measurable. The claim \"this land has a spiritual connection to our ancestors\" is meaningful to those who hold it, but it cannot be tested experimentally."), /*#__PURE__*/React.createElement(Callout, {
    kind: "key",
    title: "Key features of scientific inquiry"
  }, "Evidence-based. Testable hypothesis. Controlled variables. Repeatable by other scientists. Revised when new evidence demands it."), /*#__PURE__*/React.createElement(ScientificInquiryQuiz, null), /*#__PURE__*/React.createElement(QGroup, {
    title: "Check yourself"
  }, /*#__PURE__*/React.createElement(MCQ, {
    num: 1,
    question: "Which statement is a SCIENTIFIC claim?",
    options: ["Plants have feelings.", "Adding nitrogen fertiliser increases wheat yield measured over 6 weeks.", "The moon brings good luck to farmers.", "Nature is beautiful and should be protected."],
    correct: 1,
    explain: "This claim identifies specific variables (nitrogen fertiliser and wheat yield) and a timeframe. It can be tested by measuring plant growth with and without added nitrogen."
  }), /*#__PURE__*/React.createElement(WrittenQ, {
    num: 2,
    question: "Explain why a result that cannot be reproduced by other scientists is not accepted as scientific evidence.",
    model: "Science requires repeatability: if only one scientist in one lab gets a result, it might be due to their specific equipment, sample, or technique. When independent scientists reproduce the same result in different settings, confidence grows that the result reflects a genuine natural phenomenon rather than a fluke."
  }))), /*#__PURE__*/React.createElement(DotPoint, {
    id: "8.2.2",
    title: "Scientific models as representations based on data and observations",
    progress: progress,
    setProgress: setProgress
  }, /*#__PURE__*/React.createElement("p", null, "A ", /*#__PURE__*/React.createElement(Term, {
    def: "A simplified representation of a real-world phenomenon, built from data and observations, used to understand, predict, and communicate about that phenomenon."
  }, "scientific model"), " is not a perfect copy of reality. It is a simplified tool built from data to capture the most important features of a phenomenon. A map is a model of a landscape: it shows roads and distances but leaves out the colour of individual buildings or the sound of traffic. That simplification is what makes it useful."), /*#__PURE__*/React.createElement("p", null, "All models are grounded in data. The more data available, the more accurately a model can represent reality. But all models have limits: they are built from incomplete data and may fail in conditions outside the original observations. Scientists test their models by comparing predictions to new measurements. When predictions fail, the model is revised or replaced. This cycle of observation, modelling, testing, and revision drives scientific progress."), /*#__PURE__*/React.createElement(Callout, {
    kind: "tip",
    title: "All models are wrong, but some are useful"
  }, "A model does not need to be perfect to be valuable. A weather forecast model may be wrong sometimes, but it still helps you decide whether to carry an umbrella. Usefulness, not perfection, is the standard."), /*#__PURE__*/React.createElement(Figure, {
    caption: "The model-building cycle: data feeds models, models generate predictions, predictions are tested against new data."
  }, /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 500 100",
    width: "100%",
    style: {
      maxWidth: 500
    }
  }, [{
    label: "Collect data",
    x: 10,
    y: 30
  }, {
    label: "Find patterns",
    x: 135,
    y: 30
  }, {
    label: "Build model",
    x: 260,
    y: 30
  }, {
    label: "Test predictions",
    x: 385,
    y: 30
  }].map(function (s, i, arr) {
    return /*#__PURE__*/React.createElement("g", {
      key: s.label
    }, /*#__PURE__*/React.createElement("rect", {
      x: s.x,
      y: s.y,
      width: "105",
      height: "38",
      rx: "8",
      fill: "var(--accent-soft)",
      stroke: "var(--accent-deep)"
    }), /*#__PURE__*/React.createElement("text", {
      x: s.x + 52,
      y: s.y + 23,
      textAnchor: "middle",
      fontSize: "11",
      fontWeight: "700",
      fill: "var(--ink)"
    }, s.label), i < arr.length - 1 && /*#__PURE__*/React.createElement("text", {
      x: s.x + 115,
      y: s.y + 25,
      textAnchor: "middle",
      fontSize: "18",
      fill: "var(--accent-deep)"
    }, "\u203A"));
  }), /*#__PURE__*/React.createElement("defs", null, /*#__PURE__*/React.createElement("marker", {
    id: "ds-cycle-arrow",
    markerWidth: "8",
    markerHeight: "8",
    refX: "6",
    refY: "3",
    orient: "auto"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M0,0 L6,3 L0,6 Z",
    fill: "var(--accent-deep)"
  }))), /*#__PURE__*/React.createElement("path", {
    d: "M 437 70 Q 437 86 247 86 Q 62 86 62 72",
    fill: "none",
    stroke: "var(--accent-deep)",
    strokeWidth: "1.5",
    markerEnd: "url(#ds-cycle-arrow)"
  }), /*#__PURE__*/React.createElement("text", {
    x: "250",
    y: "97",
    textAnchor: "middle",
    fontSize: "10",
    fill: "var(--ink-muted)"
  }, "Revise if predictions fail"))), /*#__PURE__*/React.createElement(QGroup, {
    title: "Check yourself"
  }, /*#__PURE__*/React.createElement(MCQ, {
    num: 3,
    question: "Why is a model NEVER a perfect copy of the real world?",
    options: ["Scientists are not skilled enough to build perfect models.", "Models are built from finite data under specific conditions; reality is infinitely complex.", "Models are only used for teaching, not real science.", "Models must be simple so students can understand them."],
    correct: 1,
    explain: "Every model involves assumptions and simplifications. No model can capture every detail of reality. The goal is a useful representation, not a perfect one."
  }))), /*#__PURE__*/React.createElement(DotPoint, {
    id: "8.2.3",
    title: "Types of models used by scientists",
    progress: progress,
    setProgress: setProgress
  }, /*#__PURE__*/React.createElement("p", null, "Scientists use different types of models depending on what they are studying. ", /*#__PURE__*/React.createElement(Term, {
    def: "Three-dimensional objects built to represent structures or systems, such as a globe or a model DNA double helix."
  }, "Physical models"), " are 3D objects you can hold. ", /*#__PURE__*/React.createElement(Term, {
    def: "Diagrams, words, or analogies that represent ideas and relationships, such as a food web or water cycle diagram."
  }, "Conceptual models"), " use diagrams or analogies. ", /*#__PURE__*/React.createElement(Term, {
    def: "Equations and numerical relationships that represent how variables interact, such as F = ma."
  }, "Mathematical models"), " use formulas. ", /*#__PURE__*/React.createElement(Term, {
    def: "Computer programs that simulate complex systems using algorithms and mathematical rules."
  }, "Computational models"), " run on computers to simulate complex systems. ", /*#__PURE__*/React.createElement(Term, {
    def: "Visual representations of data through graphs, charts, maps, and tables."
  }, "Graphical models"), " display data visually, and are central to data science."), /*#__PURE__*/React.createElement("p", null, "In data science, graphical models are used constantly. A scatter plot, bar chart, or line graph is a model of the relationship between variables in a dataset. It shows what the data reveals and allows predictions to be made. Choosing the right type of model for a question is itself a key skill."), /*#__PURE__*/React.createElement(ModelTypeSorter, null), /*#__PURE__*/React.createElement(RainfallBarChart, null), /*#__PURE__*/React.createElement(QGroup, {
    title: "Check yourself"
  }, /*#__PURE__*/React.createElement(MCQ, {
    num: 4,
    question: "A scientist uses equations to predict how a virus spreads through a school. What type of model is this?",
    options: ["Physical model", "Conceptual model", "Mathematical or computational model", "Graphical model"],
    correct: 2,
    explain: "Using equations to predict spread is a mathematical model. When run on a computer with data inputs, it becomes a computational model."
  }), /*#__PURE__*/React.createElement(WrittenQ, {
    num: 5,
    question: "Explain why a food web is described as a conceptual model rather than a physical one.",
    model: "A food web uses a diagram with labelled arrows to represent feeding relationships between organisms. It cannot be directly observed as a whole physical object. It is a simplified representation of complex real-world interactions built from observations of what organisms eat."
  }))), /*#__PURE__*/React.createElement(DotPoint, {
    id: "8.2.4",
    title: "Analysing models to identify trends and generate predictions",
    progress: progress,
    setProgress: setProgress
  }, /*#__PURE__*/React.createElement("p", null, "Analysing a model means examining its data to identify ", /*#__PURE__*/React.createElement(Term, {
    def: "The general direction or pattern of change in data, such as consistently increasing, decreasing, or remaining constant."
  }, "trends"), ", spot ", /*#__PURE__*/React.createElement(Term, {
    def: "A data point that falls far outside the general pattern of the rest of the dataset."
  }, "outliers"), ", and make predictions. From a graph, you can ", /*#__PURE__*/React.createElement(Term, {
    def: "Estimating a value within the range of measured data using the established trend."
  }, "interpolate"), " (estimate values within the measured range) or ", /*#__PURE__*/React.createElement(Term, {
    def: "Predicting a value beyond the range of measured data by projecting the trend forward or backward."
  }, "extrapolate"), " (predict values beyond the data range). Extrapolation always carries more uncertainty because conditions outside the measured range may behave differently."), /*#__PURE__*/React.createElement("p", null, "Computer-based models are especially powerful because they allow scientists to run ", /*#__PURE__*/React.createElement(Term, {
    def: "Virtual experiments where variables are changed and the model calculates outcomes rapidly."
  }, "simulations"), ". A climate model can simulate the effect of doubling atmospheric carbon dioxide without waiting decades for real-world change. Changing one variable while holding others constant is called ", /*#__PURE__*/React.createElement(Term, {
    def: "Changing one variable in a computer model while keeping others constant to see how sensitive the output is to that variable."
  }, "sensitivity analysis"), ". It reveals which variables have the greatest influence on a system."), /*#__PURE__*/React.createElement(PopulationModel, null), /*#__PURE__*/React.createElement(QGroup, {
    title: "Check yourself"
  }, /*#__PURE__*/React.createElement(MCQ, {
    num: 6,
    question: "A student uses a population graph to predict the city's population in a year that was not measured but falls between two measured years. What is this called?",
    options: ["Extrapolation", "Interpolation", "Sensitivity analysis", "Simulation"],
    correct: 1,
    explain: "Interpolation estimates a value within the range of existing measurements. It is less risky than extrapolation because data on both sides supports the estimate."
  }), /*#__PURE__*/React.createElement(WrittenQ, {
    num: 7,
    question: "Describe one advantage of using a computer simulation model over a real-world experiment.",
    model: "A computer simulation allows scientists to change variables instantly and run hundreds of scenarios in seconds, safely and cheaply. Some real-world experiments would be impossible, unethical, or take decades to complete."
  }))));
}
function Section83(_ref1) {
  var progress = _ref1.progress,
    setProgress = _ref1.setProgress;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    className: "topic-head"
  }, /*#__PURE__*/React.createElement("div", {
    className: "eyebrow"
  }, "8.3 Applications of Models"), /*#__PURE__*/React.createElement("h1", null, "From data to theory"), /*#__PURE__*/React.createElement("p", {
    className: "lead"
  }, "Models do not appear fully formed. They are built patiently from evidence, tested repeatedly, and refined into scientific theories.")), /*#__PURE__*/React.createElement(DotPoint, {
    id: "8.3.1",
    title: "Data and observations used to develop models",
    progress: progress,
    setProgress: setProgress
  }, /*#__PURE__*/React.createElement("p", null, "Before a model can be built, scientists must gather data through observation, measurement, and experimentation. The quality and quantity of data directly determines the accuracy of the resulting model. ", /*#__PURE__*/React.createElement(Term, {
    def: "Data noting what is seen or noticed without necessarily assigning precise numbers."
  }, "Observational data"), " can suggest initial relationships and hypotheses. ", /*#__PURE__*/React.createElement(Term, {
    def: "Data consisting of precise numerical values recorded through measurement."
  }, "Quantitative measurement data"), " provides the numerical foundation on which a mathematical model is built."), /*#__PURE__*/React.createElement("p", null, "The plate tectonics model is a great example. People noticed the coastlines of Africa and South America looked like puzzle pieces. Observations of similar rock formations and fossils on both continents added evidence. Measurements of the seafloor showed new rock forming at mid-ocean ridges. Seismic data showed earthquakes concentrating along specific lines. No single dataset built the model. It required many independent lines of evidence working together."), /*#__PURE__*/React.createElement(Callout, {
    kind: "fact",
    title: "John Snow's spatial model"
  }, "In 1854, doctor John Snow mapped cholera deaths in London onto a street map. The cluster of deaths around one water pump was instantly visible in the spatial model. He identified the contaminated pump as the source before germ theory was even established. This was data science in action, over 150 years ago."), /*#__PURE__*/React.createElement(Figure, {
    caption: "Multiple independent evidence types contributed to the plate tectonics model."
  }, /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 580 70",
    width: "100%",
    style: {
      maxWidth: 580
    }
  }, ["Coastline shapes", "Fossil distribution", "Rock type and age", "Seafloor spreading", "Earthquake locations", "Plate tectonics model"].map(function (s, i) {
    return /*#__PURE__*/React.createElement("g", {
      key: s,
      transform: "translate(".concat(i * 95 + 5, ", 14)")
    }, /*#__PURE__*/React.createElement("rect", {
      width: "88",
      height: "42",
      rx: "8",
      fill: i === 5 ? "var(--accent-deep)" : "var(--accent-soft)",
      stroke: "var(--accent-deep)"
    }), /*#__PURE__*/React.createElement("text", {
      x: "44",
      y: "17",
      textAnchor: "middle",
      fontSize: "9.5",
      fontWeight: i === 5 ? "800" : "700",
      fill: i === 5 ? "#fff" : "var(--ink)"
    }, s.split(" ").slice(0, 2).join(" ")), /*#__PURE__*/React.createElement("text", {
      x: "44",
      y: "30",
      textAnchor: "middle",
      fontSize: "9",
      fill: i === 5 ? "#fff" : "var(--ink-muted)"
    }, s.split(" ").slice(2).join(" ")), i < 5 && /*#__PURE__*/React.createElement("text", {
      x: "96",
      y: "28",
      textAnchor: "middle",
      fontSize: "16",
      fill: "var(--accent-deep)"
    }, "\u203A"));
  }))), /*#__PURE__*/React.createElement(QGroup, {
    title: "Check yourself"
  }, /*#__PURE__*/React.createElement(MCQ, {
    num: 1,
    question: "Why does having multiple INDEPENDENT lines of evidence increase confidence in a model?",
    options: ["More data is always better regardless of type.", "Each dataset has its own potential errors; when independent sources agree, it is unlikely they are all wrong in the same way.", "Computer algorithms can only process multiple datasets.", "Peer review requires multiple data types."],
    correct: 1,
    explain: "If independent datasets with different possible errors all point to the same conclusion, the probability that all are wrong in the same direction is very low. This mutual confirmation greatly strengthens the model."
  }), /*#__PURE__*/React.createElement(WrittenQ, {
    num: 2,
    question: "A scientist wants to build a model of fish populations in a lake. List three types of data they might collect and explain the role of each.",
    model: "1. Total fish count (net sampling): provides population size data. 2. Water temperature and chemistry: environmental factors that influence fish survival. 3. Prey species abundance: food availability affects how many fish the lake can support."
  }))), /*#__PURE__*/React.createElement(DotPoint, {
    id: "8.3.2",
    title: "How scientists develop workable theories from models",
    progress: progress,
    setProgress: setProgress
  }, /*#__PURE__*/React.createElement("p", null, "In everyday speech, \"theory\" often means a guess. In science, a ", /*#__PURE__*/React.createElement(Term, {
    def: "A well-substantiated explanation of a natural phenomenon, supported by large amounts of evidence from multiple independent sources, tested repeatedly, and accepted by the scientific community."
  }, "scientific theory"), " is far more powerful: it is the strongest type of explanation science can offer. The theory of evolution, the germ theory of disease, and the theory of plate tectonics have all withstood enormous amounts of testing and have guided major practical advances."), /*#__PURE__*/React.createElement("p", null, "The pathway from a model to a theory involves many stages. A scientist builds a preliminary model from data, publishes it for peer review, and other scientists test its predictions independently. If the model withstands repeated testing from many independent groups, and if it successfully predicts new observations, it gradually gains the broad scientific acceptance needed to be called a theory. A theory is never considered proven beyond all doubt: it remains open to revision if compelling new evidence demands it."), /*#__PURE__*/React.createElement(Callout, {
    kind: "key",
    title: "Theory does not mean guess"
  }, "When scientists say something is a theory, they mean it has survived enormous amounts of testing. Germ theory has been confirmed by countless experiments and has guided the development of antiseptics, vaccines and antibiotics that have saved many millions of lives."), /*#__PURE__*/React.createElement(Figure, {
    caption: "The pathway from initial observation to a workable scientific theory."
  }, /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 580 60",
    width: "100%",
    style: {
      maxWidth: 580
    }
  }, ["Observation + data", "Hypothesis", "Preliminary model", "Peer review", "Independent testing", "Scientific theory"].map(function (s, i) {
    return /*#__PURE__*/React.createElement("g", {
      key: s,
      transform: "translate(".concat(i * 95 + 5, ", 8)")
    }, /*#__PURE__*/React.createElement("rect", {
      width: "88",
      height: "42",
      rx: "8",
      fill: i === 5 ? "var(--accent-deep)" : "var(--accent-soft)",
      stroke: "var(--accent-deep)"
    }), /*#__PURE__*/React.createElement("text", {
      x: "44",
      y: "17",
      textAnchor: "middle",
      fontSize: "9.5",
      fontWeight: i === 5 ? "800" : "700",
      fill: i === 5 ? "#fff" : "var(--ink)"
    }, s.split(" ").slice(0, 2).join(" ")), /*#__PURE__*/React.createElement("text", {
      x: "44",
      y: "30",
      textAnchor: "middle",
      fontSize: "9",
      fill: i === 5 ? "#fff" : "var(--ink-muted)"
    }, s.split(" ").slice(2).join(" ")), i < 5 && /*#__PURE__*/React.createElement("text", {
      x: "96",
      y: "28",
      textAnchor: "middle",
      fontSize: "16",
      fill: "var(--accent-deep)"
    }, "\u203A"));
  }))), /*#__PURE__*/React.createElement(QGroup, {
    title: "Check yourself"
  }, /*#__PURE__*/React.createElement(MCQ, {
    num: 3,
    question: "A student says 'evolution is only a theory, so it might be wrong.' What is the flaw in this reasoning?",
    options: ["The student is correct; theories can be wrong.", "In science, a theory is the strongest possible explanation, supported by enormous amounts of evidence from many independent sources.", "Theories are proven facts and can never be changed.", "Evolution has not been tested enough to be a theory."],
    correct: 1,
    explain: "'Theory' in science does not mean guess. A scientific theory has survived repeated testing by independent researchers. The theory of evolution is one of the most thoroughly tested explanations in all of science."
  }), /*#__PURE__*/React.createElement(WrittenQ, {
    num: 4,
    question: "Describe two characteristics that a model must demonstrate before it can be considered a scientific theory.",
    model: "1. The model must generate predictions that are confirmed by new, independent observations. 2. The model must be tested repeatedly by independent scientists in different conditions without being refuted. Both characteristics show that the model is robust and not just a result of one scientist's specific data or methods."
  }))));
}
function Section84(_ref10) {
  var progress = _ref10.progress,
    setProgress = _ref10.setProgress;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    className: "topic-head"
  }, /*#__PURE__*/React.createElement("div", {
    className: "eyebrow"
  }, "8.4 Collecting, Using and Analysing Datasets"), /*#__PURE__*/React.createElement("h1", null, "Collecting and analysing data"), /*#__PURE__*/React.createElement("p", {
    className: "lead"
  }, "Good data collection is the foundation of reliable science. Learn to ask testable questions, calculate key statistics, and find patterns.")), /*#__PURE__*/React.createElement(Figure, {
    src: "img/analysing.png",
    caption: "Repeated trials are collected, charted and examined for patterns."
  }), /*#__PURE__*/React.createElement(DotPoint, {
    id: "8.4.1",
    title: "Formulating and investigating scientific questions",
    progress: progress,
    setProgress: setProgress
  }, /*#__PURE__*/React.createElement("p", null, "A ", /*#__PURE__*/React.createElement(Term, {
    def: "A question that can be investigated by collecting and analysing measurable data, with identifiable variables and a testable prediction."
  }, "scientific question"), " is specific, measurable, and testable. Compare \"Does exercise affect pulse?\" with \"Does the time spent jogging (0, 5 or 10 minutes) change the pulse rate (beats per minute) of Year 8 students measured 2 minutes after stopping?\" The second version identifies the ", /*#__PURE__*/React.createElement(Term, {
    def: "The variable a researcher deliberately changes in an experiment."
  }, "independent variable"), " (jogging time), the ", /*#__PURE__*/React.createElement(Term, {
    def: "The variable measured as a result of changing the independent variable."
  }, "dependent variable"), " (pulse rate), the subjects, and the measurement method."), /*#__PURE__*/React.createElement("p", null, "A good scientific question leads to a ", /*#__PURE__*/React.createElement(Term, {
    def: "An educated prediction about the outcome of an investigation, written in the form: if (independent variable), then (dependent variable) will change because (scientific reasoning)."
  }, "hypothesis"), ": a prediction in the form \"If [independent variable] changes, then [dependent variable] will [change in this way], because [reason].\" The hypothesis guides the design of the data collection and gives you something to test your results against."), /*#__PURE__*/React.createElement(Callout, {
    kind: "key",
    title: "Variables in a fair test"
  }, "Independent variable: what you change. Dependent variable: what you measure. Controlled variables: everything else you keep the same to make the test fair."), /*#__PURE__*/React.createElement(Figure, {
    caption: "A well-structured scientific question identifies three variable types clearly."
  }, /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 520 56",
    width: "100%",
    style: {
      maxWidth: 520
    }
  }, [{
    label: "Independent variable",
    sub: "What you change",
    color: "var(--accent-deep)"
  }, {
    label: "Dependent variable",
    sub: "What you measure",
    color: "#8b5cf6"
  }, {
    label: "Controlled variables",
    sub: "What you keep the same",
    color: "#10b981"
  }].map(function (s, i) {
    return /*#__PURE__*/React.createElement("g", {
      key: s.label,
      transform: "translate(".concat(i * 173 + 4, ", 6)")
    }, /*#__PURE__*/React.createElement("rect", {
      width: "164",
      height: "44",
      rx: "10",
      fill: "var(--surface-raised)",
      stroke: s.color,
      strokeWidth: "2"
    }), /*#__PURE__*/React.createElement("text", {
      x: "82",
      y: "21",
      textAnchor: "middle",
      fontSize: "11",
      fontWeight: "700",
      fill: s.color
    }, s.label), /*#__PURE__*/React.createElement("text", {
      x: "82",
      y: "35",
      textAnchor: "middle",
      fontSize: "10",
      fill: "var(--ink-muted)"
    }, s.sub));
  }))), /*#__PURE__*/React.createElement(QGroup, {
    title: "Check yourself"
  }, /*#__PURE__*/React.createElement(MCQ, {
    num: 1,
    question: "Which of these is a properly formulated scientific question?",
    options: ["Is music good for studying?", "Does 30 minutes of classical music affect the number of correct answers on a maths test for Year 8 students?", "Why do plants need sunlight?", "Is it better to sleep more?"],
    correct: 1,
    explain: "This version specifies the independent variable (30 minutes of classical music), the dependent variable (number of correct answers), and the population (Year 8 students). It is measurable and testable."
  }), /*#__PURE__*/React.createElement(WrittenQ, {
    num: 2,
    question: "A student wants to test whether screen brightness affects battery life. Write a properly formulated scientific question and identify the independent and dependent variables.",
    model: "Scientific question: Does increasing smartphone screen brightness (25%, 50%, 75%, 100%) affect the time in minutes for a fully charged battery to reach 50% charge under standard use conditions? Independent variable: screen brightness level. Dependent variable: time to reach 50% battery (minutes)."
  }))), /*#__PURE__*/React.createElement(DotPoint, {
    id: "8.4.2",
    title: "Repeated trials, mean, range, accuracy and reliability",
    progress: progress,
    setProgress: setProgress
  }, /*#__PURE__*/React.createElement("p", null, "Scientists rarely rely on a single measurement. Conducting ", /*#__PURE__*/React.createElement(Term, {
    def: "Repeating the same measurement or experiment multiple times to produce a more reliable estimate."
  }, "repeated trials"), " reduces the effect of random errors. The ", /*#__PURE__*/React.createElement(Term, {
    def: "The arithmetic average of a dataset, calculated by summing all values and dividing by the number of values."
  }, "mean"), " (sum of all values divided by count) gives a representative central value. The ", /*#__PURE__*/React.createElement(Term, {
    def: "The difference between the largest and smallest values in a dataset, describing how spread out the data is."
  }, "range"), " (largest minus smallest) shows how spread out the data is. A small range suggests consistent, reliable measurements."), /*#__PURE__*/React.createElement("p", null, /*#__PURE__*/React.createElement(Term, {
    def: "How close a measurement or set of measurements is to the true or accepted value."
  }, "Accuracy"), " and ", /*#__PURE__*/React.createElement(Term, {
    def: "How consistently a measurement can be reproduced. Reliable data gives similar results each time, regardless of whether it is close to the true value."
  }, "reliability"), " are not the same thing. If a scale always reads 2 kg too high, every reading is reliable (consistent) but inaccurate. To improve accuracy, instruments must be calibrated. To improve reliability, repeat measurements and average them."), /*#__PURE__*/React.createElement(AccuracyReliabilitySim, null), /*#__PURE__*/React.createElement(QGroup, {
    title: "Check yourself"
  }, /*#__PURE__*/React.createElement(MCQ, {
    num: 3,
    question: "A student measures the boiling point of water 5 times and gets: 98, 99, 98, 99, 98 degrees Celsius. The true value is 100 degrees Celsius. How is this data best described?",
    options: ["Accurate and reliable", "Reliable but not accurate", "Accurate but not reliable", "Neither accurate nor reliable"],
    correct: 1,
    explain: "The readings are very consistent (range = 1, so reliable), but they are all about 2 degrees below the true value of 100 degrees Celsius. This indicates a systematic error, making the data reliable but not accurate."
  }), /*#__PURE__*/React.createElement(WrittenQ, {
    num: 4,
    question: "Calculate the mean and range for this dataset: 14, 18, 16, 14, 22, 16. Show your working.",
    model: "Sum = 14 + 18 + 16 + 14 + 22 + 16 = 100. Mean = 100 / 6 = 16.67 (to 2 d.p.). Range = 22 - 14 = 8."
  }))), /*#__PURE__*/React.createElement(DotPoint, {
    id: "8.4.3",
    title: "Patterns, trends, and testing predictions with data",
    progress: progress,
    setProgress: setProgress
  }, /*#__PURE__*/React.createElement("p", null, "After summarising data with statistics, the next step is to look for ", /*#__PURE__*/React.createElement(Term, {
    def: "Consistent relationships between variables that appear across multiple data points."
  }, "patterns"), ": consistent relationships between variables. A positive trend means as the independent variable increases, the dependent variable also increases. A negative trend means one increases while the other decreases. A ", /*#__PURE__*/React.createElement(Term, {
    def: "A straight line or smooth curve drawn through scatter plot data to represent the general trend, minimising distance to all points."
  }, "line of best fit"), " drawn on a scatter plot makes the trend visible and allows predictions."), /*#__PURE__*/React.createElement("p", null, "When you find a pattern, compare it to your hypothesis. If the data matches, the hypothesis is supported. If it does not match, the hypothesis is not supported. Either outcome is valuable in science. Be aware that finding a ", /*#__PURE__*/React.createElement(Term, {
    def: "A statistical relationship where two variables change together, without necessarily one causing the other."
  }, "correlation"), " between two variables does not prove that one caused the other. A third hidden variable might be responsible."), /*#__PURE__*/React.createElement(Callout, {
    kind: "warn",
    title: "Correlation is not causation"
  }, "Both ice cream sales and drowning rates increase in summer. They are correlated, but ice cream does not cause drowning. The common factor is hot weather. Always consider other explanations before concluding causation."), /*#__PURE__*/React.createElement(ScatterExplorer, null), /*#__PURE__*/React.createElement(QGroup, {
    title: "Check yourself"
  }, /*#__PURE__*/React.createElement(MCQ, {
    num: 5,
    question: "A scatter plot shows that as fertiliser amount increases, plant height also increases. What type of trend is this?",
    options: ["Negative trend", "No trend", "Positive trend", "Correlation with causation"],
    correct: 2,
    explain: "When both variables increase together, this is a positive trend. Note: this shows correlation. To establish that fertiliser caused the growth, controlled variables must be maintained."
  }), /*#__PURE__*/React.createElement(WrittenQ, {
    num: 6,
    question: "A student's data does not match their hypothesis. Does this mean the investigation failed? Explain your answer.",
    model: "No, the investigation did not fail. A result that does not match the hypothesis is still a valid scientific result. It shows the hypothesis was not supported by the evidence, which is itself important information. It prompts the scientist to revise the hypothesis or investigate alternative explanations."
  }))), /*#__PURE__*/React.createElement(DotPoint, {
    id: "8.4.4",
    title: "Mean, median, mode and range: measures of centre and spread",
    progress: progress,
    setProgress: setProgress
  }, /*#__PURE__*/React.createElement("p", null, "The word \"average\" can refer to three different statistics. The ", /*#__PURE__*/React.createElement(Term, {
    def: "The arithmetic average: sum divided by count. Sensitive to outliers."
  }, "mean"), " is the most common: add all values and divide by how many there are. The ", /*#__PURE__*/React.createElement(Term, {
    def: "The middle value when all data are arranged in order. Resistant to outliers."
  }, "median"), " is the middle value in an ordered list. The ", /*#__PURE__*/React.createElement(Term, {
    def: "The most frequently occurring value in a dataset. Most useful for discrete or categorical data."
  }, "mode"), " is the most frequent value. The ", /*#__PURE__*/React.createElement(Term, {
    def: "The difference between the largest and smallest values. Describes the total spread of the data."
  }, "range"), " describes spread."), /*#__PURE__*/React.createElement("p", null, "The mean is sensitive to ", /*#__PURE__*/React.createElement(Term, {
    def: "A data point that is far from the general pattern of the rest of the dataset."
  }, "outliers"), ": one very large or small value can pull it far from most of the data. The median is resistant to outliers because it only depends on order, not size. When data is skewed (has a long tail on one side), the median is often the better measure of centre. For example, household income is usually reported as a median rather than a mean, because a small number of very high earners would otherwise inflate the mean far above what most Australians actually earn."), /*#__PURE__*/React.createElement(MeanMedianModeCalc, null), /*#__PURE__*/React.createElement(QGroup, {
    title: "Check yourself"
  }, /*#__PURE__*/React.createElement(MCQ, {
    num: 7,
    question: "Ten house prices are: $400k, $450k, $420k, $410k, $430k, $440k, $415k, $425k, $435k, $3 million. Which measure of centre would best represent a typical house price in this suburb?",
    options: ["Mean, because it uses all data points", "Median, because it is resistant to the $3 million outlier", "Mode, because it is the most common price", "Range, because it shows the spread"],
    correct: 1,
    explain: "The $3 million value is an extreme outlier that would inflate the mean well above what most houses cost. The median gives a much better picture of what a typical buyer would pay."
  }), /*#__PURE__*/React.createElement(WrittenQ, {
    num: 8,
    question: "Calculate the mean, median, mode, and range for this dataset: 5, 8, 6, 5, 10, 6, 5. Show your working.",
    model: "Ordered: 5, 5, 5, 6, 6, 8, 10. Mean = (5+8+6+5+10+6+5) / 7 = 45 / 7 = 6.43. Median = 4th value = 6. Mode = 5 (appears 3 times). Range = 10 - 5 = 5."
  }))));
}
function Section85(_ref11) {
  var progress = _ref11.progress,
    setProgress = _ref11.setProgress;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    className: "topic-head"
  }, /*#__PURE__*/React.createElement("div", {
    className: "eyebrow"
  }, "8.5 Data Science 1 in Context"), /*#__PURE__*/React.createElement("h1", null, "Creating your own model"), /*#__PURE__*/React.createElement("p", {
    className: "lead"
  }, "Apply everything you have learned: collect data, calculate statistics, graph the results, identify patterns, and communicate your model.")), /*#__PURE__*/React.createElement(DotPoint, {
    id: "8.5.1",
    title: "Create a model to explain an observable phenomenon",
    progress: progress,
    setProgress: setProgress
  }, /*#__PURE__*/React.createElement("p", null, "At the heart of data science is the ability to turn raw observations into a model that explains how something works. A model can take many forms: a table with a trend line, a labelled diagram, a mathematical rule, or a set of clearly stated principles drawn from data. What all models share is that they are built from evidence, they simplify reality to highlight the most important features, and they generate predictions that can be tested."), /*#__PURE__*/React.createElement("p", null, "A complete model-building project follows the full data science cycle: formulate a question, plan data collection, collect and organise data, calculate descriptive statistics, produce a graph, identify the pattern, build and communicate the model, and evaluate its limitations. Reporting uncertainty honestly is as important as reporting the pattern. A good scientist describes the conditions under which their model is valid and the conditions under which it might break down."), /*#__PURE__*/React.createElement(Callout, {
    kind: "key",
    title: "What a complete model report includes"
  }, "Question addressed. Data collection method. Descriptive statistics (mean, range). A clearly labelled graph. Pattern description. Predictions (noting interpolation vs extrapolation). Limitations and suggested improvements. Honest statement about accuracy and reliability."), /*#__PURE__*/React.createElement(ModelBuilderWalkthrough, null), /*#__PURE__*/React.createElement(HandSpanScatter, null), /*#__PURE__*/React.createElement(QGroup, {
    title: "Check yourself"
  }, /*#__PURE__*/React.createElement(MCQ, {
    num: 1,
    question: "A student creates a scatter plot of hand span vs height for 5 students and all points fall exactly on the line. A classmate says the model is perfect. What is the most likely problem?",
    options: ["The model is indeed perfect.", "With only 5 points, a line can be forced through all of them. Real measurements always show some variability, so zero scatter suggests the sample is too small or data was fabricated.", "The student used the wrong type of graph.", "The line of best fit should not pass through all points."],
    correct: 1,
    explain: "In real investigations, random measurement error and natural variability always cause scatter around the line. A perfect fit to a very small dataset is more likely to reflect data problems than genuine scientific certainty."
  }), /*#__PURE__*/React.createElement(WrittenQ, {
    num: 2,
    question: "You have built a graphical model showing a positive trend between hours of sleep and reaction speed in Year 8 students. List two limitations of your model and explain how you would improve it.",
    model: "Limitation 1: small sample size from one class. The model may not represent all Year 8 students. Improvement: measure a larger, more diverse sample from multiple schools. Limitation 2: sleep hours were self-reported, which is inaccurate. Improvement: use an objective sleep tracker device to measure sleep duration."
  }), /*#__PURE__*/React.createElement(WrittenQ, {
    num: 3,
    question: "Explain why the data science process is described as a cycle rather than a straight-line sequence.",
    model: "The process is a cycle because conclusions from a model generate new questions, which require more data collection, refined models, and further testing. Each model and its evaluation reveal new questions, driving further investigation rather than ending at a single answer."
  }))));
}

/* ================================================================
   MOUNT
   ================================================================ */
mountTopicApp({
  year: 8,
  topicTitle: "Data Science 1",
  branch: "general",
  heroImage: "img/hero.png",
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
    "simulation": "A virtual experiment run on a computer where variables can be changed rapidly."
  },
  sections: [{
    id: "8.1",
    label: "Data",
    accent: "teal",
    blurb: "Types of data, digital footprints, and data science as a discipline.",
    points: ["8.1.1", "8.1.2", "8.1.3"],
    render: function render(p) {
      return /*#__PURE__*/React.createElement(Section81, p);
    }
  }, {
    id: "8.2",
    label: "Scientific Models",
    accent: "teal",
    blurb: "What models are, types of models, and how to read trends and make predictions.",
    points: ["8.2.1", "8.2.2", "8.2.3", "8.2.4"],
    render: function render(p) {
      return /*#__PURE__*/React.createElement(Section82, p);
    }
  }, {
    id: "8.3",
    label: "Applications of Models",
    accent: "teal",
    blurb: "How data builds models and how models become theories.",
    points: ["8.3.1", "8.3.2"],
    render: function render(p) {
      return /*#__PURE__*/React.createElement(Section83, p);
    }
  }, {
    id: "8.4",
    label: "Collecting and Analysing Data",
    accent: "teal",
    blurb: "Scientific questions, repeated trials, statistics, and finding patterns.",
    points: ["8.4.1", "8.4.2", "8.4.3", "8.4.4"],
    render: function render(p) {
      return /*#__PURE__*/React.createElement(Section84, p);
    }
  }, {
    id: "8.5",
    label: "Data Science in Context",
    accent: "teal",
    blurb: "Build and communicate your own scientific model from real data.",
    points: ["8.5.1"],
    render: function render(p) {
      return /*#__PURE__*/React.createElement(Section85, p);
    }
  }]
});

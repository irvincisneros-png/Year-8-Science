/* Generated from lessons-64.jsx by tools/build.js. Edit the .jsx, not this file. */
"use strict";

function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
/* ============================================================
   Unit 6.4 — Atoms in context (materials & uses)
   ============================================================ */

var _React = React,
  u64_useState = _React.useState,
  u64_useMemo = _React.useMemo;
function MaterialsChooser() {
  var _window$AppData = window.AppData,
    MATERIALS_CASES = _window$AppData.MATERIALS_CASES,
    getElementBySym = _window$AppData.getElementBySym;
  var _u64_useState = u64_useState(0),
    _u64_useState2 = _slicedToArray(_u64_useState, 2),
    idx = _u64_useState2[0],
    setIdx = _u64_useState2[1];
  var _u64_useState3 = u64_useState(null),
    _u64_useState4 = _slicedToArray(_u64_useState3, 2),
    picked = _u64_useState4[0],
    setPicked = _u64_useState4[1];
  var cur = MATERIALS_CASES[idx];
  var next = function next() {
    setIdx((idx + 1) % MATERIALS_CASES.length);
    setPicked(null);
  };
  var prev = function prev() {
    setIdx((idx - 1 + MATERIALS_CASES.length) % MATERIALS_CASES.length);
    setPicked(null);
  };
  var isCorrect = picked === cur.correct;

  // Inline SVG illustrations keyed to the item name
  var visual = function () {
    switch (cur.item) {
      case "Drink can":
        return /*#__PURE__*/React.createElement("svg", {
          viewBox: "0 0 120 140",
          style: {
            width: "100%",
            height: "100%"
          }
        }, /*#__PURE__*/React.createElement("defs", null, /*#__PURE__*/React.createElement("linearGradient", {
          id: "can",
          x1: "0",
          x2: "1",
          y1: "0",
          y2: "0"
        }, /*#__PURE__*/React.createElement("stop", {
          offset: "0%",
          stopColor: "oklch(0.65 0.04 250)"
        }), /*#__PURE__*/React.createElement("stop", {
          offset: "35%",
          stopColor: "oklch(0.88 0.03 240)"
        }), /*#__PURE__*/React.createElement("stop", {
          offset: "60%",
          stopColor: "oklch(0.78 0.04 245)"
        }), /*#__PURE__*/React.createElement("stop", {
          offset: "100%",
          stopColor: "oklch(0.55 0.04 250)"
        })), /*#__PURE__*/React.createElement("linearGradient", {
          id: "canLabel",
          x1: "0",
          x2: "0",
          y1: "0",
          y2: "1"
        }, /*#__PURE__*/React.createElement("stop", {
          offset: "0%",
          stopColor: "oklch(0.55 0.2 25)"
        }), /*#__PURE__*/React.createElement("stop", {
          offset: "100%",
          stopColor: "oklch(0.4 0.2 20)"
        }))), /*#__PURE__*/React.createElement("ellipse", {
          cx: "60",
          cy: "128",
          rx: "32",
          ry: "4",
          fill: "oklch(0.3 0.03 250 / 0.2)"
        }), /*#__PURE__*/React.createElement("rect", {
          x: "30",
          y: "22",
          width: "60",
          height: "100",
          rx: "3",
          fill: "url(#can)"
        }), /*#__PURE__*/React.createElement("ellipse", {
          cx: "60",
          cy: "22",
          rx: "30",
          ry: "5",
          fill: "oklch(0.85 0.03 240)",
          stroke: "oklch(0.5 0.03 250)",
          strokeWidth: "0.8"
        }), /*#__PURE__*/React.createElement("ellipse", {
          cx: "60",
          cy: "22",
          rx: "26",
          ry: "3.5",
          fill: "oklch(0.6 0.03 250)"
        }), /*#__PURE__*/React.createElement("ellipse", {
          cx: "60",
          cy: "22",
          rx: "8",
          ry: "2",
          fill: "oklch(0.5 0.03 250)"
        }), /*#__PURE__*/React.createElement("rect", {
          x: "56",
          y: "18",
          width: "8",
          height: "1.5",
          rx: "0.7",
          fill: "oklch(0.35 0.02 250)"
        }), /*#__PURE__*/React.createElement("ellipse", {
          cx: "60",
          cy: "122",
          rx: "30",
          ry: "5",
          fill: "oklch(0.55 0.03 250)"
        }), /*#__PURE__*/React.createElement("rect", {
          x: "30",
          y: "48",
          width: "60",
          height: "42",
          fill: "url(#canLabel)"
        }), /*#__PURE__*/React.createElement("text", {
          x: "60",
          y: "74",
          textAnchor: "middle",
          style: {
            fontSize: 11,
            fontFamily: "var(--font-display)",
            fill: "white",
            fontWeight: 600
          }
        }, "FIZZ"), /*#__PURE__*/React.createElement("text", {
          x: "60",
          y: "84",
          textAnchor: "middle",
          style: {
            fontSize: 4,
            fontFamily: "var(--font-mono)",
            fill: "white",
            opacity: 0.85,
            letterSpacing: 1
          }
        }, "375 mL"), /*#__PURE__*/React.createElement("rect", {
          x: "34",
          y: "22",
          width: "3",
          height: "100",
          fill: "oklch(0.98 0.01 240 / 0.5)"
        }));
      case "Electrical wire (in your wall)":
        return /*#__PURE__*/React.createElement("svg", {
          viewBox: "0 0 140 100",
          style: {
            width: "100%",
            height: "100%"
          }
        }, /*#__PURE__*/React.createElement("defs", null, /*#__PURE__*/React.createElement("linearGradient", {
          id: "copperCore",
          x1: "0",
          x2: "0",
          y1: "0",
          y2: "1"
        }, /*#__PURE__*/React.createElement("stop", {
          offset: "0%",
          stopColor: "oklch(0.85 0.14 50)"
        }), /*#__PURE__*/React.createElement("stop", {
          offset: "50%",
          stopColor: "oklch(0.6 0.17 40)"
        }), /*#__PURE__*/React.createElement("stop", {
          offset: "100%",
          stopColor: "oklch(0.42 0.16 35)"
        }))), /*#__PURE__*/React.createElement("path", {
          d: "M 5,30 Q 30,55 60,40 T 130,38 L 130,55 Q 100,70 70,58 T 5,55 Z",
          fill: "oklch(0.78 0.13 30)",
          stroke: "oklch(0.45 0.15 25)",
          strokeWidth: "1"
        }), /*#__PURE__*/React.createElement("path", {
          d: "M 80,40 L 130,38 L 130,55 L 80,57 Z",
          fill: "oklch(0.55 0.04 30)",
          opacity: "0.7"
        }), /*#__PURE__*/React.createElement("g", {
          stroke: "oklch(0.55 0.17 40)",
          strokeWidth: "1.6",
          strokeLinecap: "round",
          fill: "none"
        }, /*#__PURE__*/React.createElement("path", {
          d: "M 95,42 Q 110,45 130,42"
        }), /*#__PURE__*/React.createElement("path", {
          d: "M 95,46 Q 110,49 130,46"
        }), /*#__PURE__*/React.createElement("path", {
          d: "M 95,50 Q 110,53 130,50"
        }), /*#__PURE__*/React.createElement("path", {
          d: "M 95,54 Q 110,57 130,54"
        })), /*#__PURE__*/React.createElement("path", {
          d: "M 90,40 Q 105,52 130,48",
          stroke: "url(#copperCore)",
          strokeWidth: "2.5",
          fill: "none",
          strokeLinecap: "round"
        }), /*#__PURE__*/React.createElement("g", {
          fill: "oklch(0.88 0.15 90)"
        }, /*#__PURE__*/React.createElement("path", {
          d: "M 132,40 L 138,46 L 134,46 L 138,52 L 132,52 L 136,58 L 130,53 L 134,53 L 130,47 L 132,47 Z"
        })));
      case "Light bulb filament":
        return /*#__PURE__*/React.createElement("svg", {
          viewBox: "0 0 120 140",
          style: {
            width: "100%",
            height: "100%"
          }
        }, /*#__PURE__*/React.createElement("defs", null, /*#__PURE__*/React.createElement("radialGradient", {
          id: "bulbGlow",
          cx: "50%",
          cy: "55%"
        }, /*#__PURE__*/React.createElement("stop", {
          offset: "0%",
          stopColor: "oklch(0.97 0.16 90 / 0.95)"
        }), /*#__PURE__*/React.createElement("stop", {
          offset: "40%",
          stopColor: "oklch(0.88 0.16 80 / 0.7)"
        }), /*#__PURE__*/React.createElement("stop", {
          offset: "100%",
          stopColor: "oklch(0.85 0.12 80 / 0)"
        })), /*#__PURE__*/React.createElement("radialGradient", {
          id: "bulbGlass",
          cx: "40%",
          cy: "40%"
        }, /*#__PURE__*/React.createElement("stop", {
          offset: "0%",
          stopColor: "oklch(0.99 0.02 90 / 0.8)"
        }), /*#__PURE__*/React.createElement("stop", {
          offset: "60%",
          stopColor: "oklch(0.95 0.08 85 / 0.4)"
        }), /*#__PURE__*/React.createElement("stop", {
          offset: "100%",
          stopColor: "oklch(0.85 0.1 80 / 0.2)"
        }))), /*#__PURE__*/React.createElement("circle", {
          cx: "60",
          cy: "60",
          r: "55",
          fill: "url(#bulbGlow)"
        }), /*#__PURE__*/React.createElement("path", {
          d: "M 35,75 Q 25,55 35,38 Q 45,18 60,18 Q 75,18 85,38 Q 95,55 85,75 Z",
          fill: "url(#bulbGlass)",
          stroke: "oklch(0.75 0.06 80)",
          strokeWidth: "1"
        }), /*#__PURE__*/React.createElement("rect", {
          x: "46",
          y: "73",
          width: "28",
          height: "6",
          fill: "oklch(0.45 0.03 80)"
        }), /*#__PURE__*/React.createElement("path", {
          d: "M 46,79 L 74,79 L 72,90 L 48,90 Z",
          fill: "oklch(0.55 0.04 80)"
        }), /*#__PURE__*/React.createElement("line", {
          x1: "48",
          y1: "83",
          x2: "72",
          y2: "83",
          stroke: "oklch(0.35 0.03 80)",
          strokeWidth: "0.6"
        }), /*#__PURE__*/React.createElement("line", {
          x1: "48",
          y1: "86",
          x2: "72",
          y2: "86",
          stroke: "oklch(0.35 0.03 80)",
          strokeWidth: "0.6"
        }), /*#__PURE__*/React.createElement("ellipse", {
          cx: "60",
          cy: "93",
          rx: "6",
          ry: "2",
          fill: "oklch(0.5 0.03 80)"
        }), /*#__PURE__*/React.createElement("line", {
          x1: "55",
          y1: "73",
          x2: "55",
          y2: "55",
          stroke: "oklch(0.4 0.05 80)",
          strokeWidth: "0.8"
        }), /*#__PURE__*/React.createElement("line", {
          x1: "65",
          y1: "73",
          x2: "65",
          y2: "55",
          stroke: "oklch(0.4 0.05 80)",
          strokeWidth: "0.8"
        }), /*#__PURE__*/React.createElement("path", {
          d: "M 55,55 L 57,50 L 53,46 L 57,42 L 53,38 L 57,34 L 53,32 L 57,30 L 63,30 L 67,32 L 63,34 L 67,38 L 63,42 L 67,46 L 63,50 L 65,55",
          fill: "none",
          stroke: "oklch(0.98 0.18 90)",
          strokeWidth: "1.5",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          filter: "drop-shadow(0 0 4px oklch(0.95 0.18 80))"
        }), /*#__PURE__*/React.createElement("path", {
          d: "M 55,55 L 57,50 L 53,46 L 57,42 L 53,38 L 57,34 L 53,32 L 57,30 L 63,30 L 67,32 L 63,34 L 67,38 L 63,42 L 67,46 L 63,50 L 65,55",
          fill: "none",
          stroke: "oklch(0.85 0.18 80)",
          strokeWidth: "0.6"
        }));
      case "Aircraft body":
        return /*#__PURE__*/React.createElement("svg", {
          viewBox: "0 0 200 120",
          style: {
            width: "100%",
            height: "100%"
          }
        }, /*#__PURE__*/React.createElement("defs", null, /*#__PURE__*/React.createElement("linearGradient", {
          id: "planeBody",
          x1: "0",
          x2: "0",
          y1: "0",
          y2: "1"
        }, /*#__PURE__*/React.createElement("stop", {
          offset: "0%",
          stopColor: "oklch(0.95 0.01 240)"
        }), /*#__PURE__*/React.createElement("stop", {
          offset: "50%",
          stopColor: "oklch(0.82 0.02 240)"
        }), /*#__PURE__*/React.createElement("stop", {
          offset: "100%",
          stopColor: "oklch(0.6 0.03 240)"
        }))), /*#__PURE__*/React.createElement("path", {
          d: "M 30,55 L 18,30 L 28,30 L 42,55 Z",
          fill: "oklch(0.65 0.03 240)"
        }), /*#__PURE__*/React.createElement("ellipse", {
          cx: "100",
          cy: "60",
          rx: "90",
          ry: "14",
          fill: "url(#planeBody)",
          stroke: "oklch(0.55 0.04 240)",
          strokeWidth: "0.8"
        }), /*#__PURE__*/React.createElement("path", {
          d: "M 175,60 Q 195,55 195,60 Q 195,65 175,60",
          fill: "oklch(0.4 0.04 240)"
        }), /*#__PURE__*/React.createElement("path", {
          d: "M 70,68 L 130,68 L 155,90 L 95,82 Z",
          fill: "oklch(0.75 0.02 240)",
          stroke: "oklch(0.55 0.04 240)",
          strokeWidth: "0.8"
        }), /*#__PURE__*/React.createElement("ellipse", {
          cx: "115",
          cy: "80",
          rx: "10",
          ry: "5",
          fill: "oklch(0.45 0.03 240)"
        }), /*#__PURE__*/React.createElement("circle", {
          cx: "120",
          cy: "80",
          r: "3",
          fill: "oklch(0.3 0.04 240)"
        }), /*#__PURE__*/React.createElement("g", {
          fill: "oklch(0.35 0.08 220)"
        }, [60, 75, 90, 105, 120, 135, 150].map(function (x, i) {
          return /*#__PURE__*/React.createElement("rect", {
            key: i,
            x: x,
            y: "55",
            width: "6",
            height: "4",
            rx: "1.5"
          });
        })), /*#__PURE__*/React.createElement("path", {
          d: "M 165,55 Q 172,52 178,58 L 175,60 L 168,60 Z",
          fill: "oklch(0.4 0.08 220)"
        }), /*#__PURE__*/React.createElement("ellipse", {
          cx: "40",
          cy: "20",
          rx: "14",
          ry: "5",
          fill: "oklch(0.97 0.02 240 / 0.7)"
        }), /*#__PURE__*/React.createElement("ellipse", {
          cx: "160",
          cy: "25",
          rx: "18",
          ry: "6",
          fill: "oklch(0.97 0.02 240 / 0.7)"
        }));
      case "Cutlery":
        return /*#__PURE__*/React.createElement("svg", {
          viewBox: "0 0 140 140",
          style: {
            width: "100%",
            height: "100%"
          }
        }, /*#__PURE__*/React.createElement("defs", null, /*#__PURE__*/React.createElement("linearGradient", {
          id: "steel",
          x1: "0",
          x2: "1",
          y1: "0",
          y2: "0"
        }, /*#__PURE__*/React.createElement("stop", {
          offset: "0%",
          stopColor: "oklch(0.6 0.02 240)"
        }), /*#__PURE__*/React.createElement("stop", {
          offset: "50%",
          stopColor: "oklch(0.92 0.01 240)"
        }), /*#__PURE__*/React.createElement("stop", {
          offset: "100%",
          stopColor: "oklch(0.55 0.02 240)"
        }))), /*#__PURE__*/React.createElement("g", {
          transform: "translate(30, 12) rotate(-8)"
        }, /*#__PURE__*/React.createElement("rect", {
          x: "-4",
          y: "40",
          width: "8",
          height: "75",
          rx: "2",
          fill: "url(#steel)"
        }), /*#__PURE__*/React.createElement("path", {
          d: "M -8,40 L -6,8 L -4,8 L -3,38 L 3,38 L 4,8 L 6,8 L 8,40 Z",
          fill: "url(#steel)",
          stroke: "oklch(0.5 0.02 240)",
          strokeWidth: "0.5"
        }), /*#__PURE__*/React.createElement("rect", {
          x: "-6",
          y: "6",
          width: "12",
          height: "3",
          fill: "oklch(0.5 0.02 240)",
          rx: "1"
        })), /*#__PURE__*/React.createElement("g", {
          transform: "translate(70, 12)"
        }, /*#__PURE__*/React.createElement("rect", {
          x: "-4",
          y: "40",
          width: "8",
          height: "75",
          rx: "2",
          fill: "url(#steel)"
        }), /*#__PURE__*/React.createElement("path", {
          d: "M -5,40 L -3,8 Q -2,4 0,4 Q 2,4 3,8 L 5,40 Z",
          fill: "url(#steel)",
          stroke: "oklch(0.5 0.02 240)",
          strokeWidth: "0.5"
        }), /*#__PURE__*/React.createElement("line", {
          x1: "-2",
          y1: "14",
          x2: "-2",
          y2: "38",
          stroke: "oklch(0.55 0.02 240)",
          strokeWidth: "0.5"
        })), /*#__PURE__*/React.createElement("g", {
          transform: "translate(110, 12) rotate(8)"
        }, /*#__PURE__*/React.createElement("rect", {
          x: "-4",
          y: "40",
          width: "8",
          height: "75",
          rx: "2",
          fill: "url(#steel)"
        }), /*#__PURE__*/React.createElement("ellipse", {
          cx: "0",
          cy: "22",
          rx: "11",
          ry: "18",
          fill: "url(#steel)",
          stroke: "oklch(0.5 0.02 240)",
          strokeWidth: "0.5"
        }), /*#__PURE__*/React.createElement("ellipse", {
          cx: "-2",
          cy: "20",
          rx: "6",
          ry: "11",
          fill: "oklch(0.95 0.01 240 / 0.6)"
        })));
      case "MRI scanner cooling":
        return /*#__PURE__*/React.createElement("svg", {
          viewBox: "0 0 160 120",
          style: {
            width: "100%",
            height: "100%"
          }
        }, /*#__PURE__*/React.createElement("defs", null, /*#__PURE__*/React.createElement("linearGradient", {
          id: "mri",
          x1: "0",
          x2: "1",
          y1: "0",
          y2: "0"
        }, /*#__PURE__*/React.createElement("stop", {
          offset: "0%",
          stopColor: "oklch(0.65 0.04 240)"
        }), /*#__PURE__*/React.createElement("stop", {
          offset: "50%",
          stopColor: "oklch(0.92 0.02 240)"
        }), /*#__PURE__*/React.createElement("stop", {
          offset: "100%",
          stopColor: "oklch(0.6 0.04 240)"
        })), /*#__PURE__*/React.createElement("radialGradient", {
          id: "mriBore",
          cx: "50%",
          cy: "50%"
        }, /*#__PURE__*/React.createElement("stop", {
          offset: "0%",
          stopColor: "oklch(0.25 0.04 240)"
        }), /*#__PURE__*/React.createElement("stop", {
          offset: "100%",
          stopColor: "oklch(0.4 0.05 240)"
        }))), /*#__PURE__*/React.createElement("rect", {
          x: "20",
          y: "92",
          width: "120",
          height: "14",
          rx: "2",
          fill: "oklch(0.55 0.02 240)"
        }), /*#__PURE__*/React.createElement("rect", {
          x: "20",
          y: "22",
          width: "120",
          height: "72",
          rx: "14",
          fill: "url(#mri)",
          stroke: "oklch(0.4 0.04 240)",
          strokeWidth: "0.8"
        }), /*#__PURE__*/React.createElement("ellipse", {
          cx: "80",
          cy: "58",
          rx: "34",
          ry: "26",
          fill: "url(#mriBore)"
        }), /*#__PURE__*/React.createElement("rect", {
          x: "40",
          y: "62",
          width: "80",
          height: "6",
          rx: "1",
          fill: "oklch(0.7 0.02 240)"
        }), /*#__PURE__*/React.createElement("rect", {
          x: "40",
          y: "68",
          width: "80",
          height: "3",
          fill: "oklch(0.5 0.02 240)"
        }), /*#__PURE__*/React.createElement("g", {
          fill: "none",
          stroke: "oklch(0.7 0.13 230 / 0.6)",
          strokeWidth: "1.2",
          strokeLinecap: "round"
        }, /*#__PURE__*/React.createElement("path", {
          d: "M 28,18 Q 32,10 36,16 Q 40,22 44,14"
        }), /*#__PURE__*/React.createElement("path", {
          d: "M 116,16 Q 120,8 124,14 Q 128,20 132,12"
        })), /*#__PURE__*/React.createElement("g", {
          fill: "oklch(0.75 0.13 230 / 0.5)"
        }, /*#__PURE__*/React.createElement("circle", {
          cx: "50",
          cy: "14",
          r: "2"
        }), /*#__PURE__*/React.createElement("circle", {
          cx: "110",
          cy: "12",
          r: "1.8"
        }), /*#__PURE__*/React.createElement("circle", {
          cx: "70",
          cy: "8",
          r: "1.5"
        }), /*#__PURE__*/React.createElement("circle", {
          cx: "92",
          cy: "10",
          r: "1.5"
        })), /*#__PURE__*/React.createElement("text", {
          x: "80",
          y: "113",
          textAnchor: "middle",
          style: {
            fontSize: 7,
            fontFamily: "var(--font-mono)",
            fill: "var(--ink-muted)",
            letterSpacing: 1
          }
        }, "cooled with liquid He \xB7 \u2212269\xB0C"));
      default:
        return null;
    }
  }();
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      marginBottom: 14
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
      fontSize: "0.78rem",
      color: "var(--ink-muted)"
    }
  }, "Brief ", idx + 1, " of ", MATERIALS_CASES.length), /*#__PURE__*/React.createElement("h3", {
    style: {
      margin: "4px 0"
    }
  }, cur.item)), /*#__PURE__*/React.createElement(Button, {
    size: "sm",
    iconRight: "right",
    onClick: next
  }, "Next")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "200px 1fr",
      gap: 16,
      marginBottom: 14
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      background: "linear-gradient(135deg, oklch(0.96 0.02 60) 0%, oklch(0.94 0.03 200) 100%)",
      borderRadius: "var(--r)",
      border: "1px solid var(--border)",
      padding: 14,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      aspectRatio: "1"
    }
  }, visual), /*#__PURE__*/React.createElement("div", {
    className: "card",
    style: {
      background: "var(--bg-2)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontWeight: 600,
      marginBottom: 6
    }
  }, "What it needs:"), /*#__PURE__*/React.createElement("ul", {
    style: {
      margin: 0,
      paddingLeft: 20,
      fontSize: "0.92rem"
    }
  }, cur.needs.map(function (n, i) {
    return /*#__PURE__*/React.createElement("li", {
      key: i
    }, n);
  })))), /*#__PURE__*/React.createElement("h4", {
    style: {
      marginBottom: 10
    }
  }, "What would you make it from?"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(4, 1fr)",
      gap: 10
    }
  }, cur.options.map(function (opt) {
    var isElement = opt.length <= 2 && /^[A-Z]/.test(opt);
    var el = isElement ? getElementBySym(opt) : null;
    var name = (el === null || el === void 0 ? void 0 : el.name) || (opt === "stainless" ? "Stainless steel" : opt);
    var isMyPick = picked === opt;
    var showRight = picked && opt === cur.correct;
    var showWrong = picked === opt && opt !== cur.correct;
    return /*#__PURE__*/React.createElement("button", {
      key: opt,
      onClick: function onClick() {
        return setPicked(opt);
      },
      disabled: !!picked && !isMyPick && opt !== cur.correct,
      className: "card",
      style: {
        background: showRight ? "var(--c-green-soft)" : showWrong ? "var(--c-red-soft)" : isMyPick ? "var(--bg-2)" : "var(--paper)",
        borderColor: showRight ? "var(--c-green)" : showWrong ? "var(--c-red)" : isMyPick ? "var(--ink)" : "var(--border)",
        cursor: picked ? "default" : "pointer",
        fontFamily: "inherit",
        color: "inherit",
        textAlign: "center",
        padding: 14
      }
    }, el ? /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: "var(--font-display)",
        fontSize: "1.8rem"
      }
    }, el.sym), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: "0.85rem",
        fontWeight: 600
      }
    }, el.name)) : /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: "0.95rem",
        fontWeight: 600
      }
    }, name));
  })), picked && /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 14
    }
  }, isCorrect ? /*#__PURE__*/React.createElement(Callout, {
    kind: "tip",
    title: "\u2713 ".concat(cur.correct_name, " \u2014 good choice.")
  }, cur.why) : /*#__PURE__*/React.createElement(Callout, {
    kind: "warn",
    title: "A working engineer would reach for something else here."
  }, "The best fit is ", /*#__PURE__*/React.createElement("strong", null, cur.correct_name), ". ", cur.why)));
}
function Lesson641(_ref) {
  var udl = _ref.udl;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("p", null, "Knowing what materials ", /*#__PURE__*/React.createElement("em", null, "can"), " do is half the picture. Real engineers also weigh: ", /*#__PURE__*/React.createElement("strong", null, "how much does it cost? How available is it? How easy is it to recycle?"), " A perfect material that's too rare won't be used. A cheap-and-cheerful one that's \"good enough\" often wins."), /*#__PURE__*/React.createElement("h3", null, "What goes into the decision"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(3, 1fr)",
      gap: 10
    }
  }, [{
    t: "Physical properties",
    d: "Strength, density, hardness, transparency, melting point."
  }, {
    t: "Chemical properties",
    d: "Reactivity, resistance to rust, behaviour with acids and water."
  }, {
    t: "Electrical / thermal",
    d: "Does it conduct heat? Electricity? Or insulate?"
  }, {
    t: "Availability",
    d: "Is it everywhere on Earth, or are there only a few mines?"
  }, {
    t: "Cost",
    d: "Extraction + processing + transport."
  }, {
    t: "Environmental impact",
    d: "Pollution, energy, recyclability."
  }].map(function (c, i) {
    return /*#__PURE__*/React.createElement("div", {
      key: i,
      className: "card"
    }, /*#__PURE__*/React.createElement("h4", null, c.t), /*#__PURE__*/React.createElement("p", {
      style: {
        fontSize: "0.88rem",
        color: "var(--ink-2)",
        margin: "6px 0 0"
      }
    }, c.d));
  })), /*#__PURE__*/React.createElement("h3", null, "Case studies you should know"), /*#__PURE__*/React.createElement("table", null, /*#__PURE__*/React.createElement("thead", null, /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("th", null, "Item"), /*#__PURE__*/React.createElement("th", null, "Material"), /*#__PURE__*/React.createElement("th", null, "Why this choice"))), /*#__PURE__*/React.createElement("tbody", null, /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("td", null, "Aircraft body"), /*#__PURE__*/React.createElement("td", null, "Aluminium alloy (duralumin)"), /*#__PURE__*/React.createElement("td", null, "Light, corrosion-resistant, easily shaped. Pure Al is too soft so it's alloyed with Cu + Mg.")), /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("td", null, "Drink can"), /*#__PURE__*/React.createElement("td", null, "Aluminium"), /*#__PURE__*/React.createElement("td", null, "Light, doesn't rust, easy to recycle. Recycling uses only 5% of the energy of new aluminium!")), /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("td", null, "Bridge / building"), /*#__PURE__*/React.createElement("td", null, "Steel (Fe + C) \u2014 sometimes stainless"), /*#__PURE__*/React.createElement("td", null, "Strong, abundant, cheap. Chromium added for outdoor structures to stop rust.")), /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("td", null, "Electrical wire"), /*#__PURE__*/React.createElement("td", null, "Copper"), /*#__PURE__*/React.createElement("td", null, "Brilliant conductor, ductile, much cheaper than silver.")), /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("td", null, "Jewellery"), /*#__PURE__*/React.createElement("td", null, "Gold (usually alloyed)"), /*#__PURE__*/React.createElement("td", null, "Doesn't tarnish, attractive, soft to shape. Alloyed with Cu/Ag/Zn for hardness.")), /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("td", null, "Concrete"), /*#__PURE__*/React.createElement("td", null, "Mostly Ca, Si, Al, O"), /*#__PURE__*/React.createElement("td", null, "Cheap, very strong under compression, raw materials are everywhere.")))), /*#__PURE__*/React.createElement(Callout, {
    kind: "fact",
    title: "Why not platinum wires?"
  }, "Platinum conducts electricity. Silver conducts even better. But they're both ", /*#__PURE__*/React.createElement("strong", null, "far more expensive"), " than copper, so we never wire houses with them. \"Good enough + cheap\" beats \"perfect + impossible\" every time."), /*#__PURE__*/React.createElement("div", {
    className: "activity"
  }, /*#__PURE__*/React.createElement("div", {
    className: "activity-head"
  }, /*#__PURE__*/React.createElement("h4", null, "Pick the right material"), /*#__PURE__*/React.createElement("span", {
    className: "badge"
  }, "Sim")), /*#__PURE__*/React.createElement("p", {
    style: {
      marginTop: 0
    }
  }, "Six design briefs. For each, pick the material an engineer would actually use. We'll tell you why."), /*#__PURE__*/React.createElement(MaterialsChooser, null)), /*#__PURE__*/React.createElement("div", {
    className: "activity"
  }, /*#__PURE__*/React.createElement("div", {
    className: "activity-head"
  }, /*#__PURE__*/React.createElement("h4", null, "Research task"), /*#__PURE__*/React.createElement("span", {
    className: "badge"
  }, "Extension")), /*#__PURE__*/React.createElement("p", {
    style: {
      marginTop: 0
    }
  }, "Pick ", /*#__PURE__*/React.createElement("strong", null, "three everyday items"), " from different parts of your life (a kitchen item, a transport item, a personal item). For each, find out:"), /*#__PURE__*/React.createElement("ol", {
    style: {
      paddingLeft: 22
    }
  }, /*#__PURE__*/React.createElement("li", null, "What's it made of?"), /*#__PURE__*/React.createElement("li", null, "What 3 properties make it suit the job?"), /*#__PURE__*/React.createElement("li", null, "Where does the material come from? Common or rare?"), /*#__PURE__*/React.createElement("li", null, "What's ", /*#__PURE__*/React.createElement("em", null, "one"), " alternative material that could also work?")), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: "0.88rem",
      color: "var(--ink-2)"
    }
  }, "Bonus: pick one item and trace its ", /*#__PURE__*/React.createElement("em", null, "environmental footprint"), " from raw material to landfill or recycling.")));
}
Object.assign(window, {
  Lesson641: Lesson641,
  MaterialsChooser: MaterialsChooser
});

/* Generated from ui.jsx by tools/build.js. Edit the .jsx, not this file. */
"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
var _excluded = ["name", "size", "stroke"],
  _excluded2 = ["variant", "size", "icon", "iconRight", "children", "className"],
  _excluded3 = ["variant", "children"];
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _objectWithoutProperties(e, t) { if (null == e) return {}; var o, r, i = _objectWithoutPropertiesLoose(e, t); if (Object.getOwnPropertySymbols) { var n = Object.getOwnPropertySymbols(e); for (r = 0; r < n.length; r++) o = n[r], -1 === t.indexOf(o) && {}.propertyIsEnumerable.call(e, o) && (i[o] = e[o]); } return i; }
function _objectWithoutPropertiesLoose(r, e) { if (null == r) return {}; var t = {}; for (var n in r) if ({}.hasOwnProperty.call(r, n)) { if (-1 !== e.indexOf(n)) continue; t[n] = r[n]; } return t; }
/* ============================================================
   UI primitives — Year 8 Atomic
   Exposes (via window): Glossary, Term, Button, Chip, Callout,
                          Tabs, Tab, Progress, QuizMC, BlurReveal, Icon
   ============================================================ */

var _React = React,
  useState = _React.useState,
  useEffect = _React.useEffect,
  useRef = _React.useRef,
  useMemo = _React.useMemo,
  useCallback = _React.useCallback,
  createContext = _React.createContext,
  useContext = _React.useContext;

/* ---------- Icons (small inline SVG set) ---------- */
function Icon(_ref) {
  var name = _ref.name,
    _ref$size = _ref.size,
    size = _ref$size === void 0 ? 18 : _ref$size,
    _ref$stroke = _ref.stroke,
    stroke = _ref$stroke === void 0 ? 1.6 : _ref$stroke,
    rest = _objectWithoutProperties(_ref, _excluded);
  var s = _objectSpread({
    width: size,
    height: size,
    fill: "none",
    stroke: "currentColor",
    strokeWidth: stroke,
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, rest.style || {});
  var props = _objectSpread({
    viewBox: "0 0 24 24",
    style: s
  }, rest);
  switch (name) {
    case "play":
      return /*#__PURE__*/React.createElement("svg", props, /*#__PURE__*/React.createElement("polygon", {
        points: "6 4 20 12 6 20 6 4",
        fill: "currentColor",
        stroke: "none"
      }));
    case "pause":
      return /*#__PURE__*/React.createElement("svg", props, /*#__PURE__*/React.createElement("rect", {
        x: "6",
        y: "5",
        width: "4",
        height: "14",
        fill: "currentColor",
        stroke: "none"
      }), /*#__PURE__*/React.createElement("rect", {
        x: "14",
        y: "5",
        width: "4",
        height: "14",
        fill: "currentColor",
        stroke: "none"
      }));
    case "stop":
      return /*#__PURE__*/React.createElement("svg", props, /*#__PURE__*/React.createElement("rect", {
        x: "6",
        y: "6",
        width: "12",
        height: "12",
        fill: "currentColor",
        stroke: "none"
      }));
    case "check":
      return /*#__PURE__*/React.createElement("svg", props, /*#__PURE__*/React.createElement("polyline", {
        points: "20 6 9 17 4 12"
      }));
    case "x":
      return /*#__PURE__*/React.createElement("svg", props, /*#__PURE__*/React.createElement("line", {
        x1: "6",
        y1: "6",
        x2: "18",
        y2: "18"
      }), /*#__PURE__*/React.createElement("line", {
        x1: "6",
        y1: "18",
        x2: "18",
        y2: "6"
      }));
    case "right":
      return /*#__PURE__*/React.createElement("svg", props, /*#__PURE__*/React.createElement("polyline", {
        points: "9 6 15 12 9 18"
      }));
    case "left":
      return /*#__PURE__*/React.createElement("svg", props, /*#__PURE__*/React.createElement("polyline", {
        points: "15 6 9 12 15 18"
      }));
    case "home":
      return /*#__PURE__*/React.createElement("svg", props, /*#__PURE__*/React.createElement("path", {
        d: "M3 12l9-9 9 9"
      }), /*#__PURE__*/React.createElement("path", {
        d: "M5 10v10h14V10"
      }));
    case "speaker":
      return /*#__PURE__*/React.createElement("svg", props, /*#__PURE__*/React.createElement("polygon", {
        points: "3 9 7 9 12 5 12 19 7 15 3 15 3 9",
        fill: "currentColor",
        stroke: "none"
      }), /*#__PURE__*/React.createElement("path", {
        d: "M16 8a5 5 0 010 8"
      }));
    case "speaker-off":
      return /*#__PURE__*/React.createElement("svg", props, /*#__PURE__*/React.createElement("polygon", {
        points: "3 9 7 9 12 5 12 19 7 15 3 15 3 9",
        fill: "currentColor",
        stroke: "none"
      }), /*#__PURE__*/React.createElement("line", {
        x1: "15",
        y1: "9",
        x2: "21",
        y2: "15"
      }), /*#__PURE__*/React.createElement("line", {
        x1: "21",
        y1: "9",
        x2: "15",
        y2: "15"
      }));
    case "text-size":
      return /*#__PURE__*/React.createElement("svg", props, /*#__PURE__*/React.createElement("path", {
        d: "M4 7h10"
      }), /*#__PURE__*/React.createElement("path", {
        d: "M9 7v12"
      }), /*#__PURE__*/React.createElement("path", {
        d: "M14 14h6"
      }), /*#__PURE__*/React.createElement("path", {
        d: "M17 14v5"
      }));
    case "dyslexic":
      return /*#__PURE__*/React.createElement("svg", props, /*#__PURE__*/React.createElement("circle", {
        cx: "12",
        cy: "12",
        r: "9"
      }), /*#__PURE__*/React.createElement("path", {
        d: "M8 12h8M12 8v8"
      }));
    case "simple":
      return /*#__PURE__*/React.createElement("svg", props, /*#__PURE__*/React.createElement("path", {
        d: "M3 6h18"
      }), /*#__PURE__*/React.createElement("path", {
        d: "M3 12h12"
      }), /*#__PURE__*/React.createElement("path", {
        d: "M3 18h18"
      }));
    case "atom":
      return /*#__PURE__*/React.createElement("svg", props, /*#__PURE__*/React.createElement("circle", {
        cx: "12",
        cy: "12",
        r: "1.5",
        fill: "currentColor",
        stroke: "none"
      }), /*#__PURE__*/React.createElement("ellipse", {
        cx: "12",
        cy: "12",
        rx: "10",
        ry: "4"
      }), /*#__PURE__*/React.createElement("ellipse", {
        cx: "12",
        cy: "12",
        rx: "10",
        ry: "4",
        transform: "rotate(60 12 12)"
      }), /*#__PURE__*/React.createElement("ellipse", {
        cx: "12",
        cy: "12",
        rx: "10",
        ry: "4",
        transform: "rotate(120 12 12)"
      }));
    case "trophy":
      return /*#__PURE__*/React.createElement("svg", props, /*#__PURE__*/React.createElement("path", {
        d: "M8 21h8M12 17v4"
      }), /*#__PURE__*/React.createElement("path", {
        d: "M7 4h10v5a5 5 0 01-10 0V4z"
      }), /*#__PURE__*/React.createElement("path", {
        d: "M17 6h3v2a3 3 0 01-3 3M7 6H4v2a3 3 0 003 3"
      }));
    case "sparkle":
      return /*#__PURE__*/React.createElement("svg", props, /*#__PURE__*/React.createElement("path", {
        d: "M12 3v6M12 15v6M3 12h6M15 12h6"
      }));
    case "info":
      return /*#__PURE__*/React.createElement("svg", props, /*#__PURE__*/React.createElement("circle", {
        cx: "12",
        cy: "12",
        r: "9"
      }), /*#__PURE__*/React.createElement("line", {
        x1: "12",
        y1: "8",
        x2: "12",
        y2: "8.01"
      }), /*#__PURE__*/React.createElement("line", {
        x1: "12",
        y1: "12",
        x2: "12",
        y2: "16"
      }));
    case "lock":
      return /*#__PURE__*/React.createElement("svg", props, /*#__PURE__*/React.createElement("rect", {
        x: "5",
        y: "11",
        width: "14",
        height: "10",
        rx: "2"
      }), /*#__PURE__*/React.createElement("path", {
        d: "M8 11V7a4 4 0 018 0v4"
      }));
    case "reset":
      return /*#__PURE__*/React.createElement("svg", props, /*#__PURE__*/React.createElement("path", {
        d: "M3 12a9 9 0 109-9"
      }), /*#__PURE__*/React.createElement("polyline", {
        points: "3 5 3 12 10 12"
      }));
    default:
      return null;
  }
}

/* ---------- Glossary context ---------- */
var GlossaryCtx = createContext({});
function GlossaryProvider(_ref2) {
  var children = _ref2.children;
  return /*#__PURE__*/React.createElement(GlossaryCtx.Provider, {
    value: window.AppData.GLOSSARY
  }, children);
}
function Term(_ref3) {
  var children = _ref3.children,
    k = _ref3.k;
  var glossary = useContext(GlossaryCtx);
  var key = k || (typeof children === "string" ? children.toLowerCase() : "");
  var def = glossary[key];
  if (!def) return /*#__PURE__*/React.createElement("span", null, children);
  return /*#__PURE__*/React.createElement("span", {
    className: "term",
    tabIndex: 0
  }, children, /*#__PURE__*/React.createElement("span", {
    className: "term-pop",
    role: "tooltip"
  }, /*#__PURE__*/React.createElement("strong", null, key), " \u2014 ", def));
}

/* ---------- Button ---------- */
function Button(_ref4) {
  var _ref4$variant = _ref4.variant,
    variant = _ref4$variant === void 0 ? "default" : _ref4$variant,
    size = _ref4.size,
    icon = _ref4.icon,
    iconRight = _ref4.iconRight,
    children = _ref4.children,
    _ref4$className = _ref4.className,
    className = _ref4$className === void 0 ? "" : _ref4$className,
    rest = _objectWithoutProperties(_ref4, _excluded2);
  var cls = "btn ".concat(variant === "primary" ? "btn-primary" : variant === "accent" ? "btn-accent" : variant === "ghost" ? "btn-ghost" : "", " ").concat(size === "sm" ? "btn-sm" : "", " ").concat(className);
  return /*#__PURE__*/React.createElement("button", _extends({
    className: cls
  }, rest), icon ? /*#__PURE__*/React.createElement(Icon, {
    name: icon
  }) : null, children, iconRight ? /*#__PURE__*/React.createElement(Icon, {
    name: iconRight
  }) : null);
}

/* ---------- Chip ---------- */
function Chip(_ref5) {
  var variant = _ref5.variant,
    children = _ref5.children,
    rest = _objectWithoutProperties(_ref5, _excluded3);
  return /*#__PURE__*/React.createElement("span", _extends({
    className: "chip ".concat(variant || "")
  }, rest), children);
}

/* ---------- Callout ---------- */
function Callout(_ref6) {
  var _ref6$kind = _ref6.kind,
    kind = _ref6$kind === void 0 ? "tip" : _ref6$kind,
    title = _ref6.title,
    children = _ref6.children;
  return /*#__PURE__*/React.createElement("div", {
    className: "callout ".concat(kind)
  }, title ? /*#__PURE__*/React.createElement("strong", null, title) : null, title ? /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 4
    }
  }, children) : children);
}

/* ---------- Tabs ---------- */
function Tabs(_ref7) {
  var items = _ref7.items,
    active = _ref7.active,
    onChange = _ref7.onChange;
  return /*#__PURE__*/React.createElement("div", {
    className: "tabs"
  }, items.map(function (it) {
    return /*#__PURE__*/React.createElement("button", {
      key: it.id,
      className: "tab ".concat(active === it.id ? "active" : ""),
      onClick: function onClick() {
        return onChange(it.id);
      }
    }, it.label);
  }));
}

/* ---------- Progress bar ---------- */
function Progress(_ref8) {
  var value = _ref8.value,
    _ref8$max = _ref8.max,
    max = _ref8$max === void 0 ? 100 : _ref8$max;
  var pct = Math.min(100, Math.max(0, value / max * 100));
  return /*#__PURE__*/React.createElement("div", {
    className: "progressbar"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: pct + "%"
    }
  }));
}

/* ---------- Multiple-choice quiz ---------- */
function QuizMC(_ref9) {
  var question = _ref9.question,
    options = _ref9.options,
    correctIndex = _ref9.correctIndex,
    explain = _ref9.explain;
  var _useState = useState(null),
    _useState2 = _slicedToArray(_useState, 2),
    picked = _useState2[0],
    setPicked = _useState2[1];
  return /*#__PURE__*/React.createElement("div", {
    className: "quiz-q"
  }, /*#__PURE__*/React.createElement("div", {
    className: "stem"
  }, question), /*#__PURE__*/React.createElement("div", {
    className: "quiz-opts"
  }, options.map(function (opt, i) {
    var isPicked = picked === i;
    var isCorrect = picked !== null && i === correctIndex;
    var isWrong = picked === i && i !== correctIndex;
    return /*#__PURE__*/React.createElement("button", {
      key: i,
      className: "quiz-opt ".concat(isPicked ? "selected" : "", " ").concat(isCorrect ? "correct" : "", " ").concat(isWrong ? "wrong" : ""),
      onClick: function onClick() {
        return setPicked(i);
      },
      disabled: picked !== null && i !== correctIndex && i !== picked
    }, opt);
  })), picked !== null && /*#__PURE__*/React.createElement("div", {
    className: "quiz-explain"
  }, picked === correctIndex ? "✓ Yep, that's right. " : "Not quite — the answer is highlighted in green. ", explain, picked !== correctIndex && /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 6
    }
  }, /*#__PURE__*/React.createElement(Button, {
    size: "sm",
    variant: "ghost",
    onClick: function onClick() {
      return setPicked(null);
    }
  }, "Try again"))));
}

/* ---------- Blur/reveal — "predict before you peek" pattern ---------- */
function BlurReveal(_ref0) {
  var children = _ref0.children,
    _ref0$label = _ref0.label,
    label = _ref0$label === void 0 ? "Tap to reveal" : _ref0$label;
  var _useState3 = useState(false),
    _useState4 = _slicedToArray(_useState3, 2),
    shown = _useState4[0],
    setShown = _useState4[1];
  return /*#__PURE__*/React.createElement("div", {
    className: "reveal-blur ".concat(shown ? "shown" : ""),
    onClick: function onClick() {
      return setShown(true);
    },
    role: "button",
    tabIndex: 0,
    title: shown ? "" : label,
    style: {
      display: "inline-block",
      padding: "2px 6px",
      borderRadius: 6,
      background: shown ? "transparent" : "var(--bg-2)"
    }
  }, children);
}

/* ============================================================
   UDL controls — TTS, plain language, text size, dyslexic font
   ============================================================ */

var lsGet = function lsGet(k) {
  try {
    return localStorage.getItem(k);
  } catch (_unused) {
    return null;
  }
};
var lsSet = function lsSet(k, v) {
  try {
    localStorage.setItem(k, v);
  } catch (_unused2) {}
};
function useUDL() {
  var _useState5 = useState(function () {
      return parseFloat(lsGet("udl.textSize") || "1") || 1;
    }),
    _useState6 = _slicedToArray(_useState5, 2),
    textSize = _useState6[0],
    setTextSize = _useState6[1];
  var _useState7 = useState(function () {
      return lsGet("udl.dyslexic") === "1";
    }),
    _useState8 = _slicedToArray(_useState7, 2),
    dyslexic = _useState8[0],
    setDyslexic = _useState8[1];
  var _useState9 = useState(function () {
      return lsGet("udl.plain") === "1";
    }),
    _useState0 = _slicedToArray(_useState9, 2),
    plain = _useState0[0],
    setPlain = _useState0[1];
  var _useState1 = useState(false),
    _useState10 = _slicedToArray(_useState1, 2),
    ttsOn = _useState10[0],
    setTtsOn = _useState10[1];
  useEffect(function () {
    document.documentElement.style.setProperty("--text-scale", textSize);
    lsSet("udl.textSize", String(textSize));
  }, [textSize]);
  useEffect(function () {
    document.documentElement.setAttribute("data-dyslexic", dyslexic ? "true" : "false");
    lsSet("udl.dyslexic", dyslexic ? "1" : "0");
  }, [dyslexic]);
  useEffect(function () {
    lsSet("udl.plain", plain ? "1" : "0");
  }, [plain]);
  return {
    textSize: textSize,
    setTextSize: setTextSize,
    dyslexic: dyslexic,
    setDyslexic: setDyslexic,
    plain: plain,
    setPlain: setPlain,
    ttsOn: ttsOn,
    setTtsOn: setTtsOn
  };
}
function UDLBar(_ref1) {
  var udl = _ref1.udl;
  var cycleSize = function cycleSize() {
    var sizes = [1, 1.15, 1.3];
    var i = sizes.indexOf(udl.textSize);
    udl.setTextSize(sizes[(i + 1) % sizes.length]);
  };
  var readPage = function readPage() {
    if (!("speechSynthesis" in window)) return;
    if (udl.ttsOn) {
      window.speechSynthesis.cancel();
      udl.setTtsOn(false);
      return;
    }
    var mainEl = document.querySelector(".main-inner");
    if (!mainEl) return;
    var text = mainEl.innerText.replace(/\s+/g, " ").trim();
    var utter = new SpeechSynthesisUtterance(text);
    utter.rate = 0.95;
    utter.pitch = 1;
    utter.onend = function () {
      return udl.setTtsOn(false);
    };
    utter.onerror = function () {
      return udl.setTtsOn(false);
    };
    window.speechSynthesis.cancel();
    window.speechSynthesis.speak(utter);
    udl.setTtsOn(true);
  };

  // Ensure TTS stops when navigating
  useEffect(function () {
    return function () {
      if ("speechSynthesis" in window) window.speechSynthesis.cancel();
    };
  }, []);
  return /*#__PURE__*/React.createElement("div", {
    className: "udl-controls",
    role: "toolbar",
    "aria-label": "Accessibility controls"
  }, /*#__PURE__*/React.createElement("button", {
    className: "udl-btn ".concat(udl.ttsOn ? "on" : ""),
    title: "Read aloud",
    onClick: readPage,
    "aria-pressed": udl.ttsOn
  }, /*#__PURE__*/React.createElement(Icon, {
    name: udl.ttsOn ? "speaker-off" : "speaker"
  }), /*#__PURE__*/React.createElement("span", null, udl.ttsOn ? "Stop" : "Read aloud")), /*#__PURE__*/React.createElement("button", {
    className: "udl-btn ".concat(udl.plain ? "on" : ""),
    title: "Plain language mode",
    onClick: function onClick() {
      return udl.setPlain(!udl.plain);
    },
    "aria-pressed": udl.plain
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "simple"
  }), /*#__PURE__*/React.createElement("span", null, "Plain")), /*#__PURE__*/React.createElement("button", {
    className: "udl-btn ".concat(udl.textSize > 1 ? "on" : ""),
    title: "Text size",
    onClick: cycleSize
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "text-size"
  }), /*#__PURE__*/React.createElement("span", null, udl.textSize === 1 ? "A" : udl.textSize === 1.15 ? "A+" : "A++")), /*#__PURE__*/React.createElement("button", {
    className: "udl-btn ".concat(udl.dyslexic ? "on" : ""),
    title: "Dyslexia-friendly font",
    onClick: function onClick() {
      return udl.setDyslexic(!udl.dyslexic);
    },
    "aria-pressed": udl.dyslexic
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "dyslexic"
  }), /*#__PURE__*/React.createElement("span", null, "Dyslexic")));
}

/* ---------- PlainSwitch — show one of two strings based on plain-language toggle ---------- */
function P(_ref10) {
  var normal = _ref10.normal,
    plain = _ref10.plain,
    children = _ref10.children,
    udl = _ref10.udl;
  // If used as <P udl={udl} normal="..." plain="..." /> — pick by state
  if (normal !== undefined || plain !== undefined) {
    return /*#__PURE__*/React.createElement("span", null, udl !== null && udl !== void 0 && udl.plain ? plain || normal : normal || plain);
  }
  return /*#__PURE__*/React.createElement("span", null, children);
}

/* ---------- Local persistent state ---------- */
function usePersisted(key, initial) {
  var _useState11 = useState(function () {
      try {
        var raw = localStorage.getItem(key);
        return raw === null ? initial : JSON.parse(raw);
      } catch (_unused3) {
        return initial;
      }
    }),
    _useState12 = _slicedToArray(_useState11, 2),
    v = _useState12[0],
    setV = _useState12[1];
  useEffect(function () {
    try {
      localStorage.setItem(key, JSON.stringify(v));
    } catch (_unused4) {}
  }, [key, v]);
  return [v, setV];
}

/* Export */
Object.assign(window, {
  Icon: Icon,
  Term: Term,
  GlossaryProvider: GlossaryProvider,
  Button: Button,
  Chip: Chip,
  Callout: Callout,
  Tabs: Tabs,
  Progress: Progress,
  QuizMC: QuizMC,
  BlurReveal: BlurReveal,
  useUDL: useUDL,
  UDLBar: UDLBar,
  P: P,
  usePersisted: usePersisted
});

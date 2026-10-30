/* Generated from banners.jsx by tools/build.js. Edit the .jsx, not this file. */
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
   Section banners — one animated SVG per unit
   Plus shared CC image helper
   ============================================================ */

var _React = React,
  bn_useEffect = _React.useEffect,
  bn_useRef = _React.useRef;

/* ------------------------------------------------------------
   CC image helper — Wikimedia Commons via Special:FilePath
   Image data lives in data.js; this just renders with caption.
------------------------------------------------------------ */
function CCImage(_ref) {
  var file = _ref.file,
    src = _ref.src,
    _ref$width = _ref.width,
    width = _ref$width === void 0 ? 480 : _ref$width,
    alt = _ref.alt,
    caption = _ref.caption,
    credit = _ref.credit,
    source = _ref.source,
    _ref$license = _ref.license,
    license = _ref$license === void 0 ? "CC-BY-SA / public domain" : _ref$license,
    _ref$style = _ref.style,
    style = _ref$style === void 0 ? {} : _ref$style,
    _ref$frame = _ref.frame,
    frame = _ref$frame === void 0 ? true : _ref$frame;
  var _React$useState = React.useState(false),
    _React$useState2 = _slicedToArray(_React$useState, 2),
    failed = _React$useState2[0],
    setFailed = _React$useState2[1];
  // Local asset path (e.g. src="assets/pdf-img-p5.jpg") takes precedence over Wikimedia file lookup.
  var isLocal = !!src;
  var url = isLocal ? src : "https://commons.wikimedia.org/wiki/Special:FilePath/".concat(encodeURIComponent(file), "?width=").concat(width);
  return /*#__PURE__*/React.createElement("figure", {
    style: _objectSpread({
      margin: "12px 0"
    }, style)
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      borderRadius: frame ? "var(--r)" : 0,
      overflow: "hidden",
      border: frame ? "1px solid var(--border)" : "none",
      background: "var(--bg-2)",
      position: "relative",
      minHeight: failed ? 120 : 0
    }
  }, failed ? /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "32px 18px",
      textAlign: "center",
      color: "var(--ink-muted)",
      fontSize: "0.85rem",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      gap: 6,
      background: "linear-gradient(135deg, oklch(0.94 0.04 60) 0%, oklch(0.96 0.025 200) 100%)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: "1.6rem",
      opacity: 0.7
    }
  }, "\uD83D\uDDBC"), /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement("em", null, caption || file)), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: "0.7rem",
      opacity: 0.7
    }
  }, "(image not available)")) : /*#__PURE__*/React.createElement("img", {
    src: url,
    alt: alt || caption || file,
    loading: "lazy",
    onError: function onError() {
      return setFailed(true);
    },
    style: {
      width: "100%",
      height: "auto",
      display: "block"
    },
    referrerPolicy: "no-referrer"
  })), !failed && (caption || credit) && /*#__PURE__*/React.createElement("figcaption", {
    style: {
      fontSize: "0.78rem",
      color: "var(--ink-muted)",
      marginTop: 6,
      lineHeight: 1.45
    }
  }, caption, credit && /*#__PURE__*/React.createElement(React.Fragment, null, " ", /*#__PURE__*/React.createElement("span", {
    style: {
      opacity: 0.7
    }
  }, "\xB7 ", credit)), /*#__PURE__*/React.createElement("span", {
    style: {
      opacity: 0.5
    }
  }, " \xB7 ", source || (isLocal ? "from booklet" : "via Wikimedia Commons"))));
}

/* Circular/avatar version for inline cards */
function CCAvatar(_ref2) {
  var file = _ref2.file,
    _ref2$size = _ref2.size,
    size = _ref2$size === void 0 ? 80 : _ref2$size,
    alt = _ref2.alt,
    _ref2$style = _ref2.style,
    style = _ref2$style === void 0 ? {} : _ref2$style;
  var _React$useState3 = React.useState(false),
    _React$useState4 = _slicedToArray(_React$useState3, 2),
    failed = _React$useState4[0],
    setFailed = _React$useState4[1];
  var initial = (alt || file || "?").trim().charAt(0).toUpperCase();
  if (!file || failed) {
    return /*#__PURE__*/React.createElement("div", {
      style: _objectSpread({
        width: size,
        height: size,
        borderRadius: "50%",
        background: "linear-gradient(135deg, oklch(0.85 0.06 60), oklch(0.7 0.12 30))",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        color: "white",
        fontFamily: "var(--font-display)",
        fontSize: size * 0.4,
        flexShrink: 0
      }, style)
    }, initial);
  }
  var url = "https://commons.wikimedia.org/wiki/Special:FilePath/".concat(encodeURIComponent(file), "?width=").concat(Math.round(size * 2));
  return /*#__PURE__*/React.createElement("div", {
    style: _objectSpread({
      width: size,
      height: size,
      borderRadius: "50%",
      overflow: "hidden",
      background: "var(--bg-2)",
      border: "1.5px solid var(--border)",
      flexShrink: 0
    }, style)
  }, /*#__PURE__*/React.createElement("img", {
    src: url,
    alt: alt || file,
    loading: "lazy",
    referrerPolicy: "no-referrer",
    onError: function onError() {
      return setFailed(true);
    },
    style: {
      width: "100%",
      height: "100%",
      objectFit: "cover"
    }
  }));
}

/* ------------------------------------------------------------
   UNIT BANNERS — animated SVG per unit
------------------------------------------------------------ */

function BannerU1() {
  // 6.1 Classification of matter — floating geometric shapes (cubes, hexagons, spheres) drifting
  return /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 800 200",
    preserveAspectRatio: "xMidYMid slice",
    style: {
      width: "100%",
      height: "100%",
      display: "block"
    }
  }, /*#__PURE__*/React.createElement("defs", null, /*#__PURE__*/React.createElement("linearGradient", {
    id: "u1bg",
    x1: "0",
    x2: "0",
    y1: "0",
    y2: "1"
  }, /*#__PURE__*/React.createElement("stop", {
    offset: "0%",
    stopColor: "oklch(0.96 0.04 60)"
  }), /*#__PURE__*/React.createElement("stop", {
    offset: "100%",
    stopColor: "oklch(0.92 0.06 50)"
  })), /*#__PURE__*/React.createElement("linearGradient", {
    id: "u1m1",
    x1: "0",
    x2: "1",
    y1: "0",
    y2: "1"
  }, /*#__PURE__*/React.createElement("stop", {
    offset: "0%",
    stopColor: "oklch(0.72 0.16 50)"
  }), /*#__PURE__*/React.createElement("stop", {
    offset: "100%",
    stopColor: "oklch(0.5 0.18 35)"
  })), /*#__PURE__*/React.createElement("linearGradient", {
    id: "u1m2",
    x1: "0",
    x2: "1",
    y1: "0",
    y2: "1"
  }, /*#__PURE__*/React.createElement("stop", {
    offset: "0%",
    stopColor: "oklch(0.78 0.13 90)"
  }), /*#__PURE__*/React.createElement("stop", {
    offset: "100%",
    stopColor: "oklch(0.55 0.16 70)"
  })), /*#__PURE__*/React.createElement("radialGradient", {
    id: "u1m3",
    cx: "35%",
    cy: "35%"
  }, /*#__PURE__*/React.createElement("stop", {
    offset: "0%",
    stopColor: "oklch(0.95 0.05 60)"
  }), /*#__PURE__*/React.createElement("stop", {
    offset: "100%",
    stopColor: "oklch(0.55 0.16 50)"
  })), /*#__PURE__*/React.createElement("style", null, "\n          .u1-drift-a { animation: u1-drift-a 16s ease-in-out infinite; transform-origin: center; }\n          .u1-drift-b { animation: u1-drift-b 22s ease-in-out infinite; transform-origin: center; }\n          .u1-drift-c { animation: u1-drift-c 19s ease-in-out infinite; transform-origin: center; }\n          .u1-spin-s { animation: u1-spin 30s linear infinite; transform-origin: center; transform-box: fill-box; }\n          .u1-spin-f { animation: u1-spin 22s linear infinite reverse; transform-origin: center; transform-box: fill-box; }\n          @keyframes u1-drift-a { 0%,100% { transform: translate(0,0); } 50% { transform: translate(0,-14px); } }\n          @keyframes u1-drift-b { 0%,100% { transform: translate(0,0); } 50% { transform: translate(8px,-10px); } }\n          @keyframes u1-drift-c { 0%,100% { transform: translate(0,0); } 50% { transform: translate(-10px,-8px); } }\n          @keyframes u1-spin { to { transform: rotate(360deg); } }\n        ")), /*#__PURE__*/React.createElement("rect", {
    width: "800",
    height: "200",
    fill: "url(#u1bg)"
  }), /*#__PURE__*/React.createElement("g", {
    className: "u1-drift-a"
  }, /*#__PURE__*/React.createElement("g", {
    className: "u1-spin-s",
    style: {
      transformOrigin: "100px 100px"
    }
  }, /*#__PURE__*/React.createElement("polygon", {
    points: "100,55 145,75 145,125 100,145 55,125 55,75",
    fill: "url(#u1m1)",
    opacity: "0.92"
  }), /*#__PURE__*/React.createElement("polyline", {
    points: "100,55 100,100 145,125",
    fill: "none",
    stroke: "oklch(0.95 0.05 60 / 0.6)",
    strokeWidth: "1.2"
  }), /*#__PURE__*/React.createElement("line", {
    x1: "100",
    y1: "100",
    x2: "55",
    y2: "125",
    stroke: "oklch(0.95 0.05 60 / 0.6)",
    strokeWidth: "1.2"
  }))), /*#__PURE__*/React.createElement("g", {
    className: "u1-drift-b",
    transform: "translate(280, 100)"
  }, /*#__PURE__*/React.createElement("g", {
    className: "u1-spin-f"
  }, /*#__PURE__*/React.createElement("polygon", {
    points: "0,-44 38,-22 38,22 0,44 -38,22 -38,-22",
    fill: "url(#u1m2)",
    opacity: "0.9"
  }), /*#__PURE__*/React.createElement("polygon", {
    points: "0,-22 19,-11 19,11 0,22 -19,11 -19,-11",
    fill: "oklch(0.92 0.08 80 / 0.6)"
  }))), /*#__PURE__*/React.createElement("g", {
    className: "u1-drift-c",
    transform: "translate(470, 100)"
  }, /*#__PURE__*/React.createElement("circle", {
    r: "38",
    fill: "url(#u1m3)"
  }), /*#__PURE__*/React.createElement("ellipse", {
    cx: "-12",
    cy: "-12",
    rx: "14",
    ry: "8",
    fill: "oklch(0.98 0.04 60 / 0.6)",
    transform: "rotate(-30)"
  })), /*#__PURE__*/React.createElement("g", {
    className: "u1-drift-a",
    transform: "translate(640, 100)"
  }, /*#__PURE__*/React.createElement("rect", {
    x: "-50",
    y: "-12",
    width: "100",
    height: "24",
    rx: "4",
    fill: "url(#u1m1)",
    opacity: "0.85"
  }), /*#__PURE__*/React.createElement("rect", {
    x: "-50",
    y: "-12",
    width: "100",
    height: "6",
    rx: "2",
    fill: "oklch(0.95 0.06 60 / 0.5)"
  })), /*#__PURE__*/React.createElement("g", {
    className: "u1-drift-b",
    transform: "translate(740, 90)"
  }, /*#__PURE__*/React.createElement("circle", {
    r: "14",
    fill: "none",
    stroke: "oklch(0.55 0.16 50 / 0.6)",
    strokeWidth: "1.4"
  }), /*#__PURE__*/React.createElement("circle", {
    r: "6",
    fill: "oklch(0.85 0.08 60 / 0.55)"
  })), /*#__PURE__*/React.createElement("g", {
    className: "u1-drift-c",
    transform: "translate(180, 60)"
  }, /*#__PURE__*/React.createElement("circle", {
    r: "9",
    fill: "none",
    stroke: "oklch(0.55 0.16 50 / 0.5)",
    strokeWidth: "1.2"
  })), /*#__PURE__*/React.createElement("g", {
    className: "u1-drift-a",
    transform: "translate(380, 50)"
  }, /*#__PURE__*/React.createElement("circle", {
    r: "7",
    fill: "oklch(0.85 0.1 90 / 0.6)"
  })), /*#__PURE__*/React.createElement("g", {
    className: "u1-drift-b",
    transform: "translate(570, 160)"
  }, /*#__PURE__*/React.createElement("circle", {
    r: "6",
    fill: "none",
    stroke: "oklch(0.55 0.16 50 / 0.4)",
    strokeWidth: "1.2"
  })));
}
function BannerU2() {
  // 6.2 Atomic structure — orbiting electrons + nucleus, particle trails
  return /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 800 200",
    preserveAspectRatio: "xMidYMid slice",
    style: {
      width: "100%",
      height: "100%",
      display: "block"
    }
  }, /*#__PURE__*/React.createElement("defs", null, /*#__PURE__*/React.createElement("linearGradient", {
    id: "u2bg",
    x1: "0",
    x2: "0",
    y1: "0",
    y2: "1"
  }, /*#__PURE__*/React.createElement("stop", {
    offset: "0%",
    stopColor: "oklch(0.96 0.025 200)"
  }), /*#__PURE__*/React.createElement("stop", {
    offset: "100%",
    stopColor: "oklch(0.92 0.04 195)"
  })), /*#__PURE__*/React.createElement("radialGradient", {
    id: "u2nuc",
    cx: "35%",
    cy: "35%"
  }, /*#__PURE__*/React.createElement("stop", {
    offset: "0%",
    stopColor: "oklch(0.92 0.16 60)"
  }), /*#__PURE__*/React.createElement("stop", {
    offset: "60%",
    stopColor: "oklch(0.6 0.2 40)"
  }), /*#__PURE__*/React.createElement("stop", {
    offset: "100%",
    stopColor: "oklch(0.4 0.18 30)"
  })), /*#__PURE__*/React.createElement("radialGradient", {
    id: "u2elec",
    cx: "35%",
    cy: "35%"
  }, /*#__PURE__*/React.createElement("stop", {
    offset: "0%",
    stopColor: "oklch(0.95 0.1 230)"
  }), /*#__PURE__*/React.createElement("stop", {
    offset: "100%",
    stopColor: "oklch(0.45 0.18 220)"
  })), /*#__PURE__*/React.createElement("linearGradient", {
    id: "u2trail",
    x1: "0",
    x2: "1"
  }, /*#__PURE__*/React.createElement("stop", {
    offset: "0%",
    stopColor: "oklch(0.55 0.13 210 / 0)"
  }), /*#__PURE__*/React.createElement("stop", {
    offset: "60%",
    stopColor: "oklch(0.55 0.13 210 / 0.5)"
  }), /*#__PURE__*/React.createElement("stop", {
    offset: "100%",
    stopColor: "oklch(0.55 0.13 210 / 0)"
  })), /*#__PURE__*/React.createElement("style", null, "\n          .u2-orbit-1 { animation: u2-spin 9s linear infinite; transform-origin: 400px 100px; }\n          .u2-orbit-2 { animation: u2-spin 14s linear infinite reverse; transform-origin: 400px 100px; }\n          .u2-orbit-3 { animation: u2-spin 19s linear infinite; transform-origin: 400px 100px; }\n          .u2-pulse { animation: u2-pulse 4s ease-in-out infinite; transform-origin: center; transform-box: fill-box; }\n          .u2-twinkle { animation: u2-twinkle 4s ease-in-out infinite; }\n          .u2-twinkle-b { animation: u2-twinkle 5.5s ease-in-out infinite; animation-delay: -1.5s; }\n          .u2-twinkle-c { animation: u2-twinkle 6s ease-in-out infinite; animation-delay: -3s; }\n          @keyframes u2-spin { to { transform: rotate(360deg); } }\n          @keyframes u2-pulse { 0%,100% { transform: scale(1); } 50% { transform: scale(1.07); } }\n          @keyframes u2-twinkle { 0%,100% { opacity: 0.2; } 50% { opacity: 1; } }\n        ")), /*#__PURE__*/React.createElement("rect", {
    width: "800",
    height: "200",
    fill: "url(#u2bg)"
  }), /*#__PURE__*/React.createElement("ellipse", {
    cx: "400",
    cy: "100",
    rx: "200",
    ry: "58",
    fill: "none",
    stroke: "oklch(0.5 0.13 210 / 0.2)",
    strokeWidth: "1.2",
    strokeDasharray: "2 4"
  }), /*#__PURE__*/React.createElement("ellipse", {
    cx: "400",
    cy: "100",
    rx: "200",
    ry: "58",
    fill: "none",
    stroke: "oklch(0.5 0.13 210 / 0.2)",
    strokeWidth: "1.2",
    strokeDasharray: "2 4",
    transform: "rotate(60 400 100)"
  }), /*#__PURE__*/React.createElement("ellipse", {
    cx: "400",
    cy: "100",
    rx: "200",
    ry: "58",
    fill: "none",
    stroke: "oklch(0.5 0.13 210 / 0.2)",
    strokeWidth: "1.2",
    strokeDasharray: "2 4",
    transform: "rotate(120 400 100)"
  }), /*#__PURE__*/React.createElement("g", {
    className: "u2-pulse",
    transform: "translate(400 100)"
  }, /*#__PURE__*/React.createElement("circle", {
    r: "44",
    fill: "oklch(0.85 0.16 50 / 0.18)"
  }), /*#__PURE__*/React.createElement("circle", {
    r: "22",
    fill: "url(#u2nuc)"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "-6",
    cy: "-6",
    r: "5",
    fill: "oklch(0.72 0.2 30)",
    opacity: "0.7"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "6",
    cy: "-6",
    r: "5",
    fill: "oklch(0.55 0.02 250)",
    opacity: "0.75"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "-6",
    cy: "6",
    r: "5",
    fill: "oklch(0.55 0.02 250)",
    opacity: "0.75"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "6",
    cy: "6",
    r: "5",
    fill: "oklch(0.72 0.2 30)",
    opacity: "0.7"
  }), /*#__PURE__*/React.createElement("ellipse", {
    cx: "-7",
    cy: "-7",
    rx: "6",
    ry: "3",
    fill: "oklch(0.98 0.04 60 / 0.5)",
    transform: "rotate(-30 -7 -7)"
  })), /*#__PURE__*/React.createElement("g", {
    className: "u2-orbit-1"
  }, /*#__PURE__*/React.createElement("ellipse", {
    cx: "400",
    cy: "100",
    rx: "200",
    ry: "58",
    fill: "none",
    stroke: "url(#u2trail)",
    strokeWidth: "2"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "600",
    cy: "100",
    r: "7",
    fill: "url(#u2elec)"
  })), /*#__PURE__*/React.createElement("g", {
    style: {
      transformOrigin: "400px 100px",
      transform: "rotate(60deg)"
    }
  }, /*#__PURE__*/React.createElement("g", {
    className: "u2-orbit-2"
  }, /*#__PURE__*/React.createElement("ellipse", {
    cx: "400",
    cy: "100",
    rx: "200",
    ry: "58",
    fill: "none",
    stroke: "url(#u2trail)",
    strokeWidth: "2"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "600",
    cy: "100",
    r: "6",
    fill: "url(#u2elec)"
  }))), /*#__PURE__*/React.createElement("g", {
    style: {
      transformOrigin: "400px 100px",
      transform: "rotate(120deg)"
    }
  }, /*#__PURE__*/React.createElement("g", {
    className: "u2-orbit-3"
  }, /*#__PURE__*/React.createElement("ellipse", {
    cx: "400",
    cy: "100",
    rx: "200",
    ry: "58",
    fill: "none",
    stroke: "url(#u2trail)",
    strokeWidth: "2"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "200",
    cy: "100",
    r: "6.5",
    fill: "url(#u2elec)"
  }))), /*#__PURE__*/React.createElement("g", {
    className: "u2-twinkle",
    transform: "translate(90, 50)"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M0,-7 L2,-2 L7,0 L2,2 L0,7 L-2,2 L-7,0 L-2,-2 Z",
    fill: "oklch(0.65 0.16 210 / 0.7)"
  })), /*#__PURE__*/React.createElement("g", {
    className: "u2-twinkle-b",
    transform: "translate(710, 160)"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M0,-6 L1.8,-1.8 L6,0 L1.8,1.8 L0,6 L-1.8,1.8 L-6,0 L-1.8,-1.8 Z",
    fill: "oklch(0.65 0.16 50 / 0.7)"
  })), /*#__PURE__*/React.createElement("g", {
    className: "u2-twinkle-c",
    transform: "translate(140, 150)"
  }, /*#__PURE__*/React.createElement("circle", {
    r: "3",
    fill: "oklch(0.65 0.16 290 / 0.65)"
  })), /*#__PURE__*/React.createElement("g", {
    className: "u2-twinkle",
    transform: "translate(680, 40)"
  }, /*#__PURE__*/React.createElement("circle", {
    r: "2.5",
    fill: "oklch(0.65 0.16 145 / 0.65)"
  })));
}
function BannerU3() {
  // 6.3 Periodic table — grid of element tiles with wave shimmer
  var types = ["alkali", "alkaline", "transition", "metalloid", "nonmetal", "halogen", "noble", "post"];
  var tileColours = {
    alkali: "oklch(0.78 0.13 25)",
    alkaline: "oklch(0.82 0.13 60)",
    transition: "oklch(0.80 0.10 95)",
    post: "oklch(0.85 0.07 165)",
    metalloid: "oklch(0.78 0.10 195)",
    nonmetal: "oklch(0.80 0.12 230)",
    halogen: "oklch(0.78 0.13 275)",
    noble: "oklch(0.78 0.12 320)"
  };

  // 18 cols × 4 rows of mini-tiles
  var tiles = [];
  for (var r = 0; r < 4; r++) {
    for (var c = 0; c < 18; c++) {
      var t = types[(r * 5 + c) % types.length];
      tiles.push({
        r: r,
        c: c,
        t: t,
        key: "".concat(r, "-").concat(c),
        delay: (r + c) % 12 * 0.18
      });
    }
  }
  return /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 800 200",
    preserveAspectRatio: "xMidYMid slice",
    style: {
      width: "100%",
      height: "100%",
      display: "block"
    }
  }, /*#__PURE__*/React.createElement("defs", null, /*#__PURE__*/React.createElement("linearGradient", {
    id: "u3bg",
    x1: "0",
    x2: "0",
    y1: "0",
    y2: "1"
  }, /*#__PURE__*/React.createElement("stop", {
    offset: "0%",
    stopColor: "oklch(0.96 0.025 290)"
  }), /*#__PURE__*/React.createElement("stop", {
    offset: "100%",
    stopColor: "oklch(0.92 0.04 285)"
  })), /*#__PURE__*/React.createElement("style", null, "\n          .u3tile { animation: u3-tile 4s ease-in-out infinite; transform-origin: center; transform-box: fill-box; }\n          @keyframes u3-tile {\n            0%, 100% { opacity: 0.55; transform: translateY(0); }\n            50%      { opacity: 1;    transform: translateY(-2.5px); }\n          }\n        ")), /*#__PURE__*/React.createElement("rect", {
    width: "800",
    height: "200",
    fill: "url(#u3bg)"
  }), /*#__PURE__*/React.createElement("g", {
    transform: "translate(40, 30)"
  }, tiles.map(function (_ref3) {
    var r = _ref3.r,
      c = _ref3.c,
      t = _ref3.t,
      key = _ref3.key,
      delay = _ref3.delay;
    return /*#__PURE__*/React.createElement("rect", {
      key: key,
      className: "u3tile",
      x: c * 39,
      y: r * 34,
      width: "33",
      height: "28",
      rx: "4",
      fill: tileColours[t],
      style: {
        animationDelay: "".concat(delay, "s")
      }
    });
  })), /*#__PURE__*/React.createElement("g", {
    transform: "translate(560, 80)"
  }, /*#__PURE__*/React.createElement("rect", {
    x: "-32",
    y: "-28",
    width: "68",
    height: "76",
    rx: "8",
    fill: "oklch(0.99 0.01 60)",
    stroke: "oklch(0.5 0.18 290)",
    strokeWidth: "1.5"
  }), /*#__PURE__*/React.createElement("text", {
    x: "-26",
    y: "-13",
    style: {
      fontSize: 9,
      fill: "var(--ink-muted)",
      fontFamily: "var(--font-mono)"
    }
  }, "78"), /*#__PURE__*/React.createElement("text", {
    x: "2",
    y: "20",
    textAnchor: "middle",
    style: {
      fontSize: 38,
      fill: "oklch(0.4 0.18 290)",
      fontFamily: "var(--font-display)",
      fontWeight: 600
    }
  }, "Pt"), /*#__PURE__*/React.createElement("text", {
    x: "2",
    y: "36",
    textAnchor: "middle",
    style: {
      fontSize: 8,
      fill: "var(--ink-muted)"
    }
  }, "Platinum")));
}
function BannerU4() {
  // 6.4 In context — city skyline silhouette with materials labels floating
  return /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 800 200",
    preserveAspectRatio: "xMidYMid slice",
    style: {
      width: "100%",
      height: "100%",
      display: "block"
    }
  }, /*#__PURE__*/React.createElement("defs", null, /*#__PURE__*/React.createElement("linearGradient", {
    id: "u4bg",
    x1: "0",
    x2: "0",
    y1: "0",
    y2: "1"
  }, /*#__PURE__*/React.createElement("stop", {
    offset: "0%",
    stopColor: "oklch(0.96 0.025 145)"
  }), /*#__PURE__*/React.createElement("stop", {
    offset: "100%",
    stopColor: "oklch(0.92 0.05 140)"
  })), /*#__PURE__*/React.createElement("linearGradient", {
    id: "u4sky",
    x1: "0",
    x2: "0",
    y1: "0",
    y2: "1"
  }, /*#__PURE__*/React.createElement("stop", {
    offset: "0%",
    stopColor: "oklch(0.90 0.08 145 / 0)"
  }), /*#__PURE__*/React.createElement("stop", {
    offset: "100%",
    stopColor: "oklch(0.70 0.13 145 / 0.5)"
  })), /*#__PURE__*/React.createElement("style", null, "\n          .u4-rise-a { animation: u4-rise 6s ease-in-out infinite; }\n          .u4-rise-b { animation: u4-rise 7s ease-in-out infinite; animation-delay: -2s; }\n          .u4-rise-c { animation: u4-rise 8s ease-in-out infinite; animation-delay: -4s; }\n          .u4-shimmer { animation: u4-shimmer 5s ease-in-out infinite; }\n          @keyframes u4-rise {\n            0%, 100% { transform: translateY(0); opacity: 0.85; }\n            50%      { transform: translateY(-8px); opacity: 1; }\n          }\n          @keyframes u4-shimmer {\n            0%, 100% { opacity: 0.5; }\n            50%      { opacity: 1; }\n          }\n        ")), /*#__PURE__*/React.createElement("rect", {
    width: "800",
    height: "200",
    fill: "url(#u4bg)"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "640",
    cy: "60",
    r: "28",
    fill: "oklch(0.92 0.16 90 / 0.6)"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "640",
    cy: "60",
    r: "18",
    fill: "oklch(0.88 0.18 80)",
    className: "u4-shimmer"
  }), /*#__PURE__*/React.createElement("g", {
    fill: "oklch(0.45 0.1 150)",
    opacity: "0.85"
  }, /*#__PURE__*/React.createElement("polygon", {
    points: "0,160 60,160 60,100 90,100 90,140 130,140 130,80 175,80 175,120 230,120 230,90 270,90 270,160 0,160"
  }), /*#__PURE__*/React.createElement("polygon", {
    points: "280,160 280,110 320,110 320,70 360,70 360,130 410,130 410,95 460,95 460,160 280,160"
  }), /*#__PURE__*/React.createElement("polygon", {
    points: "470,160 470,120 530,120 530,60 570,60 570,100 620,100 620,140 670,140 670,160 470,160"
  }), /*#__PURE__*/React.createElement("polygon", {
    points: "680,160 680,130 740,130 740,90 800,90 800,160 680,160"
  })), /*#__PURE__*/React.createElement("g", {
    fill: "oklch(0.88 0.12 90 / 0.85)"
  }, [[70, 115], [70, 128], [70, 141], [100, 116], [100, 129], [140, 95], [140, 108], [140, 121], [186, 96], [186, 109], [186, 122], [240, 105], [240, 118], [330, 85], [330, 98], [330, 111], [375, 85], [375, 98], [375, 111], [425, 110], [425, 123], [475, 135], [540, 75], [540, 88], [540, 101], [580, 115], [580, 128], [630, 115], [630, 128], [690, 145], [750, 105], [750, 118], [750, 131]].map(function (_ref4, i) {
    var _ref5 = _slicedToArray(_ref4, 2),
      x = _ref5[0],
      y = _ref5[1];
    return /*#__PURE__*/React.createElement("rect", {
      key: i,
      x: x,
      y: y,
      width: "6",
      height: "6"
    });
  })), /*#__PURE__*/React.createElement("rect", {
    x: "0",
    y: "160",
    width: "800",
    height: "40",
    fill: "oklch(0.4 0.08 150)"
  }), /*#__PURE__*/React.createElement("rect", {
    x: "0",
    y: "160",
    width: "800",
    height: "40",
    fill: "url(#u4sky)"
  }), /*#__PURE__*/React.createElement("g", {
    className: "u4-rise-a",
    transform: "translate(100, 50)"
  }, /*#__PURE__*/React.createElement("rect", {
    x: "-30",
    y: "-13",
    width: "60",
    height: "26",
    rx: "13",
    fill: "oklch(0.99 0.01 60)",
    stroke: "oklch(0.5 0.16 145)"
  }), /*#__PURE__*/React.createElement("text", {
    x: "0",
    y: "5",
    textAnchor: "middle",
    style: {
      fontSize: 11,
      fill: "oklch(0.45 0.16 145)",
      fontFamily: "var(--font-mono)",
      fontWeight: 600
    }
  }, "Cu wire")), /*#__PURE__*/React.createElement("g", {
    className: "u4-rise-b",
    transform: "translate(360, 35)"
  }, /*#__PURE__*/React.createElement("rect", {
    x: "-32",
    y: "-13",
    width: "64",
    height: "26",
    rx: "13",
    fill: "oklch(0.99 0.01 60)",
    stroke: "oklch(0.5 0.16 145)"
  }), /*#__PURE__*/React.createElement("text", {
    x: "0",
    y: "5",
    textAnchor: "middle",
    style: {
      fontSize: 11,
      fill: "oklch(0.45 0.16 145)",
      fontFamily: "var(--font-mono)",
      fontWeight: 600
    }
  }, "Al alloy")), /*#__PURE__*/React.createElement("g", {
    className: "u4-rise-c",
    transform: "translate(530, 50)"
  }, /*#__PURE__*/React.createElement("rect", {
    x: "-32",
    y: "-13",
    width: "64",
    height: "26",
    rx: "13",
    fill: "oklch(0.99 0.01 60)",
    stroke: "oklch(0.5 0.16 145)"
  }), /*#__PURE__*/React.createElement("text", {
    x: "0",
    y: "5",
    textAnchor: "middle",
    style: {
      fontSize: 11,
      fill: "oklch(0.45 0.16 145)",
      fontFamily: "var(--font-mono)",
      fontWeight: 600
    }
  }, "Fe + C")));
}

/* ------------------------------------------------------------
   Generic SectionBanner — chooses the right one
------------------------------------------------------------ */
function SectionBanner(_ref6) {
  var unitId = _ref6.unitId;
  var banners = {
    u1: BannerU1,
    u2: BannerU2,
    u3: BannerU3,
    u4: BannerU4
  };
  var B = banners[unitId] || BannerU2;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      borderRadius: "var(--r-lg)",
      overflow: "hidden",
      marginBottom: 18,
      border: "1px solid var(--border)",
      aspectRatio: "800 / 200"
    }
  }, /*#__PURE__*/React.createElement(B, null));
}

/* ------------------------------------------------------------
   Small decorative inline animations for lessons
------------------------------------------------------------ */

// Bouncing atoms — drop into any lesson for a touch of motion
function BouncingAtoms(_ref7) {
  var _ref7$count = _ref7.count,
    count = _ref7$count === void 0 ? 5 : _ref7$count,
    _ref7$height = _ref7.height,
    height = _ref7$height === void 0 ? 60 : _ref7$height;
  return /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 ".concat(count * 60, " ").concat(height),
    style: {
      width: "100%",
      maxWidth: count * 60,
      height: height,
      display: "block",
      margin: "8px 0"
    }
  }, /*#__PURE__*/React.createElement("style", null, "\n        .ba-bounce { animation: ba-bounce 1.6s ease-in-out infinite; transform-origin: center; transform-box: fill-box; }\n        @keyframes ba-bounce { 0%,100% { transform: translateY(0); } 50% { transform: translateY(-12px); } }\n      "), Array.from({
    length: count
  }).map(function (_, i) {
    return /*#__PURE__*/React.createElement("g", {
      key: i,
      transform: "translate(".concat(30 + i * 60, ", ").concat(height - 18, ")"),
      className: "ba-bounce",
      style: {
        animationDelay: "".concat(i * 0.18, "s")
      }
    }, /*#__PURE__*/React.createElement("circle", {
      r: "14",
      fill: ["oklch(0.7 0.16 50)", "oklch(0.7 0.13 200)", "oklch(0.65 0.15 290)", "oklch(0.7 0.13 145)", "oklch(0.78 0.14 90)"][i % 5]
    }), /*#__PURE__*/React.createElement("ellipse", {
      cx: "-4",
      cy: "-4",
      rx: "5",
      ry: "3",
      fill: "oklch(0.95 0.05 60 / 0.5)",
      transform: "rotate(-30 -4 -4)"
    }));
  }));
}

// Electron orbit — circular animation
function OrbitingElectrons(_ref8) {
  var _ref8$size = _ref8.size,
    size = _ref8$size === void 0 ? 100 : _ref8$size;
  return /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 ".concat(size, " ").concat(size),
    style: {
      width: size,
      height: size
    }
  }, /*#__PURE__*/React.createElement("style", null, "\n        .oe-spin { animation: oe-spin 4s linear infinite; transform-origin: center; }\n        @keyframes oe-spin { to { transform: rotate(360deg); } }\n      "), /*#__PURE__*/React.createElement("circle", {
    cx: size / 2,
    cy: size / 2,
    r: size / 2.7,
    fill: "none",
    stroke: "oklch(0.55 0.16 220 / 0.45)",
    strokeWidth: "1.2",
    strokeDasharray: "2 4"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: size / 2,
    cy: size / 2,
    r: 6,
    fill: "oklch(0.55 0.2 30)"
  }), /*#__PURE__*/React.createElement("g", {
    className: "oe-spin",
    style: {
      transformOrigin: "".concat(size / 2, "px ").concat(size / 2, "px")
    }
  }, /*#__PURE__*/React.createElement("circle", {
    cx: size - size / 2.7 - 2,
    cy: size / 2,
    r: "4",
    fill: "oklch(0.5 0.18 230)"
  })));
}

// Gas particles in a box — for lesson 6.1.1 or 6.2.5
function GasParticles(_ref9) {
  var _ref9$width = _ref9.width,
    width = _ref9$width === void 0 ? 200 : _ref9$width,
    _ref9$height = _ref9.height,
    height = _ref9$height === void 0 ? 100 : _ref9$height;
  var pts = [[30, 30], [80, 60], [140, 35], [110, 80], [170, 75], [50, 75], [180, 30]];
  return /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 ".concat(width, " ").concat(height),
    style: {
      width: "100%",
      maxWidth: width,
      height: "auto"
    }
  }, /*#__PURE__*/React.createElement("style", null, "\n        .gp-drift-a { animation: gp-drift-a 3s ease-in-out infinite; }\n        .gp-drift-b { animation: gp-drift-b 4s ease-in-out infinite; animation-delay: -1s; }\n        .gp-drift-c { animation: gp-drift-c 5s ease-in-out infinite; animation-delay: -2s; }\n        @keyframes gp-drift-a { 0%,100% { transform: translate(0,0); } 50% { transform: translate(6px,-4px); } }\n        @keyframes gp-drift-b { 0%,100% { transform: translate(0,0); } 50% { transform: translate(-5px,5px); } }\n        @keyframes gp-drift-c { 0%,100% { transform: translate(0,0); } 50% { transform: translate(4px,6px); } }\n      "), /*#__PURE__*/React.createElement("rect", {
    x: "2",
    y: "2",
    width: width - 4,
    height: height - 4,
    rx: "6",
    fill: "oklch(0.95 0.025 200)",
    stroke: "oklch(0.5 0.13 210 / 0.5)",
    strokeDasharray: "3 4"
  }), pts.map(function (_ref0, i) {
    var _ref1 = _slicedToArray(_ref0, 2),
      x = _ref1[0],
      y = _ref1[1];
    return /*#__PURE__*/React.createElement("g", {
      key: i,
      className: i % 3 === 0 ? "gp-drift-a" : i % 3 === 1 ? "gp-drift-b" : "gp-drift-c"
    }, /*#__PURE__*/React.createElement("circle", {
      cx: x,
      cy: y,
      r: 5 + i % 2,
      fill: i % 2 ? "oklch(0.55 0.16 220)" : "oklch(0.6 0.18 60)",
      opacity: "0.85"
    }));
  }));
}
Object.assign(window, {
  CCImage: CCImage,
  CCAvatar: CCAvatar,
  BannerU1: BannerU1,
  BannerU2: BannerU2,
  BannerU3: BannerU3,
  BannerU4: BannerU4,
  SectionBanner: SectionBanner,
  BouncingAtoms: BouncingAtoms,
  OrbitingElectrons: OrbitingElectrons,
  GasParticles: GasParticles
});

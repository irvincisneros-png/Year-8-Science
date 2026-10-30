/* Generated from periodic.jsx by tools/build.js. Edit the .jsx, not this file. */
"use strict";

function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
/* ============================================================
   Periodic Table + Atom Builder (used by Unit 6.3 lessons)
   Exposes: PeriodicTable, AtomBuilder
   ============================================================ */

var _React = React,
  pt_useState = _React.useState,
  pt_useEffect = _React.useEffect,
  pt_useMemo = _React.useMemo,
  pt_useRef = _React.useRef;

/* ------------------------------------------------------------
   PeriodicTable component — full 118 element grid
   Props: filter, highlightCategory, onSelect, selected, mode
------------------------------------------------------------ */
function PeriodicTable(_ref) {
  var onSelect = _ref.onSelect,
    selected = _ref.selected,
    highlightCategory = _ref.highlightCategory,
    dimOthers = _ref.dimOthers,
    _ref$mode = _ref.mode,
    mode = _ref$mode === void 0 ? "default" : _ref$mode;
  var _window$AppData = window.AppData,
    PT_LAYOUT = _window$AppData.PT_LAYOUT,
    ELEMENTS = _window$AppData.ELEMENTS,
    getElementByZ = _window$AppData.getElementByZ,
    CATEGORY_LABELS = _window$AppData.CATEGORY_LABELS;
  return /*#__PURE__*/React.createElement("div", {
    className: "ptable-wrap"
  }, /*#__PURE__*/React.createElement("div", {
    className: "ptable"
  }, PT_LAYOUT.flatMap(function (row, r) {
    return row.map(function (z, c) {
      if (!z) return /*#__PURE__*/React.createElement("div", {
        key: "".concat(r, "-").concat(c),
        className: "pt-cell empty"
      });
      var el = getElementByZ(z);
      var isHighlighted = selected === z || highlightCategory && el.category === highlightCategory;
      var isDim = dimOthers && highlightCategory && el.category !== highlightCategory && selected !== z;
      return /*#__PURE__*/React.createElement("button", {
        key: z,
        className: "pt-cell ".concat(el.category, " ").concat(isHighlighted ? "highlight" : "", " ").concat(isDim ? "dim" : ""),
        onClick: function onClick() {
          return onSelect && onSelect(z);
        },
        title: "".concat(el.name, " (").concat(el.sym, ")")
      }, /*#__PURE__*/React.createElement("span", {
        className: "num"
      }, el.z), /*#__PURE__*/React.createElement("span", {
        className: "sym"
      }, el.sym), /*#__PURE__*/React.createElement("span", {
        className: "name"
      }, el.name));
    });
  })), /*#__PURE__*/React.createElement("div", {
    className: "pt-legend"
  }, Object.entries(CATEGORY_LABELS).map(function (_ref2) {
    var _ref3 = _slicedToArray(_ref2, 2),
      k = _ref3[0],
      label = _ref3[1];
    return /*#__PURE__*/React.createElement("div", {
      key: k,
      className: "pt-legend-item"
    }, /*#__PURE__*/React.createElement("div", {
      className: "pt-legend-sw pt-cell ".concat(k),
      style: {
        width: 14,
        height: 14,
        padding: 0
      }
    }), /*#__PURE__*/React.createElement("span", null, label));
  })));
}

/* ------------------------------------------------------------
   ElementDetail — info card shown alongside table or in popovers
------------------------------------------------------------ */
function ElementDetail(_ref4) {
  var z = _ref4.z;
  var _window$AppData2 = window.AppData,
    getElementByZ = _window$AppData2.getElementByZ,
    CATEGORY_LABELS = _window$AppData2.CATEGORY_LABELS;
  if (!z) return /*#__PURE__*/React.createElement("div", {
    className: "card",
    style: {
      background: "var(--bg-2)",
      textAlign: "center",
      padding: 30,
      color: "var(--ink-muted)"
    }
  }, "Click any element to learn more.");
  var el = getElementByZ(z);
  return /*#__PURE__*/React.createElement("div", {
    className: "elem-detail"
  }, /*#__PURE__*/React.createElement("div", {
    className: "big-card pt-cell ".concat(el.category),
    style: {
      aspectRatio: 1,
      cursor: "default"
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "num"
  }, el.z), /*#__PURE__*/React.createElement("span", {
    className: "sym"
  }, el.sym), /*#__PURE__*/React.createElement("span", {
    className: "name"
  }, el.name), /*#__PURE__*/React.createElement("span", {
    className: "mass"
  }, el.mass)), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h3", {
    style: {
      marginTop: 0
    }
  }, el.name), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 6,
      flexWrap: "wrap",
      marginBottom: 8
    }
  }, /*#__PURE__*/React.createElement(Chip, {
    variant: "info"
  }, CATEGORY_LABELS[el.category]), el.group ? /*#__PURE__*/React.createElement(Chip, null, "Group ", el.group) : null, /*#__PURE__*/React.createElement(Chip, null, "Period ", el.period), /*#__PURE__*/React.createElement(Chip, null, "State: ", el.state)), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: "8px 0",
      fontSize: "0.92rem"
    }
  }, /*#__PURE__*/React.createElement("strong", null, "Uses:"), " ", el.uses), el.fact && /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: "0.88rem",
      color: "var(--ink-2)",
      fontStyle: "italic"
    }
  }, el.fact), el.shells && /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 10,
      fontSize: "0.85rem"
    }
  }, /*#__PURE__*/React.createElement("strong", null, "Electron shells:"), " ", /*#__PURE__*/React.createElement("span", {
    className: "mono"
  }, el.shells.join(", ")))));
}

/* ------------------------------------------------------------
   AtomBuilder — interactive Bohr model builder for first 18
------------------------------------------------------------ */
function AtomBuilder() {
  var _el$shells;
  var _window$AppData3 = window.AppData,
    ELEMENTS = _window$AppData3.ELEMENTS,
    getElementByZ = _window$AppData3.getElementByZ;
  var first18 = ELEMENTS.filter(function (e) {
    return e.z <= 18;
  });
  var _pt_useState = pt_useState(1),
    _pt_useState2 = _slicedToArray(_pt_useState, 2),
    z = _pt_useState2[0],
    setZ = _pt_useState2[1];
  var _pt_useState3 = pt_useState(0),
    _pt_useState4 = _slicedToArray(_pt_useState3, 2),
    protonsPlaced = _pt_useState4[0],
    setProtonsPlaced = _pt_useState4[1];
  var _pt_useState5 = pt_useState(0),
    _pt_useState6 = _slicedToArray(_pt_useState5, 2),
    neutronsPlaced = _pt_useState6[0],
    setNeutronsPlaced = _pt_useState6[1];
  var _pt_useState7 = pt_useState(0),
    _pt_useState8 = _slicedToArray(_pt_useState7, 2),
    electronsPlaced = _pt_useState8[0],
    setElectronsPlaced = _pt_useState8[1];
  var _pt_useState9 = pt_useState(false),
    _pt_useState0 = _slicedToArray(_pt_useState9, 2),
    autoBuild = _pt_useState0[0],
    setAutoBuild = _pt_useState0[1];
  var _pt_useState1 = pt_useState(0),
    _pt_useState10 = _slicedToArray(_pt_useState1, 2),
    autoRun = _pt_useState10[0],
    setAutoRun = _pt_useState10[1];
  var el = getElementByZ(z);
  var targetProtons = el.z;
  var targetNeutrons = Math.max(0, Math.round(el.mass) - el.z);
  var targetElectrons = el.z;
  var switchElement = function switchElement(newZ) {
    setZ(newZ);
    setProtonsPlaced(0);
    setNeutronsPlaced(0);
    setElectronsPlaced(0);
  };

  // Auto-build animation
  pt_useEffect(function () {
    if (!autoBuild) return;
    var cancelled = false;
    var step = 0;
    var totalSteps = targetProtons + targetNeutrons + targetElectrons;
    var _tick = function tick() {
      if (cancelled) return;
      step++;
      if (step <= targetProtons) setProtonsPlaced(step);else if (step <= targetProtons + targetNeutrons) setNeutronsPlaced(step - targetProtons);else if (step <= totalSteps) setElectronsPlaced(step - targetProtons - targetNeutrons);else {
        setAutoBuild(false);
        return;
      }
      setTimeout(_tick, 250);
    };
    _tick();
    return function () {
      cancelled = true;
    };
  }, [autoBuild, autoRun, z]);

  // Electron shell distribution given count
  var shells = pt_useMemo(function () {
    var caps = [2, 8, 8];
    var result = [];
    var remaining = electronsPlaced;
    for (var i = 0; i < caps.length && remaining > 0; i++) {
      var k = Math.min(caps[i], remaining);
      result.push(k);
      remaining -= k;
    }
    return result;
  }, [electronsPlaced]);
  var isComplete = protonsPlaced === targetProtons && neutronsPlaced === targetNeutrons && electronsPlaced === targetElectrons;
  var isNeutral = protonsPlaced === electronsPlaced;
  var overallCharge = protonsPlaced - electronsPlaced;

  // Stage layout
  var W = 600,
    H = 380;
  var cx = W / 2,
    cy = H / 2;
  var baseR = 32;
  var ringStep = 42;

  // Nucleus particle positions
  var nucleusParticles = pt_useMemo(function () {
    var total = protonsPlaced + neutronsPlaced;
    var out = [];
    for (var i = 0; i < total; i++) {
      var ring = Math.floor(Math.sqrt(i));
      var idxInRing = i - ring * ring;
      var ringSize = (ring + 1) * (ring + 1) - ring * ring;
      var ang = idxInRing / ringSize * Math.PI * 2 + ring * 0.5;
      var rad = ring * 9;
      var isProton = i < protonsPlaced;
      out.push({
        x: cx + Math.cos(ang) * rad,
        y: cy + Math.sin(ang) * rad,
        type: isProton ? "proton" : "neutron"
      });
    }
    return out;
  }, [protonsPlaced, neutronsPlaced]);

  // Electron positions per shell
  var electronDots = pt_useMemo(function () {
    var out = [];
    shells.forEach(function (count, si) {
      var r = baseR + (si + 1) * ringStep;
      for (var i = 0; i < count; i++) {
        var ang = i / count * Math.PI * 2 - Math.PI / 2 + si * 0.4;
        out.push({
          x: cx + Math.cos(ang) * r,
          y: cy + Math.sin(ang) * r,
          shell: si
        });
      }
    });
    return out;
  }, [shells]);
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 14,
      alignItems: "flex-start",
      flexWrap: "wrap"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: "2 1 300px",
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "atom-stage",
    style: {
      aspectRatio: "".concat(W, " / ").concat(H)
    }
  }, /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 ".concat(W, " ").concat(H),
    style: {
      position: "absolute",
      inset: 0,
      width: "100%",
      height: "100%"
    }
  }, [0, 1, 2].map(function (i) {
    var need = el.shells ? el.shells.length : 1;
    var has = i < need;
    if (!has) return null;
    var r = baseR + (i + 1) * ringStep;
    return /*#__PURE__*/React.createElement("circle", {
      key: i,
      cx: cx,
      cy: cy,
      r: r,
      fill: "none",
      stroke: "oklch(0.6 0.03 250 / 0.4)",
      strokeDasharray: "3 4",
      strokeWidth: "1.2"
    });
  }), /*#__PURE__*/React.createElement("circle", {
    cx: cx,
    cy: cy,
    r: baseR - 2,
    fill: "oklch(0.95 0.06 60 / 0.5)",
    stroke: "oklch(0.6 0.03 250 / 0.3)",
    strokeDasharray: "2 3"
  }), nucleusParticles.map(function (p, i) {
    return /*#__PURE__*/React.createElement("g", {
      key: i
    }, /*#__PURE__*/React.createElement("circle", {
      cx: p.x,
      cy: p.y,
      r: "7",
      fill: p.type === "proton" ? "oklch(0.6 0.22 25)" : "oklch(0.55 0 0)",
      stroke: "white",
      strokeWidth: "1.2"
    }), /*#__PURE__*/React.createElement("text", {
      x: p.x,
      y: p.y + 2.5,
      textAnchor: "middle",
      style: {
        fontSize: 7,
        fill: "white",
        fontFamily: "var(--font-mono)",
        fontWeight: 700
      }
    }, p.type === "proton" ? "p" : "n"));
  }), electronDots.map(function (p, i) {
    return /*#__PURE__*/React.createElement("g", {
      key: i
    }, /*#__PURE__*/React.createElement("circle", {
      cx: p.x,
      cy: p.y,
      r: "7",
      fill: "oklch(0.5 0.18 230)",
      stroke: "white",
      strokeWidth: "1.2"
    }, /*#__PURE__*/React.createElement("animate", {
      attributeName: "opacity",
      values: "0;1",
      dur: "0.3s",
      fill: "freeze"
    })), /*#__PURE__*/React.createElement("text", {
      x: p.x,
      y: p.y + 2.5,
      textAnchor: "middle",
      style: {
        fontSize: 7,
        fill: "white",
        fontFamily: "var(--font-mono)",
        fontWeight: 700
      }
    }, "e"));
  }), /*#__PURE__*/React.createElement("text", {
    x: W - 14,
    y: 20,
    textAnchor: "end",
    style: {
      fontSize: 11,
      fill: "var(--ink-muted)",
      fontFamily: "var(--font-mono)"
    }
  }, el.sym, " \xB7 Z=", el.z), isComplete && /*#__PURE__*/React.createElement("text", {
    x: cx,
    y: H - 14,
    textAnchor: "middle",
    style: {
      fontSize: 13,
      fill: "var(--c-green-deep)",
      fontFamily: "var(--font-display)"
    }
  }, "\u2713 ", el.name, " complete"))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(130px, 1fr))",
      gap: 10,
      marginTop: 10
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "card",
    style: {
      padding: 12,
      borderColor: "var(--c-red)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: "0.8rem",
      color: "var(--ink-muted)"
    }
  }, "Protons ", /*#__PURE__*/React.createElement("span", {
    style: {
      "float": "right",
      fontWeight: 600,
      color: "var(--ink)"
    }
  }, protonsPlaced, " / ", targetProtons)), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 6,
      marginTop: 8
    }
  }, /*#__PURE__*/React.createElement(Button, {
    size: "sm",
    "aria-label": "Remove a proton",
    onClick: function onClick() {
      return setProtonsPlaced(Math.max(0, protonsPlaced - 1));
    }
  }, "\u2212"), /*#__PURE__*/React.createElement(Button, {
    size: "sm",
    variant: "accent",
    onClick: function onClick() {
      return setProtonsPlaced(Math.min(targetProtons + 2, protonsPlaced + 1));
    }
  }, "+ proton"))), /*#__PURE__*/React.createElement("div", {
    className: "card",
    style: {
      padding: 12
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: "0.8rem",
      color: "var(--ink-muted)"
    }
  }, "Neutrons ", /*#__PURE__*/React.createElement("span", {
    style: {
      "float": "right",
      fontWeight: 600,
      color: "var(--ink)"
    }
  }, neutronsPlaced, " / ", targetNeutrons)), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 6,
      marginTop: 8
    }
  }, /*#__PURE__*/React.createElement(Button, {
    size: "sm",
    "aria-label": "Remove a neutron",
    onClick: function onClick() {
      return setNeutronsPlaced(Math.max(0, neutronsPlaced - 1));
    }
  }, "\u2212"), /*#__PURE__*/React.createElement(Button, {
    size: "sm",
    variant: "primary",
    onClick: function onClick() {
      return setNeutronsPlaced(Math.min(targetNeutrons + 2, neutronsPlaced + 1));
    }
  }, "+ neutron"))), /*#__PURE__*/React.createElement("div", {
    className: "card",
    style: {
      padding: 12,
      borderColor: "var(--c-teal-deep)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: "0.8rem",
      color: "var(--ink-muted)"
    }
  }, "Electrons ", /*#__PURE__*/React.createElement("span", {
    style: {
      "float": "right",
      fontWeight: 600,
      color: "var(--ink)"
    }
  }, electronsPlaced, " / ", targetElectrons)), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 6,
      marginTop: 8
    }
  }, /*#__PURE__*/React.createElement(Button, {
    size: "sm",
    "aria-label": "Remove an electron",
    onClick: function onClick() {
      return setElectronsPlaced(Math.max(0, electronsPlaced - 1));
    }
  }, "\u2212"), /*#__PURE__*/React.createElement(Button, {
    size: "sm",
    style: {
      background: "var(--c-teal-deep)",
      color: "white",
      borderColor: "var(--c-teal-deep)"
    },
    onClick: function onClick() {
      return setElectronsPlaced(Math.min(targetElectrons + 2, electronsPlaced + 1));
    }
  }, "+ electron")))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 8,
      marginTop: 10,
      flexWrap: "wrap"
    }
  }, /*#__PURE__*/React.createElement(Button, {
    size: "sm",
    variant: "ghost",
    icon: "reset",
    onClick: function onClick() {
      setProtonsPlaced(0);
      setNeutronsPlaced(0);
      setElectronsPlaced(0);
      setAutoBuild(false);
    }
  }, "Empty"), /*#__PURE__*/React.createElement(Button, {
    size: "sm",
    variant: "ghost",
    icon: "sparkle",
    onClick: function onClick() {
      setProtonsPlaced(0);
      setNeutronsPlaced(0);
      setElectronsPlaced(0);
      setAutoRun(function (n) {
        return n + 1;
      });
      setAutoBuild(true);
    }
  }, "Auto-build"), /*#__PURE__*/React.createElement("span", {
    className: "spacer"
  }), /*#__PURE__*/React.createElement(Chip, {
    variant: isNeutral ? "ok" : "warn"
  }, "Charge: ", overallCharge === 0 ? "0 (neutral)" : overallCharge > 0 ? "+".concat(overallCharge) : overallCharge))), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: "1 1 240px",
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "card",
    style: {
      marginBottom: 10
    }
  }, /*#__PURE__*/React.createElement("h4", {
    style: {
      margin: 0
    }
  }, "Pick an element"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: "0.8rem",
      color: "var(--ink-muted)",
      margin: "4px 0 8px"
    }
  }, "Hydrogen \u2192 Argon (Z = 1 to 18)"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(6, 1fr)",
      gap: 4
    }
  }, first18.map(function (e) {
    return /*#__PURE__*/React.createElement("button", {
      key: e.z,
      onClick: function onClick() {
        return switchElement(e.z);
      },
      className: "pt-cell ".concat(e.category),
      style: {
        fontSize: "0.65rem",
        outline: z === e.z ? "2.5px solid var(--ink)" : "none",
        outlineOffset: "1px"
      },
      title: e.name
    }, /*#__PURE__*/React.createElement("span", {
      className: "num"
    }, e.z), /*#__PURE__*/React.createElement("span", {
      className: "sym",
      style: {
        fontSize: "0.9rem"
      }
    }, e.sym));
  }))), /*#__PURE__*/React.createElement("div", {
    className: "card"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "baseline",
      gap: 8
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-display)",
      fontSize: "1.8rem"
    }
  }, el.sym), /*#__PURE__*/React.createElement("span", {
    style: {
      fontWeight: 600
    }
  }, el.name), /*#__PURE__*/React.createElement("span", {
    className: "spacer"
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: "0.8rem",
      color: "var(--ink-muted)"
    }
  }, "Z ", el.z)), el.shells && /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 6,
      fontSize: "0.85rem"
    }
  }, "Electron config: ", /*#__PURE__*/React.createElement("span", {
    className: "mono"
  }, el.shells.join(", "))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 4,
      fontSize: "0.85rem",
      color: "var(--ink-2)"
    }
  }, "Mass number: ", /*#__PURE__*/React.createElement("span", {
    className: "mono"
  }, Math.round(el.mass))), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: "0.84rem",
      color: "var(--ink-2)",
      marginTop: 8
    }
  }, el.uses)), isComplete && /*#__PURE__*/React.createElement(Callout, {
    kind: "tip",
    title: "Nice work!"
  }, el.name, " has ", ((_el$shells = el.shells) === null || _el$shells === void 0 ? void 0 : _el$shells.join(" + ")) || el.z, " electrons.", " ", el.group === 18 && "Its outer shell is full — that's why noble gases are unreactive.", el.group === 1 && "One lone outer electron — that's why Group 1 metals are so reactive.", el.group === 17 && "Just one electron short of a full shell — that's why halogens grab electrons so eagerly."))));
}
Object.assign(window, {
  PeriodicTable: PeriodicTable,
  ElementDetail: ElementDetail,
  AtomBuilder: AtomBuilder
});

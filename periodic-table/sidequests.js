/* Generated from sidequests.jsx by tools/build.js. Edit the .jsx, not this file. */
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
   Side quests (extras, badges)
   ============================================================ */

var _React = React,
  sq_useState = _React.useState,
  sq_useMemo = _React.useMemo,
  sq_useEffect = _React.useEffect;

/* ------------------------------------------------------------
   Element of the day
------------------------------------------------------------ */
function SideQuestEOTD() {
  var ELEMENTS = window.AppData.ELEMENTS;
  // Pick deterministically from the day of year
  var dayOfYear = sq_useMemo(function () {
    var now = new Date();
    var start = new Date(now.getFullYear(), 0, 0);
    return Math.floor((now - start) / 86400000);
  }, []);
  var el = ELEMENTS[dayOfYear % ELEMENTS.length];
  var _usePersisted = usePersisted("eotd.seen", {}),
    _usePersisted2 = _slicedToArray(_usePersisted, 2),
    seen = _usePersisted2[0],
    setSeen = _usePersisted2[1];
  sq_useEffect(function () {
    setSeen(_objectSpread(_objectSpread({}, seen), {}, _defineProperty({}, el.sym, (seen[el.sym] || 0) + 1)));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [el.sym]);
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("p", null, "Every day, meet a different element. Come back tomorrow for a new one."), /*#__PURE__*/React.createElement("div", {
    className: "card",
    style: {
      display: "grid",
      gridTemplateColumns: "180px 1fr",
      gap: 20,
      padding: 24
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "big-card pt-cell ".concat(el.category),
    style: {
      aspectRatio: 1,
      padding: 14
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "num"
  }, el.z), /*#__PURE__*/React.createElement("span", {
    className: "sym",
    style: {
      fontSize: "3.6rem",
      fontFamily: "var(--font-display)"
    }
  }, el.sym), /*#__PURE__*/React.createElement("span", {
    className: "name"
  }, el.name), /*#__PURE__*/React.createElement("span", {
    className: "mass",
    style: {
      fontSize: "0.8rem",
      opacity: 0.7,
      marginTop: "auto"
    }
  }, el.mass)), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Chip, {
    variant: "info"
  }, window.AppData.CATEGORY_LABELS[el.category]), /*#__PURE__*/React.createElement("h3", {
    style: {
      marginTop: 10
    }
  }, el.name), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: "0.95rem"
    }
  }, /*#__PURE__*/React.createElement("strong", null, "Where you'd find it:"), " ", el.uses), el.fact && /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: "0.95rem",
      fontStyle: "italic",
      color: "var(--ink-2)"
    }
  }, el.fact), el.shells && /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: "0.9rem"
    }
  }, "Electron config: ", /*#__PURE__*/React.createElement("span", {
    className: "mono"
  }, el.shells.join(", "))), /*#__PURE__*/React.createElement(Chip, {
    variant: "warn",
    style: {
      marginTop: 8
    }
  }, "You've seen this one ", seen[el.sym] || 1, " time", (seen[el.sym] || 1) === 1 ? "" : "s", "."))));
}

/* ------------------------------------------------------------
   Scientist trading cards
------------------------------------------------------------ */
function SideQuestScientists() {
  var SCIENTISTS = window.AppData.SCIENTISTS;
  var _sq_useState = sq_useState({}),
    _sq_useState2 = _slicedToArray(_sq_useState, 2),
    flipped = _sq_useState2[0],
    setFlipped = _sq_useState2[1];
  var _sq_useState3 = sq_useState({}),
    _sq_useState4 = _slicedToArray(_sq_useState3, 2),
    failedPhotos = _sq_useState4[0],
    setFailedPhotos = _sq_useState4[1];
  var palette = ["linear-gradient(135deg, oklch(0.7 0.15 50), oklch(0.5 0.16 45))", "linear-gradient(135deg, oklch(0.7 0.13 200), oklch(0.5 0.14 210))", "linear-gradient(135deg, oklch(0.65 0.15 290), oklch(0.45 0.16 290))", "linear-gradient(135deg, oklch(0.7 0.13 145), oklch(0.5 0.14 145))"];
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("p", null, "Nine scientists who reshaped our understanding of the atom. Tap a card to flip it."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(3, 1fr)",
      gap: 14
    }
  }, SCIENTISTS.map(function (s, i) {
    var isFlipped = !!flipped[s.name];
    return /*#__PURE__*/React.createElement("div", {
      key: s.name,
      onClick: function onClick() {
        return setFlipped(_objectSpread(_objectSpread({}, flipped), {}, _defineProperty({}, s.name, !isFlipped)));
      },
      role: "button",
      tabIndex: 0,
      "aria-label": "".concat(s.name, " card \u2014 ").concat(isFlipped ? "showing fun fact" : "tap to flip"),
      onKeyDown: function onKeyDown(e) {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          setFlipped(_objectSpread(_objectSpread({}, flipped), {}, _defineProperty({}, s.name, !isFlipped)));
        }
      },
      style: {
        perspective: 1000,
        cursor: "pointer",
        aspectRatio: "5 / 7"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        width: "100%",
        height: "100%",
        position: "relative",
        transformStyle: "preserve-3d",
        transition: "transform 600ms cubic-bezier(.5,0,.5,1)",
        transform: isFlipped ? "rotateY(180deg)" : "none"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        position: "absolute",
        inset: 0,
        backfaceVisibility: "hidden",
        borderRadius: "var(--r)",
        background: palette[i % palette.length],
        color: "white",
        display: "flex",
        flexDirection: "column",
        boxShadow: "var(--shadow-2)",
        overflow: "hidden"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        position: "relative",
        height: "62%",
        width: "100%",
        overflow: "hidden",
        background: palette[i % palette.length]
      }
    }, s.photo && !failedPhotos[s.name] ? /*#__PURE__*/React.createElement("img", {
      src: "https://commons.wikimedia.org/wiki/Special:FilePath/".concat(encodeURIComponent(s.photo), "?width=500"),
      alt: s.name,
      onError: function onError() {
        return setFailedPhotos(function (prev) {
          return _objectSpread(_objectSpread({}, prev), {}, _defineProperty({}, s.name, true));
        });
      },
      referrerPolicy: "no-referrer",
      style: {
        width: "100%",
        height: "100%",
        objectFit: "cover",
        objectPosition: "center 20%",
        display: "block",
        filter: "saturate(0.85) contrast(1.05)"
      }
    }) : /*#__PURE__*/React.createElement("div", {
      style: {
        position: "absolute",
        inset: 0,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontFamily: "var(--font-display)",
        fontSize: "5rem",
        color: "rgba(255,255,255,0.85)",
        textShadow: "0 2px 12px rgba(0,0,0,0.3)",
        background: "radial-gradient(circle at 35% 35%, oklch(1 0 0 / 0.18), transparent 60%), ".concat(palette[i % palette.length])
      }
    }, s.name.split(" ").map(function (w) {
      return w[0];
    }).join("").slice(0, 2)), /*#__PURE__*/React.createElement("div", {
      style: {
        position: "absolute",
        left: 0,
        right: 0,
        bottom: 0,
        height: "40%",
        background: "linear-gradient(to bottom, transparent, oklch(0.2 0.05 30 / 0.55))",
        pointerEvents: "none"
      }
    })), /*#__PURE__*/React.createElement("div", {
      style: {
        flex: 1,
        padding: "12px 16px 14px",
        display: "flex",
        flexDirection: "column",
        position: "relative",
        background: "linear-gradient(to bottom, oklch(0.2 0.05 30 / 0.55), oklch(0.18 0.05 30 / 0.9))"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: "0.65rem",
        letterSpacing: "0.12em",
        textTransform: "uppercase",
        opacity: 0.9
      }
    }, s.where), /*#__PURE__*/React.createElement("h3", {
      style: {
        marginTop: 2,
        fontFamily: "var(--font-display)",
        lineHeight: 1.05,
        fontSize: "1.05rem"
      }
    }, s.name), /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: "var(--font-mono)",
        fontSize: "0.75rem",
        opacity: 0.85
      }
    }, s.when), /*#__PURE__*/React.createElement("div", {
      style: {
        marginTop: 6,
        fontSize: "0.75rem",
        opacity: 0.95,
        lineHeight: 1.3
      }
    }, s.contrib), /*#__PURE__*/React.createElement("div", {
      style: {
        position: "absolute",
        right: 10,
        bottom: 6,
        fontSize: "0.55rem",
        opacity: 0.6
      }
    }, "tap to flip"))), /*#__PURE__*/React.createElement("div", {
      style: {
        position: "absolute",
        inset: 0,
        backfaceVisibility: "hidden",
        transform: "rotateY(180deg)",
        borderRadius: "var(--r)",
        background: "var(--paper)",
        border: "1px solid var(--border)",
        padding: 18,
        display: "flex",
        flexDirection: "column",
        boxShadow: "var(--shadow-2)"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        gap: 10,
        alignItems: "center"
      }
    }, s.photo && /*#__PURE__*/React.createElement(CCAvatar, {
      file: s.photo,
      size: 48,
      alt: s.name
    }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Chip, {
      variant: "info"
    }, "Fun fact"), /*#__PURE__*/React.createElement("h4", {
      style: {
        marginTop: 4,
        fontSize: "0.95rem"
      }
    }, s.name))), /*#__PURE__*/React.createElement("p", {
      style: {
        fontSize: "0.85rem",
        color: "var(--ink-2)",
        margin: "10px 0 0"
      }
    }, s.fun), /*#__PURE__*/React.createElement("div", {
      style: {
        marginTop: "auto",
        fontSize: "0.65rem",
        color: "var(--ink-muted)"
      }
    }, "Image: Wikimedia Commons \xB7 public domain"))));
  })));
}

/* ------------------------------------------------------------
   Mystery element
------------------------------------------------------------ */
function SideQuestMystery() {
  var ELEMENTS = window.AppData.ELEMENTS;
  // Filter to elements with rich facts
  var POOL = ELEMENTS.filter(function (e) {
    return e.z <= 20 || ["Au", "Ag", "Cu", "Fe", "Hg", "Pb", "Sn", "U", "W", "Pt"].includes(e.sym);
  });
  var _sq_useState5 = sq_useState(0),
    _sq_useState6 = _slicedToArray(_sq_useState5, 2),
    round = _sq_useState6[0],
    setRound = _sq_useState6[1];
  var _sq_useState7 = sq_useState(null),
    _sq_useState8 = _slicedToArray(_sq_useState7, 2),
    target = _sq_useState8[0],
    setTarget = _sq_useState8[1];
  var _sq_useState9 = sq_useState(0),
    _sq_useState0 = _slicedToArray(_sq_useState9, 2),
    revealed = _sq_useState0[0],
    setRevealed = _sq_useState0[1]; // # clues revealed
  var _sq_useState1 = sq_useState(""),
    _sq_useState10 = _slicedToArray(_sq_useState1, 2),
    guess = _sq_useState10[0],
    setGuess = _sq_useState10[1];
  var _sq_useState11 = sq_useState(null),
    _sq_useState12 = _slicedToArray(_sq_useState11, 2),
    outcome = _sq_useState12[0],
    setOutcome = _sq_useState12[1];
  sq_useEffect(function () {
    var pick = POOL[Math.floor(Math.random() * POOL.length)];
    setTarget(pick);
    setRevealed(0);
    setGuess("");
    setOutcome(null);
  }, [round]);
  if (!target) return null;
  var clues = [target.uses ? "It's used in: ".concat(target.uses) : null, target.fact ? "Fun fact: ".concat(target.fact) : null, "It's ".concat(/^[aeiou]/i.test(window.AppData.CATEGORY_LABELS[target.category]) ? "an" : "a", " ").concat(window.AppData.CATEGORY_LABELS[target.category].toLowerCase(), ", atomic number ").concat(target.z, "."), "Its symbol is ".concat(target.sym, " and its mass is about ").concat(Math.round(target.mass), ".")].filter(Boolean);
  var submit = function submit() {
    var g = guess.trim().toLowerCase();
    if (!g) return;
    if (g === target.name.toLowerCase() || g === target.sym.toLowerCase()) {
      setOutcome("correct");
    } else {
      setOutcome("wrong");
      setRevealed(Math.min(clues.length, revealed + 1));
    }
  };
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("p", null, "I'm thinking of an element. I'll give you clues \u2014 one at a time. Can you guess?"), /*#__PURE__*/React.createElement("div", {
    className: "card"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 10
    }
  }, clues.slice(0, revealed + 1).map(function (c, i) {
    return /*#__PURE__*/React.createElement("div", {
      key: i,
      style: {
        padding: 10,
        background: "var(--bg-2)",
        borderRadius: 8,
        fontSize: "0.95rem"
      }
    }, /*#__PURE__*/React.createElement("strong", null, "Clue ", i + 1, ":"), " ", c);
  }), revealed + 1 < clues.length && outcome !== "correct" && /*#__PURE__*/React.createElement(Button, {
    size: "sm",
    variant: "ghost",
    onClick: function onClick() {
      return setRevealed(revealed + 1);
    }
  }, "Reveal next clue")), outcome === "correct" ? /*#__PURE__*/React.createElement(Callout, {
    kind: "tip",
    title: "\u2713 It was ".concat(target.name, "!")
  }, "You got it in ", revealed + 1, " clue", revealed + 1 === 1 ? "" : "s", ". ", target.fact || target.uses) : /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 14,
      display: "flex",
      gap: 8
    }
  }, /*#__PURE__*/React.createElement("input", {
    type: "text",
    value: guess,
    onChange: function onChange(e) {
      setGuess(e.target.value);
      setOutcome(null);
    },
    onKeyDown: function onKeyDown(e) {
      return e.key === "Enter" && submit();
    },
    placeholder: "Type the element name or symbol\u2026",
    style: {
      flex: 1,
      padding: "10px 14px",
      fontSize: "0.95rem",
      fontFamily: "inherit",
      border: "1px solid var(--border-strong)",
      borderRadius: 8,
      background: "var(--paper)",
      color: "var(--ink)"
    }
  }), /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    onClick: submit
  }, "Guess")), outcome === "wrong" && /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 8,
      color: "var(--c-red)",
      fontSize: "0.88rem"
    }
  }, "Not quite \u2014 try again with another clue."), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 14
    }
  }, /*#__PURE__*/React.createElement(Button, {
    size: "sm",
    variant: "ghost",
    icon: "reset",
    onClick: function onClick() {
      return setRound(round + 1);
    }
  }, "New mystery"))));
}

/* ------------------------------------------------------------
   Predict before you peek
------------------------------------------------------------ */
function SideQuestPredict() {
  var items = [{
    q: "Bohr's model says electrons orbit the nucleus in fixed shells. The first shell can hold up to…",
    a: "2 electrons"
  }, {
    q: "Most reactive metal on the periodic table?",
    a: "Caesium (Cs) — bottom-left, Group 1. Even reacts with ice."
  }, {
    q: "The only metal that's a liquid at room temperature?",
    a: "Mercury (Hg) — melts at −39 °C."
  }, {
    q: "What's the most abundant element in the Earth's atmosphere?",
    a: "Nitrogen (about 78%)."
  }, {
    q: "Which element has the highest melting point of any metal?",
    a: "Tungsten (W) — 3422 °C. Used in light bulb filaments."
  }, {
    q: "Which two elements are liquid at room temperature?",
    a: "Mercury (Hg) and Bromine (Br)."
  }, {
    q: "If a neutral atom has 11 protons, how many electrons does it have? What element is it?",
    a: "11 electrons. It's sodium (Na)."
  }, {
    q: "Approximately how thick (in atoms) is a sheet of paper?",
    a: "About a million atoms thick."
  }];
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("p", null, "Try to guess first. Click the blurred answer to reveal."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 10
    }
  }, items.map(function (it, i) {
    return /*#__PURE__*/React.createElement("div", {
      key: i,
      className: "card"
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontWeight: 600,
        marginBottom: 8
      }
    }, it.q), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(BlurReveal, null, it.a)));
  })));
}

/* ------------------------------------------------------------
   Aussie connections
------------------------------------------------------------ */
function SideQuestAussie() {
  var items = [{
    title: "Rutherford — kiwi-born",
    text: "Ernest Rutherford was born and raised in New Zealand before moving to the UK. He's often called the 'father of nuclear physics' and did his famous gold-foil experiment in Manchester."
  }, {
    title: "Australia → world's aluminium",
    text: "Australia is one of the world's largest producers of bauxite — the ore that aluminium is made from. Some of the aluminium in the cans, foil and aircraft frames near you started its journey in an Australian mine."
  }, {
    title: "Iron ore powerhouse",
    text: "Australia produces more than a third of the world's iron ore, almost all of it from the Pilbara region of Western Australia. Without it, an enormous fraction of global steel production would stop."
  }, {
    title: "Mark Oliphant",
    text: "Adelaide-born physicist whose work on hydrogen isotopes was crucial in the development of nuclear physics. Later instrumental in setting up the Australian National University."
  }, {
    title: "Lithium — the new gold rush",
    text: "Australia is one of the world's largest producers of lithium, mined mainly in WA. Lithium powers phones, laptops, and the EV revolution."
  }, {
    title: "Synchrotron in Melbourne",
    text: "The Australian Synchrotron in Clayton, Victoria, uses a 216-metre ring to accelerate electrons to almost light speed — used for atomic-scale imaging of everything from new drugs to ancient fossils."
  }];
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("p", null, "The atomic structure story has Australian threads woven through it \u2014 from the scientists to the mines."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(2, 1fr)",
      gap: 12
    }
  }, items.map(function (it, i) {
    return /*#__PURE__*/React.createElement("div", {
      key: i,
      className: "card"
    }, /*#__PURE__*/React.createElement("h4", null, it.title), /*#__PURE__*/React.createElement("p", {
      style: {
        fontSize: "0.9rem",
        color: "var(--ink-2)",
        margin: "6px 0 0"
      }
    }, it.text));
  })));
}
Object.assign(window, {
  SideQuestEOTD: SideQuestEOTD,
  SideQuestScientists: SideQuestScientists,
  SideQuestMystery: SideQuestMystery,
  SideQuestPredict: SideQuestPredict,
  SideQuestAussie: SideQuestAussie
});

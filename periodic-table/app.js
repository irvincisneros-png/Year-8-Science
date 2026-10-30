/* Generated from app.jsx by tools/build.js. Edit the .jsx, not this file. */
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
   App — navigation shell, routing, progress
   ============================================================ */

var _React = React,
  a_useState = _React.useState,
  a_useEffect = _React.useEffect,
  a_useMemo = _React.useMemo,
  a_useRef = _React.useRef;
function App() {
  var udl = useUDL();
  var _a_useState = a_useState({
      kind: "home"
    }),
    _a_useState2 = _slicedToArray(_a_useState, 2),
    view = _a_useState2[0],
    setView = _a_useState2[1]; // {kind: 'home'|'lesson'|'sidequest', id?}
  var _usePersisted = usePersisted("y8.progress", {}),
    _usePersisted2 = _slicedToArray(_usePersisted, 2),
    progress = _usePersisted2[0],
    setProgress = _usePersisted2[1]; // lessonId -> true
  var _usePersisted3 = usePersisted("y8.openUnits", {
      u1: true,
      u2: true,
      u3: true,
      u4: true
    }),
    _usePersisted4 = _slicedToArray(_usePersisted3, 2),
    openUnits = _usePersisted4[0],
    setOpenUnits = _usePersisted4[1];
  var _window$AppData = window.AppData,
    LESSONS = _window$AppData.LESSONS,
    UNITS = _window$AppData.UNITS,
    getLesson = _window$AppData.getLesson,
    getUnitLessons = _window$AppData.getUnitLessons,
    SIDE_QUESTS = _window$AppData.SIDE_QUESTS;
  var navigate = function navigate(next) {
    setView(next);
    if ("speechSynthesis" in window) window.speechSynthesis.cancel();
    udl.setTtsOn(false);
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };
  var markComplete = function markComplete(lessonId) {
    setProgress(_objectSpread(_objectSpread({}, progress), {}, _defineProperty({}, lessonId, true)));
  };

  // Find prev/next for lesson nav
  var lessonIndex = function lessonIndex(lid) {
    return LESSONS.findIndex(function (l) {
      return l.id === lid;
    });
  };
  var navPrev = function navPrev(lid) {
    var i = lessonIndex(lid);
    return i > 0 ? LESSONS[i - 1] : null;
  };
  var navNext = function navNext(lid) {
    var i = lessonIndex(lid);
    return i < LESSONS.length - 1 ? LESSONS[i + 1] : null;
  };
  var totalProgress = Object.keys(progress).filter(function (k) {
    return progress[k];
  }).length;
  return /*#__PURE__*/React.createElement(GlossaryProvider, null, /*#__PURE__*/React.createElement("div", {
    className: "app"
  }, /*#__PURE__*/React.createElement("aside", {
    className: "sidebar"
  }, /*#__PURE__*/React.createElement("div", {
    className: "sidebar-brand",
    onClick: function onClick() {
      return navigate({
        kind: "home"
      });
    },
    role: "button",
    style: {
      cursor: "pointer"
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "logo"
  }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "sub"
  }, "Year 8 \xB7 Science"), /*#__PURE__*/React.createElement("div", {
    className: "title"
  }, "Atomic Structure"))), /*#__PURE__*/React.createElement("div", {
    className: "nav-section"
  }, /*#__PURE__*/React.createElement("button", {
    className: "nav-item ".concat(view.kind === "home" ? "active" : ""),
    onClick: function onClick() {
      return navigate({
        kind: "home"
      });
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "home",
    size: 16
  }), /*#__PURE__*/React.createElement("span", {
    className: "label"
  }, "Home"))), UNITS.map(function (u) {
    var lessons = getUnitLessons(u.id);
    var isOpen = openUnits[u.id];
    var done = lessons.filter(function (l) {
      return progress[l.id];
    }).length;
    return /*#__PURE__*/React.createElement("div", {
      key: u.id,
      className: "nav-unit",
      "data-unit": u.id
    }, /*#__PURE__*/React.createElement("button", {
      className: "nav-unit-head",
      onClick: function onClick() {
        return setOpenUnits(_objectSpread(_objectSpread({}, openUnits), {}, _defineProperty({}, u.id, !isOpen)));
      }
    }, /*#__PURE__*/React.createElement("div", {
      className: "pill"
    }), /*#__PURE__*/React.createElement("span", {
      style: {
        flex: 1
      }
    }, u.title), /*#__PURE__*/React.createElement("span", {
      className: "chip",
      style: {
        fontSize: "0.65rem",
        padding: "2px 6px"
      }
    }, done, "/", lessons.length)), isOpen && lessons.map(function (l) {
      return /*#__PURE__*/React.createElement("button", {
        key: l.id,
        className: "nav-item ".concat(view.kind === "lesson" && view.id === l.id ? "active" : "", " ").concat(progress[l.id] ? "done" : ""),
        onClick: function onClick() {
          return navigate({
            kind: "lesson",
            id: l.id
          });
        },
        style: {
          paddingLeft: 24
        }
      }, /*#__PURE__*/React.createElement("span", {
        className: "dot"
      }), /*#__PURE__*/React.createElement("span", {
        className: "num"
      }, l.syllabus), /*#__PURE__*/React.createElement("span", {
        className: "label"
      }, l.title));
    }));
  }), /*#__PURE__*/React.createElement("div", {
    className: "nav-section"
  }, /*#__PURE__*/React.createElement("div", {
    className: "nav-section-title"
  }, "Side quests"), SIDE_QUESTS.map(function (q) {
    return /*#__PURE__*/React.createElement("button", {
      key: q.id,
      className: "nav-item ".concat(view.kind === "sidequest" && view.id === q.id ? "active" : ""),
      onClick: function onClick() {
        return navigate({
          kind: "sidequest",
          id: q.id
        });
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        width: 18,
        textAlign: "center"
      }
    }, q.icon), /*#__PURE__*/React.createElement("span", {
      className: "label"
    }, q.title));
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: "auto",
      padding: "8px 4px",
      fontSize: "0.75rem",
      color: "var(--ink-muted)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: 6
    }
  }, totalProgress, " / ", LESSONS.length, " lessons complete"), /*#__PURE__*/React.createElement(Progress, {
    value: totalProgress,
    max: LESSONS.length
  }))), /*#__PURE__*/React.createElement("main", {
    className: "main"
  }, /*#__PURE__*/React.createElement("div", {
    className: "main-inner"
  }, /*#__PURE__*/React.createElement("div", {
    className: "topbar"
  }, /*#__PURE__*/React.createElement("div", {
    className: "crumb"
  }, /*#__PURE__*/React.createElement("span", {
    onClick: function onClick() {
      return navigate({
        kind: "home"
      });
    },
    style: {
      cursor: "pointer"
    }
  }, "Home"), view.kind === "lesson" && function () {
    var l = getLesson(view.id);
    var u = UNITS.find(function (u) {
      return u.id === l.unit;
    });
    return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("span", {
      className: "sep"
    }, "/"), /*#__PURE__*/React.createElement("span", null, u.num, " ", u.title), /*#__PURE__*/React.createElement("span", {
      className: "sep"
    }, "/"), /*#__PURE__*/React.createElement("span", {
      className: "here"
    }, l.title));
  }(), view.kind === "sidequest" && function () {
    var sq = SIDE_QUESTS.find(function (s) {
      return s.id === view.id;
    });
    return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("span", {
      className: "sep"
    }, "/"), /*#__PURE__*/React.createElement("span", null, "Side quest"), /*#__PURE__*/React.createElement("span", {
      className: "sep"
    }, "/"), /*#__PURE__*/React.createElement("span", {
      className: "here"
    }, sq.title));
  }()), /*#__PURE__*/React.createElement(UDLBar, {
    udl: udl
  })), view.kind === "home" && /*#__PURE__*/React.createElement(HomeView, {
    navigate: navigate,
    progress: progress,
    udl: udl
  }), view.kind === "lesson" && function () {
    var lesson = getLesson(view.id);
    return /*#__PURE__*/React.createElement(LessonView, {
      lesson: lesson,
      navigate: navigate,
      markComplete: markComplete,
      progress: progress,
      prev: navPrev(view.id),
      next: navNext(view.id),
      udl: udl
    });
  }(), view.kind === "sidequest" && /*#__PURE__*/React.createElement(SideQuestView, {
    id: view.id,
    udl: udl
  })))));
}

/* ------------------------------------------------------------
   Home view
------------------------------------------------------------ */
function HomeView(_ref) {
  var navigate = _ref.navigate,
    progress = _ref.progress,
    udl = _ref.udl;
  var _window$AppData2 = window.AppData,
    UNITS = _window$AppData2.UNITS,
    LESSONS = _window$AppData2.LESSONS,
    SIDE_QUESTS = _window$AppData2.SIDE_QUESTS,
    getUnitLessons = _window$AppData2.getUnitLessons;
  var totalDone = Object.keys(progress).filter(function (k) {
    return progress[k];
  }).length;
  var firstIncomplete = LESSONS.find(function (l) {
    return !progress[l.id];
  }) || LESSONS[0];

  // Atom decoration in hero — richer illustration with orbital trails, glow, and depth
  var heroAtom = /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 260 260",
    style: {
      width: "100%",
      height: "100%",
      display: "block"
    },
    "aria-hidden": "true"
  }, /*#__PURE__*/React.createElement("defs", null, /*#__PURE__*/React.createElement("radialGradient", {
    id: "nucGrad",
    cx: "35%",
    cy: "35%",
    r: "65%"
  }, /*#__PURE__*/React.createElement("stop", {
    offset: "0%",
    stopColor: "oklch(0.92 0.14 60)"
  }), /*#__PURE__*/React.createElement("stop", {
    offset: "40%",
    stopColor: "oklch(0.7 0.2 45)"
  }), /*#__PURE__*/React.createElement("stop", {
    offset: "100%",
    stopColor: "oklch(0.42 0.18 30)"
  })), /*#__PURE__*/React.createElement("radialGradient", {
    id: "nucGlow",
    cx: "50%",
    cy: "50%",
    r: "50%"
  }, /*#__PURE__*/React.createElement("stop", {
    offset: "0%",
    stopColor: "oklch(0.85 0.18 50 / 0.45)"
  }), /*#__PURE__*/React.createElement("stop", {
    offset: "50%",
    stopColor: "oklch(0.85 0.18 50 / 0.12)"
  }), /*#__PURE__*/React.createElement("stop", {
    offset: "100%",
    stopColor: "oklch(0.85 0.18 50 / 0)"
  })), /*#__PURE__*/React.createElement("linearGradient", {
    id: "orbit1",
    x1: "0",
    x2: "1",
    y1: "0",
    y2: "0"
  }, /*#__PURE__*/React.createElement("stop", {
    offset: "0%",
    stopColor: "oklch(0.55 0.16 30 / 0)"
  }), /*#__PURE__*/React.createElement("stop", {
    offset: "20%",
    stopColor: "oklch(0.55 0.16 30 / 0.85)"
  }), /*#__PURE__*/React.createElement("stop", {
    offset: "60%",
    stopColor: "oklch(0.55 0.16 30 / 0.5)"
  }), /*#__PURE__*/React.createElement("stop", {
    offset: "100%",
    stopColor: "oklch(0.55 0.16 30 / 0)"
  })), /*#__PURE__*/React.createElement("linearGradient", {
    id: "orbit2",
    x1: "0",
    x2: "1",
    y1: "0",
    y2: "0"
  }, /*#__PURE__*/React.createElement("stop", {
    offset: "0%",
    stopColor: "oklch(0.5 0.16 220 / 0)"
  }), /*#__PURE__*/React.createElement("stop", {
    offset: "20%",
    stopColor: "oklch(0.5 0.16 220 / 0.8)"
  }), /*#__PURE__*/React.createElement("stop", {
    offset: "60%",
    stopColor: "oklch(0.5 0.16 220 / 0.45)"
  }), /*#__PURE__*/React.createElement("stop", {
    offset: "100%",
    stopColor: "oklch(0.5 0.16 220 / 0)"
  })), /*#__PURE__*/React.createElement("linearGradient", {
    id: "orbit3",
    x1: "0",
    x2: "1",
    y1: "0",
    y2: "0"
  }, /*#__PURE__*/React.createElement("stop", {
    offset: "0%",
    stopColor: "oklch(0.55 0.16 290 / 0)"
  }), /*#__PURE__*/React.createElement("stop", {
    offset: "25%",
    stopColor: "oklch(0.55 0.16 290 / 0.75)"
  }), /*#__PURE__*/React.createElement("stop", {
    offset: "65%",
    stopColor: "oklch(0.55 0.16 290 / 0.4)"
  }), /*#__PURE__*/React.createElement("stop", {
    offset: "100%",
    stopColor: "oklch(0.55 0.16 290 / 0)"
  })), /*#__PURE__*/React.createElement("radialGradient", {
    id: "electronGrad",
    cx: "35%",
    cy: "35%",
    r: "65%"
  }, /*#__PURE__*/React.createElement("stop", {
    offset: "0%",
    stopColor: "oklch(0.92 0.12 230)"
  }), /*#__PURE__*/React.createElement("stop", {
    offset: "60%",
    stopColor: "oklch(0.55 0.18 230)"
  }), /*#__PURE__*/React.createElement("stop", {
    offset: "100%",
    stopColor: "oklch(0.35 0.18 230)"
  })), /*#__PURE__*/React.createElement("style", null, "\n          .orbit-spin-1 { animation: orbit-spin 14s linear infinite; transform-origin: 130px 130px; }\n          .orbit-spin-2 { animation: orbit-spin 22s linear infinite reverse; transform-origin: 130px 130px; }\n          .orbit-spin-3 { animation: orbit-spin 32s linear infinite; transform-origin: 130px 130px; }\n          .pulse { animation: pulse 4s ease-in-out infinite; transform-origin: 130px 130px; }\n          .twinkle { animation: twinkle 3.5s ease-in-out infinite; }\n          .twinkle-b { animation: twinkle 4.5s ease-in-out infinite; animation-delay: -1.2s; }\n          .twinkle-c { animation: twinkle 5s ease-in-out infinite; animation-delay: -2.6s; }\n          @keyframes orbit-spin { to { transform: rotate(360deg); } }\n          @keyframes pulse {\n            0%, 100% { transform: scale(1); opacity: 0.95; }\n            50% { transform: scale(1.06); opacity: 1; }\n          }\n          @keyframes twinkle {\n            0%, 100% { opacity: 0.25; transform: scale(0.8); }\n            50% { opacity: 1; transform: scale(1.1); }\n          }\n        ")), /*#__PURE__*/React.createElement("circle", {
    cx: "130",
    cy: "130",
    r: "118",
    fill: "none",
    stroke: "oklch(0.55 0.05 60 / 0.18)",
    strokeWidth: "0.8",
    strokeDasharray: "2 5"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "130",
    cy: "130",
    r: "60",
    fill: "url(#nucGlow)",
    className: "pulse"
  }), /*#__PURE__*/React.createElement("g", {
    className: "orbit-spin-1"
  }, /*#__PURE__*/React.createElement("ellipse", {
    cx: "130",
    cy: "130",
    rx: "105",
    ry: "34",
    fill: "none",
    stroke: "url(#orbit1)",
    strokeWidth: "1.6"
  }), /*#__PURE__*/React.createElement("g", {
    transform: "translate(235, 130)"
  }, /*#__PURE__*/React.createElement("circle", {
    r: "7",
    fill: "url(#electronGrad)"
  }), /*#__PURE__*/React.createElement("circle", {
    r: "3",
    fill: "oklch(0.95 0.05 230 / 0.9)",
    cx: "-1.5",
    cy: "-1.5"
  }))), /*#__PURE__*/React.createElement("g", {
    className: "orbit-spin-2",
    style: {
      transform: "rotate(60deg)",
      transformOrigin: "130px 130px"
    }
  }, /*#__PURE__*/React.createElement("g", {
    className: "orbit-spin-2"
  }, /*#__PURE__*/React.createElement("ellipse", {
    cx: "130",
    cy: "130",
    rx: "105",
    ry: "34",
    fill: "none",
    stroke: "url(#orbit2)",
    strokeWidth: "1.6"
  }), /*#__PURE__*/React.createElement("g", {
    transform: "translate(235, 130)"
  }, /*#__PURE__*/React.createElement("circle", {
    r: "6",
    fill: "url(#electronGrad)"
  }), /*#__PURE__*/React.createElement("circle", {
    r: "2.5",
    fill: "oklch(0.95 0.05 230 / 0.9)",
    cx: "-1.5",
    cy: "-1.5"
  })))), /*#__PURE__*/React.createElement("g", {
    style: {
      transform: "rotate(120deg)",
      transformOrigin: "130px 130px"
    }
  }, /*#__PURE__*/React.createElement("g", {
    className: "orbit-spin-3"
  }, /*#__PURE__*/React.createElement("ellipse", {
    cx: "130",
    cy: "130",
    rx: "105",
    ry: "34",
    fill: "none",
    stroke: "url(#orbit3)",
    strokeWidth: "1.6"
  }), /*#__PURE__*/React.createElement("g", {
    transform: "translate(25, 130)"
  }, /*#__PURE__*/React.createElement("circle", {
    r: "6.5",
    fill: "url(#electronGrad)"
  }), /*#__PURE__*/React.createElement("circle", {
    r: "2.5",
    fill: "oklch(0.95 0.05 230 / 0.9)",
    cx: "-1.5",
    cy: "-1.5"
  })))), /*#__PURE__*/React.createElement("g", {
    className: "pulse"
  }, /*#__PURE__*/React.createElement("circle", {
    cx: "130",
    cy: "130",
    r: "22",
    fill: "url(#nucGrad)"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "124",
    cy: "124",
    r: "7",
    fill: "oklch(0.72 0.2 30)",
    opacity: "0.9"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "136",
    cy: "124",
    r: "7",
    fill: "oklch(0.55 0.02 250)",
    opacity: "0.8"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "124",
    cy: "136",
    r: "7",
    fill: "oklch(0.55 0.02 250)",
    opacity: "0.85"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "136",
    cy: "136",
    r: "7",
    fill: "oklch(0.72 0.2 30)",
    opacity: "0.9"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "130",
    cy: "118",
    r: "6",
    fill: "oklch(0.72 0.2 30)",
    opacity: "0.85"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "130",
    cy: "142",
    r: "6",
    fill: "oklch(0.55 0.02 250)",
    opacity: "0.85"
  }), /*#__PURE__*/React.createElement("ellipse", {
    cx: "122",
    cy: "122",
    rx: "8",
    ry: "5",
    fill: "oklch(0.98 0.02 60 / 0.4)",
    transform: "rotate(-30 122 122)"
  })), /*#__PURE__*/React.createElement("g", {
    className: "twinkle"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 215 50 L 218 56 L 224 59 L 218 62 L 215 68 L 212 62 L 206 59 L 212 56 Z",
    fill: "oklch(0.8 0.16 60 / 0.7)"
  })), /*#__PURE__*/React.createElement("g", {
    className: "twinkle-b"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 45 200 L 47 204 L 51 206 L 47 208 L 45 212 L 43 208 L 39 206 L 43 204 Z",
    fill: "oklch(0.65 0.16 290 / 0.65)"
  })), /*#__PURE__*/React.createElement("g", {
    className: "twinkle-c"
  }, /*#__PURE__*/React.createElement("circle", {
    cx: "50",
    cy: "60",
    r: "2.5",
    fill: "oklch(0.6 0.16 220 / 0.7)"
  })), /*#__PURE__*/React.createElement("g", {
    className: "twinkle"
  }, /*#__PURE__*/React.createElement("circle", {
    cx: "220",
    cy: "210",
    r: "2",
    fill: "oklch(0.6 0.16 145 / 0.7)"
  })));
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("section", {
    className: "hero"
  }, /*#__PURE__*/React.createElement("div", {
    className: "eyebrow"
  }, "Year 8 \xB7 Term 2 \xB7 Chemistry"), /*#__PURE__*/React.createElement("h1", null, "The world is made of just ", /*#__PURE__*/React.createElement("em", {
    style: {
      fontStyle: "normal",
      color: "var(--c-orange-deep)"
    }
  }, "118 things"), "."), /*#__PURE__*/React.createElement("p", {
    className: "lead"
  }, "Welcome to atomic structure and the periodic table. Sixteen lessons, eight simulations, a memory game, scientist trading cards, and a daily element \u2014 covering syllabus points ", /*#__PURE__*/React.createElement("strong", null, "6.1.1 to 6.4.1"), "."), /*#__PURE__*/React.createElement("div", {
    className: "hero-cta"
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "accent",
    iconRight: "right",
    onClick: function onClick() {
      return navigate({
        kind: "lesson",
        id: firstIncomplete.id
      });
    }
  }, totalDone === 0 ? "Start lesson 6.1.1" : totalDone === LESSONS.length ? "All done — review" : "Continue: ".concat(firstIncomplete.title)), /*#__PURE__*/React.createElement(Button, {
    variant: "ghost",
    onClick: function onClick() {
      return navigate({
        kind: "sidequest",
        id: "sq-eotd"
      });
    }
  }, "Today's element \u2192")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      right: 24,
      top: 24,
      width: 220,
      height: 220
    }
  }, heroAtom)), /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: "0 0 14px"
    }
  }, "The four units"), /*#__PURE__*/React.createElement("div", {
    className: "units-grid"
  }, UNITS.map(function (u) {
    var lessons = getUnitLessons(u.id);
    var done = lessons.filter(function (l) {
      return progress[l.id];
    }).length;
    return /*#__PURE__*/React.createElement("button", {
      key: u.id,
      className: "unit-card",
      "data-unit": u.id,
      onClick: function onClick() {
        return navigate({
          kind: "lesson",
          id: lessons[0].id
        });
      }
    }, /*#__PURE__*/React.createElement("div", {
      className: "stripe"
    }), /*#__PURE__*/React.createElement("div", {
      className: "unit-num"
    }, u.num), /*#__PURE__*/React.createElement("h3", null, u.title), /*#__PURE__*/React.createElement("div", {
      className: "unit-blurb"
    }, u.blurb), /*#__PURE__*/React.createElement("div", {
      className: "unit-meta"
    }, /*#__PURE__*/React.createElement(Chip, {
      variant: done === lessons.length ? "ok" : done > 0 ? "info" : ""
    }, done, "/", lessons.length, " lessons"), /*#__PURE__*/React.createElement("span", {
      className: "spacer"
    }), /*#__PURE__*/React.createElement("span", null, "Start \u2192")));
  })), /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: "0 0 14px"
    }
  }, "Side quests"), /*#__PURE__*/React.createElement("div", {
    className: "quests-row",
    style: {
      gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))"
    }
  }, SIDE_QUESTS.slice(0, 3).map(function (q) {
    return /*#__PURE__*/React.createElement("button", {
      key: q.id,
      className: "quest-card",
      onClick: function onClick() {
        return navigate({
          kind: "sidequest",
          id: q.id
        });
      }
    }, /*#__PURE__*/React.createElement("div", {
      className: "qicon"
    }, q.icon), /*#__PURE__*/React.createElement("h4", null, q.title), /*#__PURE__*/React.createElement("div", {
      className: "qsub"
    }, q.sub));
  })), /*#__PURE__*/React.createElement("div", {
    className: "quests-row",
    style: {
      gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))"
    }
  }, SIDE_QUESTS.slice(3).map(function (q) {
    return /*#__PURE__*/React.createElement("button", {
      key: q.id,
      className: "quest-card",
      onClick: function onClick() {
        return navigate({
          kind: "sidequest",
          id: q.id
        });
      }
    }, /*#__PURE__*/React.createElement("div", {
      className: "qicon"
    }, q.icon), /*#__PURE__*/React.createElement("h4", null, q.title), /*#__PURE__*/React.createElement("div", {
      className: "qsub"
    }, q.sub));
  })), /*#__PURE__*/React.createElement(Callout, {
    kind: "tip",
    title: "Make it work for you"
  }, "Top-right of every page has controls for ", /*#__PURE__*/React.createElement("strong", null, "read-aloud"), ", ", /*#__PURE__*/React.createElement("strong", null, "plain language"), ", ", /*#__PURE__*/React.createElement("strong", null, "text size"), ", and a ", /*#__PURE__*/React.createElement("strong", null, "dyslexia-friendly font"), ". ", /*#__PURE__*/React.createElement("em", null, "Underlined words"), " show definitions on hover. Every quiz lets you retry without penalty."));
}

/* ------------------------------------------------------------
   Lesson view
------------------------------------------------------------ */
function LessonView(_ref2) {
  var lesson = _ref2.lesson,
    navigate = _ref2.navigate,
    markComplete = _ref2.markComplete,
    progress = _ref2.progress,
    prev = _ref2.prev,
    next = _ref2.next,
    udl = _ref2.udl;
  var UNITS = window.AppData.UNITS;
  var unit = UNITS.find(function (u) {
    return u.id === lesson.unit;
  });
  var isDone = !!progress[lesson.id];
  var Body = window["Lesson" + lesson.syllabus.replace(/\./g, "")];
  return /*#__PURE__*/React.createElement("article", {
    className: "lesson"
  }, /*#__PURE__*/React.createElement("div", {
    className: "lesson-header"
  }, /*#__PURE__*/React.createElement("div", {
    className: "eyebrow"
  }, unit.num, " ", unit.title, " \xB7 ", lesson.syllabus), /*#__PURE__*/React.createElement("h2", null, lesson.title), /*#__PURE__*/React.createElement("div", {
    className: "lead"
  }, lesson.summary)), /*#__PURE__*/React.createElement(SectionBanner, {
    unitId: lesson.unit
  }), Body ? /*#__PURE__*/React.createElement(Body, {
    udl: udl
  }) : /*#__PURE__*/React.createElement("p", null, "Lesson coming soon."), /*#__PURE__*/React.createElement("div", {
    className: "lesson-nav"
  }, /*#__PURE__*/React.createElement("div", null, prev ? /*#__PURE__*/React.createElement(Button, {
    icon: "left",
    variant: "ghost",
    onClick: function onClick() {
      return navigate({
        kind: "lesson",
        id: prev.id
      });
    }
  }, prev.syllabus, " \xB7 ", prev.title) : /*#__PURE__*/React.createElement("span", null)), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 8
    }
  }, !isDone ? /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    icon: "check",
    onClick: function onClick() {
      return markComplete(lesson.id);
    }
  }, "Mark complete") : /*#__PURE__*/React.createElement("span", {
    className: "badge-ribbon"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "trophy",
    size: 14
  }), " Lesson complete"), next && /*#__PURE__*/React.createElement(Button, {
    variant: "accent",
    iconRight: "right",
    onClick: function onClick() {
      return navigate({
        kind: "lesson",
        id: next.id
      });
    }
  }, next.syllabus, " \xB7 ", next.title))));
}

/* ------------------------------------------------------------
   Side quest view
------------------------------------------------------------ */
function SideQuestView(_ref3) {
  var id = _ref3.id,
    udl = _ref3.udl;
  var SIDE_QUESTS = window.AppData.SIDE_QUESTS;
  var sq = SIDE_QUESTS.find(function (s) {
    return s.id === id;
  });
  var map = {
    "sq-eotd": SideQuestEOTD,
    "sq-cards": SideQuestScientists,
    "sq-mystery": SideQuestMystery,
    "sq-predict": SideQuestPredict,
    "sq-aussie": SideQuestAussie
  };
  var Body = map[id];
  return /*#__PURE__*/React.createElement("article", {
    className: "lesson"
  }, /*#__PURE__*/React.createElement("div", {
    className: "lesson-header"
  }, /*#__PURE__*/React.createElement("div", {
    className: "eyebrow"
  }, "Side quest"), /*#__PURE__*/React.createElement("h2", null, sq.title), /*#__PURE__*/React.createElement("div", {
    className: "lead"
  }, sq.sub)), Body ? /*#__PURE__*/React.createElement(Body, null) : /*#__PURE__*/React.createElement("p", null, "Coming soon."));
}

// Mount
var root = ReactDOM.createRoot(document.getElementById("app-root"));
root.render(/*#__PURE__*/React.createElement(App, null));

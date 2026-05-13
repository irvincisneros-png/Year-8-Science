/* ============================================================
   Section banners — one animated SVG per unit
   Plus shared CC image helper
   ============================================================ */

const { useEffect: bn_useEffect, useRef: bn_useRef } = React;

/* ------------------------------------------------------------
   CC image helper — Wikimedia Commons via Special:FilePath
   Image data lives in data.js; this just renders with caption.
------------------------------------------------------------ */
function CCImage({ file, src, width = 480, alt, caption, credit, license = "CC-BY-SA / public domain", style = {}, frame = true }) {
  const [failed, setFailed] = React.useState(false);
  // Local asset path (e.g. src="assets/pdf-img-p5.jpg") takes precedence over Wikimedia file lookup.
  const isLocal = !!src;
  const url = isLocal
    ? src
    : `https://commons.wikimedia.org/wiki/Special:FilePath/${encodeURIComponent(file)}?width=${width}`;
  return (
    <figure style={{ margin: "12px 0", ...style }}>
      <div style={{
        borderRadius: frame ? "var(--r)" : 0,
        overflow: "hidden",
        border: frame ? "1px solid var(--border)" : "none",
        background: "var(--bg-2)",
        position: "relative",
        minHeight: failed ? 120 : 0,
      }}>
        {failed ? (
          <div style={{
            padding: "32px 18px",
            textAlign: "center",
            color: "var(--ink-muted)",
            fontSize: "0.85rem",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 6,
            background: "linear-gradient(135deg, oklch(0.94 0.04 60) 0%, oklch(0.96 0.025 200) 100%)",
          }}>
            <span style={{ fontSize: "1.6rem", opacity: 0.7 }}>🖼</span>
            <span><em>{caption || file}</em></span>
            <span style={{ fontSize: "0.7rem", opacity: 0.7 }}>(image not available)</span>
          </div>
        ) : (
          <img
            src={url}
            alt={alt || caption || file}
            loading="lazy"
            onError={() => setFailed(true)}
            style={{ width: "100%", height: "auto", display: "block" }}
            referrerPolicy="no-referrer"
          />
        )}
      </div>
      {!failed && (caption || credit) && (
        <figcaption style={{ fontSize: "0.78rem", color: "var(--ink-muted)", marginTop: 6, lineHeight: 1.45 }}>
          {caption}
          {credit && <> <span style={{ opacity: 0.7 }}>· {credit}</span></>}
          <span style={{ opacity: 0.5 }}> · {isLocal ? "from booklet" : "via Wikimedia Commons"}</span>
        </figcaption>
      )}
    </figure>
  );
}

/* Circular/avatar version for inline cards */
function CCAvatar({ file, size = 80, alt, style = {} }) {
  const [failed, setFailed] = React.useState(false);
  const initial = (alt || file || "?").trim().charAt(0).toUpperCase();
  if (!file || failed) {
    return (
      <div style={{
        width: size, height: size, borderRadius: "50%",
        background: "linear-gradient(135deg, oklch(0.85 0.06 60), oklch(0.7 0.12 30))",
        display: "flex", alignItems: "center", justifyContent: "center",
        color: "white", fontFamily: "var(--font-display)", fontSize: size * 0.4,
        flexShrink: 0,
        ...style,
      }}>{initial}</div>
    );
  }
  const url = `https://commons.wikimedia.org/wiki/Special:FilePath/${encodeURIComponent(file)}?width=${Math.round(size * 2)}`;
  return (
    <div style={{
      width: size, height: size, borderRadius: "50%", overflow: "hidden",
      background: "var(--bg-2)",
      border: "1.5px solid var(--border)",
      flexShrink: 0,
      ...style,
    }}>
      <img src={url} alt={alt || file} loading="lazy" referrerPolicy="no-referrer"
        onError={() => setFailed(true)}
        style={{ width: "100%", height: "100%", objectFit: "cover" }} />
    </div>
  );
}

/* ------------------------------------------------------------
   UNIT BANNERS — animated SVG per unit
------------------------------------------------------------ */

function BannerU1() {
  // 6.1 Classification of matter — floating geometric shapes (cubes, hexagons, spheres) drifting
  return (
    <svg viewBox="0 0 800 200" preserveAspectRatio="xMidYMid slice" style={{ width: "100%", height: "100%", display: "block" }}>
      <defs>
        <linearGradient id="u1bg" x1="0" x2="0" y1="0" y2="1">
          <stop offset="0%" stopColor="oklch(0.96 0.04 60)" />
          <stop offset="100%" stopColor="oklch(0.92 0.06 50)" />
        </linearGradient>
        <linearGradient id="u1m1" x1="0" x2="1" y1="0" y2="1">
          <stop offset="0%" stopColor="oklch(0.72 0.16 50)" />
          <stop offset="100%" stopColor="oklch(0.5 0.18 35)" />
        </linearGradient>
        <linearGradient id="u1m2" x1="0" x2="1" y1="0" y2="1">
          <stop offset="0%" stopColor="oklch(0.78 0.13 90)" />
          <stop offset="100%" stopColor="oklch(0.55 0.16 70)" />
        </linearGradient>
        <radialGradient id="u1m3" cx="35%" cy="35%">
          <stop offset="0%" stopColor="oklch(0.95 0.05 60)" />
          <stop offset="100%" stopColor="oklch(0.55 0.16 50)" />
        </radialGradient>
        <style>{`
          .u1-drift-a { animation: u1-drift-a 16s ease-in-out infinite; transform-origin: center; }
          .u1-drift-b { animation: u1-drift-b 22s ease-in-out infinite; transform-origin: center; }
          .u1-drift-c { animation: u1-drift-c 19s ease-in-out infinite; transform-origin: center; }
          .u1-spin-s { animation: u1-spin 30s linear infinite; transform-origin: center; transform-box: fill-box; }
          .u1-spin-f { animation: u1-spin 22s linear infinite reverse; transform-origin: center; transform-box: fill-box; }
          @keyframes u1-drift-a { 0%,100% { transform: translate(0,0); } 50% { transform: translate(0,-14px); } }
          @keyframes u1-drift-b { 0%,100% { transform: translate(0,0); } 50% { transform: translate(8px,-10px); } }
          @keyframes u1-drift-c { 0%,100% { transform: translate(0,0); } 50% { transform: translate(-10px,-8px); } }
          @keyframes u1-spin { to { transform: rotate(360deg); } }
        `}</style>
      </defs>
      <rect width="800" height="200" fill="url(#u1bg)" />

      {/* cube */}
      <g className="u1-drift-a">
        <g className="u1-spin-s" style={{ transformOrigin: "100px 100px" }}>
          <polygon points="100,55 145,75 145,125 100,145 55,125 55,75" fill="url(#u1m1)" opacity="0.92" />
          <polyline points="100,55 100,100 145,125" fill="none" stroke="oklch(0.95 0.05 60 / 0.6)" strokeWidth="1.2" />
          <line x1="100" y1="100" x2="55" y2="125" stroke="oklch(0.95 0.05 60 / 0.6)" strokeWidth="1.2" />
        </g>
      </g>

      {/* hexagon */}
      <g className="u1-drift-b" transform="translate(280, 100)">
        <g className="u1-spin-f">
          <polygon points="0,-44 38,-22 38,22 0,44 -38,22 -38,-22" fill="url(#u1m2)" opacity="0.9" />
          <polygon points="0,-22 19,-11 19,11 0,22 -19,11 -19,-11" fill="oklch(0.92 0.08 80 / 0.6)" />
        </g>
      </g>

      {/* sphere */}
      <g className="u1-drift-c" transform="translate(470, 100)">
        <circle r="38" fill="url(#u1m3)" />
        <ellipse cx="-12" cy="-12" rx="14" ry="8" fill="oklch(0.98 0.04 60 / 0.6)" transform="rotate(-30)" />
      </g>

      {/* metallic bar */}
      <g className="u1-drift-a" transform="translate(640, 100)">
        <rect x="-50" y="-12" width="100" height="24" rx="4" fill="url(#u1m1)" opacity="0.85" />
        <rect x="-50" y="-12" width="100" height="6" rx="2" fill="oklch(0.95 0.06 60 / 0.5)" />
      </g>

      {/* gas bubbles */}
      <g className="u1-drift-b" transform="translate(740, 90)">
        <circle r="14" fill="none" stroke="oklch(0.55 0.16 50 / 0.6)" strokeWidth="1.4" />
        <circle r="6" fill="oklch(0.85 0.08 60 / 0.55)" />
      </g>
      <g className="u1-drift-c" transform="translate(180, 60)">
        <circle r="9" fill="none" stroke="oklch(0.55 0.16 50 / 0.5)" strokeWidth="1.2" />
      </g>
      <g className="u1-drift-a" transform="translate(380, 50)">
        <circle r="7" fill="oklch(0.85 0.1 90 / 0.6)" />
      </g>
      <g className="u1-drift-b" transform="translate(570, 160)">
        <circle r="6" fill="none" stroke="oklch(0.55 0.16 50 / 0.4)" strokeWidth="1.2" />
      </g>
    </svg>
  );
}

function BannerU2() {
  // 6.2 Atomic structure — orbiting electrons + nucleus, particle trails
  return (
    <svg viewBox="0 0 800 200" preserveAspectRatio="xMidYMid slice" style={{ width: "100%", height: "100%", display: "block" }}>
      <defs>
        <linearGradient id="u2bg" x1="0" x2="0" y1="0" y2="1">
          <stop offset="0%" stopColor="oklch(0.96 0.025 200)" />
          <stop offset="100%" stopColor="oklch(0.92 0.04 195)" />
        </linearGradient>
        <radialGradient id="u2nuc" cx="35%" cy="35%">
          <stop offset="0%" stopColor="oklch(0.92 0.16 60)" />
          <stop offset="60%" stopColor="oklch(0.6 0.2 40)" />
          <stop offset="100%" stopColor="oklch(0.4 0.18 30)" />
        </radialGradient>
        <radialGradient id="u2elec" cx="35%" cy="35%">
          <stop offset="0%" stopColor="oklch(0.95 0.1 230)" />
          <stop offset="100%" stopColor="oklch(0.45 0.18 220)" />
        </radialGradient>
        <linearGradient id="u2trail" x1="0" x2="1">
          <stop offset="0%" stopColor="oklch(0.55 0.13 210 / 0)" />
          <stop offset="60%" stopColor="oklch(0.55 0.13 210 / 0.5)" />
          <stop offset="100%" stopColor="oklch(0.55 0.13 210 / 0)" />
        </linearGradient>

        <style>{`
          .u2-orbit-1 { animation: u2-spin 9s linear infinite; transform-origin: 400px 100px; }
          .u2-orbit-2 { animation: u2-spin 14s linear infinite reverse; transform-origin: 400px 100px; }
          .u2-orbit-3 { animation: u2-spin 19s linear infinite; transform-origin: 400px 100px; }
          .u2-pulse { animation: u2-pulse 4s ease-in-out infinite; transform-origin: center; transform-box: fill-box; }
          .u2-twinkle { animation: u2-twinkle 4s ease-in-out infinite; }
          .u2-twinkle-b { animation: u2-twinkle 5.5s ease-in-out infinite; animation-delay: -1.5s; }
          .u2-twinkle-c { animation: u2-twinkle 6s ease-in-out infinite; animation-delay: -3s; }
          @keyframes u2-spin { to { transform: rotate(360deg); } }
          @keyframes u2-pulse { 0%,100% { transform: scale(1); } 50% { transform: scale(1.07); } }
          @keyframes u2-twinkle { 0%,100% { opacity: 0.2; } 50% { opacity: 1; } }
        `}</style>
      </defs>
      <rect width="800" height="200" fill="url(#u2bg)" />

      {/* faint guide rings */}
      <ellipse cx="400" cy="100" rx="200" ry="58" fill="none" stroke="oklch(0.5 0.13 210 / 0.2)" strokeWidth="1.2" strokeDasharray="2 4" />
      <ellipse cx="400" cy="100" rx="200" ry="58" fill="none" stroke="oklch(0.5 0.13 210 / 0.2)" strokeWidth="1.2" strokeDasharray="2 4" transform="rotate(60 400 100)" />
      <ellipse cx="400" cy="100" rx="200" ry="58" fill="none" stroke="oklch(0.5 0.13 210 / 0.2)" strokeWidth="1.2" strokeDasharray="2 4" transform="rotate(120 400 100)" />

      {/* nucleus */}
      <g className="u2-pulse" transform="translate(400 100)">
        <circle r="44" fill="oklch(0.85 0.16 50 / 0.18)" />
        <circle r="22" fill="url(#u2nuc)" />
        <circle cx="-6" cy="-6" r="5" fill="oklch(0.72 0.2 30)" opacity="0.7" />
        <circle cx="6" cy="-6" r="5" fill="oklch(0.55 0.02 250)" opacity="0.75" />
        <circle cx="-6" cy="6" r="5" fill="oklch(0.55 0.02 250)" opacity="0.75" />
        <circle cx="6" cy="6" r="5" fill="oklch(0.72 0.2 30)" opacity="0.7" />
        <ellipse cx="-7" cy="-7" rx="6" ry="3" fill="oklch(0.98 0.04 60 / 0.5)" transform="rotate(-30 -7 -7)" />
      </g>

      {/* orbit 1 - horizontal */}
      <g className="u2-orbit-1">
        <ellipse cx="400" cy="100" rx="200" ry="58" fill="none" stroke="url(#u2trail)" strokeWidth="2" />
        <circle cx="600" cy="100" r="7" fill="url(#u2elec)" />
      </g>
      {/* orbit 2 */}
      <g style={{ transformOrigin: "400px 100px", transform: "rotate(60deg)" }}>
        <g className="u2-orbit-2">
          <ellipse cx="400" cy="100" rx="200" ry="58" fill="none" stroke="url(#u2trail)" strokeWidth="2" />
          <circle cx="600" cy="100" r="6" fill="url(#u2elec)" />
        </g>
      </g>
      {/* orbit 3 */}
      <g style={{ transformOrigin: "400px 100px", transform: "rotate(120deg)" }}>
        <g className="u2-orbit-3">
          <ellipse cx="400" cy="100" rx="200" ry="58" fill="none" stroke="url(#u2trail)" strokeWidth="2" />
          <circle cx="200" cy="100" r="6.5" fill="url(#u2elec)" />
        </g>
      </g>

      {/* sparkles */}
      <g className="u2-twinkle" transform="translate(90, 50)">
        <path d="M0,-7 L2,-2 L7,0 L2,2 L0,7 L-2,2 L-7,0 L-2,-2 Z" fill="oklch(0.65 0.16 210 / 0.7)" />
      </g>
      <g className="u2-twinkle-b" transform="translate(710, 160)">
        <path d="M0,-6 L1.8,-1.8 L6,0 L1.8,1.8 L0,6 L-1.8,1.8 L-6,0 L-1.8,-1.8 Z" fill="oklch(0.65 0.16 50 / 0.7)" />
      </g>
      <g className="u2-twinkle-c" transform="translate(140, 150)">
        <circle r="3" fill="oklch(0.65 0.16 290 / 0.65)" />
      </g>
      <g className="u2-twinkle" transform="translate(680, 40)">
        <circle r="2.5" fill="oklch(0.65 0.16 145 / 0.65)" />
      </g>
    </svg>
  );
}

function BannerU3() {
  // 6.3 Periodic table — grid of element tiles with wave shimmer
  const types = ["alkali", "alkaline", "transition", "metalloid", "nonmetal", "halogen", "noble", "post"];
  const tileColours = {
    alkali: "oklch(0.78 0.13 25)",
    alkaline: "oklch(0.82 0.13 60)",
    transition: "oklch(0.80 0.10 95)",
    post: "oklch(0.85 0.07 165)",
    metalloid: "oklch(0.78 0.10 195)",
    nonmetal: "oklch(0.80 0.12 230)",
    halogen: "oklch(0.78 0.13 275)",
    noble: "oklch(0.78 0.12 320)",
  };

  // 18 cols × 4 rows of mini-tiles
  const tiles = [];
  for (let r = 0; r < 4; r++) {
    for (let c = 0; c < 18; c++) {
      const t = types[(r * 5 + c) % types.length];
      tiles.push({ r, c, t, key: `${r}-${c}`, delay: ((r + c) % 12) * 0.18 });
    }
  }

  return (
    <svg viewBox="0 0 800 200" preserveAspectRatio="xMidYMid slice" style={{ width: "100%", height: "100%", display: "block" }}>
      <defs>
        <linearGradient id="u3bg" x1="0" x2="0" y1="0" y2="1">
          <stop offset="0%" stopColor="oklch(0.96 0.025 290)" />
          <stop offset="100%" stopColor="oklch(0.92 0.04 285)" />
        </linearGradient>
        <style>{`
          .u3tile { animation: u3-tile 4s ease-in-out infinite; transform-origin: center; transform-box: fill-box; }
          @keyframes u3-tile {
            0%, 100% { opacity: 0.55; transform: translateY(0); }
            50%      { opacity: 1;    transform: translateY(-2.5px); }
          }
        `}</style>
      </defs>
      <rect width="800" height="200" fill="url(#u3bg)" />

      {/* tile grid */}
      <g transform="translate(40, 30)">
        {tiles.map(({ r, c, t, key, delay }) => (
          <rect
            key={key}
            className="u3tile"
            x={c * 39}
            y={r * 34}
            width="33"
            height="28"
            rx="4"
            fill={tileColours[t]}
            style={{ animationDelay: `${delay}s` }}
          />
        ))}
      </g>

      {/* big "Pt" tile floating over */}
      <g transform="translate(560, 80)">
        <rect x="-32" y="-28" width="68" height="76" rx="8" fill="oklch(0.99 0.01 60)" stroke="oklch(0.5 0.18 290)" strokeWidth="1.5" />
        <text x="-26" y="-13" style={{ fontSize: 9, fill: "var(--ink-muted)", fontFamily: "var(--font-mono)" }}>78</text>
        <text x="2" y="20" textAnchor="middle" style={{ fontSize: 38, fill: "oklch(0.4 0.18 290)", fontFamily: "var(--font-display)", fontWeight: 600 }}>Pt</text>
        <text x="2" y="36" textAnchor="middle" style={{ fontSize: 8, fill: "var(--ink-muted)" }}>Platinum</text>
      </g>
    </svg>
  );
}

function BannerU4() {
  // 6.4 In context — city skyline silhouette with materials labels floating
  return (
    <svg viewBox="0 0 800 200" preserveAspectRatio="xMidYMid slice" style={{ width: "100%", height: "100%", display: "block" }}>
      <defs>
        <linearGradient id="u4bg" x1="0" x2="0" y1="0" y2="1">
          <stop offset="0%" stopColor="oklch(0.96 0.025 145)" />
          <stop offset="100%" stopColor="oklch(0.92 0.05 140)" />
        </linearGradient>
        <linearGradient id="u4sky" x1="0" x2="0" y1="0" y2="1">
          <stop offset="0%" stopColor="oklch(0.90 0.08 145 / 0)" />
          <stop offset="100%" stopColor="oklch(0.70 0.13 145 / 0.5)" />
        </linearGradient>
        <style>{`
          .u4-rise-a { animation: u4-rise 6s ease-in-out infinite; }
          .u4-rise-b { animation: u4-rise 7s ease-in-out infinite; animation-delay: -2s; }
          .u4-rise-c { animation: u4-rise 8s ease-in-out infinite; animation-delay: -4s; }
          .u4-shimmer { animation: u4-shimmer 5s ease-in-out infinite; }
          @keyframes u4-rise {
            0%, 100% { transform: translateY(0); opacity: 0.85; }
            50%      { transform: translateY(-8px); opacity: 1; }
          }
          @keyframes u4-shimmer {
            0%, 100% { opacity: 0.5; }
            50%      { opacity: 1; }
          }
        `}</style>
      </defs>
      <rect width="800" height="200" fill="url(#u4bg)" />

      {/* sun */}
      <circle cx="640" cy="60" r="28" fill="oklch(0.92 0.16 90 / 0.6)" />
      <circle cx="640" cy="60" r="18" fill="oklch(0.88 0.18 80)" className="u4-shimmer" />

      {/* skyline silhouette */}
      <g fill="oklch(0.45 0.1 150)" opacity="0.85">
        <polygon points="0,160 60,160 60,100 90,100 90,140 130,140 130,80 175,80 175,120 230,120 230,90 270,90 270,160 0,160" />
        <polygon points="280,160 280,110 320,110 320,70 360,70 360,130 410,130 410,95 460,95 460,160 280,160" />
        <polygon points="470,160 470,120 530,120 530,60 570,60 570,100 620,100 620,140 670,140 670,160 470,160" />
        <polygon points="680,160 680,130 740,130 740,90 800,90 800,160 680,160" />
      </g>

      {/* windows */}
      <g fill="oklch(0.88 0.12 90 / 0.85)">
        {[
          [70,115],[70,128],[70,141],
          [100,116],[100,129],
          [140,95],[140,108],[140,121],
          [186,96],[186,109],[186,122],
          [240,105],[240,118],
          [330,85],[330,98],[330,111],
          [375,85],[375,98],[375,111],
          [425,110],[425,123],
          [475,135],
          [540,75],[540,88],[540,101],
          [580,115],[580,128],
          [630,115],[630,128],
          [690,145],
          [750,105],[750,118],[750,131]
        ].map(([x,y], i) => <rect key={i} x={x} y={y} width="6" height="6" />)}
      </g>

      {/* ground */}
      <rect x="0" y="160" width="800" height="40" fill="oklch(0.4 0.08 150)" />
      <rect x="0" y="160" width="800" height="40" fill="url(#u4sky)" />

      {/* floating material chips */}
      <g className="u4-rise-a" transform="translate(100, 50)">
        <rect x="-30" y="-13" width="60" height="26" rx="13" fill="oklch(0.99 0.01 60)" stroke="oklch(0.5 0.16 145)" />
        <text x="0" y="5" textAnchor="middle" style={{ fontSize: 11, fill: "oklch(0.45 0.16 145)", fontFamily: "var(--font-mono)", fontWeight: 600 }}>Cu wire</text>
      </g>
      <g className="u4-rise-b" transform="translate(360, 35)">
        <rect x="-32" y="-13" width="64" height="26" rx="13" fill="oklch(0.99 0.01 60)" stroke="oklch(0.5 0.16 145)" />
        <text x="0" y="5" textAnchor="middle" style={{ fontSize: 11, fill: "oklch(0.45 0.16 145)", fontFamily: "var(--font-mono)", fontWeight: 600 }}>Al alloy</text>
      </g>
      <g className="u4-rise-c" transform="translate(530, 50)">
        <rect x="-32" y="-13" width="64" height="26" rx="13" fill="oklch(0.99 0.01 60)" stroke="oklch(0.5 0.16 145)" />
        <text x="0" y="5" textAnchor="middle" style={{ fontSize: 11, fill: "oklch(0.45 0.16 145)", fontFamily: "var(--font-mono)", fontWeight: 600 }}>Fe + C</text>
      </g>
    </svg>
  );
}

/* ------------------------------------------------------------
   Generic SectionBanner — chooses the right one
------------------------------------------------------------ */
function SectionBanner({ unitId }) {
  const banners = { u1: BannerU1, u2: BannerU2, u3: BannerU3, u4: BannerU4 };
  const B = banners[unitId] || BannerU2;
  return (
    <div style={{
      borderRadius: "var(--r-lg)",
      overflow: "hidden",
      marginBottom: 18,
      border: "1px solid var(--border)",
      aspectRatio: "800 / 200",
    }}>
      <B />
    </div>
  );
}

/* ------------------------------------------------------------
   Small decorative inline animations for lessons
------------------------------------------------------------ */

// Bouncing atoms — drop into any lesson for a touch of motion
function BouncingAtoms({ count = 5, height = 60 }) {
  return (
    <svg viewBox={`0 0 ${count * 60} ${height}`} style={{ width: "100%", maxWidth: count * 60, height, display: "block", margin: "8px 0" }}>
      <style>{`
        .ba-bounce { animation: ba-bounce 1.6s ease-in-out infinite; transform-origin: center; transform-box: fill-box; }
        @keyframes ba-bounce { 0%,100% { transform: translateY(0); } 50% { transform: translateY(-12px); } }
      `}</style>
      {Array.from({ length: count }).map((_, i) => (
        <g key={i} transform={`translate(${30 + i * 60}, ${height - 18})`} className="ba-bounce" style={{ animationDelay: `${i * 0.18}s` }}>
          <circle r="14" fill={[
            "oklch(0.7 0.16 50)",
            "oklch(0.7 0.13 200)",
            "oklch(0.65 0.15 290)",
            "oklch(0.7 0.13 145)",
            "oklch(0.78 0.14 90)",
          ][i % 5]} />
          <ellipse cx="-4" cy="-4" rx="5" ry="3" fill="oklch(0.95 0.05 60 / 0.5)" transform="rotate(-30 -4 -4)" />
        </g>
      ))}
    </svg>
  );
}

// Electron orbit — circular animation
function OrbitingElectrons({ size = 100 }) {
  return (
    <svg viewBox={`0 0 ${size} ${size}`} style={{ width: size, height: size }}>
      <style>{`
        .oe-spin { animation: oe-spin 4s linear infinite; transform-origin: center; }
        @keyframes oe-spin { to { transform: rotate(360deg); } }
      `}</style>
      <circle cx={size/2} cy={size/2} r={size/2.7} fill="none" stroke="oklch(0.55 0.16 220 / 0.45)" strokeWidth="1.2" strokeDasharray="2 4"/>
      <circle cx={size/2} cy={size/2} r={6} fill="oklch(0.55 0.2 30)" />
      <g className="oe-spin" style={{ transformOrigin: `${size/2}px ${size/2}px` }}>
        <circle cx={size - size/2.7 - 2} cy={size/2} r="4" fill="oklch(0.5 0.18 230)" />
      </g>
    </svg>
  );
}

// Gas particles in a box — for lesson 6.1.1 or 6.2.5
function GasParticles({ width = 200, height = 100 }) {
  const pts = [
    [30, 30], [80, 60], [140, 35], [110, 80], [170, 75], [50, 75], [180, 30],
  ];
  return (
    <svg viewBox={`0 0 ${width} ${height}`} style={{ width: "100%", maxWidth: width, height: "auto" }}>
      <style>{`
        .gp-drift-a { animation: gp-drift-a 3s ease-in-out infinite; }
        .gp-drift-b { animation: gp-drift-b 4s ease-in-out infinite; animation-delay: -1s; }
        .gp-drift-c { animation: gp-drift-c 5s ease-in-out infinite; animation-delay: -2s; }
        @keyframes gp-drift-a { 0%,100% { transform: translate(0,0); } 50% { transform: translate(6px,-4px); } }
        @keyframes gp-drift-b { 0%,100% { transform: translate(0,0); } 50% { transform: translate(-5px,5px); } }
        @keyframes gp-drift-c { 0%,100% { transform: translate(0,0); } 50% { transform: translate(4px,6px); } }
      `}</style>
      <rect x="2" y="2" width={width - 4} height={height - 4} rx="6" fill="oklch(0.95 0.025 200)" stroke="oklch(0.5 0.13 210 / 0.5)" strokeDasharray="3 4" />
      {pts.map(([x,y], i) => (
        <g key={i} className={i % 3 === 0 ? "gp-drift-a" : i % 3 === 1 ? "gp-drift-b" : "gp-drift-c"}>
          <circle cx={x} cy={y} r={5 + (i % 2)} fill={i % 2 ? "oklch(0.55 0.16 220)" : "oklch(0.6 0.18 60)"} opacity="0.85"/>
        </g>
      ))}
    </svg>
  );
}

Object.assign(window, {
  CCImage, CCAvatar,
  BannerU1, BannerU2, BannerU3, BannerU4, SectionBanner,
  BouncingAtoms, OrbitingElectrons, GasParticles,
});

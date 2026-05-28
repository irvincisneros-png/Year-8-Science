/* ============================================================
   Year 8 Atomic Structure — DATA layer
   Exposes: window.AppData = { units, lessons, elements, glossary, scientists, sideQuests }
   ============================================================ */

// ---------- ELEMENTS (118) ----------
// Format: [Z, sym, name, category, mass, group, period, shells (only for Z<=20), state, uses, fact]
// categories: alkali, alkaline, transition, post, metalloid, nonmetal, halogen, noble, lanth, actin

const RAW_ELEMENTS = [
  [1, "H", "Hydrogen", "nonmetal", 1.008, 1, 1, [1], "gas", "Rocket fuel, water (with O), fertilisers", "Most abundant element in the universe."],
  [2, "He", "Helium", "noble", 4.003, 18, 1, [2], "gas", "Party balloons, MRI machines, airships", "Discovered on the Sun before it was found on Earth."],
  [3, "Li", "Lithium", "alkali", 6.94, 1, 2, [2,1], "solid", "Phone batteries, mood medicine", "Lightest metal — floats on oil."],
  [4, "Be", "Beryllium", "alkaline", 9.01, 2, 2, [2,2], "solid", "X-ray windows, aerospace alloys", "Very toxic; tastes sweet (do NOT taste it)."],
  [5, "B", "Boron", "metalloid", 10.81, 13, 2, [2,3], "solid", "Soap (borax), heat-resistant glass", "Boron compounds dye fire green."],
  [6, "C", "Carbon", "nonmetal", 12.01, 14, 2, [2,4], "solid", "Pencils (graphite), diamonds, all life", "Same element, wildly different forms: graphite ≠ diamond."],
  [7, "N", "Nitrogen", "nonmetal", 14.01, 15, 2, [2,5], "gas", "Fertilisers, food packaging, the air (78%)", "Liquid nitrogen boils at −196 °C."],
  [8, "O", "Oxygen", "nonmetal", 16.00, 16, 2, [2,6], "gas", "Breathing, steel-making, rocket oxidiser", "21% of the air — most lives depend on it."],
  [9, "F", "Fluorine", "halogen", 19.00, 17, 2, [2,7], "gas", "Toothpaste (fluoride), Teflon", "The most reactive non-metal — reacts with almost everything."],
  [10, "Ne", "Neon", "noble", 20.18, 18, 2, [2,8], "gas", "Bright orange-red signs", "Glows orange-red when an electric current passes through it."],
  [11, "Na", "Sodium", "alkali", 22.99, 1, 3, [2,8,1], "solid", "Table salt (with Cl), street lamps", "Soft enough to cut with a knife. Reacts violently with water."],
  [12, "Mg", "Magnesium", "alkaline", 24.31, 2, 3, [2,8,2], "solid", "Flares, aircraft alloys, plant chlorophyll", "Burns with a blinding white flame."],
  [13, "Al", "Aluminium", "post", 26.98, 13, 3, [2,8,3], "solid", "Cans, foil, aircraft bodies, window frames", "3rd most abundant element in Earth's crust."],
  [14, "Si", "Silicon", "metalloid", 28.09, 14, 3, [2,8,4], "solid", "Computer chips, glass, sand", "Beach sand is mostly silicon dioxide."],
  [15, "P", "Phosphorus", "nonmetal", 30.97, 15, 3, [2,8,5], "solid", "Match heads, fertilisers, DNA", "White phosphorus glows in the dark and ignites in air."],
  [16, "S", "Sulfur", "nonmetal", 32.07, 16, 3, [2,8,6], "solid", "Gunpowder, vulcanised rubber, fertilisers", "Smells like rotten eggs when burned."],
  [17, "Cl", "Chlorine", "halogen", 35.45, 17, 3, [2,8,7], "gas", "Pool sanitiser, table salt (with Na), PVC", "Green-yellow gas. Highly toxic on its own."],
  [18, "Ar", "Argon", "noble", 39.95, 18, 3, [2,8,8], "gas", "Inside light bulbs, welding shield", "1% of the air — more than CO₂!"],
  [19, "K", "Potassium", "alkali", 39.10, 1, 4, [2,8,8,1], "solid", "Fertilisers, bananas, fireworks", "Symbol K from Latin 'kalium'."],
  [20, "Ca", "Calcium", "alkaline", 40.08, 2, 4, [2,8,8,2], "solid", "Bones, teeth, milk, chalk", "Your bones rebuild themselves about every 10 years using calcium."],
  [21, "Sc", "Scandium", "transition", 44.96, 3, 4, null, "solid", "Aerospace alloys, sports gear", "One of Mendeleev's predicted 'gap' elements."],
  [22, "Ti", "Titanium", "transition", 47.87, 4, 4, null, "solid", "Medical implants, jet engines, paint", "As strong as steel but 45% lighter."],
  [23, "V", "Vanadium", "transition", 50.94, 5, 4, null, "solid", "Tool steel, springs", null],
  [24, "Cr", "Chromium", "transition", 52.00, 6, 4, null, "solid", "Chrome plating, stainless steel", null],
  [25, "Mn", "Manganese", "transition", 54.94, 7, 4, null, "solid", "Steel alloys, batteries", null],
  [26, "Fe", "Iron", "transition", 55.85, 8, 4, null, "solid", "Steel, your blood (haemoglobin)", "Symbol Fe from Latin 'ferrum'."],
  [27, "Co", "Cobalt", "transition", 58.93, 9, 4, null, "solid", "Magnets, blue glass and pigments", null],
  [28, "Ni", "Nickel", "transition", 58.69, 10, 4, null, "solid", "Coins, magnets, stainless steel", null],
  [29, "Cu", "Copper", "transition", 63.55, 11, 4, null, "solid", "Electrical wires, pipes, coins", "Symbol Cu from Latin 'cuprum'. Conducts electricity beautifully."],
  [30, "Zn", "Zinc", "transition", 65.38, 12, 4, null, "solid", "Galvanising steel, brass, sunscreen", null],
  [31, "Ga", "Gallium", "post", 69.72, 13, 4, null, "solid", "LEDs, solar panels", "Melts in your hand (29 °C)."],
  [32, "Ge", "Germanium", "metalloid", 72.63, 14, 4, null, "solid", "Fibre optics, infrared lenses", "Another of Mendeleev's predictions."],
  [33, "As", "Arsenic", "metalloid", 74.92, 15, 4, null, "solid", "Semiconductors, (historically) poison", null],
  [34, "Se", "Selenium", "nonmetal", 78.97, 16, 4, null, "solid", "Photocopiers, solar cells", null],
  [35, "Br", "Bromine", "halogen", 79.90, 17, 4, null, "liquid", "Flame retardants, pool chemicals", "One of only two liquid elements at room temperature."],
  [36, "Kr", "Krypton", "noble", 83.80, 18, 4, null, "gas", "Some camera flashes, lasers", null],
  [37, "Rb", "Rubidium", "alkali", 85.47, 1, 5, null, "solid", "Specialty glass, atomic clocks", null],
  [38, "Sr", "Strontium", "alkaline", 87.62, 2, 5, null, "solid", "Red fireworks, glow-in-the-dark paint", null],
  [39, "Y", "Yttrium", "transition", 88.91, 3, 5, null, "solid", "LEDs, lasers, superconductors", null],
  [40, "Zr", "Zirconium", "transition", 91.22, 4, 5, null, "solid", "Nuclear fuel rods, ceramics", null],
  [41, "Nb", "Niobium", "transition", 92.91, 5, 5, null, "solid", "Jet engines, superconductors", null],
  [42, "Mo", "Molybdenum", "transition", 95.95, 6, 5, null, "solid", "Tool steels", null],
  [43, "Tc", "Technetium", "transition", 98, 7, 5, null, "solid", "Medical imaging", "The first synthetic element."],
  [44, "Ru", "Ruthenium", "transition", 101.07, 8, 5, null, "solid", "Electronics, jewellery alloys", null],
  [45, "Rh", "Rhodium", "transition", 102.91, 9, 5, null, "solid", "Catalytic converters", "Often more expensive than gold."],
  [46, "Pd", "Palladium", "transition", 106.42, 10, 5, null, "solid", "Catalytic converters, jewellery", null],
  [47, "Ag", "Silver", "transition", 107.87, 11, 5, null, "solid", "Jewellery, mirrors, electrical contacts", "Symbol Ag from Latin 'argentum'."],
  [48, "Cd", "Cadmium", "transition", 112.41, 12, 5, null, "solid", "Batteries, yellow pigment", null],
  [49, "In", "Indium", "post", 114.82, 13, 5, null, "solid", "Touchscreens", null],
  [50, "Sn", "Tin", "post", 118.71, 14, 5, null, "solid", "Solder, food cans, bronze (with Cu)", "Symbol Sn from Latin 'stannum'."],
  [51, "Sb", "Antimony", "metalloid", 121.76, 15, 5, null, "solid", "Flame retardants, alloys", "Symbol Sb from Latin 'stibium'."],
  [52, "Te", "Tellurium", "metalloid", 127.60, 16, 5, null, "solid", "Solar cells, alloys", null],
  [53, "I", "Iodine", "halogen", 126.90, 17, 5, null, "solid", "Disinfectant, table salt additive", "Sublimes — turns directly from solid to purple vapour."],
  [54, "Xe", "Xenon", "noble", 131.29, 18, 5, null, "gas", "Car headlights, ion thrusters", null],
  [55, "Cs", "Caesium", "alkali", 132.91, 1, 6, null, "solid", "Atomic clocks, drilling fluids", "Most reactive metal — even reacts with ice."],
  [56, "Ba", "Barium", "alkaline", 137.33, 2, 6, null, "solid", "Green fireworks, medical imaging", null],
  [57, "La", "Lanthanum", "lanth", 138.91, 3, 6, null, "solid", "Camera lenses, lighter flints", null],
  [58, "Ce", "Cerium", "lanth", 140.12, null, 6, null, "solid", "Catalytic converters, glass polish", null],
  [59, "Pr", "Praseodymium", "lanth", 140.91, null, 6, null, "solid", "Magnets, lasers", null],
  [60, "Nd", "Neodymium", "lanth", 144.24, null, 6, null, "solid", "Powerful magnets, headphones", null],
  [61, "Pm", "Promethium", "lanth", 145, null, 6, null, "solid", "Glow paints, nuclear batteries", null],
  [62, "Sm", "Samarium", "lanth", 150.36, null, 6, null, "solid", "Magnets, cancer treatment", null],
  [63, "Eu", "Europium", "lanth", 151.96, null, 6, null, "solid", "Red phosphor in TVs, anti-forgery ink", null],
  [64, "Gd", "Gadolinium", "lanth", 157.25, null, 6, null, "solid", "MRI contrast, nuclear reactor shielding", null],
  [65, "Tb", "Terbium", "lanth", 158.93, null, 6, null, "solid", "Green phosphors, sonar", null],
  [66, "Dy", "Dysprosium", "lanth", 162.50, null, 6, null, "solid", "Magnets, lasers", null],
  [67, "Ho", "Holmium", "lanth", 164.93, null, 6, null, "solid", "Strongest magnets, lasers", null],
  [68, "Er", "Erbium", "lanth", 167.26, null, 6, null, "solid", "Fibre optics, pink glass", null],
  [69, "Tm", "Thulium", "lanth", 168.93, null, 6, null, "solid", "Portable X-ray sources", null],
  [70, "Yb", "Ytterbium", "lanth", 173.04, null, 6, null, "solid", "Lasers, stress gauges", null],
  [71, "Lu", "Lutetium", "lanth", 174.97, null, 6, null, "solid", "PET scan crystals, refining catalysts", null],
  [72, "Hf", "Hafnium", "transition", 178.49, 4, 6, null, "solid", "Nuclear reactors, microchips", null],
  [73, "Ta", "Tantalum", "transition", 180.95, 5, 6, null, "solid", "Phone capacitors, surgical implants", null],
  [74, "W", "Tungsten", "transition", 183.84, 6, 6, null, "solid", "Light bulb filaments, cutting tools", "Highest melting point of any metal (3422 °C). Symbol W from German 'Wolfram'."],
  [75, "Re", "Rhenium", "transition", 186.21, 7, 6, null, "solid", "Jet engines, catalysts", null],
  [76, "Os", "Osmium", "transition", 190.23, 8, 6, null, "solid", "Pen tips, electrical contacts", "Densest naturally occurring element."],
  [77, "Ir", "Iridium", "transition", 192.22, 9, 6, null, "solid", "Spark plugs, watch jewels", null],
  [78, "Pt", "Platinum", "transition", 195.08, 10, 6, null, "solid", "Catalytic converters, jewellery", null],
  [79, "Au", "Gold", "transition", 196.97, 11, 6, null, "solid", "Jewellery, electronics, medals", "Symbol Au from Latin 'aurum'. Doesn't tarnish."],
  [80, "Hg", "Mercury", "transition", 200.59, 12, 6, null, "liquid", "Old thermometers, fluorescent tubes", "The only metal that is liquid at room temperature. Symbol Hg from Latin 'hydrargyrum' (water-silver)."],
  [81, "Tl", "Thallium", "post", 204.38, 13, 6, null, "solid", "Infrared detectors", null],
  [82, "Pb", "Lead", "post", 207.20, 14, 6, null, "solid", "Batteries, radiation shielding, solder", "Symbol Pb from Latin 'plumbum'."],
  [83, "Bi", "Bismuth", "post", 208.98, 15, 6, null, "solid", "Pepto-Bismol, cosmetics, low-melt alloys", "Forms stunning rainbow crystals."],
  [84, "Po", "Polonium", "post", 209, 16, 6, null, "solid", "Radioactive, used in some industries", null],
  [85, "At", "Astatine", "halogen", 210, 17, 6, null, "solid", "Almost none on Earth", "Rarest naturally-occurring element."],
  [86, "Rn", "Radon", "noble", 222, 18, 6, null, "gas", "(Radioactive)", null],
  [87, "Fr", "Francium", "alkali", 223, 1, 7, null, "solid", "Research only", null],
  [88, "Ra", "Radium", "alkaline", 226, 2, 7, null, "solid", "Historic glow-in-the-dark paint", null],
  [89, "Ac", "Actinium", "actin", 227, 3, 7, null, "solid", "Neutron sources", null],
  [90, "Th", "Thorium", "actin", 232.04, null, 7, null, "solid", "Some lantern mantles, nuclear research", null],
  [91, "Pa", "Protactinium", "actin", 231.04, null, 7, null, "solid", "Research only", null],
  [92, "U", "Uranium", "actin", 238.03, null, 7, null, "solid", "Nuclear fuel, reactors", null],
  [93, "Np", "Neptunium", "actin", 237, null, 7, null, "solid", "Smoke detectors", null],
  [94, "Pu", "Plutonium", "actin", 244, null, 7, null, "solid", "Nuclear reactors, weapons", null],
  [95, "Am", "Americium", "actin", 243, null, 7, null, "solid", "Smoke detectors", null],
  [96, "Cm", "Curium", "actin", 247, null, 7, null, "solid", "Power sources", null],
  [97, "Bk", "Berkelium", "actin", 247, null, 7, null, "solid", "Research only", null],
  [98, "Cf", "Californium", "actin", 251, null, 7, null, "solid", "Neutron sources", null],
  [99, "Es", "Einsteinium", "actin", 252, null, 7, null, "solid", "Research only", null],
  [100, "Fm", "Fermium", "actin", 257, null, 7, null, "solid", "Research only", null],
  [101, "Md", "Mendelevium", "actin", 258, null, 7, null, "solid", "Research only", null],
  [102, "No", "Nobelium", "actin", 259, null, 7, null, "solid", "Research only", null],
  [103, "Lr", "Lawrencium", "actin", 266, null, 7, null, "solid", "Research only", null],
  [104, "Rf", "Rutherfordium", "transition", 267, 4, 7, null, "solid", "Research only", null],
  [105, "Db", "Dubnium", "transition", 268, 5, 7, null, "solid", "Research only", null],
  [106, "Sg", "Seaborgium", "transition", 269, 6, 7, null, "solid", "Research only", null],
  [107, "Bh", "Bohrium", "transition", 270, 7, 7, null, "solid", "Research only", null],
  [108, "Hs", "Hassium", "transition", 277, 8, 7, null, "solid", "Research only", null],
  [109, "Mt", "Meitnerium", "transition", 278, 9, 7, null, "solid", "Research only", null],
  [110, "Ds", "Darmstadtium", "transition", 281, 10, 7, null, "solid", "Research only", null],
  [111, "Rg", "Roentgenium", "transition", 282, 11, 7, null, "solid", "Research only", null],
  [112, "Cn", "Copernicium", "transition", 285, 12, 7, null, "solid", "Research only", null],
  [113, "Nh", "Nihonium", "post", 286, 13, 7, null, "solid", "Research only", null],
  [114, "Fl", "Flerovium", "post", 289, 14, 7, null, "solid", "Research only", null],
  [115, "Mc", "Moscovium", "post", 290, 15, 7, null, "solid", "Research only", null],
  [116, "Lv", "Livermorium", "post", 293, 16, 7, null, "solid", "Research only", null],
  [117, "Ts", "Tennessine", "halogen", 294, 17, 7, null, "solid", "Research only", null],
  [118, "Og", "Oganesson", "noble", 294, 18, 7, null, "solid", "Research only", null],
];

const ELEMENTS = RAW_ELEMENTS.map(r => ({
  z: r[0], sym: r[1], name: r[2], category: r[3], mass: r[4],
  group: r[5], period: r[6], shells: r[7], state: r[8], uses: r[9], fact: r[10],
}));

const CATEGORY_LABELS = {
  alkali: "Alkali metal",
  alkaline: "Alkaline earth metal",
  transition: "Transition metal",
  post: "Post-transition metal",
  metalloid: "Metalloid",
  nonmetal: "Reactive non-metal",
  halogen: "Halogen",
  noble: "Noble gas",
  lanth: "Lanthanide",
  actin: "Actinide",
};

// Periodic table cell positions (row, col) — 18 cols, 7 rows + 2 f-block rows
// Cells return either an element z or null (empty cell)
function buildPTLayout() {
  // 7 rows × 18 cols, plus 2 extra rows for f-block (lanthanides/actinides)
  const grid = Array.from({ length: 9 }, () => Array(18).fill(null));
  // Place by atomic number using known layout
  const placements = {
    1: [1,1], 2: [1,18],
    3: [2,1], 4: [2,2], 5: [2,13], 6: [2,14], 7: [2,15], 8: [2,16], 9: [2,17], 10: [2,18],
    11: [3,1], 12: [3,2], 13: [3,13], 14: [3,14], 15: [3,15], 16: [3,16], 17: [3,17], 18: [3,18],
  };
  // Period 4 (Z 19–36)
  for (let z = 19, c = 1; z <= 36; z++, c++) placements[z] = [4, c];
  // Period 5 (Z 37–54)
  for (let z = 37, c = 1; z <= 54; z++, c++) placements[z] = [5, c];
  // Period 6: Cs(55), Ba(56), La(57), [Lanthanides 58–71 in row 8], Hf(72)..Rn(86)
  placements[55] = [6, 1]; placements[56] = [6, 2]; placements[57] = [6, 3];
  for (let z = 72, c = 4; z <= 86; z++, c++) placements[z] = [6, c];
  for (let z = 58, c = 3; z <= 71; z++, c++) placements[z] = [8, c];
  // Period 7: Fr(87), Ra(88), Ac(89), [Actinides 90–103 in row 9], Rf(104)..Og(118)
  placements[87] = [7, 1]; placements[88] = [7, 2]; placements[89] = [7, 3];
  for (let z = 104, c = 4; z <= 118; z++, c++) placements[z] = [7, c];
  for (let z = 90, c = 3; z <= 103; z++, c++) placements[z] = [9, c];

  Object.entries(placements).forEach(([z, [r, c]]) => {
    grid[r - 1][c - 1] = parseInt(z, 10);
  });
  return grid;
}

const PT_LAYOUT = buildPTLayout();

// ---------- COMPOUNDS (for formula decoder) ----------
const COMPOUNDS = [
  { f: "H2O", name: "Water", parts: [["H", 2], ["O", 1]], use: "Essential for life — drink it, cook with it, swim in it." },
  { f: "CO2", name: "Carbon dioxide", parts: [["C", 1], ["O", 2]], use: "Fizzy drinks, fire extinguishers, what you breathe out." },
  { f: "NaCl", name: "Sodium chloride", parts: [["Na", 1], ["Cl", 1]], use: "Table salt. Preserves food." },
  { f: "CaCO3", name: "Calcium carbonate", parts: [["Ca", 1], ["C", 1], ["O", 3]], use: "Chalk, limestone, marble, seashells." },
  { f: "C6H12O6", name: "Glucose", parts: [["C", 6], ["H", 12], ["O", 6]], use: "Sugar that fuels your cells." },
  { f: "NH3", name: "Ammonia", parts: [["N", 1], ["H", 3]], use: "Cleaning products, fertilisers." },
  { f: "H2SO4", name: "Sulfuric acid", parts: [["H", 2], ["S", 1], ["O", 4]], use: "Car batteries, industrial chemistry." },
  { f: "CuSO4", name: "Copper sulfate", parts: [["Cu", 1], ["S", 1], ["O", 4]], use: "Blue crystals — fungicide and dye." },
  { f: "Al2O3", name: "Aluminium oxide", parts: [["Al", 2], ["O", 3]], use: "Sandpaper, ruby gemstones." },
  { f: "MgCl2", name: "Magnesium chloride", parts: [["Mg", 1], ["Cl", 2]], use: "De-icer for roads, tofu coagulant." },
  { f: "CH4", name: "Methane", parts: [["C", 1], ["H", 4]], use: "Natural gas — heats homes, cows burp it." },
  { f: "K2O", name: "Potassium oxide", parts: [["K", 2], ["O", 1]], use: "Fertiliser ingredient." },
];

// ---------- FLAME TEST DATA ----------
const FLAME_TESTS = [
  { sym: "Li", name: "Lithium", colour: "Crimson red", hex: "oklch(0.6 0.22 25)", note: "Deep red — flag-red." },
  { sym: "Na", name: "Sodium", colour: "Bright yellow", hex: "oklch(0.85 0.18 90)", note: "So bright it can drown out other flame colours." },
  { sym: "K",  name: "Potassium", colour: "Lilac", hex: "oklch(0.7 0.13 290)", note: "Pale purple — look through a blue filter to see it clearly." },
  { sym: "Ca", name: "Calcium", colour: "Brick red", hex: "oklch(0.65 0.18 40)", note: "Brick-orange. Common in red fireworks." },
  { sym: "Cu", name: "Copper", colour: "Blue-green", hex: "oklch(0.72 0.16 175)", note: "Stunning teal — used in green/blue fireworks." },
  { sym: "Ba", name: "Barium", colour: "Apple green", hex: "oklch(0.75 0.18 145)", note: "Bright lime. The green in big firework finales." },
  { sym: "Sr", name: "Strontium", colour: "Crimson", hex: "oklch(0.6 0.2 20)", note: "Red — slightly more orange than lithium." },
];

// ---------- MATERIALS / USES ----------
const MATERIALS_CASES = [
  {
    item: "Drink can",
    correct: "Al",
    correct_name: "Aluminium",
    needs: ["Light", "Doesn't rust", "Easy to shape thin", "Easy to recycle"],
    why: "Aluminium is light (low density), corrosion-resistant, easily formed into thin walls, and recycling it uses only 5% of the energy of making new aluminium.",
    options: ["Au", "Fe", "Al", "Pb"],
  },
  {
    item: "Electrical wire (in your wall)",
    correct: "Cu",
    correct_name: "Copper",
    needs: ["Excellent electrical conductor", "Ductile (can be drawn into wire)", "Reasonable cost"],
    why: "Copper conducts electricity almost as well as silver but at a tiny fraction of the price. It's also ductile, so it can be drawn into very long wires.",
    options: ["Au", "Ag", "Cu", "Fe"],
  },
  {
    item: "Light bulb filament",
    correct: "W",
    correct_name: "Tungsten",
    needs: ["Extremely high melting point", "Stays solid when glowing white-hot"],
    why: "Tungsten has the highest melting point of any metal (3422 °C). The filament glows at thousands of degrees without melting.",
    options: ["Fe", "W", "Al", "Cu"],
  },
  {
    item: "Aircraft body",
    correct: "Al",
    correct_name: "Aluminium alloy",
    needs: ["Strong but light", "Corrosion-resistant", "Easy to shape"],
    why: "Aluminium alloys (like duralumin) give the strength-to-weight ratio aircraft need. Iron would be far too heavy.",
    options: ["Pb", "Fe", "Al", "Au"],
  },
  {
    item: "Cutlery",
    correct: "stainless",
    correct_name: "Stainless steel",
    needs: ["Strong", "Doesn't rust", "Affordable"],
    why: "Stainless steel (iron + chromium + nickel) is strong, food-safe, and doesn't rust when washed daily.",
    options: ["Au", "stainless", "Al", "Cu"],
  },
  {
    item: "MRI scanner cooling",
    correct: "He",
    correct_name: "Helium",
    needs: ["Stays liquid at extreme cold", "Doesn't react"],
    why: "Liquid helium is the coldest stable liquid (−269 °C) and is completely unreactive — perfect for cooling MRI superconductors.",
    options: ["O", "N", "He", "Ar"],
  },
];

// ---------- SAMPLES for metals/non-metals/metalloids classifier ----------
const SAMPLES = [
  { id: "s1", name: "Copper wire", shiny: true, conducts: true, malleable: true, brittle: false, gas: false, expect: "metal", hint: "Bends like a metal, lights the bulb." },
  { id: "s2", name: "Sulfur lump", shiny: false, conducts: false, malleable: false, brittle: true, gas: false, expect: "nonmetal", hint: "Yellow, dull, shatters when hit." },
  { id: "s3", name: "Silicon wafer", shiny: true, conducts: "sometimes", malleable: false, brittle: true, gas: false, expect: "metalloid", hint: "Looks shiny like a metal, but brittle. Conducts a bit." },
  { id: "s4", name: "Iron nail", shiny: true, conducts: true, malleable: true, brittle: false, gas: false, expect: "metal", hint: "Grey, can be hammered flat, conducts." },
  { id: "s5", name: "Carbon (graphite)", shiny: false, conducts: true, malleable: false, brittle: true, gas: false, expect: "nonmetal", hint: "Tricky! Conducts (rare for non-metals), but dull and brittle." },
  { id: "s6", name: "Magnesium ribbon", shiny: true, conducts: true, malleable: true, brittle: false, gas: false, expect: "metal", hint: "Silvery ribbon, conducts, bends." },
  { id: "s7", name: "Boron crystal", shiny: true, conducts: "sometimes", malleable: false, brittle: true, gas: false, expect: "metalloid", hint: "Hard, brittle, semiconductor." },
  { id: "s8", name: "Oxygen (gas)", shiny: false, conducts: false, malleable: false, brittle: false, gas: true, expect: "nonmetal", hint: "It's a gas — definitely not a metal." },
];

// ---------- HISTORY OF THE ATOM ----------
const HISTORY = [
  {
    id: "dalton",
    year: 1803,
    who: "John Dalton",
    photo: "John Dalton Carte de Visite circa 1840.jpg",
    name: "Solid sphere",
    one_liner: "Atoms are tiny, indestructible balls.",
    description: "Dalton was the first to give atoms a scientific basis. He pictured each element as having its own kind of tiny, solid, indivisible ball — different sizes for different elements.",
    why_wrong: "Atoms aren't actually solid balls — they're mostly empty space with smaller particles inside.",
    evidence: "Patterns in how elements combine in fixed mass ratios.",
  },
  {
    id: "thomson",
    year: 1897,
    who: "J.J. Thomson",
    photo: "Sir J.J. Thomson LCCN2014715407.jpg",
    name: "Plum pudding",
    one_liner: "A blob of positive 'dough' with electrons stuck inside.",
    description: "Thomson discovered electrons using cathode ray tubes. He proposed atoms are positively charged spheres with tiny negative electrons embedded like raisins in a pudding (or chocolate chips in a cookie).",
    why_wrong: "Rutherford's gold-foil experiment showed atoms have a small dense centre, not a uniform 'dough'.",
    evidence: "Cathode ray tube experiments — beams of negative particles deflected by magnets.",
  },
  {
    id: "rutherford",
    year: 1911,
    who: "Ernest Rutherford",
    photo: "Ernest Rutherford LOC.jpg",
    name: "Nuclear model",
    one_liner: "A tiny dense nucleus, surrounded by mostly empty space.",
    description: "Rutherford fired positively-charged alpha particles at gold foil. Most passed straight through. But occasionally, one bounced almost straight back. He concluded atoms must be mostly empty, with a tiny, dense, positive nucleus.",
    why_wrong: "Doesn't explain why atoms emit specific colours of light, or what electrons are actually doing.",
    evidence: "Gold foil experiment.",
  },
  {
    id: "bohr",
    year: 1913,
    who: "Niels Bohr",
    photo: "Prof. Bohr LCCN2014715454.jpg",
    name: "Planetary (shell) model",
    one_liner: "Electrons orbit in fixed shells, like planets around a sun.",
    description: "Bohr proposed electrons can only sit in certain fixed energy levels (shells). When they jump between shells, they emit or absorb specific colours of light. This is the model you'll draw in Year 8.",
    why_wrong: "Real electrons don't have neat circular orbits — they live in 'clouds' of probability.",
    evidence: "Spectroscope readings of glowing gases.",
  },
  {
    id: "quantum",
    year: 1926,
    who: "Schrödinger & others",
    photo: "Erwin Schrödinger - Narodowe Archiwum Cyfrowe (1-E-939).jpg",
    name: "Quantum cloud model",
    one_liner: "Electrons live in fuzzy 'clouds' of probability.",
    description: "Today's model says we can never know exactly where an electron is. Instead we describe a 'cloud' of probabilities — places where the electron is likely to be found. This is more accurate but much harder to draw.",
    why_wrong: "Still the best model we have. May be refined further as technology advances.",
    evidence: "Electron microscopes, particle accelerators, quantum mechanics maths.",
  },
];

// ---------- SCIENTISTS (trading cards / side quest) ----------
const SCIENTISTS = [
  { name: "Democritus", when: "~400 BCE", where: "Greece", photo: "Portrait of Democritus, half-length from an engraving. Wellcome M0004256.jpg", contrib: "First proposed atoms — coined the word 'atomos' meaning 'uncuttable'.", fun: "Philosophy, not experiment — his ideas waited 2,200 years for proof." },
  { name: "John Dalton", when: "1803", where: "England", photo: "John Dalton Carte de Visite circa 1840.jpg", contrib: "First scientific atomic theory — atoms as solid spheres.", fun: "Also gave colour blindness its other name, 'Daltonism'." },
  { name: "Dmitri Mendeleev", when: "1869", where: "Russia", photo: "Kramskoy Mendeleev 01.jpg", contrib: "Created the periodic table; predicted unknown elements.", fun: "Reportedly designed the table after a dream — and left blank spaces for elements yet to be discovered." },
  { name: "J.J. Thomson", when: "1897", where: "England", photo: "Sir J.J. Thomson LCCN2014715407.jpg", contrib: "Discovered the electron using cathode rays. Plum pudding model.", fun: "Seven of his students went on to win Nobel Prizes." },
  { name: "Marie Curie", when: "1898", where: "France/Poland", photo: "Marie Curie c. 1920s.jpg", contrib: "Discovered radium and polonium. Pioneered radioactivity research.", fun: "Only person to win Nobel Prizes in TWO different sciences (Physics & Chemistry)." },
  { name: "Ernest Rutherford", when: "1911", where: "New Zealand → UK", photo: "Ernest Rutherford LOC.jpg", contrib: "Discovered the atomic nucleus with the gold-foil experiment.", fun: "Born and raised in NZ — sometimes called the 'father of nuclear physics'." },
  { name: "Henry Moseley", when: "1913", where: "England", photo: "BigMoseleyCard.jpg", contrib: "Showed elements should be ordered by atomic number, not mass.", fun: "Killed in WWI aged 27 — his loss reshaped science research policy." },
  { name: "Niels Bohr", when: "1913", where: "Denmark", photo: "Prof. Bohr LCCN2014715454.jpg", contrib: "Proposed the planetary/shell model of the atom.", fun: "Smuggled out of Nazi-occupied Denmark in 1943, hidden in the bomb-bay of a plane." },
  { name: "Erwin Schrödinger", when: "1926", where: "Austria", photo: "Erwin Schrödinger - Narodowe Archiwum Cyfrowe (1-E-939).jpg", contrib: "Formulated the quantum mechanical (cloud) model.", fun: "Famous for his thought experiment about a cat that is simultaneously alive and dead." },
];

// ---------- GLOSSARY ----------
const GLOSSARY = {
  "element": "A pure substance made of only one type of atom. There are 118 known elements.",
  "atom": "The smallest unit of an element that still has the properties of that element.",
  "compound": "A substance made when two or more different elements join chemically (like H₂O or NaCl).",
  "alloy": "A mixture of a metal with one or more other elements (like steel, brass, bronze).",
  "mixture": "Two or more substances combined but not chemically joined — they can be separated again.",
  "atomic number": "The number of protons in an atom of an element. Each element has a unique atomic number.",
  "mass number": "The total number of protons plus neutrons in the nucleus.",
  "proton": "A positively-charged particle in the nucleus of an atom.",
  "neutron": "A neutral particle (no charge) in the nucleus of an atom.",
  "electron": "A tiny negatively-charged particle that orbits the nucleus in shells.",
  "nucleus": "The dense centre of an atom containing protons and neutrons.",
  "shell": "An energy level around the nucleus where electrons live. Also called an orbit.",
  "group": "A vertical column of the periodic table. Elements in the same group behave similarly.",
  "period": "A horizontal row of the periodic table. The period number = number of electron shells.",
  "metal": "An element that's usually shiny, conducts heat and electricity, and is malleable.",
  "non-metal": "An element that's usually dull, doesn't conduct electricity well, and is brittle when solid.",
  "metalloid": "An element with properties of both metals and non-metals — often a semiconductor.",
  "malleable": "Can be hammered into different shapes without breaking.",
  "ductile": "Can be stretched into long wires without snapping.",
  "lustrous": "Shiny when freshly cut or polished.",
  "reactivity": "How easily an element takes part in chemical reactions.",
  "ion": "An atom that has gained or lost electrons, giving it an electrical charge.",
  "semiconductor": "A material that conducts electricity under some conditions but not others — useful in electronics.",
  "alkali metal": "Group 1 elements — very soft, very reactive metals (Li, Na, K…).",
  "halogen": "Group 17 elements — very reactive non-metals (F, Cl, Br, I).",
  "noble gas": "Group 18 elements — almost completely unreactive (He, Ne, Ar…).",
  "alpha particle": "A small positively-charged particle given off by some radioactive elements. Two protons + two neutrons.",
  "cathode ray": "A beam of electrons produced inside a vacuum tube when electricity is passed through it.",
  "spectroscope": "An instrument that splits light into its component colours.",
};

// ---------- LESSON STRUCTURE (used by router/sidebar) ----------
// Each lesson is { id, syllabus, title, unit, summary, time }
const LESSONS = [
  // Unit 1 — Classification of matter
  { id: "L611", unit: "u1", syllabus: "6.1.1", title: "What's an element?", summary: "Pure substances, chemical symbols, and the elements all around you." },
  { id: "L612", unit: "u1", syllabus: "6.1.2", title: "Metals, non-metals & metalloids", summary: "Three families of elements and how to tell them apart." },
  { id: "L613", unit: "u1", syllabus: "6.1.3", title: "Properties → uses",  summary: "Why we make saucepans from copper and wings from aluminium." },

  // Unit 2 — Atomic structure
  { id: "L621", unit: "u2", syllabus: "6.2.1", title: "The atom",  summary: "The smallest piece of an element that's still that element." },
  { id: "L622", unit: "u2", syllabus: "6.2.2", title: "Inside the atom",  summary: "Protons, neutrons, electrons — the three subatomic particles." },
  { id: "L623", unit: "u2", syllabus: "6.2.3", title: "The planetary model",  summary: "Bohr's neat picture: a nucleus and electrons in shells." },
  { id: "L624", unit: "u2", syllabus: "6.2.4", title: "How atomic models changed",  summary: "From solid spheres (1803) to fuzzy clouds (today)." },
  { id: "L625", unit: "u2", syllabus: "6.2.5", title: "Tech that revealed the atom",  summary: "Cathode rays, gold foil, particle accelerators." },

  // Unit 3 — Periodic table
  { id: "L631", unit: "u3", syllabus: "6.3.1", title: "Patterns in the periodic table",  summary: "Groups, periods, and reactivity." },
  { id: "L632", unit: "u3", syllabus: "6.3.2", title: "Predicting properties",  summary: "Where an element sits tells you how it behaves." },
  { id: "L633", unit: "u3", syllabus: "6.3.3", title: "Element symbols",  summary: "Decoding Na, K, Au — and why some seem so weird." },
  { id: "L634", unit: "u3", syllabus: "6.3.4", title: "Reading chemical formulas",  summary: "What H₂O, CO₂ and C₆H₁₂O₆ really mean." },
  { id: "L635", unit: "u3", syllabus: "6.3.5", title: "Identifying elements",  summary: "Tests you can use to tell metals from non-metals." },
  { id: "L636", unit: "u3", syllabus: "6.3.6", title: "Modelling the first 18",  summary: "Build the atoms from hydrogen to argon." },
  { id: "L637", unit: "u3", syllabus: "6.3.7", title: "How the table was built",  summary: "From Döbereiner's triads to Mendeleev's masterpiece." },

  // Unit 4 — In Context
  { id: "L641", unit: "u4", syllabus: "6.4.1", title: "Materials in the real world",  summary: "Properties + availability = what we actually use." },
];

const UNITS = [
  { id: "u1", num: "6.1", title: "Classification of matter", blurb: "What elements are, how they group into metals / non-metals / metalloids, and why different materials are good at different jobs.", colour: "var(--u1)" },
  { id: "u2", num: "6.2", title: "Atomic structure", blurb: "Inside the atom — protons, neutrons, electrons — and how our picture of the atom has changed over 200 years.", colour: "var(--u2)" },
  { id: "u3", num: "6.3", title: "Periodic table", blurb: "The most powerful chart in chemistry. Groups, periods, symbols, formulas, and predicting elements you've never seen.", colour: "var(--u3)" },
  { id: "u4", num: "6.4", title: "Atoms in context", blurb: "How chemistry shows up in real life — choosing materials for the job, weighing properties against availability and cost.", colour: "var(--u4)" },
];

// ---------- SIDE QUESTS ----------
const SIDE_QUESTS = [
  { id: "sq-eotd", title: "Element of the day", sub: "A new element to meet every visit.", icon: "★" },
  { id: "sq-cards", title: "Scientist trading cards", sub: "Collect all 9. Tap to flip.", icon: "👤" },
  { id: "sq-mystery", title: "Mystery element", sub: "Three clues, one answer. Can you guess?", icon: "?" },
  { id: "sq-predict", title: "Predict before you peek", sub: "Make a guess, then reveal the answer.", icon: "🔮" },
  { id: "sq-aussie", title: "Australian connections", sub: "Aussie scientists, Aussie mining, our bit of chemistry.", icon: "🇦🇺" },
];

// Export to window
window.AppData = {
  ELEMENTS,
  CATEGORY_LABELS,
  PT_LAYOUT,
  COMPOUNDS,
  FLAME_TESTS,
  MATERIALS_CASES,
  SAMPLES,
  HISTORY,
  SCIENTISTS,
  GLOSSARY,
  LESSONS,
  UNITS,
  SIDE_QUESTS,
  // helpers
  getElementBySym: (sym) => ELEMENTS.find(e => e.sym === sym),
  getElementByZ: (z) => ELEMENTS.find(e => e.z === z),
  getLesson: (id) => LESSONS.find(l => l.id === id),
  getUnitLessons: (unitId) => LESSONS.filter(l => l.unit === unitId),
};

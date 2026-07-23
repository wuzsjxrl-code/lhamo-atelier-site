const profiles = {
  Wood: {
    title: "Wood Profile: growth, renewal, and graceful movement",
    copy: "Your birthday leans toward Wood. Balance it with stones and colors that feel fresh, composed, and upward-moving.",
    materials: "Recommended: turquoise, green aventurine, sandalwood, and slim gold accents.",
    className: "verdant",
    productSlug: "green-tara-turquoise-stack"
  },
  Fire: {
    title: "Fire Profile: presence, warmth, and confident expression",
    copy: "Your birthday leans toward Fire. Choose a bracelet with warmth and visual energy, softened by grounding dark stones.",
    materials: "Recommended: red agate, coral-tone jasper, amber, obsidian, and vermeil.",
    className: "ember",
    productSlug: "coral-flame-protection-bracelet"
  },
  Earth: {
    title: "Earth Profile: stability, care, and grounded luxury",
    copy: "Your birthday leans toward Earth. Textured natural materials and golden brown tones create a calm collector feel.",
    materials: "Recommended: sandalwood, tiger eye, honey jade, brass, and matte neutral beads.",
    className: "earth",
    productSlug: "sandalwood-grounding-mala"
  },
  Metal: {
    title: "Metal Profile: clarity, refinement, and quiet discipline",
    copy: "Your birthday leans toward Metal. Pale stones and polished accents create a clean, architectural bracelet direction.",
    materials: "Recommended: white jade, clear quartz, moonstone, silver, and black onyx contrast.",
    className: "lunar",
    productSlug: "moon-silver-mantra-bracelet"
  },
  Water: {
    title: "Water Profile: intuition, depth, and calm protection",
    copy: "Your birthday leans toward Water. Deep stones and cool blue-green notes create a contemplative, evening-ready style.",
    materials: "Recommended: obsidian, lapis, turquoise, smoky quartz, and silver details.",
    className: "lunar",
    productSlug: "moon-silver-mantra-bracelet"
  }
};

const productCatalog = {
  "green-tara-turquoise-stack": {
    name: "Green Tara Turquoise Stack",
    badge: "Online exclusive",
    price: "$268",
    image: "assets/bracelet-verdant.png",
    alt: "Green jade, smoky quartz and turquoise bracelet",
    element: "Wood / Water",
    materials: "Turquoise, green aventurine, sandalwood and vermeil granules",
    intention: "Growth, protection and a calmer daily rhythm.",
    fit: "Recommended for Wood or Water-leaning readings, new beginnings, travel and mindful gifting.",
    story: "A cool green composition inspired by Green Tara iconography and the renewal quality of Wood. Turquoise introduces a protective Himalayan note while smoky quartz adds quiet grounding.",
    care: "Avoid perfume, soaking and ultrasonic cleaning. Wipe with a dry soft cloth after wear.",
    shipping: "Complimentary shipping over $250. Packed with a care card and cotton storage pouch."
  },
  "coral-flame-protection-bracelet": {
    name: "Coral Flame Protection Bracelet",
    badge: "New addition",
    price: "$318",
    image: "assets/bracelet-ember.png",
    alt: "Carnelian, garnet and dark rosewood bracelet",
    element: "Fire / Earth",
    materials: "Red agate, coral-tone jasper, amber and dark obsidian",
    intention: "Presence, warmth and protective confidence.",
    fit: "Recommended for Fire support, public-facing work, decisive periods and ceremonial gifting.",
    story: "A warm red composition drawing from coral amulet traditions and flame-like vitality. Dark obsidian steadies the brightness so the bracelet feels protective rather than loud.",
    care: "Keep away from prolonged moisture and heat. Store separately to protect polished beads.",
    shipping: "Complimentary shipping over $250. Packed with a care card and cotton storage pouch."
  },
  "sandalwood-grounding-mala": {
    name: "Sandalwood Grounding Mala",
    badge: "Small batch",
    price: "$246",
    image: "assets/bracelet-earth.png",
    alt: "Amber, tiger eye and pale stone bracelet",
    element: "Earth / Wood",
    materials: "Old sandalwood, tiger eye, honey jade and brushed brass",
    intention: "Stability, care and steady accumulation.",
    fit: "Recommended for Earth support, long work cycles, caretakers and grounded luxury gifting.",
    story: "A tactile mala-inspired bracelet centered on sandalwood warmth and tiger-eye steadiness. The palette is quiet, practical and intentionally close to the body.",
    care: "Sandalwood naturally changes with wear. Avoid water and apply no oils unless advised.",
    shipping: "Complimentary shipping over $250. Packed with a care card and cotton storage pouch."
  },
  "moon-silver-mantra-bracelet": {
    name: "Moon Silver Mantra Bracelet",
    badge: "Signature",
    price: "$296",
    image: "assets/bracelet-lunar.png",
    alt: "Moonstone, obsidian and labradorite bracelet",
    element: "Metal / Water",
    materials: "White jade, quartz, obsidian and sterling silver accents",
    intention: "Clarity, intuition and composed protection.",
    fit: "Recommended for Metal or Water readings, study, decision-making and evening wear.",
    story: "A pale-and-dark composition built around lunar stones, polished contrast and silver detail. It is the most architectural piece in the collection.",
    care: "Polish silver gently with a non-abrasive cloth. Avoid chemicals and prolonged humidity.",
    shipping: "Complimentary shipping over $250. Packed with a care card and cotton storage pouch."
  }
};

const elementNames = {
  Wood: "Wood / \u6728",
  Fire: "Fire / \u706b",
  Earth: "Earth / \u571f",
  Metal: "Metal / \u91d1",
  Water: "Water / \u6c34"
};

const baziInsights = {
  Wood: {
    personality: "Warm, adaptive and growth-minded, with a natural pull toward new ideas and meaningful movement.",
    money: "Money is often approached through expansion: learning, building networks and investing in better tools.",
    love: "In love, Wood energy seeks sincerity, patience and a relationship that keeps evolving.",
    wealth: "Long-term wealth is supported by consistency, creative assets and avoiding scattered priorities.",
    career: "Career momentum comes from design, education, wellness, culture, brand-building or founder-led work.",
    health: "Best supported by rhythm, stretching, fresh air and steady recovery from stress."
  },
  Fire: {
    personality: "Expressive, magnetic and quick to act, with a strong instinct for visibility and emotional warmth.",
    money: "Money decisions can be inspired and fast; restraint helps turn excitement into lasting value.",
    love: "In love, Fire energy is generous and passionate, and benefits from calm communication.",
    wealth: "Wealth grows when attention is focused, not split across too many dramatic opportunities.",
    career: "Career strength appears in storytelling, leadership, aesthetics, hospitality, performance or sales.",
    health: "Best supported by cooling routines, sleep discipline and moments away from overstimulation."
  },
  Earth: {
    personality: "Grounded, reliable and protective, with a refined sense for quality, care and practical beauty.",
    money: "Money is handled through caution and tangible value, though comfort spending can become a pattern.",
    love: "In love, Earth energy values loyalty, presence and the feeling of building something real.",
    wealth: "Wealth is strongest through patient accumulation, property, craft, operations and trusted systems.",
    career: "Career momentum comes from management, service, sourcing, finance, interiors, food or wellness.",
    health: "Best supported by digestion-friendly routines, movement after long work sessions and lighter schedules."
  },
  Metal: {
    personality: "Precise, composed and discerning, with a taste for structure, restraint and high standards.",
    money: "Money tends to be managed with discipline; the lesson is allowing calculated risk when timing is right.",
    love: "In love, Metal energy can be selective, loyal and quietly devoted once trust is established.",
    wealth: "Wealth grows through clarity, contracts, premium positioning and careful protection of resources.",
    career: "Career strength appears in luxury, law, strategy, design direction, finance, technology or curation.",
    health: "Best supported by breathwork, hydration, skin care rituals and releasing accumulated tension."
  },
  Water: {
    personality: "Intuitive, observant and deep-feeling, with a private intelligence and strong inner radar.",
    money: "Money is influenced by timing and instinct; written plans help turn intuition into stability.",
    love: "In love, Water energy seeks emotional safety, depth and a bond that feels quietly protective.",
    wealth: "Wealth comes through research, mobility, knowledge, cross-border work and patient positioning.",
    career: "Career momentum comes from advisory work, writing, psychology, travel, trade, research or strategy.",
    health: "Best supported by warmth, rest, nervous-system care and avoiding long periods of depletion."
  }
};

const yearStemElements = ["Metal", "Metal", "Water", "Water", "Wood", "Wood", "Fire", "Fire", "Earth", "Earth"];
const seasonalElements = ["Water", "Wood", "Wood", "Wood", "Fire", "Fire", "Fire", "Earth", "Metal", "Metal", "Metal", "Water"];
const supportCycle = { Wood: "Fire", Fire: "Earth", Earth: "Metal", Metal: "Water", Water: "Wood" };
const heavenlyStems = ["\u7532", "\u4e59", "\u4e19", "\u4e01", "\u620a", "\u5df1", "\u5e9a", "\u8f9b", "\u58ec", "\u7678"];
const earthlyBranches = ["\u5b50", "\u4e11", "\u5bc5", "\u536f", "\u8fb0", "\u5df3", "\u5348", "\u672a", "\u7533", "\u9149", "\u620c", "\u4ea5"];
const stemElements = ["Wood", "Wood", "Fire", "Fire", "Earth", "Earth", "Metal", "Metal", "Water", "Water"];
const branchElements = ["Water", "Earth", "Wood", "Wood", "Earth", "Fire", "Fire", "Earth", "Metal", "Metal", "Earth", "Water"];
const elementOrder = ["Wood", "Fire", "Earth", "Metal", "Water"];
const controlCycle = { Wood: "Earth", Earth: "Water", Water: "Fire", Fire: "Metal", Metal: "Wood" };
const branchHiddenStems = {
  "\u5b50": ["\u7678"],
  "\u4e11": ["\u5df1", "\u7678", "\u8f9b"],
  "\u5bc5": ["\u7532", "\u4e19", "\u620a"],
  "\u536f": ["\u4e59"],
  "\u8fb0": ["\u620a", "\u4e59", "\u7678"],
  "\u5df3": ["\u4e19", "\u620a", "\u5e9a"],
  "\u5348": ["\u4e01", "\u5df1"],
  "\u672a": ["\u5df1", "\u4e01", "\u4e59"],
  "\u7533": ["\u5e9a", "\u58ec", "\u620a"],
  "\u9149": ["\u8f9b"],
  "\u620c": ["\u620a", "\u8f9b", "\u4e01"],
  "\u4ea5": ["\u58ec", "\u7532"]
};
const tenGodLabels = {
  "\u6bd4\u80a9": "Peer / \u6bd4\u80a9",
  "\u52ab\u8d22": "Rob wealth / \u52ab\u8d22",
  "\u98df\u795e": "Eating god / \u98df\u795e",
  "\u4f24\u5b98": "Hurting officer / \u4f24\u5b98",
  "\u6b63\u8d22": "Direct wealth / \u6b63\u8d22",
  "\u504f\u8d22": "Indirect wealth / \u504f\u8d22",
  "\u6b63\u5b98": "Direct officer / \u6b63\u5b98",
  "\u4e03\u6740": "Seven killings / \u4e03\u6740",
  "\u6b63\u5370": "Direct resource / \u6b63\u5370",
  "\u504f\u5370": "Indirect resource / \u504f\u5370"
};
const tenGodOrder = Object.keys(tenGodLabels);
const tenGodInsights = {
  "\u6bd4\u80a9": "self-possession, independence and personal standards",
  "\u52ab\u8d22": "competitive instinct, social drive and a need to manage impulse spending",
  "\u98df\u795e": "taste, ease, creativity and refined pleasure",
  "\u4f24\u5b98": "originality, critique and a need for freedom of expression",
  "\u6b63\u8d22": "practical money sense, reliability and long-term value building",
  "\u504f\u8d22": "opportunity, trade, generosity and flexible wealth movement",
  "\u6b63\u5b98": "discipline, reputation, responsibility and public credibility",
  "\u4e03\u6740": "pressure, courage, decisive action and strategic boundaries",
  "\u6b63\u5370": "learning, protection, support and trusted guidance",
  "\u504f\u5370": "intuition, research, unconventional knowledge and privacy"
};
const elementMeanings = {
  Wood: {
    label: "Wood / \u6728",
    meaning: "Growth, planning, compassion, learning, movement and the ability to begin again."
  },
  Fire: {
    label: "Fire / \u706b",
    meaning: "Visibility, warmth, expression, ceremony, confidence and emotional radiance."
  },
  Earth: {
    label: "Earth / \u571f",
    meaning: "Stability, care, trust, digestion, accumulation, responsibility and grounded taste."
  },
  Metal: {
    label: "Metal / \u91d1",
    meaning: "Discernment, structure, refinement, discipline, boundaries and clear value judgment."
  },
  Water: {
    label: "Water / \u6c34",
    meaning: "Wisdom, intuition, rest, memory, travel, research and the capacity to adapt."
  }
};
const monthBranchByGregorianMonth = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 0];
const birthRegions = {
  China: ["Beijing", "Shanghai", "Tianjin", "Chongqing", "Hebei", "Shanxi", "Liaoning", "Jilin", "Heilongjiang", "Jiangsu", "Zhejiang", "Anhui", "Fujian", "Jiangxi", "Shandong", "Henan", "Hubei", "Hunan", "Guangdong", "Hainan", "Sichuan", "Guizhou", "Yunnan", "Shaanxi", "Gansu", "Qinghai", "Taiwan", "Inner Mongolia", "Guangxi", "Tibet", "Ningxia", "Xinjiang", "Hong Kong", "Macau"],
  "United States": ["Alabama", "Alaska", "Arizona", "Arkansas", "California", "Colorado", "Connecticut", "Delaware", "Florida", "Georgia", "Hawaii", "Idaho", "Illinois", "Indiana", "Iowa", "Kansas", "Kentucky", "Louisiana", "Maine", "Maryland", "Massachusetts", "Michigan", "Minnesota", "Mississippi", "Missouri", "Montana", "Nebraska", "Nevada", "New Hampshire", "New Jersey", "New Mexico", "New York", "North Carolina", "North Dakota", "Ohio", "Oklahoma", "Oregon", "Pennsylvania", "Rhode Island", "South Carolina", "South Dakota", "Tennessee", "Texas", "Utah", "Vermont", "Virginia", "Washington", "West Virginia", "Wisconsin", "Wyoming", "District of Columbia"],
  Canada: ["Alberta", "British Columbia", "Manitoba", "New Brunswick", "Newfoundland and Labrador", "Northwest Territories", "Nova Scotia", "Nunavut", "Ontario", "Prince Edward Island", "Quebec", "Saskatchewan", "Yukon"],
  "United Kingdom": ["England", "Scotland", "Wales", "Northern Ireland"],
  Australia: ["Australian Capital Territory", "New South Wales", "Northern Territory", "Queensland", "South Australia", "Tasmania", "Victoria", "Western Australia"],
  France: ["Auvergne-Rhone-Alpes", "Bourgogne-Franche-Comte", "Brittany", "Centre-Val de Loire", "Corsica", "Grand Est", "Hauts-de-France", "Ile-de-France", "Normandy", "Nouvelle-Aquitaine", "Occitanie", "Pays de la Loire", "Provence-Alpes-Cote d'Azur", "Guadeloupe", "Martinique", "French Guiana", "Reunion", "Mayotte"],
  Germany: ["Baden-Wurttemberg", "Bavaria", "Berlin", "Brandenburg", "Bremen", "Hamburg", "Hesse", "Lower Saxony", "Mecklenburg-Western Pomerania", "North Rhine-Westphalia", "Rhineland-Palatinate", "Saarland", "Saxony", "Saxony-Anhalt", "Schleswig-Holstein", "Thuringia"],
  Italy: ["Abruzzo", "Aosta Valley", "Apulia", "Basilicata", "Calabria", "Campania", "Emilia-Romagna", "Friuli Venezia Giulia", "Lazio", "Liguria", "Lombardy", "Marche", "Molise", "Piedmont", "Sardinia", "Sicily", "Trentino-Alto Adige/Sudtirol", "Tuscany", "Umbria", "Veneto"],
  Spain: ["Andalusia", "Aragon", "Asturias", "Balearic Islands", "Basque Country", "Canary Islands", "Cantabria", "Castile and Leon", "Castilla-La Mancha", "Catalonia", "Community of Madrid", "Extremadura", "Galicia", "La Rioja", "Navarre", "Region of Murcia", "Valencian Community", "Ceuta", "Melilla"],
  Netherlands: ["Drenthe", "Flevoland", "Friesland", "Gelderland", "Groningen", "Limburg", "North Brabant", "North Holland", "Overijssel", "South Holland", "Utrecht", "Zeeland"],
  Switzerland: ["Aargau", "Appenzell Ausserrhoden", "Appenzell Innerrhoden", "Basel-Landschaft", "Basel-Stadt", "Bern", "Fribourg", "Geneva", "Glarus", "Graubunden", "Jura", "Lucerne", "Neuchatel", "Nidwalden", "Obwalden", "Schaffhausen", "Schwyz", "Solothurn", "St. Gallen", "Thurgau", "Ticino", "Uri", "Valais", "Vaud", "Zug", "Zurich"],
  Japan: ["Aichi", "Akita", "Aomori", "Chiba", "Ehime", "Fukui", "Fukuoka", "Fukushima", "Gifu", "Gunma", "Hiroshima", "Hokkaido", "Hyogo", "Ibaraki", "Ishikawa", "Iwate", "Kagawa", "Kagoshima", "Kanagawa", "Kochi", "Kumamoto", "Kyoto", "Mie", "Miyagi", "Miyazaki", "Nagano", "Nagasaki", "Nara", "Niigata", "Oita", "Okayama", "Okinawa", "Osaka", "Saga", "Saitama", "Shiga", "Shimane", "Shizuoka", "Tochigi", "Tokushima", "Tokyo", "Tottori", "Toyama", "Wakayama", "Yamagata", "Yamaguchi", "Yamanashi"],
  "South Korea": ["Seoul", "Busan", "Daegu", "Incheon", "Gwangju", "Daejeon", "Ulsan", "Sejong", "Gyeonggi", "Gangwon", "North Chungcheong", "South Chungcheong", "North Jeolla", "South Jeolla", "North Gyeongsang", "South Gyeongsang", "Jeju"],
  Singapore: ["Central Region", "East Region", "North Region", "North-East Region", "West Region"]
};
const countries = [
  "Afghanistan", "Albania", "Algeria", "Andorra", "Angola", "Antigua and Barbuda", "Argentina", "Armenia", "Australia", "Austria", "Azerbaijan",
  "Bahamas", "Bahrain", "Bangladesh", "Barbados", "Belarus", "Belgium", "Belize", "Benin", "Bhutan", "Bolivia", "Bosnia and Herzegovina", "Botswana", "Brazil", "Brunei", "Bulgaria", "Burkina Faso", "Burundi",
  "Cabo Verde", "Cambodia", "Cameroon", "Canada", "Central African Republic", "Chad", "Chile", "China", "Colombia", "Comoros", "Congo", "Costa Rica", "Cote d'Ivoire", "Croatia", "Cuba", "Cyprus", "Czech Republic",
  "Democratic Republic of the Congo", "Denmark", "Djibouti", "Dominica", "Dominican Republic",
  "Ecuador", "Egypt", "El Salvador", "Equatorial Guinea", "Eritrea", "Estonia", "Eswatini", "Ethiopia",
  "Fiji", "Finland", "France",
  "Gabon", "Gambia", "Georgia", "Germany", "Ghana", "Greece", "Grenada", "Guatemala", "Guinea", "Guinea-Bissau", "Guyana",
  "Haiti", "Honduras", "Hungary",
  "Iceland", "India", "Indonesia", "Iran", "Iraq", "Ireland", "Israel", "Italy",
  "Jamaica", "Japan", "Jordan",
  "Kazakhstan", "Kenya", "Kiribati", "Kuwait", "Kyrgyzstan",
  "Laos", "Latvia", "Lebanon", "Lesotho", "Liberia", "Libya", "Liechtenstein", "Lithuania", "Luxembourg",
  "Madagascar", "Malawi", "Malaysia", "Maldives", "Mali", "Malta", "Marshall Islands", "Mauritania", "Mauritius", "Mexico", "Micronesia", "Moldova", "Monaco", "Mongolia", "Montenegro", "Morocco", "Mozambique", "Myanmar",
  "Namibia", "Nauru", "Nepal", "Netherlands", "New Zealand", "Nicaragua", "Niger", "Nigeria", "North Korea", "North Macedonia", "Norway",
  "Oman",
  "Pakistan", "Palau", "Palestine", "Panama", "Papua New Guinea", "Paraguay", "Peru", "Philippines", "Poland", "Portugal",
  "Qatar",
  "Romania", "Russia", "Rwanda",
  "Saint Kitts and Nevis", "Saint Lucia", "Saint Vincent and the Grenadines", "Samoa", "San Marino", "Sao Tome and Principe", "Saudi Arabia", "Senegal", "Serbia", "Seychelles", "Sierra Leone", "Singapore", "Slovakia", "Slovenia", "Solomon Islands", "Somalia", "South Africa", "South Korea", "South Sudan", "Spain", "Sri Lanka", "Sudan", "Suriname", "Sweden", "Switzerland", "Syria",
  "Taiwan", "Tajikistan", "Tanzania", "Thailand", "Timor-Leste", "Togo", "Tonga", "Trinidad and Tobago", "Tunisia", "Turkey", "Turkmenistan", "Tuvalu",
  "Uganda", "Ukraine", "United Arab Emirates", "United Kingdom", "United States", "Uruguay", "Uzbekistan",
  "Vanuatu", "Vatican City", "Venezuela", "Vietnam",
  "Yemen",
  "Zambia", "Zimbabwe"
];

function getRecommendation(dateValue) {
  const date = new Date(`${dateValue}T12:00:00`);
  const yearElement = yearStemElements[date.getFullYear() % 10];
  const seasonElement = seasonalElements[date.getMonth()];
  return yearElement === seasonElement ? supportCycle[yearElement] : seasonElement;
}

function mod(number, divisor) {
  return ((number % divisor) + divisor) % divisor;
}

function getPillar(stemIndex, branchIndex) {
  return {
    label: `${heavenlyStems[stemIndex]}${earthlyBranches[branchIndex]}`,
    stem: heavenlyStems[stemIndex],
    branch: earthlyBranches[branchIndex],
    stemElement: stemElements[stemIndex],
    branchElement: branchElements[branchIndex]
  };
}

function getHourBranchIndex(timeValue) {
  if (timeValue === "unknown") return null;
  const [hourText, minuteText] = timeValue.split(":");
  const hour = Number(hourText);
  const minute = Number(minuteText);
  const decimalHour = hour + minute / 60;
  return Math.floor(mod(decimalHour + 1, 24) / 2);
}

function getStemElement(stem) {
  return stemElements[heavenlyStems.indexOf(stem)];
}

function getStemPolarity(stem) {
  const index = heavenlyStems.indexOf(stem);
  return index % 2 === 0 ? "yang" : "yin";
}

function getTenGod(dayStem, targetStem) {
  const dayElement = getStemElement(dayStem);
  const targetElement = getStemElement(targetStem);
  const samePolarity = getStemPolarity(dayStem) === getStemPolarity(targetStem);
  if (!dayElement || !targetElement) return null;
  if (dayElement === targetElement) return samePolarity ? "\u6bd4\u80a9" : "\u52ab\u8d22";
  if (supportCycle[dayElement] === targetElement) return samePolarity ? "\u98df\u795e" : "\u4f24\u5b98";
  if (supportCycle[targetElement] === dayElement) return samePolarity ? "\u504f\u5370" : "\u6b63\u5370";
  if (controlCycle[dayElement] === targetElement) return samePolarity ? "\u504f\u8d22" : "\u6b63\u8d22";
  if (controlCycle[targetElement] === dayElement) return samePolarity ? "\u4e03\u6740" : "\u6b63\u5b98";
  return null;
}

function buildElementCounts(pillars) {
  const counts = { Wood: 0, Fire: 0, Earth: 0, Metal: 0, Water: 0 };
  Object.values(pillars).forEach((pillar) => {
    counts[pillar.stemElement] += 1;
    counts[pillar.branchElement] += 1;
  });
  return counts;
}

function buildTenGodCounts(pillars) {
  const counts = tenGodOrder.reduce((memo, god) => ({ ...memo, [god]: 0 }), {});
  const dayStem = pillars.day.stem;
  const weightedStems = [];
  ["year", "month", "hour"].forEach((key) => {
    if (pillars[key]?.stem) weightedStems.push({ stem: pillars[key].stem, weight: 1 });
  });
  Object.values(pillars).forEach((pillar) => {
    const hiddenStems = branchHiddenStems[pillar.branch] || [];
    hiddenStems.forEach((stem, index) => {
      weightedStems.push({ stem, weight: index === 0 ? 1 : index === 1 ? 0.5 : 0.25 });
    });
  });
  weightedStems.forEach(({ stem, weight }) => {
    const god = getTenGod(dayStem, stem);
    if (god) counts[god] += weight;
  });
  return counts;
}

function getPatternReading(bazi) {
  const monthMainStem = branchHiddenStems[bazi.pillars.month.branch]?.[0] || bazi.pillars.month.stem;
  const monthGod = getTenGod(bazi.pillars.day.stem, monthMainStem);
  const patternName = {
    "\u6bd4\u80a9": "\u6bd4\u80a9\u683c / Peer pattern",
    "\u52ab\u8d22": "\u52ab\u8d22\u683c / Rob-wealth pattern",
    "\u98df\u795e": "\u98df\u795e\u683c / Output pattern",
    "\u4f24\u5b98": "\u4f24\u5b98\u683c / Expressive pattern",
    "\u6b63\u8d22": "\u6b63\u8d22\u683c / Direct-wealth pattern",
    "\u504f\u8d22": "\u504f\u8d22\u683c / Indirect-wealth pattern",
    "\u6b63\u5b98": "\u6b63\u5b98\u683c / Officer pattern",
    "\u4e03\u6740": "\u4e03\u6740\u683c / Seven-killings pattern",
    "\u6b63\u5370": "\u6b63\u5370\u683c / Resource pattern",
    "\u504f\u5370": "\u504f\u5370\u683c / Indirect-resource pattern"
  }[monthGod] || "Mixed pattern";
  const focus = tenGodInsights[monthGod] || "a mixed structure that needs balance before emphasis";
  return `Month command points to ${patternName}. This suggests the chart is organized around ${focus}; the jewellery recommendation should support rhythm and balance rather than make a fixed prediction.`;
}

function renderRatioBars(container, values, labels, order) {
  if (!container) return;
  container.innerHTML = "";
  const total = order.reduce((sum, key) => sum + (values[key] || 0), 0) || 1;
  order.forEach((key) => {
    const percent = Math.round(((values[key] || 0) / total) * 100);
    const row = document.createElement("div");
    row.className = "ratio-row";
    const label = document.createElement("span");
    label.className = "ratio-label";
    label.textContent = labels[key] || key;
    const track = document.createElement("span");
    track.className = "ratio-track";
    const fill = document.createElement("span");
    fill.className = "ratio-fill";
    fill.style.width = `${percent}%`;
    const value = document.createElement("span");
    value.className = "ratio-value";
    value.textContent = `${percent}%`;
    track.append(fill);
    row.append(label, track, value);
    container.append(row);
  });
}

function renderElementMeanings(container) {
  if (!container) return;
  container.innerHTML = "";
  elementOrder.forEach((element) => {
    const row = document.createElement("div");
    row.className = "element-meaning";
    const label = document.createElement("b");
    label.textContent = elementMeanings[element].label;
    const meaning = document.createElement("span");
    meaning.textContent = elementMeanings[element].meaning;
    row.append(label, meaning);
    container.append(row);
  });
}

function getTenGodSummary(counts) {
  const top = tenGodOrder
    .filter((god) => counts[god] > 0)
    .sort((a, b) => counts[b] - counts[a])
    .slice(0, 2);
  if (!top.length) return "The Ten Gods distribution is light because the birth hour is unknown; add birth hour for a fuller reading.";
  const summary = top.map((god) => `${tenGodLabels[god]} points to ${tenGodInsights[god]}`).join("; ");
  return `Dominant Ten Gods: ${summary}. Read this as temperament and decision style, not as a fixed fate.`;
}

function getTopKeys(values, limit = 2) {
  return Object.keys(values)
    .filter((key) => values[key] > 0)
    .sort((a, b) => values[b] - values[a])
    .slice(0, limit);
}

function getLowestKeys(values, limit = 2) {
  return Object.keys(values)
    .sort((a, b) => (values[a] || 0) - (values[b] || 0))
    .slice(0, limit);
}

function getChartStrengthSummary(bazi) {
  const topElements = getTopKeys(bazi.elementCounts, 2);
  const lowElements = getLowestKeys(bazi.elementCounts, 2);
  const topGod = getTopKeys(bazi.tenGodCounts, 1)[0];
  const advantage = topGod ? tenGodInsights[topGod] : `${elementNames[topElements[0]]} steadiness`;
  return `Strength: the chart is naturally good at ${advantage}. Watchpoint: ${lowElements.map((element) => elementNames[element]).join(" and ")} are quieter, so the person may need more conscious balance in those areas.`;
}

function getElementByControlTarget(targetElement) {
  return Object.keys(controlCycle).find((element) => controlCycle[element] === targetElement);
}

function getDetailedBirthReading(bazi, recommendedElement) {
  const dayElement = bazi.pillars.day.stemElement;
  const monthElement = bazi.pillars.month.branchElement;
  const topElements = getTopKeys(bazi.elementCounts, 2);
  const lowElements = elementOrder
    .filter((element) => (bazi.elementCounts[element] || 0) === 0)
    .concat(elementOrder.filter((element) => (bazi.elementCounts[element] || 0) === 1))
    .slice(0, 2);
  const topGods = getTopKeys(bazi.tenGodCounts, 2);
  const wealthElement = controlCycle[dayElement];
  const authorityElement = getElementByControlTarget(dayElement);
  const outputElement = supportCycle[dayElement];
  const resourceElement = getElementByControlTarget(dayElement) ? supportCycle[getElementByControlTarget(dayElement)] : monthElement;
  const patternText = getPatternReading(bazi);
  const topGodText = topGods.length
    ? topGods.map((god) => `${tenGodLabels[god]} (${tenGodInsights[god]})`).join("; ")
    : "Ten Gods are less defined when the birth hour is unknown.";
  const lowText = lowElements.length ? lowElements.map((element) => elementNames[element]).join(" and ") : "no single missing element";

  return {
    personality: `The Day Master is ${bazi.pillars.day.label}, carried by ${elementNames[dayElement]}. This is the core self: how the person restores energy, makes decisions and protects personal standards. The visible chart is led by ${topElements.map((element) => elementNames[element]).join(" and ")}, so the self-expression should be read through that elemental atmosphere rather than through the day pillar alone.`,
    money: `The Month pillar ${bazi.pillars.month.label} holds the seasonal command, with ${elementNames[monthElement]} setting the strongest environmental qi. Month command shows the world the person was born into: pressure, resources, timing and social rhythm. When the month element supports the Day Master, life tends to feel resourced; when it controls or drains it, discipline and recovery become central.`,
    love: `${patternText} The most visible Ten Gods are ${topGodText}. Together they describe the main operating style of the chart: how desire, responsibility, creativity, resources and pressure move through the person before any jewellery recommendation is made.`,
    wealth: `For this Day Master, the wealth star is connected with ${elementNames[wealthElement]}, while authority and career pressure are connected with ${elementNames[authorityElement]}. If these appear strongly, money and work respond to structure, commitments and measurable value. If they are quieter, wealth is built better through the recommended balancing element, ${elementNames[recommendedElement]}, rather than force or over-extension.`,
    career: `Relationship tone is read from the balance between self-star, wealth-star, authority-star and expression-star. Here, ${topGodText} suggests that closeness works best when the person is not rushed into a role too quickly. Clear boundaries, sincere language and consistent action matter more than dramatic intensity.`,
    health: `Health rhythm is read through elemental excess and absence. The chart currently emphasizes ${topElements.map((element) => elementNames[element]).join(" and ")}; the quieter area is ${lowText}. This points to a need for balanced routine: sleep, digestion, circulation, hydration and stress release should be adjusted according to the elements that are either too loud or too quiet.`
  };
}

function getCoreBazi(dateValue, timeValue) {
  if (typeof Solar !== "undefined") {
    const [year, month, day] = dateValue.split("-").map(Number);
    const hour = timeValue === "unknown" ? 12 : Number(timeValue.split(":")[0]);
    const lunar = Solar.fromYmdHms(year, month, day, hour, 0, 0).getLunar();
    const eightChar = lunar.getEightChar();
    const pillars = {
      year: {
        label: `${eightChar.getYearGan()}${eightChar.getYearZhi()}`,
        stem: eightChar.getYearGan(),
        branch: eightChar.getYearZhi(),
        stemElement: stemElements[heavenlyStems.indexOf(eightChar.getYearGan())],
        branchElement: branchElements[earthlyBranches.indexOf(eightChar.getYearZhi())]
      },
      month: {
        label: `${eightChar.getMonthGan()}${eightChar.getMonthZhi()}`,
        stem: eightChar.getMonthGan(),
        branch: eightChar.getMonthZhi(),
        stemElement: stemElements[heavenlyStems.indexOf(eightChar.getMonthGan())],
        branchElement: branchElements[earthlyBranches.indexOf(eightChar.getMonthZhi())]
      },
      day: {
        label: `${eightChar.getDayGan()}${eightChar.getDayZhi()}`,
        stem: eightChar.getDayGan(),
        branch: eightChar.getDayZhi(),
        stemElement: stemElements[heavenlyStems.indexOf(eightChar.getDayGan())],
        branchElement: branchElements[earthlyBranches.indexOf(eightChar.getDayZhi())]
      }
    };
    if (timeValue !== "unknown") {
      pillars.hour = {
        label: `${eightChar.getTimeGan()}${eightChar.getTimeZhi()}`,
        stem: eightChar.getTimeGan(),
        branch: eightChar.getTimeZhi(),
        stemElement: stemElements[heavenlyStems.indexOf(eightChar.getTimeGan())],
        branchElement: branchElements[earthlyBranches.indexOf(eightChar.getTimeZhi())]
      };
    }
    const counts = buildElementCounts(pillars);
    const dominant = Object.keys(counts).sort((a, b) => counts[b] - counts[a])[0];
    return { pillars, dominant, elementCounts: counts, tenGodCounts: buildTenGodCounts(pillars) };
  }

  const date = new Date(`${dateValue}T12:00:00`);
  const year = date.getFullYear();
  const month = date.getMonth();
  const day = date.getDate();
  const baziYear = month === 0 || (month === 1 && day < 4) ? year - 1 : year;
  const yearCycleIndex = mod(baziYear - 4, 60);
  const yearStemIndex = yearCycleIndex % 10;
  const yearBranchIndex = yearCycleIndex % 12;
  const monthBranchIndex = monthBranchByGregorianMonth[month];
  const firstMonthStemByYearStem = [2, 4, 6, 8, 0, 2, 4, 6, 8, 0];
  const monthStemIndex = mod(firstMonthStemByYearStem[yearStemIndex] + monthBranchIndex - 2, 10);
  const dayOffset = Math.floor((Date.UTC(year, month, day) - Date.UTC(1984, 1, 2)) / 86400000);
  const dayCycleIndex = mod(dayOffset, 60);
  const dayStemIndex = dayCycleIndex % 10;
  const hourBranchIndex = getHourBranchIndex(timeValue);
  const pillars = {
    year: getPillar(yearStemIndex, yearBranchIndex),
    month: getPillar(monthStemIndex, monthBranchIndex),
    day: getPillar(dayStemIndex, dayCycleIndex % 12)
  };
  if (hourBranchIndex !== null) {
    const hourStemIndex = mod((dayStemIndex % 5) * 2 + hourBranchIndex, 10);
    pillars.hour = getPillar(hourStemIndex, hourBranchIndex);
  }
  const counts = buildElementCounts(pillars);
  const dominant = Object.keys(counts).sort((a, b) => counts[b] - counts[a])[0];
  return { pillars, dominant, elementCounts: counts, tenGodCounts: buildTenGodCounts(pillars) };
}

const countrySelect = document.querySelector("#birth-country");
const regionSelect = document.querySelector("#birth-region");
const startReadingButton = document.querySelector("#start-reading");
const finderCard = document.querySelector("#finder-card");
let locationRegions = birthRegions;

function populateCountries(countryList = countries) {
  if (!countrySelect) return;
  countrySelect.innerHTML = '<option value="">Select country</option>';
  countryList.forEach((country) => {
    const option = document.createElement("option");
    option.value = country;
    option.textContent = country;
    countrySelect.appendChild(option);
  });
}

function updateBirthRegions() {
  if (!countrySelect || !regionSelect) return;
  const country = countrySelect.value;
  const regions = locationRegions[country] || [];
  regionSelect.innerHTML = "";
  const placeholder = document.createElement("option");
  placeholder.value = "";
  placeholder.textContent = country ? "Select province / state" : "Select country first";
  regionSelect.appendChild(placeholder);
  const availableRegions = regions.length ? regions : ["Region not listed / not specified"];
  availableRegions.forEach((region) => {
    const option = document.createElement("option");
    option.value = region;
    option.textContent = region;
    regionSelect.appendChild(option);
  });
  regionSelect.disabled = !country;
}

async function loadGlobalRegions() {
  if (!countrySelect) return;
  populateCountries(countries);
  try {
    const response = await fetch("https://countriesnow.space/api/v0.1/countries/states");
    if (!response.ok) throw new Error("Location service unavailable");
    const payload = await response.json();
    const remoteRegions = {};
    payload.data.forEach((country) => {
      const regionNames = (country.states || [])
        .map((state) => state.name)
        .filter(Boolean)
        .sort((a, b) => a.localeCompare(b));
      remoteRegions[country.name] = regionNames.length ? regionNames : ["Region not listed / not specified"];
    });
    locationRegions = { ...birthRegions, ...remoteRegions };
    populateCountries(Object.keys(locationRegions).sort((a, b) => a.localeCompare(b)));
  } catch (error) {
    locationRegions = birthRegions;
    populateCountries(countries);
  }
}

loadGlobalRegions();
if (countrySelect) countrySelect.addEventListener("change", updateBirthRegions);
if (startReadingButton && finderCard) {
  startReadingButton.addEventListener("click", () => {
    finderCard.hidden = false;
    startReadingButton.hidden = true;
    startReadingButton.setAttribute("aria-expanded", "true");
    finderCard.scrollIntoView({ behavior: "smooth", block: "start" });
  });
}

const elementForm = document.querySelector("#element-form");
if (elementForm) elementForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const formData = new FormData(event.currentTarget);
  const birthYear = String(formData.get("birthYear") || "").trim();
  const birthMonth = String(formData.get("birthMonth") || "").trim();
  const birthDay = String(formData.get("birthDay") || "").trim();
  const birthtime = formData.get("birthtime");
  const birthCountry = formData.get("birthCountry");
  const birthRegion = formData.get("birthRegion");
  if (!birthYear || !birthMonth || !birthDay || !birthtime || !birthCountry || !birthRegion) return;
  const birthday = `${birthYear.padStart(4, "0")}-${birthMonth.padStart(2, "0")}-${birthDay.padStart(2, "0")}`;
  const birthplace = `${birthRegion}, ${birthCountry}`;

  const bazi = getCoreBazi(birthday, birthtime);
  const element = supportCycle[bazi.dominant];
  const profile = profiles[element];
  const detailedReading = getDetailedBirthReading(bazi, element);
  document.querySelector("#result-kicker").textContent = `Core BaZi reading / ${elementNames[element]} recommendation`;
  document.querySelector("#result-title").textContent = profile.title;
  document.querySelector("#result-copy").textContent = `Your core BaZi shows a ${elementNames[bazi.dominant]} dominant note. The jewellery direction below balances that reading with a ${elementNames[element]} composition.`;
  document.querySelector("#bazi-year").textContent = bazi.pillars.year.label;
  document.querySelector("#bazi-month").textContent = bazi.pillars.month.label;
  document.querySelector("#bazi-day").textContent = bazi.pillars.day.label;
  document.querySelector("#bazi-hour").textContent = bazi.pillars.hour ? bazi.pillars.hour.label : "Unknown";
  document.querySelector("#bazi-dominant").textContent = elementNames[bazi.dominant];
  const timeNote = birthtime === "unknown" ? "unknown birth hour" : birthtime;
  document.querySelector("#bazi-note").textContent = `Calculated from ${birthday}, ${timeNote}, ${birthplace}. Simplified BaZi for jewellery guidance; location is displayed for context and not converted to true solar time.`;
  document.querySelector("#bazi-pattern").textContent = getPatternReading(bazi);
  document.querySelector("#element-cycle-copy").textContent = `${elementNames[bazi.dominant]} is the strongest visible note. In the generating cycle it nourishes ${elementNames[supportCycle[bazi.dominant]]}; in the controlling cycle it regulates ${elementNames[controlCycle[bazi.dominant]]}. The recommended ${elementNames[element]} direction is chosen to soften dominance and give the bracelet a more balanced symbolic composition.`;
  renderRatioBars(document.querySelector("#element-bars"), bazi.elementCounts, elementNames, elementOrder);
  renderElementMeanings(document.querySelector("#element-meanings"));
  document.querySelector("#bazi-strength-summary").textContent = getChartStrengthSummary(bazi);
  renderRatioBars(document.querySelector("#ten-god-bars"), bazi.tenGodCounts, tenGodLabels, tenGodOrder);
  document.querySelector("#ten-god-copy").textContent = getTenGodSummary(bazi.tenGodCounts);
  document.querySelector("#bazi-personality").textContent = detailedReading.personality;
  document.querySelector("#bazi-money").textContent = detailedReading.money;
  document.querySelector("#bazi-love").textContent = detailedReading.love;
  document.querySelector("#bazi-wealth").textContent = detailedReading.wealth;
  document.querySelector("#bazi-career").textContent = detailedReading.career;
  document.querySelector("#bazi-health").textContent = detailedReading.health;
  document.querySelector("#result-materials").textContent = profile.materials;
  document.querySelector("#result-visual").className = `product-visual ${profile.className}`;
  const resultProductLink = document.querySelector("#result-product-link");
  if (resultProductLink) resultProductLink.href = `product.html?product=${profile.productSlug}`;
  document.querySelector("#result").hidden = false;
  document.querySelector("#result").scrollIntoView({ behavior: "smooth", block: "nearest" });
});

const shopFilter = document.querySelector(".shop-filter");
const shopProducts = [...document.querySelectorAll(".shop-product")];
const productCount = document.querySelector("#product-count");
const emptyResults = document.querySelector("#empty-results");
const clearFilters = document.querySelector("#clear-filters");

function getSelectedFilters() {
  if (!shopFilter) return {};
  return [...shopFilter.querySelectorAll("input:checked")].reduce((filters, input) => {
    if (!filters[input.name]) filters[input.name] = [];
    filters[input.name].push(input.value);
    return filters;
  }, {});
}

function productMatchesFilters(product, filters) {
  return Object.entries(filters).every(([name, values]) => {
    if (!values.length) return true;
    const productValues = (product.dataset[name] || "").split(" ");
    return values.some((value) => productValues.includes(value));
  });
}

function updateShopProducts() {
  if (!shopProducts.length) return;
  const filters = getSelectedFilters();
  let visibleCount = 0;
  shopProducts.forEach((product) => {
    const isVisible = productMatchesFilters(product, filters);
    product.hidden = !isVisible;
    if (isVisible) visibleCount += 1;
  });
  if (productCount) productCount.textContent = String(visibleCount);
  if (emptyResults) emptyResults.hidden = visibleCount !== 0;
}

if (shopFilter) {
  shopFilter.addEventListener("change", updateShopProducts);
  if (clearFilters) clearFilters.addEventListener("click", () => {
    shopFilter.querySelectorAll("input:checked").forEach((input) => {
      input.checked = false;
    });
    updateShopProducts();
  });
  updateShopProducts();
}

const productPage = document.querySelector(".product-page");
if (productPage) {
  const params = new URLSearchParams(window.location.search);
  const slug = params.get("product") || "green-tara-turquoise-stack";
  const product = productCatalog[slug] || productCatalog["green-tara-turquoise-stack"];
  document.title = `${product.name} | Lhamo Atelier`;
  document.querySelector("#product-breadcrumb").textContent = product.name;
  document.querySelector("#product-image").src = product.image;
  document.querySelector("#product-image").alt = product.alt;
  document.querySelector("#product-badge").textContent = product.badge;
  document.querySelector("#product-name").textContent = product.name;
  document.querySelector("#product-price").textContent = product.price;
  document.querySelector("#product-story").textContent = product.story;
  document.querySelector("#product-element").textContent = product.element;
  document.querySelector("#product-materials").textContent = product.materials;
  document.querySelector("#product-intention").textContent = product.intention;
  document.querySelector("#product-fit").textContent = product.fit;
  document.querySelector("#product-care").textContent = product.care;
  document.querySelector("#product-shipping").textContent = product.shipping;
}

const gallery = document.querySelector("#hero-gallery");
const slides = [...document.querySelectorAll(".hero-slide")];
const dots = [...document.querySelectorAll(".gallery-dots button")];
let activeSlide = 0;
let galleryTimer;

function showSlide(index) {
  if (!slides.length) return;
  activeSlide = (index + slides.length) % slides.length;
  slides.forEach((slide, slideIndex) => {
    const isActive = slideIndex === activeSlide;
    slide.classList.toggle("is-active", isActive);
    slide.setAttribute("aria-hidden", String(!isActive));
    dots[slideIndex].classList.toggle("is-active", isActive);
    dots[slideIndex].setAttribute("aria-current", String(isActive));
  });
}

function restartGalleryTimer() {
  window.clearInterval(galleryTimer);
  if (!slides.length) return;
  galleryTimer = window.setInterval(() => showSlide(activeSlide + 1), 7000);
}

if (gallery) {
  gallery.addEventListener("mouseenter", () => window.clearInterval(galleryTimer));
  gallery.addEventListener("mouseleave", restartGalleryTimer);
}

dots.forEach((dot, index) => {
  dot.addEventListener("click", () => {
    showSlide(index);
    restartGalleryTimer();
  });
});

restartGalleryTimer();

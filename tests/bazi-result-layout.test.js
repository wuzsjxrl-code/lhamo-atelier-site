const assert = require("assert");
const fs = require("fs");
const path = require("path");

const root = path.resolve(__dirname, "..");
const html = fs.readFileSync(path.join(root, "bazi-reading.html"), "utf8");
const script = fs.readFileSync(path.join(root, "script.js"), "utf8");

const pillarsIndex = html.indexOf('class="bazi-pillars"');
const panelsIndex = html.indexOf('id="god-panels"');

assert(pillarsIndex !== -1, "BaZi pillars section should exist");
assert(panelsIndex !== -1, "Useful God panel section should exist");
assert(panelsIndex > pillarsIndex, "Useful God panels should render below the BaZi pillars");
assert(
  script.includes('renderUsefulGodIntro(document.querySelector("#god-panels"), bazi)'),
  "Useful God panels should target the lower panel section"
);
assert(!script.includes('createGodPanel("ji"'), "Unfavourable God panel should not be rendered");

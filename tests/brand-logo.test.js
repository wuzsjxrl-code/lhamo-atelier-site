const assert = require("assert");
const fs = require("fs");
const path = require("path");

const root = path.resolve(__dirname, "..");
const htmlFiles = ["index.html", "bazi-reading.html", "shop-all.html", "product.html", "policies.html"];

for (const file of htmlFiles) {
  const html = fs.readFileSync(path.join(root, file), "utf8");
  assert(!html.includes("Lhamo Atelier"), `${file} should not contain the old brand name`);
  assert(html.includes("Wuora"), `${file} should contain the Wuora brand name`);
  assert(html.includes('class="brand-logo"'), `${file} should include the brand logo before the name`);
  assert(html.includes('assets/wuora-logo.jpg'), `${file} should reference the Wuora logo asset`);
}

const script = fs.readFileSync(path.join(root, "script.js"), "utf8");
assert(!script.includes("Lhamo Atelier"), "script.js should not use the old brand name in dynamic titles");
assert(script.includes("Wuora"), "script.js should use Wuora in dynamic titles");

assert(fs.existsSync(path.join(root, "assets", "wuora-logo.jpg")), "Wuora logo asset should exist");

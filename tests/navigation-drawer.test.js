const assert = require("assert");
const fs = require("fs");
const path = require("path");

const root = path.resolve(__dirname, "..");
const htmlFiles = ["index.html", "bazi-reading.html", "shop-all.html", "product.html", "policies.html"];
const drawerLabels = ["Home", "Collections", "Five Element Finder", "About", "Contact", "Account"];

for (const file of htmlFiles) {
  const html = fs.readFileSync(path.join(root, file), "utf8");
  assert(html.includes('class="menu-toggle"'), `${file} should include the hamburger menu button`);
  assert(html.includes('aria-label="Open navigation menu"'), `${file} should label the hamburger button`);
  assert(html.includes('class="brand brand-centered"'), `${file} should center the WUORA brand`);
  assert(html.includes('class="header-actions"'), `${file} should include the right-side action links`);
  assert(html.includes(">Search<"), `${file} should include Search in the header`);
  assert(html.includes(">Wishlist<"), `${file} should include Wishlist in the header`);
  assert(html.includes(">Bag<"), `${file} should include Bag in the header`);
  assert(html.includes('class="nav-drawer"'), `${file} should include the navigation drawer`);
  assert(html.includes('class="drawer-overlay"'), `${file} should include a drawer overlay`);
  for (const label of drawerLabels) {
    assert(html.includes(`>${label}<`), `${file} should include drawer link ${label}`);
  }
}

const script = fs.readFileSync(path.join(root, "script.js"), "utf8");
assert(script.includes("setupNavigationDrawer"), "script.js should initialize drawer behavior");
assert(script.includes("is-drawer-open"), "script.js should toggle the drawer-open state");
assert(script.includes("Escape"), "script.js should close the drawer with Escape");

const styles = fs.readFileSync(path.join(root, "styles.css"), "utf8");
assert(styles.includes(".nav-drawer"), "styles.css should style the navigation drawer");
assert(styles.includes("transform: translateX(-100%)"), "drawer should start off-screen");
assert(styles.includes("transition:"), "drawer and overlay should animate");

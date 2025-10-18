const fs = require("fs");
const path = require("path");

const ROOT = __dirname;
const corePath = path.join(ROOT, "core-principles.json");
const templatesDir = path.join(ROOT, "templates");

function readJSON(p) {
  return JSON.parse(fs.readFileSync(p, "utf8"));
}

function writeJSON(p, obj) {
  fs.writeFileSync(p, JSON.stringify(obj, null, 2));
}

(function build() {
  const core = readJSON(corePath);
  const files = fs.readdirSync(templatesDir).filter(f => f.endsWith(".json"));

  for (const file of files) {
    const name = path.basename(file, ".json"); // ex.: backend
    const template = readJSON(path.join(templatesDir, file));
    const agent = { ...core, ...template }; // merge: core → sobrescrito pelo template específico
    const out = path.join(ROOT, `${name}-agent.json`);
    writeJSON(out, agent);
    console.log(`✅ built ${name}-agent.json`);
  }
})();

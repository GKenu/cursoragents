// scripts/collect-metrics.mjs
import fs from "fs";
import path from "path";

const root = process.cwd();
const startMs = Number(process.env.START_MS || 0);
const now = Date.now();
const durationSec = startMs ? Math.round((now - startMs) / 1000) : null;

const sha = (process.env.GITHUB_SHA || "").slice(0, 7);
const branch = process.env.GITHUB_REF_NAME || process.env.GITHUB_HEAD_REF || "";
const author = process.env.GITHUB_ACTOR || "";
const date = new Date().toISOString().slice(0, 10);

function readJsonIf(p) {
  try {
    return JSON.parse(fs.readFileSync(p, "utf8"));
  } catch {
    return null;
  }
}

const cov = readJsonIf(path.join(root, "coverage", "coverage-summary.json"));
const linesPct = cov?.total?.lines?.pct ?? null;
const stmtsPct = cov?.total?.statements?.pct ?? null;

const entry = {
  timestamp: new Date().toISOString(),
  date,
  sha,
  branch,
  author,
  durationSec,
  coverage: { lines: linesPct, statements: stmtsPct },
};

const metricsJsonPath = path.join(root, "metrics.json");
let data = [];
if (fs.existsSync(metricsJsonPath)) data = readJsonIf(metricsJsonPath) || [];
data.push(entry);
fs.writeFileSync(metricsJsonPath, JSON.stringify(data, null, 2));

const mdPath = path.join(root, "METRICS.md");
if (!fs.existsSync(mdPath)) {
  fs.writeFileSync(
    mdPath,
    "# Build Metrics\n\n" +
      "| Date | Commit | Branch | Author | Duration(s) | Cov(lines%) | Cov(stmt%) |\n" +
      "|---|---|---|---|---:|---:|---:|\n"
  );
}
const covL = linesPct ?? "N/D";
const covS = stmtsPct ?? "N/D";
const dur = durationSec ?? "N/D";
fs.appendFileSync(
  mdPath,
  `| ${date} | ${sha} | ${branch} | ${author} | ${dur} | ${covL} | ${covS} |\n`
);
console.log("metrics: updated METRICS.md and metrics.json");

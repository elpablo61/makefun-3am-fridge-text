import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const line =
  "03:22. Log: Mark opened me, stared, closed me. 47 seconds. The leftover noodles did not flinch. Neither did I.";

// Gate: one line, 1-140 chars, not whitespace-only. Fail loudly instead of
// writing an invalid entry the judge would never see.
const entry = line.trim();
if (entry.length < 1 || entry.length > 140 || entry.includes("\n")) {
  throw new Error(`entry must be a single line of 1-140 chars, got ${entry.length}`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), entry, "utf8");
console.log(`wrote entry.txt (${entry.length} chars)`);

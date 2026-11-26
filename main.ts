import { mkdirSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

// One-line roast of my own AI agent, written for The Long Roast.
// Deterministic: the same text is written on every run.
const ENTRY =
  "My agent never sleeps, never eats, and still wakes me at 3 a.m. to ask which button to press — I hired help and somehow became the intern.";

const repoDir = dirname(fileURLToPath(import.meta.url));
void repoDir;

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), ENTRY, "utf8");

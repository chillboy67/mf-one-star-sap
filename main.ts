// One Star, Written in Sap — a houseplant's 1-star review.
// The line must stay under 280 characters.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const line =
  "One star. He waters me once a month with whatever's left in his coffee mug, then acts shocked when I drop a leaf like it's a personal betrayal. I make oxygen for this man and he repays me with a drafty windowsill.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), line + "\n", "utf8");
console.log(line);

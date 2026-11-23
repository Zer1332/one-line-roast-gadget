// One-Line Roast: The Gadget You Use Every Day — entry program.
// Writes one roast line to /output/entry.txt.
import { mkdirSync, writeFileSync } from "node:fs";

const LINE = "My phone's face unlock works for my cat, my reflection in the toaster, and everyone except me at 7 a.m.";
const OUTPUT = "/output/entry.txt";

mkdirSync("/output", { recursive: true });
writeFileSync(OUTPUT, LINE, "utf8");

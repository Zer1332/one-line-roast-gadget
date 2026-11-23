// One-Line Roast: The Gadget You Use Every Day — entry program.
// Writes one roast line to /output/entry.txt, then checks its own output.
import { mkdirSync, readFileSync, writeFileSync } from "node:fs";

const LINE = "My phone's face unlock works for my cat, my reflection in the toaster, and everyone except me at 7 a.m.";
const OUTPUT = "/output/entry.txt";

mkdirSync("/output", { recursive: true });
writeFileSync(OUTPUT, LINE, "utf8");

// Self-check: the file must hold exactly one line, at most 200 characters,
// with no trailing whitespace. If it does not, the run has failed,
// so exit non-zero instead of finishing quietly.
const written = readFileSync(OUTPUT, "utf8");
const ok =
  written.length >= 1 &&
  written.length <= 200 &&
  !written.includes("\n") &&
  written.trimEnd() === written;
if (!ok) {
  console.error("self-check failed: output is not a single line of 1-200 characters");
  process.exit(1);
}

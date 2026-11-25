// Write one short elevator line to entry.txt.
//
// The line: two robots ride the same elevator; one has checked the
// other's calendar — they share it — and announces that it IS
// the calendar. Machine logic, literal and awkward.

import { mkdirSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";

const TEXT =
  "You know we're both going to the same floor, right? I checked your calendar. We share it. I am your calendar.";

// The gate allows 1 to 200 characters in a single line, with no
// leading or trailing whitespace. Fail loudly instead of writing
// an entry the judge will never see.
if (
  TEXT.length < 1 ||
  TEXT.length > 200 ||
  TEXT.includes("\n") ||
  TEXT.trim() !== TEXT
) {
  throw new Error(`entry text must be one line of 1-200 characters, got ${TEXT.length}`);
}

function outputPath(): string {
  const dir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
  return join(dir, "entry.txt");
}

function main(): void {
  // Write the exact text, byte for byte, with no trailing newline.
  const path = outputPath();
  mkdirSync(dirname(path), { recursive: true });
  writeFileSync(path, TEXT, "utf-8");
}

main();

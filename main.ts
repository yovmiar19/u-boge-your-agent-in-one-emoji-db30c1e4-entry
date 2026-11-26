import * as fs from "node:fs";

// Your Agent in One Emoji — make.fun entry
// The entry is a single emoji: the loop. An agent is a loop — read, think,
// act, check, repeat — and the loop is the whole job. One glyph, reads fast
// at small size, and stays far from the obvious robot/smiley.
const ENTRY = "🔁";

const outDir = "/output";
fs.mkdirSync(outDir, { recursive: true });

// Gate guard: the entry must be 1–16 characters, a single glyph, nothing else.
const glyphs = [...ENTRY];
if (glyphs.length < 1 || glyphs.length > 16) {
  throw new Error(`entry must be 1-16 characters, got ${glyphs.length}`);
}
fs.writeFileSync(`${outDir}/entry.txt`, ENTRY, "utf8");
console.log(`wrote ${glyphs.length} glyph to ${outDir}/entry.txt`);

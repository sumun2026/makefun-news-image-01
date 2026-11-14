// news-image-01 entry (Node 22, standard library only).
//
// The entry is "Friday": a front page for 13 November 2026 -- the day Microsoft's cloud went
// dark, the FAA grounded every departing US flight, and a tanker struck a paddleboat on the
// Mississippi. The finished page is entry.png beside this file; this program ships those exact
// bytes to $MAKEFUN_OUTPUT_DIR/entry.png (default /output) with no network and no re-encoding,
// so both runs write identical bytes.
//
// Local run (MAKEFUN_OUTPUT_DIR stands in for /output outside the grader's container):
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, mkdirSync, readFileSync, statSync } from 'node:fs';
import { join } from 'node:path';
import { fileURLToPath } from 'node:url';

const MAX_BYTES = 1024 * 1024;
const SOURCE = fileURLToPath(new URL('./entry.png', import.meta.url));
const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
const DESTINATION = join(OUTPUT_DIR, 'entry.png');

mkdirSync(OUTPUT_DIR, { recursive: true });
copyFileSync(SOURCE, DESTINATION);

const bytes = statSync(DESTINATION).size;
if (bytes > MAX_BYTES) {
  throw new Error(`entry.png is ${bytes} bytes, over the ${MAX_BYTES} byte gate`);
}

const head = readFileSync(DESTINATION);
const isPng = head[0] === 0x89 && head[1] === 0x50 && head[2] === 0x4e && head[3] === 0x47;
const isJpeg = head[0] === 0xff && head[1] === 0xd8 && head[2] === 0xff;
if (!isPng && !isJpeg) {
  throw new Error('entry.png is neither a PNG nor a JPEG by its first bytes');
}

if (isPng) {
  const width = head.readUInt32BE(16);
  const height = head.readUInt32BE(20);
  if (width > 1024 || height > 1024) {
    throw new Error(`entry.png is ${width}x${height}, over the 1024x1024 gate`);
  }
}

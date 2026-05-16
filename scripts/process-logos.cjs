/* eslint-disable @typescript-eslint/no-require-imports */
/**
 * One-shot logo processor.
 *
 * Each input PNG ships with an opaque background (black or white).
 * For each one, produce a `-clear` variant where:
 *   - the background is fully transparent
 *   - non-background pixels keep their original RGB (real brand colours)
 *   - alpha is derived from the source pixel's distance-from-bg in luminance
 *
 * The corner pixel is sampled to detect background luminance. Works for
 * both light-bg (e.g. white) and dark-bg (e.g. black) source PNGs.
 */
const sharp = require("sharp");
const path = require("path");
const fs = require("fs");

const SOURCES = [
  "berkeley.png",
  "amazon.png",
  "ey-parthenon.png",
];

const LOGOS_DIR = path.resolve(__dirname, "..", "public", "logos");

function luminance(r, g, b) {
  return (0.2126 * r + 0.7152 * g + 0.0722 * b) / 255;
}

async function processOne(filename) {
  const inputPath = path.join(LOGOS_DIR, filename);
  const outputPath = path.join(
    LOGOS_DIR,
    filename.replace(/\.png$/i, "-clear.png")
  );

  const img = sharp(inputPath).ensureAlpha();
  const { data, info } = await img.raw().toBuffer({ resolveWithObject: true });
  const { width, height, channels } = info;

  // Sample the four corners to estimate background luminance robustly
  const corners = [
    [0, 0],
    [width - 1, 0],
    [0, height - 1],
    [width - 1, height - 1],
  ];
  const cornerLums = corners.map(([x, y]) => {
    const i = (y * width + x) * channels;
    return luminance(data[i], data[i + 1], data[i + 2]);
  });
  const bgLum = cornerLums.reduce((a, b) => a + b, 0) / cornerLums.length;
  const bgIsDark = bgLum < 0.5;

  const out = Buffer.alloc(width * height * 4);
  for (let i = 0, j = 0; i < data.length; i += channels, j += 4) {
    const r = data[i];
    const g = data[i + 1];
    const b = data[i + 2];
    const a = channels === 4 ? data[i + 3] : 255;

    const lum = luminance(r, g, b);
    // Distance from bg in [0..1]. For dark bg, brighter = more foreground.
    const dist = bgIsDark ? lum : 1 - lum;

    // Hard threshold so backgrounds become fully transparent and logo
    // content stays fully opaque. A small ramp preserves edge anti-aliasing.
    const LO = 0.06;
    const HI = 0.18;
    const t = Math.max(0, Math.min(1, (dist - LO) / (HI - LO)));
    const alpha = Math.round(t * (a / 255) * 255);

    // Keep original RGB so brand colours survive (orange Amazon smile,
    // yellow EY flash, blue Berkeley, etc.).
    out[j + 0] = r;
    out[j + 1] = g;
    out[j + 2] = b;
    out[j + 3] = alpha;
  }

  await sharp(out, {
    raw: { width, height, channels: 4 },
  })
    .png()
    .toFile(outputPath);

  console.log(
    `  -> ${path.basename(outputPath)}  (bg luminance ${bgLum.toFixed(2)}, ${
      bgIsDark ? "dark" : "light"
    })`
  );
}

async function main() {
  if (!fs.existsSync(LOGOS_DIR)) {
    throw new Error(`Logos dir not found: ${LOGOS_DIR}`);
  }
  console.log(`Processing logos in ${LOGOS_DIR}`);
  for (const f of SOURCES) {
    await processOne(f);
  }
  console.log("Done.");
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});

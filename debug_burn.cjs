const sharp = require('sharp');
const fs = require('fs');

const BG_LIGHT_MODE = 'public/email-signature/new/2/Sign_Dark.png';
const OUT_DEBUG = 'public/email-signature/Debug_Sign.png';

// Icons
const PIN_SVG = `<svg viewBox="0 0 24 24" width="24" height="24" xmlns="http://www.w3.org/2000/svg"><rect width="24" height="24" fill="red"/></svg>`; // Debug Red Box

// Original 750x300 coords
// Icons X: ~32px -> 32
// Text X: ~56px
// Row Ys: 156, 189, 222, 255

const ICON_X = 32;
const TEXT_X = 56;
const ROWS_Y = [156, 189, 222, 255];

function createTextSVG(text) {
    // Highly simplified SVG text
    return `
    <svg width="500" height="40">
        <text x="0" y="30" font-family="sans-serif" font-size="24" fill="red">${text}</text>
    </svg>
    `;
}

async function run() {
    if (!fs.existsSync(BG_LIGHT_MODE)) {
        console.error("Input missing");
        return;
    }

    // NO RESIZE - Strict Original Dimensions
    let pipeline = sharp(BG_LIGHT_MODE);
    const metadata = await pipeline.metadata();
    console.log("Input Dims:", metadata.width, metadata.height);

    const composites = [];
    
    // Debug Rect at Icon Pos
    composites.push({ input: Buffer.from(PIN_SVG), left: ICON_X, top: ROWS_Y[0] });

    // Debug Text
    composites.push({ input: Buffer.from(createTextSVG("TEST RENDER")), left: TEXT_X, top: ROWS_Y[0] });

    await pipeline.composite(composites).png().toFile(OUT_DEBUG);
    console.log("Created:", OUT_DEBUG);
}

run();

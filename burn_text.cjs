const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

// Paths
const BG_LIGHT_MODE = 'public/email-signature/new/2/Sign_Dark.png'; // Background for Light Mode (needs Dark Text)
const BG_DARK_MODE = 'public/email-signature/new/2/Sign_Light.png'; // Background for Dark Mode (needs White Text)

const OUT_LIGHT_MODE = 'public/email-signature/Final_Sign_LightMode.png';
const OUT_DARK_MODE = 'public/email-signature/Final_Sign_DarkMode.png';

// Icons (SVG strings) - user provided color #c79e7f (Gold)
const COLOR_GOLD = '#c79e7f';
const PIN_SVG = `<svg viewBox="0 0 24 24" width="24" height="24" xmlns="http://www.w3.org/2000/svg"><path fill="${COLOR_GOLD}" d="M12 2C7.86 2 4.5 5.36 4.5 9.5c0 5.25 6.5 12 7.04 12.56a.75.75 0 0 0 1.06 0C13 21.5 19.5 14.75 19.5 9.5 19.5 5.36 16.14 2 12 2Zm0 10.25a2.75 2.75 0 1 1 0-5.5 2.75 2.75 0 0 1 0 5.5Z"/></svg>`;
const MAIL_SVG = `<svg viewBox="0 0 24 24" width="24" height="24" xmlns="http://www.w3.org/2000/svg"><path fill="${COLOR_GOLD}" d="M3 6.75A2.75 2.75 0 0 1 5.75 4h12.5A2.75 2.75 0 0 1 21 6.75v10.5A2.75 2.75 0 0 1 18.25 20H5.75A2.75 2.75 0 0 1 3 17.25V6.75Zm2.21-.25 6.79 5.09L18.79 6.5H5.21Zm13.54 11.99a1.25 1.25 0 0 0 .75-1.14V8.48l-6.5 4.87a1.5 1.5 0 0 1-1.8 0L4.5 8.48v8.87c0 .46.26.88.67 1.09.19.1.4.15.63.15h12.5c.16 0 .31-.03.45-.1Z"/></svg>`;
const PHONE_SVG = `<svg viewBox="0 0 24 24" width="24" height="24" xmlns="http://www.w3.org/2000/svg"><path fill="${COLOR_GOLD}" d="M2.25 6.75c0-.97.78-1.75 1.75-1.75h2.06c.66 0 1.25.42 1.47 1.05l.74 2.2c.2.6.04 1.27-.42 1.7l-1.1 1.05a12.1 12.1 0 0 0 4.45 4.45l1.05-1.1c.43-.46 1.1-.62 1.7-.42l2.2.74c.63.22 1.05.81 1.05 1.47v2.06c0 .97-.78 1.75-1.75 1.75C8.12 20.25 2.25 14.38 2.25 6.75Z"/></svg>`;
const WEB_SVG = `<svg viewBox="0 0 24 24" width="24" height="24" xmlns="http://www.w3.org/2000/svg"><path fill="${COLOR_GOLD}" d="M12 2.25c5.38 0 9.75 4.37 9.75 9.75S17.38 21.75 12 21.75 2.25 17.38 2.25 12 6.62 2.25 12 2.25Zm6.92 8.25h-3.3a15.2 15.2 0 0 0-1.2-4.52 7.52 7.52 0 0 1 4.5 4.52Zm-6.92-5.5c.8 0 1.8 1.76 2.28 4.5h-4.56c.48-2.74 1.48-4.5 2.28-4.5Zm-6.92 5.5a7.52 7.52 0 0 1 4.5-4.52 15.2 15.2 0 0 0-1.2 4.52h-3.3Zm0 3h3.3c.2 1.65.68 3.2 1.2 4.52a7.52 7.52 0 0 1-4.5-4.52Zm6.92 5.5c-.8 0-1.8-1.76-2.28-4.5h4.56c-.48 2.74-1.48 4.5-2.28 4.5Zm2.42-0.98c.52-1.32 1-2.87 1.2-4.52h3.3a7.52 7.52 0 0 1-4.5 4.52Zm1.2-7.52h3.3a7.52 7.52 0 0 0-4.5-4.52c.52 1.32 1 2.87 1.2 4.52Z"/></svg>`;

// Text Content
const TXT_ADDR = "42 Brighton View Rd Fairfield, CT, 06824 USA";
const TXT_MAIL = "garrett@GKRHospitality.com";
const TXT_TEL = "+1-917-460-5793";
const TXT_WEB = "www.GKRHospitality.com";

// Coordinates (Targeting 600x300 image)
// Icons X: ~32px (5.2%)
// Text X: ~52px (Icon + margin)
// Row Ys: 156, 189, 222, 255 (Approx based on %: 52%, 63%, 74%, 85%)

const ICON_X = 32;
const TEXT_X = 56;
const ROWS_Y = [156, 189, 222, 255];

function createTextSVG(text, color, y) {
    // Basic sans-serif font, using SVG text
    return `
    <svg width="500" height="30">
        <text x="0" y="20" font-family="Arial, Helvetica, sans-serif" font-size="14" font-weight="500" fill="${color}">${text}</text>
    </svg>
    `;
}

async function processImage(inputPath, outputPath, textColor) {
    if (!fs.existsSync(inputPath)) {
        console.error("Input missing:", inputPath);
        return;
    }

    // Load background
    // We resize it to 600x300 explicitly to ensure coordinates match
    let pipeline = sharp(inputPath).resize(600, 300);

    const composites = [];

    // Add Icons
    composites.push({ input: Buffer.from(PIN_SVG), left: ICON_X, top: ROWS_Y[0] });
    composites.push({ input: Buffer.from(MAIL_SVG), left: ICON_X, top: ROWS_Y[1] });
    composites.push({ input: Buffer.from(PHONE_SVG), left: ICON_X, top: ROWS_Y[2] });
    composites.push({ input: Buffer.from(WEB_SVG), left: ICON_X, top: ROWS_Y[3] });

    // Add Text
    composites.push({ input: Buffer.from(createTextSVG(TXT_ADDR, textColor, ROWS_Y[0])), left: TEXT_X, top: ROWS_Y[0] - 5 });
    composites.push({ input: Buffer.from(createTextSVG(TXT_MAIL, textColor, ROWS_Y[1])), left: TEXT_X, top: ROWS_Y[1] - 5 });
    composites.push({ input: Buffer.from(createTextSVG(TXT_TEL, textColor, ROWS_Y[2])), left: TEXT_X, top: ROWS_Y[2] - 5 });
    composites.push({ input: Buffer.from(createTextSVG(TXT_WEB, textColor, ROWS_Y[3])), left: TEXT_X, top: ROWS_Y[3] - 5 });

    await pipeline.composite(composites).png().toFile(outputPath);
    console.log("Created:", outputPath);
}

async function run() {
    // Light Mode = Dark Text (#1e2a3a)
    await processImage(BG_LIGHT_MODE, OUT_LIGHT_MODE, '#1e2a3a');
    
    // Dark Mode = White Text (#ffffff)
    await processImage(BG_DARK_MODE, OUT_DARK_MODE, '#ffffff');
}

run();

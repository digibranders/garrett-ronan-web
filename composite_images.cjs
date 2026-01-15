const sharp = require('sharp');
const path = require('path');

const DIR = path.join(__dirname, 'public/email-signature');

const CASTLE_LIGHT = path.join(DIR, 'Castle Light.png');
const CASTLE_DARK = path.join(DIR, 'Castle Dark.png');
const MONOGRAM = path.join(DIR, 'Favicon Gold.png');

const OUT_LIGHT = path.join(DIR, 'Right_Composite_Light.png');
const OUT_DARK = path.join(DIR, 'Right_Composite_Dark.png');

// Signature is 300px high. Right column is roughly 300px wide.
// We will create a transparent canvas.
const WIDTH = 300;
const HEIGHT = 300;

async function createComposite(castlePath, outPath) {
    try {
        console.log(`Processing ${path.basename(castlePath)}...`);

        // 1. Prepare Castle
        // Resize castle to fit nicely. In the design, it looks like it sits at bottom right.
        // Let's assume we want it roughly 240px wide? 
        const castle = await sharp(castlePath)
            .resize({ width: 260, fit: 'inside' }) // Keep aspect ratio
            .toBuffer();

        // 2. Prepare Monogram
        // Resize to ~75px
        const monogram = await sharp(MONOGRAM)
            .resize({ width: 75 })
            .toBuffer();

        // 3. Composite
        await sharp({
            create: {
                width: WIDTH,
                height: HEIGHT,
                channels: 4,
                background: { r: 0, g: 0, b: 0, alpha: 0 }
            }
        })
        .composite([
            {
                input: castle,
                gravity: 'southeast', // Bottom-Right
                left: 40, // Offset from left (300 - 260 = 40) aligned right effectively
                top: 100 // Push it down a bit? Or just use gravity 'southeast'
            },
            // Actually, let's use explicit positioning for control
            {
                input: castle,
                gravity: 'southeast',
                // Adjust these if needed. gravity southeast puts it in bottom right corner.
            },
            {
                input: monogram,
                gravity: 'southeast',
                top: -10, // Slight padding from bottom?
                left: -10
            }
        ])
        .png()
        .toFile(outPath);

        console.log(`Created ${outPath}`);

    } catch (err) {
        console.error('Error:', err);
    }
}

async function run() {
    await createComposite(CASTLE_LIGHT, OUT_LIGHT);
    await createComposite(CASTLE_DARK, OUT_DARK);
}

run();

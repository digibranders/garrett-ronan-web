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
        // We will stick to simple absolute positioning to be safe.
        // Canvas is 300x300.
        
        // Castle: 260x260 (approx). Position at bottom right (40, 40) to (300, 300)? 
        // Actually let's just use gravity 'southeast' which is reliable.
        // Canvas 300x300
        // Castle width 260.
        // Monogram width 75.
        
        // We want them bottom-right aligned.
        // Castle max dimensions: 260x approx 220?
        // Let's get metadata to be sure, or just rely on 'southeast' gravity with the clean array below.
        
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
                gravity: 'southeast', 
                // No extra offsets, just jam it in the corner.
            },
            {
                input: monogram,
                gravity: 'southeast',
                // Move it slightly up and left from the corner so it's not touching the edge
                top: -10, 
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

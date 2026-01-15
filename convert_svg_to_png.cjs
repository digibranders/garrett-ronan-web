const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const inputDir = path.join(__dirname, 'public/email-signature');
const files = [
    'GR_Blue.svg',
    'GR_White.svg',
    'Castle Light.svg',
    'Castle Dark.svg',
    'Favicon Gold.svg'
];

async function convert() {
    console.log(`Searching for files in: ${inputDir}`);
    
    for (const file of files) {
        const inputPath = path.join(inputDir, file);
        const outputPath = path.join(inputDir, file.replace('.svg', '.png'));

        if (fs.existsSync(inputPath)) {
            try {
                console.log(`Converting ${file} to PNG...`);
                // Density 300 for high quality (clean outlines)
                // Resize isn't strictly necessary if SVG has dimensions, but ensures we get a good size.
                // However, 'sharp' rasterizes SVG. We'll use a good density.
                await sharp(inputPath, { density: 300 })
                    .png()
                    .toFile(outputPath);
                console.log(`Saved: ${outputPath}`);
            } catch (err) {
                console.error(`Error converting ${file}:`, err);
            }
        } else {
            console.warn(`File not found: ${inputPath}`);
        }
    }
}

convert();

const sharp = require('sharp');
const path = require('path');

const INPUT = '/Users/apple/.gemini/antigravity/brain/01875897-36da-47a6-a1a0-f76d21ee0236/uploaded_image_1768539465820.png';
const OUT_DIR = path.join(__dirname, 'public/sign');

const HEIGHT = 89;
const WIDTH = 80;

// Order assumptions based on visual inspection: Pin, Email, Phone, Globe
const ICONS = [
    { name: 'icon-gold-pin.png', top: 0 },
    { name: 'icon-gold-email.png', top: 89 },
    { name: 'icon-gold-phone.png', top: 178 },
    { name: 'icon-gold-web.png', top: 267 },
];

async function run() {
    try {
        const metadata = await sharp(INPUT).metadata();
        console.log('Image dimensions:', metadata.width, metadata.height);

        for (const icon of ICONS) {
            // Safety check for crop processing
            if (icon.top + HEIGHT <= metadata.height) {
                await sharp(INPUT)
                    .extract({ left: 0, top: icon.top, width: WIDTH, height: HEIGHT })
                    .toFile(path.join(OUT_DIR, icon.name));
                console.log(`Saved ${icon.name}`);
            } else {
                console.warn(`Skipping ${icon.name}: outside of image bounds.`);
            }
        }
    } catch (error) {
        console.error('Error processing images:', error);
        process.exit(1);
    }
}
run();

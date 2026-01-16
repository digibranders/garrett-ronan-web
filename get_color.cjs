const sharp = require('sharp');

const IMAGE_PATH = '/Users/apple/.gemini/antigravity/brain/01875897-36da-47a6-a1a0-f76d21ee0236/uploaded_image_1768539876770.png';

async function getColor() {
  try {
    const { data, info } = await sharp(IMAGE_PATH)
      .raw()
      .toBuffer({ resolveWithObject: true });

    // Sample the center pixel
    const pixelIdx = Math.floor(info.width * info.height / 2) * info.channels;
    const r = data[pixelIdx];
    const g = data[pixelIdx + 1];
    const b = data[pixelIdx + 2];

    const hex = '#' + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1).toUpperCase();
    console.log(`Color: rgb(${r}, ${g}, ${b}) -> ${hex}`);
  } catch (error) {
    console.error('Error:', error);
  }
}

getColor();

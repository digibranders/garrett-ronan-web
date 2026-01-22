import Replicate from "replicate";
import fs from "fs";
import path from "path";
import mime from "mime-types";
import 'dotenv/config'; // Loads .env file
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Configuration
const GALLERY_DIR = path.join(process.cwd(), "public/images/gallery");
// Real-ESRGAN model owner and name
const MODEL_OWNER = "nightmareai";
const MODEL_NAME = "real-esrgan";

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function main() {
  const token = process.env.REPLICATE_API_TOKEN;
  if (!token) {
    console.error("❌ Error: REPLICATE_API_TOKEN is missing. Please add it to your .env file.");
    console.error("Get your key here: https://replicate.com/account/api-tokens");
    process.exit(1);
  }

  const replicate = new Replicate({
    auth: token,
  });

  console.log("🔍 Fetching latest model version...");
  let modelVersion;
  try {
      const model = await replicate.models.get(MODEL_OWNER, MODEL_NAME);
      modelVersion = model.latest_version.id;
      console.log(`✅ Using model version: ${modelVersion}`);
  } catch (e) {
      console.error("❌ Failed to fetch model version:", e.message);
      process.exit(1);
  }

  console.log(`🔍 Scanning directory: ${GALLERY_DIR}`);
  const images = getAllImages(GALLERY_DIR);
  console.log(`found ${images.length} images.`);

  for (const [index, imagePath] of images.entries()) {
    const relativePath = path.relative(GALLERY_DIR, imagePath);
    console.log(`[${index + 1}/${images.length}] Processing: ${relativePath}`);

    try {
      const fileBuffer = fs.readFileSync(imagePath);
      
      const mimeType = mime.lookup(imagePath) || 'application/octet-stream';
      const dataUri = `data:${mimeType};base64,${fileBuffer.toString('base64')}`;

      // Run the model with the dynamic version
      const output = await replicate.run(`${MODEL_OWNER}/${MODEL_NAME}:${modelVersion}`, {
        input: {
          image: dataUri,
          scale: 4, // 4x upscaling
          face_enhance: true 
        }
      });

      const outputUrl = output;
      
      if (!outputUrl) {
          console.error(`   ⚠️ No output for ${relativePath}`);
          continue;
      }
      
      console.log(`   ✨ Upscaled! Downloading...`);
      
      const response = await fetch(outputUrl);
      const buffer = await response.arrayBuffer();
      fs.writeFileSync(imagePath, Buffer.from(buffer));
      
      console.log(`   ✅ Saved to ${relativePath}`);

    } catch (error) {
      console.error(`   ❌ Failed to upscale ${relativePath}:`, error.message);
      // If rate limited, maybe wait longer?
      if (error.message.includes("429")) {
          console.log("   ⏳ Hit rate limit. Waiting 20 seconds...");
          await sleep(20000);
      }
    }
    
    // Always wait 10 seconds between requests to avoid rate limits (6 req/min = 1 req every 10s)
    console.log("   💤 Waiting 10s to respect rate limits...");
    await sleep(10000);
  }
  
  console.log("🎉 All done!");
}

function getAllImages(dir, fileList = []) {
  const files = fs.readdirSync(dir);
  
  files.forEach(file => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    
    if (stat.isDirectory()) {
      getAllImages(filePath, fileList);
    } else {
      if (/\.(jpg|jpeg|png|webp)$/i.test(file)) {
        fileList.push(filePath);
      }
    }
  });
  
  return fileList;
}

main();

import { v2 as cloudinary } from "cloudinary";
import dotenv from "dotenv";
import { glob } from "glob";
import fs from "fs-extra";

dotenv.config();

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

const IMAGE_EXTENSIONS = ["png", "jpg", "jpeg", "webp", "gif", "svg"];

async function uploadImage(filePath) {
  try {
    const result = await cloudinary.uploader.upload(filePath, {
      folder: "vite-project",
    });

    console.log(`✅ Uploaded: ${filePath}`);

    return result.secure_url;
  } catch (error) {
    console.log(`❌ Failed: ${filePath}`);
    console.log(error.message);

    return null;
  }
}

async function replaceImagePaths(oldPath, newUrl) {
  const files = await glob("src/**/*.{js,jsx,ts,tsx}");

  for (const file of files) {
    let content = await fs.readFile(file, "utf8");

    const normalizedPath = oldPath.replace(/\\/g, "/");

    if (content.includes(normalizedPath)) {
      content = content.split(normalizedPath).join(newUrl);

      await fs.writeFile(file, content);

      console.log(`🔄 Updated: ${file}`);
    }
  }
}

async function processImages() {
  for (const ext of IMAGE_EXTENSIONS) {
    const files = await glob(`public/**/*.${ext}`);

    for (const file of files) {
      const uploadedUrl = await uploadImage(file);

      if (!uploadedUrl) continue;

      const publicPath = file.replace(/^public/, "");

      await replaceImagePaths(publicPath, uploadedUrl);
    }
  }

  console.log("🎉 ALL IMAGES REPLACED");
}

processImages();
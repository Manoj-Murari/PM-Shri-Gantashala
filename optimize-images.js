const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

// Directory containing original images
const inputDir = path.join(__dirname, 'public/images'); // Change this to your input directory
// Directory to save optimized webp images
const outputDir = path.join(__dirname, 'public/images/optimized'); // Change this to your output directory

// Ensure output directory exists
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

// Allowed extensions
const allowedExts = ['.jpg', '.jpeg', '.png', '.webp', '.tiff', '.gif'];

fs.readdir(inputDir, (err, files) => {
  if (err) {
    console.error('Could not list the directory.', err);
    process.exit(1);
  }

  files.forEach((file, index) => {
    const inputPath = path.join(inputDir, file);
    const ext = path.extname(file).toLowerCase();

    // Check if it's a file and has a valid extension
    if (fs.statSync(inputPath).isFile() && allowedExts.includes(ext)) {
      const fileNameWithoutExt = path.basename(file, ext);
      const outputPath = path.join(outputDir, `${fileNameWithoutExt}.webp`);

      // Using sharp to convert and optimize
      // quality: 80 is a good balance between size and quality.
      // lossless: false for lossy compression (reduces size more).
      sharp(inputPath)
        .webp({ quality: 80, effort: 6 }) // effort: 0-6 (higher = slower but smaller file)
        .toFile(outputPath)
        .then(info => {
          console.log(`Optimized: ${file} -> ${fileNameWithoutExt}.webp`);
          console.log(`Size: ${(info.size / 1024).toFixed(2)} KB`);
        })
        .catch(err => {
          console.error(`Error processing file ${file}:`, err);
        });
    }
  });
});

console.log('Image optimization started...');

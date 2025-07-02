#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

// Check if sharp is installed
function checkSharp() {
  try {
    require('sharp');
    return true;
  } catch (error) {
    return false;
  }
}

// Install sharp if not present
function installSharp() {
  console.log('Installing sharp for image optimization...');
  try {
    execSync('npm install sharp', { stdio: 'inherit' });
    return true;
  } catch (error) {
    console.error('Failed to install sharp:', error.message);
    return false;
  }
}

// Convert image to WebP
function convertToWebP(inputPath, outputPath, quality = 80) {
  try {
    const sharp = require('sharp');
    
    sharp(inputPath)
      .webp({ quality })
      .toFile(outputPath)
      .then(() => {
        const originalSize = fs.statSync(inputPath).size;
        const newSize = fs.statSync(outputPath).size;
        const savings = ((originalSize - newSize) / originalSize * 100).toFixed(1);
        
        console.log(`✅ Converted ${path.basename(inputPath)} to WebP`);
        console.log(`   Original: ${(originalSize / 1024).toFixed(1)}KB`);
        console.log(`   WebP: ${(newSize / 1024).toFixed(1)}KB`);
        console.log(`   Savings: ${savings}%`);
      })
      .catch(err => {
        console.error(`❌ Failed to convert ${inputPath}:`, err.message);
      });
  } catch (error) {
    console.error('Sharp not available:', error.message);
  }
}

// Main function
function main() {
  const assetsDir = path.join(__dirname, '..', 'src', 'assets');
  
  if (!fs.existsSync(assetsDir)) {
    console.error('Assets directory not found:', assetsDir);
    return;
  }
  
  if (!checkSharp()) {
    if (!installSharp()) {
      return;
    }
  }
  
  const imageExtensions = ['.jpg', '.jpeg', '.png'];
  const files = fs.readdirSync(assetsDir);
  
  console.log('🖼️  Starting image optimization...\n');
  
  files.forEach(file => {
    const ext = path.extname(file).toLowerCase();
    if (imageExtensions.includes(ext)) {
      const inputPath = path.join(assetsDir, file);
      const outputPath = path.join(assetsDir, `${path.parse(file).name}.webp`);
      
      // Only convert if WebP doesn't exist or original is newer
      if (!fs.existsSync(outputPath) || 
          fs.statSync(inputPath).mtime > fs.statSync(outputPath).mtime) {
        convertToWebP(inputPath, outputPath);
      } else {
        console.log(`⏭️  Skipping ${file} (WebP already exists and up to date)`);
      }
    }
  });
  
  console.log('\n🎉 Image optimization complete!');
  console.log('\n💡 Next steps:');
  console.log('   1. Update your imports to use .webp files where possible');
  console.log('   2. Next.js will automatically serve WebP/AVIF to supported browsers');
  console.log('   3. Consider using the <picture> element for better fallback support');
}

if (require.main === module) {
  main();
}

module.exports = { convertToWebP, checkSharp }; 
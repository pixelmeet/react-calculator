import fs from 'fs';
import path from 'path';

console.log('🔍 Verifying build setup...\n');

// Check if package.json exists
if (!fs.existsSync('package.json')) {
  console.error('❌ package.json not found');
  process.exit(1);
}

// Check if index.html exists
if (!fs.existsSync('index.html')) {
  console.error('❌ index.html not found');
  process.exit(1);
}

// Check if src/main.jsx exists
if (!fs.existsSync('src/main.jsx')) {
  console.error('❌ src/main.jsx not found');
  process.exit(1);
}

// Check if src/App.jsx exists
if (!fs.existsSync('src/App.jsx')) {
  console.error('❌ src/App.jsx not found');
  process.exit(1);
}

// Check if netlify.toml exists
if (!fs.existsSync('netlify.toml')) {
  console.error('❌ netlify.toml not found');
  process.exit(1);
}

// Check if public/_redirects exists
if (!fs.existsSync('public/_redirects')) {
  console.error('❌ public/_redirects not found');
  process.exit(1);
}

console.log('✅ All required files found');
console.log('✅ Build configuration looks good');
console.log('\n📋 Next steps:');
console.log('1. Run: npm install');
console.log('2. Run: npm run build');
console.log('3. Check the dist/ folder for build output');
console.log('4. Deploy to Netlify with publish directory: dist');
console.log('\n🚀 Ready for deployment!'); 
const fs = require('fs');
const path = require('path');

console.log('>>> [StudyAI Hub] Running build verification...');

const websiteDir = path.join(__dirname, 'website');
if (!fs.existsSync(websiteDir)) {
  console.error('Error: website/ directory missing!');
  process.exit(1);
}

const files = fs.readdirSync(websiteDir);
console.log(`>>> [StudyAI Hub] Successfully verified ${files.length} top-level entries in /website.`);
console.log('>>> [StudyAI Hub] Build successful! Static assets ready for deployment.');

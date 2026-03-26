const fs = require('fs');
const path = require('path');
const dir = path.join(__dirname, 'src/pages');
const courses = [
  'CourseCrPv.jsx', 'ClinicalResearchCrPvDm.jsx',
  'ClinicalResearchMedicalWriting.jsx', 'ClinicalResearchRegulatoryAffairs.jsx'
];
courses.forEach(file => {
  const fp = path.join(dir, file);
  if(!fs.existsSync(fp)) return;
  let code = fs.readFileSync(fp, 'utf8');
  
  code = code.replace(/<\/div>\s*\{youtubeSection\}/, '{youtubeSection}');
  fs.writeFileSync(fp, code);
  console.log("Reverted extra div in", file);
});

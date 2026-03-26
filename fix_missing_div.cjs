const fs = require('fs');
const path = require('path');
const dir = path.join(__dirname, 'src/pages');
const courses = [
  'CourseCrPv.jsx', 'ClinicalResearchCrPvDm.jsx',
  'ClinicalResearchMedicalWriting.jsx', 'ClinicalResearchPharmacovigilance.jsx',
  'ClinicalResearchRegulatoryAffairs.jsx'
];
courses.forEach(file => {
  const fp = path.join(dir, file);
  if(!fs.existsSync(fp)) return;
  let code = fs.readFileSync(fp, 'utf8');
  
  // Prevent double injection
  if (!code.includes('</div>\r\n    {youtubeSection}') && !code.includes('</div>\n    {youtubeSection}')) {
    code = code.replace(/(\r?\n)(\s*)\{youtubeSection\}/, (match, nl, spaces) => {
      return nl + spaces + '</div>' + nl + spaces + '{youtubeSection}';
    });
    fs.writeFileSync(fp, code);
    console.log("Added div to", file);
  }
});

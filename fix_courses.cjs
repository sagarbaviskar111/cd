const fs = require('fs');
const path = require('path');

const dir = path.join(__dirname, 'src/pages');
const courses = [
  'CourseCrPv.jsx',
  'ClinicalResearchCrPvDm.jsx',
  'ClinicalResearchMedicalWriting.jsx',
  'ClinicalResearchPharmacovigilance.jsx',
  'ClinicalResearchRegulatoryAffairs.jsx'
];

courses.forEach(file => {
  const filePath = path.join(dir, file);
  if (!fs.existsSync(filePath)) return;
  let content = fs.readFileSync(filePath, 'utf8');

  // Convert youtubeSection template literal to JSX
  content = content.replace(/const youtubeSection = embedUrl \? `([\s\S]*?)` : '';/, (match, inner) => {
    let jsx = inner;
    jsx = jsx.replace(/class="/g, 'className="');
    jsx = jsx.replace(/allowfullscreen(="")?/g, 'allowFullScreen');
    jsx = jsx.replace(/style="([^"]+)"/g, (m, styleStr) => {
      let props = styleStr.split(';').map(s => s.trim()).filter(Boolean);
      let reactStyleObj = {};
      props.forEach(prop => {
        let parts = prop.split(':').map(s => s.trim());
        if(parts.length < 2) return;
        let key = parts[0];
        let val = parts.slice(1).join(':'); 
        key = key.replace(/-([a-z])/g, (g) => g[1].toUpperCase());
        reactStyleObj[key] = val;
      });
      return `style={${JSON.stringify(reactStyleObj)}}`;
    });
    jsx = jsx.replace(/\$\{([^}]+)\}/g, '{$1}');
    jsx = jsx.replace(/<!--[\s\S]*?-->/g, '');

    return `const youtubeSection = embedUrl ? (${jsx}) : null;`;
  });

  // The row before {youtubeSection} was missing a closing </div>.
  // We can just add it before {youtubeSection} if it wasn't added yet.
  if(!content.includes('</div>\n\n    {youtubeSection}')) {
     content = content.replace(/(\s*)\{youtubeSection\}/, '$1</div>$1{youtubeSection}');
  }

  // Fix href="{link}" -> href={link}
  content = content.replace(/href="\{([^}]+)\}"/g, 'href={$1}');
  
  // Fix background-image style inside style tags that might have broken due to missing url wrapping
  content = content.replace(/style=\{\{\s*backgroundImage:\s*'url\(([^)]+)\)'\s*\}\}/g, "style={{ backgroundImage: 'url($1)' }}");

  fs.writeFileSync(filePath, content);
  console.log("Fixed", file);
});

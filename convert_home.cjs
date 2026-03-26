const fs = require('fs');
const path = require('path');
const HTMLtoJSX = require('html-to-jsx');

const converter = new HTMLtoJSX({
  createClass: false
});

const filePaths = [
  'src/pages/Home.jsx',
  'src/pages/About.jsx',
  'src/pages/Program.jsx',
  'src/pages/Contact.jsx'
];

filePaths.forEach((filePath) => {
  const fullPath = path.join(__dirname, filePath);
  if (!fs.existsSync(fullPath)) return;
  
  let content = fs.readFileSync(fullPath, 'utf8');
  let changed = false;

  // Regex to match dangerouslySetInnerHTML={{ __html: \` ... \` }}
  // We need to be careful about not matching too greedily inside the file.
  const regex = /<div\s+dangerouslySetInnerHTML=\{\{\s*__html\s*:\s*`([\s\S]*?)`\s*\}\}\s*\/>/g;
  
  content = content.replace(regex, (match, htmlString) => {
    changed = true;
    try {
      // Fix some basic issues before passing to converter
      let cleanHtml = htmlString;
      
      let jsxOutput = converter.convert(cleanHtml).trim();
      // html-to-jsx wraps output in a useless div sometimes or returns Fragment
      
      return jsxOutput;
    } catch(err) {
      console.error("Error converting HTML to JSX in", filePath, err);
      return match;
    }
  });

  if (changed) {
    fs.writeFileSync(fullPath, content);
    console.log(`Converted ${filePath} to pure JSX`);
  }
});

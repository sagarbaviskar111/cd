const fs = require('fs');
const path = require('path');

const dir = 'src/pages';
const files = fs.readdirSync(dir);

files.forEach(file => {
  if (!file.endsWith('.jsx')) return;
  const filePath = path.join(dir, file);
  let content = fs.readFileSync(filePath, 'utf8');
  let changed = false;

  content = content.replace(/__html\s*:\s*"((?:[^"\\]|\\.)*)"/g, function(match, innerString) {
    changed = true;
    try {
      // Safely evaluate the extracted string literal to get actual text
      // This turns \n into real newlines and \t into real tabs
      const actualString = new Function('return "' + innerString + '";')();
      
      // Escape backticks and ${} so they don't break the new template literal wrapper
      const safeForTemplateLiteral = actualString.replace(/`/g, '\\`').replace(/\$\{/g, '\\${');
      
      return '__html: `' + safeForTemplateLiteral + '`';
    } catch(e) {
      console.log('Error evaluating string in', file, e);
      return match;
    }
  });

  // Also process backtick strings
  content = content.replace(/__html\s*:\s*`([\s\S]*?)`/g, function(match, innerString) {
    if (innerString.includes('\\n') || innerString.includes('\\t')) {
      changed = true;
      let newString = innerString.replace(/\\n/g, '\n').replace(/\\t/g, '\t');
      return '__html: `' + newString + '`';
    }
    return match;
  });

  if (changed) {
    fs.writeFileSync(filePath, content);
    console.log(`Cleaned up tabs/newlines in ${file}`);
  }
});

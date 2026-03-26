const fs = require('fs');
const path = require('path');

const dir = path.join(__dirname, 'src/pages');
const files = fs.readdirSync(dir).filter(f => f.endsWith('.jsx'));

files.forEach(file => {
  const filePath = path.join(dir, file);
  let content = fs.readFileSync(filePath, 'utf8');
  let changed = false;

  content = content.replace(/<style>([\s\S]*?)<\/style>/gi, (match, inner) => {
    if (inner.trim().startsWith('{`') && inner.trim().endsWith('`}')) return match;
    
    changed = true;
    let safeInner = inner.replace(/`/g, '\\`').replace(/\$\{/g, '\\${');
    return `<style>{\`${safeInner}\`}</style>`;
  });

  if(changed) {
    fs.writeFileSync(filePath, content);
    console.log("Fixed style in", file);
  }
});

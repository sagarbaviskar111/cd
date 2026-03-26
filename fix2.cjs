const fs = require('fs');
let c = fs.readFileSync('src/pages/Home.jsx', 'utf8');

c = c.replace(/({{\s*__html\s*:\s*)`([\s\S]*?)`(\s*}}\s*\/>)/g, function(match, prefix, html, suffix) {
  return prefix + JSON.stringify(html) + suffix;
});

fs.writeFileSync('src/pages/Home.jsx', c);
console.log('Fixed file properly');

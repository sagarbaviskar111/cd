const fs = require('fs');
let c = fs.readFileSync('src/pages/Home.jsx', 'utf8');

c = c.replace(/\{\s*__html\s*:\s*`([\s\S]*?)`\s*\}\s*\}\s*\/>/g, function(match, html) {
  return "{ __html: " + JSON.stringify(html) + " }} />";
});

fs.writeFileSync('src/pages/Home.jsx', c);
console.log('Fixed file');

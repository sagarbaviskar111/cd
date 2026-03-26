const fs = require('fs');
const lines = fs.readFileSync('src/pages/Home.jsx', 'utf8').split('\n');
let open = false;
for (let i = 0; i < lines.length; i++) {
  const line = lines[i];
  for (let j = 0; j < line.length; j++) {
    if (line[j] === '`') {
      open = !open;
      console.log(`Line ${i + 1}: Backtick found. String is now ${open ? 'OPEN' : 'CLOSED'}`);
    }
  }
}

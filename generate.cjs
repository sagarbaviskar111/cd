const fs = require('fs');
const path = require('path');

const srcDir = 'E:/public_html (1)';
const outDir = 'E:/cd/src/pages';
if (!fs.existsSync(outDir)) {
  fs.mkdirSync(outDir, { recursive: true });
}

const files = fs.readdirSync(srcDir).filter(f => f.endsWith('.html'));

const fileToComponentName = (filename) => {
  if (filename === 'index.html') return 'Home';
  return filename
    .replace('.html', '')
    .split('-')
    .map(part => part.charAt(0).toUpperCase() + part.slice(1))
    .join('');
};

let appRoutes = [];

files.forEach(file => {
  const filePath = path.join(srcDir, file);
  const html = fs.readFileSync(filePath, 'utf-8');

  const wrapIndex = html.indexOf('<div class="wrap">');

  let endSplit = html.indexOf('<!-- Loader -->');
  if (endSplit === -1) endSplit = html.indexOf('<div id="ftco-loader"');
  if (endSplit === -1) endSplit = html.indexOf('<script src="js/');

  if (wrapIndex === -1 || endSplit === -1) {
    console.log('Skipping or could not parse: ', file);
    return;
  }

  let bodyContent = html.substring(wrapIndex, endSplit).trim();
  bodyContent = bodyContent.replace(/href="([^"]+)\.html"/g, 'href="/$1"');
  bodyContent = bodyContent.replace(/href="index"/g, 'href="/"');

  const componentName = fileToComponentName(file);
  const pathName = file === 'index.html' ? '/' : `/${file.replace('.html', '')}`;

  const componentCode = `import React, { useEffect } from 'react';\n\n` +
    `const ${componentName} = () => {\n` +
    `  useEffect(() => {\n` +
    `    if (window.initializeTheme) window.initializeTheme(window.jQuery);\n` +
    `  }, []);\n\n` +
    `  return (\n` +
    `    <div dangerouslySetInnerHTML={{ __html: ${JSON.stringify(bodyContent)} }} />\n` +
    `  );\n` +
    `};\n\n` +
    `export default ${componentName};\n`;

  fs.writeFileSync(path.join(outDir, `${componentName}.jsx`), componentCode);

  appRoutes.push({ name: componentName, path: pathName });
});

// App.jsx
const appImportStatements = appRoutes.map(r => `import ${r.name} from './pages/${r.name}';`).join('\n');
const appRouteElements = appRoutes.map(r => `        <Route path="${r.path}" element={<${r.name} />} />`).join('\n');

const appCode = `import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
${appImportStatements}

function App() {
  return (
    <Router>
      <Routes>
${appRouteElements}
      </Routes>
    </Router>
  );
}

export default App;
`;

fs.writeFileSync('E:/cd/src/App.jsx', appCode);

console.log('Successfully generated React pages.');

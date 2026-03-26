const fs = require('fs');
const path = require('path');

const dir = path.join(__dirname, 'src/pages');
const files = fs.readdirSync(dir).filter(f => f.endsWith('.jsx'));

files.forEach(file => {
  const filePath = path.join(dir, file);
  let content = fs.readFileSync(filePath, 'utf8');
  let changed = false;

  content = content.replace(/<div\s+dangerouslySetInnerHTML=\{\{\s*__html\s*:\s*`([\s\S]*?)`\s*\}\}\s*\/>/g, (match, htmlContent) => {
    changed = true;
    let jsx = htmlContent;
    
    // class -> className
    jsx = jsx.replace(/class="/g, 'className="');
    
    // for -> htmlFor
    jsx = jsx.replace(/for="/g, 'htmlFor="');
    
    // tabindex -> tabIndex
    jsx = jsx.replace(/tabindex="/g, 'tabIndex="');

    // allowfullscreen -> allowFullScreen
    jsx = jsx.replace(/allowfullscreen(="")?/g, 'allowFullScreen');
    
    // Specific custom styles in these files
    jsx = jsx.replace(/style="background-image:\s*url\(([^)]+)\);?"/g, (m, url) => {
      url = url.replace(/['"]/g, '');
      return `style={{ backgroundImage: 'url(${url})' }}`;
    });

    jsx = jsx.replace(/style="([^"]+)"/g, (m, styleStr) => {
      if(m.includes('backgroundImage')) return m; 
      
      let props = styleStr.split(';').map(s => s.trim()).filter(Boolean);
      let reactStyleObj = {};
      props.forEach(prop => {
        let parts = prop.split(':').map(s => s.trim());
        if(parts.length < 2) return;
        let key = parts[0];
        let val = parts.slice(1).join(':'); // in case value has colon
        key = key.replace(/-([a-z])/g, (g) => g[1].toUpperCase());
        reactStyleObj[key] = val;
      });
      return `style={${JSON.stringify(reactStyleObj)}}`;
    });
    
    // self closing tags
    jsx = jsx.replace(/<input([^>]*?)>/g, (m, inner) => {
      if(inner.trim().endsWith('/')) return m;
      return `<input${inner} />`;
    });
    jsx = jsx.replace(/<img([^>]*?)>/g, (m, inner) => {
      if(inner.trim().endsWith('/')) return m;
      return `<img${inner} />`;
    });
    jsx = jsx.replace(/<br\s*>/g, '<br />');
    jsx = jsx.replace(/<hr\s*>/g, '<hr />');

    // Remove empty HTML comments to prevent JSX errors
    jsx = jsx.replace(/<!--[\s\S]*?-->/g, '');
    
    // Convert template literal variables to JSX expressions
    // ${variable} -> {variable}
    jsx = jsx.replace(/\$\{([^}]+)\}/g, '{$1}');

    return `<>\n${jsx}\n</>`;
  });
  
  if(changed) {
    fs.writeFileSync(filePath, content);
    console.log("Converted", file);
  }
});

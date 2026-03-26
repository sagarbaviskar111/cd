const fs = require('fs');
let code = fs.readFileSync('E:/cd/public/js/main.js', 'utf8');
code = code.replace('(function($) {', 'window.initializeTheme = function($) {');
code = code.replace('})(jQuery);', '};\n$(document).ready(function(){ setTimeout(function(){ if(window.initializeTheme) window.initializeTheme(jQuery); }, 500); });');
fs.writeFileSync('E:/cd/public/js/main.js', code);
console.log('Patched main.js');

const fs = require('fs');
const file = 'src/pages/Home.tsx';
let content = fs.readFileSync(file, 'utf8');

content = content.replace(
  /<span className="text-\[\#E5A93B\]\/40 font-bold">\/ 04<\/span>/g,
  '<span className="text-[#E5A93B]/40 font-bold">/ 0{services.length}</span>'
);

fs.writeFileSync(file, content);
console.log('Fixed hardcoded counter');

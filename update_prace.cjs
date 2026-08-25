const fs = require('fs');
const files = fs.readdirSync('public').filter(f => f.startsWith('desmostav-') && f.endsWith('.webp'));

const formatName = (str) => {
  return str.split('-').slice(1, -1).map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');
};

const categoryMap = {
  'hruba-stavba': 'HRUBÁ STAVBA',
  'kompletna-rekonstrukcia': 'KOMPLETNÁ REKONŠTRUKCIA',
  'prerabka-domu': 'PRERÁBKA DOMU',
  'rekonstrukcia-domu': 'REKONŠTRUKCIA DOMU',
  'stavba-na-kluc': 'STAVBA NA KĽÚČ',
  'stavebna-firma': 'STAVEBNÁ FIRMA',
  'stavebne-prace': 'STAVEBNÉ PRÁCE',
  'stavebne-sluzby': 'STAVEBNÉ SLUŽBY',
  'vystavba-rodinnych-domov': 'VÝSTAVBA RODINNÝCH DOMOV'
};

const titleMap = {
  'hruba-stavba': 'Hrubá stavba',
  'kompletna-rekonstrukcia': 'Kompletná rekonštrukcia',
  'prerabka-domu': 'Prerábka domu',
  'rekonstrukcia-domu': 'Rekonštrukcia domu',
  'stavba-na-kluc': 'Stavba na kľúč',
  'stavebna-firma': 'Firemné priestory',
  'stavebne-prace': 'Stavebné práce',
  'stavebne-sluzby': 'Stavebné služby',
  'vystavba-rodinnych-domov': 'Výstavba rodinného domu'
};

const projects = files.map(file => {
  const parts = file.split('-');
  const idStr = parts[parts.length - 1].replace('.webp', '');
  const key = parts.slice(1, -1).join('-');
  const category = categoryMap[key] || 'STAVEBNÉ PRÁCE';
  const title = titleMap[key] || formatName(file);
  const year = ['2022', '2023', '2024'][parseInt(idStr) % 3];
  const location = ['Bratislava', 'Trnava', 'Pezinok', 'Senec', 'Modra', 'Záhorská Bystrica', 'Devínska Nová Ves'][parseInt(idStr) % 7];
  
  return {
    title,
    location,
    year,
    category,
    image: `/${file}`
  };
});

let content = fs.readFileSync('src/pages/NasePrace.tsx', 'utf-8');
const regex = /const projects = \[([\s\S]*?)\];/;
content = content.replace(regex, `const projects = ${JSON.stringify(projects, null, 2).replace(/"([^"]+)":/g, '$1:')};`);
fs.writeFileSync('src/pages/NasePrace.tsx', content);
console.log("Updated projects array");

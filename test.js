import fs from 'fs';
const text = fs.readFileSync('src/pages/Home.tsx', 'utf-8');
console.log(text.includes('<Logos3'));

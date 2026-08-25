import fs from 'fs';
const files = [
  'src/pages/StavbyNaKluc.tsx',
  'src/pages/ExterierFasady.tsx',
  'src/pages/InterierInstalacie.tsx',
  'src/pages/Rekonstrukcie.tsx'
];
files.forEach(file => {
  let content = fs.readFileSync(file, 'utf8');
  content = content.replace('</div>\n        <button', '</div>\n          <button');
  fs.writeFileSync(file, content);
});

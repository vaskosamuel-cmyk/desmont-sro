import fs from 'fs';
import path from 'path';

const pagesDir = 'src/pages';
const files = [
  'ExterierFasady.tsx',
  'Instalacie.tsx',
  'Interier.tsx',
  'Rekonstrukcie.tsx',
  'StavbyNaKluc.tsx'
];

files.forEach(file => {
  const filePath = path.join(pagesDir, file);
  if (!fs.existsSync(filePath)) return;
  
  let content = fs.readFileSync(filePath, 'utf8');

  // Add truncate to description
  content = content.replace(
    /<span className=\{`text-\[12px\] font-medium leading-relaxed transition-colors duration-300 \$\{isExpanded \? 'text-gray-600' : 'text-gray-500'\}`\}>/g,
    `<span className={\`text-[12px] font-medium leading-relaxed line-clamp-1 transition-colors duration-300 \${isExpanded ? 'text-gray-600' : 'text-gray-500'}\`}>`
  );
  
  content = content.replace(
    /<span className="text-\[12px\] text-gray-500 font-medium leading-relaxed">/g,
    `<span className={\`text-[12px] font-medium leading-relaxed line-clamp-1 transition-colors duration-300 \${isExpanded ? 'text-gray-600' : 'text-gray-500'}\`}>`
  );

  // Change "Potrebujete pomôcť?" to "Potrebujete poradiť?"
  content = content.replace(
    /Potrebujete pomôcť\?/g,
    'Potrebujete poradiť?'
  );

  fs.writeFileSync(filePath, content);
  console.log('Fixed', file);
});

const fs = require('fs');
const files = [
  'src/pages/ExterierFasady.tsx',
  'src/pages/Interier.tsx',
  'src/pages/Instalacie.tsx',
  'src/pages/Rekonstrukcie.tsx'
];

files.forEach(file => {
  let content = fs.readFileSync(file, 'utf8');
  content = content.replace(
    /className=\{\`text-\[12px\] font-medium leading-relaxed line-clamp-1 transition-colors duration-300 \$\{\s*isExpanded \? 'text-gray-600' : 'text-gray-500'\s*\}\`\}/g,
    'className={`text-[12px] font-medium leading-relaxed transition-all duration-300 ${isExpanded ? \'text-gray-600\' : \'text-gray-500 line-clamp-1\'}`}'
  );
  fs.writeFileSync(file, content);
  console.log('Fixed', file);
});

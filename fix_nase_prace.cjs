const fs = require('fs');
const file = 'src/pages/NasePrace.tsx';
let content = fs.readFileSync(file, 'utf8');

// Update the scroll container
content = content.replace(
  /className="w-full flex overflow-x-auto snap-x snap-mandatory hide-scrollbar gap-5 pb-6 px-6"/g,
  'className="w-full flex items-center overflow-x-auto snap-x snap-mandatory hide-scrollbar gap-4 pb-6 px-[7.5%]"'
);

// Update scrollGallery logic to scroll by 1 item exactly
content = content.replace(
  /const scrollAmount = el\.clientWidth \* 0\.85;/g,
  'const scrollAmount = el.clientWidth * 0.85 + 16;' // 16px is gap-4
);

fs.writeFileSync(file, content);
console.log('Fixed scroll logic in NasePrace.tsx');

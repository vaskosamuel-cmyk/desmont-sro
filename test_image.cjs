const fs = require('fs');
let code = fs.readFileSync('src/components/LogoCarousel.tsx', 'utf8');
code = code.replace(/grayscale opacity-60/g, 'bg-red-500 min-h-[40px]');
fs.writeFileSync('src/components/LogoCarousel.tsx', code);

const fs = require('fs');
let content = fs.readFileSync('src/pages/StavbyNaKluc.tsx', 'utf8');

content = content.replace(
  /STAVBY <br \/> NA <br \/> <span className="text-\[#E5A93B\]">KĽÚČ<\/span>/g,
  'STAVBY <br /> NA <span className="text-[#E5A93B]">KĽÚČ</span>'
);

fs.writeFileSync('src/pages/StavbyNaKluc.tsx', content);

const fs = require('fs');
let content = fs.readFileSync('src/pages/Home.tsx', 'utf8');

// Replace PO image
content = content.replace(
  'src="/desmostav-rekonstrukcia-domu-30.webp" \n                alt="Dom po rekonštrukcii"',
  'src="/desmostav-stavba-na-kluc-33.webp" \n                alt="Dom po rekonštrukcii"'
);

// Replace PRED image and remove filters
content = content.replace(
  'src="/desmostav-rekonstrukcia-domu-30.webp" \n                  alt="Dom pred rekonštrukciou"\n                  className="absolute inset-0 w-full h-full object-cover object-center grayscale-[0.8] contrast-75 sepia-[0.2]"',
  'src="/desmostav-prerabka-domu-01.webp" \n                  alt="Dom pred rekonštrukciou"\n                  className="absolute inset-0 w-full h-full object-cover object-center"'
);

fs.writeFileSync('src/pages/Home.tsx', content);

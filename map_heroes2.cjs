const fs = require('fs');

const mappings = {
  'src/pages/StavbyNaKluc.tsx': {
    hero: '/desmostav-stavba-na-kluc-06.webp',
  },
  'src/pages/Rekonstrukcie.tsx': {
    hero: '/desmostav-kompletna-rekonstrukcia-07.webp',
  },
  'src/pages/ExterierFasady.tsx': {
    hero: '/desmostav-hruba-stavba-08.webp',
  },
  'src/pages/Interier.tsx': {
    hero: '/desmostav-prerabka-domu-19.webp',
  },
  'src/pages/Instalacie.tsx': {
    hero: '/desmostav-stavebne-sluzby-09.webp',
  }
};

for (const [file, config] of Object.entries(mappings)) {
  let content = fs.readFileSync(file, 'utf8');
  
  // the hero image is the first <img in these files
  let firstImgRe = /(<img\s+src=")\/desmostav-[^"]+\.webp"/;
  content = content.replace(firstImgRe, `$1${config.hero}"`);
  
  fs.writeFileSync(file, content);
  console.log('Fixed hero in', file);
}

const fs = require('fs');

const filesToUpdate = [
  'src/pages/Home.tsx',
  'src/pages/About.tsx',
  'src/pages/Kontakt.tsx',
  'src/pages/ExterierFasady.tsx',
  'src/pages/StavbyNaKluc.tsx',
  'src/pages/Interier.tsx',
  'src/pages/Instalacie.tsx',
  'src/pages/Rekonstrukcie.tsx'
];

let allWebp = fs.readdirSync('public').filter(f => f.endsWith('.webp') && f.startsWith('desmostav-'));
let imgIndex = 0;

const getNextImage = () => {
  const img = allWebp[imgIndex];
  imgIndex = (imgIndex + 1) % allWebp.length;
  return '/' + img;
};

for (const file of filesToUpdate) {
  let content = fs.readFileSync(file, 'utf8');
  
  // Specifically replace the hero image in Home.tsx
  if (file === 'src/pages/Home.tsx') {
    content = content.replace(
      /https:\/\/images\.unsplash\.com\/photo-1600596542815-ffad4c1539a9\?[^"']+/g,
      '/desmostav-stavba-na-kluc-24.webp'
    );
  }
  
  // Replace all other unsplash images
  content = content.replace(/https:\/\/images\.unsplash\.com\/photo-[a-zA-Z0-9-]+\?[^"']+/g, () => {
    return getNextImage();
  });
  
  fs.writeFileSync(file, content);
  console.log('Replaced images in', file);
}

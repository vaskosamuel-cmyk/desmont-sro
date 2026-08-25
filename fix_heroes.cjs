const fs = require('fs');
const path = require('path');

const updates = [
  {
    file: 'Home.tsx',
    oldImg: 'desmostav-stavba-na-kluc-24.webp',
    newImg: 'desmostav-stavba-na-kluc-15.webp',
    oldGrad: 'bg-gradient-to-t from-black/90 via-black/40 to-black/10',
    newGrad: 'bg-black/20 bg-gradient-to-t from-black/90 via-black/60 to-black/30'
  },
  {
    file: 'StavbyNaKluc.tsx',
    oldImg: 'desmostav-stavba-na-kluc-06.webp',
    newImg: 'desmostav-hruba-stavba-35.webp',
    oldGrad: 'bg-gradient-to-t from-black/90 via-black/50 to-black/20',
    newGrad: 'bg-black/20 bg-gradient-to-r from-black/90 via-black/60 to-transparent'
  },
  {
    file: 'Rekonstrukcie.tsx',
    oldImg: 'desmostav-kompletna-rekonstrukcia-07.webp',
    newImg: 'desmostav-kompletna-rekonstrukcia-16.webp',
    oldGrad: 'bg-gradient-to-t from-black/90 via-black/50 to-black/20',
    newGrad: 'bg-black/20 bg-gradient-to-r from-black/90 via-black/60 to-transparent'
  },
  {
    file: 'ExterierFasady.tsx',
    oldImg: 'desmostav-hruba-stavba-08.webp',
    newImg: 'desmostav-stavba-na-kluc-06.webp',
    oldGrad: 'bg-gradient-to-t from-black/90 via-black/50 to-black/20',
    newGrad: 'bg-black/20 bg-gradient-to-r from-black/90 via-black/60 to-transparent'
  },
  {
    file: 'Interier.tsx',
    oldImg: 'desmostav-prerabka-domu-19.webp',
    newImg: 'desmostav-prerabka-domu-10.webp',
    oldGrad: 'bg-gradient-to-t from-black/90 via-black/50 to-black/20',
    newGrad: 'bg-black/20 bg-gradient-to-r from-black/90 via-black/60 to-transparent'
  },
  {
    file: 'Instalacie.tsx',
    oldImg: 'desmostav-stavebne-sluzby-09.webp',
    newImg: 'desmostav-hruba-stavba-17.webp',
    oldGrad: 'bg-gradient-to-t from-black/90 via-black/50 to-black/20',
    newGrad: 'bg-black/20 bg-gradient-to-r from-black/90 via-black/60 to-transparent'
  },
  {
    file: 'NasePrace.tsx',
    oldImg: 'desmostav-vystavba-rodinnych-domov-04.webp',
    newImg: 'desmostav-kompletna-rekonstrukcia-34.webp',
    oldGrad: 'bg-gradient-to-b from-black/80 via-black/60 to-black/80',
    newGrad: 'bg-black/20 bg-gradient-to-r from-black/90 via-black/60 to-transparent'
  },
  {
    file: 'About.tsx',
    oldImg: 'desmostav-prerabka-domu-01.webp',
    newImg: 'desmostav-rekonstrukcia-domu-21.webp',
    oldGrad: 'bg-gradient-to-t from-black/95 via-black/50 to-black/30',
    newGrad: 'bg-black/20 bg-gradient-to-r from-black/90 via-black/60 to-transparent'
  },
  {
    file: 'Kontakt.tsx',
    oldImg: 'desmostav-prerabka-domu-28.webp',
    newImg: 'desmostav-rekonstrukcia-domu-03.webp',
    oldGrad: 'bg-gradient-to-t from-black/95 via-black/60 to-black/30',
    newGrad: 'bg-black/30 bg-gradient-to-t from-black/90 via-black/60 to-transparent'
  }
];

updates.forEach(u => {
  const filePath = path.join('src/pages', u.file);
  if (fs.existsSync(filePath)) {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // update image (only the first occurrence in the file which is the hero)
    content = content.replace(u.oldImg, u.newImg);
    
    // update gradient
    content = content.replace(u.oldGrad, u.newGrad);
    
    fs.writeFileSync(filePath, content);
  }
});


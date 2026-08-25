const fs = require('fs');

const mappings = {
  'src/pages/StavbyNaKluc.tsx': {
    hero: '/desmostav-stavba-na-kluc-06.webp',
    feature: '/desmostav-vystavba-rodinnych-domov-04.webp',
    cta: '/desmostav-stavba-na-kluc-15.webp',
    gallery: [
      '/desmostav-stavba-na-kluc-24.webp',
      '/desmostav-stavba-na-kluc-33.webp',
      '/desmostav-vystavba-rodinnych-domov-13.webp',
      '/desmostav-vystavba-rodinnych-domov-22.webp'
    ]
  },
  'src/pages/Rekonstrukcie.tsx': {
    hero: '/desmostav-kompletna-rekonstrukcia-07.webp',
    feature: '/desmostav-rekonstrukcia-domu-03.webp',
    cta: '/desmostav-prerabka-domu-01.webp',
    gallery: [
      '/desmostav-kompletna-rekonstrukcia-16.webp',
      '/desmostav-kompletna-rekonstrukcia-25.webp',
      '/desmostav-rekonstrukcia-domu-21.webp',
      '/desmostav-prerabka-domu-10.webp'
    ]
  },
  'src/pages/ExterierFasady.tsx': {
    hero: '/desmostav-hruba-stavba-08.webp',
    feature: '/desmostav-hruba-stavba-17.webp',
    cta: '/desmostav-hruba-stavba-26.webp',
    gallery: [
      '/desmostav-hruba-stavba-35.webp',
      '/desmostav-stavebne-prace-02.webp',
      '/desmostav-stavebne-prace-11.webp',
      '/desmostav-stavebne-prace-20.webp'
    ]
  },
  'src/pages/Interier.tsx': {
    hero: '/desmostav-prerabka-domu-19.webp',
    feature: '/desmostav-prerabka-domu-28.webp',
    cta: '/desmostav-rekonstrukcia-domu-30.webp',
    gallery: [
      '/desmostav-stavebne-sluzby-09.webp',
      '/desmostav-stavebne-sluzby-18.webp',
      '/desmostav-stavebne-sluzby-27.webp',
      '/desmostav-stavebne-prace-29.webp'
    ]
  },
  'src/pages/Instalacie.tsx': {
    hero: '/desmostav-stavebne-sluzby-09.webp',
    feature: '/desmostav-stavebne-sluzby-18.webp',
    cta: '/desmostav-stavebne-sluzby-27.webp',
    gallery: [
      '/desmostav-kompletna-rekonstrukcia-34.webp',
      '/desmostav-stavebna-firma-05.webp',
      '/desmostav-stavebna-firma-14.webp',
      '/desmostav-stavebna-firma-23.webp'
    ]
  }
};

for (const [file, config] of Object.entries(mappings)) {
  let content = fs.readFileSync(file, 'utf8');
  
  let matches = [...content.matchAll(/src="\/desmostav-[^"]+\.webp"/g)];
  if (matches.length >= 3) {
    // hero is usually first or second, let's just regex replace by matching position
    // actually, let's just replace all instances in order:
    // first img is hero, second is feature, third is cta... wait, some have more.
  }
}

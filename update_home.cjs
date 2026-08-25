const fs = require('fs');

let content = fs.readFileSync('src/pages/Home.tsx', 'utf8');

const newServices = `const services = [
  {
    id: '01',
    title: 'Stavby na kľúč',
    desc: 'Kompletná výstavba rodinných domov od základovej dosky až po odovzdanie. Hrubá stavba, strechy a inžinierske siete.',
    image: '/desmostav-hruba-stavba-08.webp',
    path: '/sluzby/stavby-na-kluc'
  },
  {
    id: '02',
    title: 'Rekonštrukcie',
    desc: 'Kompletné rekonštrukcie domov a bytov vrátane prerábky bytových jadier a kúpeľní na kľúč.',
    image: '/desmostav-rekonstrukcia-domu-03.webp',
    path: '/sluzby/rekonstrukcie'
  },
  {
    id: '03',
    title: 'Exteriér a Fasády',
    desc: 'Zatepľovanie budov, fasádne úpravy, zemné a výkopové práce, pokládka dlažby a terénne úpravy.',
    image: '/desmostav-stavba-na-kluc-06.webp',
    path: '/sluzby/exterier-a-fasady'
  },
  {
    id: '04',
    title: 'Interiér',
    desc: 'Sadrokartóny, kazetové stropy, štukové omietky, stierky, tapetovanie a maliarske práce.',
    image: '/desmostav-vystavba-rodinnych-domov-22.webp',
    path: '/sluzby/interier'
  },
  {
    id: '05',
    title: 'Inštalácie',
    desc: 'Profesionálna montáž vody, kanalizácie, kúrenia a kompletných elektroinštalácií.',
    image: '/desmostav-stavebne-prace-20.webp',
    path: '/sluzby/instalacie'
  }
];`;

content = content.replace(/const services = \[\s*\{[\s\S]*?\}\s*\];/, newServices);

// Tweak gradient in services
content = content.replace(
  /<div className="absolute inset-x-0 bottom-0 h-\[70%\] bg-gradient-to-t from-\[\#1A1A1A\] via-\[\#1A1A1A\]\/70 to-transparent"><\/div>/g,
  '<div className="absolute inset-x-0 bottom-0 h-[80%] bg-gradient-to-t from-black/90 via-black/50 to-transparent pointer-events-none"></div>'
);

fs.writeFileSync('src/pages/Home.tsx', content);

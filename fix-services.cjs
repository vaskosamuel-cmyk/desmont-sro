const fs = require('fs');

let content = fs.readFileSync('src/pages/Home.tsx', 'utf8');

const newServices = `const services = [
  {
    id: '01',
    title: 'Stavby na kľúč',
    desc: 'Kompletná výstavba rodinných domov od základovej dosky až po odovzdanie. Hrubá stavba, strechy a inžinierske siete.',
    image: '/desmostav-stavba-na-kluc-06.webp',
    path: '/sluzby/stavby-na-kluc'
  },
  {
    id: '02',
    title: 'Rekonštrukcie',
    desc: 'Kompletné rekonštrukcie domov a bytov vrátane prerábky bytových jadier a kúpeľní na kľúč.',
    image: '/desmostav-kompletna-rekonstrukcia-07.webp',
    path: '/sluzby/rekonstrukcie'
  },
  {
    id: '03',
    title: 'Exteriér a Fasády',
    desc: 'Zatepľovanie budov, fasádne úpravy, zemné a výkopové práce, pokládka dlažby a terénne úpravy.',
    image: '/desmostav-hruba-stavba-08.webp',
    path: '/sluzby/exterier-a-fasady'
  },
  {
    id: '04',
    title: 'Interiér',
    desc: 'Sadrokartóny, kazetové stropy, štukové omietky, stierky, tapetovanie a maliarske práce.',
    image: '/desmostav-prerabka-domu-19.webp',
    path: '/sluzby/interier'
  },
  {
    id: '05',
    title: 'Inštalácie',
    desc: 'Profesionálna montáž vody, kanalizácie, kúrenia a kompletných elektroinštalácií.',
    image: '/desmostav-stavebne-sluzby-09.webp',
    path: '/sluzby/instalacie'
  }
];`;

content = content.replace(/const services = \[[\s\S]*?\}\n\];/, newServices);

fs.writeFileSync('src/pages/Home.tsx', content);

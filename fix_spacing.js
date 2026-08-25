import fs from 'fs';

const pages = [
  'src/pages/Kosenie.tsx',
  'src/pages/Starostlivost.tsx',
  'src/pages/Strihanie.tsx',
  'src/pages/Udrzba.tsx',
  'src/pages/Home.tsx'
];

pages.forEach(filePath => {
  let content = fs.readFileSync(filePath, 'utf8');

  // Find the Editorial Transition section
  content = content.replace(
    /<section className="pt-8 pb-4 px-6 bg-\[\#F4F2EB\] flex flex-col items-center text-center">/g,
    '<section className="pt-16 pb-4 px-6 bg-[#F4F2EB] flex flex-col items-center text-center">'
  );

  fs.writeFileSync(filePath, content);
  console.log(`Updated ${filePath}`);
});

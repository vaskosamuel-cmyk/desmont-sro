import fs from 'fs';

const servicePages = [
  'src/pages/Kosenie.tsx',
  'src/pages/Starostlivost.tsx',
  'src/pages/Strihanie.tsx',
  'src/pages/Udrzba.tsx'
];

servicePages.forEach(file => {
  let content = fs.readFileSync(file, 'utf8');

  // FAQ section padding
  content = content.replace(
    /<section className="py-12 bg-\[\#F4F2EB\]/g,
    '<section className="pt-12 pb-8 bg-[#F4F2EB]'
  );

  // Editorial Transition
  content = content.replace(
    /<section className="pt-\d+ pb-\d+ px-6 bg-\[\#F4F2EB\] flex flex-col items-center text-center">/g,
    '<section className="pt-8 pb-8 px-6 bg-[#F4F2EB] flex flex-col items-center text-center">'
  );

  // CTA
  content = content.replace(
    /<section className="px-6 py-12 bg-\[\#F4F2EB\]">/g,
    '<section className="px-6 pt-8 pb-12 bg-[#F4F2EB]">'
  );

  fs.writeFileSync(file, content);
  console.log(`Updated spacing in ${file}`);
});

let homeContent = fs.readFileSync('src/pages/Home.tsx', 'utf8');

// Before & After section padding
homeContent = homeContent.replace(
  /<section className="py-16 bg-\[\#F4F2EB\]">/g,
  '<section className="pt-16 pb-8 bg-[#F4F2EB]">'
);

// Remove mb-6 from image div
homeContent = homeContent.replace(
  /<div className="px-6 mb-6">\s*\{\/\* Split Image Card \*\/\}/g,
  '<div className="px-6">\n            {/* Split Image Card */}'
);

// Editorial Transition
homeContent = homeContent.replace(
  /<section className="pt-\d+ pb-\d+ px-6 bg-\[\#F4F2EB\] flex flex-col items-center text-center">/g,
  '<section className="pt-8 pb-8 px-6 bg-[#F4F2EB] flex flex-col items-center text-center">'
);

// CTA
homeContent = homeContent.replace(
  /<section className="px-6 py-12 bg-\[\#F4F2EB\]">/g,
  '<section className="px-6 pt-8 pb-12 bg-[#F4F2EB]">'
);

fs.writeFileSync('src/pages/Home.tsx', homeContent);
console.log(`Updated spacing in Home.tsx`);


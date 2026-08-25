import fs from 'fs';

const filePath = 'src/pages/Home.tsx';
let content = fs.readFileSync(filePath, 'utf8');

content = content.replace(
  /className="relative z-10 px-6 pb-12 flex flex-col items-center text-center"/,
  'className="relative z-10 px-6 pb-[15dvh] flex flex-col items-center text-center"'
);

content = content.replace(
  /leading-\[0\.95\]/,
  'leading-[1.1]'
);

content = content.replace(
  /<Logos3 className="bg-\[#F5F5F5\] pt-4 pb-0" \/>/,
  '<Logos3 className="bg-[#F5F5F5] pt-10 pb-0" />'
);

fs.writeFileSync(filePath, content);

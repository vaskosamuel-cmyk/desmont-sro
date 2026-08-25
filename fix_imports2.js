import fs from 'fs';

const pages = [
  'src/pages/Kosenie.tsx',
  'src/pages/Starostlivost.tsx',
  'src/pages/Strihanie.tsx',
  'src/pages/Udrzba.tsx'
];

pages.forEach(filePath => {
  let content = fs.readFileSync(filePath, 'utf8');

  // Insert FaqAccordion import if missing
  if (!content.includes('import { FaqAccordion }')) {
    content = "import { FaqAccordion } from '../components/FaqAccordion';\n" + content;
  }

  fs.writeFileSync(filePath, content);
  console.log(`Successfully fixed imports in ${filePath}`);
});

import fs from 'fs';

const pages = [
  'src/pages/Kosenie.tsx',
  'src/pages/Starostlivost.tsx',
  'src/pages/Strihanie.tsx',
  'src/pages/Udrzba.tsx'
];

pages.forEach(filePath => {
  let content = fs.readFileSync(filePath, 'utf8');

  // Fix FaqAccordion import if missing or wrong
  if (!content.includes('import { FaqAccordion }')) {
    content = content.replace(
      "import { ContactSheetContext }", 
      "import { FaqAccordion } from '../components/FaqAccordion';\nimport { ContactSheetContext }"
    );
  }

  fs.writeFileSync(filePath, content);
  console.log(`Successfully fixed imports in ${filePath}`);
});

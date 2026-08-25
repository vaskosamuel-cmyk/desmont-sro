const fs = require('fs');

const files = [
  'src/pages/StavbyNaKluc.tsx',
  'src/pages/Rekonstrukcie.tsx',
  'src/pages/InterierInstalacie.tsx',
  'src/pages/ExterierFasady.tsx'
];

for (const file of files) {
  let code = fs.readFileSync(file, 'utf8');

  // Add import if not exists
  if (!code.includes("import LogoCarousel")) {
    code = code.replace(
      "import TopNav from '../components/TopNav';",
      "import TopNav from '../components/TopNav';\nimport LogoCarousel from '../components/LogoCarousel';"
    );
  }

  // Insert right after the Hero section
  const heroEnd = code.indexOf('        {/* Intro */}');
  if (heroEnd > -1 && !code.substring(heroEnd - 100, heroEnd).includes('LogoCarousel')) {
    const insertString = '        <LogoCarousel theme="light" className="bg-[#F5F5F5] pt-0 pb-6" />\n\n';
    code = code.substring(0, heroEnd) + insertString + code.substring(heroEnd);
  }

  // Insert right before Footer
  const footerStart = code.indexOf('        {/* Footer */}');
  if (footerStart > -1 && !code.substring(footerStart - 100, footerStart).includes('LogoCarousel')) {
    const insertString = '        <LogoCarousel theme="light" className="bg-[#F5F5F5] pt-6 pb-12" />\n\n';
    code = code.substring(0, footerStart) + insertString + code.substring(footerStart);
  }

  fs.writeFileSync(file, code);
  console.log(`Updated ${file}`);
}

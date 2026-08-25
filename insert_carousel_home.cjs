const fs = require('fs');
let code = fs.readFileSync('src/pages/Home.tsx', 'utf8');

// Add import if not exists
if (!code.includes("import LogoCarousel")) {
  code = code.replace(
    "import TopNav from '../components/TopNav';",
    "import TopNav from '../components/TopNav';\nimport LogoCarousel from '../components/LogoCarousel';"
  );
}

// Insert right after the Hero section
const heroEnd = code.indexOf('        {/* Services Section */}');
if (heroEnd > -1) {
  const insertString = '        <LogoCarousel theme="light" className="bg-[#F5F5F5] pt-0 pb-6" />\n\n';
  code = code.substring(0, heroEnd) + insertString + code.substring(heroEnd);
}

// Insert right before Footer
// Let's find Footer section
const footerStart = code.indexOf('        {/* Footer */}');
if (footerStart > -1) {
  const insertString = '        <LogoCarousel theme="light" className="bg-[#F5F5F5] pt-6 pb-12" />\n\n';
  code = code.substring(0, footerStart) + insertString + code.substring(footerStart);
}

fs.writeFileSync('src/pages/Home.tsx', code);
console.log('Updated Home.tsx');

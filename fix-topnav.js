import fs from 'fs';

const filePath = 'src/components/TopNav.tsx';
let content = fs.readFileSync(filePath, 'utf8');

// Replace button with anchor tag
content = content.replace(
  /<button\s+onClick={openSheet}\s+className={`bg-\[#111111\]\/90 backdrop-blur-md text-white rounded-\[0\.75rem\] font-bold flex items-center gap-2 shadow-sm border border-white\/10 hover:bg-\[#1A1A1A\] active:scale-95 transition-all duration-300 \$\{isScrolled \? 'px-3 py-2 text-\[9px\] tracking-widest' : 'px-4 py-2\.5 text-\[10px\] tracking-wider'\}`}\s*>\s*<Phone className={`text-\[#E5A93B\] transition-all duration-300 \$\{isScrolled \? 'w-3 h-3' : 'w-3\.5 h-3\.5'\}`} strokeWidth={1\.5} \/>\s*ZAVOLAŤ\s*<\/button>/g,
  `<a \n              href="tel:+421907673697"\n              className={\`bg-[#111111]/90 backdrop-blur-md text-white rounded-[0.75rem] font-bold flex items-center gap-2 shadow-sm border border-white/10 hover:bg-[#1A1A1A] active:scale-95 transition-all duration-300 \${isScrolled ? 'px-3 py-2 text-[9px] tracking-widest' : 'px-4 py-2.5 text-[10px] tracking-wider'}\`}\n            >\n              <Phone className={\`text-[#E5A93B] transition-all duration-300 \${isScrolled ? 'w-3 h-3' : 'w-3.5 h-3.5'}\`} strokeWidth={1.5} />\n              ZAVOLAŤ\n            </a>`
);

fs.writeFileSync(filePath, content);

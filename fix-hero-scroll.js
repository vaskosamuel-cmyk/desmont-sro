import fs from 'fs';

const filePath = 'src/pages/Home.tsx';
let content = fs.readFileSync(filePath, 'utf8');

// Ensure ChevronDown is imported
if (!content.includes('ChevronDown')) {
  content = content.replace(/import \{ ([^}]+) \} from 'lucide-react';/, "import { $1, ChevronDown } from 'lucide-react';");
}

// Add the scroll down indicator
content = content.replace(
  /<button \n\s*onClick=\{openSheet\}\n\s*className="inline-flex items-center justify-center gap-2 bg-\[#E5A93B\] hover:bg-\[#D4AF37\] transition-colors text-white font-bold py-4 px-6 rounded-\[1rem\] text-\[13px\] tracking-wider w-full max-w-sm mb-4 whitespace-nowrap"\n\s*>\n\s*NEZÁVÄZNÁ CENOVÁ PONUKA <ArrowRight className="w-5 h-5" \/>\n\s*<\/button>/,
  `<button 
              onClick={openSheet}
              className="inline-flex items-center justify-center gap-2 bg-[#E5A93B] hover:bg-[#D4AF37] transition-colors text-white font-bold py-4 px-6 rounded-[1rem] text-[13px] tracking-wider w-full max-w-sm mb-4 whitespace-nowrap"
            >
              NEZÁVÄZNÁ CENOVÁ PONUKA <ArrowRight className="w-5 h-5" />
            </button>
            <a 
              href="#sluzby" 
              onClick={(e) => {
                e.preventDefault();
                document.getElementById('sluzby')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="flex flex-col items-center justify-center gap-1.5 mt-2 text-white/70 hover:text-[#E5A93B] transition-colors cursor-pointer"
            >
              <span className="text-[10px] font-bold tracking-widest uppercase">Viac informácií</span>
              <ChevronDown className="w-4 h-4 animate-bounce" strokeWidth={2} />
            </a>`
);

// Add id="sluzby" to the services section
content = content.replace(
  /<section className="py-12 px-6">/,
  '<section id="sluzby" className="py-12 px-6 scroll-mt-6">'
);

fs.writeFileSync(filePath, content);

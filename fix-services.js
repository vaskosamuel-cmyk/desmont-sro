import fs from 'fs';
import path from 'path';

const pagesDir = 'src/pages';
const files = [
  'ExterierFasady.tsx',
  'Instalacie.tsx',
  'Interier.tsx',
  'Rekonstrukcie.tsx',
  'StavbyNaKluc.tsx'
];

files.forEach(file => {
  const filePath = path.join(pagesDir, file);
  if (!fs.existsSync(filePath)) return;
  
  let content = fs.readFileSync(filePath, 'utf8');

  // 1. Heading change
  content = content.replace(
    /<h2 className="text-\[14px\] font-extrabold tracking-widest text-\[#E5A93B\] uppercase mb-2\">\s*ČO VŠETKO VIEME ZABEZPEČIŤ\s*<\/h2>\s*<h3 className="text-\[24px\] font-extrabold text-\[#1A1A1A\] leading-tight">\s*Vyberte si službu, <br \/> ktorú potrebujete\.\s*<\/h3>/,
    `<h2 className="text-[14px] font-extrabold tracking-widest text-[#E5A93B] uppercase mb-2">
              NAŠE SLUŽBY
            </h2>
            <h3 className="text-[24px] font-extrabold text-[#1A1A1A] leading-tight mb-2">
              Čo všetko vieme zabezpečiť
            </h3>
            <p className="text-[14px] text-gray-600 font-medium">
              Od jednotlivých prác až po kompletné technické riešenie.
            </p>`
  );

  // 2. Accordion header change
  content = content.replace(
    /<div className="flex items-center gap-4">\s*<span className={`text-\[13px\] font-extrabold transition-colors duration-300 \$\{isExpanded \? 'text-\[#E5A93B\]' : 'text-gray-400'\}`}>\s*\{service\.id\}\s*<\/span>\s*<span className="text-\[15px\] font-bold text-\[#1A1A1A\]">\s*\{service\.title\}\s*<\/span>\s*<\/div>/g,
    `<div className="flex items-start gap-4">
                      <span className={\`text-[13px] font-extrabold pt-0.5 transition-colors duration-300 \${isExpanded ? 'text-[#E5A93B]' : 'text-gray-400'}\`}>
                        {service.id}
                      </span>
                      <div className="flex flex-col gap-1 pr-4">
                        <span className="text-[15px] font-bold text-[#1A1A1A]">
                          {service.title}
                        </span>
                        <span className={\`text-[12px] font-medium leading-relaxed transition-colors duration-300 \${isExpanded ? 'text-gray-600' : 'text-gray-500'}\`}>
                          {service.desc}
                        </span>
                      </div>
                    </div>`
  );

  // 3. Remove description from expanded body (using exact match)
  content = content.replace(
    /<p className="text-\[14px\] text-gray-600 font-medium leading-relaxed">\s*\{service\.desc\}\s*<\/p>\s*/g,
    ''
  );

  // 4. Add "Potrebujete pomôcť?" above Kontaktovať button inside the accordion body
  content = content.replace(
    /(<button\s*onClick={\(e\) => \{ e\.stopPropagation\(\); openSheet\(\); \}}\s*className="mt-4 bg-\[#1A1A1A\] text-white px-5 py-2\.5 rounded-lg text-\[12px\] font-bold uppercase tracking-wider hover:bg-\[#E5A93B\] transition-colors w-fit flex items-center gap-2 shadow-sm"\s*>)/g,
    `<div className="flex flex-col gap-1.5 mt-4">
                          <span className="text-[11px] font-bold tracking-widest text-[#E5A93B] uppercase">Potrebujete pomôcť?</span>
                          <button 
                            onClick={(e) => { e.stopPropagation(); openSheet(); }}
                            className="bg-[#1A1A1A] text-white px-5 py-2.5 rounded-lg text-[12px] font-bold uppercase tracking-wider hover:bg-[#E5A93B] transition-colors w-fit flex items-center gap-2 shadow-sm"
                          >`
  );

  // Close the div wrapping the button
  content = content.replace(
    /Kontaktovať <ChevronRight className="w-4 h-4" \/>\s*<\/button>/g,
    `Kontaktovať <ChevronRight className="w-4 h-4" />
                          </button>
                        </div>`
  );

  fs.writeFileSync(filePath, content);
  console.log('Fixed', file);
});

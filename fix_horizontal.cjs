const fs = require('fs');
const path = require('path');

const files = [
  'src/pages/StavbyNaKluc.tsx',
  'src/pages/Rekonstrukcie.tsx',
  'src/pages/InterierInstalacie.tsx',
  'src/pages/ExterierFasady.tsx'
];

const targetPattern = /<ul className="flex flex-col gap-6 w-full">[\s\S]*?<\/ul>/g;
const replacement = `<ul className="flex flex-row justify-between w-full">
                <li className="flex flex-col items-center text-center flex-1">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white shadow-sm flex items-center justify-center mb-2">
                    <HardHat className="w-5 h-5 sm:w-6 sm:h-6 text-[#E5A93B]" />
                  </div>
                  <span className="text-[11px] sm:text-[13px] text-[#1A1A1A] font-bold leading-tight">Skúsení<br/>profesionáli</span>
                </li>
                <li className="flex flex-col items-center text-center flex-1">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white shadow-sm flex items-center justify-center mb-2">
                    <ShieldCheck className="w-5 h-5 sm:w-6 sm:h-6 text-[#E5A93B]" />
                  </div>
                  <span className="text-[11px] sm:text-[13px] text-[#1A1A1A] font-bold leading-tight">Kvalitné<br/>materiály</span>
                </li>
                <li className="flex flex-col items-center text-center flex-1">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white shadow-sm flex items-center justify-center mb-2">
                    <Check className="w-5 h-5 sm:w-6 sm:h-6 text-[#E5A93B]" />
                  </div>
                  <span className="text-[11px] sm:text-[13px] text-[#1A1A1A] font-bold leading-tight">Spokojnosť<br/>zákazníkov</span>
                </li>
              </ul>`;

for (const file of files) {
  const content = fs.readFileSync(file, 'utf8');
  const updatedContent = content.replace(targetPattern, replacement);
  fs.writeFileSync(file, updatedContent);
  console.log(`Updated ${file}`);
}

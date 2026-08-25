import fs from 'fs';

const filePath = 'src/pages/Home.tsx';
let content = fs.readFileSync(filePath, 'utf8');

// Replace H1
content = content.replace(
  /<h1 className="text-\[44px\] font-extrabold tracking-tight text-white mb-4 uppercase leading-\[1\.05\]">\s*Stavby, ktoré majú <br \/>\s*<span className="text-\[#E5A93B\]">základ<\/span> <br \/>\s*v kvalite\.\s*<\/h1>/,
  `<h1 className="text-[36px] sm:text-[40px] font-extrabold tracking-tight text-white mb-4 uppercase leading-[0.95] max-w-[330px]">
              STAVBY, KTORÉ <br />
              MAJÚ <span className="text-[#E5A93B]">ZÁKLAD</span> <br />
              V KVALITE.
            </h1>`
);

// Replace Paragraph
content = content.replace(
  /<p className="text-\[1\.05rem\] text-gray-200 mb-8 font-medium max-w-\[280px\]">\s*Kompletné stavebné riešenia od základov až po finálne detaily pre Bratislavu a okolie\.\s*<\/p>/,
  `<p className="text-[1.05rem] text-gray-200 mb-8 font-medium max-w-[280px]">
              Kompletné stavebné riešenia od základov až po finálne detaily.
            </p>`
);

// Replace CTA
content = content.replace(
  /<button\s*onClick=\{openSheet\}\s*className="inline-flex items-center justify-center gap-3 bg-\[#E5A93B\] hover:bg-\[#D4AF37\] transition-colors text-white font-bold py-\[18px\] px-8 rounded-2xl text-\[1\.05rem\] w-full max-w-sm mb-4"\s*>\s*<div className="bg-white rounded-full p-1 flex items-center justify-center">\s*<HardHat className="w-4 h-4 text-\[#E5A93B\]" strokeWidth=\{1\.5\} \/>\s*<\/div>\s*NEZÁVÄZNÁ CENOVÁ PONUKA\s*<\/button>/,
  `<button 
              onClick={openSheet}
              className="inline-flex items-center justify-center gap-2 bg-[#E5A93B] hover:bg-[#D4AF37] transition-colors text-white font-bold py-4 px-6 rounded-[1rem] text-[13px] tracking-wider w-full max-w-sm mb-4 whitespace-nowrap"
            >
              NEZÁVÄZNÁ CENOVÁ PONUKA <ArrowRight className="w-5 h-5" />
            </button>`
);

fs.writeFileSync(filePath, content);

import fs from 'fs';

function insertSeoSection(filePath, seoContent) {
  let content = fs.readFileSync(filePath, 'utf8');
  
  const searchPattern = `        </section>\n\n        {/* Before / After Slider */}`;
  
  if (content.includes(searchPattern)) {
    content = content.replace(searchPattern, `        </section>\n\n${seoContent}\n\n        {/* Before / After Slider */}`);
    fs.writeFileSync(filePath, content);
    console.log(`Updated ${filePath}`);
  } else {
    console.log(`Pattern not found in ${filePath}`);
  }
}

const seoStarostlivost = `        {/* SEO / Intro Paragraph */}
        <section className="pt-12 pb-6 px-6 bg-[#F4F2EB]">
          <div className="relative flex flex-col items-center text-center">
            {/* Eyebrow */}
            <div className="flex flex-col items-center mb-6 relative z-10">
              <span className="text-[13px] font-bold tracking-[0.15em] text-[#405C41] uppercase">
                ZDRAVÉ RASTLINY, ROZKVITNUTÉ ZÁHONY
              </span>
              <div className="w-8 h-[1px] bg-[#405C41]/30 mt-4"></div>
            </div>

            <h2 className="text-[32px] font-extrabold text-[#1A1A1A] leading-[1.15] mb-7 relative z-10 tracking-tight">
              Tajomstvo <br/>
              <span className="text-[#405C41]">krásnej záhrady</span>
            </h2>
            
            <p className="text-[17px] text-[#1A1A1A] font-bold leading-[1.5] relative z-10 mb-8 max-w-[280px]">
              Záhrada, ktorá kvitne a prospieva, nie je náhoda.
            </p>
            
            <div className="flex flex-col items-start text-left w-full max-w-[340px] relative z-10">
              <p className="text-[15px] text-gray-700 font-medium leading-[1.6] mb-6">
                Správna výživa, ochrana pred škodcami a včasná starostlivosť o rastliny sú základom. My sa postaráme o to, aby vaša záhrada prekvitala.
              </p>
              
              <ul className="flex flex-col gap-3">
                <li className="flex items-center gap-3">
                  <Sprout className="w-5 h-5 text-[#78A143]" />
                  <span className="text-[15px] text-[#1A1A1A] font-semibold">Zdravý rast rastlín</span>
                </li>
                <li className="flex items-center gap-3">
                  <Scissors className="w-5 h-5 text-[#78A143]" />
                  <span className="text-[15px] text-[#1A1A1A] font-semibold">Odborná starostlivosť</span>
                </li>
                <li className="flex items-center gap-3">
                  <Sparkles className="w-5 h-5 text-[#78A143]" />
                  <span className="text-[15px] text-[#1A1A1A] font-semibold">Rozkvitnuté záhony</span>
                </li>
              </ul>
            </div>
            
            <div className="absolute -left-3 top-20 text-[#E8E6DB] opacity-60 pointer-events-none">
               <Leaf className="w-16 h-16 -rotate-12" />
            </div>
          </div>
        </section>`;

const seoStrihanie = `        {/* SEO / Intro Paragraph */}
        <section className="pt-12 pb-6 px-6 bg-[#F4F2EB]">
          <div className="relative flex flex-col items-center text-center">
            {/* Eyebrow */}
            <div className="flex flex-col items-center mb-6 relative z-10">
              <span className="text-[13px] font-bold tracking-[0.15em] text-[#405C41] uppercase">
                DOKONALÝ TVAR, ZDRAVÝ RAST
              </span>
              <div className="w-8 h-[1px] bg-[#405C41]/30 mt-4"></div>
            </div>

            <h2 className="text-[32px] font-extrabold text-[#1A1A1A] leading-[1.15] mb-7 relative z-10 tracking-tight">
              Odborný rez <br/>
              <span className="text-[#405C41]">pre vaše dreviny</span>
            </h2>
            
            <p className="text-[17px] text-[#1A1A1A] font-bold leading-[1.5] relative z-10 mb-8 max-w-[280px]">
              Krásne tvarované stromy a ploty vyžadujú presnosť.
            </p>
            
            <div className="flex flex-col items-start text-left w-full max-w-[340px] relative z-10">
              <p className="text-[15px] text-gray-700 font-medium leading-[1.6] mb-6">
                Správne načasovanie a technika rezu sú kľúčové pre vitalitu stromov a hustotu živých plotov. Postaráme sa o dokonalý vzhľad vašich drevín.
              </p>
              
              <ul className="flex flex-col gap-3">
                <li className="flex items-center gap-3">
                  <Sprout className="w-5 h-5 text-[#78A143]" />
                  <span className="text-[15px] text-[#1A1A1A] font-semibold">Zdravie stromov</span>
                </li>
                <li className="flex items-center gap-3">
                  <Scissors className="w-5 h-5 text-[#78A143]" />
                  <span className="text-[15px] text-[#1A1A1A] font-semibold">Presný a čistý rez</span>
                </li>
                <li className="flex items-center gap-3">
                  <Sparkles className="w-5 h-5 text-[#78A143]" />
                  <span className="text-[15px] text-[#1A1A1A] font-semibold">Dokonalý tvar plotov</span>
                </li>
              </ul>
            </div>
            
            <div className="absolute -left-3 top-20 text-[#E8E6DB] opacity-60 pointer-events-none">
               <Leaf className="w-16 h-16 -rotate-12" />
            </div>
          </div>
        </section>`;

const seoUdrzba = `        {/* SEO / Intro Paragraph */}
        <section className="pt-12 pb-6 px-6 bg-[#F4F2EB]">
          <div className="relative flex flex-col items-center text-center">
            {/* Eyebrow */}
            <div className="flex flex-col items-center mb-6 relative z-10">
              <span className="text-[13px] font-bold tracking-[0.15em] text-[#405C41] uppercase">
                VAŠA ZÁHRADA BEZ NÁMAHY
              </span>
              <div className="w-8 h-[1px] bg-[#405C41]/30 mt-4"></div>
            </div>

            <h2 className="text-[32px] font-extrabold text-[#1A1A1A] leading-[1.15] mb-7 relative z-10 tracking-tight">
              Záhrada v <br/>
              <span className="text-[#405C41]">perfektnom stave</span>
            </h2>
            
            <p className="text-[17px] text-[#1A1A1A] font-bold leading-[1.5] relative z-10 mb-8 max-w-[280px]">
              Užite si voľný čas, starostlivosť nechajte na nás.
            </p>
            
            <div className="flex flex-col items-start text-left w-full max-w-[340px] relative z-10">
              <p className="text-[15px] text-gray-700 font-medium leading-[1.6] mb-6">
                Od jarného prebudenia až po zazimovanie. Zabezpečíme všetko potrebné, aby vaša záhrada vyzerala úžasne počas celého roka.
              </p>
              
              <ul className="flex flex-col gap-3">
                <li className="flex items-center gap-3">
                  <Sprout className="w-5 h-5 text-[#78A143]" />
                  <span className="text-[15px] text-[#1A1A1A] font-semibold">Celoročná starostlivosť</span>
                </li>
                <li className="flex items-center gap-3">
                  <Scissors className="w-5 h-5 text-[#78A143]" />
                  <span className="text-[15px] text-[#1A1A1A] font-semibold">Profesionálny prístup</span>
                </li>
                <li className="flex items-center gap-3">
                  <Sparkles className="w-5 h-5 text-[#78A143]" />
                  <span className="text-[15px] text-[#1A1A1A] font-semibold">Všetko v jednom balíku</span>
                </li>
              </ul>
            </div>
            
            <div className="absolute -left-3 top-20 text-[#E8E6DB] opacity-60 pointer-events-none">
               <Leaf className="w-16 h-16 -rotate-12" />
            </div>
          </div>
        </section>`;

insertSeoSection('src/pages/Starostlivost.tsx', seoStarostlivost);
insertSeoSection('src/pages/Strihanie.tsx', seoStrihanie);
insertSeoSection('src/pages/Udrzba.tsx', seoUdrzba);

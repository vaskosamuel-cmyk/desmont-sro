import fs from 'fs';

const filePath = 'src/pages/Kontakt.tsx';
let content = fs.readFileSync(filePath, 'utf8');

// Update Hero
content = content.replace(/Sme tu pre vašu <br \/>\s*<span className="text-\[#E5A93B\]">záhradu\.<\/span>/g, 'Sme tu pre vašu <br />\n              <span className="text-[#E5A93B]">stavbu.</span>');
content = content.replace(/alt="Záhrada"/g, 'alt="Stavba"');

// Update Email
content = content.replace(/info@zahradanamieru\.sk/g, 'info@desmostav.sk');

// Add Billing Info Section
const billingSection = `
        {/* Billing Info Section */}
        <section className="px-6 mb-8">
          <div className="bg-[#FAF9F5] border border-black/5 rounded-[1.5rem] p-6 shadow-sm flex flex-col gap-3">
            <span className="text-[10px] font-bold tracking-widest text-[#E5A93B] uppercase mb-1 block">
              Fakturačné údaje
            </span>
            <div className="text-[13px] text-gray-700 font-medium leading-relaxed">
              <strong>DESMO STAV, spol. s r.o.</strong><br/>
              Krajinská 30<br/>
              821 06 Bratislava
            </div>
            
            <div className="h-px w-full bg-black/5 my-1"></div>
            
            <div className="grid grid-cols-2 gap-2 text-[12px] text-gray-600 font-medium">
              <div><strong>IČO:</strong> 52008410</div>
              <div><strong>DIČ:</strong> 2120866638</div>
              <div className="col-span-2"><strong>IČ-DPH:</strong> SK2120866638</div>
            </div>
            
            <div className="h-px w-full bg-black/5 my-1"></div>
            
            <p className="text-[10px] text-gray-500 font-medium leading-relaxed">
              Spoločnosť zapísaná v OR SR Okresného súdu Bratislava III. Oddiel: Sro, vl.číslo: 132367/B
            </p>
          </div>
        </section>
`;

// Insert billingSection before Locations Section
content = content.replace(/{ \/\* Locations Section \*\/ }/, billingSection + '\n        {/* Locations Section */}');

// Adjust Locations content
content = content.replace(/Bratislava • Pezinok • Svätý Jur • Senec\s*<br\/>\s*Malinovo • Ivanka pri Dunaji • Bernolákovo\s*<br\/>\s*a ďalšie lokality/g, 'Hlavné mesto Bratislava a širšie okolie.<br/>Stavby, rekonštrukcie, obklady, dlažby,<br/>kúpeľne, maľovanie a sťahovanie.');

// Adjust WhatsApp section background / styling
content = content.replace(/bg-\[#4a6b36\] hover:bg-\[#D4AF37\]/g, 'bg-[#E5A93B] hover:bg-[#D4AF37]');
content = content.replace(/bg-\[#D4AF37\] hover:bg-\[#4a6b36\]/g, 'bg-[#E5A93B] hover:bg-[#D4AF37]');

fs.writeFileSync(filePath, content);
console.log('Done fixing Kontakt.tsx');

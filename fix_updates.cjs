const fs = require('fs');

// 1. Kontakt.tsx
let kontakt = fs.readFileSync('src/pages/Kontakt.tsx', 'utf8');
kontakt = kontakt.replace(
  'src="/desmostav-rekonstrukcia-domu-03.webp"',
  'src="/desmostav-stavba-na-kluc-06.webp"'
);
fs.writeFileSync('src/pages/Kontakt.tsx', kontakt);

// 2. About.tsx
let about = fs.readFileSync('src/pages/About.tsx', 'utf8');
about = about.replace(
  'src="/desmostav-prerabka-domu-19.webp"',
  'src="/desmostav-stavebna-firma-14.webp"'
);
fs.writeFileSync('src/pages/About.tsx', about);

// 3. NasePrace.tsx
let nasePrace = fs.readFileSync('src/pages/NasePrace.tsx', 'utf8');

const oldCta = `{/* CTA Section */}
        <section className="py-12 px-6 bg-[#1A1A1A] text-white text-center flex flex-col items-center relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-tr from-[#1A1A1A] via-[#1A1A1A] to-[#E5A93B]/10"></div>
          <div className="relative z-10 flex flex-col items-center w-full max-w-sm">
            <h2 className="text-[28px] font-extrabold tracking-tight mb-4 uppercase">
              ZAUJALA VÁS NAŠA <span className="text-[#E5A93B]">PRÁCA?</span>
            </h2>
            <p className="text-[15px] text-gray-300 font-medium mb-8 leading-[1.6]">
              Neváhajte nás kontaktovať pre bezplatnú obhliadku a cenovú ponuku.
            </p>
            <button 
              onClick={openSheet}
              className="inline-flex items-center justify-center gap-2 bg-[#E5A93B] hover:bg-[#D4AF37] transition-colors text-white font-bold py-4 px-8 rounded-[1rem] text-[13px] tracking-wider w-full mb-4"
            >
              <HardHat className="w-5 h-5 text-white" strokeWidth={1.5} />
              <span className="mt-[2px]">ZÍSKAŤ PONUKU</span>
            </button>
            <a href="tel:+421907673697" className="flex items-center gap-3 text-[#E5A93B] font-bold text-[15px] hover:text-white transition-colors">
              <Phone className="w-5 h-5" strokeWidth={1.5} />
              0907 673 697
            </a>
          </div>
        </section>`;

const newCta = `{/* CTA */}
        <section className="px-6 pt-8 pb-12 bg-[#F5F5F5]">
          <div className="bg-white rounded-[1.5rem] p-6 flex flex-col items-center text-center shadow-[0_8px_30px_rgb(0,0,0,0.06)] border border-black/[0.03]">
            <div className="w-12 h-12 rounded-full bg-[#1A1A1A] flex items-center justify-center mb-4 shadow-md">
              <HardHat className="w-6 h-6 text-transparent fill-[#E5A93B]" />
            </div>
            <h2 className="text-[24px] font-extrabold tracking-tight text-[#1A1A1A] mb-2 leading-[1.1]">
              Máte projekt? <br />
              Porozprávajme sa o ňom.
            </h2>
            <p className="text-[14px] text-gray-600 mb-6 font-medium leading-[1.6]">
              Pripravíme vám nezáväznú cenovú ponuku a navrhneme najlepšie riešenie pre vaše bývanie.
            </p>
            <button 
              onClick={openSheet}
              className="inline-flex items-center justify-center gap-2 bg-[#E5A93B] hover:bg-[#D4AF37] transition-colors text-white font-bold py-3.5 px-6 rounded-[1rem] text-[13px] tracking-wider w-full mb-4 shadow-sm"
            >
              <HardHat className="w-4 h-4 text-white" strokeWidth={2} />
              <span>NEZÁVÄZNÁ CENOVÁ PONUKA</span>
            </button>
            <a href="tel:+421907673697" className="flex items-center gap-2 text-[#E5A93B] font-bold text-[15px] hover:text-[#D4AF37] transition-colors">
              <Phone className="w-4 h-4" />
              +421 907 673 697
            </a>
          </div>
        </section>`;

nasePrace = nasePrace.replace(oldCta, newCta);
fs.writeFileSync('src/pages/NasePrace.tsx', nasePrace);


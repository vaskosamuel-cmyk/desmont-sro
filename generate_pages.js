import fs from 'fs';

const generatePage = (name, heroTitle, heroDesc, beforeAfterTitle, features, included, editorial, cta, mainImage, sliderImage, detailImage) => `
import { Leaf, Clock, ShieldCheck, Check, Calendar, Phone, Sprout, Scissors, Sparkles, Facebook, Instagram, MapPin, Mail } from 'lucide-react';
import TopNav from '../components/TopNav';
import { Link } from 'react-router-dom';
import { useContactSheet } from '../context/ContactSheetContext';
import { motion } from 'motion/react';
import { useState } from 'react';

export default function ${name}() {
  const { openSheet } = useContactSheet();
  const [sliderPosition, setSliderPosition] = useState(50);

  return (
    <div className="fixed inset-0 bg-[#E5E5E5] font-sans text-gray-900 flex justify-center overflow-hidden">
      {/* Mobile Constraint Container */}
      <div className="w-full max-w-[428px] bg-[#F4F2EB] shadow-2xl relative flex flex-col h-[100dvh] overflow-y-auto overflow-x-hidden">
        
        {/* Top Navigation */}
        <TopNav />

        {/* Hero Section */}
        <section className="relative h-[65dvh] min-h-[450px] shrink-0 flex flex-col justify-end pb-12">
          {/* Background Image */}
          <div className="absolute inset-0 z-0">
            <img
              src="${mainImage}"
              alt="${name}"
              className="w-full h-full object-cover object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-black/20"></div>
          </div>

          {/* Hero Content */}
          <div className="relative z-10 px-6 flex flex-col items-start">
            <span className="text-[13px] font-bold tracking-[0.15em] text-[#78A143] uppercase mb-3">
              NAŠE SLUŽBY
            </span>
            <div className="w-8 h-[2px] bg-[#78A143] mb-4"></div>
            <h1 className="text-[42px] font-extrabold tracking-tight text-white mb-4 uppercase leading-[1.05]">
              ${heroTitle}
            </h1>
            <p className="text-[15px] text-gray-200 mb-6 font-medium max-w-[280px] leading-[1.6]">
              ${heroDesc}
            </p>

            <div className="flex items-center gap-2 mt-1 mb-2">
              <div className="flex text-[#FBBC04] text-[15px] drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)] tracking-[0.1em]">
                ★★★★★
              </div>
              <span className="text-white text-[13px] font-bold ml-1 drop-shadow-md">4.9</span>
              <span className="text-white/80 text-[13px] font-medium drop-shadow-md">· Google</span>
            </div>
          </div>

          {/* Bottom SVG Curve */}
          <div className="absolute bottom-[-1px] left-0 right-0 w-full overflow-hidden leading-none z-10">
            <svg viewBox="0 0 1440 120" className="w-full h-[20px] sm:h-[25px]" preserveAspectRatio="none">
              <path fill="#F4F2EB" d="M0,120 L0,0 C480,0 1000,100 1440,120 Z"></path>
            </svg>
          </div>
        </section>

        {/* Before / After Slider */}
        <section className="py-8 bg-[#F4F2EB]">
          <div className="px-6 mb-6">
            <h2 className="text-[32px] font-extrabold text-[#1A1A1A] leading-[1.1] tracking-tight mb-4">
              ${beforeAfterTitle}
            </h2>
          </div>

          <div className="px-6">
            <div className="relative w-full aspect-[4/5] rounded-[1.5rem] overflow-hidden shadow-lg flex bg-white select-none group">
              <img 
                src="${sliderImage}" 
                alt="Po úprave"
                className="absolute inset-0 w-full h-full object-cover object-center pointer-events-none"
              />
              <div className="absolute top-4 right-4 bg-[#588040]/90 backdrop-blur-sm px-3 py-1.5 rounded-lg border border-white/20 z-10 pointer-events-none">
                <span className="text-[10px] font-extrabold text-white tracking-widest uppercase">PO</span>
              </div>
              
              <div 
                className="absolute inset-0 z-20 pointer-events-none"
                style={{ clipPath: \`polygon(0 0, \${sliderPosition}% 0, \${sliderPosition}% 100%, 0 100%)\` }}
              >
                <img 
                  src="${sliderImage}" 
                  alt="Pred úpravou"
                  className="absolute inset-0 w-full h-full object-cover object-center grayscale-[0.8] contrast-75 sepia-[0.2]"
                />
                <div className="absolute top-4 left-4 bg-black/60 backdrop-blur-sm px-3 py-1.5 rounded-lg border border-white/10">
                  <span className="text-[10px] font-extrabold text-white tracking-widest uppercase">PRED</span>
                </div>
                <div className="absolute inset-y-0 right-0 w-[1.5px] bg-white shadow-[0_0_10px_rgba(0,0,0,0.5)]"></div>
              </div>

              <div 
                className="absolute top-1/2 -translate-y-1/2 w-10 h-10 bg-white rounded-full shadow-xl flex items-center justify-center z-30 border border-black/5 pointer-events-none transition-transform group-hover:scale-105"
                style={{ left: \`calc(\${sliderPosition}% - 20px)\` }}
              >
                <div className="flex items-center gap-1">
                  <svg width="6" height="10" viewBox="0 0 6 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5 1L1 5L5 9" stroke="#1A1A1A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  <svg width="6" height="10" viewBox="0 0 6 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1 1L5 5L1 9" stroke="#1A1A1A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
              </div>
              <input 
                type="range" 
                min="0" 
                max="100" 
                value={sliderPosition}
                onChange={(e) => setSliderPosition(Number(e.target.value))}
                className="absolute inset-0 w-full h-full opacity-0 z-40 cursor-ew-resize touch-pan-y"
              />
            </div>
          </div>
        </section>

        {/* Features Carousel */}
        <motion.section 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-50px" }}
          className="py-10 bg-[#F4F2EB] flex flex-col"
        >
          <h2 className="text-[11px] font-bold tracking-widest text-[#405C41] uppercase px-6 mb-6">
            PREČO TÁTO SLUŽBA?
          </h2>
          
          <div className="flex overflow-x-auto snap-x snap-mandatory gap-4 w-full pb-6 px-6 [&::-webkit-scrollbar]:hidden" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
            ${features.map((f, i) => `
            <div className="min-w-[85%] sm:min-w-[280px] snap-center flex flex-col bg-white rounded-[1.5rem] p-7 shadow-[0_4px_20px_rgba(0,0,0,0.03)] border border-black/5 items-start text-left relative">
              <div className="w-12 h-12 rounded-full bg-[#F4F2EB] flex items-center justify-center mb-5">
                <${f.icon} className="w-5 h-5 text-[#405C41]" />
              </div>
              <h3 className="text-[14px] font-extrabold text-[#1A1A1A] mb-3 uppercase tracking-wide">${f.title}</h3>
              <p className="text-[14px] text-gray-600 font-medium leading-relaxed pr-6">
                ${f.desc}
              </p>
              <span className="absolute bottom-7 right-7 text-[11px] font-bold text-gray-300">${i+1} / 3</span>
            </div>`).join('')}
          </div>
        </motion.section>

        {/* What is included */}
        <section className="py-8 px-6 bg-[#F4F2EB]">
          <div className="bg-[#FAF9F5] rounded-[1.5rem] p-6 shadow-sm border border-black/5 flex flex-col gap-6">
            <h2 className="text-[11px] font-bold tracking-widest text-[#405C41] uppercase">
              ČO JE SÚČASŤOU SLUŽBY
            </h2>
            
            <div className="flex flex-col gap-5">
              ${included.map((item, i) => `
              <div className="flex items-center gap-4 ${i !== included.length - 1 ? 'border-b border-gray-200 pb-4' : ''}">
                <div className="w-6 h-6 rounded-full bg-[#78A143] flex items-center justify-center shrink-0">
                  <Check className="w-4 h-4 text-white" strokeWidth={2} />
                </div>
                <span className="text-[13px] font-medium text-[#1A1A1A]">${item}</span>
              </div>`).join('')}
            </div>
            
            <div className="w-full h-[180px] rounded-xl overflow-hidden mt-2">
              <img 
                src="${detailImage}" 
                alt="Detail služby"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </section>

        {/* Editorial Transition */}
        <section className="pt-8 pb-4 px-6 bg-[#F4F2EB] flex flex-col items-center text-center">
          <span className="text-[13px] font-bold tracking-[0.15em] text-[#405C41] uppercase leading-[1.6] max-w-[320px]">
            ${editorial.sub}
          </span>
          <p className="text-[17px] text-[#1A1A1A] font-bold mt-5 leading-[1.5] max-w-[280px]">
            ${editorial.main}
          </p>
        </section>

        {/* CTA */}
        <section className="px-6 py-12 bg-[#F4F2EB]">
          <div className="bg-[#EBE8DF] rounded-[1.5rem] p-6 flex flex-col items-center text-center shadow-sm border border-black/5">
            <div className="w-12 h-12 rounded-full bg-[#2B4029] flex items-center justify-center mb-4 shadow-md">
              <Leaf className="w-6 h-6 text-transparent fill-[#78A143]" />
            </div>
            
            <h3 className="text-[18px] font-extrabold text-[#1A1A1A] mb-2 leading-tight">
              ${cta.title}
            </h3>
            
            <p className="text-[13px] text-gray-600 font-medium mb-6">
              Nezáväzne nás kontaktujte.
            </p>
            
            <button 
              onClick={openSheet}
              className="w-full bg-[#588040] hover:bg-[#4a6b36] transition-colors text-white font-bold py-3.5 px-6 rounded-xl flex items-center justify-center gap-3 mb-4 shadow-md"
            >
              <Leaf className="w-5 h-5 text-white" strokeWidth={1.5} />
              <span className="text-[13px] tracking-wider uppercase">ZÍSKAŤ PONUKU</span>
            </button>
            
            <a href="tel:0905123456" className="flex items-center gap-3 text-[#405C41] font-bold text-[15px] hover:text-[#2B4029] transition-colors">
              <Phone className="w-5 h-5" strokeWidth={1.5} />
              0905 123 456
            </a>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-[#1A2619] pt-16 pb-8 px-6 text-white snap-start relative rounded-t-[2.5rem]">
          <div className="flex flex-col gap-8 mb-12">
            <div>
              <h3 className="text-2xl font-extrabold flex items-center gap-3 mb-4">
                <Leaf className="w-6 h-6 text-[#78A143]" strokeWidth={1.5} />
                Záhrada s.r.o.
              </h3>
              <p className="text-gray-400 text-[13px] font-medium leading-relaxed max-w-[250px]">
                Profesionálne záhradnícke služby pre krásu, ktorú si zamilujete každý deň.
              </p>
            </div>
            
            <div className="flex flex-col gap-4">
              <a href="tel:0905123456" className="flex items-center gap-3 text-[14px] font-medium text-white hover:text-[#78A143] transition-colors">
                <Phone className="w-5 h-5 text-[#78A143]" strokeWidth={1.5} />
                +421 905 123 456
              </a>
              <a href="mailto:info@zahrada.sk" className="flex items-center gap-3 text-[14px] font-medium text-white hover:text-[#78A143] transition-colors">
                <Mail className="w-5 h-5 text-[#78A143]" strokeWidth={1.5} />
                info@zahrada.sk
              </a>
              <div className="flex items-start gap-3 text-[14px] font-medium text-white mt-2">
                <MapPin className="w-5 h-5 text-[#78A143] shrink-0" strokeWidth={1.5} />
                <span className="leading-relaxed">Pôsobíme v<br/>Bratislavskom a Trnavskom kraji</span>
              </div>
            </div>

            <div className="flex items-center gap-4 pt-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#78A143] transition-colors">
                <Facebook className="w-5 h-5 text-white" strokeWidth={1.5} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#78A143] transition-colors">
                <Instagram className="w-5 h-5 text-white" strokeWidth={1.5} />
              </a>
            </div>
          </div>
          
          <div className="border-t border-white/10 pt-8 flex flex-col items-center text-center">
            <p className="text-[11px] text-gray-500 font-medium mb-4">
              © {new Date().getFullYear()} Záhrada s.r.o. Všetky práva vyhradené.
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-[11px] text-gray-500 hover:text-white transition-colors">Ochrana súkromia</a>
              <a href="#" className="text-[11px] text-gray-500 hover:text-white transition-colors">Obchodné podmienky</a>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}
`;

fs.writeFileSync('src/pages/Starostlivost.tsx', generatePage(
  'Starostlivost',
  'STAROSTLIVOSŤ <br /> O <span className="text-[#78A143]">ZÁHRADU</span>',
  'Odborná starostlivosť o rastliny, záhony a dreviny pre zdravú a krásnu záhradu počas celého roka.',
  'Rozkvitnutá krása.<br /><span className="text-[#405C41]">Zdravé rastliny.</span>',
  [
    { icon: 'Sprout', title: 'ODBORNÝ PRÍSTUP', desc: 'Každá rastlina v záhrade potrebuje individuálnu starostlivosť a prístup.' },
    { icon: 'Calendar', title: 'CELOROČNÁ KRÁSA', desc: 'Záhrada, ktorá bohato kvitne a teší od skorej jari až do neskorej jesene.' },
    { icon: 'ShieldCheck', title: 'OCHRANA A ZDRAVIE', desc: 'Dôkladná prevencia proti škodcom a správne, pravidelné hnojenie.' }
  ],
  ['Odborné hnojenie rastlín', 'Ochrana proti škodcom a chorobám', 'Pletie a údržba záhonov', 'Dosádzanie nových rastlín'],
  { sub: 'ZDRAVÁ ZÁHRADA JE VÝSLEDKOM ODBORNEJ STAROSTLIVOSTI.', main: 'Radi vám pomôžeme s tou vašou.' },
  { title: 'Chcete mať záhradu <br /> plnú života a farieb?' },
  'https://images.unsplash.com/photo-1416879598555-25925e0a6d0c?auto=format&fit=crop&q=80&w=800',
  'https://images.unsplash.com/photo-1592424001806-039c288593a2?auto=format&fit=crop&q=80&w=800',
  'https://images.unsplash.com/photo-1592424001806-039c288593a2?auto=format&fit=crop&q=80&w=800'
));

fs.writeFileSync('src/pages/Strihanie.tsx', generatePage(
  'Strihanie',
  'STRIHANIE <br /> A TVAROVANIE <br /> <span className="text-[#78A143]">DREVÍN</span>',
  'Profesionálne strihanie a ošetrenie stromov, kríkov a živých plotov pre ich zdravý rast.',
  'Dokonalý tvar.<br /><span className="text-[#405C41]">Zdravý rast.</span>',
  [
    { icon: 'Calendar', title: 'SPRÁVNY ČAS', desc: 'Rez a tvarovanie vykonávame v optimálnom ročnom období pre daný druh.' },
    { icon: 'Scissors', title: 'PRESNÉ TVAROVANIE', desc: 'Precízne strihanie živých plotov a okrasných kríkov do požadovaných tvarov.' },
    { icon: 'ShieldCheck', title: 'BEZPEČNOSŤ', desc: 'Odborný prístup aj pri vyšších stromoch a ťažko dostupných miestach.' }
  ],
  ['Jarný a jesenný udržiavací rez', 'Tvarovanie živých plotov a kríkov', 'Odstránenie suchých a chorých konárov', 'Odvoz a spracovanie bioodpadu'],
  { sub: 'SPRÁVNY REZ PREDĹŽI ŽIVOTNOSŤ VAŠICH STROMOV.', main: 'Odborný rez zaručí vitalitu vašich drevín.' },
  { title: 'Potrebujete ostrihať <br /> stromy alebo živý plot?' },
  'https://images.unsplash.com/photo-1558904541-efa843a96f09?auto=format&fit=crop&q=80&w=800',
  'https://images.unsplash.com/photo-1616058055627-c10b777a8286?auto=format&fit=crop&q=80&w=800',
  'https://images.unsplash.com/photo-1616058055627-c10b777a8286?auto=format&fit=crop&q=80&w=800'
));

fs.writeFileSync('src/pages/Udrzba.tsx', generatePage(
  'Udrzba',
  'KOMPLETNÁ <br /> ÚDRŽBA <br /> <span className="text-[#78A143]">ZÁHRADY</span>',
  'Postaráme sa o vašu záhradu od A po Z. Vy si len užívajte dokonalý výsledok bez námahy.',
  'Záhrada bez starostí.<br /><span className="text-[#405C41]">Perfektný výsledok.</span>',
  [
    { icon: 'Sparkles', title: 'VŠETKO V JEDNOM', desc: 'O kosenie, hnojenie, pletie buriny aj strihanie sa postaráme kompletne my.' },
    { icon: 'Clock', title: 'ÚSPORA ČASU', desc: 'Venujte sa naplno rodine a priateľom, my sa postaráme o vašu krásnu záhradu.' },
    { icon: 'Calendar', title: 'DLHODOBÝ PLÁN', desc: 'Vytvoríme pravidelný harmonogram údržby šitý na mieru pre celý rok.' }
  ],
  ['Kosenie a vertikutácia trávnika', 'Jarné a jesenné generálne upratovanie', 'Údržba a kontrola závlahového systému', 'Aplikácia hnojív a ochranných postrekov'],
  { sub: 'KRÁSNA ZÁHRADA BEZ AKEJKOĽVEK NÁMAHY.', main: 'Postaráme sa o všetko, od kosenia až po zazimovanie.' },
  { title: 'Chcete odovzdať <br /> starostlivosť profesionálom?' },
  'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&q=80&w=800',
  'https://images.unsplash.com/photo-1622383563227-04401ab4e5ea?auto=format&fit=crop&q=80&w=800',
  'https://images.unsplash.com/photo-1622383563227-04401ab4e5ea?auto=format&fit=crop&q=80&w=800'
));

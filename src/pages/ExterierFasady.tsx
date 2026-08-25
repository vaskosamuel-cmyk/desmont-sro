import { FaqAccordion } from '../components/FaqAccordion';
import { Plus, Minus, HardHat, ChevronLeft, ChevronRight, Clock, ShieldCheck, Check, Calendar, Phone, Hammer, Scissors, Sparkles, MapPin, Mail } from 'lucide-react';
import { Facebook, Instagram } from "../components/SocialIcons";
import TopNav from '../components/TopNav';
import { Logos3 } from '../components/blocks/logos3';
import Lightbox from '../components/Lightbox';
import { Link } from 'react-router-dom';
import { useContactSheet } from '../context/ContactSheetContext';
import { motion } from 'motion/react';
import React, { useState, useRef } from 'react';


const servicesData = [
  {
    id: "01",
    title: "Fasády",
    desc: "Zabezpečujeme kompletnú realizáciu a obnovu fasád, od zateplenia až po finálne omietky a nátery.",
    bullets: ["Zateplenie", "Fasádne systémy", "Omietky", "Nátery"]
  },
  {
    id: "02",
    title: "Strechy",
    desc: "Realizujeme nové strechy aj kompletné rekonštrukcie striech s využitím kvalitných krytín a materiálov.",
    bullets: ["Nové strechy", "Rekonštrukcia striech", "Strešné krytiny", "Opravy"]
  },
  {
    id: "03",
    title: "Zámková dlažba",
    desc: "Odborná pokládka dlažby pre pešie zóny aj pojazdné plochy s dôrazom na správne podložie.",
    bullets: ["Chodníky", "Terasy", "Príjazdové cesty", "Parkovacie plochy"]
  },
  {
    id: "04",
    title: "Terénne úpravy",
    desc: "Komplexné zemné práce, zarovnanie terénu a príprava pozemku pre ďalšiu výstavbu alebo výsadbu.",
    bullets: ["Úprava pozemku", "Zemné práce", "Odvodnenie", "Príprava terénu"]
  },
  {
    id: "05",
    title: "Oplotenie",
    desc: "Výstavba plotov a brán, ktoré zabezpečia vaše súkromie a dodajú vášmu pozemku estetický vzhľad.",
    bullets: ["Ploty", "Brány", "Vstupné prvky"]
  },
  {
    id: "06",
    title: "Exteriérové prvky",
    desc: "Drobné stavby a prvky, ktoré dotvárajú celkový vzhľad a funkčnosť vášho exteriéru.",
    bullets: ["Terasy", "Schody", "Prístrešky", "Drobná architektúra"]
  }
];

export default function ExterierFasady() {

  const galleryImages = [
  "/desmostav-hruba-stavba-17.webp",
  "/desmostav-hruba-stavba-26.webp",
  "/desmostav-hruba-stavba-35.webp",
  "/desmostav-stavebna-firma-05.webp",
  "/desmostav-stavebna-firma-14.webp",
  "/desmostav-stavebna-firma-23.webp",
  "/desmostav-stavba-na-kluc-33.webp",
  "/desmostav-rekonstrukcia-domu-03.webp",
  "/desmostav-rekonstrukcia-domu-21.webp",
  "/desmostav-prerabka-domu-19.webp",
  "/desmostav-stavebne-sluzby-18.webp",
  "/desmostav-prerabka-domu-10.webp"
];

  const { openSheet } = useContactSheet();

  const infiniteGallery = [...galleryImages, ...galleryImages, ...galleryImages];

  // Initialize scroll position to the middle set on mount
  React.useEffect(() => {
    if (galleryRef.current) {
      setTimeout(() => {
        if (galleryRef.current) {
           galleryRef.current.scrollLeft = galleryRef.current.scrollWidth / 3;
        }
      }, 100);
    }
  }, []);

  const handleInfiniteScroll = (e: React.UIEvent<HTMLDivElement>) => {
    const container = e.currentTarget;
    const setWidth = container.scrollWidth / 3;
    if (container.scrollLeft <= 5) {
      container.scrollLeft += setWidth;
    } else if (container.scrollLeft >= (setWidth * 2) - 5) {
      container.scrollLeft -= setWidth;
    }
  };

  const scrollContainer = (ref: React.RefObject<HTMLDivElement>, direction: 'left' | 'right') => {
    if (ref.current) {
      const container = ref.current;
      const setWidth = container.scrollWidth / 3;
      const scrollAmount = direction === 'left' ? -320 : 320;
      const currentScroll = container.scrollLeft;
      container.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const [expandedService, setExpandedService] = useState<string | null>(null);

  const galleryRef = useRef<HTMLDivElement>(null);
  
  const scrollGallery = (direction: 'left' | 'right') => {
    if (galleryRef.current) {
      const itemWidth = galleryRef.current.children[0].clientWidth + 16;
      const maxScroll = galleryRef.current.scrollWidth - galleryRef.current.clientWidth;
      
      if (direction === 'right') {
        if (galleryRef.current.scrollLeft >= maxScroll - 10) {
           galleryRef.current.scrollTo({ left: 0, behavior: 'smooth' });
        } else {
           galleryRef.current.scrollBy({ left: itemWidth, behavior: 'smooth' });
        }
      } else {
        if (galleryRef.current.scrollLeft <= 10) {
           galleryRef.current.scrollTo({ left: maxScroll, behavior: 'smooth' });
        } else {
           galleryRef.current.scrollBy({ left: -itemWidth, behavior: 'smooth' });
        }
      }
    }
  };

  const handleGalleryScroll = (e: any) => {};

  const carouselRef = useRef<HTMLDivElement>(null);
  const [activeFeatureIndex, setActiveFeatureIndex] = useState(0);
  
  const scrollCarousel = (direction: 'left' | 'right') => {
    if (carouselRef.current) {
      const itemWidth = carouselRef.current.children[0].clientWidth + 16;
      if (direction === 'left' && activeFeatureIndex > 0) {
        carouselRef.current.scrollBy({ left: -itemWidth, behavior: 'smooth' });
        setActiveFeatureIndex(prev => prev - 1);
      } else if (direction === 'right' && activeFeatureIndex < 2) {
        carouselRef.current.scrollBy({ left: itemWidth, behavior: 'smooth' });
        setActiveFeatureIndex(prev => prev + 1);
      }
    }
  };

  return (
    <div className="fixed inset-0 bg-[#E5E5E5] font-sans text-gray-900 flex justify-center overflow-hidden">
      <div className="w-full max-w-[428px] bg-[#F5F5F5] shadow-2xl relative flex flex-col h-[100dvh] overflow-y-auto overflow-x-hidden">
        
        <TopNav />

        {/* Hero Section */}
        <section className="relative h-[65dvh] min-h-[450px] shrink-0 flex flex-col justify-end pb-12">
          <div className="absolute inset-0 z-0">
            <img
              src="/desmostav-stavba-na-kluc-06.webp"
              alt="Fasády a exteriér"
              className="w-full h-full object-cover object-center"
            />
            <div className="absolute inset-0 bg-black/20 bg-gradient-to-r from-black/90 via-black/60 to-transparent"></div>
          </div>

          <div className="relative z-10 px-6 flex flex-col items-start">
            <span className="text-[13px] font-bold tracking-[0.15em] text-[#E5A93B] uppercase mb-3">
              NAŠE SLUŽBY
            </span>
            <div className="w-8 h-[2px] bg-[#E5A93B] mb-4"></div>
            <h1 className="text-[42px] font-extrabold tracking-tight text-white mb-4 uppercase leading-[1.05]">
              EXTERIÉR <br /> <span className="text-[#E5A93B]">A FASÁDY</span>
            </h1>
            <p className="text-[15px] text-gray-200 mb-6 font-medium max-w-[280px] leading-[1.6]">
              Zatepľovanie, fasádne systémy, zámková dlažba a kompletné úpravy exteriéru.
            </p>

            <div className="flex items-center gap-2 mt-1 mb-2">
              <div className="flex text-[#FBBC04] text-[15px] drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)] tracking-[0.1em]">
                ★★★★★
              </div>
              <span className="text-white text-[13px] font-bold ml-1 drop-shadow-md">4.9</span>
              <span className="text-white/80 text-[13px] font-medium drop-shadow-md">· Google</span>
            </div>
          </div>

          <div className="absolute bottom-[-1px] left-0 right-0 w-full overflow-hidden leading-none z-10">
            <svg viewBox="0 0 1440 120" className="w-full h-[20px] sm:h-[25px]" preserveAspectRatio="none">
              <path fill="#F5F5F5" d="M0,120 L0,0 C480,0 1000,100 1440,120 Z"></path>
            </svg>
          </div>
        </section>

        <Logos3 className="bg-[#F5F5F5] pt-4 pb-0" />

        {/* Intro */}
        <section className="pt-12 pb-6 px-6 bg-[#F5F5F5]">
          <div className="relative flex flex-col items-center text-center">
            <div className="flex flex-col items-center mb-6 relative z-10">
              
              <div className="w-8 h-[1px] bg-[#E5A93B]/30 mt-4"></div>
            </div>

            <h2 className="text-[32px] font-extrabold text-[#1A1A1A] leading-[1.15] mb-7 relative z-10 tracking-tight">
              Reprezentatívny <br/> <span className="text-[#E5A93B]">vzhľad domova</span>
            </h2>
            
            <div className="flex flex-col items-center text-center w-full max-w-[340px] relative z-10">
              <p className="text-[15px] text-gray-700 font-medium leading-[1.6] mb-8">
                Odborne zateplíme váš dom a postaráme sa o bezchybnú fasádu aj spevnené plochy okolo domu.
              </p>
              
              <ul className="flex flex-row justify-between w-full">
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
              </ul>
            </div>
            
            <div className="absolute -left-3 top-20 text-[#E8E6DB] opacity-60 pointer-events-none">
               <HardHat className="w-16 h-16 -rotate-12" />
            </div>
          </div>
        </section>

        {/* What is included / Subservices */}
        <section className="py-12 px-6 bg-[#F5F5F5]">
          <div className="flex flex-col mb-8">
            <h2 className="text-[14px] font-extrabold tracking-widest text-[#E5A93B] uppercase mb-2">
              NAŠE SLUŽBY
            </h2>
            <h3 className="text-[24px] font-extrabold text-[#1A1A1A] leading-tight mb-2">
              Čo všetko vieme zabezpečiť
            </h3>
            <p className="text-[14px] text-gray-600 font-medium">
              Od jednotlivých prác až po kompletné technické riešenie.
            </p>
          </div>
          
          <div className="flex flex-col gap-3">
            {servicesData.map((service) => {
              const isExpanded = expandedService === service.id;
              
              return (
                <div 
                  key={service.id}
                  className={`flex flex-col bg-white rounded-2xl overflow-hidden shadow-sm border transition-colors duration-300 ${isExpanded ? 'border-[#E5A93B]' : 'border-black/5'}`}
                >
                  <button 
                    onClick={() => setExpandedService(isExpanded === true ? null : service.id)}
                    className="flex items-center justify-between p-5 text-left w-full"
                  >
                    <div className="flex items-start gap-4">
                      <span className={`text-[13px] font-extrabold pt-0.5 transition-colors duration-300 ${isExpanded ? 'text-[#E5A93B]' : 'text-gray-400'}`}>
                        {service.id}
                      </span>
                      <div className="flex flex-col gap-1 pr-4">
                        <span className="text-[15px] font-bold text-[#1A1A1A]">
                          {service.title}
                        </span>
                        <span className={`text-[12px] font-medium leading-relaxed transition-all duration-300 ${isExpanded ? 'text-gray-600' : 'text-gray-500 line-clamp-1'}`}>
                          {service.desc}
                        </span>
                      </div>
                    </div>
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-colors duration-300 ${isExpanded ? 'bg-[#E5A93B] text-white' : 'bg-[#F5F5F5] text-gray-400'}`}>
                      {isExpanded ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                    </div>
                  </button>
                  
                  <div 
                    className={`grid transition-all duration-300 ease-in-out ${isExpanded ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}
                  >
                    <div className="overflow-hidden">
                      <div className="p-5 pt-0 flex flex-col gap-4">
                        <div className="flex flex-col gap-2 mb-2">
                          {service.bullets.map((bullet, idx) => (
                            <div key={idx + Math.random()} className="flex items-center gap-3">
                              <div className="w-1.5 h-1.5 rounded-full bg-[#E5A93B] shrink-0"></div>
                              <span className="text-[13px] font-medium text-[#1A1A1A]">{bullet}</span>
                            </div>
                          ))}
                        </div>
                        
                        <div className="flex flex-col gap-1.5 mt-4">
                          <span className="text-[11px] font-bold tracking-widest text-[#E5A93B] uppercase">Potrebujete poradiť?</span>
                          <button 
                            onClick={(e) => { e.stopPropagation(); openSheet(); }}
                            className="bg-[#1A1A1A] text-white px-5 py-2.5 rounded-lg text-[12px] font-bold uppercase tracking-wider hover:bg-[#E5A93B] transition-colors w-fit flex items-center gap-2 shadow-sm"
                          >
                          Kontaktovať <ChevronRight className="w-4 h-4" />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* Gallery */}
        <section className="py-8 bg-[#F5F5F5]">
          <div className="flex items-center justify-between w-full mb-6 px-6">
            <h2 className="text-[14px] font-extrabold tracking-widest text-[#E5A93B] uppercase">
              UKÁŽKY NAŠEJ PRÁCE
            </h2>
            <div className="flex gap-2">
              <button onClick={() => scrollContainer(galleryRef, 'left')} className="w-8 h-8 rounded-full border border-[#E5A93B]/20 flex items-center justify-center text-[#E5A93B] hover:bg-[#E5A93B]/5 transition-colors">
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button onClick={() => scrollContainer(galleryRef, 'right')} className="w-8 h-8 rounded-full border border-[#E5A93B]/20 flex items-center justify-center text-[#E5A93B] hover:bg-[#E5A93B]/5 transition-colors">
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
          
          <div 
            ref={galleryRef} 
            onScroll={handleInfiniteScroll} 
            className="flex overflow-x-auto snap-x snap-mandatory gap-4 w-full pb-4 px-6 [&::-webkit-scrollbar]:hidden" 
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {infiniteGallery.map((src, idx) => (
              <div key={idx + Math.random()} className="shrink-0">
                <img 
                  src={src} 
                  alt="Ukážka práce" 
                  className="w-[300px] h-[225px] object-cover rounded-[1.5rem] shadow-[0_4px_20px_rgba(0,0,0,0.08)] snap-center cursor-pointer hover:opacity-90 transition-opacity" 
                  onClick={() => setLightboxIndex(idx % galleryImages.length)} 
                />
              </div>
            ))}
          </div>
          
          <div className="flex justify-center mt-6 px-6 pb-2">
            <Link 
              to="/nase-prace" 
              className="inline-flex items-center justify-center gap-2 bg-[#E5A93B] hover:bg-[#D4AF37] transition-colors text-white font-bold py-3.5 px-8 rounded-[1rem] text-[13px] tracking-wider w-full max-w-sm uppercase"
            >
              Pozrieť všetky ukážky
            </Link>
          </div>
        </section>

        {/* Features Carousel */}
        <motion.section 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-50px" }}
          className="py-10 bg-[#F5F5F5] flex flex-col"
        >
          <div className="flex items-center justify-between w-full mb-6 px-6">
            <h2 className="text-[14px] font-extrabold tracking-widest text-[#E5A93B] uppercase">
              AKO PREBIEHA SPOLUPRÁCA?
            </h2>
            <div className="flex gap-2">
              <button onClick={() => scrollCarousel('left')} disabled={activeFeatureIndex === 0} className={`w-8 h-8 rounded-full border border-[#E5A93B]/20 flex items-center justify-center transition-colors ${activeFeatureIndex === 0 ? 'opacity-30 cursor-not-allowed text-gray-400' : 'text-[#E5A93B] hover:bg-[#E5A93B]/5'}`}>
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button onClick={() => scrollCarousel('right')} disabled={activeFeatureIndex === 2} className={`w-8 h-8 rounded-full border border-[#E5A93B]/20 flex items-center justify-center transition-colors ${activeFeatureIndex === 2 ? 'opacity-30 cursor-not-allowed text-gray-400' : 'text-[#E5A93B] hover:bg-[#E5A93B]/5'}`}>
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
          
          <div ref={carouselRef} className="flex overflow-x-auto snap-x snap-mandatory gap-4 w-full pb-6 px-6 [&::-webkit-scrollbar]:hidden" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
            <div className="min-w-[85%] sm:min-w-[280px] snap-center flex flex-col bg-white rounded-[1.5rem] p-7 shadow-[0_4px_20px_rgba(0,0,0,0.03)] border border-black/5 items-start text-left relative">
              <div className="w-12 h-12 rounded-full bg-[#F5F5F5] flex items-center justify-center mb-5">
                <Scissors className="w-5 h-5 text-[#E5A93B]" />
              </div>
              <h3 className="text-[14px] font-extrabold text-[#1A1A1A] mb-3 uppercase tracking-wide">ODBORNÝ NÁVRH A PLÁN</h3>
              <p className="text-[14px] text-gray-600 font-medium leading-relaxed pr-6">
                Pred začatím prác spoločne prejdeme vašu predstavu a navrhneme najlepšie riešenie pre vašu stavbu.
              </p>
              <span className="absolute bottom-7 right-7 text-[11px] font-bold text-gray-300">1 / 3</span>
            </div>
            <div className="min-w-[85%] sm:min-w-[280px] snap-center flex flex-col bg-white rounded-[1.5rem] p-7 shadow-[0_4px_20px_rgba(0,0,0,0.03)] border border-black/5 items-start text-left relative">
              <div className="w-12 h-12 rounded-full bg-[#F5F5F5] flex items-center justify-center mb-5">
                <Hammer className="w-5 h-5 text-[#E5A93B]" />
              </div>
              <h3 className="text-[14px] font-extrabold text-[#1A1A1A] mb-3 uppercase tracking-wide">KVALITNÁ REALIZÁCIA</h3>
              <p className="text-[14px] text-gray-600 font-medium leading-relaxed pr-6">
                Zabezpečíme všetko od lešenia a prípravy podkladu až po nanesenie finálnej omietky a dlažbu.
              </p>
              <span className="absolute bottom-7 right-7 text-[11px] font-bold text-gray-300">2 / 3</span>
            </div>
            <div className="min-w-[85%] sm:min-w-[280px] snap-center flex flex-col bg-white rounded-[1.5rem] p-7 shadow-[0_4px_20px_rgba(0,0,0,0.03)] border border-black/5 items-start text-left relative">
              <div className="w-12 h-12 rounded-full bg-[#F5F5F5] flex items-center justify-center mb-5">
                <ShieldCheck className="w-5 h-5 text-[#E5A93B]" />
              </div>
              <h3 className="text-[14px] font-extrabold text-[#1A1A1A] mb-3 uppercase tracking-wide">ZÁRUKA NA MATERIÁL A PRÁCU</h3>
              <p className="text-[14px] text-gray-600 font-medium leading-relaxed pr-6">
                Používame len overené a certifikované stavebné materiály s dlhou životnosťou a odolnosťou.
              </p>
              <span className="absolute bottom-7 right-7 text-[11px] font-bold text-gray-300">3 / 3</span>
            </div>
          </div>
        </motion.section>

        {/* FAQ */}
        <section className="py-8 px-6 bg-[#F5F5F5] border-t border-[#E5A93B]/10">
          <h2 className="text-[14px] font-extrabold tracking-widest text-[#E5A93B] uppercase mb-6">
            ČASTÉ OTÁZKY
          </h2>
          <div className="flex flex-col gap-4">
            <FaqAccordion question="Viete zrealizovať fasádu a exteriér podľa nášho projektu?" answer="Áno, radi premeníme váš hotový projekt na realitu presne podľa výkresov a požiadaviek." />
            <FaqAccordion question="Robíte aj inštaláciu automatickej závlahy?" answer="Samozrejme, profesionálna inštalácia zavlažovacieho systému je bežnou súčasťou našich realizácií." />
            <FaqAccordion question="Zabezpečujete aj dovoz materiálu?" answer="Áno, zabezpečujeme kompletnú logistiku, dovoz zeminy, kameňa, kôry aj samotných rastlín." />
            <FaqAccordion question="Ako dlho trvá realizácia zateplenia a fasády?" answer="Záleží od rozsahu prác a veľkosti domu. Štandardný rodinný dom zateplíme a upravíme zvyčajne do 2 až 4 týždňov." />
            <FaqAccordion question="Odporučíte nám vhodné materiály na zateplenie?" answer="Áno, radi vám poradíme pri výbere izolantov, omietok a farieb tak, aby spĺňali prísne normy a vaše estetické požiadavky." />
          </div>
        </section>

        {/* Banner */}
        <section className="w-full h-[30vh] min-h-[250px] relative flex flex-col items-center justify-center overflow-hidden bg-[#111111]">
          <img
            src="/desmostav-stavba-na-kluc-24.webp"
            alt="Banner detail"
            className="absolute inset-0 w-full h-full object-cover scale-105"
          />
          <div className="absolute inset-0 bg-black/25"></div>
          
          <div className="relative z-10 flex flex-col items-center justify-center px-6 text-center">
            <span className="text-[11px] font-bold tracking-[0.2em] text-white/90 uppercase drop-shadow-md">
              DETAIL, KTORÝ JE VIDIEŤ.
            </span>
          </div>
        </section>

        {/* Editorial Transition */}
        <section className="pt-8 pb-8 px-6 bg-[#F5F5F5] flex flex-col items-center text-center">
          <span className="text-[14px] font-extrabold tracking-widest text-[#E5A93B] uppercase leading-[1.6] max-w-[320px]">
            VAŠU VÍZIU PREMENÍME NA SKUTOČNOSŤ.
          </span>
        </section>

        {/* CTA */}
        <section className="px-6 pt-8 pb-12 bg-[#F5F5F5]">
          <div className="bg-[#F5F5F5] rounded-[1.5rem] p-6 flex flex-col items-center text-center shadow-sm border border-black/5">
            <div className="w-12 h-12 rounded-full bg-[#1A1A1A] flex items-center justify-center mb-4 shadow-md">
              <HardHat className="w-6 h-6 text-transparent fill-[#E5A93B]" />
            </div>
            
            <h3 className="text-[18px] font-extrabold text-[#1A1A1A] mb-2 leading-tight">
              Máte pripravený projekt? <br /> Poďme ho zrealizovať.
            </h3>
            
            <p className="text-[13px] text-gray-600 font-medium mb-6">
              Pripravíme vám nezáväznú cenovú ponuku a navrhneme najlepšie riešenie pre vaše bývanie.
            </p>
            
            <button 
              onClick={openSheet}
              className="w-full bg-[#E5A93B] hover:bg-[#D4AF37] transition-colors text-white font-bold py-3.5 px-6 rounded-xl flex items-center justify-center gap-3 mb-4 shadow-md"
            >
              <HardHat className="w-5 h-5 text-white" strokeWidth={1.5} />
              <span className="text-[13px] tracking-wider uppercase">ZÍSKAŤ PONUKU</span>
            </button>
            
            <a href="tel:+421907673697" className="flex items-center gap-3 text-[#E5A93B] font-bold text-[15px] hover:text-[#1A1A1A] transition-colors">
              <Phone className="w-5 h-5" strokeWidth={1.5} />
              0907 673 697
            </a>
          </div>
        </section>

        <Logos3 className="bg-[#F5F5F5] pt-6 pb-12" />

        {/* Footer */}
        <footer className="bg-[#111111] pt-16 pb-8 px-6 text-white relative rounded-t-[2.5rem]">
          <div className="flex flex-col gap-8 mb-12">
            <div>
              <div className="mb-6">
                <img src="/logo-desmostav-hlavne-svetle.webp" alt="DESMO STAV" className="h-14 object-contain" />
              </div>
              <p className="text-gray-400 text-[13px] font-medium leading-relaxed max-w-[250px]">
                Komplexné stavebné práce, rekonštrukcie a stavby na kľúč pre váš nový domov.
              </p>
            </div>
            
            <div className="flex flex-col gap-4">
              <a href="tel:+421907673697" className="flex items-center gap-3 text-[14px] font-medium text-white hover:text-[#E5A93B] transition-colors">
                <Phone className="w-5 h-5 text-[#E5A93B]" strokeWidth={1.5} />
                +421 905 123 456
              </a>
              <a href="mailto:info@desmostav.sk" className="flex items-center gap-3 text-[14px] font-medium text-white hover:text-[#E5A93B] transition-colors">
                <Mail className="w-5 h-5 text-[#E5A93B]" strokeWidth={1.5} />
                info@desmostav.sk
              </a>
              <div className="flex items-start gap-3 text-[14px] font-medium text-white mt-2">
                <MapPin className="w-5 h-5 text-[#E5A93B] shrink-0" strokeWidth={1.5} />
                <span className="leading-relaxed">Pôsobíme v<br/>Bratislavskom a Trnavskom kraji</span>
              </div>
            </div>

            <div className="flex items-center gap-4 pt-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#E5A93B] transition-colors">
                <Facebook className="w-5 h-5 text-white" strokeWidth={1.5} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#E5A93B] transition-colors">
                <Instagram className="w-5 h-5 text-white" strokeWidth={1.5} />
              </a>
            </div>
          </div>
          
          <div className="border-t border-white/10 pt-8 flex flex-col items-center text-center">
            <p className="text-[11px] text-gray-500 font-medium mb-4">
              © {new Date().getFullYear()} DESMO STAV, spol. s r.o. Všetky práva vyhradené.
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-[11px] text-gray-500 hover:text-white transition-colors">Ochrana súkromia</a>
              <a href="#" className="text-[11px] text-gray-500 hover:text-white transition-colors">Obchodné podmienky</a>
            </div>
          </div>
        </footer>
      </div>
      <Lightbox isOpen={lightboxIndex !== null} images={galleryImages} currentIndex={lightboxIndex ?? 0} onNavigate={setLightboxIndex} onClose={() => setLightboxIndex(null)} />
    </div>
  );
}

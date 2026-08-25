import { Facebook, Instagram } from "../components/SocialIcons";
import TopNav from '../components/TopNav';
import Lightbox from '../components/Lightbox';
import { useContactSheet } from '../context/ContactSheetContext';
import { Phone, Mail, MapPin, ChevronLeft, ChevronRight, HardHat, ArrowRight } from 'lucide-react';
import { useState, UIEvent, useRef } from 'react';

export default function NasePrace() {
  const { openSheet } = useContactSheet();
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const galleryRef = useRef<HTMLDivElement>(null);
  
  const scrollGallery = (direction: 'left' | 'right') => {
    if (galleryRef.current) {
      const el = galleryRef.current;
      const scrollAmount = el.clientWidth * 0.85 + 16;
      const currentScroll = el.scrollLeft;
      const maxScroll = el.scrollWidth - el.clientWidth;
      
      if (direction === 'right') {
        if (currentScroll >= maxScroll - 10) {
          el.scrollTo({ left: 0, behavior: 'smooth' });
        } else {
          el.scrollBy({ left: scrollAmount, behavior: 'smooth' });
        }
      } else {
        if (currentScroll <= 10) {
          el.scrollTo({ left: maxScroll, behavior: 'smooth' });
        } else {
          el.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
        }
      }
    }
  };
  

  const projects = [
  {
    title: "Hrubá stavba",
    location: "Trnava",
    year: "2024",
    category: "HRUBÁ STAVBA",
    image: "/desmostav-hruba-stavba-08.webp"
  },
  {
    title: "Hrubá stavba",
    location: "Senec",
    year: "2024",
    category: "HRUBÁ STAVBA",
    image: "/desmostav-hruba-stavba-17.webp"
  },
  {
    title: "Hrubá stavba",
    location: "Záhorská Bystrica",
    year: "2024",
    category: "HRUBÁ STAVBA",
    image: "/desmostav-hruba-stavba-26.webp"
  },
  {
    title: "Hrubá stavba",
    location: "Bratislava",
    year: "2024",
    category: "HRUBÁ STAVBA",
    image: "/desmostav-hruba-stavba-35.webp"
  },
  {
    title: "Kompletná rekonštrukcia",
    location: "Bratislava",
    year: "2023",
    category: "KOMPLETNÁ REKONŠTRUKCIA",
    image: "/desmostav-kompletna-rekonstrukcia-07.webp"
  },
  {
    title: "Kompletná rekonštrukcia",
    location: "Pezinok",
    year: "2023",
    category: "KOMPLETNÁ REKONŠTRUKCIA",
    image: "/desmostav-kompletna-rekonstrukcia-16.webp"
  },
  {
    title: "Kompletná rekonštrukcia",
    location: "Modra",
    year: "2023",
    category: "KOMPLETNÁ REKONŠTRUKCIA",
    image: "/desmostav-kompletna-rekonstrukcia-25.webp"
  },
  {
    title: "Kompletná rekonštrukcia",
    location: "Devínska Nová Ves",
    year: "2023",
    category: "KOMPLETNÁ REKONŠTRUKCIA",
    image: "/desmostav-kompletna-rekonstrukcia-34.webp"
  },
  {
    title: "Prerábka domu",
    location: "Trnava",
    year: "2023",
    category: "PRERÁBKA DOMU",
    image: "/desmostav-prerabka-domu-01.webp"
  },
  {
    title: "Prerábka domu",
    location: "Senec",
    year: "2023",
    category: "PRERÁBKA DOMU",
    image: "/desmostav-prerabka-domu-10.webp"
  },
  {
    title: "Prerábka domu",
    location: "Záhorská Bystrica",
    year: "2023",
    category: "PRERÁBKA DOMU",
    image: "/desmostav-prerabka-domu-19.webp"
  },
  {
    title: "Prerábka domu",
    location: "Bratislava",
    year: "2023",
    category: "PRERÁBKA DOMU",
    image: "/desmostav-prerabka-domu-28.webp"
  },
  {
    title: "Rekonštrukcia domu",
    location: "Senec",
    year: "2022",
    category: "REKONŠTRUKCIA DOMU",
    image: "/desmostav-rekonstrukcia-domu-03.webp"
  },
  {
    title: "Rekonštrukcia domu",
    location: "Bratislava",
    year: "2022",
    category: "REKONŠTRUKCIA DOMU",
    image: "/desmostav-rekonstrukcia-domu-21.webp"
  },
  {
    title: "Rekonštrukcia domu",
    location: "Pezinok",
    year: "2022",
    category: "REKONŠTRUKCIA DOMU",
    image: "/desmostav-rekonstrukcia-domu-30.webp"
  },
  {
    title: "Stavba na kľúč",
    location: "Devínska Nová Ves",
    year: "2022",
    category: "STAVBA NA KĽÚČ",
    image: "/desmostav-stavba-na-kluc-06.webp"
  },
  {
    title: "Stavba na kľúč",
    location: "Trnava",
    year: "2022",
    category: "STAVBA NA KĽÚČ",
    image: "/desmostav-stavba-na-kluc-15.webp"
  },
  {
    title: "Stavba na kľúč",
    location: "Senec",
    year: "2022",
    category: "STAVBA NA KĽÚČ",
    image: "/desmostav-stavba-na-kluc-24.webp"
  },
  {
    title: "Stavba na kľúč",
    location: "Záhorská Bystrica",
    year: "2022",
    category: "STAVBA NA KĽÚČ",
    image: "/desmostav-stavba-na-kluc-33.webp"
  },
  {
    title: "Firemné priestory",
    location: "Záhorská Bystrica",
    year: "2024",
    category: "STAVEBNÁ FIRMA",
    image: "/desmostav-stavebna-firma-05.webp"
  },
  {
    title: "Firemné priestory",
    location: "Bratislava",
    year: "2024",
    category: "STAVEBNÁ FIRMA",
    image: "/desmostav-stavebna-firma-14.webp"
  },
  {
    title: "Firemné priestory",
    location: "Pezinok",
    year: "2024",
    category: "STAVEBNÁ FIRMA",
    image: "/desmostav-stavebna-firma-23.webp"
  },
  {
    title: "Firemné priestory",
    location: "Modra",
    year: "2024",
    category: "STAVEBNÁ FIRMA",
    image: "/desmostav-stavebna-firma-32.webp"
  },
  {
    title: "Stavebné práce",
    location: "Pezinok",
    year: "2024",
    category: "STAVEBNÉ PRÁCE",
    image: "/desmostav-stavebne-prace-02.webp"
  },
  {
    title: "Stavebné práce",
    location: "Modra",
    year: "2024",
    category: "STAVEBNÉ PRÁCE",
    image: "/desmostav-stavebne-prace-11.webp"
  },
  {
    title: "Stavebné práce",
    location: "Devínska Nová Ves",
    year: "2024",
    category: "STAVEBNÉ PRÁCE",
    image: "/desmostav-stavebne-prace-20.webp"
  },
  {
    title: "Stavebné práce",
    location: "Trnava",
    year: "2024",
    category: "STAVEBNÉ PRÁCE",
    image: "/desmostav-stavebne-prace-29.webp"
  },
  {
    title: "Stavebné služby",
    location: "Pezinok",
    year: "2022",
    category: "STAVEBNÉ SLUŽBY",
    image: "/desmostav-stavebne-sluzby-09.webp"
  },
  {
    title: "Stavebné služby",
    location: "Modra",
    year: "2022",
    category: "STAVEBNÉ SLUŽBY",
    image: "/desmostav-stavebne-sluzby-18.webp"
  },
  {
    title: "Stavebné služby",
    location: "Devínska Nová Ves",
    year: "2022",
    category: "STAVEBNÉ SLUŽBY",
    image: "/desmostav-stavebne-sluzby-27.webp"
  },
  {
    title: "Výstavba rodinného domu",
    location: "Modra",
    year: "2023",
    category: "VÝSTAVBA RODINNÝCH DOMOV",
    image: "/desmostav-kompletna-rekonstrukcia-34.webp"
  },
  {
    title: "Výstavba rodinného domu",
    location: "Devínska Nová Ves",
    year: "2023",
    category: "VÝSTAVBA RODINNÝCH DOMOV",
    image: "/desmostav-vystavba-rodinnych-domov-13.webp"
  },
  {
    title: "Výstavba rodinného domu",
    location: "Trnava",
    year: "2023",
    category: "VÝSTAVBA RODINNÝCH DOMOV",
    image: "/desmostav-vystavba-rodinnych-domov-22.webp"
  },
  {
    title: "Výstavba rodinného domu",
    location: "Senec",
    year: "2023",
    category: "VÝSTAVBA RODINNÝCH DOMOV",
    image: "/desmostav-vystavba-rodinnych-domov-31.webp"
  }
];

  const galleryImages = projects.map(p => p.image);

  

  return (
    <div className="fixed inset-0 bg-[#E5E5E5] font-sans text-gray-900 flex justify-center overflow-hidden">
      <div className="w-full max-w-[428px] bg-[#F5F5F5] shadow-2xl relative flex flex-col h-[100dvh] overflow-y-auto overflow-x-hidden">
        
        <TopNav />

        {/* Header Section */}
        <section className="relative pt-32 pb-24 px-6 text-white overflow-hidden shrink-0">
          <div className="absolute inset-0 z-0">
            <img 
              src="/desmostav-prerabka-domu-10.webp" 
              alt="Naše práce"
              className="w-full h-full object-cover object-center"
            />
            <div className="absolute inset-0 bg-black/20 bg-gradient-to-r from-black/90 via-black/60 to-transparent"></div>
          </div>
          
          <div className="relative z-10">
            <span className="text-[13px] font-bold tracking-[0.15em] text-[#E5A93B] uppercase mb-3 block">
              REFERENCIE
            </span>
            <div className="w-8 h-[2px] bg-[#E5A93B] mb-4"></div>
            <h1 className="text-[36px] font-extrabold tracking-tight mb-4 uppercase leading-[1.05]">
              Naše <br /> <span className="text-[#E5A93B]">práce</span>
            </h1>
            <p className="text-[15px] text-gray-200 font-medium max-w-[280px] leading-[1.6]">
              Prezrite si výber z našich úspešne dokončených projektov. Každá stavba je vizitkou našej kvality a precíznosti.
            </p>
          </div>
          
          <div className="absolute bottom-[-1px] left-0 right-0 w-full overflow-hidden leading-none z-10">
            <svg viewBox="0 0 1440 120" className="w-full h-[20px] sm:h-[25px]" preserveAspectRatio="none">
              <path fill="#F5F5F5" d="M0,120 L0,0 C480,0 1000,100 1440,120 Z"></path>
            </svg>
          </div>
        </section>

        {/* Gallery Carousel */}
        <section className="py-12 bg-[#F5F5F5] flex-grow flex flex-col items-center w-full">
          <div className="w-full px-6 mb-8 max-w-[428px]">
            <h2 className="text-[14px] font-extrabold tracking-widest text-[#E5A93B] uppercase mb-3">
              GALÉRIA PROJEKTOV
            </h2>
            <p className="text-[15px] text-gray-600 font-medium leading-[1.6]">
              Nahliadnite do našej galérie a presvedčte sa o kvalite a precíznosti našich realizácií.
            </p>
          </div>
          
          <div className="relative w-full max-w-[428px]">
            <button onClick={() => scrollGallery('left')} className="absolute left-2 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full bg-white shadow-md border border-black/5 flex items-center justify-center text-[#E5A93B] hover:bg-[#F5F5F5] transition-colors">
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button onClick={() => scrollGallery('right')} className="absolute right-2 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full bg-white shadow-md border border-black/5 flex items-center justify-center text-[#E5A93B] hover:bg-[#F5F5F5] transition-colors">
              <ChevronRight className="w-6 h-6" />
            </button>
            
            <div 
              ref={galleryRef}
              className="w-full flex items-center overflow-x-auto snap-x snap-mandatory hide-scrollbar gap-4 pb-6 px-[7.5%]"
              style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            >
              {projects.map((project, idx) => (
              <div 
                key={idx} 
                className="snap-center shrink-0 w-[85%] rounded-[1.5rem] overflow-hidden shadow-[0_8px_30px_rgb(0,0,0,0.1)] border border-black/[0.03] cursor-pointer group flex flex-col"
                onClick={() => setLightboxIndex(idx)}
              >
                <div className="w-full aspect-[4/5] overflow-hidden relative">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-500"></div>
                </div>
              </div>
            ))}
          </div>
          </div>
        </section>

        
        {/* CTA */}
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
        </section>

        {/* Footer */}
        <footer className="bg-[#111111] pt-16 pb-8 px-6 text-white relative rounded-t-[2.5rem]">
          <div className="flex flex-col gap-8 mb-12">
            <div>
              <div className="mb-6">
                <img src="/logo-desmostav-hlavne-svetle.webp" alt="DESMO STAV" className="h-14 object-contain" />
              </div>
              <p className="text-gray-400 text-[13px] font-medium leading-relaxed max-w-[250px]">
                Profesionálne stavebné služby pre krásu, ktorú si zamilujete každý deň.
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

      <Lightbox 
        isOpen={lightboxIndex !== null} 
        images={galleryImages} 
        currentIndex={lightboxIndex ?? 0} 
        onNavigate={setLightboxIndex} 
        onClose={() => setLightboxIndex(null)} 
      />
    </div>
  );
}

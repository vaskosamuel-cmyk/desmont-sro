const fs = require('fs');
let content = fs.readFileSync('src/pages/NasePrace.tsx', 'utf8');

// 1. SVG in Hero
const oldHero = `<section className="relative pt-32 pb-16 px-6 text-white overflow-hidden shrink-0">
          <div className="absolute inset-0 z-0">
            <img 
              src="/desmostav-vystavba-rodinnych-domov-04.webp" 
              alt="Naše práce"
              className="w-full h-full object-cover object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-black/80"></div>
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
        </section>`;

const newHero = `<section className="relative pt-32 pb-24 px-6 text-white overflow-hidden shrink-0">
          <div className="absolute inset-0 z-0">
            <img 
              src="/desmostav-vystavba-rodinnych-domov-04.webp" 
              alt="Naše práce"
              className="w-full h-full object-cover object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-black/80"></div>
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
        </section>`;

content = content.replace(oldHero, newHero);

// 2. Loop logic in scrollGallery
const oldScroll = `const scrollGallery = (direction) => {
    if (galleryRef.current) {
      const scrollAmount = 300;
      galleryRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };`;

const newScroll = `const scrollGallery = (direction: 'left' | 'right') => {
    if (galleryRef.current) {
      const el = galleryRef.current;
      const scrollAmount = el.clientWidth * 0.85;
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
  };`;

content = content.replace(oldScroll, newScroll);

// 3. Gallery Layout
const oldGallery = `<section className="py-12 bg-[#F5F5F5] flex-grow flex flex-col items-center">
          <div className="flex items-center justify-between w-full mb-6 px-6 max-w-[428px]">
            <div className="flex gap-2 ml-auto">
              <button onClick={() => scrollGallery('left')} className="w-10 h-10 rounded-full bg-white shadow-sm border border-black/5 flex items-center justify-center text-[#E5A93B] hover:bg-[#F5F5F5] transition-colors">
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button onClick={() => scrollGallery('right')} className="w-10 h-10 rounded-full bg-white shadow-sm border border-black/5 flex items-center justify-center text-[#E5A93B] hover:bg-[#F5F5F5] transition-colors">
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
          
          <div 
            ref={galleryRef}
            className="w-full flex overflow-x-auto snap-x snap-mandatory hide-scrollbar px-6 gap-5 pb-6"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {projects.map((project, idx) => (`;

const newGallery = `<section className="py-12 bg-[#F5F5F5] flex-grow flex flex-col items-center w-full">
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
              className="w-full flex overflow-x-auto snap-x snap-mandatory hide-scrollbar gap-5 pb-6 px-6"
              style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            >
              {projects.map((project, idx) => (`;

content = content.replace(oldGallery, newGallery);


// 4. Add CTA section just before Footer
const ctaSection = `
        {/* CTA Section */}
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
        </section>

        {/* Footer */}`;

content = content.replace('{/* Footer */}', ctaSection);

fs.writeFileSync('src/pages/NasePrace.tsx', content);

const fs = require('fs');

let content = fs.readFileSync('src/pages/NasePrace.tsx', 'utf8');

// Add ChevronLeft, ChevronRight, useRef to imports
if (!content.includes('useRef')) {
  content = content.replace('useState, UIEvent', 'useState, UIEvent, useRef');
}
if (!content.includes('ChevronLeft')) {
  content = content.replace('Phone, Mail, MapPin, Facebook, Instagram', 'Phone, Mail, MapPin, Facebook, Instagram, ChevronLeft, ChevronRight');
}

// Add ref and scroll function
const refInjection = `  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const galleryRef = useRef<HTMLDivElement>(null);
  
  const scrollGallery = (direction) => {
    if (galleryRef.current) {
      const scrollAmount = 300;
      galleryRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };`;
content = content.replace('  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);', refInjection);

// Fix Hero section
const heroOld = `<span className="text-[13px] font-bold tracking-[0.15em] text-[#E5A93B] uppercase mb-3 block">
              REFERENCIE
            </span>`;
const heroNew = `<span className="text-[13px] font-bold tracking-[0.15em] text-[#E5A93B] uppercase mb-3 block">
              REFERENCIE
            </span>
            <div className="w-8 h-[2px] bg-[#E5A93B] mb-4"></div>`;
content = content.replace(heroOld, heroNew);

// Fix Gallery section and arrows
// Note: we'll place the arrows outside or inside?
// Let's look at the current gallery section
const galleryOld = `<section className="py-12 bg-[#F5F5F5] flex-grow flex flex-col items-center">
          <div 
            className="w-full flex overflow-x-auto snap-x snap-mandatory hide-scrollbar px-6 gap-5 pb-6"
            onScroll={handleScroll}
          >`;
          
const galleryNew = `<section className="py-12 bg-[#F5F5F5] flex-grow flex flex-col items-center">
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
          >`;
content = content.replace(galleryOld, galleryNew);
// Note: we removed onScroll={handleScroll} since we don't need it if dots are removed.

// Remove Dots
const dotsOld = `{/* Pagination Dots */}
          <div className="flex items-center justify-center gap-2.5 mt-2">
            {projects.map((_, idx) => (
              <div 
                key={idx}
                className={\`w-2 h-2 rounded-full transition-all duration-300 \${
                  idx === activeIndex 
                    ? 'bg-[#E5A93B] w-6' 
                    : 'bg-[#1A1A1A]/15'
                }\`}
              />
            ))}
          </div>`;
content = content.replace(dotsOld, '');

// Also activeIndex and handleScroll can be removed from code if possible, or just left there unused.
// Let's remove them to avoid typescript errors (unused vars)
const handleScrollCode = `const handleScroll = (e: UIEvent<HTMLDivElement>) => {
    const scrollLeft = e.currentTarget.scrollLeft;
    // We assume items are roughly the width of the container. 
    // A snap-center item offset is a bit tricky, but this simple math works well enough.
    const clientWidth = e.currentTarget.clientWidth;
    // The items are 85% width, plus some gap. This gives a reasonable approximation for dots.
    const itemWidth = clientWidth * 0.85; 
    const index = Math.round(scrollLeft / itemWidth);
    
    // Bounds check
    if (index >= 0 && index < projects.length) {
      setActiveIndex(index);
    }
  };`;
content = content.replace(handleScrollCode, '');
content = content.replace('const [activeIndex, setActiveIndex] = useState(0);', '');

fs.writeFileSync('src/pages/NasePrace.tsx', content);

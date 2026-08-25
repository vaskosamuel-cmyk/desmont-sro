import fs from 'fs';

let content = fs.readFileSync('src/pages/Home.tsx', 'utf8');

// 1. Add handleServicesScroll and activeServiceIndex
const hookTarget = `const scrollServices = (direction: 'left' | 'right') => {`;
const scrollState = `const [activeServiceIndex, setActiveServiceIndex] = useState(0);

  const handleServicesScroll = (e: any) => {
    const container = e.currentTarget;
    const itemWidth = container.clientWidth * 0.88;
    const index = Math.round(container.scrollLeft / itemWidth);
    if (index >= 0 && index < services.length) {
      setActiveServiceIndex(index);
    }
  };

  `;

if (!content.includes('activeServiceIndex')) {
  content = content.replace(hookTarget, scrollState + hookTarget);
}

// 2. Replace the services container and CTA
const startStr = `<div 
            ref={servicesRef}`;
const endStr = `          <div className="pb-8">
            <button 
              onClick={openSheet}
              className="flex items-center justify-between bg-[#394B37] hover:bg-[#2b392a] transition-colors text-white font-bold py-4 px-5 rounded-[1.25rem] w-full shadow-lg"
            >
              <div className="bg-white/20 p-1.5 rounded-full flex items-center justify-center">
                <Leaf className="w-4 h-4 text-white" strokeWidth={1.5} />
              </div>
              <span className="text-sm tracking-wide uppercase">Získať ponuku na mieru</span>
              <ArrowRight className="w-5 h-5 text-white" strokeWidth={1.5} />
            </button>
          </div>
        </section>`;

const replacement = `<div 
            ref={servicesRef}
            onScroll={handleServicesScroll}
            className="flex overflow-x-auto snap-x snap-mandatory gap-4 w-full pb-6 [&::-webkit-scrollbar]:hidden" 
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {services.map((service, index) => (
              <Link 
                key={service.id} 
                to={service.path}
                className="relative min-w-[88%] sm:min-w-[320px] h-[400px] rounded-[2rem] overflow-hidden shrink-0 snap-center shadow-[0_8px_30px_rgba(0,0,0,0.12)] group"
              >
                <img 
                  src={service.image} 
                  alt={service.title}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                
                {/* Refined gradient overlay for readability - stronger at bottom, clear at top */}
                <div className="absolute inset-x-0 bottom-0 h-[65%] bg-gradient-to-t from-[#1A1A1A]/95 via-[#1A1A1A]/60 to-transparent"></div>
                
                {/* Content */}
                <div className="absolute inset-0 p-8 flex flex-col justify-end">
                  <div className="mb-3">
                    <span className="text-[#78A143] font-bold text-xl">{service.id}</span>
                    <div className="w-8 h-[2px] bg-white mt-1.5"></div>
                  </div>
                  
                  <h3 className="text-[28px] font-extrabold text-white leading-[1.1] mb-3">
                    {service.title}
                  </h3>
                  
                  <p className="text-[14px] text-white/90 mb-6 leading-[1.6] font-medium pr-4">
                    {service.desc}
                  </p>
                  
                  <div className="flex items-center gap-3 text-white border-b border-white/30 pb-1 group-hover:border-white transition-colors w-fit">
                    <span className="text-[12px] font-bold tracking-widest uppercase">ZISTIŤ VIAC</span>
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
          
          {/* Navigation Controls */}
          <div className="flex items-center justify-between mt-2 px-2 pb-8">
            <button 
              onClick={() => scrollServices('left')} 
              className="w-12 h-12 rounded-full border border-[#405C41]/20 flex items-center justify-center text-[#405C41] hover:bg-[#405C41]/5 transition-colors"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            
            <div className="flex flex-col items-center gap-1">
               <span className="text-[13px] font-bold text-[#405C41] tracking-widest">
                 0{activeServiceIndex + 1} <span className="text-[#405C41]/50">/ 04</span>
               </span>
               <div className="flex gap-1.5">
                 {services.map((s, idx) => (
                   <div key={s.id} className={\`h-[2px] w-4 rounded-full transition-colors \${idx === activeServiceIndex ? 'bg-[#405C41]' : 'bg-[#405C41]/20'}\`}></div>
                 ))}
               </div>
            </div>

            <button 
              onClick={() => scrollServices('right')} 
              className="w-12 h-12 rounded-full border border-[#405C41]/20 flex items-center justify-center text-[#405C41] hover:bg-[#405C41]/5 transition-colors"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </section>`;

if (content.includes(startStr) && content.includes(endStr)) {
  const sIdx = content.indexOf(startStr);
  const eIdx = content.indexOf(endStr) + endStr.length;
  content = content.substring(0, sIdx) + replacement + content.substring(eIdx);
}

fs.writeFileSync('src/pages/Home.tsx', content);
console.log('Updated services block perfectly.');

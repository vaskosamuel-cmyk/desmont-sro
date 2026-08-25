import fs from 'fs';

let content = fs.readFileSync('src/pages/Home.tsx', 'utf8');

// 1. Add servicesRef & scrollServices
const refCode = `
  const servicesRef = useRef<HTMLDivElement>(null);
  const scrollServices = (direction: 'left' | 'right') => {
    if (servicesRef.current) {
      const scrollAmount = direction === 'left' ? -340 : 340;
      servicesRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };
`;

if (!content.includes('servicesRef')) {
  content = content.replace(
    "const testimonialRef = useRef<HTMLDivElement>(null);",
    "const testimonialRef = useRef<HTMLDivElement>(null);\n" + refCode
  );
}

// 2. Replace services rendering
const startServices = `<div className="flex flex-col gap-5 mb-10">`;
const endServices = `))}
          </div>`;

const newServicesBlock = `<div 
            ref={servicesRef}
            className="flex overflow-x-auto snap-x snap-mandatory gap-4 w-full pb-6 [&::-webkit-scrollbar]:hidden" 
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {services.map((service, index) => (
              <Link 
                key={service.id} 
                to={service.path}
                className="relative min-w-[88%] sm:min-w-[320px] aspect-[3/4] rounded-[2rem] overflow-hidden shrink-0 snap-center shadow-[0_8px_30px_rgba(0,0,0,0.12)] group"
              >
                <img 
                  src={service.image} 
                  alt={service.title}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                
                {/* Gradient overlay for readability */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#1A1A1A]/95 via-[#1A1A1A]/40 to-transparent"></div>
                
                {/* Content */}
                <div className="absolute inset-0 p-8 flex flex-col justify-end">
                  {/* Indicator Line */}
                  <div className="mb-4">
                    <span className="text-[#78A143] font-bold text-xl">{service.id}</span>
                    <div className="w-8 h-[2px] bg-white mt-2"></div>
                  </div>
                  
                  <h3 className="text-[32px] font-extrabold text-white leading-[1.1] mb-4">
                    {service.title}
                  </h3>
                  
                  <p className="text-[15px] text-white/90 mb-8 leading-[1.6] font-medium pr-4">
                    {service.desc}
                  </p>
                  
                  <div className="flex justify-between items-end w-full">
                    <div className="flex items-center gap-3 text-white border-b border-white/30 pb-1 group-hover:border-white transition-colors">
                      <span className="text-[13px] font-bold tracking-widest uppercase">ZISTIŤ VIAC</span>
                      <ArrowRight className="w-4 h-4" />
                    </div>
                    
                    <div className="flex flex-col items-end gap-2">
                       <span className="text-[13px] font-bold text-[#78A143] tracking-widest">
                         {service.id} <span className="text-white/60">/ 04</span>
                       </span>
                       <div className="flex gap-1">
                         {services.map((s, idx) => (
                           <div key={s.id} className={\`h-[2px] w-6 \${idx === index ? 'bg-[#78A143]' : 'bg-white/30'}\`}></div>
                         ))}
                       </div>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
          
          {/* Navigation Arrows */}
          <div className="flex justify-center gap-4 mt-2">
            <button 
              onClick={() => scrollServices('left')} 
              className="w-12 h-12 rounded-full border border-[#405C41]/30 flex items-center justify-center text-[#405C41] hover:bg-[#405C41] hover:text-white transition-colors"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button 
              onClick={() => scrollServices('right')} 
              className="w-12 h-12 rounded-full border border-[#405C41]/30 flex items-center justify-center text-[#405C41] hover:bg-[#405C41] hover:text-white transition-colors"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>`;

if (content.includes(startServices)) {
  const sIdx = content.indexOf(startServices);
  const eIdx = content.indexOf(endServices) + endServices.length;
  content = content.substring(0, sIdx) + newServicesBlock + content.substring(eIdx);
}

fs.writeFileSync('src/pages/Home.tsx', content);
console.log('Updated services block in Home.tsx');

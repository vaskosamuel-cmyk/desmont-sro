import fs from 'fs';

let content = fs.readFileSync('src/pages/Home.tsx', 'utf8');

// 1. Fix handleServicesScroll & scrollServices
const scrollStateRegex = /const \[activeServiceIndex, setActiveServiceIndex\] = useState\(0\);[\s\S]*?const scrollServices = \([^)]+\) => \{[\s\S]*?\};/;

const newScrollState = `const [activeServiceIndex, setActiveServiceIndex] = useState(0);

  const handleServicesScroll = (e: any) => {
    const container = e.currentTarget;
    if (container.children.length > 0) {
      const itemWidth = 316; // 300px width + 16px gap
      const index = Math.round(container.scrollLeft / itemWidth);
      if (index >= 0 && index < services.length) {
        setActiveServiceIndex(index);
      }
    }
  };

  const scrollServices = (direction: 'left' | 'right') => {
    if (servicesRef.current) {
      const itemWidth = 316; // 300px width + 16px gap
      if (direction === 'left' && activeServiceIndex > 0) {
        servicesRef.current.scrollBy({ left: -itemWidth, behavior: 'smooth' });
        setActiveServiceIndex(prev => prev - 1);
      } else if (direction === 'right' && activeServiceIndex < services.length - 1) {
        servicesRef.current.scrollBy({ left: itemWidth, behavior: 'smooth' });
        setActiveServiceIndex(prev => prev + 1);
      }
    }
  };`;

content = content.replace(scrollStateRegex, newScrollState);

// 2. Fix the container & cards
const oldContainerRegex = /<div \s*ref=\{servicesRef\}[\s\S]*?<\/Link>\s*\)\)\}\s*<\/div>/;

const newContainer = `<div 
            ref={servicesRef}
            onScroll={handleServicesScroll}
            className="flex overflow-x-auto snap-x snap-mandatory gap-4 w-[calc(100%+3rem)] -mx-6 px-[calc(50vw-150px)] pb-6 [&::-webkit-scrollbar]:hidden" 
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {services.map((service, index) => (
              <Link 
                key={service.id} 
                to={service.path}
                className="relative w-[300px] h-[400px] rounded-[2rem] overflow-hidden shrink-0 snap-center shadow-[0_8px_30px_rgba(0,0,0,0.12)] group"
              >
                <img 
                  src={service.image} 
                  alt={service.title}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                
                {/* Refined gradient overlay for readability - stronger at bottom, clear at top */}
                <div className="absolute inset-x-0 bottom-0 h-[70%] bg-gradient-to-t from-[#1A1A1A] via-[#1A1A1A]/70 to-transparent"></div>
                
                {/* Content */}
                <div className="absolute inset-0 p-8 flex flex-col justify-end">
                  <div className="mb-3">
                    <span className="text-[#78A143] font-bold text-xl">{service.id}</span>
                    <div className="w-8 h-[2px] bg-white mt-1.5"></div>
                  </div>
                  
                  <h3 className="text-[26px] font-extrabold text-white leading-[1.1] mb-3">
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
          </div>`;

content = content.replace(oldContainerRegex, newContainer);


// 3. Fix the navigation controls
const oldArrowsRegex = /\{\/\* Navigation Controls \*\/\}[\s\S]*?<\/div>\s*<\/section>/;

const newArrows = `{/* Navigation Controls */}
          <div className="flex items-center justify-between mt-4 px-2 pb-8">
            <button 
              onClick={() => scrollServices('left')} 
              disabled={activeServiceIndex === 0}
              className={\`w-14 h-14 rounded-full flex items-center justify-center transition-all duration-300 \${activeServiceIndex === 0 ? 'bg-gray-50 text-gray-300 border-2 border-gray-200 cursor-not-allowed' : 'bg-white shadow-md border-2 border-[#405C41] text-[#405C41] hover:bg-[#405C41] hover:text-white hover:scale-105 cursor-pointer'}\`}
            >
              <ChevronLeft className="w-7 h-7" />
            </button>
            
            <div className="flex flex-col items-center gap-2">
               <span className="text-[15px] font-extrabold text-[#405C41] tracking-widest">
                 0{activeServiceIndex + 1} <span className="text-[#405C41]/40 font-bold">/ 04</span>
               </span>
               <div className="flex gap-1.5">
                 {services.map((s, idx) => (
                   <div key={s.id} className={\`h-[2px] rounded-full transition-all duration-300 \${idx === activeServiceIndex ? 'w-8 bg-[#405C41]' : 'w-2 bg-[#405C41]/20'}\`}></div>
                 ))}
               </div>
            </div>

            <button 
              onClick={() => scrollServices('right')} 
              disabled={activeServiceIndex === services.length - 1}
              className={\`w-14 h-14 rounded-full flex items-center justify-center transition-all duration-300 \${activeServiceIndex === services.length - 1 ? 'bg-gray-50 text-gray-300 border-2 border-gray-200 cursor-not-allowed' : 'bg-white shadow-md border-2 border-[#405C41] text-[#405C41] hover:bg-[#405C41] hover:text-white hover:scale-105 cursor-pointer'}\`}
            >
              <ChevronRight className="w-7 h-7" />
            </button>
          </div>
        </section>`;

content = content.replace(oldArrowsRegex, newArrows);

fs.writeFileSync('src/pages/Home.tsx', content);
console.log('Successfully updated carousel behavior and navigation.');

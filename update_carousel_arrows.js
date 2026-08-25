import fs from 'fs';

function addCarouselArrows(filePath, isKosenie) {
  let content = fs.readFileSync(filePath, 'utf8');
  
  // 1. Add useRef to react import
  if (content.includes("import { useState } from 'react';")) {
    content = content.replace("import { useState } from 'react';", "import { useState, useRef } from 'react';");
  } else if (!content.includes('useRef')) {
    content = content.replace("import { useState", "import { useState, useRef");
  }

  // 2. Add ChevronLeft, ChevronRight to lucide-react import
  if (!content.includes('ChevronLeft')) {
    content = content.replace("import { Leaf,", "import { Leaf, ChevronLeft, ChevronRight,");
  }

  // 3. Add ref and scroll function inside component
  const refCode = `
  const carouselRef = useRef<HTMLDivElement>(null);
  
  const scrollCarousel = (direction: 'left' | 'right') => {
    if (carouselRef.current) {
      const scrollAmount = direction === 'left' ? -280 : 280;
      carouselRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };
`;
  
  const hookTarget = `const [sliderPosition, setSliderPosition] = useState(50);`;
  if (!content.includes('carouselRef')) {
    content = content.replace(hookTarget, `${hookTarget}\n${refCode}`);
  }

  // 4. Update the heading and add arrows
  const headingTarget1 = `<h2 className="text-[13px] font-bold tracking-[0.15em] text-[#405C41] uppercase mb-6 px-6">
            PREČO PRAVIDELNÉ KOSENIE?
          </h2>`;
  const headingTarget2 = `<h2 className="text-[11px] font-bold tracking-widest text-[#405C41] uppercase px-6 mb-6">
            PREČO TÁTO SLUŽBA?
          </h2>`;
          
  const headingTargetToUse = content.includes(headingTarget1) ? headingTarget1 : headingTarget2;
  const headingClasses = content.includes(headingTarget1) 
    ? `text-[13px] font-bold tracking-[0.15em] text-[#405C41] uppercase` 
    : `text-[11px] font-bold tracking-widest text-[#405C41] uppercase`;
  const headingText = content.includes(headingTarget1) ? `PREČO PRAVIDELNÉ KOSENIE?` : `PREČO TÁTO SLUŽBA?`;

  const newHeading = `          <div className="flex items-center justify-between w-full mb-6 px-6">
            <h2 className="${headingClasses}">
              ${headingText}
            </h2>
            <div className="flex gap-2">
              <button onClick={() => scrollCarousel('left')} className="w-8 h-8 rounded-full border border-[#405C41]/20 flex items-center justify-center text-[#405C41] hover:bg-[#405C41]/5 transition-colors">
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button onClick={() => scrollCarousel('right')} className="w-8 h-8 rounded-full border border-[#405C41]/20 flex items-center justify-center text-[#405C41] hover:bg-[#405C41]/5 transition-colors">
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>`;

  content = content.replace(headingTargetToUse, newHeading);

  // 5. Add ref to the container
  const containerTarget = `<div className="flex overflow-x-auto snap-x snap-mandatory gap-4 w-full pb-6 px-6 [&::-webkit-scrollbar]:hidden" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>`;
  const containerReplacement = `<div ref={carouselRef} className="flex overflow-x-auto snap-x snap-mandatory gap-4 w-full pb-6 px-6 [&::-webkit-scrollbar]:hidden" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>`;
  
  content = content.replace(containerTarget, containerReplacement);

  fs.writeFileSync(filePath, content);
  console.log(`Updated ${filePath}`);
}

addCarouselArrows('src/pages/Kosenie.tsx', true);
addCarouselArrows('src/pages/Starostlivost.tsx', false);
addCarouselArrows('src/pages/Strihanie.tsx', false);
addCarouselArrows('src/pages/Udrzba.tsx', false);


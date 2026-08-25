import fs from 'fs';

function updateGallery(filePath, images) {
  let content = fs.readFileSync(filePath, 'utf8');

  // Inject state and refs
  const hookTarget = `const [sliderPosition, setSliderPosition] = useState(50);`;
  const galleryState = `
  const galleryRef = useRef<HTMLDivElement>(null);
  const [activeGalleryIndex, setActiveGalleryIndex] = useState(0);
  
  const scrollGallery = (direction: 'left' | 'right') => {
    if (galleryRef.current) {
      const scrollAmount = direction === 'left' ? -320 : 320;
      galleryRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  const handleGalleryScroll = (e: React.UIEvent<HTMLDivElement>) => {
    const container = e.currentTarget;
    const itemWidth = container.clientWidth * 0.85;
    const index = Math.round(container.scrollLeft / itemWidth);
    if (index >= 0 && index < 4) {
      setActiveGalleryIndex(index);
    }
  };`;

  if (!content.includes('activeGalleryIndex')) {
    content = content.replace(hookTarget, `${hookTarget}\n${galleryState}`);
  }

  // Replace gallery section
  const galleryStart = `{/* Gallery */}`;
  const galleryEnd = `{/* FAQ */}`;
  
  const startIndex = content.indexOf(galleryStart);
  const endIndex = content.indexOf(galleryEnd);
  
  if (startIndex !== -1 && endIndex !== -1) {
    const replacement = `{/* Gallery */}
        <section className="py-8 bg-[#F4F2EB]">
          <div className="flex items-center justify-between w-full mb-6 px-6">
            <h2 className="text-[11px] font-bold tracking-widest text-[#405C41] uppercase">
              UKÁŽKY NAŠEJ PRÁCE
            </h2>
            <div className="flex gap-2">
              <button onClick={() => scrollGallery('left')} className="w-8 h-8 rounded-full border border-[#405C41]/20 flex items-center justify-center text-[#405C41] hover:bg-[#405C41]/5 transition-colors">
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button onClick={() => scrollGallery('right')} className="w-8 h-8 rounded-full border border-[#405C41]/20 flex items-center justify-center text-[#405C41] hover:bg-[#405C41]/5 transition-colors">
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
          
          <div 
            ref={galleryRef} 
            onScroll={handleGalleryScroll} 
            className="flex overflow-x-auto snap-x snap-mandatory gap-4 w-full pb-4 px-6 [&::-webkit-scrollbar]:hidden" 
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            ${images.map(img => `
            <div className="min-w-[85%] sm:min-w-[280px] snap-center shrink-0">
              <img src="${img}" alt="Ukážka práce" className="w-full aspect-[4/3] object-cover rounded-[1.5rem] shadow-[0_4px_20px_rgba(0,0,0,0.08)]" />
            </div>`).join('')}
          </div>
          
          <div className="px-6 flex justify-end">
            <span className="text-[11px] font-bold tracking-widest text-[#405C41]/60">
              0{activeGalleryIndex + 1} / 04
            </span>
          </div>
        </section>\n\n        `;
        
    content = content.slice(0, startIndex) + replacement + content.slice(endIndex);
  }

  fs.writeFileSync(filePath, content);
  console.log(`Updated gallery in ${filePath}`);
}

const imgKosenie = [
  "https://images.unsplash.com/photo-1589923188900-85dae523342b?auto=format&fit=crop&q=80&w=800",
  "https://images.unsplash.com/photo-1599951806307-e435987a0225?auto=format&fit=crop&q=80&w=800",
  "https://images.unsplash.com/photo-1589923158776-cb4485d99fd6?auto=format&fit=crop&q=80&w=800",
  "https://images.unsplash.com/photo-1524260271374-124b8980bc29?auto=format&fit=crop&q=80&w=800"
];

const imgStarostlivost = [
  "https://images.unsplash.com/photo-1416879598555-25925e0a6d0c?auto=format&fit=crop&q=80&w=800",
  "https://images.unsplash.com/photo-1592424001806-039c288593a2?auto=format&fit=crop&q=80&w=800",
  "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&q=80&w=800",
  "https://images.unsplash.com/photo-1464468641984-7d52a2307de6?auto=format&fit=crop&q=80&w=800"
];

const imgStrihanie = [
  "https://images.unsplash.com/photo-1558904541-efa843a96f09?auto=format&fit=crop&q=80&w=800",
  "https://images.unsplash.com/photo-1616058055627-c10b777a8286?auto=format&fit=crop&q=80&w=800",
  "https://images.unsplash.com/photo-1622383563227-04401ab4e5ea?auto=format&fit=crop&q=80&w=800",
  "https://images.unsplash.com/photo-1558905342-99086c2e36f0?auto=format&fit=crop&q=80&w=800"
];

const imgUdrzba = [
  "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&q=80&w=800",
  "https://images.unsplash.com/photo-1416879598555-25925e0a6d0c?auto=format&fit=crop&q=80&w=800",
  "https://images.unsplash.com/photo-1589923188900-85dae523342b?auto=format&fit=crop&q=80&w=800",
  "https://images.unsplash.com/photo-1524260271374-124b8980bc29?auto=format&fit=crop&q=80&w=800"
];

updateGallery('src/pages/Kosenie.tsx', imgKosenie);
updateGallery('src/pages/Starostlivost.tsx', imgStarostlivost);
updateGallery('src/pages/Strihanie.tsx', imgStrihanie);
updateGallery('src/pages/Udrzba.tsx', imgUdrzba);

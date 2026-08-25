const fs = require('fs');

let content = fs.readFileSync('src/pages/Home.tsx', 'utf8');

// 1. Remove the empty spacer divs
content = content.replace(/<div className="w-\[calc\(50%-150px-16px\)\] shrink-0" \/>/g, '');

// 2. Change the container padding and remove w-[calc...] 
// The container currently is:
// className="flex overflow-x-auto snap-x snap-mandatory gap-4 w-[calc(100%+3rem)] -mx-6 pb-6 [&::-webkit-scrollbar]:hidden"
// We change it to:
content = content.replace(
  /className="flex overflow-x-auto snap-x snap-mandatory gap-4 w-\[calc\(100%\+3rem\)\] -mx-6 pb-6 \[\&::\-webkit\-scrollbar\]:hidden"/,
  'className="flex overflow-x-auto snap-x snap-mandatory gap-4 w-[calc(100%+3rem)] -mx-6 pb-6 px-[calc(50%-150px)] [&::-webkit-scrollbar]:hidden"'
);

// 3. Debounce the onScroll to fix lagging
const oldOnScroll = `  const handleServicesScroll = (e: React.UIEvent<HTMLDivElement>) => {
    const container = e.currentTarget;
    if (container.children.length > 0) {
      const itemWidth = 316; // 300px width + 16px gap
      const index = Math.round(container.scrollLeft / itemWidth);
      if (index >= 0 && index < services.length) {
        setActiveServiceIndex(index);
      }
    }
  };`;

const newOnScroll = `  const scrollTimeoutRef = React.useRef<number | null>(null);
  
  const handleServicesScroll = (e: React.UIEvent<HTMLDivElement>) => {
    const container = e.currentTarget;
    if (scrollTimeoutRef.current) clearTimeout(scrollTimeoutRef.current);
    
    scrollTimeoutRef.current = window.setTimeout(() => {
      if (container.children.length > 0) {
        const itemWidth = 316; // 300px width + 16px gap
        const index = Math.round(container.scrollLeft / itemWidth);
        if (index >= 0 && index < services.length) {
          setActiveServiceIndex(index);
        }
      }
    }, 50); // Debounce by 50ms to prevent lagging during smooth scroll
  };`;

content = content.replace(oldOnScroll, newOnScroll);

// 4. Update the scrollServices button logic to use the exact correct element width or just rely on CSS
const oldScrollServices = `  const scrollServices = (direction: 'left' | 'right') => {
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

const newScrollServices = `  const scrollServices = (direction: 'left' | 'right') => {
    if (servicesRef.current) {
      const itemWidth = 316; // 300px width + 16px gap
      if (direction === 'left') {
        servicesRef.current.scrollBy({ left: -itemWidth, behavior: 'smooth' });
      } else if (direction === 'right') {
        servicesRef.current.scrollBy({ left: itemWidth, behavior: 'smooth' });
      }
    }
  };`;

content = content.replace(oldScrollServices, newScrollServices);

fs.writeFileSync('src/pages/Home.tsx', content);

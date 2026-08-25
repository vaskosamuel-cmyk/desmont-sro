const fs = require('fs');
let content = fs.readFileSync('src/pages/Home.tsx', 'utf8');

// Insert scrollTimeoutRef right after activeServiceIndex
content = content.replace(
  /const \[activeServiceIndex, setActiveServiceIndex\] = useState\(0\);/,
  "const [activeServiceIndex, setActiveServiceIndex] = useState(0);\n  const scrollTimeoutRef = useRef<number | null>(null);"
);

// Replace handleServicesScroll
const newHandleServicesScroll = `const handleServicesScroll = (e: any) => {
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
    }, 50);
  };`;

content = content.replace(/const handleServicesScroll = \(e: any\) => \{[\s\S]*?\};\n/, newHandleServicesScroll + '\n');

// Replace scrollServices
const newScrollServices = `const scrollServices = (direction: 'left' | 'right') => {
    if (servicesRef.current) {
      const itemWidth = 316;
      if (direction === 'left') {
        servicesRef.current.scrollBy({ left: -itemWidth, behavior: 'smooth' });
      } else if (direction === 'right') {
        servicesRef.current.scrollBy({ left: itemWidth, behavior: 'smooth' });
      }
    }
  };`;

content = content.replace(/const scrollServices = \(direction: 'left' \| 'right'\) => \{[\s\S]*?\};\n/, newScrollServices + '\n');

fs.writeFileSync('src/pages/Home.tsx', content);

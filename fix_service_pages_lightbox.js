import fs from 'fs';

const pages = [
  'src/pages/Kosenie.tsx',
  'src/pages/Starostlivost.tsx',
  'src/pages/Strihanie.tsx',
  'src/pages/Udrzba.tsx'
];

pages.forEach(file => {
  let content = fs.readFileSync(file, 'utf8');

  // Change state type from string | null to number | null
  content = content.replace(
    /const \[selectedImage, setSelectedImage\] = useState<string \| null>\(null\);/,
    `const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);`
  );

  // We need to extract the images to an array so we can pass them to the Lightbox
  // The structure is usually <img src="..." alt="Ukážka práce" ... onClick={() => setSelectedImage('...')} />
  // We'll replace this whole section with a mapped array.
  
  const imgRegex = /<img src="([^"]+)" alt="Ukážka práce" className="([^"]+)" onClick=\{\(\) => setSelectedImage\('([^']+)'\)\} \/>/g;
  let match;
  let images = [];
  while ((match = imgRegex.exec(content)) !== null) {
    if (!images.includes(match[1])) {
       images.push(match[1]);
    }
  }

  if (images.length > 0) {
    // Insert the array at the top of the component
    const arrayStr = `\n  const galleryImages = [\n    ${images.map(img => `'${img}'`).join(',\n    ')}\n  ];\n`;
    content = content.replace(/export default function \w+\(\) \{/, match => match + arrayStr);
    
    // Replace the <img> tags with mapped array
    content = content.replace(
      /<img src="[^"]+" alt="Ukážka práce" className="([^"]+)" onClick=\{\(\) => setSelectedImage\('[^']+'\)\} \/>/g,
      (match, classNames) => {
         return ``; // we will replace the whole wrapper block instead
      }
    );
    
    // Actually it's easier to find the container and replace its children
    const containerRegex = /(<div\s+ref=\{galleryRef\}[\s\S]*?className="flex overflow-x-auto snap-x snap-mandatory gap-4 w-full pb-4 px-6 \[\&::\-webkit\-scrollbar\]:hidden"\s+style=\{\{ scrollbarWidth: 'none', msOverflowStyle: 'none' \}\}\s*>)([\s\S]*?)(<\/div>\s*<\/section>)/;
    
    content = content.replace(containerRegex, (fullMatch, start, middle, end) => {
        const mappedImages = `
            {galleryImages.map((src, idx) => (
              <div key={idx} className="shrink-0">
                <img 
                  src={src} 
                  alt="Ukážka práce" 
                  className="w-[300px] h-[225px] object-cover rounded-[1.5rem] shadow-[0_4px_20px_rgba(0,0,0,0.08)] snap-center cursor-pointer hover:opacity-90 transition-opacity" 
                  onClick={() => setLightboxIndex(idx)} 
                />
              </div>
            ))}
          `;
        return start + mappedImages + end;
    });

    // Update Lightbox usage
    content = content.replace(
      /<Lightbox isOpen=\{!!selectedImage\} imageUrl=\{selectedImage\} onClose=\{\(\) => setSelectedImage\(null\)\} \/>/,
      `<Lightbox isOpen={lightboxIndex !== null} images={galleryImages} currentIndex={lightboxIndex ?? 0} onNavigate={setLightboxIndex} onClose={() => setLightboxIndex(null)} />`
    );
  }

  fs.writeFileSync(file, content);
  console.log(`Updated ${file}`);
});

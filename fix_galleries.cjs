const fs = require('fs');
const path = require('path');

const images = [
  '/desmostav-hruba-stavba-17.webp',
  '/desmostav-hruba-stavba-26.webp',
  '/desmostav-hruba-stavba-35.webp',
  '/desmostav-stavebna-firma-05.webp',
  '/desmostav-stavebna-firma-14.webp',
  '/desmostav-stavebna-firma-23.webp',
  '/desmostav-stavba-na-kluc-33.webp',
  '/desmostav-rekonstrukcia-domu-03.webp',
  '/desmostav-rekonstrukcia-domu-21.webp',
  '/desmostav-prerabka-domu-19.webp',
  '/desmostav-stavebne-sluzby-18.webp',
  '/desmostav-prerabka-domu-10.webp'
];

// 1. NasePrace.tsx background image
let nasePrace = fs.readFileSync('src/pages/NasePrace.tsx', 'utf8');
nasePrace = nasePrace.replace(
  'src="/desmostav-vystavba-rodinnych-domov-04.webp"',
  'src="/desmostav-prerabka-domu-10.webp"'
);
fs.writeFileSync('src/pages/NasePrace.tsx', nasePrace);

// 2. Home.tsx gallery
let home = fs.readFileSync('src/pages/Home.tsx', 'utf8');
const galleryItemsArray = `const galleryItems = [
${images.map((img, i) => `  { id: ${i+1}, image: '${img}' }`).join(',\n')}
];`;
// Find existing galleryItems array and replace
home = home.replace(/const galleryItems = \[\s*\{[\s\S]*?\}\s*\];/, galleryItemsArray);
fs.writeFileSync('src/pages/Home.tsx', home);

// 3. Service pages
const servicePages = [
  'StavbyNaKluc.tsx',
  'ExterierFasady.tsx',
  'Instalacie.tsx',
  'Interier.tsx',
  'Rekonstrukcie.tsx'
];

servicePages.forEach(file => {
  const filePath = path.join('src/pages', file);
  if (fs.existsSync(filePath)) {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Replace galleryImages array definition
    content = content.replace(/const galleryImages = \[[^\]]*\];/, `const galleryImages = ${JSON.stringify(images, null, 2)};`);
    
    // We need to inject handleInfiniteScroll and infinite logic
    // Currently they have: const galleryRef = useRef<HTMLDivElement>(null);
    // And const scrollGallery = (direction) => { ... }
    
    // We'll replace the gallery rendering.
    // They have:
    // {galleryImages.map((src, idx) => (
    //   <div key={idx} className="shrink-0">
    //     <img src={src} ... className="w-[300px] h-[225px] ... onClick={() => setLightboxIndex(idx)} />
    //   </div>
    // ))}
    
    // If it doesn't have handleInfiniteScroll, we need to add it before the return statement.
    if (!content.includes('handleInfiniteScroll')) {
      const functionInsert = `
  const infiniteGallery = [...galleryImages, ...galleryImages, ...galleryImages];

  // Initialize scroll position to the middle set on mount
  React.useEffect(() => {
    if (galleryRef.current) {
      setTimeout(() => {
        if (galleryRef.current) {
           galleryRef.current.scrollLeft = galleryRef.current.scrollWidth / 3;
        }
      }, 100);
    }
  }, []);

  const handleInfiniteScroll = (e: React.UIEvent<HTMLDivElement>) => {
    const container = e.currentTarget;
    const setWidth = container.scrollWidth / 3;
    if (container.scrollLeft <= 5) {
      container.scrollLeft += setWidth;
    } else if (container.scrollLeft >= (setWidth * 2) - 5) {
      container.scrollLeft -= setWidth;
    }
  };

  const scrollContainer = (ref: React.RefObject<HTMLDivElement>, direction: 'left' | 'right') => {
    if (ref.current) {
      const container = ref.current;
      const setWidth = container.scrollWidth / 3;
      const scrollAmount = direction === 'left' ? -320 : 320;
      const currentScroll = container.scrollLeft;
      container.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };
`;
      // Replace existing scrollGallery function or just insert after useContactSheet
      content = content.replace(
        "const { openSheet } = useContactSheet();",
        "const { openSheet } = useContactSheet();\n" + functionInsert
      );
      
      // We also need React imported if not present
      if (!content.includes("import React")) {
        content = content.replace("import { useState, useRef } from 'react';", "import React, { useState, useRef } from 'react';");
      }
      
      // Update the onClick handlers for buttons
      content = content.replace(/scrollGallery\('left'\)/g, "scrollContainer(galleryRef, 'left')");
      content = content.replace(/scrollGallery\('right'\)/g, "scrollContainer(galleryRef, 'right')");
      
      // Update the onScroll handler and map
      content = content.replace(/onScroll=\{handleGalleryScroll\}/g, "onScroll={handleInfiniteScroll}");
      content = content.replace(/galleryImages\.map/g, "infiniteGallery.map");
      content = content.replace(/key=\{idx\}/g, "key={idx + Math.random()}"); // simple hack or key={idx}
      content = content.replace(/onClick=\{\(\) => setLightboxIndex\(idx\)\}/g, "onClick={() => setLightboxIndex(idx % galleryImages.length)}");
      
    }

    fs.writeFileSync(filePath, content);
    console.log(`Updated ${file}`);
  }
});

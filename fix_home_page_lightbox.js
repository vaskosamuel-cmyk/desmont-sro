import fs from 'fs';

const file = 'src/pages/Home.tsx';
let content = fs.readFileSync(file, 'utf8');

// Change state type
content = content.replace(
  /const \[selectedImage, setSelectedImage\] = useState<string \| null>\(null\);/,
  `const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);\n  const lightboxImages = galleryItems.map(item => item.image);`
);

// Update img onClick
content = content.replace(
  /onClick=\{\(\) => setSelectedImage\(item\.image\)\}/g,
  `onClick={() => setLightboxIndex(galleryItems.findIndex(i => i.image === item.image))}`
);

// Update Lightbox usage
content = content.replace(
  /<Lightbox isOpen=\{!!selectedImage\} imageUrl=\{selectedImage\} onClose=\{\(\) => setSelectedImage\(null\)\} \/>/,
  `<Lightbox isOpen={lightboxIndex !== null} images={lightboxImages} currentIndex={lightboxIndex ?? 0} onNavigate={setLightboxIndex} onClose={() => setLightboxIndex(null)} />`
);

fs.writeFileSync(file, content);
console.log(`Updated ${file}`);

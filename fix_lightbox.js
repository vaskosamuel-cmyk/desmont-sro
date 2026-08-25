import fs from 'fs';

const pages = [
  'src/pages/Kosenie.tsx',
  'src/pages/Starostlivost.tsx',
  'src/pages/Strihanie.tsx',
  'src/pages/Udrzba.tsx'
];

pages.forEach(file => {
  let content = fs.readFileSync(file, 'utf8');

  // Add Lightbox import
  if (!content.includes('import Lightbox')) {
    content = content.replace(
      "import TopNav from '../components/TopNav';",
      "import TopNav from '../components/TopNav';\nimport Lightbox from '../components/Lightbox';"
    );
  }
  
  // Add state
  if (!content.includes('const [selectedImage')) {
    content = content.replace(
      "const { openSheet } = useContactSheet();",
      "const { openSheet } = useContactSheet();\n  const [selectedImage, setSelectedImage] = useState<string | null>(null);"
    );
  }
  
  // Update images to open lightbox
  // Find <img src="..." alt="Ukážka práce" className="..." />
  // and add onClick={() => setSelectedImage("...")} className="... cursor-pointer"
  
  content = content.replace(/<img src="(.*?)" alt="Ukážka práce" className="(.*?)" \/>/g, (match, src, classNames) => {
    return `<img src="${src}" alt="Ukážka práce" className="${classNames} cursor-pointer hover:opacity-90 transition-opacity" onClick={() => setSelectedImage('${src}')} />`;
  });
  
  // Add Lightbox rendering at the very end before final </div> or </div></>
  if (!content.includes('<Lightbox')) {
    content = content.replace(
      /(\s*)(<\/div>\s*)$/,
      `$1  <Lightbox isOpen={!!selectedImage} imageUrl={selectedImage} onClose={() => setSelectedImage(null)} />\n$1$2`
    );
  }
  
  fs.writeFileSync(file, content);
  console.log(`Updated ${file}`);
});

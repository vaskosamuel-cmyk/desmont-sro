import fs from 'fs';

const pages = [
  'src/pages/Kosenie.tsx',
  'src/pages/Starostlivost.tsx',
  'src/pages/Strihanie.tsx',
  'src/pages/Udrzba.tsx'
];

pages.forEach(file => {
  let content = fs.readFileSync(file, 'utf8');

  // ensure the Lightbox is inserted correctly
  const oldEnd = `      </div>
    </div>
  );
}`;
  const newEnd = `      </div>
      <Lightbox isOpen={!!selectedImage} imageUrl={selectedImage} onClose={() => setSelectedImage(null)} />
    </div>
  );
}`;
  
  if (!content.includes('<Lightbox isOpen={!!selectedImage}')) {
    content = content.replace(oldEnd, newEnd);
    fs.writeFileSync(file, content);
    console.log(`Updated ending of ${file}`);
  }
});

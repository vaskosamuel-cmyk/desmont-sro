import fs from 'fs';

const file = 'src/pages/Home.tsx';
let content = fs.readFileSync(file, 'utf8');

const oldEnd = `      </div>
    </div>
  );
}`;
const newEnd = `      </div>
      <Lightbox isOpen={!!selectedImage} imageUrl={selectedImage} onClose={() => setSelectedImage(null)} />
    </div>
  );
}`;

content = content.replace(oldEnd, newEnd);
fs.writeFileSync(file, content);
console.log(`Updated ${file}`);

const fs = require('fs');
const path = require('path');

const files = [
  'StavbyNaKluc.tsx',
  'ExterierFasady.tsx',
  'Instalacie.tsx',
  'Interier.tsx',
  'Rekonstrukcie.tsx'
];

const targetPattern = `            ))}
          </div>
        </section>`;

const replacement = `            ))}
          </div>
          
          <div className="flex justify-center mt-6 px-6 pb-2">
            <Link 
              to="/nase-prace" 
              className="inline-flex items-center justify-center gap-2 bg-[#E5A93B] hover:bg-[#D4AF37] transition-colors text-white font-bold py-3.5 px-8 rounded-[1rem] text-[13px] tracking-wider w-full max-w-sm uppercase"
            >
              Pozrieť všetky ukážky
            </Link>
          </div>
        </section>`;

files.forEach(file => {
  const filePath = path.join('src/pages', file);
  if (fs.existsSync(filePath)) {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // We only want to replace it for the Gallery section. The simplest way is to replace the first occurrence that follows "UKÁŽKY NAŠEJ PRÁCE"
    const splitParts = content.split('UKÁŽKY NAŠEJ PRÁCE');
    if (splitParts.length === 2) {
      splitParts[1] = splitParts[1].replace(targetPattern, replacement);
      content = splitParts.join('UKÁŽKY NAŠEJ PRÁCE');
      fs.writeFileSync(filePath, content);
      console.log(`Updated ${file}`);
    } else {
      console.log(`Could not process ${file}`);
    }
  }
});


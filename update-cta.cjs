const fs = require('fs');

const files = [
  'src/pages/StavbyNaKluc.tsx',
  'src/pages/ExterierFasady.tsx',
  'src/pages/InterierInstalacie.tsx',
  'src/pages/Rekonstrukcie.tsx'
];

const ctaHTML = `
            <button 
              onClick={openSheet}
              className="w-full bg-[#1A1A1A] hover:bg-[#E5A93B] text-white transition-colors font-bold py-3.5 px-6 rounded-xl flex items-center justify-center gap-3 mt-2 shadow-md"
            >
              <HardHat className="w-5 h-5 text-white" strokeWidth={1.5} />
              <span className="text-[13px] tracking-wider uppercase">MÁM ZÁUJEM O TÚTO SLUŽBU</span>
            </button>
`;

files.forEach(file => {
  let content = fs.readFileSync(file, 'utf8');
  
  // Find the exact spot. It's after the list, which is followed by the image container.
  // The image container is <div className="w-full h-[180px] rounded-xl overflow-hidden mt-2">
  // Or mt-4, let's look at the prefix.
  const splitStr = '<div className="w-full h-[180px]';
  if (content.includes(splitStr)) {
    content = content.replace(splitStr, ctaHTML + '\n            ' + splitStr);
    fs.writeFileSync(file, content);
    console.log('Updated', file);
  } else {
    console.log('Could not find image div in', file);
  }
});

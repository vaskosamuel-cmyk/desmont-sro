import fs from 'fs';

const files = [
  'src/pages/StavbyNaKluc.tsx',
  'src/pages/ExterierFasady.tsx',
  'src/pages/InterierInstalacie.tsx',
  'src/pages/Rekonstrukcie.tsx'
];

files.forEach(file => {
  let content = fs.readFileSync(file, 'utf8');
  
  // Extract the button HTML block.
  // We know it starts with '            <button \n              onClick={openSheet}\n              className="w-full bg-[#1A1A1A]' and ends with '            </button>'
  const buttonRegex = /(\s*<button\s+onClick=\{openSheet\}\s+className="w-full bg-\[#1A1A1A\][^>]+>\s*<HardHat[^>]+>\s*<span[^>]+>MÁM ZÁUJEM O TÚTO SLUŽBU<\/span>\s*<\/button>)/;
  
  const match = content.match(buttonRegex);
  if (match) {
    const buttonHtml = match[1];
    
    // Remove the button from its current location
    content = content.replace(buttonHtml, '');
    
    // The image div follows the original button location.
    // The card ends right after the image div.
    // Specifically:
    //             <div className="w-full h-[180px] rounded-xl overflow-hidden mt-2">
    //               <img ... />
    //             </div>
    //           </div>
    //         </section>
    
    // We'll search for the card closing div and section closing tag.
    // It's the first </section> after the image div.
    // A safer way is to find the image div, and then insert the button after the next '</div>'.
    
    const imageDivRegex = /(\s*<div className="w-full h-\[180px\].*?<\/div>\s*<\/div>\s*)(<\/section>)/s;
    const match2 = content.match(imageDivRegex);
    
    if (match2) {
      // Modify button class to add more top margin (mt-6 or mt-4 instead of mt-2)
      let newButtonHtml = buttonHtml.replace('mt-2', 'mt-4');
      
      // Insert after the card closing div, before </section>
      content = content.replace(imageDivRegex, `$1${newButtonHtml}\n        $2`);
      fs.writeFileSync(file, content);
      console.log('Moved CTA in', file);
    } else {
      console.log('Could not find image div block in', file);
    }
  } else {
    console.log('Could not find button block in', file);
  }
});

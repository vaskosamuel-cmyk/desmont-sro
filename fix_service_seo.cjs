const fs = require('fs');
const path = require('path');

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
    
    // We want to remove:
    // <span className="text-[14px] font-extrabold tracking-widest text-[#E5A93B] uppercase">
    //   SOME TEXT
    // </span>
    
    // Since the text varies, we can use a regex to match the span and its content.
    const regex = /<span className="text-\[14px\] font-extrabold tracking-widest text-\[#E5A93B\] uppercase">[\s\S]*?<\/span>/;
    
    if (regex.test(content)) {
      content = content.replace(regex, '');
      // Remove the mt-4 from the div line to make it look balanced if desired, or just leave it as user said "dont change anything"
      // Wait, let's keep mt-4 but maybe remove it if it looks weird. 
      // User said "just start with the small line and then the heading alreadty there , dont change anything"
      // So I will just remove the span.
      fs.writeFileSync(filePath, content);
      console.log(`Updated ${file}`);
    } else {
      console.log(`Could not find match in ${file}`);
    }
  }
});

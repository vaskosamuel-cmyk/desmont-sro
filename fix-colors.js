import fs from 'fs';
import path from 'path';

const pagesDir = 'src/pages';
const filesToReplaceExact = [
  'ExterierFasady.tsx',
  'Instalacie.tsx',
  'Interier.tsx',
  'Rekonstrukcie.tsx',
  'StavbyNaKluc.tsx'
];

filesToReplaceExact.forEach(file => {
  const filePath = path.join(pagesDir, file);
  if (!fs.existsSync(filePath)) return;
  
  let content = fs.readFileSync(filePath, 'utf8');
  content = content.replace(/bg-\[#D4AF37\] hover:bg-\[#B5952F\]/g, 'bg-[#E5A93B] hover:bg-[#D4AF37]');
  fs.writeFileSync(filePath, content);
});

// About.tsx
let aboutPath = path.join(pagesDir, 'About.tsx');
if (fs.existsSync(aboutPath)) {
  let content = fs.readFileSync(aboutPath, 'utf8');
  content = content.replace(/bg-\[#D4AF37\] hover:bg-\[#1A1A1A\]/g, 'bg-[#E5A93B] hover:bg-[#1A1A1A]');
  fs.writeFileSync(aboutPath, content);
}

// Home.tsx
let homePath = path.join(pagesDir, 'Home.tsx');
if (fs.existsSync(homePath)) {
  let content = fs.readFileSync(homePath, 'utf8');
  content = content.replace(/bg-\[#D4AF37\] hover:bg-\[#4a6b36\]/g, 'bg-[#E5A93B] hover:bg-[#D4AF37]');
  content = content.replace(/bg-\[#D4AF37\]\/90/g, 'bg-[#E5A93B]/90');
  fs.writeFileSync(homePath, content);
}

// Kontakt.tsx
let kontaktPath = path.join(pagesDir, 'Kontakt.tsx');
if (fs.existsSync(kontaktPath)) {
  let content = fs.readFileSync(kontaktPath, 'utf8');
  content = content.replace(/border-\[#D4AF37\]/g, 'border-[#E5A93B]');
  fs.writeFileSync(kontaktPath, content);
}


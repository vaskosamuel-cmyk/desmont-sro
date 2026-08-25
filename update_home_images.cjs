const fs = require('fs');

let content = fs.readFileSync('src/pages/Home.tsx', 'utf8');

// Update Hero image
content = content.replace(
  /src="\/desmostav-stavba-na-kluc-24\.webp"/,
  'src="/desmostav-hero-sunset.webp"'
);

// Update Service 1
content = content.replace(
  /image: '\/desmostav-hruba-stavba-08\.webp',\s*path: '\/sluzby\/stavby-na-kluc'/g,
  "image: '/desmostav-stavby-na-kluc-new.webp',\n    path: '/sluzby/stavby-na-kluc'"
);

// Update Service 2
content = content.replace(
  /image: '\/desmostav-rekonstrukcia-domu-03\.webp',\s*path: '\/sluzby\/rekonstrukcie'/g,
  "image: '/desmostav-rekonstrukcie-bathroom.webp',\n    path: '/sluzby/rekonstrukcie'"
);

// Update Service 4
content = content.replace(
  /image: '\/desmostav-vystavba-rodinnych-domov-22\.webp',\s*path: '\/sluzby\/interier'/g,
  "image: '/desmostav-interier-plaster.webp',\n    path: '/sluzby/interier'"
);

// Update Service 5
content = content.replace(
  /image: '\/desmostav-stavebne-prace-20\.webp',\s*path: '\/sluzby\/instalacie'/g,
  "image: '/desmostav-instalacie-electric.webp',\n    path: '/sluzby/instalacie'"
);

fs.writeFileSync('src/pages/Home.tsx', content);

// Let's also update the individual service pages for consistency
function replaceHeroImage(file, oldImageRegex, newImage) {
  if (fs.existsSync(file)) {
    let pageContent = fs.readFileSync(file, 'utf8');
    pageContent = pageContent.replace(oldImageRegex, newImage);
    fs.writeFileSync(file, pageContent);
  }
}

replaceHeroImage('src/pages/StavbyNaKluc.tsx', /src="\/desmostav-[^"]+\.webp"/, 'src="/desmostav-stavby-na-kluc-new.webp"');
replaceHeroImage('src/pages/Rekonstrukcie.tsx', /src="\/desmostav-[^"]+\.webp"/, 'src="/desmostav-rekonstrukcie-bathroom.webp"');
replaceHeroImage('src/pages/Interier.tsx', /src="\/desmostav-[^"]+\.webp"/, 'src="/desmostav-interier-plaster.webp"');
replaceHeroImage('src/pages/Instalacie.tsx', /src="\/desmostav-[^"]+\.webp"/, 'src="/desmostav-instalacie-electric.webp"');


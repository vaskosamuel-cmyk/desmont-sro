const fs = require('fs');

let content = fs.readFileSync('src/pages/Home.tsx', 'utf8');

// Update Hero Heading Line Height and Layout spacing
content = content.replace(
  'text-[36px] sm:text-[40px] font-extrabold tracking-tight text-white mb-4 uppercase leading-[1.1] max-w-[330px]',
  'text-[36px] sm:text-[40px] font-extrabold tracking-tight text-white mb-4 uppercase leading-[1.25] max-w-[330px]'
);

content = content.replace(
  'className="relative z-10 px-6 pb-[15dvh] flex flex-col items-center text-center"',
  'className="relative z-10 px-6 pb-[22dvh] flex flex-col items-center text-center"'
);

// Update Hero Button
content = content.replace(
  /NEZÁVÄZNÁ CENOVÁ PONUKA <ArrowRight className="w-5 h-5" \/>/g,
  'NEZÁVÄZNÁ CENOVÁ PONUKA <ArrowRight className="w-5 h-5 shrink-0" />'
);

content = content.replace(
  /NEZÁVÄZNÁ CENOVÁ PONUKA/g,
  'NEZÁVÄZNÁ CENOVÁ PONUKA'
);

// Add small arrow and text 'viac informacii' under CTA in hero
// Actually this already exists in Home.tsx:
// <a href="#sluzby" ...>
//   <span className="text-[10px] font-bold tracking-widest uppercase">Viac informácií</span>
//   <ChevronDown className="w-4 h-4 animate-bounce" strokeWidth={2} />
// </a>

// Update Hero Image
content = content.replace(
  '<img\n              src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&q=80&w=2000"\n              alt="Modern construction house"\n              className="w-full h-full object-cover object-center"\n            />',
  '<img\n              src="/desmostav-stavba-na-kluc-24.webp"\n              alt="Modern construction house"\n              className="w-full h-full object-cover object-center"\n            />'
);

fs.writeFileSync('src/pages/Home.tsx', content);

const fs = require('fs');
let content = fs.readFileSync('src/pages/NasePrace.tsx', 'utf8');

if (!content.includes('HardHat')) {
  content = content.replace(
    "import { Phone, Mail, MapPin, ChevronLeft, ChevronRight } from 'lucide-react';",
    "import { Phone, Mail, MapPin, ChevronLeft, ChevronRight, HardHat, ArrowRight } from 'lucide-react';"
  );
  fs.writeFileSync('src/pages/NasePrace.tsx', content);
}

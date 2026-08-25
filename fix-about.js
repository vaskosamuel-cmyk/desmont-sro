import fs from 'fs';

const filePath = 'src/pages/About.tsx';
let content = fs.readFileSync(filePath, 'utf8');

// Update imports
content = content.replace(/import { HardHat, Users, MapPin, Heart, MessageCircle, Star, CheckCircle2, Phone } from 'lucide-react';/, "import { HardHat, Users, MapPin, Phone, ShieldCheck, Award, Handshake, Lightbulb } from 'lucide-react';");

// Value 1
content = content.replace(/<div className="w-12 h-12 rounded-full bg-\[#1A1A1A\] flex items-center justify-center shrink-0 shadow-sm">\s*<Heart className="w-5 h-5 text-\[#E5A93B\]" \/>\s*<\/div>/, `<div className="w-12 h-12 rounded-full bg-white flex items-center justify-center shrink-0 shadow-sm border border-black/5">
                <ShieldCheck className="w-5 h-5 text-[#E5A93B]" />
              </div>`);

// Value 2
content = content.replace(/<div className="w-12 h-12 rounded-full bg-\[#E5A93B\] flex items-center justify-center shrink-0 shadow-sm">\s*<HardHat className="w-5 h-5 text-\[#E5A93B\]" fill="#E5A93B" \/>\s*<\/div>/, `<div className="w-12 h-12 rounded-full bg-white flex items-center justify-center shrink-0 shadow-sm border border-black/5">
                <Award className="w-5 h-5 text-[#E5A93B]" />
              </div>`);
              
// Value 3
content = content.replace(/<div className="w-12 h-12 rounded-full bg-\[#D4AF37\] flex items-center justify-center shrink-0 shadow-sm">\s*<MessageCircle className="w-5 h-5 text-white" \/>\s*<\/div>/, `<div className="w-12 h-12 rounded-full bg-white flex items-center justify-center shrink-0 shadow-sm border border-black/5">
                <Handshake className="w-5 h-5 text-[#E5A93B]" />
              </div>`);

// Value 4
content = content.replace(/<div className="w-12 h-12 rounded-full bg-\[#E5A93B\] flex items-center justify-center shrink-0 shadow-sm">\s*<HardHat className="w-5 h-5 text-white" \/>\s*<\/div>/, `<div className="w-12 h-12 rounded-full bg-white flex items-center justify-center shrink-0 shadow-sm border border-black/5">
                <Lightbulb className="w-5 h-5 text-[#E5A93B]" />
              </div>`);

fs.writeFileSync(filePath, content);

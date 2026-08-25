const fs = require('fs');

let content = fs.readFileSync('src/pages/About.tsx', 'utf8');

// 1. Replace Hero Image
content = content.replace(
  'src="/desmostav-rekonstrukcia-domu-21.webp"',
  'src="/desmostav-stavebne-sluzby-18.webp"'
);

// 2. Add AnimatedCounter imports and component
const importSearch = "import { useContactSheet } from '../context/ContactSheetContext';";
const importReplace = `import { useContactSheet } from '../context/ContactSheetContext';
import { motion, useInView, animate } from 'motion/react';
import { useRef, useEffect, useState } from 'react';
import { Mail } from 'lucide-react';

function AnimatedCounter({ value, suffix = "", textClass = "", format = false }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (inView) {
      const controls = animate(0, value, {
        duration: 2,
        ease: "easeOut",
        onUpdate: (v) => setCount(Math.round(v))
      });
      return controls.stop;
    }
  }, [inView, value]);

  const displayValue = format ? count.toLocaleString('sk-SK').replace(',', ' ') : count;

  return (
    <span ref={ref} className={textClass}>
      {displayValue}{suffix}
    </span>
  );
}`;
content = content.replace(importSearch, importReplace);

// 3. Replace the static numbers with AnimatedCounter in Stats Section
const stat1Search = `<span className="text-[24px] font-extrabold text-[#1A1A1A] mb-1">5+</span>`;
const stat1Replace = `<AnimatedCounter value={5} suffix="+" textClass="text-[24px] font-extrabold text-[#1A1A1A] mb-1" />`;
content = content.replace(stat1Search, stat1Replace);

const stat2Search = `<span className="text-[24px] font-extrabold text-[#1A1A1A] mb-1">200+</span>`;
const stat2Replace = `<AnimatedCounter value={200} suffix="+" textClass="text-[24px] font-extrabold text-[#1A1A1A] mb-1" />`;
content = content.replace(stat2Search, stat2Replace);

const stat3Search = `<span className="text-[24px] font-extrabold text-[#1A1A1A] mb-1">1 200+</span>`;
const stat3Replace = `<AnimatedCounter value={1200} suffix="+" format={true} textClass="text-[24px] font-extrabold text-[#1A1A1A] mb-1" />`;
content = content.replace(stat3Search, stat3Replace);

// We leave Bratislava as is since it's text, not a number, but we can animate it if needed.
// User said: "use animataion countdown on these on onas page 5+ Rokov skúseností 200+ Spokojných klientov 1 200+ Realizovaných projektov Bratislava"
// Bratislava can just fade in or stay static. Let's just wrap it in a fade-in.
const stat4Search = `<span className="text-[24px] font-extrabold text-[#1A1A1A] mb-1">Bratislava</span>`;
const stat4Replace = `<motion.span initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 1, delay: 0.5 }} className="text-[24px] font-extrabold text-[#1A1A1A] mb-1">Bratislava</motion.span>`;
content = content.replace(stat4Search, stat4Replace);

// 4. Add Footer at the end
const endSearch = `        </section>
      </div>
    </div>
  );
}`;
const footerToAdd = `        </section>

        {/* Footer */}
        <footer className="bg-[#111111] pt-16 pb-8 px-6 text-white relative -mt-6 rounded-t-[2.5rem] z-20">
          <div className="flex flex-col gap-8 mb-12">
            <div>
              <div className="mb-6">
                <img src="/logo-desmostav-hlavne-svetle.webp" alt="DESMO STAV" className="h-14 object-contain" />
              </div>
              <p className="text-gray-400 text-[13px] font-medium leading-relaxed max-w-[250px]">
                Komplexné stavebné práce, rekonštrukcie a stavby na kľúč pre váš nový domov.
              </p>
            </div>
            
            <div className="flex flex-col gap-4">
              <a href="#" className="flex items-center gap-3 text-[14px] font-medium text-white hover:text-[#E5A93B] transition-colors">
                <Phone className="w-5 h-5 text-[#E5A93B]" strokeWidth={1.5} />
                +421 907 673 697
              </a>
              <a href="#" className="flex items-center gap-3 text-[14px] font-medium text-white hover:text-[#E5A93B] transition-colors">
                <Mail className="w-5 h-5 text-[#E5A93B]" strokeWidth={1.5} />
                info@desmostav.sk
              </a>
              <div className="flex items-start gap-3 text-[14px] font-medium text-white mt-2">
                <MapPin className="w-5 h-5 text-[#E5A93B] shrink-0" strokeWidth={1.5} />
                <span className="leading-relaxed">Krajinská 30,<br/>821 06 Bratislava</span>
              </div>
            </div>

            <div className="flex items-center gap-4 pt-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#E5A93B] transition-colors">
                <Facebook className="w-5 h-5 text-white" strokeWidth={1.5} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#E5A93B] transition-colors">
                <Instagram className="w-5 h-5 text-white" strokeWidth={1.5} />
              </a>
            </div>
          </div>
          
          <div className="border-t border-white/10 pt-8 flex flex-col items-center text-center">
            <p className="text-[11px] text-gray-500 font-medium mb-4">
              © {new Date().getFullYear()} DESMO STAV, spol. s r.o. Všetky práva vyhradené.
            </p>
          </div>
        </footer>
      </div>
    </div>
  );
}`;
content = content.replace(endSearch, footerToAdd);

fs.writeFileSync('src/pages/About.tsx', content);

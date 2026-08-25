import { HardHat, Users, MapPin, Phone, ShieldCheck, Award, Handshake, Lightbulb, CheckCircle2 } from 'lucide-react';
import { Facebook, Instagram } from "../components/SocialIcons";
import TopNav from '../components/TopNav';
import { useContactSheet } from '../context/ContactSheetContext';
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
}

export default function About() {
  const { openSheet } = useContactSheet();

  return (
    <div className="fixed inset-0 bg-[#E5E5E5] font-sans text-gray-900 flex justify-center overflow-hidden">
      {/* Mobile Constraint Container */}
      <div className="w-full max-w-[428px] bg-[#F5F5F5] shadow-2xl relative flex flex-col h-[100dvh] overflow-y-auto overflow-x-hidden">
        
        {/* Top Navigation */}
        <TopNav />

        {/* Hero Section */}
        <section className="relative h-[60dvh] min-h-[400px] shrink-0 flex flex-col justify-end pb-12">
          {/* Background Image */}
          <div className="absolute inset-0 z-0">
            <img
              src="/desmostav-stavebne-sluzby-18.webp"
              alt="Stavbár"
              className="w-full h-full object-cover object-center"
            />
            <div className="absolute inset-0 bg-black/20 bg-gradient-to-r from-black/90 via-black/60 to-transparent"></div>
          </div>

          {/* Hero Content */}
          <div className="relative z-10 px-6 flex flex-col items-start">
            <span className="text-[11px] font-bold tracking-widest text-[#E5A93B] uppercase mb-3">
              O NÁS
            </span>
            <div className="w-8 h-[2px] bg-[#E5A93B] mb-4"></div>
            <h1 className="text-[44px] font-extrabold tracking-tight text-white mb-4 leading-[1.05]">
              Sme tu pre váš <br />
              <span className="text-[#E5A93B]">projekt.</span>
            </h1>
            <p className="text-[14px] text-gray-200 mb-2 font-medium max-w-[280px] leading-relaxed">
              S odborným prístupom a dôrazom na detail realizujeme stavby a rekonštrukcie, ktoré vydržia generácie.
            </p>
          </div>

          {/* Bottom SVG Curve */}
          <div className="absolute bottom-[-1px] left-0 right-0 w-full overflow-hidden leading-none z-10">
            <svg viewBox="0 0 1440 120" className="w-full h-[20px] sm:h-[30px]" preserveAspectRatio="none">
              <path fill="#F5F5F5" d="M0,120 L0,60 C400,120 1000,0 1440,60 L1440,120 Z"></path>
            </svg>
          </div>
        </section>

        {/* Who We Are Section */}
        <section className="py-8 px-6 bg-[#F5F5F5] flex flex-col">
          <div className="flex flex-col items-start mb-4">
            <span className="text-[11px] font-bold tracking-widest text-[#E5A93B] uppercase mb-1">
              KTO SME
            </span>
            <div className="w-10 h-[1.5px] bg-[#E5A93B] mt-1"></div>
          </div>
          
          <h2 className="text-[40px] font-extrabold text-[#1A1A1A] leading-[1.1] tracking-tight mb-5">
            Skúsenosti, na ktoré sa môžete <span className="text-[#E5A93B]">spoľahnúť.</span>
          </h2>
          
          <p className="text-[14px] text-gray-700 font-medium leading-[1.6] mb-8 pr-4">
            Už roky realizujeme stavebné projekty v Bratislave a okolí. Každý projekt vnímame individuálne a záleží nám na tom, aby bol výsledok vždy nad očakávania.
          </p>
          
          <div className="w-full aspect-[4/3] rounded-[1.5rem] overflow-hidden shadow-sm">
            <img 
              src="/desmostav-prerabka-domu-10.webp" 
              alt="Náš tím"
              className="w-full h-full object-cover"
            />
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-6 px-6 bg-[#F5F5F5]">
          <div className="border-t border-b border-black/10 py-8">
            <div className="grid grid-cols-2 gap-y-10">
              {/* Stat 1 */}
              <div className="flex flex-col items-center justify-center text-center border-r border-black/10 px-2">
                <HardHat className="w-6 h-6 text-[#E5A93B] mb-2" />
                <AnimatedCounter value={5} suffix="+" textClass="text-[24px] font-extrabold text-[#1A1A1A] mb-1" />
                <span className="text-[9px] font-bold text-gray-600 uppercase tracking-widest leading-tight">Rokov skúseností</span>
              </div>
              
              {/* Stat 2 */}
              <div className="flex flex-col items-center justify-center text-center px-2">
                <Users className="w-6 h-6 text-[#E5A93B] mb-2" />
                <AnimatedCounter value={200} suffix="+" textClass="text-[24px] font-extrabold text-[#1A1A1A] mb-1" />
                <span className="text-[9px] font-bold text-gray-600 uppercase tracking-widest leading-tight">Spokojných klientov</span>
              </div>
              
              {/* Stat 3 */}
              <div className="flex flex-col items-center justify-center text-center border-r border-black/10 px-2">
                <CheckCircle2 className="w-6 h-6 text-[#E5A93B] mb-2" />
                <AnimatedCounter value={1200} suffix="+" format={true} textClass="text-[24px] font-extrabold text-[#1A1A1A] mb-1" />
                <span className="text-[9px] font-bold text-gray-600 uppercase tracking-widest leading-tight">Realizovaných projektov</span>
              </div>
              
              {/* Stat 4 */}
              <div className="flex flex-col items-center justify-center text-center px-2">
                <MapPin className="w-6 h-6 text-[#E5A93B] mb-2" />
                <motion.span initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 1, delay: 0.5 }} className="text-[24px] font-extrabold text-[#1A1A1A] mb-1">Bratislava</motion.span>
                <span className="text-[9px] font-bold text-gray-600 uppercase tracking-widest leading-tight">A okolie</span>
              </div>
            </div>
          </div>
        </section>

        {/* Our Values Section */}
        <section className="py-8 px-6 bg-[#F5F5F5] flex flex-col">
          <div className="flex flex-col items-start mb-8">
            <span className="text-[11px] font-bold tracking-widest text-[#E5A93B] uppercase mb-1">
              NAŠE HODNOTY
            </span>
            <div className="w-10 h-[1.5px] bg-[#E5A93B] mt-1"></div>
          </div>
          
          <div className="flex flex-col gap-6 mb-10">
            {/* Value 1 */}
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center shrink-0 shadow-sm border border-black/5">
                <ShieldCheck className="w-5 h-5 text-[#E5A93B]" />
              </div>
              <div className="pt-1">
                <h3 className="text-[14px] font-extrabold text-[#1A1A1A] mb-1">Zodpovednosť</h3>
                <p className="text-[12px] text-gray-600 font-medium leading-relaxed pr-4">Robíme prácu poctivo a dotiahneme ju do konca.</p>
              </div>
            </div>
            
            {/* Value 2 */}
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center shrink-0 shadow-sm border border-black/5">
                <Award className="w-5 h-5 text-[#E5A93B]" />
              </div>
              <div className="pt-1">
                <h3 className="text-[14px] font-extrabold text-[#1A1A1A] mb-1">Kvalita</h3>
                <p className="text-[12px] text-gray-600 font-medium leading-relaxed pr-4">Používame kvalitné vybavenie a overené postupy.</p>
              </div>
            </div>
            
            {/* Value 3 */}
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center shrink-0 shadow-sm border border-black/5">
                <Handshake className="w-5 h-5 text-[#E5A93B]" />
              </div>
              <div className="pt-1">
                <h3 className="text-[14px] font-extrabold text-[#1A1A1A] mb-1">Dohoda</h3>
                <p className="text-[12px] text-gray-600 font-medium leading-relaxed pr-4">Držíme slovo a prídeme v dohodnutom termíne.</p>
              </div>
            </div>
            
            {/* Value 4 */}
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center shrink-0 shadow-sm border border-black/5">
                <Lightbulb className="w-5 h-5 text-[#E5A93B]" />
              </div>
              <div className="pt-1">
                <h3 className="text-[14px] font-extrabold text-[#1A1A1A] mb-1">Inovácie a pokrok</h3>
                <p className="text-[12px] text-gray-600 font-medium leading-relaxed pr-4">Stavebníctvo nevnímame len ako prácu, ale ako vášeň pre budovanie niečoho trvalého.</p>
              </div>
            </div>
          </div>
          
          {/* Values Image block */}
          <div className="relative w-full aspect-[4/5] rounded-[1.5rem] overflow-hidden shadow-md">
            <img 
              src="/desmostav-stavebna-firma-14.webp" 
              alt="Kvalitná stavba"
              className="w-full h-full object-cover"
            />
            {/* Text Overlay */}
            <div className="absolute bottom-4 left-4 right-4 bg-[#111111]/95 backdrop-blur-md rounded-xl p-5 border border-white/5">
              <p className="text-[13px] text-white font-medium leading-relaxed italic relative z-10">
                „Kvalitná stavba je spojením dobrého remesla, presnosti a spoľahlivých materiálov.“
              </p>
              <HardHat className="absolute bottom-2 right-2 w-8 h-8 text-[#E5A93B] opacity-20 -rotate-12" />
            </div>
          </div>
        </section>

        {/* Mission Banner */}
        <section className="py-6 px-6 bg-[#F5F5F5]">
          <div className="bg-[#F5F5F5] rounded-[1.25rem] p-6 relative overflow-hidden flex gap-4 shadow-sm border border-black/5 items-center">
            {/* Background pattern */}
            <HardHat className="absolute -right-6 -bottom-6 w-40 h-40 text-[#E5A93B] opacity-5 -rotate-45 pointer-events-none" />
            
            <div className="w-14 h-14 rounded-full bg-[#D1CCBC] flex items-center justify-center shrink-0 border border-white/40 shadow-inner">
              <HardHat className="w-7 h-7 text-[#E5A93B] fill-[#E5A93B]" />
            </div>
            
            <div className="relative z-10 flex flex-col">
              <span className="text-[9px] font-bold tracking-widest text-[#E5A93B] uppercase mb-1.5 block">NAŠA MISIA</span>
              <h3 className="text-[15px] font-extrabold text-[#1A1A1A] leading-tight">
                Realizovať spoľahlivé a moderné stavby, v ktorých sa budete cítiť skutočne doma.
              </h3>
            </div>
          </div>
        </section>

        {/* CTA Footer */}
        <section className="px-6 pb-12 pt-6 bg-[#F5F5F5]">
          <div className="bg-[#111111] rounded-[1.5rem] p-6 flex flex-col items-center text-center shadow-lg relative overflow-hidden">
            {/* Background texture */}
            <div className="absolute inset-0 opacity-10 pointer-events-none">
              <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <pattern id="leaf-pattern-2" width="40" height="40" patternUnits="userSpaceOnUse">
                    <path d="M20 0C20 0 40 10 40 20C40 30 20 40 20 40C20 40 0 30 0 20C0 10 20 0 20 0Z" fill="currentColor"/>
                  </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#leaf-pattern-2)"/>
              </svg>
            </div>
            
            <div className="w-12 h-12 rounded-full border border-white/20 bg-white/5 flex items-center justify-center mb-4 relative z-10">
              <HardHat className="w-6 h-6 text-transparent fill-[#E5A93B]" />
            </div>
            
            <h3 className="text-[20px] font-extrabold text-white mb-2 leading-tight relative z-10">
              Plánujete stavbu alebo <br/>rekonštrukciu bez starostí?
            </h3>
            
            <p className="text-[13px] text-gray-300 font-medium mb-8 relative z-10">
              Ozvite sa nám a radi vám pomôžeme.
            </p>
            
            <div className="w-full flex flex-col gap-4 relative z-10">
              <button 
                onClick={openSheet}
                className="w-full bg-[#E5A93B] hover:bg-[#1A1A1A] transition-all active:scale-95 text-white font-bold py-4 px-6 rounded-xl flex items-center justify-center gap-2 shadow-md"
              >
                <HardHat className="w-4 h-4 text-white fill-white" />
                <span className="text-[13px] tracking-wider uppercase">ZÍSKAŤ PONUKU</span>
              </button>
              
              <a href="tel:+421907673697" className="flex items-center justify-center gap-2 text-[#E5A93B] font-bold text-[16px] hover:text-white transition-colors py-2">
                <Phone className="w-4 h-4" fill="currentColor" />
                0907 673 697
              </a>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-[#111111] pt-16 pb-8 px-6 text-white relative -mt-6 rounded-t-[2.5rem]">
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
            <div className="flex gap-4">
              <a href="#" className="text-[11px] text-gray-500 hover:text-white transition-colors">Ochrana súkromia</a>
              <a href="#" className="text-[11px] text-gray-500 hover:text-white transition-colors">Obchodné podmienky</a>
            </div>
          </div>
        </footer>

      </div>
    </div>
  );
}

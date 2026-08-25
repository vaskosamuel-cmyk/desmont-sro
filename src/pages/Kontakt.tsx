import { Phone, Mail, MapPin, MessageSquare, Send, HardHat } from 'lucide-react';
import { Facebook, Instagram } from "../components/SocialIcons";
import TopNav from '../components/TopNav';

export default function Kontakt() {
  return (
    <div className="fixed inset-0 bg-[#E5E5E5] font-sans text-gray-900 flex justify-center overflow-hidden">
      {/* Mobile Constraint Container */}
      <div className="w-full max-w-[428px] bg-[#F5F5F5] shadow-2xl relative flex flex-col h-[100dvh] overflow-y-auto overflow-x-hidden">
        
        {/* Top Navigation */}
        <TopNav />

        {/* Hero Section */}
        <section className="relative min-h-[380px] shrink-0 flex flex-col justify-end pb-12 pt-28">
          {/* Background Image */}
          <div className="absolute inset-0 z-0">
            <img
              src="/desmostav-stavba-na-kluc-06.webp"
              alt="Stavba"
              className="w-full h-full object-cover object-center"
            />
            <div className="absolute inset-0 bg-black/30 bg-gradient-to-t from-black/90 via-black/60 to-transparent"></div>
          </div>

          {/* Hero Content */}
          <div className="relative z-10 px-6 flex flex-col items-start mb-6">
            <span className="text-[11px] font-bold tracking-widest text-[#E5A93B] uppercase mb-3">
              KONTAKT
            </span>
            <div className="w-8 h-[2px] bg-[#E5A93B] mb-4"></div>
            <h1 className="text-[2.25rem] font-extrabold tracking-tight text-white mb-4 leading-[1.05]">
              Sme tu pre vašu <br />
              <span className="text-[#E5A93B]">stavbu.</span>
            </h1>
            <p className="text-[14px] text-gray-200 font-medium max-w-[280px] leading-relaxed">
              Ozvite sa nám a radi vám pripravíme nezáväznú ponuku na mieru.
            </p>
          </div>

          {/* Bottom SVG Curve (reversed to blend into light bg) */}
          <div className="absolute bottom-[-1px] left-0 right-0 w-full overflow-hidden leading-none z-10">
            <svg viewBox="0 0 1440 120" className="w-full h-[16px] sm:h-[20px]" preserveAspectRatio="none">
              <path fill="#F5F5F5" d="M0,120 L0,120 L1440,0 L1440,120 Z"></path>
            </svg>
          </div>
        </section>

        {/* Contact Info Cards */}
        <section className="px-6 relative z-20 -mt-10 mb-8">
          <div className="bg-[#FAF9F5] border border-black/5 rounded-[1.5rem] p-4 shadow-sm flex flex-col gap-1">
            
            {/* Phone */}
            <div className="flex items-center justify-between p-3 border-b border-black/5">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-[#F5F5F5] flex items-center justify-center shrink-0">
                  <Phone className="w-4 h-4 text-[#E5A93B] fill-[#E5A93B]" />
                </div>
                <div className="flex flex-col pt-0.5">
                  <span className="text-[10px] font-extrabold text-[#1A1A1A] tracking-widest uppercase mb-0.5">Zavolajte nám</span>
                  <span className="text-[14px] font-medium text-[#E5A93B]">0907 673 697</span>
                </div>
              </div>
              <span className="text-[10px] text-gray-500 font-medium text-right leading-tight max-w-[80px]">Po – Pia:<br/>8:00 – 17:00</span>
            </div>

            {/* Email */}
            <div className="flex items-center justify-between p-3 border-b border-black/5">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-[#F5F5F5] flex items-center justify-center shrink-0">
                  <Mail className="w-4 h-4 text-[#E5A93B]" />
                </div>
                <div className="flex flex-col pt-0.5">
                  <span className="text-[10px] font-extrabold text-[#1A1A1A] tracking-widest uppercase mb-0.5">Napíšte nám</span>
                  <span className="text-[14px] font-medium text-[#E5A93B]">info@desmostav.sk</span>
                </div>
              </div>
              <span className="text-[10px] text-gray-500 font-medium text-right leading-tight max-w-[80px]">Odpovieme vám čo najskôr</span>
            </div>

            {/* Location */}
            <div className="flex items-center justify-between p-3 border-b border-black/5">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-[#F5F5F5] flex items-center justify-center shrink-0">
                  <MapPin className="w-4 h-4 text-[#E5A93B]" />
                </div>
                <div className="flex flex-col pt-0.5">
                  <span className="text-[10px] font-extrabold text-[#1A1A1A] tracking-widest uppercase mb-0.5">Kde nás nájdete</span>
                  <span className="text-[14px] font-medium text-[#E5A93B]">Bratislava a okolie</span>
                </div>
              </div>
              <span className="text-[10px] text-gray-500 font-medium text-right leading-tight max-w-[80px]">Pôsobíme vo vašom regióne</span>
            </div>

            {/* WhatsApp */}
            <div className="flex items-center justify-between p-3">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-[#F5F5F5] flex items-center justify-center shrink-0">
                  <MessageSquare className="w-4 h-4 text-[#E5A93B]" />
                </div>
                <div className="flex flex-col pt-0.5">
                  <span className="text-[10px] font-extrabold text-[#1A1A1A] tracking-widest uppercase mb-0.5">Rýchla odpoveď</span>
                  <span className="text-[14px] font-medium text-[#E5A93B]">WhatsApp správa</span>
                </div>
              </div>
              <span className="text-[10px] text-gray-500 font-medium text-right leading-tight max-w-[80px]">Aktívne počas pracovných hodín</span>
            </div>

          </div>
        </section>

        {/* Contact Form Section */}
        <section className="px-6 mb-8">
          <div className="bg-[#FAF9F5] border border-black/5 rounded-[1.5rem] p-6 shadow-sm">
            <h2 className="text-[1.25rem] font-extrabold text-[#1A1A1A] mb-1">Pošlite nám správu</h2>
            <p className="text-[12px] text-gray-600 font-medium mb-5">Vyplňte formulár a my sa vám ozveme.</p>

            <form className="flex flex-col gap-3">
              <div className="grid grid-cols-2 gap-3">
                <input 
                  type="text" 
                  placeholder="Vaše meno" 
                  className="bg-[#F5F5F5] border border-black/5 rounded-xl px-4 py-3.5 text-[13px] text-gray-800 focus:outline-none focus:border-[#E5A93B] focus:bg-white transition-colors"
                />
                <input 
                  type="tel" 
                  placeholder="Telefón" 
                  className="bg-[#F5F5F5] border border-black/5 rounded-xl px-4 py-3.5 text-[13px] text-gray-800 focus:outline-none focus:border-[#E5A93B] focus:bg-white transition-colors"
                />
              </div>
              <input 
                type="email" 
                placeholder="Email" 
                className="bg-[#F5F5F5] border border-black/5 rounded-xl px-4 py-3.5 text-[13px] text-gray-800 focus:outline-none focus:border-[#E5A93B] focus:bg-white transition-colors"
              />
              <textarea 
                placeholder="Správa (napr. čo potrebujete, lokalita, typ stavby...)" 
                rows={4}
                className="bg-[#F5F5F5] border border-black/5 rounded-xl px-4 py-3.5 text-[13px] text-gray-800 focus:outline-none focus:border-[#E5A93B] focus:bg-white transition-colors resize-none"
              ></textarea>

              <button type="button" className="bg-[#E5A93B] hover:bg-[#D4AF37] active:scale-95 transition-all text-white px-5 py-4 rounded-xl flex items-center justify-center gap-2 shadow-md border border-black/10 mt-1 w-full">
                <Send className="w-4 h-4 text-white" />
                <span className="text-[12px] font-bold tracking-wider uppercase">ODOSLAŤ SPRÁVU</span>
              </button>

              <p className="text-[10px] text-gray-500 font-medium text-center mt-2 flex items-center justify-center gap-1.5">
                <HardHat className="w-3 h-3 text-[#D4AF37]" /> Vaše údaje sú u nás v bezpečí a nebudeme ich zdieľať.
              </p>
            </form>
          </div>
        </section>

        {/* Locations Section */}
        <section className="px-6 mb-8">
          <div className="bg-[#FAF9F5] border border-black/5 rounded-[1.5rem] p-6 shadow-sm flex items-center gap-4">
            <div className="flex-1">
              <span className="text-[10px] font-bold tracking-widest text-[#E5A93B] uppercase mb-3 block">
                PÔSOBÍME V BRATISLAVE A OKOLÍ
              </span>
              <p className="text-[12px] text-gray-700 font-medium leading-[1.8]">
                Hlavné mesto Bratislava a širšie okolie.<br/>Stavby, rekonštrukcie, obklady, dlažby,<br/>kúpeľne, maľovanie a sťahovanie.
              </p>
            </div>
            
            {/* Map Snippet Visual */}
            <div className="w-[120px] aspect-[4/3] rounded-xl overflow-hidden relative shrink-0 border border-black/5">
              {/* Using a placeholder static map image pattern */}
              <div className="absolute inset-0 bg-[#e6e2d3] opacity-60"></div>
              <svg className="absolute inset-0 w-full h-full text-[#d1ccbc]" xmlns="http://www.w3.org/2000/svg" fill="none">
                 <path d="M10 20 Q 30 10 50 30 T 90 20" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                 <path d="M20 50 Q 40 40 60 60 T 100 50" stroke="currentColor" strokeWidth="3" strokeLinecap="round"/>
                 <path d="M30 80 Q 50 70 70 90 T 110 80" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                 <path d="M40 0 L 40 100 M 80 0 L 80 100" stroke="currentColor" strokeWidth="1" strokeDasharray="4 4" />
              </svg>
              <div className="absolute inset-0 flex flex-col items-center justify-center pt-2">
                <div className="w-6 h-6 bg-[#E5A93B] rounded-full flex items-center justify-center shadow-lg border-2 border-white relative z-10">
                  <HardHat className="w-3 h-3 text-white fill-white" />
                  <div className="absolute -bottom-1 w-2 h-2 bg-[#E5A93B] rotate-45 -z-10"></div>
                </div>
                <span className="text-[9px] font-bold text-[#1A1A1A] mt-2 bg-white/80 px-2 py-0.5 rounded-full backdrop-blur-sm border border-white">Bratislava</span>
              </div>
            </div>
          </div>
        </section>

        {/* Footer CTA Section */}
        <section className="px-6 pb-12">
          <div className="bg-[#111111] rounded-[1.25rem] p-6 relative overflow-hidden flex flex-col gap-4 shadow-lg border border-[#1A1A1A]">
            {/* Subtle background pattern */}
            <HardHat className="absolute -left-6 -bottom-6 w-32 h-32 text-[#1A1A1A] opacity-50 -rotate-45 pointer-events-none" />
            
            <div className="flex items-center gap-4 relative z-10">
              <div className="w-12 h-12 rounded-full bg-[#1A1A1A] flex items-center justify-center shrink-0 border border-[#3e5a3c]">
                <HardHat className="w-6 h-6 text-[#E5A93B]" />
              </div>
              <div className="flex flex-col">
                <h3 className="text-[16px] font-extrabold text-white leading-tight mb-1">
                  Radšej rýchly telefonát?
                </h3>
                <p className="text-[11px] text-gray-300 font-medium">
                  Zavolajte nám a preberieme všetko okamžite.
                </p>
              </div>
            </div>

            <div className="flex flex-col items-center gap-2 relative z-10 mt-1">
              <a href="tel:+421907673697" className="w-full bg-[#E5A93B] hover:bg-[#D4AF37] active:scale-95 transition-all text-white px-5 py-3.5 rounded-xl flex items-center justify-center gap-2 shadow-md border border-[#E5A93B]">
                <Phone className="w-4 h-4 text-white fill-white" />
                <span className="text-[14px] font-bold tracking-widest">0907 673 697</span>
              </a>
              <span className="text-[10px] text-gray-400 font-medium tracking-wide">Po – Pia: 8:00 – 17:00</span>
            </div>
            
          </div>
        </section>

      </div>
    </div>
  );
}

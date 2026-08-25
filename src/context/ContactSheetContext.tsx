import { createContext, useContext, useState, ReactNode } from 'react';
import { Phone, Mail, ChevronRight, ShieldCheck, HardHat, ChevronUp } from 'lucide-react';
import { motion } from 'motion/react';

const WhatsAppIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" className={className} fill="currentColor">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.888-.788-1.487-1.761-1.66-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.015c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
    <path d="M12 2C6.48 2 2 6.48 2 12c0 1.745.45 3.393 1.25 4.836L2 22l5.32-1.353C8.71 21.503 10.316 22 12 22c5.52 0 10-4.48 10-10S17.52 2 12 2zm0 18.232c-1.465 0-2.903-.377-4.175-1.089l-.299-.168-3.106.791.826-2.978-.184-.282C4.372 15.226 4 13.655 4 12c0-4.411 3.589-8 8-8s8 3.589 8 8-3.589 8-8 8.232z"/>
  </svg>
);

const ContactSheetContext = createContext<{
  openSheet: () => void;
  closeSheet: () => void;
}>({ openSheet: () => {}, closeSheet: () => {} });

export const useContactSheet = () => useContext(ContactSheetContext);

export const ContactSheetProvider = ({ children }: { children: ReactNode }) => {
  const [isOpen, setIsOpen] = useState(false);

  const openSheet = () => setIsOpen(true);
  const closeSheet = () => setIsOpen(false);

  return (
    <ContactSheetContext.Provider value={{ openSheet, closeSheet }}>
      {children}
      
      {/* Contact Sheet Overlay & Constraint Wrapper */}
      <div 
        className={`fixed inset-0 z-[100] flex justify-center pointer-events-none`}
        aria-hidden={!isOpen}
      >
        <div className="w-full max-w-[428px] relative h-full">
          
          {/* Dimmed Backdrop */}
          <div 
            className={`absolute inset-0 bg-black/60 transition-opacity duration-300 ${isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
            onClick={closeSheet}
          />

          {/* Subtle Pull Handle (Always visible at bottom when closed) */}
          <div 
            className={`absolute bottom-0 left-0 right-0 flex justify-center transition-all duration-300 z-[45] pb-0 ${isOpen ? 'translate-y-full opacity-0 pointer-events-none' : 'translate-y-0 opacity-100 pointer-events-auto'}`}
          >
            <motion.button 
              onClick={openSheet}
              className="w-[58px] h-[32px] bg-[#F5F5F5] border border-b-0 border-black/10 rounded-t-[100px] flex flex-col items-center justify-center translate-y-[1px] shadow-[0_-4px_12px_rgba(0,0,0,0.06)] hover:bg-[#F5F5F5] focus:outline-none relative group"
              aria-label="Otvoriť kontakt"
              animate={{ y: [0, -3, 0] }}
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
              whileTap={{ scale: 0.95 }}
            >
              <ChevronUp className="w-5 h-5 text-[#E5A93B]/80 group-hover:text-[#E5A93B] transition-colors" strokeWidth={2.5} />
            </motion.button>
          </div>

          {/* Bottom Sheet */}
          <motion.div 
            className={`absolute bottom-0 left-0 right-0 bg-[#F5F5F5] rounded-t-[2rem] p-6 pb-10 flex flex-col shadow-[0_-10px_40px_rgba(0,0,0,0.3)] ${isOpen ? 'pointer-events-auto' : 'pointer-events-none'}`}
            initial={false}
            animate={{ y: isOpen ? 0 : '100%' }}
            transition={{ type: "spring", bounce: 0, duration: 0.4 }}
            drag="y"
            dragConstraints={{ top: 0, bottom: 0 }}
            dragElastic={0.2}
            onDragEnd={(e, info) => {
              if (info.offset.y > 100 || info.velocity.y > 500) {
                closeSheet();
              }
            }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Pill Handle */}
            <div className="w-12 h-1.5 bg-black/10 rounded-full mx-auto mb-6" />

            {/* Header */}
            <div className="flex items-center gap-4 mb-6">
              <div className="w-14 h-14 rounded-full bg-[#F5F5F5] flex items-center justify-center shrink-0 border border-black/5">
                <HardHat className="w-7 h-7 text-[#E5A93B] fill-[#E5A93B] -rotate-12" />
              </div>
              <div className="flex flex-col">
                <h3 className="text-[18px] font-extrabold text-[#1A1A1A] leading-tight mb-1">
                  Máte záujem o naše služby?
                </h3>
                <p className="text-[12px] text-gray-600 font-medium">
                  Vyberte si, ako nás chcete kontaktovať.
                </p>
              </div>
            </div>

            {/* Options */}
            <div className="flex flex-col gap-3 mb-6">
              
              {/* Zavolať */}
              <a 
                href="tel:+421907673697" 
                onClick={closeSheet} 
                className="bg-[#FAF9F5] border border-black/5 rounded-[1.25rem] p-4 flex items-center gap-4 active:scale-[0.98] transition-transform shadow-sm"
              >
                <div className="w-12 h-12 rounded-full bg-[#E5A93B] flex items-center justify-center shrink-0 shadow-md">
                  <Phone className="w-5 h-5 text-white fill-white" />
                </div>
                <div className="flex flex-col flex-1">
                  <span className="text-[10px] font-extrabold text-[#1A1A1A] tracking-widest uppercase mb-0.5">Zavolať</span>
                  <span className="text-[14px] font-medium text-[#E5A93B] leading-tight mb-0.5">0907 673 697</span>
                  <span className="text-[11px] text-gray-500 font-medium leading-tight">Najrýchlejšia cesta k nám.</span>
                </div>
                <ChevronRight className="w-5 h-5 text-gray-400 shrink-0" />
              </a>

              {/* WhatsApp */}
              <a 
                href="https://wa.me/421905123456" 
                target="_blank" 
                rel="noopener noreferrer" 
                onClick={closeSheet} 
                className="bg-[#FAF9F5] border border-black/5 rounded-[1.25rem] p-4 flex items-center gap-4 active:scale-[0.98] transition-transform shadow-sm"
              >
                <div className="w-12 h-12 rounded-full bg-[#E5A93B] flex items-center justify-center shrink-0 shadow-md">
                  <WhatsAppIcon className="w-5 h-5 text-white" />
                </div>
                <div className="flex flex-col flex-1">
                  <span className="text-[10px] font-extrabold text-[#1A1A1A] tracking-widest uppercase mb-0.5">WhatsApp</span>
                  <span className="text-[14px] font-medium text-[#E5A93B] leading-tight mb-0.5">Napísať správu</span>
                  <span className="text-[11px] text-gray-500 font-medium leading-tight">Pošlite nám správu alebo fotografiu vášho projektu.</span>
                </div>
                <ChevronRight className="w-5 h-5 text-gray-400 shrink-0" />
              </a>

              {/* E-mail */}
              <a 
                href="mailto:info@desmostav.sk" 
                onClick={closeSheet} 
                className="bg-[#FAF9F5] border border-black/5 rounded-[1.25rem] p-4 flex items-center gap-4 active:scale-[0.98] transition-transform shadow-sm"
              >
                <div className="w-12 h-12 rounded-full bg-[#E5A93B] flex items-center justify-center shrink-0 shadow-md">
                  <Mail className="w-5 h-5 text-white fill-white" />
                </div>
                <div className="flex flex-col flex-1">
                  <span className="text-[10px] font-extrabold text-[#1A1A1A] tracking-widest uppercase mb-0.5">E-mail</span>
                  <span className="text-[14px] font-medium text-[#E5A93B] leading-tight mb-0.5">info@desmostav.sk</span>
                  <span className="text-[11px] text-gray-500 font-medium leading-tight">Odpovieme vám čo najskôr.</span>
                </div>
                <ChevronRight className="w-5 h-5 text-gray-400 shrink-0" />
              </a>

            </div>

            {/* Footer */}
            <div className="flex items-center justify-center gap-2">
              <ShieldCheck className="w-4 h-4 text-[#E5A93B]" />
              <span className="text-[12px] text-gray-600 font-medium">Odpovieme vám čo najskôr.</span>
            </div>

          </motion.div>
        </div>
      </div>
    </ContactSheetContext.Provider>
  );
};

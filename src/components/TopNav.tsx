import { 
  HardHat, Phone, Menu, X, Home, Hammer, Image as ImageIcon, 
  Settings, Users, Star, HelpCircle, ChevronDown, 
  ChevronRight, MessageCircle
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { useContactSheet } from '../context/ContactSheetContext';

export default function TopNav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { openSheet } = useContactSheet();

  useEffect(() => {
    const scrollContainer = document.querySelector('.overflow-y-auto');
    if (!scrollContainer) return;

    const handleScroll = () => {
      setIsScrolled(scrollContainer.scrollTop > 20);
    };

    // Initial check
    handleScroll();

    scrollContainer.addEventListener('scroll', handleScroll, { passive: true });
    return () => scrollContainer.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <>
      <div className="sticky top-0 z-50 h-0 w-full overflow-visible pointer-events-none">
        <div 
          className={`absolute top-0 left-0 right-0 flex items-center justify-between px-5 transition-all duration-300 pointer-events-auto ${
            isScrolled 
              ? 'bg-[#111111]/85 backdrop-blur-md shadow-[0_4px_30px_rgba(0,0,0,0.15)] border-b border-white/5 py-4' 
              : 'bg-transparent py-6'
          }`}
        >
          <Link to="/" className="flex items-center">
            <img src="/logo-desmostav-hlavne-svetle.webp" alt="DESMO STAV" className={`object-contain transition-all duration-300 ${isScrolled ? 'h-10' : 'h-12'}`} />
          </Link>
          
          <div className={`flex items-center transition-all duration-300 ${isScrolled ? 'gap-3' : 'gap-4'}`}>
            <a 
              href="tel:+421907673697"
              className={`bg-[#111111]/90 backdrop-blur-md text-white rounded-[0.75rem] font-bold flex items-center gap-2 shadow-sm border border-white/10 hover:bg-[#1A1A1A] active:scale-95 transition-all duration-300 ${isScrolled ? 'px-3 py-2 text-[9px] tracking-widest' : 'px-4 py-2.5 text-[10px] tracking-wider'}`}
            >
              <Phone className={`text-[#E5A93B] transition-all duration-300 ${isScrolled ? 'w-3 h-3' : 'w-3.5 h-3.5'}`} strokeWidth={1.5} />
              ZAVOLAŤ
            </a>
            <button 
              onClick={() => setIsMenuOpen(true)}
              className="text-white hover:text-[#E5A93B] active:scale-95 transition-all duration-300"
            >
              <Menu className={`transition-all duration-300 ${isScrolled ? 'w-7 h-7' : 'w-8 h-8'}`} strokeWidth={1.5} />
            </button>
          </div>
        </div>
      </div>

      {/* Side Drawer Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <div className="fixed inset-0 z-[100] flex justify-end w-full max-w-[428px] mx-auto overflow-hidden">
            {/* Backdrop */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="absolute inset-0 bg-black/60 backdrop-blur-[2px]"
              onClick={() => setIsMenuOpen(false)}
            />
            
            {/* Drawer (85% width) */}
            <motion.div 
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="w-[85%] bg-[#111111] h-full relative z-10 flex flex-col overflow-y-auto shadow-[-20px_0_40px_rgba(0,0,0,0.5)]"
            >
              
              {/* Header with Logo and Close Button */}
              <div className="flex items-start justify-between pt-10 pb-8 px-6 shrink-0">
                <Link to="/" onClick={handleLinkClick} className="flex items-center">
                  <img src="/logo-desmostav-hlavne-svetle.webp" alt="DESMO STAV" className="h-12 object-contain" />
                </Link>

                <button 
                  onClick={() => setIsMenuOpen(false)}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  <X className="w-8 h-8" strokeWidth={1} />
                </button>
              </div>
              
              {/* Navigation Links */}
              <div className="flex flex-col">
                <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.05, duration: 0.3 }}>
                  <Link to="/" onClick={handleLinkClick} className="flex items-center gap-4 py-4 px-6 bg-[#1A1A1A] border-l-[3px] border-[#E5A93B]">
                    <Home className="w-5 h-5 text-[#E5A93B]" strokeWidth={1.5} />
                    <span className="text-[14px] font-bold text-white tracking-widest uppercase">Domov</span>
                  </Link>
                </motion.div>
                
                <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.1, duration: 0.3 }}>
                  <div className="flex flex-col border-b border-white/5">
                    <button 
                      onClick={() => setIsServicesOpen(!isServicesOpen)} 
                      className="flex items-center justify-between py-4 px-6 hover:bg-[#1A1A1A] transition-colors w-full"
                    >
                      <div className="flex items-center gap-4">
                        <Hammer className="w-5 h-5 text-[#E5A93B]" strokeWidth={1.5} />
                        <span className="text-[14px] font-bold text-gray-200 tracking-widest uppercase">Služby</span>
                      </div>
                      <ChevronDown className={`w-4 h-4 text-[#E5A93B] transition-transform duration-300 ${isServicesOpen ? 'rotate-180' : ''}`} />
                    </button>
                    
                    <AnimatePresence>
                      {isServicesOpen && (
                        <motion.div 
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          className="overflow-hidden bg-[#111111]"
                        >
                            <div className="flex flex-col ml-9 mr-6 py-2">
                              <Link to="/sluzby/stavby-na-kluc" onClick={handleLinkClick} className="py-4 border-b border-white/5 flex items-center gap-4 group">
                                <span className="text-[13px] font-bold text-[#E5A93B]/60 group-hover:text-[#E5A93B] transition-colors">01</span>
                                <span className="text-[17px] font-medium text-gray-300 group-hover:text-white transition-colors">Stavby na kľúč</span>
                              </Link>
                              <Link to="/sluzby/rekonstrukcie" onClick={handleLinkClick} className="py-4 border-b border-white/5 flex items-center gap-4 group">
                                <span className="text-[13px] font-bold text-[#E5A93B]/60 group-hover:text-[#E5A93B] transition-colors">02</span>
                                <span className="text-[17px] font-medium text-gray-300 group-hover:text-white transition-colors">Rekonštrukcie</span>
                              </Link>
                              <Link to="/sluzby/exterier-a-fasady" onClick={handleLinkClick} className="py-4 border-b border-white/5 flex items-center gap-4 group">
                                <span className="text-[13px] font-bold text-[#E5A93B]/60 group-hover:text-[#E5A93B] transition-colors">03</span>
                                <span className="text-[17px] font-medium text-gray-300 group-hover:text-white transition-colors">Exteriér a Fasády</span>
                              </Link>
                              <Link to="/sluzby/interier" onClick={handleLinkClick} className="py-4 border-b border-white/5 flex items-center gap-4 group">
                                <span className="text-[13px] font-bold text-[#E5A93B]/60 group-hover:text-[#E5A93B] transition-colors">04</span>
                                <span className="text-[17px] font-medium text-gray-300 group-hover:text-white transition-colors">Interiér</span>
                              </Link>
                              <Link to="/sluzby/instalacie" onClick={handleLinkClick} className="py-4 flex items-center gap-4 group">
                                <span className="text-[13px] font-bold text-[#E5A93B]/60 group-hover:text-[#E5A93B] transition-colors">05</span>
                                <span className="text-[17px] font-medium text-gray-300 group-hover:text-white transition-colors">Inštalácie</span>
                              </Link>
                            </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </motion.div>
                
                <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.15, duration: 0.3 }}>
                  <Link to="/nase-prace" onClick={handleLinkClick} className="flex items-center gap-4 py-4 px-6 border-b border-white/5 hover:bg-[#1A1A1A] transition-colors">
                    <ImageIcon className="w-5 h-5 text-[#E5A93B]" strokeWidth={1.5} />
                    <span className="text-[14px] font-bold text-gray-200 tracking-widest uppercase">Naše práce</span>
                  </Link>
                </motion.div>
                
                <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.2, duration: 0.3 }}>
                  <Link to="/o-nas" onClick={handleLinkClick} className="flex items-center gap-4 py-4 px-6 border-b border-white/5 hover:bg-[#1A1A1A] transition-colors">
                    <Users className="w-5 h-5 text-[#E5A93B]" strokeWidth={1.5} />
                    <span className="text-[14px] font-bold text-gray-200 tracking-widest uppercase">O nás</span>
                  </Link>
                </motion.div>
                
                <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.25, duration: 0.3 }}>
                  <Link to="/kontakt" onClick={handleLinkClick} className="flex items-center gap-4 py-4 px-6 hover:bg-[#1A1A1A] transition-colors">
                    <HelpCircle className="w-5 h-5 text-[#E5A93B]" strokeWidth={1.5} />
                    <span className="text-[14px] font-bold text-gray-200 tracking-widest uppercase">Kontakt</span>
                  </Link>
                </motion.div>
              </div>

              {/* Bottom Contact Card */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }} 
                animate={{ opacity: 1, y: 0 }} 
                transition={{ delay: 0.4, duration: 0.4 }}
                className="mt-auto p-5 pb-8"
              >
                <div className="bg-[#1A1A1A] rounded-2xl p-5 relative overflow-hidden">
                  <div className="flex flex-col relative z-10">
                    <div className="flex items-center gap-2 mb-3">
                      <div className="w-8 h-8 rounded-full bg-[#111111] flex items-center justify-center shrink-0">
                        <Phone className="w-3.5 h-3.5 text-[#E5A93B]" fill="#E5A93B" />
                      </div>
                      <span className="text-[11px] font-bold text-[#E5A93B] tracking-widest uppercase">Zavolať nám</span>
                    </div>
                    
                    <a href="tel:+421907673697" className="text-[24px] font-extrabold text-white tracking-tight mb-2 hover:text-[#E5A93B] transition-colors active:opacity-70 inline-block">
                      0907 673 697
                    </a>
                    
                    <span className="text-[11px] text-gray-400 font-medium mb-5">Po – Pia · 8:00 – 17:00</span>
                    
                    <button 
                      onClick={openSheet}
                      className="flex items-center gap-2 text-[12px] font-bold text-white hover:text-[#E5A93B] transition-colors active:opacity-70 group w-max"
                    >
                      <MessageCircle className="w-4 h-4 text-[#E5A93B]" />
                      WhatsApp
                      <ChevronRight className="w-3.5 h-3.5 text-gray-400 group-hover:text-[#E5A93B] transition-colors" />
                    </button>
                  </div>
                  
                  {/* Background faint leaf graphic */}
                  <HardHat className="absolute -bottom-6 -right-6 w-28 h-28 text-[#111111] opacity-50 -rotate-45 pointer-events-none" />
                </div>
              </motion.div>

            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}

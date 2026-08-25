import React, { useState, useRef } from 'react';
import { ArrowRight, ChevronLeft, ChevronRight, HardHat, ShieldCheck, Clock, Hammer, ThumbsUp, Star, Phone, Mail, MapPin, Check, Image as ImageIcon, Ruler, CheckCircle, ChevronDown } from 'lucide-react';
import { Link } from 'react-router-dom';
import { AnimatedCounter } from "../components/AnimatedCounter";
import { Facebook, Instagram } from "../components/SocialIcons";
import TopNav from '../components/TopNav';
import { Logos3 } from '../components/blocks/logos3';
import Lightbox from '../components/Lightbox';
import { useContactSheet } from '../context/ContactSheetContext';

export default function Home() {
  const [sliderPosition, setSliderPosition] = useState(50);
  const { openSheet } = useContactSheet();
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const lightboxImages = galleryItems.map(item => item.image);
  
  const galleryRef = useRef<HTMLDivElement>(null);
  const testimonialRef = useRef<HTMLDivElement>(null);

  const servicesRef = useRef<HTMLDivElement>(null);
  const [activeServiceIndex, setActiveServiceIndex] = useState(0);

  const handleServicesScroll = (e: any) => {
    const container = e.currentTarget;
    if (container.children.length > 0) {
      const itemWidth = 316; // 300px width + 16px gap
      const index = Math.round(container.scrollLeft / itemWidth);
      if (index >= 0 && index < services.length) {
        setActiveServiceIndex(index);
      }
    }
  };

  const scrollServices = (direction: 'left' | 'right') => {
    if (servicesRef.current) {
      const itemWidth = 316; // 300px width + 16px gap
      if (direction === 'left' && activeServiceIndex > 0) {
        servicesRef.current.scrollBy({ left: -itemWidth, behavior: 'smooth' });
        setActiveServiceIndex(prev => prev - 1);
      } else if (direction === 'right' && activeServiceIndex < services.length - 1) {
        servicesRef.current.scrollBy({ left: itemWidth, behavior: 'smooth' });
        setActiveServiceIndex(prev => prev + 1);
      }
    }
  };


  // 1. Triple the arrays to allow infinite scrolling in both directions
  const infiniteGallery = [...galleryItems, ...galleryItems, ...galleryItems];
  const infiniteReviews = [...reviews, ...reviews, ...reviews];

  // 2. Initialize scroll position to the middle set on mount
  React.useEffect(() => {
    if (galleryRef.current) {
      // Small timeout ensures the DOM has rendered the full width
      setTimeout(() => {
        if (galleryRef.current) {
           galleryRef.current.scrollLeft = galleryRef.current.scrollWidth / 3;
        }
      }, 100);
    }
    if (testimonialRef.current) {
      setTimeout(() => {
        if (testimonialRef.current) {
           testimonialRef.current.scrollLeft = testimonialRef.current.scrollWidth / 3;
        }
      }, 100);
    }
  }, []);

  const handleInfiniteScroll = (e: React.UIEvent<HTMLDivElement>) => {
    const container = e.currentTarget;
    const setWidth = container.scrollWidth / 3;
    
    // If user scrolls to the first cloned set, jump silently to the middle set
    if (container.scrollLeft <= 5) {
      container.scrollLeft += setWidth;
    } 
    // If user scrolls to the last cloned set, jump silently back to the middle set
    else if (container.scrollLeft >= (setWidth * 2) - 5) {
      container.scrollLeft -= setWidth;
    }
  };

  const scrollContainer = (ref: React.RefObject<HTMLDivElement>, direction: 'left' | 'right') => {
    if (ref.current) {
      const container = ref.current;
      const setWidth = container.scrollWidth / 3;
      const scrollAmount = direction === 'left' ? -320 : 320; // Approx card width + gap
      
      // Prevent hitting edges by resetting instantly if getting too close
      if (direction === 'right' && container.scrollLeft >= setWidth * 2 - 350) {
        container.scrollLeft -= setWidth;
      } else if (direction === 'left' && container.scrollLeft <= 350) {
        container.scrollLeft += setWidth;
      }
      
      setTimeout(() => {
        container.scrollBy({ left: scrollAmount, behavior: 'smooth' });
      }, 10);
    }
  };

  return (
    <div className="fixed inset-0 bg-[#E5E5E5] font-sans text-gray-900 flex justify-center overflow-hidden">
      {/* Mobile Constraint Container */}
      <div className="w-full max-w-[428px] bg-[#F5F5F5] shadow-2xl relative flex flex-col h-[100dvh] overflow-y-auto overflow-x-hidden">
        
        {/* Top Navigation */}
        <TopNav />

        {/* Hero Section */}
        <section className="relative h-[100dvh] shrink-0 flex flex-col justify-end">
          {/* Background Image with Overlay */}
          <div className="absolute inset-0 z-0">
            <img
              src="/desmostav-stavba-na-kluc-24.webp"
              alt="Modern construction house"
              className="w-full h-full object-cover object-center"
            />
            <div className="absolute inset-0 bg-black/10 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
          </div>

          {/* Hero Content */}
          <div className="relative z-10 px-6 pb-[8dvh] flex flex-col items-center text-center">
            <h1 className="text-[36px] sm:text-[40px] font-extrabold tracking-tight text-white mb-4 uppercase leading-[1.25] max-w-[330px]">
              STAVBY, KTORÉ <br />
              MAJÚ <span className="text-[#E5A93B]">ZÁKLAD</span> <br />
              V KVALITE.
            </h1>
            <p className="text-[1.05rem] text-gray-200 mb-8 font-medium max-w-[280px]">
              Kompletné stavebné riešenia od základov až po finálne detaily.
            </p>
            <button 
              onClick={openSheet}
              className="inline-flex items-center justify-center gap-2 bg-[#E5A93B] hover:bg-[#D4AF37] transition-colors text-white font-bold py-4 px-6 rounded-[1rem] text-[13px] tracking-wider w-full max-w-sm mb-4 whitespace-nowrap"
            >
              NEZÁVÄZNÁ CENOVÁ PONUKA <ArrowRight className="w-5 h-5 shrink-0" />
            </button>
            <a 
              href="#sluzby" 
              onClick={(e) => {
                e.preventDefault();
                document.getElementById('sluzby')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="flex flex-col items-center justify-center gap-1.5 mt-2 text-white/70 hover:text-[#E5A93B] transition-colors cursor-pointer"
            >
              <span className="text-[10px] font-bold tracking-widest uppercase">Viac informácií</span>
              <ChevronDown className="w-4 h-4 animate-bounce" strokeWidth={2} />
            </a>
          </div>
          
          {/* Bottom SVG Curve */}
          <div className="absolute bottom-[-1px] left-0 right-0 w-full overflow-hidden leading-none z-10">
            <svg viewBox="0 0 1440 120" className="w-full h-[35px] sm:h-[45px]" preserveAspectRatio="none">
              <path fill="#F5F5F5" d="M0,120 C500,120 940,0 1440,0 L1440,120 Z"></path>
            </svg>
          </div>
        </section>

        <Logos3 className="bg-[#F5F5F5] pt-10 pb-0" />

        {/* Services Section */}
        <section id="sluzby" className="py-12 px-6 scroll-mt-6">
          <div className="mb-8">
            <div className="flex flex-col items-start mb-4">
              <span className="text-xs font-bold tracking-widest text-[#E5A93B] uppercase mb-1">
                Naše služby
              </span>
              <div className="w-10 h-[2px] bg-[#E5A93B] mt-1"></div>
            </div>
            <h2 className="text-[40px] font-extrabold text-[#1A1A1A] leading-[1.1] tracking-tight">
              Všetko pre vaše <br />
              <span className="text-[#E5A93B]">dokonalé bývanie</span>
            </h2>
            <p className="text-gray-700 mt-5 text-[15px] font-medium leading-[1.6]">
              Komplexné riešenia<br />pod jednou strechou.
            </p>
          </div>

          <div 
            ref={servicesRef}
            onScroll={handleServicesScroll}
            className="flex overflow-x-auto snap-x snap-mandatory gap-4 w-[calc(100%+3rem)] -mx-6 pb-6 [&::-webkit-scrollbar]:hidden" 
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            <div className="w-[calc(50%-150px-16px)] shrink-0" />
            {services.map((service, index) => (
              <Link 
                key={service.id} 
                to={service.path}
                className="relative w-[300px] h-[400px] rounded-[2rem] overflow-hidden shrink-0 snap-center shadow-[0_8px_30px_rgba(0,0,0,0.12)] group"
              >
                <img 
                  src={service.image} 
                  alt={service.title}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                
                {/* Refined gradient overlay for readability - stronger at bottom, clear at top */}
                <div className="absolute inset-x-0 bottom-0 h-[80%] bg-gradient-to-t from-black/90 via-black/50 to-transparent pointer-events-none"></div>
                
                {/* Content */}
                <div className="absolute inset-0 p-8 flex flex-col justify-end">
                  <div className="mb-3">
                    <span className="text-[#E5A93B] font-bold text-xl">{service.id}</span>
                    <div className="w-8 h-[2px] bg-white mt-1.5"></div>
                  </div>
                  
                  <h3 className="text-[26px] font-extrabold text-white leading-[1.1] mb-3">
                    {service.title}
                  </h3>
                  
                  <p className="text-[14px] text-white/90 mb-6 leading-[1.6] font-medium pr-4">
                    {service.desc}
                  </p>
                  
                  <div className="flex items-center gap-3 text-white border-b border-white/30 pb-1 group-hover:border-white transition-colors w-fit">
                    <span className="text-[12px] font-bold tracking-widest uppercase">ZISTIŤ VIAC</span>
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
              </Link>
            ))}
            <div className="w-[calc(50%-150px-16px)] shrink-0" />
          </div>
          
          {/* Navigation Controls */}
          <div className="flex items-center justify-between mt-4 px-2 pb-8">
            <button 
              onClick={() => scrollServices('left')} 
              disabled={activeServiceIndex === 0}
              className={`w-14 h-14 rounded-full flex items-center justify-center transition-all duration-300 ${activeServiceIndex === 0 ? 'bg-gray-50 text-gray-300 border-2 border-gray-200 cursor-not-allowed' : 'bg-white shadow-md border-2 border-[#E5A93B] text-[#E5A93B] hover:bg-[#E5A93B] hover:text-white hover:scale-105 cursor-pointer'}`}
            >
              <ChevronLeft className="w-7 h-7" />
            </button>
            
            <div className="flex flex-col items-center gap-2">
               <span className="text-[15px] font-extrabold text-[#E5A93B] tracking-widest">
                 0{activeServiceIndex + 1} <span className="text-[#E5A93B]/40 font-bold">/ 04</span>
               </span>
               <div className="flex gap-1.5">
                 {services.map((s, idx) => (
                   <div key={s.id} className={`h-[2px] rounded-full transition-all duration-300 ${idx === activeServiceIndex ? 'w-8 bg-[#E5A93B]' : 'w-2 bg-[#E5A93B]/20'}`}></div>
                 ))}
               </div>
            </div>

            <button 
              onClick={() => scrollServices('right')} 
              disabled={activeServiceIndex === services.length - 1}
              className={`w-14 h-14 rounded-full flex items-center justify-center transition-all duration-300 ${activeServiceIndex === services.length - 1 ? 'bg-gray-50 text-gray-300 border-2 border-gray-200 cursor-not-allowed' : 'bg-white shadow-md border-2 border-[#E5A93B] text-[#E5A93B] hover:bg-[#E5A93B] hover:text-white hover:scale-105 cursor-pointer'}`}
            >
              <ChevronRight className="w-7 h-7" />
            </button>
          </div>
        </section>

        {/* About Us Section */}
        <section className="py-16 px-6 bg-white rounded-t-[2.5rem] shadow-[0_-10px_40px_rgba(0,0,0,0.03)] pb-20">
          <div className="mb-8">
            <div className="flex flex-col items-start mb-4">
              <span className="text-xs font-bold tracking-widest text-[#E5A93B] uppercase mb-1">
                O nás
              </span>
              <div className="w-10 h-[2px] bg-[#E5A93B] mt-1"></div>
            </div>
            <h2 className="text-[2.25rem] font-extrabold text-[#1A1A1A] leading-[1.1] tracking-tight">
              Sme odborníci na <br />
              <span className="text-[#E5A93B]">vašu stavbu</span>
            </h2>
            <p className="text-gray-700 mt-5 text-[15px] font-medium leading-[1.6]">
              Našou vášňou je pretvárať vaše sny o bývaní na realitu. Sme tím skúsených profesionálov v stavebníctve, ktorí k vašej stavbe pristupujú s maximálnou odbornosťou a dôrazom na detail.
            </p>
            
            <Link 
              to="/o-nas"
              className="inline-flex items-center justify-center gap-2 bg-[#F5F5F5] hover:bg-[#F5F5F5] text-[#1A1A1A] font-bold py-3.5 px-6 rounded-xl border border-black/5 shadow-sm mt-6 active:scale-95 transition-all"
            >
              <span className="text-[12px] tracking-widest uppercase">VIAC O NÁS</span>
              <ArrowRight className="w-4 h-4" strokeWidth={1.5} />
            </Link>
          </div>

          <div className="w-full h-[240px] rounded-[1.5rem] overflow-hidden mb-8 shadow-sm">
            <img
              src="/desmostav-stavebna-firma-32.webp"
              alt="Construction professionals"
              className="w-full h-full object-cover"
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="bg-[#F5F5F5] p-6 rounded-[1.25rem] flex flex-col justify-center items-center text-center">
              <span className="text-3xl font-extrabold text-[#E5A93B] mb-1 flex items-center justify-center"><AnimatedCounter to={10} />+</span>
              <span className="text-xs font-bold text-gray-600 uppercase tracking-wide">Rokov praxe</span>
            </div>
            <div className="bg-[#F5F5F5] p-6 rounded-[1.25rem] flex flex-col justify-center items-center text-center">
              <span className="text-3xl font-extrabold text-[#E5A93B] mb-1 flex items-center justify-center"><AnimatedCounter to={500} />+</span>
              <span className="text-xs font-bold text-gray-600 uppercase tracking-wide">Projektov</span>
            </div>
          </div>
        </section>

        {/* Before and After Section */}
        <section className="pt-16 pb-8 bg-[#F5F5F5]">
          <div className="px-6 mb-8">
            <div className="flex flex-col items-start mb-6">
              <span className="text-[11px] font-bold tracking-widest text-[#E5A93B] uppercase mb-2">
                PREMENY, KTORÉ HOVORIA ZA NÁS
              </span>
              <div className="w-10 h-[1.5px] bg-[#E5A93B] mt-1"></div>
            </div>
            <h2 className="text-[2.25rem] font-extrabold text-[#1A1A1A] leading-[1.05] tracking-tight mb-4">
              Viditeľná zmena.<br />
              <span className="text-[#E5A93B]">Skutočný výsledok.</span>
            </h2>
            <p className="text-[15px] text-gray-700 font-medium leading-[1.6]">
              Pozrite sa na reálne projekty našich klientov pred a po našej rekonštrukcii.
            </p>
          </div>

          <div className="px-6">
            {/* Split Image Card */}
            <div className="relative w-full aspect-[4/5] rounded-[1.5rem] overflow-hidden shadow-lg flex bg-white select-none group">
              {/* Base Image (PO) */}
              <img 
                src="/desmostav-stavba-na-kluc-33.webp" 
                alt="Dom po rekonštrukcii"
                className="absolute inset-0 w-full h-full object-cover object-center pointer-events-none"
              />
              <div className="absolute top-4 right-4 bg-[#E5A93B]/90 backdrop-blur-sm px-3 py-1.5 rounded-lg border border-white/20 z-10 pointer-events-none">
                <span className="text-[10px] font-extrabold text-white tracking-widest uppercase">PO</span>
              </div>

              {/* Overlay Image (PRED) - Grayscale to show difference since using same base image */}
              <div 
                className="absolute inset-0 z-20 pointer-events-none"
                style={{ clipPath: `polygon(0 0, ${sliderPosition}% 0, ${sliderPosition}% 100%, 0 100%)` }}
              >
                <img 
                  src="/desmostav-prerabka-domu-01.webp" 
                  alt="Dom pred rekonštrukciou"
                  className="absolute inset-0 w-full h-full object-cover object-center"
                />
                <div className="absolute top-4 left-4 bg-black/60 backdrop-blur-sm px-3 py-1.5 rounded-lg border border-white/10">
                  <span className="text-[10px] font-extrabold text-white tracking-widest uppercase">PRED</span>
                </div>
                {/* White line */}
                <div className="absolute inset-y-0 right-0 w-[1.5px] bg-white shadow-[0_0_10px_rgba(0,0,0,0.5)]"></div>
              </div>

              {/* Center Slider Handle */}
              <div 
                className="absolute top-1/2 -translate-y-1/2 w-10 h-10 bg-white rounded-full shadow-xl flex items-center justify-center z-30 border border-black/5 pointer-events-none transition-transform group-hover:scale-105"
                style={{ left: `calc(${sliderPosition}% - 20px)` }}
              >
                <div className="flex items-center gap-1">
                  <svg width="6" height="10" viewBox="0 0 6 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5 1L1 5L5 9" stroke="#1A1A1A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  <svg width="6" height="10" viewBox="0 0 6 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1 1L5 5L1 9" stroke="#1A1A1A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
              </div>

              {/* Invisible Range Input */}
              <input 
                type="range" 
                min="0" 
                max="100" 
                value={sliderPosition}
                onChange={(e) => setSliderPosition(Number(e.target.value))}
                className="absolute inset-0 w-full h-full opacity-0 z-40 cursor-ew-resize touch-pan-y"
              />
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="px-6 pt-8 pb-12 bg-[#F5F5F5]">
          <div className="bg-[#F5F5F5] rounded-[1.5rem] p-6 flex flex-col items-center text-center shadow-sm border border-black/5">
            <div className="w-12 h-12 rounded-full bg-[#1A1A1A] flex items-center justify-center mb-4 shadow-md">
              <HardHat className="w-6 h-6 text-[#E5A93B]" strokeWidth={1.5} />
            </div>
            
            <h3 className="text-[18px] font-extrabold text-[#1A1A1A] mb-2 leading-tight">
              Máte projekt? <br /> Porozprávajme sa o ňom.
            </h3>
            
            <p className="text-[13px] text-gray-600 font-medium mb-6">
              Pripravíme vám nezáväznú cenovú ponuku a navrhneme najlepšie riešenie pre vaše bývanie.
            </p>
            
            <button 
              onClick={openSheet}
              className="w-full bg-[#E5A93B] hover:bg-[#D4AF37] transition-colors text-white font-bold py-3.5 px-6 rounded-xl flex items-center justify-center gap-3 mb-4 shadow-md"
            >
              <HardHat className="w-5 h-5 text-white" strokeWidth={1.5} />
              <span className="text-[13px] tracking-wider uppercase">NEZÁVÄZNÁ CENOVÁ PONUKA</span>
            </button>
            
            <a href="tel:0905123456" className="flex items-center gap-3 text-[#E5A93B] font-bold text-[15px] hover:text-[#1A1A1A] transition-colors">
              <Phone className="w-5 h-5" strokeWidth={1.5} />
              +421 907 673 697
            </a>
          </div>
        </section>

        {/* Gallery / Our Work Section */}
        <section className="py-14 bg-white rounded-t-[2.5rem] shadow-[0_-10px_40px_rgba(0,0,0,0.03)] relative -mt-6">
          <div className="px-6 mb-8 flex items-end justify-between">
            <div>
              <div className="flex flex-col items-start mb-4">
                <span className="text-xs font-bold tracking-widest text-[#E5A93B] uppercase mb-1">
                  Naša práca
                </span>
                <div className="w-10 h-[2px] bg-[#E5A93B] mt-1"></div>
              </div>
              <h2 className="text-[2.25rem] font-extrabold text-[#1A1A1A] leading-[1.1] tracking-tight">
                Ukážky našich <br />
                <span className="text-[#E5A93B]">realizácií</span>
              </h2>
            </div>
            
            <div className="flex gap-2">
              <button 
                onClick={() => scrollContainer(galleryRef, 'left')}
                className="w-11 h-11 rounded-full border border-gray-200 flex items-center justify-center hover:bg-gray-50 transition-colors bg-white shadow-sm"
                aria-label="Posunúť doľava"
              >
                <ChevronLeft className="w-5 h-5 text-[#1A1A1A]" strokeWidth={1.5} />
              </button>
              <button 
                onClick={() => scrollContainer(galleryRef, 'right')}
                className="w-11 h-11 rounded-full border border-gray-200 flex items-center justify-center hover:bg-gray-50 transition-colors bg-white shadow-sm"
                aria-label="Posunúť doprava"
              >
                <ChevronRight className="w-5 h-5 text-[#1A1A1A]" strokeWidth={1.5} />
              </button>
            </div>
          </div>

          {/* Horizontal Swipable Scroll Container */}
          <div 
            ref={galleryRef}
            onScroll={handleInfiniteScroll}
            className="flex overflow-x-auto snap-x snap-mandatory gap-5 px-6 pb-8 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
          >
            {infiniteGallery.map((item, idx) => (
              <div key={`${item.id}-${idx}`} className="w-[82%] shrink-0 snap-center flex flex-col">
                <div className="w-full aspect-[4/3] rounded-[1.5rem] overflow-hidden shadow-md bg-white">
                  <img
                    src={item.image}
                    alt="Ukážka realizácie"
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105 cursor-pointer" onClick={() => setLightboxIndex(galleryItems.findIndex(i => i.image === item.image))}
                  />
                </div>
              </div>
            ))}
          </div>
          
          <div className="flex justify-center mt-2 px-6 pb-6">
            <Link 
              to="/nase-prace" 
              className="inline-flex items-center justify-center gap-2 bg-[#E5A93B] hover:bg-[#D4AF37] transition-colors text-white font-bold py-3.5 px-8 rounded-[1rem] text-[13px] tracking-wider w-full max-w-sm uppercase shadow-sm"
            >
              Pozrieť všetky ukážky
            </Link>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="py-14 px-6 bg-white pb-24">
          <div className="mb-8">
            <div className="flex flex-col items-start mb-4">
              <span className="text-xs font-bold tracking-widest text-[#E5A93B] uppercase mb-1">
                Postup prác
              </span>
              <div className="w-10 h-[2px] bg-[#E5A93B] mt-1"></div>
            </div>
            <h2 className="text-[2.25rem] font-extrabold text-[#1A1A1A] leading-[1.1] tracking-tight">
              Ako prebieha <br />
              <span className="text-[#E5A93B]">spolupráca?</span>
            </h2>
          </div>

          <div className="flex flex-col gap-4">
            {advantages.map((adv, idx) => (
              <div key={idx} className="bg-[#F5F5F5] p-5 rounded-[1.5rem] flex items-start gap-4">
                <div className="bg-white p-3.5 rounded-2xl shadow-sm shrink-0 flex items-center justify-center">
                  <adv.icon className="w-6 h-6 text-[#E5A93B]" />
                </div>
                <div className="pt-0.5">
                  <h3 className="text-[16px] font-extrabold text-[#1A1A1A] mb-1.5 leading-tight">{adv.title}</h3>
                  <p className="text-[12px] text-gray-600 font-medium leading-relaxed">{adv.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Reviews / Testimonials Section */}
        <section className="py-14 bg-[#F5F5F5] rounded-t-[2.5rem] shadow-[0_-10px_40px_rgba(0,0,0,0.03)] relative -mt-6">
          <div className="px-6 mb-8 flex items-end justify-between">
            <div>
              <div className="flex flex-col items-start mb-4">
                <span className="text-xs font-bold tracking-widest text-[#E5A93B] uppercase mb-1">
                  Hodnotenia
                </span>
                <div className="w-10 h-[2px] bg-[#E5A93B] mt-1"></div>
              </div>
              <h2 className="text-[2.25rem] font-extrabold text-[#1A1A1A] leading-[1.1] tracking-tight">
                Čo hovoria <br />
                <span className="text-[#E5A93B]">klienti</span>
              </h2>
            </div>
            
            <div className="flex gap-2">
              <button 
                onClick={() => scrollContainer(testimonialRef, 'left')}
                className="w-11 h-11 rounded-full border border-gray-200/60 flex items-center justify-center hover:bg-white transition-colors bg-white/50 shadow-sm"
                aria-label="Posunúť doľava"
              >
                <ChevronLeft className="w-5 h-5 text-[#1A1A1A]" strokeWidth={1.5} />
              </button>
              <button 
                onClick={() => scrollContainer(testimonialRef, 'right')}
                className="w-11 h-11 rounded-full border border-gray-200/60 flex items-center justify-center hover:bg-white transition-colors bg-white/50 shadow-sm"
                aria-label="Posunúť doprava"
              >
                <ChevronRight className="w-5 h-5 text-[#1A1A1A]" strokeWidth={1.5} />
              </button>
            </div>
          </div>

          {/* Horizontal Swipable Scroll Container */}
          <div 
            ref={testimonialRef}
            onScroll={handleInfiniteScroll}
            className="flex overflow-x-auto snap-x snap-mandatory gap-5 px-6 pb-14 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
          >
            {infiniteReviews.map((review, idx) => (
              <div key={`${review.id}-${idx}`} className="w-[85%] shrink-0 snap-center bg-white p-6 rounded-[1.5rem] shadow-sm flex flex-col min-h-[200px]">
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-[#F5B50A] fill-[#F5B50A]" />
                  ))}
                </div>
                <p className="text-[14px] text-gray-700 font-medium italic mb-5 leading-relaxed">
                  "{review.text}"
                </p>
                <div className="mt-auto flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-[#E5E5E5] flex items-center justify-center font-extrabold text-[#E5A93B]">
                    {review.name.charAt(0)}
                  </div>
                  <div className="flex flex-col">
                    <h4 className="text-[14px] font-extrabold text-[#1A1A1A] leading-tight">{review.name}</h4>
                    <span className="text-[11px] text-gray-500 font-bold uppercase tracking-wide">{review.location}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Service Area Section */}
        <section className="py-14 px-6 bg-white rounded-t-[2.5rem] shadow-[0_-10px_40px_rgba(0,0,0,0.03)] pb-24 relative -mt-6">
          <div className="mb-8">
            <div className="flex flex-col items-start mb-4">
              <span className="text-xs font-bold tracking-widest text-[#E5A93B] uppercase mb-1">
                Kde pôsobíme
              </span>
              <div className="w-10 h-[2px] bg-[#E5A93B] mt-1"></div>
            </div>
            <h2 className="text-[40px] font-extrabold text-[#1A1A1A] leading-[1.1] tracking-tight">
              Regióny, v ktorých <br />
              <span className="text-[#E5A93B]">pracujeme</span>
            </h2>
            <p className="text-gray-700 mt-5 text-[15px] font-medium leading-[1.6]">
              Naše stavebné služby poskytujeme prevažne v Bratislavskom a Trnavskom kraji. Ak sa nachádzate v okolí, radi za vami prídeme.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-3">
            {locations.map((loc, idx) => (
              <div key={idx} className="bg-[#F5F5F5] py-3.5 px-4 rounded-xl flex items-center justify-center">
                <span className="text-[14px] font-bold text-[#1A1A1A]">{loc}</span>
              </div>
            ))}
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-14 px-6 bg-[#F5F5F5] rounded-t-[2.5rem] shadow-[0_-10px_40px_rgba(0,0,0,0.03)] pb-24 relative -mt-6">
          <div className="mb-8">
            <div className="flex flex-col items-start mb-4">
              <span className="text-xs font-bold tracking-widest text-[#E5A93B] uppercase mb-1">
                Otázky
              </span>
              <div className="w-10 h-[2px] bg-[#E5A93B] mt-1"></div>
            </div>
            <h2 className="text-[40px] font-extrabold text-[#1A1A1A] leading-[1.1] tracking-tight">
              Často kladené <br />
              <span className="text-[#E5A93B]">otázky</span>
            </h2>
          </div>
          <div className="flex flex-col gap-4">
            {faqs.map((faq, i) => (
              <div key={i} className="bg-white p-5 rounded-[1.25rem] shadow-sm">
                <h3 className="text-[15px] font-extrabold text-[#1A1A1A] mb-2">{faq.q}</h3>
                <p className="text-[13px] text-gray-600 font-medium leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Final CTA & Form Section */}
        <section className="py-14 px-6 bg-white rounded-t-[2.5rem] shadow-[0_-10px_40px_rgba(0,0,0,0.03)] pb-16 relative -mt-6">
          <div className="mb-8">
            <h2 className="text-[40px] font-extrabold text-[#1A1A1A] leading-[1.1] tracking-tight mb-4">
              Plánujete <span className="text-[#E5A93B]">stavať</span> <br />alebo rekonštruovať?
            </h2>
            <p className="text-gray-700 text-[15px] font-medium leading-[1.6]">
              Vyplňte formulár a my sa vám ozveme s nezáväznou cenovou ponukou na mieru.
            </p>
          </div>
          <form className="flex flex-col gap-4" onSubmit={(e) => e.preventDefault()}>
            <div>
              <input type="text" placeholder="Vaše meno a priezvisko" className="w-full bg-[#F5F5F5] text-[#1A1A1A] placeholder:text-gray-500 font-medium text-[14px] p-4 rounded-xl outline-none focus:ring-2 focus:ring-[#E5A93B]/20 transition-all" />
            </div>
            <div>
              <input type="tel" placeholder="Telefónne číslo" className="w-full bg-[#F5F5F5] text-[#1A1A1A] placeholder:text-gray-500 font-medium text-[14px] p-4 rounded-xl outline-none focus:ring-2 focus:ring-[#E5A93B]/20 transition-all" />
            </div>
            <div>
              <input type="email" placeholder="Váš email" className="w-full bg-[#F5F5F5] text-[#1A1A1A] placeholder:text-gray-500 font-medium text-[14px] p-4 rounded-xl outline-none focus:ring-2 focus:ring-[#E5A93B]/20 transition-all" />
            </div>
            <div>
              <textarea placeholder="O akú službu máte záujem?" rows={4} className="w-full bg-[#F5F5F5] text-[#1A1A1A] placeholder:text-gray-500 font-medium text-[14px] p-4 rounded-xl outline-none focus:ring-2 focus:ring-[#E5A93B]/20 transition-all resize-none"></textarea>
            </div>
            <div className="mt-2">
              <button type="submit" className="flex items-center justify-between bg-[#E5A93B] hover:bg-[#D4AF37] transition-colors text-white font-bold py-4 px-5 rounded-[1.25rem] w-full shadow-lg">
                <div className="bg-white/20 p-1.5 rounded-full flex items-center justify-center">
                  <HardHat className="w-4 h-4 text-white fill-white" />
                </div>
                <span className="text-sm tracking-wide uppercase">Odoslať dopyt</span>
                <ArrowRight className="w-5 h-5 text-white" />
              </button>
            </div>
          </form>
        </section>

        <Logos3 className="bg-[#F5F5F5] pt-6 pb-12" />

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
      <Lightbox isOpen={lightboxIndex !== null} images={lightboxImages} currentIndex={lightboxIndex ?? 0} onNavigate={setLightboxIndex} onClose={() => setLightboxIndex(null)} />
    </div>
  );
}

const faqs = [
  {
    q: "Poskytujete obhliadku a cenovú ponuku zadarmo?",
    a: "Áno, prvotná obhliadka a vypracovanie nezáväznej cenovej ponuky sú u nás zdarma."
  },
  {
    q: "Ako dlho trvá stavba rodinného domu na kľúč?",
    a: "Závisí to od náročnosti a veľkosti projektu, no zvyčajne to trvá 6 až 12 mesiacov."
  },
  {
    q: "Pracujete aj cez víkendy?",
    a: "Áno, ak to situácia a termíny vyžadujú, vieme sa dohodnúť aj na prácach cez víkend."
  },
  {
    q: "Zabezpečujete aj nákup a dovoz materiálu?",
    a: "Samozrejme, zabezpečíme kompletný materiál vrátane dovozu, aby ste vy nemali žiadne starosti."
  }
];

const locations = [
  'Bratislava',
  'Pezinok',
  'Senec',
  'Modra',
  'Trnava',
  'Malacky',
  'Stupava',
  'Šamorín'
];

const reviews = [
  {
    id: 1,
    name: 'Martin K.',
    location: 'Bratislava',
    text: 'Profesionálny prístup od začiatku do konca. Všetko prebehlo podľa dohody a výsledok je skvelý.',
  },
  {
    id: 2,
    name: 'Lucia B.',
    location: 'Ružinov',
    text: 'Rekonštrukcia kúpeľne dopadla lepšie, ako sme čakali. Čistá práca, odporúčam každému.',
  },
  {
    id: 3,
    name: 'Peter M.',
    location: 'Záhorská Bystrica',
    text: 'Férové jednanie, dodržaný rozpočet aj termín. Pri ďalšej stavbe určite oslovím opäť.',
  }
];

const galleryItems = [
  { id: 1, image: '/desmostav-hruba-stavba-17.webp' },
  { id: 2, image: '/desmostav-hruba-stavba-26.webp' },
  { id: 3, image: '/desmostav-hruba-stavba-35.webp' },
  { id: 4, image: '/desmostav-stavebna-firma-05.webp' },
  { id: 5, image: '/desmostav-stavebna-firma-14.webp' },
  { id: 6, image: '/desmostav-stavebna-firma-23.webp' },
  { id: 7, image: '/desmostav-stavba-na-kluc-33.webp' },
  { id: 8, image: '/desmostav-rekonstrukcia-domu-03.webp' },
  { id: 9, image: '/desmostav-rekonstrukcia-domu-21.webp' },
  { id: 10, image: '/desmostav-prerabka-domu-19.webp' },
  { id: 11, image: '/desmostav-stavebne-sluzby-18.webp' },
  { id: 12, image: '/desmostav-prerabka-domu-10.webp' }
];

const advantages = [
  {
    icon: Clock,
    title: '01 Obhliadka a konzultácia',
    desc: 'Prídeme na miesto, vypočujeme si vaše predstavy a zhodnotíme stav.',
  },
  {
    icon: Ruler,
    title: '02 Návrh a cenová ponuka',
    desc: 'Pripravíme vám transparentný rozpočet a jasný harmonogram prác.',
  },
  {
    icon: Hammer,
    title: '03 Realizácia',
    desc: 'Začneme stavať alebo rekonštruovať podľa dohodnutého plánu s dôrazom na čistotu a kvalitu.',
  },
  {
    icon: CheckCircle,
    title: '04 Odovzdanie a servis',
    desc: 'Hotové dielo vám odovzdáme pripravené na užívanie. Tým však naša starostlivosť nekončí.',
  },
];

const services = [
  {
    id: '01',
    title: 'Stavby na kľúč',
    desc: 'Kompletná výstavba rodinných domov od základovej dosky až po odovzdanie. Hrubá stavba, strechy a inžinierske siete.',
    image: '/desmostav-hruba-stavba-08.webp',
    path: '/sluzby/stavby-na-kluc'
  },
  {
    id: '02',
    title: 'Rekonštrukcie',
    desc: 'Kompletné rekonštrukcie domov a bytov vrátane prerábky bytových jadier a kúpeľní na kľúč.',
    image: '/desmostav-rekonstrukcia-domu-03.webp',
    path: '/sluzby/rekonstrukcie'
  },
  {
    id: '03',
    title: 'Exteriér a Fasády',
    desc: 'Zatepľovanie budov, fasádne úpravy, zemné a výkopové práce, pokládka dlažby a terénne úpravy.',
    image: '/desmostav-stavba-na-kluc-06.webp',
    path: '/sluzby/exterier-a-fasady'
  },
  {
    id: '04',
    title: 'Interiér',
    desc: 'Sadrokartóny, kazetové stropy, štukové omietky, stierky, tapetovanie a maliarske práce.',
    image: '/desmostav-vystavba-rodinnych-domov-22.webp',
    path: '/sluzby/interier'
  },
  {
    id: '05',
    title: 'Inštalácie',
    desc: 'Profesionálna montáž vody, kanalizácie, kúrenia a kompletných elektroinštalácií.',
    image: '/desmostav-stavebne-prace-20.webp',
    path: '/sluzby/instalacie'
  }
];

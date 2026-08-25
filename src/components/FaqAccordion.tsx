import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

export function FaqAccordion({ question, answer }: { question: string; answer: string }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div 
      className="bg-white rounded-[1.5rem] p-6 shadow-[0_4px_20px_rgba(0,0,0,0.03)] border border-black/5 cursor-pointer transition-all hover:border-[#405C41]/20"
      onClick={() => setIsOpen(!isOpen)}
    >
      <div className="flex justify-between items-center gap-4">
        <h3 className="text-[15px] font-extrabold text-[#1A1A1A] leading-tight select-none">{question}</h3>
        <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-colors ${isOpen ? 'bg-[#405C41] text-white' : 'bg-[#F4F2EB] text-[#405C41]'}`}>
          <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
        </div>
      </div>
      
      <div 
        className={`grid transition-all duration-300 ease-in-out ${isOpen ? 'grid-rows-[1fr] opacity-100 mt-4 pt-4 border-t border-gray-100' : 'grid-rows-[0fr] opacity-0 mt-0 pt-0 border-t-0'}`}
      >
        <div className="overflow-hidden">
          <p className="text-[14px] text-gray-600 font-medium leading-relaxed">
            {answer}
          </p>
        </div>
      </div>
    </div>
  );
}

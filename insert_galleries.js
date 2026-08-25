import fs from 'fs';

function injectGalleryAndFAQ(filePath, images, faqs) {
  let content = fs.readFileSync(filePath, 'utf8');

  if (content.includes("UKÁŽKY NAŠEJ PRÁCE")) {
    console.log(`Already injected in ${filePath}`);
    return;
  }

  const faqsHtml = faqs.map(faq => `
            <div className="bg-white rounded-[1.5rem] p-6 shadow-sm border border-black/5">
              <h3 className="text-[14px] font-bold text-[#1A1A1A] mb-2 leading-tight">${faq.q}</h3>
              <p className="text-[13px] text-gray-600 font-medium leading-relaxed">${faq.a}</p>
            </div>`).join('');

  const galleryAndFAQ = `{/* Gallery */}
        <section className="py-8 px-6 bg-[#F4F2EB]">
          <h2 className="text-[11px] font-bold tracking-widest text-[#405C41] uppercase mb-6">
            UKÁŽKY NAŠEJ PRÁCE
          </h2>
          <div className="grid grid-cols-2 gap-3">
            <div className="flex flex-col gap-3">
              <img src="${images[0]}" alt="Ukážka práce" className="w-full h-[140px] object-cover rounded-2xl shadow-sm" />
              <img src="${images[1]}" alt="Ukážka práce" className="w-full h-[180px] object-cover rounded-2xl shadow-sm" />
            </div>
            <div className="flex flex-col gap-3">
              <img src="${images[2]}" alt="Ukážka práce" className="w-full h-[180px] object-cover rounded-2xl shadow-sm" />
              <img src="${images[3]}" alt="Ukážka práce" className="w-full h-[140px] object-cover rounded-2xl shadow-sm" />
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-8 px-6 bg-[#F4F2EB] border-t border-[#405C41]/10">
          <h2 className="text-[11px] font-bold tracking-widest text-[#405C41] uppercase mb-6">
            ČASTÉ OTÁZKY
          </h2>
          <div className="flex flex-col gap-4">
            ${faqsHtml}
          </div>
        </section>

        {/* Editorial Transition */}`;

  const target = `{/* Editorial Transition */}`;
  if (content.includes(target)) {
      content = content.replace(target, galleryAndFAQ);
      fs.writeFileSync(filePath, content);
      console.log(`Updated ${filePath}`);
  }
}

const faqsKosenie = [
  { q: "Ako často kosíte trávnik?", a: "Ideálne každých 7 až 14 dní v závislosti od ročného obdobia a počasia, aby bol trávnik zdravý a hustý." },
  { q: "Pracujete aj s jednorazovými zákazkami?", a: "Áno, radi k vám prídeme pokosiť aj jednorazovo, napríklad pred rodinnou oslavou alebo po návrate z dovolenky." }
];
const imgKosenie = [
  "https://images.unsplash.com/photo-1599951806307-e435987a0225?auto=format&fit=crop&q=80&w=600",
  "https://images.unsplash.com/photo-1592424001806-039c288593a2?auto=format&fit=crop&q=80&w=600",
  "https://images.unsplash.com/photo-1558904541-efa843a96f0f?auto=format&fit=crop&q=80&w=600",
  "https://images.unsplash.com/photo-1622383563227-04401ab4e5ea?auto=format&fit=crop&q=80&w=600"
];

const faqsStarostlivost = [
  { q: "Ako často odporúčate údržbu?", a: "Záleží od typu a veľkosti záhrady, no pre dokonalý vzhľad odporúčame pravidelnú návštevu aspoň raz za mesiac." },
  { q: "Pracujete aj s jednorazovými zákazkami?", a: "Samozrejme, zabezpečujeme aj jednorazové jarné prebudenie záhrady či jesenné zazimovanie a upratanie." }
];
const imgStarostlivost = [
  "https://images.unsplash.com/photo-1416879598555-25925e0a6d0c?auto=format&fit=crop&q=80&w=600",
  "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&q=80&w=600",
  "https://images.unsplash.com/photo-1592424001806-039c288593a2?auto=format&fit=crop&q=80&w=600",
  "https://images.unsplash.com/photo-1558904541-efa843a96f0f?auto=format&fit=crop&q=80&w=600"
];

const faqsStrihanie = [
  { q: "Kedy je najlepší čas na rez?", a: "Ovocné stromy striháme zvyčajne v predjarí. Živé ploty tvarujeme najčastejšie v júni a následne koncom augusta." },
  { q: "Odvážate aj vzniknutý odpad po strihaní?", a: "Áno, kompletný biologický odpad po strihaní zošrotujeme a odvezieme. Neostane po nás absolútne žiadny neporiadok." }
];
const imgStrihanie = [
  "https://images.unsplash.com/photo-1558904541-efa843a96f09?auto=format&fit=crop&q=80&w=600",
  "https://images.unsplash.com/photo-1616058055627-c10b777a8286?auto=format&fit=crop&q=80&w=600",
  "https://images.unsplash.com/photo-1592424001806-039c288593a2?auto=format&fit=crop&q=80&w=600",
  "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&q=80&w=600"
];

const faqsUdrzba = [
  { q: "Viete zabezpečiť kompletnú údržbu?", a: "Áno, ponúkame balíky celoročnej údržby. O všetko sa postaráme my a vy si len užívate dokonalú záhradu." },
  { q: "Ako často odporúčate údržbu?", a: "Pri kompletnej údržbe k vám zvyčajne chodíme na pravidelné cykly každé 1-2 týždne, podľa aktuálnej potreby rastlín a trávnika." }
];
const imgUdrzba = [
  "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&q=80&w=600",
  "https://images.unsplash.com/photo-1622383563227-04401ab4e5ea?auto=format&fit=crop&q=80&w=600",
  "https://images.unsplash.com/photo-1558904541-efa843a96f0f?auto=format&fit=crop&q=80&w=600",
  "https://images.unsplash.com/photo-1592424001806-039c288593a2?auto=format&fit=crop&q=80&w=600"
];

injectGalleryAndFAQ('src/pages/Kosenie.tsx', imgKosenie, faqsKosenie);
injectGalleryAndFAQ('src/pages/Starostlivost.tsx', imgStarostlivost, faqsStarostlivost);
injectGalleryAndFAQ('src/pages/Strihanie.tsx', imgStrihanie, faqsStrihanie);
injectGalleryAndFAQ('src/pages/Udrzba.tsx', imgUdrzba, faqsUdrzba);

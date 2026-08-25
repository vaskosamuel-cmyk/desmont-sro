const fs = require('fs');

let content = fs.readFileSync('src/pages/NasePrace.tsx', 'utf8');

// 1. Replace the header section
const oldHeader = `<section className="pt-24 pb-8 px-6 bg-[#111111] text-white">
          <span className="text-[13px] font-bold tracking-[0.15em] text-[#E5A93B] uppercase mb-3 block">
            REFERENCIE
          </span>
          <h1 className="text-[36px] font-extrabold tracking-tight mb-4 uppercase leading-[1.05]">
            Naše <br /> <span className="text-[#E5A93B]">práce</span>
          </h1>
          <p className="text-[15px] text-gray-300 font-medium max-w-[280px] leading-[1.6]">
            Prezrite si výber z našich úspešne dokončených projektov. Každá stavba je vizitkou našej kvality a precíznosti.
          </p>
        </section>`;

const newHeader = `<section className="relative pt-32 pb-16 px-6 text-white overflow-hidden">
          <div className="absolute inset-0 z-0">
            <img 
              src="/desmostav-kompletna-rekonstrukcia-25.webp" 
              alt="Naše práce"
              className="w-full h-full object-cover object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#F5F5F5] via-[#111111]/90 to-black/60"></div>
          </div>
          
          <div className="relative z-10">
            <span className="text-[13px] font-bold tracking-[0.15em] text-[#E5A93B] uppercase mb-3 block">
              REFERENCIE
            </span>
            <h1 className="text-[36px] font-extrabold tracking-tight mb-4 uppercase leading-[1.05]">
              Naše <br /> <span className="text-[#E5A93B]">práce</span>
            </h1>
            <p className="text-[15px] text-gray-300 font-medium max-w-[280px] leading-[1.6]">
              Prezrite si výber z našich úspešne dokončených projektov. Každá stavba je vizitkou našej kvality a precíznosti.
            </p>
          </div>
        </section>`;

// Notice the background gradient blending to #F5F5F5 at the bottom so it flows into the next section.
// Actually, let's just make it from-[#F5F5F5] via-black/80 to-black/50, or from-[#111111] and change next section to #111111?
// Next section is bg-[#F5F5F5]. So gradient `to-t from-[#F5F5F5] via-black/80 to-black/50` might look a bit muddy.
// Let's use `from-[#F5F5F5] via-[#F5F5F5]/20 to-black/60`? No, the text is white. It needs a dark background.
// Better: gradient from-[#F5F5F5] via-black/90 to-black/60. Wait, if it fades to #F5F5F5, the white text will be unreadable if it's near the bottom. 
// Let's just make the section fade to #F5F5F5 at the very bottom padding, or just keep it dark and let the edge be sharp. Sharp edge is fine (like other pages).

const updatedHeader = `<section className="relative pt-32 pb-16 px-6 text-white overflow-hidden">
          <div className="absolute inset-0 z-0">
            <img 
              src="/desmostav-vystavba-rodinnych-domov-04.webp" 
              alt="Naše práce"
              className="w-full h-full object-cover object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-black/80"></div>
          </div>
          
          <div className="relative z-10">
            <span className="text-[13px] font-bold tracking-[0.15em] text-[#E5A93B] uppercase mb-3 block">
              REFERENCIE
            </span>
            <h1 className="text-[36px] font-extrabold tracking-tight mb-4 uppercase leading-[1.05]">
              Naše <br /> <span className="text-[#E5A93B]">práce</span>
            </h1>
            <p className="text-[15px] text-gray-200 font-medium max-w-[280px] leading-[1.6]">
              Prezrite si výber z našich úspešne dokončených projektov. Každá stavba je vizitkou našej kvality a precíznosti.
            </p>
          </div>
        </section>`;

content = content.replace(oldHeader, updatedHeader);

// 2. Remove the text from gallery items and adjust height
const oldGalleryItem = `<div 
                key={idx} 
                className="snap-center shrink-0 w-[85%] bg-white rounded-[1.5rem] overflow-hidden shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-black/[0.03] cursor-pointer group flex flex-col"
                onClick={() => setLightboxIndex(idx)}
              >
                <div className="w-full h-[320px] overflow-hidden relative">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                  <div className="absolute inset-0 bg-black/5 group-hover:bg-transparent transition-colors duration-500"></div>
                </div>
                
                <div className="p-6 flex flex-col gap-4">
                  <span className="text-[10px] font-extrabold tracking-[0.2em] text-[#E5A93B] uppercase block">
                    {project.category}
                  </span>
                  
                  <div className="flex flex-col gap-1.5">
                    <h3 className="text-[18px] font-extrabold text-[#1A1A1A] leading-tight">
                      {project.title}
                    </h3>
                    <span className="text-[14px] font-medium text-gray-500">
                      {project.location}
                    </span>
                    <span className="text-[14px] font-medium text-gray-400 mt-1">
                      {project.year}
                    </span>
                  </div>
                </div>
              </div>`;

const newGalleryItem = `<div 
                key={idx} 
                className="snap-center shrink-0 w-[85%] rounded-[1.5rem] overflow-hidden shadow-[0_8px_30px_rgb(0,0,0,0.1)] border border-black/[0.03] cursor-pointer group flex flex-col"
                onClick={() => setLightboxIndex(idx)}
              >
                <div className="w-full aspect-[4/5] overflow-hidden relative">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-500"></div>
                </div>
              </div>`;

content = content.replace(oldGalleryItem, newGalleryItem);

fs.writeFileSync('src/pages/NasePrace.tsx', content);

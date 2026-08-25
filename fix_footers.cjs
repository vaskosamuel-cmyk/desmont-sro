const fs = require('fs');

const footerCode = `        {/* Footer */}
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
        </footer>`;

function addFooter(file) {
  let content = fs.readFileSync(file, 'utf8');
  if (content.includes('footer className="bg-[#111111]')) {
    console.log(file, 'already has footer');
    return;
  }
  
  // Find the closing of the last section before the main div ends
  // Typically:
  //       </section>
  //     </div>
  //   </div>
  // );
  
  content = content.replace(/<\/section>\s*<\/div>\s*<\/div>\s*\);\s*\}\s*$/m, 
    `</section>\n\n${footerCode}\n\n      </div>\n    </div>\n  );\n}\n`);
    
  fs.writeFileSync(file, content);
  console.log('Added footer to', file);
}

addFooter('src/pages/About.tsx');
addFooter('src/pages/Kontakt.tsx');

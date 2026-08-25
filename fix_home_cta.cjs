const fs = require('fs');

let content = fs.readFileSync('src/pages/Home.tsx', 'utf8');

const targetPattern = `            ))}
          </div>
        </section>`;

const replacement = `            ))}
          </div>
          
          <div className="flex justify-center mt-2 px-6 pb-6">
            <Link 
              to="/nase-prace" 
              className="inline-flex items-center justify-center gap-2 bg-[#E5A93B] hover:bg-[#D4AF37] transition-colors text-white font-bold py-3.5 px-8 rounded-[1rem] text-[13px] tracking-wider w-full max-w-sm uppercase shadow-sm"
            >
              Pozrieť všetky ukážky
            </Link>
          </div>
        </section>`;

content = content.replace(targetPattern, replacement);
fs.writeFileSync('src/pages/Home.tsx', content);

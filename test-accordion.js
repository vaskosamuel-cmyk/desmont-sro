import fs from 'fs';

const filePath = 'src/pages/Instalacie.tsx';
let content = fs.readFileSync(filePath, 'utf8');

content = content.replace(
  /<h2 className="text-\[14px\] font-extrabold tracking-widest text-\[#E5A93B\] uppercase mb-2\">\s*ČO VŠETKO VIEME ZABEZPEČIŤ\s*<\/h2>\s*<h3 className="text-\[24px\] font-extrabold text-\[#1A1A1A\] leading-tight">\s*Vyberte si službu, <br \/> ktorú potrebujete\.\s*<\/h3>/,
  `<h2 className="text-[14px] font-extrabold tracking-widest text-[#E5A93B] uppercase mb-2">
              NAŠE SLUŽBY
            </h2>
            <h3 className="text-[24px] font-extrabold text-[#1A1A1A] leading-tight mb-2">
              Čo všetko vieme zabezpečiť
            </h3>
            <p className="text-[14px] text-gray-600 font-medium">
              Od jednotlivých prác až po kompletné technické riešenie.
            </p>`
);

content = content.replace(
  /<div className="flex items-center gap-4">\s*<span className={`text-\[13px\] font-extrabold transition-colors duration-300 \$\{isExpanded \? 'text-\[#E5A93B\]' : 'text-gray-400'\}`}>\s*\{service\.id\}\s*<\/span>\s*<span className="text-\[15px\] font-bold text-\[#1A1A1A\]">\s*\{service\.title\}\s*<\/span>\s*<\/div>/g,
  `<div className="flex items-start gap-4">
                      <span className={\`text-[13px] font-extrabold pt-0.5 transition-colors duration-300 \${isExpanded ? 'text-[#E5A93B]' : 'text-gray-400'}\`}>
                        {service.id}
                      </span>
                      <div className="flex flex-col gap-1 pr-4">
                        <span className="text-[15px] font-bold text-[#1A1A1A]">
                          {service.title}
                        </span>
                        <span className="text-[12px] text-gray-500 font-medium leading-relaxed">
                          {service.desc}
                        </span>
                      </div>
                    </div>`
);

// Remove the description from the expanded body
content = content.replace(
  /<p className="text-\[14px\] text-gray-600 font-medium leading-relaxed">\s*\{service\.desc\}\s*<\/p>/g,
  ''
);

fs.writeFileSync(filePath, content);

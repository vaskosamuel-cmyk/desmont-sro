import fs from 'fs';

const file = 'src/pages/Home.tsx';
let content = fs.readFileSync(file, 'utf8');

const oldPattern = `className="flex overflow-x-auto snap-x snap-mandatory gap-4 w-[calc(100%+3rem)] -mx-6 px-[calc(50%-150px)] pb-6 [&::-webkit-scrollbar]:hidden" 
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}`;

const newPattern = `className="flex overflow-x-auto snap-x snap-mandatory gap-4 w-[calc(100%+3rem)] -mx-6 pb-6 [&::-webkit-scrollbar]:hidden" 
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}`;

content = content.replace(oldPattern, newPattern);

// add spacers
const beforeServices = `{services.map((service, index) => (`;
const newBeforeServices = `<div className="w-[calc(50%-150px-16px)] shrink-0" />
            {services.map((service, index) => (`;

content = content.replace(beforeServices, newBeforeServices);

const afterServices = `))}
          </div>`;
const newAfterServices = `))}
            <div className="w-[calc(50%-150px-16px)] shrink-0" />
          </div>`;

content = content.replace(afterServices, newAfterServices);

fs.writeFileSync(file, content);
console.log('Fixed services padding');

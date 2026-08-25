const fs = require('fs');
let content = fs.readFileSync('src/pages/NasePrace.tsx', 'utf8');

content = content.replace(
  `            ))}
          </div>
          
          
        </section>`,
  `            ))}
          </div>
          </div>
        </section>`
);

fs.writeFileSync('src/pages/NasePrace.tsx', content);

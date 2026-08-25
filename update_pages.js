import fs from 'fs';

function replaceFileContent(filePath, componentName, replacements) {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Replace component name
    content = content.replace(/export default function Kosenie\(\) \{/g, `export default function ${componentName}() {`);
    
    // Perform array of replacements
    replacements.forEach(({ search, replace }) => {
        content = content.replace(new RegExp(search, 'g'), replace);
    });

    fs.writeFileSync(filePath, content);
    console.log(`Updated ${filePath}`);
}

// 1. Starostlivost
replaceFileContent('src/pages/Starostlivost.tsx', 'Starostlivost', [
    { search: 'Kosenie trávnika', replace: 'Starostlivosť o záhradu' },
    { search: 'https://images.unsplash.com/photo-1589923188900-85dae523342b\\?auto=format&fit=crop&q=80&w=800', replace: 'https://images.unsplash.com/photo-1416879598555-25925e0a6d0c?auto=format&fit=crop&q=80&w=800' },
    { search: 'KOSENIE <br />\\s*A ÚDRŽBA <br />\\s*<span className="text-\\[#78A143\\]">TRÁVNIKU</span>', replace: 'STAROSTLIVOSŤ <br /> O <span className="text-[#78A143]">ZÁHRADU</span>' },
    { search: 'Pravidelná starostlivosť o trávnik, ktorý bude vyzerať upravene po celý rok.', replace: 'Starostlivosť o rastliny, záhony a okrasné dreviny pre zdravú a krásnu záhradu.' },
    { search: 'PREČO PRAVIDELNÉ KOSENIE\\?', replace: 'PREČO PRAVIDELNÁ STAROSTLIVOSŤ?' },
    { search: 'Pravidelným kosením podporujeme hustý a zdravý trávnik.', replace: 'Zabezpečíme zdravý rast rastlín a kvetov počas celej sezóny.' },
    { search: 'Kosenie trávnika', replace: 'Starostlivosť o záhony' },
    { search: 'Zastrihávanie okrajov', replace: 'Hnojenie a ochrana rastlín' },
    { search: 'Fúkanie a upratovanie', replace: 'Odstraňovanie buriny' },
    { search: 'Kontrola celkového stavu trávnika', replace: 'Kontrola zdravotného stavu drevín' },
    { search: 'https://images.unsplash.com/photo-1589923158776-cb4485d99fd6\\?auto=format&fit=crop&q=80&w=800', replace: 'https://images.unsplash.com/photo-1592424001806-039c288593a2?auto=format&fit=crop&q=80&w=800' },
    { search: 'Detail kosenia trávnika', replace: 'Detail starostlivosti o rastliny' },
    { search: 'AKO ČASTO KOSIŤ\\?', replace: 'AKO ČASTO SA STARAŤ?' },
    { search: 'Frekvencia kosenia', replace: 'Frekvencia údržby' },
    { search: 'Závisí od ročného obdobia a počasia. Odporúčame kosiť každé 1-2 týždne.', replace: 'Závisí od konkrétnych rastlín a ročného obdobia. Odporúčame pravidelné mesačné návštevy.' },
    { search: 'Detail, ktorý je vidieť.', replace: 'Dokonalosť v detailoch.' },
    { search: 'Chcete mať trávnik <br />\\s*vždy v perfektnej kondícii\\?', replace: 'Chcete mať záhradu <br /> plnú života a farieb?' }
]);

// 2. Strihanie
replaceFileContent('src/pages/Strihanie.tsx', 'Strihanie', [
    { search: 'Kosenie trávnika', replace: 'Strihanie stromov' },
    { search: 'https://images.unsplash.com/photo-1589923188900-85dae523342b\\?auto=format&fit=crop&q=80&w=800', replace: 'https://images.unsplash.com/photo-1558904541-efa843a96f09?auto=format&fit=crop&q=80&w=800' },
    { search: 'KOSENIE <br />\\s*A ÚDRŽBA <br />\\s*<span className="text-\\[#78A143\\]">TRÁVNIKU</span>', replace: 'STRIHANIE <br /> A TVAROVANIE <br /> <span className="text-[#78A143]">DREVÍN</span>' },
    { search: 'Pravidelná starostlivosť o trávnik, ktorý bude vyzerať upravene po celý rok.', replace: 'Profesionálne strihanie a tvarovanie stromov, kríkov a živých plotov.' },
    { search: 'PREČO PRAVIDELNÉ KOSENIE\\?', replace: 'PREČO PROFESIONÁLNE STRIHANIE?' },
    { search: 'Pravidelným kosením podporujeme hustý a zdravý trávnik.', replace: 'Odborným rezom podporíme zdravý rast, kvitnutie a úrodu stromov.' },
    { search: 'Kosenie trávnika', replace: 'Tvarovanie živých plotov' },
    { search: 'Zastrihávanie okrajov', replace: 'Zmladzovací rez stromov' },
    { search: 'Fúkanie a upratovanie', replace: 'Výchovný a udržiavací rez' },
    { search: 'Kontrola celkového stavu trávnika', replace: 'Odvoz biologického odpadu' },
    { search: 'https://images.unsplash.com/photo-1589923158776-cb4485d99fd6\\?auto=format&fit=crop&q=80&w=800', replace: 'https://images.unsplash.com/photo-1616058055627-c10b777a8286?auto=format&fit=crop&q=80&w=800' },
    { search: 'Detail kosenia trávnika', replace: 'Detail strihania plotu' },
    { search: 'AKO ČASTO KOSIŤ\\?', replace: 'KEDY STRIHAŤ DREVINY?' },
    { search: 'Frekvencia kosenia', replace: 'Správne načasovanie' },
    { search: 'Závisí od ročného obdobia a počasia. Odporúčame kosiť každé 1-2 týždne.', replace: 'Rez stromov a krov závisí od ich druhu. Niektoré vyžadujú jarný rez, iné jesenný.' },
    { search: 'Detail, ktorý je vidieť.', replace: 'Precízny rez pre zdravý rast.' },
    { search: 'Chcete mať trávnik <br />\\s*vždy v perfektnej kondícii\\?', replace: 'Potrebujete oživiť <br /> a ostrihať dreviny?' }
]);

// 3. Udrzba
replaceFileContent('src/pages/Udrzba.tsx', 'Udrzba', [
    { search: 'Kosenie trávnika', replace: 'Kompletná údržba' },
    { search: 'https://images.unsplash.com/photo-1589923188900-85dae523342b\\?auto=format&fit=crop&q=80&w=800', replace: 'https://images.unsplash.com/photo-1558904541-efa843a96f0f?auto=format&fit=crop&q=80&w=800' },
    { search: 'KOSENIE <br />\\s*A ÚDRŽBA <br />\\s*<span className="text-\\[#78A143\\]">TRÁVNIKU</span>', replace: 'KOMPLETNÁ <br /> ÚDRŽBA <br /> <span className="text-[#78A143]">ZÁHRADY</span>' },
    { search: 'Pravidelná starostlivosť o trávnik, ktorý bude vyzerať upravene po celý rok.', replace: 'Postaráme sa o vašu záhradu od A po Z. Vy si už len užívate výsledok.' },
    { search: 'PREČO PRAVIDELNÉ KOSENIE\\?', replace: 'PREČO KOMPLETNÁ ÚDRŽBA?' },
    { search: 'Pravidelným kosením podporujeme hustý a zdravý trávnik.', replace: 'Všetky služby v jednom balíku. Ušetríte čas a vaša záhrada bude vždy v top stave.' },
    { search: 'Kosenie trávnika', replace: 'Kosenie a prevzdušnenie trávnika' },
    { search: 'Zastrihávanie okrajov', replace: 'Strihanie živých plotov a krov' },
    { search: 'Fúkanie a upratovanie', replace: 'Odstraňovanie opadaného lístia' },
    { search: 'Kontrola celkového stavu trávnika', replace: 'Hnojenie a ochrana pred škodcami' },
    { search: 'https://images.unsplash.com/photo-1589923158776-cb4485d99fd6\\?auto=format&fit=crop&q=80&w=800', replace: 'https://images.unsplash.com/photo-1622383563227-04401ab4e5ea?auto=format&fit=crop&q=80&w=800' },
    { search: 'Detail kosenia trávnika', replace: 'Údržba záhrady' },
    { search: 'AKO ČASTO KOSIŤ\\?', replace: 'AKO TO FUNGUJE?' },
    { search: 'Frekvencia kosenia', replace: 'Ročný plán' },
    { search: 'Závisí od ročného obdobia a počasia. Odporúčame kosiť každé 1-2 týždne.', replace: 'Vytvoríme vám harmonogram údržby na mieru podľa potrieb vašej záhrady.' },
    { search: 'Detail, ktorý je vidieť.', replace: 'Záhrada bez starostí.' },
    { search: 'Chcete mať trávnik <br />\\s*vždy v perfektnej kondícii\\?', replace: 'Chcete krásnu záhradu <br /> bez námahy a starostí?' }
]);


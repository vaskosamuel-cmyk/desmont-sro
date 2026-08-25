const fs = require('fs');

const rekonstrukcie = fs.readFileSync('src/pages/Rekonstrukcie.tsx', 'utf8');
const stavby = fs.readFileSync('src/pages/StavbyNaKluc.tsx', 'utf8');

const regex = /<motion\.section[\s\S]*?PREČO TÁTO SLUŽBA[\s\S]*?<\/motion\.section>/;

const match = rekonstrukcie.match(regex);
if (match) {
    const replacement = match[0];
    const newStavby = stavby.replace(regex, replacement);
    fs.writeFileSync('src/pages/StavbyNaKluc.tsx', newStavby);
    console.log("Successfully replaced the block in StavbyNaKluc.tsx");
} else {
    console.log("Could not find the block in Rekonstrukcie.tsx");
}

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import StavbyNaKluc from './pages/StavbyNaKluc';
import Rekonstrukcie from './pages/Rekonstrukcie';
import ExterierFasady from './pages/ExterierFasady';
import Interier from './pages/Interier';
import Instalacie from './pages/Instalacie';
import About from './pages/About';
import Kontakt from './pages/Kontakt';
import NasePrace from './pages/NasePrace';
import { ContactSheetProvider } from './context/ContactSheetContext';

export default function App() {
  return (
    <ContactSheetProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sluzby/stavby-na-kluc" element={<StavbyNaKluc />} />
          <Route path="/sluzby/rekonstrukcie" element={<Rekonstrukcie />} />
          <Route path="/sluzby/exterier-a-fasady" element={<ExterierFasady />} />
          <Route path="/sluzby/interier" element={<Interier />} />
          <Route path="/sluzby/instalacie" element={<Instalacie />} />
          <Route path="/nase-prace" element={<NasePrace />} />
          <Route path="/o-nas" element={<About />} />
          <Route path="/kontakt" element={<Kontakt />} />
        </Routes>
      </BrowserRouter>
    </ContactSheetProvider>
  );
}

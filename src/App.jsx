import { Route, Routes } from 'react-router-dom';
import AppShell from './components/AppShell.jsx';
import HomePage from './pages/HomePage.jsx';
import Biology from './pages/Biology.jsx';
import Geography from './pages/Geography.jsx';
import Species from './pages/Species.jsx';
import Elephants from './pages/Elephants.jsx';
import Scrapie from './pages/Scrapie.jsx';
import EconSector from './pages/EconSector.jsx';
import Recreation from './pages/Recreation.jsx';
import NotFound from './pages/NotFound.jsx';

export default function App() {
  return (
    <Routes>
      <Route element={<AppShell />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/biology" element={<Biology />} />
        <Route path="/biology/species" element={<Species />} />
        <Route path="/biology/elephants" element={<Elephants />} />
        <Route path="/biology/scrapie" element={<Scrapie />} />
        <Route path="/geography" element={<Geography />} />
        <Route path="/geography/secondary-sector" element={<EconSector />} />
        <Route path="/geography/recreation" element={<Recreation />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}

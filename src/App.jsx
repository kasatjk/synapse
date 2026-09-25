import { Route, Routes } from 'react-router-dom';
import AppShell from './components/AppShell.jsx';
import HomePage from './pages/HomePage.jsx';
import BiologyHub from './pages/BiologyHub.jsx';
import GeographyHub from './pages/GeographyHub.jsx';
import BLSpecies from './pages/BLSpecies.jsx';
import BTElephants from './pages/BTElephants.jsx';
import Scrapie from './pages/Scrapie.jsx';
import GGEconSector from './pages/GGEconSector.jsx';
import GGRecrResources from './pages/GGRecrResources.jsx';
import NotFound from './pages/NotFound.jsx';

export default function App() {
  return (
    <Routes>
      <Route element={<AppShell />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/biology" element={<BiologyHub />} />
        <Route path="/biology/species" element={<BLSpecies />} />
        <Route path="/biology/elephants" element={<BTElephants />} />
        <Route path="/biology/scrapie" element={<Scrapie />} />
        <Route path="/geography" element={<GeographyHub />} />
        <Route path="/geography/secondary-sector" element={<GGEconSector />} />
        <Route path="/geography/recreation" element={<GGRecrResources />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}

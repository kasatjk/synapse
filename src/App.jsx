import { useState } from 'react'
import './App.css'
import BLSpecies from './pages/BLSpecies.jsx'
import GGEconSector from './pages/GGEconSector.jsx'
import BTElephants from './pages/BTElephants.jsx'
import GGRecrResources from './pages/GGRecrResources.jsx'

function App() {
  return (
    <>
    <div className="container">
      <BLSpecies />
      <GGEconSector />
      <BTElephants />
      <GGRecrResources />
    </div>
    <footer>
        <p>Данило Павлюк :)</p>
    </footer>
    </>
  );
}
export default App;

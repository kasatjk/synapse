import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App.jsx';
import '@fontsource-variable/manrope';
import './styles/base.css';
import './styles/layout.css';
import './styles/components.css';
import './styles/EconSector.css';
import './styles/Elephants.css';
import './styles/Europe.css';
import './styles/Netherlands.css';
import './styles/Recreation.css';
import './styles/Scrapie.css';
import './styles/Songs.css';
import './styles/Species.css';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>,
);

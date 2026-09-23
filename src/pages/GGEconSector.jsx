import React from 'react';
import '../styles/GGEconSector.css';
import oil_refinery from '../assets/GGEconSector/oil-refinery.jpg'; 

export default function GeoEconSector() {
  return (
    <div className="geo-card">
      
      {/* Header Section with Main Image */}
      <header 
        className="geo-header" 
        style={{ backgroundImage: `linear-gradient(rgba(15, 23, 42, 0.5), rgba(15, 23, 42, 0.9)), url(${oil_refinery})` }}
      >
        <div className="geo-header-content">
          <h1 className="geo-title">Вторинний сектор економіки</h1>
          <div className="geo-meta">
            <p>
              <strong className="geo-meta-label">Визначення:</strong>{' '}
              Сектор економіки, що охоплює галузі промисловості та виробництва, які перетворюють сировину первинного сектора на готові товари. 
            </p>
          </div>
        </div>
      </header>

      {/* Thematic Division Line */}
      <div className="geo-divider"></div>

      {/* Main Content Section */}
      <main className="geo-main">
        
        {/* Split Section: Features (Left) & ASCII Hierarchy (Right) */}
        <div className="geo-split-container">
          
          {/* Left Column: Features */}
          <div className="geo-features-wrapper geo-stagger-1">
            <h2 className="geo-section-title">Особливості</h2>
            <ul className="geo-feature-list">
              <li><strong>Ресурсна база:</strong> Сировина походження первинного сектора.</li>
              <li><strong>Висока вартість:</strong> Генерує найбільший прибуток в індустріальному суспільстві.</li>
              <li><strong>Людський капітал:</strong> Критична залежність від робочої сили та інженерії.</li>
              <li><strong>Масштабність:</strong> Важка промисловість та найбільші підприємства.</li>
              <li><strong>Необхідність:</strong> Задовольняє потреби суспільства у харчовій, медичній, транспортній та багатьох інших сферах.</li>
            </ul>
          </div>

          {/* Right Column: ASCII Hierarchy */}
          <div className="geo-ascii-wrapper geo-stagger-2">
            <h2 className="geo-section-title">Ієрархія секторів</h2>
            <div className="geo-ascii-art">
              <pre>
{`СВІТОВА ЕКОНОМІКА
 ├── 1. Первинний сектор
 │   └── Видобувна пром-сть
 │
 ├── 2. Вторинний сектор
 │   └── Виробництво товарів
 │
 └── 3. Третинний сектор
     └── Послуги`}
              </pre>
            </div>
          </div>

        </div>

        {/* Analytics Section: Centers and GDP */}
        <div className="geo-analytics-grid geo-stagger-3">
          
          {/* Sector Centers */}
          <div className="geo-card-centers">
            <h4>Глобальні центри сектору:</h4>
            <p>
              <strong>Нафтопереробка:</strong> Китай, США, РФ.<br/>
              <strong>Харчова та медична промисловість:</strong> Італія, Німеччина, США, Китай.<br/>
              <strong>Металургія та машинобудування:</strong> Китай, США, ЄС (особливо Німеччина).
            </p>
          </div>
          
          {/* GDP Impact */}
          <div className="geo-card-gdp">
            <h4>Вплив на ВВП:</h4>
            <p>
              У розвинених країнах вторинний сектор генерує <strong>від 20%</strong> загального ВВП.<br/>
              Забезпечує понад 50% робочих місць у світі, виступаючи головним драйвером економічного зростання.
            </p>
          </div>

        </div>

      </main>
    </div>
  );
}
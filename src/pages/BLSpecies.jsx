import React from 'react';
import '../styles/BLSpecies.css';
import homosapiens0 from '../assets/BLSpecies/homo-sapiens-0.jpg';
import homosapiens1 from '../assets/BLSpecies/homo-sapiens-1.jpg';
import homosapiens2 from '../assets/BLSpecies/homo-sapiens-2.jpg';
import homosapiens3 from '../assets/BLSpecies/homo-sapiens-3.jpg';
import homosapiens4 from '../assets/BLSpecies/homo-sapiens-4.jpg';
import homosapiens5 from '../assets/BLSpecies/homo-sapiens-5.jpg';

export default function BioLabReport() {
  return (
      <div className="lab-card">
        
        {/* Header Section */}
        <header className="lab-header">
          <h1 className="lab-title">Лабораторна робота 1</h1>
          <div className="lab-meta">
            <p>
              <strong className="lab-meta-label">Тема:</strong>{' '}
              Визначення таксономічного положення виду в системі органічного світу.
            </p>
            <p>
              <strong className="lab-meta-label">Мета:</strong>{' '}
              Розвивати уміння застосовувати знання про критерії виду на практиці та формувати практичні уміння характеризувати види.
            </p>
          </div>
        </header>

        {/* Thematic Division Line */}
        <div className="lab-divider"></div>

        {/* Main Content Section */}
        <main className="lab-main">
          <h2 className="lab-section-title">Хід роботи</h2>

          {/* Species Info */}
          <div className="lab-species-container">
            
            {/* Image Grid (Full-bleed on mobile, 2 columns) */}
            <div className="lab-image-wrapper">
              <img src={homosapiens0} alt="Homo sapiens specimen 1" className="lab-image" />
              <img src={homosapiens1} alt="Homo sapiens specimen 2" className="lab-image" />
              <img src={homosapiens2} alt="Homo sapiens specimen 3" className="lab-image" />
              <img src={homosapiens3} alt="Homo sapiens specimen 4" className="lab-image" />
              <img src={homosapiens4} alt="Homo sapiens specimen 5" className="lab-image" />
              <img src={homosapiens5} alt="Homo sapiens specimen 6" className="lab-image" />
            </div>

            {/* Text Information Layout */}
            <div className="lab-content-wrapper">
              
              {/* Nomenclature */}
              <div className="lab-stagger-1">
                <h3 className="lab-species-name">Людина розумна</h3>
                <p className="lab-species-latin">[Homo sapiens]</p>
              </div>

              {/* Taxonomic Position */}
              <div className="lab-taxonomy lab-stagger-2">
                <h4>Таксономічне положення:</h4>
                <ul>
                  <li>Царство: Тварини [Animalia]</li>
                  <li>Тип: Хордові [Chordata]</li>
                  <li>Клас: Ссавці [Mammalia]</li>
                  <li>Ряд: Примати [Primates]</li>
                  <li>Родина: Гомініди [Hominidae]</li>
                  <li>Рід: Людина [Homo]</li>
                </ul>
              </div>

              {/* Comparative Analysis */}
              <div className="lab-comparison-grid lab-stagger-3">
                <div className="lab-card-similar">
                  <h4>Ознаки спорідненості:</h4>
                  <p>
                    Прямохідність, розвиненість мозку, відсутність шерсті тощо.
                  </p>
                </div>
                
                <div className="lab-card-diff">
                  <h4>Ознаки відмінності:</h4>
                  <p>
                    Унікальна здатність до мислення, використання інструментів, розвинена мовна система тощо.
                  </p>
                </div>
              </div>

            </div>
          </div>

          {/* Conclusion Section */}
          <section className="lab-footer lab-stagger-4">
            <h3>Підсумок роботи</h3>
            <p>
              Людина розумна - подібна до споріднених видів, але має унікальні ознаки, найбільше пов'язані з вищим розвитком ЦНС, максимальною відсутністю шерсті, здатністю до абстрактного мислення та планування...
            </p>
          </section>
        </main>
      </div>
  );
}
import '../styles/GGEconSector.css';
import ReportHero from '../components/ReportHero.jsx';
import oil_refinery from '../assets/GGEconSector/oil-refinery.jpg';

export default function GGEconSector() {
  return (
    <article className="report-card">
      <ReportHero
        title="Вторинний сектор економіки"
        backgroundImage={oil_refinery}
        meta={[
          {
            label: 'Визначення',
            text: 'Сектор економіки, що охоплює галузі промисловості та виробництва, які перетворюють сировину первинного сектора на готові товари.',
          },
        ]}
      />

      <div className="report-body geo-body">
        <div className="geo-split-container">
          <div className="geo-features-wrapper geo-stagger-1">
            <h2 className="geo-section-title">Особливості</h2>
            <ul className="geo-feature-list">
              <li>
                <strong>Ресурсна база:</strong> Сировина походження первинного сектора.
              </li>
              <li>
                <strong>Висока вартість:</strong> Генерує найбільший прибуток в індустріальному суспільстві.
              </li>
              <li>
                <strong>Людський капітал:</strong> Критична залежність від робочої сили та інженерії.
              </li>
              <li>
                <strong>Масштабність:</strong> Важка промисловість та найбільші підприємства.
              </li>
              <li>
                <strong>Необхідність:</strong> Задовольняє потреби суспільства у харчовій, медичній, транспортній та багатьох інших сферах.
              </li>
            </ul>
          </div>

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

        <div className="geo-analytics-grid geo-stagger-3">
          <div className="geo-card-centers">
            <h3>Глобальні центри сектору:</h3>
            <ul>
              <li>
                <strong>Нафтопереробка:</strong> Китай, США, РФ.
              </li>
              <li>
                <strong>Харчова та медична промисловість:</strong> Італія, Німеччина, США, Китай.
              </li>
              <li>
                <strong>Металургія та машинобудування:</strong> Китай, США, ЄС (особливо Німеччина).
              </li>
            </ul>
          </div>

          <div className="geo-card-gdp">
            <h3>Вплив на ВВП:</h3>
            <ul>
              <li>
                У розвинених країнах вторинний сектор генерує <strong>від 20%</strong> загального ВВП.
              </li>
              <li>
                Забезпечує понад 50% робочих місць у світі, виступаючи головним драйвером економічного зростання.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </article>
  );
}

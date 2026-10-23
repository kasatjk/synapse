import WorkShell from '../components/WorkShell.jsx';
import Summary from '../components/Summary.jsx';
import oil_refinery from '../assets/GGEconSector/oil-refinery.webp';
import '../styles/EconSector.css';

export default function EconSector() {
  return (
    <WorkShell
      title="Вторинний сектор економіки"
      backgroundImage={oil_refinery}
      bodyClassName="geo-body"
      meta={[
        {
          label: 'Визначення',
          text: 'Сектор економіки, що охоплює галузі переробної промисловості, будівництва та виробництва, які перетворюють первинну сировину на готову продукцію.',
        },
      ]}
    >
      <div className="geo-split-container">
        <div className="geo-features-wrapper geo-stagger-1">
          <h2 className="report-section-title">Особливості</h2>
          <ul className="geo-feature-list">
            <li>
              <strong>Ресурсна база:</strong> Сировина первинного сектора (руди, нафта, агросировина).
            </li>
            <li>
              <strong>Висока додана вартість:</strong> Генерує основу промислового прибутку індустріальних та постіндустріальних держав.
            </li>
            <li>
              <strong>Людський капітал:</strong> Критична залежність від кваліфікованої інженерної та робітничої сили.
            </li>
            <li>
              <strong>Масштабність:</strong> Охоплює енергетику, важку металургію, машинобудування та хімічні кластери.
            </li>
            <li>
              <strong>Життєва необхідність:</strong> Забезпечує суспільство машинами, ліками, продовольством і будматеріалами.
            </li>
          </ul>
        </div>

        <div className="geo-ascii-wrapper geo-stagger-2">
          <h2 className="report-section-title">Ієрархія секторів</h2>
          <div className="geo-ascii-art">
            <pre>
{`СВІТОВА ЕКОНОМІКА
 ├── 1. Первинний сектор
 │   └── Видобувна пром-сть, с/г
 │
 ├── 2. Вторинний сектор
 │   └── Переробка та виробництво
 │
 └── 3. Третинний сектор
     └── Сфера послуг та технології`}
            </pre>
          </div>
        </div>
      </div>

      <div className="geo-analytics-grid geo-stagger-3">
        <div className="geo-card-centers">
          <h3>Глобальні центри сектору:</h3>
          <ul>
            <li>
              <strong>Нафтопереробка:</strong> США, Китай, Саудівська Аравія.
            </li>
            <li>
              <strong>Харчова та медична промисловість:</strong> Німеччина, США, Італія, Швейцарія.
            </li>
            <li>
              <strong>Металургія та машинобудування:</strong> Китай, Німеччина, Японія, США, Південна Корея.
            </li>
          </ul>
        </div>

        <div className="geo-card-gdp">
          <h3>Вплив на ВВП:</h3>
          <ul>
            <li>
              У розвинених країнах вторинний сектор генерує <strong>від 20% до 30%</strong> загального ВВП.
            </li>
            <li>
              Слугує технологічним локомотивом для третинного сектора (логістика, проєктування, сервіс).
            </li>
          </ul>
        </div>
      </div>

      <Summary title="Підсумок">
        <p>
          Вторинний сектор є ключовим індикатором індустріальної зрілості та суверенітету держави.
          Сучасний тренд полягає в переорієнтації на високі технології (Industry 4.0, автоматизація,
          роботизація) та екологізацію технологічних циклів (зелена металургія, циркулярна економіка).
        </p>
      </Summary>
    </WorkShell>
  );
}

import WorkShell from '../components/WorkShell.jsx';
import Summary from '../components/Summary.jsx';
import oil_refinery from '../assets/GGEconSector/oil-refinery.webp';
import xi from '../assets/GGEconSector/xi-jinping.jpg';
import '../styles/EconSector.css';

export default function EconSector() {
  return (
    <WorkShell
      title="Вторинний сектор економіки: Азія"
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
          <h2 className="report-section-title">Напрямки</h2>
          <ul className="geo-feature-list">
            <li>
              <strong>Хімічний:</strong> Нафтопереробка, ліки, харчові продукти тощо.
            </li>
            <li>
              <strong>Машинобудівний:</strong> Турбіни, двигуни, сталеві конструкції, крани, дрібні компоненти, як шестерні.
            </li>
            <li>
              <strong>Високотехнологічний:</strong> Новітні процесори, карти пам'яті, цифрові пристрої, схеми автоматизації.
            </li>
            <li>
              <strong>Текстильний + дрібні товари:</strong> Тканини, одяг, взуття, меблі, іграшки тощо.
            </li>
          </ul>
        </div>
        <div className="geo-features-wrapper geo-stagger-1">
          <h2 className="report-section-title">Особливості</h2>
          <ul className="geo-feature-list">
            <li>
              <strong>Ресурсна база:</strong> Сировина первинного сектора: нафта, руда, шовк, деревина, органіка...
            </li>
            <li>
              <strong>Висока додана вартість:</strong> Генерує основу прибутку індустріальних держав.
            </li>
            <li>
              <strong>Людський капітал:</strong> Критична залежність від робітничої сили.
            </li>
            <li>
              <strong>Масштабність:</strong> Охоплює енергетику, важку металургію, машинобудування та багато іншого.
            </li>
          </ul>
        </div>
      </div>

      <div className="geo-analytics-grid geo-stagger-3">
        <div className="geo-card-centers">
          <h3>Азійські центри сектору:</h3>
          <ul>
            <li>
              <strong>Нафтопереробка:</strong> Китай, Саудівська Аравія, ОАЕ.
            </li>
            <li>
              <strong>Харчова та фармацевтична промисловість:</strong> Китай, Японія, Індія.
            </li>
            <li>
              <strong>Металургія та машинобудування:</strong> Китай, Пд Корея, В'єтнам.
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

      <img src={xi} alt="Xi Jinping" />

      <Summary title="Підсумок">
        <p>
          Вторинний сектор є ключовим індикатором індустріальної зрілості та суверенітету держави.
          Сучасний тренд полягає в переорієнтації на високі технології (Industry 4.0, автоматизація,
          роботизація) та екологізацію технологічних циклів (зелена металургія, циркулярна економіка).
          Специфічно для Азії безумовний лідер - Китай.
        </p>
      </Summary>
    </WorkShell>
  );
}

import Summary from '../components/Summary.jsx';
import WorkShell from '../components/WorkShell.jsx';
import map from '../assets/Europe/map.png';

const legendItems = [
  'Держави-карлики',
  'Ісландія — найнижча густота населення',
  'Монако — найвища густота населення',
];

const statistics = [
  { label: 'Населення', value: '743 млн' },
  { label: 'Густота населення', value: '72 осіб/км²' },
  { label: 'Найвища густота', value: 'Монако' },
  { label: 'Найнижча густота', value: 'Ісландія' },
];

export default function Europe() {
  return (
    <article className="report-card europe-page" data-subject="geography">
      <WorkShell title="Практична робота" subtitle="Населення Європи на карті" />

      <div className="report-body europe-body">
        <figure className="europe-feature-image">
          <div className="europe-feature-image-visual">
            <img src={map} alt="Мапа Європи" />
          </div>
          <figcaption>Карта Європи</figcaption>
        </figure>

        <div className="europe-overview">
          <section className="europe-panel" aria-labelledby="europe-legend-title">
            <h2 id="europe-legend-title">Легенда карти</h2>
            <ul className="europe-legend-list">
              {legendItems.map((item, index) => (
                <li key={item}>
                  <span
                    className={`europe-legend-swatch europe-legend-swatch--${index + 1}`}
                    aria-hidden="true"
                  />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </section>

          <section className="europe-panel" aria-labelledby="europe-statistics-title">
            <h2 id="europe-statistics-title">Коротко про регіон</h2>
            <dl className="europe-statistics">
              {statistics.map(({ label, value }) => (
                <div className="europe-statistic" key={label}>
                  <dt>{label}</dt>
                  <dd>{value}</dd>
                </div>
              ))}
            </dl>
          </section>
        </div>

        <Summary title="Висновок">
          <p>Європа - дуже різноманітний регіон з диференційованими географічними та культурними характеристиками, також густиною населення та державами-карликами.</p>
        </Summary>
      </div>
    </article>
  );
}

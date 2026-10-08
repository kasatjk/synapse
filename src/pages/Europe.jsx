import Summary from '../components/Summary.jsx';
import WorkShell from '../components/WorkShell.jsx';
import map from '../assets/Europe/map.png';

const legendItems = [
  'Позначення 1 — додати опис',
  'Позначення 2 — додати опис',
  'Позначення 3 — додати опис',
  'Позначення 4 — додати опис',
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
      <WorkShell title="Європа" />

      <div className="report-body europe-body">
        <figure className="europe-image-placeholder">
          <div
            className="europe-image-placeholder-visual"
            role="img"
            aria-label="Місце для широкого зображення Європи"
          >
            <img src={map} alt="Мапа Європи" />
          </div>
          <figcaption>Зображення буде додано</figcaption>
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
          <p>Місце для висновку. Додайте перевірену інформацію.</p>
        </Summary>
      </div>
    </article>
  );
}

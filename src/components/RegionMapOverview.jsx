import Summary from './Summary.jsx';
import WorkShell from './WorkShell.jsx';
import '../styles/RegionMapOverview.css';

export default function RegionMapOverview({
  title = 'Практична робота',
  subtitle,
  mapSrc,
  mapAlt,
  mapCaption,
  legendItems = [],
  statistics = [],
  summaryText,
}) {
  return (
    <WorkShell title={title} subtitle={subtitle} bodyClassName="region-overview-body">
      <figure className="region-feature-image">
        <div className="region-feature-image-visual">
          <img src={mapSrc} alt={mapAlt} loading="lazy" decoding="async" />
        </div>
        <figcaption>{mapCaption}</figcaption>
      </figure>

      <div className="region-overview-grid">
        <section className="region-panel" aria-labelledby="region-legend-title">
          <h2 id="region-legend-title" className="region-panel-title">Легенда карти</h2>
          <ul className="region-legend-list">
            {legendItems.map((item, index) => (
              <li key={item.label || item}>
                <span
                  className="region-legend-swatch"
                  style={{ backgroundColor: item.color || undefined }}
                  data-swatch-index={index + 1}
                  aria-hidden="true"
                />
                <span>{item.label || item}</span>
              </li>
            ))}
          </ul>
        </section>

        <section className="region-panel" aria-labelledby="region-statistics-title">
          <h2 id="region-statistics-title" className="region-panel-title">Коротко про регіон</h2>
          <dl className="region-statistics">
            {statistics.map(({ label, value }) => (
              <div className="region-statistic" key={label}>
                <dt>{label}</dt>
                <dd>{value}</dd>
              </div>
            ))}
          </dl>
        </section>
      </div>

      {summaryText ? (
        <Summary title="Висновок">
          <p>{summaryText}</p>
        </Summary>
      ) : null}
    </WorkShell>
  );
}

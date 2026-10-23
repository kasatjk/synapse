import Summary from '../components/Summary.jsx';
import WorkShell from '../components/WorkShell.jsx';
import map from '../assets/Asia/map.png';

const legendItems = [
  'Монголія - найнижча густота населення',
  'Макао - найвища густота населення',
  'Бруней - найменше населення',
  'Індія - найбільше населення',
];

const statistics = [
  { label: 'Населення', value: '4,835 млрд' },
  { label: 'Густота населення', value: '110 осіб/км²' },
  { label: 'Найвища густота', value: 'Макао' },
  { label: 'Найнижча густота', value: 'Монголія' },
];

export default function Asia() {
  return (
    <article className="report-card asia-page" data-subject="geography">
      <WorkShell title="Практична робота" subtitle="Населення Азії на карті" />

      <div className="report-body asia-body">
        <figure className="asia-feature-image">
            <img src={map} alt="Мапа Азії" />
          <figcaption>Карта Азії</figcaption>
        </figure>

        <div className="asia-overview">
          <section className="asia-panel" aria-labelledby="asia-legend-title">
            <h2 id="asia-legend-title">Легенда карти</h2>
            <ul className="asia-legend-list">
              {legendItems.map((item, index) => (
                <li key={item}>
                  <span
                    className={`asia-legend-swatch asia-legend-swatch--${index + 1}`}
                    aria-hidden="true"
                  />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </section>

          <section className="asia-panel" aria-labelledby="asia-statistics-title">
            <h2 id="asia-statistics-title">Коротко про регіон</h2>
            <dl className="asia-statistics">
              {statistics.map(({ label, value }) => (
                <div className="asia-statistic" key={label}>
                  <dt>{label}</dt>
                  <dd>{value}</dd>
                </div>
              ))}
            </dl>
          </section>
        </div>

        <Summary title="Висновок">
          <p>Азія є найбільшим континентом за площею і населенням. Завдяки надзвичайному різноманіттю кліматичних умов і природних ресурсів, населення та умови в різних регіонах сильно відрізняються. Наприклад, Монголія має найнижчу густоту населення, тоді як Макао - найвищу. Індія та Бруней відповідають за найбільше та найменше населення відповідно. Це спричинено тим, що Монголія - холодний степ без ресурсів, а Бруней - мала островна держава. Індія має різноманітні умови, приємні для життя. Макао - дуже мала та урбанізована держава, що збільшує її густоту населення.</p>
        </Summary>
      </div>
    </article>
  );
}

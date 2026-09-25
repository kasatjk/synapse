import '../styles/BLSpecies.css';
import ReportHero from '../components/ReportHero.jsx';
import SummaryBlock from '../components/SummaryBlock.jsx';
import homosapiens0 from '../assets/BLSpecies/homo-sapiens-0.jpg';
import homosapiens1 from '../assets/BLSpecies/homo-sapiens-1.jpg';
import homosapiens2 from '../assets/BLSpecies/homo-sapiens-2.jpg';
import homosapiens3 from '../assets/BLSpecies/homo-sapiens-3.jpg';
import homosapiens4 from '../assets/BLSpecies/homo-sapiens-4.jpg';
import homosapiens5 from '../assets/BLSpecies/homo-sapiens-5.jpg';

const specimens = [
  { src: homosapiens0, alt: 'Людина розумна, зразок 1' },
  { src: homosapiens1, alt: 'Людина розумна, зразок 2' },
  { src: homosapiens2, alt: 'Людина розумна, зразок 3' },
  { src: homosapiens3, alt: 'Людина розумна, зразок 4' },
  { src: homosapiens4, alt: 'Людина розумна, зразок 5' },
  { src: homosapiens5, alt: 'Людина розумна, зразок 6' },
];

export default function BLSpecies() {
  return (
    <article className="report-card">
      <ReportHero
        title="Лабораторна робота 1"
        meta={[
          {
            label: 'Тема',
            text: 'Визначення таксономічного положення виду в системі органічного світу.',
          },
          {
            label: 'Мета',
            text: 'Розвивати уміння застосовувати знання про критерії виду на практиці та формувати практичні уміння характеризувати види.',
          },
        ]}
      />

      <div className="report-body">
        <h2 className="lab-section-title">Хід роботи</h2>

        <div className="lab-species-container">
          <div className="lab-image-wrapper">
            {specimens.map((item) => (
              <img key={item.src} src={item.src} alt={item.alt} className="lab-image" />
            ))}
          </div>

          <div className="lab-content-wrapper">
            <div className="lab-stagger-1">
              <h3 className="lab-species-name">Людина розумна</h3>
              <p className="lab-species-latin">[Homo sapiens]</p>
            </div>

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

            <div className="lab-comparison-grid lab-stagger-3">
              <div className="lab-card-similar">
                <h4>Ознаки спорідненості:</h4>
                <p>Прямохідність, розвиненість мозку, відсутність шерсті тощо.</p>
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

        <SummaryBlock title="Підсумок роботи">
          <p>
            Людина розумна - подібна до споріднених видів, але має унікальні ознаки, найбільше пов'язані з вищим розвитком ЦНС, максимальною відсутністю шерсті, здатністю до абстрактного мислення та планування...
          </p>
        </SummaryBlock>
      </div>
    </article>
  );
}

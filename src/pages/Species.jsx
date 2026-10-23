import WorkShell from '../components/WorkShell.jsx';
import Summary from '../components/Summary.jsx';
import homosapiens0 from '../assets/BLSpecies/homo-sapiens-0.webp';
import homosapiens1 from '../assets/BLSpecies/homo-sapiens-1.webp';
import homosapiens2 from '../assets/BLSpecies/homo-sapiens-2.webp';
import homosapiens3 from '../assets/BLSpecies/homo-sapiens-3.webp';
import homosapiens4 from '../assets/BLSpecies/homo-sapiens-4.webp';
import homosapiens5 from '../assets/BLSpecies/homo-sapiens-5.webp';
import '../styles/Species.css';

const specimens = [
  { src: homosapiens0, alt: 'Людина розумна, портретний зразок 1' },
  { src: homosapiens1, alt: 'Людина розумна, портретний зразок 2' },
  { src: homosapiens2, alt: 'Людина розумна, портретний зразок 3' },
  { src: homosapiens3, alt: 'Людина розумна, портретний зразок 4' },
  { src: homosapiens4, alt: 'Людина розумна, портретний зразок 5' },
  { src: homosapiens5, alt: 'Людина розумна, портретний зразок 6' },
];

export default function Species() {
  return (
    <WorkShell
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
    >
      <h2 className="report-section-title">Хід роботи</h2>

      <div className="lab-species-container">
        <div className="lab-image-wrapper">
          {specimens.map((item) => (
            <img
              key={item.src}
              src={item.src}
              alt={item.alt}
              className="lab-image"
              loading="lazy"
              decoding="async"
            />
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
              <p>Прямохідність, розвиненість кори головного мозку, редукований волосяний покрив тощо.</p>
            </div>

            <div className="lab-card-diff">
              <h4>Ознаки відмінності:</h4>
              <p>
                Здатність до понятійного мислення, виготовлення знарядь праці за допомогою інших знарядь, розвинена членороздільна мова.
              </p>
            </div>
          </div>
        </div>
      </div>

      <Summary title="Підсумок роботи">
        <p>
          Людина розумна (Homo sapiens) є представником хордових ссавців ряду приматів. Вона має
          значну анатомічну та генетичну подібність до інших гомінідів, проте вирізняється
          унікальним розвитком вищої нервової діяльності, соціальною структурою, прямоходінням
          та здатністю до свідомої творчої праці.
        </p>
      </Summary>
    </WorkShell>
  );
}

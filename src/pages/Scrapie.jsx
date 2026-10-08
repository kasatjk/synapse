import WorkShell from '../components/WorkShell.jsx';
import Summary from '../components/Summary.jsx';
import sheep from '../assets/Scrapie/sheep.jpg';

const mechanisms = [
  'Збудником є пріон PrPSc, який змінює нормальну форму клітинного білка PrPC.',
  'Аномальний білок накопичується в нейронах, порушуючи їхню нормальну роботу.',
  'Ураження нервової системи призводить до прогресуючої дегенерації і загибелі тканин.',
];

const symptoms = [
  'Сильний свербіж, особливо в ділянці шиї, хребта та крупа.',
  'Підвищена збудливість, нервовість, порушення рухової координації.',
  'Втрата ваги, слабкість, виснаження та поступове погіршення загального стану.',
];

const transmission = [
  'Зараження відбувається через контакт із інфікованими тканинами, шерстю, слиною та навколишнім середовищем.',
  'Ризику піддаються вівці та кози, особливо при спільному утриманні.',
  'Пріони дуже стійкі до впливу зовнішніх факторів, тому їх складно елімінувати.',
];

const prevention = [
  'Профілактика базується на вибракуванні хворих тварин, контролі стада та санітарних заходах.',
  'Запобігають контакту здорових тварин з інфікованим біоматеріалом.',
  'Відповідальне ведення господарства знижує ризик поширення захворювання.',
];

export default function Scrapie() {
  return (
    <article className="report-card">
      <WorkShell
        title="Скрепі"
        subtitle="Пріонне захворювання овець і кіз"
        backgroundImage={sheep}
      />

      <div className="report-body scrapie-body">
        <section className="scrapie-intro">
          <h2 className="scrapie-section-title">Що таке Скрепі</h2>
          <p>
            Скрепі (Scrapie) — це інфекційне захворювання овець і кіз, яке вражає нервову систему.
            Воно належить до пріонних хвороб, тому патоген не містить нуклеїнових кислот,
            а є аномальною формою природного білка, що утворюється в клітинах мозку.
          </p>
        </section>

        <div className="scrapie-grid">
          <Summary title="Механізм розвитку">
            <ul className="scrapie-list">
              {mechanisms.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </Summary>

          <Summary title="Клінічні ознаки">
            <ul className="scrapie-list">
              {symptoms.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </Summary>
        </div>

        <div className="scrapie-grid">
          <Summary title="Шляхи передавання">
            <ul className="scrapie-list">
              {transmission.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </Summary>

          <Summary title="Профілактика і контроль">
            <ul className="scrapie-list">
              {prevention.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </Summary>
        </div>

        <Summary title="Підсумок">
          <p>
            Scrapie є важливим прикладом пріонного захворювання, що демонструє, як зміна
            структури білка може спричинити руйнування нервової системи. Для сільського
            господарства важливо вчасно виявляти хворих тварин і застосовувати профілактичні
            заходи, щоб обмежити поширення інфекції в стаді.
          </p>
        </Summary>
      </div>
    </article>
  );
}

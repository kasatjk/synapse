import '../styles/Scrapie.css';
import ReportHero from '../components/ReportHero.jsx';
import SummaryBlock from '../components/SummaryBlock.jsx';
import sheep from '../../dist/assets/sheep.jpg';

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
      <ReportHero
        title="Scrapie"
        subtitle="Пріонне захворювання овець і кіз"
        backgroundImage={sheep}
      />

      <div className="report-body scrapie-body">
        <section className="scrapie-intro">
          <h2 className="scrapie-section-title">Що таке Scrapie</h2>
          <p>
            Scrapie (Скрепі) — це інфекційне захворювання овець і кіз, яке вражає нервову систему.
            Воно належить до пріонних хвороб, тому патоген не містить нуклеїнових кислот,
            а є аномальною формою природного білка, що утворюється в клітинах мозку.
          </p>
        </section>

        <div className="scrapie-grid">
          <SummaryBlock title="Механізм розвитку">
            <ul className="scrapie-list">
              {mechanisms.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </SummaryBlock>

          <SummaryBlock title="Клінічні ознаки">
            <ul className="scrapie-list">
              {symptoms.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </SummaryBlock>
        </div>

        <div className="scrapie-grid">
          <SummaryBlock title="Шляхи передавання">
            <ul className="scrapie-list">
              {transmission.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </SummaryBlock>

          <SummaryBlock title="Профілактика і контроль">
            <ul className="scrapie-list">
              {prevention.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </SummaryBlock>
        </div>

        <SummaryBlock title="Підсумок">
          <p>
            Scrapie є важливим прикладом пріонного захворювання, що демонструє, як зміна
            структури білка може спричинити руйнування нервової системи. Для сільського
            господарства важливо вчасно виявляти хворих тварин і застосовувати профілактичні
            заходи, щоб обмежити поширення інфекції в стаді.
          </p>
        </SummaryBlock>
      </div>
    </article>
  );
}

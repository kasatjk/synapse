import '../styles/BTElephants.css';
import ReportHero from '../components/ReportHero.jsx';
import elephant from '../assets/BTElephants/elephant.avif';

const rows = [
  {
    criterion: 'Морфологічний',
    savanna: ['Великі вуха', 'Увігнута спина', 'Бивні розвинені у всіх особин'],
    indian: ['Малі вуха', 'Пряма спина', 'Бивні розвинені у самців'],
  },
  {
    criterion: 'Каріотипічний',
    savanna: ['Абсолютно ідентичні', 'Диплоїдний набір 56 хромосом'],
    indian: ['-=-'],
  },
  {
    criterion: 'Фізіологічний',
    savanna: ['Ідентичні', 'Травоїдні', '60-70 років', 'Вагітність триває 22 місяці'],
    indian: ['-=-'],
  },
  {
    criterion: 'Репродуктивний',
    savanna: [
      'Природне схрещування відсутнє',
      'Географічно не контактують',
      'Єдиний відомий гібрид (1978) був нежиттєздатний',
    ],
    indian: ['-=-'],
  },
  {
    criterion: 'Біохімічний',
    savanna: [
      'Базові білкові структури спільні',
      'Значна розбіжність макромолекул',
      'Підтверджує розходження їх ліній 7,6 млн років тому',
    ],
    indian: ['-=-'],
  },
  {
    criterion: 'Географічний',
    savanna: ['Ендемік Африки', 'Південно-східна Африка'],
    indian: ['Країни Пд та Пд-Сх Азії', 'Індія, Шрі-Ланка, Суматра тощо'],
  },
  {
    criterion: 'Екологічний',
    savanna: ['Відкриті ландшафти', 'Савани, напівпустелі', "В раціоні переважає трав'яниста рослинність"],
    indian: ['Густі тропічні ліси', 'Субтропічні ліси', 'В раціоні переважають пагони та листя'],
  },
];

function CellList({ items }) {
  return (
    <ul className="bt-cell-list">
      {items.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  );
}

export default function BTElephants() {
  return (
    <article className="report-card">
      <ReportHero
        title="Слони"
        subtitle="Порівняння слона саванного та індійського"
        backgroundImage={elephant}
        align="center"
      />

      <div className="report-body bt-body">
        <table className="bt-table">
          <thead>
            <tr className="bt-table-header-row">
              <th className="bt-th" scope="col">
                Критерії
              </th>
              <th className="bt-th" scope="col">
                Слон саванний
              </th>
              <th className="bt-th" scope="col">
                Слон індійський
              </th>
            </tr>
          </thead>
          <tbody>
            {rows.map((row) => (
              <tr key={row.criterion}>
                <th className="bt-td bt-td-title" data-label="Критерій" scope="row">
                  {row.criterion}
                </th>
                <td className="bt-td" data-label="Слон саванний">
                  <CellList items={row.savanna} />
                </td>
                <td className="bt-td" data-label="Слон індійський">
                  <CellList items={row.indian} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </article>
  );
}

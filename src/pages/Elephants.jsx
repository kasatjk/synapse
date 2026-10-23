import WorkShell from '../components/WorkShell.jsx';
import Summary from '../components/Summary.jsx';
import elephant from '../assets/BTElephants/elephant.avif';
import '../styles/Elephants.css';

const rows = [
  {
    criterion: 'Морфологічний',
    savanna: ['Великі вуха', 'Увігнута спина', 'Бивні розвинені у всіх особин'],
    indian: ['Малі вуха', 'Пряма спина', 'Бивні розвинені у самців'],
  },
  {
    criterion: 'Каріотипічний',
    savanna: ['Диплоїдний набір 56 хромосом'],
    indian: ['-=-'],
  },
  {
    criterion: 'Фізіологічний',
    savanna: ['Травоїдні', 'Тривалість життя 60-70 років', 'Вагітність триває 22 місяці'],
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
      'Підтверджує розходження ліній ~7,6 млн років тому',
    ],
    indian: ['-=-'],
  },
  {
    criterion: 'Географічний',
    savanna: ['Ендемік Африки', 'Південно-східна та Центральна Африка'],
    indian: ['Країни Південної та Південно-Східної Азії', 'Індія, Шрі-Ланка, Суматра тощо'],
  },
  {
    criterion: 'Екологічний',
    savanna: ['Відкриті ландшафти', 'Савани, напівпустелі', "У раціоні переважає трав'яниста рослинність"],
    indian: ['Густі тропічні та субтропічні ліси', 'У раціоні переважають пагони та листя'],
  },
];

function CellList({ items }) {
  return (
    <ul className="bt-cell-list">
      {items.map((item) => (
        <li key={item}>
          {item === '-=-' ? (
            <span className="bt-same-badge" aria-label="Аналогічно саванному слону">
              Аналогічно
            </span>
          ) : (
            item
          )}
        </li>
      ))}
    </ul>
  );
}

export default function Elephants() {
  return (
    <WorkShell
      title="Слони"
      subtitle="Порівняння слона саванного та індійського"
      backgroundImage={elephant}
      align="center"
      bodyClassName="bt-body"
    >
      <table className="bt-table">
        <thead>
          <tr className="bt-table-header-row">
            <th className="bt-th" scope="col">
              Критерії
            </th>
            <th className="bt-th" scope="col">
              Слон саванний (Loxodonta africana)
            </th>
            <th className="bt-th" scope="col">
              Слон індійський (Elephas maximus)
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

      <Summary title="Підсумок порівняння">
        <p>
          Слон саванний та слон індійський належать до різних родів родини слонових. Незважаючи на
          спільний каріотип (56 хромосом) та схожі фізіологічні характеристики (тривалість вагітності та життя),
          вони мають чіткі морфологічні, географічні та екологічні критерії розрізнення, а репродуктивна
          ізоляція підтверджує самостійність обох біологічних видів.
        </p>
      </Summary>
    </WorkShell>
  );
}

import React from 'react';
import '../styles/BTElephants.css';

const mainHeaderBg = "https://images.unsplash.com/photo-1557050543-4d5f4e07ef46?auto=format&fit=crop&q=80&w=1600";

export default function BTElephants() {
  return (
    <article className="bt-card">
      
      <header 
        className="bt-header" 
        style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.8)), url(${mainHeaderBg})` }}
      >
        <div className="bt-header-content">
          <h1 className="bt-title">Слони</h1>
          <p className="bt-subtitle">Порівняння слона саванного та індійського</p>
        </div>
      </header>

      <main className="bt-main">
        <table className="bt-table">
          
          <thead>
            <tr 
              className="bt-table-header-row" 
              style={{ backgroundImage: `linear-gradient(rgba(46, 125, 50, 0.85), rgba(46, 125, 50, 0.95))` }}
            >
              <th className="bt-th">Критерії</th>
              <th className="bt-th">Слон саванний</th>
              <th className="bt-th">Слон індійський</th>
            </tr>
          </thead>
          
          <tbody>
            <tr>
              <td className="bt-td bt-td-title" data-label="Критерій"><strong>Морфологічний</strong></td>
              <td className="bt-td" data-label="Слон саванний">- Великі вуха <br /> - Увігнута спина <br /> - Бивні розвинені у всіх особин</td>
              <td className="bt-td" data-label="Слон індійський">- Малі вуха <br /> - Пряма спина <br /> - Бивні розвинені у самців</td>
            </tr>
            <tr>
              <td className="bt-td bt-td-title" data-label="Критерій"><strong>Каріотипічний</strong></td>
              <td className="bt-td" data-label="Слон саванний">- Абсолютно ідентичні  <br /> - Диплоїдний набір 56 хромосом</td>
              <td className="bt-td" data-label="Слон індійський">-=-</td>
            </tr>
            <tr>
              <td className="bt-td bt-td-title" data-label="Критерій"><strong>Фізіологічний</strong></td>
              <td className="bt-td" data-label="Слон саванний">- Ідентичні <br /> - Травоїдні <br /> - 60-70 років <br /> - Вагітність триває 22 місяці</td>
              <td className="bt-td" data-label="Слон індійський">-=-</td>
            </tr>
            <tr>
              <td className="bt-td bt-td-title" data-label="Критерій"><strong>Репродуктивний</strong></td>
              <td className="bt-td" data-label="Слон саванний">- Природне схрещування відсутнє <br /> - Географічно не контактують <br /> - Єдиний відомий гібрид (1978) був нежиттєздатний</td>
              <td className="bt-td" data-label="Слон індійський">-=-</td>
            </tr>
            <tr>
              <td className="bt-td bt-td-title" data-label="Критерій"><strong>Біохімічний</strong></td>
              <td className="bt-td" data-label="Слон саванний">- Базові білкові структури спільні <br /> - Значна розбіжність макромолекул <br /> - Підтверджує розходження їх ліній 7,6 млн років тому</td>
              <td className="bt-td" data-label="Слон індійський">-=-</td>
            </tr>
            <tr>
              <td className="bt-td bt-td-title" data-label="Критерій"><strong>Географічний</strong></td>
              <td className="bt-td" data-label="Слон саванний">- Ендемік Африки <br /> - Південно-східна Африка</td>
              <td className="bt-td" data-label="Слон індійський">- Країни Пд та Пд-Сх Азії <br /> - Індія, Шрі-Ланка, Суматра тощо</td>
            </tr>
            <tr>
              <td className="bt-td bt-td-title" data-label="Критерій"><strong>Екологічний</strong></td>
              <td className="bt-td" data-label="Слон саванний">- Відкриті ландшафти <br /> - Савани, напівпустелі <br /> - В раціоні переважає трав'яниста рослинність</td>
              <td className="bt-td" data-label="Слон індійський">- Густі тропічні ліси <br /> - Субтропічні ліси <br /> - В раціоні переважають пагони та листя</td>
            </tr>
          </tbody>

        </table>
      </main>
      
    </article>
  );
}
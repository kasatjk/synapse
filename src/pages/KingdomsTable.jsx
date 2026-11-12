import WorkShell from "../components/WorkShell.jsx";
import Summary from "../components/Summary.jsx";
import "../styles/KingdomsTable.css";
import tree from "../assets/KingdomsTable/tree.jpg";

const kingdoms = ["Зелені рослини", "Справжні гриби", "Справжні тварини"];

const rows = [
  {
    feature: "Кристи мітохондрій",
    values: ["Пластинчасті", "Пластинчасті", "Пластинчасті"],
  },
  {
    feature: "Види хлоропластів і пігменти",
    values: [
      "Двомембранні хлоропласти, містять хлорофіли",
      "Власні відсутні",
      "Власні відсутні",
    ],
  },
  {
    feature: "Джгутики (кількість і розташування)",
    values: [
      "Два джгутики (у джгутикових стадій / Діафоретики)",
      "Один задній джгутик (втрачений у більшості вищих груп / Опістоконти)",
      "Один задній джгутик (Опістоконти / Задньоджгутикові)",
    ],
  },
  {
    feature: "Тіло",
    values: [
      "Одноклітинні, колоніальні та багатоклітинні ( тканини та вегетативні органи у вищих рослин)",
      "Здебільшого міцеліальне, одноклітинне або макроміцети без чітко виражених тканин",
      "Одноклітинні, колоніальні та розвинені багатоклітинні з тканинами й органами",
    ],
  },
  {
    feature: "Тип живлення",
    values: ["Автотрофне (фотосинтез)", "Гетеротрофне", "Гетеротрофне"],
  },
  {
    feature: "Основні групи",
    values: [
      "Хлорофіти (зелені водорості) та Стрептофіти (харові водорості, Мохоподібні, Насіннєві)",
      "Хитридіомікоти, Зигомікоти, Аскомікоти, Базидіомікоти",
      "Філастерії, Комірцеві джгутикові (Хоанофлагеляти), Багатоклітинні тварини",
    ],
  },
];

export default function KingdomsTable() {
  return (
    <WorkShell
      title="Порівняння царств"
      subtitle="Зелені рослини · справжні гриби · справжні тварини"
      bodyClassName="kingdoms-body"
      backgroundImage={tree}
    >
      <section aria-labelledby="kingdoms-table-title">
        <div className="kingdoms-intro">
          <p className="kingdoms-eyebrow">Порівняльна характеристика</p>
          <h2 id="kingdoms-table-title" className="report-section-title">
            Основні ознаки
          </h2>
        </div>

        <div className="kingdoms-table-wrap">
          <table className="kingdoms-table">
            <caption className="sr-only">
              Порівняння зелених рослин, справжніх грибів і справжніх тварин
            </caption>
            <thead>
              <tr>
                <th scope="col">Ознака</th>
                {kingdoms.map((kingdom) => (
                  <th key={kingdom} scope="col">
                    {kingdom}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {rows.map(({ feature, values }) => (
                <tr key={feature}>
                  <th scope="row" data-label="Ознака">
                    {feature}
                  </th>
                  {values.map((value, index) => (
                    <td key={kingdoms[index]} data-label={kingdoms[index]}>
                      {value}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <Summary title="Коротко про відмінності">
        <p>
          Зелені рослини мають хлоропласти та фотоавтотрофний тип живлення.
          Справжні гриби й тварини не мають власних хлоропластів, проте
          відрізняються способом отримання поживних речовин: гетеротрофним.
        </p>
      </Summary>
    </WorkShell>
  );
}

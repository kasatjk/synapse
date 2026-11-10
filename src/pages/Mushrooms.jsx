import { useState } from "react";
import WorkShell from "../components/WorkShell.jsx";
import Summary from "../components/Summary.jsx";

import coprinopsis1 from "../assets/Mushrooms/coprinopsis-1.webp";
import coprinopsis2 from "../assets/Mushrooms/coprinopsis-2.webp";
import mycena1 from "../assets/Mushrooms/mycena-1.webp";
import mycena2 from "../assets/Mushrooms/mycena-2.webp";
import mycena3 from "../assets/Mushrooms/mycena-3.webp";

import "../styles/Mushrooms.css";

const mushroomsData = [
  {
    id: "coprinopsis-pulchricaerulea",
    name: "Копринопсис красивоголубий",
    latinName: "Coprinopsis pulchricaerulea",
    accentColor: "#0ea5e9",
    badge: "Блакитний делікесцентний гриб",
    overview:
      "Рідкісний базидієвий гриб родини псатирелових, що вражає яскравим небесно-блакитним або бірюзовим порошкоподібним нальотом на шапинці у молодому віці та характерним явищем автолізу пластинок.",
    photos: [
      {
        src: coprinopsis1,
        alt: "Coprinopsis pulchricaerulea — плодове тіло з ніжним бірюзово-блакитним нальотом",
        caption: "Coprinopsis pulchricaerulea",
      },
      {
        src: coprinopsis2,
        alt: "Coprinopsis pulchricaerulea крупним планом у вологому субтропічному лісі",
        caption: "Мікроструктура шапинки",
      },
    ],
    taxonomy: [
      { rank: "Царство", name: "Гриби", latin: "Fungi" },
      { rank: "Відділ", name: "Базидіомікотові", latin: "Basidiomycota" },
      { rank: "Підвідділ", name: "Аґарикомікоти", latin: "Agaricomycotina" },
      { rank: "Клас", name: "Аґарикоміцети", latin: "Agaricomycetes" },
      { rank: "Підклас", name: "Аґарикоміцетові", latin: "Agaricomycetidae" },
      { rank: "Порядок", name: "Аґарикальні", latin: "Agaricales" },
      { rank: "Родина", name: "Псатирелові", latin: "Psathyrellaceae" },
      { rank: "Рід", name: "Копринопсис", latin: "Coprinopsis" },
      {
        rank: "Вид",
        name: "Копринопсис красивоголубий",
        latin: "Coprinopsis pulchricaerulea",
      },
    ],
    characteristics: [
      {
        label: "Шапинка",
        value: "Дзвоникоподібна, 1–3 см",
        detail:
          "У юному віці циліндрично-конічна, густо вкрита ніжно-бірюзовими або небесно-синіми борошнистими лусочками, що з часом тьмяніють до сірувато-попелястих.",
      },
      {
        label: "Ніжка",
        value: "Тонка, 3–7 см × 2–3 мм",
        detail:
          "Циліндрична, порожниста, крихка, шовковисто-білувата, біля основи нерідко зберігає легке блакитне повстяне опушення міцелію.",
      },
      {
        label: "Гіменофор",
        value: "Пластинчастий, автолізний",
        detail:
          "Пластинки вільні, густі; спочатку білуваті чи з лазуровим відтінком, у міру дозрівання чорніють і розпливаються в чорнильну масу (явище делікесценції).",
      },
      {
        label: "Біохімічна риса",
        value: "Синій пігмент велуму",
        detail:
          "Характерне забарвлення зумовлене структурою клітин покривала (велуму), які містять особливий пігментний комплекс, що поступово окиснюється на повітрі.",
      },
      {
        label: "Споровий порошок",
        value: "Чорний / темно-бурий",
        detail:
          "Спори еліпсоїдні, гладенькі, товстостінні, з виразною центричною порою проростання, розсіюються з краплями автолізованої рідини.",
      },
      {
        label: "Екологія та трофіка",
        value: "Сапротроф-деструктор",
        detail:
          "Селиться поодиноко чи невеликими групами на гниючій деревині листяних порід, органічній підстилці та вологому лісовому гумусі.",
      },
      {
        label: "Ареал поширення",
        value: "Австралазія та Океанія",
        detail:
          "Рідкісний вид дощових та вологих субтропічних лісів східного узбережжя Австралії (зокрема Новий Південний Уельс), окремі ізоляти зафіксовані в Океанії.",
      },
      {
        label: "Харчове значення",
        value: "Неїстівний гриб",
        detail:
          "Не має кулінарної цінності через мізерні розміри та рідкісність. Рід Coprinopsis містить токсичні речовини (зокрема коприн), що блокують метаболізм алкоголю.",
      },
    ],
  },
  {
    id: "mycena-chlorophos",
    name: "Міцена хлорофос",
    latinName: "Mycena chlorophos",
    accentColor: "#22c55e",
    badge: "Біолюмінесцентний нічний гриб",
    overview:
      "Один із найвідоміших природних біолюмінесцентних організмів планети з родини міценових. У темряві його плодові тіла безперервно випромінюють яскраве зелене світло внаслідок ферментативної реакції люциферину.",
    photos: [
      {
        src: mycena1,
        alt: "Біолюмінесцентне сяйво Mycena chlorophos у нічній темряві лісу",
        caption: "Яскрава зелена біолюмінесценція",
      },
      {
        src: mycena2,
        alt: "Плодові тіла Mycena chlorophos",
        caption: "Mycena chlorophos: вид зверху",
      },
      {
        src: mycena3,
        alt: "Колонія Mycena chlorophos на корі відмерлого дерева",
        caption: "Група грибів на гниючому стовбурі",
      },
    ],
    taxonomy: [
      { rank: "Царство", name: "Гриби", latin: "Fungi" },
      { rank: "Відділ", name: "Базидіомікотові", latin: "Basidiomycota" },
      { rank: "Підвідділ", name: "Аґарикомікоти", latin: "Agaricomycotina" },
      { rank: "Клас", name: "Аґарикоміцети", latin: "Agaricomycetes" },
      { rank: "Підклас", name: "Аґарикоміцетові", latin: "Agaricomycetidae" },
      { rank: "Порядок", name: "Аґарикальні", latin: "Agaricales" },
      { rank: "Родина", name: "Міценові", latin: "Mycenaceae" },
      { rank: "Рід", name: "Міцена", latin: "Mycena" },
      { rank: "Вид", name: "Міцена хлорофос", latin: "Mycena chlorophos" },
    ],
    characteristics: [
      {
        label: "Шапинка",
        value: "Діаметр 1,5–3 см, клейка",
        detail:
          "Опукла до плоско-втисненої, блідо-сірувато-бура з темнішим центром, напівпрозора, радіально-рубчаста, у вологу погоду покрита тонким драглистим шаром.",
      },
      {
        label: "Ніжка",
        value: "Тонка, 1–3 см × 1–2 мм",
        detail:
          "Ниткоподібна, біла, напівпрозора, порожниста всередині, з базальним дископодібним розширенням, яке кріпиться до деревини повстяними білими нитками.",
      },
      {
        label: "Гіменофор",
        value: "Пластинчастий, вільний",
        detail:
          "Пластинки прирослі або майже вільні, вузькі, білуваті чи блідо-кремові. Саме пластинки є джерелом найсильнішого люмінесцентного випромінювання.",
      },
      {
        label: "Біохімічна риса",
        value: "Люциферин-люциферазна емісія",
        detail:
          "Окиснення грибного люциферину (3-гідроксигіспідину) ферментом люциферазою у присутності кисню дає постійне зелене світіння (довжина хвилі 522–530 нм).",
      },
      {
        label: "Споровий порошок",
        value: "Білий / амілоїдний",
        detail:
          "Спори прозорі, еліпсоїдні, безбарвні, гладенькі, розміром 7–9 × 5–6 мкм, фарбуються йодним реактивом Мельцера в синій колір (амілоїдність).",
      },
      {
        label: "Екологія та трофіка",
        value: "Ксилотрофний сапротроф",
        detail:
          "Розкладає вологу мертву кору, опалі гілки, стовбури вічнозелених дерев та бамбуку у вологому мікрокліматі тропічних і субтропічних хащ.",
      },
      {
        label: "Ареал поширення",
        value: "Східна та Пд.-Сх. Азія",
        detail:
          "Поширений у Японії (о-ви Хатідзьо, Оґасавара), Тайвані, Індонезії, Полінезії, Шрі-Ланці, а також виявлений у тропіках Бразилії та Австралії.",
      },
      {
        label: "Харчове значення",
        value: "Неїстівний гриб",
        detail:
          "Гриб не споживається в їжу. Його плодове тіло мізерне за масою, біохімічно не досліджене на токсичність для травної системи ссавців.",
      },
    ],
  },
];

/**
 * Одноразово описана функція/компонент для відображення картки гриба
 * Містить слайд-шоу за зразком Netherlands.jsx, таксономічне дерево та сітку характеристик
 */
function MushroomSection({ mushroom, index }) {
  const [activePhotoIndex, setActivePhotoIndex] = useState(0);
  const [previousPhotoIndex, setPreviousPhotoIndex] = useState(null);
  const [loadedPhotoSrc, setLoadedPhotoSrc] = useState(null);

  const photos = mushroom.photos;
  const activePhoto = photos[activePhotoIndex];

  function selectPhoto(newIndex) {
    if (newIndex === activePhotoIndex) {
      return;
    }
    setPreviousPhotoIndex(activePhotoIndex);
    setLoadedPhotoSrc(null);
    setActivePhotoIndex(newIndex);
  }

  function showPhoto(offset) {
    selectPhoto((activePhotoIndex + offset + photos.length) % photos.length);
  }

  return (
    <article
      className="mushroom-card"
      style={{ "--mushroom-accent": mushroom.accentColor }}
      aria-labelledby={`mushroom-title-${mushroom.id}`}
    >
      {/* Заголовок та мета гриба */}
      <header className="mushroom-header">
        <div className="mushroom-header-meta">
          <span className="mushroom-index-label">Зразок 0{index + 1}</span>
          <span className="mushroom-badge">{mushroom.badge}</span>
        </div>
        <h2 id={`mushroom-title-${mushroom.id}`} className="mushroom-title">
          {mushroom.name}
        </h2>
        <p className="mushroom-latin">[{mushroom.latinName}]</p>
        <p className="mushroom-overview">{mushroom.overview}</p>
      </header>

      {/* Слайд-шоу зображень за зразком Netherlands.jsx */}
      <section
        className="mushrooms-gallery"
        aria-label={`Фотогалерея ${mushroom.name}`}
      >
        {previousPhotoIndex !== null && (
          <img
            className="mushrooms-gallery-image"
            src={photos[previousPhotoIndex].src}
            alt=""
            aria-hidden="true"
          />
        )}
        <img
          key={activePhoto.src}
          className={`mushrooms-gallery-image${loadedPhotoSrc === activePhoto.src ? " mushrooms-gallery-image--loaded" : ""}`}
          src={activePhoto.src}
          alt={activePhoto.alt}
          fetchPriority={index === 0 ? "high" : "auto"}
          onLoad={() => {
            setLoadedPhotoSrc(activePhoto.src);
            if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
              setPreviousPhotoIndex(null);
            }
          }}
          onTransitionEnd={(event) => {
            if (event.propertyName === "opacity") {
              setPreviousPhotoIndex(null);
            }
          }}
        />
        <div className="mushrooms-gallery-shade" />
        <div className="mushrooms-gallery-caption">
          <p>{activePhoto.caption}</p>
          {activePhoto.credit && <small>{activePhoto.credit}</small>}
        </div>

        <div className="mushrooms-gallery-controls">
          <button
            className="mushrooms-gallery-arrow"
            type="button"
            aria-label="Попереднє фото"
            onClick={() => showPhoto(-1)}
          >
            <svg aria-hidden="true" viewBox="0 0 24 24" fill="none">
              <path
                d="m15 18-6-6 6-6"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
          <div className="mushrooms-gallery-dots" aria-label="Вибрати фото">
            {photos.map((photo, pIdx) => (
              <button
                key={photo.src}
                className="mushrooms-gallery-dot"
                type="button"
                aria-label={`Фото ${pIdx + 1}: ${photo.caption}`}
                aria-current={activePhotoIndex === pIdx ? "true" : undefined}
                onClick={() => selectPhoto(pIdx)}
              />
            ))}
          </div>
          <button
            className="mushrooms-gallery-arrow"
            type="button"
            aria-label="Наступне фото"
            onClick={() => showPhoto(1)}
          >
            <svg aria-hidden="true" viewBox="0 0 24 24" fill="none">
              <path
                d="m9 18 6-6-6-6"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>

        <p className="mushrooms-gallery-count" aria-live="polite">
          {activePhotoIndex + 1} / {photos.length}
        </p>
      </section>

      {/* Таксономічне положення виду */}
      <section
        className="mushroom-taxonomy-section"
        aria-labelledby={`taxonomy-${mushroom.id}`}
      >
        <h3 id={`taxonomy-${mushroom.id}`} className="mushroom-subheading">
          <span className="mushroom-subheading-icon" aria-hidden="true">
            🌿
          </span>
          Положення у таксономічному дереві
        </h3>
        <div className="mushroom-taxonomy">
          <ol className="taxonomy-tree">
            {mushroom.taxonomy.map((node, nodeIdx) => {
              const isSpecies = nodeIdx === mushroom.taxonomy.length - 1;
              return (
                <li
                  key={node.rank}
                  className={`taxonomy-tree-node${isSpecies ? " taxonomy-tree-node--species" : ""}`}
                >
                  <span className="taxonomy-tree-connector" aria-hidden="true">
                    {"—".repeat(nodeIdx + 1)}
                  </span>
                  <span className="taxonomy-tree-rank">{node.rank}:</span>
                  <span className="taxonomy-tree-value">{node.name}</span>
                  <span className="taxonomy-tree-latin">[{node.latin}]</span>
                </li>
              );
            })}
          </ol>
        </div>
      </section>

      {/* Поля характеристики гриба */}
      <section
        className="mushroom-characteristics-section"
        aria-labelledby={`chars-${mushroom.id}`}
      >
        <h3 id={`chars-${mushroom.id}`} className="mushroom-subheading">
          <span className="mushroom-subheading-icon" aria-hidden="true">
            🔬
          </span>
          Характеристики та морфологічні ознаки
        </h3>
        <div className="mushroom-metrics">
          {mushroom.characteristics.map((char, charIdx) => (
            <article key={char.label} className="mushroom-metric">
              <span className="mushroom-metric-index">0{charIdx + 1}</span>
              <p className="mushroom-metric-label">{char.label}</p>
              <p className="mushroom-metric-value">{char.value}</p>
              <p className="mushroom-metric-detail">{char.detail}</p>
            </article>
          ))}
        </div>
      </section>
    </article>
  );
}

export default function Mushrooms() {
  return (
    <WorkShell
      title="Незвичайні гриби"
      subtitle="Coprinopsis pulchricaerulea та Mycena chlorophos"
      className="mushrooms-page"
    >
      <div className="mushrooms-intro">
        У мікології гриби <em>Coprinopsis pulchricaerulea</em> та{" "}
        <em>Mycena chlorophos</em> представляють дивовижне різноманіття порядку{" "}
        <strong>Аґарикальні (Agaricales)</strong>. Обидва види належать до
        базидієвих макроміцетів, проте еволюційно розійшлися на рівні родин
        (Psathyrellaceae та Mycenaceae), виробивши кардинально різні
        пристосування: ефектний блакитний наліт із наступним автолізом пластинок
        у копринопсиса та безперервну біолюмінесценцію зеленого спектра у
        міцени.
      </div>

      <div className="mushrooms-list">
        {mushroomsData.map((mushroom, index) => (
          <MushroomSection
            key={mushroom.id}
            mushroom={mushroom}
            index={index}
          />
        ))}
      </div>
    </WorkShell>
  );
}

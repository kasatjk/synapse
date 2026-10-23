import WorkShell from '../components/WorkShell.jsx';
import Summary from '../components/Summary.jsx';
import header from '../assets/GGRecrResources/header.avif';
import '../styles/Recreation.css';
import beach from '../assets/GGRecrResources/beach.webp';
import skiing from '../assets/GGRecrResources/skiing.webp';
import balneotherapy from '../assets/GGRecrResources/balneotherapy.webp';
import cathedral from '../assets/GGRecrResources/cathedral.webp';
import nationalPark from '../assets/GGRecrResources/national-park.webp';
import geyser from '../assets/GGRecrResources/geyser.webp';

const resourcesData = [
  {
    id: 1,
    title: 'Пляжні ресурси',
    desc: 'Середземноморські узбережжя Південної Європи (Французька Рив’єра, узбережжя Іспанії, Італії та Греції). Формують високий прибуток від готельного, яхтового та ресторанного бізнесу.',
    img: beach,
    alt: 'Курортне середземноморське узбережжя Європи',
  },
  {
    id: 2,
    title: 'Гірськолижні центри',
    desc: 'Альпи, Піренеї та Карпати — провідні світові локації зимових видів спорту. Норвезькі фіорди поєднують гірський туризм із круїзними маршрутами.',
    img: skiing,
    alt: 'Гірськолижні траси та засніжені вершини Альп',
  },
  {
    id: 3,
    title: 'Бальнеологічні курорти',
    desc: 'Термальні та мінеральні води, лікувальні грязі (Карлові Вари, Віші, Баден-Баден). Основа оздоровчого медичного туризму регіону.',
    img: balneotherapy,
    alt: 'Термальні бальнеологічні джерела та спа-комплекс',
  },
  {
    id: 4,
    title: 'Історико-культурні пам’ятки',
    desc: 'Архітектурні ансамблі, середньовічні замки, собори та музеї світового значення. Головний магніт екскурсійного пізнавального туризму.',
    img: cathedral,
    alt: 'Історичний готичний собор та європейська архітектурна спадщина',
  },
  {
    id: 5,
    title: 'Національні парки',
    desc: 'Заповідні лісові масиви, озера та біосферні резервати. Стрімкий розвиток екологічного туризму, кемпінгу та фотосафарі.',
    img: nationalPark,
    alt: 'Національний природний парк з озером та скелями',
  },
  {
    id: 6,
    title: 'Унікальні природні феномени',
    desc: 'Гейзери та вулкани Ісландії, льодовики Скандинавії, карстові печери. Приваблюють прихильників екстремального та наукового туризму.',
    img: geyser,
    alt: 'Діючий гейзер та геотермальні ландшафти',
  },
];

export default function Recreation() {
  return (
    <WorkShell
      title="Рекреаційні ресурси"
      subtitle="Третинний сектор економіки Європи"
      backgroundImage={header}
      align="center"
    >
      <div className="gg-grid">
        {resourcesData.map((res) => (
          <article className="gg-resource-item" key={res.id}>
            <img
              src={res.img}
              alt={res.alt}
              className="gg-resource-img"
              loading="lazy"
              decoding="async"
            />
            <div className="gg-resource-content">
              <h2>{res.title}</h2>
              <p>{res.desc}</p>
            </div>
          </article>
        ))}
      </div>

      <Summary title="Підсумок">
        <p>
          Рекреаційні ресурси є фундаментальним драйвером третинного сектора європейської економіки.
          Туристична індустрія генерує понад 10% ВВП окремих країн півдня Європи, створює мільйони
          робочих місць, стимулює розвиток транспорту, реставрацію культурної спадщини та збереження
          природних екосистем.
        </p>
      </Summary>
    </WorkShell>
  );
}

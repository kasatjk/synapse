import '../styles/GGRecrResources.css';
import ReportHero from '../components/ReportHero.jsx';
import SummaryBlock from '../components/SummaryBlock.jsx';
import header from '../assets/GGRecrResources/header.avif';
import beach from '../assets/GGRecrResources/beach.jpg';
import skiing from '../assets/GGRecrResources/skiing.jpg';
import balneotherapy from '../assets/GGRecrResources/balneotherapy.jpg';
import cathedral from '../assets/GGRecrResources/cathedral.jpg';
import nationalPark from '../assets/GGRecrResources/national-park.jpg';
import geyser from '../assets/GGRecrResources/geyser.jpg';

const resourcesData = [
  {
    id: 1,
    title: 'Пляжні',
    desc: 'Середземноморські узбережжя південної Європи. Приносить прибуток від готельного та ресторанного бізнесу.',
    img: beach,
  },
  {
    id: 2,
    title: 'Гірськолижні',
    desc: 'Альпи та Карпати - популярні напрямки для зимових видів спорту. Норвезькі фіорди - ідеальні для круїзів та подорожей.',
    img: skiing,
  },
  {
    id: 3,
    title: 'Бальнеологічні',
    desc: "Джерела мінеральних вод, як у м.Карлові Вари та лікувальні грязі широко використовуються для оздоровлення.",
    img: balneotherapy,
  },
  {
    id: 4,
    title: 'Історико-культурні',
    desc: "Пам'ятки архітектури, старовинні замки та музеї, основна цінність Європейської історії та культури.",
    img: cathedral,
  },
  {
    id: 5,
    title: 'Лісові та нац.парки',
    desc: 'Масиви лісів і національні парки для екотуризму та кемпінгу. Також збереження біорізноманіття та природних ландшафтів.',
    img: nationalPark,
  },
  {
    id: 6,
    title: 'Інші природні',
    desc: 'Гейзери, вулкани, льодовики тощо. Вони приваблюють туристів, які цікавляться природними явищами та захоплюються величчю природи.',
    img: geyser,
  },
];

export default function GGRecrResources() {
  return (
    <article className="report-card">
      <ReportHero
        title="Рекреаційні ресурси"
        subtitle="Третинний сектор економіки Європи"
        backgroundImage={header}
        align="center"
      />

      <div className="report-body">
        <div className="gg-grid">
          {resourcesData.map((res) => (
            <div className="gg-resource-item" key={res.id}>
              <img src={res.img} alt={res.title} className="gg-resource-img" />
              <div className="gg-resource-content">
                <h2>{res.title}</h2>
                <p>{res.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <SummaryBlock title="Підсумок">
          <p>
            Рекреаційні ресурси відіграють надважливу роль в економіці Європи, зокрема у третинному секторі. Усі надані приклади сприяють розвитку місцевої економіки, прибуткам та утворенню робочих місць.
          </p>
        </SummaryBlock>
      </div>
    </article>
  );
}

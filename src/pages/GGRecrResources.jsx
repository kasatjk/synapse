import React from 'react';
import '../styles/GGRecrResources.css';

const headerBg = "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?auto=format&fit=crop&q=80&w=1600";

const resourcesData = [
  {
    id: 1,
    title: "Пляжні",
    desc: "Середземноморські узбережжя південної Європи. Приносить прибуток від готельного та ресторанного бізнесу.",
    img: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&q=80&w=600"
  },
  {
    id: 2,
    title: "Гірськолижні",
    desc: "Альпи та Карпати - популярні напрямки для зимових видів спорту. Норвезькі фіорди - ідеальні для круїзів та подорожей.",
    img: "https://images.unsplash.com/photo-1551524164-687a55dd1126?auto=format&fit=crop&q=80&w=600"
  },
  {
    id: 3,
    title: "Бальнеологічні",
    desc: "Джерела мінеральних вод, як у м.Карлові Вари та лікувальні грязі широко використовуються для оздоровлення.",
    img: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&q=80&w=600"
  },
  {
    id: 4,
    title: "Історико-культурні",
    desc: "Пам'ятки архітектури, старовинні замки та музеї, основна цінність Європейської історії та культури.",
    img: "https://images.unsplash.com/photo-1599946347371-68eb71b16afc?auto=format&fit=crop&q=80&w=600"
  },
  {
    id: 5,
    title: "Лісові та нац.парки",
    desc: "Масиви лісів і національні парки для екотуризму та кемпінгу. Також збереження біорізноманіття та природних ландшафтів.",
    img: "https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&q=80&w=600"
  },
  {
    id: 6,
    title: "Інші природні",
    desc: "Гейзери, вулкани, льодовики тощо. Вони приваблюють туристів, які цікавляться природними явищами та захоплюються величчю природи.",
    img: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&q=80&w=600"
  }
];

export default function GGRecrResources() {
  return (
    <article className="gg-card">
      
      {/* Головний заголовок */}
      <header 
        className="gg-header" 
        style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.7)), url(${headerBg})` }}
      >
        <div className="gg-header-content">
          <h1 className="gg-title">Рекреаційні ресурси</h1>
          <p className="gg-subtitle">Третинний сектор економіки Європи</p>
        </div>
      </header>

      <main className="gg-main">
        
        {/* Сітка карток (3x2 десктоп, 2x3 планшети) */}
        <div className="gg-grid">
          {resourcesData.map(res => (
            <div className="gg-resource-item" key={res.id}>
              <img src={res.img} alt={res.title} className="gg-resource-img" />
              <div className="gg-resource-content">
                <h4>{res.title}</h4>
                <p>{res.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Блок підсумку на основі вашого шаблону */}
        <section className="gg-summary">
          <h3>Підсумок</h3>
          <p>
            Рекреаційні ресурси відіграють надважливу роль в економіці Європи, зокрема у третинному секторі. Усі надані приклади сприяють розвитку місцевої економіки, прибуткам та утворенню робочих місць.
          </p>
        </section>
        
      </main>
      
    </article>
  );
}
import { Link } from 'react-router-dom';
import WorkCard from '../components/WorkCard.jsx';
import { homeMeta, subjects, getWorkById } from '../data/works.js';
import asiaImg from '../assets/Asia/map.png';

export default function HomePage() {
  const featuredWork = getWorkById(homeMeta.featuredWorkId);

  return (
    <div className="home-page">
      <header className="home-hero">
        <div className="home-hero-copy">
          <p className="home-eyebrow">Особистий освітній простір</p>
          <h1>Синапс</h1>
          <p>імені Тетяни Каришевої</p>
          <br />
          <p>
            Оберіть необхідний предмет та переглядайте додані роботи.
          </p>
        </div>

        {featuredWork ? (
          <Link
            to={featuredWork.path}
            className="home-hero-visual"
            data-subject={featuredWork.subject}
            aria-label={`Перейти до новинки: ${featuredWork.title}`}
          >
            <img
              src={asiaImg}
              alt="Азія — Карта"
              loading="eager"
              decoding="async"
            />
            <div className="home-hero-caption">
              <span>🌟 НОВИНКА НА ПОРТАЛІ</span>
              <strong>
                {featuredWork.title}
                <span aria-hidden="true">→</span>
              </strong>
            </div>
          </Link>
        ) : null}
      </header>

      {featuredWork ? (
        <section className="home-section" aria-labelledby="featured-work-heading">
          <h2 id="featured-work-heading">Рекомендована робота</h2>
          <WorkCard work={featuredWork} headingLevel="h3" showKicker />
        </section>
      ) : null}

      <section className="home-section" aria-labelledby="subjects-heading">
        <h2 id="subjects-heading">Навчальні предмети</h2>
        <div className="work-grid">
          {subjects.map((subject) => (
            <Link
              key={subject.id}
              className="work-card"
              to={subject.path}
              data-subject={subject.id}
            >
              <span className="work-card-kicker">Предмет</span>
              <h3>{subject.title}</h3>
              <p>{subject.description}</p>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}

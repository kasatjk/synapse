import { Link } from 'react-router-dom';
import WorkCard from '../components/WorkCard.jsx';
import { homeMeta, subjects, getWorkById } from '../data/works.js';

export default function HomePage() {
  const featuredWork = getWorkById(homeMeta.featuredWorkId);

  return (
    <div className="home-page">
      <header className="home-hero">
        <div className="home-hero-copy">
          <h1>Синапс</h1>
          <p>імені Тетяни Каришевої</p>
          <br />
          <p>Оберіть предмет та знайдіть необхідну роботу нижче.</p>
        </div>
      </header>

      <section className="home-section">
        <h2>НОВИНКА!</h2>
        {featuredWork ? <WorkCard work={featuredWork} headingLevel="h3" /> : null}
      </section>

      <section className="home-section">
        <h2>Предмети</h2>
        <div className="work-grid">
          {subjects.map((subject) => (
            <Link
              key={subject.id}
              className="work-card"
              to={subject.path}
              data-subject={subject.id}
            >
              <h3>{subject.title}</h3>
              <p>{subject.description}</p>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}

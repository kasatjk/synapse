import WorkCard from '../components/WorkCard.jsx';
import { subjects, works } from '../data/works.js';
import { Link } from 'react-router-dom';

export default function HomePage() {
  return (
    <div className="home-page">
      <header className="home-hero">
        <h1>Синапс</h1>
        <p>Портал учнівських робіт з біології та географії. Оберіть предмет або відкрийте одну з останніх робіт.</p>
      </header>

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

      <section className="home-section">
        <h2>Останні роботи</h2>
        <div className="work-grid">
          {works.map((work) => (
            <WorkCard key={work.id} work={work} headingLevel="h3" />
          ))}
        </div>
      </section>
    </div>
  );
}

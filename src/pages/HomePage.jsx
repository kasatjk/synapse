import WorkCard from '../components/WorkCard.jsx';
import { subjects, works } from '../data/works.js';
import { Link } from 'react-router-dom';

export default function HomePage() {
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
            <Link
              key={works[5].id}
              className="work-card"
              to={works[5].path}
              data-subject={works[5].subject}
            >
              <h3>{works[5].title}</h3>
              <p>{works[5].description}</p>
            </Link>
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

import { Link, useParams } from 'react-router-dom';
import { getSubject, getWorksBySubject } from '../data/works.js';
import WorkCard from './WorkCard.jsx';
import NotFound from '../pages/NotFound.jsx';

export default function Subject({ subjectId }) {
  const params = useParams();
  const activeId = subjectId || params.subjectId;
  const subject = getSubject(activeId);
  const subjectWorks = activeId ? getWorksBySubject(activeId) : [];

  if (!subject) {
    return <NotFound />;
  }

  return (
    <div className="subject-hub-container">
      <nav className="work-breadcrumbs" aria-label="Хлібні крихти">
        <div className="work-breadcrumbs-links">
          <Link to="/" className="work-breadcrumb-link">Головна</Link>
          <span className="work-breadcrumb-separator" aria-hidden="true">/</span>
          <span className="work-breadcrumb-current" aria-current="page">
            {subject.title}
          </span>
        </div>
      </nav>

      <section className="subject-hub" data-subject={subject.id}>
        <header className="subject-hub-header">
          <h1>{subject.title}</h1>
          <p>{subject.description}</p>
        </header>

        {subjectWorks.length > 0 ? (
          <div className="work-grid">
            {subjectWorks.map((work) => (
              <WorkCard key={work.id} work={work} showKicker={false} />
            ))}
          </div>
        ) : (
          <p className="subject-empty-state">Поки що робіт з цього предмета не додано до порталу.</p>
        )}
      </section>
    </div>
  );
}

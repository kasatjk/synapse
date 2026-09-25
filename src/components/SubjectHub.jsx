import { getSubject, getWorksBySubject } from '../data/works.js';
import WorkCard from './WorkCard.jsx';

export default function SubjectHub({ subjectId }) {
  const subject = getSubject(subjectId);
  const subjectWorks = getWorksBySubject(subjectId);

  if (!subject) {
    return null;
  }

  return (
    <section className="subject-hub" data-subject={subject.id}>
      <header className="subject-hub-header">
        <h1>{subject.title}</h1>
        <p>{subject.description}</p>
      </header>
      <div className="work-grid">
        {subjectWorks.map((work) => (
          <WorkCard key={work.id} work={work} />
        ))}
      </div>
    </section>
  );
}

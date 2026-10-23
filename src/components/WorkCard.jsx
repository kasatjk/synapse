import { Link } from 'react-router-dom';
import { getSubject } from '../data/works.js';

export default function WorkCard({ work, headingLevel = 'h2', showKicker = true }) {
  const Heading = headingLevel;
  const subject = getSubject(work.subject);

  return (
    <Link className="work-card" to={work.path} data-subject={work.subject}>
      {showKicker && subject ? (
        <span className="work-card-kicker">{subject.title}</span>
      ) : null}
      <Heading>{work.shortTitle || work.title}</Heading>
      <p>{work.description}</p>
    </Link>
  );
}


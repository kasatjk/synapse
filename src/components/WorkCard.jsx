import { Link } from 'react-router-dom';
import { getSubject } from '../data/works.js';

export default function WorkCard({ work, headingLevel = 'h2' }) {
  const subject = getSubject(work.subject);
  const Heading = headingLevel;

  return (
    <Link className="work-card" to={work.path} data-subject={work.subject}>
      <p className="work-card-kicker">{subject?.title}</p>
      <Heading>{work.shortTitle || work.title}</Heading>
      <p>{work.description}</p>
    </Link>
  );
}

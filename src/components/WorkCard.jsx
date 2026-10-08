import { Link } from 'react-router-dom';

export default function WorkCard({ work, headingLevel = 'h2' }) {
  const Heading = headingLevel;

  return (
    <Link className="work-card" to={work.path} data-subject={work.subject}>
      <Heading>{work.shortTitle || work.title}</Heading>
      <p>{work.description}</p>
    </Link>
  );
}

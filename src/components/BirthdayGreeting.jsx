import '../styles/BirthdayGreeting.css';

const decorations = [
  'circle circle--coral',
  'diamond diamond--yellow',
  'circle circle--blue',
  'diamond diamond--pink',
  'circle circle--green',
  'diamond diamond--purple',
];

function BirthdayDecorations() {
  return (
    <div className="birthday-greeting__decorations" aria-hidden="true">
      {decorations.map((decoration, index) => (
        <span
          key={decoration}
          className={`birthday-greeting__decoration birthday-greeting__decoration--${index + 1} ${decoration}`}
        />
      ))}
    </div>
  );
}

export default function BirthdayGreeting() {
  return (
    <aside className="birthday-greeting" aria-label="Привітання з днем народження">
      <BirthdayDecorations />
      <p className="birthday-greeting__message">
        З днем народження, <strong>Тетяно Каришева!</strong>
      </p>
    </aside>
  );
}

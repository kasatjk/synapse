import '../styles/BirthdayCelebration.css';

const fireworkRays = [
  'M24 4v8',
  'M24 36v8',
  'M4 24h8',
  'M36 24h8',
  'm9.9 9.9 5.7 5.7',
  'm32.4 32.4 5.7 5.7',
  'm38.1 9.9-5.7 5.7',
  'm15.6 32.4-5.7 5.7',
];

function Heart({ className }) {
  return (
    <svg className={className} viewBox="0 0 48 48" aria-hidden="true">
      <path d="M24 42 6.8 25.3C-3.4 14.9 11.1 1.4 21.4 11.6l2.6 2.6 2.6-2.6C36.9 1.4 51.4 14.9 41.2 25.3L24 42Z" />
    </svg>
  );
}

function Firework({ className }) {
  return (
    <svg className={className} viewBox="0 0 48 48" aria-hidden="true">
      {fireworkRays.map((ray) => (
        <path key={ray} d={ray} />
      ))}
      <circle cx="24" cy="24" r="4" />
    </svg>
  );
}

export default function BirthdayCelebration() {
  return (
    <div className="birthday-celebration" aria-hidden="true">
      <Heart className="birthday-celebration__heart birthday-celebration__heart--one" />
      <Heart className="birthday-celebration__heart birthday-celebration__heart--two" />
      <Firework className="birthday-celebration__firework birthday-celebration__firework--one" />
      <Firework className="birthday-celebration__firework birthday-celebration__firework--two" />
      <span className="birthday-celebration__spark birthday-celebration__spark--one">✦</span>
      <span className="birthday-celebration__spark birthday-celebration__spark--two">✧</span>
      <p className="birthday-celebration__wish birthday-celebration__wish--one">
        Щастя, любов і натхнення!
      </p>
      <p className="birthday-celebration__wish birthday-celebration__wish--two">
        Нехай збуваються мрії!
      </p>
    </div>
  );
}

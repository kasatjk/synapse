import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <div className="not-found">
      <h1>Йой! Сторінка втекла з архіву!</h1>
      <p>Або ж це Даня полінувався і не виконав завдання...</p>
      <p>
        <Link to="/">Повернутися на головну</Link>
      </p>
    </div>
  );
}

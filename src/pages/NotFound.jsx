import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <div className="not-found">
      <h1>Сторінку не знайдено</h1>
      <p>Такої роботи або розділу немає в каталозі Синапсу.</p>
      <p>
        <Link to="/">Повернутися на головну</Link>
      </p>
    </div>
  );
}

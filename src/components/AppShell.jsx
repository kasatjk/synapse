import { useEffect } from 'react';
import { NavLink, Outlet, useLocation } from 'react-router-dom';
import { getRouteMeta } from '../data/works.js';

export default function AppShell() {
  const { pathname } = useLocation();
  const meta = getRouteMeta(pathname);

  useEffect(() => {
    document.title = meta.title;
  }, [meta.title]);

  return (
    <div className="app-shell" data-subject={meta.subject || undefined}>
      <header className="app-header">
        <div className="app-header-inner">
          <NavLink to="/" className="app-logo" end>
            Синапс
            <span>Портал робіт</span>
          </NavLink>
          <nav className="app-nav" aria-label="Основна навігація">
            <NavLink to="/" end>
              Головна
            </NavLink>
            <NavLink to="/biology">Біологія</NavLink>
            <NavLink to="/geography">Географія</NavLink>
          </nav>
        </div>
      </header>

      <main className="app-main">
        <Outlet />
      </main>

      <footer className="site-footer">
        <p>Данило Павлюк :)</p>
      </footer>
    </div>
  );
}

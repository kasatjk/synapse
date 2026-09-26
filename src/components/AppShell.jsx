import { useEffect, useLayoutEffect, useRef, useState } from 'react';
import { NavLink, Outlet, useLocation } from 'react-router-dom';
import { getRouteMeta } from '../data/works.js';

export default function AppShell() {
  const { pathname } = useLocation();
  const meta = getRouteMeta(pathname);
  const [theme, setTheme] = useState(() => {
    const savedTheme = window.localStorage.getItem('synapse-theme');
    if (savedTheme === 'light' || savedTheme === 'dark') return savedTheme;
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  });
  const [menuOpen, setMenuOpen] = useState(false);
  const menuButtonRef = useRef(null);
  const themeTransitionTimer = useRef(0);

  useEffect(() => {
    document.title = meta.title;
  }, [meta.title]);

  useLayoutEffect(() => {
    document.documentElement.dataset.theme = theme;
    document.documentElement.style.colorScheme = theme;
    window.localStorage.setItem('synapse-theme', theme);
  }, [theme]);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!menuOpen) return undefined;

    function closeOnEscape(event) {
      if (event.key === 'Escape') {
        setMenuOpen(false);
        menuButtonRef.current?.focus();
      }
    }

    window.addEventListener('keydown', closeOnEscape);
    return () => window.removeEventListener('keydown', closeOnEscape);
  }, [menuOpen]);

  function toggleTheme() {
    const root = document.documentElement;
    root.classList.add('theme-transitioning');
    window.clearTimeout(themeTransitionTimer.current);
    themeTransitionTimer.current = window.setTimeout(() => {
      root.classList.remove('theme-transitioning');
    }, 450);
    setTheme((currentTheme) => (currentTheme === 'dark' ? 'light' : 'dark'));
  }

  return (
    <div className="app-shell" data-subject={meta.subject || undefined}>
      <header className="app-header">
        <div className="app-header-inner">
          <NavLink to="/" className="app-logo" end>
            <img className="app-logo-mark" src="/favicon.svg" alt="" aria-hidden="true" />
            synapse
          </NavLink>
          <div className="navigation">
            <button
              ref={menuButtonRef}
              className="menu-toggle"
              type="button"
              aria-label={menuOpen ? 'Закрити меню' : 'Відкрити меню'}
              aria-expanded={menuOpen}
              aria-controls="primary-navigation"
              onClick={() => setMenuOpen((open) => !open)}
            >
              <svg aria-hidden="true" viewBox="0 0 24 24" fill="none">
                {menuOpen ? <path d="m6 6 12 12M18 6 6 18" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
              </svg>
            </button>
            <nav
              id="primary-navigation"
              className="app-nav"
              aria-label="Основна навігація"
              data-open={menuOpen}
            >
              <NavLink to="/" end onClick={() => setMenuOpen(false)}>Головна</NavLink>
              <NavLink to="/biology" onClick={() => setMenuOpen(false)}>Біологія</NavLink>
              <NavLink to="/geography" onClick={() => setMenuOpen(false)}>Географія</NavLink>
            </nav>
            <button
              className="theme-toggle"
              type="button"
              aria-label={theme === 'dark' ? 'Увімкнути світлу тему' : 'Увімкнути темну тему'}
              aria-pressed={theme === 'dark'}
              title={theme === 'dark' ? 'Світла тема' : 'Темна тема'}
              onClick={toggleTheme}
            >
              <svg aria-hidden="true" viewBox="0 0 24 24" fill="none">
                {theme === 'dark' ? (
                  <path d="M20.2 15.5A8.4 8.4 0 0 1 8.5 3.8 8.5 8.5 0 1 0 20.2 15.5Z" />
                ) : (
                  <>
                    <circle cx="12" cy="12" r="4" />
                    <path d="M12 2v2m0 16v2M4.93 4.93l1.42 1.42m11.3 11.3 1.42 1.42M2 12h2m16 0h2M4.93 19.07l1.42-1.42m11.3-11.3 1.42-1.42" />
                  </>
                )}
              </svg>
            </button>
          </div>
        </div>
      </header>

      <main className="app-main">
        <Outlet />
      </main>

      <footer className="site-footer">
        <p>Синапс імені Тетяни Каришевої</p>
        <p>Портал учнівських робіт</p>
        <p>Данило Павлюк :)</p>
      </footer>
    </div>
  );
}

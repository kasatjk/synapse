import { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import AppShell from './components/AppShell.jsx';
import Subject from './components/Subject.jsx';
import WorkSkeleton from './components/WorkSkeleton.jsx';
import { subjects, works } from './data/works.js';
import HomePage from './pages/HomePage.jsx';
import NotFound from './pages/NotFound.jsx';

const Species = lazy(() => import('./pages/Species.jsx'));
const Elephants = lazy(() => import('./pages/Elephants.jsx'));
const Scrapie = lazy(() => import('./pages/Scrapie.jsx'));
const Europe = lazy(() => import('./pages/Europe.jsx'));
const Asia = lazy(() => import('./pages/Asia.jsx'));
const EconSector = lazy(() => import('./pages/EconSector.jsx'));
const Recreation = lazy(() => import('./pages/Recreation.jsx'));
const Netherlands = lazy(() => import('./pages/Netherlands.jsx'));
const EuropeanStatesComparison = lazy(() => import('./pages/EuropeanStatesComparison.jsx'));
const Songs = lazy(() => import('./pages/Songs.jsx'));

const workPageComponents = {
  species: Species,
  elephants: Elephants,
  scrapie: Scrapie,
  europe: Europe,
  asia: Asia,
  'secondary-sector': EconSector,
  recreation: Recreation,
  netherlands: Netherlands,
  'european-states-comparison': EuropeanStatesComparison,
  songs: Songs,
};

export default function App() {
  return (
    <Routes>
      <Route element={<AppShell />}>
        <Route path="/" element={<HomePage />} />

        {subjects.map((subject) => (
          <Route
            key={subject.id}
            path={subject.path}
            element={<Subject subjectId={subject.id} />}
          />
        ))}

        {works.map((work) => {
          const Component = workPageComponents[work.id];
          if (!Component) return null;

          return (
            <Route
              key={work.path}
              path={work.path}
              element={
                <Suspense fallback={<WorkSkeleton />}>
                  <Component />
                </Suspense>
              }
            />
          );
        })}

        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}

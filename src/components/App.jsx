import { Suspense, lazy } from 'react';
import Loader from './Loader/Loader';
import { NavLayout } from './Navigation/NavLayout';
import { Navigate, Route, Routes } from 'react-router-dom';

const HomePage = lazy(() => import('../pages/Home'));
const CatalogPage = lazy(() => import('../pages/Catalog'));
const FavoritesPage = lazy(() => import('../pages/Favorites'));

export const App = () => {
  return (
    <Suspense fallback={<Loader />}>
      <Routes>
        <Route path="/" element={<NavLayout />}>
          <Route index element={<HomePage />} />
          <Route path="catalog" element={<CatalogPage />} />
          <Route path="favorites" element={<FavoritesPage />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Route>
      </Routes>
    </Suspense>
  );
};

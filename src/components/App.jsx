import { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { startTextEffect } from 'utils/textEffectUtils';
import { Toaster } from 'react-hot-toast';
import MainPage from 'pages/MainPage';
import Layout from './Layout/Layout';
import NotFound from './NotFound/NotFound';
import CatalogPage from 'pages/CatalogPage';
import FavoritePage from 'pages/FavoritePage';
import ShoppingListPage from 'pages/ShoppingListPage';
import { getAllProducts } from 'redux/products/operations';
import SearchResultPage from 'pages/SearchResultPage';
import Details from './Details/Details';
import CallButton from './CallButton/CallButton';

// import { lazy } from 'react';
// const MainPage = lazy(() => import('pages/MainPage'));

export const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllProducts());
  }, [dispatch]);

  useEffect(() => {
    return startTextEffect();
  }, []);
  return (
    <>
      <Toaster />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route
            index
            element={
              <MainPage style={{ color: 'var(--text-color-primary-black)' }} />
            }
          />
          <Route
            path="/about"
            element={
              <p style={{ color: 'var(--text-color-primary-black)' }}>
                Про нас
              </p>
            }
          />
          <Route
            path="/delivery"
            element={
              <p style={{ color: 'var(--text-color-primary-black)' }}>
                Доставка і оплата
              </p>
            }
          />
          <Route
            path="/contacts"
            element={
              <p style={{ color: 'var(--text-color-primary-black)' }}>
                Контакти
              </p>
            }
          />
          <Route
            path="/shoppinglist"
            element={
              <ShoppingListPage
                style={{ color: 'var(--text-color-primary-black)' }}
              />
            }
          />
          <Route
            path="/favorite"
            element={
              <FavoritePage
                style={{ color: 'var(--text-color-primary-black)' }}
              />
            }
          />
          <Route
            path="/catalog"
            element={
              <CatalogPage
                style={{ color: 'var(--text-color-primary-black)' }}
              />
            }
          />
          <Route path="/catalog/:id" element={<Details />} />
          <Route
            path="/catalog/:category"
            element={
              <p style={{ color: 'var(--text-color-primary-black)' }}>
                Category
              </p>
            }
          />
          <Route path="/searchresult" element={<SearchResultPage />} />
          <Route
            path="/servis"
            element={
              <p style={{ color: 'var(--text-color-primary-black)' }}>
                Сервісний центр
              </p>
            }
          />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
      <CallButton />

      <div
        style={{
          height: '100vh',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          fontSize: 40,
          fontWeight: 700,
          color: 'var(--text-color-primary-black)',
          fontFamily: 'var(--font-family-secondary)',
        }}
      >
        Creating
        <span className="continue">.</span>
        <span className="continue">.</span>
        <span className="continue">.</span>
      </div>
    </>
  );
};

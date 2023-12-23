import { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { startTextEffect } from 'utils/textEffectUtils';
import { Toaster } from 'react-hot-toast';
import Layout from './Layout/Layout';
import MainPage from 'pages/MainPage';
import CatalogPage from 'pages/CatalogPage';
import FavoritePage from 'pages/FavoritePage';
import ShoppingListPage from 'pages/ShoppingListPage';
import SearchResultPage from 'pages/SearchResultPage';
import AboutPage from 'pages/AboutPage';
import NotFound from './NotFound/NotFound';
import { getAllProducts } from 'redux/products/operations';
import Details from './Details/Details';
import CallButton from './CallButton/CallButton';
import Loader from './Loader/Loader';
import { selectLoading } from 'redux/products/selectors';

// import { lazy } from 'react';
// const MainPage = lazy(() => import('pages/MainPage'));
// const CatalogPage = lazy(() => import('pages/CatalogPage'));
// const FavoritePage = lazy(() => import('pages/FavoritePage'));
// const ShoppingListPage = lazy(() => import('pages/ShoppingListPage'));
// const SearchResultPage = lazy(() => import('pages/SearchResultPage'));
// const AboutPage = lazy(() => import('pages/AboutPage'));

export const App = () => {
  const isLoading = useSelector(selectLoading);
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
          <Route path="/about" element={<AboutPage />} />
          <Route
            path="/ourteam"
            element={
              <p style={{ color: 'var(--text-color-primary-black)' }}>
                Наша команда
              </p>
            }
          />
          <Route
            path="/joboffers"
            element={
              <p style={{ color: 'var(--text-color-primary-black)' }}>
                Вакансії
              </p>
            }
          />
          <Route
            path="/reviews"
            element={
              <p style={{ color: 'var(--text-color-primary-black)' }}>
                Відгуки
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
      {isLoading && <Loader />}
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

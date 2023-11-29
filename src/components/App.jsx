import { useEffect } from 'react';
import MainPage from 'pages/MainPage';
import { Route, Routes } from 'react-router-dom';
import Layout from './Layout/Layout';
import NotFound from './NotFound/NotFound';
import { startTextEffect } from 'utils/textEffectUtils';
import CatalogPage from 'pages/CatalogPage';
import FavoritePage from 'pages/FavoritePage';
// import { useTheme } from 'hooks/useTheme';

// import { lazy } from 'react';
// const MainPage = lazy(() => import('pages/MainPage'));

export const App = () => {
  // const { theme } = useTheme();
  // useEffect(() => {
  //   document.body.className = theme;
  // }, [theme]);
  useEffect(() => {
    return startTextEffect();
  }, []);
  return (
    <>
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
              <p style={{ color: 'var(--text-color-primary-black)' }}>
                Корзина
              </p>
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
          <Route
            path="/servis"
            element={
              <p style={{ color: 'var(--text-color-primary-black)' }}>
                Сервісний центр
              </p>
            }
          />
          <Route
            path="/catalog/:category"
            element={
              <p style={{ color: 'var(--text-color-primary-black)' }}>
                Category
              </p>
            }
          />
          <Route
            path="/catalog/:productId"
            element={
              <p style={{ color: 'var(--text-color-primary-black)' }}>
                ProductItem
              </p>
            }
          >
            <Route
              path="desc"
              element={
                <p style={{ color: 'var(--text-color-primary-black)' }}>
                  description
                </p>
              }
            />
            <Route
              path="more"
              element={
                <p style={{ color: 'var(--text-color-primary-black)' }}>
                  more information
                </p>
              }
            />
          </Route>
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
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

import MainPage from 'pages/MainPage';
import { Route, Routes } from 'react-router-dom';
import Layout from './Layout/Layout';
import NotFound from './NotFound/NotFound';
import './App.css';

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<MainPage />} />
          <Route path="/about" element={<p>Про нас</p>} />
          <Route path="/delivery" element={<p>Доставка і оплата</p>} />
          <Route path="/contacts" element={<p>Контакти</p>} />
          <Route path="/shoppinglist" element={<p>Корзина</p>} />
          <Route path="/favorite" element={<p>Обрані товари</p>} />
          <Route path="/catalog" element={<p>Каталог</p>} />
          <Route path="/servis" element={<p>Сервісний центр</p>} />
          <Route path="/catalog/:category" element={<p>Category</p>} />
          <Route path="/catalog/:productId" element={<p>ProductItem</p>}>
            <Route path="desc" element={<p>description</p>} />
            <Route path="more" element={<p>more information</p>} />
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
          color: '#010101',
        }}
      >
        Creating...
      </div>
    </>
  );
};

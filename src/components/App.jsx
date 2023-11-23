import MainPage from 'pages/MainPage';
import { Route, Routes } from 'react-router-dom';
import Layout from './Layout/Layout';
import NotFound from './NotFound/NotFound';

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<MainPage />} />
          <Route path="/shoppinglist" element={<p>ShoppingList</p>} />
          <Route path="/favorite" element={<p>FavoriteProducts</p>} />
          <Route path="/catalog" element={<p>Catalog</p>} />
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

import { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Toaster } from 'react-hot-toast';
import { selectLoading } from 'redux/products/selectors';
import { getAllProducts } from 'redux/products/operations';
import Layout from './Layout/Layout';
// import MainPage from 'pages/MainPage';
// import CatalogPage from 'pages/CatalogPage';
// import FavoritePage from 'pages/FavoritePage';
// import ShoppingListPage from 'pages/ShoppingListPage';
// import SearchResultPage from 'pages/SearchResultPage';
// import AboutPage from 'pages/AboutPage';
// import WaitCreate from 'pages/WaitCreate';
import NotFound from './NotFound/NotFound';
import Details from './Details/Details';
import CallButton from './CallButton/CallButton';
import Loader from './Loader/Loader';
import CategoriesPage from 'pages/CategoriesPage';
import CategoryItemPage from 'pages/CategoryItemPage';

import { lazy } from 'react';
const MainPage = lazy(() => import('pages/MainPage'));
const CatalogPage = lazy(() => import('pages/CatalogPage'));
const FavoritePage = lazy(() => import('pages/FavoritePage'));
const ShoppingListPage = lazy(() => import('pages/ShoppingListPage'));
const SearchResultPage = lazy(() => import('pages/SearchResultPage'));
const AboutPage = lazy(() => import('pages/AboutPage'));
const WaitCreate = lazy(() => import('pages/WaitCreate'));

export const App = () => {
  const isLoading = useSelector(selectLoading);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllProducts());
  }, [dispatch]);

  return (
    <>
      <Toaster />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<MainPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/ourteam" element={<WaitCreate />} />
          <Route path="/joboffers" element={<WaitCreate />} />
          <Route path="/reviews" element={<WaitCreate />} />
          <Route path="/delivery" element={<WaitCreate />} />
          <Route path="/contacts" element={<WaitCreate />} />
          <Route path="/shoppinglist" element={<ShoppingListPage />} />
          <Route path="/favorite" element={<FavoritePage />} />
          {/* <Route path="/catalog" element={<CatalogPage />} />
          <Route path="/catalog/:id" element={<Details />} />
          <Route path="/catalog/categories" element={<CategoriesPage/>} />
          <Route path="/catalog/category/:category" element={<CategoryItemPage />} /> */}
          <Route path="/catalog">
            <Route index element={<CatalogPage />} />
            <Route path="categories" element={<CategoriesPage />} />
            <Route path="category/:category" element={<CategoryItemPage />} />
            <Route path=":id" element={<Details />} />
          </Route>
          <Route path="/searchresult" element={<SearchResultPage />} />
          <Route path="/servis" element={<WaitCreate />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
      {isLoading && <Loader />}
      <CallButton />
    </>
  );
};

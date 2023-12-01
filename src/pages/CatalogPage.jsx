import Loader from 'components/Loader/Loader';
import ProductList from 'components/ProductList/ProductList';
import React from 'react';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import {
  selectAllProducts,
  selectError,
  selectLoading,
} from 'redux/products/selectors';
import { getAllProducts } from 'redux/products/operations';
import { resetFilter } from 'redux/products/filterSlice';

const CatalogPage = () => {
  const products = useSelector(selectAllProducts);
  const loading = useSelector(selectLoading);
  const error = useSelector(selectError);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllProducts());
    dispatch(resetFilter());
  }, [dispatch]);

  return (
    <div
      style={{
        paddingTop: '40px',
        paddingBottom: '40px',
      }}
    >
      <h1
        style={{
          color: 'var(--text-color-primary-black)',
          fontFamily: 'var(--font-family-secondary)',
          marginBottom: '20px',
        }}
      >
        Каталог товарів
      </h1>
      {error && <h1>Упс, щось пішло не так</h1>}
      {loading && !error && <Loader />}
      <ProductList products={products} />
    </div>
  );
};

export default CatalogPage;

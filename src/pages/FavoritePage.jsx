import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  selectFavoriteProducts,
  selectFiltredFavoriteProducts,
  selectIsFiltred,
} from '../redux/products/selectors';
import ProductList from 'components/ProductList/ProductList';
import NoFavorites from '../components/NoFavorites/NoFavorites';
// import { getAllProducts } from 'redux/products/operations';
import { resetFilter } from 'redux/products/filterSlice';

const FavoritePage = () => {
  const isFiltred = useSelector(selectIsFiltred);
  const favorites = useSelector(selectFavoriteProducts);
  const filtredFavorites = useSelector(selectFiltredFavoriteProducts);

  const dispatch = useDispatch();

  useEffect(() => {
    // dispatch(getAllProducts());
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
        Обране
      </h1>
      {favorites.length === 0 ? (
        <NoFavorites />
      ) : (
        <ProductList products={isFiltred ? filtredFavorites : favorites} />
      )}
    </div>
  );
};

export default FavoritePage;

import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getAllProducts } from 'redux/products/operations';
import {
  selectIsFiltred,
  selectShoppingListProducts,
  selectFiltredShoppingListProducts,
} from '../redux/products/selectors';
import ProductList from 'components/ProductList/ProductList';
import NoFavorites from 'components/NoFavorites/NoFavorites';
import { resetFilter } from 'redux/products/filterSlice';

const ShoppingListPage = () => {
  const isFiltred = useSelector(selectIsFiltred);
  const shoppingList = useSelector(selectShoppingListProducts);
  const filtredShoppingList = useSelector(selectFiltredShoppingListProducts);

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
        Кошик
      </h1>
      {shoppingList.length === 0 ? (
        <NoFavorites />
      ) : (
        <ProductList
          products={isFiltred ? filtredShoppingList : shoppingList}
        />
      )}
    </div>
  );
};

export default ShoppingListPage;

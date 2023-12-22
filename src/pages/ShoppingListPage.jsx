import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getAllProducts } from 'redux/products/operations';
import {
  selectIsFiltred,
  selectShoppingListProducts,
  selectFiltredShoppingListProducts,
  selectTotalPrice,
} from '../redux/products/selectors';
import ProductList from 'components/ProductList/ProductList';
import NoFavorites from 'components/NoFavorites/NoFavorites';
import { resetFilter } from 'redux/products/filterSlice';
import {
  resetShoppingList,
  resetTotalPrice,
} from 'redux/products/shoppingListSlice';
import styled from 'styled-components';
import { notifyRemove } from 'utils/toasts';

const CleanBtn = styled.button`
  display: block;
  margin: 0 auto;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  background-color: var(--bg-secondary);
  font-family: var(--font-family-secondary);
  color: var(--text-color-primary-white);
  font-size: 16px;
  cursor: pointer;
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
  &:hover,
  &:focus {
    background-color: var(--bg-secondary-hover);
  }
`;

const ShoppingListPage = () => {
  const isFiltred = useSelector(selectIsFiltred);
  const shoppingList = useSelector(selectShoppingListProducts);
  const filtredShoppingList = useSelector(selectFiltredShoppingListProducts);
  const dispatch = useDispatch();
  const totalPrice = useSelector(selectTotalPrice);

  const handleClearShoppingList = () => {
    dispatch(resetTotalPrice());
    dispatch(resetShoppingList());
    notifyRemove();
  };

  useEffect(() => {
    dispatch(getAllProducts());
    dispatch(resetFilter());
  }, [dispatch]);

  return (
    <div
      style={{
        paddingTop: '40px',
        paddingBottom: '40px',
        color: 'var(--text-color-primary-black)',
        fontFamily: 'var(--font-family-secondary)',
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
      <p
        style={{
          color: 'var(--text-color-primary-black)',
          fontFamily: 'var(--font-family-secondary)',
          marginBottom: '10px',
        }}
      >
        Загальна вартість: {totalPrice} ₴.
      </p>

      {shoppingList.length === 0 ? (
        <NoFavorites />
      ) : (
        <ProductList
          products={isFiltred ? filtredShoppingList : shoppingList}
        />
      )}
      {shoppingList.length === 0 ? null : (
        <CleanBtn onClick={handleClearShoppingList}>Очистити кошик</CleanBtn>
      )}
    </div>
  );
};

export default ShoppingListPage;

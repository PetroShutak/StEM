import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { IoCartOutline } from 'react-icons/io5';
import {
  BasketWrapper,
  BasketContainer,
  Counter,
  BasketTitle,
} from './Basket.styled';
import {selectShoppingList} from '../../../../redux/products/selectors';

const Basket = () => {
  const shoppingList = useSelector(selectShoppingList);
  const selectedShoppingListCount = shoppingList.length;
  return (
    <BasketWrapper>
      <Link to="/shoppinglist">
        <BasketContainer>
          <div
            style={{
              position: 'relative',
            }}
          >
            <IoCartOutline size={40} />
            <Counter>{selectedShoppingListCount}</Counter>
          </div>
          <BasketTitle>Мій кошик</BasketTitle>
        </BasketContainer>
      </Link>
    </BasketWrapper>
  );
};

export default Basket;

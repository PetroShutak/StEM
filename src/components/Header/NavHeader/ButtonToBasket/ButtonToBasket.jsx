import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { IoCartOutline } from 'react-icons/io5';
import { selectShoppingList } from '../../../../redux/products/selectors';
import { ButtonToBasketWrapper, Counter } from './ButtonToBasket.styled';

const ButtonToBasket = () => {
  const shoppingList = useSelector(selectShoppingList);
  // const selectedShoppingListCount = shoppingList.length;
  const selectedShoppingListCount =
    shoppingList.length > 99 ? '99+' : shoppingList.length;
  return (
    <ButtonToBasketWrapper>
      <Link to="/shoppinglist">
        <IoCartOutline size={34} />

        {selectedShoppingListCount > 0 && (
          <Counter>{selectedShoppingListCount}</Counter>
        )}
      </Link>
    </ButtonToBasketWrapper>
  );
};

export default ButtonToBasket;

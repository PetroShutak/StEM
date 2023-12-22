import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Counter, CounterButton } from './QuantityCounter.styled';
import { selectShoppingList } from '../../../redux/products/selectors';
import {
  deleteFromList,
  updateQuantityInList,
} from '../../../redux/products/shoppingListSlice';
import { notifyRemove } from 'utils/toasts';

const QuantityCounter = ({ productId }) => {
  const dispatch = useDispatch();
  const shoppingList = useSelector(selectShoppingList);

  const product = shoppingList.find(item => item.id === productId);

  const handleIncrement = id => {
    dispatch(updateQuantityInList({ id, changeQuantity: 1 }));
  };

  const handleDecrement = id => {
    if (product.quantity > 1) {
      dispatch(updateQuantityInList({ id, changeQuantity: -1 }));
    } else if (product.quantity === 1) {
      dispatch(updateQuantityInList({ id, changeQuantity: -1 }));
      dispatch(deleteFromList({ id }));
      notifyRemove();
    }
  };

  if (!product) {
    return null;
  }

  return (
    <div>
      <Counter>
        <CounterButton onClick={() => handleDecrement(product.id)}>
          -
        </CounterButton>
        <p>{product.quantity}</p>
        <CounterButton onClick={() => handleIncrement(product.id)}>
          +
        </CounterButton>
      </Counter>
    </div>
  );
};

export default QuantityCounter;

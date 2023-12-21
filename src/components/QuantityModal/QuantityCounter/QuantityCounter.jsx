import React from 'react';
import { useSelector } from 'react-redux';
import { Counter, CounterButton } from './QuantityCounter.styled';
import { selectShoppingList } from '../../../redux/products/selectors';

const QuantityCounter = () => {
  const shoppingListCount = useSelector(selectShoppingList);

  const handleIncrement = () => {
    console.log('handleIncrement');
  };
  const handleDecrement = () => {
    console.log('handleDecrement');
  };

  if (shoppingListCount.length === 0) {
    return null;
  }
  return (
    <div>
      <Counter>
        <CounterButton onClick={handleDecrement}>-</CounterButton>
        {shoppingListCount.map(item => (
          <div key={item.id}>
            <p>{item.quantity}</p>
          </div>
        ))}
        <CounterButton onClick={handleIncrement}>+</CounterButton>
      </Counter>
    </div>
  );
};

export default QuantityCounter;

import React from 'react';
import { Link } from 'react-router-dom';
import { IoCartOutline } from 'react-icons/io5';
import {
  BasketWrapper,
  BasketContainer,
  Counter,
  BasketTitle,
} from './Basket.styled';

const Basket = () => {
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
            <Counter>0</Counter>
          </div>
          <BasketTitle>Мій кошик</BasketTitle>
        </BasketContainer>
      </Link>
    </BasketWrapper>
  );
};

export default Basket;

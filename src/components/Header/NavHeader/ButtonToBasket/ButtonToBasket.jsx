import React from 'react';
import { Link } from 'react-router-dom';
import { IoCartOutline } from 'react-icons/io5';

import { ButtonToBasketWrapper } from './ButtonToBasket.styled';

const ButtonToBasket = () => {
  return (
    <ButtonToBasketWrapper>
      <Link to="/shoppinglist">
        <IoCartOutline size={34} />
      </Link>
    </ButtonToBasketWrapper>
  );
};

export default ButtonToBasket;

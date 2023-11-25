import React from 'react';
import { BurgerMenuContainer, BurgerNav, Backdrop } from './BurgerMenu.styled';
import { StyledLink } from './BurgerMenu.styled';

const BurgerMenu = ({ setOpen }) => {
  const closeBurger = () => {
    setOpen(false);
  };

  const handleLinkClick = () => {
    setOpen(false);
  };

  const handleCloseBurger = event => {
    if (event.target.classList.contains('backdrop')) {
      setOpen(false);
    }
  };

  return (
    <Backdrop className="backdrop" onClick={handleCloseBurger}>
      <BurgerMenuContainer>
        <span className="close" onClick={closeBurger}>
          &times;
        </span>
        <BurgerNav>
          <StyledLink onClick={handleLinkClick} to="/">
            Головна
          </StyledLink>
          <StyledLink onClick={handleLinkClick} to="/catalog">
            Каталог
          </StyledLink>
          <StyledLink onClick={handleLinkClick} to="/favorite">
            Обрані товари
          </StyledLink>
          <StyledLink onClick={handleLinkClick} to="/shoppinglist">
            Кошик
          </StyledLink>
          <StyledLink onClick={handleLinkClick} to="/servis">
            Сервіс
          </StyledLink>
            <StyledLink onClick={handleLinkClick} to="/contacts">
            Контакти
          </StyledLink>
        </BurgerNav>
      </BurgerMenuContainer>
    </Backdrop>
  );
};

export default BurgerMenu;

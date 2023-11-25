import React from 'react';
import { Link } from 'react-router-dom';
import { BurgerMenuContainer, BurgerNav, Backdrop, LogoWrapperBurger, LogoTitleBurger } from './BurgerMenu.styled';
import { StyledLink } from './BurgerMenu.styled';
import { HiHome } from 'react-icons/hi';
import { GrCatalog } from 'react-icons/gr';
import { GrFavorite } from 'react-icons/gr';
import { IoCartOutline } from 'react-icons/io5';
import { MdOutlineBuild } from 'react-icons/md';
import { TiContacts } from 'react-icons/ti';

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
        <LogoWrapperBurger>
    <Link to='/'>
      <LogoTitleBurger>СтЕМ</LogoTitleBurger>
      <span>сантехніка твого міста</span>
    </Link>
    </LogoWrapperBurger>
        <BurgerNav>
          <StyledLink onClick={handleLinkClick} to="/">
            <HiHome size={26} />
            Головна
          </StyledLink>
          <StyledLink onClick={handleLinkClick} to="/catalog">
            <GrCatalog size={26} />
            Каталог
          </StyledLink>
          <StyledLink onClick={handleLinkClick} to="/servis">
            <MdOutlineBuild size={26} />
            Сервіс
          </StyledLink>
          <StyledLink onClick={handleLinkClick} to="/favorite">
            <GrFavorite size={26} />
            Список бажань
          </StyledLink>
          <StyledLink onClick={handleLinkClick} to="/shoppinglist">
            <IoCartOutline size={26} />
            Кошик
          </StyledLink>
          <StyledLink onClick={handleLinkClick} to="/contacts">
            <TiContacts size={26} />
            Контакти
          </StyledLink>
        </BurgerNav>
      </BurgerMenuContainer>
    </Backdrop>
  );
};

export default BurgerMenu;

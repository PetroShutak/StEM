import React from 'react';
import { NavLink } from 'react-router-dom';
import { NavBarHeaderWrapper } from './NavBarHeader.styled';

const NavBarHeader = () => {
  return (
    <NavBarHeaderWrapper>
      <NavLink to="/catalog">Каталог</NavLink>
      <NavLink to="/servis">Сервісний центр</NavLink>
      <div className="more-link">
        <div className="dropdown">
          <NavLink to="/delivery">Доставка і оплата</NavLink>
          <NavLink to="/about">Про нас</NavLink>
          <NavLink to="/contacts">Контактна інформація</NavLink>
        </div>
      </div>
    </NavBarHeaderWrapper>
  );
};

export default NavBarHeader;

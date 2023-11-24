import React from 'react'
import { NavLink } from 'react-router-dom'
import { NavBarHeaderWrapper } from './NavBarHeader.styled'

const NavBarHeader = () => {
  return (
    <NavBarHeaderWrapper>
        <NavLink to='/servis'>Сервісний центр</NavLink>
        <NavLink to='/delivery'>Доставка і оплата</NavLink>
        <NavLink to='/about'>Про нас</NavLink>
        <NavLink to='/contacts'>Контактна інформація</NavLink>
    </NavBarHeaderWrapper>
  )
}

export default NavBarHeader
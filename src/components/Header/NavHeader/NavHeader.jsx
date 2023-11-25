import React from 'react'
// import { NavLink } from 'react-router-dom'
import UserBar from './UserBar/UserBar'
import { NavHeaderWrapper, NavHeaderContent } from './NavHeader.styled'
import SocialBlock from './SocialBlock/SocialBlock'
import ButtonToFavorite from './ButtonToFavorite/ButtonToFavorite'
import NavBarHeader from './NavBarHeader/NavBarHeader'
import CatalogDropDown from './CatalogDropDown/CatalogDropDown'
import ThemeToggle from 'components/ThemeToggle/ThemeToggle'


const NavHeader = () => {
  return (
    <NavHeaderWrapper>
    <NavHeaderContent>
      <CatalogDropDown />
      <NavBarHeader />
      <SocialBlock />
      <ButtonToFavorite />
      <UserBar />
      <ThemeToggle />
    </NavHeaderContent>
    </NavHeaderWrapper>
  )
}

export default NavHeader
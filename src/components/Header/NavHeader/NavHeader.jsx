import React from 'react'
// import { NavLink } from 'react-router-dom'
import UserBar from './UserBar/UserBar'
import { NavHeaderWrapper, NavHeaderContent } from './NavHeader.styled'
import SocialBlock from './SocialBlock/SocialBlock'
import ButtonToFavorite from './ButtonToFavorite/ButtonToFavorite'


const NavHeader = () => {
  return (
    <NavHeaderWrapper>
    <NavHeaderContent>
      <SocialBlock />
      <ButtonToFavorite />
      <UserBar />
      
    </NavHeaderContent>
    {/* for example */}
    {/* <NavLink to='/catalog'>Catalog</NavLink> */}
    </NavHeaderWrapper>
  )
}

export default NavHeader
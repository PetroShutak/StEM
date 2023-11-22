import React from 'react'
import { NavLink } from 'react-router-dom'

const NavHeader = () => {
  return (
    <>
    <div>NavHeader</div>
    {/* for example */}
    <NavLink to='/catalog'>Catalog</NavLink>
    </>
  )
}

export default NavHeader
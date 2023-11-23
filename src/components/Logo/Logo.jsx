import React from 'react'
import { Link } from 'react-router-dom'
import { LogoTitle } from './Logo.styled'

const Logo = () => {
  return (
    <>
    <Link to='/'>
      <LogoTitle>СтЕМ</LogoTitle>
    </Link>
    </>
  )
}

export default Logo
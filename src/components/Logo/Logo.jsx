import React from 'react'
import { Link } from 'react-router-dom'
import { LogoTitle, LogoWrapper } from './Logo.styled'

const Logo = () => {
  return (
    <LogoWrapper>
    <Link to='/'>
      <LogoTitle>СтЕМ</LogoTitle>
      <span>сантехніка твого міста</span>
    </Link>
    </LogoWrapper>
  )
}

export default Logo
import React from 'react'
import { Link } from 'react-router-dom'
import { GrFavorite } from "react-icons/gr";
import { ButtonToFavoriteWrapper } from './ButtonToFavorite.styled'

const ButtonToFavorite = () => {
  return (
    <ButtonToFavoriteWrapper>
        <Link to='/favorite'>
            <GrFavorite size={30} />
        </Link>
    </ButtonToFavoriteWrapper>
  )
}

export default ButtonToFavorite
import React from 'react';

import { useDispatch, useSelector } from 'react-redux';
import {
  addFavorite,
  deleteFavorite,
} from '../../../redux/products/favoriteSlice';
import { selectFavorites } from '../../../redux/products/selectors';
import {
  Item,
  ProductImage,
  ProductName,
  ProductDescription,
  ProductPrice,
  FavoriteButton,
  FavoriteButtonActive,
} from './ProductItem.styled';

const ProductItem = ({
  id,
  name,
  description,
  price,
  image,
  // category,
  // subcategory,
}) => {
  const favorites = useSelector(selectFavorites);

  const dispatch = useDispatch();

  const handleAddFavorites = favId => {
    dispatch(addFavorite(favId));
  };

  const handleRemoveFavorites = favId => {
    dispatch(deleteFavorite(favId));
  };

  return (
    <Item>
      <div>

      {favorites.includes(id) ? (
        <FavoriteButtonActive onClick={() => handleRemoveFavorites(id)} />
      ) : (
        <FavoriteButton onClick={() => handleAddFavorites(id)} />
      )}
      <ProductImage src={image} alt={name} />
      <ProductName>{name}</ProductName>
      <ProductDescription>{description}</ProductDescription>
      <ProductPrice>{price} $</ProductPrice>
        </div>
    </Item>
  );
};

export default ProductItem;

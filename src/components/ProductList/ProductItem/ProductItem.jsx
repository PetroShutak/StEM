import React from 'react'
import { ProductItemWrapper, ProductImage, ProductName, ProductDescription, ProductPrice, FavoriteButton, FavoriteButtonActive } from './ProductItem.styled';

const ProductItem = ({ product, isFavorite, toggleFavorite }) => {
  const handleToggleFavorite = () => {
    toggleFavorite(product._id);
  };

  return (
    <ProductItemWrapper>
      <ProductImage src={product.image} alt={product.name} />
      <ProductName>{product.name}</ProductName>
      <ProductDescription>{product.description}</ProductDescription>
      <ProductPrice>{product.price} ₴</ProductPrice>
      {isFavorite ? (
        <FavoriteButtonActive onClick={handleToggleFavorite} />
      ) : (
        <FavoriteButton onClick={handleToggleFavorite} />
      )}
    </ProductItemWrapper>
  );
};

export default ProductItem;

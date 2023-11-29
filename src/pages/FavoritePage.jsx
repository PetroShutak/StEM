import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectFavoriteProducts } from '../redux/products/selectors';
import { addFavorite, deleteFavorite } from '../redux/products/favoriteSlice';
import ProductList from 'components/ProductList/ProductList';

const FavoritePage = () => {
  const favorites = useSelector(selectFavoriteProducts);
  
  const dispatch = useDispatch();

  const handleAddFavorites = favId => {
    dispatch(addFavorite(favId));
  };

  const handleRemoveFavorites = favId => {
    dispatch(deleteFavorite(favId));
  };

  const toggleFavorite = favId => {
    if (favorites.includes(favId)) {
      handleRemoveFavorites(favId);
    } else {
      handleAddFavorites(favId);
    }
  };

  return (
    <div>
      <h1>FavoritePage</h1>
      <ProductList
        toggleFavorite={toggleFavorite}
        favorites={favorites}
        handleAddFavorites={handleAddFavorites}
        handleRemoveFavorites={handleRemoveFavorites}
      />
    </div>
  );
};

export default FavoritePage;

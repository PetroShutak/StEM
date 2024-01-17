import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams, useNavigate } from 'react-router-dom';
import {
  selectFavorites,
  selectProductsByCategory,
} from 'redux/products/selectors';
import DEFAULT_URL from '../images/no-image.jpg';
import { addFavorite, deleteFavorite } from 'redux/products/favoriteSlice';
import { notifyAddToFavorite, notifyRemoveFromFavorite } from 'utils/toasts';
import {
  CategoryItemPageWrapper,
  StyledList,
  StyledListItem,
  StyledButton,
  FavoriteButton,
  FavoriteButtonActive,
} from 'components/PageStyled/CategoryPage.styled';
import AddToShoppingListButton from 'components/AddToShoppingListBtn/AddToShoppingListButton';

const CategoryPage = () => {
  const { category } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const products = useSelector(selectProductsByCategory(category));
  const subcategories = Array.from(
    new Set(products.map(product => product.subcategory))
  );
  const favorites = useSelector(selectFavorites);
  const handleAddFavorites = favId => {
    dispatch(addFavorite(favId));
    notifyAddToFavorite();
  };

  const handleRemoveFavorites = favId => {
    dispatch(deleteFavorite(favId));
    notifyRemoveFromFavorite();
  };

  const [selectedSubcategories, setSelectedSubcategories] = useState([]);

  const handleSubcategoryChange = subcategory => {
    if (selectedSubcategories.includes(subcategory)) {
      setSelectedSubcategories([]);
    } else {
      setSelectedSubcategories([subcategory]);
    }
  };

  const handleNavigateToProductDetails = id => () => {
    navigate(`/catalog/${id}`);
  };

  const isImageLink = str => {
    return /(http(s?):)([/|.|\w|\s|-])*\.(?:jpg|gif|png)/g.test(str);
  };

  return (
    <CategoryItemPageWrapper>
      <h2>
        Вибрана категорія: {category} {selectedSubcategories}
      </h2>
      <div>
        {subcategories.map(subcategory => (
          <StyledButton
            key={subcategory}
            selected={selectedSubcategories.includes(subcategory)}
            onClick={() => handleSubcategoryChange(subcategory)}
          >
            {subcategory}
          </StyledButton>
        ))}
      </div>
      <StyledList>
        {products
          .filter(
            product =>
              selectedSubcategories.length === 0 ||
              selectedSubcategories.includes(product.subcategory)
          )
          .map(product => (
            <StyledListItem key={product._id}>
              {favorites.includes(product._id) ? (
                <FavoriteButtonActive
                  onClick={() => handleRemoveFavorites(product._id)}
                />
              ) : (
                <FavoriteButton
                  onClick={() => handleAddFavorites(product._id)}
                />
              )}
              <div onClick={handleNavigateToProductDetails(product._id)}>
                <img
                  src={isImageLink(product.image) ? product.image : DEFAULT_URL}
                  alt={product.name}
                  width="100"
                  height="100"
                />
                <p>{product.name}</p>
                <p>{product.brand}</p>
                <p>{product.price} грн.</p>
              </div>
              <AddToShoppingListButton 
                id={product._id}
                price={product.price}
              />
            </StyledListItem>
          ))}
      </StyledList>
    </CategoryItemPageWrapper>
  );
};

export default CategoryPage;

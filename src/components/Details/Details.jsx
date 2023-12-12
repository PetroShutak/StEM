import React, { useState } from 'react';
import {
  DetailsFavoriteBtnWrapper,
  DetailsContainer,
  DetailsImageWrapper,
  DetailsImage,
  DescriptionWrapper,
  BuyButton,
} from './Details.styled';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getProductById } from 'redux/products/operations';
import { selectFavorites, selectProductById } from 'redux/products/selectors';
import { addFavorite, deleteFavorite } from 'redux/products/favoriteSlice';
import Rating from 'utils/rating';
import QuantityModal from 'components/QuantityModal/QuantityModal';
import { addToList } from 'redux/products/shoppingListSlice';
import { setTotalPrice } from 'redux/products/shoppingListSlice';
import { FavoriteButton, FavoriteButtonActive } from 'components/ProductList/ProductItem/ProductItem.styled';

const Details = () => {
  const [showModal, setShowModal] = useState(false);
  const { id } = useParams();
  const dispatch = useDispatch();
  const favorites = useSelector(selectFavorites);
  const handleAddFavorites = favId => {
    dispatch(addFavorite(favId));
  };

  const handleRemoveFavorites = favId => {
    dispatch(deleteFavorite(favId));
  };

  const product = useSelector(state => selectProductById(state, id));

  const handleAddToShoppingList = () => {
    setShowModal(true);
  };

  const handleConfirmAddToShoppingList = (id, quantity, totalPrice) => {
    dispatch(addToList(id, parseInt(quantity)));
    dispatch(setTotalPrice(totalPrice));
    setShowModal(false);
  };

  useEffect(() => {
    dispatch(getProductById(id));
  }, [dispatch, id]);

  return (
    <div className="container">
      <DetailsContainer>
        <DetailsImageWrapper>
          <DetailsImage src={product?.image} alt={product?.name} />
        </DetailsImageWrapper>
        <DescriptionWrapper>
          <DetailsFavoriteBtnWrapper>
          {favorites.includes(id) ? (
          <FavoriteButtonActive onClick={() => handleRemoveFavorites(id)} />
        ) : (
          <FavoriteButton onClick={() => handleAddFavorites(id)} />
        )}
          </DetailsFavoriteBtnWrapper>
          <h2>
            {product?.name} - {product?.brand}
          </h2>
          <p>Виробник: {product?.brand}</p>
          <p>Модель: {product?.model}</p>
          <p>Опис: {product?.description}</p>
          <p>Ціна: {product?.price}</p>
          <p>Категорія: {product?.category}</p>
          <p>Підкатегорія: {product?.subcategory}</p>
          <Rating rating={product?.raiting} />
          <p>Країна-виробник: {product?.country}</p>
          <BuyButton onClick={handleAddToShoppingList}>
            Додати в кошик
          </BuyButton>
        </DescriptionWrapper>
      </DetailsContainer>
      {showModal && (
        <QuantityModal
          showModal={showModal}
          setShowModal={setShowModal}
          handleConfirmAddToShoppingList={handleConfirmAddToShoppingList}
          id={id}
          price={product?.price}
        />
      )}
    </div>
  );
};

export default Details;

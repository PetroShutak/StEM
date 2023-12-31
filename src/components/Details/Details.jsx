import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  DetailsFavoriteBtnWrapper,
  DetailsContainer,
  DetailsImageWrapper,
  DetailsImage,
  DescriptionWrapper,
  BuyButton,
} from './Details.styled';
import {
  notifyAddShopingList,
  notifyAddToFavorite,
  notifyRemove,
  notifyRemoveFromFavorite,
} from 'utils/toasts';
import { getProductById } from 'redux/products/operations';
import {
  selectFavorites,
  selectLoading,
  selectProductById,
  selectShoppingList,
} from 'redux/products/selectors';
import { addFavorite, deleteFavorite } from 'redux/products/favoriteSlice';
import Rating from 'utils/rating';
import QuantityModal from 'components/QuantityModal/QuantityModal';
import {
  addToList,
  deleteFromList,
  resetTotalPrice,
} from 'redux/products/shoppingListSlice';
import { setTotalPrice } from 'redux/products/shoppingListSlice';
import {
  FavoriteButton,
  FavoriteButtonActive,
} from 'components/ProductList/ProductItem/ProductItem.styled';
import DEFAULT_URL from 'images/no-image.jpg';
import Loader from 'components/Loader/Loader';

const Details = () => {
  const [showModal, setShowModal] = useState(false);
  const { id } = useParams();
  const dispatch = useDispatch();
  const favorites = useSelector(selectFavorites);
  const shoppingList = useSelector(selectShoppingList);
  const isLoading = useSelector(selectLoading)
  const handleAddFavorites = favId => {
    dispatch(addFavorite(favId));
    notifyAddToFavorite();
  };

  useEffect(() => {
    dispatch(getProductById(id));
  }, [dispatch, id]);
  const handleRemoveFavorites = favId => {
    dispatch(deleteFavorite(favId));
    notifyRemoveFromFavorite();
  };

  const product = useSelector(state => selectProductById(state.products, id));

  const handleAddToShoppingList = listId => {
    const payload = { id: listId };

    if (shoppingList.some(item => item.id === listId)) {
      dispatch(deleteFromList(payload));
      notifyRemove();
      if (shoppingList.length === 1) {
        dispatch(resetTotalPrice());
      }
    } else {
      setShowModal(true);
    }
  };

  const handleConfirmAddToShoppingList = (id, quantity, totalPrice) => {
    dispatch(addToList({ id, price: product.price, quantity }));
    dispatch(setTotalPrice(totalPrice));
    setShowModal(false);
    notifyAddShopingList();
  };

  const isImageLink = str => {
    return /(http(s?):)([/|.|\w|\s|-])*\.(?:jpg|gif|png)/g.test(str);
  };

  return (
    <div className="container">
      {isLoading && <Loader />}
      <DetailsContainer>
        <DetailsImageWrapper>
          {isImageLink(product?.image) ? (
            <DetailsImage src={product?.image} alt={product?.name} />
          ) : (
            <DetailsImage src={DEFAULT_URL} alt={product?.name} />
          )}
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
          <p>Ціна: {product ? product.price : 'Loading...'}</p>
          <p>Категорія: {product?.category}</p>
          <p>Підкатегорія: {product?.subcategory}</p>
          <Rating rating={product?.raiting} />
          <p>Країна-виробник: {product?.country}</p>
          <BuyButton onClick={() => handleAddToShoppingList(id)}>
            {shoppingList.some(item => item.id === id)
              ? 'Забрати з кошика'
              : 'Додати в кошик'}
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

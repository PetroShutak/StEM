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
  // notifyRemove,
  notifyAddToFavorite,
  notifyRemove,
  notifyRemoveFromFavorite,
} from 'utils/toasts';
import { getProductById } from 'redux/products/operations';
import {
  selectFavorites,
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

const Details = () => {
  const [showModal, setShowModal] = useState(false);
  const { id } = useParams();
  const dispatch = useDispatch();
  const favorites = useSelector(selectFavorites);
  const shoppingList = useSelector(selectShoppingList);
  const handleAddFavorites = favId => {
    dispatch(addFavorite(favId));
    notifyAddToFavorite();
  };

  const handleRemoveFavorites = favId => {
    dispatch(deleteFavorite(favId));
    notifyRemoveFromFavorite();
  };

  const product = useSelector(state => selectProductById(state, id));

  const handleAddToShoppingList = id => {
    if (shoppingList.includes(id)) {
      dispatch(deleteFromList(id));
      notifyRemove();
      if (shoppingList.length === 1) {
        dispatch(resetTotalPrice(id));
      }
    } else {
      setShowModal(true);
    }
  };

  const handleConfirmAddToShoppingList = (id, quantity, totalPrice) => {
    dispatch(addToList(id, parseInt(quantity)));
    dispatch(setTotalPrice(totalPrice));
    setShowModal(false);
    notifyAddShopingList();
  };

  useEffect(() => {
    dispatch(getProductById(id));
  }, [dispatch, id]);

  const isImageLink = str => {
    return /(http(s?):)([/|.|\w|\s|-])*\.(?:jpg|gif|png)/g.test(str);
  };

  return (
    <div className="container">
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
          <p>Ціна: {product?.price}</p>
          <p>Категорія: {product?.category}</p>
          <p>Підкатегорія: {product?.subcategory}</p>
          <Rating rating={product?.raiting} />
          <p>Країна-виробник: {product?.country}</p>
          <BuyButton onClick={() => handleAddToShoppingList(id)}>
            {shoppingList.includes(id) ? 'Забрати з кошика' : 'Додати в кошик'}
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

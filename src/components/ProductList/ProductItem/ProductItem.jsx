import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {
  notifyAddShopingList,
  notifyRemove,
  notifyAddToFavorite,
  notifyRemoveFromFavorite,
  notifyLoadingDetails,
} from 'utils/toasts';
import {
  addFavorite,
  deleteFavorite,
} from '../../../redux/products/favoriteSlice';
import {
  selectFavorites,
  selectShoppingList,
} from '../../../redux/products/selectors';
import {
  Item,
  ProductImage,
  ProductName,
  ProductPrice,
  FavoriteButton,
  FavoriteButtonActive,
  ButtonAdd,
  Tooltip,
  TooltipDetails,
  TitleLink,
  TitleLinkContainer,
} from './ProductItem.styled';
import {
  addToList,
  deleteFromList,
} from '../../../redux/products/shoppingListSlice';

import {
  setTotalPrice,
  resetTotalPrice,
} from '../../../redux/products/shoppingListSlice';
import QuantityModal from 'components/QuantityModal/QuantityModal';
import DEFAULT_URL from 'images/no-image.jpg';

const ProductItem = ({ id, name, brand, price, image }) => {
  const [showModal, setShowModal] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);
  const [showTooltipDetails, setShowTooltipDetails] = useState(false);
  const favorites = useSelector(selectFavorites);
  const shoppingList = useSelector(selectShoppingList);
  const dispatch = useDispatch();
  const location = useLocation();

  const handleDetailsClick = () => {
    notifyLoadingDetails();
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  const handleAddFavorites = favId => {
    dispatch(addFavorite(favId));
    notifyAddToFavorite();
  };

  const handleRemoveFavorites = favId => {
    dispatch(deleteFavorite(favId));
    notifyRemoveFromFavorite();
  };

  // const handleAddToShoppingList = listId => {
  //   if (shoppingList.includes(listId)) {
  //     dispatch(deleteFromList(listId));
  //     notifyRemove();
  //     if (shoppingList.length === 1) {
  //       dispatch(resetTotalPrice(listId));
  //     }
  //   } else {
  //     setShowModal(true);
  //   }
  // };

  // const handleConfirmAddToShoppingList = (id, quantity, totalPrice) => {
  //   dispatch(addToList(id, parseInt(quantity),));
  //   dispatch(setTotalPrice(totalPrice));
  //   setShowModal(false);
  //   notifyAddShopingList();
  //   console.log(shoppingList, totalPrice);
  // };

const handleAddToShoppingList = listId => {
  const payload = { id: listId }; // Створюємо об'єкт payload з полем id
  console.log('List ID:', listId); // Вивести listId перед передачею
  console.log('Payload ID:', payload.id); // Вивести id з payload перед передачею

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
    dispatch(addToList({ id, price, quantity }));
    dispatch(setTotalPrice(totalPrice));
    setShowModal(false);
    notifyAddShopingList();
    console.log(shoppingList, totalPrice);
  };

  const isImageLink = str => {
    return /(http(s?):)([/|.|\w|\s|-])*\.(?:jpg|gif|png)/g.test(str);
  };
  return (
    <Item>
      <div>
        {favorites.includes(id) ? (
          <FavoriteButtonActive onClick={() => handleRemoveFavorites(id)} />
        ) : (
          <FavoriteButton onClick={() => handleAddFavorites(id)} />
        )}
        {isImageLink(image) ? (
          <ProductImage src={image} alt={name} />
        ) : (
          <ProductImage src={DEFAULT_URL} alt={name} />
        )}

        <TitleLinkContainer
          onMouseEnter={() => setShowTooltipDetails(true)}
          onMouseLeave={() => setShowTooltipDetails(false)}
        >
          <TitleLink
            to={`/catalog/${id}`}
            state={{ from: location }}
            onClick={handleDetailsClick}
          >
            <ProductName>
              {name} - {brand}
            </ProductName>
          </TitleLink>
          {showTooltipDetails && <TooltipDetails>Детальніше</TooltipDetails>}
        </TitleLinkContainer>
        <ProductPrice>{price} ₴</ProductPrice>
        <div
          onMouseEnter={() => setShowTooltip(true)}
          onMouseLeave={() => setShowTooltip(false)}
        >
          <ButtonAdd onClick={() => handleAddToShoppingList(id)} />
          {showTooltip && (
            <Tooltip>
              {shoppingList.some(item => item.id === id)
                ? 'Забрати з кошика'
                : 'Додати в кошик'}
            </Tooltip>
          )}
        </div>
      </div>
      <QuantityModal
        showModal={showModal}
        setShowModal={setShowModal}
        handleConfirmAddToShoppingList={handleConfirmAddToShoppingList}
        id={id}
        price={price}
      />
    </Item>
  );
};

export default ProductItem;

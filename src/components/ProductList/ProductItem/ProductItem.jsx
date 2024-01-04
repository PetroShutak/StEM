import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {
  notifyAddShopingList,
  notifyRemove,
  notifyAddToFavorite,
  notifyRemoveFromFavorite,
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
  TooltipQuantity,
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
import QuantityCounter from 'components/QuantityModal/QuantityCounter/QuantityCounter';

const ProductItem = ({ id, name, brand, price, image }) => {
  const [showModal, setShowModal] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);
  const [showTooltipDetails, setShowTooltipDetails] = useState(false);
  // const [showTooltipQuantity, setShowTooltipQuantity] = useState(false);
  const favorites = useSelector(selectFavorites);
  const shoppingList = useSelector(selectShoppingList);
  const dispatch = useDispatch();
  const location = useLocation();

  const handleDetailsClick = () => {
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
    dispatch(addToList({ id, price, quantity }));
    dispatch(setTotalPrice(totalPrice));
    setShowModal(false);
    notifyAddShopingList();
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
          <ProductImage src={image} alt={name} width="100%" height="100%" />
        ) : (
          <ProductImage
            src={DEFAULT_URL}
            alt={name}
            width="100%"
            height="100%"
          />
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
      <TooltipQuantity>
        <QuantityCounter productId={id} />
      </TooltipQuantity>

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

import React, { useState } from 'react';

import { useDispatch, useSelector } from 'react-redux';
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
  ProductDescription,
  ProductPrice,
  FavoriteButton,
  FavoriteButtonActive,
  ModalQuantity,
  ModalCloseButton,
  ModalContent,
  ModalBackdrop,
  Button,
} from './ProductItem.styled';
import {
  addToList,
  deleteFromList,
} from '../../../redux/products/shoppingListSlice';
import calculateTotalPrice from '../../../utils/calculateTotal';
import { setTotalPrice } from '../../../redux/products/shoppingListSlice';

const ProductItem = ({
  id,
  name,
  description,
  price,
  image,
  // category,
  // subcategory,
}) => {
  const [quantity, setQuantity] = useState(1);
  const [showModal, setShowModal] = useState(false);
  const favorites = useSelector(selectFavorites);
  const shoppingList = useSelector(selectShoppingList);
  const dispatch = useDispatch();
  

 const totalPrice = calculateTotalPrice(price, parseInt(quantity));

  const handleAddFavorites = favId => {
    dispatch(addFavorite(favId));
  };

  const handleRemoveFavorites = favId => {
    dispatch(deleteFavorite(favId));
  };

  const handleAddToShoppingList = listId => {
    if (shoppingList.includes(listId)) {
      dispatch(deleteFromList(listId));
    } else {
      setShowModal(true);
    }
  };

  const handleModalClose = () => {
    setShowModal(false);
  };

  const handleConfirmAddToShoppingList = listId => {
    dispatch(addToList(listId, parseInt(quantity)));
    dispatch(setTotalPrice(totalPrice)); 
    setShowModal(false);
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
        <button onClick={() => handleAddToShoppingList(id)}>
          {shoppingList.includes(id) ? 'Забрати з кошика' : 'Додати в кошик'}
        </button>
      </div>
      {showModal && (
        <ModalBackdrop>
          <ModalQuantity>
            <ModalContent>
              <h2>Вкажіть кількість</h2>
              <input
                type="number"
                value={quantity}
                onChange={e => setQuantity(e.target.value)}
              />
              <ModalCloseButton onClick={handleModalClose}>
                &times;
              </ModalCloseButton>
              <Button onClick={() => handleConfirmAddToShoppingList(id)}>
                Підтвердити
              </Button>
              <p>Загальна вартість: {totalPrice} $</p>
            </ModalContent>
          </ModalQuantity>
        </ModalBackdrop>
      )}
    </Item>
  );
};

export default ProductItem;

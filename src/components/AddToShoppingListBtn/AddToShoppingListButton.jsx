import styled from 'styled-components';
import { IoCartOutline } from 'react-icons/io5';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { notifyRemove, notifyAddShopingList } from 'utils/toasts';
import { selectShoppingList } from 'redux/products/selectors';
import {
  addToList,
  deleteFromList,
  resetTotalPrice,
  setTotalPrice,
} from 'redux/products/shoppingListSlice';
import QuantityModal from 'components/QuantityModal/QuantityModal';

export const ButtonAdd = styled(IoCartOutline)`
  position: absolute;
  bottom: 18px;
  right: 18px;
  width: 24px;
  height: 24px;
  padding: 0;
  border: none;
  color: var(--bg-secondary);
  font-size: 16px;
  font-weight: 700;
  cursor: pointer;
  transition: all 250ms ease-in-out;

  &:hover,
  &:focus {
    transform: scale(1.15);
  }
`;

export const Tooltip = styled.span`
  position: absolute;
  bottom: 44px;
  right: 0px;
  background-color: #aaa;
  color: var(--text-color-primary-black);
  padding: 5px;
  border-radius: 5px;
  font-size: 12px;
`;

const AddToShoppingListButton = ({ id, price }) => {
  const [showModal, setShowModal] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);
  const dispatch = useDispatch();
  const shoppingList = useSelector(selectShoppingList);

  const handleAddToShoppingList = () => {
    const payload = { id };

    if (shoppingList.some(item => item.id === id)) {
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

  return (
    <div
      onMouseEnter={() => setShowTooltip(true)}
      onMouseLeave={() => setShowTooltip(false)}
    >
      <ButtonAdd onClick={handleAddToShoppingList} />
      {showTooltip && (
        <Tooltip>
          {shoppingList.some(item => item.id === id)
            ? 'Забрати з кошика'
            : 'Додати в кошик'}
        </Tooltip>
      )}
      <QuantityModal
        showModal={showModal}
        setShowModal={setShowModal}
        handleConfirmAddToShoppingList={handleConfirmAddToShoppingList}
        id={id}
        price={price}
      />
    </div>
  );
};

export default AddToShoppingListButton;

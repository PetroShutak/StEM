import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import calculateTotalPrice from '../../utils/calculateTotal';
import { notifyQuantityLessThanOne } from 'utils/toasts';
import {
  ModalBackdrop,
  ModalQuantity,
  ModalContent,
  ModalCloseButton,
  QuantityInput,
  TotalPrice,
  Button,
} from './QuantityModal.styled';
import { updateQuantityInList } from 'redux/products/shoppingListSlice';

const QuantityModal = ({
  id,
  price,
  showModal,
  setShowModal,
  handleConfirmAddToShoppingList,
}) => {
  const dispatch = useDispatch();
  const [quantity, setQuantity] = useState(1);

  const updateQuantityInReduxState = newQuantity => {
    dispatch(
      updateQuantityInList({ id, changeQuantity: newQuantity - quantity })
    );
    setQuantity(newQuantity);
  };

  const handleModalClose = () => {
    setShowModal(false);
  };

  const closeModal = event => {
    if (event.target.classList.contains('backdrop')) {
      setShowModal(false);
    }
  };

  const handleQuantityChange = e => {
    const newQuantity = parseInt(e.target.value) || 0;
    if (newQuantity >= 1) {
      updateQuantityInReduxState(newQuantity);
    } else {
      setQuantity(0);
    }
  };

  const handleConfirm = () => {
    if (quantity <= 0 || isNaN(quantity)) {
      notifyQuantityLessThanOne();
      return;
    }
    handleConfirmAddToShoppingList(id, quantity, totalPrice);
    setShowModal(false);
  };

  const totalPrice = calculateTotalPrice(price, parseInt(quantity) || 0);

  return (
    showModal && (
      <ModalBackdrop onClick={closeModal} className="backdrop">
        <ModalQuantity>
          <ModalContent>
            <h2>Вкажіть кількість</h2>
            <QuantityInput
              type="number"
              value={quantity}
              onChange={handleQuantityChange}
              required
            />
            <ModalCloseButton onClick={handleModalClose}>
              &times;
            </ModalCloseButton>
            <Button onClick={handleConfirm}>Підтвердити</Button>
            <TotalPrice>Загальна вартість: {totalPrice} ₴</TotalPrice>
          </ModalContent>
        </ModalQuantity>
      </ModalBackdrop>
    )
  );
};

export default QuantityModal;

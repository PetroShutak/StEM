import React, { useState } from 'react';
import {
  ModalQuantity,
  ModalContent,
  ModalCloseButton,
  Button,
  QuantityInput,
  TotalPrice,
  ModalBackdrop,
} from './QuantityModal.styled';
import calculateTotalPrice from '../../utils/calculateTotal';
import { notifyQuantityLessThanOne } from 'utils/toasts';

const QuantityModal = ({
  showModal,
  setShowModal,
  handleConfirmAddToShoppingList,
  id,
  price,
}) => {
  const [quantity, setQuantity] = useState(1);
  const totalPrice = calculateTotalPrice(price, parseInt(quantity) || 0);

  const handleModalClose = () => {
    setShowModal(false);
  };

  const closeModal = event => {
    if (event.target.classList.contains('backdrop')) {
      setShowModal(false);
    }
  };

  const handleQuantityChange = e => {
    const value = e.target.value;
    if (value <= 0 || isNaN(value)) {
      setQuantity(0);
    } else {
      setQuantity(value);
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

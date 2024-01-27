import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import {
  resetShoppingList,
  resetTotalPrice,
} from 'redux/products/shoppingListSlice';
import styled from 'styled-components';
import { notifyOrdered, notifyOrderedError } from 'utils/toasts';

const FormWrapper = styled.div`
  //   border: 1px solid red;
  background-color: var(--bg-cart-item);
  box-shadow: var(--shadow-item);
  border-radius: 5px;
  padding: 20px;
  margin-bottom: 20px;
  h2 {
    text-align: center;
    margin-bottom: 20px;
  }
  span {
    display: block;
    text-align: center;
    margin-bottom: 20px;
  }
  form {
    display: flex;
    flex-direction: column;
    width: 300px;
    margin: 0 auto;
    padding: 20px;
  }
  label {
    display: flex;
    flex-direction: column;
    margin-bottom: 10px;
  }
  input,
  select {
    margin-top: 5px;
    padding: 5px;
    border: 1px solid var(--bg-secondary);
    border-radius: 5px;
  }
  button {
    margin-top: 10px;
    padding: 10px 20px;
    border: none;
    border-radius: 5px;
    background-color: var(--bg-secondary);
    font-family: var(--font-family-secondary);
    color: var(--text-color-primary-white);
    font-size: 16px;
    cursor: pointer;
    transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
    &:hover,
    &:focus {
      background-color: var(--bg-secondary-hover);
    }
  }
  p {
    margin-top: 120px;
    font-size: 12px;
    color: red;
  }
`;
const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

const OrderModal = styled.div`
  background-color: white;
  padding: 20px;
  border-radius: 5px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
`;

const BASE_URL = 'https://stem-server-db.onrender.com';
// const BASE_URL = 'http://localhost:8080';

const OrderForm = ({ totalPrice, shoppingList, shoppingListWithQuantity }) => {
  const [showOrderModal, setShowOrderModal] = useState(false);
  const [orderDetails, setOrderDetails] = useState(null);
  const [deliveryMethod, setDeliveryMethod] = useState('none');
  const [orderResult, setOrderResult] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useDispatch();

  const handleSubmit = async event => {
    event.preventDefault();
    setIsLoading(true);
    // Отримати дані з форми
    const formData = {
      name: event.target.name ? event.target.name.value : '',
      phone: event.target.phone ? event.target.phone.value : '',
      payment: event.target.payment ? event.target.payment.value : '',
      delivery: event.target.delivery ? event.target.delivery.value : '',
      deliveryAddress: event.target.deliveryAddress
        ? event.target.deliveryAddress.value
        : '',
      postOffice: event.target.postOffice ? event.target.postOffice.value : '',
      cartItems: shoppingListWithQuantity.map(item => ({
        name: shoppingList.find(product => product._id === item.id).name,
        price: item.price,
        quantity: item.quantity,
      })),
      totalPrice: totalPrice,
    };

    // Перевірити, чи обрані коректні значення у селектах
     if (formData.payment === 'none' || formData.delivery === 'none') {
    // Вивести сповіщення і не відправляти форму
    alert('Будь ласка, виберіть спосіб оплати та доставки');
    setIsLoading(false);
    return;
  }

    // Очистити дані форми після відправлення замовлення і очистити список покупок
    event.target.reset();
    dispatch(resetShoppingList());
    dispatch(resetTotalPrice());
    notifyOrdered();

    if (formData.delivery !== 'post') {
      delete formData.postOffice;
    }

    console.log('FormData:', formData);
    try {
      // Виконати запит на сервер
      const response = await fetch(`${BASE_URL}/api/products/order`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        // Отримати результат і встановити його в стан
        const result = await response.json();
        setOrderResult(result);
        // Показати модалку
        setShowOrderModal(true);

        setOrderDetails({
          name: formData.name,
          phone: formData.phone,
          itemCount: shoppingListWithQuantity.length,
          totalPrice: totalPrice,
        });

        setTimeout(() => {
          setShowOrderModal(false);
        }, 5000);
      } else {
        throw new Error('Failed to place order');
      }
    } catch (error) {
      notifyOrderedError();
      console.error('Error placing order:', error);
      setOrderResult({ error: 'Failed to place order' });
    } finally {
      setIsLoading(false);
    }
  };

  const handleDeliveryChange = event => {
    setDeliveryMethod(event.target.value);
  };

  return (
    <FormWrapper>
      <h2>Оформлення замовлення</h2>
      <span>Загальна сума замовлення: {totalPrice} грн</span>
      <form onSubmit={handleSubmit}>
        <label>
          Призвіще та ім'я:
          <input type="text" name="name" required />
        </label>
        <label>
          Телефон:
          <input type="tel" name="phone" required />
        </label>
        <label>
          Спосіб оплати:
          <select name="payment" required>
            <option value="none">Не вибрано</option>
            <option value="cash">Готівка</option>
            <option value="card">Карта</option>
          </select>
        </label>
        <label>
          Спосіб доставки:
          <select name="delivery" onChange={handleDeliveryChange} required>
            <option value="none">Не вибрано</option>
            <option value="courier">Кур'єр</option>
            <option value="self-pickup">Самовивіз</option>
            <option value="post">Нова Пошта</option>
          </select>
        </label>

        {deliveryMethod === 'courier' && (
          <label>
            Адреса доставки:
            <input type="text" name="deliveryAddress" required />
          </label>
        )}

        {deliveryMethod === 'post' && (
          <>
            <label>
              Адреса доставки:
              <input type="text" name="deliveryAddress" required />
            </label>
            <label>
              Відділення Нової Пошти:
              <input type="text" name="postOffice" required />
            </label>
          </>
        )}
        <button type="submit" disabled={isLoading}>
          {isLoading ? 'Відправка...' : 'Оформити замовлення'}
        </button>

        {orderResult && (
          <span style={{ color: orderResult.error ? 'red' : 'green' }}>
            {orderResult.message}
          </span>
        )}
        <span>
          *Після оформлення замовлення з вами зв'яжеться наш менеджер для
          підтвердження
        </span>
      </form>
       {showOrderModal && (
        <ModalOverlay>
          <OrderModal>
            <h3>Замовлення успішно виконано</h3>
            <p>Ім'я замовника: {orderDetails.name}</p>
            <p>Номер телефону: {orderDetails.phone}</p>
            <p>Кількість позицій: {orderDetails.itemCount}</p>
            <p>Сума замовлення: {orderDetails.totalPrice} грн</p>
          </OrderModal>
        </ModalOverlay>
      )}
    </FormWrapper>
  );
};

export default OrderForm;

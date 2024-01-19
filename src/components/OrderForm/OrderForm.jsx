import React, { useState } from 'react';
import styled from 'styled-components';

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

const OrderForm = ({ totalPrice }) => {
  const [deliveryMethod, setDeliveryMethod] = useState('none');
  const handleSubmit = event => {
    event.preventDefault();
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
        <button type="submit">Оформити замовлення</button>
        <p>
          *Після оформлення замовлення з вами зв'яжеться наш менеджер для
          підтвердження
        </p>
      </form>
    </FormWrapper>
  );
};

export default OrderForm;

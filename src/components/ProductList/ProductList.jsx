import React from 'react';
import { useState, useEffect } from 'react';
import { testFetch } from 'utils/testFetch';
import {
  ProductDescription,
  ProductImage,
  ProductItem,
  ProductListStyled,
  ProductName,
  ProductPrice,
} from './ProductList.styled';

// const fetchAndLog = async () => {
//   try {
//     const result = await testFetch();
//     console.log(result);
//   } catch (error) {
//     console.error('Помилка при отриманні відповіді з сервера:', error);
//   }
// };

// // Виклик функції для отримання та виведення даних у консоль
// fetchAndLog();

const ProductList = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const result = await testFetch();
        setProducts(result);
      } catch (error) {
        console.error('Помилка при отриманні відповіді з сервера:', error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <ProductListStyled>
      {products.map(product => (
        <ProductItem key={product.id}>
          <ProductImage src={product.image} alt={product.name} />
          <ProductName>{product.name}</ProductName>
          <ProductDescription>{product.description}</ProductDescription>
          <ProductPrice>{product.price} ₴</ProductPrice>
        </ProductItem>
      ))}
    </ProductListStyled>
  );
};

export default ProductList;

import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { selectAllProducts } from 'redux/products/selectors';
import styled from 'styled-components';

const CategoryCard = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  width: 200px;
  height: 200px;
  margin: 20px;
  background-color: var(--bg-cart-item);
  transition: box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;
  text-decoration: none;
  color: var(--text-color-primary-black);
  font-weight: 500;
  font-family: var(--font-family-secondary);
  &:hover {
    box-shadow: inset 0 0 0 2px var(--border-color-primary-grey);
  }
`;

const CategoriesPage = () => {
  const products = useSelector(selectAllProducts);

  const uniqueCategories = [
    ...new Set(products.map(product => product.category)),
  ];

  return (
    <div>
      <h1
        style={{
          fontFamily: 'var(--font-family-secondary)',
          color: 'var(--text-color-primary-black)',
        }}
      >
        Всі категорії
      </h1>
      <ul
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'space-around',
          alignItems: 'center',
        }}
      >
        {uniqueCategories.map(category => (
          <CategoryCard key={category} to={`/catalog/category/${category}`}>
            {category}
          </CategoryCard>
        ))}
      </ul>
    </div>
  );
};

export default CategoriesPage;

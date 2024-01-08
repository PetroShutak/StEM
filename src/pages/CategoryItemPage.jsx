import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectProductsByCategory } from 'redux/products/selectors';
import DEFAULT_URL from '../images/no-image.jpg';
import styled from 'styled-components';

const StyledList = styled.ul`
  list-style: none;
  padding: 0;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
  gap: 20px;
`;

const StyledListItem = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  img {
    width: 100%;
    height: auto;
    object-fit: cover;
    transition: transform 0.2s ease-in-out;
    &:hover {
      transform: scale(1.05);
    }
  }
  p {
    margin-top: 10px;
    text-align: center;
    font-size: 14px;
    font-weight: 500;
    font-family: var(--font-family-secondary);
    color: var(--text-color-primary-black);
  }
`;

const CategoryItemPageWrapper = styled.div`
  padding: 20px;
  font-size: 16px;
  font-weight: 500;
  font-family: var(--font-family-secondary);
  color: var(--text-color-primary-black);
  h2 {
    margin-bottom: 20px;
  }
`;

const CategoryItemPage = () => {
  const { category } = useParams();
  const products = useSelector(selectProductsByCategory(category));
  const navigate = useNavigate();

  const handleNavigateToProductDetails = id => () => {
    console.log('id:', id);
    navigate(`/catalog/${id}`);
  };

  const isImageLink = str => {
    return /(http(s?):)([/|.|\w|\s|-])*\.(?:jpg|gif|png)/g.test(str);
  };
  return (
    <CategoryItemPageWrapper>
      <h2>Вибрана категорія: {category}</h2>
      <StyledList>
        {products.map(product => (
          <StyledListItem key={product._id}>
            <div onClick={handleNavigateToProductDetails(product._id)}>
              <img
                src={isImageLink(product.image) ? product.image : DEFAULT_URL}
                alt={product.name}
                width="100"
                height="100"
              />
              <p>{product.name}</p>
              <p>{product.brand}</p>
              <p>{product.price} грн.</p>
            </div>
          </StyledListItem>
        ))}
      </StyledList>
    </CategoryItemPageWrapper>
  );
};

export default CategoryItemPage;

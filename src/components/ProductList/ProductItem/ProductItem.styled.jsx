import styled from 'styled-components';

export const ProductItemWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 300px;
  margin: 0 auto;
  padding: 20px;
  border: 1px solid var(--border-color-primary);
  border-radius: 4px;
  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.2);
`;

export const ProductImage = styled.img`
  width: 100%;
  margin-bottom: 20px;
`;

export const ProductName = styled.h2`
  font-size: 20px;
  font-weight: 700;
  margin-bottom: 10px;
  text-align: center;
`;

export const ProductDescription = styled.p`
  font-size: 16px;
  margin-bottom: 10px;
  text-align: center;
`;

export const ProductPrice = styled.p`
  font-size: 18px;
  font-weight: 700;
  margin-bottom: 20px;
  text-align: center;
`;

export const ProductButton = styled.button`
  width: 100%;
  padding: 10px;
  border: none;
  border-radius: 4px;
  background-color: var(--color-primary);
  color: var(--text-color-primary-white);
  font-size: 16px;
  font-weight: 700;
  cursor: pointer;
  transition: all 250ms ease-in-out;

  &:hover,
  &:focus {
    background-color: var(--color-primary-dark);
  }
`;

export const ProductFavoriteButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  width: 30px;
  height: 30px;
  padding: 0;
  border: none;
  border-radius: 50%;
  background-color: var(--color-primary);
  color: var(--text-color-primary-white);
  font-size: 16px;
  font-weight: 700;
  cursor: pointer;
  transition: all 250ms ease-in-out;

  &:hover,
  &:focus {
    background-color: var(--color-primary-dark);
  }
`;





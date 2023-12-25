import styled from 'styled-components';

export const CatalogPageWrapper = styled.div`
  padding-top: 40px;
  padding-bottom: 40px;
  display: grid;
  grid-template-columns: 1fr 4fr;
  // grid-template-rows: 1fr;

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
    // grid-template-rows: 1fr 1fr;
  }
`;

export const FilterWrapper = styled.div`
font-family: var(--font-family-secondary);
color: var(--text-color-primary-black);
border: 1px solid red;
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const ProductListWrapper = styled.div`
  border: 1px solid green;
  @media screen and (max-width: 768px) {
    border: none;
  }
`;

export const ProductListTitle = styled.h1`
  color: var(--text-color-primary-black);
  font-family: var(--font-family-secondary);
  margin-bottom: 20px;
`;

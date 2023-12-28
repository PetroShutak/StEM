import styled from 'styled-components';
import { TbFilterSearch } from 'react-icons/tb';

export const CatalogPageWrapper = styled.div`
  padding-top: 40px;
  padding-bottom: 40px;
  display: grid;
  grid-template-columns: 1fr 4fr;
  gap: 40px;
  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

export const FilterWrapper = styled.div`
  font-family: var(--font-family-secondary);
  color: var(--text-color-primary-black);
  // border: 1px solid red;
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const ProductListWrapper = styled.div`
  // border: 1px solid green;
  @media screen and (max-width: 768px) {
    border: none;
  }
`;

export const ProductListTitle = styled.h1`
  color: var(--text-color-primary-black);
  font-family: var(--font-family-secondary);
  margin-bottom: 20px;
`;

export const NoProductsMessage = styled.p`
  font-family: var(--font-family-secondary);
  color: var(--text-color-primary-black);
  text-align: center;
  font-size: 20px;
`;

export const FilterButton = styled(TbFilterSearch)`
  font-size: 30px;
  color: var(--text-color-primary-black);
  cursor: pointer;
  @media screen and (min-width: 768px) {
    display: none;
  }
`;

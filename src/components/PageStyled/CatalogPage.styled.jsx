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
`;

export const NoProductsMessage = styled.p`
  font-family: var(--font-family-secondary);
  color: var(--text-color-primary-black);
  text-align: center;
  font-size: 20px;
  margin-bottom: 20px;
`;

export const FilterButton = styled(TbFilterSearch)`
  font-size: 30px;
  padding: 0;
  color: var(--text-color-primary-black);
  cursor: pointer;
  @media screen and (min-width: 768px) {
    display: none;
  }
`;

export const FilterBtnTitleMobileContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  margin-bottom: 20px;
`;

export const ResetButton = styled.button`
  padding: 10px 20px;
  margin: 0 auto;
  display: block;
  justify-content: center;
  border: none;
  border-radius: 5px;
  background-color: var(--bg-secondary);
  color: var(--text-color-primary-white);

  &:hover {
    background-color: var(--bg-secondary-hover);
  }
`;
export const ResultTitleWRP = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  align-items: center;
  justify-content: center;
  text-align: center;
  color: var(--text-color-primary-black);
  font-family: var(--font-family-secondary);
`;

import styled from 'styled-components';

export const CatalogDropDownWrapper = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  cursor: pointer;
  p {
    font-family: var(--font-family-secondary);
    color: var(--text-color-primary-black);
    font-size: 18px;
    font-weight: 500;
    text-decoration: none;
    transition: var(--transition-default);
  }
`;

export const SelectCatalogWrapper = styled.div`
  position: absolute;
  top: 30px;
  left: 0;
  width:200px;
  text-align: start;
  background-color: rgba(255, 255, 255, 1);
  border: 1px solid var(--border-color-primary-grey);
  border-radius: 5px;
  z-index: 1;
  option {
    padding: 5px 10px;
    cursor: pointer;
    &:hover {
      background-color: var(--bg-secondary-grey);
    }
  }
`;

import styled from 'styled-components';

export const CatalogDropDownWrapper = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  cursor: pointer;
  p {
    font-family: 'Play Regular', sans-serif;
    color: #000;
    font-size: 18px;
    font-weight: 500;
    text-decoration: none;
    transition: 0.3s;
  }
`;

export const SelectCatalogWrapper = styled.div`
  position: absolute;
  top: 30px;
  left: 0;
  width:300px;
  text-align: center;
  background-color: white;
  border: 1px solid #aaa;
  border-radius: 5px;
  z-index: 1;
  option {
    padding: 5px 10px;
    cursor: pointer;
    &:hover {
      background-color: #ddd;
    }
  }
`;

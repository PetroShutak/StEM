import React from 'react';
import {
  SortSelectContainer,
  SortSelectSelect,
  SortSelectStyled,
  SortSelectWrapper,
} from './SortSelect.styled';

const SortSelect = ({ sortProductByPrice }) => {
  const handlePriceChange = e => {
    const value = e.target.value;
    if (value === '1') {
      sortProductByPrice('asc');
    } else {
      sortProductByPrice('desc');
    }
  };

  return (
    <SortSelectStyled>
      <SortSelectWrapper>
        <SortSelectContainer>
          <SortSelectSelect onChange={handlePriceChange}>
            <option value="1">від дешевших до дорожчих</option>
            <option value="2">від дорожчих до дешевших</option>
          </SortSelectSelect>
        </SortSelectContainer>
      </SortSelectWrapper>
    </SortSelectStyled>
  );
};

export default SortSelect;

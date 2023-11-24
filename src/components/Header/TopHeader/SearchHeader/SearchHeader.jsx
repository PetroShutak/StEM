import React from 'react';
import { BiSearchAlt2 } from 'react-icons/bi';
import {
  SearchHeaderWrapper,
  SearchHeaderInput,
  SearchHeaderButton,
} from './SearchHeader.styled';

const SearchHeader = () => {
  return (
    <SearchHeaderWrapper>
      <SearchHeaderInput type="text" placeholder="Пошук" />
        <SearchHeaderButton>
        <BiSearchAlt2 size={28}  />
        </SearchHeaderButton>
      
    </SearchHeaderWrapper>
  );
};

export default SearchHeader;

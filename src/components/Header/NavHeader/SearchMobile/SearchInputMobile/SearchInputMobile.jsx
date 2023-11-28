import React from 'react';
import {
  SearchMobileInputWrapper,
  Backdrop,
  SearchMobileInput,
  SearchMobileInputButton,
} from './SearchInputMobile.styled';
import { BiSearchAlt2 } from 'react-icons/bi';

const SearchInputMobile = ({ setOpen }) => {
  const submitSearch = () => {
    setOpen(false);
  };

  const handleCloseSearch = event => {
    if (event.target.classList.contains('backdrop')) {
      setOpen(false);
    }
  };
  return (
    <Backdrop className="backdrop" onClick={handleCloseSearch}>
      <SearchMobileInputWrapper>
        <SearchMobileInput type="text" autofocus placeholder="Пошук..." />
        <SearchMobileInputButton type="submit">
          <BiSearchAlt2 size={28} onClick={submitSearch} />
        </SearchMobileInputButton>
      </SearchMobileInputWrapper>
    </Backdrop>
  );
};

export default SearchInputMobile;

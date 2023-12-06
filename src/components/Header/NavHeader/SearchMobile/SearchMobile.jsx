import React from 'react';
import { useNavigate } from 'react-router-dom';
import { SearchMobileButton, SearchMobileWrapper } from './SearchMobile.styed';
import { useState } from 'react';
import { CSSTransition } from 'react-transition-group';
import SearchInputMobile from './SearchInputMobile/SearchInputMobile';

const SearchMobile = () => {
  const navigate = useNavigate();
  const [searchOpen, setSearchOpen] = useState(false);

  const toogleSearch = () => {
    setSearchOpen(!searchOpen);
  };

  const handleSearchRedirect = () => {
    navigate('/catalog');
  };
  return (
    <SearchMobileWrapper>
      <CSSTransition
        in={searchOpen}
        timeout={500}
        classNames="fade-search"
        unmountOnExit
      >
        {state => (
          <SearchInputMobile
            open={searchOpen}
            setOpen={setSearchOpen}
            onSearchRedirect={handleSearchRedirect}
            transitionState={state}
          />
        )}
      </CSSTransition>
      <SearchMobileButton onClick={toogleSearch} />
    </SearchMobileWrapper>
  );
};

export default SearchMobile;

import React from 'react';

import { SearchMobileButton, SearchMobileWrapper } from './SearchMobile.styed';
import { useState } from 'react';
import { CSSTransition } from 'react-transition-group';
import SearchInputMobile from './SearchInputMobile/SearchInputMobile';

const SearchMobile = () => {
  const [searchOpen, setSearchOpen] = useState(false);

  const toogleSearch = () => {
    setSearchOpen(!searchOpen);
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
            transitionState={state}
          />
        )}
      </CSSTransition>
      <SearchMobileButton onClick={toogleSearch} />
    </SearchMobileWrapper>
  );
};

export default SearchMobile;

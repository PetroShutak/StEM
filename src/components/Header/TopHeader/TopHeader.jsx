import React from 'react';

import Logo from 'components/Logo/Logo';
import { TopHeaderWrapper, TopHeaderContent } from './TopHeader.styled';
import Basket from './Basket/Basket';
import ContactsHeader from './ContactsHeader/ContactsHeader';
import SearchHeader from './SearchHeader/SearchHeader';

const TopHeader = () => {
  return (
    <TopHeaderWrapper>
      <TopHeaderContent>
        <Logo />
        <div>
          <ContactsHeader />
          <SearchHeader />
        </div>
        <div>Work shedule</div>
        <div>
          <Basket />
        </div>
      </TopHeaderContent>
    </TopHeaderWrapper>
  );
};

export default TopHeader;

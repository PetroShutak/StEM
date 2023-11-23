import React from 'react';

import Logo from 'components/Logo/Logo';
import {
  TopHeaderWrapper,
  TopHeaderContent,
  BurgerButton,
} from './TopHeader.styled';
import Basket from './Basket/Basket';
import ContactsHeader from './ContactsHeader/ContactsHeader';
import SearchHeader from './SearchHeader/SearchHeader';
import WorkShedule from './WorkShedule/WorkShedule';
import { BsJustifyLeft } from 'react-icons/bs';

const TopHeader = () => {
  return (
    <TopHeaderWrapper>
      <TopHeaderContent>
        <Logo />
        <div>
          <ContactsHeader />
          <SearchHeader />
        </div>
        <div>
          <WorkShedule />
        </div>
        <div>
          <Basket />
        </div>
        <BurgerButton>
          <BsJustifyLeft size={40} color="gray" />
        </BurgerButton>
      </TopHeaderContent>
    </TopHeaderWrapper>
  );
};

export default TopHeader;

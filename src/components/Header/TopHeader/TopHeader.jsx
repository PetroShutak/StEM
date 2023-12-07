import React from 'react';
import { useState } from 'react';
import { CSSTransition } from 'react-transition-group';
import Logo from 'components/Logo/Logo';
import {
  TopHeaderWrapper,
  TopHeaderContent,
  StyledBurgerButton,
} from './TopHeader.styled';
import Basket from './Basket/Basket';
import ContactsHeader from './ContactsHeader/ContactsHeader';
import SearchHeader from './SearchHeader/SearchHeader';
import WorkShedule from './WorkShedule/WorkShedule';
import { useNavigate } from 'react-router-dom';
import BurgerMenu from '../BurgerMenu/BurgerMenu';

const TopHeader = () => {
  const [burgerOpen, setBurgerOpen] = useState(false);
  const navigate = useNavigate();

  const handleSearchRedirect = () => {
    navigate('/searchresult');
  };

  const toogleBurger = () => {
    setBurgerOpen(!burgerOpen);
  };
  return (
    <TopHeaderWrapper>
      <TopHeaderContent>
        <Logo />
        <div>
          <ContactsHeader />
          <SearchHeader onSearchRedirect={handleSearchRedirect} />
        </div>
        <div>
          <WorkShedule />
        </div>
        <div>
          <Basket />
        </div>
        <CSSTransition
          in={burgerOpen}
          timeout={500}
          classNames="fade"
          unmountOnExit
        >
          {state => (
            <BurgerMenu
              open={burgerOpen}
              setOpen={setBurgerOpen}
              transitionState={state}
            />
          )}
        </CSSTransition>
        <StyledBurgerButton onClick={toogleBurger} />
      </TopHeaderContent>
    </TopHeaderWrapper>
  );
};

export default TopHeader;

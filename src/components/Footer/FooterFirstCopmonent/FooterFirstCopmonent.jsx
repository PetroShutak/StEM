import React from 'react';
import {
  FcCalculator,
  FcOnlineSupport,
  FcServices,
  FcSupport,
} from 'react-icons/fc';
import Logo from 'components/Logo/Logo';
import {
  FooterFirstCopmonentWrapper,
  IconBlock,
} from './FooterFirstCopmonent.styled';

const FooterFirstCopmonent = () => {
  return (
    <FooterFirstCopmonentWrapper>
      <Logo />
      <span>&copy; {new Date().getFullYear()} Всі права захищенні.</span>
      <IconBlock>
        <FcCalculator size={32} />
        <FcOnlineSupport size={32} />
        <FcServices size={32} />
        <FcSupport size={32} />
      </IconBlock>
    </FooterFirstCopmonentWrapper>
  );
};

export default FooterFirstCopmonent;

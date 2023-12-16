import React from 'react';
import { Link } from 'react-router-dom';
import { LogoTitle, LogoWrapper } from './Logo.styled';

const Logo = () => {
  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };
  return (
    <LogoWrapper>
      <Link to="/" onClick={scrollToTop}>
        <LogoTitle>СтЕМ</LogoTitle>
        <span>сантехніка твого міста</span>
      </Link>
    </LogoWrapper>
  );
};

export default Logo;

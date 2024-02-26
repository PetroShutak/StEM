import React from 'react';
import TopHeader from './TopHeader/TopHeader';
import NavHeader from './NavHeader/NavHeader';

const Header = () => {
  return (
    <div
      style={{
        backgroundColor: 'var(--bg-primary-white)',
      }}
    >
      <TopHeader />
      <NavHeader />
    </div>
  );
};

export default Header;

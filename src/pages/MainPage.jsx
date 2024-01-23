import BrandCarousel from 'components/BrandCarousel/BrandCarousel';
import React from 'react';

const MainPage = () => {
  return (
    <>
      <div
        style={{
          paddingTop: '40px',
          paddingBottom: '40px',
        }}
      >
        <BrandCarousel />
      </div>
    </>
  );
};

export default MainPage;

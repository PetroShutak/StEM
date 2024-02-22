// import BrandCarousel from 'components/BrandCarousel/BrandCarousel';
import TopProductsList from 'components/TopProductsList/TopProductsList';
import React from 'react';

const MainPage = () => {
  return (
    <>
      {/* <div
        style={{
          paddingTop: '40px',
          paddingBottom: '40px',
        }}
      >
        <BrandCarousel />
      </div> */}
      <div
        style={{
          paddingTop: '40px',
          paddingBottom: '40px',
          color: 'var(--text-color-primary-black)',
        }}
      >
        <h1
          style={{
            textAlign: 'center',
            fontSize: '24px',
            fontFamily: 'var(--font-family-secondary)',
            marginBottom: '20px',
          }}
        >
          Популярні товари
        </h1>
        <TopProductsList />
      </div>
    </>
  );
};

export default MainPage;

import ProductList from 'components/ProductList/ProductList';
import React from 'react';

const MainPage = () => {
  return (
    <div
      style={{
        paddingTop: '40px',
        paddingBottom: '40px',
      }}
    >
      <h1
        style={{
          color: 'var(--text-color-primary-black)',
          fontFamily: 'var(--font-family-secondary)',
          marginBottom: '20px',
        }}
      >
        Каталог товарів
      </h1>
      <ProductList />
    </div>
  );
};

export default MainPage;

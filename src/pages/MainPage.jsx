// import BrandCarousel from 'components/BrandCarousel/BrandCarousel';
import TopProductsList from 'components/TopProductsList/TopProductsList';
import React from 'react';
import hero from '../images/hero.jpg';
import styled from 'styled-components';

const HeroSection = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  padding-top: 192px;
  padding-bottom: 292px;
  position: relative;
  border-bottom: 1px solid var(--bg-secondary);
  @media (max-width: 768px) {
    padding-top: 164px;
  }

  &:before {
    content: '';
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: -1;
    background-image: linear-gradient(
        rgba(46, 47, 66, 0.7),
        rgba(46, 47, 66, 0.7)
      ),
      url(${hero});
    background-size: cover;
    background-repeat: no-repeat;
    // background-attachment: fixed;
  }
`;

const HeroButton = styled.button`
font-family: var(--font-family-secondary);
  width: 240px;
  margin: 0 auto;
  text-align: center;
  height: 40px;
  border-radius: 10px;
  border: none;
  background-color: var(--bg-secondary);
  color: var(--text-color-primary-white);
  font-size: 16px;
  font-weight: 700;
  cursor: pointer;
  transition: background-color 0.3s ease-in-out;
  &:hover {
    background-color: var(--bg-secondary-hover);
  }
`;

const HeroTitle = styled.h1`
  font-family: var(--font-family-secondary);
  color: white;
  font-size: 56px;
  font-weight: 700;
  text-align: center;
  margin-bottom: 40px;
  @media (max-width: 768px) {
    font-size: 32px;
  }
`;

const MainPage = () => {
  return (
    <>
      <div>
        <HeroSection>
          <HeroTitle>СтЕМ - вирішення твоїх проблем</HeroTitle>
          <HeroButton>Залишити заявку</HeroButton>
        </HeroSection>
      </div>
      <div
        style={{
          paddingTop: '40px',
          paddingBottom: '40px',
          color: 'white ',
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
      {/* <div>
        <BrandCarousel />
      </div> */}
    </>
  );
};

export default MainPage;

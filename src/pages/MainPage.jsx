import BrandCarousel from 'components/BrandCarousel/BrandCarousel';
import TopProductsList from 'components/TopProductsList/TopProductsList';
import React from 'react';
import hero from '../images/hero.jpg';
import styled from 'styled-components';

const HeroSection = styled.div`
  background-image: linear-gradient(
      rgba(46, 47, 66, 0.7),
      rgba(46, 47, 66, 0.7)
    ),
    url(${hero});
  background-size: cover;
  background-attachment: fixed;
  background-repeat: no-repeat;
  height: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  padding-top: 192px;
  padding-bottom: 192px;
  @media (max-width: 768px) {
    padding-top: 164px;
  }
`;

const HeroButton = styled.button`
  width: 280px;
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
  font-size: 48px;
  font-weight: 700;
  text-align: center;
  margin-bottom: 20px;
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
      <div>
        <BrandCarousel />
      </div>
    </>
  );
};

export default MainPage;

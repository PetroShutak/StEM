import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const AboutPageStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  margin-top: 20px;
  margin-bottom: 20px;
  color: var(--text-color-primary-black);
  font-size: 16px;
  font-family: var(--font-family-secondary);
  line-height: 1.65;
  text-align: center;
  background-color: var(--background-color-primary-white);
  border-radius: 5px;
  box-shadow: var(--shadow-item);

  @media screen and (min-width: 768px) {
    font-size: 18px;
  }
`;

export const AboutPageTitle = styled.h1`
  margin-bottom: 20px;
  font-size: 20px;
  text-transform: uppercase;
  font-weight: 700;
`;
export const AboutPageText = styled.p`
  margin-bottom: 20px;
  font-size: 22px;
  text-align: justify;
`;
export const AboutPageLink = styled(Link)`
  color: var(--text-color-primary-orange);
  text-decoration: none;
  font-weight: 700;
`;

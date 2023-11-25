import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const NotFoundContainer = styled.div`
font-family: var(--font-family-secondary);
  display: flex;
  flex-direction: column;
  gap: 16px;

  align-items: center;
  justify-content: center;
  height: 100vh;
  text-align: center;
`;

export const NotFoundHeading = styled.h1`
  font-size: 32px;
  color: var(--text-color-primary-black);
`;

export const NotFoundText = styled.p`
  font-size: 18px;
  color: var(--text-color-secondary-grey);
`;

export const NotFoundLink = styled(Link)`
  font-size: 16px;
  color: var(--text-color-primary-orange);
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;
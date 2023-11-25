import styled from 'styled-components';

export const LogoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  max-width: 200px;
  span {
    font-family: var(--font-family-secondary);
    font-size: 12px;
    font-weight: 400;
    color: var(--text-color-secondary-grey);
  }
`;

export const LogoTitle = styled.h1`
  font-family: var(--font-bold);
  color: var(--text-color-primary-black);
  font-size: 44px;
  font-weight: 700;
  text-decoration: none;
  transition: var(--transition-default);
  &:hover {
    color: var(--bg-secondary);
  }
  a {
    text-decoration: none;
  }
`;

import styled from 'styled-components';
import { BsJustifyRight } from 'react-icons/bs';

export const TopHeaderWrapper = styled.div`
  background-color: var(--bg-primary);
  border-bottom: 1px solid var(--border-color-secondary);
`;

export const TopHeaderContent = styled.div`
  display: flex;
  padding: 12px 12px;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: 1280px;
  margin: 0 auto;
  @media screen and (min-width: 1440px) {
    max-width: 1400px;
  }
`;

export const StyledBurgerButton = styled(BsJustifyRight)`
  cursor: pointer;
  font-size: 40px;
  color: var(--text-color-primary-black);
  display: none;
  @media screen and (max-width: 1024px) {
    display: block;
  }
`;

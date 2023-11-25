import styled from 'styled-components';
import { BsJustifyRight } from 'react-icons/bs';

export const TopHeaderWrapper = styled.div`
  background-color: var(--bg-primary);
  border-bottom: 1px solid var(--border-color-secondary);
`;

export const TopHeaderContent = styled.div`
  display: flex;
  padding: 16px 20px;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
`;

export const StyledBurgerButton = styled(BsJustifyRight)`
  cursor: pointer;
  font-size: 40px;
  color: var(--text-color-secondary-grey);
  display: none;
  @media screen and (max-width: 768px) {
    display: block;
  }
`;

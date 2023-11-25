import styled from 'styled-components';
import { BsJustifyRight } from 'react-icons/bs';

export const TopHeaderWrapper = styled.div`
  background-color: var(--bg-primary);
  border-bottom: 1px solid #e0e0e0;
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
  color: #aaa;
  display: none;
  @media screen and (max-width: 768px) {
    display: block;
  }
`;

import styled from 'styled-components';

export const ButtonToBasketWrapper = styled.div`
  position: relative;
  display: flex;
  gap: 10px;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
  svg {
    color: var(--text-color-secondary-grey);
    transition: var(--transition-default);
  }

  a {
    transition: var(--transition-default);
    &:hover {
      svg {
        color: var(--text-color-primary-orange);
      }
    }
  }
  @media screen and (min-width: 769px) {
    display: none;
  }
`;
export const Counter = styled.p`
  position: absolute;
  top: 0;
  right: -7px;
  font-size: 10px;
  color: white;
  font-weight: bold;
  background-color: var(--text-color-primary-orange);
  border-radius: 50%;
  width: 15px;
  height: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

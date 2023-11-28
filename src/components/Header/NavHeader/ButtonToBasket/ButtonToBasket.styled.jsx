import styled from 'styled-components';

export const ButtonToBasketWrapper = styled.div`
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

import styled from 'styled-components';

export const NavBarHeaderWrapper = styled.div`
  display: flex;
  gap: 20px;
  align-items: center;

  a {
    font-family: var(--font-family-secondary);
    color: var(--text-color-primary-black);
    font-size: 16px;
    font-weight: 500;
    text-decoration: none;
    transition: var(--transition-default);

    &:hover {
      color: var(--text-color-primary-orange);
    }
    &.active {
      color: var(--text-color-primary-orange);
    }
  }
  @media (max-width: 768px) {
    display: none;
  }
`;


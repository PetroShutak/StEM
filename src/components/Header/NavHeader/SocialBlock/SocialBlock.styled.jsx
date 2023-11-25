import styled from 'styled-components';

export const SocialBlockWrapper = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
  justify-content: space-between;
  max-width: 180px;
  cursor: pointer;
  svg {
    color: var(--text-color-secondary-grey);
    transition: var(--transition-default);
  }

  a {
    color: var(--text-color-secondary-black);
    font-size: 20px;
    transition: var(--transition-default);
    &:hover {
      svg {
        color: var(--text-color-primary-orange);
      }
    }
  }
  @media (max-width: 768px) {
    display: none;
  }
`;

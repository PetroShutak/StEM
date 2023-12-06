import styled from 'styled-components';

export const ThemeToggleContainer = styled.div`
  display: flex;
  gap: 8px;
  align-items: center;
  span {
    font-family: var(--font-family-secondary);
    font-size: 12px;
    color: var(--text-color-primary-black);
  }
`;

export const ThemeToggleIcon = styled.div`
  cursor: pointer;
  font-size: 1.5rem;
  transition: all 0.3s linear;
`;

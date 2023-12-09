import styled from 'styled-components';

export const NavHeaderWrapper = styled.div`
  background-color: var(--bg-primary);
  border-bottom: 1px solid var(--border-color-secondary);
`;

export const NavHeaderContent = styled.div`
  display: flex;
  padding: 16px 20px;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  @media screen and (min-width: 1440px) {
    max-width: 1400px;
  }
`;
import styled from 'styled-components';

export const FooterWrapper = styled.div`
  padding-top: 60px;
  padding-bottom: 60px;
  background-color: var(--bg-primary);
  border-bottom: 1px solid var(--border-color-secondary);
  border-top: 1px solid var(--border-color-secondary);
`;

export const FooterContent = styled.div`
  color: var(--text-color-primary-black); // потім змінити
  font-family: var(--font-family-secondary); // потім змінити
  font-weight: 500; // потім змінити
  display: flex;
  justify-content: space-between;
  align-items: start;
  gap: 40px;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  @media screen and (min-width: 1440px) {
    max-width: 1400px;
  }

   a {
    color: var(--text-color-primary-black);
    transition: color 0.3s ease-in-out;
    &:hover {
        color: var(--text-color-primary-orange);
    }

    @media screen and (max-width: 768px) {
        flex-direction: column;
        align-items: center;
    }
`;

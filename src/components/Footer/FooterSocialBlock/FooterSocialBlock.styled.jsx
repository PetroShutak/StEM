import styled from 'styled-components';

export const FooterSocialBlockWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  h3 {
    font-size: 18px;
    font-weight: 700;
    line-height: 1.2;
    margin: 0;
    @media screen and (max-width: 768px) {
      font-size: 16px;
    }
  }
  div {
    display: flex;
    gap: 20px;
    a {
      color: var(--text-color-primary-black);
      transition: color 0.3s ease-in-out;
      &:hover {
        color: var(--text-color-primary-orange);
      }
    }
  }
  @media screen and (max-width: 768px) {
    justify-content: space-between;
    align-items: center;
    margin: 0 auto;
    text-align: center;
  }
`;

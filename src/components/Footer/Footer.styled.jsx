import styled from 'styled-components';

export const FooterWrapper = styled.div`
  padding-top: 60px;
  padding-bottom: 60px;
  padding-left: 12px;
  padding-right: 12px;
  background-color: var(--bg-primary-white);
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
  flex-wrap: wrap;
  gap: 40px;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  // @media screen and (min-width: 1024px) {
  //   max-width: 960px; 
  // }
  @media screen and (min-width: 1440px) {
    max-width: 1400px;
  }
  @media screen and (max-width: 768px) {
    flex-direction: column;
    gap: 20px;
  }
`;

export const SocialSubscribeWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  @media screen and (max-width: 1024px) {
    flex-direction: column; /* Змінено для ширини від 768 до 1024 пікселів */
    gap: 20px;
    text-align: center;
    margin: 0 auto;
  }
  @media screen and (max-width: 768px) {
    flex-direction: column;
    gap: 20px;
    text-align: center;
    margin: 0 auto;
  }
`;

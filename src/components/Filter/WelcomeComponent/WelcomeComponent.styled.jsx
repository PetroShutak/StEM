import styled from 'styled-components';

export const WelcomeContainer = styled.div`
  font-family: var(--font-family-secondary);
  color: var(--text-color-primary-black);
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 30px 10px;
  border: 1px solid var(--bg-secondary);
  border-radius: 8px;
  margin-bottom: 20px;
  // @media screen and (max-width: 767px) {
  //   display: none;
  // }
`;

export const WelcomeHeader = styled.h2`
  font-size: 24px;
  font-weight: 700;
  margin-bottom: 10px;
`;
export const WelcomeText = styled.p`
  font-size: 16px;
  padding: 0 20px;
  text-align: center;
  line-height: 1.5;
  font-weight: 400;
  margin-bottom: 20px;
`;
export const WelcomeButton = styled.button`
  padding: 10px 20px;
  border: none;
  border-radius: 8px;
  background-color: var(--bg-secondary);
  color: white;
  font-size: 16px;
  font-weight: 500;
  cursor: pointer;
  &:hover {
    background-color: var(--bg-secondary-hover);
  }
`;

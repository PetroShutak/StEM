import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  // outline: 2px solid tomato;
  background-color: var(--text-color-primary-white);
  img {
    border-radius: 12px;
    margin-bottom: 25px;
  }
  margin-left: auto;
  margin-right: auto;
  max-width: 100%;

  @media screen and (min-width: 480px) {
    max-width: 480px;
  }

  @media screen and (min-width: 768px) {
    max-width: 768px;
  }

  @media screen and (min-width: 1200px) {
    max-width: 1200px;
  }
`;

export const Text = styled.p`
  font-family: var(--font-family-secondary);
  margin-bottom: 25px;
  color: var(--text-color-primary-black);
  text-align: center;
  font-size: 14px;

  @media screen and (min-width: 768px) {
    font-size: 16px;
  }
`;

export const Button = styled.button`
  font-family: var(--font-family-secondary);
  width: 270px;
  height: 44px;
  margin-bottom: 50px;
  border: 0.5px solid var(--bg-secondary);
  border-radius: 12px;
  background-color: var(--bg-secondary);
  color: var(--text-color-primary-black);
  font-size: 14px;
  font-weight: 600;
  line-height: 1.43;
  cursor: pointer;
  transition: background-color var(--transition-default);
    &:hover,
    &:focus {
        background-color: var(--bg-secondary-hover);
`;

import styled from 'styled-components';

export const BasketWrapper = styled.div`
  a {
    color: var(--text-color-primary-black);
    text-decoration: none;
  }
  a:hover {
    text-decoration: underline;
  }
 
  @media (max-width: 768px) {
    display: none;
  }
`;

export const BasketContainer = styled.div`
  display: flex;
  gap: 20px;
  align-items: center;
  justify-content: center;
  text-align: center;

  svg {
    color: var(--text-color-secondary-grey);
    transition: 0.3s;
    &:hover {
      color: var(--text-color-primary-orange);
    }
  }
  
`;

export const Counter = styled.p`
  position: absolute;
  top: 0;
  right: -7px;
  font-size: 10px;
  color: white;
  font-weight: bold;
  background-color: var(--text-color-primary-orange);
  border-radius: 50%;
  width: 15px;
  height: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const BasketTitle = styled.p`
  font-family: var(--font-bold);
  font-size: 16px;
  @media (max-width: 1024px) {
    display: none;
  }
`;

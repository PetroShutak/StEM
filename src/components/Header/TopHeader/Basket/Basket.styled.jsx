import styled from 'styled-components';

export const BasketWrapper = styled.div`
  a {
    color: black;
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
    color: #000;
    transition: 0.3s;
    &:hover {
      color: #ff6b09;
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
  background-color: gray;
  border-radius: 50%;
  width: 15px;
  height: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
  // transition: 0.3s;
  // &:hover {
  //   background-color: #ff6b09;
  // }
`;

export const BasketTitle = styled.p`
  font-family: 'Barlow Bold', sans-serif;
  font-size: 18px;
  font-weight: bold;
`;

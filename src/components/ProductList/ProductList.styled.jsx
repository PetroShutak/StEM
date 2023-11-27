import styled from 'styled-components';

export const ProductListStyled = styled.div`
  display: flex;
  gap: 20px;
  flex-wrap: wrap;
  justify-content: space-between;
  margin: 0 auto;
  padding: 15px;
  width: 100%;
  border-radius: 10px;
  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.75);
`;

export const ProductItem = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 300px;
  margin-bottom: 20px;
  padding: 20px;
  border-radius: 10px;
  background-color: #fff;
  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.75);
  cursor: pointer;
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
  &:hover {
    transform: translateY(-10px);
    box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.75);
  }
  @media screen and (max-width: 768px) {
    width: 100%;
  }
`;

export const ProductImage = styled.img`
  width: 100%;
  height: 300px;
  object-fit: cover;
  border-radius: 10px;
  border: 0.5px solid #000;
`;
export const ProductName = styled.h3`
  margin-bottom: 15px;
  font-size: 20px;
  font-weight: 700;
  text-align: center;
`;

export const ProductDescription = styled.p`
  margin-bottom: 15px;
  font-size: 16px;
  font-weight: 400;
  text-align: center;
`;

export const ProductPrice = styled.p`
  font-size: 16px;
  font-weight: 400;
  text-align: center;
`;

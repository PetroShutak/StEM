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

export const List = styled.div`
  display: flex;
  flex-wrap: wrap;
  row-gap: 50px;
  column-gap: 29px;
  padding-top: 50px;
  padding-bottom: 50px;

  @media screen and (min-width: 768px) {
    padding-bottom: 100px;
  }
`;

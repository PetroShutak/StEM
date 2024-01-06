import styled from 'styled-components';

export const ProductListStyled = styled.div`
  background-color: inherit;
`;

export const List = styled.div`
  display: flex;
  gap: 12px;
  flex-wrap: wrap;
  justify-content: space-between;
  margin: 0 auto;
  padding: 15px;
  @media screen and (min-width: 768px) {
    margin: 0 auto;
    // padding-bottom: 100px;
  }
`;

import styled from 'styled-components';

export const ButtonToFavoriteWrapper = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
  svg {
    color: #aaa;
    transition: all 0.3s ease-in-out;
  }

  a {
    transition: all 0.3s ease-in-out;
    &:hover {
      svg {
        color: #ff6b09;
      }
    }
  }
`;

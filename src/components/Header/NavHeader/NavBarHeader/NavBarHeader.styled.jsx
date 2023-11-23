import styled from 'styled-components';

export const NavBarHeaderWrapper = styled.div`
  display: flex;
  gap: 20px;
  align-items: center;

  a {
    font-family: 'Play Regular', sans-serif;
    color: #000;
    font-size: 16px;
    font-weight: 500;
    text-decoration: none;
    transition: 0.3s;

    &:hover {
      color: #ff6b09;
    }
  }
  @media (max-width: 768px) {
    display: none;
  }
`;

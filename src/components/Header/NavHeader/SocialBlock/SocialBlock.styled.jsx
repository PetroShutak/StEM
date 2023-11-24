import styled from 'styled-components';

export const SocialBlockWrapper = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
  justify-content: space-between;
  max-width: 180px;
  cursor: pointer;
  svg {
    color: #aaa;
    transition: all 0.3s ease-in-out;
  }

  a {
    color: #000;
    font-size: 20px;
    transition: all 0.3s ease-in-out;
    &:hover {
      svg {
        color: #ff6b09;
      }
    }
  }
  @media (max-width: 768px) {
    display: none;
  }
`;

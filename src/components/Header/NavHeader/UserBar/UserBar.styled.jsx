import styled from 'styled-components';

export const UserBarWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 160px;
  cursor: pointer;
  svg {
    color: #aaa;
    transition: all 0.3s ease-in-out;
    &:hover {
      color: #ff6b09;
    }
  }
`;

export const SelectWrapper = styled.div`
  position: absolute;
  font-family: 'Play Regular', sans-serif;
  font-size: 16px;
  top: 30px;
  right: 0;
  width: 100%;
  text-align: end;
  background-color: white;
  border: 1px solid #aaa;
  border-radius: 5px;
  z-index: 1;
  option {
    padding: 5px 10px;
    cursor: pointer;
    text-align: center;
    &:hover {
      background-color: #ddd;
    }
  }
`;

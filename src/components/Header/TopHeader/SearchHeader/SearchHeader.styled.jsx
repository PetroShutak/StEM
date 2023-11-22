import styled from 'styled-components';

export const SearchHeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: 1px solid #e0e0e0;
  border-radius: 10px;
  width: 400px;
  height: 40px;
  position: relative;
`;

export const SearchHeaderInput = styled.input`
  padding-left: 10px;
  border: none;
  outline: none;
  width: 100%;
  height: 100%;
  font-size: 14px;
  font-family: 'Barlow', sans-serif;
  &:focus {
    border: none;
    outline: none;
    box-shadow: inset 0px 0px 5px 0px #e0e0e0;
  }
`;

export const SearchHeaderButton = styled.button`
  position: absolute;
  right: 0;
  top: 5px;
  border: none;
  outline: none;
  background-color: white;
  cursor: pointer;
  padding: 0px 5px;
`;

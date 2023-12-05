import styled from 'styled-components';

export const SearchHeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: 1px solid var(--border-color-secondary);
  width: 600px;
  border-radius: 10px;
  height: 40px;
  position: relative;
  flex: 1;
  @media (max-width: 768px) {
    display: none;
  }
`;

export const SearchHeaderForm = styled.form`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 100%;
`;




export const SearchHeaderInput = styled.input`
  padding-left: 16px;
  border: none;
  outline: none;
  border-radius: 10px;
  width: 100%;
  height: 100%;
  font-size: 14px;
  font-family: var(--font-family-primary);
  color: #000;
  &:focus {
    border: 0.5px solid var(--border-color-primary-grey);
    outline: none;
    box-shadow: inset 0px 0px 10px 0px rgba(0, 0, 0, 0.2);
  }

  &::placeholder {
    color: black;
    font-family: var(--font-family-primary);
    font-size: 14px;
    font-weight: 400;
  }
`;

export const SearchHeaderButton = styled.button`
  position: absolute;
  right: 5px;
  top: 5px;
  border: none;
  outline: none;
  background-color: transparent;
  cursor: pointer;
  transition: 0.5s;
  padding: 0;
  svg {
    transition: 0.5s;
  }
  &:hover {
    svg {
      color: var(--text-color-primary-orange);
    }
  }
`;

export const SearchResultList = styled.ul`
  position: absolute;
  top: 40px;
  left: 0;
  width: 100%;
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.2);
  z-index: 100;
`;

export const SearchResultItem = styled.li`
  padding: 10px;
  font-size: 14px;
  font-family: var(--font-family-primary);
  color: var(--text-color-primary-grey);
  cursor: pointer;
  transition: 0.5s;
  &:hover {
    background-color: var(--text-color-primary-orange);
    color: #fff;
  }
`;


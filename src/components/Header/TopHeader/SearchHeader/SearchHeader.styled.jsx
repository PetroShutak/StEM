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
    color: #aaa;
    font-family: var(--font-family-primary);
    font-size: 14px;
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

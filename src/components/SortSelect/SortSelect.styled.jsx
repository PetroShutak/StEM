import styled from 'styled-components';

export const SortSelectStyled = styled.div`
  p {
    font-size: 16px;
    margin-bottom: 5px;
  }
  select {
    width: 100%;
    height: 40px;
    border: 1px solid var(--bg-secondary);
    border-radius: 5px;
    padding-left: 10px;
    font-size: 14px;
    color: #333;
    outline: none;
  }
`;

export const SortSelectWrapper = styled.div`
  width: 100%;
  margin-bottom: 20px;
  @media (min-width: 768px) {
    width: 250px;
    margin-bottom: 0;
    margin-left: auto;
  }
`;

export const SortSelectContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 20px;
  @media (min-width: 768px) {
    margin-bottom: 0;
  }
`;

export const SortSelectSelect = styled.select`
  width: 100%;
  height: 40px;
  border: 1px solid var(--bg-secondary);
  border-radius: 5px;
  padding-left: 10px;
  font-size: 14px;
  color: #333;
  outline: none;
  option {
    padding: 5px 10px;
    cursor: pointer;
    &:hover {
      background-color: var(--bg-secondary);
    }
    &:checked {
      background-color: var(--bg-secondary);
    }
  }
  @media (min-width: 768px) {
    width: 200px;
  }
`;

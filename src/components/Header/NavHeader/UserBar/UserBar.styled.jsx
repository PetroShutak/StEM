import styled from 'styled-components';

export const UserBarWrapper = styled.div`
  font-family: var(--font-family-secondary);
  p {
    color: var(--text-color-primary-black);
  }
  font-size: 16px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 160px;
  cursor: pointer;
  svg {
    color: var(--text-color-secondary-grey);
    transition: var(--transition-default);
    &:hover {
      color: var(--text-color-primary-orange);
    }
  }
`;

export const SelectWrapper = styled.div`
  position: absolute;
  font-family: var(--font-family-secondary);
  font-size: 16px;
  top: 30px;
  right: 0;
  width: 100%;
  text-align: end;
  background-color: rgba(255, 255, 255, 1);
  border: 1px solid var(--border-color-primary-grey);
  border-radius: 5px;
  z-index: 1;
  option {
    padding: 5px 10px;
    cursor: pointer;
    text-align: center;
    &:hover {
      background-color: var(--bg-secondary-grey);
    }
  }
`;

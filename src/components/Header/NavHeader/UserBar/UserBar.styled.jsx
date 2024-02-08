import styled from 'styled-components';

export const UserBarWrapper = styled.div`
  font-family: var(--font-family-secondary);
  p {
    color: var(--text-color-primary-black);
    // margin-left: 10px;
    font-size: 16px;
  }
  font-size: 16px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 200px;
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
  text-align: end;
  background-color: rgba(255, 255, 255, 1);
  border: 1px solid var(--border-color-primary-grey);
  border-radius: 5px;
  z-index: 100;
  div {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 8px;
    &:hover {
      background-color: var(--bg-secondary-grey);
    }
    svg {
      margin-right: 8px;
    }

    span {
      cursor: pointer;
      a {
        text-decoration: none;
        color: inherit;
        display: flex;
        align-items: center;
        justify-content: space-between;
      }
    }
  }
`;

export const UserMenuWrapper = styled.div`
  p {
    color: var(--text-color-primary-black);
    margin-left: 10px;
    font-size: 16px;
  }
  font-size: 16px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  @media (max-width: 768px) {
    display: none;
  }
`;

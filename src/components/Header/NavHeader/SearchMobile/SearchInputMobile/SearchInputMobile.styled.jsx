import styled from 'styled-components';

export const SearchMobileInputWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  background-color: #fff;
  z-index: 100;
  box-shadow: inset 0 0 10px rgba(0, 0, 0, 0.3);
  border-bottom: 2px solid #aaa;
  transition: transform 0.3s ease-in-out;
`;

export const SearchMobileInput = styled.input`
  border: none;
  outline: none;
  width: 100%;
  padding: 1rem 2rem;
  font-size: 1.5rem;
  font-family: inherit;
  font-weight: 400;
  color: #000;
  &::placeholder {
    color: #aaa;
  }
`;

export const SearchMobileInputButton = styled.button`
  position: absolute;
  top: 50%;
  right: 2rem;
  transform: translateY(-50%);
  border: none;
  outline: none;
  background-color: transparent;
  cursor: pointer;
`;

export const Backdrop = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  backdrop-filter: blur(3px);
  z-index: 100;
  background-color: rgba(0, 0, 0, 0.5);
`;
export const SearchResultList = styled.ul`
  position: absolute;
  top: 55px;
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
